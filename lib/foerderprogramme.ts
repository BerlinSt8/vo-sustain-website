import foerderprogramme from "@/data/foerderprogramme.json";

export interface Foerderprogramm {
  id: string;
  name: string;
  authority: string;
  level: "bund" | "land" | "eu";
  state: string | null;
  focus: string[];
  target: string;
  fundingType: "Zuschuss" | "Darlehen" | "Zuschuss + Darlehen" | "Beteiligung";
  aidIntensity: string;
  maxAmount: string | null;
  minInvestment: string | null;
  sourceUrl: string;
  confidence: "Verifiziert" | "Bitte prüfen";
  notes: string | null;
}

const programme: Foerderprogramm[] = foerderprogramme as Foerderprogramm[];

/** Alle Programme laden */
export function getAllProgramme(): Foerderprogramm[] {
  return programme;
}

/** Programme nach Bundesland filtern (inkl. Bund + EU) */
export function getProgrammeByState(bundesland: string): Foerderprogramm[] {
  const bl = bundesland.toLowerCase();
  return programme.filter(
    (p) =>
      p.level === "bund" ||
      p.level === "eu" ||
      (p.state && p.state.toLowerCase() === bl)
  );
}

/** Programme nach Fokus-Themen filtern */
export function getProgrammeByFocus(themen: string[]): Foerderprogramm[] {
  const lower = themen.map((t) => t.toLowerCase());
  return programme.filter((p) =>
    p.focus.some((f) => lower.some((t) => f.toLowerCase().includes(t)))
  );
}

/** Programme für einen QuickCheck filtern (Bundesland + Themen) */
export function getProgrammeForQuickCheck(
  bundesland: string,
  themen: string[]
): Foerderprogramm[] {
  const byState = getProgrammeByState(bundesland);
  if (themen.length === 0) return byState;

  const lower = themen.map((t) => t.toLowerCase());
  return byState.filter((p) =>
    p.focus.some((f) => lower.some((t) => f.toLowerCase().includes(t)))
  );
}

/** Programme als kompakten Text für den KI-Prompt formatieren */
export function formatProgrammeForPrompt(programme: Foerderprogramm[]): string {
  return programme
    .map(
      (p) =>
        `- **${p.name}** (${p.authority}): ${p.fundingType}, ${p.aidIntensity}. ` +
        `Fokus: ${p.focus.join(", ")}. ` +
        `Zielgruppe: ${p.target}. ` +
        (p.maxAmount ? `Max: ${p.maxAmount}. ` : "") +
        (p.minInvestment ? `Min-Invest: ${p.minInvestment}. ` : "") +
        (p.notes ? `${p.notes}. ` : "") +
        `Quelle: ${p.sourceUrl}`
    )
    .join("\n");
}
