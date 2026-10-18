import Navbar from "../components/sections/Navbar";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import ServicesSection from "../components/sections/ServicesSection";
import CoverageSection from "../components/sections/CoverageSection";
import PartnersSection from "../components/sections/PartnersSection";
import Footer from "../components/sections/Footer";
import {
  HeroData,
  AboutData,
  AdvantageItem,
  ServiceCategory,
  CoverageRegion,
  Partner,
} from "../types/compro";
import AdvantagesSection from "@/components/sections/AdvantagesSection";
import NetworkTopologySection from "@/components/sections/NetworkTopologySection";
import ContactSection from "@/components/sections/ContactSection";

// Simulasi fetching data dari CMS API
async function getComproData() {
  const hero: HeroData = {
    badge: "PT. ELEMEN JARINGAN NUSANTARA",
    title: "Connecting The",
    gradientTitle: "Unconnected",
    description:
      "Penyedia infrastruktur fiber optic netral, internet dedicated berkecepatan tinggi, serta solusi IT Managed Service terpercaya untuk memajukan konektivitas digital Indonesia.",
    stats: [
      { label: "Tahun Pengalaman", value: "20+" },
      { label: "Metro Ethernet", value: "100G" },
      { label: "SLA Commitment", value: "99.5%" },
    ],
  };

  const about: AboutData = {
    badge: "TENTANG EXATEL",
    title: "Pionir Infrastruktur Jaringan Netral di Indonesia",
    description1:
      "PT. Elemen Jaringan Nusantara (Exatel) adalah perusahaan penyedia infrastruktur telekomunikasi yang berfokus pada jaringan fiber optic, internet service, dan solusi IT Managed Service.",
    description2:
      "Exatel mengedepankan pendekatan netralitas agar infrastruktur jaringan kami dapat diakses oleh seluruh penyedia dan penerima layanan di seluruh Indonesia.",
    corporateGroup: ["JEMBO CABLE", "JEMBO ENERGINDO", "SINARMONAS INDUSTRIES"],
    vision:
      "Menjadi Perusahaan Penyedia Infrastruktur Fiber Optic, Internet dan Solusi IT terbaik bagi pelanggan dan mitra bisnis.",
    mission: [
      "Menyediakan layanan terbaik yang dapat diandalkan pelanggan.",
      "Menjalin hubungan bisnis dengan mengutamakan etika bisnis.",
      "Memberikan kontribusi nyata dalam pengembangan infrastruktur telekomunikasi Indonesia.",
      "Meningkatkan kualitas SDM yang profesional dan kompeten.",
    ],
  };

  const advantages: AdvantageItem[] = [
    {
      id: "1",
      title: "Infrastruktur Netral",
      description:
        "Prinsip netralitas memungkinkan penyedia layanan berbasis IP memperluas jangkauan.",
      icon: "network",
    },
    {
      id: "2",
      title: "Cepat & Stabil",
      description:
        "Memanfaatkan fiber optic berteknologi tinggi untuk koneksi tanpa hambatan.",
      icon: "zap",
    },
    {
      id: "3",
      title: "Aman & Tahan Gangguan",
      description:
        "Daya tahan fisik & frekuensi yang tinggi untuk keamanan data.",
      icon: "shield-check",
    },
    {
      id: "4",
      title: "Handal & Profesional",
      description:
        "Didukung oleh tim berpengalaman lebih dari 20 tahun di industri telekomunikasi.",
      icon: "award",
    },
  ];

  const serviceCategories: ServiceCategory[] = [
    {
      category: "Network Solution",
      subtitle: "Exatel Network",
      icon: "server",
      items: [
        {
          title: "FTTH Open Access",
          description:
            "Penyediaan jaringan serat optik bagi ISP & Subnet. Exatel tidak menjual langsung ke pengguna akhir rumahan.",
        },
        {
          title: "Local Loop / Metro Ethernet",
          description:
            "Menghubungkan lokasi bisnis dengan sistem Point-to-Point maupun Multipoint-to-Multipoint 100G.",
        },
      ],
    },
    {
      category: "Internet Service",
      subtitle: "Exatel Connectivity",
      icon: "wifi",
      isPopular: true,
      items: [
        {
          title: "Internet Dedicated (1:1)",
          description:
            "Akses internet 24 jam dengan bandwidth dedicated & SLA 99.5%.",
          badge: "Includes Mikrotik & IP Public",
        },
        {
          title: "Broadband Bisnis",
          description:
            "Internet cepat dan efisien bagi UMKM/UKM dari 100 Mbps hingga 1 Gbps.",
          badge: "Unlimited & Support 24/7",
        },
      ],
    },
    {
      category: "Managed Service",
      subtitle: "Exatel IT Management",
      icon: "cpu",
      items: [
        {
          title: "WiFi Managed Service",
          description:
            "Pengadaan, pemasangan, serta konfigurasi Access Point & Switch POE secara penuh.",
        },
        {
          title: "Network & SD-WAN",
          description:
            "Dukungan tenaga IT profesional untuk memantau LAN, WAN, & SD-WAN antarkantor.",
        },
        {
          title: "Fiber Building Service",
          description:
            "Perancangan kabel fiber optik gedung untuk CCTV, Komputer, & VoIP.",
        },
      ],
    },
  ];

  const coverageRegions: CoverageRegion[] = [
    { region: "DKI Jakarta", badgeText: "Pop Active" },
    { region: "Jawa Barat", badgeText: "High Density FO" },
    { region: "Jawa Tengah", badgeText: "Metro Ethernet" },
    { region: "Jawa Timur", badgeText: "Open Access Node" },
    { region: "Sulteng & Sultra", badgeText: "Mining & Industry" },
    { region: "Kaltim & Bali", badgeText: "Expansion Area" },
  ];

  const partnersData: Partner[] = [
    { name: "KOMINFO", logo: "/logos/kominfo.png" },
    { name: "IDNIC", logo: "/logos/idnic.png" },
    { name: "APJII DKI Jakarta", logo: "/logos/apjii.png" },
    { name: "Supercorridor", logo: "/logos/supercorridor.png" },
    { name: "JKT-IX", logo: "/logos/jkt-ix.png" },
    { name: "Tower Bersama Group", logo: "/logos/tower-bersama.png" },
    { name: "Amron Citinet", logo: "/logos/amron-citinet.png" },
    { name: "Open IXP", logo: "/logos/openixp.png" },
    { name: "Delta Art Star", logo: "/logos/delta-art-star.png" },
    { name: "PT. Infotama Lintas Global", logo: "/logos/ilg.png" },
    { name: "PT. Atlas Fiber Indonesia", logo: "/logos/atlas-fiber.png" },
    { name: "Sokka Fiber", logo: "/logos/sokka-fiber.png" },
    { name: "Fibernet", logo: "/logos/fibernet.png" },
    { name: "Lintasarta", logo: "/logos/lintasarta.png" },
  ];

  return {
    hero,
    about,
    advantages,
    serviceCategories,
    coverageRegions,
    partnersData,
  };
}

export default async function HomePage() {
  const data = await getComproData();

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0a0d14] text-slate-100">
      <Navbar />
      <HeroSection data={data.hero} />
      <AboutSection data={data.about} />
      <AdvantagesSection items={data.advantages} />
      <ServicesSection categories={data.serviceCategories} />
      <NetworkTopologySection />
      <CoverageSection />
      <PartnersSection partners={data.partnersData} />
      <ContactSection />
      <Footer />
    </main>
  );
}
