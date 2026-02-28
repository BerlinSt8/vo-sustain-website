"use client";

import { useEffect, useState } from "react";
import type { Artikel, ArtikelKategorie } from "@/lib/types";

const KATEGORIE_ACCENT: Record<ArtikelKategorie, string> = {
  "Förderaufruf": "#27AE60",
  "CSRD-News":    "#3498DB",
  "Marktinfo":    "#E67E22",
  "Erfolg":       "#2ECC71",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("de-DE", { day: "2-digit", month: "long", year: "numeric" });
}

interface ArtikelHeroProps {
  artikel: Artikel;
}

export default function ArtikelHero({ artikel }: ArtikelHeroProps) {
  const [scrollY, setScrollY] = useState(0);
  const accent = KATEGORIE_ACCENT[artikel.category];

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const parallaxY = scrollY * 0.28;
  const opacity = Math.max(0, 1 - scrollY / 400);

  return (
    <div style={{
      background: "var(--navy-dark)",
      padding: "calc(80px + 4rem) 8vw 4rem",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Subtiler Kategorie-Glow im Hintergrund */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0, bottom: 0,
        background: `radial-gradient(ellipse 60% 50% at 20% 60%, ${accent}0D 0%, transparent 70%)`,
        pointerEvents: "none",
      }} />

      {/* Parallax-Container */}
      <div style={{
        transform: `translateY(${parallaxY}px)`,
        opacity,
        willChange: "transform, opacity",
        position: "relative",
      }}>
        {/* Zurück-Link */}
        <a
          href="/aktuell"
          style={{
            display: "inline-flex", alignItems: "center", gap: "0.4rem",
            fontFamily: "'Roboto Mono', monospace", fontSize: "0.72rem",
            letterSpacing: "0.08em", textTransform: "uppercase",
            color: "rgba(255,255,255,0.55)", textDecoration: "none",
            marginBottom: "2rem",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = accent)}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
        >
          ← Zurück zu Aktuell
        </a>

        {/* Kategorie + Datum */}
        <div className="animate-fade-up" style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
          <span style={{
            fontFamily: "'Roboto Mono', monospace", fontSize: "0.68rem",
            letterSpacing: "0.1em", textTransform: "uppercase",
            background: `${accent}18`, color: accent,
            border: `1px solid ${accent}40`,
            borderRadius: "4px", padding: "3px 10px", fontWeight: 600,
          }}>
            ▸ {artikel.category}
          </span>
          <span style={{
            fontFamily: "'Roboto Mono', monospace", fontSize: "0.7rem",
            color: "rgba(255,255,255,0.55)",
          }}>
            {formatDate(artikel.date)}
          </span>
        </div>

        {/* Titel */}
        <h1
          className="animate-fade-up"
          style={{
            fontFamily: "Montserrat, sans-serif", fontWeight: 900,
            fontSize: "clamp(1.8rem, 4.5vw, 3rem)",
            color: "white", lineHeight: 1.15,
            marginBottom: "1.5rem", maxWidth: "820px",
            animationDelay: "0.06s",
          }}
        >
          {artikel.title}
        </h1>

        {/* Teaser */}
        <p
          className="animate-fade-up"
          style={{
            fontFamily: "'Open Sans', sans-serif", fontSize: "1.1rem",
            color: "rgba(255,255,255,0.8)", maxWidth: "640px", lineHeight: 1.78,
            animationDelay: "0.12s",
          }}
        >
          {artikel.teaser}
        </p>
      </div>
    </div>
  );
}
