import OpenAI from "openai";
import { FOERDEREXPERTE_SYSTEM_PROMPT } from "./prompts/foerderexperte";
import type { QuickCheckInput, QuickCheckResult } from "./types";

// xAI Grok – OpenAI-kompatible API
const client = new OpenAI({
  apiKey: process.env.XAI_API_KEY,
  baseURL: "https://api.x.ai/v1",
});

export async function runQuickCheck(
  input: QuickCheckInput
): Promise<QuickCheckResult> {
  const userMessage = `
Analysiere folgendes KMU für einen Förder-Quick-Check:

**UNTERNEHMEN**
- Name: ${input.unternehmensname}
- Bundesland: ${input.bundesland}
- Unternehmensform: ${input.unternehmensform}
- Mitarbeiterzahl: ${input.mitarbeiterzahl}
- Jahresumsatz: ${input.jahresumsatz}
- Branche: ${input.branche}

**PROJEKT**
- Kategorien: ${input.projektkategorien.join(", ")}
- Beschreibung: ${input.projektbeschreibung}
- Investitionssumme: ${input.investitionssumme}
- Geplanter Projektstart: ${input.projektstart}
- De-minimis-Beihilfen erhalten: ${input.deminimisErhalten}

Führe eine vollständige Analyse durch und antworte ausschließlich als valides JSON gemäß dem vorgegebenen Schema.
`.trim();

  const response = await client.chat.completions.create({
    model: "grok-3",
    max_tokens: 4096,
    messages: [
      { role: "system", content: FOERDEREXPERTE_SYSTEM_PROMPT },
      { role: "user", content: userMessage },
    ],
  });

  const text = response.choices[0]?.message?.content ?? "";

  const raw = text
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();

  const result: QuickCheckResult = JSON.parse(raw);
  return result;
}
