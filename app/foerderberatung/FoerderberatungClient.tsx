"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import ServicePageClient from "@/components/services/ServicePageClient";

export default function FoerderberatungClient() {
  const { t } = useLanguage();

  return (
    <ServicePageClient
      heroLabel={t.foerderberatung.heroLabel}
      heroHeadline={t.foerderberatung.heroHeadline}
      heroSub={t.foerderberatung.heroSub}
      heroBody={t.foerderberatung.heroBody}
      scope={t.foerderberatung.scope}
      process={t.foerderberatung.process}
      facts={t.foerderberatung.facts}
      tags={t.foerderberatung.programs}
    />
  );
}
