"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const SERVICE_ITEMS = {
  de: [
    { label: "Förderberatung", sub: "ZIM, BAFA, EFRE & mehr", href: "/foerderberatung" },
    { label: "BAFA-Förderung", sub: "Energieberatung, EEW & BEG", href: "/bafa-foerderung" },
    { label: "CSRD-Beratung", sub: "VSME-Standard & Reporting", href: "/csrd-beratung" },
    { label: "ZIM-Netzwerkmanagement", sub: "Projekte & Netzwerke", href: "/zim-foerderung" },
    { label: "Nachhaltigkeitsstrategie", sub: "Roadmap & THG-Bilanz", href: "/nachhaltigkeitsstrategie" },
  ],
  en: [
    { label: "Grant Advisory", sub: "ZIM, BAFA, EFRE & more", href: "/foerderberatung" },
    { label: "BAFA Grants", sub: "Energy consulting, EEW & BEG", href: "/bafa-foerderung" },
    { label: "CSRD Consulting", sub: "VSME standard & reporting", href: "/csrd-beratung" },
    { label: "ZIM Network Management", sub: "Projects & networks", href: "/zim-foerderung" },
    { label: "Sustainability Strategy", sub: "Roadmap & GHG balance", href: "/nachhaltigkeitsstrategie" },
  ],
};

export default function NavBar() {
  const { t, lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [leistungenOpen, setLeistungenOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const services = lang === "en" ? SERVICE_ITEMS.en : SERVICE_ITEMS.de;

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

  useEffect(() => {
    if (menuOpen) setMenuOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrolled]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleDropdownEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 120);
  };

  const langToggle = (
    <button
      onClick={() => setLang(lang === "de" ? "en" : "de")}
      title={lang === "de" ? "Switch to English" : "Zu Deutsch wechseln"}
      style={{
        background: "transparent",
        border: "1px solid rgba(255,255,255,0.18)",
        borderRadius: "50%",
        width: "30px",
        height: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "border-color 0.2s, background 0.2s, box-shadow 0.2s",
        flexShrink: 0,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(39,174,96,0.6)";
        (e.currentTarget as HTMLButtonElement).style.background = "rgba(39,174,96,0.1)";
        (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 12px rgba(39,174,96,0.15)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.18)";
        (e.currentTarget as HTMLButtonElement).style.background = "transparent";
        (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
      }}
    >
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.65)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    </button>
  );

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "fixed",
          top: isMobile ? 0 : "12px",
          left: isMobile ? 0 : "16px",
          right: isMobile ? 0 : "16px",
          zIndex: 100,
          padding: isMobile ? "0.75rem 1.25rem" : "0.85rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "background 0.4s, backdrop-filter 0.4s, box-shadow 0.4s, border-color 0.4s, border-bottom 0.4s",
          background: scrolled
            ? "rgba(8,15,26,0.75)"
            : "rgba(8,15,26,0)",
          backdropFilter: scrolled ? "blur(20px) saturate(1.4)" : "blur(0px)",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(1.4)" : "blur(0px)",
          boxShadow: scrolled
            ? "0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.03)"
            : "none",
          border: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(255,255,255,0)",
          borderBottom: scrolled ? "1px solid rgba(46,204,113,0.08)" : "1px solid rgba(255,255,255,0)",
          borderRadius: isMobile ? 0 : "14px",
        }}
      >
        {/* Logo */}
        <a
          href="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "0.625rem",
            background: "rgba(8,15,26,0.55)",
            border: "1px solid rgba(39,174,96,0.22)",
            borderRadius: "10px",
            padding: "5px 12px 5px 6px",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            transition: "border-color 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(39,174,96,0.45)";
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 16px rgba(39,174,96,0.12)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(39,174,96,0.22)";
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
          }}
        >
          <div style={{
            background: "rgba(39,174,96,0.18)",
            border: "1px solid rgba(39,174,96,0.5)",
            borderRadius: "6px",
            padding: "3px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}>
            <img
              src="/vo-iv.png"
              alt="VO Sustain Logo"
              style={{
                height: "28px",
                width: "auto",
                display: "block",
                borderRadius: "3px",
                filter: "brightness(1.3)",
              }}
            />
          </div>
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1rem", fontWeight: 900, color: "white", letterSpacing: "0.05em" }}>
            VO SUSTAIN
          </span>
        </a>

        {/* Desktop Nav */}
        {!isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>

            {/* Leistungen mit Dropdown */}
            <div
              ref={dropdownRef}
              style={{ position: "relative" }}
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "0.85rem",
                  color: dropdownOpen ? "white" : "rgba(255,255,255,0.7)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  letterSpacing: "0.02em",
                  padding: 0,
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  transition: "color 0.2s",
                }}
              >
                {t.nav.leistungen}
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    transition: "transform 0.2s",
                    transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                    opacity: 0.7,
                  }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {/* Dropdown Panel — glassmorphism */}
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.97 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      position: "absolute",
                      top: "calc(100% + 14px)",
                      left: "50%",
                      width: "260px",
                      transform: "translateX(-50%)",
                      background: "rgba(8,15,26,0.9)",
                      backdropFilter: "blur(20px) saturate(1.4)",
                      WebkitBackdropFilter: "blur(20px) saturate(1.4)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "12px",
                      boxShadow: "0 20px 50px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
                      padding: "6px",
                    }}
                  >
                    {/* Arrow */}
                    <div style={{
                      position: "absolute",
                      top: "-5px",
                      left: "50%",
                      transform: "translateX(-50%) rotate(45deg)",
                      width: "9px",
                      height: "9px",
                      background: "rgba(8,15,26,0.9)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderBottom: "none",
                      borderRight: "none",
                    }} />

                    {services.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "2px",
                          padding: "10px 14px",
                          borderRadius: "8px",
                          textDecoration: "none",
                          transition: "background 0.15s",
                          cursor: "pointer",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "rgba(39,174,96,0.08)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "transparent";
                        }}
                      >
                        <span style={{
                          fontFamily: "'Open Sans', sans-serif",
                          fontSize: "0.82rem",
                          fontWeight: 600,
                          color: "rgba(255,255,255,0.88)",
                          letterSpacing: "0.01em",
                        }}>
                          {item.label}
                        </span>
                        <span style={{
                          fontFamily: "'Roboto Mono', monospace",
                          fontSize: "0.62rem",
                          color: "rgba(255,255,255,0.35)",
                          letterSpacing: "0.04em",
                        }}>
                          {item.sub}
                        </span>
                      </a>
                    ))}

                    <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", margin: "4px 6px" }} />
                    <a
                      href="/#leistungen"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "8px 14px",
                        borderRadius: "8px",
                        textDecoration: "none",
                        transition: "background 0.15s",
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(39,174,96,0.08)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
                    >
                      <span style={{
                        fontFamily: "'Roboto Mono', monospace",
                        fontSize: "0.65rem",
                        color: "var(--verde-bright)",
                        letterSpacing: "0.08em",
                      }}>
                        {lang === "de" ? "Alle Leistungen \u2192" : "All services \u2192"}
                      </span>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other links */}
            {[
              { href: "/#ueber-uns", label: t.nav.ueberUns },
              { href: "/aktuell", label: t.nav.aktuell },
            ].map((link) => (
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

            {langToggle}

            {/* CTA Button — with glow */}
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
                transition: "background 0.2s, box-shadow 0.3s",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--verde-dark)";
                e.currentTarget.style.boxShadow = "0 0 20px rgba(39,174,96,0.35), 0 0 40px rgba(39,174,96,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--verde)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {t.nav.quickCheck}
            </a>
          </div>
        )}

        {/* Mobile: Lang + CTA + Hamburger */}
        {isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            {langToggle}
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
              {t.nav.quickCheckMobile}
            </a>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={t.nav.menuOpen}
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
              <span style={{ display: "block", width: "22px", height: "2px", background: "white", transition: "transform 0.25s, opacity 0.25s", transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none" }} />
              <span style={{ display: "block", width: "22px", height: "2px", background: "white", transition: "opacity 0.25s", opacity: menuOpen ? 0 : 1 }} />
              <span style={{ display: "block", width: "22px", height: "2px", background: "white", transition: "transform 0.25s, opacity 0.25s", transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none" }} />
            </button>
          </div>
        )}
      </motion.nav>

      {/* Mobile Slide-down Menu */}
      {isMobile && (
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: "fixed",
                top: "56px",
                left: 0,
                right: 0,
                zIndex: 99,
                background: "rgba(8,15,26,0.95)",
                backdropFilter: "blur(20px) saturate(1.4)",
                WebkitBackdropFilter: "blur(20px) saturate(1.4)",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                padding: "0.5rem 1.5rem 1.5rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Leistungen accordion */}
              <div style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                <button
                  onClick={() => setLeistungenOpen((o) => !o)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "0.9rem 0",
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "1.05rem",
                    color: "rgba(255,255,255,0.85)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {t.nav.leistungen}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ transition: "transform 0.2s", transform: leistungenOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                <div style={{
                  overflow: "hidden",
                  maxHeight: leistungenOpen ? "300px" : "0",
                  transition: "max-height 0.25s ease",
                }}>
                  <div style={{ paddingBottom: "0.75rem", display: "flex", flexDirection: "column", gap: "2px" }}>
                    {services.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "1px",
                          padding: "0.6rem 0.75rem",
                          borderRadius: "6px",
                          textDecoration: "none",
                          background: "rgba(39,174,96,0.05)",
                          borderLeft: "2px solid rgba(39,174,96,0.3)",
                        }}
                      >
                        <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "0.9rem", color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>
                          {item.label}
                        </span>
                        <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.6rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.04em" }}>
                          {item.sub}
                        </span>
                      </a>
                    ))}
                    <a
                      href="/#leistungen"
                      onClick={() => setMenuOpen(false)}
                      style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.65rem", color: "var(--verde-bright)", padding: "0.4rem 0.75rem", textDecoration: "none", letterSpacing: "0.06em" }}
                    >
                      {lang === "de" ? "Alle Leistungen \u2192" : "All services \u2192"}
                    </a>
                  </div>
                </div>
              </div>

              {[
                { href: "/#ueber-uns", label: t.nav.ueberUns },
                { href: "/aktuell", label: t.nav.aktuell },
              ].map((link, i) => (
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
                    borderBottom: i === 0 ? "1px solid rgba(255,255,255,0.07)" : "none",
                    letterSpacing: "0.02em",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  );
}
