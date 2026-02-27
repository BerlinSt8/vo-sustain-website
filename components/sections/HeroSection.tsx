"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // PHASE 1 (0→0.2): Welle bricht – Bild fährt von oben ein
  const imageY     = useTransform(scrollYProgress, [0, 0.2, 1], ["-18%", "0%", "35%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.25, 1], [1.15, 1.0, 1.0]);

  // PHASE 2 (0→0.28): Text erscheint wie Gischt nach dem Brechen
  const headlineY  = useTransform(scrollYProgress, [0, 0.2],  ["40px", "0px"]);
  const headlineOp = useTransform(scrollYProgress, [0.05, 0.22], [0, 1]);
  const subTextOp  = useTransform(scrollYProgress, [0.12, 0.28], [0, 1]);
  const ctaOp      = useTransform(scrollYProgress, [0.18, 0.32], [0, 1]);

  // PHASE 3 (0→0.6): Overlay verdunkelt sich
  const overlayOp  = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.82]);

  // PHASE 4: Verde-Glow-Pulse am Break-Moment
  const verdeGlow  = useTransform(scrollYProgress, [0.1, 0.18, 0.28], [0, 1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      style={{
        position: "relative",
        height: "100vh",
        minHeight: "600px",
        overflow: "hidden",
        background: "var(--navy-dark)",
      }}
    >
      {/* Welle – parallax */}
      <motion.div
        style={{
          position: "absolute",
          inset: "-20% 0 -20% 0",
          y: imageY,
          scale: imageScale,
        }}
      >
        <img
          src="/welle.jpeg"
          alt="Verde Onda – die Grüne Welle"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 30%",
            display: "block",
          }}
        />
      </motion.div>

      {/* Navy overlay */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(8,15,26,0.2) 0%, rgba(13,27,42,0.5) 60%, rgba(8,15,26,0.9) 100%)",
          opacity: overlayOp,
        }}
      />

      {/* Verde Glow – der Break-Moment */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 60% 40% at 55% 32%, rgba(46,204,113,0.4) 0%, transparent 70%)",
          opacity: verdeGlow,
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "0 8vw",
          paddingTop: "80px",
        }}
      >
        {/* Tag */}
        <motion.div
          style={{ opacity: headlineOp, marginBottom: "1.5rem" }}
        >
          <span style={{
            fontFamily: "'Roboto Mono', monospace",
            fontSize: "0.68rem",
            letterSpacing: "0.2em",
            color: "var(--verde-bright)",
            textTransform: "uppercase",
            background: "rgba(39,174,96,0.12)",
            border: "1px solid rgba(39,174,96,0.3)",
            padding: "4px 12px",
            borderRadius: "2px",
          }}>
            Förderberatung · Berlin · Deutschland
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          style={{
            y: headlineY,
            opacity: headlineOp,
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "clamp(3.5rem, 9vw, 7rem)",
            fontWeight: 900,
            color: "white",
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
            marginBottom: "1.5rem",
            maxWidth: "800px",
          }}
        >
          VO Sustain.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          style={{
            opacity: subTextOp,
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
            fontWeight: 700,
            color: "rgba(255,255,255,0.82)",
            lineHeight: 1.25,
            marginBottom: "1rem",
            maxWidth: "600px",
          }}
        >
          Die Grüne Welle der Transformation.
        </motion.p>

        <motion.p
          style={{
            opacity: subTextOp,
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "clamp(0.95rem, 1.8vw, 1.15rem)",
            color: "rgba(255,255,255,0.62)",
            lineHeight: 1.65,
            marginBottom: "2.5rem",
            maxWidth: "520px",
          }}
        >
          Wir verwandeln den Theorie-Nebel in greifbare Strategie – und Strategie in finanzierte Umsetzung.
        </motion.p>

        {/* CTAs */}
        <motion.div
          style={{
            opacity: ctaOp,
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#quick-check"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.9rem",
              fontWeight: 700,
              color: "white",
              background: "var(--verde)",
              textDecoration: "none",
              padding: "0.85rem 2rem",
              borderRadius: "var(--radius)",
              letterSpacing: "0.04em",
              transition: "background 0.2s, transform 0.2s",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "var(--verde-dark)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "var(--verde)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Quick-Check starten →
          </a>
          <a
            href="#leistungen"
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "rgba(255,255,255,0.8)",
              textDecoration: "none",
              padding: "0.85rem 1.75rem",
              borderRadius: "var(--radius)",
              border: "1px solid rgba(255,255,255,0.2)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)"; e.currentTarget.style.color = "white"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "rgba(255,255,255,0.8)"; }}
          >
            Leistungen
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: headlineOp,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.6rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.15em" }}>SCROLL</span>
        <span className="scroll-blink" style={{ fontSize: "1rem", color: "rgba(255,255,255,0.4)" }}>↓</span>
      </motion.div>
    </section>
  );
}
