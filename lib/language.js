"use client";

import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState("es");

  // detectar idioma inicial
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem("sovereign-lang");
      if (stored === "es" || stored === "en") {
        setLangState(stored);
        return;
      }
      const browser = navigator.language || "es";
      const initial = browser.startsWith("es") ? "es" : "en";
      setLangState(initial);
      window.localStorage.setItem("sovereign-lang", initial);
    } catch {
      // si algo falla, dejamos es
    }
  }, []);

  const setLang = (value) => {
    setLangState(value);
    try {
      window.localStorage.setItem("sovereign-lang", value);
    } catch {
      // ignore
    }
  };

  const value = { lang, setLang };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage debe usarse dentro de LanguageProvider");
  }
  return ctx;
}
