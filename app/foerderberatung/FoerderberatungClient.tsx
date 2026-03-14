"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import ServicePageClient from "@/components/services/ServicePageClient";

export default function FoerderberatungClient() {
  const { t } = useLanguage();

  const comparisonTable = (
    <section style={{ background: "var(--navy)", padding: "5rem 8vw" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.18em", color: "var(--verde-bright)", textTransform: "uppercase", marginBottom: "1.25rem" }}>
          FÖRDERPROGRAMME IM VERGLEICH
        </div>
        <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(1.3rem, 3vw, 1.8rem)", fontWeight: 800, color: "white", marginBottom: "2rem" }}>
          Welches Programm passt zu Ihrem Vorhaben?
        </h2>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'Open Sans', sans-serif", fontSize: "0.82rem" }}>
            <thead>
              <tr>
                {["", "ZIM", "BAFA EEW", "EFRE/GRW", "Forschungszulage", "Horizon Europe"].map((h, i) => (
                  <th key={i} style={{ padding: "0.85rem 0.75rem", textAlign: "left", color: i === 0 ? "var(--ct3)" : "var(--verde-bright)", fontFamily: "'Montserrat', sans-serif", fontSize: "0.75rem", fontWeight: 700, borderBottom: "2px solid rgba(255,255,255,0.1)", whiteSpace: "nowrap" }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Fokus", "F&E + Innovation", "Energieeffizienz", "Regionalförderung", "Steuerliche F&E", "Exzellenzforschung"],
                ["Max. Zuschuss", "380.000 €", "bis 15 Mio. €", "regional variabel", "1 Mio. € / Jahr", "2,5 Mio. € (EIC)"],
                ["Fördersatz KMU", "25–60 %", "bis 55 %", "bis 45 %", "35 % (steuerlich)", "bis 100 %"],
                ["Antragstellung", "Jederzeit", "Vor Vorhabenbeginn", "Jederzeit (Aufruf)", "Rückwirkend möglich", "Stichtage (Calls)"],
                ["Rückzahlung?", "Nein (Zuschuss)", "Nein (Zuschuss)", "Nein (Zuschuss)", "Steuererstattung", "Nein (Zuschuss)"],
                ["Ideal für", "Neue Produkte/Verfahren", "Anlagen, Prozesswärme", "Standort-Investitionen", "Laufende F&E-Kosten", "Internationale F&E"],
                ["Quelle", "BMWK", "BAFA", "Landesförderbanken", "FZulG", "EU Horizon Europe"],
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} style={{ padding: "0.65rem 0.75rem", color: j === 0 ? "var(--ct3)" : "var(--ct1)", borderBottom: "1px solid rgba(255,255,255,0.06)", fontWeight: j === 0 ? 600 : 400, fontSize: j === 0 ? "0.75rem" : "0.82rem", fontFamily: j === 0 ? "'Roboto Mono', monospace" : "'Open Sans', sans-serif" }}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );

  return (
    <ServicePageClient
      heroLabel={t.foerderberatung.heroLabel}
      heroHeadline={t.foerderberatung.heroHeadline}
      heroSub={t.foerderberatung.heroSub}
      heroBody={t.foerderberatung.heroBody}
      scope={t.foerderberatung.scope}
      process={t.foerderberatung.process}
      facts={t.foerderberatung.facts}
      tags={t.foerderberatung.programs}
      extraSection={comparisonTable}
      relatedLinks={[
        { href: "/zim-foerderung", title: t.zimFoerderung.heroHeadline },
        { href: "/bafa-foerderung", title: t.bafaFoerderung.heroHeadline },
        { href: "/csrd-beratung",   title: t.csrdBeratung.heroHeadline },
      ]}
    />
  );
}
