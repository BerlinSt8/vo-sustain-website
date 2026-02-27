"use client";

import { useState } from "react";
import QuickCheckForm from "@/components/quickcheck/QuickCheckForm";
import ResultsView from "@/components/quickcheck/ResultsView";
import type { QuickCheckInput, QuickCheckResult } from "@/lib/types";

export default function QuickCheckSection() {
  const [result, setResult] = useState<QuickCheckResult | null>(null);
  const [input, setInput] = useState<QuickCheckInput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (data: QuickCheckInput) => {
    setIsLoading(true);
    setError(null);
    setInput(data);

    try {
      const res = await fetch("/api/quick-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Analyse fehlgeschlagen");
      const json: QuickCheckResult = await res.json();
      setResult(json);
    } catch {
      setError("Die Analyse konnte nicht abgeschlossen werden. Bitte versuche es erneut.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setResult(null);
    setInput(null);
    setError(null);
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
                Kostenloser Schnellcheck
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
              Ihr Förderpotenzial<br />in 3 Minuten.
            </h2>
            <p style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "1rem",
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.7,
              maxWidth: "500px",
            }}>
              Finden Sie in 3 Minuten Ihre Förderprogramme. Präzise, kostenlos.
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
              Analyse läuft…
            </p>
            <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.45)" }}>
              Förderprogramme werden gematcht. Einen Moment.
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
          <ResultsView result={result} input={input} onReset={handleReset} />
        )}
      </div>
    </section>
  );
}
