"use client";

import { useState } from "react";

import { trackFormSubmit } from "@/lib/analytics";
import { siteConfig } from "@/lib/site-config";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = (formData.get("name") as string)?.trim() || "unknown";
    const service = (formData.get("service") as string)?.trim() || "unknown";
    const phone = (formData.get("phone") as string)?.trim() || "unknown";

    trackFormSubmit("contact_form", "submit", {
      form_name: "contact_form",
      customer_name: name,
      service_name: service,
      phone_number: phone,
    });

    const message = `Halo HappyClean, saya ${name}. Saya ingin layanan ${service}. Nomor WhatsApp: ${phone}. Mohon bantuannya.`;
    const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    trackFormSubmit("contact_form", "success", {
      form_name: "contact_form",
      customer_name: name,
      service_name: service,
      phone_number: phone,
    });
  };

  return (
    <section className="bg-[#edf6ff] px-6 py-16 sm:py-24" id="contact">
      <div className="grid gap-10 rounded-[2.35rem] border border-blue-600 bg-[#a9caf7] p-8 shadow-[0_40px_140px_-42px_rgba(19,52,128,0.9)] lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-brand-600">
            Konsultasi
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
            Butuh bantuan?
          </h2>
          <p className="mt-4 max-w-xl text-slate-600">
            Hubungi tim HappyClean untuk konsultasi kebutuhan kebersihan
            properti Anda. Tim kami akan membantu menentukan layanan terbaik.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-[1.5rem] bg-slate-50 p-5 shadow-inner shadow-slate-900/5"
        >
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Nama
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500"
              placeholder="Nama lengkap"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Nomor WhatsApp
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500"
              placeholder="08xxxxxxxxxx"
            />
          </div>

          <div>
            <label
              htmlFor="service"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Jenis layanan
            </label>
            <input
              id="service"
              name="service"
              type="text"
              required
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500"
              placeholder="Contoh: Sofa, Kasur, Rumah"
            />
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
          >
            {submitted ? "Permintaan terkirim" : "Kirim permintaan"}
          </button>
        </form>
      </div>
    </section>
  );
}
