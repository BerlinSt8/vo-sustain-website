import { notFound } from "next/navigation";
import type { Metadata } from "next";
import NavBar from "@/components/ui/NavBar";
import WaveDivider from "@/components/ui/WaveDivider";
import ReadingProgress from "@/components/ui/ReadingProgress";
import FooterSection from "@/components/sections/FooterSection";
import ArtikelHero from "./ArtikelHero";
import ArtikelBodyClient from "./ArtikelBodyClient";
import type { Artikel } from "@/lib/types";
import artikelData from "@/data/aktuell.json";


export async function generateStaticParams() {
  return (artikelData as Artikel[]).map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const artikel = (artikelData as Artikel[]).find((a) => a.slug === slug);
  if (!artikel) return { title: "Nicht gefunden | VO Sustain" };
  return {
    title: `${artikel.title} | VO Sustain`,
    description: artikel.teaser,
  };
}

export default async function ArtikelDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const artikel = (artikelData as Artikel[]).find((a) => a.slug === slug);
  if (!artikel) notFound();

  return (
    <>
      {/* Verde Lesefortschritts-Balken */}
      <ReadingProgress />

      <NavBar />
      <main>
        {/* Parallax Hero – dunkel mit Kategorie-Glow */}
        <ArtikelHero artikel={artikel} />

        {/* Welle: navy-dark → off-white */}
        <WaveDivider fromColor="var(--navy-dark)" toColor="var(--off-white)" />

        {/* Article Body – sprachabhängig via Client Component */}
        <div style={{ background: "var(--off-white)", padding: "0 0 5rem" }}>
          <ArtikelBodyClient artikel={artikel} />
        </div>

      </main>

      <FooterSection />
    </>
  );
}
