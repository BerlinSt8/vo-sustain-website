"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function FooterSection() {
  const { t } = useLanguage();
  const year = 2026;

  return (
    <footer style={{ background: "var(--navy-dark)", position: "relative" }}>
      {/* Gradient separator — verde glow line */}
      <div style={{
        height: "1px",
        background: "linear-gradient(90deg, transparent 0%, rgba(39,174,96,0.3) 30%, rgba(39,174,96,0.5) 50%, rgba(39,174,96,0.3) 70%, transparent 100%)",
      }} />

      <div style={{ padding: "4rem 8vw 2rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Top row */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "4rem",
            marginBottom: "4rem",
          }}>
            {/* Brand */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <img src="/vo-crystal.png" alt="VO Sustain" style={{ height: "36px", width: "auto", borderRadius: "3px" }} />
                <div>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.1rem", fontWeight: 900, color: "white", letterSpacing: "0.05em", lineHeight: 1.1 }}>
                    VO SUSTAIN
                  </div>
                  <div style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.52rem", color: "var(--verde-bright)", letterSpacing: "0.18em", marginTop: "2px" }}>
                    VERDE ONDA
                  </div>
                </div>
              </div>
              <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "0.875rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, maxWidth: "320px", marginBottom: "1.25rem" }}>
                {t.footer.tagline}
              </p>
              <p style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.65rem", color: "rgba(255,255,255,0.2)", letterSpacing: "0.06em" }}>
                {t.footer.location}
              </p>
            </div>

            {/* Navigation */}
            <div>
              <div style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.6rem", color: "rgba(255,255,255,0.25)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
                {t.footer.navLabel}
              </div>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {t.footer.navLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "0.875rem", color: "rgba(255,255,255,0.45)", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--verde-bright)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kontakt */}
            <div>
              <div style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.6rem", color: "rgba(255,255,255,0.25)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
                {t.footer.contactLabel}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                <a
                  href="mailto:denis@vosustain.de"
                  style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "0.875rem", color: "rgba(255,255,255,0.45)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--verde-bright)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
                >
                  denis@vosustain.de
                </a>
                <a
                  href="https://www.linkedin.com/in/denis-jaenicke"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.45)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--verde-bright)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{
            borderTop: "1px solid rgba(255,255,255,0.05)",
            paddingTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}>
            <p style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.62rem", color: "rgba(255,255,255,0.18)", letterSpacing: "0.06em" }}>
              © {year} VO Sustain · Denis Jänicke
            </p>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              {[
                { label: t.footer.impressum, href: "/impressum" },
                { label: t.footer.datenschutz, href: "/datenschutz" },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.6rem", color: "rgba(255,255,255,0.18)", textDecoration: "none", letterSpacing: "0.06em", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.18)")}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile responsive override */}
      <style>{`
        @media (max-width: 768px) {
          footer > div:last-of-type > div:first-child > div:first-child {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
