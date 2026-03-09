"use client";

import type { Artikel } from "@/lib/types";
import { useLanguage } from "@/lib/i18n/LanguageContext";

function formatDate(iso: string, lang: string) {
  return new Date(iso).toLocaleDateString(lang === "en" ? "en-GB" : "de-DE", {
    day: "2-digit", month: "long", year: "numeric",
  });
}

function formatDeadline(iso: string, lang: string, t: ReturnType<typeof useLanguage>["t"]) {
  const diff = new Date(iso).getTime() - Date.now();
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  const dateStr = formatDate(iso, lang);
  if (days < 0) return { label: `${t.artikel.deadlineExpired} (${dateStr})`, urgent: false, expired: true };
  if (days === 0) return { label: `${t.artikel.deadlineToday} (${dateStr})`, urgent: true, expired: false };
  if (days === 1) return { label: `${t.artikel.deadlineTomorrow} (${dateStr})`, urgent: true, expired: false };
  if (lang === "en") {
    return { label: `${dateStr} — ${days} ${t.artikel.deadlineDays} left`, urgent: days <= 14, expired: false };
  }
  return { label: `${dateStr} — noch ${days} ${t.artikel.deadlineDays}`, urgent: days <= 14, expired: false };
}

/** Parse markdown-style [text](url) links within a string into React elements */
function renderWithLinks(text: string): React.ReactNode {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  if (parts.length === 1) return text;
  return parts.map((part, i) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (match) {
      const isExternal = match[2].startsWith("http");
      return (
        <a
          key={i}
          href={match[2]}
          {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          style={{
            color: "var(--verde-dark)",
            textDecoration: "none",
            borderBottom: "1px solid rgba(39,174,96,0.35)",
            fontWeight: 600,
          }}
        >
          {match[1]}
        </a>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export default function ArtikelBodyClient({ artikel }: { artikel: Artikel }) {
  const { t, lang } = useLanguage();

  const deadline = artikel.deadline ? formatDeadline(artikel.deadline, lang, t) : null;
  const content = (lang === "en" && artikel.content_en) ? artikel.content_en : artikel.content;
  const facts = (lang === "en" && artikel.facts_en) ? artikel.facts_en : artikel.facts;

  return (
    <div style={{ maxWidth: "760px", margin: "0 auto", padding: "2.5rem 8vw 0" }}>

      {/* ── Fakten-Kacheln ── */}
      {facts && facts.length > 0 && (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 175px), 1fr))",
          gap: "10px",
          marginBottom: "2.5rem",
        }}>
          {facts.map((fakt, i) => (
            <div
              key={i}
              style={{
                background: "white",
                border: "1px solid rgba(0,0,0,0.07)",
                borderLeft: "3px solid var(--verde)",
                borderRadius: "8px",
                padding: "0.9rem 1.1rem",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              }}
            >
              <p style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: "0.58rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#999",
                marginBottom: "0.35rem",
              }}>
                {fakt.icon && <span style={{ marginRight: "4px" }}>{fakt.icon}</span>}
                {fakt.label}
              </p>
              <p style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 700,
                fontSize: "0.9rem",
                color: "#0D1B2A",
                lineHeight: 1.35,
              }}>
                {fakt.value}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Deadline Banner */}
      {deadline && (
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.6rem",
          background: deadline.expired
            ? "rgba(0,0,0,0.04)"
            : deadline.urgent
            ? "rgba(231,76,60,0.07)"
            : "rgba(39,174,96,0.07)",
          border: `1px solid ${
            deadline.expired
              ? "rgba(0,0,0,0.1)"
              : deadline.urgent
              ? "rgba(231,76,60,0.25)"
              : "rgba(39,174,96,0.25)"
          }`,
          borderRadius: "8px",
          padding: "0.75rem 1.25rem",
          marginBottom: "2.5rem",
          width: "100%",
        }}>
          <span style={{ fontSize: "1.1rem" }}>
            {deadline.expired ? "⏸" : deadline.urgent ? "🔴" : "⏱"}
          </span>
          <div>
            <p style={{
              fontFamily: "'Roboto Mono', monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: deadline.expired ? "#999" : deadline.urgent ? "#C0392B" : "#1E8449",
              marginBottom: "2px",
            }}>
              {t.artikel.deadline}
            </p>
            <p style={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 700,
              fontSize: "0.95rem",
              color: deadline.expired ? "#888" : deadline.urgent ? "#C0392B" : "#1E8449",
            }}>
              {deadline.label}
            </p>
          </div>
        </div>
      )}

      {/* Content Paragraphs + Headings */}
      {content.map((para, i) => {
        if (para.startsWith("## ")) {
          return (
            <h2 key={i} style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 800,
              fontSize: "1.35rem",
              color: "#0B1622",
              lineHeight: 1.3,
              marginTop: i === 0 ? 0 : "2.5rem",
              marginBottom: "1rem",
            }}>
              {para.slice(3)}
            </h2>
          );
        }
        if (para.startsWith("### ")) {
          return (
            <h3 key={i} style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              fontSize: "1.1rem",
              color: "#1a2a3a",
              lineHeight: 1.35,
              marginTop: "2rem",
              marginBottom: "0.75rem",
            }}>
              {para.slice(4)}
            </h3>
          );
        }
        return (
          <p key={i} style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "1rem",
            color: "#333",
            lineHeight: 1.9,
            marginBottom: "1.5rem",
          }}>
            {renderWithLinks(para)}
          </p>
        );
      })}

      {/* Divider */}
      <hr style={{
        border: "none",
        borderTop: "1px solid rgba(0,0,0,0.08)",
        margin: "2.5rem 0",
      }} />

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "2rem" }}>
        {artikel.tags.map((tag) => (
          <span key={tag} style={{
            fontFamily: "'Roboto Mono', monospace",
            fontSize: "0.62rem",
            letterSpacing: "0.06em",
            background: "rgba(0,0,0,0.05)",
            color: "#777",
            border: "1px solid rgba(0,0,0,0.08)",
            borderRadius: "3px",
            padding: "3px 10px",
          }}>
            {tag}
          </span>
        ))}
      </div>

      {/* Source */}
      {artikel.source && (
        <p style={{
          fontFamily: "'Open Sans', sans-serif",
          fontSize: "0.8rem",
          color: "#aaa",
        }}>
          {t.artikel.source}{" "}
          <a
            href={artikel.source}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--verde-dark)", textDecoration: "none", borderBottom: "1px solid rgba(39,174,96,0.35)" }}
          >
            {artikel.source}
          </a>
        </p>
      )}

      {/* CTA */}
      <div style={{
        marginTop: "3rem",
        background: "white",
        border: "1px solid rgba(39,174,96,0.2)",
        borderLeft: "3px solid var(--verde)",
        borderRadius: "12px",
        padding: "2rem 2.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1.5rem",
        boxShadow: "0 4px 20px rgba(39,174,96,0.08)",
      }}>
        <div>
          <p style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 800,
            fontSize: "1.05rem",
            color: "#0D1B2A",
            marginBottom: "0.4rem",
          }}>
            {t.artikel.ctaHeadline}
          </p>
          <p style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "0.88rem",
            color: "#666",
            lineHeight: 1.6,
          }}>
            {t.artikel.ctaBody}
          </p>
        </div>
        <a
          href="/#quick-check"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            fontSize: "0.85rem",
            color: "white",
            background: "var(--verde)",
            textDecoration: "none",
            padding: "0.7rem 1.5rem",
            borderRadius: "var(--radius)",
            letterSpacing: "0.03em",
            whiteSpace: "nowrap",
            boxShadow: "0 4px 16px rgba(39,174,96,0.3)",
          }}
        >
          {t.artikel.ctaButton}
        </a>
      </div>
    </div>
  );
}
