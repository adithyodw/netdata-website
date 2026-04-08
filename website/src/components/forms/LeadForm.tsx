"use client";

import { FormEvent, useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export function LeadForm({ locale }: { locale: "id" | "en" }) {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">(
    "idle",
  );

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      setStatus(response.ok ? "ok" : "error");
    } catch {
      setStatus("error");
    }
  }

  const labelClass =
    "block text-[0.7rem] font-bold uppercase tracking-widest text-outline mb-2";
  const inputClass =
    "input-ghost text-sm placeholder:text-foreground/30";

  const interests = [
    {
      value: "Akamai CDN & Edge Security",
      label: "Akamai CDN & Edge Security",
    },
    { value: "Fortinet Network Security", label: "Fortinet Network Security" },
    { value: "Ruijie Network Infrastructure", label: "Ruijie Networks" },
    { value: "SD-WAN", label: "SD-WAN" },
    {
      value: "Managed Services",
      label: locale === "id" ? "Managed Services" : "Managed Services",
    },
    {
      value: "Managed WiFi",
      label: locale === "id" ? "Managed WiFi" : "Managed WiFi",
    },
    {
      value: "Cloud & Data Center",
      label: locale === "id" ? "Cloud & Data Center" : "Cloud & Data Center",
    },
  ];

  if (status === "ok") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-surface-lowest p-12 text-center shadow-ambient">
        <CheckCircle size={40} className="text-primary" />
        <h3 className="text-xl font-bold">
          {locale === "id" ? "Pesan Terkirim!" : "Message Sent!"}
        </h3>
        <p className="text-sm text-foreground/65">
          {locale === "id"
            ? "Terima kasih! Tim kami akan menghubungi Anda dalam 1x24 jam."
            : "Thank you! Our team will contact you within 24 hours."}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl bg-surface-lowest p-8 shadow-ambient md:p-10"
    >
      <h2 className="mb-8 text-xl font-bold tracking-tight">
        {locale === "id" ? "Kirim Pertanyaan" : "Submit an Inquiry"}
      </h2>

      <div className="grid gap-7 md:grid-cols-2">
        <div>
          <label className={labelClass}>
            {locale === "id" ? "Nama Lengkap" : "Full Name"}
          </label>
          <input
            name="name"
            required
            placeholder={locale === "id" ? "Nama Anda" : "Your Name"}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>
            {locale === "id" ? "Perusahaan" : "Company"}
          </label>
          <input
            name="company"
            required
            placeholder={locale === "id" ? "PT. Perusahaan Anda" : "Your Company"}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Email</label>
          <input
            name="email"
            required
            type="email"
            placeholder={
              locale === "id" ? "email@perusahaan.com" : "email@company.com"
            }
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>
            {locale === "id" ? "Telepon" : "Phone"}
          </label>
          <input
            name="phone"
            required
            placeholder={locale === "id" ? "+62 8xx xxxx xxxx" : "+62 8xx xxxx xxxx"}
            className={inputClass}
          />
        </div>
        <div className="md:col-span-2">
          <label className={labelClass}>
            {locale === "id" ? "Area Minat" : "Area of Interest"}
          </label>
          <select name="interest" required className={inputClass}>
            <option value="">
              {locale === "id" ? "Pilih layanan" : "Select a service"}
            </option>
            {interests.map((i) => (
              <option key={i.value} value={i.value}>
                {i.label}
              </option>
            ))}
          </select>
        </div>
        <div className="md:col-span-2">
          <label className={labelClass}>
            {locale === "id" ? "Kebutuhan Anda" : "Your Requirements"}
          </label>
          <textarea
            name="message"
            required
            placeholder={
              locale === "id"
                ? "Ceritakan kebutuhan infrastruktur atau keamanan Anda..."
                : "Tell us about your infrastructure or security requirements..."
            }
            className={`${inputClass} min-h-[100px] resize-none`}
            rows={4}
          />
        </div>
        {/* Honeypot */}
        <input name="website" className="hidden" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-8">
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary flex w-full items-center justify-center gap-2 rounded-md py-4 font-semibold disabled:opacity-60"
        >
          {status === "loading" ? (
            <span className="text-sm">
              {locale === "id" ? "Mengirim..." : "Sending..."}
            </span>
          ) : (
            <>
              <Send size={15} />
              {locale === "id" ? "Kirim Pertanyaan" : "Submit Inquiry"}
            </>
          )}
        </button>
        {status === "error" && (
          <div className="mt-4 flex items-center gap-2 text-sm text-red-600">
            <AlertCircle size={15} />
            {locale === "id"
              ? "Terjadi kesalahan. Coba via WhatsApp."
              : "Something went wrong. Please try via WhatsApp."}
          </div>
        )}
      </div>
    </form>
  );
}
