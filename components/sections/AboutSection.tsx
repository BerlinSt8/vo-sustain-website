const credentials = [
  { label: "EU–Bund–Land", sub: "Vollständige Förderebenen" },
  { label: "12+", sub: "Partner im ZIM-Netzwerk" },
  { label: "~95%", sub: "Förderquote SEAWEED-Projekt" },
];

const programs = ["ZIM", "BAFA", "SAB", "TAB", "EFRE", "Horizon Europe", "LIFE", "BMWK"];

export default function AboutSection() {
  return (
    <section
      id="ueber-uns"
      style={{ background: "var(--navy)", padding: "6rem 8vw" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Label */}
        <div style={{ marginBottom: "3rem" }}>
          <span style={{
            fontFamily: "'Roboto Mono', monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.18em",
            color: "var(--verde-bright)",
            textTransform: "uppercase",
          }}>
            Wer steckt dahinter
          </span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "5rem", alignItems: "start" }}>
          {/* Foto */}
          <div>
            <div style={{
              borderRadius: "var(--radius)",
              overflow: "hidden",
              border: "1px solid rgba(39,174,96,0.2)",
              background: "rgba(255,255,255,0.04)",
              aspectRatio: "3/4",
              maxWidth: "300px",
            }}>
              <img
                src="/denis.png"
                alt="Denis Jänicke – Inhaber VO Sustain"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 900,
              color: "white",
              lineHeight: 1.05,
              marginBottom: "0.5rem",
            }}>
              Denis Jänicke
            </h2>
            <p style={{
              fontFamily: "'Roboto Mono', monospace",
              fontSize: "0.75rem",
              color: "var(--verde-bright)",
              letterSpacing: "0.1em",
              marginBottom: "2rem",
            }}>
              Inhaber & Gründer · VO Sustain · Berlin
            </p>

            {/* Quote */}
            <blockquote style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "1.1rem",
              fontWeight: 600,
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.55,
              borderLeft: "3px solid var(--verde)",
              paddingLeft: "1.5rem",
              marginBottom: "2.5rem",
              fontStyle: "italic",
            }}>
              „Ich verbinde technisches Förderwissen mit pragmatischer Umsetzung – damit Ihre Nachhaltigkeitsinvestition nicht am Schreibtisch stecken bleibt."
            </blockquote>

            {/* Metrics */}
            <div style={{ display: "flex", gap: "2.5rem", marginBottom: "2.5rem", flexWrap: "wrap" }}>
              {credentials.map((c, i) => (
                <div key={i}>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.6rem", fontWeight: 900, color: "var(--verde-bright)", lineHeight: 1 }}>
                    {c.label}
                  </div>
                  <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "0.8rem", color: "rgba(255,255,255,0.65)", marginTop: "4px" }}>
                    {c.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* Bio */}
            <p style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "0.9rem",
              color: "rgba(255,255,255,0.78)",
              lineHeight: 1.75,
              marginBottom: "2rem",
              maxWidth: "560px",
            }}>
              Senior Grant & Programme Operations Lead mit Spezialisierung auf EU-Förderung und Konsortialmanagement. ZIM-Netzwerkmanager für das SEAWEED DECARBON POLYMER-Projekt (12+ Partner). Audit-sichere Prozessgestaltung, Verwendungsnachweis und CSRD-Implementierung.
            </p>

            {/* Program tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {programs.map((p) => (
                <span key={p} style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: "0.68rem",
                  color: "rgba(255,255,255,0.68)",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  padding: "4px 10px",
                  borderRadius: "2px",
                  letterSpacing: "0.06em",
                }}>
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
