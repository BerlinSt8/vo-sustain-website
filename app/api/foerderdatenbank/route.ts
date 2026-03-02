import { NextRequest, NextResponse } from "next/server";
import { searchFoerderdatenbank } from "@/lib/foerderdatenbank";
import type { FoerderdatenbankResponse } from "@/lib/types";

export async function POST(request: NextRequest) {
  try {
    const { bundesland } = (await request.json()) as {
      bundesland?: string;
    };

    if (!bundesland) {
      return NextResponse.json(
        { results: [], searchUrl: "", error: "Bundesland fehlt" } satisfies FoerderdatenbankResponse,
        { status: 400 }
      );
    }

    const { results, searchUrl } = await searchFoerderdatenbank(bundesland);

    return NextResponse.json({
      results,
      searchUrl,
    } satisfies FoerderdatenbankResponse);
  } catch (error) {
    console.error("Förderdatenbank API Fehler:", error);
    return NextResponse.json(
      {
        results: [],
        searchUrl: "",
        error: "Förderdatenbank-Abfrage fehlgeschlagen",
      } satisfies FoerderdatenbankResponse,
      { status: 500 }
    );
  }
}
