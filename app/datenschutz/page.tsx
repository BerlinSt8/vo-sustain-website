export default function DatenschutzPage() {
  return (
    <main style={{ background: "var(--off-white)", minHeight: "100vh", padding: "8rem 8vw 6rem" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>

        <p style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.18em", color: "var(--verde-dark)", textTransform: "uppercase", marginBottom: "1rem" }}>
          Rechtliches
        </p>

        <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "var(--navy)", lineHeight: 1.05, marginBottom: "0.75rem" }}>
          Datenschutzerklärung
        </h1>
        <p style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.65rem", color: "#999", letterSpacing: "0.08em", marginBottom: "3rem" }}>
          Stand: Februar 2026
        </p>

        <Section title="1. Verantwortlicher">
          <p>
            Verantwortlicher im Sinne der DSGVO ist:
          </p>
          <p style={{ marginTop: "0.5rem" }}>
            <strong>Denis Jänicke</strong><br />
            VO Sustain<br />
            Sadowastr. 22<br />
            12623 Berlin<br />
            E-Mail: <a href="mailto:info@vosustain.de" style={{ color: "var(--verde-dark)" }}>info@vosustain.de</a>
          </p>
        </Section>

        <Section title="2. Grundsätze der Datenverarbeitung">
          <p style={{ lineHeight: 1.75 }}>
            Wir erheben und verarbeiten personenbezogene Daten nur soweit dies zur Erbringung unserer Leistungen erforderlich ist oder Sie ausdrücklich eingewilligt haben. Wir geben Ihre Daten nicht an Dritte weiter, soweit dies nicht zur Leistungserbringung notwendig oder gesetzlich vorgeschrieben ist.
          </p>
        </Section>

        <Section title="3. Erhobene Daten und Verarbeitungszwecke">
          <Subsection title="3.1 Websiteaufruf / Serverlogs">
            <p style={{ lineHeight: 1.75 }}>
              Beim Aufruf unserer Website werden durch den Hosting-Anbieter automatisch Verbindungsdaten gespeichert (IP-Adresse, Zeitpunkt, aufgerufene Seite, Browser-Typ). Diese Daten dienen ausschließlich der technischen Bereitstellung der Website und werden nicht personenbezogen ausgewertet. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren Betrieb).
            </p>
          </Subsection>

          <Subsection title="3.2 Förder-Schnellcheck (Quick-Check)">
            <p style={{ lineHeight: 1.75 }}>
              Wenn Sie den kostenlosen Förder-Schnellcheck nutzen, erheben wir folgende Angaben:
            </p>
            <ul style={{ paddingLeft: "1.25rem", marginTop: "0.5rem", lineHeight: 1.9 }}>
              <li>Branche des Unternehmens</li>
              <li>Unternehmensgröße (Kategorie, keine exakten Zahlen)</li>
              <li>Jahresumsatz (Kategorie, keine exakten Zahlen)</li>
              <li>Bundesland / Region</li>
              <li>Beschreibung des geplanten Projekts oder Vorhabens</li>
            </ul>
            <p style={{ lineHeight: 1.75, marginTop: "0.75rem" }}>
              Diese Angaben werden ausschließlich zur Erstellung der Förderprogramm-Analyse verwendet und <strong>nicht dauerhaft gespeichert</strong>. Die Verarbeitung erfolgt auf Basis Ihrer Einwilligung durch Nutzung des Formulars (Art. 6 Abs. 1 lit. a DSGVO). Es werden keine personenbezogenen Daten wie Name, E-Mail oder Telefonnummer erhoben.
            </p>
          </Subsection>

          <Subsection title="3.3 Kontaktaufnahme per E-Mail">
            <p style={{ lineHeight: 1.75 }}>
              Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir Ihre E-Mail-Adresse und die Inhalte Ihrer Nachricht zur Bearbeitung Ihrer Anfrage. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse). Die Daten werden nach abschließender Bearbeitung gelöscht, soweit keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>
          </Subsection>
        </Section>

        <Section title="4. Hosting">
          <p style={{ lineHeight: 1.75 }}>
            Diese Website wird bei Vercel Inc., 340 Pine Street, Suite 900, San Francisco, CA 94104, USA gehostet. Vercel verarbeitet dabei technisch notwendige Daten (Verbindungsdaten) gemäß ihrer Datenschutzerklärung. Mit Vercel besteht ein Auftragsverarbeitungsvertrag (DPA). Die Datenübertragung in die USA erfolgt auf Basis der EU-Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO).
          </p>
        </Section>

        <Section title="5. Cookies und Tracking">
          <p style={{ lineHeight: 1.75 }}>
            Diese Website verwendet <strong>keine Tracking-Cookies</strong> und setzt kein Web-Analytics (z.B. Google Analytics) ein. Es werden keine Nutzerprofile erstellt.
          </p>
        </Section>

        <Section title="6. Ihre Rechte">
          <p style={{ lineHeight: 1.75 }}>
            Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:
          </p>
          <ul style={{ paddingLeft: "1.25rem", marginTop: "0.5rem", lineHeight: 1.9 }}>
            <li><strong>Auskunft</strong> (Art. 15 DSGVO)</li>
            <li><strong>Berichtigung</strong> (Art. 16 DSGVO)</li>
            <li><strong>Löschung</strong> (Art. 17 DSGVO)</li>
            <li><strong>Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)</li>
            <li><strong>Widerspruch gegen die Verarbeitung</strong> (Art. 21 DSGVO)</li>
            <li><strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
          </ul>
          <p style={{ lineHeight: 1.75, marginTop: "0.75rem" }}>
            Zur Ausübung Ihrer Rechte wenden Sie sich an: <a href="mailto:info@vosustain.de" style={{ color: "var(--verde-dark)" }}>info@vosustain.de</a>
          </p>
          <p style={{ lineHeight: 1.75, marginTop: "0.75rem" }}>
            Sie haben außerdem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Zuständig ist die Berliner Beauftragte für Datenschutz und Informationsfreiheit, Friedrichstr. 219, 10969 Berlin.
          </p>
        </Section>

        <Section title="7. Aktualität dieser Erklärung">
          <p style={{ lineHeight: 1.75 }}>
            Wir behalten uns vor, diese Datenschutzerklärung bei Änderungen der Website oder der gesetzlichen Vorgaben anzupassen. Die jeweils aktuelle Version ist auf dieser Seite abrufbar.
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
      <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "0.95rem", color: "#444" }}>
        {children}
      </div>
    </div>
  );
}

function Subsection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "1.25rem" }}>
      <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.82rem", fontWeight: 700, color: "#333", marginBottom: "0.5rem" }}>
        {title}
      </h3>
      {children}
    </div>
  );
}
