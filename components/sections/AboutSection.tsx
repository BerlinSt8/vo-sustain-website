"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import CountUp from "@/components/ui/CountUp";
import FloatingOrbs from "@/components/ui/FloatingOrbs";

const programs = ["ZIM", "BAFA", "SAB", "TAB", "EFRE", "Horizon Europe", "LIFE", "BMWK"];

const SPARKLES = [
  { top: "6%",  left: "15%",  delay: "0.3s", dur: "3.2s", size: 4 },
  { top: "12%", left: "78%",  delay: "1.4s", dur: "2.8s", size: 5 },
  { top: "55%", left: "88%",  delay: "0.8s", dur: "3.0s", size: 3 },
  { top: "80%", left: "60%",  delay: "2.0s", dur: "2.6s", size: 4 },
  { top: "72%", left: "8%",   delay: "1.1s", dur: "3.4s", size: 3 },
];

// Parse credential label for CountUp
function parseCredential(label: string): { num: number; suffix: string; prefix: string } | null {
  const match = label.match(/^([>+]?)(\d+)(.*)$/);
  if (match) {
    return { prefix: match[1], num: parseInt(match[2]), suffix: match[3] };
  }
  return null;
}

export default function AboutSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const crystalY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section
      ref={sectionRef}
      id="ueber-uns"
      style={{ background: "var(--navy)", padding: "6rem 8vw", position: "relative", overflow: "hidden" }}
    >
      {/* Floating orbs background */}
      <FloatingOrbs count={8} maxSize={3} minSize={1} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 2 }}>
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

          {/* Crystal top right — with parallax */}
          <motion.div
            className="crystal-hero-wrap"
            style={{ width: "clamp(160px, 18vw, 240px)", position: "relative", y: crystalY }}
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
          {/* Foto — with parallax */}
          <motion.div style={{ y: photoY }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid rgba(39,174,96,0.2)",
                background: "rgba(255,255,255,0.04)",
                aspectRatio: "3/4",
                maxWidth: "300px",
                position: "relative",
              }}
            >
              <img
                src="/denis.png"
                alt={t.about.imgAlt}
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
              />
              {/* Subtle verde overlay on bottom */}
              <div style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "40%",
                background: "linear-gradient(to top, rgba(8,15,26,0.5) 0%, transparent 100%)",
                pointerEvents: "none",
              }} />
            </motion.div>
          </motion.div>

          {/* Content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 900,
                color: "white",
                lineHeight: 1.05,
                marginBottom: "0.5rem",
              }}
            >
              {t.about.headline}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: "0.75rem",
                color: "var(--verde-bright)",
                letterSpacing: "0.1em",
                marginBottom: "2rem",
              }}
            >
              {t.about.subtitle}
            </motion.p>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1.55,
                borderLeft: "3px solid var(--verde)",
                paddingLeft: "1.5rem",
                marginBottom: "2.5rem",
                fontStyle: "italic",
              }}
            >
              &bdquo;{t.about.quote}&ldquo;
            </motion.blockquote>

            {/* Metrics — Animated CountUp */}
            <div style={{ display: "flex", gap: "2.5rem", marginBottom: "2.5rem", flexWrap: "wrap" }}>
              {t.about.credentials.map((c, i) => {
                const parsed = parseCredential(c.label);
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20, scale: 0.9, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.6rem", fontWeight: 900, color: "var(--verde-bright)", lineHeight: 1 }}>
                      {parsed ? (
                        <CountUp
                          end={parsed.num}
                          prefix={parsed.prefix}
                          suffix={parsed.suffix}
                          duration={2000}
                        />
                      ) : (
                        c.label
                      )}
                    </div>
                    <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "0.8rem", color: "rgba(255,255,255,0.65)", marginTop: "4px" }}>
                      {c.sub}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "0.9rem",
                color: "rgba(255,255,255,0.78)",
                lineHeight: 1.75,
                marginBottom: "2rem",
                maxWidth: "560px",
              }}
            >
              {t.about.bio}
            </motion.p>

            {/* Program tags — staggered reveal */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {programs.map((p, i) => (
                <motion.span
                  key={p}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.05 * i }}
                  style={{
                    fontFamily: "'Roboto Mono', monospace",
                    fontSize: "0.68rem",
                    color: "rgba(255,255,255,0.68)",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.14)",
                    padding: "4px 10px",
                    borderRadius: "2px",
                    letterSpacing: "0.06em",
                  }}
                >
                  {p}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
