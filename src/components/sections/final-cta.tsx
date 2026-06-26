const waLink =
  "https://wa.me/6285169569089?text=Halo%20HappyClean%2C%20saya%20ingin%20booking";

export function FinalCtaSection() {
  return (
    <>
      <section
        className="container mx-auto px-6 pb-16 pt-10 sm:pb-24 sm:pt-16"
        id="booking"
      >
        <div className="overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-sky-600 via-cyan-500 to-emerald-500 px-6 py-10 shadow-[0_28px_80px_rgba(15,23,42,0.18)] sm:px-10 sm:py-14">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
            <div className="text-white">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-100/90">
                Siap booking layanan?
              </p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Rumah bersih dalam satu klik lewat WhatsApp.
              </h2>
              <p className="mt-4 max-w-2xl text-slate-100/90 sm:text-lg">
                Booking sekarang untuk jadwal cepat, tenaga profesional, dan
                hasil rapi tanpa repot.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-base font-semibold text-slate-950 shadow-xl shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-slate-100"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-emerald-600"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12.04 0C5.373 0 .079 5.294.079 11.961c0 2.112.55 4.133 1.59 5.94L0 24l6.307-1.63a11.93 11.93 0 0 0 5.732 1.49c6.668 0 11.962-5.294 11.962-11.962S18.708 0 12.04 0zm5.208 14.922c-.207.577-1.21 1.09-1.61 1.16-.42.07-.91.1-1.39-.02-1.2-.25-2.32-.9-3.97-2.54-1.64-1.64-2.31-2.85-2.57-3.29-.26-.44-.03-.68.2-.89.21-.19.47-.5.71-.74.24-.25.32-.42.48-.7.16-.28.08-.53-.04-.74-.12-.2-1-2.39-1.37-3.27-.36-.86-.73-.74-.99-.75-.26-.01-.56-.01-.86-.01-.3 0-.78.12-1.19.57-.42.46-1.62 1.58-1.62 3.84 0 2.24 1.66 4.4 1.89 4.7.23.3 3.24 4.98 7.86 6.99.61.26 1.08.42 1.45.54.61.19 1.17.16 1.61.09.49-.09 1.51-.62 1.73-1.21.22-.59.22-1.1.16-1.21-.05-.11-.2-.18-.42-.3z" />
                    <path d="M17.02 14.21c-.17-.08-1.01-.5-1.17-.56-.16-.06-.28-.08-.4.08-.12.17-.47.56-.58.68-.11.12-.22.14-.4.05-.17-.08-.72-.26-1.38-.85-.51-.44-.85-.98-.95-1.15-.1-.17-.01-.26.08-.34.08-.08.18-.19.27-.28.09-.09.12-.16.18-.26.06-.1.03-.19-.01-.27-.05-.09-.43-1.03-.59-1.41-.15-.36-.3-.31-.4-.31-.1 0-.22-.01-.34-.01-.12 0-.31.05-.47.23-.16.18-.61.6-.61 1.47 0 .86.63 1.7.72 1.82.09.12 1.22 1.86 2.96 2.61.65.28 1.16.45 1.56.58.66.22 1.26.19 1.74.12.53-.08.96-.35 1.1-.68.14-.33.14-.6.1-.65-.05-.06-.18-.1-.38-.17z" />
                  </svg>
                  Booking Sekarang
                </a>
                <a
                  href="#layanan"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-base font-semibold text-white transition hover:border-white hover:bg-white/20"
                >
                  Lihat Layanan
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 text-white shadow-xl shadow-slate-950/10 backdrop-blur-sm sm:p-8">
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-lg font-semibold text-white">
                    ✓
                  </div>
                  <div>
                    <p className="font-semibold">Booking WhatsApp 24/7</p>
                    <p className="mt-1 text-sm text-slate-100/80">
                      Chat langsung untuk jadwal dan detail layanan.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-lg font-semibold text-white">
                    ✓
                  </div>
                  <div>
                    <p className="font-semibold">Sticky CTA untuk mobile</p>
                    <p className="mt-1 text-sm text-slate-100/80">
                      Tombol booking selalu mudah dijangkau di layar kecil.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-lg font-semibold text-white">
                    ✓
                  </div>
                  <div>
                    <p className="font-semibold">Fast response</p>
                    <p className="mt-1 text-sm text-slate-100/80">
                      Customer service siap bantu kapan saja.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-40 flex justify-center bg-transparent sm:hidden">
        <a
          href={waLink}
          target="_blank"
          rel="noreferrer"
          className="m-4 flex w-[calc(100%-2rem)] max-w-3xl items-center justify-between rounded-3xl bg-slate-950/95 px-6 py-5 text-white shadow-2xl shadow-slate-950/25 transition hover:bg-slate-900"
        >
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-lg shadow-emerald-500/20">
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12.04 0C5.373 0 .079 5.294.079 11.961c0 2.112.55 4.133 1.59 5.94L0 24l6.307-1.63a11.93 11.93 0 0 0 5.732 1.49c6.668 0 11.962-5.294 11.962-11.962S18.708 0 12.04 0zm5.208 14.922c-.207.577-1.21 1.09-1.61 1.16-.42.07-.91.1-1.39-.02-1.2-.25-2.32-.9-3.97-2.54-1.64-1.64-2.31-2.85-2.57-3.29-.26-.44-.03-.68.2-.89.21-.19.47-.5.71-.74.24-.25.32-.42.48-.7.16-.28.08-.53-.04-.74-.12-.2-1-2.39-1.37-3.27-.36-.86-.73-.74-.99-.75-.26-.01-.56-.01-.86-.01-.3 0-.78.12-1.19.57-.42.46-1.62 1.58-1.62 3.84 0 2.24 1.66 4.4 1.89 4.7.23.3 3.24 4.98 7.86 6.99.61.26 1.08.42 1.45.54.61.19 1.17.16 1.61.09.49-.09 1.51-.62 1.73-1.21.22-.59.22-1.1.16-1.21-.05-.11-.2-.18-.42-.3z" />
                <path d="M17.02 14.21c-.17-.08-1.01-.5-1.17-.56-.16-.06-.28-.08-.4.08-.12.17-.47.56-.58.68-.11.12-.22.14-.4.05-.17-.08-.72-.26-1.38-.85-.51-.44-.85-.98-.95-1.15-.1-.17-.01-.26.08-.34.08-.08.18-.19.27-.28.09-.09.12-.16.18-.26.06-.1.03-.19-.01-.27-.05-.09-.43-1.03-.59-1.41-.15-.36-.3-.31-.4-.31-.1 0-.22-.01-.34-.01-.12 0-.31.05-.47.23-.16.18-.61.6-.61 1.47 0 .86.63 1.7.72 1.82.09.12 1.22 1.86 2.96 2.61.65.28 1.16.45 1.56.58.66.22 1.26.19 1.74.12.53-.08.96-.35 1.1-.68.14-.33.14-.6.1-.65-.05-.06-.18-.1-.38-.17z" />
              </svg>
            </span>
            <div>
              <p className="text-base font-semibold">Booking Sekarang</p>
              <p className="text-sm text-slate-300">
                Chat via WhatsApp langsung
              </p>
            </div>
          </div>
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400 text-slate-950 shadow-md shadow-emerald-400/20">
            →
          </span>
        </a>
      </div>

      <a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex h-20 w-20 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_22px_60px_rgba(37,211,102,0.35)] transition hover:-translate-y-0.5"
        aria-label="Chat WhatsApp HappyClean"
      >
        <span className="absolute inset-0 animate-pulse rounded-full bg-[#25d366]/40" />
        <span className="absolute inset-1 rounded-full bg-[#25D366]" />
        <svg
          viewBox="0 0 24 24"
          className="relative h-9 w-9"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12.04 0C5.373 0 .079 5.294.079 11.961c0 2.112.55 4.133 1.59 5.94L0 24l6.307-1.63a11.93 11.93 0 0 0 5.732 1.49c6.668 0 11.962-5.294 11.962-11.962S18.708 0 12.04 0zm5.208 14.922c-.207.577-1.21 1.09-1.61 1.16-.42.07-.91.1-1.39-.02-1.2-.25-2.32-.9-3.97-2.54-1.64-1.64-2.31-2.85-2.57-3.29-.26-.44-.03-.68.2-.89.21-.19.47-.5.71-.74.24-.25.32-.42.48-.7.16-.28.08-.53-.04-.74-.12-.2-1-2.39-1.37-3.27-.36-.86-.73-.74-.99-.75-.26-.01-.56-.01-.86-.01-.3 0-.78.12-1.19.57-.42.46-1.62 1.58-1.62 3.84 0 2.24 1.66 4.4 1.89 4.7.23.3 3.24 4.98 7.86 6.99.61.26 1.08.42 1.45.54.61.19 1.17.16 1.61.09.49-.09 1.51-.62 1.73-1.21.22-.59.22-1.1.16-1.21-.05-.11-.2-.18-.42-.3z" />
          <path d="M17.02 14.21c-.17-.08-1.01-.5-1.17-.56-.16-.06-.28-.08-.4.08-.12.17-.47.56-.58.68-.11.12-.22.14-.4.05-.17-.08-.72-.26-1.38-.85-.51-.44-.85-.98-.95-1.15-.1-.17-.01-.26.08-.34.08-.08.18-.19.27-.28.09-.09.12-.16.18-.26.06-.1.03-.19-.01-.27-.05-.09-.43-1.03-.59-1.41-.15-.36-.3-.31-.4-.31-.1 0-.22-.01-.34-.01-.12 0-.31.05-.47.23-.16.18-.61.6-.61 1.47 0 .86.63 1.7.72 1.82.09.12 1.22 1.86 2.96 2.61.65.28 1.16.45 1.56.58.66.22 1.26.19 1.74.12.53-.08.96-.35 1.1-.68.14-.33.14-.6.1-.65-.05-.06-.18-.1-.38-.17z" />
        </svg>
      </a>
    </>
  );
}
