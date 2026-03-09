import { NextRequest, NextResponse } from "next/server";
import type { FoerderlotseResult, FoerderlotseResponse } from "@/lib/types";
import data from "@/data/foerderlotse-wachstumsmaerkte.json";

const ALL: FoerderlotseResult[] = data as FoerderlotseResult[];

/**
 * POST /api/foerderlotse
 * Sucht passende Förderlotse-Wachstumsmärkte-Programme (Auslandsförderung).
 * Body: { branche?: string, projektkategorien?: string[] }
 */
export async function POST(req: NextRequest) {
  try {
    const { branche = "", projektkategorien = [] } = (await req.json()) as {
      branche?: string;
      projektkategorien?: string[];
    };

    // Keywords aus Branche + Projektkategorien
    const keywords = [branche, ...projektkategorien]
      .join(" ")
      .toLowerCase()
      .split(/[\s,/]+/)
      .filter((w) => w.length > 3);

    // Score: Treffer von Keywords in Titel/Beschreibung, Bonus für Förderangebot/Beratungsangebot
    const scored = ALL.map((p) => {
      const haystack = `${p.title} ${p.description} ${p.institution}`.toLowerCase();
      const keywordScore = keywords.filter((kw) => haystack.includes(kw)).length;
      const rubricBonus = p.rubric === "funding" ? 3 : p.rubric === "advice" ? 2 : 1;
      return { p, score: keywordScore * rubricBonus + rubricBonus };
    });

    // Sortieren, deduplizieren nach Institution, top 8 nehmen
    const seen = new Set<string>();
    const results = scored
      .sort((a, b) => b.score - a.score)
      .filter(({ p }) => {
        const key = p.institution;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      })
      .slice(0, 8)
      .map(({ p }) => p);

    return NextResponse.json({ results } satisfies FoerderlotseResponse);
  } catch (err) {
    console.error("Förderlotse API error:", err);
    return NextResponse.json(
      { results: [], error: "Förderlotse-Abfrage fehlgeschlagen" } satisfies FoerderlotseResponse,
      { status: 500 }
    );
  }
}
