"use client";

import { useEffect, useState } from "react";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Close menu on route change / scroll
  useEffect(() => {
    if (menuOpen) setMenuOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrolled]);

  const navLinks = [
    { href: "/#leistungen", label: "Leistungen" },
    { href: "/#ueber-uns", label: "Über uns" },
    { href: "/aktuell", label: "Aktuell" },
  ];

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: isMobile ? "0.75rem 1.25rem" : "1rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "background 0.4s, backdrop-filter 0.4s, box-shadow 0.4s",
          background: scrolled || menuOpen ? "rgba(13,27,42,0.97)" : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(12px)" : "none",
          boxShadow: scrolled || menuOpen ? "0 1px 0 rgba(255,255,255,0.06)" : "none",
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

        {/* Desktop Links */}
        {!isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.7)", textDecoration: "none", transition: "color 0.2s", letterSpacing: "0.02em" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
              >
                {link.label}
              </a>
            ))}
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
        )}

        {/* Mobile: CTA + Hamburger */}
        {isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <a
              href="/#quick-check"
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.72rem",
                fontWeight: 700,
                color: "white",
                background: "var(--verde)",
                textDecoration: "none",
                padding: "0.4rem 0.9rem",
                borderRadius: "var(--radius)",
                letterSpacing: "0.04em",
                whiteSpace: "nowrap",
              }}
            >
              Quick-Check
            </a>
            {/* Hamburger button */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Menü öffnen"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "4px",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  display: "block",
                  width: "22px",
                  height: "2px",
                  background: "white",
                  transition: "transform 0.25s, opacity 0.25s",
                  transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "22px",
                  height: "2px",
                  background: "white",
                  transition: "opacity 0.25s",
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "22px",
                  height: "2px",
                  background: "white",
                  transition: "transform 0.25s, opacity 0.25s",
                  transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
                }}
              />
            </button>
          </div>
        )}
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMobile && (
        <div
          style={{
            position: "fixed",
            top: "56px",
            left: 0,
            right: 0,
            zIndex: 99,
            background: "rgba(13,27,42,0.97)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            transform: menuOpen ? "translateY(0)" : "translateY(-110%)",
            transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
            padding: "1rem 1.5rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0",
          }}
        >
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "1.05rem",
                color: "rgba(255,255,255,0.85)",
                textDecoration: "none",
                padding: "0.9rem 0",
                borderBottom: i < navLinks.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                letterSpacing: "0.02em",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
