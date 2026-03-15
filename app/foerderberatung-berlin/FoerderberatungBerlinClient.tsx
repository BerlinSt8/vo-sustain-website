"use client";

import ServicePageClient from "@/components/services/ServicePageClient";

export default function FoerderberatungBerlinClient() {
  return (
    <ServicePageClient
      heroLabel="FÖRDERBERATUNG BERLIN"
      heroHeadline="Förderberatung für Berliner KMU."
      heroSub="Berlin hat eines der dichtesten Förder-Ökosysteme Deutschlands — IBB, ProFIT, GRW, EFRE und Transfer BONUS. Wir navigieren Sie durch den Berliner Förderdschungel."
      heroBody="Berliner KMU profitieren von einer einzigartigen Kombination aus Landes-, Bundes- und EU-Förderprogrammen. Die Investitionsbank Berlin (IBB) verwaltet über 20 Förderprogramme speziell für die Berliner Wirtschaft. Dazu kommen Bundesprogramme wie ZIM (bis 380.000 EUR pro Einzelprojekt, Quelle: ZIM-Richtlinie, BMWK), BAFA EEW (bis 55 % Zuschuss auf Energieeffizienz-Investitionen, Quelle: BAFA EEW-Richtlinie) und EU-Programme wie EFRE Berlin. Das ProFIT-Programm der IBB fördert Forschung und Entwicklung in Berlin mit Zuschüssen und zinsgünstigen Darlehen. Transfer BONUS unterstützt den Wissenstransfer zwischen Berliner Hochschulen und KMU mit bis zu 45.000 EUR. Wir matchen Ihr Vorhaben gegen alle relevanten Programme — Berliner, bundesweite und europäische."
      scope={[
        { title: "Berliner Landesprogramme", desc: "IBB Innovationsförderung, ProFIT, Transfer BONUS, Berliner Startup-Stipendium, GRW Berlin-Brandenburg — wir kennen das lokale Förder-Ökosystem." },
        { title: "Bundesprogramme für Berliner KMU", desc: "ZIM, BAFA EEW, Forschungszulage, KfW-Förderkredite — Bundesprogramme mit besonderen Konditionen für Berliner Unternehmen." },
        { title: "EU-Förderung in Berlin", desc: "EFRE Berlin, Horizon Europe, EIC Accelerator, LIFE — europäische Programme mit Berliner Ko-Finanzierung." },
        { title: "Antragstellung & Begleitung", desc: "Von der Potenzialanalyse bis zum Verwendungsnachweis. Wir koordinieren die Antragstellung bei IBB, BAFA, ZIM und EU — schlüsselfertig." },
      ]}
      process={[
        { step: "01", title: "Berliner Förder-Check", desc: "Analyse Ihres Vorhabens gegen 20+ IBB-Programme, Bundesprogramme und EU-Förderung. Ergebnis: Ihre individuelle Berliner Förderlandkarte." },
        { step: "02", title: "Programm-Matching", desc: "Wir identifizieren die optimale Kombination aus Berliner Landesförderung und Bundesprogrammen — inklusive Kumulierungsprüfung." },
        { step: "03", title: "Antragstellung", desc: "Wir erstellen den Antrag, koordinieren mit IBB, BAFA oder ZIM und reichen fristgerecht ein. Antrag vor Vorhabenbeginn — der häufigste Fehler." },
        { step: "04", title: "Bewilligung & Abrechnung", desc: "Begleitung bis zur Auszahlung: Mittelabruf, Zwischennachweise, Verwendungsnachweis. Erst bei Auszahlung wird unser Erfolgshonorar fällig." },
      ]}
      facts={[
        { value: "20+", label: "IBB-Förderprogramme für Berliner KMU" },
        { value: "55 %", label: "Max. BAFA-Zuschuss auf Energieeffizienz (Quelle: BAFA EEW)" },
        { value: "45.000 €", label: "Transfer BONUS für Hochschul-KMU-Kooperation" },
        { value: "0 €", label: "Erstanalyse — kostenlos und unverbindlich" },
      ]}
      tags={["IBB", "ProFIT", "Transfer BONUS", "GRW", "EFRE Berlin", "ZIM", "BAFA EEW", "Forschungszulage", "KfW"]}
      faq={[
        {
          q: "Welche Förderprogramme gibt es speziell für Berlin?",
          a: "Die Investitionsbank Berlin (IBB) verwaltet über 20 Programme für Berliner Unternehmen. Die wichtigsten sind ProFIT (F&E-Förderung als Zuschuss oder Darlehen), Transfer BONUS (bis 45.000 EUR für Hochschul-KMU-Kooperationen), GRW Berlin-Brandenburg (Investitionszuschüsse) und die IBB Innovationsförderung. Dazu kommen EFRE-Mittel, die über die IBB ausgereicht werden.",
        },
        {
          q: "Kann ich Berliner und Bundesprogramme kombinieren?",
          a: "Ja, in vielen Fällen ist eine Kumulierung möglich. Ein Berliner KMU kann z.B. ProFIT für die F&E-Phase und BAFA EEW für die anschließende Investition nutzen. Wichtig ist die korrekte Kumulierungsprüfung — die Gesamtförderquote darf die EU-Beihilfeobergrenzen nicht überschreiten. Wir prüfen die optimale Kombination für Ihr Vorhaben.",
        },
        {
          q: "Warum brauche ich einen Förderberater in Berlin?",
          a: "Berlin hat eine der komplexesten Förderlandschaften Deutschlands: IBB-Programme, Bundesprogramme (ZIM, BAFA), EU-Programme (EFRE, Horizon Europe) und steuerliche Förderung (Forschungszulage). Allein die Kumulierungsregeln zwischen Landes- und Bundesförderung erfordern Expertise. Ein spezialisierter Berater spart durchschnittlich 40–60 Stunden Recherche- und Antragszeit.",
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
