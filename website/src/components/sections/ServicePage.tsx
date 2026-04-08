import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { AppLocale } from "@/i18n/routing";

type Feature = { en: string; id: string };

type Props = {
  locale: AppLocale;
  title: string;
  eyebrow: string;
  intro: string;
  problem: string;
  solution: string;
  impact: string;
  features?: Feature[];
  useCases?: Feature[];
};

export function ServicePageContent({
  locale,
  title,
  eyebrow,
  intro,
  problem,
  solution,
  impact,
  features = [],
  useCases = [],
}: Props) {
  return (
    <main>
      {/* Hero */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-primary">
            {eyebrow}
          </p>
          <h1 className="mb-5 max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
          <p className="max-w-xl text-lg leading-relaxed text-foreground/65">{intro}</p>
        </div>
      </section>

      {/* Problem / Solution / Impact */}
      <section className="bg-surface-low py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                label: locale === "id" ? "Tantangan" : "Challenge",
                body: problem,
                bg: "bg-surface-lowest",
              },
              {
                label: locale === "id" ? "Pendekatan Kami" : "Our Approach",
                body: solution,
                bg: "bg-primary text-white",
              },
              {
                label: locale === "id" ? "Dampak Bisnis" : "Business Impact",
                body: impact,
                bg: "bg-surface-lowest",
              },
            ].map((card) => (
              <div key={card.label} className={`rounded-2xl p-8 ${card.bg}`}>
                <p
                  className={`mb-3 text-[0.65rem] font-bold uppercase tracking-widest ${card.bg.includes("text-white") ? "text-white/50" : "text-primary/60"}`}
                >
                  {card.label}
                </p>
                <p
                  className={`text-sm leading-relaxed ${card.bg.includes("text-white") ? "text-white/85" : "text-foreground/75"}`}
                >
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      {features.length > 0 && (
        <section className="bg-surface py-16">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-10 text-2xl font-bold tracking-tight">
              {locale === "id" ? "Kapabilitas Utama" : "Key Capabilities"}
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {features.map((f) => (
                <div key={f.en} className="flex items-start gap-3 rounded-xl bg-surface-lowest p-5">
                  <CheckCircle size={16} className="mt-0.5 shrink-0 text-primary" />
                  <span className="text-sm text-foreground/80">
                    {locale === "id" ? f.id : f.en}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Use Cases */}
      {useCases.length > 0 && (
        <section className="bg-surface-low py-16">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-10 text-2xl font-bold tracking-tight">
              {locale === "id" ? "Kasus Penggunaan" : "Use Cases"}
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {useCases.map((u, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-outline-variant bg-surface-lowest p-5"
                >
                  <p className="text-sm font-semibold text-foreground">
                    {locale === "id" ? u.id : u.en}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-foreground py-20 text-surface-lowest">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            {locale === "id" ? "Siap Memulai?" : "Ready to Get Started?"}
          </h2>
          <p className="mb-8 text-surface-lowest/60">
            {locale === "id"
              ? "Diskusikan kebutuhan implementasi Anda bersama tim engineer senior kami."
              : "Discuss your implementation requirements with our senior engineering team."}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`/${locale}/contact`}
              className="btn-primary inline-flex items-center gap-2 rounded-md px-7 py-3.5 font-semibold"
            >
              {locale === "id" ? "Jadwalkan Konsultasi" : "Schedule Consultation"}{" "}
              <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/628112017588"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-white/10 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
