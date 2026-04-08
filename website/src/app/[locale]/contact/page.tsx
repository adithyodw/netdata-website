import { MapPin, Phone, MessageCircle, Clock, ExternalLink, ArrowRight } from "lucide-react";
import { AppLocale } from "@/i18n/routing";
import { company } from "@/lib/site";
import { buildMetadata, localBusinessJsonLd } from "@/lib/seo";
import { LeadForm } from "@/components/forms/LeadForm";

export async function generateMetadata({ params }: { params: Promise<{ locale: AppLocale }> }) {
  const { locale } = await params;
  return buildMetadata({
    locale,
    path: "/contact",
    title: locale === "id" ? "Hubungi Kami" : "Contact Us",
    description:
      locale === "id"
        ? "Konsultasikan kebutuhan jaringan dan keamanan Anda bersama PT Network Data Sistem — mitra resmi Akamai, Fortinet, dan Ruijie di Jakarta."
        : "Consult your network and security needs with PT Network Data Sistem — official Akamai, Fortinet, and Ruijie partner in Jakarta.",
  });
}

export default async function ContactPage({ params }: { params: Promise<{ locale: AppLocale }> }) {
  const { locale } = await params;
  const schema = localBusinessJsonLd();
  const mapsEmbed =
    process.env.NEXT_PUBLIC_MAPS_EMBED_URL ||
    "https://maps.google.com/maps?q=Jl.+Kalibata+Tengah+No.7A+Jakarta+Selatan&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-primary">
            {locale === "id" ? "Hubungi Kami" : "Contact Us"}
          </p>
          <h1 className="mb-4 max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
            {locale === "id" ? (
              <>
                Mulai Percakapan <span className="text-primary">Dengan Tim Kami</span>
              </>
            ) : (
              <>
                Start a Conversation <span className="text-primary">With Our Team</span>
              </>
            )}
          </h1>
          <p className="max-w-xl text-lg text-foreground/65">
            {locale === "id"
              ? "Tim engineer senior kami siap membantu assessment arsitektur, mendesain solusi, dan menjawab pertanyaan teknis Anda."
              : "Our senior engineering team is ready to assist with architecture assessments, solution design, and technical questions."}
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-surface-low py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* Form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-surface-lowest p-8 shadow-ambient md:p-10">
                <h2 className="mb-1.5 text-xl font-bold">
                  {locale === "id" ? "Kirim Pesan" : "Send a Message"}
                </h2>
                <p className="mb-8 text-sm text-foreground/55">
                  {locale === "id"
                    ? "Kami akan merespons dalam 1 hari kerja."
                    : "We respond within 1 business day."}
                </p>
                <LeadForm locale={locale} />
              </div>
            </div>

            {/* Info panel */}
            <div className="space-y-5 lg:col-span-5">
              {/* Contact details */}
              <div className="rounded-2xl bg-surface-lowest p-7 shadow-ambient">
                <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-outline">
                  {locale === "id" ? "Informasi Kontak" : "Contact Information"}
                </h3>
                <div className="space-y-5">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-fixed">
                      <MapPin size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="mb-1 text-[0.7rem] font-bold uppercase tracking-widest text-outline">
                        {locale === "id" ? "Alamat" : "Address"}
                      </p>
                      <p className="text-sm leading-relaxed text-foreground/80">{company.address}</p>
                      <a
                        href={company.mapsShareUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-1.5 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                      >
                        {locale === "id" ? "Buka di Google Maps" : "Open in Google Maps"}{" "}
                        <ExternalLink size={10} />
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-fixed">
                      <Phone size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="mb-1 text-[0.7rem] font-bold uppercase tracking-widest text-outline">
                        {locale === "id" ? "Telepon" : "Phone"}
                      </p>
                      <a
                        href={`tel:${company.phoneTel}`}
                        className="text-sm font-semibold text-foreground hover:text-primary"
                      >
                        {company.phoneDisplay}
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-fixed">
                      <MessageCircle size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="mb-1 text-[0.7rem] font-bold uppercase tracking-widest text-outline">
                        WhatsApp
                      </p>
                      <a
                        href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(locale === "id" ? "Halo, saya ingin berkonsultasi mengenai layanan NDS." : "Hello, I would like to consult about NDS services.")}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-semibold text-foreground hover:text-primary"
                      >
                        +{company.whatsapp}
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-fixed">
                      <Clock size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="mb-1 text-[0.7rem] font-bold uppercase tracking-widest text-outline">
                        {locale === "id" ? "Jam Kerja" : "Business Hours"}
                      </p>
                      <p className="text-sm text-foreground/80">
                        {locale === "id"
                          ? "Senin – Jumat, 08.00 – 17.00 WIB"
                          : "Monday – Friday, 08:00 – 17:00 WIB"}
                      </p>
                      <p className="text-xs text-foreground/50">
                        {locale === "id" ? "NOC/SOC tersedia 24/7" : "NOC/SOC available 24/7"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(locale === "id" ? "Halo, saya ingin berkonsultasi mengenai layanan NDS." : "Hello, I would like to consult about NDS services.")}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl bg-[#25D366] p-6 text-white transition-opacity hover:opacity-90"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20">
                  <MessageCircle size={24} />
                </div>
                <div className="flex-1">
                  <p className="font-bold">
                    {locale === "id" ? "Chat WhatsApp Sekarang" : "Chat on WhatsApp Now"}
                  </p>
                  <p className="text-sm text-white/75">
                    {locale === "id"
                      ? "Respons cepat dari tim kami"
                      : "Fast response from our team"}
                  </p>
                </div>
                <ArrowRight size={18} className="shrink-0 opacity-75" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="bg-surface">
        <iframe
          title="PT Network Data Sistem — Kalibata Jakarta Selatan"
          src={mapsEmbed}
          className="h-[420px] w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </main>
  );
}
