"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ─── Honorar-Berechnung (Staffelprovision) ─── */
function berechneHonorar(summe: number): { honorar: number; effektiverSatz: number; stufen: string[] } {
  let rest = summe;
  let honorar = 0;
  const stufen: string[] = [];

  const s1 = Math.min(rest, 100_000);
  if (s1 > 0) {
    honorar += s1 * 0.10;
    stufen.push(`${(s1 / 1000).toFixed(0)}k \u00d7 10\u2009% = ${(s1 * 0.10).toLocaleString("de-DE")}\u2009\u20ac`);
    rest -= s1;
  }
  const s2 = Math.min(rest, 200_000);
  if (s2 > 0) {
    honorar += s2 * 0.07;
    stufen.push(`${(s2 / 1000).toFixed(0)}k \u00d7 7\u2009% = ${(s2 * 0.07).toLocaleString("de-DE")}\u2009\u20ac`);
    rest -= s2;
  }
  const s3 = Math.min(rest, 300_000);
  if (s3 > 0) {
    honorar += s3 * 0.05;
    stufen.push(`${(s3 / 1000).toFixed(0)}k \u00d7 5\u2009% = ${(s3 * 0.05).toLocaleString("de-DE")}\u2009\u20ac`);
    rest -= s3;
  }
  if (rest > 0) {
    honorar += rest * 0.035;
    stufen.push(`${(rest / 1000).toFixed(0)}k \u00d7 3,5\u2009% = ${(rest * 0.035).toLocaleString("de-DE")}\u2009\u20ac`);
  }

  return { honorar, effektiverSatz: (honorar / summe) * 100, stufen };
}

/* ─── Rechenbeispiele ─── */
const BEISPIELE = [
  { label: "BAFA EEW", summe: 120_000, desc: "Energieeffizienz-Investition" },
  { label: "ZIM Einzelprojekt", summe: 250_000, desc: "F&E-Kooperationsprojekt" },
  { label: "ZIM Netzwerk", summe: 600_000, desc: "Netzwerkprojekt, 6 Partner" },
];

/* ─── FAQ Data ─── */
const FAQ_ITEMS = [
  {
    q: "Was kostet die Erstberatung?",
    a: "Nichts. Die Erstanalyse Ihres F\u00f6rderpotenzials ist kostenlos und unverbindlich. Wir pr\u00fcfen Ihr Vorhaben gegen 349 F\u00f6rderprogramme und zeigen, welche passen \u2014 bevor Sie sich entscheiden.",
  },
  {
    q: "Wann zahle ich das Erfolgshonorar?",
    a: "Erst bei Auszahlung der F\u00f6rdermittel. Nicht bei Antragstellung, nicht bei Bewilligung \u2014 sondern wenn das Geld auf Ihrem Konto ist. F\u00e4llig 30 Tage nach Auszahlung.",
  },
  {
    q: "Was passiert, wenn der Antrag abgelehnt wird?",
    a: "Dann zahlen Sie kein Erfolgshonorar. Die Analysepauschale deckt unseren Aufwand f\u00fcr die Vorarbeit und ist bereits geleistet. Dar\u00fcber hinaus entstehen Ihnen keine Kosten.",
  },
  {
    q: "Sind die Beratungskosten steuerlich absetzbar?",
    a: "Ja. Beratungskosten f\u00fcr F\u00f6rdermittel sind als Betriebsausgaben voll absetzbar. Bei einigen Programmen (z.\u00a0B. BAFA-Energieberatung) werden die Beratungskosten selbst gef\u00f6rdert \u2014 bis zu 80\u00a0%. Bei der Forschungszulage k\u00f6nnen Beratungskosten sogar in die f\u00f6rderf\u00e4hige Bemessungsgrundlage einflie\u00dfen.",
  },
  {
    q: "Warum eine Staffelprovision statt Festpreis?",
    a: "Weil Ihr Anteil sinkt, je h\u00f6her die F\u00f6rdersumme. Bei 600.000\u00a0\u20ac zahlen Sie effektiv nur 6,8\u00a0% statt der markt\u00fcblichen 10\u201315\u00a0%. Das Modell belohnt gr\u00f6\u00dfere Vorhaben und bringt unsere Interessen in Einklang mit Ihren.",
  },
];

/* ─── Shared Styles ─── */
const mono = "'Roboto Mono', monospace";
const hdng = "'Montserrat', sans-serif";
const bdy = "'Open Sans', sans-serif";

export default function FoerderberatungKostenClient() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const overlayOp = useTransform(scrollYProgress, [0, 0.6], [0.55, 0.92]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ━━━ HERO ━━━ */}
      <section
        ref={heroRef}
        style={{
          position: "relative",
          minHeight: "75vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          background: "var(--navy-dark)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 80% 60% at 30% 40%, rgba(39,174,96,0.08) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 80% 70%, rgba(13,27,42,0.5) 0%, transparent 70%)",
          }}
        />
        <motion.div style={{ position: "absolute", inset: 0, background: "var(--navy-dark)", opacity: overlayOp }} />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />

        <motion.div
          style={{
            y: contentY,
            position: "relative",
            zIndex: 2,
            width: "100%",
            padding: "8rem 8vw 5rem",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <a
            href="/"
            style={{
              fontFamily: mono,
              fontSize: "0.72rem",
              color: "var(--ct3)",
              textDecoration: "none",
              letterSpacing: "0.04em",
              transition: "color 0.2s",
              display: "inline-block",
              marginBottom: "2.5rem",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ct1)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ct3)")}
          >
            &larr; Startseite
          </a>

          <div
            style={{
              fontFamily: mono,
              fontSize: "0.62rem",
              letterSpacing: "0.18em",
              color: "var(--verde-bright)",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
            }}
          >
            WAS KOSTET F&Ouml;RDERBERATUNG?
          </div>

          <h1
            style={{
              fontFamily: hdng,
              fontSize: "clamp(1.8rem, 4.5vw, 3.2rem)",
              fontWeight: 900,
              color: "white",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
              maxWidth: "700px",
            }}
          >
            Transparentes Honorarmodell.
          </h1>

          <p
            style={{
              fontFamily: bdy,
              fontSize: "clamp(0.95rem, 1.8vw, 1.15rem)",
              color: "var(--ct2)",
              lineHeight: 1.7,
              maxWidth: "600px",
              marginBottom: "1rem",
            }}
          >
            Nur 2 von 12 F&ouml;rderberatern in Deutschland kommunizieren ihre Preise offen.
            Wir geh&ouml;ren dazu. Staffelprovision statt Blackbox &mdash; Sie wissen vorher, was Sie zahlen.
          </p>

          <p
            style={{
              fontFamily: mono,
              fontSize: "0.78rem",
              color: "var(--verde-bright)",
              letterSpacing: "0.02em",
            }}
          >
            Kein Honorar ohne Bewilligung.
          </p>
        </motion.div>
      </section>

      {/* ━━━ SECTION 1: UNSER MODELL ━━━ */}
      <section style={{ background: "var(--navy)", padding: "5rem 8vw" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div
            style={{
              fontFamily: mono,
              fontSize: "0.62rem",
              letterSpacing: "0.18em",
              color: "var(--verde-bright)",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
            }}
          >
            UNSER MODELL
          </div>
          <h2
            style={{
              fontFamily: hdng,
              fontSize: "clamp(1.3rem, 3vw, 2rem)",
              fontWeight: 800,
              color: "white",
              marginBottom: "1rem",
            }}
          >
            Staffelprovision &mdash; je mehr F&ouml;rderung, desto weniger zahlen Sie
          </h2>
          <p
            style={{
              fontFamily: bdy,
              fontSize: "0.95rem",
              color: "var(--ct2)",
              lineHeight: 1.7,
              maxWidth: "700px",
              marginBottom: "3rem",
            }}
          >
            Unser Honorar besteht aus zwei Komponenten: einer Analysepauschale f&uuml;r die Vorarbeit
            und einer degressiven Staffelprovision, die erst bei Auszahlung f&auml;llig wird.
          </p>

          {/* Kostenlose Erstanalyse + Analysepauschale */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem", marginBottom: "2.5rem" }}>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "1rem",
                padding: "1.5rem",
                background: "rgba(39,174,96,0.06)",
                border: "1px solid rgba(39,174,96,0.2)",
                borderRadius: "10px",
              }}
            >
              <div style={{ flexShrink: 0, marginTop: "0.1rem" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--verde-bright)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <div>
                <div style={{ fontFamily: hdng, fontWeight: 700, color: "white", fontSize: "0.95rem" }}>
                  Erstanalyse &mdash; kostenlos
                </div>
                <div style={{ fontFamily: bdy, color: "var(--ct3)", fontSize: "0.82rem", marginTop: "0.35rem", lineHeight: 1.55 }}>
                  F&ouml;rderpotenzial-Check gegen 349 Programme, Programm-Matching, erste Einsch&auml;tzung. Unverbindlich.
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "1rem",
                padding: "1.5rem",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "10px",
              }}
            >
              <div style={{ flexShrink: 0, marginTop: "0.1rem" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--ct3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
              </div>
              <div>
                <div style={{ fontFamily: hdng, fontWeight: 700, color: "white", fontSize: "0.95rem" }}>
                  Analysepauschale &mdash; anrechenbar
                </div>
                <div style={{ fontFamily: bdy, color: "var(--ct3)", fontSize: "0.82rem", marginTop: "0.35rem", lineHeight: 1.55 }}>
                  Deckt die vertiefte Analyse und Konzeptarbeit. Wird bei Erfolg vollst&auml;ndig auf das Honorar angerechnet.
                </div>
              </div>
            </div>
          </div>

          {/* Staffel-Visualisierung */}
          <h3
            style={{
              fontFamily: hdng,
              fontSize: "1.1rem",
              fontWeight: 700,
              color: "white",
              marginBottom: "1.5rem",
            }}
          >
            Staffelprovision auf bewilligte F&ouml;rdersumme
          </h3>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
            {[
              { range: "Bis 100.000\u2009\u20ac", rate: "10\u2009%", color: "var(--verde-bright)" },
              { range: "100.001\u2013300.000\u2009\u20ac", rate: "7\u2009%", color: "#2ECC71" },
              { range: "300.001\u2013600.000\u2009\u20ac", rate: "5\u2009%", color: "#27AE60" },
              { range: "Ab 600.001\u2009\u20ac", rate: "3,5\u2009%", color: "#1E8449" },
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  padding: "1.5rem",
                  background: "rgba(255,255,255,0.03)",
                  border: `1px solid ${s.color}33`,
                  borderRadius: "10px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: hdng,
                    fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                    fontWeight: 900,
                    color: s.color,
                    marginBottom: "0.5rem",
                  }}
                >
                  {s.rate}
                </div>
                <div style={{ fontFamily: mono, fontSize: "0.7rem", color: "var(--ct3)", letterSpacing: "0.05em" }}>
                  {s.range}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.7rem 1.2rem",
              background: "rgba(39,174,96,0.06)",
              border: "1px solid rgba(39,174,96,0.15)",
              borderRadius: "8px",
              fontFamily: mono,
              fontSize: "0.72rem",
              color: "var(--verde-bright)",
              letterSpacing: "0.03em",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            F&auml;llig erst bei Auszahlung &mdash; nicht bei Bewilligung
          </div>
        </div>
      </section>

      {/* ━━━ SECTION 2: RECHENBEISPIELE ━━━ */}
      <section style={{ background: "var(--navy-dark)", padding: "5rem 8vw" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div
            style={{
              fontFamily: mono,
              fontSize: "0.62rem",
              letterSpacing: "0.18em",
              color: "var(--verde-bright)",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
            }}
          >
            RECHENBEISPIELE
          </div>
          <h2
            style={{
              fontFamily: hdng,
              fontSize: "clamp(1.3rem, 3vw, 2rem)",
              fontWeight: 800,
              color: "white",
              marginBottom: "2.5rem",
            }}
          >
            So rechnet sich die Staffelprovision
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {BEISPIELE.map((b, i) => {
              const { honorar, effektiverSatz, stufen } = berechneHonorar(b.summe);
              return (
                <div
                  key={i}
                  style={{
                    padding: "2rem",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "12px",
                    transition: "border-color 0.3s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(39,174,96,0.3)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
                >
                  <div style={{ fontFamily: mono, fontSize: "0.62rem", letterSpacing: "0.15em", color: "var(--verde-bright)", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                    {b.label}
                  </div>
                  <div style={{ fontFamily: bdy, fontSize: "0.82rem", color: "var(--ct3)", marginBottom: "1.2rem" }}>
                    {b.desc}
                  </div>

                  <div style={{ fontFamily: hdng, fontSize: "1.6rem", fontWeight: 900, color: "white", marginBottom: "0.3rem" }}>
                    {b.summe.toLocaleString("de-DE")}&thinsp;&euro;
                  </div>
                  <div style={{ fontFamily: bdy, fontSize: "0.78rem", color: "var(--ct3)", marginBottom: "1.5rem" }}>
                    Bewilligte F&ouml;rdersumme
                  </div>

                  <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1rem", marginBottom: "1rem" }}>
                    {stufen.map((s, j) => (
                      <div key={j} style={{ fontFamily: mono, fontSize: "0.72rem", color: "var(--ct3)", marginBottom: "0.35rem" }}>
                        {s}
                      </div>
                    ))}
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderTop: "1px solid rgba(39,174,96,0.2)", paddingTop: "1rem" }}>
                    <div>
                      <div style={{ fontFamily: hdng, fontSize: "1.3rem", fontWeight: 800, color: "var(--verde-bright)" }}>
                        {honorar.toLocaleString("de-DE")}&thinsp;&euro;
                      </div>
                      <div style={{ fontFamily: bdy, fontSize: "0.72rem", color: "var(--ct3)" }}>
                        Erfolgshonorar
                      </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontFamily: hdng, fontSize: "1.1rem", fontWeight: 700, color: "var(--ct2)" }}>
                        {effektiverSatz.toFixed(1)}&thinsp;%
                      </div>
                      <div style={{ fontFamily: bdy, fontSize: "0.72rem", color: "var(--ct3)" }}>
                        effektiv
                      </div>
                    </div>
                  </div>

                  <div style={{ marginTop: "1rem", fontFamily: bdy, fontSize: "0.78rem", color: "var(--ct3)", lineHeight: 1.55 }}>
                    Sie behalten: <strong style={{ color: "var(--ct1)", fontWeight: 700 }}>{(b.summe - honorar).toLocaleString("de-DE")}&thinsp;&euro;</strong>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ━━━ SECTION 3: MARKTVERGLEICH ━━━ */}
      <section style={{ background: "var(--navy)", padding: "5rem 8vw" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div
            style={{
              fontFamily: mono,
              fontSize: "0.62rem",
              letterSpacing: "0.18em",
              color: "var(--verde-bright)",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
            }}
          >
            MARKTVERGLEICH
          </div>
          <h2
            style={{
              fontFamily: hdng,
              fontSize: "clamp(1.3rem, 3vw, 2rem)",
              fontWeight: 800,
              color: "white",
              marginBottom: "2.5rem",
            }}
          >
            F&ouml;rderberatung vs. Eigenregie &mdash; ein ehrlicher Vergleich
          </h2>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: bdy, fontSize: "0.85rem" }}>
              <thead>
                <tr>
                  {["", "VO Sustain", "Typischer Berater", "Selbst beantragen"].map((h, i) => (
                    <th
                      key={i}
                      style={{
                        padding: "0.85rem 1rem",
                        textAlign: "left",
                        color: i === 1 ? "var(--verde-bright)" : i === 0 ? "var(--ct3)" : "var(--ct2)",
                        fontFamily: hdng,
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        borderBottom: "2px solid rgba(255,255,255,0.1)",
                        whiteSpace: "nowrap",
                        background: i === 1 ? "rgba(39,174,96,0.06)" : "transparent",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Kosten", "3,5\u201310\u2009% (Staffel)", "10\u201315\u2009% pauschal", "0\u2009\u20ac (nur Ihre Zeit)"],
                  ["F\u00e4lligkeit", "Bei Auszahlung", "Bei Bewilligung / vorab", "\u2014"],
                  ["Preistransparenz", "Vollst\u00e4ndig", "Selten (2 von 12)", "\u2014"],
                  ["Erfolgsrisiko", "Beim Berater", "Oft beim Kunden", "Beim Kunden"],
                  ["Erfolgsquote", "> 85\u2009%", "70\u201385\u2009%", "30\u201350\u2009%"],
                  ["Zeitaufwand (Sie)", "2\u20133 Stunden", "5\u201310 Stunden", "80\u2013150 Stunden"],
                  ["Cleantech-Expertise", "Kernkompetenz", "Generalist", "Eigenrecherche"],
                  ["Konzept-Qualit\u00e4t", "Fertig vor Erstgespr\u00e4ch", "Nach Beauftragung", "Learning by Doing"],
                ].map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        style={{
                          padding: "0.7rem 1rem",
                          color: j === 0 ? "var(--ct3)" : j === 1 ? "var(--ct1)" : "var(--ct2)",
                          borderBottom: "1px solid rgba(255,255,255,0.06)",
                          fontWeight: j === 0 ? 600 : 400,
                          fontSize: j === 0 ? "0.78rem" : "0.85rem",
                          fontFamily: j === 0 ? mono : bdy,
                          background: j === 1 ? "rgba(39,174,96,0.03)" : "transparent",
                        }}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p
            style={{
              fontFamily: mono,
              fontSize: "0.65rem",
              color: "var(--ct4)",
              marginTop: "1.5rem",
              lineHeight: 1.6,
              letterSpacing: "0.03em",
            }}
          >
            Quelle: Eigene Marktanalyse, 12 F&ouml;rderberater in Deutschland (03/2026). Erfolgsquoten sind Richtwerte.
          </p>
        </div>
      </section>

      {/* ━━━ SECTION 4: FAQ ━━━ */}
      <section style={{ background: "var(--navy-dark)", padding: "5rem 8vw" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div
            style={{
              fontFamily: mono,
              fontSize: "0.62rem",
              letterSpacing: "0.18em",
              color: "var(--verde-bright)",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
            }}
          >
            H&Auml;UFIGE FRAGEN ZU KOSTEN
          </div>
          <h2
            style={{
              fontFamily: hdng,
              fontSize: "clamp(1.3rem, 3vw, 2rem)",
              fontWeight: 800,
              color: "white",
              marginBottom: "2.5rem",
            }}
          >
            Alles klar &mdash; bevor Sie fragen
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  style={{
                    border: "1px solid",
                    borderRadius: "10px",
                    overflow: "hidden",
                    transition: "border-color 0.3s",
                    borderColor: isOpen ? "rgba(39,174,96,0.25)" : "rgba(255,255,255,0.08)",
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    style={{
                      width: "100%",
                      padding: "1.2rem 1.5rem",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: hdng,
                        fontSize: "0.92rem",
                        fontWeight: 700,
                        color: isOpen ? "var(--verde-bright)" : "var(--ct1)",
                        textAlign: "left",
                      }}
                    >
                      {item.q}
                    </span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={isOpen ? "var(--verde-bright)" : "var(--ct3)"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        flexShrink: 0,
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                      }}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  <div
                    style={{
                      maxHeight: isOpen ? "300px" : "0",
                      overflow: "hidden",
                      transition: "max-height 0.35s ease",
                    }}
                  >
                    <div
                      style={{
                        padding: "0 1.5rem 1.2rem",
                        fontFamily: bdy,
                        fontSize: "0.88rem",
                        color: "var(--ct2)",
                        lineHeight: 1.7,
                      }}
                    >
                      {item.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ━━━ CTA ━━━ */}
      <section
        style={{
          background: "linear-gradient(135deg, rgba(39,174,96,0.12) 0%, var(--navy) 50%, rgba(39,174,96,0.06) 100%)",
          padding: "5rem 8vw",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: hdng,
              fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
              fontWeight: 900,
              color: "white",
              marginBottom: "1rem",
            }}
          >
            F&ouml;rderpotenzial pr&uuml;fen &mdash; kostenlos.
          </h2>
          <p
            style={{
              fontFamily: bdy,
              fontSize: "1rem",
              color: "var(--ct2)",
              lineHeight: 1.7,
              marginBottom: "2rem",
            }}
          >
            In 2 Minuten erfahren Sie, welche Programme f&uuml;r Ihr Vorhaben in Frage kommen.
            Unverbindlich und ohne versteckte Kosten.
          </p>
          <a
            href="/#quickcheck"
            style={{
              display: "inline-block",
              padding: "1rem 2.5rem",
              background: "var(--verde-bright)",
              color: "var(--navy-dark)",
              fontFamily: hdng,
              fontSize: "0.92rem",
              fontWeight: 800,
              borderRadius: "8px",
              textDecoration: "none",
              transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow: "0 4px 20px rgba(39,174,96,0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 6px 28px rgba(39,174,96,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(39,174,96,0.3)";
            }}
          >
            Mein F&ouml;rderpotenzial entdecken &rarr;
          </a>
        </div>
      </section>
    </>
  );
}
