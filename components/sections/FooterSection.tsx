"use client";

export default function FooterSection() {
  const year = 2026;

  return (
    <footer style={{ background: "var(--navy-dark)", padding: "4rem 8vw 2rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Top row */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "4rem", marginBottom: "4rem" }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
              <img src="/vo-logo.jpg" alt="VO Sustain" style={{ height: "36px", width: "auto", borderRadius: "3px" }} />
              <div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.1rem", fontWeight: 900, color: "white", letterSpacing: "0.05em", lineHeight: 1.1 }}>
                  VO SUSTAIN
                </div>
                <div style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.52rem", color: "var(--verde-bright)", letterSpacing: "0.18em", marginTop: "2px" }}>
                  VERDE ONDA
                </div>
              </div>
            </div>
            <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "0.875rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.7, maxWidth: "320px" }}>
              Förderberatung für deutsche KMU. Fördermittelmanagement · CSRD · Nachhaltigkeitsstrategie.
            </p>
            <p style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.7rem", color: "rgba(255,255,255,0.25)", marginTop: "1rem", letterSpacing: "0.06em" }}>
              Berlin, Deutschland
            </p>
          </div>

          {/* Links */}
          <div>
            <div style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.62rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1.25rem" }}>
              Navigation
            </div>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { label: "Leistungen", href: "#leistungen" },
                { label: "Quick-Check", href: "#quick-check" },
                { label: "Über uns", href: "#ueber-uns" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "0.875rem", color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <div style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.62rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1.25rem" }}>
              Kontakt
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <a
                href="mailto:denis@vosustain.de"
                style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "0.875rem", color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--verde-bright)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
              >
                denis@vosustain.de
              </a>
              <a
                href="https://www.linkedin.com/in/denis-jaenicke"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "0.875rem", color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          paddingTop: "1.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}>
          <p style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.65rem", color: "rgba(255,255,255,0.2)", letterSpacing: "0.06em" }}>
            © {year} VO Sustain · Denis Jänicke
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {[{ label: "Impressum", href: "/impressum" }, { label: "Datenschutz", href: "/datenschutz" }].map((l) => (
              <a
                key={l.label}
                href={l.href}
                style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.62rem", color: "rgba(255,255,255,0.2)", textDecoration: "none", letterSpacing: "0.06em", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.2)")}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
