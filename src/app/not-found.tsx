import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="max-w-md text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-600">
          404
        </p>
        <h1 className="mt-4 text-3xl font-semibold text-slate-950">
          Halaman tidak ditemukan
        </h1>
        <p className="mt-3 text-slate-600">
          Halaman yang Anda cari tidak tersedia atau sudah dipindahkan.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-600"
        >
          Kembali ke beranda
        </Link>
      </div>
    </main>
  );
}
