"use client";

import { MessageCircle } from "lucide-react";
import { company } from "@/lib/site";
import { AppLocale } from "@/i18n/routing";

export function WhatsAppFloat({ locale }: { locale: AppLocale }) {
  const message =
    locale === "id"
      ? "Halo, saya ingin berkonsultasi mengenai layanan PT Network Data Sistem."
      : "Hello, I would like to consult about PT Network Data Sistem services.";

  return (
    <a
      href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="whatsapp-float"
    >
      <MessageCircle size={24} />
    </a>
  );
}
