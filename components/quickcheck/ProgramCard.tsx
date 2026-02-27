"use client";

import type { FoerderprogrammResult } from "@/lib/types";

interface Props {
  program: FoerderprogrammResult;
  index: number;
}

export default function ProgramCard({ program, index }: Props) {
  const staggerClass = `stagger-${Math.min(index + 1, 8)}`;

  return (
    <div className={`program-card p-6 ${staggerClass}`}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", marginBottom: "1rem" }}>
        <div>
          <div style={{ display: "flex", gap: "6px", marginBottom: "6px", flexWrap: "wrap" }}>
            <span className="tag tag-authority">{program.authority}</span>
            <span className={`tag ${program.confidence === "Verifiziert" ? "tag-verified" : "tag-check"}`}>
              {program.confidence === "Verifiziert" ? "✓ Verifiziert" : "⚠ Bitte prüfen"}
            </span>
          </div>
          <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1rem", fontWeight: 700, color: "white", lineHeight: 1.3 }}>
            {program.name}
          </h3>
        </div>
        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.05rem", fontWeight: 800, color: "var(--verde-bright)", whiteSpace: "nowrap" }}>
            {program.estimated_funding}
          </div>
          <div style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.68rem", color: "rgba(255,255,255,0.5)", marginTop: "2px" }}>
            {program.aid_intensity}
          </div>
        </div>
      </div>

      <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.65, marginBottom: "1.25rem" }}>
        {program.why_match}
      </p>

      <div className="divider" style={{ marginBottom: "1.25rem" }} />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
        <div>
          <div style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.62rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>
            Voraussetzungen
          </div>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {program.key_requirements.map((req, i) => (
              <li key={i} style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.7)", display: "flex", gap: "8px", alignItems: "flex-start", marginBottom: "5px", lineHeight: 1.45 }}>
                <span style={{ color: "var(--verde-bright)", flexShrink: 0, marginTop: "2px", fontWeight: 700 }}>·</span>
                {req}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.62rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>
            Nächste Schritte
          </div>
          <ol style={{ listStyle: "none", padding: 0 }}>
            {program.next_steps.map((step, i) => (
              <li key={i} style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.7)", display: "flex", gap: "8px", alignItems: "flex-start", marginBottom: "5px", lineHeight: 1.45 }}>
                <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.62rem", color: "var(--verde-bright)", flexShrink: 0, marginTop: "3px", fontWeight: 500 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>

      {program.source_url && (
        <div style={{ marginTop: "1.25rem", paddingTop: "1rem", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <a
            href={program.source_url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.68rem", color: "rgba(255,255,255,0.4)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "4px", transition: "color 0.15s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--verde-bright)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
          >
            ↗ {program.source_url.replace(/^https?:\/\//, "")}
          </a>
        </div>
      )}
    </div>
  );
}
