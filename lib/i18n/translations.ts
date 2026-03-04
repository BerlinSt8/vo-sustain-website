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
      tag: "VO SUSTAIN · Berlin · Deutschland",
      headline: "Förderberatung für KMU.",
      sub: "Die Grüne Welle der Transformation.",
      body: "Wir verwandeln den Theorie-Nebel in greifbare Strategie – und Strategie in finanzierte Umsetzung.",
      ctaPrimary: "Quick-Check starten →",
      ctaSecondary: "Leistungen",
      imgAlt: "Verde Onda – die Grüne Welle",
    },

    // ─── ProblemSection ───
    problem: {
      label: "Die Ausgangslage",
      headline: "Der Theorie-Nebel.",
      body: "Viele KMU erleben Nachhaltigkeit als lähmende Komplexität. Wir kennen das. Und wir lösen es – mit Klarheit, Strategie und finanzierter Umsetzung.",
      cards: [
        {
          title: "Lieferketten-Druck",
          desc: "Die meisten KMU sind nicht direkt CSRD-pflichtig — aber Großkunden fordern zunehmend ESG-Daten über die Lieferkette. Ohne Vorbereitung drohen Auftrags- und Kreditrisiken.",
        },
        {
          title: "Förder-Chaos",
          desc: "Undurchsichtige Förderlogiken, Haushaltssperren und Antragsfristen: Die meisten KMU lassen bares Geld liegen, weil der Überblick fehlt.",
        },
        {
          title: "Ressourcenmangel",
          desc: "Zwischen Tagesgeschäft und Förderbürokratie fehlt intern die Kapazität – Nachhaltigkeit bleibt Absichtserklärung statt Realität.",
        },
      ],
    },

    // ─── SolutionSection ───
    solution: {
      label: "Was wir tun",
      headline1: "Die drei Kanäle",
      headline2: "von VO Sustain.",
      body: "Schlüsselfertige Lösungen – von der Förderstrategie bis zur audit-sicheren Abwicklung.",
      channels: [
        {
          label: "01",
          title: "Fördermittel-management",
          desc: "Von der Erstprüfung bis zum Verwendungsnachweis – schlüsselfertig und audit-sicher.",
          tags: ["ZIM", "BAFA", "EFRE", "SAB", "KfW", "EU HORIZON"],
        },
        {
          label: "02",
          title: "CSRD-Beratung",
          desc: "ESG-Daten für Lieferketten-Anfragen nach VSME-Standard — pragmatisch, proportional und mit Value-Chain-Cap-Schutz.",
          tags: ["CSRD", "VSME", "ESG", "Reporting"],
        },
        {
          label: "03",
          title: "Nachhaltigkeits-strategie",
          desc: "Roadmaps, die priorisieren statt überfordern. Klare Schritte, messbare Wirkung, finanzierbare Maßnahmen.",
          tags: ["Roadmap", "Strategie", "THG-Reduktion"],
        },
      ],
    },

    // ─── ResultsSection ───
    results: {
      label: "Nachgewiesene Ergebnisse",
      headline: "Was unsere Kunden gewinnen.",
      body: "Kein Versprechen ohne Beweis.",
      refsLabel: "Referenzen",
      outcomes: [
        {
          title: "Sicherheit",
          desc: "Klarheit über jeden Schritt – von der Antragstellung bis zum Audit. Keine bösen Überraschungen.",
        },
        {
          title: "Wirkung",
          desc: "Messbar verbesserte Nachhaltigkeits-KPIs. THG-Reduktion, Energieeffizienz, ESG-Readiness.",
        },
        {
          title: "Investitionskraft",
          desc: "Finanzierungsspielräume schaffen durch smarte Förderung – mehr Kapital für das Kerngeschäft.",
        },
      ],
      customers: [
        {
          nr: "01",
          company: "Kelorina",
          result: "55 % Zuschuss",
          type: "Fördermittel gesichert",
          program: "Energie & Klimaschutz",
          desc: "Vollständige Förderantragstellung und erfolgreiche Bewilligung im Bereich erneuerbare Energien – von der ersten Programmprüfung bis zur Bewilligungsmitteilung.",
          tags: ["Erneuerbare Energien", "Förderantrag", "Bewilligung"],
        },
        {
          nr: "02",
          company: "Green Island",
          result: "60 % Zuschuss",
          type: "Energieforschung",
          program: "F&E-Förderung",
          desc: "Förderstrategie, Programmauswahl und vollständige Antragsstellung im Bereich Energieforschung und Prozesseffizienz.",
          tags: ["F&E", "Energieeffizienz", "Förderantrag"],
        },
        {
          nr: "03",
          company: "Kiyora",
          result: "ESG-Ready",
          type: "Nachhaltigkeitsberatung",
          program: "VSME-Standard",
          desc: "ESG-Datenstrategie nach VSME-Standard — lieferkettenfähig, proportional und mit Value-Chain-Cap-Schutz.",
          tags: ["VSME", "ESG", "Lieferkette", "Value Chain Cap"],
        },
      ],
    },

    // ─── QuickCheckSection ───
    quickCheck: {
      label: "Kostenloser Schnellcheck",
      headline1: "Ihr Förderpotenzial",
      headline2: "in 3 Minuten.",
      body: "Finden Sie in 3 Minuten Ihre Förderprogramme. Präzise, kostenlos.",
      loading: "Analyse läuft…",
      loadingSub: "Förderprogramme werden gematcht. Einen Moment.",
      error: "Die Analyse konnte nicht abgeschlossen werden. Bitte versuche es erneut.",
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
      recommendedPackage: "Empfohlenes VO Sustain Angebot",
      newRequest: "← Neue Anfrage",
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
      heroHeadline: "Aktuell.",
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
      ctaBody: "In 5 Minuten sehen Sie, welche Förderprogramme für Sie relevant sind.",
      ctaButton: "Quick-Check starten →",
      deadlineExpired: "Abgelaufen",
      deadlineToday: "Heute!",
      deadlineTomorrow: "Morgen!",
      deadlineDays: "Tage",
    },

    // ─── AboutSection ───
    about: {
      label: "Wer steckt dahinter",
      headline: "Denis Jänicke",
      subtitle: "Gründer · VO Sustain · Berlin",
      quote: "Ich verbinde technisches Förderwissen mit pragmatischer Umsetzung – damit Ihre Nachhaltigkeitsinvestition nicht am Schreibtisch stecken bleibt.",
      credentials: [
        { label: "EU–Bund–Land", sub: "Vollständige Förderebenen" },
        { label: "End-to-End", sub: "Konzept bis Verwendungsnachweis" },
        { label: "DE · EU · Asien", sub: "Projektregionen" },
      ],
      bio: "Senior Grant & Programme Operations Lead mit Spezialisierung auf EU-Förderung und Konsortialmanagement. ZIM-Netzwerkmanager für das SEAWEED DECARBON POLYMER-Projekt (12+ Partner). Audit-sichere Prozessgestaltung, Verwendungsnachweis und CSRD-Umsetzungsbegleitung.",
      imgAlt: "Denis Jänicke – Inhaber VO Sustain",
    },

    // ─── LogoTickerSection ───
    logoTicker: {
      label: "FÖRDERLANDSCHAFT",
      headline: "Eine Auswahl der Programme",
      body: "Bundesweit, regional, europäisch — wir navigieren die gesamte Förderlandschaft für Ihr KMU.",
    },

    // ─── FaqSection ───
    faq: {
      label: "FAQ",
      headline: "Häufige Fragen.",
      items: [
        {
          q: "Welche Förderprogramme gibt es für KMU?",
          a: "Es gibt über 2.000 Förderprogramme in Deutschland – von bundesweiten Programmen wie ZIM (bis 600.000 € für F&E-Projekte) und BAFA EEW (bis 55 % für Energieeffizienz) bis zu Landesförderungen über SAB (Sachsen), TAB (Thüringen) oder IBB (Berlin). Für nachhaltige Investitionen sind außerdem KfW-Kredite und EU-Programme wie Horizon Europe relevant.",
        },
        {
          q: "Sind KMU direkt CSRD-pflichtig?",
          a: "Die meisten KMU sind durch Omnibus I (2026) nicht mehr direkt CSRD-pflichtig — die neuen Schwellen liegen bei 1.000 Mitarbeitenden und 450 Mio. € Umsatz. Allerdings fordern Großkunden und Banken zunehmend ESG-Daten aus der Lieferkette. Der freiwillige VSME-Standard bietet KMU einen proportionalen Rahmen mit nur 11 Basis-Datenpunkten.",
        },
        {
          q: "Was kostet Förderberatung?",
          a: "VO Sustain arbeitet erfolgsbasiert: Der Quick-Check ist kostenlos. Bei vollständiger Antragsbegleitung gilt eine Staffelgebühr, die erst bei Bewilligung fällig wird. Sie tragen kein finanzielles Risiko, bevor Fördergelder fließen.",
        },
        {
          q: "Wie lange dauert ein ZIM-Antrag?",
          a: "Ein vollständiger ZIM-Antrag benötigt in der Regel 4–8 Wochen Vorbereitungszeit. Die Bearbeitungszeit beim Projektträger beträgt erfahrungsgemäß 3–6 Monate. VO Sustain übernimmt den gesamten Prozess – von der Projektbeschreibung über die Kalkulation bis zur Einreichung.",
        },
        {
          q: "Welche Voraussetzungen hat ZIM-Förderung?",
          a: "ZIM (Zentrales Innovationsprogramm Mittelstand) richtet sich an KMU mit bis zu 499 Mitarbeitenden und weniger als 100 Mio. € Umsatz. Das Projekt muss F&E-Charakter haben, ein technisches Risiko enthalten und auf ein neues Produkt oder Verfahren abzielen. Fördersatz: 25–55 % je nach Unternehmensgröße und Bundesland.",
        },
        {
          q: "Was ist der Unterschied zwischen Zuschuss und Darlehen?",
          a: "Zuschüsse (z.B. ZIM, BAFA) müssen nicht zurückgezahlt werden – sie sind echter Kapitalzufluss. Darlehen (z.B. KfW) sind zinsgünstige Kredite, die zurückgezahlt werden müssen, aber deutlich bessere Konditionen als Bankdarlehen bieten. VO Sustain identifiziert für jedes Projekt den optimalen Mix.",
        },
        {
          q: "Wie stelle ich einen ZIM-Antrag 2026?",
          a: "Für einen ZIM-Antrag 2026 brauchen Sie: eine Projektbeschreibung mit Neuheitsnachweis und technischem Risiko, einen Finanzierungsplan, Arbeitspakete und AGVO-Erklärungen. VO Sustain übernimmt die komplette Vorbereitung — von der Förderprogramm-Prüfung bis zur Einreichung beim Projektträger AiF oder DLR. Typische Vorbereitungszeit: 4–8 Wochen. Fördersatz: 25–55 % je nach Unternehmensgröße.",
        },
        {
          q: "Welche BAFA-Förderung gibt es für Nachhaltigkeit?",
          a: "BAFA fördert Nachhaltigkeit über mehrere Programme: BAFA BEE (Bundesförderung effiziente Energiesysteme) mit bis zu 55 % für Prozesswärme und Abwärmenutzung, BAFA Energieberatung mit bis zu 80 % für KMU-Beratung, und BAFA Transformationskonzepte für Dekarbonisierungsstrategien. Kombinierbar mit KfW-Krediten und EFRE-Landesförderung.",
        },
      ],
    },

    // ─── Leistungsseiten ───
    services: {
      backToHome: "← Zurück zur Startseite",
      ctaHeadline: "Bereit für den nächsten Schritt?",
      ctaBody: "Kostenloser Quick-Check in 3 Minuten — finden Sie heraus, welche Förderprogramme für Ihr Unternehmen relevant sind.",
      ctaButton: "Quick-Check starten →",
      ctaEmail: "Oder direkt schreiben:",
      processLabel: "SO ARBEITEN WIR",
      processHeadline: "Unser Prozess.",
      factsLabel: "ZAHLEN & FAKTEN",
      factsHeadline: "Das spricht für sich.",
      scopeLabel: "LEISTUNGSUMFANG",
      scopeHeadline: "Was wir für Sie tun.",
    },
    foerderberatung: {
      heroLabel: "INDIVIDUELLE FÖRDERBERATUNG",
      heroHeadline: "Fördergelder sichern.",
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
      heroHeadline: "ESG-Ready werden.",
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
      heroHeadline: "Innovation fördern.",
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

    // ─── FooterSection ───
    footer: {
      tagline: "Förderberatung für deutsche KMU. Fördermittelmanagement · CSRD · Nachhaltigkeitsstrategie.",
      location: "Berlin, Deutschland",
      navLabel: "Navigation",
      navLinks: [
        { label: "Leistungen", href: "/#leistungen" },
        { label: "Förderberatung", href: "/foerderberatung" },
        { label: "CSRD-Beratung", href: "/csrd-beratung" },
        { label: "ZIM-Förderung", href: "/zim-foerderung" },
        { label: "Quick-Check", href: "/#quick-check" },
        { label: "Über uns", href: "/#ueber-uns" },
      ],
      contactLabel: "Kontakt",
      copyright: "© 2026 VO Sustain · Denis Jänicke",
      impressum: "Impressum",
      datenschutz: "Datenschutz",
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
      tag: "VO SUSTAIN · Berlin · Germany",
      headline: "Grant Advisory for SMEs.",
      sub: "The Green Wave of Transformation.",
      body: "We turn the fog of theory into tangible strategy – and strategy into funded action.",
      ctaPrimary: "Start Quick-Check →",
      ctaSecondary: "Services",
      imgAlt: "Verde Onda – The Green Wave",
    },

    // ─── ProblemSection ───
    problem: {
      label: "The Challenge",
      headline: "The Theory Fog.",
      body: "Many SMEs experience sustainability as paralyzing complexity. We know that feeling. And we solve it – with clarity, strategy, and funded implementation.",
      cards: [
        {
          title: "Supply Chain Pressure",
          desc: "Most SMEs are not directly subject to CSRD — but large customers increasingly demand ESG data through the supply chain. Without preparation, contract and credit risks arise.",
        },
        {
          title: "Funding Chaos",
          desc: "Opaque grant logic, budget freezes, and application deadlines: most SMEs leave money on the table because they lack the overview.",
        },
        {
          title: "Resource Gap",
          desc: "Between day-to-day operations and grant bureaucracy, internal capacity is lacking – sustainability stays a declaration of intent, not reality.",
        },
      ],
    },

    // ─── SolutionSection ───
    solution: {
      label: "What We Do",
      headline1: "Three Channels",
      headline2: "of VO Sustain.",
      body: "Turnkey solutions – from funding strategy to audit-proof implementation.",
      channels: [
        {
          label: "01",
          title: "Grant Management",
          desc: "From initial screening to final reporting – turnkey and audit-proof.",
          tags: ["ZIM", "BAFA", "EFRE", "SAB", "KfW", "EU HORIZON"],
        },
        {
          label: "02",
          title: "CSRD Advisory",
          desc: "ESG data for supply chain requests under the VSME standard — pragmatic, proportionate, and with Value Chain Cap protection.",
          tags: ["CSRD", "VSME", "ESG", "Reporting"],
        },
        {
          label: "03",
          title: "Sustainability Strategy",
          desc: "Roadmaps that prioritise rather than overwhelm. Clear steps, measurable impact, fundable measures.",
          tags: ["Roadmap", "Strategy", "GHG Reduction"],
        },
      ],
    },

    // ─── ResultsSection ───
    results: {
      label: "Proven Results",
      headline: "What our clients gain.",
      body: "No promise without proof.",
      refsLabel: "References",
      outcomes: [
        {
          title: "Certainty",
          desc: "Clarity on every step – from application to audit. No nasty surprises.",
        },
        {
          title: "Impact",
          desc: "Measurably improved sustainability KPIs. GHG reduction, energy efficiency, ESG readiness.",
        },
        {
          title: "Investment Power",
          desc: "Create financial headroom through smart funding – more capital for your core business.",
        },
      ],
      customers: [
        {
          nr: "01",
          company: "Kelorina",
          result: "55% Grant",
          type: "Funding Secured",
          program: "Energy & Climate",
          desc: "Full grant application and successful approval in renewable energy – from initial programme screening to funding notification.",
          tags: ["Renewable Energy", "Grant Application", "Approval"],
        },
        {
          nr: "02",
          company: "Green Island",
          result: "60% Grant",
          type: "Energy Research",
          program: "R&D Funding",
          desc: "Funding strategy, programme selection and complete application in energy research and process efficiency.",
          tags: ["R&D", "Energy Efficiency", "Grant Application"],
        },
        {
          nr: "03",
          company: "Kiyora",
          result: "ESG-Ready",
          type: "Sustainability Advisory",
          program: "VSME Standard",
          desc: "ESG data strategy under the VSME standard — supply-chain-ready, proportionate, and with Value Chain Cap protection.",
          tags: ["VSME", "ESG", "Supply Chain", "Value Chain Cap"],
        },
      ],
    },

    // ─── QuickCheckSection ───
    quickCheck: {
      label: "Free Quick-Check",
      headline1: "Your Funding Potential",
      headline2: "in 3 minutes.",
      body: "Find your matching grant programmes in 3 minutes. Precise, free of charge.",
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
      recommendedPackage: "Recommended VO Sustain Package",
      newRequest: "← New Request",
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
      heroHeadline: "News.",
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
      ctaBody: "Find out which funding programmes are relevant for you in 5 minutes.",
      ctaButton: "Start Quick-Check →",
      deadlineExpired: "Expired",
      deadlineToday: "Today!",
      deadlineTomorrow: "Tomorrow!",
      deadlineDays: "Days",
    },

    // ─── AboutSection ───
    about: {
      label: "Who's behind it",
      headline: "Denis Jänicke",
      subtitle: "Founder · VO Sustain · Berlin",
      quote: "I combine technical grant expertise with pragmatic implementation – so your sustainability investment doesn't get stuck at a desk.",
      credentials: [
        { label: "EU–Federal–State", sub: "Full funding coverage" },
        { label: "End-to-End", sub: "Concept to final reporting" },
        { label: "DE · EU · Asia", sub: "Project regions" },
      ],
      bio: "Senior Grant & Programme Operations Lead specialising in EU funding and consortium management. ZIM Network Manager for the SEAWEED DECARBON POLYMER project (12+ partners). Audit-proof process design, financial reporting, and CSRD compliance support.",
      imgAlt: "Denis Jänicke – Founder VO Sustain",
    },

    // ─── LogoTickerSection ───
    logoTicker: {
      label: "FUNDING LANDSCAPE",
      headline: "A Selection of Programmes",
      body: "Federal, regional, European — we navigate the entire funding landscape for your SME.",
    },

    // ─── FaqSection ───
    faq: {
      label: "FAQ",
      headline: "Frequently Asked Questions.",
      items: [
        {
          q: "What funding programs are available for SMEs?",
          a: "Germany has over 2,000 funding programs — from federal programs like ZIM (up to €600,000 for R&D projects) and BAFA EEW (up to 55% for energy efficiency) to regional programs via SAB (Saxony), TAB (Thuringia) or IBB (Berlin). For sustainable investments, KfW loans and EU programs like Horizon Europe are also relevant.",
        },
        {
          q: "Are SMEs directly subject to CSRD?",
          a: "Most SMEs are no longer directly subject to CSRD under Omnibus I (2026) — new thresholds are 1,000 employees and €450M turnover. However, large customers and banks increasingly demand ESG data from the supply chain. The voluntary VSME standard offers SMEs a proportional framework with just 11 basic data points.",
        },
        {
          q: "What does grant consulting cost?",
          a: "VO Sustain works on a success basis: the Quick-Check is free. For full application support, a tiered fee applies — payable only upon approval. You bear no financial risk before funding flows.",
        },
        {
          q: "How long does a ZIM application take?",
          a: "A complete ZIM application typically requires 4–8 weeks of preparation. Processing time at the project sponsor is usually 3–6 months. VO Sustain handles the entire process — from project description and budgeting to submission.",
        },
        {
          q: "What are the requirements for ZIM funding?",
          a: "ZIM (Central Innovation Programme for SMEs) targets companies with up to 499 employees and less than €100M turnover. The project must have R&D character, involve technical risk, and aim at a new product or process. Funding rate: 25–55% depending on company size and federal state.",
        },
        {
          q: "What is the difference between grants and loans?",
          a: "Grants (e.g. ZIM, BAFA) do not need to be repaid — they are true capital inflows. Loans (e.g. KfW) are low-interest credits that must be repaid, but offer significantly better terms than bank loans. VO Sustain identifies the optimal mix of grants and loans for each project.",
        },
        {
          q: "How do I apply for ZIM funding in 2026?",
          a: "A ZIM application in 2026 requires: a project description with proof of novelty and technical risk, a financing plan, work packages, and AGVO declarations. VO Sustain handles the entire preparation — from funding programme analysis to submission to the project sponsor (AiF or DLR). Typical preparation time: 4–8 weeks. Funding rate: 25–55% depending on company size.",
        },
        {
          q: "What BAFA funding is available for sustainability?",
          a: "BAFA funds sustainability through several programmes: BAFA BEE (Federal Funding for Efficient Energy Systems) with up to 55% for process heat and waste heat recovery, BAFA Energy Consulting with up to 80% for SME consultancy, and BAFA Transformation Concepts for decarbonisation strategies. Combinable with KfW loans and EFRE regional funding.",
        },
      ],
    },

    // ─── Leistungsseiten ───
    services: {
      backToHome: "← Back to Home",
      ctaHeadline: "Ready for the next step?",
      ctaBody: "Free Quick-Check in 3 minutes — find out which funding programmes are relevant for your company.",
      ctaButton: "Start Quick-Check →",
      ctaEmail: "Or write directly:",
      processLabel: "HOW WE WORK",
      processHeadline: "Our Process.",
      factsLabel: "NUMBERS & FACTS",
      factsHeadline: "The numbers speak.",
      scopeLabel: "SCOPE OF SERVICES",
      scopeHeadline: "What we do for you.",
    },
    foerderberatung: {
      heroLabel: "INDIVIDUAL GRANT ADVISORY",
      heroHeadline: "Secure funding.",
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
      heroHeadline: "Get ESG-ready.",
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
      heroHeadline: "Fund innovation.",
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

    // ─── FooterSection ───
    footer: {
      tagline: "Grant advisory for German SMEs. Funding management · CSRD · Sustainability strategy.",
      location: "Berlin, Germany",
      navLabel: "Navigation",
      navLinks: [
        { label: "Services", href: "/#leistungen" },
        { label: "Grant Advisory", href: "/foerderberatung" },
        { label: "CSRD Advisory", href: "/csrd-beratung" },
        { label: "ZIM Funding", href: "/zim-foerderung" },
        { label: "Quick-Check", href: "/#quick-check" },
        { label: "About", href: "/#ueber-uns" },
      ],
      contactLabel: "Contact",
      copyright: "© 2026 VO Sustain · Denis Jänicke",
      impressum: "Legal Notice",
      datenschutz: "Privacy Policy",
    },
  },
} as const;

export type Translations = typeof translations.de | typeof translations.en;
