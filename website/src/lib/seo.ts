import { Metadata } from "next";
import { AppLocale } from "@/i18n/routing";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.networkdatasistem.co.id";

export function buildMetadata(params: {
  locale: AppLocale;
  path: string;
  title: string;
  description: string;
}): Metadata {
  const canonical = `${baseUrl}/${params.locale}${params.path}`;
  return {
    title: params.title,
    description: params.description,
    alternates: {
      canonical,
      languages: {
        id: `${baseUrl}/id${params.path}`,
        en: `${baseUrl}/en${params.path}`,
      },
    },
    openGraph: {
      title: params.title,
      description: params.description,
      url: canonical,
      siteName: "PT Network Data Sistem",
      locale: params.locale === "id" ? "id_ID" : "en_US",
      type: "website",
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PT Network Data Sistem",
    url: baseUrl,
    telephone: "+62 811-2017-588",
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "PT Network Data Sistem",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Kalibata Tengah No.7A, RT.3/RW.3, Kalibata",
      addressLocality: "Jakarta Selatan",
      addressRegion: "DKI Jakarta",
      postalCode: "12740",
      addressCountry: "ID",
    },
    telephone: "+62 811-2017-588",
    areaServed: "Indonesia",
  };
}
