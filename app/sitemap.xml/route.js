import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://www.sovereigntruckguard.com";

  const urls = [
    "",

    // Core pages
    "/services",
    "/contact",
    "/about",

    // SEO money pages (alta intención)
    "/permisos-dot-mc-usa",
    "/crear-trucking-company-usa",
    "/como-obtener-dot-number",
    "/como-sacar-dot-number-en-espanol",

    // Other
    "/states",
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (path) => `
  <url>
    <loc>${baseUrl}${path}</loc>
    <changefreq>weekly</changefreq>
    <priority>${
      path === ""
        ? "1.0"
        : path === "/services"
        ? "0.95"
        : [
            "/permisos-dot-mc-usa",
            "/crear-trucking-company-usa",
            "/como-obtener-dot-number",
            "/como-sacar-dot-number-en-espanol",
          ].includes(path)
        ? "0.9"
        : "0.7"
    }</priority>
  </url>`
  )
  .join("")}
</urlset>`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
