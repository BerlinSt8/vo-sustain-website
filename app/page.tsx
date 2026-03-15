import NavBar from "@/components/ui/NavBar";
import WaveDivider from "@/components/ui/WaveDivider";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import WhySection from "@/components/sections/WhySection";
import SolutionSection from "@/components/sections/SolutionSection";
import ResultsSection from "@/components/sections/ResultsSection";
import LogoTickerSection from "@/components/sections/LogoTickerSection";
import QuickCheckSection from "@/components/sections/QuickCheckSection";
import AboutSection from "@/components/sections/AboutSection";
import FaqSection from "@/components/sections/FaqSection";
import FooterSection from "@/components/sections/FooterSection";
export const metadata = {
  title: "Förderberatung Cleantech KMU: ZIM, BAFA & CSRD | VO Sustain",
  description: "KI-gestützte Förderberatung für Cleantech & Nachhaltigkeit KMU. ZIM bis 600.000 €, BAFA bis 55 %, Erfolgshonorar. Fertige Konzepte in 48h — Quick-Check kostenlos.",
  openGraph: {
    title: "Förderberatung Cleantech KMU: ZIM, BAFA & CSRD | VO Sustain",
    description: "KI-gestützte Förderberatung für Cleantech & Nachhaltigkeit KMU. ZIM bis 600.000 €, BAFA bis 55 %, Erfolgshonorar. Fertige Konzepte in 48h.",
    url: "https://www.vosustain.de",
    type: "website" as const,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "VO Sustain – Förderberatung für Cleantech KMU" }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Förderberatung Cleantech KMU: ZIM, BAFA & CSRD | VO Sustain",
    description: "KI-gestützte Förderberatung für Cleantech KMU. ZIM bis 600.000 €, BAFA bis 55 %. Quick-Check kostenlos.",
    images: ["/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <NavBar />
      <main style={{ position: "relative", zIndex: 1, background: "var(--navy-dark)" }}>
        {/* 1 – Hero: brechende Welle */}
        <HeroSection />

        {/* 2 – Problem: Der Theorie-Nebel (navy bg, same as hero) */}
        <ProblemSection />

        {/* navy → off-white */}
        <WaveDivider fromColor="#0D1B2A" toColor="#F8F9FA" />

        {/* 2b – Why: Drei USPs */}
        <WhySection />

        {/* off-white → navy */}
        <WaveDivider fromColor="#F8F9FA" toColor="#0D1B2A" />

        {/* 3 – Solution: Die drei Kanäle */}
        <SolutionSection />

        {/* navy → off-white */}
        <WaveDivider fromColor="#0D1B2A" toColor="#F8F9FA" />

        {/* 4 – Results: Referenzen */}
        <ResultsSection />

        {/* 5 – Logo-Ticker: Förderprogramme */}
        <LogoTickerSection />

        {/* off-white → navy-muted */}
        <WaveDivider fromColor="#F8F9FA" toColor="#1A3252" />

        {/* 6 – Quick-Check: eingebettetes Formular */}
        <QuickCheckSection />

        {/* navy-muted → navy */}
        <WaveDivider fromColor="#1A3252" toColor="#0D1B2A" />

        {/* 6 – About: Denis Jänicke */}
        <AboutSection />

        {/* navy → off-white */}
        <WaveDivider fromColor="#0D1B2A" toColor="#F8F9FA" />

        {/* 7 – FAQ */}
        <FaqSection />
      </main>

      {/* Footer — reveals from beneath as FAQ section slides away */}
      <FooterSection />
    </>
  );
}
