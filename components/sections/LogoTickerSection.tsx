"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
/* eslint-disable @next/next/no-img-element */
// Reihe 1: Bundesebene – Kernprogramme
const ROW_1 = [
  { src: "/logos/zim.png",      alt: "ZIM – Zentrales Innovationsprogramm Mittelstand" },
  { src: "/logos/bmbf.svg",     alt: "BMBF – Bundesministerium für Bildung und Forschung" },
  { src: "/logos/bmwk-neu.png", alt: "BMWK – Bundesministerium für Wirtschaft und Klimaschutz" },
  { src: "/logos/kfw.png",      alt: "KfW" },
  { src: "/logos/bafa.jpg",     alt: "BAFA" },
  { src: "/logos/dlr.png",      alt: "DLR Projektträger" },
];

// Reihe 2: Landes- & EU-Ebene
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
      style={{
        background: "#fff",
        borderRadius: "14px",
        padding: "16px 32px",
        margin: "0 14px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100px",
        minWidth: "200px",
        boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
        flexShrink: 0,
        transition: "box-shadow 0.2s ease, transform 0.2s ease",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 6px 24px rgba(0,0,0,0.13)";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 16px rgba(0,0,0,0.07)";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        style={{ objectFit: "contain", maxHeight: "60px", maxWidth: "168px", width: "100%", height: "auto" }}
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
  // Triple for seamless loop at all speeds
  const items = [...logos, ...logos, ...logos];
  const animName = direction === "left" ? "ticker-left" : "ticker-right";

  return (
    <div
      style={{
        overflow: "hidden",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
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
        background: "#F8F9FA",
        padding: "80px 0 72px",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "52px", padding: "0 24px" }}>
        <p
          style={{
            fontFamily: "'Roboto Mono', monospace",
            fontSize: "11px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "#27AE60",
            marginBottom: "12px",
          }}
        >
          {t.logoTicker.label}
        </p>
        <h2
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 900,
            fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
            color: "#080F1A",
            margin: "0 0 12px",
          }}
        >
          {t.logoTicker.headline}
        </h2>
        <p
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "1rem",
            color: "#4A5568",
            maxWidth: "520px",
            margin: "0 auto",
            lineHeight: 1.6,
          }}
        >
          {t.logoTicker.body}
        </p>
      </div>

      {/* Ticker Rows */}
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <TickerRow logos={ROW_1} direction="left"  duration={28} />
        <TickerRow logos={ROW_2} direction="right" duration={34} />
      </div>

      {/* Keyframe animations */}
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
      `}</style>
    </section>
  );
}
