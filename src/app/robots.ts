import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.interfacedigital.com.br/sitemap.xml",
    host: "https://www.interfacedigital.com.br",
  };
}
