"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import FloatingOrbs from "@/components/ui/FloatingOrbs";

const NetworkScene3D = dynamic(() => import("@/components/ui/NetworkScene3D"), { ssr: false });

const OUTCOME_ICONS = [
  <svg key="shield" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>,
  <svg key="trend" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>,
  <svg key="target" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>,
];
const CUSTOMER_LOGOS = [
  "/logos/kunden/kelorina.png",
  "/logos/kunden/green-island.png",
  "/logos/kunden/kiyora.png",
];
const CUSTOMER_ACCENTS = ["#27AE60", "#2ECC71", "#1E8449"];

/**
 * Sticky stack card — each card is position:sticky in a shared tall container.
 * Cards stack on top of each other as you scroll, with later cards covering earlier ones.
 */
function StackCard({
  customer,
  logo,
  accent,
  index,
  total,
}: {
  customer: { nr: string; company: string; result: string; type: string; program: string; desc: string; tags: readonly string[] };
  logo: string;
  accent: string;
  index: number;
  total: number;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const pinTop = isMobile ? 56 : 80;
  const cardHeight = isMobile ? 400 : 500;

  if (isMobile) {
    return (
      <div style={{ marginBottom: "1.5rem" }}>
        <CardContent
          customer={customer}
          logo={logo}
          accent={accent}
          index={index}
          isMobile={true}
        />
      </div>
    );
  }

  return (
    <div
      style={{
        position: "sticky",
        top: `${pinTop}px`,
        zIndex: index + 1,
        height: `calc(100vh - ${pinTop + 40}px)`,
        marginBottom: "100vh",
      }}
    >
      <CardContent
        customer={customer}
        logo={logo}
        accent={accent}
        index={index}
        isMobile={false}
      />
    </div>
  );
}

function CardContent({
  customer,
  logo,
  accent,
  index,
  isMobile,
}: {
  customer: { nr: string; company: string; result: string; type: string; program: string; desc: string; tags: readonly string[] };
  logo: string;
  accent: string;
  index: number;
  isMobile: boolean;
}) {
  return (
    <div
      style={{
        height: "100%",
        position: "relative",
        borderRadius: 16,
        overflow: "hidden",
        background: `linear-gradient(145deg, #0D1E30 0%, #0A1628 60%, #0D1B2A 100%)`,
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: `
          0 ${8 + index * 16}px ${40 + index * 30}px rgba(0,0,0,0.7),
          0 0 0 1px rgba(255,255,255,0.03),
          inset 0 1px 0 rgba(255,255,255,0.05),
          inset 0 -1px 0 rgba(0,0,0,0.2)
        `,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: isMobile ? "2rem 1.5rem" : "4rem 8vw",
      }}
    >
      {/* Subtle accent glow */}
      <div style={{
        position: "absolute", top: 0, right: 0, width: "50%", height: "100%",
        background: `
          radial-gradient(ellipse 80% 60% at 100% 50%, ${accent}18 0%, transparent 70%),
          radial-gradient(ellipse 40% 40% at 90% 30%, ${accent}10 0%, transparent 50%)
        `,
        pointerEvents: "none",
      }} />

      {/* Card content */}
      <div style={{
        maxWidth: "1100px", margin: "0 auto", width: "100%",
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        gap: isMobile ? "1.5rem" : "4rem",
        alignItems: "center",
        position: "relative",
        zIndex: 2,
      }}>
        {/* Mobile: Result first */}
        {isMobile && (
          <div style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", paddingBottom: "1.25rem" }}>
            <div style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.55rem", color: "rgba(255,255,255,0.45)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.4rem" }}>
              {customer.type}
            </div>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(2rem, 9vw, 2.8rem)", fontWeight: 900, color: accent, lineHeight: 1, letterSpacing: "-0.02em", whiteSpace: "nowrap" }}>
              {customer.result}
            </div>
          </div>
        )}

        {/* Left */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: isMobile ? "1rem" : "2rem" }}>
            <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.18em", color: accent, textTransform: "uppercase" }}>
              {customer.nr}
            </span>
            <div style={{ height: "1px", flex: 1, background: "rgba(255,255,255,0.08)" }} />
            <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.62rem", color: "rgba(255,255,255,0.62)", letterSpacing: "0.1em" }}>
              {customer.program}
            </span>
          </div>

          {/* Company logo + name */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
            <div style={{
              background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: "10px", padding: isMobile ? "6px 10px" : "8px 14px",
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              <img
                src={logo}
                alt={`${customer.company} Logo`}
                style={{ height: isMobile ? "28px" : "36px", width: "auto", maxWidth: isMobile ? "90px" : "120px", objectFit: "contain", display: "block", filter: "brightness(1.1)" }}
              />
            </div>
            <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: isMobile ? "1.4rem" : "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 900, color: "white", lineHeight: 1.1, margin: 0 }}>
              {customer.company}
            </h3>
          </div>

          <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: isMobile ? "0.9rem" : "1rem", color: "rgba(255,255,255,0.78)", lineHeight: 1.75, marginBottom: "1.25rem", maxWidth: "420px" }}>
            {customer.desc}
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {customer.tags.map((tag) => (
              <span key={tag} style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.62rem", color: "rgba(255,255,255,0.65)", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.14)", padding: "4px 10px", borderRadius: "2px", letterSpacing: "0.06em" }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right – Result (desktop only) */}
        {!isMobile && (
          <div style={{ textAlign: "right" }}>
            <div style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.62rem", color: "rgba(255,255,255,0.62)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1rem" }}>
              {customer.type}
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                fontWeight: 900,
                color: accent,
                lineHeight: 1,
                letterSpacing: "-0.02em",
                textShadow: `0 0 40px ${accent}40`,
              }}
            >
              {customer.result}
            </motion.div>
          </div>
        )}
      </div>

    </div>
  );
}

export default function ResultsSection() {
  const { t } = useLanguage();

  return (
    <section style={{ background: "var(--off-white)" }}>
      {/* Outcome pillars */}
      <div style={{ padding: "6rem 8vw 5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            style={{ marginBottom: "1.5rem" }}
          >
            <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.18em", color: "var(--verde-dark)", textTransform: "uppercase" }}>
              {t.results.label}
            </span>
          </motion.div>

          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: "var(--navy)", lineHeight: 1.05, marginBottom: "1.25rem", maxWidth: "700px" }}>
            <span style={{ display: "flex", flexWrap: "wrap", gap: "0 0.25em" }}>
              {t.results.headline.split(" ").map((word, i) => (
                <motion.span
                  key={`rh-${i}`}
                  initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  style={{ display: "inline-block" }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "1.05rem", color: "#555", lineHeight: 1.7, maxWidth: "520px", marginBottom: "4rem" }}
          >
            {t.results.body}
          </motion.p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {t.results.outcomes.map((o, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}
              >
                <div style={{
                  width: "40px", height: "40px", minWidth: "40px",
                  background: "rgba(39,174,96,0.1)", border: "1px solid rgba(39,174,96,0.25)",
                  borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1rem", color: "var(--verde-dark)",
                }}>
                  {OUTCOME_ICONS[i]}
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.95rem", fontWeight: 800, color: "var(--navy)", marginBottom: "0.5rem" }}>
                    {o.title}
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "#666", lineHeight: 1.6 }}>{o.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 3D Network transition — bridges light section into dark stack cards */}
      <NetworkScene3D />

      {/* Stack Cards — NO overflow on any wrapper */}
      <div style={{ background: "var(--navy-dark)", position: "relative" }}>
        {/* Orbs background — separate layer */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
          <FloatingOrbs count={12} maxSize={4} minSize={1} />
        </div>

        {/*
          CRITICAL: This wrapper must NOT have overflow set.
          maxWidth + margin auto centers content.
          Cards inside use position:sticky which requires NO overflow ancestors.
        */}
        <div style={{ maxWidth: "1300px", margin: "0 auto", position: "relative", zIndex: 2, padding: "2rem 4vw 0" }}>
          {/* Label */}
          <div style={{ padding: "2rem 4vw 1.5rem", display: "flex", alignItems: "center", gap: "1rem" }}>
            <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.18em", color: "rgba(255,255,255,0.55)", textTransform: "uppercase", whiteSpace: "nowrap" }}>
              {t.results.refsLabel}
            </span>
            <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.8rem", fontWeight: 800, color: "var(--verde-bright)" }}>
              {t.results.customers.length}
            </span>
          </div>

          {/* Stack */}
          {t.results.customers.map((customer, i) => (
            <StackCard
              key={customer.company}
              customer={customer}
              logo={CUSTOMER_LOGOS[i]}
              accent={CUSTOMER_ACCENTS[i]}
              index={i}
              total={t.results.customers.length}
            />
          ))}

          <div style={{ height: "2rem" }} />
        </div>
      </div>
    </section>
  );
}
