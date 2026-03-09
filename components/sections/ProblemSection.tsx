"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const ICONS = [
  /* Shield with crack */
  <svg key="shield" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M12 8v4M12 16h.01" />
  </svg>,
  /* Maze / Chaos */
  <svg key="maze" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3h18v18H3z" />
    <path d="M3 9h12v6H9V9" />
    <path d="M15 15h6" />
    <path d="M15 9V3" />
  </svg>,
  /* Clock / Resource drain */
  <svg key="clock" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
    <path d="M4.93 4.93l2.83 2.83" />
  </svg>,
];

export default function ProblemSection() {
  const { t } = useLanguage();

  return (
    <section
      id="problem"
      style={{
        background: "var(--navy)",
        padding: "6rem 8vw",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle gradient accent */}
      <div style={{
        position: "absolute",
        top: "-20%",
        right: "-10%",
        width: "50%",
        height: "80%",
        background: "radial-gradient(ellipse at center, rgba(231,76,60,0.04) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "1.5rem" }}
        >
          <span style={{
            fontFamily: "'Roboto Mono', monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.18em",
            color: "rgba(231,76,60,0.7)",
            textTransform: "uppercase",
          }}>
            {t.problem.label}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 900,
            color: "white",
            lineHeight: 1.05,
            marginBottom: "1.25rem",
            maxWidth: "700px",
          }}
        >
          {t.problem.headline}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "1.05rem",
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.7,
            maxWidth: "580px",
            marginBottom: "4rem",
          }}
        >
          {t.problem.body}
        </motion.p>

        {/* Problem cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
          {t.problem.cards.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              style={{
                background: "rgba(255,255,255,0.03)",
                borderRadius: "var(--radius)",
                padding: "2rem",
                border: "1px solid rgba(255,255,255,0.06)",
                transition: "background 0.25s, border-color 0.25s, transform 0.25s",
                cursor: "default",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = "rgba(231,76,60,0.04)";
                el.style.borderColor = "rgba(231,76,60,0.15)";
                el.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = "rgba(255,255,255,0.03)";
                el.style.borderColor = "rgba(255,255,255,0.06)";
                el.style.transform = "translateY(0)";
              }}
            >
              {/* Number + Icon row */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                <span style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.1em",
                  color: "rgba(231,76,60,0.5)",
                }}>
                  0{i + 1}
                </span>
                <div style={{ color: "rgba(231,76,60,0.6)" }}>
                  {ICONS[i]}
                </div>
              </div>

              <h3 style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "1rem",
                fontWeight: 800,
                color: "white",
                marginBottom: "0.75rem",
                letterSpacing: "0.02em",
              }}>
                {p.title}
              </h3>
              <p style={{
                fontSize: "0.875rem",
                fontFamily: "'Open Sans', sans-serif",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.7,
              }}>
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
