"use client";

import { motion } from "framer-motion";
import {
  BedDouble,
  Baby,
  Car,
  Feather,
  Frame,
  Layers,
  Sofa,
} from "lucide-react";

const services = [
  {
    title: "Cuci Sofa",
    description:
      "Membersihkan sofa sampai ke serat dengan teknik profesional dan bahan aman.",
    icon: Sofa,
  },
  {
    title: "Cuci Kasur",
    description:
      "Perawatan mendalam untuk kasur agar bebas debu, jamur, dan tungau.",
    icon: BedDouble,
  },
  {
    title: "Cuci Bantal",
    description:
      "Bantal kembali segar dan harum tanpa meninggalkan residu kimia berbahaya.",
    icon: Feather,
  },
  {
    title: "Cuci Jok Mobil",
    description:
      "Pembersihan jok mobil yang rapi untuk pengalaman berkendara lebih nyaman.",
    icon: Car,
  },
  {
    title: "Cuci Karpet",
    description:
      "Karpet bersih dari noda, debu, dan alergen untuk interior rumah yang lebih sehat.",
    icon: Layers,
  },
  {
    title: "Cuci Gorden",
    description:
      "Gorden yang kembali lembut, wangi, dan bebas debu untuk tampilan rumah yang segar.",
    icon: Frame,
  },
  {
    title: "Cuci Baby Care",
    description:
      "Perawatan aman untuk perlengkapan bayi yang menjaga kelembutan serta kebersihan.",
    icon: Baby,
  },
];

export function ServiceSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24" id="layanan">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-brand-600">
            Layanan HappyClean
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
            Layanan Lengkap untuk Semua Kebutuhan Kebersihan Anda
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600 sm:text-lg">
            Pilih layanan premium kami yang dirancang agar rumah dan keluarga
            selalu nyaman, sehat, serta bebas kotoran.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4, scale: 1.01 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="group rounded-4xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5 transition duration-300 hover:border-brand-200 hover:shadow-md"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-brand-100 text-brand-700 shadow-sm shadow-brand-100 transition group-hover:bg-brand-200">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-950">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
                >
                  Pesan Sekarang
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
