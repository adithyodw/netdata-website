import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { organizationJsonLd } from "@/lib/seo";
import { Gtm } from "@/components/analytics/Gtm";
import { LangSetter } from "@/components/layout/LangSetter";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();
  const org = organizationJsonLd();

  return (
    <NextIntlClientProvider messages={messages}>
      <Header locale={locale as "id" | "en"} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <Gtm />
      <LangSetter locale={locale as "id" | "en"} />
      {children}
      <Footer locale={locale as "id" | "en"} />
      <WhatsAppFloat locale={locale as "id" | "en"} />
    </NextIntlClientProvider>
  );
}
