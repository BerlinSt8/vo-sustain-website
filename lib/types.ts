export interface QuickCheckInput {
  // Unternehmen
  unternehmensname: string;
  bundesland: string;
  unternehmensform: string;
  mitarbeiterzahl: string;
  jahresumsatz: string;
  branche: string;

  // Projekt
  projektkategorien: string[];
  projektbeschreibung: string;
  investitionssumme: string;
  projektstart: string;
  deminimisErhalten: string;
}

export interface FoerderprogrammResult {
  name: string;
  authority: string;
  aid_intensity: string;
  estimated_funding: string;
  why_match: string;
  key_requirements: string[];
  next_steps: string[];
  confidence: "Verifiziert" | "Bitte prüfen";
  source_url: string;
}

export interface QuickCheckResult {
  recommendation: "GO" | "NO-GO" | "CONDITIONAL";
  summary: string;
  matching_programs: FoerderprogrammResult[];
  red_flags: string[];
  recommended_vo_package: string;
  disclaimer: string;
}

// ── Aktuell / News ──────────────────────────────────────────
export type ArtikelKategorie = "Förderaufruf" | "CSRD-News" | "Marktinfo" | "Erfolg";

export interface ArtikelFakt {
  label: string;
  value: string;
  icon?: string; // Emoji-Icon optional
}

export interface Artikel {
  id: string;
  slug: string;
  title: string;
  category: ArtikelKategorie;
  date: string;          // ISO-Date "2026-02-20"
  deadline: string | null; // ISO-Date für Countdown, oder null
  teaser: string;
  content: string[];     // Array von Absätzen
  facts?: ArtikelFakt[]; // Key-Facts als Kacheln
  tags: string[];
  source: string | null;
}
