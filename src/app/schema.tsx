import { siteConfig } from "@/lib/site-config";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  image: `${siteConfig.url}${siteConfig.logo}`,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  priceRange: "Rp 100.000 - Rp 1.500.000",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.streetAddress,
    addressLocality: siteConfig.address.addressLocality,
    addressRegion: siteConfig.address.addressRegion,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.addressCountry,
  },
  areaServed: siteConfig.areaServed,
  description: siteConfig.description,
  url: siteConfig.url,
  sameAs: ["https://wa.me/6285169569089"],
  openingHours: "Mo-Su 08:00-21:00",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Layanan Kebersihan Sofa dan Kasur",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Jasa Cuci Sofa Bogor",
          areaServed: "Bogor",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Jasa Cuci Sofa Depok",
          areaServed: "Depok",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Jasa Cuci Springbed Bogor",
          areaServed: "Bogor",
        },
      },
    ],
  },
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteConfig.url,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Layanan",
      item: `${siteConfig.url}/#layanan`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Testimoni",
      item: `${siteConfig.url}/#testimoni`,
    },
  ],
};

export const structuredData = [localBusinessSchema, breadcrumbSchema];
