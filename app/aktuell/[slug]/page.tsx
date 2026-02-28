import { notFound } from "next/navigation";
import type { Metadata } from "next";
import NavBar from "@/components/ui/NavBar";
import WaveDivider from "@/components/ui/WaveDivider";
import ReadingProgress from "@/components/ui/ReadingProgress";
import FooterSection from "@/components/sections/FooterSection";
import ArtikelHero from "./ArtikelHero";
import type { Artikel } from "@/lib/types";
import artikelData from "@/data/aktuell.json";

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

  const deadline = artikel.deadline ? formatDeadline(artikel.deadline) : null;

  return (
    <>
      {/* Verde Lesefortschritts-Balken */}
      <ReadingProgress />

      <NavBar />
      <main>
        {/* Parallax Hero – dunkel mit Kategorie-Glow */}
        <ArtikelHero artikel={artikel} />

        {/* Welle: navy-dark → off-white */}
        <WaveDivider fromColor="var(--navy-dark)" toColor="var(--off-white)" />

        {/* Article Body – heller Hintergrund für Lesbarkeit */}
        <div style={{
          background: "var(--off-white)",
          padding: "0 0 5rem",
        }}>
          <div style={{
            maxWidth: "760px",
            margin: "0 auto",
            padding: "2.5rem 8vw 0",
          }}>

            {/* ── Fakten-Kacheln ── */}
            {artikel.facts && artikel.facts.length > 0 && (
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 175px), 1fr))",
                gap: "10px",
                marginBottom: "2.5rem",
              }}>
                {artikel.facts.map((fakt, i) => (
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
                    Antragsfrist
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

            {/* Content Paragraphs */}
            {artikel.content.map((para, i) => (
              <p key={i} style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "1rem",
                color: "#333",
                lineHeight: 1.9,
                marginBottom: "1.5rem",
              }}>
                {para}
              </p>
            ))}

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
                Quelle:{" "}
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
                  Passt das zu Ihrem Unternehmen?
                </p>
                <p style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "0.88rem",
                  color: "#666",
                  lineHeight: 1.6,
                }}>
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
                  boxShadow: "0 4px 16px rgba(39,174,96,0.3)",
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
