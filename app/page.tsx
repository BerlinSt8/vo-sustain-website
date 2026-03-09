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
import { translations } from "@/lib/i18n/translations";

export const metadata = {
  title: "Förderberatung Cleantech KMU: ZIM, BAFA & CSRD | VO Sustain",
  description: "KI-gestützte Förderberatung für Cleantech & Nachhaltigkeit KMU. ZIM bis 600.000 €, BAFA bis 55 %, Erfolgshonorar. Fertige Konzepte in 48h — Quick-Check kostenlos.",
  openGraph: {
    title: "Förderberatung Cleantech KMU: ZIM, BAFA & CSRD | VO Sustain",
    description: "KI-gestützte Förderberatung für Cleantech & Nachhaltigkeit KMU. ZIM bis 600.000 €, BAFA bis 55 %, Erfolgshonorar. Fertige Konzepte in 48h.",
    url: "https://www.vosustain.de",
    type: "website" as const,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: translations.de.faq.items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <NavBar />
      <main>
        {/* 1 – Hero: brechende Welle */}
        <HeroSection />

        {/* navy → off-white */}
        <WaveDivider fromColor="#080F1A" toColor="#F8F9FA" />

        {/* 2 – Problem: Der Theorie-Nebel */}
        <ProblemSection />

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

      {/* 7 – Footer */}
      <FooterSection />
    </>
  );
}
