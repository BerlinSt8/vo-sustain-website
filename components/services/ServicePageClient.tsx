"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

/* ─── Types ─── */
interface ScopeItem {
  title: string;
  desc: string;
}
interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}
interface Fact {
  value: string;
  label: string;
}

interface RelatedLink {
  href: string;
  title: string;
}

interface ServicePageClientProps {
  heroLabel: string;
  heroHeadline: string;
  heroSub: string;
  heroBody: string;
  scope: readonly ScopeItem[];
  process: readonly ProcessStep[];
  facts: readonly Fact[];
  tags: readonly string[];
  /** Extra section between facts and CTA */
  extraSection?: React.ReactNode;
  /** Cross-links to related service pages */
  relatedLinks?: readonly RelatedLink[];
}

/* ─── Shared icon set (inline SVGs) ─── */
const SCOPE_ICONS = [
  // Search / Analysis
  <svg key="0" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  // Match / Target
  <svg key="1" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
  // Document / Application
  <svg key="2" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
  // Shield / Support
  <svg key="3" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
];

export default function ServicePageClient({
  heroLabel,
  heroHeadline,
  heroSub,
  heroBody,
  scope,
  process: processList,
  facts,
  tags,
  extraSection,
  relatedLinks,
}: ServicePageClientProps) {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const overlayOp = useTransform(scrollYProgress, [0, 0.6], [0.55, 0.92]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

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
        {/* Background gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 80% 60% at 30% 40%, rgba(39,174,96,0.08) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 80% 70%, rgba(13,27,42,0.5) 0%, transparent 70%)",
          }}
        />
        <motion.div style={{ position: "absolute", inset: 0, background: "var(--navy-dark)", opacity: overlayOp }} />

        {/* Grid pattern overlay */}
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
          {/* Back link */}
          <a
            href="/"
            style={{
              fontFamily: "'Roboto Mono', monospace",
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
            {t.services.backToHome}
          </a>

          {/* Label */}
          <div style={{ marginBottom: "1.5rem" }}>
            <span
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                color: "var(--verde-bright)",
                textTransform: "uppercase",
                background: "rgba(39,174,96,0.1)",
                border: "1px solid rgba(39,174,96,0.25)",
                padding: "4px 14px",
                borderRadius: "2px",
              }}
            >
              {heroLabel}
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              fontWeight: 900,
              color: "var(--ct1)",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
              maxWidth: "800px",
            }}
          >
            {heroHeadline}
          </h1>

          {/* Subheadline */}
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(1.05rem, 2.2vw, 1.4rem)",
              fontWeight: 700,
              color: "var(--ct2)",
              lineHeight: 1.3,
              marginBottom: "1rem",
              maxWidth: "640px",
            }}
          >
            {heroSub}
          </p>

          <p
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)",
              color: "var(--ct3)",
              lineHeight: 1.7,
              marginBottom: "2.5rem",
              maxWidth: "560px",
            }}
          >
            {heroBody}
          </p>

          {/* Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: "0.65rem",
                  color: "var(--ct3)",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  padding: "4px 10px",
                  borderRadius: "2px",
                  letterSpacing: "0.06em",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Verde accent line at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: "linear-gradient(90deg, transparent, var(--verde), transparent)",
          }}
        />
      </section>

      {/* ━━━ SCOPE ━━━ */}
      <section style={{ background: "var(--off-white)", padding: "6rem 8vw" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "1.5rem" }}>
            <span
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.18em",
                color: "var(--verde-dark)",
                textTransform: "uppercase",
              }}
            >
              {t.services.scopeLabel}
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 900,
              color: "var(--navy)",
              lineHeight: 1.1,
              marginBottom: "3.5rem",
            }}
          >
            {t.services.scopeHeadline}
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "2rem",
            }}
          >
            {scope.map((item, i) => (
              <div
                key={i}
                style={{
                  background: "white",
                  border: "1px solid var(--grey-light)",
                  borderRadius: "var(--radius)",
                  padding: "2rem",
                  transition: "transform 0.2s, box-shadow 0.2s, border-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(-4px)";
                  el.style.boxShadow = "var(--shadow-lg)";
                  el.style.borderColor = "var(--verde)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                  el.style.borderColor = "var(--grey-light)";
                }}
              >
                <div style={{ color: "var(--verde)", marginBottom: "1.25rem" }}>
                  {SCOPE_ICONS[i % SCOPE_ICONS.length]}
                </div>
                <h3
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "1.05rem",
                    fontWeight: 800,
                    color: "var(--navy)",
                    marginBottom: "0.75rem",
                    lineHeight: 1.25,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "0.875rem",
                    color: "var(--text-body)",
                    lineHeight: 1.7,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ PROCESS ━━━ */}
      <section style={{ background: "var(--navy)", padding: "6rem 8vw" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "1.5rem" }}>
            <span
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.18em",
                color: "var(--verde-bright)",
                textTransform: "uppercase",
              }}
            >
              {t.services.processLabel}
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 900,
              color: "var(--ct1)",
              lineHeight: 1.1,
              marginBottom: "3.5rem",
            }}
          >
            {t.services.processHeadline}
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "0" }}>
            {processList.map((item, i) => (
              <div
                key={i}
                style={{
                  position: "relative",
                  padding: "2rem",
                }}
              >
                {/* Connector line — hidden below 640px via class */}
                {i < processList.length - 1 && (
                  <div
                    className="process-connector"
                    style={{
                      position: "absolute",
                      top: "2.8rem",
                      right: "-1rem",
                      width: "2rem",
                      height: "1px",
                      background: "rgba(39,174,96,0.3)",
                    }}
                  />
                )}

                {/* Step number */}
                <div
                  style={{
                    fontFamily: "'Roboto Mono', monospace",
                    fontSize: "0.7rem",
                    letterSpacing: "0.15em",
                    color: "var(--verde-bright)",
                    marginBottom: "1rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <span
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      border: "1.5px solid var(--verde)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.72rem",
                      fontWeight: 500,
                    }}
                  >
                    {item.step}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "1.05rem",
                    fontWeight: 800,
                    color: "var(--ct1)",
                    marginBottom: "0.75rem",
                    lineHeight: 1.25,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "0.875rem",
                    color: "var(--ct3)",
                    lineHeight: 1.7,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ FACTS ━━━ */}
      <section style={{ background: "var(--off-white)", padding: "5rem 8vw" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "1.5rem" }}>
            <span
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.18em",
                color: "var(--verde-dark)",
                textTransform: "uppercase",
              }}
            >
              {t.services.factsLabel}
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 900,
              color: "var(--navy)",
              lineHeight: 1.1,
              marginBottom: "3.5rem",
            }}
          >
            {t.services.factsHeadline}
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "2rem",
            }}
          >
            {facts.map((fact, i) => (
              <div
                key={i}
                style={{
                  textAlign: "center",
                  padding: "2.5rem 1.5rem",
                  background: "white",
                  borderRadius: "var(--radius)",
                  border: "1px solid var(--grey-light)",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--verde)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--grey-light)")}
              >
                <div
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    fontWeight: 900,
                    color: "var(--verde)",
                    lineHeight: 1,
                    marginBottom: "0.5rem",
                  }}
                >
                  {fact.value}
                </div>
                <div
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "0.85rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.4,
                  }}
                >
                  {fact.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ EXTRA SECTION (optional) ━━━ */}
      {extraSection}

      {/* ━━━ RELATED LINKS (optional) ━━━ */}
      {relatedLinks && relatedLinks.length > 0 && (
        <section style={{ background: "var(--navy)", padding: "2.5rem 8vw", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <p style={{
              fontFamily: "'Roboto Mono', monospace",
              fontSize: "0.62rem",
              letterSpacing: "0.18em",
              color: "var(--verde-bright)",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
            }}>
              {t.services.relatedLabel}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              {relatedLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "var(--ct2)",
                    textDecoration: "none",
                    padding: "0.6rem 1.25rem",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "var(--radius)",
                    background: "rgba(255,255,255,0.03)",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--verde)";
                    e.currentTarget.style.color = "var(--verde-bright)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                    e.currentTarget.style.color = "var(--ct2)";
                  }}
                >
                  {link.title} →
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ━━━ CTA ━━━ */}
      <section style={{ background: "var(--navy-dark)", padding: "6rem 8vw" }}>
        <div
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 900,
              color: "var(--ct1)",
              lineHeight: 1.1,
              marginBottom: "1.25rem",
            }}
          >
            {t.services.ctaHeadline}
          </h2>
          <p
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "1.05rem",
              color: "var(--ct3)",
              lineHeight: 1.7,
              marginBottom: "2.5rem",
            }}
          >
            {t.services.ctaBody}
          </p>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.25rem" }}>
            <a
              href="/#quick-check"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.95rem",
                fontWeight: 700,
                color: "white",
                background: "var(--verde)",
                textDecoration: "none",
                padding: "1rem 2.5rem",
                borderRadius: "var(--radius)",
                letterSpacing: "0.04em",
                transition: "background 0.2s, transform 0.2s",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--verde-dark)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--verde)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {t.services.ctaButton}
            </a>

            <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "0.85rem", color: "var(--ct3)" }}>
              {t.services.ctaEmail}{" "}
              <a
                href="mailto:denis@vosustain.de"
                style={{ color: "var(--verde-bright)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ct1)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--verde-bright)")}
              >
                denis@vosustain.de
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
