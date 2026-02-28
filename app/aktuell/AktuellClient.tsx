"use client";

import { useState, useEffect } from "react";
import type { Artikel, ArtikelKategorie } from "@/lib/types";

const KATEGORIE_FARBEN: Record<ArtikelKategorie, { bg: string; text: string; border: string }> = {
  "Förderaufruf": { bg: "rgba(39,174,96,0.1)",   text: "#1E8449", border: "rgba(39,174,96,0.3)" },
  "CSRD-News":    { bg: "rgba(30,132,255,0.08)",  text: "#1a6fcc", border: "rgba(30,132,255,0.2)" },
  "Marktinfo":    { bg: "rgba(245,166,35,0.1)",   text: "#b8670a", border: "rgba(245,166,35,0.3)" },
  "Erfolg":       { bg: "rgba(46,204,113,0.12)",  text: "#1E8449", border: "rgba(46,204,113,0.35)" },
};

const ALLE_KATEGORIEN: ArtikelKategorie[] = ["Förderaufruf", "CSRD-News", "Marktinfo", "Erfolg"];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("de-DE", { day: "2-digit", month: "long", year: "numeric" });
}

function DeadlineCountdown({ deadline }: { deadline: string }) {
  const [label, setLabel] = useState<string | null>(null);
  const [urgent, setUrgent] = useState(false);

  useEffect(() => {
    const diff = new Date(deadline).getTime() - Date.now();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    if (days < 0) { setLabel("Abgelaufen"); setUrgent(false); }
    else if (days === 0) { setLabel("Heute!"); setUrgent(true); }
    else if (days === 1) { setLabel("Morgen!"); setUrgent(true); }
    else { setLabel(`Noch ${days} Tage`); setUrgent(days <= 14); }
  }, [deadline]);

  if (!label) return null;

  return (
    <span
      style={{
        fontFamily: "'Roboto Mono', monospace",
        fontSize: "0.7rem",
        letterSpacing: "0.05em",
        background: urgent ? "rgba(231,76,60,0.1)" : "rgba(39,174,96,0.1)",
        color: urgent ? "#c0392b" : "#1E8449",
        border: `1px solid ${urgent ? "rgba(231,76,60,0.3)" : "rgba(39,174,96,0.3)"}`,
        borderRadius: "4px",
        padding: "2px 8px",
      }}
    >
      ⏱ {label}
    </span>
  );
}

function ArtikelKarte({ artikel }: { artikel: Artikel }) {
  const [hovered, setHovered] = useState(false);
  const farbe = KATEGORIE_FARBEN[artikel.category];

  return (
    <a
      href={`/aktuell/${artikel.slug}`}
      style={{ textDecoration: "none" }}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: "white",
          border: `1px solid ${hovered ? "rgba(39,174,96,0.35)" : "var(--border)"}`,
          borderRadius: "12px",
          padding: "1.75rem 2rem",
          cursor: "pointer",
          transition: "transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease",
          transform: hovered ? "translateY(-3px)" : "translateY(0)",
          boxShadow: hovered ? "var(--shadow-md)" : "var(--shadow-sm)",
        }}
      >
        {/* Header row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.9rem", flexWrap: "wrap", gap: "0.5rem" }}>
          <span
            style={{
              fontFamily: "'Roboto Mono', monospace",
              fontSize: "0.68rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              background: farbe.bg,
              color: farbe.text,
              border: `1px solid ${farbe.border}`,
              borderRadius: "4px",
              padding: "3px 10px",
            }}
          >
            {artikel.category}
          </span>
          <span
            style={{
              fontFamily: "'Roboto Mono', monospace",
              fontSize: "0.7rem",
              color: "var(--grey-mid)",
            }}
          >
            {formatDate(artikel.date)}
          </span>
        </div>

        {/* Title */}
        <h2
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "var(--navy)",
            lineHeight: 1.3,
            marginBottom: "0.75rem",
          }}
        >
          {artikel.title}
        </h2>

        {/* Teaser */}
        <p
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "0.9rem",
            color: "#555",
            lineHeight: 1.65,
            marginBottom: "1.2rem",
          }}
        >
          {artikel.teaser}
        </p>

        {/* Footer row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
          {/* Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {artikel.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: "0.65rem",
                  background: "var(--grey-subtle)",
                  color: "var(--grey-mid)",
                  border: "1px solid var(--border)",
                  borderRadius: "4px",
                  padding: "2px 8px",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Deadline oder Weiterlesen */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            {artikel.deadline && <DeadlineCountdown deadline={artikel.deadline} />}
            <span
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: "0.75rem",
                color: "var(--verde-dark)",
                letterSpacing: "0.02em",
              }}
            >
              Weiterlesen →
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}

export default function AktuellClient({ articles }: { articles: Artikel[] }) {
  const [aktiveKategorie, setAktiveKategorie] = useState<ArtikelKategorie | null>(null);

  const gefiltert = aktiveKategorie
    ? articles.filter((a) => a.category === aktiveKategorie)
    : articles;

  return (
    <div style={{ padding: "3.5rem 8vw 5rem" }}>
      {/* Filter Tabs */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "2.5rem" }}>
        {[null, ...ALLE_KATEGORIEN].map((kat) => {
          const isActive = aktiveKategorie === kat;
          return (
            <button
              key={kat ?? "alle"}
              onClick={() => setAktiveKategorie(kat)}
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: "0.72rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "6px 16px",
                borderRadius: "6px",
                border: `1px solid ${isActive ? "var(--verde)" : "var(--border)"}`,
                background: isActive ? "var(--verde)" : "white",
                color: isActive ? "white" : "var(--navy)",
                cursor: "pointer",
                transition: "all 0.15s ease",
              }}
            >
              {kat ?? "Alle"}
            </button>
          );
        })}

        {/* Artikel-Anzahl */}
        <span
          style={{
            fontFamily: "'Roboto Mono', monospace",
            fontSize: "0.7rem",
            color: "var(--grey-mid)",
            marginLeft: "auto",
            alignSelf: "center",
          }}
        >
          {gefiltert.length} {gefiltert.length === 1 ? "Artikel" : "Artikel"}
        </span>
      </div>

      {/* Artikel-Grid */}
      {gefiltert.length === 0 ? (
        <p style={{ fontFamily: "'Open Sans', sans-serif", color: "var(--grey-mid)", fontStyle: "italic", textAlign: "center", padding: "4rem 0" }}>
          Keine Artikel in dieser Kategorie.
        </p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 520px), 1fr))",
            gap: "1.25rem",
          }}
        >
          {gefiltert.map((artikel) => (
            <ArtikelKarte key={artikel.id} artikel={artikel} />
          ))}
        </div>
      )}
    </div>
  );
}
