"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import ServicePageClient from "@/components/services/ServicePageClient";

export default function CsrdBeratungClient() {
  const { t } = useLanguage();

  return (
    <ServicePageClient
      heroLabel={t.csrdBeratung.heroLabel}
      heroHeadline={t.csrdBeratung.heroHeadline}
      heroSub={t.csrdBeratung.heroSub}
      heroBody={t.csrdBeratung.heroBody}
      scope={t.csrdBeratung.scope}
      process={t.csrdBeratung.process}
      facts={t.csrdBeratung.facts}
      tags={t.csrdBeratung.standards}
    />
  );
}
