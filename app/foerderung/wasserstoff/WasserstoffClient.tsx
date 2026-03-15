"use client";

import ServicePageClient from "@/components/services/ServicePageClient";

export default function WasserstoffClient() {
  return (
    <ServicePageClient
      heroLabel="FÖRDERUNG WASSERSTOFF"
      heroHeadline="Wasserstoff-Förderung für KMU."
      heroSub="H2-Technologie, Elektrolyse, Brennstoffzellen, Power-to-X — die Förderlandschaft für Wasserstoff-Projekte ist breit aufgestellt. Wir finden das passende Programm für Ihr Vorhaben."
      heroBody="Wasserstoff gilt als Schlüsseltechnologie der Energiewende. Die Bundesregierung hat mit der Nationalen Wasserstoffstrategie (NWS, aktualisiert 2023) ein klares Signal gesetzt: Bis 2030 sollen mindestens 10 GW Elektrolysekapazität in Deutschland entstehen (Quelle: BMWK, Nationale Wasserstoffstrategie 2023). Für KMU, die in H2-Technologien forschen oder investieren, stehen mehrere Förderprogramme bereit. Das Zentrale Innovationsprogramm Mittelstand (ZIM) fördert F&E-Projekte im Bereich Wasserstoff mit bis zu 380.000 EUR pro Einzelprojekt und bis zu 55 % Förderquote für kleine Unternehmen (Quelle: ZIM-Richtlinie, BMWK). ZIM ist besonders attraktiv für Elektrolyse-Komponenten, Brennstoffzellen-Entwicklung und Power-to-X-Verfahren. Das BAFA-Programm Energieeffizienz in der Wirtschaft (EEW) fördert in Modul 4 auch Wasserstoff-Anlagen als Querschnittstechnologie — Zuschüsse bis 55 % auf förderfähige Investitionskosten sind möglich (Quelle: BAFA EEW-Richtlinie). Das Nationale Innovationsprogramm Wasserstoff- und Brennstoffzellentechnologie (NIP II) stellt über das BMDV rund 1,4 Mrd. EUR für marktnahe H2-Anwendungen bereit — von Brennstoffzellen-Fahrzeugen bis H2-Tankstellen (Quelle: NOW GmbH, NIP II). Auf EU-Ebene bietet das Clean Hydrogen Joint Undertaking unter Horizon Europe Fördermittel für grenzüberschreitende H2-Forschung. Die Important Projects of Common European Interest (IPCEI) Wasserstoff mobilisieren über 20 Mrd. EUR an öffentlichen und privaten Mitteln für die gesamte Wertschöpfungskette (Quelle: BMWK, IPCEI Wasserstoff). Auch Landesförderprogramme — etwa der SAB in Sachsen oder der NBank in Niedersachsen — unterstützen regionale H2-Projekte. Im SEAWEED DECARBON POLYMER Netzwerk, das Denis Jänicke als ZIM-Netzwerkmanager koordiniert, ist die BioMethanisierung mit Wasserstoff ein Kernprozess: Biowasserstoff aus der E-SYNTH Acidogenese wird mit CO₂ zu BioMethan >95 % CH₄ umgewandelt. Dieses Praxiswissen fließt direkt in unsere Förderberatung für H2-Projekte ein."
      scope={[
        { title: "Grüner Wasserstoff", desc: "Förderung für Elektrolyse aus erneuerbaren Energien, PEM- und alkalische Systeme, Wasserstoff-Erzeugung und -Speicherung. ZIM, NIP II und IPCEI als Hauptprogramme." },
        { title: "Elektrolyse & Brennstoffzellen", desc: "F&E-Förderung für Elektrolyseur-Komponenten, Brennstoffzellen-Stacks und Systemintegration. ZIM-Einzelprojekte bis 380.000 EUR, Kooperationsprojekte bis 2,3 Mio. EUR." },
        { title: "Power-to-X", desc: "Umwandlung von grünem Wasserstoff in synthetische Kraftstoffe, Chemikalien oder Methan. BAFA EEW Modul 4 für Investitionen, ZIM und Horizon Europe für Forschung." },
        { title: "H2-Infrastruktur", desc: "Tankstellen, Pipelines, Speicher und Logistik. NIP II für marktnahe Anwendungen, IPCEI für großskalige Infrastrukturprojekte entlang der Wertschöpfungskette." },
      ]}
      process={[
        { step: "01", title: "H2-Förder-Check", desc: "Analyse Ihres Wasserstoff-Vorhabens gegen alle relevanten Programme — ZIM, BAFA EEW, NIP, IPCEI, Landesförderung. Ergebnis: Ihre individuelle H2-Förderlandkarte." },
        { step: "02", title: "Programm-Matching", desc: "Wir identifizieren die optimale Förderkombination. Forschung über ZIM, Investition über BAFA EEW Modul 4, Markteinführung über NIP II — inklusive Kumulierungsprüfung." },
        { step: "03", title: "Antragstellung", desc: "Wir erstellen den Förderantrag, koordinieren mit BMWK, BAFA oder dem Projektträger und reichen fristgerecht ein. Antrag vor Vorhabenbeginn — der häufigste Fehler bei H2-Projekten." },
        { step: "04", title: "Bewilligung & Abrechnung", desc: "Begleitung bis zur Auszahlung: Mittelabruf, Zwischennachweise, Verwendungsnachweis. Erst bei Auszahlung wird unser Erfolgshonorar fällig." },
      ]}
      facts={[
        { value: "1,4 Mrd. €", label: "NIP II Budget für Wasserstoff- und Brennstoffzellentechnologie (Quelle: NOW GmbH)" },
        { value: "20 Mrd. €+", label: "IPCEI Wasserstoff — öffentliche und private Mittel EU-weit (Quelle: BMWK)" },
        { value: "55 %", label: "Max. BAFA EEW Modul 4 Zuschuss für H2-Anlagen (Quelle: BAFA)" },
        { value: "380.000 €", label: "Max. ZIM-Einzelprojekt für H2-F&E (Quelle: ZIM-Richtlinie)" },
      ]}
      tags={["ZIM", "BAFA EEW Modul 4", "NIP", "IPCEI", "Horizon Europe", "Clean Hydrogen", "Forschungszulage"]}
      faq={[
        {
          q: "Welche Förderprogramme gibt es für Wasserstoff-Projekte?",
          a: "Die wichtigsten Programme sind: ZIM (F&E bis 380.000 EUR Einzelprojekt, Quelle: BMWK), BAFA EEW Modul 4 (Investitionszuschuss bis 55 %, Quelle: BAFA), NIP II (1,4 Mrd. EUR für marktnahe H2-Anwendungen, Quelle: NOW GmbH), IPCEI Wasserstoff (großskalige Wertschöpfungsketten, Quelle: BMWK) und Horizon Europe über das Clean Hydrogen Joint Undertaking für EU-Forschung. Dazu kommen Landesförderprogramme und die steuerliche Forschungszulage (25 % auf F&E-Personalkosten).",
        },
        {
          q: "Können KMU an IPCEI Wasserstoff teilnehmen?",
          a: "Ja, IPCEI steht ausdrücklich auch KMU offen. Allerdings sind die Anforderungen hoch: Das Vorhaben muss Teil einer europäischen Wertschöpfungskette sein und einen Beitrag zur Erreichung strategischer EU-Ziele leisten. In der Praxis beteiligen sich KMU oft als Zulieferer oder Technologiepartner in einem IPCEI-Verbund. Alternative für kleinere H2-Vorhaben: ZIM-Kooperationsprojekte (bis 2,3 Mio. EUR) sind deutlich zugänglicher.",
        },
        {
          q: "Kann ich mehrere H2-Förderprogramme kombinieren?",
          a: "Ja, eine Kumulierung ist in vielen Fällen möglich und sinnvoll. Typisches Beispiel: ZIM für die F&E-Phase (Elektrolyseur-Entwicklung), anschließend BAFA EEW Modul 4 für die Investition in die Anlage. Die Gesamtförderquote darf die EU-Beihilfeobergrenzen nicht überschreiten. Wir prüfen die optimale Kombination und übernehmen die Kumulierungsberechnung.",
        },
        {
          q: "Wie lange dauert ein Förderantrag für ein H2-Projekt?",
          a: "Die Bearbeitungszeit variiert je nach Programm: ZIM-Anträge werden typischerweise in 3–4 Monaten beschieden (Quelle: Projektträger AiF/VDI/VDE-IT). BAFA EEW Modul 4 ist mit 4–8 Wochen schneller. NIP II und IPCEI haben deutlich längere Vorlaufzeiten von 6–12 Monaten. Wichtig: Der Antrag muss vor Vorhabenbeginn gestellt werden — bei Wasserstoff-Projekten mit langen Planungszyklen ist frühzeitige Beratung entscheidend.",
        },
      ]}
      relatedLinks={[
        { href: "/zim-foerderung", title: "ZIM-Förderung" },
        { href: "/bafa-foerderung", title: "BAFA-Förderung" },
        { href: "/foerderberatung", title: "Förderberatung" },
      ]}
    />
  );
}
