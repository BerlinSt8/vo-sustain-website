"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import ServicePageClient from "@/components/services/ServicePageClient";

export default function NachhaltigkeitsstrategieClient() {
  const { t } = useLanguage();

  return (
    <ServicePageClient
      heroLabel={t.nachhaltigkeitsstrategie.heroLabel}
      heroHeadline={t.nachhaltigkeitsstrategie.heroHeadline}
      heroSub={t.nachhaltigkeitsstrategie.heroSub}
      heroBody={t.nachhaltigkeitsstrategie.heroBody}
      scope={t.nachhaltigkeitsstrategie.scope}
      process={t.nachhaltigkeitsstrategie.process}
      facts={t.nachhaltigkeitsstrategie.facts}
      tags={t.nachhaltigkeitsstrategie.tags}
      faq={[
        {
          q: "Was gehört zu einer Nachhaltigkeitsstrategie?",
          a: "Eine Nachhaltigkeitsstrategie umfasst die systematische Analyse des Status quo, die Definition von Zielen entlang der ESG-Dimensionen (Umwelt, Soziales, Governance) und einen konkreten Maßnahmenplan mit Zeitrahmen. Kernelemente sind die THG-Bilanz (Scope 1–3), eine Wesentlichkeitsanalyse, KPI-Definition und die Integration in bestehende Geschäftsprozesse. Für KMU empfiehlt sich ein pragmatischer Ansatz, der regulatorische Anforderungen mit wirtschaftlichem Nutzen verbindet.",
        },
        {
          q: "Wird die THG-Bilanz gefördert?",
          a: "Ja, mehrere Programme fördern die Erstellung einer Treibhausgasbilanz. Das BAFA-Modul 5 (Transformationskonzepte) übernimmt bis zu 60 % der Kosten, maximal 80.000 Euro. Auf Landesebene bieten Programme wie die SAB in Sachsen oder die ILB in Brandenburg Zuschüsse von 50–80 % für Nachhaltigkeitsberatung. Auch das BMWK-Programm go-digital fördert Digitalisierungsmaßnahmen, die eine automatisierte THG-Erfassung einschließen können.",
        },
        {
          q: "Wie lange dauert die Erstellung?",
          a: "Für KMU mit 50–250 Mitarbeitenden dauert die Erstellung einer Nachhaltigkeitsstrategie typischerweise 8–16 Wochen. Die THG-Bilanz benötigt 3–6 Wochen (abhängig von der Datenverfügbarkeit), die Wesentlichkeitsanalyse 2–4 Wochen und der Maßnahmenplan 2–4 Wochen. Bei guter Datenlage und engagierter Projektleitung auf Kundenseite ist eine Erstfassung in 8 Wochen realistisch.",
        },
        {
          q: "Brauche ich eine Nachhaltigkeitsstrategie für CSRD?",
          a: "Die CSRD verlangt keine separate Nachhaltigkeitsstrategie als Dokument, aber die ESRS-Berichterstattung setzt deren Inhalte faktisch voraus. ESRS 2 (General Disclosures) fordert Angaben zu Strategie, Governance und Wesentlichkeitsanalyse. Ohne bestehende Strategie müssen diese Elemente im Berichtsprozess ohnehin erarbeitet werden — dann unter Zeitdruck. Eine vorgelagerte Strategieentwicklung spart Kosten und verbessert die Berichtsqualität erheblich.",
        },
      ]}
      relatedLinks={[
        { title: "CSRD-Beratung", href: "/csrd-beratung" },
        { title: "BAFA-Förderung", href: "/bafa-foerderung" },
        { title: "ZIM-Förderung", href: "/zim-foerderung" },
      ]}
    />
  );
}
