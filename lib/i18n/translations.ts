export type Lang = "de" | "en";

export const translations = {
  de: {
    // ─── NavBar ───
    nav: {
      leistungen: "Leistungen",
      ueberUns: "Über uns",
      aktuell: "Aktuell",
      quickCheck: "Quick-Check starten",
      quickCheckMobile: "Quick-Check",
      menuOpen: "Menü öffnen",
    },

    // ─── HeroSection ───
    hero: {
      tag: "ZIM · BAFA · Cleantech · Berlin",
      headline: "Fertiges Förderkonzept vor dem ersten Gespräch.",
      sub: "Aktiver ZIM-Netzwerkmanager. Kein Honorar ohne Bewilligung.",
      body: `Bevor Sie eine Stunde investieren, haben wir Ihr Förderpotenzial bereits geprüft. Sie erhalten ein Konzept mit konkreten Programmen (<a href="/zim-foerderung" style="color:#2ECC71;text-decoration:none;border-bottom:1px solid rgba(46,204,113,0.35)">ZIM</a>, <a href="/bafa-foerderung" style="color:#2ECC71;text-decoration:none;border-bottom:1px solid rgba(46,204,113,0.35)">BAFA</a>, EFRE), realistischen Quoten und Finanzierungsplan — als Entscheidungsgrundlage, nicht als Verkaufsgespräch.`,
      ctaPrimary: "Mein Förderpotenzial entdecken →",
      ctaSecondary: "Leistungen",
      imgAlt: "Verde Onda – die Grüne Welle",
    },

    // ─── ProblemSection ───
    problem: {
      label: "Die Ausgangslage",
      headline: "Warum KMU ZIM- und BAFA-Förderung nicht nutzen.",
      body: "Über 2.000 Förderprogramme in Deutschland — und die meisten KMU nutzen keines davon. Die Gründe sind fast immer dieselben.",
      cards: [
        {
          title: "Unübersichtliche Förderlandschaft",
          desc: "Über 2.000 Programme, ständig wechselnde Fristen und undurchsichtige Kumulierungsregeln: Die meisten KMU lassen fünf- bis sechsstellige Summen liegen, weil der Überblick fehlt.",
        },
        {
          title: "Keine interne Förder-Kompetenz",
          desc: "Zwischen Tagesgeschäft und Förderbürokratie fehlt intern die Kapazität — und die spezifische Erfahrung, die ein erfolgreicher Antrag erfordert.",
        },
        {
          title: "Lieferketten- und ESG-Druck",
          desc: "Großkunden fordern ESG-Daten, Banken fragen nach Nachhaltigkeitskennzahlen. Wer nicht vorbereitet ist, riskiert Aufträge und Kreditkonditionen.",
        },
      ],
    },

    // ─── SolutionSection ───
    solution: {
      label: "Was wir tun",
      headline1: "Fünf Leistungen,",
      headline2: "ein Ziel: Ihr Fördergeld fließt.",
      body: "Von der Programmauswahl bis zum Verwendungsnachweis — alles aus einer Hand.",
      channels: [
        {
          label: "01",
          title: "Förderberatung",
          desc: "Von der Programmauswahl über die vollständige Antragstellung bis zum Verwendungsnachweis. Sie erhalten eine Bewilligung, nicht nur eine Empfehlung.",
          tags: ["Bund", "Länder", "EU", "Erfolgshonorar"],
        },
        {
          label: "02",
          title: "ZIM-Förderung",
          desc: "Einzelprojekte, Kooperationen und Innovationsnetzwerke — begleitet von einem aktiven ZIM-Netzwerkmanager.",
          tags: ["ZIM", "F&E", "Netzwerk", "BMWK"],
        },
        {
          label: "03",
          title: "BAFA-Förderung",
          desc: "Energieberatung, EEW-Investitionszuschüsse, BEG-Sanierung und STARK-Strukturwandel — alle BAFA-Programme aus einer Hand.",
          tags: ["EEW", "BEG", "STARK", "Energieeffizienz"],
        },
        {
          label: "04",
          title: "CSRD-Beratung",
          desc: "Wenn Großkunden ESG-Daten fordern: Wir liefern genau das, was die EU vorschreibt — nicht mehr, nicht weniger. Pragmatisch nach VSME-Standard.",
          tags: ["CSRD", "VSME", "ESG", "Reporting"],
        },
        {
          label: "05",
          title: "Nachhaltigkeitsstrategie",
          desc: "Nachhaltigkeitsstrategie mit direkter Anbindung an Förderprogramme. Jede Maßnahme ist mit einem Finanzierungsplan hinterlegt.",
          tags: ["Roadmap", "Strategie", "THG-Reduktion"],
        },
      ],
    },

    // ─── ResultsSection ───
    results: {
      label: "Nachgewiesene Ergebnisse",
      headline: "Was unsere Kunden gewinnen.",
      body: "Ausgewählte Projekte und Ergebnisse.",
      refsLabel: "Referenzen",
      outcomes: [
        {
          title: "Kein Risiko",
          desc: "Erfolgshonorar: Sie zahlen erst, wenn Fördermittel bewilligt sind. Kein Retainer, keine Vorabkosten.",
        },
        {
          title: "Messbare Wirkung",
          desc: "THG-Reduktion, Energieeffizienz, ESG-Readiness — mit konkreten KPIs, nicht mit Absichtserklärungen.",
        },
        {
          title: "Bis zu 60 % Zuschuss",
          desc: "Fördermittel erschließen, die Ihren Eigenanteil senken — mehr Spielraum für Investitionen ins Kerngeschäft.",
        },
      ],
      customers: [
        {
          nr: "01",
          company: "Kelorina",
          result: "55 % Zuschuss",
          type: "Erneuerbare Energien · Brandenburg",
          program: "Bundes-Förderprogramm",
          desc: "Vollständige Förderantragstellung und Bewilligung für ein Erneuerbare-Energien-Projekt. 55 % Zuschuss auf die Investitionssumme — Begleitung von der Programmprüfung bis zur Bewilligungsmitteilung in 5 Monaten.",
          tags: ["Erneuerbare Energien", "Förderantrag", "Bewilligung"],
        },
        {
          nr: "02",
          company: "Green Island",
          result: "60 % Zuschuss",
          type: "Cleantech · F&E · Sachsen",
          program: "ZIM-Förderung",
          desc: "Förderstrategie, Programmauswahl und vollständige Antragstellung im Bereich Energieforschung und Prozesseffizienz. 60 % Zuschuss bei einem sechsstelligen Projektvolumen.",
          tags: ["F&E", "Energieeffizienz", "ZIM"],
        },
        {
          nr: "03",
          company: "Kiyora",
          result: "ESG-Ready",
          type: "Lebensmittelindustrie · Berlin",
          program: "VSME-Standard",
          desc: "ESG-Datenstrategie nach VSME-Standard — lieferkettenfähig und proportional. Aufbau eines belastbaren Datensatzes für Großkunden-Anfragen und Bankgespräche.",
          tags: ["VSME", "ESG", "Lieferkette", "CSRD"],
        },
      ],
    },

    // ─── QuickCheckSection ───
    quickCheck: {
      label: "Kostenloser Schnellcheck",
      headline1: "Ihr Förderpotenzial",
      headline2: "in 3 Minuten.",
      body: "Erste Einschätzung Ihres Förderpotenzials in 3 Minuten. Kostenlos, unverbindlich.",
      loading: "Analyse läuft…",
      loadingSub: "Förderprogramme werden gematcht. Einen Moment.",
      error: "Die Analyse konnte nicht abgeschlossen werden. Bitte versuchen Sie es erneut.",
    },

    // ─── QuickCheckForm ───
    quickCheckForm: {
      stepCompany: "Unternehmen",
      stepProject: "Projekt",
      companyName: "Unternehmensname *",
      companyNamePlaceholder: "z.B. Müller GmbH",
      state: "Bundesland *",
      statePlaceholder: "Bundesland wählen",
      legalForm: "Unternehmensform *",
      legalFormPlaceholder: "Form wählen",
      companySize: "Unternehmensgröße *",
      companySizePlaceholder: "Größe wählen",
      companySizeHint: "Gem. EU-KMU-Definition (keine genauen Zahlen nötig)",
      revenue: "Jahresumsatz (Größenordnung) *",
      revenuePlaceholder: "Umsatzklasse wählen",
      revenueHint: "Nur zur Förderfähigkeitsprüfung – keine genauen Zahlen nötig",
      industry: "Branche *",
      industryPlaceholder: "z.B. Metallverarbeitung, Bäckerei, IT-Dienstleister...",
      categories: "Projektkategorien * (Mehrfachauswahl)",
      description: "Projektbeschreibung *",
      descriptionPlaceholder: "Beschreibe das Projekt konkret: Was soll gebaut/implementiert werden? Wo? Welches Ziel?",
      descriptionMin: "min.",
      investmentSum: "Investitionssumme *",
      investmentPlaceholder: "Summe wählen",
      plannedStart: "Geplanter Start *",
      startPlaceholder: "Start wählen",
      deMinimis: "De-minimis-Beihilfen in letzten 3 Jahren erhalten? *",
      deMinimisPlaceholder: "Bitte wählen",
      nextStep: "Weiter zu Projektdetails →",
      back: "← Zurück",
      analyze: "Analyse starten →",
      analyzing: "Analysiert…",
    },

    // ─── ResultsView ───
    resultsView: {
      goDesc: "Förderung empfohlen",
      nogoDesc: "Kein passendes Programm",
      conditionalLabel: "BEDINGT",
      conditionalDesc: "Prüfung erforderlich",
      programsIdentified: "identifiziert",
      risksLabel: "Risiken & Hinweise",
      matchingPrograms: "Passende Programme",
      fdbLabel: "Förderdatenbank.de",
      fdbChecking: "wird geprüft…",
      fdbAllResults: "↗ Alle Ergebnisse auf foerderdatenbank.de",
      fdbNoResults: "Keine zusätzlichen Treffer auf foerderdatenbank.de",
      fwmLabel: "Förderlotse Wachstumsmärkte",
      fwmChecking: "wird geprüft…",
      fwmAllResults: "↗ Alle Programme auf foerderlotse-wachstumsmaerkte.de",
      fwmNoResults: "Keine Auslandsprogramme gefunden",
      fwmSubtitle: "Auslandsförderung · GTAI / BAFA / GIZ · 275 Programme",
      recommendedPackage: "Empfohlenes VO Sustain Angebot",
      newRequest: "← Neue Anfrage",
      leadCapture: {
        headline: "Ihre Analyse als PDF erhalten",
        subline: "Wir senden Ihnen die vollständige Potenzialanalyse inkl. aller Programme per E-Mail — kostenlos.",
        emailPlaceholder: "ihre@email.de",
        namePlaceholder: "Name (optional)",
        button: "Analyse per E-Mail erhalten",
        success: "Ihre Analyse wurde versendet. Prüfen Sie Ihren Posteingang.",
        trust: "Kein Spam. Ihre Daten bleiben bei uns. Datenschutz gemäß DSGVO.",
      },
      ctaConsult: "Kostenloses Erstgespräch vereinbaren",
    },

    // ─── ProgramCard ───
    programCard: {
      verified: "✓ Verifiziert",
      pleaseCheck: "⚠ Bitte prüfen",
      requirements: "Voraussetzungen",
      nextSteps: "Nächste Schritte",
    },

    // ─── Aktuell ───
    aktuell: {
      heroLabel: "NEWS & UPDATES",
      heroHeadline: "Förderaufrufe & CSRD-News.",
      heroBody: "Förderaufrufe mit Fristen, CSRD-Updates und Neuigkeiten aus der deutschen Förderlandschaft — wöchentlich aktualisiert.",
      scroll: "Scroll",
      readMore: "Lesen →",
      articlesCount: "Beiträge",
      noArticles: "Keine Beiträge in dieser Kategorie.",
      filterAll: "Alle",
      expired: "Abgelaufen",
      today: "Heute!",
      tomorrow: "Morgen!",
      daysLeft: "Tage",
      backToNews: "← Zurück zu Aktuell",
      katFoerderaufruf: "Förderaufruf",
      katCSRD: "CSRD-News",
      katMarktinfo: "Marktinfo",
      katErfolg: "Erfolg",
    },

    // ─── Artikel-Detail ───
    artikel: {
      deadline: "Antragsfrist",
      source: "Quelle:",
      ctaHeadline: "Passt das zu Ihrem Unternehmen?",
      ctaBody: "In 3 Minuten sehen Sie, welche Förderprogramme für Sie relevant sind.",
      ctaButton: "Quick-Check starten →",
      deadlineExpired: "Abgelaufen",
      deadlineToday: "Heute!",
      deadlineTomorrow: "Morgen!",
      deadlineDays: "Tage",
    },

    // ─── AboutSection ───
    about: {
      label: "Der Gründer",
      headline: "Denis Jänicke",
      subtitle: "Gründer · VO Sustain · Berlin",
      quote: "Als aktiver ZIM-Netzwerkmanager schreibe ich die Anträge, die ich begutachten lasse. Ich kenne beide Seiten des Prozesses — und genau da liegt der Unterschied.",
      credentials: [
        { label: "ZIM · BAFA · EFRE", sub: "Kernprogramme" },
        { label: "Antrag bis Nachweis", sub: "Komplettbegleitung" },
        { label: "12+ Partner", sub: "Aktives ZIM-Netzwerk" },
      ],
      bio: "Förderberater mit Schwerpunkt ZIM, BAFA und EU-Förderung. Aktiver Netzwerkmanager für das ZIM-Innovationsnetzwerk SEAWEED DECARBON POLYMER (12+ Partner aus Forschung und Industrie). Erfahrung aus der vollständigen Förderkette: Antragstellung, Projektträger-Kommunikation, Mittelabruf und Verwendungsnachweis.",
      imgAlt: "Denis Jänicke – Inhaber VO Sustain",
    },

    // ─── LogoTickerSection ───
    logoTicker: {
      label: "FÖRDERLANDSCHAFT",
      headline: "Eine Auswahl der Programme",
      body: "Bundesweit, regional, europäisch — die Programme, die wir für Sie prüfen.",
    },

    // ─── FaqSection ───
    faq: {
      label: "FAQ",
      headline: "Häufige Fragen.",
      items: [
        {
          q: "Welche Förderprogramme gibt es für KMU?",
          a: "Deutschland hat über 2.000 Förderprogramme auf Bundes-, Landes- und EU-Ebene. Für F&E fördert ZIM bis zu 380.000 € je Einzelprojekt (bis 2,3 Mio. € bei Kooperationsprojekten) mit 25–60 % Fördersatz. Die Forschungszulage ergänzt das als steuerliche Gutschrift: 35 % der F&E-Personalkosten für KMU, direkt mit der Steuerschuld verrechenbar. Für Energieeffizienz zahlt BAFA EEW bis zu 55 % (Mindestinvestition 20.000 €). Dazu kommen Landesförderungen wie SAB (Sachsen) oder TAB (Thüringen) und zinsgünstige KfW-Kredite. Entscheidend ist der Einstieg: Nicht jedes Programm lässt sich kombinieren — De-minimis-Regeln und AGVO-Grenzen bestimmen, welche Programme parallel nutzbar sind.",
        },
        {
          q: "Sind KMU direkt CSRD-pflichtig?",
          a: "Nach dem EU-Omnibus I-Paket (Februar 2026) gelten neue Schwellen: direkt berichtspflichtig sind nur noch Unternehmen mit ≥ 1.000 Mitarbeitenden UND ≥ 450 Mio. € Umsatz — das trifft ca. 90 % weniger Unternehmen als ursprünglich geplant. Zusätzlich hat die EU einen Stop-the-Clock beschlossen: Für Berichtsjahre 2025 und 2026 sind die Fristen ausgesetzt, während die überarbeiteten ESRS-Standards im Trilogverfahren finalisiert werden. Trotzdem: Wer als Zulieferer oder Kreditnehmer von Großkunden oder Banken ESG-Daten liefern muss, ist indirekt betroffen. Der freiwillige VSME-Standard bietet genau dafür den richtigen Rahmen: 11 Basis-Datenpunkte (Module B1–B3), proportional und lieferkettenfähig. Per Value-Chain-Cap-Regelung dürfen Kunden aus der Lieferkette maximal VSME-Datenpunkte anfordern — keine ESRS-Vollberichte.",
        },
        {
          q: "Was kostet Förderberatung?",
          a: "Der Quick-Check ist kostenlos und liefert eine erste Einschätzung, welche Programme für Ihr Vorhaben infrage kommen. VO Sustain arbeitet bei der vollständigen Antragsbegleitung erfolgsbasiert: Die Beratungsgebühr wird als prozentualer Anteil der bewilligten Fördersumme berechnet und ist erst bei Bewilligung fällig — nicht bei Antragstellung. Sie tragen kein finanzielles Risiko, bevor Fördergelder fließen. Für Projekte mit mehreren Programmen (z.B. ZIM + Forschungszulage) wird der Gesamtaufwand vorab transparent kalkuliert.",
        },
        {
          q: "Wie lange dauert ein ZIM-Antrag?",
          a: "Der Prozess läuft in drei Phasen: Antragsvorbereitung (4–8 Wochen) umfasst Projektbeschreibung mit Neuheitsnachweis und technischem Risiko, Arbeitspakete, Kalkulation, Finanzierungsplan und AGVO-Erklärungen. Begutachtung beim Projektträger (VDI/VDE-IT oder AiF) dauert erfahrungsgemäß 3–6 Monate — externe Gutachter prüfen F&E-Charakter und Förderwürdigkeit, Rückfragen sind normal und kein Ablehnungssignal. Nach Bewilligung folgt der Mittelabruf im Projektverlauf nach tatsächlich entstandenen Kosten. Wichtig: Projektstart darf erst nach Antragstellung erfolgen — nachträgliche Finanzierung ist nicht möglich.",
        },
        {
          q: "Welche Voraussetzungen hat ZIM-Förderung?",
          a: "ZIM richtet sich an gewerbliche Unternehmen mit bis zu 499 Mitarbeitenden und weniger als 100 Mio. € Jahresumsatz — das ist bewusst breiter als die EU-KMU-Definition. Das Kernkriterium: Das Projekt muss echten F&E-Charakter haben, d.h. technisches Risiko (kein gesichertes Ergebnis), Neuheitsgrad gegenüber dem Stand der Technik und das Ziel eines neuen Produkts, Verfahrens oder einer neuen technischen Dienstleistung. Reine Investitionen, Marktanpassungen oder Software-Customizing reichen nicht. Fördersatz: 25–45 % (mittlere Unternehmen West) bis 55–60 % (kleine Unternehmen neue Bundesländer). De-minimis-Spielraum (300.000 € / 3 Jahre) muss vorab geprüft werden — alternativ greift die AGVO (Allgemeine Gruppenfreistellungsverordnung).",
        },
        {
          q: "Zuschuss, Darlehen oder Steuervorteil — was ist besser?",
          a: "Drei Förderformen mit unterschiedlicher Wirkung: Zuschüsse (z.B. ZIM, BAFA EEW) müssen nicht zurückgezahlt werden — sie sind echter Kapitalzufluss und erhöhen die Liquidität sofort nach Auszahlung. Zinsgünstige Darlehen (z.B. KfW-Programme) müssen zurückgezahlt werden, bieten aber deutlich bessere Konditionen als Bankdarlehen und schonen die Kreditlinie. Steuerliche Gutschriften (Forschungszulage nach FZulG) werden direkt mit der Körperschaft- oder Einkommensteuer verrechnet — auch bei Verlust im Gründungsjahr als Erstattung auszahlbar. Viele Projekte nutzen alle drei Säulen: ZIM-Zuschuss für F&E-Kosten, Forschungszulage für Personalkosten und KfW-Kredit für Investitionen — bei korrekter Kumulierungsprüfung rechtlich zulässig.",
        },
        {
          q: "Wie stelle ich einen ZIM-Antrag 2026?",
          a: "Ein ZIM-Antrag 2026 besteht aus vier Kernteilen: 1) Projektbeschreibung mit Nachweis des Stands der Technik und Begründung des technischen Risikos — das ist der kritischste Teil, weil Gutachter hier am häufigsten nachfragen. 2) Strukturierter Arbeitspaketplan mit Meilensteinen, Verantwortlichkeiten und Personalaufwand je AP. 3) Finanzierungsplan mit Gesamtkosten, beantragter Förderung, Eigen- und Fremdmitteln. 4) Beihilferechtliche Erklärungen: De-minimis-Selbstauskunft und/oder AGVO-Erklärung. Einreichung erfolgt digital über easy-Online beim zuständigen Projektträger (VDI/VDE-IT für die meisten Technologiethemen, AiF für angewandte Forschung). Fördersatz: 25–60 % je nach Unternehmensgröße und Standort. Typische Vorbereitungszeit: 4–8 Wochen.",
        },
        {
          q: "Welche BAFA-Förderung gibt es für Nachhaltigkeit?",
          a: "BAFA bietet drei relevante Programme: BAFA EEW (Energie- und Ressourceneffizienz in der Wirtschaft) fördert Prozesswärme, Abwärmenutzung, Druckluftsysteme und Antriebstechnik mit bis zu 55 % Zuschuss (KMU-Bonus inklusive) — Mindestinvestition 20.000 €, kombinierbar mit KfW-Kredit. BAFA Energieberatung Mittelstand fördert externe Energieberatungen mit bis zu 80 % (max. 8.000 € Zuschuss für KMU) — Grundlage für viele Investitionsanträge. BAFA Transformationskonzepte fördert Dekarbonisierungsroadmaps für energieintensive Betriebe mit bis zu 60 %. Alle drei Programme sind kumulierbar mit EFRE-Landesförderung (SAB, TAB, IBB), solange De-minimis-Grenzen eingehalten werden und die Gesamtförderquote den beihilferechtlichen Höchstsatz nicht übersteigt.",
        },
        {
          q: "Was unterscheidet VO Sustain von anderen Beratern?",
          a: "VO Sustain ist auf KMU im Nachhaltigkeitsbereich spezialisiert und kombiniert eigene Praxiserfahrung mit KI-gestützter Recherche. Der Gründer Denis Jänicke ist aktiver ZIM-Netzwerkmanager (SEAWEED DECARBON POLYMER, 12+ Partner) und kennt die Prozesse aus erster Hand — nicht nur aus Handbüchern. Der Ablauf: Kostenloser Quick-Check → Tiefenanalyse mit Programm-Matching → Antragsbegleitung bis zum Verwendungsnachweis. Kein Unternehmensberatungsvolumen, keine anonymen Teams — Sie arbeiten direkt mit der Fachkraft, die Ihren Antrag schreibt. Das Modell: Success-Fee, fällig erst bei Bewilligung. Kein finanzielles Risiko für Sie.",
        },
        {
          q: "Wie ist die Vergütung aufgebaut?",
          a: "Kein Retainer, keine Vorauszahlung, keine Gebühr bei Ablehnung. Die Vergütung ist eine Erfolgsprovision auf die bewilligte Fördersumme — und je größer die bewilligte Summe, desto niedriger der Prozentsatz: bis 100.000 € sind es 10 %, von 100.001 bis 300.000 € 7 %, von 300.001 bis 600.000 € 5 %, darüber hinaus 3,5 %. Das funktioniert wie ein Steuerstufenmodell: Jede Stufe gilt nur für den jeweiligen Teilbetrag. Bei einer bewilligten Förderung von beispielsweise 150.000 € ergibt sich: 10 % auf 100.000 € + 7 % auf 50.000 € = 13.500 €. Fälligkeit entsteht erst bei tatsächlicher Auszahlung der Fördermittel. Werden mehrere Programme bewilligt (z.B. ZIM und BAFA), wird jeder Bescheid separat berechnet.",
        },
        {
          q: "Was ist De-minimis — und wann wird es relevant?",
          a: "De-minimis ist eine EU-Beihilferegelung: Jedes Unternehmen (inkl. verbundener Unternehmen im EU-Sinne) darf innerhalb von drei Steuerkalenderjahren maximal 300.000 € an De-minimis-Beihilfen erhalten — eine 2024 auf 300.000 € angehobene Grenze (vorher 200.000 €). Viele kleine BAFA-, SAB- und KfW-Programme laufen unter De-minimis. Wer diese Grenze bereits ausgeschöpft hat, kann bestimmte Programme nicht mehr nutzen oder muss auf AGVO (Allgemeine Gruppenfreistellungsverordnung) ausweichen, die höhere Beträge erlaubt, aber strengere Kriterien stellt. Falsch kumulierte Programme können zur Rückforderung der gesamten Beihilfe führen — rückwirkend für alle drei Jahre. VO Sustain prüft den De-minimis-Status vor jeder Empfehlung.",
        },
        {
          q: "Welche Förderung gibt es für Cleantech-Unternehmen?",
          a: "Cleantech-Unternehmen (Energie, Kreislaufwirtschaft, Bioökonomie, Wasserstoff, CO₂-Reduktion) haben Zugang zu einem überdurchschnittlich breiten Förderspektrum: ZIM fördert F&E-Projekte mit bis zu 60 % — besonders relevant für Cleantech-Innovationen mit technischem Neuheitsgrad. BAFA EEW fördert Investitionen in Prozesswärme, Abwärmenutzung und Druckluft mit bis zu 55 %. Das BMWK-Programm »Dekarbonisierung der Industrie« fördert Transformationskonzepte mit bis zu 60 %. Auf EU-Ebene bieten Horizon Europe (Cluster 5: Klima & Energie) und das LIFE-Programm Zugang zu europäischen Projektmitteln. Hinzu kommen EFRE-Landesförderungen (SAB in Sachsen, TAB in Thüringen, IBB in Berlin) mit Zuschüssen zwischen 30–50 %. Cleantech-Unternehmen können oft mehrere Programme kumulieren — vorausgesetzt, Beihilfegrenzen nach AGVO und De-minimis werden eingehalten. Entscheidend ist die richtige Programmkombination: Nicht jede Kombination ist zulässig.",
        },
        {
          q: "Welche Förderung gibt es für Energiewende-Projekte?",
          a: "Die Energiewende ist für KMU ein doppelter Hebel: als Investitionsthema (Effizienz, Erneuerbare) und als Innovationsthema (F&E in neuen Technologien). Auf der Investitionsseite fördert BAFA EEW bis zu 55 % auf Prozesswärme, Abwärmenutzung und Antriebstechnik (Mindestinvestition 20.000 €). KfW-Kredite (KfW 295 Energieeffizienz Produktion) bieten zusätzliche zinsgünstige Finanzierung. Für Energieberatungen fördert BAFA bis zu 80 % (max. 8.000 €) — oft der erste Schritt, bevor Investitionsanträge gestellt werden. Auf der Innovationsseite fördert ZIM F&E-Projekte im Bereich erneuerbare Energien und Energieeffizienz mit 25–60 %. Die Forschungszulage (35 % der F&E-Personalkosten) ist dabei zusätzlich nutzbar. Richtig kombiniert lässt sich ein Energieeffizienzprojekt mit Zuschuss, Steuergutschrift und zinsgünstigem Darlehen gleichzeitig finanzieren — legal, wenn Kumulierungsregeln beachtet werden.",
        },
        {
          q: "Was ist ein ZIM-Innovationsnetzwerk?",
          a: "Ein ZIM-Innovationsnetzwerk ist ein geförderter Verbund aus mindestens sechs Unternehmen und Forschungseinrichtungen, die gemeinsam an einem technologischen Themenschwerpunkt arbeiten. Das Netzwerk wird von einem Netzwerkmanager koordiniert, der die Kommunikation, Projektentwicklung und Förderantragsstellung übernimmt. Das BMWK fördert ZIM-Netzwerke in zwei Phasen: Phase 1 (Aufbau, max. 12 Monate, bis zu 380.000 € Zuschuss) und Phase 2 (Technologieentwicklung, bis zu 24 Monate). Voraussetzungen: Mindestens sechs Partner, klares technologisches Verbundziel, Neuheitsnachweis. VO Sustain managt aktiv ein ZIM-Innovationsnetzwerk (SEAWEED DECARBON POLYMER, 12+ Partner) und begleitet Unternehmen beim Aufbau eigener Netzwerke — von der Partneridentifikation bis zum Erstantrag.",
        },
        {
          q: "Was kostet erfolgsbasierte Förderberatung?",
          a: "Erfolgsbasierte Förderberatung bedeutet: kein Honorar bei Ablehnung, Gebühr nur bei Bewilligung. Marktübliche Sätze liegen zwischen 5–15 % des bewilligten Fördervolumens. VO Sustain arbeitet mit Staffelprovision: 10 % bis 100.000 €, 7 % von 100.001–300.000 €, 5 % von 300.001–600.000 €, 3,5 % darüber — transparent und BGH-konform. Worauf man achten sollte: Erstens, ob Vorauszahlungen oder Retainer verlangt werden (bei reinem Erfolgshonorar-Modell nicht legitim). Zweitens, ob der Berater den Antrag selbst schreibt oder nur koordiniert — der Unterschied ist erheblich für die Bewilligungswahrscheinlichkeit. Drittens, ob die Honorarfälligkeit an die tatsächliche Auszahlung (nicht Bewilligung) geknüpft ist. Bei VO Sustain: Fälligkeit entsteht erst bei Mittelauszahlung. Kein Retainer, kein Quick-Check-Honorar.",
        },
        {
          q: "Welche Förderung gibt es für Bioökonomie-KMU?",
          a: "Ja — und dieser Bereich ist fördertechnisch einer der am stärksten wachsenden. Das BMBF fördert Bioökonomie-F&E-Projekte im Rahmenprogramm Bioökonomiestrategie 2030 direkt (bis 60 %). ZIM ist für Bioökonomie-Unternehmen mit F&E-Charakter einsetzbar — besonders für Verfahrensinnovationen in Fermentation, Biopolymere und biobasierte Materialien. LIFE (EU) fördert Demonstrations- und Pilotprojekte im Bereich Kreislaufwirtschaft und nachhaltige Bioökonomie. Das BMWK-Programm »Biobasierte Produkte und Prozesse« bietet projektbasierte Förderung für Skalierungsprojekte. Auf Landesebene gibt es starke Förderung über EFRE: Sachsen (SAB), Thüringen (TAB), Mecklenburg-Vorpommern. Bioökonomie-Projekte haben einen strukturellen Vorteil: Viele lassen sich sowohl als F&E-Projekt (ZIM) als auch als Umweltschutzmaßnahme (BAFA/BMWK) qualifizieren, was Kumulierungsmöglichkeiten eröffnet.",
        },
      ],
    },

    // ─── WhySection ───
    why: {
      label: "WAS UNS UNTERSCHEIDET",
      headline: "Drei Unterschiede,",
      headline2: "die zählen.",
      usps: [
        {
          number: "01",
          title: "Fertiges Förderkonzept vor dem Erstgespräch.",
          body: "Wir investieren vorab in Ihr Projekt, weil wir nur Mandate annehmen, bei denen wir von der Förderfähigkeit überzeugt sind. Sie erhalten ein Konzept mit konkreten Programmen und Quoten — als Entscheidungsgrundlage, nicht als Verkaufsgespräch.",
          tags: ["Konzept-First", "Vorab-Analyse", "349 Programme"],
        },
        {
          number: "02",
          title: "Erfolgshonorar. Kein Risiko für Sie.",
          body: "Kein Retainer, keine Vorauszahlung, keine Gebühr bei Ablehnung. Unser Honorar wird als Staffelprovision auf die bewilligte Fördersumme berechnet — fällig erst bei tatsächlicher Auszahlung. Je höher die Summe, desto niedriger der Satz.",
          tags: ["Erfolgshonorar", "Staffelprovision", "0 € Risiko"],
        },
        {
          number: "03",
          title: "Aktiver ZIM-Netzwerkmanager — nicht nur Berater.",
          body: "Denis Jänicke managt aktiv das ZIM-Innovationsnetzwerk SEAWEED DECARBON POLYMER (12+ Partner aus Forschung und Industrie). Wer ZIM-Förderung beantragt, arbeitet mit jemandem zusammen, der selbst Netzwerke aufbaut und Anträge bei Projektträgern einreicht.",
          tags: ["ZIM-Netzwerkmanager", "12+ Partner", "Cleantech"],
        },
      ],
    },

    // ─── Leistungsseiten ───
    services: {
      backToHome: "← Zurück zur Startseite",
      ctaHeadline: "Förderpotenzial Ihres Vorhabens prüfen",
      ctaBody: "Kostenlose Ersteinschätzung in 3 Minuten — finden Sie heraus, welche Förderprogramme für Ihr Unternehmen relevant sind.",
      ctaButton: "Quick-Check starten →",
      ctaEmail: "Oder direkt schreiben:",
      processLabel: "SO ARBEITEN WIR",
      processHeadline: "Unser Prozess.",
      factsLabel: "ZAHLEN & FAKTEN",
      factsHeadline: "Das spricht für sich.",
      scopeLabel: "LEISTUNGSUMFANG",
      scopeHeadline: "Was wir für Sie tun.",
      relatedLabel: "WEITERE LEISTUNGEN",
    },
    foerderberatung: {
      heroLabel: "INDIVIDUELLE FÖRDERBERATUNG",
      heroHeadline: "Individuelle Förderberatung für KMU.",
      heroSub: "Professionelle Beratung schützt vor Antragsfehlern, Sperrfristen und entgangener Förderung — wo Selbstrecherche aufhört, beginnt echte Expertise.",
      heroBody: "Über 2.000 Förderprogramme in Deutschland, jedes mit eigenen Fristen, Kumulierungsregeln und Antragspflichten. Falsche Programmwahl oder Formfehler bedeuten Ablehnung und Sperrfrist. Wir matchen Ihr Vorhaben gegen 64+ geprüfte Programme — von ZIM (bis 60 %) über die Forschungszulage (35 % für KMU, steuerlich anrechenbar) bis zum EIC Accelerator (100 % Zuschuss bis 2,5 Mio. €).",
      scope: [
        { title: "Förderpotenzial-Analyse", desc: "Systematische Prüfung gegen 64+ Bundes-, Landes- und EU-Programme. Kumulierungsprüfung nach De-minimis (300.000 € / 3 Jahre) und AGVO inklusive — denn falsch kombinierte Programme riskieren Rückforderungen." },
        { title: "Programm-Matching", desc: "Direktvergleich von Fördersätzen, Volumen und Antragsbedingungen: ZIM bis 60 % (kleine Unternehmen Ost), BAFA EEW bis 55 %, BAFA Energieberatung bis 80 %, KfW Klimaschutz ab 2,19 % eff. p.a. De-minimis-Spielraum wird vor jeder Empfehlung geprüft." },
        { title: "Antragstellung", desc: "Vollständige Erstellung aller Unterlagen: Neuheitsnachweis und technisches Risiko (ZIM-Kernkriterien), Projektbeschreibung, Arbeitspaketstruktur, Kalkulation, Finanzierungsplan und Beihilfe-Erklärungen nach AGVO." },
        { title: "Begleitung & Verwendungsnachweis", desc: "Projektträger-Kommunikation bei Rückfragen und Gutachten, Auflagen-Handling, Meilenstein-Tracking, Zwischenberichte und audit-sicherer Verwendungsnachweis — der oft aufwändiger ist als der Antrag selbst." },
      ],
      process: [
        { step: "01", title: "Erstgespräch (kostenlos)", desc: "Unternehmensprofil, Investitionsvorhaben und De-minimis-Status klären. Ergebnis: erste Programmeinschätzung und Förderpotenzial — ohne Verpflichtung." },
        { step: "02", title: "Tiefenanalyse", desc: "Matching gegen 64+ Programme, Kumulierungsprüfung, Fristen- und Risikoanalyse. Ergebnis: priorisierte Shortlist mit Fördersätzen, Volumen und konkreten nächsten Schritten." },
        { step: "03", title: "Antragstellung", desc: "Projektbeschreibung mit Neuheitsnachweis und technischem Risiko, Arbeitspakete, Kalkulation, Finanzierungsplan, AGVO-Erklärungen — vollständig und einreichungsreif." },
        { step: "04", title: "Bewilligung bis Verwendungsnachweis", desc: "Projektträger-Kommunikation, Rückfragen und Auflagen, Meilenstein-Reporting, audit-sicherer Verwendungsnachweis. Success-Fee: fällig erst bei Bewilligung." },
      ],
      facts: [
        { value: "64+", label: "Programme geprüft & aktuell" },
        { value: "bis 80 %", label: "max. Zuschuss (BAFA Energieberatung)" },
        { value: "35 %", label: "Forschungszulage für KMU (steuerlich)" },
        { value: "0 €", label: "Risiko — Success-Fee erst bei Bewilligung" },
      ],
      programs: ["ZIM", "BAFA EEW", "Forschungszulage", "EFRE", "SAB", "INNO-KOM", "KfW 293", "Horizon Europe EIC", "LIFE", "TAB/FTI", "BAFA Energieberatung"],
    },
    csrdBeratung: {
      heroLabel: "CSRD & NACHHALTIGKEITSBERICHTERSTATTUNG",
      heroHeadline: "CSRD-Beratung nach VSME-Standard für KMU.",
      heroSub: "Für die meisten KMU gilt: keine direkte Berichtspflicht — aber Großkunden und Banken fordern ESG-Daten. Wir sichern Ihre Lieferketten-Position mit minimalem Aufwand.",
      heroBody: "Omnibus I (Feb. 2026) hat die CSRD-Schwellen auf 1.000 Mitarbeitende UND 450 Mio. EUR Umsatz angehoben — ca. 90 % weniger betroffene Unternehmen. Für nicht-börsennotierte KMU besteht bis zur vollständigen Umsetzung keine direkte Berichtspflicht. Trotzdem: Wer als Zulieferer oder Kreditnehmer gefragt wird, braucht belastbare Antworten. Wir liefern sie — nach VSME-Standard, proportional und lieferkettenfähig.",
      scope: [
        { title: "Berichtspflicht-Check", desc: "Direkt oder indirekt betroffen? Wir prüfen gegen die Omnibus I-Schwellen (≥1.000 MA UND ≥450 Mio. EUR Umsatz), den aktuellen Stop-the-Clock-Status (Berichtsjahre 2025/2026 ausgesetzt) und Ihre konkreten Lieferketten-Anfragen. Ergebnis: klare Einordnung und Handlungsempfehlung — keine Rechtsmeinung." },
        { title: "Wesentlichkeitsanalyse", desc: "Double Materiality Assessment nach ESRS-Logik: Impact Materiality (Welche Auswirkungen hat Ihr Unternehmen auf Umwelt und Gesellschaft?) und Financial Materiality (Welche ESG-Risiken und -Chancen wirken auf Ihre Finanzen?). Fokussiert auf das, was für Ihre Branche und Unternehmensgröße tatsächlich zählt." },
        { title: "VSME-Implementierung", desc: "Datenerhebung nach VSME-Standard: 11 Basis-Datenpunkte aus den Modulen B1 (Geschäftsmodell), B2 (THG-Bilanz, Energie, Wasser, Abfall, Biodiversität) und B3 (Mitarbeiter, Arbeitsbedingungen) — lieferkettenfähig und mit Value-Chain-Cap-Schutz. Ihr Kunde darf per EU-Regelung maximal VSME-Datenpunkte fordern, keine ESRS-Vollberichte." },
        { title: "ESG-Datenmanagement", desc: "Aufbau einer schlanken Dateninfrastruktur: THG-Scope 1 (Direktemissionen), Scope 2 (Strom und Wärme) und — wo relevant — Scope 3 (Lieferkette). Dazu Energie-, Wasser- und Abfallkennzahlen sowie Sozialdaten nach VSME B3. Ergebnis: ein belastbarer, wiederverwertbarer Datensatz für Banken, Ausschreibungen und Großkunden." },
      ],
      process: [
        { step: "01", title: "Pflicht-Check", desc: "30 Minuten. Ergebnis: direkt berichtspflichtig (Omnibus I-Schwellen erfüllt), indirekt betroffen (Lieferkette, Bankkredit oder Ausschreibung) oder kein aktueller Handlungsbedarf. Inklusive Stop-the-Clock-Einschätzung für Berichtsjahre 2025 und 2026." },
        { step: "02", title: "Wesentlichkeitsanalyse", desc: "Double Materiality: Welche ESG-Themen haben echten Impact auf Ihr Unternehmen — und welche können Sie zuverlässig ausklammern? Deliverable: priorisiertes Themenregister als Grundlage für alle weiteren Schritte." },
        { step: "03", title: "VSME-Setup", desc: "Datenerhebung der 11 Basis-Datenpunkte (Module B1–B3), Gap-Analyse gegen vorhandene Daten, Prozess-Integration in Ihren Reporting-Rhythmus. Deliverable: strukturierter ESG-Datensatz, einsatzbereit für externe Anfragen." },
        { step: "04", title: "Shield-Template", desc: "Lieferkettenfähiger Antwort-Datensatz mit Value-Chain-Cap-Schutz: standardisierte Antworten auf Kundenanfragen, die exakt den VSME-Umfang abdecken — nicht mehr, nicht weniger. Wiederverwendbar für alle Anfragen aus der Lieferkette." },
      ],
      facts: [
        { value: "~90 %", label: "weniger Betroffene durch Omnibus I" },
        { value: "11", label: "VSME-Basisdatenpunkte (B1–B3)" },
        { value: "61 %", label: "ESRS-Vereinfachung ggü. Ursprungsentwurf" },
        { value: "30 Min", label: "Pflicht-Check — Klarheit sofort" },
      ],
      standards: ["CSRD", "ESRS", "VSME B1–B3", "LSME", "Double Materiality", "Value Chain Cap", "Omnibus I"],
    },
    zimFoerderung: {
      heroLabel: "ZIM-FÖRDERUNG & NETZWERKMANAGEMENT",
      heroHeadline: "ZIM-Förderung für KMU: Einzelprojekte, Kooperationen, Netzwerke.",
      heroSub: "Einzelprojekte bis 380.000 €, Kooperationen bis 2,3 Mio. € — mit bis zu 60 % Fördersatz für kleine Unternehmen.",
      heroBody: "Das Zentrale Innovationsprogramm Mittelstand ist das wichtigste Bundes-Förderprogramm für F&E in KMU. Denis Jänicke kennt es nicht nur als Berater — er managt aktiv ein ZIM-Netzwerk mit 12+ Partnern und weiß, wo Anträge scheitern.",
      scope: [
        { title: "ZIM-Einzelprojekte", desc: "F&E-Projekte einzelner Unternehmen: neue Produkte, Verfahren oder technische Dienstleistungen. Max. 380.000 € Fördervolumen, Fördersatz bis 60 % für kleine Unternehmen in den neuen Bundesländern (45 % für mittlere Unternehmen West)." },
        { title: "ZIM-Kooperationsprojekte", desc: "Mindestens 2 Unternehmen oder 1 Unternehmen + 1 Forschungseinrichtung. Gesamtvolumen bis 2,3 Mio. € — mit Durchführbarkeitsstudien als Vorlauf möglich. Strategischer Vorteil: geteiltes Risiko, höhere Fördersätze." },
        { title: "ZIM-Netzwerke", desc: "Technologische Innovationsnetzwerke: national ab 6 Unternehmen, international ab 4 KMU + 2 ausländischen KMU. Phase 1 (Aufbau) bis 18 Monate, Phase 2 (F&E-Projekte) bis 3 Jahre. NMI-Leistungsphase 1 umfasst Potenzialanalyse, Roadmap, Community Building und Multilaterale Netzwerkvereinbarung." },
        { title: "Durchführbarkeitsstudien & Markteinführung", desc: "Vorstudien zur Klärung von Stand der Technik und Marktpotenzial als ZIM-Vorstufe. Markteinführungsförderung bis 60.000 € (De-minimis) für die kommerzielle Umsetzung nach dem F&E-Projekt." },
      ],
      process: [
        { step: "01", title: "Innovations- & Förderfähigkeits-Check", desc: "Prüfung auf ZIM-Kriterien (F&E-Charakter, technisches Risiko, Neuheitsgrad) und De-minimis-Spielraum (300.000 € / 3 Jahre). Klärung der optimalen Projektform — Einzel, Kooperation oder Netzwerk." },
        { step: "02", title: "Antrag & Projektdesign", desc: "Ausarbeitung der Projektbeschreibung, Arbeitspakete, Meilensteinplan und Finanzierungsplan. Vollständigkeits-Check gegen aktuelle PT-Anforderungen — häufigster Ablehnungsgrund sind fehlende oder veraltete Formulare." },
        { step: "03", title: "Einreichung & PT-Kommunikation", desc: "Einreichung beim Projektträger (VDI/VDE-IT oder AiF) inkl. Handling von QES-Problemen bei digitalen Signaturen. Begleitung durch Rückfragen und Gutachterkommunikation." },
        { step: "04", title: "Projektbegleitung bis Verwendungsnachweis", desc: "Meilenstein-Reporting, Zwischenberichte und Finanzplan-Überwachung (20 %-Flexibilitätsregel je Kostenart, darüber Umwidmungsantrag). Verwendungsnachweis audit-sicher erstellt." },
      ],
      facts: [
        { value: "380k", label: "EUR max. Einzelprojekt" },
        { value: "bis 60 %", label: "Fördersatz (kleine Unternehmen Ost)" },
        { value: "2,3 Mio.", label: "EUR max. Kooperationsprojekt" },
        { value: "12+", label: "Partner im eigenen ZIM-Netzwerk" },
      ],
      experience: "Denis Jänicke ist aktiver ZIM-Netzwerkmanager für das SEAWEED DECARBON POLYMER-Netzwerk — 12+ Partner aus Forschung und Industrie, Phase 1 und 2, MNV-Verhandlung, PT-Kommunikation mit VDI/VDE-IT. Er kennt die typischen Stolpersteine aus der Praxis: unvollständige Antragsunterlagen, QES-Probleme bei Signaturen, Eigenanteil-Risiken bei Partnerausfall und Zeitverzug beim Phase-2-Antrag. Diese Erfahrung fließt direkt in jeden Antrag.",
      types: ["Einzelprojekt", "Kooperationsprojekt", "Netzwerk", "Durchführbarkeitsstudie", "Markteinführung", "International"],
    },

    nachhaltigkeitsstrategie: {
      heroLabel: "NACHHALTIGKEITSSTRATEGIE",
      heroHeadline: "Nachhaltigkeitsstrategie für KMU mit Förderfinanzierung.",
      heroSub: "Eine Nachhaltigkeitsstrategie ist kein Selbstzweck — sie erschließt Fördergelder, schützt Lieferkettenbeziehungen und senkt Kosten. Wir entwickeln Roadmaps, die priorisieren statt überfordern.",
      heroBody: "Viele KMU haben Nachhaltigkeitsziele, aber keine klare Priorität und keine Verbindung zu konkreten Maßnahmen oder Förderprogrammen. Wir übersetzen den Transformationsauftrag in eine finanzierbare Schritt-für-Schritt-Roadmap — mit messbaren KPIs, klarer Verantwortlichkeit und direktem Link zu BAFA, KfW, ZIM und SAB.",
      scope: [
        { title: "Status-Quo-Analyse", desc: "THG-Bilanz Scope 1 & 2 (Direktemissionen, Strom und Wärme), Energieverbrauch, Materialströme und relevante Sozialkennzahlen. Basis für alle strategischen Entscheidungen — und Pflichtgrundlage für BAFA-Förderanträge." },
        { title: "Wesentlichkeitsanalyse", desc: "Welche Nachhaltigkeitsthemen sind für Ihre Branche, Ihre Kunden und Ihre Risikolage tatsächlich relevant? Wir priorisieren nach Impact und Förderfähigkeit — damit Sie nicht an 20 Baustellen gleichzeitig arbeiten." },
        { title: "Roadmap & Maßnahmenplan", desc: "3-Jahres-Roadmap mit konkreten Maßnahmen, Investitionsvolumen, eingeplanten Fördermitteln (BAFA EEW, KfW, ZIM, SAB) und THG-Reduktionszielen. Jede Maßnahme ist mit einem Förderpotenzial hinterlegt." },
        { title: "Umsetzungsbegleitung", desc: "Quartalsweises Monitoring der KPIs, Anpassung der Roadmap bei regulatorischen Änderungen (CSRD, Lieferkettensorgfaltspflicht, EU-Taxonomie) und Begleitung der Förderanträge für priorisierte Maßnahmen." },
      ],
      process: [
        { step: "01", title: "Analyse & Erstgespräch", desc: "Unternehmensprofil, Branche, bisherige Maßnahmen und Förderstatus klären. Erste Einschätzung des Förderpotenzials und relevanter Programme. Kostenlos und ohne Verpflichtung." },
        { step: "02", title: "THG-Bilanz & Wesentlichkeit", desc: "Berechnung der Scope 1 & 2 Emissionen, Energiebilanz und Ressourcenverbrauch. Wesentlichkeitsmatrix: Wo ist Handlungsbedarf, was ist förderbar, was schützt Lieferkettenbeziehungen?" },
        { step: "03", title: "Strategie & Roadmap", desc: "Priorisierter Maßnahmenplan mit Kosten-Nutzen-Abschätzung, eingeplanten Fördermitteln und THG-Reduktionspfad. Ergebnis: ein 3-Jahres-Fahrplan, den Ihr Team umsetzen kann." },
        { step: "04", title: "Umsetzung & Monitoring", desc: "Begleitung der Maßnahmenumsetzung, Förderantragsstellung für priorisierte Investitionen, quartalsweises KPI-Reporting und Anpassung bei regulatorischen Änderungen." },
      ],
      facts: [
        { value: "bis 80 %", label: "Förderquote für Energieeffizienzmaßnahmen (BAFA)" },
        { value: "3 Jahre", label: "Typischer Roadmap-Horizont" },
        { value: "Scope 1+2", label: "THG-Bilanzierung als Ausgangspunkt" },
        { value: "0 €", label: "Risiko — Success-Fee erst bei Förder-Bewilligung" },
      ],
      tags: ["THG-Bilanz", "Roadmap", "BAFA EEW", "KfW", "ZIM", "SAB", "EU-Taxonomie", "Lieferkette", "Scope 1+2"],
    },

    bafaFoerderung: {
      heroLabel: "BAFA-FÖRDERUNG & ENERGIEEFFIZIENZ",
      heroHeadline: "BAFA-Förderung für KMU: Energieberatung, EEW & Transformation.",
      heroSub: "Bis 80 % Zuschuss für Energieberatung, bis 55 % für Effizienzinvestitionen — kumulierbar mit KfW und SAB.",
      heroBody: "Das BAFA ist das zentrale Förderprogramm für Energieeffizienz und industrielle Transformation in Deutschland. Die Besonderheit: Anträge müssen vor Vorhabenbeginn gestellt werden — ein formaler Fehler, der viele KMU ihre Förderung kostet. Wir stellen sicher, dass Ihr Antrag rechtzeitig und vollständig eingereicht wird.",
      scope: [
        { title: "BAFA Energieberatung Mittelstand", desc: "Bis 80 % Förderquote für qualifizierte Energieberatung durch einen BAFA-zugelassenen Berater. Förderfähig: detaillierte Energieanalyse mit Maßnahmenkonzept. Voraussetzung: Unternehmen mit mindestens 2 Beschäftigten. Ergebnis: dokumentierte Einsparpotenziale — und direkte Vorbereitung auf EEW-Anträge." },
        { title: "Bundesförderung Energie- und Ressourceneffizienz (EEW)", desc: "Investitionszuschüsse von bis zu 55 % für Energie- und Ressourceneinsparung in der Produktion. Fördermodule: Querschnittstechnologien (Motoren, Pumpen, Druckluft), Prozesswärme aus erneuerbaren Energien, Abwärmenutzung. Mindestinvestition 30.000 € netto, Antragstellung im BAFA-Portal vor Vorhabenbeginn." },
        { title: "BAFA Bundesförderung effiziente Gebäude (BEG)", desc: "Heizungsförderung (Wärmepumpe, Pelletkessel, Solarthermie) mit bis zu 70 % Förderanteil (Basis + Klima-Bonus). Für Unternehmensgebäude und vermietete Objekte. Kombination mit KfW 261 möglich — optimale Kumulierung prüfen wir vorab." },
        { title: "BAFA Transformationsprogramm", desc: "Förderung für tiefgreifende Dekarbonisierung in energie- und treibhausgasintensiven Industrien. Bis 50 % Förderquote für transformative Investitionen in klimaneutrale Produktionsverfahren. Relevante Branchen: Lebensmittel, Getränke, Metall, Chemie, Glas, Papier." },
      ],
      process: [
        { step: "01", title: "Erstcheck & Förderfähigkeitsanalyse", desc: "Prüfung auf BAFA-Kriterien: Unternehmenstyp, Investitionsvorhaben, De-minimis-Spielraum und Kumulierbarkeit mit KfW, ZIM oder SAB. Wichtigste Prüffrage: Ist das Vorhaben noch nicht begonnen? Bindende Bestellungen gelten bereits als Vorhabenbeginn." },
        { step: "02", title: "Antragstellung vor Vorhabenbeginn", desc: "Der häufigste Fehler: Maßnahmen werden begonnen, bevor der Antrag gestellt wurde — und sind damit nicht mehr förderfähig. Wir koordinieren Antrag, Energieberater-Beauftragung und Investitionstiming, damit kein Förderpotenzial verloren geht." },
        { step: "03", title: "Begleitung der Umsetzung", desc: "Nach Zuwendungsbescheid: Umsetzungsbegleitung, Rechnungsmanagement und Dokumentation der geförderten Maßnahmen. Einhaltung von Fristen (i.d.R. 18–36 Monate Umsetzungszeitraum) und Abschlussbedingungen." },
        { step: "04", title: "Verwendungsnachweis & Auszahlung", desc: "Vollständige Zusammenstellung aller Nachweisdokumente (Rechnungen, Liefernachweise, Energiedatenvergleich). Technische Nachweise gemäß BAFA-Anforderungen (Effizienzklassen, Messkonzept). Abruf des Zuschusses nach Prüfung." },
      ],
      facts: [
        { value: "bis 80 %", label: "Zuschuss Energieberatung Mittelstand" },
        { value: "bis 55 %", label: "für EEW-Investitionen" },
        { value: "bis 70 %", label: "Heizungsförderung BEG" },
        { value: "0 €", label: "Risiko — Erfolgshonorar erst bei Bewilligung" },
      ],
      types: ["BAFA Energieberatung", "BAFA EEW", "BAFA BEG", "Transformationsprogramm", "Wärmepumpe", "Abwärmenutzung", "Druckluft", "Dekarbonisierung"],
    },

    // ─── FooterSection ───
    footer: {
      tagline: "Förderberatung für deutsche KMU. Fördermittelmanagement · CSRD · Nachhaltigkeitsstrategie.",
      location: "Berlin, Deutschland",
      navLabel: "Navigation",
      navLinks: [
        { label: "Leistungen", href: "/#leistungen" },
        { label: "Förderberatung", href: "/foerderberatung" },
        { label: "BAFA-Förderung", href: "/bafa-foerderung" },
        { label: "CSRD-Beratung", href: "/csrd-beratung" },
        { label: "ZIM-Förderung", href: "/zim-foerderung" },
        { label: "Nachhaltigkeitsstrategie", href: "/nachhaltigkeitsstrategie" },
        { label: "Quick-Check", href: "/#quick-check" },
        { label: "Über uns", href: "/#ueber-uns" },
      ],
      contactLabel: "Kontakt",
      copyright: "© 2026 VO Sustain · Denis Jänicke",
      impressum: "Impressum",
      datenschutz: "Datenschutz",
      cookieSettings: "Cookie-Einstellungen",
    },

    // ─── CookieBanner ───
    cookie: {
      text: "Diese Website verwendet nur technisch notwendige Cookies.",
      privacyLink: "Datenschutz",
      accept: "Verstanden",
    },
  },

  en: {
    // ─── NavBar ───
    nav: {
      leistungen: "Services",
      ueberUns: "About",
      aktuell: "News",
      quickCheck: "Start Quick-Check",
      quickCheckMobile: "Quick-Check",
      menuOpen: "Open menu",
    },

    // ─── HeroSection ───
    hero: {
      tag: "ZIM · BAFA · Cleantech · Berlin",
      headline: "Your grant proposal — ready before the first meeting.",
      sub: "Active ZIM Network Manager. No win, no fee.",
      body: `Before you invest an hour, we've already assessed your funding potential. You receive a tailored proposal with specific programmes (<a href="/zim-foerderung" style="color:#2ECC71;text-decoration:none;border-bottom:1px solid rgba(46,204,113,0.35)">ZIM</a>, <a href="/bafa-foerderung" style="color:#2ECC71;text-decoration:none;border-bottom:1px solid rgba(46,204,113,0.35)">BAFA</a>, EFRE), realistic grant rates, and a financing plan — a basis for decision, not a sales pitch.`,
      ctaPrimary: "Discover my funding potential →",
      ctaSecondary: "Services",
      imgAlt: "Verde Onda – The Green Wave",
    },

    // ─── ProblemSection ───
    problem: {
      label: "The Challenge",
      headline: "Why SMEs miss out on ZIM and BAFA funding.",
      body: "Over 2,000 funding programmes in Germany — and most SMEs don't use a single one. The reasons are almost always the same.",
      cards: [
        {
          title: "Complex Funding Landscape",
          desc: "Over 2,000 programmes, constantly shifting deadlines, and complex eligibility rules: most SMEs leave significant funding on the table simply because they can't see the full picture.",
        },
        {
          title: "No In-House Grant Expertise",
          desc: "Between day-to-day operations and grant bureaucracy, internal capacity is lacking — along with the specific experience a successful application requires.",
        },
        {
          title: "Supply Chain & ESG Pressure",
          desc: "Large customers demand ESG data, banks ask for sustainability metrics. Companies that aren't prepared risk losing contracts and credit terms.",
        },
      ],
    },

    // ─── SolutionSection ───
    solution: {
      label: "What We Do",
      headline1: "Five Services,",
      headline2: "One Goal: Your Grant Gets Approved.",
      body: "From programme selection to final financial reporting — everything from a single source.",
      channels: [
        {
          label: "01",
          title: "Grant Advisory",
          desc: "From programme selection through the complete application to final financial reporting. You receive an approval, not just a recommendation.",
          tags: ["Federal", "State", "EU", "Success Fee"],
        },
        {
          label: "02",
          title: "ZIM Funding",
          desc: "Individual projects, cooperations, and innovation networks — guided by an active ZIM network manager.",
          tags: ["ZIM", "R&D", "Network", "BMWK"],
        },
        {
          label: "03",
          title: "BAFA Funding",
          desc: "Energy consulting, EEW investment grants, BEG renovation and STARK structural transformation — all BAFA programmes from one source.",
          tags: ["EEW", "BEG", "STARK", "Energy Efficiency"],
        },
        {
          label: "04",
          title: "CSRD Advisory",
          desc: "When large customers demand ESG data: we deliver exactly what the EU requires — nothing more, nothing less. Pragmatic, VSME-based.",
          tags: ["CSRD", "VSME", "ESG", "Reporting"],
        },
        {
          label: "05",
          title: "Sustainability Strategy",
          desc: "Sustainability strategy directly linked to funding programmes. Every measure comes with a financing plan.",
          tags: ["Roadmap", "Strategy", "GHG Reduction"],
        },
      ],
    },

    // ─── ResultsSection ───
    results: {
      label: "Proven Results",
      headline: "What our clients gain.",
      body: "Selected projects and results.",
      refsLabel: "References",
      outcomes: [
        {
          title: "Zero Risk",
          desc: "Success fee: you only pay when grant funding is approved. No retainer, no upfront costs.",
        },
        {
          title: "Measurable Impact",
          desc: "GHG reduction, energy efficiency, ESG readiness — with concrete KPIs, not declarations of intent.",
        },
        {
          title: "Up to 60% Grant",
          desc: "Unlock funding that reduces your equity share — more headroom for core business investments.",
        },
      ],
      customers: [
        {
          nr: "01",
          company: "Kelorina",
          result: "55% Grant",
          type: "Renewable Energy · Brandenburg",
          program: "Federal Programme",
          desc: "Full grant application and approval for a renewable energy project. 55% grant on total investment — from programme screening to approval notification in 5 months.",
          tags: ["Renewable Energy", "Grant Application", "Approval"],
        },
        {
          nr: "02",
          company: "Green Island",
          result: "60% Grant",
          type: "Cleantech · R&D · Saxony",
          program: "ZIM Funding",
          desc: "Funding strategy, programme selection, and complete application in energy research and process efficiency. 60% grant on a six-figure project volume.",
          tags: ["R&D", "Energy Efficiency", "ZIM"],
        },
        {
          nr: "03",
          company: "Kiyora",
          result: "ESG-Ready",
          type: "Food Industry · Berlin",
          program: "VSME Standard",
          desc: "ESG data strategy under the VSME standard — supply-chain-ready and proportionate. Built a robust dataset for large customer enquiries and bank discussions.",
          tags: ["VSME", "ESG", "Supply Chain", "CSRD"],
        },
      ],
    },

    // ─── QuickCheckSection ───
    quickCheck: {
      label: "Free Quick-Check",
      headline1: "Your Funding Potential",
      headline2: "in 3 minutes.",
      body: "Initial assessment of your funding potential in 3 minutes. Free, no obligation.",
      loading: "Analysing…",
      loadingSub: "Matching grant programmes. Just a moment.",
      error: "The analysis could not be completed. Please try again.",
    },

    // ─── QuickCheckForm ───
    quickCheckForm: {
      stepCompany: "Company",
      stepProject: "Project",
      companyName: "Company name *",
      companyNamePlaceholder: "e.g. Müller GmbH",
      state: "Federal state *",
      statePlaceholder: "Select state",
      legalForm: "Legal form *",
      legalFormPlaceholder: "Select form",
      companySize: "Company size *",
      companySizePlaceholder: "Select size",
      companySizeHint: "Per EU SME definition (no exact figures needed)",
      revenue: "Annual revenue (range) *",
      revenuePlaceholder: "Select revenue range",
      revenueHint: "For eligibility check only – no exact figures needed",
      industry: "Industry *",
      industryPlaceholder: "e.g. Metal processing, Bakery, IT services...",
      categories: "Project categories * (multiple choice)",
      description: "Project description *",
      descriptionPlaceholder: "Describe the project specifically: What will be built/implemented? Where? What is the goal?",
      descriptionMin: "min.",
      investmentSum: "Investment amount *",
      investmentPlaceholder: "Select amount",
      plannedStart: "Planned start *",
      startPlaceholder: "Select start",
      deMinimis: "De minimis aid received in the last 3 years? *",
      deMinimisPlaceholder: "Please select",
      nextStep: "Continue to project details →",
      back: "← Back",
      analyze: "Start analysis →",
      analyzing: "Analysing…",
    },

    // ─── ResultsView ───
    resultsView: {
      goDesc: "Funding recommended",
      nogoDesc: "No matching programme",
      conditionalLabel: "CONDITIONAL",
      conditionalDesc: "Review required",
      programsIdentified: "identified",
      risksLabel: "Risks & Notes",
      matchingPrograms: "Matching Programmes",
      fdbLabel: "Förderdatenbank.de",
      fdbChecking: "checking…",
      fdbAllResults: "↗ All results on foerderdatenbank.de",
      fdbNoResults: "No additional results on foerderdatenbank.de",
      fwmLabel: "Förderlotse Wachstumsmärkte",
      fwmChecking: "checking…",
      fwmAllResults: "↗ All programmes on foerderlotse-wachstumsmaerkte.de",
      fwmNoResults: "No international programmes found",
      fwmSubtitle: "International funding · GTAI / BAFA / GIZ · 275 programmes",
      recommendedPackage: "Recommended VO Sustain Package",
      newRequest: "← New Request",
      leadCapture: {
        headline: "Get your analysis as PDF",
        subline: "We'll send you the full funding analysis incl. all programmes by email — free of charge.",
        emailPlaceholder: "your@email.com",
        namePlaceholder: "Name (optional)",
        button: "Receive analysis by email",
        success: "Your analysis has been sent. Check your inbox.",
        trust: "No spam. Your data stays with us. GDPR compliant.",
      },
      ctaConsult: "Book a free consultation",
    },

    // ─── ProgramCard ───
    programCard: {
      verified: "✓ Verified",
      pleaseCheck: "⚠ Please check",
      requirements: "Requirements",
      nextSteps: "Next Steps",
    },

    // ─── Aktuell ───
    aktuell: {
      heroLabel: "NEWS & UPDATES",
      heroHeadline: "Funding Calls & CSRD News.",
      heroBody: "Grant calls with deadlines, CSRD updates and news from the German funding landscape — updated weekly.",
      scroll: "Scroll",
      readMore: "Read →",
      articlesCount: "Articles",
      noArticles: "No articles in this category.",
      filterAll: "All",
      expired: "Expired",
      today: "Today!",
      tomorrow: "Tomorrow!",
      daysLeft: "Days",
      backToNews: "← Back to News",
      katFoerderaufruf: "Grant Call",
      katCSRD: "CSRD News",
      katMarktinfo: "Market Info",
      katErfolg: "Success",
    },

    // ─── Artikel-Detail ───
    artikel: {
      deadline: "Application Deadline",
      source: "Source:",
      ctaHeadline: "Does this fit your company?",
      ctaBody: "Find out which funding programmes are relevant for you in 3 minutes.",
      ctaButton: "Start Quick-Check →",
      deadlineExpired: "Expired",
      deadlineToday: "Today!",
      deadlineTomorrow: "Tomorrow!",
      deadlineDays: "Days",
    },

    // ─── AboutSection ───
    about: {
      label: "The Founder",
      headline: "Denis Jänicke",
      subtitle: "Founder · VO Sustain · Berlin",
      quote: "As an active ZIM network manager, I write the applications I have reviewed. I know both sides of the process — and that's what makes the difference.",
      credentials: [
        { label: "ZIM · BAFA · EFRE", sub: "Core Programmes" },
        { label: "Application to Reporting", sub: "Full Support" },
        { label: "12+ Partners", sub: "Active ZIM Network" },
      ],
      bio: "Grant consultant specialising in ZIM, BAFA, and EU funding. Active network manager for the ZIM Innovation Network SEAWEED DECARBON POLYMER (12+ research and industry partners). Hands-on experience across the full grant lifecycle: application, project sponsor communication, disbursement, and final financial reporting.",
      imgAlt: "Denis Jänicke – Founder VO Sustain",
    },

    // ─── LogoTickerSection ───
    logoTicker: {
      label: "FUNDING LANDSCAPE",
      headline: "A Selection of Programmes",
      body: "Federal, regional, European — the programmes we review for you.",
    },

    // ─── FaqSection ───
    faq: {
      label: "FAQ",
      headline: "Frequently Asked Questions.",
      items: [
        {
          q: "What funding programs are available for SMEs?",
          a: "Germany has over 2,000 funding programmes at federal, state, and EU level. For R&D, ZIM funds up to €380,000 per individual project (up to €2.3M for cooperation projects) at a 25–60% grant rate. The Research Allowance (Forschungszulage) complements this as a tax credit: 35% of R&D personnel costs for SMEs, offset directly against tax liability. For energy efficiency, BAFA EEW pays up to 55% (minimum investment €20,000). State programmes such as SAB (Saxony) or TAB (Thuringia) and low-interest KfW loans add further options. What matters most: not every programme can be combined — de minimis rules and GBER limits determine which programmes may be used in parallel.",
        },
        {
          q: "Are SMEs directly subject to CSRD?",
          a: "Under the EU Omnibus I package (February 2026), new thresholds apply: direct reporting obligations only affect companies with ≥ 1,000 employees AND ≥ €450M turnover — roughly 90% fewer companies than originally planned. The EU has also enacted a Stop-the-Clock: reporting years 2025 and 2026 are suspended while revised ESRS standards are finalised in trilogue. That said, companies that supply large customers or need bank financing are indirectly affected by ESG data requests. The voluntary VSME standard provides the right framework: 11 basic data points (modules B1–B3), proportional and supply-chain-ready. Under the Value Chain Cap, customers may only request VSME-level data from suppliers — no full ESRS reports.",
        },
        {
          q: "What does grant consulting cost?",
          a: "The Quick-Check is free and provides a first assessment of which programmes suit your project. For full application support, VO Sustain works on a success basis: the advisory fee is calculated as a percentage of the approved funding amount and is only due upon approval — not at submission. You bear no financial risk before funding flows. For projects spanning multiple programmes (e.g. ZIM plus Research Allowance), the total fee is calculated transparently upfront.",
        },
        {
          q: "How long does a ZIM application take?",
          a: "The process runs in three phases: Application preparation (4–8 weeks) covers the project description with proof of novelty and technical risk, work packages, budgeting, financing plan, and GBER declarations. Expert review at the project sponsor (VDI/VDE-IT or AiF) typically takes 3–6 months — external reviewers assess R&D character and eligibility; queries are normal and not a rejection signal. After approval, funding is disbursed incrementally against actual incurred costs. Important: the project may only start after submission — retrospective funding is not possible.",
        },
        {
          q: "What are the requirements for ZIM funding?",
          a: "ZIM targets commercial enterprises with up to 499 employees and less than €100M annual turnover — deliberately broader than the EU SME definition. The core criterion: genuine R&D character, meaning technical risk (no guaranteed outcome), novelty beyond the state of the art, and the goal of a new product, process, or technical service. Pure investments, market adaptations, or software customisation do not qualify. Funding rate: 25–45% (medium enterprises, West) up to 55–60% (small enterprises, new federal states). De minimis headroom (€300,000 / 3 years) must be verified in advance — alternatively, GBER (General Block Exemption Regulation) applies.",
        },
        {
          q: "Grants, loans, or tax credits — what's the difference?",
          a: "Three funding types with different effects: Grants (e.g. ZIM, BAFA EEW) are non-repayable — they are true capital inflows that improve liquidity immediately on disbursement. Low-interest loans (e.g. KfW programmes) must be repaid, but offer significantly better terms than commercial bank loans and preserve credit lines. Tax credits (Research Allowance under FZulG) are offset directly against corporate or income tax — payable as a refund even in loss years. Many projects use all three pillars: ZIM grant for R&D costs, Research Allowance for personnel costs, and KfW loan for investment — legally permissible with correct cumulation analysis.",
        },
        {
          q: "How do I apply for ZIM funding in 2026?",
          a: "A ZIM application in 2026 consists of four core parts: 1) Project description with proof of the state of the art and justification of technical risk — this is the most critical part, as reviewers query it most frequently. 2) Structured work package plan with milestones, responsibilities, and personnel effort per package. 3) Financing plan with total costs, requested grant, equity, and third-party funding. 4) State aid declarations: de minimis self-assessment and/or GBER declaration. Submission is digital via easy-Online at the relevant project sponsor (VDI/VDE-IT for most technology topics, AiF for applied research). Funding rate: 25–60% depending on company size and location. Typical preparation time: 4–8 weeks.",
        },
        {
          q: "What BAFA funding is available for sustainability?",
          a: "BAFA offers three relevant programmes: BAFA EEW (Energie- und Ressourceneffizienz in der Wirtschaft) funds process heat, waste heat recovery, compressed air systems, and drive technology with up to 55% grant (SME bonus included) — minimum investment €20,000, combinable with KfW loan. BAFA Energy Consulting for SMEs funds external energy audits with up to 80% (max. €8,000 grant) — a prerequisite for many investment applications. BAFA Transformation Concepts funds decarbonisation roadmaps for energy-intensive businesses with up to 60%. All three programmes can be combined with EFRE regional funding (SAB, TAB, IBB), provided de minimis limits are respected and total aid intensity does not exceed the GBER ceiling.",
        },
        {
          q: "What sets VO Sustain apart from traditional consultants?",
          a: "VO Sustain specialises in SMEs in the sustainability sector and combines hands-on expertise with AI-powered research. Founder Denis Jänicke is an active ZIM network manager (SEAWEED DECARBON POLYMER, 12+ partners) — he knows the processes from first-hand experience, not just textbooks. The process: free Quick-Check → deep analysis with programme matching → full application support through to the final financial report. No large consultancy overhead, no anonymous teams — you work directly with the expert writing your application. The model: success fee, due only upon approval. No financial risk for you.",
        },
        {
          q: "How is the fee structured — what are the concrete terms?",
          a: "No retainer, no upfront payment, no fee on rejection. The fee is a success commission on the approved funding amount — and the larger the approved sum, the lower the percentage: up to €100,000 it is 10%, from €100,001 to €300,000 it is 7%, from €300,001 to €600,000 it is 5%, and 3.5% on everything above. This works like a tax bracket model: each rate applies only to that portion of the amount. For an approved grant of, say, €150,000: 10% on €100,000 + 7% on €50,000 = €13,500. The fee is due only upon actual disbursement of the funding. If multiple programmes are approved (e.g. ZIM and BAFA), each approval notice is calculated separately.",
        },
        {
          q: "What is de minimis — and when does it matter?",
          a: "De minimis is an EU state aid rule: any company (including affiliated enterprises in the EU sense) may receive a maximum of €300,000 in de minimis aid within three fiscal calendar years — a threshold raised to €300,000 in 2024 (previously €200,000). Many smaller BAFA, SAB, and KfW programmes run under de minimis. Companies that have already used up this limit cannot access certain programmes or must switch to GBER (General Block Exemption Regulation), which allows higher amounts but applies stricter criteria. Incorrectly combined programmes can trigger clawback of all aid — retroactively for the full three-year period. VO Sustain verifies de minimis status before any recommendation.",
        },
        {
          q: "What funding is available for cleantech companies?",
          a: "Cleantech companies (energy, circular economy, bioeconomy, hydrogen, CO₂ reduction) have access to an exceptionally broad funding landscape: ZIM funds R&D projects with up to 60% — particularly relevant for cleantech innovations with genuine technical novelty. BAFA EEW funds investments in process heat, waste heat recovery, and compressed air systems with up to 55%. The BMWK programme 'Decarbonisation of Industry' funds transformation concepts with up to 60%. At EU level, Horizon Europe (Cluster 5: Climate & Energy) and the LIFE programme provide access to European project funding. EFRE regional grants (SAB in Saxony, TAB in Thuringia, IBB in Berlin) add 30–50% co-funding options. Cleantech companies can often stack multiple programmes — provided GBER and de minimis limits are respected. Choosing the right combination is critical: not every combination is permissible.",
        },
        {
          q: "What funding is available for energy transition projects?",
          a: "The energy transition offers SMEs a dual lever: as an investment topic (efficiency, renewables) and as an innovation topic (R&D in new technologies). On the investment side, BAFA EEW funds up to 55% for process heat, waste heat recovery, and drive technology (minimum investment €20,000). KfW loans (KfW 295 Energy Efficiency in Production) offer additional low-interest financing. For energy audits, BAFA funds up to 80% (max. €8,000) — often the first step before investment applications. On the innovation side, ZIM funds R&D projects in renewable energy and energy efficiency at 25–60%. The Research Allowance (35% of R&D personnel costs) is additionally usable. Correctly combined, an energy efficiency project can be financed simultaneously with a grant, a tax credit, and a low-interest loan — legally permissible when cumulation rules are followed.",
        },
        {
          q: "What is a ZIM innovation network?",
          a: "A ZIM innovation network is a funded consortium of at least six companies and research institutions collaborating on a shared technology focus. The network is coordinated by a network manager who handles communication, project development, and grant applications. BMWK funds ZIM networks in two phases: Phase 1 (setup, up to 12 months, up to €380,000 grant) and Phase 2 (technology development, up to 24 months). Requirements: at least six partners, a clearly defined technology objective, and proof of novelty. VO Sustain actively manages a ZIM innovation network (SEAWEED DECARBON POLYMER, 12+ partners) and supports companies in building their own networks — from partner identification to the first application.",
        },
        {
          q: "What does success-based grant consulting cost?",
          a: "Success-based grant consulting means: no fee on rejection, payment only upon approval. Market rates range from 5–15% of the approved funding amount. VO Sustain uses a tiered structure: 10% up to €100,000; 7% from €100,001–€300,000; 5% from €300,001–€600,000; 3.5% above that — transparent and legally compliant. What to watch out for: first, whether upfront payments or retainers are required (not legitimate in a pure success-fee model). Second, whether the consultant writes the application themselves or merely coordinates — this matters significantly for approval probability. Third, whether the fee falls due on actual disbursement (not just approval). At VO Sustain: fee is due only upon actual payout. No retainer, no fee for the Quick-Check.",
        },
        {
          q: "What funding is available for bioeconomy SMEs?",
          a: "Yes — and this area is one of the fastest-growing in terms of available funding. The BMBF funds bioeconomy R&D projects under the National Bioeconomy Strategy 2030 directly (up to 60%). ZIM is applicable for bioeconomy companies with genuine R&D character — particularly for process innovations in fermentation, biopolymers, and bio-based materials. LIFE (EU) funds demonstration and pilot projects in circular economy and sustainable bioeconomy. The BMWK programme 'Bio-based Products and Processes' offers project funding for scale-up activities. At state level, EFRE provides strong co-funding: Saxony (SAB), Thuringia (TAB), Mecklenburg-Vorpommern. Bioeconomy projects have a structural advantage: many qualify both as R&D projects (ZIM) and as environmental protection measures (BAFA/BMWK), opening stacking opportunities.",
        },
      ],
    },

    // ─── WhySection ───
    why: {
      label: "WHAT SETS US APART",
      headline: "Three differences",
      headline2: "that matter.",
      usps: [
        {
          number: "01",
          title: "A tailored funding proposal before the first meeting.",
          body: "We invest upfront in your project because we only take on mandates where we are confident in fundability. You receive a proposal with specific programmes and grant rates — as a decision basis, not a sales pitch.",
          tags: ["Concept-First", "Upfront Analysis", "349 Programmes"],
        },
        {
          number: "02",
          title: "Success fee. Zero risk for you.",
          body: "No retainer, no upfront payment, no fee on rejection. Our fee is a tiered commission on the approved funding amount — due only upon actual disbursement. The higher the sum, the lower the rate.",
          tags: ["Success Fee", "Tiered Commission", "€0 Risk"],
        },
        {
          number: "03",
          title: "Active ZIM network manager — not just a consultant.",
          body: "Denis Jänicke actively manages the ZIM Innovation Network SEAWEED DECARBON POLYMER (12+ research and industry partners). When you apply for ZIM funding, you work with someone who builds networks and submits applications to project sponsors himself.",
          tags: ["ZIM Network Manager", "12+ Partners", "Cleantech"],
        },
      ],
    },

    // ─── Leistungsseiten ───
    services: {
      backToHome: "← Back to Home",
      ctaHeadline: "Check your project's funding potential",
      ctaBody: "Free initial assessment in 3 minutes — find out which funding programmes are relevant for your company.",
      ctaButton: "Start Quick-Check →",
      ctaEmail: "Or write directly:",
      processLabel: "HOW WE WORK",
      processHeadline: "Our Process.",
      factsLabel: "NUMBERS & FACTS",
      factsHeadline: "The numbers speak.",
      scopeLabel: "SCOPE OF SERVICES",
      scopeHeadline: "What we do for you.",
      relatedLabel: "RELATED SERVICES",
    },
    foerderberatung: {
      heroLabel: "INDIVIDUAL GRANT ADVISORY",
      heroHeadline: "Individual Grant Advisory for SMEs.",
      heroSub: "Professional advisory protects against application errors, exclusion periods, and missed funding — where self-research ends, real expertise begins.",
      heroBody: "Germany has over 2,000 funding programmes, each with its own deadlines, cumulation rules, and application requirements. Wrong programme selection or formal errors mean rejection and exclusion periods. We match your project against 64+ verified programmes — from ZIM (up to 60%) and the Research Allowance (35% for SMEs, tax-deductible) to the EIC Accelerator (100% grant up to €2.5M).",
      scope: [
        { title: "Funding Potential Analysis", desc: "Systematic review against 64+ federal, state, and EU programmes. Cumulation check under de minimis (€300,000 / 3 years) and GBER included — incorrectly combined programmes can trigger clawbacks." },
        { title: "Programme Matching", desc: "Direct comparison of funding rates, volumes, and eligibility conditions: ZIM up to 60% (small enterprises, East), BAFA EEW up to 55%, BAFA Energy Consultancy up to 80%, KfW Climate Programme from 2.19% eff. p.a. De minimis headroom is verified before any recommendation." },
        { title: "Application Preparation", desc: "Full preparation of all documents: proof of novelty and technical risk (ZIM core criteria), project description, work package structure, budgeting, financing plan, and GBER state aid declarations." },
        { title: "Support & Final Reporting", desc: "Project sponsor communication on queries and expert reviews, handling of conditions, milestone tracking, interim reports, and audit-proof final financial report — often more demanding than the application itself." },
      ],
      process: [
        { step: "01", title: "Initial Consultation (free)", desc: "Company profile, investment plans, and de minimis status. Result: first programme assessment and funding potential estimate — no commitment." },
        { step: "02", title: "Deep Analysis", desc: "Matching against 64+ programmes, cumulation check, deadline and risk analysis. Result: prioritised shortlist with funding rates, volumes, and concrete next steps." },
        { step: "03", title: "Application Preparation", desc: "Project description with proof of novelty and technical risk, work packages, budgeting, financing plan, GBER declarations — complete and submission-ready." },
        { step: "04", title: "Approval through Final Reporting", desc: "Project sponsor communication, queries and conditions, milestone reporting, audit-proof final financial report. Success fee: payable only upon approval." },
      ],
      facts: [
        { value: "64+", label: "Programmes reviewed & current" },
        { value: "up to 80%", label: "max. grant (BAFA Energy Consultancy)" },
        { value: "35%", label: "Research Allowance for SMEs (tax-deductible)" },
        { value: "€0", label: "Risk — success fee payable only on approval" },
      ],
      programs: ["ZIM", "BAFA EEW", "Research Allowance", "EFRE", "SAB", "INNO-KOM", "KfW 293", "Horizon Europe EIC", "LIFE", "TAB/FTI", "BAFA Energy Consultancy"],
    },
    csrdBeratung: {
      heroLabel: "CSRD & SUSTAINABILITY REPORTING",
      heroHeadline: "CSRD Advisory under VSME Standard for SMEs.",
      heroSub: "For most SMEs: no direct reporting obligation — but large customers and banks demand ESG data. We secure your supply chain position with minimal effort.",
      heroBody: "Omnibus I (Feb. 2026) raised CSRD thresholds to 1,000 employees AND €450M turnover — approximately 90% fewer companies affected. Non-listed SMEs face no direct reporting obligation until Omnibus is fully transposed. But as a supplier or borrower, you still need reliable answers. We provide them — under the VSME standard, proportionate and supply-chain-ready.",
      scope: [
        { title: "Reporting Obligation Check", desc: "Directly or indirectly affected? We assess against Omnibus I thresholds (≥1,000 employees AND ≥€450M turnover), the current Stop-the-Clock status (reporting years 2025/2026 suspended), and your specific supply chain requests. Result: clear classification and recommendation — not legal advice." },
        { title: "Materiality Assessment", desc: "Double Materiality Assessment following ESRS logic: Impact Materiality (what effects does your company have on the environment and society?) and Financial Materiality (which ESG risks and opportunities affect your finances?). Focused on what actually matters for your industry and company size." },
        { title: "VSME Implementation", desc: "Data collection under the VSME standard: 11 basic data points from modules B1 (business model), B2 (GHG balance, energy, water, waste, biodiversity) and B3 (employees, working conditions) — supply-chain-ready and with Value Chain Cap protection. Under EU rules, your customer may request at most VSME data points, not full ESRS reports." },
        { title: "ESG Data Management", desc: "Building a lean data infrastructure: GHG Scope 1 (direct emissions), Scope 2 (electricity and heat) and — where relevant — Scope 3 (supply chain). Plus energy, water, and waste metrics alongside social data per VSME B3. Result: a robust, reusable dataset for banks, tenders, and large customers." },
      ],
      process: [
        { step: "01", title: "Obligation Check", desc: "30 minutes. Result: directly subject to reporting (Omnibus I thresholds met), indirectly affected (supply chain, bank credit, or tender), or no current action required. Includes Stop-the-Clock assessment for reporting years 2025 and 2026." },
        { step: "02", title: "Materiality Assessment", desc: "Double Materiality: which ESG topics have real impact on your company — and which can you reliably exclude? Deliverable: a prioritised topic register as the foundation for all subsequent steps." },
        { step: "03", title: "VSME Setup", desc: "Data collection for the 11 basic data points (modules B1–B3), gap analysis against existing data, process integration into your reporting cycle. Deliverable: structured ESG dataset, ready for external requests." },
        { step: "04", title: "Shield Template", desc: "Supply-chain-ready response dataset with Value Chain Cap protection: standardised answers to customer requests covering exactly the VSME scope — no more, no less. Reusable for all supply chain requests." },
      ],
      facts: [
        { value: "~90%", label: "fewer companies affected under Omnibus I" },
        { value: "11", label: "VSME basic data points (B1–B3)" },
        { value: "61%", label: "ESRS simplification vs. original draft" },
        { value: "30 min", label: "Obligation check — immediate clarity" },
      ],
      standards: ["CSRD", "ESRS", "VSME B1–B3", "LSME", "Double Materiality", "Value Chain Cap", "Omnibus I"],
    },
    zimFoerderung: {
      heroLabel: "ZIM FUNDING & NETWORK MANAGEMENT",
      heroHeadline: "ZIM Funding for SMEs: Individual Projects, Cooperations, Networks.",
      heroSub: "Individual projects up to €380,000, cooperations up to €2.3M — with funding rates of up to 60% for small enterprises.",
      heroBody: "The Central Innovation Programme for SMEs (ZIM) is Germany's most important federal R&D funding programme for SMEs. Denis Jänicke doesn't just advise on it — he actively manages a ZIM network with 12+ partners and knows exactly where applications fail.",
      scope: [
        { title: "ZIM Individual Projects", desc: "R&D projects by individual companies: new products, processes or technical services. Maximum eligible costs of €380,000, funding rate up to 60% for small enterprises in the eastern federal states (45% for medium-sized enterprises in the west)." },
        { title: "ZIM Cooperation Projects", desc: "At least 2 companies or 1 company + 1 research institution. Total volume up to €2.3M — with feasibility studies possible as a precursor. Strategic advantage: shared risk, higher funding rates." },
        { title: "ZIM Networks", desc: "Technological innovation networks: nationally from 6 companies, internationally from 4 SMEs + 2 foreign SMEs. Phase 1 (network setup) up to 18 months, Phase 2 (R&D projects) up to 3 years. NMI Phase 1 deliverables include partner potential analysis, technology roadmap, community building, and the Multilateral Network Agreement." },
        { title: "Feasibility Studies & Market Introduction", desc: "Preparatory studies to assess state of the art and market potential as a ZIM precursor. Market introduction funding up to €60,000 (de minimis) for commercial implementation following the R&D project." },
      ],
      process: [
        { step: "01", title: "Innovation & Eligibility Check", desc: "Assessment against ZIM criteria (R&D character, technical risk, novelty) and de minimis headroom (€300,000 / 3 years). Determination of the optimal project type — individual, cooperation, or network." },
        { step: "02", title: "Application & Project Design", desc: "Drafting of project description, work packages, milestone plan, and financing plan. Completeness check against current project sponsor requirements — incomplete or outdated forms are the most frequent reason for rejection." },
        { step: "03", title: "Submission & Project Sponsor Communication", desc: "Submission to the project sponsor (VDI/VDE-IT or AiF) including handling of QES issues with digital signatures. Support through queries and expert reviewer communication." },
        { step: "04", title: "Project Support through to Final Reporting", desc: "Milestone reporting, interim reports, and financial plan monitoring (20% flexibility rule per cost category; beyond that, a reallocation request is required). Final financial report prepared audit-proof." },
      ],
      facts: [
        { value: "€380k", label: "max. individual project" },
        { value: "up to 60%", label: "funding rate (small enterprises, East)" },
        { value: "€2.3M", label: "max. cooperation project" },
        { value: "12+", label: "partners in own ZIM network" },
      ],
      experience: "Denis Jänicke is an active ZIM Network Manager for the SEAWEED DECARBON POLYMER network — 12+ partners from research and industry, Phase 1 and 2, Multilateral Network Agreement negotiations, and project sponsor communication with VDI/VDE-IT. He knows the typical pitfalls from practice: incomplete application documents, QES issues with digital signatures, equity contribution risks in case of partner dropout, and delays on Phase 2 applications. This hands-on experience feeds directly into every application.",
      types: ["Individual Project", "Cooperation Project", "Network", "Feasibility Study", "Market Introduction", "International"],
    },

    nachhaltigkeitsstrategie: {
      heroLabel: "SUSTAINABILITY STRATEGY",
      heroHeadline: "Sustainability Strategy for SMEs with Grant Financing.",
      heroSub: "A sustainability strategy isn't an end in itself — it unlocks grants, protects supply chain relationships, and reduces costs. We build roadmaps that prioritise instead of overwhelm.",
      heroBody: "Many SMEs have sustainability goals but no clear priorities and no link to concrete measures or funding programmes. We translate the transformation mandate into a fundable step-by-step roadmap — with measurable KPIs, clear accountability, and direct links to BAFA, KfW, ZIM, and SAB.",
      scope: [
        { title: "Status Quo Analysis", desc: "GHG balance Scope 1 & 2 (direct emissions, electricity and heat), energy consumption, material flows, and relevant social indicators. The basis for all strategic decisions — and a mandatory requirement for BAFA grant applications." },
        { title: "Materiality Assessment", desc: "Which sustainability topics are genuinely relevant for your industry, your customers, and your risk profile? We prioritise by impact and fundability — so you don't work on 20 construction sites at once." },
        { title: "Roadmap & Action Plan", desc: "3-year roadmap with concrete measures, investment volumes, planned grants (BAFA EEW, KfW, ZIM, SAB), and GHG reduction targets. Every measure includes a funding potential estimate." },
        { title: "Implementation Support", desc: "Quarterly KPI monitoring, roadmap adjustment for regulatory changes (CSRD, supply chain due diligence, EU taxonomy), and grant application support for prioritised measures." },
      ],
      process: [
        { step: "01", title: "Analysis & First Meeting", desc: "Clarify company profile, industry, existing measures, and funding status. First assessment of funding potential and relevant programmes. Free and without obligation." },
        { step: "02", title: "GHG Balance & Materiality", desc: "Calculation of Scope 1 & 2 emissions, energy balance, and resource consumption. Materiality matrix: where is action needed, what is fundable, what protects supply chain relationships?" },
        { step: "03", title: "Strategy & Roadmap", desc: "Prioritised action plan with cost-benefit assessment, planned grants, and GHG reduction pathway. Result: a 3-year roadmap your team can implement." },
        { step: "04", title: "Implementation & Monitoring", desc: "Support for measure implementation, grant applications for prioritised investments, quarterly KPI reporting, and adaptation to regulatory changes." },
      ],
      facts: [
        { value: "up to 80%", label: "grant rate for energy efficiency (BAFA)" },
        { value: "3 years", label: "typical roadmap horizon" },
        { value: "Scope 1+2", label: "GHG accounting as starting point" },
        { value: "€0", label: "risk — success fee only upon grant approval" },
      ],
      tags: ["GHG Balance", "Roadmap", "BAFA EEW", "KfW", "ZIM", "SAB", "EU Taxonomy", "Supply Chain", "Scope 1+2"],
    },

    bafaFoerderung: {
      heroLabel: "BAFA GRANTS & ENERGY EFFICIENCY",
      heroHeadline: "BAFA Grants for SMEs: Energy Consulting, EEW & Transformation.",
      heroSub: "Up to 80% subsidy for energy consulting, up to 55% for efficiency investments — combinable with KfW and SAB.",
      heroBody: "BAFA is Germany's central grant programme for energy efficiency and industrial transformation. The key requirement: applications must be submitted before starting the project — a formal error that costs many SMEs their grant. We ensure your application is submitted on time and in full.",
      scope: [
        { title: "BAFA Energy Consulting for SMEs", desc: "Up to 80% funding rate for qualified energy consulting by a BAFA-approved advisor. Eligible: detailed energy analysis with action plan. Prerequisite: companies with at least 2 employees. Result: documented savings potential — and direct preparation for EEW applications." },
        { title: "Federal Energy & Resource Efficiency Grants (EEW)", desc: "Investment subsidies of up to 55% for energy and resource savings in production. Funding modules: cross-cutting technologies (motors, pumps, compressed air), renewable process heat, waste heat recovery. Minimum investment €30,000 net, application via BAFA portal before project start." },
        { title: "BAFA Federal Efficient Buildings Grants (BEG)", desc: "Heating system grants (heat pump, pellet boiler, solar thermal) with up to 70% subsidy (base + climate bonus). For commercial buildings and rented properties. Combination with KfW 261 possible — we check optimal stacking in advance." },
        { title: "BAFA Transformation Programme", desc: "Grants for deep decarbonisation in energy-intensive and high-GHG industries. Up to 50% funding rate for transformative investments in climate-neutral production. Relevant sectors: food and beverage, metals, chemicals, glass, paper." },
      ],
      process: [
        { step: "01", title: "Initial Check & Eligibility Analysis", desc: "Assessment against BAFA criteria: company type, investment project, de minimis headroom, and combinability with KfW, ZIM, or SAB. Key question: has the project not yet started? Binding orders already count as project start." },
        { step: "02", title: "Application Before Project Start", desc: "The most common BAFA mistake: measures are started before the application is submitted — making them ineligible. We coordinate application, energy consultant engagement, and investment timing so no funding potential is lost." },
        { step: "03", title: "Implementation Support", desc: "After the grant notice: implementation guidance, invoice management, and documentation of funded measures. Compliance with completion conditions and deadlines (typically 18–36 months implementation period)." },
        { step: "04", title: "Final Report & Disbursement", desc: "Complete assembly of all proof documents (invoices, delivery confirmations, energy data comparison). Technical evidence per BAFA requirements (efficiency classes, measurement concept). Grant disbursement after review." },
      ],
      facts: [
        { value: "up to 80%", label: "subsidy for energy consulting" },
        { value: "up to 55%", label: "for EEW investments" },
        { value: "up to 70%", label: "BEG heating system grants" },
        { value: "€0", label: "risk — success fee only upon approval" },
      ],
      types: ["BAFA Energy Consulting", "BAFA EEW", "BAFA BEG", "Transformation Programme", "Heat Pump", "Waste Heat Recovery", "Compressed Air", "Decarbonisation"],
    },

    // ─── FooterSection ───
    footer: {
      tagline: "Grant consultancy for German SMEs. Public funding · CSRD compliance · Sustainability strategy.",
      location: "Berlin, Germany",
      navLabel: "Navigation",
      navLinks: [
        { label: "Services", href: "/#leistungen" },
        { label: "Grant Advisory", href: "/foerderberatung" },
        { label: "BAFA Grants", href: "/bafa-foerderung" },
        { label: "CSRD Advisory", href: "/csrd-beratung" },
        { label: "ZIM Funding", href: "/zim-foerderung" },
        { label: "Sustainability Strategy", href: "/nachhaltigkeitsstrategie" },
        { label: "Quick-Check", href: "/#quick-check" },
        { label: "About", href: "/#ueber-uns" },
      ],
      contactLabel: "Contact",
      copyright: "© 2026 VO Sustain · Denis Jänicke",
      impressum: "Legal Notice",
      datenschutz: "Privacy Policy",
      cookieSettings: "Cookie Settings",
    },

    // ─── CookieBanner ───
    cookie: {
      text: "This website uses only essential cookies.",
      privacyLink: "Privacy Policy",
      accept: "Got it",
    },
  },
} as const;

export type Translations = typeof translations.de | typeof translations.en;
