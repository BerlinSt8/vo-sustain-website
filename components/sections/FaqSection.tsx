"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function FaqSection() {
  const { t } = useLanguage();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      style={{ background: "var(--off-white)", padding: "6rem 8vw" }}
    >
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        {/* Label */}
        <p style={{
          fontFamily: "'Roboto Mono', monospace",
          fontSize: "0.7rem",
          letterSpacing: "0.2em",
          color: "var(--verde)",
          textTransform: "uppercase",
          marginBottom: "1rem",
        }}>
          {t.faq.label}
        </p>

        {/* Headline */}
        <h2 style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "clamp(2rem, 5vw, 3.2rem)",
          fontWeight: 900,
          color: "var(--navy-dark)",
          lineHeight: 1.0,
          letterSpacing: "-0.02em",
          marginBottom: "3rem",
        }}>
          {t.faq.headline}
        </h2>

        {/* FAQ Items */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {t.faq.items.map((item, i) => (
            <div
              key={i}
              style={{
                borderTop: i === 0 ? "1px solid rgba(11,22,34,0.12)" : "none",
                borderBottom: "1px solid rgba(11,22,34,0.12)",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "1.4rem 0",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  gap: "1rem",
                }}
              >
                <span style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
                  fontWeight: 700,
                  color: "var(--navy-dark)",
                  lineHeight: 1.3,
                }}>
                  {item.q}
                </span>
                <span style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: "1.2rem",
                  color: "var(--verde)",
                  flexShrink: 0,
                  transition: "transform 0.2s",
                  transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                }}>
                  +
                </span>
              </button>

              {open === i && (
                <p style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "clamp(0.9rem, 1.6vw, 1rem)",
                  color: "var(--navy-dark)",
                  lineHeight: 1.75,
                  paddingBottom: "1.4rem",
                  opacity: 0.75,
                  maxWidth: "720px",
                }}>
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
