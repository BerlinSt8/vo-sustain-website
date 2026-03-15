import NavBar from "@/components/ui/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import programmeData from "@/data/foerderprogramme.json";
import FoerderprogrammeHub from "./FoerderprogrammeHub";

const BASE_URL = "https://www.vosustain.de";

export const metadata = {
  title: "Förderprogramme Deutschland — 74 Programme für KMU | VO Sustain",
  description:
    "Alle 74 Förderprogramme für deutsche KMU im Überblick: 18 Bundesprogramme, 52 Landesprogramme, 4 EU-Programme. ZIM, BAFA, EFRE, Horizon Europe und mehr.",
  alternates: {
    canonical: `${BASE_URL}/foerderprogramme`,
  },
  openGraph: {
    title: "74 Förderprogramme für KMU in Deutschland | VO Sustain",
    description:
      "Vollständiges Verzeichnis: Bund, Land & EU-Förderprogramme für KMU — Zuschüsse, Darlehen, Garantien. Filterbar nach Ebene.",
    url: `${BASE_URL}/foerderprogramme`,
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "VO Sustain", item: BASE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Förderprogramme",
      item: `${BASE_URL}/foerderprogramme`,
    },
  ],
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Förderprogramme Deutschland — 74 Programme für KMU",
  description:
    "Vollständiges Verzeichnis aller Förderprogramme für deutsche KMU: Bund, Land und EU.",
  url: `${BASE_URL}/foerderprogramme`,
  numberOfItems: programmeData.length,
  provider: {
    "@type": "Organization",
    name: "VO Sustain",
    url: BASE_URL,
  },
};

export default function FoerderprogrammePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionSchema),
        }}
      />
      <NavBar />
      <FoerderprogrammeHub programme={programmeData} />
      <FooterSection />
    </>
  );
}
