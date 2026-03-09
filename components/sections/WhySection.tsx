"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function WhySection() {
  const { t } = useLanguage();
  const w = t.why;

  return (
    <section
      id="warum-vo-sustain"
      style={{
        background: "#F8F9FA",
        padding: "6rem 8vw",
      }}
    >
      {/* Label */}
      <p style={{
        fontFamily: "'Roboto Mono', monospace",
        fontSize: "0.68rem",
        letterSpacing: "0.2em",
        color: "#27AE60",
        textTransform: "uppercase",
        marginBottom: "1.25rem",
      }}>
        {w.label}
      </p>

      {/* Headline */}
      <h2 style={{
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 900,
        fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
        color: "#0B1622",
        lineHeight: 1.05,
        letterSpacing: "-0.02em",
        marginBottom: "3.5rem",
        maxWidth: "600px",
      }}>
        {w.headline}<br />
        <span style={{ color: "#27AE60" }}>{w.headline2}</span>
      </h2>

      {/* USP Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "2rem",
      }}>
        {w.usps.map((usp) => (
          <div
            key={usp.number}
            style={{
              background: "#fff",
              borderRadius: "12px",
              border: "1px solid rgba(11,22,34,0.08)",
              padding: "2rem 2rem 1.75rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              boxShadow: "0 2px 12px rgba(11,22,34,0.05)",
              transition: "box-shadow 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 24px rgba(39,174,96,0.12)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(11,22,34,0.05)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            {/* Number */}
            <span style={{
              fontFamily: "'Roboto Mono', monospace",
              fontSize: "0.72rem",
              fontWeight: 600,
              color: "#27AE60",
              letterSpacing: "0.15em",
            }}>
              {usp.number}
            </span>

            {/* Title */}
            <h3 style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)",
              color: "#0B1622",
              lineHeight: 1.3,
              margin: 0,
            }}>
              {usp.title}
            </h3>

            {/* Body */}
            <p style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "0.9rem",
              color: "#5A6470",
              lineHeight: 1.65,
              margin: 0,
              flexGrow: 1,
            }}>
              {usp.body}
            </p>

            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "0.25rem" }}>
              {usp.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: "'Roboto Mono', monospace",
                    fontSize: "0.65rem",
                    letterSpacing: "0.08em",
                    color: "#27AE60",
                    background: "rgba(39,174,96,0.08)",
                    border: "1px solid rgba(39,174,96,0.2)",
                    padding: "3px 8px",
                    borderRadius: "3px",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
