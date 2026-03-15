import NavBar from "@/components/ui/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import FoerderberatungBerlinClient from "./FoerderberatungBerlinClient";

const BASE_URL = "https://www.vosustain.de";

export const metadata = {
  title: "Förderberatung Berlin — Fördermittel für Berliner KMU",
  description:
    "Förderberatung in Berlin: IBB-Programme, ProFIT, GRW Berlin-Brandenburg, EFRE Berlin, Transfer BONUS und Bundesprogramme (ZIM, BAFA). Lokale Expertise für Berliner KMU.",
  alternates: {
    canonical: `${BASE_URL}/foerderberatung-berlin`,
  },
  openGraph: {
    title: "Förderberatung Berlin — Fördermittel für Berliner KMU | VO Sustain",
    description:
      "Berliner KMU: IBB, ProFIT, GRW, EFRE Berlin + ZIM & BAFA. Lokale Förderberatung mit Standortvorteil.",
    url: `${BASE_URL}/foerderberatung-berlin`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Förderberatung Berlin | VO Sustain",
    description: "IBB, ProFIT, GRW, EFRE Berlin + ZIM & BAFA. Lokale Förderberatung für Berliner KMU.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "VO Sustain", item: `${BASE_URL}` },
    { "@type": "ListItem", position: 2, name: "Förderberatung", item: `${BASE_URL}/foerderberatung` },
    { "@type": "ListItem", position: 3, name: "Förderberatung Berlin", item: `${BASE_URL}/foerderberatung-berlin` },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/foerderberatung-berlin#localbusiness`,
  name: "VO Sustain — Förderberatung Berlin",
  description:
    "KI-gestützte Förderberatung für Berliner KMU. IBB-Programme, ProFIT, GRW Berlin-Brandenburg, EFRE Berlin, ZIM und BAFA — von der Potenzialanalyse bis zum Verwendungsnachweis.",
  url: `${BASE_URL}/foerderberatung-berlin`,
  telephone: "+49-30-12345678",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sadowastr. 22",
    addressLocality: "Berlin",
    addressRegion: "Berlin",
    postalCode: "12623",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.4451,
    longitude: 13.5838,
  },
  areaServed: [
    { "@type": "City", name: "Berlin" },
    { "@type": "State", name: "Brandenburg" },
  ],
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: [
    "https://www.linkedin.com/company/vo-sustain",
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${BASE_URL}/foerderberatung-berlin#service`,
  name: "Förderberatung Berlin — Fördermittelberatung für Berliner KMU",
  description:
    "Lokale Förderberatung in Berlin: IBB Innovationsförderung, ProFIT, GRW Berlin-Brandenburg, EFRE Berlin, Transfer BONUS sowie Bundesprogramme ZIM und BAFA. Kumulierungsprüfung und De-minimis-Optimierung inklusive.",
  provider: {
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: "VO Sustain",
  },
  areaServed: [
    { "@type": "City", name: "Berlin" },
    { "@type": "State", name: "Brandenburg" },
  ],
  serviceType: "Fördermittelberatung",
  url: `${BASE_URL}/foerderberatung-berlin`,
};

export default function FoerderberatungBerlinPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <NavBar />
      <main>
        <FoerderberatungBerlinClient />
      </main>
      <FooterSection />
    </>
  );
}
