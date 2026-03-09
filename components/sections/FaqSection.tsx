"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

function FaqItem({ item, isOpen, onToggle, index }: {
  item: { q: string; a: string };
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  const updateHeight = useCallback(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [updateHeight]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      style={{
        borderBottom: "1px solid rgba(11,22,34,0.08)",
      }}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.5rem 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          gap: "1.5rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", flex: 1 }}>
          {/* Verde accent line */}
          <div style={{
            width: "3px",
            height: "20px",
            borderRadius: "2px",
            background: isOpen ? "var(--verde)" : "rgba(39,174,96,0.2)",
            transition: "background 0.3s, height 0.3s",
            flexShrink: 0,
          }} />
          <span style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)",
            fontWeight: isOpen ? 800 : 700,
            color: isOpen ? "var(--navy-dark)" : "var(--navy)",
            lineHeight: 1.35,
            transition: "color 0.2s",
          }}>
            {item.q}
          </span>
        </div>
        {/* Animated chevron */}
        <div style={{
          width: "28px",
          height: "28px",
          borderRadius: "50%",
          background: isOpen ? "rgba(39,174,96,0.08)" : "rgba(11,22,34,0.04)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          transition: "background 0.25s, transform 0.3s",
          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={isOpen ? "var(--verde)" : "var(--ct3)"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </button>

      {/* Animated content */}
      <div style={{
        height: isOpen ? height : 0,
        overflow: "hidden",
        transition: "height 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
      }}>
        <div ref={contentRef}>
          <p style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "clamp(0.9rem, 1.6vw, 0.97rem)",
            color: "var(--ct4)",
            lineHeight: 1.8,
            paddingBottom: "1.5rem",
            paddingLeft: "calc(3px + 1rem)",
            maxWidth: "680px",
          }}>
            {item.a}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

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
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          style={{
            fontFamily: "'Roboto Mono', monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.18em",
            color: "var(--verde-dark)",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          {t.faq.label}
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: 900,
            color: "var(--navy-dark)",
            lineHeight: 1.0,
            letterSpacing: "-0.02em",
            marginBottom: "3rem",
          }}
        >
          {t.faq.headline}
        </motion.h2>

        {/* FAQ Items */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          borderTop: "1px solid rgba(11,22,34,0.08)",
        }}>
          {t.faq.items.map((item, i) => (
            <FaqItem
              key={i}
              item={item}
              index={i}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
