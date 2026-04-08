import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { sampleCaseStudies } from "@/lib/content";
import { AppLocale } from "@/i18n/routing";
import { caseStudiesQuery } from "@/lib/queries";
import { sanityClient } from "@/lib/sanity";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  return buildMetadata({
    locale,
    path: "/case-studies",
    title: locale === "id" ? "Studi Kasus" : "Case Studies",
    description:
      "Enterprise transformation stories with measurable network and security outcomes from PT Network Data Sistem.",
  });
}

export default async function CaseStudiesPage({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  const cmsData = sanityClient
    ? await sanityClient
        .fetch<{ slug: string; title: string; summary?: string }[]>(caseStudiesQuery)
        .catch(() => [])
    : [];
  const items = cmsData.length
    ? cmsData.map((v) => ({
        slug: v.slug,
        title: v.title,
        result: v.summary || "Enterprise transformation outcome.",
      }))
    : sampleCaseStudies;

  return (
    <main>
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-primary">
            {locale === "id" ? "Bukti Nyata" : "Proven Results"}
          </p>
          <h1 className="mb-4 max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
            {locale === "id" ? (
              <>
                Studi Kasus <span className="text-primary">Transformasi Enterprise</span>
              </>
            ) : (
              <>
                Enterprise <span className="text-primary">Transformation Stories</span>
              </>
            )}
          </h1>
          <p className="max-w-xl text-lg text-foreground/65">
            {locale === "id"
              ? "Kisah nyata implementasi jaringan, keamanan, dan managed services yang memberikan hasil terukur bagi institusi Indonesia."
              : "Real-world network, security, and managed services implementations delivering measurable outcomes for Indonesian institutions."}
          </p>
        </div>
      </section>

      <section className="bg-surface-low py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <Link
                key={item.slug}
                href={`/${locale}/case-studies/${item.slug}`}
                className="group card-hover flex flex-col rounded-2xl bg-surface-lowest p-7 shadow-ambient"
              >
                <h2 className="mb-3 font-bold text-foreground group-hover:text-primary">
                  {item.title}
                </h2>
                <p className="flex-1 text-sm leading-relaxed text-foreground/65">{item.result}</p>
                <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-primary transition-all duration-200 group-hover:gap-3">
                  {locale === "id" ? "Baca Selengkapnya" : "Read More"}{" "}
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
