import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";

export const metadata: Metadata = {
  title: "VO Sustain | Förderberatung für KMU",
  description:
    "Fördermittelmanagement, CSRD-Beratung und Nachhaltigkeitsstrategie für deutsche KMU. Wir verwandeln Theorie in finanzierte Umsetzung.",
  keywords: "Förderberatung, KMU, BAFA, SAB, Sachsen, Nachhaltigkeit, CSRD, VO Sustain",
  openGraph: {
    title: "VO Sustain | Förderberatung für KMU",
    description:
      "Fördermittelmanagement, CSRD-Beratung und Nachhaltigkeitsstrategie für deutsche KMU. Bis zu 55 % Zuschuss auf Ihre nächste Investition.",
    url: "https://www.vosustain.de",
    siteName: "VO Sustain",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VO Sustain — Förderberatung für KMU",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
