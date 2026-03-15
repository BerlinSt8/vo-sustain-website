"use client";

import ServicePageClient from "@/components/services/ServicePageClient";

export default function KreislaufwirtschaftClient() {
  return (
    <ServicePageClient
      heroLabel="FÖRDERUNG KREISLAUFWIRTSCHAFT"
      heroHeadline="Förderprogramme für Kreislaufwirtschaft."
      heroSub="Recycling, Ressourceneffizienz, Circular Economy: Deutsche KMU können Kreislaufwirtschafts-Vorhaben mit bis zu 70 % Förderquote finanzieren — von der Machbarkeitsstudie bis zur Industrieanlage."
      heroBody={`Die Kreislaufwirtschaft ist eines der am stärksten geförderten Zukunftsfelder in Deutschland und der EU. Das Zentrale Innovationsprogramm Mittelstand (ZIM) fördert F&E-Projekte im Bereich Recycling-Technologie und Ressourceneffizienz mit bis zu 380.000 EUR pro Einzelprojekt bei einer Förderquote von bis zu 60 % für kleine Unternehmen (Quelle: ZIM-Richtlinie, BMWK 2024). Kooperationsprojekte zwischen KMU und Forschungseinrichtungen erhalten bis zu 450.000 EUR pro Partner. Das BAFA-Programm Energie- und Ressourceneffizienz (EEW, Modul 4) bezuschusst Investitionen in energieeffiziente Recycling-Anlagen und Prozessoptimierung mit bis zu 55 % der förderfähigen Kosten (Quelle: BAFA EEW-Richtlinie). Besonders relevant für Kreislaufwirtschaft: Modul 4 „Energie- und ressourcenbezogene Optimierung" fördert auch geschlossene Stoffkreisläufe und Abwärmenutzung. Auf Landesebene stehen EFRE-Programme zur Verfügung, die je nach Bundesland unterschiedliche Schwerpunkte setzen — Sachsen fördert z. B. über die SAB Investitionen in Circular-Economy-Anlagen, NRW über progres.nrw Ressourceneffizienz in der Produktion. Die EU kofinanziert Demonstrationsprojekte über das LIFE-Programm (Sub-Programme Circular Economy, bis 60 % Förderquote, Quelle: LIFE Regulation EU 2021/783) und unterstützt über Horizon Europe die Entwicklung disruptiver Kreislauftechnologien. Die KfW bietet zinsgünstige Umweltkredite (Programm 240/241) für Investitionen in Kreislaufwirtschaft und Ressourceneffizienz. Ergänzend deckt die Forschungszulage (FZulG) 25 % der F&E-Personalkosten steuerlich ab — rückwirkend beantragbar und kumulierbar mit ZIM. Wir matchen Ihr Vorhaben gegen alle relevanten Programme und identifizieren die optimale Förderkombination.`}
      scope={[
        {
          title: "Recycling-Technologie",
          desc: "Entwicklung und Skalierung innovativer Recycling-Verfahren: mechanisches, chemisches und biologisches Recycling. ZIM-Einzelprojekte und Kooperationsprojekte mit Forschungseinrichtungen.",
        },
        {
          title: "Ressourceneffizienz",
          desc: "Optimierung von Produktionsprozessen zur Reduktion von Materialverbrauch und Abfall. BAFA EEW Modul 4 für Investitionen, Forschungszulage für F&E-Personal.",
        },
        {
          title: "Bioökonomie",
          desc: "Biobasierte Materialien, Verpackungen und Werkstoffe als Ersatz für fossile Rohstoffe. ZIM-Kooperationsnetzwerke, EU LIFE und Horizon Europe Cluster 6 (Food, Bioeconomy).",
        },
        {
          title: "Waste-to-Value",
          desc: "Wertschöpfung aus Reststoffen: Energiegewinnung, Sekundärrohstoffe, Upcycling. KfW Umweltkredit für Investitionen, EFRE-Landesförderung für Pilotanlagen.",
        },
      ]}
      process={[
        {
          step: "01",
          title: "Kreislauf-Fördercheck",
          desc: "Analyse Ihres Vorhabens gegen ZIM, BAFA EEW, EFRE, EU LIFE und KfW. Ergebnis: Ihre individuelle Förderlandkarte für Kreislaufwirtschaft mit Förderquoten und Fristen.",
        },
        {
          step: "02",
          title: "Programm-Kombination",
          desc: "Optimale Kombination aus Zuschüssen (ZIM/BAFA), Steuervorteil (Forschungszulage) und zinsgünstigen Darlehen (KfW). Kumulierungsprüfung inklusive.",
        },
        {
          step: "03",
          title: "Antragstellung",
          desc: "Wir erstellen das Förderkonzept, formulieren den Antrag und reichen fristgerecht ein. Antrag vor Vorhabenbeginn — der häufigste Fehler bei Kreislaufwirtschafts-Investitionen.",
        },
        {
          step: "04",
          title: "Bewilligung & Abrechnung",
          desc: "Begleitung bis zur Auszahlung: Mittelabruf, Zwischennachweise, Verwendungsnachweis. Erst bei Auszahlung wird unser Erfolgshonorar fällig.",
        },
      ]}
      facts={[
        { value: "380.000 €", label: "Max. ZIM-Zuschuss pro F&E-Einzelprojekt (Quelle: BMWK)" },
        { value: "55 %", label: "Max. BAFA-EEW-Zuschuss auf Ressourceneffizienz-Investitionen" },
        { value: "60 %", label: "EU-LIFE-Förderquote für Circular-Economy-Demonstrationsprojekte" },
        { value: "25 %", label: "Forschungszulage auf F&E-Personalkosten — kumulierbar mit ZIM" },
      ]}
      tags={["ZIM", "BAFA EEW", "EFRE", "LIFE", "KfW", "Forschungszulage", "Investitionsförderung"]}
      faq={[
        {
          q: "Was wird im Bereich Kreislaufwirtschaft gefördert?",
          a: "Gefördert werden F&E-Projekte (neue Recycling-Verfahren, biobasierte Materialien, Waste-to-Value-Prozesse), Investitionen in ressourceneffiziente Anlagen und Produktionsprozesse, Demonstrationsprojekte zur Erprobung zirkulärer Geschäftsmodelle sowie Machbarkeitsstudien und Marktanalysen. Die Bandbreite reicht von der Grundlagenforschung (Horizon Europe) über angewandte Entwicklung (ZIM) bis zur Investitionsförderung (BAFA EEW, KfW).",
        },
        {
          q: "Welche Förderprogramme sind für Kreislaufwirtschaft relevant?",
          a: "Die wichtigsten Programme sind: ZIM (F&E, bis 380.000 EUR Einzelprojekt, bis 450.000 EUR Kooperation), BAFA EEW Modul 4 (Ressourceneffizienz-Investitionen, bis 55 %), EU LIFE Sub-Programme Circular Economy (Demonstrationsprojekte, bis 60 %), KfW Umweltkredit 240/241 (zinsgünstige Darlehen), EFRE-Landesförderung (je nach Bundesland) und die Forschungszulage (25 % steuerlicher Abzug auf F&E-Personal).",
        },
        {
          q: "Wie hoch ist die maximale Förderung für Kreislaufwirtschaft?",
          a: "Die Förderhöhe hängt vom Programm und Unternehmenstyp ab. Kleine Unternehmen erhalten bei ZIM bis zu 60 % Förderquote (max. 380.000 EUR), mittlere Unternehmen bis zu 50 %. BAFA EEW fördert Investitionen mit bis zu 55 % der Kosten. Durch geschickte Kombination — z. B. ZIM für die Entwicklungsphase, BAFA für die Investition, Forschungszulage ergänzend — lassen sich Gesamtförderquoten von über 50 % erreichen.",
        },
        {
          q: "Kann ich mehrere Förderprogramme kombinieren?",
          a: "Ja, die Kombination verschiedener Programme ist ausdrücklich möglich und oft sinnvoll. Typische Kombination: ZIM-Zuschuss für die F&E-Phase + Forschungszulage (kumulierbar) + KfW-Darlehen oder BAFA-EEW-Zuschuss für die anschließende Investition. Wichtig ist die korrekte Kumulierungsprüfung — die EU-Beihilfeobergrenzen (AGVO) dürfen nicht überschritten werden. Wir prüfen die optimale Kombination für Ihr Vorhaben.",
        },
      ]}
      relatedLinks={[
        { href: "/foerderberatung", title: "Förderberatung" },
        { href: "/zim-foerderung", title: "ZIM-Förderung" },
        { href: "/bafa-foerderung", title: "BAFA-Förderung" },
      ]}
    />
  );
}
