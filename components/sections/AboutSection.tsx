"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const programs = ["ZIM", "BAFA", "SAB", "TAB", "EFRE", "Horizon Europe", "LIFE", "BMWK"];

const SPARKLES = [
  { top: "6%",  left: "15%",  delay: "0.3s", dur: "3.2s", size: 4 },
  { top: "12%", left: "78%",  delay: "1.4s", dur: "2.8s", size: 5 },
  { top: "55%", left: "88%",  delay: "0.8s", dur: "3.0s", size: 3 },
  { top: "80%", left: "60%",  delay: "2.0s", dur: "2.6s", size: 4 },
  { top: "72%", left: "8%",   delay: "1.1s", dur: "3.4s", size: 3 },
];

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section
      id="ueber-uns"
      style={{ background: "var(--navy)", padding: "6rem 8vw" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Label + Crystal row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "3rem" }}>
          <span style={{
            fontFamily: "'Roboto Mono', monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.18em",
            color: "var(--verde-bright)",
            textTransform: "uppercase",
          }}>
            {t.about.label}
          </span>

          {/* Crystal top right */}
          <motion.div
            className="crystal-hero-wrap"
            style={{ width: "clamp(160px, 18vw, 240px)", position: "relative" }}
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5.5, ease: "easeInOut", repeat: Infinity }}
              style={{ position: "relative" }}
            >
              <div style={{
                position: "absolute", inset: "-20%",
                background: "radial-gradient(ellipse at center, rgba(39,174,96,0.1) 0%, transparent 65%)",
                pointerEvents: "none",
              }} />
              <div style={{ position: "relative", overflow: "hidden" }}>
                <img src="/vo-crystal.png" alt="VO Sustain" className="crystal-img" />
                <div className="crystal-shimmer" />
              </div>
              {SPARKLES.map((s, i) => (
                <div key={i} className="crystal-sparkle" style={{
                  top: s.top, left: s.left,
                  width: `${s.size}px`, height: `${s.size}px`,
                  animationDelay: s.delay, animationDuration: s.dur,
                }} />
              ))}
            </motion.div>
          </motion.div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "5rem", alignItems: "start" }}>
          {/* Foto */}
          <div>
            <div style={{
              borderRadius: "var(--radius)",
              overflow: "hidden",
              border: "1px solid rgba(39,174,96,0.2)",
              background: "rgba(255,255,255,0.04)",
              aspectRatio: "3/4",
              maxWidth: "300px",
            }}>
              <img
                src="/denis.png"
                alt={t.about.imgAlt}
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 900,
              color: "white",
              lineHeight: 1.05,
              marginBottom: "0.5rem",
            }}>
              {t.about.headline}
            </h2>
            <p style={{
              fontFamily: "'Roboto Mono', monospace",
              fontSize: "0.75rem",
              color: "var(--verde-bright)",
              letterSpacing: "0.1em",
              marginBottom: "2rem",
            }}>
              {t.about.subtitle}
            </p>

            {/* Quote */}
            <blockquote style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "1.1rem",
              fontWeight: 600,
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.55,
              borderLeft: "3px solid var(--verde)",
              paddingLeft: "1.5rem",
              marginBottom: "2.5rem",
              fontStyle: "italic",
            }}>
              „{t.about.quote}"
            </blockquote>

            {/* Metrics */}
            <div style={{ display: "flex", gap: "2.5rem", marginBottom: "2.5rem", flexWrap: "wrap" }}>
              {t.about.credentials.map((c, i) => (
                <div key={i}>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.6rem", fontWeight: 900, color: "var(--verde-bright)", lineHeight: 1 }}>
                    {c.label}
                  </div>
                  <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "0.8rem", color: "rgba(255,255,255,0.65)", marginTop: "4px" }}>
                    {c.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* Bio */}
            <p style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "0.9rem",
              color: "rgba(255,255,255,0.78)",
              lineHeight: 1.75,
              marginBottom: "2rem",
              maxWidth: "560px",
            }}>
              {t.about.bio}
            </p>

            {/* Program tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {programs.map((p) => (
                <span key={p} style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: "0.68rem",
                  color: "rgba(255,255,255,0.68)",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  padding: "4px 10px",
                  borderRadius: "2px",
                  letterSpacing: "0.06em",
                }}>
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
