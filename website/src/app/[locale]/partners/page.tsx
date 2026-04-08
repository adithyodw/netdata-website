import Link from "next/link";
import { Globe, Shield, Network, ArrowRight } from "lucide-react";
import { AppLocale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  return buildMetadata({
    locale,
    path: "/partners",
    title: locale === "id" ? "Mitra Vendor" : "Vendor Partners",
    description:
      "PT Network Data Sistem is official Akamai, Fortinet, and Ruijie partner in Indonesia.",
  });
}

export default async function PartnersPage({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;

  const partners = [
    {
      slug: "akamai-indonesia",
      icon: Globe,
      name: "Akamai Indonesia Partner",
      descEn:
        "Official Akamai partner delivering CDN, WAF, DDoS protection, and Bot Management for Indonesian enterprises.",
      descId:
        "Mitra resmi Akamai untuk CDN, WAF, perlindungan DDoS, dan Bot Management bagi enterprise Indonesia.",
      accent: "bg-primary text-white",
    },
    {
      slug: "fortinet-indonesia",
      icon: Shield,
      name: "Fortinet Indonesia Partner",
      descEn:
        "Certified Fortinet partner implementing FortiGate NGFW, FortiSIEM, ZTNA, and full Security Fabric for Indonesia.",
      descId:
        "Mitra bersertifikasi Fortinet untuk implementasi FortiGate NGFW, FortiSIEM, ZTNA, dan Security Fabric di Indonesia.",
      accent: "bg-surface-lowest",
    },
    {
      slug: "ruijie-indonesia",
      icon: Network,
      name: "Ruijie Indonesia Partner",
      descEn:
        "Authorized Ruijie partner deploying enterprise campus networks, WiFi 6/6E, and cloud network management across Indonesia.",
      descId:
        "Mitra resmi Ruijie untuk deployment jaringan kampus enterprise, WiFi 6/6E, dan manajemen jaringan cloud di seluruh Indonesia.",
      accent: "bg-surface-lowest",
    },
  ];

  return (
    <main>
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-primary">
            {locale === "id" ? "Kemitraan Vendor" : "Vendor Partnerships"}
          </p>
          <h1 className="mb-4 max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
            {locale === "id" ? (
              <>
                Mitra Resmi <span className="text-primary">Tier-1 Indonesia</span>
              </>
            ) : (
              <>
                Official <span className="text-primary">Tier-1 Indonesian Partners</span>
              </>
            )}
          </h1>
          <p className="max-w-xl text-lg text-foreground/65">
            {locale === "id"
              ? "NDS memegang status mitra resmi dari Akamai, Fortinet, dan Ruijie — memastikan setiap implementasi memenuhi standar vendor tertinggi."
              : "NDS holds official partner status from Akamai, Fortinet, and Ruijie — ensuring every implementation meets the highest vendor standards."}
          </p>
        </div>
      </section>

      <section className="bg-surface-low py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {partners.map((p) => (
              <Link
                key={p.slug}
                href={`/${locale}/partners/${p.slug}`}
                className={`group card-hover flex flex-col rounded-2xl p-8 ${p.accent}`}
              >
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${p.accent.includes("text-white") ? "bg-white/15" : "bg-primary-fixed"}`}
                >
                  <p.icon
                    size={22}
                    className={p.accent.includes("text-white") ? "text-white" : "text-primary"}
                  />
                </div>
                <h3
                  className={`mb-3 text-lg font-bold ${p.accent.includes("text-white") ? "text-white" : "text-foreground"}`}
                >
                  {p.name}
                </h3>
                <p
                  className={`flex-1 text-sm leading-relaxed ${p.accent.includes("text-white") ? "text-white/70" : "text-foreground/65"}`}
                >
                  {locale === "id" ? p.descId : p.descEn}
                </p>
                <div
                  className={`mt-6 flex items-center gap-1.5 text-xs font-semibold transition-all duration-200 group-hover:gap-3 ${p.accent.includes("text-white") ? "text-white/80" : "text-primary"}`}
                >
                  {locale === "id" ? "Lihat Detail" : "View Details"}{" "}
                  <ArrowRight size={13} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why partner with NDS */}
      <section className="bg-surface py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-10 text-2xl font-bold tracking-tight">
            {locale === "id"
              ? "Mengapa Bermitra Melalui NDS?"
              : "Why Partner Through NDS?"}
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                en: "Certified implementation engineers for each vendor",
                id: "Engineer implementasi bersertifikasi untuk setiap vendor",
              },
              {
                en: "Local Indonesian market expertise and compliance knowledge",
                id: "Keahlian pasar lokal Indonesia dan pengetahuan kepatuhan",
              },
              {
                en: "24/7 post-deployment support with SLA backing",
                id: "Dukungan pasca-deployment 24/7 dengan jaminan SLA",
              },
              {
                en: "Single point of contact across Akamai, Fortinet, and Ruijie",
                id: "Satu titik kontak untuk Akamai, Fortinet, dan Ruijie",
              },
            ].map((item) => (
              <div key={item.en} className="rounded-xl bg-primary-fixed p-5">
                <p className="text-sm font-semibold text-primary">
                  {locale === "id" ? item.id : item.en}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
