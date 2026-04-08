import { AppLocale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo";
import { ArrowRight, Target, Eye, Shield, Users, Award, Globe } from "lucide-react";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  return buildMetadata({
    locale,
    path: "/about",
    title:
      locale === "id"
        ? "Tentang PT Network Data Sistem"
        : "About PT Network Data Sistem",
    description:
      locale === "id"
        ? "Profil perusahaan, visi, misi, dan kapabilitas enterprise PT Network Data Sistem — system integrator Indonesia."
        : "Company profile, vision, mission, and enterprise capabilities of PT Network Data Sistem — Indonesia system integrator.",
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;

  const values = [
    {
      icon: Shield,
      title: locale === "id" ? "Integritas Teknis" : "Technical Integrity",
      desc:
        locale === "id"
          ? "Kami hanya merekomendasikan solusi yang telah kami validasi sendiri untuk performa dan keandalan."
          : "We only recommend solutions we have personally validated for performance and reliability.",
    },
    {
      icon: Users,
      title:
        locale === "id" ? "Kemitraan Jangka Panjang" : "Long-Term Partnership",
      desc:
        locale === "id"
          ? "Kami membangun hubungan, bukan transaksi. Tim kami tetap terlibat selama siklus hidup solusi."
          : "We build relationships, not transactions. Our team stays engaged across the solution lifecycle.",
    },
    {
      icon: Award,
      title:
        locale === "id"
          ? "Standar Implementasi Tertinggi"
          : "Highest Implementation Standards",
      desc:
        locale === "id"
          ? "Setiap deployment mengikuti framework metodologi terstruktur yang memastikan konsistensi dan kualitas."
          : "Every deployment follows a structured methodology framework ensuring consistency and quality.",
    },
    {
      icon: Globe,
      title: locale === "id" ? "Konteks Lokal" : "Local Context",
      desc:
        locale === "id"
          ? "Pemahaman mendalam tentang regulasi, infrastruktur, dan tantangan unik pasar Indonesia."
          : "Deep understanding of Indonesian market regulations, infrastructure, and unique challenges.",
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-4 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-primary">
            {locale === "id" ? "Tentang Kami" : "About Us"}
          </p>
          <h1 className="mb-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            {locale === "id" ? (
              <>
                Membangun Infrastruktur Digital{" "}
                <span className="text-primary">
                  yang Andal untuk Indonesia
                </span>
              </>
            ) : (
              <>
                Building Reliable Digital{" "}
                <span className="text-primary">Infrastructure for Indonesia</span>
              </>
            )}
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-foreground/70">
            {locale === "id"
              ? "PT Network Data Sistem adalah system integrator enterprise Indonesia yang berfokus pada network, security, dan managed services untuk organisasi berskala institusi."
              : "PT Network Data Sistem is an Indonesian enterprise system integrator focused on network, security, and managed services for institutional-scale organizations."}
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-surface-low py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-5 text-2xl font-bold tracking-tight">
                {locale === "id"
                  ? "Siapa PT Network Data Sistem?"
                  : "Who is PT Network Data Sistem?"}
              </h2>
              <div className="space-y-4 text-foreground/70">
                <p className="leading-relaxed">
                  {locale === "id"
                    ? "Berlokasi di Jakarta Selatan, PT Network Data Sistem telah melayani enterprise, pemerintah, dan SMB Indonesia selama lebih dari 15 tahun. Kami mengkhususkan diri dalam mengintegrasikan teknologi terbaik dunia — Akamai, Fortinet, dan Ruijie — dengan keahlian lokal yang mendalam."
                    : "Based in South Jakarta, PT Network Data Sistem has served Indonesian enterprises, government institutions, and SMBs for over 15 years. We specialize in integrating world-class technology — Akamai, Fortinet, and Ruijie — with deep local expertise."}
                </p>
                <p className="leading-relaxed">
                  {locale === "id"
                    ? "Dari desain arsitektur jaringan hingga managed operations 24/7, kami menjadi mitra jangka panjang yang memahami tantangan infrastruktur digital Indonesia."
                    : "From network architecture design to 24/7 managed operations, we are the long-term partner that understands Indonesian digital infrastructure challenges."}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "15+", label: locale === "id" ? "Tahun Pengalaman" : "Years Experience" },
                { num: "200+", label: locale === "id" ? "Enterprise Dilayani" : "Enterprises Served" },
                { num: "3", label: locale === "id" ? "Partner Vendor Utama" : "Tier-1 Vendor Partners" },
                { num: "24/7", label: "NOC/SOC Support" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl bg-surface-lowest p-6">
                  <p className="text-3xl font-black text-primary">{stat.num}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-foreground/50">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-primary p-10 text-white">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                <Eye size={22} className="text-white" />
              </div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-white/60">
                {locale === "id" ? "Visi" : "Vision"}
              </h3>
              <p className="text-xl font-bold leading-snug">
                {locale === "id"
                  ? "Menjadi system integrator kelas dunia yang mempercepat transformasi digital Indonesia melalui infrastruktur jaringan dan keamanan yang andal."
                  : "To be a world-class system integrator that accelerates Indonesia's digital transformation through reliable network and security infrastructure."}
              </p>
            </div>
            <div className="rounded-2xl bg-surface-lowest p-10 shadow-ambient">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-fixed">
                <Target size={22} className="text-primary" />
              </div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-foreground/50">
                {locale === "id" ? "Misi" : "Mission"}
              </h3>
              <ul className="space-y-3">
                {(locale === "id"
                  ? [
                      "Memberikan solusi teknologi kelas institusi dengan standar implementasi tertinggi",
                      "Membangun kemitraan jangka panjang berdasarkan kepercayaan dan hasil terukur",
                      "Mengembangkan keahlian lokal dalam teknologi jaringan dan keamanan global",
                    ]
                  : [
                      "Deliver institutional-grade technology solutions with the highest implementation standards",
                      "Build long-term partnerships based on trust and measurable outcomes",
                      "Develop local expertise in global network and security technologies",
                    ]
                ).map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/70">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface-low py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-2xl font-bold tracking-tight">
            {locale === "id" ? "Nilai-Nilai Kami" : "Our Values"}
          </h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl bg-surface-lowest p-7">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-fixed">
                  <v.icon size={18} className="text-primary" />
                </div>
                <h3 className="mb-2 font-bold">{v.title}</h3>
                <p className="text-sm leading-relaxed text-foreground/65">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners highlight */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-10 text-2xl font-bold tracking-tight">
            {locale === "id" ? "Kemitraan Vendor" : "Vendor Partnerships"}
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                name: "Akamai",
                slug: "akamai-indonesia",
                desc:
                  locale === "id"
                    ? "Partner resmi Akamai di Indonesia untuk CDN, edge security, dan layanan media delivery."
                    : "Official Akamai partner in Indonesia for CDN, edge security, and media delivery services.",
              },
              {
                name: "Fortinet",
                slug: "fortinet-indonesia",
                desc:
                  locale === "id"
                    ? "Partner resmi Fortinet untuk solusi keamanan jaringan, firewall, dan endpoint protection."
                    : "Official Fortinet partner for network security, firewall, and endpoint protection solutions.",
              },
              {
                name: "Ruijie Networks",
                slug: "ruijie-indonesia",
                desc:
                  locale === "id"
                    ? "Partner resmi Ruijie untuk infrastruktur kampus, switching, routing, dan WiFi enterprise."
                    : "Official Ruijie partner for campus infrastructure, switching, routing, and enterprise WiFi.",
              },
            ].map((p) => (
              <div
                key={p.name}
                className="group rounded-xl bg-surface-lowest p-8 shadow-ambient"
              >
                <h3 className="mb-3 text-xl font-bold text-primary">{p.name}</h3>
                <p className="mb-5 text-sm leading-relaxed text-foreground/65">
                  {p.desc}
                </p>
                <Link
                  href={`/${locale}/partners/${p.slug}`}
                  className="flex items-center gap-1.5 text-xs font-semibold text-primary transition-all group-hover:gap-3"
                >
                  {locale === "id" ? "Pelajari Lebih Lanjut" : "Learn More"}{" "}
                  <ArrowRight size={12} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            {locale === "id"
              ? "Siap Memulai Proyek Anda?"
              : "Ready to Start Your Project?"}
          </h2>
          <p className="mb-8 text-white/70">
            {locale === "id"
              ? "Konsultasikan kebutuhan infrastruktur digital Anda dengan tim arsitek solusi kami."
              : "Discuss your digital infrastructure requirements with our solution architect team."}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 rounded-md bg-white px-7 py-3.5 font-semibold text-primary transition-opacity hover:opacity-90"
          >
            {locale === "id" ? "Hubungi Kami" : "Contact Us"}{" "}
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
