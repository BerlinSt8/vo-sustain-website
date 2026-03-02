import { FirecrawlClient } from "@mendable/firecrawl-js";
import type { FoerderdatenbankResult } from "./types";

let _firecrawl: FirecrawlClient | null = null;
function getFirecrawl() {
  if (!_firecrawl) {
    _firecrawl = new FirecrawlClient({
      apiKey: process.env.FIRECRAWL_API_KEY!,
    });
  }
  return _firecrawl;
}

// Bundesland → Förderdatenbank.de Foerdergebiet-Param
const BUNDESLAND_MAP: Record<string, string> = {
  "Baden-Württemberg": "Baden-W%C3%BCrttemberg",
  Bayern: "Bayern",
  Berlin: "Berlin",
  Brandenburg: "Brandenburg",
  Bremen: "Bremen",
  Hamburg: "Hamburg",
  Hessen: "Hessen",
  "Mecklenburg-Vorpommern": "Mecklenburg-Vorpommern",
  Niedersachsen: "Niedersachsen",
  "Nordrhein-Westfalen": "Nordrhein-Westfalen",
  "Rheinland-Pfalz": "Rheinland-Pfalz",
  Saarland: "Saarland",
  Sachsen: "Sachsen",
  "Sachsen-Anhalt": "Sachsen-Anhalt",
  "Schleswig-Holstein": "Schleswig-Holstein",
  Thüringen: "Th%C3%BCringen",
};

/**
 * Baut die Such-URL für foerderdatenbank.de
 */
export function buildSearchUrl(bundesland: string): string {
  const param = BUNDESLAND_MAP[bundesland] ?? bundesland;
  return (
    `https://www.foerderdatenbank.de/FDB/Content/DE/Foerderprogramm/Suche/Formular.html` +
    `?cl2Processes_Foerdergebiet=${param}` +
    `&submit=Suchen` +
    `&filterCategories=FundingProgram`
  );
}

/**
 * Scrapt foerderdatenbank.de nach Bundesland und parst die Ergebnisse
 */
export async function searchFoerderdatenbank(
  bundesland: string
): Promise<{ results: FoerderdatenbankResult[]; searchUrl: string }> {
  const searchUrl = buildSearchUrl(bundesland);

  try {
    const scrapeResult = await getFirecrawl().scrape(searchUrl, {
      formats: ["markdown"],
      onlyMainContent: true,
      waitFor: 3000,
    });

    if (!scrapeResult.markdown) {
      return { results: [], searchUrl };
    }

    const results = parseResults(scrapeResult.markdown);
    return { results, searchUrl };
  } catch (err) {
    console.error("Förderdatenbank scrape error:", err);
    return { results: [], searchUrl };
  }
}

/**
 * Parst den Markdown-Output der Förderdatenbank in strukturierte Ergebnisse
 */
function parseResults(markdown: string): FoerderdatenbankResult[] {
  const results: FoerderdatenbankResult[] = [];

  // Förderdatenbank listet Programme als Links mit Beschreibung
  // Format: ### [Programmname](url)\nBeschreibung\nFördergeber: ...
  const programBlocks = markdown.split(/(?=###\s)/);

  for (const block of programBlocks) {
    const nameMatch = block.match(/###\s*\[([^\]]+)\]\(([^)]+)\)/);
    if (!nameMatch) continue;

    const name = nameMatch[1].trim();
    const url = nameMatch[2].startsWith("http")
      ? nameMatch[2]
      : `https://www.foerderdatenbank.de${nameMatch[2]}`;

    // Fördergeber extrahieren
    const authorityMatch = block.match(
      /(?:Fördergeber|Fördergebiet|Bund|Land)[:\s]*([^\n]+)/i
    );
    const authority = authorityMatch?.[1]?.trim() ?? "";

    // Kurzbeschreibung: erste Textzeile nach dem Titel
    const lines = block
      .split("\n")
      .filter((l) => l.trim() && !l.startsWith("###"));
    const description = lines[0]?.trim() ?? "";

    results.push({ name, authority, description, url });
  }

  return results.slice(0, 20); // Max 20 Ergebnisse
}
