// app/layout.jsx
import Providers from "./providers.jsx";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next"
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
            GOOGLE ANALYTICS 4 (gtag.js)
            IMPLEMENTACIÓN DIRECTA – SAFE FOR NEXT.JS
        ========================= */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PCD8S1M067"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PCD8S1M067', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>

      <body style={{ margin: 0 }}>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
