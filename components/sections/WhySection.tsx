"use client";

import { motion } from "framer-motion";
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
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4 }}
        style={{
          fontFamily: "'Roboto Mono', monospace",
          fontSize: "0.65rem",
          letterSpacing: "0.18em",
          color: "var(--verde-dark)",
          textTransform: "uppercase",
          marginBottom: "1.25rem",
        }}
      >
        {w.label}
      </motion.p>

      {/* Headline */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 900,
          fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
          color: "#0B1622",
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
          marginBottom: "3.5rem",
          maxWidth: "600px",
        }}
      >
        {w.headline}<br />
        <span style={{ color: "#27AE60" }}>{w.headline2}</span>
      </motion.h2>

      {/* USP Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "1.5rem",
      }}>
        {w.usps.map((usp, i) => (
          <motion.div
            key={usp.number}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.12 * i }}
            style={{
              background: "#fff",
              borderRadius: "12px",
              border: "1px solid rgba(11,22,34,0.06)",
              borderBottom: "2px solid rgba(39,174,96,0.15)",
              padding: "2rem 2rem 1.75rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              transition: "box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1), transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.boxShadow = "0 8px 32px rgba(39,174,96,0.12), 0 0 0 1px rgba(39,174,96,0.08)";
              el.style.transform = "translateY(-4px)";
              el.style.borderBottomColor = "rgba(39,174,96,0.5)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.boxShadow = "none";
              el.style.transform = "translateY(0)";
              el.style.borderBottomColor = "rgba(39,174,96,0.15)";
            }}
          >
            {/* Number */}
            <span style={{
              fontFamily: "'Roboto Mono', monospace",
              fontSize: "0.68rem",
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
              lineHeight: 1.7,
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
                    fontSize: "0.62rem",
                    letterSpacing: "0.08em",
                    color: "#27AE60",
                    background: "rgba(39,174,96,0.06)",
                    border: "1px solid rgba(39,174,96,0.15)",
                    padding: "3px 8px",
                    borderRadius: "3px",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
