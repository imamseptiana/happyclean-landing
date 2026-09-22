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
      className="bg-[#edf6ff] py-16 text-slate-900 sm:py-24"
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
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm shadow-slate-900/5">
            <Camera className="h-4 w-4 text-sky-600" />
            Foto Asli Customer
          </span>
          <h2
            id="before-after-title"
            className="mt-5 text-3xl font-semibold text-slate-950 sm:text-4xl"
          >
            Before & After
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Lihat bukti nyata hasil layanan kami dalam foto asli. Setiap
            transformasi dikerjakan dengan detail untuk hasil maksimal.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 xl:grid-cols-[1.4fr_0.8fr] xl:items-start">
          <div
            className="rounded-[2.2rem] border border-blue-600 bg-[#a9caf7] shadow-[0_36px_120px_-38px_rgba(19,52,128,0.9)]"
            role="region"
            aria-label="Slide before and after hasil cleaning"
            aria-live="polite"
          >
            <div className="grid gap-4 p-6 md:grid-cols-2">
              <div className="space-y-4 rounded-3xl bg-white/80 p-4 ring-1 ring-sky-100">
                <div className="text-sm uppercase tracking-[0.28em] text-sky-700">
                  Before
                </div>
                <div className="overflow-hidden rounded-3xl bg-slate-200">
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

              <div className="space-y-4 rounded-3xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <div className="text-sm uppercase tracking-[0.28em] text-emerald-600">
                  After
                </div>
                <div className="overflow-hidden rounded-3xl bg-slate-200">
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

            <div className="border-t border-slate-200 bg-slate-50 px-6 py-5 text-center text-sm text-slate-600">
              {slide.caption}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 px-2 pb-6">
              <button
                type="button"
                onClick={handlePrevious}
                aria-label="Lihat foto sebelum sebelumnya"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
              >
                Sebelumnya
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Lihat foto sebelum berikutnya"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
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
            <div className="rounded-[2.1rem] border border-blue-600 bg-[#a8c9f6] p-8 shadow-[0_30px_100px_-34px_rgba(19,52,128,0.82)]">
              <div className="inline-flex items-center gap-3 rounded-full bg-sky-500 px-4 py-2 text-sm text-white">
                <ShieldCheck className="h-4 w-4 text-sky-700" />
                Jaminan Kepuasan
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-slate-950">
                Keaslian foto, hasil yang bisa dipercaya
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Semua foto merupakan dokumentasi asli dari pelanggan kami, bukan
                staging atau stok.
              </p>
            </div>

            <div className="rounded-[2.1rem] border border-blue-600 bg-[#a8c9f6] p-8 shadow-[0_30px_100px_-34px_rgba(19,52,128,0.82)]">
              <div className="flex items-center gap-3 text-slate-900">
                <Sparkles className="h-5 w-5 text-amber-500" />
                <span className="text-sm uppercase tracking-[0.24em] text-sky-700">
                  Transformasi Nyata
                </span>
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-600">
                Setiap slide memperlihatkan perubahan nyata dari kondisi sebelum
                dan setelah proses pembersihan kami.
              </p>
              <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-3 text-sm font-semibold text-sky-800 ring-1 ring-sky-200">
                <Camera className="h-4 w-4 text-sky-700" />
                Foto asli customer
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
