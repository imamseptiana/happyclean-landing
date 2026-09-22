"use client";

import { motion } from "framer-motion";

import { iconMap, reasonItems } from "@/constants";

export function WhyHappyCleanSection() {
  return (
    <section className="bg-[#edf6ff] py-16 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-sky-700">
            Why HappyClean
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
            Keunggulan Layanan Kami untuk Hunian & Ruang Kerja
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Solusi kebersihan premium untuk rumah, kantor, dan apartemen dengan
            teknisi ahli, proses yang rapi, dan hasil yang aman untuk
            penghuninya.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {reasonItems.map((item, index) => {
            const Icon = iconMap[item.iconKey];
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4, scale: 1.01 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="group rounded-[2.1rem] border border-blue-600 bg-[#a8c9f7] p-7 shadow-[0_32px_110px_-38px_rgba(19,52,128,0.82)] transition duration-300 hover:-translate-y-1 hover:border-blue-700 hover:shadow-[0_36px_120px_-34px_rgba(19,52,128,0.9)]"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-sky-500 text-white shadow-lg shadow-sky-200 transition group-hover:bg-sky-600 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
