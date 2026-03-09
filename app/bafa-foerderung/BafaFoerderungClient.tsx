"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import ServicePageClient from "@/components/services/ServicePageClient";

export default function BafaFoerderungClient() {
  const { t } = useLanguage();

  return (
    <ServicePageClient
      heroLabel={t.bafaFoerderung.heroLabel}
      heroHeadline={t.bafaFoerderung.heroHeadline}
      heroSub={t.bafaFoerderung.heroSub}
      heroBody={t.bafaFoerderung.heroBody}
      scope={t.bafaFoerderung.scope}
      process={t.bafaFoerderung.process}
      facts={t.bafaFoerderung.facts}
      tags={t.bafaFoerderung.types}
    />
  );
}
