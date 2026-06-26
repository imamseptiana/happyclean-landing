"use client";

import { motion } from "framer-motion";
import { Award, Bug, Droplet, Home, ShieldCheck, Tag, Users } from "lucide-react";

const reasons = [
  {
    title: "Anti Tungau",
    description: "Teknologi pembersihan khusus untuk membasmi tungau dan menjaga udara tetap segar.",
    icon: Bug,
  },
  {
    title: "Deep Cleaning",
    description: "Perawatan mendalam sampai ke serat, noda, dan partikel tersembunyi.",
    icon: Droplet,
  },
  {
    title: "Aman Untuk Anak",
    description: "Bahan ramah keluarga yang aman untuk bayi dan anak-anak.",
    icon: ShieldCheck,
  },
  {
    title: "Home Service",
    description: "Layanan datang ke lokasi untuk kenyamanan tanpa repot.",
    icon: Home,
  },
  {
    title: "Teknisi Profesional",
    description: "Tim terlatih dengan pengalaman dan standar servis tinggi.",
    icon: Users,
  },
  {
    title: "Harga Murah",
    description: "Pilihan paket terjangkau tanpa mengorbankan kualitas dan hasil.",
    icon: Tag,
  },
  {
    title: "Bergaransi",
    description: "Layanan dengan jaminan kepuasan untuk hasil yang konsisten.",
    icon: Award,
  },
];

export function WhyHappyCleanSection() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-sky-700">
            Why HappyClean
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
            Keunggulan Layanan Kami yang Bikin Bersih Jadi Tenang
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Solusi kebersihan premium dengan layanan rumah, dukungan teknisi ahli, dan hasil yang aman bagi keluarga.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4, scale: 1.01 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="group rounded-4xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5 transition duration-300 hover:border-sky-400/40 hover:shadow-md hover:shadow-sky-200"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-sky-100 text-sky-700 shadow-sm shadow-sky-100 transition group-hover:bg-sky-200 group-hover:text-sky-950">
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
