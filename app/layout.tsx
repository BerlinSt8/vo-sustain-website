import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VO Sustain | Förderberatung für KMU",
  description:
    "Fördermittelmanagement, CSRD-Beratung und Nachhaltigkeitsstrategie für deutsche KMU. Wir verwandeln Theorie in finanzierte Umsetzung.",
  keywords: "Förderberatung, KMU, BAFA, SAB, Sachsen, Nachhaltigkeit, CSRD, VO Sustain",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
