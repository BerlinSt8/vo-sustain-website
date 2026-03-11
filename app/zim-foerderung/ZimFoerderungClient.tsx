"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import ServicePageClient from "@/components/services/ServicePageClient";

export default function ZimFoerderungClient() {
  const { t } = useLanguage();

  /* Extra section: ZIM experience callout */
  const experienceSection = (
    <section style={{ background: "var(--navy)", padding: "5rem 8vw" }}>
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <div
          style={{
            background: "rgba(39,174,96,0.06)",
            border: "1px solid rgba(39,174,96,0.2)",
            borderRadius: "var(--radius)",
            padding: "3rem 2.5rem",
          }}
        >
          <div
            style={{
              fontFamily: "'Roboto Mono', monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.18em",
              color: "var(--verde-bright)",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
            }}
          >
            SEAWEED DECARBON POLYMER
          </div>
          <p
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "1.05rem",
              color: "var(--ct2)",
              lineHeight: 1.75,
              fontStyle: "italic",
            }}
          >
            &ldquo;{t.zimFoerderung.experience}&rdquo;
          </p>
        </div>
      </div>
    </section>
  );

  return (
    <ServicePageClient
      heroLabel={t.zimFoerderung.heroLabel}
      heroHeadline={t.zimFoerderung.heroHeadline}
      heroSub={t.zimFoerderung.heroSub}
      heroBody={t.zimFoerderung.heroBody}
      scope={t.zimFoerderung.scope}
      process={t.zimFoerderung.process}
      facts={t.zimFoerderung.facts}
      tags={t.zimFoerderung.types}
      extraSection={experienceSection}
      relatedLinks={[
        { href: "/foerderberatung", title: t.foerderberatung.heroHeadline },
        { href: "/bafa-foerderung", title: t.bafaFoerderung.heroHeadline },
      ]}
    />
  );
}
