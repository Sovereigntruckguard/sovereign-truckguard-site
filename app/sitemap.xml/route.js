import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://www.sovereigntruckguard.com";

  const urls = [
    "",
    "/services",
    "/contact",
    "/about",
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
    <priority>${path === "" ? "1.0" : "0.9"}</priority>
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
