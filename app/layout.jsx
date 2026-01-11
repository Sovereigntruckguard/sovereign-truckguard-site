// app/layout.jsx
import Providers from "./providers.jsx";
import Script from "next/script";

/* =========================
   METADATA GLOBAL (SEO BASE)
========================= */

export const metadata = {
  title: {
    default:
      "Sovereign TruckGuard LLC – Creación de Trucking Company, Regulatorios y Seguimiento Premium",
    template: "%s | Sovereign TruckGuard LLC",
  },
  description:
    "Sistema de entrada para camioneros latinos en EE. UU. Creamos tu trucking company (LLC, EIN, DOT, MC y compliance) y te acompañamos con seguimiento premium y seguro comercial cuando corresponde.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.sovereigntruckguard.com/",
  },
  openGraph: {
    title:
      "Sovereign TruckGuard LLC – Sistema de entrada para camioneros latinos en USA",
    description:
      "Creamos tu compañía de trucking y te acompañamos con cumplimiento, seguimiento premium y seguro comercial. Todo en español, con evidencia y responsabilidad.",
    url: "https://www.sovereigntruckguard.com/",
    siteName: "Sovereign TruckGuard LLC",
    images: [
      {
        url: "https://www.sovereigntruckguard.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sovereign TruckGuard LLC",
      },
    ],
    locale: "es_US",
    type: "website",
  },
};

/* =========================
   ROOT LAYOUT
========================= */

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* =========================
            GOOGLE TAG MANAGER (HEAD)
            — SAFE FOR SSR
        ========================= */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtm.js?id=GTM-NS8XXJ39"
        />
      </head>

      <body style={{ margin: 0 }}>
        {/* =========================
            GOOGLE TAG MANAGER (NOSCRIPT)
        ========================= */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NS8XXJ39"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
