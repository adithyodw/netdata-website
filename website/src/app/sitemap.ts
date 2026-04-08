import { MetadataRoute } from "next";
import { industryPages, partnerPages, servicePages } from "@/lib/site";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.networkdatasistem.co.id";
const locales = ["id", "en"];
const paths = ["", "/about", "/services", "/partners", "/industries", "/case-studies", "/insights", "/careers", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const dynamicPaths = [...servicePages.map((s) => `/services/${s}`), ...partnerPages.map((s) => `/partners/${s}`), ...industryPages.map((s) => `/industries/${s}`)];
  return locales.flatMap((locale) =>
    [...paths, ...dynamicPaths].map((path) => ({
      url: `${base}/${locale}${path}`,
      changeFrequency: "weekly",
      priority: path === "" ? 1 : 0.7,
    })),
  );
}
