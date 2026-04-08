import { ArrowRight, MapPin, Briefcase } from "lucide-react";
import Link from "next/link";
import { sampleJobs } from "@/lib/content";
import { jobsQuery } from "@/lib/queries";
import { sanityClient } from "@/lib/sanity";
import { buildMetadata } from "@/lib/seo";
import { AppLocale } from "@/i18n/routing";
import { company } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  return buildMetadata({
    locale,
    path: "/careers",
    title: locale === "id" ? "Karir di NDS" : "Careers at NDS",
    description:
      "Career opportunities at PT Network Data Sistem across network engineering, cybersecurity, and managed operations.",
  });
}

export default async function CareersPage({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  const cmsJobs = sanityClient
    ? await sanityClient
        .fetch<{ slug: string; title: string }[]>(jobsQuery)
        .catch(() => [])
    : [];
  const jobs = cmsJobs.length ? cmsJobs : sampleJobs;

  return (
    <main>
      {/* Hero */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-primary">
            {locale === "id" ? "Bergabung Bersama Kami" : "Join Our Team"}
          </p>
          <h1 className="mb-4 max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
            {locale === "id" ? (
              <>
                Bangun Karir di <span className="text-primary">Infrastruktur Digital Indonesia</span>
              </>
            ) : (
              <>
                Build a Career in <span className="text-primary">Indonesian Digital Infrastructure</span>
              </>
            )}
          </h1>
          <p className="max-w-xl text-lg text-foreground/65">
            {locale === "id"
              ? "Bergabunglah dengan tim engineer bersertifikasi yang membangun dan mengelola infrastruktur jaringan dan keamanan terpenting di Indonesia."
              : "Join a team of certified engineers building and managing some of Indonesia's most critical network and security infrastructure."}
          </p>
        </div>
      </section>

      {/* Why work at NDS */}
      <section className="bg-surface-low py-14">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-8 text-2xl font-bold">
            {locale === "id" ? "Mengapa Bergabung dengan NDS?" : "Why Join NDS?"}
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                en: "Vendor certifications: Akamai, Fortinet, Ruijie training paths",
                id: "Sertifikasi vendor: jalur pelatihan Akamai, Fortinet, Ruijie",
              },
              {
                en: "Work on enterprise and government-scale infrastructure",
                id: "Bekerja pada infrastruktur skala enterprise dan pemerintah",
              },
              {
                en: "Collaborative team culture with senior engineers",
                id: "Budaya tim kolaboratif bersama engineer senior",
              },
              {
                en: "Jakarta Selatan office + remote-friendly culture",
                id: "Kantor Jakarta Selatan + budaya ramah remote",
              },
            ].map((item) => (
              <div key={item.en} className="rounded-xl bg-surface-lowest p-5 shadow-ambient">
                <p className="text-sm font-semibold text-foreground">
                  {locale === "id" ? item.id : item.en}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job openings */}
      <section className="bg-surface py-14">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-8 text-2xl font-bold">
            {locale === "id" ? "Posisi Terbuka" : "Open Positions"}
          </h2>
          <div className="space-y-3">
            {jobs.map((job) => (
              <article
                key={job.slug}
                className="group flex items-center justify-between rounded-xl bg-surface-lowest p-6 shadow-ambient transition-colors hover:bg-primary-fixed"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-fixed group-hover:bg-white">
                    <Briefcase size={16} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{job.title}</h3>
                    <div className="mt-1 flex items-center gap-1.5 text-xs text-foreground/50">
                      <MapPin size={11} />
                      Jakarta Selatan, Indonesia
                    </div>
                  </div>
                </div>
                <div className="hidden items-center gap-1.5 text-xs font-semibold text-primary md:flex">
                  {locale === "id" ? "Lamar Sekarang" : "Apply Now"}{" "}
                  <ArrowRight size={13} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-surface-low py-14">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-2xl bg-foreground p-10 text-surface-lowest md:p-14">
            <h2 className="mb-3 text-2xl font-bold">
              {locale === "id"
                ? "Tidak menemukan posisi yang sesuai?"
                : "Don't see the right position?"}
            </h2>
            <p className="mb-6 text-surface-lowest/60">
              {locale === "id"
                ? "Kirim CV dan profil Anda — kami selalu mencari talenta teknis yang luar biasa."
                : "Send us your CV and profile — we are always looking for outstanding technical talent."}
            </p>
            <a
              href={`mailto:hr@networkdatasystem.id?subject=${encodeURIComponent(locale === "id" ? "Lamaran Spontan" : "Spontaneous Application")}`}
              className="btn-primary inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold"
            >
              {locale === "id" ? "Kirim CV" : "Send Your CV"} <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
