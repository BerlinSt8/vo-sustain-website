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
      tag: "Förderberatung · Berlin · Deutschland",
      headline: "VO Sustain.",
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
          result: "200.000 €",
          type: "Fördermittel gesichert",
          program: "Energie & Klimaschutz",
          desc: "Vollständige Förderantragstellung und erfolgreiche Bewilligung im Bereich erneuerbare Energien – von der ersten Programmprüfung bis zur Bewilligungsmitteilung.",
          tags: ["Erneuerbare Energien", "Förderantrag", "Bewilligung"],
        },
        {
          nr: "02",
          company: "Green Island",
          result: "300.000 €",
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
    },

    // ─── AboutSection ───
    about: {
      label: "Wer steckt dahinter",
      headline: "Denis Jänicke",
      subtitle: "Inhaber & Gründer · VO Sustain · Berlin",
      quote: "Ich verbinde technisches Förderwissen mit pragmatischer Umsetzung – damit Ihre Nachhaltigkeitsinvestition nicht am Schreibtisch stecken bleibt.",
      credentials: [
        { label: "EU–Bund–Land", sub: "Vollständige Förderebenen" },
        { label: "12+", sub: "Partner im ZIM-Netzwerk" },
        { label: "~95%", sub: "Förderquote SEAWEED-Projekt" },
      ],
      bio: "Senior Grant & Programme Operations Lead mit Spezialisierung auf EU-Förderung und Konsortialmanagement. ZIM-Netzwerkmanager für das SEAWEED DECARBON POLYMER-Projekt (12+ Partner). Audit-sichere Prozessgestaltung, Verwendungsnachweis und CSRD-Implementierung.",
      imgAlt: "Denis Jänicke – Inhaber VO Sustain",
    },

    // ─── LogoTickerSection ───
    logoTicker: {
      label: "FÖRDERLANDSCHAFT",
      headline: "Eine Auswahl der Programme",
      body: "Bundesweit, regional, europäisch — wir navigieren die gesamte Förderlandschaft für Ihr KMU.",
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
      tag: "Grant Advisory · Berlin · Germany",
      headline: "VO Sustain.",
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
          result: "€200,000",
          type: "Funding Secured",
          program: "Energy & Climate",
          desc: "Full grant application and successful approval in renewable energy – from initial programme screening to funding notification.",
          tags: ["Renewable Energy", "Grant Application", "Approval"],
        },
        {
          nr: "02",
          company: "Green Island",
          result: "€300,000",
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
    },

    // ─── AboutSection ───
    about: {
      label: "Who's behind it",
      headline: "Denis Jänicke",
      subtitle: "Founder & Owner · VO Sustain · Berlin",
      quote: "I combine technical grant expertise with pragmatic implementation – so your sustainability investment doesn't get stuck at a desk.",
      credentials: [
        { label: "EU–Federal–State", sub: "Full funding coverage" },
        { label: "12+", sub: "Partners in ZIM network" },
        { label: "~95%", sub: "Funding rate SEAWEED project" },
      ],
      bio: "Senior Grant & Programme Operations Lead specialising in EU funding and consortium management. ZIM Network Manager for the SEAWEED DECARBON POLYMER project (12+ partners). Audit-proof process design, financial reporting, and CSRD implementation.",
      imgAlt: "Denis Jänicke – Founder VO Sustain",
    },

    // ─── LogoTickerSection ───
    logoTicker: {
      label: "FUNDING LANDSCAPE",
      headline: "A Selection of Programmes",
      body: "Federal, regional, European — we navigate the entire funding landscape for your SME.",
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
