"use client";

import { useState } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Tim HappyClean menjadikan rumah kami bersih tanpa ribet. Pelayanan cepat, rapi, dan hasilnya sangat memuaskan.",
    name: "Nadia",
    role: "Ibu Rumah Tangga",
    location: "Depok",
    rating: 5,
    initials: "N",
    avatarGradient: "from-sky-500 via-cyan-500 to-emerald-400",
  },
  {
    quote:
      "Kantor kami jadi segar kembali sebelum meeting besar. Tim profesional dan detail dalam membersihkan setiap sudut.",
    name: "Rizal",
    role: "Manajer Operasional",
    location: "Bogor",
    rating: 5,
    initials: "R",
    avatarGradient: "from-violet-500 via-fuchsia-500 to-pink-500",
  },
  {
    quote:
      "Booking mudah, staf tepat waktu, dan hasil akhir memuaskan. Saya jadi lebih tenang meninggalkan rumah untuk bekerja.",
    name: "Maya",
    role: "Freelancer",
    location: "Depok",
    rating: 5,
    initials: "M",
    avatarGradient: "from-emerald-500 via-lime-500 to-sky-500",
  },
];

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
    <section className="container mx-auto px-6 py-16 sm:py-24" id="testimoni">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm uppercase tracking-[0.32em] text-sky-500">
          Testimoni
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
          Suara pelanggan HappyClean
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600 sm:text-lg">
          Cerita nyata dari pelanggan yang sudah merasakan layanan bersih-rapi
          dan nyaman dari tim kami.
        </p>
      </div>

      <div className="relative mt-12 overflow-hidden rounded-[2.5rem] border border-slate-200/80 bg-white/90 px-4 py-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:px-6 sm:py-12">
        <div className="absolute left-4 top-1/2 flex -translate-y-1/2 gap-2 sm:left-6">
          <button
            type="button"
            onClick={previous}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={next}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900"
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

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-3 w-3 rounded-full transition ${
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
