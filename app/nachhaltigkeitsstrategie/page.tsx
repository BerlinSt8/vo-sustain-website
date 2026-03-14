import NavBar from "@/components/ui/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import NachhaltigkeitsstrategieClient from "./NachhaltigkeitsstrategieClient";

const BASE_URL = "https://www.vosustain.de";

export const metadata = {
  title: "Nachhaltigkeitsstrategie — Roadmap & Umsetzung für KMU",
  description:
    "Nachhaltigkeitsstrategie für KMU: THG-Bilanz, Wesentlichkeitsanalyse, förderfinanzierte Roadmap. Bis 80 % Zuschuss für Energieeffizienzmaßnahmen — schlüsselfertig.",
  alternates: {
    canonical: `${BASE_URL}/nachhaltigkeitsstrategie`,
  },
  openGraph: {
    title: "Nachhaltigkeitsstrategie für KMU | VO Sustain",
    description:
      "THG-Bilanz, Wesentlichkeitsanalyse und förderfinanzierte 3-Jahres-Roadmap. Roadmaps, die priorisieren statt überfordern.",
    url: `${BASE_URL}/nachhaltigkeitsstrategie`,
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "VO Sustain", item: `${BASE_URL}` },
    { "@type": "ListItem", position: 2, name: "Nachhaltigkeitsstrategie", item: `${BASE_URL}/nachhaltigkeitsstrategie` },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${BASE_URL}/nachhaltigkeitsstrategie#service`,
  name: "Nachhaltigkeitsstrategie für KMU",
  description:
    "Förderfinanzierte Nachhaltigkeitsstrategie für deutsche KMU: THG-Bilanz Scope 1+2, Wesentlichkeitsanalyse, priorisierte 3-Jahres-Roadmap mit BAFA, KfW und ZIM-Förderung.",
  provider: {
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: "VO Sustain",
  },
  areaServed: { "@type": "Country", name: "Deutschland" },
  serviceType: "Nachhaltigkeitsberatung",
  url: `${BASE_URL}/nachhaltigkeitsstrategie`,
};

export default function NachhaltigkeitsstrategiePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <NavBar />
      <main>
        <NachhaltigkeitsstrategieClient />
      </main>
      <FooterSection />
    </>
  );
}
