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

// ── Förderdatenbank.de Live-Ergebnisse ──────────────────────
export interface FoerderdatenbankResult {
  name: string;
  authority: string;
  description: string;
  url: string;
}

export interface FoerderdatenbankResponse {
  results: FoerderdatenbankResult[];
  searchUrl: string;
  error?: string;
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
  title_en?: string;
  category: ArtikelKategorie;
  date: string;          // ISO-Date "2026-02-20"
  deadline: string | null; // ISO-Date für Countdown, oder null
  teaser: string;
  teaser_en?: string;
  image?: string | null;  // Pfad zum Header-Bild (relativ zu /public)
  content: string[];     // Array von Absätzen
  content_en?: string[];
  facts?: ArtikelFakt[]; // Key-Facts als Kacheln
  facts_en?: ArtikelFakt[];
  tags: string[];
  source: string | null;
}
