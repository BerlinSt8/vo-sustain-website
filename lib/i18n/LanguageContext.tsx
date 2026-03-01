"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations, type Lang } from "./translations";

// Union type – erlaubt DE und EN Strings gleichzeitig
type AnyT = typeof translations.de | typeof translations.en;

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: AnyT;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "de",
  setLang: () => {},
  t: translations.de,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("de");

  // Persist language preference in localStorage
  useEffect(() => {
    const saved = localStorage.getItem("vo-lang") as Lang | null;
    if (saved === "en" || saved === "de") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("vo-lang", l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
