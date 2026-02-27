import { NextRequest, NextResponse } from "next/server";
import { runQuickCheck } from "@/lib/claude";
import type { QuickCheckInput } from "@/lib/types";

export async function POST(request: NextRequest) {
  try {
    const body: QuickCheckInput = await request.json();

    if (!body.unternehmensname || !body.projektbeschreibung) {
      return NextResponse.json(
        { error: "Pflichtfelder fehlen" },
        { status: 400 }
      );
    }

    const result = await runQuickCheck(body);
    return NextResponse.json(result);
  } catch (error) {
    console.error("Quick-Check Fehler:", error);
    return NextResponse.json(
      { error: "Analyse fehlgeschlagen. Bitte versuche es erneut." },
      { status: 500 }
    );
  }
}
