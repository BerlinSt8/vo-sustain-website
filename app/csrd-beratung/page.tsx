import NavBar from "@/components/ui/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import CsrdBeratungClient from "./CsrdBeratungClient";

const BASE_URL = "https://www.vosustain.de";

export const metadata = {
  title: "CSRD-Beratung — Nachhaltigkeitsberichterstattung für KMU",
  description:
    "CSRD-Beratung für KMU nach VSME-Standard. Wesentlichkeitsanalyse, ESG-Datenmanagement, Berichtspflicht-Check in 30 Minuten — proportional und audit-sicher.",
  alternates: {
    canonical: `${BASE_URL}/csrd-beratung`,
  },
  openGraph: {
    title: "CSRD-Beratung für KMU | VO Sustain",
    description:
      "Pragmatische CSRD-Beratung nach VSME-Standard. Berichtspflicht-Check, Wesentlichkeitsanalyse, ESG-Daten — proportional und audit-sicher.",
    url: `${BASE_URL}/csrd-beratung`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "CSRD-Beratung für KMU | VO Sustain",
    description: "CSRD nach VSME-Standard. Berichtspflicht-Check, Wesentlichkeitsanalyse, ESG-Daten — proportional und audit-sicher.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "VO Sustain", item: `${BASE_URL}` },
    { "@type": "ListItem", position: 2, name: "CSRD-Beratung", item: `${BASE_URL}/csrd-beratung` },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${BASE_URL}/csrd-beratung#service`,
  name: "CSRD-Beratung & Nachhaltigkeitsberichterstattung",
  description:
    "Pragmatische CSRD-Beratung für KMU nach VSME-Standard — Berichtspflicht-Check, Wesentlichkeitsanalyse, ESG-Datenmanagement und Shield-Template für Lieferketten-Anfragen.",
  provider: {
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: "VO Sustain",
  },
  areaServed: { "@type": "Country", name: "Deutschland" },
  serviceType: "CSRD-Beratung",
  url: `${BASE_URL}/csrd-beratung`,
};

export default function CsrdBeratungPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <NavBar />
      <main>
        <CsrdBeratungClient />
      </main>
      <FooterSection />
    </>
  );
}
