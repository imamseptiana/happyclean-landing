"use client";

import { motion } from "framer-motion";

import { iconMap, problemItems } from "@/constants";

export function ProblemCustomerSection() {
  return (
    <section className="bg-slate-950 py-16 text-white sm:py-24" id="problem">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-sky-400">
            Problem Customer
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Apakah Sofa Anda Mengalami Masalah Ini?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300 sm:text-lg">
            Kenali tanda-tanda yang membuat kenyamanan dan kesehatan keluarga
            berkurang, lalu atasi segera dengan layanan profesional kami.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {problemItems.map((problem, index) => {
            const Icon = iconMap[problem.iconKey];
            return (
              <motion.article
                key={problem.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group rounded-4xl border border-white/10 bg-white/5 p-6 shadow-[0_25px_80px_-40px_rgba(15,23,42,0.45)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:bg-white/10"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-sky-500 text-white shadow-lg shadow-sky-500/20 transition group-hover:bg-sky-400">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">
                  {problem.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {problem.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
