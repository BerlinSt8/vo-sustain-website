"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import type { Artikel, ArtikelKategorie } from "@/lib/types";

const KATEGORIE: Record<ArtikelKategorie, { accent: string; glow: string; label: string }> = {
  "Förderaufruf": { accent: "#27AE60", glow: "rgba(39,174,96,0.18)",   label: "Förderaufruf" },
  "CSRD-News":    { accent: "#2980B9", glow: "rgba(41,128,185,0.15)",  label: "CSRD-News" },
  "Marktinfo":    { accent: "#D35400", glow: "rgba(211,84,0,0.15)",    label: "Marktinfo" },
  "Erfolg":       { accent: "#1E8449", glow: "rgba(30,132,73,0.18)",   label: "Erfolg" },
};

const ALLE_KATEGORIEN: ArtikelKategorie[] = ["Förderaufruf", "CSRD-News", "Marktinfo", "Erfolg"];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("de-DE", { day: "2-digit", month: "short", year: "numeric" });
}

// ── Deadline Countdown ─────────────────────────────────────────────────────────
function DeadlineCountdown({ deadline }: { deadline: string }) {
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    setDays(Math.ceil((new Date(deadline).getTime() - Date.now()) / 86400000));
  }, [deadline]);

  if (days === null) return null;
  const expired = days < 0;
  const urgent = !expired && days <= 14;

  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: "0.4rem",
      background: expired ? "rgba(0,0,0,0.04)" : urgent ? "rgba(231,76,60,0.08)" : "rgba(39,174,96,0.08)",
      border: `1px solid ${expired ? "rgba(0,0,0,0.1)" : urgent ? "rgba(231,76,60,0.25)" : "rgba(39,174,96,0.25)"}`,
      borderRadius: "5px", padding: "3px 10px",
    }}>
      <span style={{ fontSize: "0.6rem" }}>{expired ? "⏸" : urgent ? "🔴" : "⏱"}</span>
      <span style={{
        fontFamily: "'Roboto Mono', monospace", fontSize: "0.68rem",
        letterSpacing: "0.06em", fontWeight: 600,
        color: expired ? "#999" : urgent ? "#C0392B" : "#1E8449",
      }}>
        {expired ? "Abgelaufen" : days === 0 ? "Heute!" : days === 1 ? "Morgen!" : `${days} Tage`}
      </span>
    </div>
  );
}

// ── Artikel-Karte (helles Thema + 3D Tilt + scroll-in) ───────────────────────
function ArtikelKarte({ artikel }: { artikel: Artikel }) {
  const kat = KATEGORIE[artikel.category];
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  // Scroll-In via IntersectionObserver
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // 3D Tilt
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const rx = ((e.clientY - cy) / (rect.height / 2)) * -4;
    const ry = ((e.clientX - cx) / (rect.width / 2)) * 4;
    setTilt({ x: rx, y: ry });
  }, []);

  const handleMouseLeave = () => { setTilt({ x: 0, y: 0 }); setHovered(false); };

  return (
    <div
      ref={cardRef}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: "opacity 0.55s ease, transform 0.55s ease",
      }}
    >
      <a href={`/aktuell/${artikel.slug}`} style={{ textDecoration: "none", display: "block" }}>
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            position: "relative",
            background: "white",
            border: `1px solid ${hovered ? kat.accent + "55" : "rgba(0,0,0,0.07)"}`,
            borderLeft: `3px solid ${hovered ? kat.accent : kat.accent + "60"}`,
            borderRadius: "10px",
            padding: "1.6rem 1.75rem",
            cursor: "pointer",
            transition: "border-color 0.2s, box-shadow 0.2s",
            transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(${hovered ? -3 : 0}px)`,
            boxShadow: hovered
              ? `0 10px 36px ${kat.glow}, 0 2px 8px rgba(0,0,0,0.06)`
              : "0 2px 10px rgba(0,0,0,0.06)",
            willChange: "transform",
          }}
        >
          {/* Kategorie + Datum */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem", flexWrap: "wrap", gap: "0.5rem" }}>
            <span style={{
              fontFamily: "'Roboto Mono', monospace", fontSize: "0.62rem",
              letterSpacing: "0.12em", textTransform: "uppercase",
              color: kat.accent, fontWeight: 700,
            }}>
              ▸ {kat.label}
            </span>
            <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.65rem", color: "#999" }}>
              {formatDate(artikel.date)}
            </span>
          </div>

          {/* Titel */}
          <h2 style={{
            fontFamily: "Montserrat, sans-serif", fontWeight: 800,
            fontSize: "clamp(1rem, 2vw, 1.18rem)",
            color: hovered ? "#0D1B2A" : "#1A2A3A",
            lineHeight: 1.35, marginBottom: "0.8rem",
            transition: "color 0.2s",
          }}>
            {artikel.title}
          </h2>

          {/* Teaser */}
          <p style={{
            fontFamily: "'Open Sans', sans-serif", fontSize: "0.88rem",
            color: "#555", lineHeight: 1.7, marginBottom: "1.25rem",
          }}>
            {artikel.teaser}
          </p>

          {/* Footer */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {artikel.tags.slice(0, 3).map((tag) => (
                <span key={tag} style={{
                  fontFamily: "'Roboto Mono', monospace", fontSize: "0.6rem",
                  letterSpacing: "0.06em",
                  background: "rgba(0,0,0,0.05)", color: "#666",
                  border: "1px solid rgba(0,0,0,0.08)", borderRadius: "3px", padding: "2px 8px",
                }}>
                  {tag}
                </span>
              ))}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              {artikel.deadline && <DeadlineCountdown deadline={artikel.deadline} />}
              <span style={{
                fontFamily: "'Roboto Mono', monospace", fontSize: "0.72rem",
                color: hovered ? kat.accent : "#aaa",
                letterSpacing: "0.04em", transition: "color 0.2s",
                fontWeight: hovered ? 600 : 400,
              }}>
                Lesen →
              </span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

// ── Filter Tab ─────────────────────────────────────────────────────────────────
function FilterTab({ label, active, onClick, accentColor }: {
  label: string; active: boolean; onClick: () => void; accentColor: string;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "'Roboto Mono', monospace", fontSize: "0.68rem",
        letterSpacing: "0.1em", textTransform: "uppercase",
        padding: "6px 14px", borderRadius: "5px",
        border: active ? `1px solid ${accentColor}80` : "1px solid rgba(0,0,0,0.12)",
        background: active ? `${accentColor}15` : hovered ? "rgba(0,0,0,0.04)" : "transparent",
        color: active ? accentColor : hovered ? "#333" : "#888",
        cursor: "pointer", transition: "all 0.15s ease", fontWeight: active ? 700 : 400,
      }}
    >
      {active && <span style={{ marginRight: "5px", fontSize: "0.5rem" }}>●</span>}
      {label}
    </button>
  );
}

// ── Main Export ────────────────────────────────────────────────────────────────
export default function AktuellClient({ articles }: { articles: Artikel[] }) {
  const [aktiveKategorie, setAktiveKategorie] = useState<ArtikelKategorie | null>(null);
  const [filterSticky, setFilterSticky] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  // Sticky-Filter-Erkennung via IntersectionObserver
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => setFilterSticky(!entry.isIntersecting),
      { threshold: 0, rootMargin: "-57px 0px 0px 0px" }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  const gefiltert = aktiveKategorie
    ? articles.filter((a) => a.category === aktiveKategorie)
    : articles;

  return (
    <div style={{ padding: "0 0 5rem", background: "var(--off-white)" }}>
      {/* Sentinel für Sticky-Erkennung */}
      <div ref={sentinelRef} style={{ height: "1px", marginTop: "2.5rem" }} />

      {/* Sticky Filter-Bar */}
      <div style={{
        position: "sticky",
        top: "56px",
        zIndex: 50,
        padding: filterSticky ? "0.75rem 8vw" : "0 8vw 2.5rem",
        background: filterSticky ? "rgba(248,249,250,0.94)" : "transparent",
        backdropFilter: filterSticky ? "blur(16px)" : "none",
        WebkitBackdropFilter: filterSticky ? "blur(16px)" : "none",
        borderBottom: filterSticky ? "1px solid rgba(0,0,0,0.07)" : "1px solid transparent",
        transition: "background 0.3s, padding 0.3s, border-color 0.3s",
        boxShadow: filterSticky ? "0 2px 16px rgba(0,0,0,0.06)" : "none",
      }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
          <FilterTab label="Alle" active={aktiveKategorie === null} onClick={() => setAktiveKategorie(null)} accentColor="#27AE60" />
          {ALLE_KATEGORIEN.map((kat) => (
            <FilterTab key={kat} label={kat} active={aktiveKategorie === kat} onClick={() => setAktiveKategorie(kat)} accentColor={KATEGORIE[kat].accent} />
          ))}
          <span style={{
            marginLeft: "auto",
            fontFamily: "'Roboto Mono', monospace", fontSize: "0.65rem",
            letterSpacing: "0.1em", color: "#bbb",
          }}>
            {gefiltert.length} Beiträge
          </span>
        </div>
      </div>

      {/* Artikel-Grid */}
      <div style={{ padding: "0 8vw" }}>
        {gefiltert.length === 0 ? (
          <p style={{
            fontFamily: "'Open Sans', sans-serif", color: "#aaa",
            fontStyle: "italic", textAlign: "center", padding: "4rem 0",
          }}>
            Keine Beiträge in dieser Kategorie.
          </p>
        ) : (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 520px), 1fr))",
            gap: "1rem",
          }}>
            {gefiltert.map((artikel) => (
              <ArtikelKarte key={artikel.id} artikel={artikel} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
