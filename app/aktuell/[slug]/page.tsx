import { notFound } from "next/navigation";
import type { Metadata } from "next";
import NavBar from "@/components/ui/NavBar";
import WaveDivider from "@/components/ui/WaveDivider";
import FooterSection from "@/components/sections/FooterSection";
import type { Artikel, ArtikelKategorie } from "@/lib/types";
import artikelData from "@/data/aktuell.json";

const KATEGORIE_FARBEN: Record<ArtikelKategorie, { bg: string; text: string; border: string }> = {
  "Förderaufruf": { bg: "rgba(39,174,96,0.1)",   text: "#1E8449", border: "rgba(39,174,96,0.3)" },
  "CSRD-News":    { bg: "rgba(30,132,255,0.08)",  text: "#1a6fcc", border: "rgba(30,132,255,0.2)" },
  "Marktinfo":    { bg: "rgba(245,166,35,0.1)",   text: "#b8670a", border: "rgba(245,166,35,0.3)" },
  "Erfolg":       { bg: "rgba(46,204,113,0.12)",  text: "#1E8449", border: "rgba(46,204,113,0.35)" },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("de-DE", { day: "2-digit", month: "long", year: "numeric" });
}

function formatDeadline(iso: string) {
  const diff = new Date(iso).getTime() - Date.now();
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  const dateStr = formatDate(iso);
  if (days < 0) return { label: `Abgelaufen (${dateStr})`, urgent: false, expired: true };
  if (days === 0) return { label: `Heute! (${dateStr})`, urgent: true, expired: false };
  if (days === 1) return { label: `Morgen! (${dateStr})`, urgent: true, expired: false };
  return { label: `${dateStr} — noch ${days} Tage`, urgent: days <= 14, expired: false };
}

export async function generateStaticParams() {
  return (artikelData as Artikel[]).map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const artikel = (artikelData as Artikel[]).find((a) => a.slug === slug);
  if (!artikel) return { title: "Nicht gefunden | VO Sustain" };
  return {
    title: `${artikel.title} | VO Sustain`,
    description: artikel.teaser,
  };
}

export default async function ArtikelDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const artikel = (artikelData as Artikel[]).find((a) => a.slug === slug);
  if (!artikel) notFound();

  const farbe = KATEGORIE_FARBEN[artikel.category];
  const deadline = artikel.deadline ? formatDeadline(artikel.deadline) : null;

  return (
    <>
      <NavBar />
      <main>
        {/* Navy Header */}
        <div
          style={{
            background: "var(--navy-dark)",
            padding: "calc(80px + 4rem) 8vw 4rem",
          }}
        >
          {/* Back link */}
          <a
            href="/aktuell"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              fontFamily: "'Roboto Mono', monospace",
              fontSize: "0.72rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--verde-bright)",
              textDecoration: "none",
              marginBottom: "2rem",
              opacity: 0.85,
            }}
          >
            ← Zurück zu Aktuell
          </a>

          {/* Category + Date row */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
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
                color: "rgba(255,255,255,0.45)",
              }}
            >
              {formatDate(artikel.date)}
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1.6rem, 4vw, 2.8rem)",
              color: "white",
              lineHeight: 1.2,
              marginBottom: "1.5rem",
              maxWidth: "820px",
            }}
          >
            {artikel.title}
          </h1>

          {/* Teaser */}
          <p
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "1.1rem",
              color: "rgba(255,255,255,0.7)",
              maxWidth: "680px",
              lineHeight: 1.75,
            }}
          >
            {artikel.teaser}
          </p>
        </div>

        {/* Kein Wave — durchgehend navy */}

        {/* Article Body */}
        <div style={{
          background: "var(--navy)",
          padding: "0 0 5rem",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}>
          <div
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              padding: "3rem 8vw 0",
            }}
          >
            {/* ── Fakten-Kacheln ── */}
            {artikel.facts && artikel.facts.length > 0 && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 190px), 1fr))",
                  gap: "10px",
                  marginBottom: "2.5rem",
                }}
              >
                {artikel.facts.map((fakt, i) => (
                  <div
                    key={i}
                    style={{
                      background: "rgba(13,27,42,0.7)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderLeft: "3px solid rgba(39,174,96,0.5)",
                      borderRadius: "8px",
                      padding: "0.9rem 1.1rem",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Roboto Mono', monospace",
                        fontSize: "0.58rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.35)",
                        marginBottom: "0.35rem",
                      }}
                    >
                      {fakt.icon && <span style={{ marginRight: "4px" }}>{fakt.icon}</span>}
                      {fakt.label}
                    </p>
                    <p
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: 700,
                        fontSize: "0.9rem",
                        color: "rgba(255,255,255,0.9)",
                        lineHeight: 1.35,
                      }}
                    >
                      {fakt.value}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Deadline Banner */}
            {deadline && (
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  background: deadline.expired
                    ? "rgba(150,150,150,0.1)"
                    : deadline.urgent
                    ? "rgba(231,76,60,0.08)"
                    : "rgba(39,174,96,0.08)",
                  border: `1px solid ${
                    deadline.expired
                      ? "rgba(150,150,150,0.25)"
                      : deadline.urgent
                      ? "rgba(231,76,60,0.3)"
                      : "rgba(39,174,96,0.3)"
                  }`,
                  borderRadius: "8px",
                  padding: "0.75rem 1.25rem",
                  marginBottom: "2.5rem",
                  width: "100%",
                }}
              >
                <span style={{ fontSize: "1.1rem" }}>
                  {deadline.expired ? "⏸" : deadline.urgent ? "🔴" : "⏱"}
                </span>
                <div>
                  <p
                    style={{
                      fontFamily: "'Roboto Mono', monospace",
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: deadline.expired ? "#999" : deadline.urgent ? "#c0392b" : "#1E8449",
                      marginBottom: "2px",
                    }}
                  >
                    Antragsfrist
                  </p>
                  <p
                    style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      color: deadline.expired ? "#666" : deadline.urgent ? "#c0392b" : "#1E8449",
                    }}
                  >
                    {deadline.label}
                  </p>
                </div>
              </div>
            )}

            {/* Content Paragraphs */}
            {artikel.content.map((para, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "1rem",
                  color: "rgba(255,255,255,0.72)",
                  lineHeight: 1.9,
                  marginBottom: "1.5rem",
                }}
              >
                {para}
              </p>
            ))}

            {/* Divider */}
            <hr
              style={{
                border: "none",
                borderTop: "1px solid rgba(255,255,255,0.08)",
                margin: "2.5rem 0",
              }}
            />

            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "2rem" }}>
              {artikel.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: "'Roboto Mono', monospace",
                    fontSize: "0.62rem",
                    letterSpacing: "0.06em",
                    background: "rgba(255,255,255,0.05)",
                    color: "rgba(255,255,255,0.35)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "3px",
                    padding: "3px 10px",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Source */}
            {artikel.source && (
              <p
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.25)",
                }}
              >
                Quelle:{" "}
                <a
                  href={artikel.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--verde-bright)", textDecoration: "none", borderBottom: "1px solid rgba(46,204,113,0.35)" }}
                >
                  {artikel.source}
                </a>
              </p>
            )}

            {/* CTA */}
            <div
              style={{
                marginTop: "3rem",
                background: "rgba(39,174,96,0.07)",
                border: "1px solid rgba(39,174,96,0.2)",
                borderLeft: "3px solid var(--verde)",
                borderRadius: "12px",
                padding: "2rem 2.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "1.5rem",
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 800,
                    fontSize: "1.05rem",
                    color: "white",
                    marginBottom: "0.4rem",
                  }}
                >
                  Passt das zu Ihrem Unternehmen?
                </p>
                <p
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "0.88rem",
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: 1.6,
                  }}
                >
                  In 5 Minuten sehen Sie, welche Förderprogramme für Sie relevant sind.
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
                }}
              >
                Quick-Check starten →
              </a>
            </div>
          </div>
        </div>

      </main>

      <FooterSection />
    </>
  );
}
