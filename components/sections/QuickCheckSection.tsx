"use client";

import { useState } from "react";
import QuickCheckForm from "@/components/quickcheck/QuickCheckForm";
import ResultsView from "@/components/quickcheck/ResultsView";
import type { QuickCheckInput, QuickCheckResult, FoerderdatenbankResponse } from "@/lib/types";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function QuickCheckSection() {
  const { t } = useLanguage();
  const [result, setResult] = useState<QuickCheckResult | null>(null);
  const [input, setInput] = useState<QuickCheckInput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fdbResults, setFdbResults] = useState<FoerderdatenbankResponse | null>(null);
  const [fdbLoading, setFdbLoading] = useState(false);

  const handleSubmit = async (data: QuickCheckInput) => {
    setIsLoading(true);
    setError(null);
    setInput(data);
    setFdbResults(null);

    try {
      const res = await fetch("/api/quick-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Analyse fehlgeschlagen");
      const json: QuickCheckResult = await res.json();
      setResult(json);

      // Förderdatenbank.de async nachladen
      setFdbLoading(true);
      fetch("/api/foerderdatenbank", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bundesland: data.bundesland }),
      })
        .then((r) => r.json())
        .then((fdb: FoerderdatenbankResponse) => setFdbResults(fdb))
        .catch(() => setFdbResults({ results: [], searchUrl: "", error: "Nicht verfügbar" }))
        .finally(() => setFdbLoading(false));
    } catch {
      setError(t.quickCheck.error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setResult(null);
    setInput(null);
    setError(null);
    setFdbResults(null);
    setFdbLoading(false);
  };

  return (
    <section
      id="quick-check"
      style={{ background: "var(--navy-muted)", padding: "6rem 8vw" }}
    >
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        {/* Header – nur sichtbar wenn kein Ergebnis */}
        {!result && (
          <div style={{ marginBottom: "3rem" }}>
            <div style={{ marginBottom: "1.25rem" }}>
              <span style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.18em",
                color: "var(--verde-bright)",
                textTransform: "uppercase",
              }}>
                {t.quickCheck.label}
              </span>
            </div>
            <h2 style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 900,
              color: "white",
              lineHeight: 1.05,
              marginBottom: "1rem",
            }}>
              {t.quickCheck.headline1}<br />{t.quickCheck.headline2}
            </h2>
            <p style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "1rem",
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.7,
              maxWidth: "500px",
            }}>
              {t.quickCheck.body}
            </p>
          </div>
        )}

        {/* Error */}
        {error && (
          <div style={{
            background: "rgba(198,40,40,0.1)",
            border: "1px solid rgba(229,115,115,0.3)",
            borderRadius: "var(--radius)",
            padding: "1rem 1.5rem",
            marginBottom: "1.5rem",
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "0.875rem",
            color: "#ef5350",
          }}>
            {error}
          </div>
        )}

        {/* Loading */}
        {isLoading && (
          <div style={{
            textAlign: "center",
            padding: "4rem 2rem",
            background: "rgba(255,255,255,0.03)",
            borderRadius: "var(--radius)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}>
            <div className="spinner" style={{ width: "36px", height: "36px", margin: "0 auto 1.5rem" }} />
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1rem", fontWeight: 700, color: "white", marginBottom: "0.5rem" }}>
              {t.quickCheck.loading}
            </p>
            <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.45)" }}>
              {t.quickCheck.loadingSub}
            </p>
          </div>
        )}

        {/* Form */}
        {!isLoading && !result && (
          <div style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "var(--radius)",
            padding: "2.5rem",
          }}>
            <QuickCheckForm onSubmit={handleSubmit} isLoading={isLoading} />
          </div>
        )}

        {/* Results */}
        {!isLoading && result && input && (
          <ResultsView
            result={result}
            input={input}
            onReset={handleReset}
            fdbResults={fdbResults}
            fdbLoading={fdbLoading}
          />
        )}
      </div>
    </section>
  );
}
