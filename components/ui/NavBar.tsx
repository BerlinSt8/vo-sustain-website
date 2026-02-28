"use client";

import { useEffect, useState } from "react";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "1rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "background 0.4s, backdrop-filter 0.4s, box-shadow 0.4s",
        background: scrolled ? "rgba(13,27,42,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 1px 0 rgba(255,255,255,0.06)" : "none",
      }}
    >
      {/* Logo */}
      <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.625rem" }}>
        <img
          src="/vo-logo.jpg"
          alt="VO Sustain Logo"
          style={{ height: "32px", width: "auto", display: "block", borderRadius: "3px" }}
        />
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1rem", fontWeight: 900, color: "white", letterSpacing: "0.05em" }}>
            VO SUSTAIN
          </span>
          <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.5rem", color: "var(--verde-bright)", letterSpacing: "0.18em", marginTop: "1px" }}>
            VERDE ONDA
          </span>
        </div>
      </a>

      {/* Links */}
      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        <a
          href="/#leistungen"
          style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.7)", textDecoration: "none", transition: "color 0.2s", letterSpacing: "0.02em" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
        >
          Leistungen
        </a>
        <a
          href="/#ueber-uns"
          style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.7)", textDecoration: "none", transition: "color 0.2s", letterSpacing: "0.02em" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
        >
          Über uns
        </a>
        <a
          href="/aktuell"
          style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.7)", textDecoration: "none", transition: "color 0.2s", letterSpacing: "0.02em" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
        >
          Aktuell
        </a>
        <a
          href="/#quick-check"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "0.8rem",
            fontWeight: 700,
            color: "white",
            background: "var(--verde)",
            textDecoration: "none",
            padding: "0.5rem 1.2rem",
            borderRadius: "var(--radius)",
            letterSpacing: "0.04em",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "var(--verde-dark)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "var(--verde)")}
        >
          Quick-Check starten
        </a>
      </div>
    </nav>
  );
}
