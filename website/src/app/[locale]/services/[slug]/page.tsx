import { notFound } from "next/navigation";
import { AppLocale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo";
import { servicePages } from "@/lib/site";
import { ServicePageContent } from "@/components/sections/ServicePage";

export async function generateStaticParams() {
  return servicePages.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: AppLocale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const data = getServiceData(slug, locale);
  return buildMetadata({
    locale,
    path: `/services/${slug}`,
    title: data.title,
    description: data.intro,
  });
}

type ServiceData = {
  title: string;
  eyebrow: string;
  intro: string;
  problem: string;
  solution: string;
  impact: string;
  features: { en: string; id: string }[];
  useCases: { en: string; id: string }[];
};

function getServiceData(slug: string, locale: AppLocale): ServiceData {
  const services: Record<string, ServiceData> = {
    akamai: {
      title: "Akamai CDN & Edge Security",
      eyebrow: "Akamai Indonesia Partner",
      intro:
        locale === "id"
          ? "Akselerasi performa digital dan proteksi edge global dari Akamai untuk institusi di Indonesia — delivered oleh mitra resmi NDS."
          : "Global digital performance acceleration and edge protection from Akamai for Indonesian institutions — delivered by official NDS partner.",
      problem:
        locale === "id"
          ? "Latensi tinggi, serangan DDoS yang semakin canggih, dan Bot yang menguras sumber daya server menjadi ancaman nyata bagi aset digital institusi Indonesia."
          : "High latency, increasingly sophisticated DDoS attacks, and bots draining server resources are real threats to Indonesian institutional digital assets.",
      solution:
        locale === "id"
          ? "Implementasi Akamai Intelligent Edge Platform dengan konfigurasi CDN, WAF berbasis AI, Bot Manager, dan DDoS mitigation — disesuaikan dengan traffic pattern lokal Indonesia."
          : "Implementation of the Akamai Intelligent Edge Platform with CDN configuration, AI-driven WAF, Bot Manager, and DDoS mitigation — tuned for Indonesian local traffic patterns.",
      impact:
        locale === "id"
          ? "Waktu muat halaman lebih cepat hingga 50%, penurunan beban server signifikan, dan proteksi real-time terhadap ancaman siber global."
          : "Up to 50% faster page load times, significant server load reduction, and real-time protection against global cyber threats.",
      features: [
        { en: "Global CDN with 4,200+ PoPs worldwide", id: "CDN global dengan 4.200+ PoP di seluruh dunia" },
        { en: "AI-powered Web Application Firewall (WAF)", id: "Web Application Firewall (WAF) berbasis AI" },
        { en: "DDoS mitigation up to 100+ Tbps capacity", id: "Mitigasi DDoS hingga kapasitas 100+ Tbps" },
        { en: "Bot Manager for automated threat detection", id: "Bot Manager untuk deteksi ancaman otomatis" },
        { en: "API security and rate limiting", id: "Keamanan API dan rate limiting" },
        { en: "Real-time traffic analytics and reporting", id: "Analitik dan pelaporan traffic real-time" },
      ],
      useCases: [
        { en: "E-commerce performance optimization", id: "Optimasi performa e-commerce" },
        { en: "Government portal DDoS protection", id: "Proteksi DDoS portal pemerintah" },
        { en: "Financial services API security", id: "Keamanan API layanan keuangan" },
        { en: "Media streaming acceleration", id: "Akselerasi streaming media" },
        { en: "Mobile app backend protection", id: "Proteksi backend aplikasi mobile" },
        { en: "Multi-cloud origin load balancing", id: "Load balancing origin multi-cloud" },
      ],
    },
    fortinet: {
      title: "Fortinet Network Security",
      eyebrow: "Fortinet Indonesia Partner",
      intro:
        locale === "id"
          ? "Keamanan jaringan end-to-end dari Fortinet Security Fabric untuk perusahaan dan institusi pemerintah Indonesia — diimplementasikan oleh mitra bersertifikasi NDS."
          : "End-to-end network security from Fortinet Security Fabric for Indonesian enterprises and government institutions — implemented by NDS certified partner.",
      problem:
        locale === "id"
          ? "Ancaman siber yang semakin kompleks, regulasi keamanan yang ketat, dan fragmentasi solusi keamanan yang sulit dikelola menjadi tantangan utama institusi Indonesia."
          : "Increasingly complex cyber threats, strict security regulations, and fragmented security solutions that are difficult to manage are key challenges for Indonesian institutions.",
      solution:
        locale === "id"
          ? "Deployment Fortinet Security Fabric terintegrasi — FortiGate NGFW, FortiAnalyzer, FortiManager, dan FortiSIEM — dalam satu ekosistem keamanan yang kohesif."
          : "Deployment of integrated Fortinet Security Fabric — FortiGate NGFW, FortiAnalyzer, FortiManager, and FortiSIEM — in one cohesive security ecosystem.",
      impact:
        locale === "id"
          ? "Visibilitas ancaman meningkat drastis, waktu respons insiden lebih cepat, dan kepatuhan regulasi terpenuhi dengan audit trail yang komprehensif."
          : "Dramatically increased threat visibility, faster incident response time, and regulatory compliance met with comprehensive audit trails.",
      features: [
        { en: "FortiGate Next-Generation Firewall (NGFW)", id: "FortiGate Next-Generation Firewall (NGFW)" },
        { en: "Intrusion Prevention System (IPS)", id: "Sistem Pencegahan Intrusi (IPS)" },
        { en: "SSL/TLS deep packet inspection", id: "Inspeksi paket mendalam SSL/TLS" },
        { en: "Zero Trust Network Access (ZTNA)", id: "Zero Trust Network Access (ZTNA)" },
        { en: "FortiSIEM centralized security management", id: "Manajemen keamanan terpusat FortiSIEM" },
        { en: "Automated threat response playbooks", id: "Playbook respons ancaman otomatis" },
      ],
      useCases: [
        { en: "Enterprise perimeter security", id: "Keamanan perimeter enterprise" },
        { en: "Government network segmentation", id: "Segmentasi jaringan pemerintah" },
        { en: "Banking security compliance", id: "Kepatuhan keamanan perbankan" },
        { en: "Multi-branch secure connectivity", id: "Konektivitas aman multi-cabang" },
        { en: "Remote workforce ZTNA", id: "ZTNA tenaga kerja jarak jauh" },
        { en: "Industrial OT/IT security convergence", id: "Konvergensi keamanan OT/IT industri" },
      ],
    },
    ruijie: {
      title: "Ruijie Networks",
      eyebrow: "Ruijie Indonesia Partner",
      intro:
        locale === "id"
          ? "Infrastruktur jaringan kampus dan enterprise berkecepatan tinggi dari Ruijie Networks untuk institusi pendidikan, pemerintah, dan korporasi di Indonesia."
          : "High-speed campus and enterprise network infrastructure from Ruijie Networks for educational, government, and corporate institutions in Indonesia.",
      problem:
        locale === "id"
          ? "Jaringan kampus lama yang tidak mampu menopang kebutuhan bandwidth modern, WiFi yang tidak stabil, dan manajemen jaringan yang terfragmentasi."
          : "Legacy campus networks unable to support modern bandwidth demands, unstable WiFi, and fragmented network management.",
      solution:
        locale === "id"
          ? "Perancangan ulang arsitektur jaringan kampus dengan switching Ruijie 10GbE, access point WiFi 6/6E, dan manajemen terpusat via Ruijie Cloud."
          : "Campus network architecture redesign with Ruijie 10GbE switching, WiFi 6/6E access points, and centralized management via Ruijie Cloud.",
      impact:
        locale === "id"
          ? "Kapasitas jaringan meningkat hingga 10x, coverage WiFi merata di seluruh area, dan operasional jaringan disederhanakan dengan manajemen berbasis cloud."
          : "Network capacity increased up to 10x, uniform WiFi coverage across all areas, and network operations simplified with cloud-based management.",
      features: [
        { en: "10GbE core and distribution switching", id: "Switching core dan distribusi 10GbE" },
        { en: "WiFi 6/6E access points for dense environments", id: "Access point WiFi 6/6E untuk lingkungan padat" },
        { en: "Ruijie Cloud centralized management", id: "Manajemen terpusat Ruijie Cloud" },
        { en: "PoE+ switching for IoT and cameras", id: "Switching PoE+ untuk IoT dan kamera" },
        { en: "Network segmentation and VLAN design", id: "Segmentasi jaringan dan desain VLAN" },
        { en: "Network performance monitoring", id: "Monitoring performa jaringan" },
      ],
      useCases: [
        { en: "University campus network modernization", id: "Modernisasi jaringan kampus universitas" },
        { en: "Hospital clinical network infrastructure", id: "Infrastruktur jaringan klinik rumah sakit" },
        { en: "Government office building connectivity", id: "Konektivitas gedung kantor pemerintah" },
        { en: "Hotel guest and management network", id: "Jaringan tamu dan manajemen hotel" },
        { en: "Factory floor industrial WiFi", id: "WiFi industrial lantai pabrik" },
        { en: "Smart building IoT network backbone", id: "Backbone jaringan IoT gedung pintar" },
      ],
    },
    "sd-wan": {
      title: "SD-WAN",
      eyebrow: locale === "id" ? "Konektivitas WAN Cerdas" : "Intelligent WAN Connectivity",
      intro:
        locale === "id"
          ? "Transformasi konektivitas WAN multi-cabang dengan SD-WAN yang cerdas, hemat biaya, dan mudah dikelola untuk institusi Indonesia."
          : "Transform multi-branch WAN connectivity with intelligent, cost-effective, and manageable SD-WAN for Indonesian institutions.",
      problem:
        locale === "id"
          ? "Biaya MPLS yang tinggi, visibilitas WAN yang terbatas, dan kesulitan mengelola kebijakan jaringan di banyak cabang yang tersebar."
          : "High MPLS costs, limited WAN visibility, and difficulty managing network policies across many distributed branches.",
      solution:
        locale === "id"
          ? "Implementasi SD-WAN overlay dengan traffic steering cerdas, kebijakan terpusat, dan fallback otomatis ke koneksi broadband yang lebih hemat biaya."
          : "SD-WAN overlay implementation with intelligent traffic steering, centralized policy management, and automatic fallback to more cost-effective broadband connections.",
      impact:
        locale === "id"
          ? "Penghematan biaya WAN hingga 40%, peningkatan kualitas aplikasi kritis, dan visibilitas jaringan penuh dari satu konsol manajemen."
          : "Up to 40% WAN cost savings, improved critical application quality, and full network visibility from a single management console.",
      features: [
        { en: "Application-aware traffic steering", id: "Traffic steering berbasis aplikasi" },
        { en: "Active/active broadband bonding", id: "Bonding broadband active/active" },
        { en: "Zero-touch provisioning for branches", id: "Zero-touch provisioning untuk cabang" },
        { en: "Centralized policy and orchestration", id: "Kebijakan terpusat dan orkestrasi" },
        { en: "Real-time WAN performance monitoring", id: "Monitoring performa WAN real-time" },
        { en: "Integrated security stack (FW, IPS, CASB)", id: "Stack keamanan terintegrasi (FW, IPS, CASB)" },
      ],
      useCases: [
        { en: "Multi-branch retail connectivity", id: "Konektivitas ritel multi-cabang" },
        { en: "Bank branch secure WAN", id: "WAN aman cabang bank" },
        { en: "Government regional office connectivity", id: "Konektivitas kantor daerah pemerintah" },
        { en: "Cloud-first application acceleration", id: "Akselerasi aplikasi cloud-first" },
        { en: "MPLS migration to hybrid WAN", id: "Migrasi MPLS ke hybrid WAN" },
        { en: "Manufacturing plant connectivity", id: "Konektivitas pabrik manufaktur" },
      ],
    },
    "network-infrastructure": {
      title: locale === "id" ? "Infrastruktur Jaringan" : "Network Infrastructure",
      eyebrow: locale === "id" ? "Desain & Deployment" : "Design & Deployment",
      intro:
        locale === "id"
          ? "Perancangan dan pembangunan infrastruktur jaringan enterprise yang skalabel, redundan, dan siap masa depan untuk institusi Indonesia."
          : "Design and deployment of scalable, redundant, and future-ready enterprise network infrastructure for Indonesian institutions.",
      problem:
        locale === "id"
          ? "Infrastruktur jaringan yang tidak terstruktur, tidak memiliki redundansi, dan tidak mampu mendukung pertumbuhan bisnis serta transformasi digital."
          : "Unstructured network infrastructure lacking redundancy and unable to support business growth and digital transformation.",
      solution:
        locale === "id"
          ? "Assessment arsitektur existing, desain topologi baru dengan prinsip high availability, implementasi bertahap, dan dokumentasi teknis komprehensif."
          : "Assessment of existing architecture, new topology design with high availability principles, phased implementation, and comprehensive technical documentation.",
      impact:
        locale === "id"
          ? "Jaringan yang lebih stabil dengan SLA uptime tinggi, kemampuan scaling yang jelas, dan biaya operasional yang lebih terukur."
          : "More stable network with high uptime SLAs, clear scaling capabilities, and more predictable operational costs.",
      features: [
        { en: "Network architecture assessment and design", id: "Assessment dan desain arsitektur jaringan" },
        { en: "Structured cabling and physical layer", id: "Structured cabling dan physical layer" },
        { en: "Core/distribution/access layer design", id: "Desain lapisan core/distribusi/akses" },
        { en: "High availability and redundancy design", id: "Desain high availability dan redundansi" },
        { en: "Network documentation and diagrams", id: "Dokumentasi dan diagram jaringan" },
        { en: "Post-deployment testing and optimization", id: "Pengujian dan optimasi pasca-deployment" },
      ],
      useCases: [
        { en: "New data center network build-out", id: "Pembangunan jaringan data center baru" },
        { en: "Campus network modernization", id: "Modernisasi jaringan kampus" },
        { en: "Office building network renovation", id: "Renovasi jaringan gedung kantor" },
        { en: "Manufacturing plant connectivity", id: "Konektivitas pabrik manufaktur" },
        { en: "Hospital network infrastructure", id: "Infrastruktur jaringan rumah sakit" },
        { en: "Retail chain standardized network", id: "Jaringan standar jaringan ritel" },
      ],
    },
    cybersecurity: {
      title: locale === "id" ? "Keamanan Siber" : "Cybersecurity",
      eyebrow: locale === "id" ? "Proteksi Aset Digital" : "Digital Asset Protection",
      intro:
        locale === "id"
          ? "Layanan keamanan siber komprehensif untuk melindungi aset digital, data sensitif, dan kontinuitas operasional institusi Indonesia dari ancaman modern."
          : "Comprehensive cybersecurity services to protect digital assets, sensitive data, and operational continuity of Indonesian institutions from modern threats.",
      problem:
        locale === "id"
          ? "Serangan ransomware, kebocoran data, dan kepatuhan regulasi yang semakin ketat (PDPA, OJK, BSSN) menjadi beban operasional yang signifikan."
          : "Ransomware attacks, data breaches, and increasingly strict regulatory compliance (PDPA, OJK, BSSN) create significant operational burdens.",
      solution:
        locale === "id"
          ? "Pendekatan defense-in-depth dengan vulnerability assessment, hardening konfigurasi, SIEM deployment, dan incident response planning yang terstruktur."
          : "Defense-in-depth approach with vulnerability assessment, configuration hardening, SIEM deployment, and structured incident response planning.",
      impact:
        locale === "id"
          ? "Permukaan serangan berkurang, kepatuhan regulasi terpenuhi, dan kesiapan respons insiden yang terukur untuk meminimalkan dampak bisnis."
          : "Reduced attack surface, regulatory compliance achieved, and measurable incident response readiness to minimize business impact.",
      features: [
        { en: "Vulnerability assessment and penetration testing", id: "Vulnerability assessment dan penetration testing" },
        { en: "Security configuration hardening", id: "Hardening konfigurasi keamanan" },
        { en: "SIEM and log management deployment", id: "Deployment SIEM dan manajemen log" },
        { en: "Incident response planning and retainer", id: "Perencanaan dan retainer respons insiden" },
        { en: "Security awareness training", id: "Pelatihan kesadaran keamanan" },
        { en: "Compliance gap assessment (PDPA, ISO 27001)", id: "Assessment gap kepatuhan (PDPA, ISO 27001)" },
      ],
      useCases: [
        { en: "Financial institution security audit", id: "Audit keamanan institusi keuangan" },
        { en: "Government data protection compliance", id: "Kepatuhan perlindungan data pemerintah" },
        { en: "Healthcare PHI data security", id: "Keamanan data PHI layanan kesehatan" },
        { en: "E-commerce fraud prevention", id: "Pencegahan penipuan e-commerce" },
        { en: "Manufacturing OT/ICS security", id: "Keamanan OT/ICS manufaktur" },
        { en: "Cloud workload security posture", id: "Postur keamanan beban kerja cloud" },
      ],
    },
    "managed-services": {
      title: "Managed Services",
      eyebrow: "NOC/SOC 24/7",
      intro:
        locale === "id"
          ? "Layanan managed operations 24/7 untuk jaringan, keamanan, dan infrastruktur IT — dengan dedicated engineer dan SLA tertulis yang dapat diaudit."
          : "24/7 managed operations for network, security, and IT infrastructure — with dedicated engineers and auditable written SLAs.",
      problem:
        locale === "id"
          ? "Biaya rekrutmen dan retensi engineer IT yang tinggi, monitoring reaktif yang selalu terlambat, dan kurangnya visibilitas operasional yang real-time."
          : "High IT engineer recruitment and retention costs, reactive monitoring that is always late, and lack of real-time operational visibility.",
      solution:
        locale === "id"
          ? "Model managed services berbasis SLA dengan NOC/SOC terpusat, proactive monitoring, change management terstruktur, dan monthly service review."
          : "SLA-based managed services model with centralized NOC/SOC, proactive monitoring, structured change management, and monthly service reviews.",
      impact:
        locale === "id"
          ? "Biaya operasional IT lebih terukur, downtime berkurang signifikan, dan tim internal dapat fokus pada inisiatif bisnis strategis."
          : "More predictable IT operational costs, significantly reduced downtime, and internal teams can focus on strategic business initiatives.",
      features: [
        { en: "24/7 Network Operations Center (NOC)", id: "Network Operations Center (NOC) 24/7" },
        { en: "Security Operations Center (SOC) monitoring", id: "Monitoring Security Operations Center (SOC)" },
        { en: "Proactive alerting and incident management", id: "Alerting proaktif dan manajemen insiden" },
        { en: "Scheduled maintenance and patching", id: "Pemeliharaan terjadwal dan patching" },
        { en: "Monthly performance and SLA reporting", id: "Pelaporan performa dan SLA bulanan" },
        { en: "Dedicated account and technical manager", id: "Account dan technical manager dedikasi" },
      ],
      useCases: [
        { en: "Enterprise network managed operations", id: "Managed operations jaringan enterprise" },
        { en: "Government IT infrastructure management", id: "Manajemen infrastruktur IT pemerintah" },
        { en: "Multi-site security event monitoring", id: "Monitoring kejadian keamanan multi-site" },
        { en: "Cloud infrastructure operations", id: "Operasi infrastruktur cloud" },
        { en: "Hybrid environment management", id: "Manajemen lingkungan hybrid" },
        { en: "Compliance reporting automation", id: "Otomatisasi pelaporan kepatuhan" },
      ],
    },
    "managed-wifi": {
      title: "Managed WiFi",
      eyebrow: locale === "id" ? "WiFi Enterprise Terkelola" : "Enterprise Managed WiFi",
      intro:
        locale === "id"
          ? "Solusi WiFi enterprise terkelola penuh dengan deployment profesional, monitoring 24/7, dan SLA jaminan konektivitas untuk institusi Indonesia."
          : "Fully managed enterprise WiFi solution with professional deployment, 24/7 monitoring, and connectivity guarantee SLA for Indonesian institutions.",
      problem:
        locale === "id"
          ? "WiFi yang tidak stabil, coverage yang tidak merata, dan tim IT internal yang kewalahan mengelola ratusan access point di berbagai lokasi."
          : "Unstable WiFi, uneven coverage, and overwhelmed internal IT teams managing hundreds of access points across multiple locations.",
      solution:
        locale === "id"
          ? "Deployment access point enterprise dengan coverage planning berbasis RF survey, manajemen terpusat cloud, dan monitoring proaktif oleh tim NDS."
          : "Enterprise access point deployment with RF survey-based coverage planning, cloud centralized management, and proactive monitoring by the NDS team.",
      impact:
        locale === "id"
          ? "Coverage WiFi merata dan konsisten, pengguna end-user puas, dan masalah WiFi diselesaikan proaktif sebelum berdampak ke operasional."
          : "Uniform and consistent WiFi coverage, satisfied end-users, and WiFi issues resolved proactively before impacting operations.",
      features: [
        { en: "RF survey and coverage planning", id: "RF survey dan perencanaan coverage" },
        { en: "Enterprise-grade WiFi 6/6E deployment", id: "Deployment WiFi 6/6E enterprise-grade" },
        { en: "Cloud-based centralized management", id: "Manajemen terpusat berbasis cloud" },
        { en: "Guest network and captive portal", id: "Jaringan tamu dan captive portal" },
        { en: "24/7 proactive monitoring and alerts", id: "Monitoring proaktif dan alert 24/7" },
        { en: "SLA-backed uptime guarantee", id: "Jaminan uptime berbasis SLA" },
      ],
      useCases: [
        { en: "Hotel guest WiFi management", id: "Manajemen WiFi tamu hotel" },
        { en: "Hospital clinical and patient WiFi", id: "WiFi klinis dan pasien rumah sakit" },
        { en: "University campus WiFi", id: "WiFi kampus universitas" },
        { en: "Retail store managed connectivity", id: "Konektivitas terkelola toko ritel" },
        { en: "Office building tenant WiFi", id: "WiFi penyewa gedung kantor" },
        { en: "Event venue temporary WiFi", id: "WiFi sementara venue acara" },
      ],
    },
    "cloud-data-center": {
      title: locale === "id" ? "Cloud & Data Center" : "Cloud & Data Center",
      eyebrow: locale === "id" ? "Infrastruktur Hybrid" : "Hybrid Infrastructure",
      intro:
        locale === "id"
          ? "Rancang, bangun, dan operasikan infrastruktur cloud hybrid dan data center yang optimal untuk beban kerja bisnis institusi Indonesia."
          : "Design, build, and operate optimized hybrid cloud and data center infrastructure for Indonesian institutional business workloads.",
      problem:
        locale === "id"
          ? "Strategi cloud yang tidak terencana mengakibatkan biaya tidak terkendali, dependensi vendor lock-in, dan performa aplikasi yang tidak optimal."
          : "Unplanned cloud strategy results in uncontrolled costs, vendor lock-in dependencies, and suboptimal application performance.",
      solution:
        locale === "id"
          ? "Assessment beban kerja, desain arsitektur hybrid cloud (on-premise + cloud), implementasi terstruktur dengan FinOps dan governance framework."
          : "Workload assessment, hybrid cloud architecture design (on-premise + cloud), structured implementation with FinOps and governance framework.",
      impact:
        locale === "id"
          ? "Biaya cloud lebih teroptimalkan, fleksibilitas deployment meningkat, dan data sensitif tetap terlindungi sesuai regulasi lokal Indonesia."
          : "More optimized cloud costs, increased deployment flexibility, and sensitive data remains protected in compliance with local Indonesian regulations.",
      features: [
        { en: "Cloud readiness assessment", id: "Assessment kesiapan cloud" },
        { en: "Hybrid cloud architecture design", id: "Desain arsitektur hybrid cloud" },
        { en: "Data center infrastructure build-out", id: "Pembangunan infrastruktur data center" },
        { en: "Cloud cost optimization (FinOps)", id: "Optimasi biaya cloud (FinOps)" },
        { en: "Disaster recovery and business continuity", id: "Disaster recovery dan kontinuitas bisnis" },
        { en: "Cloud governance and security posture", id: "Governance cloud dan postur keamanan" },
      ],
      useCases: [
        { en: "On-premise to cloud migration", id: "Migrasi on-premise ke cloud" },
        { en: "Multi-cloud management and governance", id: "Manajemen dan governance multi-cloud" },
        { en: "Data center consolidation", id: "Konsolidasi data center" },
        { en: "Disaster recovery site setup", id: "Setup site disaster recovery" },
        { en: "Government sovereign cloud compliance", id: "Kepatuhan sovereign cloud pemerintah" },
        { en: "Financial workload secure cloud", id: "Cloud aman beban kerja keuangan" },
      ],
    },
  };

  return (
    services[slug] ?? {
      title: slug.toUpperCase(),
      eyebrow: "Services",
      intro:
        locale === "id"
          ? `Layanan ${slug} untuk enterprise dan institusi Indonesia.`
          : `${slug} services for Indonesian enterprises and institutions.`,
      problem:
        locale === "id" ? "Tantangan operasional modern." : "Modern operational challenges.",
      solution:
        locale === "id"
          ? "Solusi terstruktur berbasis best practice."
          : "Structured solution based on best practices.",
      impact:
        locale === "id"
          ? "Kinerja lebih optimal dan biaya terukur."
          : "Better performance and predictable costs.",
      features: [],
      useCases: [],
    }
  );
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: AppLocale; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!servicePages.includes(slug)) notFound();
  const data = getServiceData(slug, locale);

  return (
    <ServicePageContent
      locale={locale}
      title={data.title}
      eyebrow={data.eyebrow}
      intro={data.intro}
      problem={data.problem}
      solution={data.solution}
      impact={data.impact}
      features={data.features}
      useCases={data.useCases}
    />
  );
}
