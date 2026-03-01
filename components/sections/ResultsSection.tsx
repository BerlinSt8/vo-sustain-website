"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const outcomes = [
  {
    icon: "◈",
    title: "Sicherheit",
    desc: "Klarheit über jeden Schritt – von der Antragstellung bis zum Audit. Keine bösen Überraschungen.",
  },
  {
    icon: "↑",
    title: "Wirkung",
    desc: "Messbar verbesserte Nachhaltigkeits-KPIs. THG-Reduktion, Energieeffizienz, CSRD-Compliance.",
  },
  {
    icon: "◎",
    title: "Investitionskraft",
    desc: "Finanzierungsspielräume schaffen durch smarte Förderung – mehr Kapital für das Kerngeschäft.",
  },
];

// Neue Kunden einfach hier ergänzen
const CUSTOMERS = [
  {
    nr: "01",
    company: "Kelorina",
    result: "200.000 €",
    type: "Fördermittel gesichert",
    program: "Energie & Klimaschutz",
    desc: "Vollständige Förderantragstellung und erfolgreiche Bewilligung im Bereich erneuerbare Energien – von der ersten Programmprüfung bis zur Bewilligungsmitteilung.",
    tags: ["Erneuerbare Energien", "Förderantrag", "Bewilligung"],
    accent: "#27AE60",
  },
  {
    nr: "02",
    company: "Green Island",
    result: "300.000 €",
    type: "Energieforschung",
    program: "F&E-Förderung",
    desc: "Förderstrategie, Programmauswahl und vollständige Antragsstellung im Bereich Energieforschung und Prozesseffizienz.",
    tags: ["F&E", "Energieeffizienz", "Förderantrag"],
    accent: "#2ECC71",
  },
  {
    nr: "03",
    company: "Kiyora",
    result: "CSRD-Compliance",
    type: "Nachhaltigkeitsberatung",
    program: "CSRD / VSME",
    desc: "ESG-Reporting-Strategie und CSRD-Implementierungsplan nach VSME-Standard – prüfbereit und zukunftssicher.",
    tags: ["CSRD", "VSME", "ESG", "Reporting"],
    accent: "#1E8449",
  },
];

function StackCard({
  customer,
  index,
  total,
}: {
  customer: (typeof CUSTOMERS)[0];
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isLast = index === total - 1;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Letzte Karte skaliert nicht – bleibt immer voll sichtbar
  const scale = useTransform(
    scrollYProgress,
    [0.15, 0.85],
    isLast ? [1, 1] : [1, 0.93]
  );
  const dimOpacity = useTransform(
    scrollYProgress,
    [0.15, 0.85],
    isLast ? [0, 0] : [0, 0.45]
  );

  return (
    <div
      ref={ref}
      style={{
        position: "sticky",
        top: "56px",
        height: isMobile ? "auto" : "100vh",
        minHeight: isMobile ? "auto" : undefined,
        paddingBottom: "2rem",
        zIndex: index + 1,
      }}
    >
      <motion.div
        style={{
          scale,
          transformOrigin: "top center",
          height: isMobile ? "auto" : "calc(100% - 2rem)",
          position: "relative",
          borderRadius: "12px",
          overflow: "hidden",
          background: "var(--navy)",
          border: "1px solid rgba(255,255,255,0.07)",
          boxShadow: "0 24px 60px rgba(0,0,0,0.4)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: isMobile ? "2rem 1.5rem" : "4rem 8vw",
        }}
      >
        {/* Subtle accent glow */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "40%",
            height: "100%",
            background: `radial-gradient(ellipse 80% 60% at 100% 50%, ${customer.accent}18 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
        />

        {/* Card content */}
        <div style={{
          maxWidth: "1100px",
          margin: "0 auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? "1.5rem" : "4rem",
          alignItems: "center",
        }}>
          {/* Mobile: Result first (big number at top, stacked) */}
          {isMobile && (
            <div style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", paddingBottom: "1.25rem" }}>
              <div style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: "0.55rem",
                color: "rgba(255,255,255,0.45)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "0.4rem",
              }}>
                {customer.type}
              </div>
              <div style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "clamp(2rem, 9vw, 2.8rem)",
                fontWeight: 900,
                color: customer.accent,
                lineHeight: 1,
                letterSpacing: "-0.02em",
                whiteSpace: "nowrap",
              }}>
                {customer.result}
              </div>
            </div>
          )}

          {/* Left */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: isMobile ? "1rem" : "2rem" }}>
              <span style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.18em",
                color: customer.accent,
                textTransform: "uppercase",
              }}>
                {customer.nr}
              </span>
              <div style={{ height: "1px", flex: 1, background: "rgba(255,255,255,0.08)" }} />
              <span style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: "0.62rem",
                color: "rgba(255,255,255,0.62)",
                letterSpacing: "0.1em",
              }}>
                {customer.program}
              </span>
            </div>

            <h3 style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: isMobile ? "1.6rem" : "clamp(1.6rem, 3vw, 2.4rem)",
              fontWeight: 900,
              color: "white",
              lineHeight: 1.1,
              marginBottom: "1rem",
            }}>
              {customer.company}
            </h3>

            <p style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: isMobile ? "0.9rem" : "1rem",
              color: "rgba(255,255,255,0.78)",
              lineHeight: 1.75,
              marginBottom: "1.25rem",
              maxWidth: "420px",
            }}>
              {customer.desc}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {customer.tags.map((tag) => (
                <span key={tag} style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: "0.62rem",
                  color: "rgba(255,255,255,0.65)",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  padding: "4px 10px",
                  borderRadius: "2px",
                  letterSpacing: "0.06em",
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right – Result (desktop only) */}
          {!isMobile && (
            <div style={{ textAlign: "right" }}>
              <div style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: "0.62rem",
                color: "rgba(255,255,255,0.62)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}>
                {customer.type}
              </div>
              <div style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                fontWeight: 900,
                color: customer.accent,
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}>
                {customer.result}
              </div>
            </div>
          )}
        </div>

        {/* Dimming overlay when next card comes in */}
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,1)",
            opacity: dimOpacity,
            pointerEvents: "none",
            borderRadius: "12px",
          }}
        />
      </motion.div>
    </div>
  );
}

export default function ResultsSection() {
  return (
    <section style={{ background: "var(--off-white)" }}>
      {/* Outcome pillars – off-white bg */}
      <div style={{ padding: "6rem 8vw 5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "1.5rem" }}>
            <span style={{
              fontFamily: "'Roboto Mono', monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.18em",
              color: "var(--verde-dark)",
              textTransform: "uppercase",
            }}>
              Nachgewiesene Ergebnisse
            </span>
          </div>

          <h2 style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 900,
            color: "var(--navy)",
            lineHeight: 1.05,
            marginBottom: "1.25rem",
            maxWidth: "700px",
          }}>
            Was unsere Kunden gewinnen.
          </h2>
          <p style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "1.05rem",
            color: "#555",
            lineHeight: 1.7,
            maxWidth: "520px",
            marginBottom: "4rem",
          }}>
            Kein Versprechen ohne Beweis.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {outcomes.map((o, i) => (
              <div key={i} style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                <div style={{
                  width: "40px", height: "40px", minWidth: "40px",
                  background: "rgba(39,174,96,0.1)",
                  border: "1px solid rgba(39,174,96,0.25)",
                  borderRadius: "var(--radius)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1rem", color: "var(--verde-dark)",
                }}>
                  {o.icon}
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.95rem", fontWeight: 800, color: "var(--navy)", marginBottom: "0.5rem" }}>
                    {o.title}
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "#666", lineHeight: 1.6 }}>{o.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stack Cards – navy bg */}
      <div style={{ background: "var(--navy-dark)", padding: "2rem 4vw 0" }}>
        <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
          {/* Label */}
          <div style={{ padding: "2rem 4vw 1.5rem", display: "flex", alignItems: "center", gap: "1rem" }}>
            <span style={{
              fontFamily: "'Roboto Mono', monospace",
              fontSize: "0.62rem",
              letterSpacing: "0.18em",
              color: "rgba(255,255,255,0.55)",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}>
              Referenzen
            </span>
            <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
            <span style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.8rem",
              fontWeight: 800,
              color: "var(--verde-bright)",
            }}>
              {CUSTOMERS.length}
            </span>
          </div>

          {/* Stack */}
          {CUSTOMERS.map((customer, i) => (
            <StackCard
              key={customer.company}
              customer={customer}
              index={i}
              total={CUSTOMERS.length}
            />
          ))}

          {/* Spacer so last card scrolls fully into view */}
          <div style={{ height: "2rem" }} />
        </div>
      </div>
    </section>
  );
}
