import { iconMap, trustItems } from "@/constants";

export function TrustBadgeSection() {
  return (
    <section className="bg-sky-50 py-16 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-sky-700">
            Trust Badge
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
            Kenapa pelanggan memilih HappyClean
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
            Layanan premium dengan tim handal, layanan rumah, dan jangkauan
            Bogor serta Depok.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {trustItems.map((item) => {
            const Icon = iconMap[item.iconKey];
            return (
              <article
                key={item.label}
                className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-md hover:shadow-slate-200"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-sky-100 text-sky-700 shadow-sm shadow-sky-100">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-slate-950">
                  {item.label}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
