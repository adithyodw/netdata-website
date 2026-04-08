import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { samplePosts } from "@/lib/content";
import { AppLocale } from "@/i18n/routing";
import { sanityClient } from "@/lib/sanity";
import { postsQuery } from "@/lib/queries";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  return buildMetadata({
    locale,
    path: "/insights",
    title: locale === "id" ? "Wawasan Teknis" : "Technical Insights",
    description:
      "Technical insights on Akamai, Fortinet, Ruijie, SD-WAN, and managed services in Indonesia from PT Network Data Sistem engineers.",
  });
}

export default async function InsightsPage({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  const cmsPosts = sanityClient
    ? await sanityClient
        .fetch<{ title: string; slug: string }[]>(postsQuery)
        .catch(() => [])
    : [];
  const posts = cmsPosts.length ? cmsPosts : samplePosts;

  return (
    <main>
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-primary">
            {locale === "id" ? "Perspektif Teknis" : "Technical Perspective"}
          </p>
          <h1 className="mb-4 max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
            {locale === "id" ? (
              <>
                Wawasan dari <span className="text-primary">Tim Engineer NDS</span>
              </>
            ) : (
              <>
                Insights from <span className="text-primary">NDS Engineers</span>
              </>
            )}
          </h1>
          <p className="max-w-xl text-lg text-foreground/65">
            {locale === "id"
              ? "Artikel teknis, panduan implementasi, dan analisis tren keamanan jaringan untuk enterprise Indonesia."
              : "Technical articles, implementation guides, and network security trend analysis for Indonesian enterprises."}
          </p>
        </div>
      </section>

      <section className="bg-surface-low py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((item) => (
              <Link
                key={item.slug}
                href={`/${locale}/insights/${item.slug}`}
                className="group card-hover flex flex-col rounded-2xl bg-surface-lowest p-7 shadow-ambient"
              >
                <div className="mb-4 h-1 w-8 rounded-full bg-primary" />
                <h2 className="mb-3 font-bold text-foreground group-hover:text-primary">
                  {item.title}
                </h2>
                <div className="mt-auto flex items-center gap-1.5 pt-4 text-xs font-semibold text-primary transition-all duration-200 group-hover:gap-3">
                  {locale === "id" ? "Baca Artikel" : "Read Article"}{" "}
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
