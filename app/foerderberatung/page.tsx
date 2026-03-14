import NavBar from "@/components/ui/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import FoerderberatungClient from "./FoerderberatungClient";

const BASE_URL = "https://www.vosustain.de";

export const metadata = {
  title: "Förderberatung für KMU — Individuelle Fördermittelberatung",
  description:
    "Förderberatung für deutsche KMU. 64+ Programme (ZIM, BAFA, EFRE, Horizon Europe) — von der Potenzialanalyse bis zum Verwendungsnachweis. Schlüsselfertig.",
  alternates: {
    canonical: `${BASE_URL}/foerderberatung`,
  },
  openGraph: {
    title: "Förderberatung für KMU | VO Sustain",
    description:
      "Individuelle Fördermittelberatung: 64+ Programme, bis 55 % Zuschuss. Schlüsselfertig und audit-sicher.",
    url: `${BASE_URL}/foerderberatung`,
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "VO Sustain", item: `${BASE_URL}` },
    { "@type": "ListItem", position: 2, name: "Förderberatung", item: `${BASE_URL}/foerderberatung` },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${BASE_URL}/foerderberatung#service`,
  name: "Individuelle Förderberatung für KMU",
  description:
    "Schlüsselfertige Fördermittelberatung für deutsche KMU — von der Potenzialanalyse über Programm-Matching bis zum Verwendungsnachweis. ZIM, BAFA, EFRE, Horizon Europe und 60+ weitere Programme.",
  provider: {
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: "VO Sustain",
  },
  areaServed: { "@type": "Country", name: "Deutschland" },
  serviceType: "Fördermittelberatung",
  url: `${BASE_URL}/foerderberatung`,
};

export default function FoerderberatungPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <NavBar />
      <main>
        <FoerderberatungClient />
      </main>
      <FooterSection />
    </>
  );
}
