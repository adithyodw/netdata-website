import Link from "next/link";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import { AppLocale } from "@/i18n/routing";
import { corePartners } from "@/lib/site";
import {
  Shield,
  Network,
  Globe,
  Server,
  ArrowRight,
  CheckCircle,
  Award,
  Users,
  Clock,
  Wifi,
} from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  return buildMetadata({
    locale,
    path: "",
    title:
      locale === "id"
        ? "Mitra Akamai, Fortinet & Ruijie Indonesia"
        : "Akamai, Fortinet & Ruijie Indonesia Partner",
    description:
      locale === "id"
        ? "PT Network Data Sistem — system integrator enterprise Indonesia untuk Akamai, Fortinet, Ruijie, SD-WAN, dan managed services."
        : "PT Network Data Sistem delivers enterprise-grade Akamai, Fortinet, Ruijie, SD-WAN, and managed services for Indonesia.",
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  const specializations = [
    {
      icon: Globe,
      title: "Akamai CDN & Edge Security",
      desc:
        locale === "id"
          ? "Akselerasi konten global dan proteksi DDoS/WAP/Bot Management untuk aset digital Indonesia."
          : "Global content acceleration and DDoS/WAF/Bot Management protection for Indonesian digital assets.",
      href: `/${locale}/partners/akamai-indonesia`,
      tag: "Akamai Indonesia Partner",
      accent: "bg-primary text-white",
      large: true,
    },
    {
      icon: Shield,
      title: "Fortinet Network Security",
      desc:
        locale === "id"
          ? "Keamanan perimeter, segmentasi internal, dan analitik ancaman berbasis AI untuk institusi."
          : "Perimeter security, internal segmentation, and AI-driven threat analytics for institutions.",
      href: `/${locale}/partners/fortinet-indonesia`,
      tag: "Fortinet Indonesia Partner",
      accent: "bg-surface-low",
    },
    {
      icon: Network,
      title: "Ruijie Network Infrastructure",
      desc:
        locale === "id"
          ? "Fabric kampus berkecepatan tinggi, switching dan WiFi enterprise untuk skala nasional."
          : "High-speed campus fabric, enterprise switching and WiFi at national scale.",
      href: `/${locale}/partners/ruijie-indonesia`,
      tag: "Ruijie Indonesia Partner",
      accent: "bg-surface-low",
    },
    {
      icon: Server,
      title: "SD-WAN",
      desc:
        locale === "id"
          ? "Konektivitas WAN cerdas dan terkelola, menghubungkan kantor cabang dan data center dengan andal."
          : "Intelligent managed WAN connectivity linking branches and data centers reliably.",
      href: `/${locale}/services/sd-wan`,
      tag: "Managed SD-WAN",
      accent: "bg-surface-low",
    },
    {
      icon: Wifi,
      title: "Managed WiFi",
      desc:
        locale === "id"
          ? "Solusi WiFi terkelola skala enterprise dengan monitoring 24/7 dan SLA ketat."
          : "Enterprise-scale managed WiFi with 24/7 monitoring and strict SLAs.",
      href: `/${locale}/services/managed-wifi`,
      tag: "Managed WiFi",
      accent: "bg-tertiary-container text-white",
    },
  ];

  const whyUs = [
    {
      icon: Award,
      title:
        locale === "id"
          ? "Sertifikasi Multi-Vendor Tier-1"
          : "Multi-Vendor Tier-1 Certification",
      desc:
        locale === "id"
          ? "Kami memegang status mitra resmi Akamai, Fortinet, dan Ruijie — memastikan deployment mengikuti standar terbaik produsen."
          : "We hold official Akamai, Fortinet, and Ruijie partner status — ensuring deployments follow manufacturer best practices.",
    },
    {
      icon: Users,
      title:
        locale === "id" ? "Keahlian Lokal Indonesia" : "Indonesian Local Expertise",
      desc:
        locale === "id"
          ? "Tim kami memahami regulasi lokal, tantangan geografis, dan kebutuhan unik infrastruktur digital Indonesia."
          : "Our team deeply understands local regulations, geographic challenges, and unique Indonesian digital infrastructure requirements.",
    },
    {
      icon: Clock,
      title:
        locale === "id" ? "Dukungan Kelas Institusi" : "Institutional-Grade Support",
      desc:
        locale === "id"
          ? "SLA-backed response time dengan dedicated account engineer yang memahami infrastruktur Anda seperti tim internal."
          : "SLA-backed response times with dedicated account engineers who know your infrastructure as well as your own team.",
    },
    {
      icon: CheckCircle,
      title:
        locale === "id"
          ? "Metodologi Terbukti"
          : "Proven Delivery Methodology",
      desc:
        locale === "id"
          ? "Framework implementasi bertahap dengan assessment arsitektur, desain teknis, dan managed operations berbasis SLA."
          : "Phased implementation framework with architecture assessment, technical design, and SLA-based managed operations.",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-surface py-24 md:py-36">
        {/* Subtle background decoration */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-primary-fixed/15 to-transparent" />
          <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-primary/[0.04] blur-3xl" />
          <div className="absolute bottom-0 left-0 h-64 w-96 rounded-full bg-tertiary-container/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="animate-fade-in-up mb-6 inline-block rounded-sm bg-tertiary-container px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.1em] text-on-tertiary-container">
                {t("heroEyebrow")}
              </span>
              <h1 className="animate-fade-in-up mb-6 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-6xl [animation-delay:80ms]">
                {locale === "id" ? (
                  <>
                    Mitra Terpercaya Indonesia untuk{" "}
                    <span className="text-primary">
                      Akamai, Fortinet & Ruijie
                    </span>{" "}
                    Solutions
                  </>
                ) : (
                  <>
                    Trusted Indonesia Partner for{" "}
                    <span className="text-primary">
                      Akamai, Fortinet & Ruijie
                    </span>{" "}
                    Solutions
                  </>
                )}
              </h1>
              <p className="animate-fade-in-up mb-10 max-w-2xl text-lg leading-relaxed text-foreground/70 [animation-delay:160ms]">
                {t("heroSubtitle")}
              </p>
              <div className="animate-fade-in-up flex flex-wrap gap-4 [animation-delay:240ms]">
                <Link
                  href={`/${locale}/contact`}
                  className="btn-primary flex items-center gap-2 rounded-md px-7 py-3.5 font-semibold"
                >
                  {t("heroCta")} <ArrowRight size={16} />
                </Link>
                <Link
                  href={`/${locale}/services`}
                  className="btn-secondary flex items-center gap-2 rounded-md px-7 py-3.5 font-semibold"
                >
                  {t("heroSecondary")}
                </Link>
              </div>

              {/* Stats row */}
              <div className="animate-fade-in-up mt-12 flex flex-wrap gap-8 [animation-delay:320ms]">
                {[
                  { num: "15+", label: t("yearsExperience") },
                  { num: "200+", label: t("enterprisesServed") },
                  { num: "99.9%", label: t("availability") },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-black text-primary">{stat.num}</p>
                    <p className="text-xs uppercase tracking-widest text-foreground/50">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right visual */}
            <div className="relative lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl bg-foreground p-1 shadow-ambient-lg">
                <div className="aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br from-primary to-primary-container">
                  <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
                    <div className="grid grid-cols-3 gap-3">
                      {[Globe, Shield, Network, Server, Wifi, Award].map(
                        (Icon, i) => (
                          <div
                            key={i}
                            className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm"
                          >
                            <Icon size={24} className="text-white/80" />
                          </div>
                        ),
                      )}
                    </div>
                    <div className="mt-2">
                      <p className="text-sm font-semibold text-white/80">
                        {locale === "id"
                          ? "Platform Solusi Terintegrasi"
                          : "Integrated Solutions Platform"}
                      </p>
                      <p className="mt-1 text-xs text-white/50">
                        Akamai · Fortinet · Ruijie
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Float card */}
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-surface-lowest p-5 shadow-ambient-lg">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-fixed">
                    <CheckCircle size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground">
                      {locale === "id" ? "Bersertifikasi" : "Certified Partner"}
                    </p>
                    <p className="text-[0.65rem] text-foreground/50">
                      Akamai · Fortinet · Ruijie
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Trust Bar */}
      <section className="bg-surface-low py-10">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-8 text-center text-[0.65rem] font-bold uppercase tracking-[0.2em] text-outline">
            {t("partnerBarLabel")}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {[
              "Akamai",
              "Fortinet",
              "Ruijie Networks",
              "Cisco",
              "Aruba",
              "Nokia",
              "Juniper",
            ].map((brand) => (
              <span
                key={brand}
                className="partner-logo text-lg font-black tracking-tight text-foreground"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Core Specializations */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14">
            <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-primary">
              {locale === "id" ? "Spesialisasi Kami" : "Our Specializations"}
            </p>
            <h2 className="max-w-xl text-3xl font-bold tracking-tight md:text-5xl">
              {locale === "id" ? (
                <>
                  Spesialisasi{" "}
                  <span className="text-primary">Kelas Institusi</span>
                </>
              ) : (
                <>
                  Institutional-Grade{" "}
                  <span className="text-primary">Specializations</span>
                </>
              )}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
            {specializations.map((item, i) => (
              <Link
                key={item.title}
                href={item.href}
                className={`group card-hover relative overflow-hidden rounded-xl p-8 ${item.accent} ${
                  item.large
                    ? "md:col-span-8"
                    : i === 4
                      ? "md:col-span-4"
                      : "md:col-span-4"
                }`}
              >
                <item.icon
                  size={36}
                  className={`mb-5 transition-transform duration-300 group-hover:scale-110 ${
                    item.accent.includes("text-white")
                      ? "text-white/80"
                      : "text-primary"
                  }`}
                />
                <div
                  className={`mb-1.5 text-[0.65rem] font-bold uppercase tracking-widest ${
                    item.accent.includes("text-white")
                      ? "text-white/50"
                      : "text-primary/60"
                  }`}
                >
                  {item.tag}
                </div>
                <h3
                  className={`mb-3 text-xl font-bold ${
                    item.accent.includes("text-white")
                      ? "text-white"
                      : "text-foreground"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    item.accent.includes("text-white")
                      ? "text-white/70"
                      : "text-foreground/65"
                  } ${item.large ? "max-w-lg" : ""}`}
                >
                  {item.desc}
                </p>
                <div
                  className={`mt-6 flex items-center gap-1.5 text-xs font-semibold transition-all duration-200 group-hover:gap-3 ${
                    item.accent.includes("text-white") ? "text-white/80" : "text-primary"
                  }`}
                >
                  {locale === "id" ? "Pelajari Lebih Lanjut" : "Learn More"}{" "}
                  <ArrowRight size={13} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose NDS */}
      <section className="bg-surface-low py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-primary">
                {locale === "id" ? "Keunggulan Kami" : "Our Advantage"}
              </p>
              <h2 className="mb-12 text-3xl font-bold tracking-tight md:text-5xl">
                {locale === "id" ? (
                  <>
                    Mengapa Institusi{" "}
                    <span className="text-primary">Memilih NDS</span>
                  </>
                ) : (
                  <>
                    Why Institutions{" "}
                    <span className="text-primary">Choose NDS</span>
                  </>
                )}
              </h2>
              <div className="space-y-10">
                {whyUs.map((item) => (
                  <div key={item.title} className="flex gap-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-fixed">
                      <item.icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="mb-1.5 font-bold">{item.title}</h4>
                      <p className="text-sm leading-relaxed text-foreground/65">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 content-start gap-4">
              {[
                {
                  num: "15+",
                  label: t("yearsExperience"),
                  bg: "bg-primary text-white",
                },
                {
                  num: "200+",
                  label: t("enterprisesServed"),
                  bg: "bg-surface-lowest",
                },
                {
                  num: "24/7",
                  label: "NOC/SOC",
                  bg: "bg-surface-lowest",
                },
                {
                  num: "99.9%",
                  label: t("availability"),
                  bg: "bg-tertiary-container text-white",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className={`rounded-xl p-8 ${stat.bg}`}
                >
                  <p
                    className={`text-4xl font-black ${
                      stat.bg.includes("text-white")
                        ? "text-white"
                        : "text-primary"
                    }`}
                  >
                    {stat.num}
                  </p>
                  <p
                    className={`mt-1 text-[0.65rem] font-bold uppercase tracking-widest ${
                      stat.bg.includes("text-white")
                        ? "text-white/60"
                        : "text-foreground/50"
                    }`}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
              {/* CTA card */}
              <div className="col-span-2 rounded-xl bg-foreground p-8 text-surface-lowest">
                <h3 className="mb-3 text-lg font-bold">
                  {locale === "id"
                    ? "Butuh assessment arsitektur?"
                    : "Need an architecture assessment?"}
                </h3>
                <p className="mb-5 text-sm text-surface-lowest/60">
                  {locale === "id"
                    ? "Diskusikan target, risiko, dan prioritas implementasi dengan tim engineer senior kami."
                    : "Discuss your goals, risks, and implementation priorities with our senior engineering team."}
                </p>
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  {locale === "id" ? "Konsultasi Gratis" : "Free Consultation"}{" "}
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries strip */}
      <section className="bg-surface py-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-8 text-center text-[0.65rem] font-bold uppercase tracking-[0.2em] text-outline">
            {locale === "id" ? "Industri yang Kami Layani" : "Industries We Serve"}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { slug: "enterprise", id: "Enterprise", en: "Enterprise" },
              { slug: "government", id: "Pemerintah", en: "Government" },
              { slug: "finance", id: "Keuangan", en: "Finance & Banking" },
              { slug: "hospitality", id: "Perhotelan", en: "Hospitality" },
              { slug: "manufacturing", id: "Manufaktur", en: "Manufacturing" },
            ].map((ind) => (
              <Link
                key={ind.slug}
                href={`/${locale}/industries/${ind.slug}`}
                className="rounded-full border border-outline-variant px-5 py-2 text-sm font-semibold text-foreground/70 transition-all hover:border-primary hover:bg-primary-fixed/20 hover:text-primary"
              >
                {locale === "id" ? ind.id : ind.en}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Gen CTA */}
      <section className="bg-surface-low py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="relative overflow-hidden rounded-2xl bg-surface-lowest p-12 shadow-ambient md:p-16">
            <div className="pointer-events-none absolute right-8 top-8 text-[8rem] font-black leading-none text-primary/[0.04]">
              NDS
            </div>
            <div className="relative text-center">
              <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
                {t("ctaTitle")}
              </h2>
              <p className="mb-8 text-foreground/65">{t("ctaSubtitle")}</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href={`/${locale}/contact`}
                  className="btn-primary flex items-center gap-2 rounded-md px-7 py-3.5 font-semibold"
                >
                  {t("ctaButton")} <ArrowRight size={16} />
                </Link>
                <a
                  href={`https://wa.me/628112017588?text=Hello%20PT%20Network%20Data%20Sistem`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary flex items-center gap-2 rounded-md px-7 py-3.5 font-semibold"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
