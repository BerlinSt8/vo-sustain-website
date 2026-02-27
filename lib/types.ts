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
