import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AppLocale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo";
import { industryPages } from "@/lib/site";

export async function generateStaticParams() {
  return industryPages.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: AppLocale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const data = getIndustryData(slug, locale);
  return buildMetadata({
    locale,
    path: `/industries/${slug}`,
    title: data.title,
    description: data.intro,
  });
}

type IndustryData = {
  title: string;
  eyebrow: string;
  intro: string;
  challenges: { en: string; id: string }[];
  solutions: { titleEn: string; titleId: string; descEn: string; descId: string }[];
  vendors: string[];
};

function getIndustryData(slug: string, locale: AppLocale): IndustryData {
  const data: Record<string, IndustryData> = {
    enterprise: {
      title: locale === "id" ? "Solusi Enterprise" : "Enterprise Solutions",
      eyebrow: "Enterprise",
      intro:
        locale === "id"
          ? "Infrastruktur jaringan, keamanan, dan managed services berkelas institusi untuk korporasi dan holding group besar di Indonesia."
          : "Institutional-grade network infrastructure, security, and managed services for large corporations and holding groups in Indonesia.",
      challenges: [
        { en: "Complex multi-site network management", id: "Manajemen jaringan multi-site yang kompleks" },
        { en: "Fragmented security tools and policies", id: "Alat dan kebijakan keamanan yang terfragmentasi" },
        { en: "High IT operational costs", id: "Biaya operasional IT yang tinggi" },
        { en: "Digital transformation pressure", id: "Tekanan transformasi digital" },
        { en: "Talent recruitment and retention", id: "Rekrutmen dan retensi talenta" },
        { en: "Compliance and audit requirements", id: "Persyaratan kepatuhan dan audit" },
      ],
      solutions: [
        {
          titleEn: "Unified Network Architecture",
          titleId: "Arsitektur Jaringan Terpadu",
          descEn:
            "Design and deploy standardized network architecture across all sites for consistent operations.",
          descId:
            "Desain dan deploy arsitektur jaringan terstandarisasi di semua site untuk operasi yang konsisten.",
        },
        {
          titleEn: "Centralized Security Management",
          titleId: "Manajemen Keamanan Terpusat",
          descEn:
            "Deploy Fortinet Security Fabric for unified visibility and automated threat response.",
          descId:
            "Deploy Fortinet Security Fabric untuk visibilitas terpadu dan respons ancaman otomatis.",
        },
        {
          titleEn: "Managed NOC/SOC Services",
          titleId: "Layanan Managed NOC/SOC",
          descEn: "24/7 network and security operations with SLA-backed response times.",
          descId: "Operasi jaringan dan keamanan 24/7 dengan waktu respons berbasis SLA.",
        },
      ],
      vendors: ["Akamai", "Fortinet", "Ruijie", "SD-WAN"],
    },
    government: {
      title: locale === "id" ? "Solusi Pemerintah" : "Government Solutions",
      eyebrow: locale === "id" ? "Pemerintah" : "Government",
      intro:
        locale === "id"
          ? "Infrastruktur jaringan dan keamanan yang berdaulat, patuh regulasi, dan andal untuk kementerian, lembaga, dan pemerintah daerah di Indonesia."
          : "Sovereign, regulatory-compliant, and reliable network and security infrastructure for ministries, agencies, and regional governments in Indonesia.",
      challenges: [
        { en: "Data sovereignty and residency requirements", id: "Persyaratan kedaulatan dan residensi data" },
        { en: "BSSN and Kominfo compliance", id: "Kepatuhan BSSN dan Kominfo" },
        { en: "Cyber attacks on government portals", id: "Serangan siber pada portal pemerintah" },
        { en: "Limited IT budget and resources", id: "Anggaran dan sumber daya IT terbatas" },
        { en: "Legacy infrastructure modernization", id: "Modernisasi infrastruktur lama" },
        { en: "Multi-region office connectivity", id: "Konektivitas kantor multi-wilayah" },
      ],
      solutions: [
        {
          titleEn: "Government Network Security",
          titleId: "Keamanan Jaringan Pemerintah",
          descEn:
            "Fortinet NGFW deployment with centralized monitoring and BSSN-compliant security policies.",
          descId:
            "Deployment Fortinet NGFW dengan monitoring terpusat dan kebijakan keamanan patuh BSSN.",
        },
        {
          titleEn: "Portal DDoS & WAF Protection",
          titleId: "Perlindungan DDoS & WAF Portal",
          descEn:
            "Akamai edge protection for government portals against DDoS attacks and web application threats.",
          descId:
            "Perlindungan edge Akamai untuk portal pemerintah terhadap serangan DDoS dan ancaman aplikasi web.",
        },
        {
          titleEn: "Regional Office Connectivity",
          titleId: "Konektivitas Kantor Daerah",
          descEn:
            "SD-WAN deployment for secure, cost-effective connectivity between central and regional offices.",
          descId:
            "Deployment SD-WAN untuk konektivitas aman dan hemat biaya antara kantor pusat dan daerah.",
        },
      ],
      vendors: ["Akamai", "Fortinet", "SD-WAN"],
    },
    finance: {
      title: locale === "id" ? "Solusi Keuangan & Perbankan" : "Finance & Banking Solutions",
      eyebrow: locale === "id" ? "Keuangan & Perbankan" : "Finance & Banking",
      intro:
        locale === "id"
          ? "Keamanan siber, kepatuhan regulasi OJK/BI, dan managed operations untuk bank, asuransi, dan lembaga keuangan non-bank di Indonesia."
          : "Cybersecurity, OJK/BI regulatory compliance, and managed operations for banks, insurers, and non-bank financial institutions in Indonesia.",
      challenges: [
        { en: "OJK POJK 11 and BI regulation compliance", id: "Kepatuhan POJK OJK 11 dan regulasi BI" },
        { en: "Banking fraud and cyber threats", id: "Penipuan perbankan dan ancaman siber" },
        { en: "Core banking system availability", id: "Ketersediaan sistem core banking" },
        { en: "SWIFT and payment network security", id: "Keamanan jaringan SWIFT dan pembayaran" },
        { en: "Branch network standardization", id: "Standarisasi jaringan cabang" },
        { en: "Audit trail and forensics readiness", id: "Kesiapan audit trail dan forensik" },
      ],
      solutions: [
        {
          titleEn: "Banking Security Compliance",
          titleId: "Kepatuhan Keamanan Perbankan",
          descEn:
            "Comprehensive security stack meeting OJK, BI, and ISO 27001 requirements with full audit trails.",
          descId:
            "Stack keamanan komprehensif memenuhi persyaratan OJK, BI, dan ISO 27001 dengan audit trail penuh.",
        },
        {
          titleEn: "Branch Network Standardization",
          titleId: "Standarisasi Jaringan Cabang",
          descEn:
            "SD-WAN and Fortinet NGFW deployment for consistent security across all bank branches.",
          descId:
            "Deployment SD-WAN dan Fortinet NGFW untuk keamanan konsisten di semua cabang bank.",
        },
        {
          titleEn: "API Security for Digital Banking",
          titleId: "Keamanan API Banking Digital",
          descEn:
            "Akamai API security to protect mobile banking APIs from credential stuffing and bot attacks.",
          descId:
            "Keamanan API Akamai untuk melindungi API mobile banking dari credential stuffing dan serangan bot.",
        },
      ],
      vendors: ["Akamai", "Fortinet", "SD-WAN"],
    },
    hospitality: {
      title: locale === "id" ? "Solusi Perhotelan" : "Hospitality Solutions",
      eyebrow: locale === "id" ? "Perhotelan" : "Hospitality",
      intro:
        locale === "id"
          ? "Jaringan tamu premium, konektivitas manajemen properti, dan managed WiFi untuk hotel, resort, dan grup perhotelan di seluruh Indonesia."
          : "Premium guest networks, property management connectivity, and managed WiFi for hotels, resorts, and hospitality groups across Indonesia.",
      challenges: [
        { en: "Guest WiFi quality and coverage", id: "Kualitas dan coverage WiFi tamu" },
        { en: "Property management system connectivity", id: "Konektivitas sistem manajemen properti" },
        { en: "Segmented guest and operations network", id: "Jaringan tamu dan operasional yang tersegmentasi" },
        { en: "IoT device management (IPTV, smart room)", id: "Manajemen perangkat IoT (IPTV, kamar pintar)" },
        { en: "Multi-property centralized management", id: "Manajemen terpusat multi-properti" },
        { en: "Bandwidth cost optimization", id: "Optimasi biaya bandwidth" },
      ],
      solutions: [
        {
          titleEn: "Managed Guest WiFi",
          titleId: "Managed WiFi Tamu",
          descEn:
            "Enterprise-grade guest WiFi with captive portal, bandwidth management, and 24/7 monitoring.",
          descId:
            "WiFi tamu enterprise-grade dengan captive portal, manajemen bandwidth, dan monitoring 24/7.",
        },
        {
          titleEn: "Property Network Design",
          titleId: "Desain Jaringan Properti",
          descEn:
            "Ruijie campus network for hotel operations separating guest, staff, and IoT traffic.",
          descId:
            "Jaringan kampus Ruijie untuk operasional hotel memisahkan traffic tamu, staf, dan IoT.",
        },
        {
          titleEn: "Multi-Property Managed Services",
          titleId: "Managed Services Multi-Properti",
          descEn: "Centralized NOC monitoring for all hotel properties with unified SLA reporting.",
          descId:
            "Monitoring NOC terpusat untuk semua properti hotel dengan pelaporan SLA terpadu.",
        },
      ],
      vendors: ["Ruijie", "Managed WiFi", "Managed Services"],
    },
    manufacturing: {
      title: locale === "id" ? "Solusi Manufaktur" : "Manufacturing Solutions",
      eyebrow: locale === "id" ? "Manufaktur" : "Manufacturing",
      intro:
        locale === "id"
          ? "Konvergensi OT/IT, WiFi industrial untuk lantai pabrik, dan konektivitas aman untuk pabrik manufaktur dan kawasan industri di Indonesia."
          : "OT/IT convergence, industrial WiFi for factory floors, and secure connectivity for manufacturing plants and industrial estates in Indonesia.",
      challenges: [
        { en: "OT/IT network convergence complexity", id: "Kompleksitas konvergensi jaringan OT/IT" },
        { en: "Factory floor WiFi in harsh environments", id: "WiFi lantai pabrik di lingkungan keras" },
        { en: "Production system uptime criticality", id: "Kritikalitas uptime sistem produksi" },
        { en: "Industrial IoT connectivity", id: "Konektivitas Industrial IoT" },
        { en: "Supply chain connectivity and visibility", id: "Konektivitas dan visibilitas rantai pasok" },
        { en: "Cybersecurity for industrial systems", id: "Keamanan siber untuk sistem industri" },
      ],
      solutions: [
        {
          titleEn: "Industrial WiFi Deployment",
          titleId: "Deployment WiFi Industrial",
          descEn:
            "Ruijie industrial-grade WiFi access points for factory floors with seamless roaming.",
          descId:
            "Access point WiFi industrial-grade Ruijie untuk lantai pabrik dengan roaming seamless.",
        },
        {
          titleEn: "OT/IT Network Segmentation",
          titleId: "Segmentasi Jaringan OT/IT",
          descEn:
            "Fortinet security fabric to isolate OT networks while enabling necessary IT integration.",
          descId:
            "Security fabric Fortinet untuk mengisolasi jaringan OT sambil memungkinkan integrasi IT yang diperlukan.",
        },
        {
          titleEn: "Plant Connectivity & SD-WAN",
          titleId: "Konektivitas Pabrik & SD-WAN",
          descEn:
            "SD-WAN for reliable, cost-effective connectivity between manufacturing plants and HQ.",
          descId:
            "SD-WAN untuk konektivitas andal dan hemat biaya antara pabrik manufaktur dan HQ.",
        },
      ],
      vendors: ["Ruijie", "Fortinet", "SD-WAN"],
    },
  };

  return (
    data[slug] ?? {
      title: slug,
      eyebrow: slug,
      intro: "",
      challenges: [],
      solutions: [],
      vendors: [],
    }
  );
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ locale: AppLocale; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!industryPages.includes(slug)) notFound();
  const data = getIndustryData(slug, locale);

  return (
    <main>
      {/* Hero */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-primary">
            {data.eyebrow}
          </p>
          <h1 className="mb-5 max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
            {data.title}
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-foreground/65">{data.intro}</p>
        </div>
      </section>

      {/* Challenges + Solutions */}
      <section className="bg-surface-low py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-bold">
                {locale === "id" ? "Tantangan Industri" : "Industry Challenges"}
              </h2>
              <div className="space-y-3">
                {data.challenges.map((c) => (
                  <div key={c.en} className="flex items-start gap-3">
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-sm text-foreground/75">
                      {locale === "id" ? c.id : c.en}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="mb-6 text-2xl font-bold">
                {locale === "id" ? "Solusi NDS" : "NDS Solutions"}
              </h2>
              <div className="space-y-4">
                {data.solutions.map((s) => (
                  <div key={s.titleEn} className="rounded-xl bg-surface-lowest p-5 shadow-ambient">
                    <h3 className="mb-1.5 font-bold text-foreground">
                      {locale === "id" ? s.titleId : s.titleEn}
                    </h3>
                    <p className="text-sm text-foreground/65">
                      {locale === "id" ? s.descId : s.descEn}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vendor partners */}
      {data.vendors.length > 0 && (
        <section className="bg-surface py-12">
          <div className="mx-auto max-w-7xl px-6">
            <p className="mb-5 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-outline">
              {locale === "id" ? "Solusi Didukung Oleh" : "Solutions Powered By"}
            </p>
            <div className="flex flex-wrap gap-3">
              {data.vendors.map((v) => (
                <span
                  key={v}
                  className="rounded-full border border-outline-variant px-4 py-1.5 text-sm font-semibold text-foreground/70"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-foreground py-20 text-surface-lowest">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            {locale === "id"
              ? "Diskusikan Kebutuhan Industri Anda"
              : "Discuss Your Industry Needs"}
          </h2>
          <p className="mb-8 text-surface-lowest/60">
            {locale === "id"
              ? "Tim kami memahami tantangan spesifik industri Anda dan siap merekomendasikan solusi yang tepat."
              : "Our team understands your industry-specific challenges and is ready to recommend the right solutions."}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="btn-primary inline-flex items-center gap-2 rounded-md px-7 py-3.5 font-semibold"
          >
            {locale === "id" ? "Hubungi Kami" : "Contact Us"} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
