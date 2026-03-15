"use client";

import ServicePageClient from "@/components/services/ServicePageClient";

export default function EnergieeffizienzClient() {
  return (
    <ServicePageClient
      heroLabel="FÖRDERUNG ENERGIEEFFIZIENZ"
      heroHeadline="Energieeffizienz-Förderung für KMU."
      heroSub="BAFA EEW Module 1-5, BEG Heizung & Gebäude, KfW Energieeffizienz-Kredite, Contracting-Förderung — Prozesswärme, Gebäudesanierung und Anlagentechnik für deutsche KMU."
      heroBody="Die Bundesförderung für Energie- und Ressourceneffizienz in der Wirtschaft (EEW) ist das zentrale Instrument für energieeffiziente Investitionen in KMU. Das Programm wird durch das BAFA administriert und umfasst fünf Module mit unterschiedlichen Fördersätzen und Schwerpunkten (Quelle: BAFA EEW-Richtlinie, BMWK).

Modul 1 — Querschnittstechnologien: Fördert den Austausch ineffizienter Aggregate wie Elektromotoren, Pumpen, Ventilatoren, Druckluftanlagen und Beleuchtung. Der Zuschuss beträgt bis zu 40 % für KMU (30 % Basisförderung + 10 % KMU-Bonus). Mindestinvestitionsvolumen: 2.000 EUR netto.

Modul 2 — Prozesswärme aus erneuerbaren Energien: Fördert Solarkollektoren, Wärmepumpen und Biomasseanlagen zur Bereitstellung von Prozesswärme. KMU erhalten bis zu 55 % Zuschuss — der höchste Fördersatz im EEW-Programm. Voraussetzung: Die Wärme muss überwiegend für Produktionsprozesse genutzt werden (Quelle: BAFA EEW-Richtlinie).

Modul 3 — MSR-Technik, Sensorik und Energiemanagement: Zuschüsse für Mess-, Steuer- und Regelungstechnik, Sensorik sowie die Einführung von Energiemanagementsystemen (z. B. ISO 50001). Fördersatz bis 40 % für KMU.

Modul 4 — Energie- und ressourcenbezogene Optimierung von Anlagen und Prozessen: Für komplexe Maßnahmen mit einem Investitionsvolumen ab 500.000 EUR. Fördert die Optimierung ganzer Produktionslinien, Abwärmenutzung und prozessintegrierte Maßnahmen. Zuschuss bis 40 % für KMU, maximal 15 Mio. EUR pro Vorhaben (Quelle: BAFA EEW-Richtlinie).

Modul 5 — Transformationskonzepte: Fördert die Erstellung betrieblicher Transformationskonzepte zur Erreichung der Treibhausgasneutralität. Zuschuss bis 60 % der förderfähigen Kosten, maximal 80.000 EUR. Das Konzept muss einen konkreten CO2-Reduktionspfad bis 2045 enthalten.

Ergänzend zum EEW-Programm fördert die Bundesförderung für effiziente Gebäude (BEG) Heizungstausch, Gebäudedämmung und Anlagentechnik in Nichtwohngebäuden. KMU erhalten über das BEG bis zu 70 % Zuschuss für den Heizungstausch (Wärmepumpe, Biomasse) inklusive Klimageschwindigkeits-Bonus und Einkommensbonus (Quelle: BEG-Richtlinie, BMWSB). Für Gebäudedämmung (Fassade, Dach, Fenster) beträgt der Zuschuss bis zu 20 %.

Die KfW bietet mit dem Programm 295 (Bundesförderung für Energieeffizienz in der Wirtschaft — Kredit) zinsgünstige Darlehen mit Tilgungszuschuss als Alternative zu den BAFA-Zuschüssen. Für KMU kann die Kreditvariante bei großen Investitionsvolumina attraktiver sein als der Direktzuschuss. Zusätzlich fördert die KfW Contracting-Modelle, bei denen ein Energiedienstleister die Effizienzmaßnahme plant, finanziert und umsetzt — der KMU-Betrieb zahlt nur die eingesparte Energie (Quelle: KfW-Förderprogramm 295).

Wichtig: Der Förderantrag muss vor Beginn des Vorhabens gestellt werden. Bereits beauftragte oder begonnene Maßnahmen sind von der Förderung ausgeschlossen. Wir prüfen die optimale Programmkombination — EEW, BEG und KfW-Kredit lassen sich unter Beachtung der Kumulierungsregeln strategisch kombinieren."
      scope={[
        { title: "Prozesswärme & Erneuerbare", desc: "BAFA EEW Modul 2: Solarkollektoren, Wärmepumpen und Biomasseanlagen für Prozesswärme — bis 55 % Zuschuss für KMU. Der höchste Fördersatz im EEW-Programm." },
        { title: "Gebäudeeffizienz & Heizungstausch", desc: "BEG-Förderung für Nichtwohngebäude: Heizungstausch (bis 70 %), Gebäudedämmung (bis 20 %), Anlagentechnik. Klimageschwindigkeits-Bonus bei schnellem Umstieg." },
        { title: "Anlagentechnik & Querschnittstechnologien", desc: "EEW Modul 1 und 3: Effiziente Motoren, Pumpen, Druckluft, Beleuchtung, MSR-Technik und Energiemanagementsysteme (ISO 50001) — bis 40 % Zuschuss." },
        { title: "Transformationskonzepte & Dekarbonisierung", desc: "EEW Modul 4 und 5: Komplexe Prozessoptimierung (bis 15 Mio. EUR) und Transformationskonzepte zur Treibhausgasneutralität (bis 60 %, max. 80.000 EUR)." },
      ]}
      process={[
        { step: "01", title: "Energieeffizienz-Check", desc: "Analyse Ihrer Energieverbräuche, Anlagentechnik und Gebäudesubstanz. Identifikation der förderfähigen Maßnahmen — EEW, BEG oder KfW-Kredit." },
        { step: "02", title: "Programm-Matching & Kumulierung", desc: "Optimale Kombination aus EEW-Modulen, BEG und KfW. Kumulierungsprüfung nach EU-Beihilferecht — maximale Förderquote bei minimaler Eigenbeteiligung." },
        { step: "03", title: "Antragstellung beim BAFA / KfW", desc: "Wir erstellen den Förderantrag, koordinieren die Energieberatung (BAFA-gelistet) und reichen fristgerecht ein — vor Vorhabenbeginn." },
        { step: "04", title: "Umsetzung & Verwendungsnachweis", desc: "Begleitung während der Investition: Mittelabruf, Dokumentation der Einsparungen, Verwendungsnachweis. Erfolgshonorar erst bei Auszahlung." },
      ]}
      facts={[
        { value: "55 %", label: "Max. EEW-Zuschuss für Prozesswärme aus Erneuerbaren (Modul 2)" },
        { value: "80 %", label: "Zuschuss für BAFA-Energieberatung im Mittelstand (EBM)" },
        { value: "70 %", label: "Max. BEG-Zuschuss für Heizungstausch inkl. aller Boni" },
        { value: "15 Mio.", label: "Max. Fördervolumen EEW Modul 4 — Prozessoptimierung" },
      ]}
      tags={["BAFA EEW", "BEG", "KfW", "Modul 1-5", "Prozesswärme", "Energieberatung"]}
      faq={[
        {
          q: "Was fördert die BAFA EEW genau?",
          a: "Die Bundesförderung für Energie- und Ressourceneffizienz in der Wirtschaft (EEW) fördert in fünf Modulen: Querschnittstechnologien (Motoren, Pumpen, Druckluft), Prozesswärme aus Erneuerbaren (Solarthermie, Wärmepumpen), MSR-Technik und Energiemanagement, komplexe Prozessoptimierung ab 500.000 EUR Investition und Transformationskonzepte zur Treibhausgasneutralität. Die Fördersätze liegen zwischen 40 % und 55 % für KMU (Quelle: BAFA EEW-Richtlinie).",
        },
        {
          q: "Wie hoch ist die maximale Förderung?",
          a: "Die Förderhöhe variiert je nach Modul: Modul 1 (Querschnittstechnologien) bis 40 % für KMU, Modul 2 (Prozesswärme) bis 55 %, Modul 3 (MSR/Energiemanagement) bis 40 %, Modul 4 (Prozessoptimierung) bis 40 % bei maximal 15 Mio. EUR pro Vorhaben, Modul 5 (Transformationskonzepte) bis 60 % bei max. 80.000 EUR. Zusätzlich können KfW-Kredite mit Tilgungszuschuss kombiniert werden.",
        },
        {
          q: "Muss der Antrag vor der Investition gestellt werden?",
          a: "Ja — das ist die wichtigste Regel bei allen BAFA- und KfW-Förderprogrammen. Der Förderantrag muss vor Beginn des Vorhabens gestellt und bewilligt werden. Als Vorhabenbeginn gilt bereits der Abschluss eines Liefer- oder Leistungsvertrags. Planungsleistungen und Energieberatung gelten nicht als Vorhabenbeginn. Wir stellen sicher, dass die Antragsreihenfolge eingehalten wird.",
        },
        {
          q: "Kann ich EEW-Förderung mit ZIM kombinieren?",
          a: "Eine direkte Kumulierung von EEW und ZIM für dieselbe Maßnahme ist in der Regel nicht möglich, da beide Programme auf unterschiedliche Phasen abzielen: ZIM fördert Forschung und Entwicklung, EEW fördert die Investition in marktreife Technologien. Allerdings kann ein KMU ZIM für die Entwicklung einer neuen Technologie und anschließend EEW für deren betriebliche Implementierung nutzen — sequenziell, nicht parallel. Wir prüfen die optimale Kombination für Ihr Vorhaben.",
        },
      ]}
      relatedLinks={[
        { href: "/bafa-foerderung", title: "BAFA-Förderung" },
        { href: "/foerderberatung", title: "Förderberatung" },
        { href: "/nachhaltigkeitsstrategie", title: "Nachhaltigkeitsstrategie" },
      ]}
    />
  );
}
