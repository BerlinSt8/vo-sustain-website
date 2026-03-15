"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

interface Programm {
  id: string;
  name: string;
  authority: string;
  level: string;
  state: string | null;
  focus: string[];
  target: string;
  fundingType: string;
  aidIntensity: string;
  maxAmount: string | null;
  minInvestment: string | null;
  sourceUrl: string;
  confidence: string;
  notes: string | null;
}

type Filter = "alle" | "bund" | "land" | "eu";

const LEVEL_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  bund: { bg: "rgba(39, 174, 96, 0.12)", text: "#27AE60", border: "rgba(39, 174, 96, 0.3)" },
  land: { bg: "rgba(100, 181, 246, 0.12)", text: "#64b5f6", border: "rgba(100, 181, 246, 0.3)" },
  eu: { bg: "rgba(245, 166, 35, 0.12)", text: "#f5a623", border: "rgba(245, 166, 35, 0.3)" },
};

const LEVEL_LABELS: Record<string, string> = {
  bund: "Bund",
  land: "Land",
  eu: "EU",
};

function LevelBadge({ level }: { level: string }) {
  const colors = LEVEL_COLORS[level] || LEVEL_COLORS.bund;
  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 10px",
        borderRadius: "4px",
        fontSize: "0.7rem",
        fontFamily: "'Roboto Mono', monospace",
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.05em",
        background: colors.bg,
        color: colors.text,
        border: `1px solid ${colors.border}`,
      }}
    >
      {LEVEL_LABELS[level] || level}
    </span>
  );
}

export default function FoerderprogrammeHub({ programme }: { programme: Programm[] }) {
  const [filter, setFilter] = useState<Filter>("alle");

  const counts = useMemo(() => {
    const c = { bund: 0, land: 0, eu: 0 };
    programme.forEach((p) => {
      if (p.level in c) c[p.level as keyof typeof c]++;
    });
    return c;
  }, [programme]);

  const filtered = useMemo(() => {
    if (filter === "alle") return programme;
    return programme.filter((p) => p.level === filter);
  }, [programme, filter]);

  const filters: { key: Filter; label: string; count?: number }[] = [
    { key: "alle", label: "Alle", count: programme.length },
    { key: "bund", label: "Bund", count: counts.bund },
    { key: "land", label: "Land", count: counts.land },
    { key: "eu", label: "EU", count: counts.eu },
  ];

  return (
    <main style={{ background: "#0B1622", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{
          paddingTop: "140px",
          paddingBottom: "48px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "'Roboto Mono', monospace",
            fontSize: "0.75rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#27AE60",
            marginBottom: "16px",
          }}
        >
          Förderprogramme
        </p>
        <h1
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            color: "#F0F2F4",
            margin: "0 auto 16px",
            maxWidth: "700px",
            lineHeight: 1.15,
          }}
        >
          {programme.length} Förderprogramme für deutsche KMU.
        </h1>
        <p
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "1.05rem",
            color: "#8E9BAA",
            maxWidth: "560px",
            margin: "0 auto",
            lineHeight: 1.6,
          }}
        >
          Bund, Land und EU — alle relevanten Zuschüsse, Darlehen und
          Förderwettbewerbe auf einen Blick.
        </p>
      </section>

      {/* Filters */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          padding: "0 24px 40px",
          flexWrap: "wrap",
        }}
      >
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "0.85rem",
              fontWeight: 600,
              padding: "8px 20px",
              borderRadius: "6px",
              border:
                filter === f.key
                  ? "1px solid #27AE60"
                  : "1px solid rgba(255,255,255,0.12)",
              background:
                filter === f.key ? "rgba(39,174,96,0.15)" : "rgba(255,255,255,0.04)",
              color: filter === f.key ? "#2ECC71" : "#C8D0D8",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            {f.label} ({f.count})
          </button>
        ))}
      </div>

      {/* Programme Grid */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 24px 80px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 500px), 1fr))",
          gap: "16px",
        }}
      >
        {filtered.map((p) => (
          <Link
            key={p.id}
            href={`/foerderprogramme/${p.id}`}
            style={{ textDecoration: "none" }}
          >
            <article
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "10px",
                padding: "20px 24px",
                background: "rgba(255,255,255,0.02)",
                transition: "border-color 0.2s ease, background 0.2s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(39,174,96,0.4)";
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.background = "rgba(255,255,255,0.02)";
              }}
            >
              {/* Top row: Level badge + Authority */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "10px",
                }}
              >
                <LevelBadge level={p.level} />
                <span
                  style={{
                    fontFamily: "'Roboto Mono', monospace",
                    fontSize: "0.72rem",
                    color: "#5A6470",
                  }}
                >
                  {p.authority}
                </span>
                {p.state && (
                  <span
                    style={{
                      fontFamily: "'Roboto Mono', monospace",
                      fontSize: "0.72rem",
                      color: "#5A6470",
                    }}
                  >
                    · {p.state}
                  </span>
                )}
              </div>

              {/* Name */}
              <h2
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  color: "#F0F2F4",
                  margin: "0 0 10px",
                  lineHeight: 1.35,
                }}
              >
                {p.name}
              </h2>

              {/* Focus Tags */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "6px",
                  marginBottom: "12px",
                }}
              >
                {p.focus.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: "0.68rem",
                      padding: "2px 8px",
                      borderRadius: "3px",
                      background: "rgba(255,255,255,0.06)",
                      color: "#8E9BAA",
                    }}
                  >
                    {tag}
                  </span>
                ))}
                {p.focus.length > 4 && (
                  <span
                    style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: "0.68rem",
                      padding: "2px 8px",
                      borderRadius: "3px",
                      background: "rgba(255,255,255,0.06)",
                      color: "#5A6470",
                    }}
                  >
                    +{p.focus.length - 4}
                  </span>
                )}
              </div>

              {/* Bottom: Funding type + intensity */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "0.78rem",
                    color: "#C8D0D8",
                  }}
                >
                  {p.fundingType}
                </span>
                <span
                  style={{
                    fontFamily: "'Roboto Mono', monospace",
                    fontSize: "0.75rem",
                    color: "#27AE60",
                    fontWeight: 600,
                  }}
                >
                  {p.aidIntensity}
                </span>
              </div>
            </article>
          </Link>
        ))}
      </section>

      {/* CTA */}
      <section
        style={{
          textAlign: "center",
          padding: "0 24px 100px",
        }}
      >
        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            padding: "40px",
            border: "1px solid rgba(39,174,96,0.2)",
            borderRadius: "12px",
            background: "rgba(39,174,96,0.04)",
          }}
        >
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: "1.3rem",
              color: "#F0F2F4",
              marginBottom: "12px",
            }}
          >
            Welches Programm passt zu Ihrem Vorhaben?
          </h2>
          <p
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "0.95rem",
              color: "#8E9BAA",
              marginBottom: "24px",
              lineHeight: 1.6,
            }}
          >
            Unser Quick-Check analysiert Ihr Projekt und findet die passenden
            Förderprogramme — in unter 2 Minuten.
          </p>
          <Link
            href="/#quickcheck"
            style={{
              display: "inline-block",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: "0.9rem",
              padding: "14px 32px",
              borderRadius: "8px",
              background: "#27AE60",
              color: "#fff",
              textDecoration: "none",
              transition: "background 0.2s ease",
            }}
          >
            Mein Förderpotenzial entdecken
          </Link>
        </div>
      </section>
    </main>
  );
}
