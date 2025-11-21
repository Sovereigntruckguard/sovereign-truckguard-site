"use client";

import { LanguageProvider } from "../lib/language";

export default function Providers({ children }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
