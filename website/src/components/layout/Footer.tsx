import Link from "next/link";
import { AppLocale } from "@/i18n/routing";
import { company, corePartners, servicePages } from "@/lib/site";
import { Phone, MessageCircle, MapPin, Mail, ExternalLink } from "lucide-react";

export function Footer({ locale }: { locale: AppLocale }) {
  const year = new Date().getFullYear();

  const quickLinks = [
    { href: `/${locale}/about`, label: locale === "id" ? "Tentang Kami" : "About Us" },
    { href: `/${locale}/services`, label: locale === "id" ? "Layanan" : "Services" },
    { href: `/${locale}/partners`, label: locale === "id" ? "Mitra" : "Partners" },
    { href: `/${locale}/case-studies`, label: locale === "id" ? "Studi Kasus" : "Case Studies" },
    { href: `/${locale}/insights`, label: locale === "id" ? "Wawasan" : "Insights" },
    { href: `/${locale}/careers`, label: locale === "id" ? "Karir" : "Careers" },
  ];

  const serviceLabels: Record<string, string> = {
    akamai: "Akamai CDN & Edge Security",
    fortinet: "Fortinet Security",
    ruijie: "Ruijie Networks",
    "sd-wan": "SD-WAN",
    "network-infrastructure": locale === "id" ? "Infrastruktur Jaringan" : "Network Infrastructure",
    cybersecurity: locale === "id" ? "Keamanan Siber" : "Cybersecurity",
    "managed-services": "Managed Services",
    "managed-wifi": "Managed WiFi",
    "cloud-data-center": locale === "id" ? "Cloud & Data Center" : "Cloud & Data Center",
  };

  return (
    <footer className="mt-0 bg-foreground text-surface-lowest">
      {/* Main footer grid */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-4 flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="6" height="6" rx="1"/><rect x="16" y="2" width="6" height="6" rx="1"/><rect x="9" y="9" width="6" height="6" rx="1"/>
                  <path d="M5 8v3m14-3v3M5 16v3m14-3v3M8 12h8"/>
                </svg>
              </div>
              <span className="text-sm font-bold tracking-tight">
                PT Network Data Sistem
              </span>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-surface-lowest/60">
              {locale === "id"
                ? "System integrator kelas institusi yang berspesialisasi dalam transformasi jaringan, keamanan, dan layanan terkelola."
                : "Institutional-grade system integrator specializing in network, security, and managed services transformation."}
            </p>
            {/* Partner badges */}
            <div className="space-y-1.5">
              {corePartners.map((p) => (
                <div
                  key={p}
                  className="inline-flex items-center gap-1.5 rounded bg-surface-lowest/10 px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-widest text-surface-lowest/70"
                >
                  <span className="h-1 w-1 rounded-full bg-primary" />
                  {p}
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-surface-lowest/40">
              {locale === "id" ? "Layanan" : "Services"}
            </h3>
            <ul className="space-y-2.5">
              {servicePages.map((slug) => (
                <li key={slug}>
                  <Link
                    href={`/${locale}/services/${slug}`}
                    className="text-sm text-surface-lowest/60 transition-colors hover:text-surface-lowest"
                  >
                    {serviceLabels[slug] ?? slug}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-surface-lowest/40">
              {locale === "id" ? "Tautan Cepat" : "Quick Links"}
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-surface-lowest/60 transition-colors hover:text-surface-lowest"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2.5">
              <h3 className="text-xs font-bold uppercase tracking-widest text-surface-lowest/40">
                {locale === "id" ? "Jam Operasional" : "Business Hours"}
              </h3>
              <p className="text-sm text-surface-lowest/60">
                {locale === "id" ? "Senin – Jumat" : "Mon – Fri"}:{" "}
                <span className="text-surface-lowest">08:00 – 18:00</span>
              </p>
              <p className="text-sm text-surface-lowest/60">
                {locale === "id" ? "Sabtu" : "Sat"}:{" "}
                <span className="text-surface-lowest">
                  {locale === "id" ? "Dengan Janji" : "By Appointment"}
                </span>
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-surface-lowest/40">
              {locale === "id" ? "Kontak" : "Contact"}
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin size={14} className="mt-0.5 shrink-0 text-surface-lowest/40" />
                <p className="text-sm leading-relaxed text-surface-lowest/60">
                  {company.address}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={14} className="shrink-0 text-surface-lowest/40" />
                <a
                  href={`tel:${company.phoneTel}`}
                  className="text-sm text-surface-lowest/60 transition-colors hover:text-surface-lowest"
                >
                  {company.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle size={14} className="shrink-0 text-surface-lowest/40" />
                <a
                  href={`https://wa.me/${company.whatsapp}?text=Hello%20PT%20Network%20Data%20Sistem`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-surface-lowest/60 transition-colors hover:text-surface-lowest"
                >
                  WhatsApp Chat
                </a>
              </div>
              <div className="flex items-center gap-3">
                <ExternalLink size={14} className="shrink-0 text-surface-lowest/40" />
                <a
                  href={company.mapsShareUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-surface-lowest/60 transition-colors hover:text-surface-lowest"
                >
                  {locale === "id" ? "Buka Google Maps" : "Open Google Maps"}
                </a>
              </div>
              <Link
                href={`/${locale}/contact`}
                className="btn-primary mt-2 inline-flex rounded-md px-4 py-2 text-xs font-semibold"
              >
                {locale === "id" ? "Hubungi Kami" : "Contact Us"}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-surface-lowest/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-surface-lowest/40 md:flex-row">
          <p>
            © {year} PT Network Data Sistem.{" "}
            {locale === "id" ? "Seluruh hak dilindungi." : "All rights reserved."}
          </p>
          <div className="flex items-center gap-6">
            <span>ISO 27001 {locale === "id" ? "Bersertifikat" : "Certified"}</span>
            <span>Tier 1 Partner</span>
            <Link
              href={`/${locale}/contact`}
              className="text-surface-lowest/60 transition-colors hover:text-surface-lowest"
            >
              {locale === "id" ? "Kebijakan Privasi" : "Privacy Policy"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
