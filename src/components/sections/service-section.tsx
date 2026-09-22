"use client";

import { motion } from "framer-motion";

import { iconMap, serviceItems } from "@/constants";
import { siteConfig } from "@/lib/site-config";

export function ServiceSection() {
  return (
    <section className="bg-[#edf6ff] py-16 sm:py-24" id="layanan">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-brand-600">
            Layanan HappyClean
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
            Pilih layanan yang paling dekat dengan kebutuhan ruang Anda.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600 sm:text-lg">
            Dari rumah tinggal, apartemen, hingga kantor, kami hadir untuk
            menjaga ruang Anda tetap segar, sehat, dan nyaman digunakan setiap
            hari.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {serviceItems.map((service, index) => {
            const Icon = iconMap[service.iconKey];
            const isFeatured = index === 0;
            const whatsappLink = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
              `Halo HappyClean, saya ingin pesan layanan ${service.title}.`,
            )}`;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4, scale: 1.01 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className={`group rounded-[2.15rem] border p-7 shadow-[0_32px_110px_-36px_rgba(19,52,128,0.8)] transition duration-300 hover:-translate-y-1 ${
                  isFeatured
                    ? "border-blue-600 bg-[#9dbef6] shadow-blue-600/30"
                    : "border-blue-600 bg-[#a9c9f7] shadow-blue-500/25"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-sky-500 text-white shadow-lg shadow-sky-200 transition group-hover:bg-sky-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  {isFeatured && (
                    <span className="rounded-full bg-brand-600 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                      Favorit
                    </span>
                  )}
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-950">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {service.description}
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-4 py-2.5 text-sm font-semibold text-sky-700 transition hover:border-sky-300 hover:bg-sky-100"
                >
                  Pesan Sekarang
                </a>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:border-brand-200 hover:bg-brand-50"
          >
            Lihat layanan lainnya
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
