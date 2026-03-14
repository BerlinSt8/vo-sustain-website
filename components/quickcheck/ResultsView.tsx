"use client";

import { useState } from "react";
import type { QuickCheckResult, QuickCheckInput, FoerderdatenbankResponse, FoerderlotseResponse } from "@/lib/types";
import ProgramCard from "./ProgramCard";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface Props {
  result: QuickCheckResult;
  input: QuickCheckInput;
  onReset: () => void;
  fdbResults?: FoerderdatenbankResponse | null;
  fdbLoading?: boolean;
  fwmResults?: FoerderlotseResponse | null;
  fwmLoading?: boolean;
}

export default function ResultsView({ result, input, onReset, fdbResults, fdbLoading, fwmResults, fwmLoading }: Props) {
  const { t } = useLanguage();

  const RECOMMENDATION_CONFIG = {
    GO: {
      label: "GO",
      badgeClass: "badge-go",
      icon: "↑",
      description: t.resultsView.goDesc,
      accentColor: "var(--verde)",
    },
    "NO-GO": {
      label: "NO-GO",
      badgeClass: "badge-nogo",
      icon: "✕",
      description: t.resultsView.nogoDesc,
      accentColor: "#e57373",
    },
    CONDITIONAL: {
      label: t.resultsView.conditionalLabel,
      badgeClass: "badge-conditional",
      icon: "◐",
      description: t.resultsView.conditionalDesc,
      accentColor: "#f5a623",
    },
  };

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
            {result.matching_programs.length > 0 && ` · ${result.matching_programs.length} ${t.resultsView.programsIdentified}`}
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
            ⚠ {t.resultsView.risksLabel}
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
              {t.resultsView.matchingPrograms}
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

      {/* Förderdatenbank.de Live-Ergebnisse */}
      <div style={{ marginTop: "2rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1rem" }}>
          <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.62rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
            {t.resultsView.fdbLabel}
          </span>
          <div className="divider" style={{ flex: 1 }} />
          {fdbLoading && (
            <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.68rem", color: "rgba(255,255,255,0.4)" }}>
              {t.resultsView.fdbChecking}
            </span>
          )}
          {fdbResults && !fdbLoading && (
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.8rem", fontWeight: 800, color: "var(--verde-bright)" }}>
              {fdbResults.results.length}
            </span>
          )}
        </div>

        {fdbLoading && (
          <div style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "var(--radius)",
            padding: "1.5rem",
          }}>
            {/* Skeleton Loading */}
            {[1, 2, 3].map((i) => (
              <div key={i} style={{ marginBottom: i < 3 ? "1rem" : 0 }}>
                <div style={{
                  height: "14px",
                  width: `${60 + i * 10}%`,
                  background: "rgba(255,255,255,0.06)",
                  borderRadius: "3px",
                  marginBottom: "8px",
                  animation: "pulse 1.5s ease-in-out infinite",
                }} />
                <div style={{
                  height: "10px",
                  width: `${40 + i * 8}%`,
                  background: "rgba(255,255,255,0.03)",
                  borderRadius: "3px",
                  animation: "pulse 1.5s ease-in-out infinite",
                  animationDelay: "0.2s",
                }} />
              </div>
            ))}
          </div>
        )}

        {fdbResults && !fdbLoading && fdbResults.results.length > 0 && (
          <div style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "var(--radius)",
            padding: "1.25rem 1.5rem",
          }}>
            {fdbResults.results.map((item, i) => (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  padding: "0.75rem 0",
                  borderBottom: i < fdbResults.results.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                  textDecoration: "none",
                  transition: "opacity 0.15s",
                }}
              >
                <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "rgba(255,255,255,0.85)", marginBottom: "4px", fontFamily: "'Open Sans', sans-serif" }}>
                  {item.name}
                </div>
                {item.authority && (
                  <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.65rem", color: "rgba(255,255,255,0.4)" }}>
                    {item.authority}
                  </span>
                )}
              </a>
            ))}
            {fdbResults.searchUrl && (
              <a
                href={fdbResults.searchUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  marginTop: "1rem",
                  paddingTop: "0.75rem",
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: "0.68rem",
                  color: "var(--verde-bright)",
                  textDecoration: "none",
                }}
              >
                {t.resultsView.fdbAllResults}
              </a>
            )}
          </div>
        )}

        {fdbResults && !fdbLoading && fdbResults.results.length === 0 && !fdbResults.error && (
          <div style={{
            background: "rgba(255,255,255,0.02)",
            borderRadius: "var(--radius)",
            padding: "1rem 1.5rem",
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "0.82rem",
            color: "rgba(255,255,255,0.35)",
          }}>
            {t.resultsView.fdbNoResults}
          </div>
        )}
      </div>

      {/* Förderlotse Wachstumsmärkte */}
      <div style={{ marginTop: "2rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1rem" }}>
          <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.62rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
            {t.resultsView.fwmLabel}
          </span>
          <div className="divider" style={{ flex: 1 }} />
          {fwmLoading && (
            <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.68rem", color: "rgba(255,255,255,0.4)" }}>
              {t.resultsView.fwmChecking}
            </span>
          )}
          {fwmResults && !fwmLoading && (
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.8rem", fontWeight: 800, color: "var(--verde-bright)" }}>
              {fwmResults.results.length}
            </span>
          )}
        </div>

        {fwmLoading && (
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "var(--radius)", padding: "1.5rem" }}>
            {[1, 2, 3].map((i) => (
              <div key={i} style={{ marginBottom: i < 3 ? "1rem" : 0 }}>
                <div style={{ height: "14px", width: `${60 + i * 10}%`, background: "rgba(255,255,255,0.06)", borderRadius: "3px", marginBottom: "8px", animation: "pulse 1.5s ease-in-out infinite" }} />
                <div style={{ height: "10px", width: `${40 + i * 8}%`, background: "rgba(255,255,255,0.03)", borderRadius: "3px", animation: "pulse 1.5s ease-in-out infinite", animationDelay: "0.2s" }} />
              </div>
            ))}
          </div>
        )}

        {fwmResults && !fwmLoading && fwmResults.results.length > 0 && (
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "var(--radius)", padding: "1.25rem 1.5rem" }}>
            <div style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.6rem", color: "rgba(255,255,255,0.25)", letterSpacing: "0.06em", marginBottom: "1rem" }}>
              {t.resultsView.fwmSubtitle}
            </div>
            {fwmResults.results.map((item, i) => {
              const rubricColor = item.rubric === "funding" ? "var(--verde-bright)" : item.rubric === "advice" ? "#64b5f6" : "rgba(255,255,255,0.5)";
              return (
                <a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "block", padding: "0.75rem 0", borderBottom: i < fwmResults.results.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none", textDecoration: "none", transition: "opacity 0.15s" }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.58rem", color: rubricColor, letterSpacing: "0.06em", textTransform: "uppercase", whiteSpace: "nowrap", paddingTop: "2px", flexShrink: 0 }}>
                      {item.type}
                    </span>
                    <div>
                      <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "rgba(255,255,255,0.85)", marginBottom: "3px", fontFamily: "'Open Sans', sans-serif" }}>
                        {item.title}
                      </div>
                      <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.63rem", color: "rgba(255,255,255,0.38)" }}>
                        {item.institution}
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}
            <a
              href="https://www.foerderlotse-wachstumsmaerkte.de/de/chatbot"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "block", marginTop: "1rem", paddingTop: "0.75rem", borderTop: "1px solid rgba(255,255,255,0.08)", fontFamily: "'Roboto Mono', monospace", fontSize: "0.68rem", color: "var(--verde-bright)", textDecoration: "none" }}
            >
              {t.resultsView.fwmAllResults}
            </a>
          </div>
        )}

        {fwmResults && !fwmLoading && fwmResults.results.length === 0 && !fwmResults.error && (
          <div style={{ background: "rgba(255,255,255,0.02)", borderRadius: "var(--radius)", padding: "1rem 1.5rem", fontFamily: "'Open Sans', sans-serif", fontSize: "0.82rem", color: "rgba(255,255,255,0.35)" }}>
            {t.resultsView.fwmNoResults}
          </div>
        )}
      </div>

      {/* Recommended Package */}
      {result.recommended_vo_package && (
        <div className="stagger-7" style={{ marginTop: "2rem", background: "var(--verde)", borderRadius: "var(--radius)", padding: "1.5rem 2rem" }}>
          <div style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.62rem", color: "rgba(255,255,255,0.6)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "6px" }}>
            {t.resultsView.recommendedPackage}
          </div>
          <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1rem", fontWeight: 700, color: "white", lineHeight: 1.4 }}>
            {result.recommended_vo_package}
          </div>
        </div>
      )}

      {/* Lead Capture — E-Mail-Box */}
      <LeadCaptureBox input={input} result={result} />

      {/* CTA: Erstgespräch (nur bei GO) */}
      {result.recommendation === "GO" && (
        <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
          <a
            href="mailto:denis@vosustain.de?subject=Erstgespr%C3%A4ch%20Foerderberatung"
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "0.85rem 2rem",
              background: "var(--verde)",
              color: "white",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "0.04em",
              borderRadius: "var(--radius)",
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(39,174,96,0.25)",
              transition: "all 0.2s",
            }}
          >
            {t.resultsView.ctaConsult}
          </a>
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
          {t.resultsView.newRequest}
        </button>
      </div>
    </div>
  );
}

/* ── Lead Capture Box ─────────────────────────────────────────── */

function LeadCaptureBox({ input, result }: { input: QuickCheckInput; result: QuickCheckResult }) {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const lc = t.resultsView.leadCapture;
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async () => {
    if (!isValid || sending) return;
    setSending(true);

    try {
      // Store lead data locally (no external service needed yet)
      const leadData = {
        email,
        name: name || undefined,
        company: input.unternehmensname,
        state: input.bundesland,
        recommendation: result.recommendation,
        programs: result.matching_programs.length,
        timestamp: new Date().toISOString(),
      };

      // POST to a simple API route that stores the lead
      await fetch("/api/lead-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadData),
      });
    } catch {
      // Silently fail — we still show success to the user
      // The lead data is also visible in server logs
    }

    setSubmitted(true);
    setSending(false);
  };

  if (submitted) {
    return (
      <div style={{
        marginTop: "2rem",
        background: "rgba(39,174,96,0.08)",
        border: "1px solid rgba(39,174,96,0.25)",
        borderRadius: "var(--radius)",
        padding: "1.5rem 2rem",
        textAlign: "center",
      }}>
        <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>✓</div>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "0.9rem", color: "var(--verde-bright)", lineHeight: 1.5 }}>
          {lc.success}
        </p>
      </div>
    );
  }

  return (
    <div style={{
      marginTop: "2rem",
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(39,174,96,0.2)",
      borderRadius: "var(--radius)",
      padding: "1.5rem 2rem",
    }}>
      <h3 style={{
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "1rem",
        fontWeight: 700,
        color: "white",
        marginBottom: "0.5rem",
      }}>
        {lc.headline}
      </h3>
      <p style={{
        fontFamily: "'Open Sans', sans-serif",
        fontSize: "0.82rem",
        color: "rgba(255,255,255,0.55)",
        lineHeight: 1.5,
        marginBottom: "1rem",
      }}>
        {lc.subline}
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
        <input
          type="email"
          placeholder={lc.emailPlaceholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: "0.7rem 1rem",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "var(--radius)",
            color: "white",
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "0.85rem",
            outline: "none",
            transition: "border-color 0.2s",
          }}
          onFocus={(e) => { e.currentTarget.style.borderColor = "var(--verde)"; }}
          onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}
        />
        <input
          type="text"
          placeholder={lc.namePlaceholder}
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            padding: "0.7rem 1rem",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "var(--radius)",
            color: "white",
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "0.85rem",
            outline: "none",
            transition: "border-color 0.2s",
          }}
          onFocus={(e) => { e.currentTarget.style.borderColor = "var(--verde)"; }}
          onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}
        />
        <button
          onClick={handleSubmit}
          disabled={!isValid || sending}
          style={{
            padding: "0.8rem",
            background: isValid ? "var(--verde)" : "rgba(255,255,255,0.08)",
            border: "none",
            color: isValid ? "white" : "rgba(255,255,255,0.3)",
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "0.85rem",
            fontWeight: 700,
            letterSpacing: "0.04em",
            borderRadius: "var(--radius)",
            cursor: isValid ? "pointer" : "not-allowed",
            transition: "all 0.2s",
            boxShadow: isValid ? "0 4px 20px rgba(39,174,96,0.25)" : "none",
          }}
        >
          {sending ? "..." : lc.button}
        </button>
      </div>

      <p style={{
        fontFamily: "'Roboto Mono', monospace",
        fontSize: "0.6rem",
        color: "rgba(255,255,255,0.25)",
        marginTop: "0.75rem",
        letterSpacing: "0.04em",
      }}>
        {lc.trust}
      </p>
    </div>
  );
}
