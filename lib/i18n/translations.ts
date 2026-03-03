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
      ],
    },

    // ─── FooterSection ───
    footer: {
      tagline: "Förderberatung für deutsche KMU. Fördermittelmanagement · CSRD · Nachhaltigkeitsstrategie.",
      location: "Berlin, Deutschland",
      navLabel: "Navigation",
      navLinks: [
        { label: "Leistungen", href: "/#leistungen" },
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
      ],
    },

    // ─── FooterSection ───
    footer: {
      tagline: "Grant advisory for German SMEs. Funding management · CSRD · Sustainability strategy.",
      location: "Berlin, Germany",
      navLabel: "Navigation",
      navLinks: [
        { label: "Services", href: "/#leistungen" },
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
