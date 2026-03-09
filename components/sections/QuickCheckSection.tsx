"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import QuickCheckForm from "@/components/quickcheck/QuickCheckForm";
import ResultsView from "@/components/quickcheck/ResultsView";
import FloatingOrbs from "@/components/ui/FloatingOrbs";
import type { QuickCheckInput, QuickCheckResult, FoerderdatenbankResponse, FoerderlotseResponse } from "@/lib/types";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function QuickCheckSection() {
  const { t } = useLanguage();
  const [result, setResult] = useState<QuickCheckResult | null>(null);
  const [input, setInput] = useState<QuickCheckInput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fdbResults, setFdbResults] = useState<FoerderdatenbankResponse | null>(null);
  const [fdbLoading, setFdbLoading] = useState(false);
  const [fwmResults, setFwmResults] = useState<FoerderlotseResponse | null>(null);
  const [fwmLoading, setFwmLoading] = useState(false);

  const handleSubmit = async (data: QuickCheckInput) => {
    setIsLoading(true);
    setError(null);
    setInput(data);
    setFdbResults(null);
    setFwmResults(null);

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

      // Förderlotse Wachstumsmärkte async nachladen
      setFwmLoading(true);
      fetch("/api/foerderlotse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ branche: data.branche, projektkategorien: data.projektkategorien }),
      })
        .then((r) => r.json())
        .then((fwm: FoerderlotseResponse) => setFwmResults(fwm))
        .catch(() => setFwmResults({ results: [], error: "Nicht verfügbar" }))
        .finally(() => setFwmLoading(false));
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
    setFwmResults(null);
    setFwmLoading(false);
  };

  return (
    <section
      id="quick-check"
      style={{ background: "var(--navy-muted)", padding: "6rem 8vw", position: "relative", overflow: "hidden" }}
    >
      <FloatingOrbs count={10} maxSize={3} minSize={1} />
      <div style={{ maxWidth: "860px", margin: "0 auto", position: "relative", zIndex: 2 }}>
        {/* Header – nur sichtbar wenn kein Ergebnis */}
        {!result && (
          <div style={{ marginBottom: "3rem" }}>
            <div style={{ marginBottom: "1.25rem" }}>
              <motion.span
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4 }}
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.18em",
                  color: "var(--verde-bright)",
                  textTransform: "uppercase",
                  display: "inline-block",
                }}
              >
                {t.quickCheck.label}
              </motion.span>
            </div>
            <h2 style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 900,
              color: "white",
              lineHeight: 1.05,
              marginBottom: "1rem",
            }}>
              {t.quickCheck.headline1.split(" ").map((word: string, i: number) => (
                <motion.span
                  key={`h1-${i}`}
                  initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  style={{ display: "inline-block", marginRight: "0.3em" }}
                >
                  {word}
                </motion.span>
              ))}
              <br />
              {t.quickCheck.headline2.split(" ").map((word: string, i: number) => (
                <motion.span
                  key={`h2-${i}`}
                  initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: (t.quickCheck.headline1.split(" ").length + i) * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  style={{ display: "inline-block", marginRight: "0.3em" }}
                >
                  {word}
                </motion.span>
              ))}
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.7,
                maxWidth: "500px",
              }}
            >
              {t.quickCheck.body}
            </motion.p>
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
          <div style={{ position: "relative" }}>
            {/* Verde glow backdrop */}
            <div style={{
              position: "absolute",
              top: "-60px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "90%",
              height: "200px",
              background: "radial-gradient(ellipse at center, rgba(39,174,96,0.12) 0%, rgba(39,174,96,0.04) 40%, transparent 70%)",
              pointerEvents: "none",
              zIndex: 0,
            }} />
            {/* Bottom verde glow */}
            <div style={{
              position: "absolute",
              bottom: "-40px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "60%",
              height: "120px",
              background: "radial-gradient(ellipse at center, rgba(39,174,96,0.06) 0%, transparent 70%)",
              pointerEvents: "none",
              zIndex: 0,
            }} />
            <div style={{
              position: "relative",
              zIndex: 1,
              background: "rgba(255,255,255,0.03)",
              borderRadius: "var(--radius)",
              padding: "2.5rem",
              border: "1px solid rgba(255,255,255,0.08)",
              borderTop: "1px solid rgba(39,174,96,0.25)",
              backgroundImage: "linear-gradient(to bottom, rgba(39,174,96,0.04) 0%, transparent 120px)",
            }}>
              <QuickCheckForm onSubmit={handleSubmit} isLoading={isLoading} />
            </div>
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
            fwmResults={fwmResults}
            fwmLoading={fwmLoading}
          />
        )}
      </div>
    </section>
  );
}
