"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import ServicePageClient from "@/components/services/ServicePageClient";

export default function NachhaltigkeitsstrategieClient() {
  const { t } = useLanguage();

  return (
    <ServicePageClient
      heroLabel={t.nachhaltigkeitsstrategie.heroLabel}
      heroHeadline={t.nachhaltigkeitsstrategie.heroHeadline}
      heroSub={t.nachhaltigkeitsstrategie.heroSub}
      heroBody={t.nachhaltigkeitsstrategie.heroBody}
      scope={t.nachhaltigkeitsstrategie.scope}
      process={t.nachhaltigkeitsstrategie.process}
      facts={t.nachhaltigkeitsstrategie.facts}
      tags={t.nachhaltigkeitsstrategie.tags}
    />
  );
}
