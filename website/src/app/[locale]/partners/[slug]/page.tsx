import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { AppLocale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo";
import { partnerPages } from "@/lib/site";

export async function generateStaticParams() {
  return partnerPages.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: AppLocale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const data = getPartnerData(slug, locale);
  return buildMetadata({
    locale,
    path: `/partners/${slug}`,
    title: data.title,
    description: data.intro,
  });
}

type PartnerData = {
  title: string;
  eyebrow: string;
  intro: string;
  aboutVendor: string;
  keyProducts: { en: string; id: string }[];
  businessValue: { en: string; id: string }[];
  useCases: { titleEn: string; titleId: string; descEn: string; descId: string }[];
};

function getPartnerData(slug: string, locale: AppLocale): PartnerData {
  const partners: Record<string, PartnerData> = {
    "akamai-indonesia": {
      title: "Akamai Indonesia Partner — PT Network Data Sistem",
      eyebrow: "Akamai Indonesia Partner",
      intro:
        locale === "id"
          ? "PT Network Data Sistem adalah mitra resmi Akamai di Indonesia, menghadirkan solusi CDN, keamanan edge, dan akselerasi digital terdepan untuk enterprise dan institusi pemerintah."
          : "PT Network Data Sistem is an official Akamai partner in Indonesia, delivering leading CDN, edge security, and digital acceleration solutions for enterprises and government institutions.",
      aboutVendor:
        locale === "id"
          ? "Akamai Technologies adalah pemimpin global dalam layanan cloud dan keamanan, mengoperasikan salah satu jaringan distribusi terbesar di dunia dengan 4.200+ PoP di 130+ negara. Platform Intelligent Edge Akamai melindungi dan mengakselerasi miliaran transaksi digital setiap hari."
          : "Akamai Technologies is a global leader in cloud and security services, operating one of the world's largest distribution networks with 4,200+ PoPs in 130+ countries. Akamai's Intelligent Edge Platform protects and accelerates billions of digital transactions every day.",
      keyProducts: [
        { en: "Akamai CDN — Global content delivery network", id: "Akamai CDN — Jaringan pengiriman konten global" },
        { en: "App & API Protector (WAF) — AI-powered web security", id: "App & API Protector (WAF) — Keamanan web berbasis AI" },
        { en: "DDoS Protection — Up to 100+ Tbps mitigation", id: "DDoS Protection — Mitigasi hingga 100+ Tbps" },
        { en: "Bot Manager — Automated threat detection", id: "Bot Manager — Deteksi ancaman otomatis" },
        { en: "API Security — API discovery and protection", id: "API Security — Penemuan dan perlindungan API" },
        { en: "Audience Hijacking Protection", id: "Audience Hijacking Protection" },
      ],
      businessValue: [
        { en: "Faster digital experiences for Indonesian users", id: "Pengalaman digital lebih cepat untuk pengguna Indonesia" },
        { en: "Reduced infrastructure load and bandwidth costs", id: "Beban infrastruktur dan biaya bandwidth berkurang" },
        { en: "Protection against DDoS and web application attacks", id: "Perlindungan dari serangan DDoS dan aplikasi web" },
        { en: "Compliance with data residency requirements", id: "Kepatuhan persyaratan residensi data" },
        { en: "24/7 threat intelligence and security updates", id: "Intelijen ancaman dan pembaruan keamanan 24/7" },
        { en: "Certified implementation and support from NDS", id: "Implementasi dan dukungan bersertifikasi dari NDS" },
      ],
      useCases: [
        {
          titleEn: "E-Commerce Performance",
          titleId: "Performa E-Commerce",
          descEn: "Accelerate product pages, handle flash sale traffic spikes, and protect payment APIs from fraud.",
          descId: "Akselerasi halaman produk, tangani lonjakan traffic flash sale, dan lindungi API pembayaran dari penipuan.",
        },
        {
          titleEn: "Government Portal Security",
          titleId: "Keamanan Portal Pemerintah",
          descEn: "Protect government websites from DDoS attacks and ensure availability during national events.",
          descId: "Lindungi website pemerintah dari serangan DDoS dan pastikan ketersediaan selama acara nasional.",
        },
        {
          titleEn: "Financial Services API Protection",
          titleId: "Proteksi API Layanan Keuangan",
          descEn: "Secure banking APIs from credential stuffing, bot attacks, and unauthorized access.",
          descId: "Amankan API perbankan dari credential stuffing, serangan bot, dan akses tidak sah.",
        },
      ],
    },
    "fortinet-indonesia": {
      title: "Fortinet Indonesia Partner — PT Network Data Sistem",
      eyebrow: "Fortinet Indonesia Partner",
      intro:
        locale === "id"
          ? "PT Network Data Sistem adalah mitra bersertifikasi Fortinet di Indonesia, mengimplementasikan Fortinet Security Fabric untuk enterprise, perbankan, dan institusi pemerintah."
          : "PT Network Data Sistem is a certified Fortinet partner in Indonesia, implementing Fortinet Security Fabric for enterprises, banking, and government institutions.",
      aboutVendor:
        locale === "id"
          ? "Fortinet adalah pemimpin global dalam keamanan jaringan dan cybersecurity, diakui dalam Magic Quadrant Gartner untuk Network Firewalls. Security Fabric Fortinet mengintegrasikan lebih dari 50 produk keamanan enterprise dalam satu platform manajemen terpadu."
          : "Fortinet is a global leader in network security and cybersecurity, recognized in the Gartner Magic Quadrant for Network Firewalls. Fortinet Security Fabric integrates 50+ enterprise security products into one unified management platform.",
      keyProducts: [
        { en: "FortiGate — Next-Generation Firewall (NGFW)", id: "FortiGate — Next-Generation Firewall (NGFW)" },
        { en: "FortiAnalyzer — Centralized log and analytics", id: "FortiAnalyzer — Log dan analitik terpusat" },
        { en: "FortiManager — Centralized policy management", id: "FortiManager — Manajemen kebijakan terpusat" },
        { en: "FortiSIEM — Security information and event management", id: "FortiSIEM — Manajemen informasi dan kejadian keamanan" },
        { en: "FortiClient — Endpoint protection and ZTNA", id: "FortiClient — Perlindungan endpoint dan ZTNA" },
        { en: "FortiSwitch & FortiAP — Secure LAN/WLAN", id: "FortiSwitch & FortiAP — LAN/WLAN aman" },
      ],
      businessValue: [
        { en: "Unified security management across all locations", id: "Manajemen keamanan terpadu di semua lokasi" },
        { en: "Reduced security complexity and tool sprawl", id: "Kompleksitas keamanan dan tool sprawl berkurang" },
        { en: "Automated threat detection and response", id: "Deteksi dan respons ancaman otomatis" },
        { en: "Compliance with OJK, BSSN, and ISO 27001", id: "Kepatuhan OJK, BSSN, dan ISO 27001" },
        { en: "Lower total cost of ownership vs. multi-vendor", id: "Total cost of ownership lebih rendah vs. multi-vendor" },
        { en: "NDS-certified engineers for implementation", id: "Engineer bersertifikasi NDS untuk implementasi" },
      ],
      useCases: [
        {
          titleEn: "Enterprise Perimeter Security",
          titleId: "Keamanan Perimeter Enterprise",
          descEn: "Deploy FortiGate NGFW to protect corporate network perimeter with IPS, SSL inspection, and app control.",
          descId: "Deploy FortiGate NGFW untuk melindungi perimeter jaringan korporat dengan IPS, inspeksi SSL, dan kontrol aplikasi.",
        },
        {
          titleEn: "Banking Security Compliance",
          titleId: "Kepatuhan Keamanan Perbankan",
          descEn: "Meet OJK and BSSN requirements with comprehensive security logging, segmentation, and incident response.",
          descId: "Penuhi persyaratan OJK dan BSSN dengan logging keamanan komprehensif, segmentasi, dan respons insiden.",
        },
        {
          titleEn: "Government Network Protection",
          titleId: "Proteksi Jaringan Pemerintah",
          descEn: "Secure government networks with FortiGate, FortiAnalyzer, and centralized policy management.",
          descId: "Amankan jaringan pemerintah dengan FortiGate, FortiAnalyzer, dan manajemen kebijakan terpusat.",
        },
      ],
    },
    "ruijie-indonesia": {
      title: "Ruijie Indonesia Partner — PT Network Data Sistem",
      eyebrow: "Ruijie Indonesia Partner",
      intro:
        locale === "id"
          ? "PT Network Data Sistem adalah mitra resmi Ruijie Networks di Indonesia, membangun infrastruktur jaringan kampus dan enterprise dengan teknologi WiFi 6/6E dan manajemen cloud terkini."
          : "PT Network Data Sistem is an official Ruijie Networks partner in Indonesia, building campus and enterprise network infrastructure with the latest WiFi 6/6E and cloud management technology.",
      aboutVendor:
        locale === "id"
          ? "Ruijie Networks adalah produsen perangkat jaringan terkemuka asal China yang telah melayani lebih dari 100 juta pengguna di 100+ negara. Ruijie dikenal dengan solusi switching dan wireless enterprise berkecepatan tinggi, serta platform manajemen cloud Ruijie Cloud yang komprehensif."
          : "Ruijie Networks is a leading Chinese network equipment manufacturer serving over 100 million users in 100+ countries. Ruijie is known for high-speed enterprise switching and wireless solutions, as well as the comprehensive Ruijie Cloud management platform.",
      keyProducts: [
        { en: "RG-NBS Series — 10GbE campus core switching", id: "RG-NBS Series — Switching core kampus 10GbE" },
        { en: "RG-AP Series — WiFi 6/6E enterprise access points", id: "RG-AP Series — Access point enterprise WiFi 6/6E" },
        { en: "Ruijie Cloud — Centralized cloud network management", id: "Ruijie Cloud — Manajemen jaringan cloud terpusat" },
        { en: "RG-EG Series — Enterprise gateway and routing", id: "RG-EG Series — Gateway dan routing enterprise" },
        { en: "RG-S Series — PoE+ switching for IoT", id: "RG-S Series — Switching PoE+ untuk IoT" },
        { en: "Reyee WiFi — SMB cloud-managed WiFi", id: "Reyee WiFi — WiFi terkelola cloud untuk SMB" },
      ],
      businessValue: [
        { en: "Modern high-speed campus network at competitive cost", id: "Jaringan kampus modern berkecepatan tinggi dengan biaya kompetitif" },
        { en: "WiFi 6/6E for high-density user environments", id: "WiFi 6/6E untuk lingkungan pengguna kepadatan tinggi" },
        { en: "Cloud-managed simplicity with enterprise-grade features", id: "Kemudahan cloud-managed dengan fitur enterprise-grade" },
        { en: "Unified wired and wireless management", id: "Manajemen kabel dan nirkabel terpadu" },
        { en: "Scalable from campus to national deployment", id: "Skalabel dari kampus hingga deployment nasional" },
        { en: "NDS local support and certified implementation", id: "Dukungan lokal NDS dan implementasi bersertifikasi" },
      ],
      useCases: [
        {
          titleEn: "University Campus Modernization",
          titleId: "Modernisasi Kampus Universitas",
          descEn: "Upgrade legacy campus networks to 10GbE core with WiFi 6 coverage for students, staff, and IoT devices.",
          descId: "Upgrade jaringan kampus lama ke core 10GbE dengan coverage WiFi 6 untuk mahasiswa, staf, dan perangkat IoT.",
        },
        {
          titleEn: "Hotel Guest WiFi",
          titleId: "WiFi Tamu Hotel",
          descEn: "Deploy managed WiFi with captive portal, bandwidth control, and real-time monitoring for hotel guests.",
          descId: "Deploy WiFi terkelola dengan captive portal, kontrol bandwidth, dan monitoring real-time untuk tamu hotel.",
        },
        {
          titleEn: "Hospital Clinical Network",
          titleId: "Jaringan Klinik Rumah Sakit",
          descEn: "Build reliable clinical networks supporting medical devices, EMR systems, and staff mobility.",
          descId: "Bangun jaringan klinis andal yang mendukung perangkat medis, sistem EMR, dan mobilitas staf.",
        },
      ],
    },
  };

  return (
    partners[slug] ?? {
      title: slug,
      eyebrow: "Partner",
      intro: "",
      aboutVendor: "",
      keyProducts: [],
      businessValue: [],
      useCases: [],
    }
  );
}

export default async function PartnerDetailPage({
  params,
}: {
  params: Promise<{ locale: AppLocale; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!partnerPages.includes(slug)) notFound();
  const data = getPartnerData(slug, locale);

  return (
    <main>
      {/* Hero */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-primary">
            {data.eyebrow}
          </p>
          <h1 className="mb-5 max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
            {data.title.split(" — ")[0]}
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-foreground/65">{data.intro}</p>
        </div>
      </section>

      {/* About vendor + key products */}
      <section className="bg-surface-low py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold">
                {locale === "id" ? "Tentang Vendor" : "About the Vendor"}
              </h2>
              <p className="text-sm leading-relaxed text-foreground/75">{data.aboutVendor}</p>
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-bold">
                {locale === "id" ? "Produk & Solusi Utama" : "Key Products & Solutions"}
              </h2>
              <div className="space-y-2.5">
                {data.keyProducts.map((p) => (
                  <div key={p.en} className="flex items-start gap-3">
                    <CheckCircle size={15} className="mt-0.5 shrink-0 text-primary" />
                    <span className="text-sm text-foreground/80">
                      {locale === "id" ? p.id : p.en}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business value */}
      <section className="bg-surface py-14">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-8 text-2xl font-bold">
            {locale === "id" ? "Nilai Bisnis untuk Indonesia" : "Business Value for Indonesia"}
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {data.businessValue.map((v) => (
              <div key={v.en} className="rounded-xl bg-primary-fixed p-5">
                <p className="text-sm font-semibold text-primary">
                  {locale === "id" ? v.id : v.en}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="bg-surface-low py-14">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-8 text-2xl font-bold">
            {locale === "id" ? "Kasus Penggunaan" : "Use Cases"}
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {data.useCases.map((u) => (
              <div key={u.titleEn} className="rounded-2xl bg-surface-lowest p-7 shadow-ambient">
                <h3 className="mb-2.5 font-bold text-foreground">
                  {locale === "id" ? u.titleId : u.titleEn}
                </h3>
                <p className="text-sm leading-relaxed text-foreground/65">
                  {locale === "id" ? u.descId : u.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground py-20 text-surface-lowest">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            {locale === "id" ? "Siap Mengimplementasikan?" : "Ready to Implement?"}
          </h2>
          <p className="mb-8 text-surface-lowest/60">
            {locale === "id"
              ? "Hubungi tim NDS untuk konsultasi teknis dan proposal implementasi yang disesuaikan dengan kebutuhan institusi Anda."
              : "Contact the NDS team for technical consultation and an implementation proposal tailored to your institution."}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="btn-primary inline-flex items-center gap-2 rounded-md px-7 py-3.5 font-semibold"
          >
            {locale === "id" ? "Konsultasi Sekarang" : "Consult Now"} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
