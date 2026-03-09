"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

function Tilt3DCard({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({
      rotateX: -(y - 0.5) * 14,
      rotateY: (x - 0.5) * 14,
    });
    setGlowPos({ x: x * 100, y: y * 100 });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: 0.12 * index }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setTilt({ rotateX: 0, rotateY: 0 });
        setIsHovered(false);
      }}
      style={{ perspective: "900px" }}
    >
      <motion.div
        animate={{
          rotateX: tilt.rotateX,
          rotateY: tilt.rotateY,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ type: "spring", stiffness: 280, damping: 18 }}
        style={{
          background: "#fff",
          borderRadius: "12px",
          border: `1px solid ${isHovered ? "rgba(39,174,96,0.15)" : "rgba(11,22,34,0.06)"}`,
          borderBottom: `2px solid ${isHovered ? "rgba(39,174,96,0.5)" : "rgba(39,174,96,0.15)"}`,
          padding: "2rem 2rem 1.75rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          transformStyle: "preserve-3d",
          cursor: "default",
          position: "relative",
          overflow: "hidden",
          boxShadow: isHovered
            ? "0 20px 40px rgba(39,174,96,0.1), 0 0 0 1px rgba(39,174,96,0.06)"
            : "0 2px 8px rgba(0,0,0,0.04)",
          transition: "box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.35s",
        }}
      >
        {/* Mouse-following glow */}
        {isHovered && (
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(circle 180px at ${glowPos.x}% ${glowPos.y}%, rgba(39,174,96,0.08) 0%, transparent 70%)`,
            pointerEvents: "none",
            zIndex: 0,
          }} />
        )}
        <div style={{ position: "relative", zIndex: 1, transform: "translateZ(15px)" }}>
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}

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

      {/* Headline — word-by-word reveal with verde accent */}
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
        <span style={{ display: "flex", flexWrap: "wrap", gap: "0 0.25em" }}>
          {w.headline.split(" ").map((word, i) => (
            <motion.span
              key={`h1-${i}`}
              initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.05 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: "inline-block" }}
            >
              {word}
            </motion.span>
          ))}
        </span>
        <span style={{ display: "flex", flexWrap: "wrap", gap: "0 0.25em", color: "#27AE60" }}>
          {w.headline2.split(" ").map((word, i) => (
            <motion.span
              key={`h2-${i}`}
              initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: "inline-block" }}
            >
              {word}
            </motion.span>
          ))}
        </span>
      </h2>

      {/* USP Grid — 3D Tilt Cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "1.5rem",
      }}>
        {w.usps.map((usp, i) => (
          <Tilt3DCard key={usp.number} index={i}>
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
          </Tilt3DCard>
        ))}
      </div>
    </section>
  );
}
