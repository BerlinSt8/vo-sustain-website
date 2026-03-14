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

const BASE_URL = "https://www.vosustain.de";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const artikel = (artikelData as Artikel[]).find((a) => a.slug === slug);
  if (!artikel) return { title: "Nicht gefunden | VO Sustain" };

  const canonicalUrl = `${BASE_URL}/aktuell/${artikel.slug}`;
  const ogImage = artikel.image
    ? `${BASE_URL}${artikel.image}`
    : `${BASE_URL}/og-image.jpg`;

  return {
    title: artikel.title,
    description: artikel.teaser,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: artikel.title,
      description: artikel.teaser,
      url: canonicalUrl,
      type: "article",
      publishedTime: artikel.date,
      authors: ["Denis Jänicke"],
      tags: artikel.tags,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: artikel.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: artikel.title,
      description: artikel.teaser,
      images: [ogImage],
    },
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

  const canonicalUrl = `${BASE_URL}/aktuell/${artikel.slug}`;
  const ogImage = artikel.image
    ? `${BASE_URL}${artikel.image}`
    : `${BASE_URL}/og-image.jpg`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "NewsArticle",
        "@id": `${canonicalUrl}#article`,
        headline: artikel.title,
        description: artikel.teaser,
        datePublished: artikel.date,
        dateModified: artikel.date,
        url: canonicalUrl,
        image: {
          "@type": "ImageObject",
          url: ogImage,
          width: 1200,
          height: 630,
        },
        author: {
          "@type": "Person",
          name: "Denis Jänicke",
          url: `${BASE_URL}/#ueber-uns`,
          sameAs: "https://www.linkedin.com/in/denis-jaenicke",
        },
        publisher: {
          "@type": "Organization",
          name: "VO Sustain",
          url: BASE_URL,
          logo: {
            "@type": "ImageObject",
            url: `${BASE_URL}/vo-iv.png`,
          },
        },
        mainEntityOfPage: canonicalUrl,
        keywords: artikel.tags.join(", "),
        inLanguage: "de-DE",
        isPartOf: {
          "@type": "WebSite",
          url: BASE_URL,
          name: "VO Sustain",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "VO Sustain",
            item: BASE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Aktuell",
            item: `${BASE_URL}/aktuell`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: artikel.title,
            item: canonicalUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

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
