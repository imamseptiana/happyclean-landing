"use client";

import { Menu, MessageCircle, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { navItems } from "@/constants";
import { trackCtaClick, trackWhatsAppClick } from "@/lib/analytics";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-xl shadow-sm shadow-slate-900/5">
      <div className="container mx-auto flex items-center justify-between gap-4 px-6 py-4 md:px-8">
        <Link
          href="#home"
          className="flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 shadow-sm shadow-brand-200/50">
            <span className="text-base font-semibold">HC</span>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-950">
              HappyClean
            </p>
            <p className="text-xs text-slate-500">Jasa Kebersihan</p>
          </div>
        </Link>

        <nav
          aria-label="Navigasi utama"
          className="hidden items-center gap-10 md:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full text-sm font-medium text-slate-700 transition hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
              onClick={() => {
                setOpen(false);
                trackCtaClick(item.label, "navbar_link");
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://wa.me/6285169569089?text=Halo%20HappyClean%20saya%20ingin%20tahu%20lebih%20lanjut"
            target="_blank"
            rel="noreferrer"
            aria-label="Chat WhatsApp HappyClean"
            onClick={() => trackWhatsAppClick("navbar_desktop", "WhatsApp")}
            className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-whatsapp-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96" : "max-h-0"}`}
        aria-label="Menu navigasi mobile"
      >
        <div className="space-y-3 border-t border-slate-200 bg-white/95 px-6 py-5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://wa.me/6285169569089?text=Halo%20HappyClean%20saya%20ingin%20tahu%20lebih%20lanjut"
            target="_blank"
            rel="noreferrer"
            aria-label="Chat WhatsApp HappyClean"
            onClick={() => trackWhatsAppClick("navbar_mobile", "WhatsApp")}
            className="flex items-center justify-center rounded-full bg-whatsapp px-4 py-3 text-sm font-semibold text-white transition hover:bg-whatsapp-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            <MessageCircle className="mr-2 h-4 w-4" aria-hidden="true" />
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
