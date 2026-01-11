// app/layout.jsx
import Providers from "./providers.jsx";

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
        ========================= */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NS8XXJ39');
            `,
          }}
        />
        {/* ⬆️ REEMPLAZA GTM-XXXXXXX por tu ID real */}
      </head>

      <body style={{ margin: 0 }}>
        {/* =========================
            GOOGLE TAG MANAGER (NOSCRIPT)
        ========================= */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {GTM-NS8XXJ39}

        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
