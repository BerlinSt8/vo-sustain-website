"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import FloatingOrbs from "@/components/ui/FloatingOrbs";

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

function ServiceCard({
  channel,
  href,
  index,
}: {
  channel: { label: string; title: string; desc: string; tags: readonly string[] };
  href: string;
  index: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({
      rotateX: -(y - 0.5) * 10,
      rotateY: (x - 0.5) * 10,
    });
    setGlowPos({ x: x * 100, y: y * 100 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: 0.08 * index }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setTilt({ rotateX: 0, rotateY: 0 });
        setIsHovered(false);
      }}
      style={{ perspective: "800px" }}
    >
      <motion.a
        ref={ref}
        href={href}
        animate={{
          rotateX: tilt.rotateX,
          rotateY: tilt.rotateY,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ type: "spring", stiffness: 280, damping: 18 }}
        style={{
          background: isHovered ? "rgba(39,174,96,0.07)" : "rgba(255,255,255,0.04)",
          border: `1px solid ${isHovered ? "rgba(39,174,96,0.3)" : "rgba(255,255,255,0.08)"}`,
          borderRadius: "12px",
          padding: "2rem",
          textDecoration: "none",
          display: "block",
          transformStyle: "preserve-3d",
          position: "relative",
          overflow: "hidden",
          cursor: "pointer",
          boxShadow: isHovered
            ? "0 20px 40px rgba(0,0,0,0.25), 0 0 30px rgba(39,174,96,0.08)"
            : "0 4px 12px rgba(0,0,0,0.1)",
          transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
        }}
      >
        {/* Mouse-following glow */}
        {isHovered && (
          <div style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(circle 200px at ${glowPos.x}% ${glowPos.y}%, rgba(39,174,96,0.1) 0%, transparent 70%)`,
            pointerEvents: "none",
          }} />
        )}

        <div style={{ position: "relative", transform: "translateZ(15px)" }}>
          <div style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.65rem", color: "var(--verde-bright)", letterSpacing: "0.15em", marginBottom: "1.25rem" }}>
            {channel.label}
          </div>
          <h3 style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "1.15rem",
            fontWeight: 800,
            color: "white",
            lineHeight: 1.2,
            marginBottom: "1rem",
          }}>
            {channel.title}
          </h3>
          <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.78)", lineHeight: 1.65, marginBottom: "1.5rem" }}>
            {channel.desc}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "1.25rem" }}>
            {channel.tags.map((tag) => (
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
          {/* Arrow with slide animation */}
          <motion.span
            style={{
              fontFamily: "'Roboto Mono', monospace",
              fontSize: "0.68rem",
              color: "var(--verde-bright)",
              letterSpacing: "0.06em",
              display: "inline-block",
            }}
            animate={{ x: isHovered ? 6 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            →
          </motion.span>
        </div>
      </motion.a>
    </motion.div>
  );
}

export default function SolutionSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const crystalY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };
    const el = sectionRef.current;
    el?.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => el?.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="leistungen"
      style={{ background: "var(--navy)", padding: "6rem 8vw", position: "relative", overflow: "hidden" }}
    >
      {/* Background floating orbs */}
      <FloatingOrbs count={14} maxSize={4} minSize={1.5} />

      {/* Mouse-following ambient glow */}
      <div style={{
        position: "absolute",
        width: "600px",
        height: "600px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(39,174,96,0.06) 0%, transparent 70%)",
        left: `calc(${mousePos.x * 100}% - 300px)`,
        top: `calc(${mousePos.y * 100}% - 300px)`,
        pointerEvents: "none",
        transition: "left 0.6s ease, top 0.6s ease",
        zIndex: 1,
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 2 }}>

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
              <span style={{ display: "flex", flexWrap: "wrap", gap: "0 0.25em" }}>
                {t.solution.headline1.split(" ").map((word, i) => (
                  <motion.span
                    key={`s1-${i}`}
                    initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                    style={{ display: "inline-block" }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              <span style={{ display: "flex", flexWrap: "wrap", gap: "0 0.25em" }}>
                {t.solution.headline2.split(" ").map((word, i) => (
                  <motion.span
                    key={`s2-${i}`}
                    initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                    style={{ display: "inline-block" }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
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

          {/* Right: Crystal logo with parallax */}
          <motion.div
            className="crystal-hero-wrap"
            style={{
              flex: "0 0 auto",
              width: "clamp(220px, 25vw, 360px)",
              position: "relative",
              y: crystalY,
            }}
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

        {/* Channel cards — 3D tilt */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
          {t.solution.channels.map((c, i) => {
            const links = ["/foerderberatung", "/zim-foerderung", "/bafa-foerderung", "/csrd-beratung", "/nachhaltigkeitsstrategie"];
            return (
              <ServiceCard
                key={i}
                channel={c}
                href={links[i] || "#"}
                index={i}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}
