"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-sky-200 via-sky-100 to-white pb-16 pt-14 sm:pb-24 sm:pt-20"
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
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white">
                HC
              </span>
              <span>Premium Sofa & Kasur Cleaning</span>
            </div>

            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.34em] text-blue-700">
                HappyClean
              </p>
              <h1 className="text-3xl font-semibold leading-tight text-slate-950 sm:text-5xl">
                Jasa Cuci Sofa & Kasur Profesional Anti Tungau di Bogor & Depok
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Hilangkan bau, debu, noda, dan alergen dengan metode deep
                cleaning profesional.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="https://wa.me/6285169569089?text=Halo%20HappyClean%2C%20saya%20ingin%20booking%20layanan%20cuci%20sofa%20dan%20kasur"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Booking via WhatsApp
              </a>
              <a
                href="#layanan"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
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
                  10.000+ pelanggan puas di Bogor & Depok
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
                  <div className="flex h-72 items-center justify-center rounded-[1.5rem] border border-slate-200 bg-gradient-to-br from-blue-100 via-white to-slate-100 text-center text-slate-500">
                    <div>
                      <p className="text-lg font-semibold">Ilustrasi Teknisi</p>
                      <p className="mt-2 text-sm text-slate-500">
                        Placeholder modern
                      </p>
                    </div>
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
