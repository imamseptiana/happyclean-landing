import type { SiteConfig } from "@/types/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://happyclean.id";

export const siteConfig: SiteConfig = {
  name: "HappyClean",
  title: "Jasa Cuci Sofa, Kasur & Interior Jabodetabek | HappyClean",
  description:
    "HappyClean adalah jasa cuci sofa, kasur, springbed, dan perawatan interior rumah, kantor, serta apartemen di Jabodetabek dengan layanan profesional dan hasil bersih maksimal.",
  url: siteUrl,
  ogImage: "/og-image.svg",
  keywords: [
    "Jasa Cuci Sofa Jabodetabek",
    "Jasa Cuci Kasur Jabodetabek",
    "Jasa Cuci Sofa Rumah",
    "Jasa Cuci Sofa Kantor",
    "Jasa Cuci Sofa Apartemen",
    "Jasa Cuci Interior Kantor",
    "Vakum Tungau Jabodetabek",
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
  logo: "/logo happyclean.jpeg",
  themeColor: "#0ea5e9",
};
