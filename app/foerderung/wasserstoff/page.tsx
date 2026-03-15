import NavBar from "@/components/ui/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import WasserstoffClient from "./WasserstoffClient";

const BASE_URL = "https://www.vosustain.de";

export const metadata = {
  title: "Förderung Wasserstoff — Programme für H2-Projekte KMU | VO Sustain",
  description:
    "Wasserstoff-Förderung für KMU: ZIM für H2-F&E, BAFA EEW Modul 4, NIP Wasserstoff, IPCEI, Horizon Europe Clean Hydrogen Partnership. Elektrolyse, Brennstoffzellen, Power-to-X.",
  alternates: {
    canonical: `${BASE_URL}/foerderung/wasserstoff`,
  },
  openGraph: {
    title: "Förderung Wasserstoff — Programme für H2-Projekte KMU | VO Sustain",
    description:
      "Wasserstoff-Förderprogramme für KMU: ZIM, BAFA EEW Modul 4, NIP, IPCEI, Horizon Europe. Elektrolyse, Brennstoffzellen, Power-to-X.",
    url: `${BASE_URL}/foerderung/wasserstoff`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Förderung Wasserstoff — H2-Programme für KMU | VO Sustain",
    description:
      "ZIM, BAFA EEW Modul 4, NIP, IPCEI, Horizon Europe Clean Hydrogen. Wasserstoff-Förderberatung für KMU.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "VO Sustain", item: `${BASE_URL}` },
    { "@type": "ListItem", position: 2, name: "Förderung", item: `${BASE_URL}/foerderung` },
    { "@type": "ListItem", position: 3, name: "Wasserstoff", item: `${BASE_URL}/foerderung/wasserstoff` },
  ],
};

export default function WasserstoffPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <NavBar />
      <main>
        <WasserstoffClient />
      </main>
      <FooterSection />
    </>
  );
}
