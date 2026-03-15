"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import ServicePageClient from "@/components/services/ServicePageClient";

export default function BafaFoerderungClient() {
  const { t } = useLanguage();

  return (
    <ServicePageClient
      heroLabel={t.bafaFoerderung.heroLabel}
      heroHeadline={t.bafaFoerderung.heroHeadline}
      heroSub={t.bafaFoerderung.heroSub}
      heroBody={t.bafaFoerderung.heroBody}
      scope={t.bafaFoerderung.scope}
      process={t.bafaFoerderung.process}
      facts={t.bafaFoerderung.facts}
      tags={t.bafaFoerderung.types}
      faq={[
        {
          q: "Was ist BAFA EEW?",
          a: "Die Bundesförderung für Energie- und Ressourceneffizienz in der Wirtschaft (EEW) ist das zentrale BAFA-Programm für Unternehmen, die in energieeffiziente Technologien investieren. Es umfasst fünf Module — von Querschnittstechnologien über Prozesswärme bis zur Transformationsplanung. Förderfähig sind KMU und Großunternehmen in Deutschland. Die EEW löste 2021 mehrere Einzelprogramme ab und bündelt seitdem alle industriellen Effizienzmaßnahmen.",
        },
        {
          q: "Wie hoch ist der BAFA-Zuschuss?",
          a: "Die Förderhöhe variiert je nach Modul und Unternehmensgröße. KMU erhalten in der Regel 30–40 % Zuschuss auf die förderfähigen Investitionskosten, Großunternehmen 20–30 %. Bei Modul 5 (Transformationskonzepte) werden bis zu 60 % der Beratungskosten übernommen, maximal 80.000 Euro. Für Einzelmaßnahmen liegt die Obergrenze bei 15 Millionen Euro pro Vorhaben (Quelle: BAFA Richtlinie EEW 2024).",
        },
        {
          q: "Muss der Antrag vor der Investition gestellt werden?",
          a: "Ja, das ist eine zwingende Voraussetzung. Der BAFA-Förderantrag muss vor Beginn der Maßnahme gestellt und bewilligt werden. Als Vorhabenbeginn gilt bereits der Abschluss eines Liefer- oder Leistungsvertrags. Planungsleistungen und Beratung gelten nicht als Vorhabenbeginn. Ein Verstoß gegen das Vorzeitigkeitsverbot führt zum vollständigen Verlust des Förderanspruchs.",
        },
        {
          q: "Welche Maßnahmen fördert BAFA EEW?",
          a: "Die EEW fördert ein breites Spektrum: Modul 1 umfasst Querschnittstechnologien wie Pumpen, Motoren und Druckluft. Modul 2 betrifft Prozesswärme aus erneuerbaren Energien, etwa Wärmepumpen und Solarthermie. Modul 3 fördert Mess-, Steuer- und Regelungstechnik sowie Sensorik. Modul 4 deckt energiebezogene Optimierung von Anlagen und Prozessen ab. Modul 5 finanziert Transformationskonzepte zur Klimaneutralität.",
        },
      ]}
      relatedLinks={[
        { href: "/foerderberatung",       title: t.foerderberatung.heroHeadline },
        { href: "/zim-foerderung",        title: t.zimFoerderung.heroHeadline },
        { href: "/nachhaltigkeitsstrategie", title: t.nachhaltigkeitsstrategie.heroHeadline },
      ]}
    />
  );
}
