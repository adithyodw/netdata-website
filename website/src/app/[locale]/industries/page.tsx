import Link from "next/link";
import { Building2, Landmark, Banknote, Hotel, Factory, ArrowRight } from "lucide-react";
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
    path: "/industries",
    title: locale === "id" ? "Industri yang Kami Layani" : "Industries We Serve",
    description:
      "Industry-specific network, security, and managed service solutions for enterprise, government, finance, hospitality, and manufacturing in Indonesia.",
  });
}

export default async function IndustriesPage({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;

  const industries = [
    {
      slug: "enterprise",
      icon: Building2,
      en: "Enterprise",
      id: "Enterprise",
      descEn:
        "Scalable network, security, and managed services for large Indonesian corporations and holding groups.",
      descId:
        "Jaringan, keamanan, dan managed services yang skalabel untuk korporasi besar dan holding group Indonesia.",
    },
    {
      slug: "government",
      icon: Landmark,
      en: "Government",
      id: "Pemerintah",
      descEn:
        "Sovereign, compliant infrastructure for central and regional government institutions in Indonesia.",
      descId:
        "Infrastruktur berdaulat dan patuh untuk institusi pemerintah pusat dan daerah di Indonesia.",
    },
    {
      slug: "finance",
      icon: Banknote,
      en: "Finance & Banking",
      id: "Keuangan & Perbankan",
      descEn:
        "OJK-compliant security and managed operations for banks, insurers, and financial services in Indonesia.",
      descId:
        "Keamanan dan managed operations patuh OJK untuk bank, asuransi, dan jasa keuangan di Indonesia.",
    },
    {
      slug: "hospitality",
      icon: Hotel,
      en: "Hospitality",
      id: "Perhotelan",
      descEn:
        "Premium guest WiFi, property management connectivity, and managed network for hotels and resorts.",
      descId:
        "WiFi tamu premium, konektivitas manajemen properti, dan jaringan terkelola untuk hotel dan resort.",
    },
    {
      slug: "manufacturing",
      icon: Factory,
      en: "Manufacturing",
      id: "Manufaktur",
      descEn:
        "Industrial OT/IT convergence, factory floor WiFi, and secure connectivity for manufacturing plants.",
      descId:
        "Konvergensi OT/IT industri, WiFi lantai pabrik, dan konektivitas aman untuk pabrik manufaktur.",
    },
  ];

  return (
    <main>
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-primary">
            {locale === "id" ? "Fokus Industri" : "Industry Focus"}
          </p>
          <h1 className="mb-4 max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
            {locale === "id" ? (
              <>
                Solusi Spesifik <span className="text-primary">per Industri</span>
              </>
            ) : (
              <>
                Industry-Specific <span className="text-primary">Solutions</span>
              </>
            )}
          </h1>
          <p className="max-w-xl text-lg text-foreground/65">
            {locale === "id"
              ? "Kami memahami bahwa setiap industri memiliki tantangan dan regulasi yang unik — solusi kami dirancang khusus untuk konteks tersebut."
              : "We understand each industry has unique challenges and regulations — our solutions are specifically designed for those contexts."}
          </p>
        </div>
      </section>

      <section className="bg-surface-low py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/${locale}/industries/${ind.slug}`}
                className="group card-hover flex flex-col rounded-2xl bg-surface-lowest p-8 shadow-ambient"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-fixed">
                  <ind.icon size={22} className="text-primary" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-foreground">
                  {locale === "id" ? ind.id : ind.en}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-foreground/65">
                  {locale === "id" ? ind.descId : ind.descEn}
                </p>
                <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-primary transition-all duration-200 group-hover:gap-3">
                  {locale === "id" ? "Lihat Solusi" : "View Solutions"}{" "}
                  <ArrowRight size={13} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
