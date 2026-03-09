"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import FloatingOrbs from "@/components/ui/FloatingOrbs";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { t } = useLanguage();
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY     = useTransform(scrollYProgress, [0, 0.2, 1], ["-18%", "0%", "35%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.25, 1], [1.15, 1.0, 1.0]);
  const headlineY  = useTransform(scrollYProgress, [0, 0.2],  ["40px", "0px"]);
  const headlineOp = useTransform(scrollYProgress, [0.05, 0.22], [0, 1]);
  const subTextOp  = useTransform(scrollYProgress, [0.12, 0.28], [0, 1]);
  const ctaOp      = useTransform(scrollYProgress, [0.18, 0.32], [0, 1]);
  const overlayOp  = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.82]);
  const verdeGlow  = useTransform(scrollYProgress, [0.1, 0.18, 0.28], [0, 1, 0]);

  // Parallax layers based on scroll
  const layer1Y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const layer2Y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const layer3Y = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  // Mouse parallax for depth
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const mouseOffsetX = (mousePos.x - 0.5) * 20;
  const mouseOffsetY = (mousePos.y - 0.5) * 10;

  // Split headline into words for kinetic reveal
  const words = t.hero.headline.split(" ");

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
      {/* Gradient Mesh Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(ellipse 80% 60% at ${30 + mousePos.x * 15}% ${20 + mousePos.y * 15}%, rgba(39,174,96,0.08) 0%, transparent 50%),
            radial-gradient(ellipse 60% 80% at ${70 - mousePos.x * 10}% ${60 - mousePos.y * 10}%, rgba(46,204,113,0.05) 0%, transparent 50%),
            radial-gradient(ellipse 50% 50% at 50% 80%, rgba(13,27,42,0.8) 0%, transparent 70%)
          `,
          transition: "background 0.8s ease",
          zIndex: 0,
        }}
      />

      {/* Welle – parallax layer 1 (deepest) */}
      <motion.div style={{
        position: "absolute",
        inset: "-20% 0 -20% 0",
        y: imageY,
        scale: imageScale,
        x: mouseOffsetX * 0.3,
      }}>
        <img
          src="/welle.jpeg"
          alt={t.hero.imgAlt}
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%", display: "block" }}
        />
      </motion.div>

      {/* Navy overlay */}
      <motion.div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, rgba(8,15,26,0.2) 0%, rgba(13,27,42,0.5) 60%, rgba(8,15,26,0.9) 100%)",
        opacity: overlayOp,
        zIndex: 1,
      }} />

      {/* Floating Orbs — parallax layer 2 */}
      <motion.div style={{ position: "absolute", inset: 0, y: layer1Y, zIndex: 2 }}>
        <FloatingOrbs count={22} maxSize={5} minSize={1.5} />
      </motion.div>

      {/* Verde Glow — mouse reactive */}
      <motion.div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(ellipse 60% 40% at ${50 + mouseOffsetX * 0.5}% ${32 + mouseOffsetY * 0.5}%, rgba(46,204,113,0.4) 0%, transparent 70%)`,
        opacity: verdeGlow,
        pointerEvents: "none",
        zIndex: 3,
      }} />

      {/* Horizontal Light Beam — subtle */}
      <motion.div style={{
        position: "absolute",
        top: "35%",
        left: "-20%",
        width: "140%",
        height: "1px",
        background: "linear-gradient(90deg, transparent 0%, rgba(46,204,113,0.15) 30%, rgba(46,204,113,0.3) 50%, rgba(46,204,113,0.15) 70%, transparent 100%)",
        opacity: headlineOp,
        y: layer3Y,
        zIndex: 3,
        pointerEvents: "none",
      }} />

      {/* Content — parallax layer 3 (foreground) */}
      <motion.div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start",
        padding: "0 8vw", paddingTop: "80px",
        y: layer3Y,
        x: mouseOffsetX * -0.15,
        zIndex: 4,
      }}>
        {/* Tag */}
        <motion.div style={{ opacity: headlineOp, marginBottom: "1.5rem" }}>
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
            backdropFilter: "blur(8px)",
          }}>
            {t.hero.tag}
          </span>
        </motion.div>

        {/* Kinetic Headline — word by word */}
        <h1 style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "clamp(3.5rem, 9vw, 7rem)",
          fontWeight: 900,
          color: "white",
          lineHeight: 0.95,
          letterSpacing: "-0.02em",
          marginBottom: "1.5rem",
          maxWidth: "800px",
          display: "flex",
          flexWrap: "wrap",
          gap: "0 0.3em",
        }}>
          {words.map((word, i) => (
            <motion.span
              key={i}
              style={{
                y: headlineY,
                opacity: headlineOp,
                display: "inline-block",
              }}
              initial={{ opacity: 0, y: 40, rotateX: -40 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.15 + i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Sub-headline */}
        <motion.p style={{
          opacity: subTextOp,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
          fontWeight: 700, color: "rgba(255,255,255,0.82)", lineHeight: 1.25,
          marginBottom: "1rem", maxWidth: "600px",
        }}>
          {t.hero.sub}
        </motion.p>

        <motion.p style={{
          opacity: subTextOp,
          fontFamily: "'Open Sans', sans-serif",
          fontSize: "clamp(0.95rem, 1.8vw, 1.15rem)",
          color: "rgba(255,255,255,0.62)", lineHeight: 1.65,
          marginBottom: "2.5rem", maxWidth: "520px",
        }}>
          {t.hero.body}
        </motion.p>

        {/* CTAs — Magnetic effect */}
        <motion.div style={{ opacity: ctaOp, display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <MagneticButton href="#quick-check" primary>
            {t.hero.ctaPrimary}
          </MagneticButton>
          <MagneticButton href="#leistungen">
            {t.hero.ctaSecondary}
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div style={{
        position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)",
        opacity: headlineOp, display: "flex", flexDirection: "column", alignItems: "center", gap: "6px",
        zIndex: 5,
      }}>
        <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.6rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.15em" }}>SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5">
            <rect x="1" y="1" width="14" height="22" rx="7" />
            <motion.circle
              cx="8" cy="8" r="2"
              fill="rgba(46,204,113,0.6)"
              animate={{ cy: [7, 14, 7] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* Magnetic Button — follows cursor slightly */
function MagneticButton({
  href,
  primary,
  children,
}: {
  href: string;
  primary?: boolean;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left - rect.width / 2) * 0.15;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.15;
    setOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 350, damping: 15 }}
      style={{
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "0.9rem",
        fontWeight: 700,
        color: "white",
        background: primary ? "var(--verde)" : "transparent",
        textDecoration: "none",
        padding: primary ? "0.85rem 2rem" : "0.85rem 1.75rem",
        borderRadius: "var(--radius)",
        letterSpacing: "0.04em",
        border: primary ? "none" : "1px solid rgba(255,255,255,0.2)",
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        transition: "background 0.2s, border-color 0.2s, box-shadow 0.2s",
      }}
      whileHover={{
        boxShadow: primary
          ? "0 0 30px rgba(39,174,96,0.4), 0 0 60px rgba(39,174,96,0.15)"
          : "0 0 20px rgba(255,255,255,0.1)",
        borderColor: primary ? undefined : "rgba(255,255,255,0.5)",
      }}
    >
      {/* Shimmer on hover */}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: "-100%",
          width: "100%",
          height: "100%",
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)",
          pointerEvents: "none",
        }}
        whileHover={{ left: "100%" }}
        transition={{ duration: 0.6 }}
      />
      <span style={{ position: "relative", zIndex: 1 }}>{children}</span>
    </motion.a>
  );
}
