export interface HeroData {
  badge: string;
  title: string;
  gradientTitle: string;
  description: string;
  stats: { label: string; value: string }[];
}

export interface AboutData {
  badge: string;
  title: string;
  description1: string;
  description2: string;
  corporateGroup: string[];
  vision: string;
  mission: string[];
}

export interface AdvantageItem {
  id: string;
  title: string;
  description: string;
  icon: "network" | "zap" | "shield-check" | "award";
}

export interface ServiceCategory {
  category: string;
  subtitle: string;
  icon: "server" | "wifi" | "cpu";
  isPopular?: boolean;
  items: {
    title: string;
    description: string;
    badge?: string;
  }[];
}

export interface CoverageRegion {
  region: string;
  badgeText: string;
  colorClass?: string; // Diubah jadi optional agar tidak error saat colorClass tidak diisi
}

export interface Partner {
  name: string;
  logo: string;
}
