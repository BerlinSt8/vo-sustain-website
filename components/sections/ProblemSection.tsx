"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import FloatingOrbs from "@/components/ui/FloatingOrbs";

const ICONS = [
  /* Shield with crack */
  <svg key="shield" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M12 8v4M12 16h.01" />
  </svg>,
  /* Maze / Chaos */
  <svg key="maze" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3h18v18H3z" />
    <path d="M3 9h12v6H9V9" />
    <path d="M15 15h6" />
    <path d="M15 9V3" />
  </svg>,
  /* Clock / Resource drain */
  <svg key="clock" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
    <path d="M4.93 4.93l2.83 2.83" />
  </svg>,
];

function TiltCard({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, scale: 1 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      rotateX: -y * 12,
      rotateY: x * 12,
      scale: 1.02,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0, scale: 1 });
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: 0.15 * index }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "800px",
        cursor: "default",
      }}
    >
      <motion.div
        animate={{
          rotateX: tilt.rotateX,
          rotateY: tilt.rotateY,
          scale: tilt.scale,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{
          background: isHovered ? "rgba(231,76,60,0.04)" : "rgba(255,255,255,0.03)",
          borderRadius: "12px",
          padding: "2rem",
          border: `1px solid ${isHovered ? "rgba(231,76,60,0.15)" : "rgba(255,255,255,0.06)"}`,
          transformStyle: "preserve-3d",
          position: "relative",
          overflow: "hidden",
          boxShadow: isHovered
            ? "0 20px 40px rgba(0,0,0,0.3), 0 0 30px rgba(231,76,60,0.08)"
            : "0 4px 12px rgba(0,0,0,0.1)",
          transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
        }}
      >
        {/* Inner glow on hover */}
        {isHovered && (
          <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "120%",
            height: "120%",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(ellipse at center, rgba(231,76,60,0.06) 0%, transparent 60%)",
            pointerEvents: "none",
          }} />
        )}
        <div style={{ position: "relative", transform: "translateZ(20px)" }}>
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProblemSection() {
  const { t } = useLanguage();

  return (
    <section
      id="problem"
      style={{
        background: "var(--navy)",
        padding: "6rem 8vw",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Floating orbs */}
      <FloatingOrbs count={10} color="231,76,60" maxSize={4} minSize={1} />

      {/* Subtle gradient accent */}
      <div style={{
        position: "absolute",
        top: "-20%",
        right: "-10%",
        width: "50%",
        height: "80%",
        background: "radial-gradient(ellipse at center, rgba(231,76,60,0.04) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 2 }}>
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "1.5rem" }}
        >
          <span style={{
            fontFamily: "'Roboto Mono', monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.18em",
            color: "rgba(231,76,60,0.7)",
            textTransform: "uppercase",
          }}>
            {t.problem.label}
          </span>
        </motion.div>

        {/* Headline — word-by-word reveal */}
        <h2 style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 900,
          color: "white",
          lineHeight: 1.05,
          marginBottom: "1.25rem",
          maxWidth: "700px",
          display: "flex",
          flexWrap: "wrap",
          gap: "0 0.25em",
        }}>
          {t.problem.headline.split(" ").map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: 0.1 + i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{ display: "inline-block" }}
            >
              {word}
            </motion.span>
          ))}
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "1.05rem",
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.7,
            maxWidth: "580px",
            marginBottom: "4rem",
          }}
        >
          {t.problem.body}
        </motion.p>

        {/* Problem cards — 3D Tilt */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
          {t.problem.cards.map((p, i) => (
            <TiltCard key={i} index={i}>
              {/* Number + Icon row */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                <span style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.1em",
                  color: "rgba(231,76,60,0.5)",
                }}>
                  0{i + 1}
                </span>
                <div style={{ color: "rgba(231,76,60,0.6)" }}>
                  {ICONS[i]}
                </div>
              </div>

              <h3 style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "1rem",
                fontWeight: 800,
                color: "white",
                marginBottom: "0.75rem",
                letterSpacing: "0.02em",
              }}>
                {p.title}
              </h3>
              <p style={{
                fontSize: "0.875rem",
                fontFamily: "'Open Sans', sans-serif",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.7,
              }}>
                {p.desc}
              </p>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
