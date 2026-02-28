import NavBar from "@/components/ui/NavBar";
import WaveDivider from "@/components/ui/WaveDivider";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import ResultsSection from "@/components/sections/ResultsSection";
import LogoTickerSection from "@/components/sections/LogoTickerSection";
import QuickCheckSection from "@/components/sections/QuickCheckSection";
import AboutSection from "@/components/sections/AboutSection";
import FooterSection from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        {/* 1 – Hero: brechende Welle */}
        <HeroSection />

        {/* navy → off-white */}
        <WaveDivider fromColor="#080F1A" toColor="#F8F9FA" />

        {/* 2 – Problem: Der Theorie-Nebel */}
        <ProblemSection />

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
      </main>

      {/* 7 – Footer */}
      <FooterSection />
    </>
  );
}
