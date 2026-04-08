"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Shield,
  Network,
  Globe,
  Wifi,
  Cloud,
  Server,
  Building2,
  Landmark,
  Banknote,
  Hotel,
  Factory,
  ArrowRight,
  Phone,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { AppLocale } from "@/i18n/routing";
import { company } from "@/lib/site";

type Props = { locale: AppLocale };

function ServicesDropdown({
  locale,
  onClose,
}: {
  locale: AppLocale;
  onClose: () => void;
}) {
  const items = [
    {
      icon: Globe,
      href: "akamai",
      label: "Akamai CDN & Edge Security",
      desc:
        locale === "id"
          ? "Akselerasi & proteksi edge global"
          : "Global edge acceleration & protection",
    },
    {
      icon: Shield,
      href: "fortinet",
      label: "Fortinet Security",
      desc:
        locale === "id"
          ? "Keamanan jaringan end-to-end"
          : "End-to-end network security",
    },
    {
      icon: Network,
      href: "ruijie",
      label: "Ruijie Networks",
      desc:
        locale === "id"
          ? "Infrastruktur jaringan kampus"
          : "Campus network fabric",
    },
    {
      icon: Server,
      href: "sd-wan",
      label: "SD-WAN",
      desc:
        locale === "id" ? "Konektivitas WAN cerdas" : "Intelligent managed WAN",
    },
    {
      icon: Network,
      href: "network-infrastructure",
      label:
        locale === "id" ? "Infrastruktur Jaringan" : "Network Infrastructure",
      desc:
        locale === "id" ? "Backbone jaringan" : "Backbone design & deployment",
    },
    {
      icon: Shield,
      href: "cybersecurity",
      label: locale === "id" ? "Keamanan Siber" : "Cybersecurity",
      desc:
        locale === "id" ? "Proteksi aset digital" : "Digital asset protection",
    },
    {
      icon: Server,
      href: "managed-services",
      label: "Managed Services",
      desc: "24/7 NOC/SOC",
    },
    {
      icon: Wifi,
      href: "managed-wifi",
      label: "Managed WiFi",
      desc:
        locale === "id" ? "WiFi enterprise terkelola" : "Enterprise managed WiFi",
    },
    {
      icon: Cloud,
      href: "cloud-data-center",
      label: locale === "id" ? "Cloud & Data Center" : "Cloud & Data Center",
      desc:
        locale === "id"
          ? "Cloud hybrid & data center"
          : "Hybrid cloud architecture",
    },
  ];

  return (
    <div className="mega-menu-enter absolute left-1/2 top-full mt-2 w-[700px] -translate-x-1/2 rounded-xl bg-surface-lowest shadow-ambient-lg">
      <div className="grid grid-cols-3 gap-1 p-4">
        {items.map((item) => (
          <Link
            key={item.href}
            href={`/${locale}/services/${item.href}`}
            className="group flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-surface-low"
            onClick={onClose}
          >
            <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary-fixed text-primary">
              <item.icon size={14} />
            </div>
            <div>
              <p className="text-xs font-semibold text-foreground group-hover:text-primary">
                {item.label}
              </p>
              <p className="mt-0.5 text-[0.68rem] text-foreground/55">
                {item.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="border-t border-surface-high px-4 py-3">
        <Link
          href={`/${locale}/services`}
          className="flex items-center gap-1.5 text-xs font-semibold text-primary"
          onClick={onClose}
        >
          {locale === "id" ? "Semua Layanan" : "All Services"}{" "}
          <ArrowRight size={12} />
        </Link>
      </div>
    </div>
  );
}

function PartnersDropdown({
  locale,
  onClose,
}: {
  locale: AppLocale;
  onClose: () => void;
}) {
  const items = [
    { href: "akamai-indonesia", label: "Akamai Indonesia Partner" },
    { href: "fortinet-indonesia", label: "Fortinet Indonesia Partner" },
    { href: "ruijie-indonesia", label: "Ruijie Indonesia Partner" },
  ];
  return (
    <div className="mega-menu-enter absolute left-1/2 top-full mt-2 w-72 -translate-x-1/2 rounded-xl bg-surface-lowest shadow-ambient-lg">
      <div className="p-3">
        {items.map((item) => (
          <Link
            key={item.href}
            href={`/${locale}/partners/${item.href}`}
            className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-foreground hover:bg-surface-low hover:text-primary transition-colors"
            onClick={onClose}
          >
            {item.label} <ArrowRight size={12} className="text-outline" />
          </Link>
        ))}
      </div>
    </div>
  );
}

function IndustriesDropdown({
  locale,
  onClose,
}: {
  locale: AppLocale;
  onClose: () => void;
}) {
  const items = [
    {
      icon: Building2,
      href: "enterprise",
      label: locale === "id" ? "Enterprise" : "Enterprise",
    },
    {
      icon: Landmark,
      href: "government",
      label: locale === "id" ? "Pemerintah" : "Government",
    },
    {
      icon: Banknote,
      href: "finance",
      label: locale === "id" ? "Keuangan" : "Finance",
    },
    {
      icon: Hotel,
      href: "hospitality",
      label: locale === "id" ? "Perhotelan" : "Hospitality",
    },
    {
      icon: Factory,
      href: "manufacturing",
      label: locale === "id" ? "Manufaktur" : "Manufacturing",
    },
  ];
  return (
    <div className="mega-menu-enter absolute left-1/2 top-full mt-2 w-64 -translate-x-1/2 rounded-xl bg-surface-lowest shadow-ambient-lg">
      <div className="p-3">
        {items.map((item) => (
          <Link
            key={item.href}
            href={`/${locale}/industries/${item.href}`}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground hover:bg-surface-low hover:text-primary transition-colors"
            onClick={onClose}
          >
            <item.icon size={14} className="text-outline" />
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Header({ locale }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const alternateLocale = locale === "id" ? "en" : "id";

  const switchPath = pathname
    ? pathname === `/${locale}`
      ? `/${alternateLocale}`
      : pathname.replace(`/${locale}/`, `/${alternateLocale}/`)
    : `/${alternateLocale}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onOut = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", onOut);
    return () => document.removeEventListener("mousedown", onOut);
  }, []);

  const navLinks = [
    {
      key: "home",
      href: `/${locale}`,
      label: locale === "id" ? "Beranda" : "Home",
    },
    {
      key: "about",
      href: `/${locale}/about`,
      label: locale === "id" ? "Tentang Kami" : "About",
    },
    {
      key: "services",
      href: `/${locale}/services`,
      label: locale === "id" ? "Layanan" : "Services",
      hasMega: true,
    },
    {
      key: "partners",
      href: `/${locale}/partners`,
      label: locale === "id" ? "Mitra" : "Partners",
      hasMega: true,
    },
    {
      key: "industries",
      href: `/${locale}/industries`,
      label: locale === "id" ? "Industri" : "Industries",
      hasMega: true,
    },
    {
      key: "case-studies",
      href: `/${locale}/case-studies`,
      label: locale === "id" ? "Studi Kasus" : "Case Studies",
    },
    {
      key: "insights",
      href: `/${locale}/insights`,
      label: locale === "id" ? "Wawasan" : "Insights",
    },
    {
      key: "careers",
      href: `/${locale}/careers`,
      label: locale === "id" ? "Karir" : "Careers",
    },
  ];

  function closeAll() {
    setActiveMenu(null);
    setMobileOpen(false);
  }

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "glass-scrolled border-black/5 shadow-ambient"
          : "glass border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="flex shrink-0 items-center gap-2.5"
            onClick={closeAll}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
              <Network size={15} className="text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="block text-[0.8rem] font-bold leading-none tracking-tight text-foreground">
                PT Network Data Sistem
              </span>
              <span className="mt-0.5 block text-[0.6rem] uppercase leading-none tracking-[0.1em] text-foreground/45">
                System Integrator
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => {
              const isActive =
                link.href === `/${locale}`
                  ? pathname === `/${locale}`
                  : pathname?.startsWith(link.href);
              return (
                <div key={link.key} className="relative">
                  {link.hasMega ? (
                    <button
                      onMouseEnter={() => setActiveMenu(link.key)}
                      onClick={() =>
                        setActiveMenu(
                          activeMenu === link.key ? null : link.key,
                        )
                      }
                      className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm transition-colors duration-200 ${
                        isActive
                          ? "bg-primary-fixed/20 font-semibold text-primary"
                          : "text-foreground/65 hover:bg-surface-low hover:text-primary"
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        size={13}
                        className={`transition-transform duration-200 ${activeMenu === link.key ? "rotate-180" : ""}`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={closeAll}
                      className={`block rounded-md px-3 py-2 text-sm transition-colors duration-200 ${
                        isActive
                          ? "bg-primary-fixed/20 font-semibold text-primary"
                          : "text-foreground/65 hover:bg-surface-low hover:text-primary"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                  {link.key === "services" && activeMenu === "services" && (
                    <div onMouseLeave={() => setActiveMenu(null)}>
                      <ServicesDropdown locale={locale} onClose={closeAll} />
                    </div>
                  )}
                  {link.key === "partners" && activeMenu === "partners" && (
                    <div onMouseLeave={() => setActiveMenu(null)}>
                      <PartnersDropdown locale={locale} onClose={closeAll} />
                    </div>
                  )}
                  {link.key === "industries" && activeMenu === "industries" && (
                    <div onMouseLeave={() => setActiveMenu(null)}>
                      <IndustriesDropdown locale={locale} onClose={closeAll} />
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <a
              href={`tel:${company.phoneTel}`}
              className="hidden items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs text-foreground/60 transition-colors hover:text-primary xl:flex"
            >
              <Phone size={12} />
              {company.phoneDisplay}
            </a>
            <Link
              href={switchPath}
              className="rounded-md px-2 py-1.5 text-[0.7rem] font-bold uppercase tracking-widest transition-colors"
            >
              <span
                className={locale === "id" ? "text-primary" : "text-foreground/35"}
              >
                ID
              </span>
              <span className="mx-1 text-foreground/20">/</span>
              <span
                className={locale === "en" ? "text-primary" : "text-foreground/35"}
              >
                EN
              </span>
            </Link>
            <Link
              href={`/${locale}/contact`}
              onClick={closeAll}
              className="btn-primary hidden rounded-md px-4 py-2 text-xs font-semibold lg:block"
            >
              {locale === "id" ? "Hubungi Kami" : "Contact Us"}
            </Link>
            <button
              className="rounded-md p-2 text-foreground/60 transition-colors hover:bg-surface-low hover:text-primary lg:hidden"
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav className="border-t border-surface-high py-4 lg:hidden">
            <div className="grid gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  onClick={closeAll}
                  className="rounded-lg px-3 py-2.5 text-sm text-foreground/80 transition-colors hover:bg-surface-low hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={`/${locale}/contact`}
                onClick={closeAll}
                className="mt-2 rounded-lg px-3 py-2.5 text-sm font-semibold text-foreground/80 transition-colors hover:bg-surface-low hover:text-primary"
              >
                {locale === "id" ? "Kontak" : "Contact"}
              </Link>
              <a
                href={`tel:${company.phoneTel}`}
                className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-foreground/70 transition-colors hover:bg-surface-low hover:text-primary"
              >
                <Phone size={14} />
                {company.phoneDisplay}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
