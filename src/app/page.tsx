import type { Metadata } from "next";

import { Instagram, MapPin, MessageCircle, Youtube } from "lucide-react";

import {
  BeforeAfterSection,
  ContactSection,
  FaqSection,
  FinalCtaSection,
  HeroSection,
  ProblemCustomerSection,
  ServiceSection,
  TestimonialsSection,
  WhyHappyCleanSection,
} from "@/components/sections";
import { Navbar } from "@/components/ui";
import { siteConfig } from "@/lib/site-config";
import { structuredData } from "@/app/schema";

export const generateMetadata = async (): Promise<Metadata> => ({
  title: "Jasa Cuci Sofa, Kasur & Interior Jabodetabek | HappyClean",
  description:
    "HappyClean adalah jasa cuci sofa, kasur, springbed, serta perawatan interior rumah, kantor, dan apartemen di Jabodetabek dengan layanan profesional.",
  alternates: { canonical: "/" },
  keywords: siteConfig.keywords,
  openGraph: {
    title: "Jasa Cuci Sofa, Kasur & Interior Jabodetabek | HappyClean",
    description:
      "Layanan cuci sofa, kasur, dan perawatan interior rumah, kantor, serta apartemen di Jabodetabek.",
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
    title: "Jasa Cuci Sofa, Kasur & Interior Jabodetabek | HappyClean",
    description:
      "HappyClean melayani cuci sofa, kasur, springbed, serta perawatan interior rumah, kantor, dan apartemen di Jabodetabek.",
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
      <WhyHappyCleanSection />
      <ServiceSection />
      <BeforeAfterSection />
      <ProblemCustomerSection />
      <TestimonialsSection />

      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.32em] text-brand-600">
              Cara Pesan
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
              Empat langkah mudah, semua lewat chat.
            </h2>
            <p className="mt-4 text-slate-600 sm:text-lg">
              Proses booking yang sederhana agar Anda cepat dapat jadwal dan
              hasil yang tepat.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                number: "01",
                title: "Chat kebutuhan",
                description:
                  "Kirim foto atau deskripsi area yang ingin dibersihkan melalui WhatsApp.",
              },
              {
                number: "02",
                title: "Pilih jadwal",
                description:
                  "Admin akan bantu rekomendasi layanan, estimasi, dan slot waktu yang tepat.",
              },
              {
                number: "03",
                title: "Tim datang",
                description:
                  "Teknisi profesional tiba dengan alat dan perlengkapan yang sesuai kebutuhan.",
              },
              {
                number: "04",
                title: "Cek & bayar",
                description:
                  "Hasil dicek bersama, lalu pembayaran dilakukan setelah pekerjaan selesai.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm shadow-slate-900/5"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-600">
                  {step.number}
                </p>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection />
      <FinalCtaSection />
      <ContactSection />

      <footer className="border-t border-slate-200 bg-white">
        <div className="container mx-auto flex flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
              HappyClean
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Jasa kebersihan rumah, kantor, apartemen, dan soft furniture di
              area Jabodetabek.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 sm:items-end">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <MapPin className="h-4 w-4 text-brand-600" />
              Indonesia
            </div>

            <div className="flex items-center gap-2">
              <a
                href="https://www.instagram.com/happycle4n?stkn=YzFsbm1lbTh2Ym1q&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram HappyClean"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 transition hover:border-brand-200 hover:bg-brand-50 hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://youtube.com/@happycleanhomeservice?si=KCr_JHbbizzOxd7P"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube HappyClean"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 transition hover:border-brand-200 hover:bg-brand-50 hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/6285169569089?text=Halo%20HappyClean%2C%20saya%20ingin%20tanya%20lebih%20lanjut"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp HappyClean"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
