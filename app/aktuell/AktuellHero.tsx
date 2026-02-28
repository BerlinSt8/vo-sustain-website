"use client";

import { useEffect, useRef, useState } from "react";

export default function AktuellHero() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Parallax: Text bewegt sich halb so schnell wie der Scroll
  const parallaxY = scrollY * 0.35;
  // Fade-out: Hero wird transparent während man scrollt
  const opacity = Math.max(0, 1 - scrollY / 320);

  return (
    <div
      ref={heroRef}
      style={{
        background: "var(--navy-dark)",
        padding: "calc(80px + 4rem) 8vw 5rem",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Hintergrund-Glow (statisch) */}
      <div style={{
        position: "absolute",
        top: "20%",
        left: "5%",
        width: "400px",
        height: "300px",
        background: "radial-gradient(ellipse at center, rgba(39,174,96,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Parallax-Text-Container */}
      <div style={{
        transform: `translateY(${parallaxY}px)`,
        opacity,
        willChange: "transform, opacity",
      }}>
        <p
          className="animate-fade-up"
          style={{
            fontFamily: "'Roboto Mono', monospace",
            fontSize: "11px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "var(--verde-bright)",
            marginBottom: "1.2rem",
          }}
        >
          NEWS & UPDATES
        </p>
        <h1
          className="animate-fade-up"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 900,
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            color: "white",
            lineHeight: 1.05,
            marginBottom: "1.4rem",
            animationDelay: "0.05s",
          }}
        >
          Aktuell.
        </h1>
        <p
          className="animate-fade-up"
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.78)",
            maxWidth: "520px",
            lineHeight: 1.75,
            animationDelay: "0.1s",
          }}
        >
          Förderaufrufe mit Fristen, CSRD-Updates und Neuigkeiten aus der deutschen Förderlandschaft — wöchentlich aktualisiert.
        </p>
      </div>

      {/* Scroll-Indikator */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          opacity: Math.max(0, 1 - scrollY / 120),
        }}
      >
        <span style={{
          fontFamily: "'Roboto Mono', monospace",
          fontSize: "0.55rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.45)",
        }}>
          Scroll
        </span>
        <div className="scroll-blink" style={{
          width: "1px",
          height: "32px",
          background: "linear-gradient(to bottom, rgba(39,174,96,0.6), transparent)",
        }} />
      </div>
    </div>
  );
}
