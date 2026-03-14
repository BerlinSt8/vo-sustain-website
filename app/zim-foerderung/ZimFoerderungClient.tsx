"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import ServicePageClient from "@/components/services/ServicePageClient";

export default function ZimFoerderungClient() {
  const { t } = useLanguage();

  /* Extra section: ZIM comparison table + experience callout */
  const experienceSection = (
    <>
      {/* Vergleichstabelle — ZIM-Projektformen */}
      <section style={{ background: "var(--navy)", padding: "5rem 8vw" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.18em", color: "var(--verde-bright)", textTransform: "uppercase", marginBottom: "1.25rem" }}>
            ZIM-PROJEKTFORMEN IM VERGLEICH
          </div>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(1.3rem, 3vw, 1.8rem)", fontWeight: 800, color: "white", marginBottom: "2rem" }}>
            Einzelprojekt, Kooperation oder Netzwerk?
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'Open Sans', sans-serif", fontSize: "0.85rem" }}>
              <thead>
                <tr>
                  {["", "Einzelprojekt", "Kooperation", "Netzwerk"].map((h, i) => (
                    <th key={i} style={{ padding: "1rem", textAlign: "left", color: i === 0 ? "var(--ct3)" : "var(--verde-bright)", fontFamily: "'Montserrat', sans-serif", fontSize: "0.8rem", fontWeight: 700, borderBottom: "2px solid rgba(255,255,255,0.1)" }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Max. Zuschuss", "bis 380.000 €", "bis 380.000 € / Partner", "bis 2,3 Mio. € gesamt"],
                  ["Fördersatz KMU", "25–45 %", "30–60 %", "bis 60 %"],
                  ["Fördersatz Ost-KMU", "bis 45 %", "bis 60 %", "bis 60 %"],
                  ["Partner nötig?", "Nein", "Mind. 2", "Mind. 6"],
                  ["Laufzeit", "bis 36 Monate", "bis 36 Monate", "bis 36 Monate (3 Phasen)"],
                  ["Ideal für", "Einzelne F&E-Vorhaben", "Gemeinsame Entwicklung", "Komplexe Wertschöpfungsketten"],
                  ["Quelle", "ZIM-Richtlinie, BMWK", "ZIM-Richtlinie, BMWK", "ZIM-Richtlinie, BMWK"],
                ].map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j} style={{ padding: "0.75rem 1rem", color: j === 0 ? "var(--ct3)" : "var(--ct1)", borderBottom: "1px solid rgba(255,255,255,0.06)", fontWeight: j === 0 ? 600 : 400, fontSize: j === 0 ? "0.78rem" : "0.85rem", fontFamily: j === 0 ? "'Roboto Mono', monospace" : "'Open Sans', sans-serif" }}>
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

      {/* SEAWEED Experience Callout */}
      <section style={{ background: "var(--navy)", padding: "5rem 8vw" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ background: "rgba(39,174,96,0.06)", border: "1px solid rgba(39,174,96,0.2)", borderRadius: "var(--radius)", padding: "3rem 2.5rem" }}>
            <div style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.18em", color: "var(--verde-bright)", textTransform: "uppercase", marginBottom: "1.25rem" }}>
              SEAWEED DECARBON POLYMER
            </div>
            <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "1.05rem", color: "var(--ct2)", lineHeight: 1.75, fontStyle: "italic" }}>
              &ldquo;{t.zimFoerderung.experience}&rdquo;
            </p>
          </div>
        </div>
      </section>
    </>
  );

  return (
    <ServicePageClient
      heroLabel={t.zimFoerderung.heroLabel}
      heroHeadline={t.zimFoerderung.heroHeadline}
      heroSub={t.zimFoerderung.heroSub}
      heroBody={t.zimFoerderung.heroBody}
      scope={t.zimFoerderung.scope}
      process={t.zimFoerderung.process}
      facts={t.zimFoerderung.facts}
      tags={t.zimFoerderung.types}
      extraSection={experienceSection}
      relatedLinks={[
        { href: "/foerderberatung", title: t.foerderberatung.heroHeadline },
        { href: "/bafa-foerderung", title: t.bafaFoerderung.heroHeadline },
      ]}
    />
  );
}
