import NavBar from "@/components/ui/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import BafaFoerderungClient from "./BafaFoerderungClient";

const BASE_URL = "https://www.vosustain.de";

export const metadata = {
  title: "BAFA-Förderung — Energieberatung, EEW & Transformation für KMU",
  description:
    "BAFA-Förderung für KMU: Bis 80 % für Energieberatung, bis 55 % für Effizienzinvestitionen (EEW), bis 70 % für Heizungsförderung (BEG). Antragstellung vor Vorhabenbeginn — wir koordinieren alles.",
  alternates: {
    canonical: `${BASE_URL}/bafa-foerderung`,
    languages: {
      de: `${BASE_URL}/bafa-foerderung`,
      en: `${BASE_URL}/bafa-foerderung`,
      "x-default": `${BASE_URL}/bafa-foerderung`,
    },
  },
  openGraph: {
    title: "BAFA-Förderung: Energieberatung, EEW & Transformation | VO Sustain",
    description:
      "Bis 80 % Zuschuss für Energieberatung, bis 55 % für EEW-Investitionen. Antragskoordination vor Vorhabenbeginn — der häufigste Fehler, den KMU teuer bezahlen.",
    url: `${BASE_URL}/bafa-foerderung`,
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "VO Sustain", item: `${BASE_URL}` },
    { "@type": "ListItem", position: 2, name: "BAFA-Förderung", item: `${BASE_URL}/bafa-foerderung` },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${BASE_URL}/bafa-foerderung#service`,
  name: "BAFA-Förderung — Energieberatung, EEW & Transformation",
  description:
    "BAFA-Förderberatung für KMU: Energieberatung Mittelstand (bis 80 %), Bundesförderung EEW (bis 55 %), BAFA BEG Heizungsförderung (bis 70 %), Transformationsprogramm. Antragskoordination vor Vorhabenbeginn.",
  provider: {
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: "VO Sustain",
  },
  areaServed: { "@type": "Country", name: "Deutschland" },
  serviceType: "BAFA-Förderberatung",
  url: `${BASE_URL}/bafa-foerderung`,
};

export default function BafaFoerderungPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <NavBar />
      <main>
        <BafaFoerderungClient />
      </main>
      <FooterSection />
    </>
  );
}
