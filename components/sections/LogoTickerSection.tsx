"use client";

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
        borderRadius: "12px",
        padding: "18px 28px",
        margin: "0 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "88px",
        minWidth: "180px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        flexShrink: 0,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        style={{ objectFit: "contain", maxHeight: "52px", maxWidth: "140px", width: "auto" }}
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
          FÖRDERLANDSCHAFT
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
          Eine Auswahl der Programme
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
          Bundesweit, regional, europäisch — wir navigieren die gesamte Förderlandschaft für Ihr KMU.
        </p>
      </div>

      {/* Ticker Rows */}
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
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
