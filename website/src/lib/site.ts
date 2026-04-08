import { AppLocale } from "@/i18n/routing";

export const company = {
  legalName: "PT Network Data Sistem",
  phoneDisplay: "+62 811-2017-588",
  phoneTel: "+628112017588",
  whatsapp: "628112017588",
  mapsShareUrl: "https://share.google/HJDWOGF40xDp41Vs5",
  address:
    "Jl. Kalibata Tengah No.7A, RT.3/RW.3, Kalibata, Kec. Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12740, Indonesia",
};

export function t(locale: AppLocale, id: string, en: string) {
  return locale === "id" ? id : en;
}

export const corePartners = [
  "Akamai Indonesia Partner",
  "Fortinet Indonesia Partner",
  "Ruijie Indonesia Partner",
];

export const partnerPages = ["akamai-indonesia", "fortinet-indonesia", "ruijie-indonesia"];
export const industryPages = ["enterprise", "government", "finance", "hospitality", "manufacturing"];
export const servicePages = [
  "akamai",
  "fortinet",
  "ruijie",
  "sd-wan",
  "network-infrastructure",
  "cybersecurity",
  "managed-services",
  "managed-wifi",
  "cloud-data-center",
];
