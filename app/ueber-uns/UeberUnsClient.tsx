"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import CountUp from "@/components/ui/CountUp";
import FloatingOrbs from "@/components/ui/FloatingOrbs";

const programs = [
  "ZIM", "BAFA EEW", "EFRE", "Horizon Europe", "LIFE",
  "INNO-KOM", "SAB", "TAB/FTI", "BMWK", "Forschungszulage",
];

export default function UeberUnsClient() {
  const { t } = useLanguage();
  const u = t.ueberUns;

  return (
    <>
      {/* ── Hero ── */}
      <section
        style={{
          background: "var(--navy-dark, #080F1A)",
          padding: "10rem 8vw 5rem",
          position: "relative",
          overflow: "hidden",
          minHeight: "50vh",
        }}
      >
        <FloatingOrbs count={6} maxSize={2.5} minSize={1} />

        {/* Verde gradient orb */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: "5%",
            width: "clamp(250px, 35vw, 500px)",
            height: "clamp(250px, 35vw, 500px)",
            borderRadius: "50%",
            background: "radial-gradient(ellipse at center, rgba(39,174,96,0.06) 0%, transparent 70%)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: "'Roboto Mono', monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.18em",
              color: "var(--verde-bright, #2ECC71)",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "1.5rem",
            }}
          >
            {u.heroLabel}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)",
              fontWeight: 900,
              color: "white",
              lineHeight: 1.05,
              marginBottom: "0.75rem",
            }}
          >
            {u.heroHeadline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
              color: "rgba(255,255,255,0.7)",
              maxWidth: "600px",
              lineHeight: 1.6,
            }}
          >
            {u.heroSub}
          </motion.p>
        </div>
      </section>

      {/* ── Bio + Foto Section ── */}
      <section
        style={{
          background: "var(--navy, #0B1622)",
          padding: "5rem 8vw",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "5rem",
            alignItems: "start",
          }}
        >
          {/* Foto */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid rgba(39,174,96,0.2)",
              background: "rgba(255,255,255,0.04)",
              aspectRatio: "3/4",
              maxWidth: "340px",
              position: "relative",
            }}
          >
            <Image
              src="/denis.png"
              alt={u.imgAlt}
              width={340}
              height={453}
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
              priority
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "40%",
                background: "linear-gradient(to top, rgba(8,15,26,0.5) 0%, transparent 100%)",
                pointerEvents: "none",
              }}
            />
          </motion.div>

          {/* Content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                fontWeight: 900,
                color: "white",
                lineHeight: 1.1,
                marginBottom: "0.5rem",
              }}
            >
              {u.bioHeadline}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: "0.75rem",
                color: "var(--verde-bright, #2ECC71)",
                letterSpacing: "0.1em",
                marginBottom: "2rem",
              }}
            >
              {u.bioSubtitle}
            </motion.p>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "1.05rem",
                fontWeight: 600,
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1.55,
                borderLeft: "3px solid var(--verde, #27AE60)",
                paddingLeft: "1.5rem",
                marginBottom: "2.5rem",
                fontStyle: "italic",
              }}
            >
              &bdquo;{u.quote}&ldquo;
            </motion.blockquote>

            {/* Bio paragraphs */}
            {u.bioParagraphs.map((p: string, i: number) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 * i }}
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "0.92rem",
                  color: "rgba(255,255,255,0.78)",
                  lineHeight: 1.75,
                  marginBottom: "1.25rem",
                  maxWidth: "600px",
                }}
              >
                {p}
              </motion.p>
            ))}

            {/* Program tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "1.5rem" }}>
              {programs.map((p, i) => (
                <motion.span
                  key={p}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.04 * i }}
                  style={{
                    fontFamily: "'Roboto Mono', monospace",
                    fontSize: "0.68rem",
                    color: "rgba(255,255,255,0.68)",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.14)",
                    padding: "4px 10px",
                    borderRadius: "2px",
                    letterSpacing: "0.06em",
                  }}
                >
                  {p}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* Responsive override */}
        <style>{`
          @media (max-width: 768px) {
            section > div[style*="grid-template-columns"] {
              grid-template-columns: 1fr !important;
              gap: 2.5rem !important;
            }
          }
        `}</style>
      </section>

      {/* ── Zahlen-Sektion ── */}
      <section
        style={{
          background: "var(--navy-dark, #080F1A)",
          padding: "5rem 8vw",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              fontFamily: "'Roboto Mono', monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.18em",
              color: "var(--verde-bright, #2ECC71)",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "2.5rem",
            }}
          >
            {u.statsLabel}
          </motion.span>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "3rem",
            }}
          >
            {u.stats.map((stat: { value: string; label: string }, i: number) => {
              const match = stat.value.match(/^([>+]?)(\d+)(.*)$/);
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.12 * i, ease: [0.16, 1, 0.3, 1] }}
                  style={{ textAlign: "center" }}
                >
                  <div
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "clamp(2rem, 4vw, 3rem)",
                      fontWeight: 900,
                      color: "var(--verde-bright, #2ECC71)",
                      lineHeight: 1,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {match ? (
                      <CountUp
                        end={parseInt(match[2])}
                        prefix={match[1]}
                        suffix={match[3]}
                        duration={2000}
                      />
                    ) : (
                      stat.value
                    )}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: "0.85rem",
                      color: "rgba(255,255,255,0.6)",
                    }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Expertise Grid ── */}
      <section
        style={{
          background: "var(--navy, #0B1622)",
          padding: "5rem 8vw",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              fontFamily: "'Roboto Mono', monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.18em",
              color: "var(--verde-bright, #2ECC71)",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "1rem",
            }}
          >
            {u.expertiseLabel}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 900,
              color: "white",
              lineHeight: 1.1,
              marginBottom: "3rem",
            }}
          >
            {u.expertiseHeadline}
          </motion.h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {u.expertiseCards.map((card: { title: string; desc: string; tags: readonly string[] }, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 * i }}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "8px",
                  padding: "1.75rem",
                  transition: "border-color 0.3s, background 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(39,174,96,0.3)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "white",
                    marginBottom: "0.75rem",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "0.85rem",
                    color: "rgba(255,255,255,0.65)",
                    lineHeight: 1.65,
                    marginBottom: "1rem",
                  }}
                >
                  {card.desc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {card.tags.map((tag: string) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "'Roboto Mono', monospace",
                        fontSize: "0.6rem",
                        color: "var(--verde-bright, #2ECC71)",
                        background: "rgba(39,174,96,0.08)",
                        border: "1px solid rgba(39,174,96,0.2)",
                        padding: "2px 8px",
                        borderRadius: "2px",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact / CTA ── */}
      <section
        style={{
          background: "var(--navy-dark, #080F1A)",
          padding: "5rem 8vw 6rem",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 900,
              color: "white",
              lineHeight: 1.1,
              marginBottom: "1rem",
            }}
          >
            {u.ctaHeadline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "1rem",
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.65,
              marginBottom: "2.5rem",
            }}
          >
            {u.ctaBody}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
          >
            <a
              href="/#quick-check"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: "0.9rem",
                color: "white",
                background: "var(--verde, #27AE60)",
                padding: "0.85rem 2rem",
                borderRadius: "6px",
                textDecoration: "none",
                transition: "background 0.2s, transform 0.2s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--verde-bright, #2ECC71)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--verde, #27AE60)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {u.ctaButton}
            </a>

            <a
              href={`mailto:${u.email}`}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: "0.9rem",
                color: "var(--verde-bright, #2ECC71)",
                background: "transparent",
                padding: "0.85rem 2rem",
                borderRadius: "6px",
                textDecoration: "none",
                border: "1px solid rgba(39,174,96,0.3)",
                transition: "border-color 0.2s, background 0.2s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(39,174,96,0.6)";
                e.currentTarget.style.background = "rgba(39,174,96,0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(39,174,96,0.3)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              {u.ctaEmail}
            </a>
          </motion.div>

          {/* LinkedIn link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            style={{ marginTop: "2rem" }}
          >
            <a
              href="https://www.linkedin.com/in/denis-jaenicke"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: "0.72rem",
                color: "rgba(255,255,255,0.5)",
                textDecoration: "none",
                letterSpacing: "0.05em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
            >
              LinkedIn &rarr;
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
