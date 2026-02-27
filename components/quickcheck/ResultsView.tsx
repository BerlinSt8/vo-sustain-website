"use client";

import type { QuickCheckResult, QuickCheckInput } from "@/lib/types";
import ProgramCard from "./ProgramCard";

interface Props {
  result: QuickCheckResult;
  input: QuickCheckInput;
  onReset: () => void;
}

const RECOMMENDATION_CONFIG = {
  GO: {
    label: "GO",
    badgeClass: "badge-go",
    icon: "↑",
    description: "Förderung empfohlen",
    accentColor: "var(--verde)",
  },
  "NO-GO": {
    label: "NO-GO",
    badgeClass: "badge-nogo",
    icon: "✕",
    description: "Kein passendes Programm",
    accentColor: "#e57373",
  },
  CONDITIONAL: {
    label: "BEDINGT",
    badgeClass: "badge-conditional",
    icon: "◐",
    description: "Prüfung erforderlich",
    accentColor: "#f5a623",
  },
};

export default function ResultsView({ result, input, onReset }: Props) {
  const config = RECOMMENDATION_CONFIG[result.recommendation];

  return (
    <div className="animate-fade-in" style={{ padding: "2rem 0" }}>
      {/* Header */}
      <div className="stagger-1" style={{ marginBottom: "2rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "1rem", flexWrap: "wrap" }}>
          <div
            className={config.badgeClass}
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 22px", borderRadius: "5px", fontFamily: "'Montserrat', sans-serif", fontSize: "0.95rem", fontWeight: 800, letterSpacing: "0.1em" }}
          >
            <span>{config.icon}</span>
            {config.label}
          </div>
          <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.7rem", color: "rgba(255,255,255,0.5)", letterSpacing: "0.04em" }}>
            {config.description}
            {result.matching_programs.length > 0 && ` · ${result.matching_programs.length} Programm${result.matching_programs.length !== 1 ? "e" : ""} identifiziert`}
          </span>
        </div>

        <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(1.4rem, 3vw, 1.9rem)", fontWeight: 800, color: "white", lineHeight: 1.2, marginBottom: "1rem" }}>
          {input.unternehmensname}
          <span style={{ fontWeight: 300, color: "rgba(255,255,255,0.4)", fontSize: "0.7em" }}> · {input.bundesland}</span>
        </h2>

        <div style={{ background: "rgba(255,255,255,0.04)", borderLeft: `3px solid ${config.accentColor}`, borderRadius: "4px", padding: "1.25rem 1.5rem" }}>
          <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.7 }}>
            {result.summary}
          </p>
        </div>
      </div>

      {/* Red Flags */}
      {result.red_flags.length > 0 && (
        <div className="stagger-2" style={{ background: "rgba(245,166,35,0.08)", border: "1px solid rgba(245,166,35,0.25)", borderRadius: "var(--radius)", padding: "1.25rem 1.5rem", marginBottom: "1.5rem" }}>
          <div style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.62rem", color: "#f5a623", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "10px", fontWeight: 500 }}>
            ⚠ Risiken & Hinweise
          </div>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {result.red_flags.map((flag, i) => (
              <li key={i} style={{ fontSize: "0.875rem", color: "rgba(255,200,100,0.85)", display: "flex", gap: "8px", alignItems: "flex-start", marginBottom: i < result.red_flags.length - 1 ? "6px" : 0, lineHeight: 1.5 }}>
                <span style={{ color: "#f5a623", flexShrink: 0 }}>—</span>
                {flag}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Programs */}
      {result.matching_programs.length > 0 && (
        <>
          <div className="stagger-3" style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1rem" }}>
            <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.62rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
              Passende Programme
            </span>
            <div className="divider" style={{ flex: 1 }} />
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.8rem", fontWeight: 800, color: "var(--verde-bright)" }}>
              {result.matching_programs.length}
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {result.matching_programs.map((program, i) => (
              <ProgramCard key={i} program={program} index={i + 3} />
            ))}
          </div>
        </>
      )}

      {/* Recommended Package */}
      {result.recommended_vo_package && (
        <div className="stagger-7" style={{ marginTop: "2rem", background: "var(--verde)", borderRadius: "var(--radius)", padding: "1.5rem 2rem" }}>
          <div style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.62rem", color: "rgba(255,255,255,0.6)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "6px" }}>
            Empfohlenes VO Sustain Angebot
          </div>
          <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1rem", fontWeight: 700, color: "white", lineHeight: 1.4 }}>
            {result.recommended_vo_package}
          </div>
        </div>
      )}

      {/* Disclaimer */}
      <p className="stagger-8" style={{ marginTop: "2rem", fontSize: "0.72rem", color: "rgba(255,255,255,0.3)", lineHeight: 1.65, fontFamily: "'Open Sans', sans-serif", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "1.5rem" }}>
        {result.disclaimer}
      </p>

      {/* Reset */}
      <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
        <button
          onClick={onReset}
          style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "0.85rem", fontWeight: 600, color: "rgba(255,255,255,0.6)", background: "transparent", border: "1px solid rgba(255,255,255,0.2)", padding: "0.6rem 1.5rem", borderRadius: "var(--radius)", cursor: "pointer", transition: "all 0.2s" }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--verde)"; e.currentTarget.style.color = "var(--verde-bright)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}
        >
          ← Neue Anfrage
        </button>
      </div>
    </div>
  );
}
