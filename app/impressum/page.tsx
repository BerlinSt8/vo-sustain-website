export default function ImpressumPage() {
  return (
    <main style={{ background: "var(--off-white)", minHeight: "100vh", padding: "8rem 8vw 6rem" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>

        <p style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.18em", color: "var(--verde-dark)", textTransform: "uppercase", marginBottom: "1rem" }}>
          Rechtliches
        </p>

        <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "var(--navy)", lineHeight: 1.05, marginBottom: "3rem" }}>
          Impressum
        </h1>

        <Section title="Angaben gemäß § 5 TMG">
          <p>VO Sustain</p>
          <p>Inhaber: Denis Jänicke</p>
          <p>Sadowastr. 22</p>
          <p>12623 Berlin</p>
        </Section>

        <Section title="Kontakt">
          <p>E-Mail: <a href="mailto:info@vosustain.de" style={{ color: "var(--verde-dark)" }}>info@vosustain.de</a></p>
        </Section>

        <Section title="Steuerliche Angaben">
          <p>Steuernummer: wird nachgereicht</p>
        </Section>

        <Section title="Berufsbezeichnung">
          <p>Unternehmensberater / Förderberater</p>
          <p>Tätigkeitsland: Deutschland</p>
        </Section>

        <Section title="Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV">
          <p>Denis Jänicke</p>
          <p>Sadowastr. 22, 12623 Berlin</p>
        </Section>

        <Section title="Haftungsausschluss">
          <p style={{ lineHeight: 1.75 }}>
            Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen wir jedoch keine Gewähr. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
          </p>
        </Section>

        <Section title="Hinweis zur Beratungsleistung">
          <p style={{ lineHeight: 1.75 }}>
            Die auf dieser Website bereitgestellten Informationen und Analysen stellen keine Rechts- oder Steuerberatung dar. Für verbindliche Auskünfte in diesen Bereichen wenden Sie sich bitte an einen zugelassenen Rechtsanwalt oder Steuerberater.
          </p>
        </Section>

        <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid rgba(0,0,0,0.08)" }}>
          <a href="/" style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.7rem", color: "var(--verde-dark)", textDecoration: "none", letterSpacing: "0.08em" }}>
            ← Zurück zur Startseite
          </a>
        </div>

      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "2.5rem" }}>
      <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.9rem", fontWeight: 800, color: "var(--navy)", letterSpacing: "0.04em", marginBottom: "0.75rem", textTransform: "uppercase" }}>
        {title}
      </h2>
      <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "0.95rem", color: "#444", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
        {children}
      </div>
    </div>
  );
}
