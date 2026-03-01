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
          title: "CSRD-Druck",
          desc: "Neue Vorgaben wie CSRD und VSME machen ESG-Berichterstattung für immer mehr KMU verpflichtend – mit wenig Vorlauf und hohem Aufwand.",
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
          desc: "Von der Erstprüfung bis zum Verwendungsnachweis. ZIM · BAFA · EFRE · SAB · TAB · Horizon Europe.",
          tags: ["ZIM", "BAFA", "EFRE", "SAB", "KfW"],
        },
        {
          label: "02",
          title: "CSRD-Beratung",
          desc: "ESG-Reporting nach CSRD und VSME-Standard – mit valider Datenbasis und pragmatischer Umsetzung.",
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
          desc: "Messbar verbesserte Nachhaltigkeits-KPIs. THG-Reduktion, Energieeffizienz, CSRD-Compliance.",
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
          result: "CSRD-Compliance",
          type: "Nachhaltigkeitsberatung",
          program: "CSRD / VSME",
          desc: "ESG-Reporting-Strategie und CSRD-Implementierungsplan nach VSME-Standard – prüfbereit und zukunftssicher.",
          tags: ["CSRD", "VSME", "ESG", "Reporting"],
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
          title: "CSRD Pressure",
          desc: "New regulations like CSRD and VSME make ESG reporting mandatory for more and more SMEs – with little lead time and high effort.",
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
          desc: "From initial screening to final reporting. ZIM · BAFA · EFRE · SAB · TAB · Horizon Europe.",
          tags: ["ZIM", "BAFA", "EFRE", "SAB", "KfW"],
        },
        {
          label: "02",
          title: "CSRD Advisory",
          desc: "ESG reporting under CSRD and VSME standards – with a solid data foundation and pragmatic implementation.",
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
          desc: "Measurably improved sustainability KPIs. GHG reduction, energy efficiency, CSRD compliance.",
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
          result: "CSRD Compliance",
          type: "Sustainability Advisory",
          program: "CSRD / VSME",
          desc: "ESG reporting strategy and CSRD implementation plan under VSME standard – audit-ready and future-proof.",
          tags: ["CSRD", "VSME", "ESG", "Reporting"],
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
