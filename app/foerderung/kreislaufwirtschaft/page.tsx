import NavBar from "@/components/ui/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import KreislaufwirtschaftClient from "./KreislaufwirtschaftClient";

const BASE_URL = "https://www.vosustain.de";

export const metadata = {
  title: "Förderung Kreislaufwirtschaft — Programme für KMU | VO Sustain",
  description:
    "Förderprogramme für Kreislaufwirtschaft: ZIM, BAFA EEW, EFRE, EU LIFE, KfW und Forschungszulage. Recycling, Ressourceneffizienz, Bioökonomie und Waste-to-Value — Förderberatung für deutsche KMU.",
  alternates: {
    canonical: `${BASE_URL}/foerderung/kreislaufwirtschaft`,
  },
  openGraph: {
    title: "Förderung Kreislaufwirtschaft — Programme für KMU | VO Sustain",
    description:
      "ZIM, BAFA EEW, EFRE, LIFE, KfW: Förderprogramme für Kreislaufwirtschaft, Recycling und Ressourceneffizienz. Förderberatung für deutsche KMU.",
    url: `${BASE_URL}/foerderung/kreislaufwirtschaft`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Förderung Kreislaufwirtschaft | VO Sustain",
    description: "Förderprogramme für Kreislaufwirtschaft: ZIM, BAFA, EFRE, LIFE, KfW. Beratung für KMU.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "VO Sustain", item: `${BASE_URL}` },
    { "@type": "ListItem", position: 2, name: "Förderung", item: `${BASE_URL}/foerderung` },
    { "@type": "ListItem", position: 3, name: "Kreislaufwirtschaft", item: `${BASE_URL}/foerderung/kreislaufwirtschaft` },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${BASE_URL}/foerderung/kreislaufwirtschaft#service`,
  name: "Förderberatung Kreislaufwirtschaft — Förderprogramme für Recycling, Ressourceneffizienz und Circular Economy",
  description:
    "Förderberatung für Kreislaufwirtschaft: ZIM für F&E, BAFA EEW für Energieeffizienz in Recycling-Anlagen, EFRE Landesförderung, EU LIFE für Demonstrationsprojekte, KfW für Investitionen. Spezialisiert auf deutsche KMU.",
  provider: {
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: "VO Sustain",
  },
  areaServed: { "@type": "Country", name: "Germany" },
  serviceType: "Fördermittelberatung Kreislaufwirtschaft",
  url: `${BASE_URL}/foerderung/kreislaufwirtschaft`,
};

export default function KreislaufwirtschaftPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <NavBar />
      <main>
        <KreislaufwirtschaftClient />
      </main>
      <FooterSection />
    </>
  );
}
