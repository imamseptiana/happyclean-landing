"use client";

import { Star } from "lucide-react";
import { useState } from "react";

import { testimonials } from "@/constants";

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const previous = () => {
    setActiveIndex(
      (current) => (current - 1 + testimonials.length) % testimonials.length,
    );
  };

  const next = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <section
      className="container mx-auto px-6 py-16 sm:py-24"
      id="testimoni"
      aria-labelledby="testimonials-title"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm uppercase tracking-[0.32em] text-sky-500">
          Testimoni
        </p>
        <h2
          id="testimonials-title"
          className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl"
        >
          Suara pelanggan HappyClean
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600 sm:text-lg">
          Cerita nyata dari pelanggan yang sudah merasakan layanan bersih-rapi
          dan nyaman dari tim kami.
        </p>
      </div>

      <div
        className="relative mt-12 overflow-hidden rounded-[2.5rem] border border-slate-200/80 bg-white/90 px-4 py-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:px-6 sm:py-12"
        role="region"
        aria-roledescription="carousel"
        aria-label="Testimoni pelanggan HappyClean"
        aria-live="polite"
      >
        <div className="absolute left-4 top-1/2 flex -translate-y-1/2 gap-2 sm:left-6">
          <button
            type="button"
            onClick={previous}
            aria-label="Lihat testimoni sebelumnya"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Lihat testimoni berikutnya"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
          >
            ›
          </button>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((item) => (
              <article
                key={`${item.name}-${item.location}`}
                className="min-w-full shrink-0 px-2 sm:px-4"
              >
                <div className="h-full rounded-[2rem] border border-slate-200 bg-slate-950/95 p-8 text-white shadow-xl shadow-slate-950/20 sm:p-10">
                  <div className="flex items-center gap-2 text-amber-300">
                    {Array.from({ length: item.rating }).map((_, index) => (
                      <Star key={index} className="h-5 w-5" />
                    ))}
                  </div>
                  <p className="mt-6 text-lg leading-8 text-slate-100 sm:text-xl">
                    “{item.quote}”
                  </p>
                  <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/95 p-5">
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br ${item.avatarGradient} text-lg font-semibold text-white shadow-lg shadow-slate-950/20`}
                      >
                        {item.initials}
                      </div>
                      <div className="space-y-1">
                        <p className="font-semibold text-white">{item.name}</p>
                        <p className="text-sm text-slate-400">{item.role}</p>
                        <p className="text-sm text-slate-500">
                          {item.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div
          className="mt-8 flex justify-center gap-2"
          aria-label="Navigasi slide testimoni"
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Pilih testimoni ${index + 1}`}
              aria-current={index === activeIndex}
              className={`h-3 w-3 rounded-full transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 ${
                index === activeIndex ? "bg-sky-500" : "bg-slate-300"
              }`}
            />
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-6 text-center text-slate-700 shadow-sm shadow-slate-900/5">
            <p className="text-3xl font-semibold text-slate-950">5.0</p>
            <p className="mt-2 text-sm">Rating rata-rata</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-6 text-center text-slate-700 shadow-sm shadow-slate-900/5">
            <p className="text-3xl font-semibold text-slate-950">150+</p>
            <p className="mt-2 text-sm">Pelanggan puas</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-6 text-center text-slate-700 shadow-sm shadow-slate-900/5">
            <p className="text-3xl font-semibold text-slate-950">100%</p>
            <p className="mt-2 text-sm">Testimoni asli</p>
          </div>
        </div>
      </div>
    </section>
  );
}
