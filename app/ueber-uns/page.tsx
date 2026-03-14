import NavBar from "@/components/ui/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import UeberUnsClient from "./UeberUnsClient";

const BASE_URL = "https://www.vosustain.de";

export const metadata = {
  title: "Über uns — Denis Jänicke, ZIM-Netzwerkmanager & Förderberater",
  description:
    "Denis Jänicke, Gründer von VO Sustain. Aktiver ZIM-Netzwerkmanager (SEAWEED DECARBON POLYMER, 12+ Partner). Förderberatung für KMU: ZIM, BAFA, EFRE, Horizon Europe.",
  alternates: {
    canonical: `${BASE_URL}/ueber-uns`,
  },
  openGraph: {
    title: "Denis Jänicke — Gründer & Senior Förderberater | VO Sustain",
    description:
      "Aktiver ZIM-Netzwerkmanager mit Erfahrung aus ZIM, BAFA, EFRE, Horizon Europe und LIFE. 349 Programme, 12+ Partner, 4 Länder.",
    url: `${BASE_URL}/ueber-uns`,
    type: "profile",
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Denis Jänicke — Gründer & Senior Förderberater | VO Sustain",
    description:
      "Aktiver ZIM-Netzwerkmanager. Förderberatung: ZIM, BAFA, EFRE, Horizon Europe. 349 Programme in der Datenbank.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "VO Sustain", item: `${BASE_URL}` },
    { "@type": "ListItem", position: 2, name: "Über uns", item: `${BASE_URL}/ueber-uns` },
  ],
};

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    "@id": `${BASE_URL}/ueber-uns#person`,
    name: "Denis Jänicke",
    jobTitle: "Gründer & Senior Förderberater",
    description:
      "Aktiver ZIM-Netzwerkmanager und Gründer von VO Sustain. Spezialisiert auf Förderberatung für KMU im Nachhaltigkeitsbereich.",
    url: `${BASE_URL}/ueber-uns`,
    image: `${BASE_URL}/denis.png`,
    email: "denis@vosustain.de",
    sameAs: ["https://www.linkedin.com/in/denis-jaenicke"],
    worksFor: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "VO Sustain",
      url: BASE_URL,
    },
    knowsAbout: [
      "ZIM-Förderung",
      "BAFA EEW",
      "EFRE",
      "Horizon Europe",
      "LIFE-Programm",
      "CSRD / VSME",
      "Forschungszulage",
      "INNO-KOM",
      "SAB Sachsen",
      "TAB Thüringen",
      "ZIM-Innovationsnetzwerke",
      "Fördermittelberatung",
      "Nachhaltigkeitsstrategie",
      "Cleantech",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Berlin",
      addressCountry: "DE",
    },
  },
};

export default function UeberUnsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }} />
      <NavBar />
      <main>
        <UeberUnsClient />
      </main>
      <FooterSection />
    </>
  );
}
