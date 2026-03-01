"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

const ICONS = ["⊛", "◌", "△"];

export default function ProblemSection() {
  const { t } = useLanguage();

  return (
    <section
      id="problem"
      style={{ background: "var(--off-white)", padding: "6rem 8vw" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Label */}
        <div style={{ marginBottom: "1.5rem" }}>
          <span style={{
            fontFamily: "'Roboto Mono', monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.18em",
            color: "var(--verde-dark)",
            textTransform: "uppercase",
          }}>
            {t.problem.label}
          </span>
        </div>

        {/* Headline */}
        <h2 style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 900,
          color: "var(--navy)",
          lineHeight: 1.05,
          marginBottom: "1.25rem",
          maxWidth: "700px",
        }}>
          {t.problem.headline}
        </h2>
        <p style={{
          fontFamily: "'Open Sans', sans-serif",
          fontSize: "1.05rem",
          color: "#555",
          lineHeight: 1.7,
          maxWidth: "580px",
          marginBottom: "4rem",
        }}>
          {t.problem.body}
        </p>

        {/* Problem cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {t.problem.cards.map((p, i) => (
            <div
              key={i}
              style={{
                background: "white",
                borderRadius: "var(--radius)",
                padding: "2rem",
                boxShadow: "var(--shadow-sm)",
                border: "1px solid var(--border)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-md)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-sm)"; }}
            >
              <div style={{ fontSize: "1.4rem", color: "var(--verde)", marginBottom: "1rem" }}>{ICONS[i]}</div>
              <h3 style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.95rem",
                fontWeight: 800,
                color: "var(--navy)",
                marginBottom: "0.75rem",
                letterSpacing: "0.04em",
              }}>
                {p.title}
              </h3>
              <p style={{ fontSize: "0.875rem", color: "#666", lineHeight: 1.65 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
