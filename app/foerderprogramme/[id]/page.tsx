import NavBar from "@/components/ui/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import Link from "next/link";
import programmeData from "@/data/foerderprogramme.json";
import type { Metadata } from "next";

const BASE_URL = "https://www.vosustain.de";

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

const LEVEL_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  bund: { bg: "rgba(39, 174, 96, 0.12)", text: "#27AE60", border: "rgba(39, 174, 96, 0.3)" },
  land: { bg: "rgba(100, 181, 246, 0.12)", text: "#64b5f6", border: "rgba(100, 181, 246, 0.3)" },
  eu: { bg: "rgba(245, 166, 35, 0.12)", text: "#f5a623", border: "rgba(245, 166, 35, 0.3)" },
};

const LEVEL_LABELS: Record<string, string> = {
  bund: "Bundesprogramm",
  land: "Landesprogramm",
  eu: "EU-Programm",
};

export function generateStaticParams() {
  return programmeData.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const programm = programmeData.find((p) => p.id === id);
  if (!programm) {
    return { title: "Programm nicht gefunden | VO Sustain" };
  }
  const desc = `${programm.name}: ${programm.fundingType} ${programm.aidIntensity} für ${programm.target}. Alle Infos zu Förderhöhe, Voraussetzungen und Antragstellung.`;
  return {
    title: `${programm.name} | VO Sustain`,
    description: desc,
    alternates: {
      canonical: `${BASE_URL}/foerderprogramme/${programm.id}`,
    },
    openGraph: {
      title: `${programm.name} — Förderung für KMU`,
      description: desc,
      url: `${BASE_URL}/foerderprogramme/${programm.id}`,
      type: "website",
    },
  };
}

function LevelBadge({ level }: { level: string }) {
  const colors = LEVEL_COLORS[level] || LEVEL_COLORS.bund;
  return (
    <span
      style={{
        display: "inline-block",
        padding: "3px 12px",
        borderRadius: "4px",
        fontSize: "0.72rem",
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

function ConfidenceBadge({ confidence }: { confidence: string }) {
  const isVerified = confidence === "Verifiziert";
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "4px 12px",
        borderRadius: "4px",
        fontSize: "0.72rem",
        fontFamily: "'Roboto Mono', monospace",
        fontWeight: 600,
        background: isVerified ? "rgba(39,174,96,0.1)" : "rgba(245,166,35,0.1)",
        color: isVerified ? "#27AE60" : "#f5a623",
        border: `1px solid ${isVerified ? "rgba(39,174,96,0.25)" : "rgba(245,166,35,0.25)"}`,
      }}
    >
      <span style={{ fontSize: "0.8rem" }}>{isVerified ? "\u2713" : "\u25CB"}</span>
      {confidence}
    </span>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        padding: "14px 0",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <span
        style={{
          fontFamily: "'Open Sans', sans-serif",
          fontSize: "0.85rem",
          color: "#8E9BAA",
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: "'Roboto Mono', monospace",
          fontSize: "0.85rem",
          color: "#F0F2F4",
          fontWeight: 600,
          textAlign: "right",
          maxWidth: "60%",
        }}
      >
        {value}
      </span>
    </div>
  );
}

function getRelated(current: Programm, all: Programm[]): Programm[] {
  const others = all.filter((p) => p.id !== current.id);
  // Prefer same level, then overlapping focus
  const sameLevelSameFocus = others.filter(
    (p) =>
      p.level === current.level &&
      p.focus.some((f) => current.focus.includes(f))
  );
  if (sameLevelSameFocus.length >= 3) return sameLevelSameFocus.slice(0, 3);

  const sameFocus = others.filter((p) =>
    p.focus.some((f) => current.focus.includes(f))
  );
  if (sameFocus.length >= 3) return sameFocus.slice(0, 3);

  const sameLevel = others.filter((p) => p.level === current.level);
  return sameLevel.slice(0, 3);
}

export default async function FoerderprogrammDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const programm = programmeData.find((p) => p.id === id) as Programm | undefined;

  if (!programm) {
    return (
      <>
        <NavBar />
        <main
          style={{
            background: "#0B1622",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h1
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 900,
                color: "#F0F2F4",
                fontSize: "1.5rem",
              }}
            >
              Programm nicht gefunden
            </h1>
            <Link
              href="/foerderprogramme"
              style={{
                fontFamily: "'Open Sans', sans-serif",
                color: "#27AE60",
                marginTop: "16px",
                display: "inline-block",
              }}
            >
              Alle Förderprogramme anzeigen
            </Link>
          </div>
        </main>
        <FooterSection />
      </>
    );
  }

  const related = getRelated(programm, programmeData as Programm[]);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "VO Sustain", item: BASE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Förderprogramme",
        item: `${BASE_URL}/foerderprogramme`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: programm.name,
        item: `${BASE_URL}/foerderprogramme/${programm.id}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <NavBar />
      <main style={{ background: "#0B1622", minHeight: "100vh" }}>
        {/* Hero */}
        <section
          style={{
            paddingTop: "140px",
            paddingBottom: "40px",
            maxWidth: "800px",
            margin: "0 auto",
            padding: "140px 24px 40px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "16px",
              flexWrap: "wrap",
            }}
          >
            <LevelBadge level={programm.level} />
            <span
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: "0.75rem",
                color: "#5A6470",
              }}
            >
              {programm.authority}
            </span>
            {programm.state && (
              <span
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: "0.75rem",
                  color: "#5A6470",
                }}
              >
                · {programm.state}
              </span>
            )}
          </div>
          <h1
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1.5rem, 3.5vw, 2.4rem)",
              color: "#F0F2F4",
              margin: "0 0 16px",
              lineHeight: 1.2,
            }}
          >
            {programm.name}
          </h1>
          <p
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "1rem",
              color: "#8E9BAA",
              lineHeight: 1.6,
            }}
          >
            {programm.target}
          </p>
        </section>

        {/* Info Box */}
        <section
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "0 24px 40px",
          }}
        >
          <div
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "10px",
              padding: "8px 24px",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            <InfoRow label="Förderart" value={programm.fundingType} />
            <InfoRow label="Förderintensität" value={programm.aidIntensity} />
            {programm.maxAmount && (
              <InfoRow label="Max. Förderhöhe" value={programm.maxAmount} />
            )}
            {programm.minInvestment && (
              <InfoRow label="Min. Investition" value={programm.minInvestment} />
            )}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "14px 0",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <span
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "0.85rem",
                  color: "#8E9BAA",
                }}
              >
                Quelle
              </span>
              <a
                href={programm.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "0.82rem",
                  color: "#27AE60",
                  textDecoration: "none",
                }}
              >
                Offizielle Programmseite &rarr;
              </a>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "14px 0",
              }}
            >
              <span
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "0.85rem",
                  color: "#8E9BAA",
                }}
              >
                Status
              </span>
              <ConfidenceBadge confidence={programm.confidence} />
            </div>
          </div>
        </section>

        {/* Focus Tags */}
        <section
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "0 24px 32px",
          }}
        >
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: "0.85rem",
              color: "#C8D0D8",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "14px",
            }}
          >
            Schwerpunkte
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {programm.focus.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "0.78rem",
                  padding: "4px 12px",
                  borderRadius: "4px",
                  background: "rgba(255,255,255,0.06)",
                  color: "#C8D0D8",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* Notes */}
        {programm.notes && (
          <section
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              padding: "0 24px 40px",
            }}
          >
            <h2
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: "0.85rem",
                color: "#C8D0D8",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "14px",
              }}
            >
              Hinweise
            </h2>
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "0.92rem",
                color: "#8E9BAA",
                lineHeight: 1.7,
                padding: "16px 20px",
                background: "rgba(255,255,255,0.02)",
                borderRadius: "8px",
                borderLeft: "3px solid rgba(39,174,96,0.3)",
              }}
            >
              {programm.notes}
            </p>
          </section>
        )}

        {/* CTA */}
        <section
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "0 24px 60px",
          }}
        >
          <div
            style={{
              textAlign: "center",
              padding: "36px",
              border: "1px solid rgba(39,174,96,0.2)",
              borderRadius: "12px",
              background: "rgba(39,174,96,0.04)",
            }}
          >
            <h2
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: "1.2rem",
                color: "#F0F2F4",
                marginBottom: "10px",
              }}
            >
              Passt dieses Programm zu Ihrem Vorhaben?
            </h2>
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "0.9rem",
                color: "#8E9BAA",
                marginBottom: "20px",
                lineHeight: 1.6,
              }}
            >
              Unser Quick-Check prüft in unter 2 Minuten, ob {programm.name} für
              Ihr Projekt in Frage kommt.
            </p>
            <Link
              href="/#quickcheck"
              style={{
                display: "inline-block",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: "0.88rem",
                padding: "13px 28px",
                borderRadius: "8px",
                background: "#27AE60",
                color: "#fff",
                textDecoration: "none",
              }}
            >
              Quick-Check starten
            </Link>
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              padding: "0 24px 80px",
            }}
          >
            <h2
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: "0.85rem",
                color: "#C8D0D8",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "20px",
              }}
            >
              Ähnliche Förderprogramme
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 220px), 1fr))",
                gap: "12px",
              }}
            >
              {related.map((r) => (
                <Link
                  key={r.id}
                  href={`/foerderprogramme/${r.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="related-card">
                    <LevelBadge level={r.level} />
                    <h3
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.82rem",
                        color: "#F0F2F4",
                        margin: "10px 0 6px",
                        lineHeight: 1.3,
                      }}
                    >
                      {r.name}
                    </h3>
                    <span
                      style={{
                        fontFamily: "'Roboto Mono', monospace",
                        fontSize: "0.7rem",
                        color: "#27AE60",
                      }}
                    >
                      {r.aidIntensity}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <FooterSection />
      <style>{`
        .related-card {
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px;
          padding: 16px;
          background: rgba(255,255,255,0.02);
          transition: border-color 0.2s ease;
        }
        .related-card:hover {
          border-color: rgba(39,174,96,0.4);
        }
      `}</style>
    </>
  );
}
