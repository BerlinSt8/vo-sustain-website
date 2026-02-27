"use client";

const channels = [
  {
    label: "01",
    title: "Fördermittel-management",
    desc: "Von der Erstprüfung bis zum Verwendungsnachweis. ZIM · BAFA · EFRE · SAB · TAB · Horizon Europe.",
    tags: ["ZIM", "BAFA", "EFRE", "SAB", "KfW"],
  },
  {
    label: "02",
    title: "CSRD-Beratung",
    desc: "ESG-Reporting nach CSRD und VSME-Standard – mit valider Datenbasis und pragmatischer Umsetzung.",
    tags: ["CSRD", "VSME", "ESG", "Reporting"],
  },
  {
    label: "03",
    title: "Nachhaltigkeits-strategie",
    desc: "Roadmaps, die priorisieren statt überfordern. Klare Schritte, messbare Wirkung, finanzierbare Maßnahmen.",
    tags: ["Roadmap", "Strategie", "THG-Reduktion"],
  },
];

export default function SolutionSection() {
  return (
    <section
      id="leistungen"
      style={{ background: "var(--navy)", padding: "6rem 8vw" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Label */}
        <div style={{ marginBottom: "1.5rem" }}>
          <span style={{
            fontFamily: "'Roboto Mono', monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.18em",
            color: "var(--verde-bright)",
            textTransform: "uppercase",
          }}>
            Was wir tun
          </span>
        </div>

        <h2 style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 900,
          color: "white",
          lineHeight: 1.05,
          marginBottom: "1.25rem",
          maxWidth: "700px",
        }}>
          Die drei Kanäle<br />von VO Sustain.
        </h2>
        <p style={{
          fontFamily: "'Open Sans', sans-serif",
          fontSize: "1.05rem",
          color: "rgba(255,255,255,0.55)",
          lineHeight: 1.7,
          maxWidth: "520px",
          marginBottom: "4rem",
        }}>
          Schlüsselfertige Lösungen – von der Förderstrategie bis zur audit-sicheren Abwicklung.
        </p>

        {/* Channel cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {channels.map((c, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "var(--radius)",
                padding: "2rem",
                transition: "background 0.2s, border-color 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = "rgba(39,174,96,0.07)";
                el.style.borderColor = "rgba(39,174,96,0.3)";
                el.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = "rgba(255,255,255,0.04)";
                el.style.borderColor = "rgba(255,255,255,0.08)";
                el.style.transform = "translateY(0)";
              }}
            >
              <div style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.65rem", color: "var(--verde-bright)", letterSpacing: "0.15em", marginBottom: "1.25rem" }}>
                {c.label}
              </div>
              <h3 style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "1.15rem",
                fontWeight: 800,
                color: "white",
                lineHeight: 1.2,
                marginBottom: "1rem",
              }}>
                {c.title}
              </h3>
              <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.65, marginBottom: "1.5rem" }}>
                {c.desc}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {c.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "'Roboto Mono', monospace",
                      fontSize: "0.62rem",
                      color: "rgba(255,255,255,0.45)",
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      padding: "2px 8px",
                      borderRadius: "2px",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
