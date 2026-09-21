import type { SiteConfig } from "@/types/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://happyclean.id";

export const siteConfig: SiteConfig = {
  name: "HappyClean",
  title: "Jasa Cuci Sofa Bogor & Depok | HappyClean",
  description:
    "HappyClean adalah jasa cuci sofa, kasur, springbed, dan vakum tungau di Bogor, Depok, serta Jabodetabek dengan layanan rumah profesional dan hasil bersih maksimal.",
  url: siteUrl,
  ogImage: "/og-image.svg",
  keywords: [
    "Jasa Cuci Sofa Bogor",
    "Jasa Cuci Sofa Depok",
    "Jasa Cuci Springbed Bogor",
    "Jasa Cuci Springbed",
    "Jasa Cuci Sofa Jabodetabek",
    "Jasa Cuci Kasur Jabodetabek",
    "Vakum Tungau Bogor",
    "HappyClean",
  ],
  phone: "+62 851-6956-9089",
  whatsapp: "6285169569089",
  email: "hello@happyclean.id",
  address: {
    streetAddress: "Bogor dan Depok",
    addressLocality: "Bogor",
    addressRegion: "Jawa Barat",
    postalCode: "16111",
    addressCountry: "ID",
  },
  areaServed: ["Bogor", "Depok", "Jabodetabek"],
  businessType: "CleaningService",
  logo: "/icon.svg",
  themeColor: "#0ea5e9",
};
