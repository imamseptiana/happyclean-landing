import type { LucideIcon } from "lucide-react";
import {
  Award,
  Baby,
  BedDouble,
  Bug,
  Car,
  Cloud,
  Droplet,
  Feather,
  Frame,
  HeartPulse,
  Home,
  Layers,
  MapPin,
  ShieldCheck,
  Sofa,
  Sparkles,
  Star,
  Tag,
  Users,
  Wind,
} from "lucide-react";

export type IconKey =
  | "sofa"
  | "bed"
  | "feather"
  | "car"
  | "layers"
  | "frame"
  | "baby"
  | "sparkles"
  | "shield"
  | "home"
  | "map"
  | "bug"
  | "droplet"
  | "cloud"
  | "heart"
  | "wind"
  | "users"
  | "tag"
  | "award"
  | "star";

export type NavItem = {
  label: string;
  href: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  iconKey: IconKey;
};

export type BeforeAfterSlide = {
  title: string;
  before: string;
  after: string;
  caption: string;
};

export type ProblemItem = {
  title: string;
  description: string;
  iconKey: IconKey;
};

export type TrustItem = {
  label: string;
  description: string;
  iconKey: IconKey;
};

export type ReasonItem = {
  title: string;
  description: string;
  iconKey: IconKey;
};

export type TestimonialItem = {
  quote: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  initials: string;
  avatarGradient: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type HeroGalleryImage = {
  src: string;
  alt: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Layanan", href: "#layanan" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "FAQ", href: "#faq" },
];

export const serviceItems: ServiceItem[] = [
  {
    title: "Cuci Sofa",
    description:
      "Membersihkan sofa sampai ke serat dengan teknik profesional dan bahan aman.",
    iconKey: "sofa",
  },
  {
    title: "Cuci Kasur",
    description:
      "Perawatan mendalam untuk kasur agar bebas debu, jamur, dan tungau.",
    iconKey: "bed",
  },
  {
    title: "Cuci Bantal",
    description:
      "Bantal kembali segar dan harum tanpa meninggalkan residu kimia berbahaya.",
    iconKey: "feather",
  },
  {
    title: "Cuci Jok Mobil",
    description:
      "Pembersihan jok mobil yang rapi untuk pengalaman berkendara lebih nyaman.",
    iconKey: "car",
  },
  {
    title: "Cuci Karpet",
    description:
      "Karpet bersih dari noda, debu, dan alergen untuk interior rumah yang lebih sehat.",
    iconKey: "layers",
  },
  {
    title: "Cuci Gorden",
    description:
      "Gorden yang kembali lembut, wangi, dan bebas debu untuk tampilan rumah yang segar.",
    iconKey: "frame",
  },
  {
    title: "Cuci Baby Care",
    description:
      "Perawatan aman untuk perlengkapan bayi yang menjaga kelembutan serta kebersihan.",
    iconKey: "baby",
  },
];

export const heroGalleryImages: HeroGalleryImage[] = [
  {
    src: "/images/teknisi.jpeg",
    alt: "Teknisi HappyClean sedang membersihkan sofa",
  },
  {
    src: "/before-after/sofa-before.jpeg",
    alt: "Sofa sebelum dibersihkan",
  },
  {
    src: "/before-after/sofa-after.jpeg",
    alt: "Sofa setelah dibersihkan",
  },
  {
    src: "/before-after/kasur-before.jpeg",
    alt: "Kasur sebelum dibersihkan",
  },
  {
    src: "/before-after/kasur-after.jpeg",
    alt: "Kasur setelah dibersihkan",
  },
];

export const beforeAfterSlides: BeforeAfterSlide[] = [
  {
    title: "Sofa Before & After",
    before: "/before-after/sofa-before.jpeg",
    after: "/before-after/sofa-after.jpeg",
    caption:
      "Transformasi sofa tua menjadi bersih, segar, dan siap digunakan kembali.",
  },
  {
    title: "Kasur Before & After",
    before: "/before-after/kasur-before.jpeg",
    after: "/before-after/kasur-after.jpeg",
    caption:
      "Kasur bebas noda dan debu untuk tidur yang lebih nyaman dan sehat.",
  },
  {
    title: "Sofa Before & After",
    before: "/before-after/sofa-before1.jpeg",
    after: "/before-after/sofa-after1.jpeg",
    caption: "Sofa kembali cerah dan harum setelah perawatan mendalam.",
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "Berapa lama pengerjaan?",
    answer:
      "Biasanya 1–2 jam, tergantung juga seberapa banyak item yang dikerjakan.",
  },
  {
    question: "Berapa lama kering?",
    answer:
      "Proses pengeringan biasanya 2–4 jam dengan bantuan kipas angin atau AC.",
  },
  {
    question: "Apakah aman untuk anak?",
    answer:
      "Tentu. Kami menggunakan produk yang aman untuk keluarga dan tetap memperhatikan area yang digunakan anak.",
  },
  {
    question: "Apakah melayani panggilan ke rumah?",
    answer:
      "Ya, kami melayani panggilan ke rumah sesuai jadwal dan ketersediaan tim.",
  },
  {
    question: "Apakah bisa pesan jika di luar area Bogor & Depok?",
    answer:
      "Bisa, namun kami menyesuaikan dengan ketersediaan staff lapangan di area tersebut.",
  },
];

export const trustItems: TrustItem[] = [
  {
    label: "700+ Sofa & Kasur Telah Kami Bersihkan",
    description:
      "Pengalaman tanggap dengan hasil bersih profesional setiap hari.",
    iconKey: "sparkles",
  },
  {
    label: "Teknisi Profesional",
    description:
      "Tim terlatih dengan mengutamakan kepuasan customer serta pelayanan yang berkualitas.",
    iconKey: "shield",
  },
  {
    label: "Home Service",
    description: "Layanan datang ke rumah untuk kenyamanan tanpa repot.",
    iconKey: "home",
  },
  {
    label: "Area Bogor & Depok",
    description:
      "Jangkauan layanan khusus untuk pelanggan lokal yang butuh cepat.",
    iconKey: "map",
  },
];

export const reasonItems: ReasonItem[] = [
  {
    title: "Anti Tungau",
    description:
      "Teknologi pembersihan khusus untuk membasmi tungau dan menjaga udara tetap segar.",
    iconKey: "bug",
  },
  {
    title: "Deep Cleaning",
    description:
      "Perawatan mendalam sampai ke serat, noda, dan partikel tersembunyi.",
    iconKey: "droplet",
  },
  {
    title: "Aman Untuk Anak",
    description: "Bahan ramah keluarga yang aman untuk bayi dan anak-anak.",
    iconKey: "shield",
  },
  {
    title: "Home Service",
    description: "Layanan datang ke lokasi untuk kenyamanan tanpa repot.",
    iconKey: "home",
  },
  {
    title: "Teknisi Profesional",
    description: "Tim terlatih dengan pengalaman dan standar servis tinggi.",
    iconKey: "users",
  },
  {
    title: "Harga Murah",
    description:
      "Pilihan paket terjangkau tanpa mengorbankan kualitas dan hasil.",
    iconKey: "tag",
  },
  {
    title: "Bergaransi",
    description: "Layanan dengan jaminan kepuasan untuk hasil yang konsisten.",
    iconKey: "award",
  },
];

export const problemItems: ProblemItem[] = [
  {
    title: "Bau Apek",
    description:
      "Sofa dan kasur berbau tidak sedap setelah lama dipakai tanpa pembersihan mendalam.",
    iconKey: "wind",
  },
  {
    title: "Banyak Debu",
    description:
      "Debu menumpuk di serat kain, mengurangi kenyamanan dan membuat ruangan terasa berat.",
    iconKey: "cloud",
  },
  {
    title: "Banyak Tungau",
    description:
      "Tungau tersembunyi merusak kesehatan dan menyebabkan iritasi kulit serta pernapasan.",
    iconKey: "bug",
  },
  {
    title: "Menimbulkan Alergi",
    description:
      "Alergen dalam kasur dan sofa bisa memicu bersin, ruam, serta gangguan tidur.",
    iconKey: "heart",
  },
  {
    title: "Kusam dan Kotor",
    description:
      "Serat kain kehilangan kilapnya karena noda, keringat, dan residu sehari-hari.",
    iconKey: "layers",
  },
  {
    title: "Tidak Nyaman Digunakan",
    description:
      "Permukaan sofa atau kasur yang kotor membuat istirahat dan bersantai jadi kurang menyenangkan.",
    iconKey: "sofa",
  },
];

export const testimonials: TestimonialItem[] = [
  {
    quote:
      "Tim HappyClean menjadikan rumah kami bersih tanpa ribet. Pelayanan cepat, rapi, dan hasilnya sangat memuaskan.",
    name: "Nadia",
    role: "Ibu Rumah Tangga",
    location: "Depok",
    rating: 5,
    initials: "N",
    avatarGradient: "from-sky-500 via-cyan-500 to-emerald-400",
  },
  {
    quote:
      "Kantor kami jadi segar kembali sebelum meeting besar. Tim profesional dan detail dalam membersihkan setiap sudut.",
    name: "Rizal",
    role: "Manajer Operasional",
    location: "Bogor",
    rating: 5,
    initials: "R",
    avatarGradient: "from-violet-500 via-fuchsia-500 to-pink-500",
  },
  {
    quote:
      "Booking mudah, staf tepat waktu, dan hasil akhir memuaskan. Saya jadi lebih tenang meninggalkan rumah untuk bekerja.",
    name: "Maya",
    role: "Freelancer",
    location: "Depok",
    rating: 5,
    initials: "M",
    avatarGradient: "from-emerald-500 via-lime-500 to-sky-500",
  },
];

export const iconMap: Record<IconKey, LucideIcon> = {
  sofa: Sofa,
  bed: BedDouble,
  feather: Feather,
  car: Car,
  layers: Layers,
  frame: Frame,
  baby: Baby,
  sparkles: Sparkles,
  shield: ShieldCheck,
  home: Home,
  map: MapPin,
  bug: Bug,
  droplet: Droplet,
  cloud: Cloud,
  heart: HeartPulse,
  wind: Wind,
  users: Users,
  tag: Tag,
  award: Award,
  star: Star,
};
