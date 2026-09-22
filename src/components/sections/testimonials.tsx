"use client";

import { MapPin, Star } from "lucide-react";
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
      className="bg-[#edf6ff] px-6 py-16 sm:py-24"
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
          Ulasan real dari Google Maps
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600 sm:text-lg">
          Cerita nyata dari pelanggan yang sudah merasakan layanan bersih-rapi
          dan nyaman dari tim kami di Google Maps.
        </p>
      </div>

      <div
        className="relative mt-12 overflow-hidden rounded-[2.35rem] border border-blue-600 bg-[#a7c8f5] px-4 py-8 shadow-[0_38px_140px_-46px_rgba(19,52,128,0.9)] sm:px-6 sm:py-10"
        role="region"
        aria-roledescription="carousel"
        aria-label="Testimoni pelanggan HappyClean"
        aria-live="polite"
      >
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((item) => (
              <article
                key={`${item.name}-${item.location}`}
                className="min-w-full shrink-0 px-1.5 sm:px-2.5"
              >
                <div className="mx-auto max-w-2xl rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-[0_12px_32px_rgba(15,23,42,0.06)] sm:p-7">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-amber-400">
                      {Array.from({ length: item.rating }).map((_, index) => (
                        <Star key={index} className="h-4 w-4 sm:h-5 sm:w-5" />
                      ))}
                    </div>
                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700 sm:text-[11px]">
                      5.0
                    </span>
                  </div>

                  <p className="mt-5 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
                    “{item.quote}”
                  </p>

                  <div className="mt-6 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${item.avatarGradient} text-sm font-semibold text-white shadow-sm sm:h-12 sm:w-12`}
                      >
                        {item.initials}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900 sm:text-base">
                          {item.name}
                        </p>
                        <p className="text-xs text-slate-500 sm:text-sm">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-slate-500">
                      <MapPin className="h-4 w-4" />
                      <span className="text-xs sm:text-sm">
                        {item.location}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <div
            className="flex items-center justify-center gap-3 rounded-full border border-slate-200 bg-white/90 px-4 py-2 shadow-sm shadow-slate-900/5"
            aria-label="Navigasi slide testimoni"
          >
            <button
              type="button"
              onClick={previous}
              aria-label="Ulasan sebelumnya"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-base font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
            >
              ‹
            </button>

            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Pilih testimoni ${index + 1}`}
                aria-current={index === activeIndex}
                className={`h-2.5 w-2.5 rounded-full transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 ${
                  index === activeIndex ? "bg-sky-500" : "bg-slate-300"
                }`}
              />
            ))}

            <button
              type="button"
              onClick={next}
              aria-label="Ulasan berikutnya"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-base font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
            >
              ›
            </button>
          </div>
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

        <div className="mt-8 flex justify-center">
          <a
            href="https://maps.app.goo.gl/qTKdV6ZfWDxLmsQSA?g_st=iw"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
          >
            <MapPin className="h-4 w-4" />
            Lihat review di Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
