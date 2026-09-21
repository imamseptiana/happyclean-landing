"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, PhoneCall } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import {
  trackCtaClick,
  trackFormSubmit,
  trackWhatsAppClick,
} from "@/lib/analytics";

export function WhatsAppButton({
  label = "Chat WhatsApp",
  location = "floating",
  className = "",
}: {
  label?: string;
  location?: string;
  className?: string;
}) {
  const waLink =
    "https://wa.me/6285169569089?text=Halo%20HappyClean%2C%20saya%20ingin%20booking%20layanan";

  return (
    <motion.a
      href={waLink}
      target="_blank"
      rel="noreferrer"
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      onClick={() => trackWhatsAppClick(location, label)}
      className={className}
      aria-label={label}
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      {label}
    </motion.a>
  );
}

export function AnalyticsCtaButton({
  href,
  label,
  location,
  variant = "primary",
}: {
  href: string;
  label: string;
  location: string;
  variant?: "primary" | "secondary";
}) {
  const baseClass =
    variant === "primary"
      ? "inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
      : "inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2";

  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      onClick={() => trackCtaClick(label, location)}
      className={baseClass}
    >
      {label}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </motion.a>
  );
}

export function ContactFormTracker() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = (formData.get("name") as string) || "unknown";
    const service = (formData.get("service") as string) || "unknown";

    trackFormSubmit("contact_form", "submit", {
      form_name: "contact_form",
      form_field_name: name,
      form_service: service,
    });

    setSubmitted(true);
    trackFormSubmit("contact_form", "success", {
      form_name: "contact_form",
      form_field_name: name,
      form_service: service,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        placeholder="Nama"
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-0 focus:border-sky-500"
        aria-label="Nama"
      />
      <input
        name="service"
        placeholder="Jenis layanan"
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-0 focus:border-sky-500"
        aria-label="Jenis layanan"
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
      >
        <PhoneCall className="h-4 w-4" aria-hidden="true" />
        {submitted ? "Terkirim" : "Kirim Permintaan"}
      </button>
    </form>
  );
}

export function AnalyticsLink({
  href,
  label,
  location,
  className,
}: {
  href: string;
  label: string;
  location: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      onClick={() => trackCtaClick(label, location)}
      className={className}
    >
      {label}
    </Link>
  );
}
