import type { Metadata } from "next";
import { Montserrat, Open_Sans, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import ScrollProgress from "@/components/ui/ScrollProgress";
import CursorGlow from "@/components/ui/CursorGlow";
import CustomCursor from "@/components/ui/CustomCursor";
import ChatWidget from "@/components/ui/ChatWidget";
import CookieBanner from "@/components/ui/CookieBanner";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
  variable: "--font-montserrat",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  display: "swap",
  variable: "--font-opensans",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-roboto-mono",
});

const BASE_URL = "https://www.vosustain.de";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "VO Sustain | Förderberatung für KMU",
    template: "%s | VO Sustain",
  },
  description:
    "Fördermittelmanagement, CSRD-Beratung und Nachhaltigkeitsstrategie für deutsche KMU. Bis zu 55 % Zuschuss auf Ihre nächste Investition – schlüsselfertig und audit-sicher.",
  keywords:
    "Förderberatung KMU, Fördermittelmanagement, CSRD Beratung, ZIM Antrag, BAFA Förderung, Nachhaltigkeit KMU, ESG Reporting, VSME Standard, Sachsen Förderung, Berlin Förderberater",
  authors: [{ name: "Denis Jänicke", url: BASE_URL }],
  creator: "Denis Jänicke",
  publisher: "VO Sustain",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "VO Sustain | Förderberatung für KMU",
    description:
      "Fördermittelmanagement, CSRD-Beratung und Nachhaltigkeitsstrategie für deutsche KMU. Bis zu 55 % Zuschuss auf Ihre nächste Investition.",
    url: BASE_URL,
    siteName: "VO Sustain",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1376,
        height: 768,
        alt: "VO Sustain — Förderberatung für deutsche KMU",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VO Sustain | Förderberatung für KMU",
    description:
      "Bis zu 55 % Zuschuss auf Ihre nächste Investition. Fördermittelmanagement für deutsche KMU.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": `${BASE_URL}/#organization`,
      name: "VO Sustain",
      alternateName: "Verde Onda Sustain",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/vo-iv.png`,
        width: 200,
        height: 200,
      },
      image: `${BASE_URL}/og-image.jpg`,
      description:
        "KI-gestützte Förderberatung für deutsche KMU — Fördermittelmanagement, CSRD-Beratung und Nachhaltigkeitsstrategie. Schlüsselfertig und audit-sicher.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Berlin",
        addressCountry: "DE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 52.52,
        longitude: 13.405,
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "info@vosustain.de",
        contactType: "customer service",
        availableLanguage: ["German", "English"],
      },
      foundingDate: "2025",
      priceRange: "€€",
      knowsAbout: ["ZIM-Förderung", "BAFA Energieberatung", "CSRD-Beratung", "Forschungszulage", "EFRE-Förderung", "Horizon Europe", "Nachhaltigkeitsstrategie", "Cleantech-Förderung"],
      sameAs: ["https://www.linkedin.com/in/denis-jaenicke"],
      founder: {
        "@type": "Person",
        "@id": `${BASE_URL}/#denis`,
        name: "Denis Jänicke",
        jobTitle: "Gründer & Senior Förderberater",
        description:
          "Senior Grant & Programme Operations Lead. ZIM-Netzwerkmanager. Spezialisierung auf EU-Förderung, ZIM, BAFA, EFRE und CSRD-Beratung.",
        url: `${BASE_URL}/#ueber-uns`,
        sameAs: "https://www.linkedin.com/in/denis-jaenicke",
        worksFor: { "@id": `${BASE_URL}/#organization` },
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Förderberatungs-Leistungen",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Fördermittelmanagement",
              description:
                "Von der Erstprüfung bis zum Verwendungsnachweis – schlüsselfertig und audit-sicher. ZIM, BAFA, EFRE, SAB, KfW, Horizon Europe.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "CSRD-Beratung",
              description:
                "ESG-Daten für Lieferketten-Anfragen nach VSME-Standard — pragmatisch, proportional und mit Value-Chain-Cap-Schutz.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Nachhaltigkeitsstrategie",
              description:
                "Roadmaps, die priorisieren statt überfordern. Klare Schritte, messbare Wirkung, finanzierbare Maßnahmen.",
            },
          },
        ],
      },
      areaServed: {
        "@type": "Country",
        name: "Deutschland",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${montserrat.variable} ${openSans.variable} ${robotoMono.variable}`}>
      <body className="grain-overlay">
        <CursorGlow />
        <CustomCursor />
        <ScrollProgress />
        <LanguageProvider>
          {children}
          <ChatWidget />
          <CookieBanner />
        </LanguageProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
