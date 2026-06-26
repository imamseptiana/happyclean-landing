export function FeatureGrid() {
  return (
    <section id="layanan" className="container mx-auto px-6 py-16 sm:py-24">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="text-sm uppercase tracking-[0.32em] text-brand-600">
          Layanan
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
          Layanan kebersihan terbaik untuk hunian dan ruang kerja Anda
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600 sm:text-lg">
          Pilih paket pembersihan yang sesuai, mulai dari layanan rutin hingga
          deep clean lengkap dengan standar profesional.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Booking Instan",
            description:
              "Pemesanan layanan yang cepat dengan jadwal fleksibel untuk kebutuhan bersih Anda.",
          },
          {
            title: "Profesional Terlatih",
            description:
              "Tim berpengalaman yang dilengkapi alat dan produk ramah lingkungan.",
          },
          {
            title: "Jaminan Kepuasan",
            description:
              "Layanan dengan standar kualitas tinggi dan dukungan pelanggan 24/7.",
          },
        ].map((item) => (
          <article
            key={item.title}
            className="rounded-3xl border border-slate-200 bg-slate-50 p-8"
          >
            <h3 className="text-xl font-semibold text-slate-950">
              {item.title}
            </h3>
            <p className="mt-4 text-slate-600">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
