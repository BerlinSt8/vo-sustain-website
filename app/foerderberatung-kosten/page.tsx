import NavBar from "@/components/ui/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import FoerderberatungKostenClient from "./FoerderberatungKostenClient";

const BASE_URL = "https://www.vosustain.de";

export const metadata = {
  title: "Förderberatung Kosten — Transparentes Honorarmodell | VO Sustain",
  description:
    "Was kostet Förderberatung? Transparente Staffelprovision: 10/7/5/3,5 %. Erfolgshonorar — kein Honorar ohne Bewilligung. Marktvergleich und Rechenbeispiele.",
  alternates: {
    canonical: `${BASE_URL}/foerderberatung-kosten`,
  },
  openGraph: {
    title: "Förderberatung Kosten — Transparentes Honorarmodell | VO Sustain",
    description:
      "Staffelprovision statt Pauschalhonorar. Erst zahlen bei Auszahlung. 3 Rechenbeispiele + Marktvergleich.",
    url: `${BASE_URL}/foerderberatung-kosten`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Förderberatung Kosten | VO Sustain",
    description:
      "Transparentes Erfolgshonorar: 10/7/5/3,5 % Staffelprovision. Kein Honorar ohne Bewilligung.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "VO Sustain", item: `${BASE_URL}` },
    { "@type": "ListItem", position: 2, name: "Förderberatung Kosten", item: `${BASE_URL}/foerderberatung-kosten` },
  ],
};

export default function FoerderberatungKostenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <NavBar />
      <main>
        <FoerderberatungKostenClient />
      </main>
      <FooterSection />
    </>
  );
}
