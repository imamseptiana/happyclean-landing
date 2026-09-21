"use client";

import { motion } from "framer-motion";
import { Camera, ShieldCheck, Sparkles } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { beforeAfterSlides } from "@/constants";

export function BeforeAfterSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevious = () => {
    setActiveIndex(
      (current) =>
        (current - 1 + beforeAfterSlides.length) % beforeAfterSlides.length,
    );
  };

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % beforeAfterSlides.length);
  };

  const slide = beforeAfterSlides[activeIndex];

  return (
    <section
      className="bg-slate-950 py-16 text-white sm:py-24"
      id="before-after"
      aria-labelledby="before-after-title"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 shadow-sm shadow-slate-900/10">
            <Camera className="h-4 w-4 text-sky-300" />
            Foto Asli Customer
          </span>
          <h2
            id="before-after-title"
            className="mt-5 text-3xl font-semibold sm:text-4xl"
          >
            Before & After
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Lihat bukti nyata hasil layanan kami dalam foto asli. Setiap
            transformasi dikerjakan dengan detail untuk hasil maksimal.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 xl:grid-cols-[1.4fr_0.8fr] xl:items-start">
          <div
            className="rounded-4xl border border-white/10 bg-slate-900 shadow-2xl shadow-slate-950/20"
            role="region"
            aria-label="Slide before and after hasil cleaning"
            aria-live="polite"
          >
            <div className="grid gap-4 p-6 md:grid-cols-2">
              <div className="space-y-4 rounded-3xl bg-slate-950/95 p-4 ring-1 ring-white/10">
                <div className="text-sm uppercase tracking-[0.28em] text-sky-400">
                  Before
                </div>
                <div className="overflow-hidden rounded-3xl bg-slate-800">
                  <Image
                    src={slide.before}
                    alt={`${slide.title} before real photo`}
                    width={720}
                    height={600}
                    className="h-auto w-full object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={false}
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="space-y-4 rounded-3xl bg-slate-950/95 p-4 ring-1 ring-white/10">
                <div className="text-sm uppercase tracking-[0.28em] text-emerald-300">
                  After
                </div>
                <div className="overflow-hidden rounded-3xl bg-slate-800">
                  <Image
                    src={slide.after}
                    alt={`${slide.title} after real photo`}
                    width={720}
                    height={600}
                    className="h-auto w-full object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={false}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 bg-slate-950/80 px-6 py-5 text-center text-sm text-slate-300">
              {slide.caption}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 px-2 pb-6">
              <button
                type="button"
                onClick={handlePrevious}
                aria-label="Lihat foto sebelum sebelumnya"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Sebelumnya
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Lihat foto sebelum berikutnya"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Selanjutnya
              </button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="space-y-6"
          >
            <div className="rounded-4xl border border-slate-800 bg-slate-900/90 p-8 shadow-xl shadow-slate-950/20">
              <div className="inline-flex items-center gap-3 rounded-full bg-slate-950/80 px-4 py-2 text-sm text-slate-100">
                <ShieldCheck className="h-4 w-4 text-sky-300" />
                Jaminan Kepuasan
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-white">
                Keaslian foto, hasil yang bisa dipercaya
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Semua foto merupakan dokumentasi asli dari pelanggan kami, bukan
                staging atau stok.
              </p>
            </div>

            <div className="rounded-4xl border border-slate-800 bg-slate-900/90 p-8 shadow-xl shadow-slate-950/30">
              <div className="flex items-center gap-3 text-slate-100">
                <Sparkles className="h-5 w-5 text-amber-300" />
                <span className="text-sm uppercase tracking-[0.24em] text-sky-400">
                  Transformasi Nyata
                </span>
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-300">
                Setiap slide memperlihatkan perubahan nyata dari kondisi sebelum
                dan setelah proses pembersihan kami.
              </p>
              <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950/80 px-4 py-3 text-sm font-semibold text-white ring-1 ring-white/10">
                <Camera className="h-4 w-4 text-sky-300" />
                Foto asli customer
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
