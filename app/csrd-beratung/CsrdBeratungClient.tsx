"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import ServicePageClient from "@/components/services/ServicePageClient";

export default function CsrdBeratungClient() {
  const { t } = useLanguage();

  return (
    <ServicePageClient
      heroLabel={t.csrdBeratung.heroLabel}
      heroHeadline={t.csrdBeratung.heroHeadline}
      heroSub={t.csrdBeratung.heroSub}
      heroBody={t.csrdBeratung.heroBody}
      scope={t.csrdBeratung.scope}
      process={t.csrdBeratung.process}
      facts={t.csrdBeratung.facts}
      tags={t.csrdBeratung.standards}
      faq={[
        {
          q: "Was ist CSRD?",
          a: "Die Corporate Sustainability Reporting Directive (CSRD) ist die EU-Richtlinie zur Nachhaltigkeitsberichterstattung, die seit 2024 schrittweise in Kraft tritt. Sie verpflichtet Unternehmen, nach den European Sustainability Reporting Standards (ESRS) über Umwelt-, Sozial- und Governance-Themen zu berichten. Die CSRD ersetzt die bisherige Non-Financial Reporting Directive (NFRD) und erweitert den Kreis berichtspflichtiger Unternehmen erheblich.",
        },
        {
          q: "Gilt CSRD auch für KMU?",
          a: "Direkt berichtspflichtig sind KMU nur, wenn sie kapitalmarktorientiert sind (ab 2026). Indirekt betrifft CSRD jedoch viele KMU über die Wertschöpfungskette: Große Kunden fordern zunehmend Nachhaltigkeitsdaten von Zulieferern. Der EU-Omnibus-Vorschlag von Februar 2025 hebt die Schwelle auf 1.000 Mitarbeitende und 450 Mio. Euro Umsatz an, was viele Mittelständler entlastet. Für freiwillig berichtende KMU gibt es den vereinfachten VSME-Standard.",
        },
        {
          q: "Was ist der VSME-Standard?",
          a: "Der Voluntary SME Standard (VSME) ist ein vereinfachter Berichtsstandard der EFRAG speziell für kleine und mittlere Unternehmen. Er umfasst 11 Module (B1–B11) und reduziert den Aufwand gegenüber den vollständigen ESRS erheblich. KMU können damit strukturiert auf Datenanfragen großer Kunden reagieren, ohne den vollen ESRS-Umfang abdecken zu müssen. Der VSME wurde im Dezember 2024 finalisiert.",
        },
        {
          q: "Was kostet CSRD-Beratung?",
          a: "Die Kosten hängen stark von Unternehmensgröße und Komplexität ab. Für KMU mit VSME-Ansatz liegen die Beratungskosten typischerweise zwischen 8.000 und 25.000 Euro. Große Mittelständler mit voller ESRS-Berichterstattung müssen mit 30.000 bis 80.000 Euro rechnen. Förderprogramme wie die BAFA-Energieberatung oder Landesprogramme können 50–80 % der Beratungskosten abdecken. VO Sustain kombiniert CSRD-Beratung systematisch mit Fördermittelakquise.",
        },
      ]}
      relatedLinks={[
        { title: "Nachhaltigkeitsstrategie", href: "/nachhaltigkeitsstrategie" },
        { title: "Förderberatung", href: "/foerderberatung" },
        { title: "BAFA-Förderung", href: "/bafa-foerderung" },
      ]}
    />
  );
}
