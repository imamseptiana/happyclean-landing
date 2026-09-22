"use client";

import { motion } from "framer-motion";

import { iconMap, problemItems } from "@/constants";

export function ProblemCustomerSection() {
  return (
    <section
      className="bg-[#edf6ff] py-16 text-slate-900 sm:py-24"
      id="problem"
    >
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-sky-700">
            Problem Customer
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl">
            Apakah Sofa, Kasur, atau Ruang Kerja Anda Mengalami Masalah Ini?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600 sm:text-lg">
            Kenali tanda-tanda yang mengganggu kenyamanan dan kesehatan di
            rumah, kantor, maupun apartemen, lalu atasi segera dengan layanan
            profesional kami.
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
                className="group rounded-[2.1rem] border border-blue-600 bg-[#a8c9f7] p-7 shadow-[0_34px_120px_-42px_rgba(19,52,128,0.84)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-700 hover:shadow-[0_40px_130px_-38px_rgba(19,52,128,0.96)]"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-sky-500 text-white shadow-lg shadow-sky-200 transition group-hover:bg-sky-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">
                  {problem.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
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
