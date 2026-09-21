import type { Metadata } from "next";

import {
  BeforeAfterSection,
  ContactSection,
  FaqSection,
  FinalCtaSection,
  HeroSection,
  ProblemCustomerSection,
  ServiceSection,
  TestimonialsSection,
  TrustBadgeSection,
  WhyHappyCleanSection,
} from "@/components/sections";
import { Navbar } from "@/components/ui";
import { siteConfig } from "@/lib/site-config";
import { structuredData } from "@/app/schema";

export const generateMetadata = async (): Promise<Metadata> => ({
  title: "Jasa Cuci Sofa Bogor & Depok | HappyClean",
  description:
    "HappyClean adalah jasa cuci sofa, kasur, springbed, dan vakum tungau di Bogor, Depok, serta area Jabodetabek dengan layanan rumah profesional.",
  alternates: { canonical: "/" },
  keywords: siteConfig.keywords,
  openGraph: {
    title: "Jasa Cuci Sofa Bogor & Depok | HappyClean",
    description:
      "Layanan cuci sofa, kasur, dan springbed profesional di Bogor, Depok, serta Jabodetabek.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Cuci Sofa Bogor & Depok | HappyClean",
    description:
      "HappyClean melayani cuci sofa, kasur, springbed, dan vakum tungau di Bogor dan Depok.",
    images: [`${siteConfig.url}${siteConfig.ogImage}`],
  },
});

export default function Home() {
  return (
    <main
      id="main-content"
      className="min-h-screen bg-background text-foreground"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <HeroSection />
      <TrustBadgeSection />
      <WhyHappyCleanSection />
      <ServiceSection />
      <BeforeAfterSection />
      <ProblemCustomerSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCtaSection />
      <ContactSection />
    </main>
  );
}
