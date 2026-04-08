import Link from "next/link";
import { Globe, Shield, Network, Server, Wifi, Cloud, ArrowRight } from "lucide-react";
import { AppLocale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: AppLocale }> }) {
  const { locale } = await params;
  return buildMetadata({
    locale,
    path: "/services",
    title: locale === "id" ? "Layanan Enterprise" : "Enterprise Services",
    description:
      locale === "id"
        ? "Layanan enterprise PT Network Data Sistem: Akamai CDN, Fortinet Security, Ruijie Networks, SD-WAN, Managed Services dan Cloud di Indonesia."
        : "PT Network Data Sistem enterprise services: Akamai CDN, Fortinet Security, Ruijie Networks, SD-WAN, Managed Services and Cloud in Indonesia.",
  });
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: AppLocale }> }) {
  const { locale } = await params;

  const services = [
    {
      slug: "akamai",
      icon: Globe,
      en: "Akamai CDN & Edge Security",
      id: "Akamai CDN & Edge Security",
      descEn: "Global content acceleration with DDoS/WAF/Bot Management protection",
      descId: "Akselerasi konten global dan proteksi DDoS/WAF/Bot Management",
      accent: "bg-primary text-white",
    },
    {
      slug: "fortinet",
      icon: Shield,
      en: "Fortinet Network Security",
      id: "Fortinet Network Security",
      descEn: "Perimeter security, internal segmentation, AI threat analytics",
      descId: "Keamanan perimeter, segmentasi internal, analitik ancaman AI",
      accent: "bg-surface-lowest",
    },
    {
      slug: "ruijie",
      icon: Network,
      en: "Ruijie Networks",
      id: "Ruijie Networks",
      descEn: "High-speed campus fabric, enterprise switching and WiFi",
      descId: "Infrastruktur kampus berkecepatan tinggi, switching enterprise",
      accent: "bg-surface-lowest",
    },
    {
      slug: "sd-wan",
      icon: Server,
      en: "SD-WAN",
      id: "SD-WAN",
      descEn: "Intelligent managed WAN linking branches and data centers",
      descId: "Konektivitas WAN cerdas yang menghubungkan kantor dan data center",
      accent: "bg-surface-lowest",
    },
    {
      slug: "network-infrastructure",
      icon: Network,
      en: "Network Infrastructure",
      id: "Infrastruktur Jaringan",
      descEn: "Enterprise network backbone design and deployment",
      descId: "Desain dan deployment backbone jaringan enterprise",
      accent: "bg-surface-lowest",
    },
    {
      slug: "cybersecurity",
      icon: Shield,
      en: "Cybersecurity",
      id: "Keamanan Siber",
      descEn: "Comprehensive digital asset protection and cybersecurity",
      descId: "Proteksi aset digital dan keamanan siber komprehensif",
      accent: "bg-surface-lowest",
    },
    {
      slug: "managed-services",
      icon: Server,
      en: "Managed Services",
      id: "Managed Services",
      descEn: "24/7 NOC/SOC with strict SLAs and dedicated engineers",
      descId: "NOC/SOC 24/7 dengan SLA ketat dan tim engineer dedikasi",
      accent: "bg-tertiary-container text-white",
    },
    {
      slug: "managed-wifi",
      icon: Wifi,
      en: "Managed WiFi",
      id: "Managed WiFi",
      descEn: "Enterprise managed WiFi with real-time monitoring",
      descId: "WiFi enterprise terkelola dengan monitoring real-time",
      accent: "bg-surface-lowest",
    },
    {
      slug: "cloud-data-center",
      icon: Cloud,
      en: "Cloud & Data Center",
      id: "Cloud & Data Center",
      descEn: "Hybrid cloud architecture and data center infrastructure",
      descId: "Arsitektur cloud hybrid dan infrastruktur data center",
      accent: "bg-surface-lowest",
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-primary">
            {locale === "id" ? "Layanan Kami" : "Our Services"}
          </p>
          <h1 className="mb-4 max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
            {locale === "id" ? (
              <>
                Solusi <span className="text-primary">Enterprise Grade</span> untuk Indonesia
              </>
            ) : (
              <>
                Enterprise-Grade <span className="text-primary">Solutions</span> for Indonesia
              </>
            )}
          </h1>
          <p className="max-w-xl text-lg text-foreground/65">
            {locale === "id"
              ? "Dari keamanan edge global hingga managed operations 24/7 — semua dirancang untuk standar institusional Indonesia."
              : "From global edge security to 24/7 managed operations — all designed to institutional-grade Indonesian standards."}
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-surface-low py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((svc) => (
              <Link
                key={svc.slug}
                href={`/${locale}/services/${svc.slug}`}
                className={`group card-hover relative flex flex-col rounded-2xl p-8 ${svc.accent}`}
              >
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${svc.accent.includes("text-white") ? "bg-white/15" : "bg-primary-fixed"}`}
                >
                  <svc.icon
                    size={22}
                    className={svc.accent.includes("text-white") ? "text-white" : "text-primary"}
                  />
                </div>
                <h3
                  className={`mb-3 text-lg font-bold ${svc.accent.includes("text-white") ? "text-white" : "text-foreground"}`}
                >
                  {locale === "id" ? svc.id : svc.en}
                </h3>
                <p
                  className={`flex-1 text-sm leading-relaxed ${svc.accent.includes("text-white") ? "text-white/70" : "text-foreground/65"}`}
                >
                  {locale === "id" ? svc.descId : svc.descEn}
                </p>
                <div
                  className={`mt-6 flex items-center gap-1.5 text-xs font-semibold transition-all duration-200 group-hover:gap-3 ${svc.accent.includes("text-white") ? "text-white/80" : "text-primary"}`}
                >
                  {locale === "id" ? "Pelajari Lebih Lanjut" : "Learn More"}{" "}
                  <ArrowRight size={13} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            {locale === "id"
              ? "Tidak yakin layanan mana yang tepat?"
              : "Not sure which service fits?"}
          </h2>
          <p className="mb-8 text-foreground/65">
            {locale === "id"
              ? "Tim engineer kami siap melakukan assessment kebutuhan dan merekomendasikan arsitektur yang paling sesuai."
              : "Our engineering team is ready to assess your requirements and recommend the most suitable architecture."}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="btn-primary inline-flex items-center gap-2 rounded-md px-7 py-3.5 font-semibold"
          >
            {locale === "id" ? "Konsultasi Gratis" : "Free Consultation"}{" "}
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
