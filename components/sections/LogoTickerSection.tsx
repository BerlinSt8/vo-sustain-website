"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
/* eslint-disable @next/next/no-img-element */

const ROW_1 = [
  { src: "/logos/zim.png",      alt: "ZIM – Zentrales Innovationsprogramm Mittelstand" },
  { src: "/logos/bmbf.svg",     alt: "BMBF – Bundesministerium für Bildung und Forschung" },
  { src: "/logos/bmwk-neu.png", alt: "BMWK – Bundesministerium für Wirtschaft und Klimaschutz" },
  { src: "/logos/kfw.png",      alt: "KfW" },
  { src: "/logos/bafa.jpg",     alt: "BAFA" },
  { src: "/logos/dlr.png",      alt: "DLR Projektträger" },
];

const ROW_2 = [
  { src: "/logos/sab.png",     alt: "SAB – Sächsische Aufbaubank" },
  { src: "/logos/tab.jpg",     alt: "Thüringer Aufbaubank" },
  { src: "/logos/ibb.jpg",     alt: "Investitionsbank Berlin" },
  { src: "/logos/wipano.jpg",  alt: "WIPANO" },
  { src: "/logos/horizon.png", alt: "Horizon Europe" },
];

function LogoCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className="logo-card"
      style={{
        background: "white",
        borderRadius: "12px",
        padding: "14px 28px",
        margin: "0 10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "88px",
        minWidth: "180px",
        border: "1px solid rgba(0,0,0,0.06)",
        flexShrink: 0,
        transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="logo-img"
        style={{
          objectFit: "contain",
          maxHeight: "52px",
          maxWidth: "152px",
          width: "100%",
          height: "auto",
          filter: "grayscale(100%) opacity(0.55)",
          transition: "filter 0.4s ease",
        }}
      />
    </div>
  );
}

function TickerRow({
  logos,
  direction,
  duration,
}: {
  logos: { src: string; alt: string }[];
  direction: "left" | "right";
  duration: number;
}) {
  const items = [...logos, ...logos, ...logos];
  const animName = direction === "left" ? "ticker-left" : "ticker-right";

  return (
    <div
      style={{
        overflow: "hidden",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
      }}
    >
      <div
        className="ticker-row"
        style={{
          display: "flex",
          width: "max-content",
          animation: `${animName} ${duration}s linear infinite`,
        }}
      >
        {items.map((logo, i) => (
          <LogoCard key={i} {...logo} />
        ))}
      </div>
    </div>
  );
}

export default function LogoTickerSection() {
  const { t } = useLanguage();
  return (
    <section
      style={{
        background: "var(--off-white)",
        padding: "72px 0 64px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "48px", padding: "0 24px" }}>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          style={{
            fontFamily: "'Roboto Mono', monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--verde-dark)",
            marginBottom: "1rem",
          }}
        >
          {t.logoTicker.label}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 900,
            fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
            color: "var(--navy-dark)",
            margin: "0 0 12px",
          }}
        >
          {t.logoTicker.headline}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "1rem",
            color: "var(--ct4)",
            maxWidth: "520px",
            margin: "0 auto",
            lineHeight: 1.6,
          }}
        >
          {t.logoTicker.body}
        </motion.p>
      </div>

      {/* Ticker Rows */}
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <TickerRow logos={ROW_1} direction="left"  duration={28} />
        <TickerRow logos={ROW_2} direction="right" duration={34} />
      </div>

      <style>{`
        @keyframes ticker-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
        @keyframes ticker-right {
          from { transform: translateX(-33.333%); }
          to   { transform: translateX(0); }
        }
        .ticker-row:hover {
          animation-play-state: paused;
        }
        .logo-card:hover {
          border-color: rgba(39,174,96,0.25);
          box-shadow: 0 8px 24px rgba(39,174,96,0.1), 0 0 0 1px rgba(39,174,96,0.05);
          transform: translateY(-2px);
        }
        .logo-card:hover .logo-img {
          filter: grayscale(0%) opacity(1) !important;
        }
      `}</style>
    </section>
  );
}
