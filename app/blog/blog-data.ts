export type BlogPost = {
  slug: string;
  category: "Akademik" | "Prestasi" | "Kegiatan";
  date: string;
  title: string;
  excerpt: string;
  image: string;
};

export const posts: BlogPost[] = [
  {
    slug: "kolaborasi-literasi-dzaizza",
    category: "Akademik",
    date: "April 2026",
    title: "Tingkatkan Kualitas Perpustakaan, Dza'Izza Perkuat Kolaborasi Literasi",
    excerpt: "Program literasi baru untuk meningkatkan budaya membaca dan riset di kalangan santri DQ3.",
    image: "/images/BP3A1179.webp",
  },
  {
    slug: "seleksi-paskibraka-tangerang",
    category: "Prestasi",
    date: "Maret 2026",
    title: "Santri DQ3 Mengikuti Seleksi Paskibraka Kabupaten Tangerang",
    excerpt: "Santri Daar el-Qolam 3 berhasil lolos seleksi tingkat kecamatan dan mewakili di tingkat kabupaten.",
    image: "/images/BP3A1242.webp",
  },
  {
    slug: "seleksi-nasional-opsi-2026",
    category: "Prestasi",
    date: "Februari 2026",
    title: "Dua Santriwati Tembus Seleksi Nasional OPSI 2026",
    excerpt: "Pencapaian membanggakan dari santriwati DQ3 dalam Olimpiade Penelitian Siswa Indonesia.",
    image: "/images/BP3A1252.webp",
  },
  {
    slug: "kegiatan-apel-santri",
    category: "Kegiatan",
    date: "Januari 2026",
    title: "Kegiatan Apel Santri Menguatkan Disiplin dan Kebersamaan",
    excerpt: "Agenda rutin pesantren membangun karakter disiplin dan rasa tanggung jawab santri.",
    image: "/images/BP3A1185.webp",
  },
];
