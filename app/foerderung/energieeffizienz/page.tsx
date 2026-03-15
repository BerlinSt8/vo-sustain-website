import NavBar from "@/components/ui/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import EnergieeffizienzClient from "./EnergieeffizienzClient";

const BASE_URL = "https://www.vosustain.de";

export const metadata = {
  title: "Förderung Energieeffizienz — BAFA EEW, BEG & KfW für KMU | VO Sustain",
  description:
    "Energieeffizienz-Förderung für KMU: BAFA EEW Module 1-5 (bis 55 % Zuschuss), BEG Heizung & Gebäude, KfW Energieeffizienz-Kredite, Contracting-Förderung. Förderberatung für deutsche KMU.",
  alternates: {
    canonical: `${BASE_URL}/foerderung/energieeffizienz`,
  },
  openGraph: {
    title: "Förderung Energieeffizienz — BAFA EEW, BEG & KfW für KMU | VO Sustain",
    description:
      "BAFA EEW Module 1-5, BEG, KfW: Energieeffizienz-Förderung für KMU. Prozesswärme, Gebäudesanierung, Anlagentechnik — bis 55 % Zuschuss.",
    url: `${BASE_URL}/foerderung/energieeffizienz`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Förderung Energieeffizienz | VO Sustain",
    description: "BAFA EEW, BEG, KfW: Energieeffizienz-Förderung für KMU. Bis 55 % Zuschuss auf Investitionen.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "VO Sustain", item: `${BASE_URL}` },
    { "@type": "ListItem", position: 2, name: "Förderung", item: `${BASE_URL}/foerderung` },
    { "@type": "ListItem", position: 3, name: "Energieeffizienz", item: `${BASE_URL}/foerderung/energieeffizienz` },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${BASE_URL}/foerderung/energieeffizienz#service`,
  name: "Förderberatung Energieeffizienz — BAFA EEW, BEG & KfW für KMU",
  description:
    "Förderberatung für Energieeffizienz: BAFA EEW Module 1-5 (Prozesswärme, Anlagentechnik, MSR), BEG Heizungsförderung, KfW Energieeffizienz-Kredite, Contracting-Förderung. Spezialisiert auf deutsche KMU.",
  provider: {
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: "VO Sustain",
  },
  areaServed: { "@type": "Country", name: "Germany" },
  serviceType: "Fördermittelberatung Energieeffizienz",
  url: `${BASE_URL}/foerderung/energieeffizienz`,
};

export default function EnergieeffizienzPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <NavBar />
      <main>
        <EnergieeffizienzClient />
      </main>
      <FooterSection />
    </>
  );
}
