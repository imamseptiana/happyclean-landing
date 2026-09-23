"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { heroGalleryImages } from "@/constants";
import { trackCtaClick, trackWhatsAppClick } from "@/lib/analytics";

export function HeroSection() {
  const [activeImage, setActiveImage] = useState(0);
  return (
    <section
      className="relative overflow-hidden bg-[linear-gradient(180deg,#dfeefb_0%,#edf6ff_42%,#f8fbff_100%)] pb-16 pt-14 sm:pb-24 sm:pt-20"
      id="home"
    >
      <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.22),transparent_38%)]" />
      <div className="container relative mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm shadow-slate-900/5 backdrop-blur">
              <div className="relative h-9 w-9 overflow-hidden rounded-[0.75rem] border border-slate-200 bg-white shadow-[0_10px_24px_-14px_rgba(15,23,42,0.2)] ring-1 ring-slate-100">
                <Image
                  src="/logo%20baru.jpeg"
                  alt="HappyClean logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span>Premium Sofa, Kasur & Interior Cleaning</span>
            </div>

            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.34em] text-blue-700">
                HappyClean
              </p>
              <h1 className="text-3xl font-semibold leading-tight text-slate-950 sm:text-5xl">
                HappyClean datang, ruang Anda kembali nyaman.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Profesional untuk rumah, kantor, dan apartemen—siap membersihkan
                sofa, kasur, karpet, dan area interior dengan teknologi deep
                cleaning yang aman, rapi, dan cepat.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="https://wa.me/6285169569089?text=Halo%20HappyClean%2C%20saya%20ingin%20booking%20layanan%20cuci%20sofa%20dan%20kasur"
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  trackWhatsAppClick("hero_primary", "Booking via WhatsApp")
                }
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                Booking via WhatsApp
              </a>
              <a
                href="#layanan"
                onClick={() => trackCtaClick("Lihat Layanan", "hero_secondary")}
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
              >
                Lihat Layanan
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-5 shadow-sm shadow-slate-900/5">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                  Trusted by
                </p>
                <p className="mt-3 text-xl font-semibold text-slate-950">
                  4.9/5 Rating
                </p>
                <div className="mt-3 flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className="h-4 w-4" />
                  ))}
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  10.000+ pelanggan puas di area Jabodetabek
                </p>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-5 shadow-sm shadow-slate-900/5">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                  Trust Badge
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                    ✓
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-950">
                      Teknisi Bersertifikat
                    </p>
                    <p className="text-sm text-slate-600">
                      Proses deep cleaning terstandar
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_40px_120px_-45px_rgba(15,23,42,0.18)]">
              <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-br from-blue-400 via-sky-300 to-white" />
              <div className="relative px-6 pb-8 pt-5 sm:px-8">
                <div className="flex items-center justify-between rounded-3xl bg-white/85 px-4 py-3 shadow-sm shadow-slate-900/5 backdrop-blur">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                      Premium Care
                    </p>
                    <p className="text-sm font-semibold text-slate-950">
                      Cuci Sofa & Kasur
                    </p>
                  </div>
                  <div className="rounded-2xl bg-blue-600 px-3 py-2 text-xs font-semibold text-white">
                    24 jam respon
                  </div>
                </div>

                <div className="mt-6 rounded-[2rem] border border-dashed border-slate-300 bg-gradient-to-br from-slate-100 via-slate-50 to-white p-6">
                  <div className="space-y-4">
                    <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white">
                      <Image
                        src={heroGalleryImages[activeImage].src}
                        alt={heroGalleryImages[activeImage].alt}
                        width={720}
                        height={450}
                        className="h-72 w-full object-cover sm:h-80"
                      />
                    </div>

                    <div
                      className="flex flex-wrap gap-2"
                      aria-label="Galeri foto hasil kerja HappyClean"
                    >
                      {heroGalleryImages.map((image, index) => (
                        <button
                          key={image.src}
                          type="button"
                          onClick={() => setActiveImage(index)}
                          aria-label={`Tampilkan foto ${index + 1} dari ${heroGalleryImages.length}`}
                          aria-pressed={index === activeImage}
                          className={`relative h-14 w-14 overflow-hidden rounded-xl border transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 ${
                            index === activeImage
                              ? "border-blue-600 ring-2 ring-blue-100"
                              : "border-slate-200"
                          }`}
                        >
                          <Image
                            src={image.src}
                            alt=""
                            width={80}
                            height={80}
                            className="h-full w-full object-cover"
                          />
                        </button>
                      ))}
                    </div>

                    <p className="text-sm text-slate-600">
                      Foto real proses pengerjaan dari tim HappyClean.
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {[
                    "Deep Clean",
                    "Anti Tungau",
                    "Proteksi Alergen",
                    "Higienis",
                  ].map((badge) => (
                    <span
                      key={badge}
                      className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
