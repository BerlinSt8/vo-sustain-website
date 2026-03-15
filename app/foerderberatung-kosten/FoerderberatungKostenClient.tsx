"use client";

import { motion } from "framer-motion";
import FloatingOrbs from "@/components/ui/FloatingOrbs";

export default function FoerderberatungKostenClient() {
  return (
    <>
      {/* ━━━ HERO ━━━ */}
      <section style={{ position: "relative", minHeight: "55vh", display: "flex", alignItems: "center", background: "var(--navy-dark)", padding: "8rem 8vw 5rem", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <FloatingOrbs count={8} maxSize={3} minSize={1} />
        </div>
        <div style={{ maxWidth: "800px", position: "relative", zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.18em", color: "var(--verde-bright)", textTransform: "uppercase" }}>
              WAS KOSTET FÖRDERBERATUNG?
            </span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: "white", lineHeight: 1.05, margin: "1.25rem 0" }}>
            Transparentes Honorarmodell.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "1.05rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.65, maxWidth: "620px" }}>
            Kein Honorar ohne Bewilligung. Sie zahlen erst, wenn die Fördermittel auf Ihrem Konto eingehen. Unser Staffelmodell sinkt mit steigendem Fördervolumen.
          </motion.p>
          <p style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.6rem", color: "rgba(255,255,255,0.3)", marginTop: "1rem", letterSpacing: "0.06em" }}>
            Stand: März 2026
          </p>
        </div>
      </section>

      {/* ━━━ STAFFELPROVISION ━━━ */}
      <section style={{ background: "var(--navy)", padding: "5rem 8vw" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.18em", color: "var(--verde-bright)", textTransform: "uppercase", marginBottom: "1.25rem" }}>
            UNSER MODELL
          </div>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(1.3rem, 3vw, 1.8rem)", fontWeight: 800, color: "white", marginBottom: "2rem" }}>
            Erfolgshonorar mit Staffelprovision
          </h2>

          {/* Erstanalyse */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "2.5rem" }}>
            <div style={{ background: "rgba(39,174,96,0.06)", border: "1px solid rgba(39,174,96,0.2)", borderRadius: "var(--radius)", padding: "1.5rem" }}>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.8rem", fontWeight: 900, color: "var(--verde-bright)" }}>0 €</div>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.9rem", fontWeight: 700, color: "white", marginTop: "0.25rem" }}>Erstanalyse</div>
              <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "0.82rem", color: "rgba(255,255,255,0.55)", marginTop: "0.5rem", lineHeight: 1.5 }}>
                Kostenlose Potenzialanalyse — welche Programme passen zu Ihrem Vorhaben?
              </p>
            </div>
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "var(--radius)", padding: "1.5rem" }}>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.8rem", fontWeight: 900, color: "white" }}>Anrechenbar</div>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.9rem", fontWeight: 700, color: "white", marginTop: "0.25rem" }}>Analysepauschale</div>
              <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "0.82rem", color: "rgba(255,255,255,0.55)", marginTop: "0.5rem", lineHeight: 1.5 }}>
                Bei Beauftragung fällt eine Pauschale an, die auf das Erfolgshonorar angerechnet wird.
              </p>
            </div>
          </div>

          {/* Staffel */}
          <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.1rem", fontWeight: 700, color: "white", marginBottom: "1.25rem" }}>
            Staffelprovision — sinkt mit steigendem Volumen
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
            {[
              { rate: "10 %", range: "bis 100.000 €", color: "var(--verde-bright)" },
              { rate: "7 %", range: "100.001–300.000 €", color: "var(--verde)" },
              { rate: "5 %", range: "300.001–600.000 €", color: "var(--verde-dark)" },
              { rate: "3,5 %", range: "über 600.000 €", color: "rgba(39,174,96,0.6)" },
            ].map((tier) => (
              <div key={tier.rate} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "var(--radius)", padding: "1.25rem", textAlign: "center" }}>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.6rem", fontWeight: 900, color: tier.color }}>{tier.rate}</div>
                <div style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.65rem", color: "rgba(255,255,255,0.45)", marginTop: "0.5rem", letterSpacing: "0.04em" }}>{tier.range}</div>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "0.82rem", color: "rgba(255,255,255,0.45)", marginTop: "1.25rem", lineHeight: 1.5 }}>
            Fällig erst bei tatsächlicher Auszahlung der Fördermittel. Kein Honorar ohne Bewilligung.
          </p>
        </div>
      </section>

      {/* ━━━ RECHENBEISPIELE ━━━ */}
      <section style={{ background: "var(--navy-dark)", padding: "5rem 8vw" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.18em", color: "var(--verde-bright)", textTransform: "uppercase", marginBottom: "1.25rem" }}>
            RECHENBEISPIELE
          </div>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(1.3rem, 3vw, 1.8rem)", fontWeight: 800, color: "white", marginBottom: "2rem" }}>
            Was kostet Förderberatung konkret?
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
            {[
              { program: "BAFA EEW", amount: "120.000 €", fee: "12.000 €", rate: "10 %", saved: "108.000 €" },
              { program: "ZIM Einzelprojekt", amount: "250.000 €", fee: "20.500 €", rate: "10 % + 7 %", saved: "229.500 €" },
              { program: "ZIM Netzwerk", amount: "600.000 €", fee: "37.000 €", rate: "Staffel", saved: "563.000 €" },
            ].map((ex) => (
              <div key={ex.program} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "var(--radius)", padding: "1.5rem" }}>
                <div style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.62rem", color: "var(--verde-bright)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                  {ex.program}
                </div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.5rem", fontWeight: 900, color: "white" }}>{ex.amount}</div>
                <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.4)", marginTop: "0.25rem" }}>Fördersumme</div>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", margin: "1rem 0", paddingTop: "1rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                    <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "0.82rem", color: "rgba(255,255,255,0.55)" }}>Honorar ({ex.rate})</span>
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.9rem", fontWeight: 700, color: "white" }}>{ex.fee}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "0.82rem", color: "rgba(255,255,255,0.55)" }}>Sie behalten</span>
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.9rem", fontWeight: 700, color: "var(--verde-bright)" }}>{ex.saved}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ MARKTVERGLEICH ━━━ */}
      <section style={{ background: "var(--navy)", padding: "5rem 8vw" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.18em", color: "var(--verde-bright)", textTransform: "uppercase", marginBottom: "1.25rem" }}>
            MARKTVERGLEICH
          </div>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(1.3rem, 3vw, 1.8rem)", fontWeight: 800, color: "white", marginBottom: "2rem" }}>
            Wie liegt VO Sustain im Markt?
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'Open Sans', sans-serif", fontSize: "0.82rem" }}>
              <thead>
                <tr>
                  {["", "VO Sustain", "Typischer Berater", "Selbst beantragen"].map((h, i) => (
                    <th key={i} style={{ padding: "0.85rem 1rem", textAlign: "left", color: i === 1 ? "var(--verde-bright)" : i === 0 ? "var(--ct3)" : "var(--ct2)", fontFamily: "'Montserrat', sans-serif", fontSize: "0.78rem", fontWeight: 700, borderBottom: "2px solid rgba(255,255,255,0.1)" }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Honorarmodell", "Staffelprovision 3,5–10 %", "Pauschal oder 5–15 %", "Kein Honorar"],
                  ["Fällig", "Erst bei Auszahlung", "Bei Auftragserteilung", "—"],
                  ["Risiko für Sie", "Null (Erfolgshonorar)", "Vorab-Investition", "Ablehnungsrisiko"],
                  ["Spezialisierung", "Cleantech & Nachhaltigkeit", "Generalist", "Keine"],
                  ["Aufwand für Sie", "Minimal (schlüsselfertig)", "Zuarbeit nötig", "40–60 Stunden"],
                  ["Erfolgsquote", "Hoch (Expertenwissen)", "Variabel", "Unbekannt"],
                  ["KI-gestützt", "Ja (349 Programme)", "Nein", "Nein"],
                ].map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j} style={{ padding: "0.7rem 1rem", color: j === 0 ? "var(--ct3)" : j === 1 ? "var(--ct1)" : "rgba(255,255,255,0.5)", borderBottom: "1px solid rgba(255,255,255,0.06)", fontWeight: j === 0 ? 600 : 400, fontSize: j === 0 ? "0.75rem" : "0.82rem", fontFamily: j === 0 ? "'Roboto Mono', monospace" : "'Open Sans', sans-serif" }}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.6rem", color: "rgba(255,255,255,0.25)", marginTop: "1rem", letterSpacing: "0.04em" }}>
            Quelle: Eigene Marktanalyse, 12 Wettbewerber (März 2026)
          </p>
        </div>
      </section>

      {/* ━━━ FAQ ━━━ */}
      <section style={{ background: "var(--navy-dark)", padding: "5rem 8vw" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.18em", color: "var(--verde-bright)", textTransform: "uppercase", marginBottom: "1.25rem" }}>
            HÄUFIGE FRAGEN
          </div>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(1.3rem, 3vw, 1.8rem)", fontWeight: 800, color: "white", marginBottom: "2rem" }}>
            Fragen zu Kosten & Honorar
          </h2>
          {[
            { q: "Was kostet die Erstberatung?", a: "Die Erstanalyse ist kostenlos und unverbindlich. Wir prüfen Ihr Vorhaben gegen 349 Förderprogramme und zeigen Ihnen, welche Programme passen." },
            { q: "Wann zahle ich das Erfolgshonorar?", a: "Erst wenn die Fördermittel tatsächlich auf Ihrem Konto eingehen — nicht bei Antragstellung, nicht bei Bewilligung, sondern bei Auszahlung. Fälligkeit 30 Tage nach Auszahlung." },
            { q: "Was wenn der Antrag abgelehnt wird?", a: "Dann zahlen Sie kein Erfolgshonorar. Die Analysepauschale wird bei Beauftragung fällig und ist auf das Erfolgshonorar anrechenbar — Ihr finanzielles Risiko ist minimal." },
            { q: "Sind die Kosten steuerlich absetzbar?", a: "Ja, Beratungskosten sind als Betriebsausgabe voll absetzbar. Bei der Forschungszulage können Beratungskosten sogar in die förderfähige Bemessungsgrundlage einfließen." },
            { q: "Warum Staffelprovision statt Pauschale?", a: "Die Staffelprovision sorgt dafür, dass unser Honorar proportional zum Nutzen wächst — und bei höherem Fördervolumen prozentual sinkt. Sie zahlen nie mehr als nötig." },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: "1.5rem", paddingBottom: "1.5rem", borderBottom: i < 4 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
              <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "white", marginBottom: "0.5rem" }}>{item.q}</h3>
              <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.65 }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ━━━ CTA ━━━ */}
      <section style={{ background: "var(--navy)", padding: "5rem 8vw" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 800, color: "white", marginBottom: "1rem" }}>
            Jetzt kostenlos prüfen
          </h2>
          <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "0.95rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.6, marginBottom: "2rem" }}>
            In 3 Minuten wissen Sie, welche Förderprogramme zu Ihrem Vorhaben passen — und was Sie das kostet.
          </p>
          <a href="/#quick-check" style={{ display: "inline-block", padding: "0.9rem 2.5rem", background: "var(--verde)", color: "white", fontFamily: "'Montserrat', sans-serif", fontSize: "0.9rem", fontWeight: 700, letterSpacing: "0.04em", borderRadius: "var(--radius)", textDecoration: "none", boxShadow: "0 4px 20px rgba(39,174,96,0.25)" }}>
            Quick-Check starten →
          </a>
        </div>
      </section>
    </>
  );
}
