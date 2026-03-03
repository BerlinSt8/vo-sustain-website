"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const SPARKLES = [
  { top: "8%",  left: "18%",  delay: "0s",   dur: "3.0s", size: 5 },
  { top: "4%",  left: "62%",  delay: "1.2s", dur: "2.8s", size: 4 },
  { top: "22%", left: "91%",  delay: "0.5s", dur: "3.3s", size: 6 },
  { top: "62%", left: "93%",  delay: "1.9s", dur: "2.6s", size: 4 },
  { top: "88%", left: "68%",  delay: "0.8s", dur: "3.1s", size: 5 },
  { top: "90%", left: "22%",  delay: "2.3s", dur: "2.9s", size: 4 },
  { top: "68%", left: "4%",   delay: "1.5s", dur: "3.4s", size: 5 },
  { top: "38%", left: "96%",  delay: "1.0s", dur: "2.7s", size: 3 },
];

export default function SolutionSection() {
  const { t } = useLanguage();

  return (
    <section
      id="leistungen"
      style={{ background: "var(--navy)", padding: "6rem 8vw" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Top row: Text left, Crystal right */}
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: "3rem", marginBottom: "4rem" }}>

          {/* Left: label + headline + body */}
          <div style={{ flex: "1" }}>
            <div style={{ marginBottom: "1.5rem" }}>
              <span style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.18em",
                color: "var(--verde-bright)",
                textTransform: "uppercase",
              }}>
                {t.solution.label}
              </span>
            </div>
            <h2 style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 900,
              color: "white",
              lineHeight: 1.05,
              marginBottom: "1.25rem",
              maxWidth: "700px",
            }}>
              {t.solution.headline1}<br />{t.solution.headline2}
            </h2>
            <p style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.78)",
              lineHeight: 1.7,
              maxWidth: "520px",
            }}>
              {t.solution.body}
            </p>
          </div>

          {/* Right: Crystal logo */}
          <motion.div
            className="crystal-hero-wrap"
            style={{ flex: "0 0 auto", width: "clamp(220px, 25vw, 360px)", position: "relative" }}
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
              style={{ position: "relative" }}
            >
              {/* Ambient verde glow */}
              <div style={{
                position: "absolute", inset: "-20%",
                background: "radial-gradient(ellipse at center, rgba(39,174,96,0.1) 0%, transparent 65%)",
                pointerEvents: "none",
              }} />
              {/* Image + shimmer */}
              <div style={{ position: "relative", overflow: "hidden" }}>
                <img src="/vo-crystal.png" alt="VO Sustain" className="crystal-img" />
                <div className="crystal-shimmer" />
              </div>
              {/* Sparkles */}
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

        {/* Channel cards — full width */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {t.solution.channels.map((c, i) => {
            const links = ["/foerderberatung", "/csrd-beratung", "/zim-foerderung"];
            return (
              <a
                key={i}
                href={links[i] || "#"}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "var(--radius)",
                  padding: "2rem",
                  transition: "background 0.2s, border-color 0.2s, transform 0.2s",
                  textDecoration: "none",
                  display: "block",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "rgba(39,174,96,0.07)";
                  el.style.borderColor = "rgba(39,174,96,0.3)";
                  el.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "rgba(255,255,255,0.04)";
                  el.style.borderColor = "rgba(255,255,255,0.08)";
                  el.style.transform = "translateY(0)";
                }}
              >
                <div style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.65rem", color: "var(--verde-bright)", letterSpacing: "0.15em", marginBottom: "1.25rem" }}>
                  {c.label}
                </div>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "1.15rem",
                  fontWeight: 800,
                  color: "white",
                  lineHeight: 1.2,
                  marginBottom: "1rem",
                }}>
                  {c.title}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.78)", lineHeight: 1.65, marginBottom: "1.5rem" }}>
                  {c.desc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "1.25rem" }}>
                  {c.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "'Roboto Mono', monospace",
                        fontSize: "0.62rem",
                        color: "rgba(255,255,255,0.65)",
                        background: "rgba(255,255,255,0.07)",
                        border: "1px solid rgba(255,255,255,0.14)",
                        padding: "2px 8px",
                        borderRadius: "2px",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: "0.68rem",
                  color: "var(--verde-bright)",
                  letterSpacing: "0.06em",
                }}>
                  →
                </span>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
