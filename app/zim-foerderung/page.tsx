import NavBar from "@/components/ui/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import ZimFoerderungClient from "./ZimFoerderungClient";

const BASE_URL = "https://www.vosustain.de";

export const metadata = {
  title: "ZIM-Förderung — Netzwerkmanagement & Projektförderung",
  description:
    "ZIM-Förderung für KMU: Einzelprojekte, Kooperationen, Netzwerke. Bis 500.000 EUR pro Unternehmen, bis 55 % Fördersatz. Aktiver Netzwerkmanager, 12+ Partner.",
  alternates: {
    canonical: `${BASE_URL}/zim-foerderung`,
    languages: {
      de: `${BASE_URL}/zim-foerderung`,
      en: `${BASE_URL}/zim-foerderung`,
      "x-default": `${BASE_URL}/zim-foerderung`,
    },
  },
  openGraph: {
    title: "ZIM-Förderung & Netzwerkmanagement | VO Sustain",
    description:
      "ZIM-Einzelprojekte, Kooperationen und Netzwerke. Bis 500.000 EUR pro Unternehmen. Aktiver ZIM-Netzwerkmanager mit 12+ Partnern.",
    url: `${BASE_URL}/zim-foerderung`,
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "VO Sustain", item: `${BASE_URL}` },
    { "@type": "ListItem", position: 2, name: "ZIM-Förderung", item: `${BASE_URL}/zim-foerderung` },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${BASE_URL}/zim-foerderung#service`,
  name: "ZIM-Förderung & Netzwerkmanagement",
  description:
    "ZIM-Förderberatung für KMU: Einzelprojekte, Kooperationen und Innovationsnetzwerke. Bis 500.000 EUR pro Unternehmen. Denis Jänicke ist aktiver ZIM-Netzwerkmanager (SEAWEED DECARBON POLYMER, 12+ Partner).",
  provider: {
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: "VO Sustain",
  },
  areaServed: { "@type": "Country", name: "Deutschland" },
  serviceType: "ZIM-Förderberatung",
  url: `${BASE_URL}/zim-foerderung`,
};

export default function ZimFoerderungPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <NavBar />
      <main>
        <ZimFoerderungClient />
      </main>
      <FooterSection />
    </>
  );
}
