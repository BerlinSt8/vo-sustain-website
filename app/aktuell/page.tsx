import NavBar from "@/components/ui/NavBar";
import WaveDivider from "@/components/ui/WaveDivider";
import FooterSection from "@/components/sections/FooterSection";
import AktuellClient from "./AktuellClient";
import AktuellHero from "./AktuellHero";
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
        {/* Parallax Hero — dark navy */}
        <AktuellHero />

        {/* Wave transition: navy → off-white */}
        <WaveDivider fromColor="var(--navy-dark)" toColor="var(--off-white)" />

        {/* Content — hell für optimale Lesbarkeit */}
        <div style={{ background: "var(--off-white)", minHeight: "60vh" }}>
          <AktuellClient articles={articles} />
        </div>
      </main>

      <FooterSection />
    </>
  );
}
