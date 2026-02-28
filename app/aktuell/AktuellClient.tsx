"use client";

import { useState, useEffect } from "react";
import type { Artikel, ArtikelKategorie } from "@/lib/types";

// Kategorie → Akzentfarbe (Linie + Glow)
const KATEGORIE: Record<ArtikelKategorie, { accent: string; glow: string; label: string }> = {
  "Förderaufruf": { accent: "#27AE60", glow: "rgba(39,174,96,0.18)",   label: "Förderaufruf" },
  "CSRD-News":    { accent: "#3498DB", glow: "rgba(52,152,219,0.15)",  label: "CSRD-News" },
  "Marktinfo":    { accent: "#E67E22", glow: "rgba(230,126,34,0.15)",  label: "Marktinfo" },
  "Erfolg":       { accent: "#2ECC71", glow: "rgba(46,204,113,0.18)", label: "Erfolg" },
};

const ALLE_KATEGORIEN: ArtikelKategorie[] = ["Förderaufruf", "CSRD-News", "Marktinfo", "Erfolg"];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("de-DE", { day: "2-digit", month: "short", year: "numeric" });
}

function DeadlineCountdown({ deadline }: { deadline: string }) {
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    const d = Math.ceil((new Date(deadline).getTime() - Date.now()) / 86400000);
    setDays(d);
  }, [deadline]);

  if (days === null) return null;

  const expired = days < 0;
  const urgent = !expired && days <= 14;

  return (
    <div style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "0.5rem",
      background: expired
        ? "rgba(255,255,255,0.04)"
        : urgent
        ? "rgba(231,76,60,0.12)"
        : "rgba(39,174,96,0.1)",
      border: `1px solid ${expired ? "rgba(255,255,255,0.1)" : urgent ? "rgba(231,76,60,0.3)" : "rgba(39,174,96,0.3)"}`,
      borderRadius: "5px",
      padding: "3px 10px",
    }}>
      <span style={{ fontSize: "0.65rem" }}>{expired ? "⏸" : urgent ? "🔴" : "⏱"}</span>
      <span style={{
        fontFamily: "'Roboto Mono', monospace",
        fontSize: "0.68rem",
        letterSpacing: "0.06em",
        color: expired ? "rgba(255,255,255,0.3)" : urgent ? "#E74C3C" : "#2ECC71",
        fontWeight: 600,
      }}>
        {expired
          ? "Abgelaufen"
          : days === 0
          ? "Heute!"
          : days === 1
          ? "Morgen!"
          : `${days} Tage`}
      </span>
    </div>
  );
}

function ArtikelKarte({ artikel, index }: { artikel: Artikel; index: number }) {
  const [hovered, setHovered] = useState(false);
  const kat = KATEGORIE[artikel.category];

  return (
    <a
      href={`/aktuell/${artikel.slug}`}
      className={`stagger-${Math.min(index + 1, 8)}`}
      style={{ textDecoration: "none", display: "block" }}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: "relative",
          background: hovered
            ? "rgba(13,27,42,0.95)"
            : "rgba(13,27,42,0.6)",
          border: `1px solid ${hovered ? kat.accent + "55" : "rgba(255,255,255,0.07)"}`,
          borderLeft: `3px solid ${hovered ? kat.accent : kat.accent + "55"}`,
          borderRadius: "10px",
          padding: "1.6rem 1.75rem",
          cursor: "pointer",
          transition: "all 0.2s ease",
          boxShadow: hovered
            ? `0 8px 32px ${kat.glow}, 0 0 0 1px ${kat.accent}22`
            : "0 2px 8px rgba(0,0,0,0.2)",
          transform: hovered ? "translateY(-2px)" : "translateY(0)",
        }}
      >
        {/* Header: Kategorie + Datum */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "1rem",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}>
          <span style={{
            fontFamily: "'Roboto Mono', monospace",
            fontSize: "0.62rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: kat.accent,
            fontWeight: 600,
          }}>
            ▸ {kat.label}
          </span>
          <span style={{
            fontFamily: "'Roboto Mono', monospace",
            fontSize: "0.65rem",
            color: "rgba(255,255,255,0.3)",
            letterSpacing: "0.04em",
          }}>
            {formatDate(artikel.date)}
          </span>
        </div>

        {/* Titel */}
        <h2 style={{
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 800,
          fontSize: "clamp(1rem, 2vw, 1.18rem)",
          color: hovered ? "white" : "rgba(255,255,255,0.9)",
          lineHeight: 1.35,
          marginBottom: "0.8rem",
          transition: "color 0.2s",
        }}>
          {artikel.title}
        </h2>

        {/* Teaser */}
        <p style={{
          fontFamily: "'Open Sans', sans-serif",
          fontSize: "0.88rem",
          color: "rgba(255,255,255,0.5)",
          lineHeight: 1.7,
          marginBottom: "1.25rem",
        }}>
          {artikel.teaser}
        </p>

        {/* Footer: Tags + Deadline + Weiterlesen */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}>
          {/* Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {artikel.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.06em",
                  background: "rgba(255,255,255,0.05)",
                  color: "rgba(255,255,255,0.35)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "3px",
                  padding: "2px 8px",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Rechts: Deadline + Weiterlesen */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            {artikel.deadline && <DeadlineCountdown deadline={artikel.deadline} />}
            <span style={{
              fontFamily: "'Roboto Mono', monospace",
              fontSize: "0.72rem",
              color: hovered ? kat.accent : "rgba(255,255,255,0.3)",
              letterSpacing: "0.04em",
              transition: "color 0.2s",
            }}>
              Lesen →
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}

function FilterTab({
  label,
  active,
  onClick,
  accentColor,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  accentColor: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "'Roboto Mono', monospace",
        fontSize: "0.68rem",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        padding: "6px 14px",
        borderRadius: "5px",
        border: active
          ? `1px solid ${accentColor}80`
          : "1px solid rgba(255,255,255,0.08)",
        background: active
          ? `${accentColor}18`
          : hovered
          ? "rgba(255,255,255,0.04)"
          : "transparent",
        color: active
          ? accentColor
          : hovered
          ? "rgba(255,255,255,0.7)"
          : "rgba(255,255,255,0.35)",
        cursor: "pointer",
        transition: "all 0.15s ease",
        fontWeight: active ? 600 : 400,
      }}
    >
      {active && <span style={{ marginRight: "5px", fontSize: "0.5rem" }}>●</span>}
      {label}
    </button>
  );
}

export default function AktuellClient({ articles }: { articles: Artikel[] }) {
  const [aktiveKategorie, setAktiveKategorie] = useState<ArtikelKategorie | null>(null);

  const gefiltert = aktiveKategorie
    ? articles.filter((a) => a.category === aktiveKategorie)
    : articles;

  return (
    <div style={{ padding: "3.5rem 8vw 5rem" }}>

      {/* Filter-Leiste */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "8px",
        marginBottom: "2.75rem",
        alignItems: "center",
      }}>
        <FilterTab
          label="Alle"
          active={aktiveKategorie === null}
          onClick={() => setAktiveKategorie(null)}
          accentColor="#27AE60"
        />
        {ALLE_KATEGORIEN.map((kat) => (
          <FilterTab
            key={kat}
            label={kat}
            active={aktiveKategorie === kat}
            onClick={() => setAktiveKategorie(kat)}
            accentColor={KATEGORIE[kat].accent}
          />
        ))}
        <span style={{
          marginLeft: "auto",
          fontFamily: "'Roboto Mono', monospace",
          fontSize: "0.65rem",
          letterSpacing: "0.1em",
          color: "rgba(255,255,255,0.25)",
        }}>
          {gefiltert.length} Beiträge
        </span>
      </div>

      {/* Grid */}
      {gefiltert.length === 0 ? (
        <p style={{
          fontFamily: "'Open Sans', sans-serif",
          color: "rgba(255,255,255,0.3)",
          fontStyle: "italic",
          textAlign: "center",
          padding: "4rem 0",
        }}>
          Keine Beiträge in dieser Kategorie.
        </p>
      ) : (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 520px), 1fr))",
          gap: "1rem",
        }}>
          {gefiltert.map((artikel, i) => (
            <ArtikelKarte key={artikel.id} artikel={artikel} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
