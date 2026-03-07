"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode, useSyncExternalStore } from "react";

export type Language = "ru" | "uz" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getStoredLanguage(): Language {
  if (typeof window === "undefined") return "ru";
  const saved = localStorage.getItem("language");
  if (saved && ["ru", "uz", "en"].includes(saved)) {
    return saved as Language;
  }
  return "ru";
}

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const storedLanguage = useSyncExternalStore(
    subscribe,
    getStoredLanguage,
    () => "ru" as Language
  );

  const [language, setLanguageState] = useState<Language>(storedLanguage);

  useEffect(() => {
    setLanguageState(storedLanguage);
  }, [storedLanguage]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
