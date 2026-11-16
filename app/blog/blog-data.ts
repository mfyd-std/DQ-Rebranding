export type BlogPost = {
  slug: string;
  category: "Akademik" | "Prestasi" | "Kegiatan" | "Internasional";
  date: string;
  title: string;
  excerpt: string;
  image: string;
  detailDate?: string;
  body?: string[];
  shareHref?: string;
};

export const posts: BlogPost[] = [
  {
    slug: "kolaborasi-literasi-dzaizza",
        category: "Akademik",
        date: "April 2026",
        title: "Tingkatkan Kualitas Perpustakaan, Dza'Izza Perkuat Kolaborasi Literasi",
        excerpt: "Program literasi baru untuk meningkatkan budaya membaca dan riset di kalangan santri DQ3.",
        image: "/images/BP3A1179.webp",
        detailDate: "15 April 2026",
    body: ["Pondok Pesantren Daar el-Qolam 3 Kampus Dza'Izza meresmikan program kolaborasi literasi baru bersama beberapa lembaga pendidikan tinggi. Program ini dirancang untuk meningkatkan kualitas perpustakaan dan budaya membaca di kalangan santri.", "Kolaborasi mencakup penambahan koleksi buku referensi, pelatihan literasi digital, dan akses jurnal akademik internasional. Para santri kini dapat mengakses lebih dari 5.000 judul buku elektronik dan ribuan jurnal melalui sistem perpustakaan digital terbaru.", "Kepala Perpustakaan menjelaskan bahwa program ini bertujuan menumbuhkan minat riset sejak dini. \"Kami ingin santri tidak hanya menjadi pembaca yang baik, tetapi juga peneliti yang kritis dan produktif,\" ungkapnya.", "Selain penambahan koleksi, perpustakaan juga melakukan renovasi ruang baca dan menambah fasilitas pendukung seperti ruang diskusi, area kerja kolaboratif, dan koneksi internet kecepatan tinggi. Renovasi diharapkan rampung pada Mei 2026."],
    shareHref: "https://wa.me/?text=Tingkatkan%20Kualitas%20Perpustakaan%2C%20Dza'Izza%20Perkuat%20Kolaborasi%20Literasi%20%E2%80%94%20daarelqolam.ac.id",
  },
  {
    slug: "seleksi-paskibraka-tangerang",
    category: "Prestasi",
    date: "Maret 2026",
    title: "Santri DQ3 Mengikuti Seleksi Paskibraka Kabupaten Tangerang",
    excerpt: "Santri Daar el-Qolam 3 berhasil lolos seleksi tingkat kecamatan dan mewakili di tingkat kabupaten.",
    image: "/images/BP3A1242.webp",
    detailDate: "22 Maret 2026",
    body: ["Tiga santri Pondok Pesantren Daar el-Qolam 3 berhasil lolos seleksi Paskibraka tingkat kecamatan dan akan mewakili di tingkat Kabupaten Tangerang pada tahun ini. Prestasi ini menjadi kebanggaan bagi seluruh keluarga besar pesantren.", "Seleksi tingkat kecamatan diikuti oleh ratusan peserta dari berbagai sekolah, dan ketiga santri DQ3 berhasil melewati tahapan ujian fisik, baris-berbaris, wawancara, serta pengetahuan kebangsaan dengan nilai sangat memuaskan.", "Pembina ekstrakurikuler Paskibra mengungkapkan rasa bangga atas pencapaian ini. \"Kerja keras dan disiplin santri selama ini terbayar lunas. Mereka membawa nama baik pesantren di tingkat regional,\" ujarnya.", "Pada tingkat kabupaten, santri akan menjalani seleksi lanjutan selama dua minggu. Jika berhasil lolos, mereka berkesempatan menjadi anggota Paskibraka resmi pada upacara peringatan HUT RI ke-81 mendatang."],
    shareHref: "https://wa.me/?text=Santri%20DQ3%20Mengikuti%20Seleksi%20Paskibraka%20Kabupaten%20Tangerang%20%E2%80%94%20daarelqolam.ac.id",
  },
  {
    slug: "seleksi-nasional-opsi-2026",
    category: "Prestasi",
    date: "Februari 2026",
    title: "Dua Santriwati Tembus Seleksi Nasional OPSI 2026",
    excerpt: "Pencapaian membanggakan dari santriwati DQ3 dalam Olimpiade Penelitian Siswa Indonesia.",
    image: "/images/BP3A1252.webp",
    detailDate: "10 Februari 2026",
    body: ["Dua santriwati Pondok Pesantren Daar el-Qolam 3 Kampus Dza'Izza berhasil tembus seleksi nasional Olimpiade Penelitian Siswa Indonesia (OPSI) 2026. Penelitian mereka berhasil bersaing dengan ribuan karya dari seluruh Indonesia.", "Penelitian pertama berjudul \"Pemanfaatan Limbah Pertanian sebagai Bahan Baku Bioenergi Terbarukan\" — sebuah studi inovatif yang mengeksplorasi potensi lokal pesantren. Penelitian kedua berfokus pada \"Penerapan Etika Islami dalam Penggunaan Kecerdasan Buatan di Kalangan Pelajar\".", "Kedua karya ilmiah ini telah melalui proses penelitian selama lebih dari enam bulan dengan bimbingan intensif dari guru pembimbing. Para santriwati menggunakan metodologi penelitian campuran untuk memastikan validitas dan relevansi hasil.", "Final OPSI 2026 akan dilaksanakan di Jakarta pada Mei mendatang. Para santriwati akan mempresentasikan penelitian mereka di hadapan dewan juri yang terdiri dari akademisi dan peneliti senior dari berbagai perguruan tinggi negeri."],
    shareHref: "https://wa.me/?text=Dua%20Santriwati%20Tembus%20Seleksi%20Nasional%20OPSI%202026%20%E2%80%94%20daarelqolam.ac.id",
  },
  {
    slug: "kegiatan-apel-santri",
    category: "Kegiatan",
    date: "Januari 2026",
    title: "Kegiatan Apel Santri Menguatkan Disiplin dan Kebersamaan",
    excerpt: "Agenda rutin pesantren membangun karakter disiplin dan rasa tanggung jawab santri.",
    image: "/images/BP3A1185.webp",
  },
  {"category": "Kegiatan", "date": "Januari 2026", "title": "Upacara Peringatan Hari Pahlawan di Pondok Pesantren DQ", "excerpt": "Ribuan santri mengikuti upacara bendera memperingati Hari Pahlawan Nasional dengan penuh khidmat.", "image": "/images/upacaradq2.webp", "slug": "upacara-hari-pahlawan"},
  {"category": "Kegiatan", "date": "Desember 2025", "title": "Haflah Akhirussanah — Perayaan Kelulusan Santri Angkatan 2025", "excerpt": "Perayaan kelulusan santri kelas akhir yang khidmat dan penuh haru, dihadiri ribuan wali santri.", "image": "/images/BP3A8921.webp", "slug": "haflah-akhirussanah-2025"},
  {"category": "Internasional", "date": "November 2025", "title": "Delegasi DQ3 Menghadiri Konferensi Pendidikan Islam Asia Tenggara", "excerpt": "Lima santri DQ3 mewakili Indonesia dalam konferensi pendidikan Islam tingkat regional di Kuala Lumpur.", "image": "/images/DJI_0866 (2)-2.webp", "slug": "konferensi-pendidikan-islam-asia-tenggara"},
];
