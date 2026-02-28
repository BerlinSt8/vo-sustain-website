import NavBar from "@/components/ui/NavBar";
import WaveDivider from "@/components/ui/WaveDivider";
import FooterSection from "@/components/sections/FooterSection";
import AktuellClient from "./AktuellClient";
import type { Artikel } from "@/lib/types";
import artikelData from "@/data/aktuell.json";

export const metadata = {
  title: "Aktuell | VO Sustain",
  description: "Aktuelle Förderaufrufe, CSRD-Updates und Neuigkeiten aus der Förderlandschaft für KMU.",
};

export default function AktuellPage() {
  const articles = (artikelData as Artikel[]).sort(
    (a, b) => b.date.localeCompare(a.date)
  );

  return (
    <>
      <NavBar />
      <main>
        {/* Navy Header */}
        <div
          style={{
            background: "var(--navy-dark)",
            padding: "8rem 8vw 5rem",
            paddingTop: "calc(80px + 4rem)",
          }}
        >
          <p
            style={{
              fontFamily: "'Roboto Mono', monospace",
              fontSize: "11px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "var(--verde-bright)",
              marginBottom: "1.2rem",
            }}
          >
            NEWS & UPDATES
          </p>
          <h1
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "white",
              lineHeight: 1.1,
              marginBottom: "1.2rem",
            }}
          >
            Aktuell.
          </h1>
          <p
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "1.1rem",
              color: "rgba(255,255,255,0.65)",
              maxWidth: "560px",
              lineHeight: 1.7,
            }}
          >
            Förderaufrufe mit Fristen, CSRD-Updates und Neuigkeiten aus der deutschen Förderlandschaft — wöchentlich aktualisiert.
          </p>
        </div>

        <WaveDivider fromColor="#080F1A" toColor="#F8F9FA" />

        {/* Content */}
        <div style={{ background: "var(--off-white)", minHeight: "60vh" }}>
          <AktuellClient articles={articles} />
        </div>

        <WaveDivider fromColor="#F8F9FA" toColor="#080F1A" />
      </main>

      <FooterSection />
    </>
  );
}
