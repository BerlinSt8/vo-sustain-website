import NavBar from "@/components/ui/NavBar";
import WaveDivider from "@/components/ui/WaveDivider";
import FooterSection from "@/components/sections/FooterSection";
import AktuellClient from "./AktuellClient";
import AktuellHero from "./AktuellHero";
import type { Artikel } from "@/lib/types";
import artikelData from "@/data/aktuell.json";

export const metadata = {
  title: "Aktuell — Förderaufrufe & CSRD-News",
  description:
    "Aktuelle Förderaufrufe mit Fristen, CSRD-Updates (Omnibus I, VSME) und Neuigkeiten aus der deutschen Förderlandschaft — wöchentlich aktualisiert.",
  alternates: {
    canonical: "https://www.vosustain.de/aktuell",
  },
  openGraph: {
    title: "Aktuell — Förderaufrufe & CSRD-News | VO Sustain",
    description:
      "Aktuelle Förderaufrufe mit Fristen, CSRD-Updates (Omnibus I, VSME) und Neuigkeiten aus der deutschen Förderlandschaft.",
    url: "https://www.vosustain.de/aktuell",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "VO Sustain", item: "https://www.vosustain.de" },
    { "@type": "ListItem", position: 2, name: "Aktuell", item: "https://www.vosustain.de/aktuell" },
  ],
};

function buildItemListSchema(articles: Artikel[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Aktuelle Förderaufrufe & CSRD-News",
    numberOfItems: articles.length,
    itemListElement: articles.slice(0, 10).map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://www.vosustain.de/aktuell/${a.slug}`,
      name: a.title,
    })),
  };
}

export default function AktuellPage() {
  const articles = (artikelData as Artikel[]).sort(
    (a, b) => b.date.localeCompare(a.date)
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildItemListSchema(articles)) }}
      />
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
