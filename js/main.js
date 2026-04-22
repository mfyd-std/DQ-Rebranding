/* ═══════════════════════════════════════
   DAAR EL-QOLAM WEBSITE — Main JavaScript
   Handles: FAQ, Mega-menu, Mobile menu,
   Scroll effects, Animations
   ═══════════════════════════════════════ */

// ─── FAQ DATA (from faq_sanbar_2025.pdf) ───
const FAQ_DATA = [
  { q: "Apa Perbedaan Daar el-Qolam Pusat, 2, 3 dan 4?", a: "Daar el-Qolam Pusat merupakan kelas pembinaan, Daar el-Qolam 2 dan 4 adalah kelas unggulan sedangkan Daar el-Qolam 3 merupakan program bagi yang lulusan SMP/MTs Umum yang akan masuk ke jenjang SMA dengan masa belajar 3 tahun." },
  { q: "Bagaimana muatan kurikulum di Daar el-Qolam?", a: "Muatan kurikulum di Daar el-Qolam adalah integrasi antara kurikulum pesantren dengan kurikulum nasional (SMP, MTs, SMA & MA). Kami menyebutnya Kurikulum Madrasatul Muallimin al-Islamiyah (MMI), dan mata pelajaran di Daar el-Qolam Pusat, 2 dan 4 semuanya sama." },
  { q: "Bagaimana tahapan menjadi santri Pondok Pesantren Daar el-Qolam?", a: "1) Memperoleh Informasi. 2) Mengisi Formulir Pendaftaran Online. 3) Mengikuti Ujian/tes. 4) Calon santri dinyatakan lulus seleksi. 5) Melakukan daftar ulang. 6) Datang ke Pesantren sebagai Santri pada tahun ajaran baru." },
  { q: "Bagaimana cara melakukan pendaftaran?", a: "1) Buka browser, masukan link: daftar.daarelqolam.ac.id. 2) Isi identitas calon santri dan wali santri. 3) Melakukan pembayaran pendaftaran Rp. 400.000,- melalui virtual account (VA). 4) Mendapatkan informasi jadwal tes melalui pesan WA/email." },
  { q: "Apa saja materi yang diujikan saat tes seleksi masuk?", a: "1) Membaca al-Qur'an (Qira'ah al-Qur'an). 2) Menulis Arab dasar (Kitabah al-'Arabiyyah/Imla'). 3) Praktek Shalat. 4) Matematika. 5) Bahasa Inggris. 6) Wawancara singkat tentang minat dan motivasi." },
  { q: "Apa yang harus dibawa ketika ujian/tes masuk?", a: "1) Menggunakan pakaian rapi dan sopan. 2) Membawa alat tulis." },
  { q: "Berapa lamakah waktu tes? Dan kapan diumumkan kelulusannya?", a: "Proses Ujian Seleksi bergantung pada calon santri dan paling cepat 2 jam. Pengumuman kelulusan 2 hari setelah tanggal tes." },
  { q: "Kapan waktu mendaftar ulang dan kapan terakhir pembayarannya?", a: "Daftar ulang dapat dilakukan setelah dinyatakan lulus dan paling lambat 14 hari setelah dinyatakan lulus. Jika diperlukan, silakan berkonsultasi dengan keuangan terkait pelunasan." },
  { q: "Apakah pembayaran daftar ulang dapat dilakukan dengan transfer?", a: "Pembayaran Daftar Ulang dapat dilakukan dengan transfer ke No Rek. 7104663488 dan konfirmasi ke nomor 0851 7955 1968." },
  { q: "Bagaimana cara membeli perlengkapan santri?", a: "Pembelian perlengkapan yang dibeli di pesantren dapat menghubungi bagian keuangan." },
  { q: "Perlengkapan apa saja yang harus dimiliki santri?", a: "Daftar perlengkapan santri dapat dilihat pada informasi perlengkapan yang akan disosialisasikan melalui grup tes santri baru." },
  { q: "Apakah seragam sekolah disediakan di pesantren?", a: "Tidak, seragam sekolah dibuat oleh calon santri masing-masing sesuai dengan contoh seragam pesantren." },
  { q: "Jika sudah melunasi dan anak tidak jadi masuk, apakah uang bisa kembali?", a: "Ya, uang daftar ulang (selain uang pendaftaran) akan dikembalikan sebelum santri baru masuk asrama." },
  { q: "Apa saja persyaratan berkas administratif yang dibutuhkan?", a: "1) Printout formulir dari akun pendaftaran. 2) Surat keterangan sehat dari dokter. 3) Salinan akta kelahiran - 3 lembar. 4) Salinan kartu keluarga - 3 lembar. 5) Salinan KTP orang tua - 3 lembar. 6) Salinan ijazah/SKL yang telah dilegalisir - 3 lembar. Berkas dikumpulkan saat kedatangan santri baru." },
  { q: "Apakah Daar el-Qolam memiliki kerjasama dengan lembaga pendidikan tinggi?", a: "Ya, kami menjalin hubungan dengan Universitas Az-Zaitunah (Tunisia), Universitas Internasional Afrikijyah (Sudan), dan FDI UIN Jakarta." },
  { q: "Kapan saya dapat menjenguk anak saya?", a: "Menjenguk diperbolehkan setiap hari Jum'at, Sabtu atau Ahad sampai pukul 17:00. Disarankan pada hari Jum'at." },
  { q: "Bolehkah anak saya dibawa pulang?", a: "Boleh, dengan syarat dan ketentuan sesuai dengan buku pedoman regulasi perizinan santri." },
  { q: "Siapa yang dapat dihubungi untuk mengetahui kondisi anak di pesantren?", a: "Anda bisa menghubungi wali asrama dan/atau wali kelas, yang akan diketahui saat calon santri masuk asrama." },
  { q: "Bagaimana jika ingin berkunjung dan melihat langsung kondisi pesantren?", a: "Silakan datang langsung ke bagian sekretariat MMI Daar el-Qolam 1 pada jam kerja (08:00 - 16:00 WIB)." },
  { q: "Berapa iuran bulanan santri? Apa saja rinciannya?", a: "DQ 1 = Rp 1.360.000; DQ 2 = Rp 1.575.000; DQ 4 = Rp 1.475.000. Rincian: SPP, makan 3x sehari, asrama, kesehatan, laundry." },
  { q: "Apakah Daar el-Qolam menganut aliran tertentu?", a: "Daar el-Qolam berdiri di atas dan untuk semua golongan, dalam ibadah mengikuti Ahlussunnah wal Jama'ah." },
  { q: "Apakah boleh anak sampai kelas 3 SLTP saja dan dapat ijazah?", a: "Boleh sampai kelas 3 SLTP dan dapat ijazah Kemendiknas/Kemenag, namun program lengkap adalah 6 tahun. Berhenti sebelum 6 tahun tidak mendapatkan ijazah pesantren." },
  { q: "Apakah ada biaya lagi saat naik ke kelas 1 SLTA?", a: "Tidak ada, karena biaya awal untuk 6 tahun. Namun ada biaya kenaikan kelas berkisar Rp 1.000.000 - Rp 2.000.000 (daftar ulang, iuran organisasi, ekskul)." },
  { q: "Kenapa biaya iuran bulanan setiap Daar el-Qolam berbeda?", a: "Karena kebutuhan operasional, kegiatan pembelajaran, pemeliharaan dan pengembangan setiap unit berbeda." },
  { q: "Ijazah apa yang didapatkan santri ketika lulus?", a: "Ada 2: Ijazah pesantren dan Ijazah Nasional (MTs/MA untuk DQ 1 & 4, SMP/SMA untuk DQ 2)." }
];

// ─── RENDER FAQ SECTION ───
function renderFAQ() {
  var container = document.getElementById('faq-container');
  if (!container) return;

  var html = '';
  for (var i = 0; i < FAQ_DATA.length; i++) {
    var item = FAQ_DATA[i];
    html += '<div class="faq-item border-b border-dq-green/10 last:border-b-0">' +
      '<button class="faq-toggle w-full flex items-center justify-between py-5 px-6 text-left cursor-pointer group" aria-expanded="false">' +
        '<span class="font-semibold text-dq-charcoal text-sm lg:text-base pr-4 group-hover:text-dq-green transition-colors">' + item.q + '</span>' +
        '<span class="faq-icon flex-shrink-0 w-6 h-6 rounded-full bg-dq-green-lt text-dq-green flex items-center justify-center text-lg font-light">+</span>' +
      '</button>' +
      '<div class="faq-answer px-6">' +
        '<p class="text-sm text-dq-warm-gray leading-relaxed pb-5">' + item.a + '</p>' +
      '</div>' +
    '</div>';
  }
  container.innerHTML = html;
}

// ─── FAQ ACCORDION TOGGLE ───
function initFAQ() {
  document.addEventListener('click', function(e) {
    var toggle = e.target.closest('.faq-toggle');
    if (!toggle) return;

    var item = toggle.closest('.faq-item');
    var isActive = item.classList.contains('active');

    // Close all
    var allItems = document.querySelectorAll('.faq-item');
    for (var i = 0; i < allItems.length; i++) {
      allItems[i].classList.remove('active');
      allItems[i].querySelector('.faq-toggle').setAttribute('aria-expanded', 'false');
    }

    // Open clicked (if wasn't active)
    if (!isActive) {
      item.classList.add('active');
      toggle.setAttribute('aria-expanded', 'true');
    }
  });
}

// ─── NAVBAR SCROLL EFFECT ───
function initNavScroll() {
  var navbar = document.getElementById('navbar');
  var navBorder = document.getElementById('nav-border');
  if (!navbar) return;

  window.addEventListener('scroll', function() {
    if (window.scrollY > 20) {
      navbar.classList.add('shadow-md');
      if (navBorder) {
        navBorder.classList.remove('opacity-0');
        navBorder.classList.add('opacity-100');
      }
    } else {
      navbar.classList.remove('shadow-md');
      if (navBorder) {
        navBorder.classList.add('opacity-0');
        navBorder.classList.remove('opacity-100');
      }
    }
  });
}

// ─── MOBILE MENU TOGGLE ───
function initMobileMenu() {
  var hamburger = document.getElementById('hamburger-btn');
  var mobileMenu = document.getElementById('mobile-menu');
  var closeBtn = document.getElementById('mobile-close-btn');
  var overlay = document.getElementById('mobile-overlay');

  if (!hamburger || !mobileMenu) return;

  function openMenu() {
    mobileMenu.classList.add('open');
    if (overlay) overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu.classList.remove('open');
    if (overlay) overlay.classList.add('hidden');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (overlay) overlay.addEventListener('click', closeMenu);

  // Mobile submenu toggles
  var subToggles = mobileMenu.querySelectorAll('.mobile-sub-toggle');
  for (var i = 0; i < subToggles.length; i++) {
    subToggles[i].addEventListener('click', function() {
      var submenu = this.nextElementSibling;
      if (submenu) submenu.classList.toggle('open');
      this.querySelector('.mobile-arrow').classList.toggle('rotate-180');
    });
  }
}

// ─── SCROLL-REVEAL ───
function initScrollReveal() {
  var revealEls = document.querySelectorAll('.reveal');
  if (!revealEls.length) return;

  var observer = new IntersectionObserver(function(entries) {
    for (var i = 0; i < entries.length; i++) {
      if (entries[i].isIntersecting) {
        entries[i].target.classList.add('visible');
        observer.unobserve(entries[i].target);
      }
    }
  }, { threshold: 0.12 });

  for (var i = 0; i < revealEls.length; i++) {
    observer.observe(revealEls[i]);
  }
}

// ─── SMOOTH SCROLL FOR ANCHOR LINKS ───
function initSmoothScroll() {
  document.addEventListener('click', function(e) {
    var link = e.target.closest('a[href^="#"]');
    if (!link) return;

    var targetId = link.getAttribute('href');
    if (targetId === '#') return;

    var target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

// ─── INITIALIZE ───
document.addEventListener('DOMContentLoaded', function() {
  renderFAQ();
  initFAQ();
  initNavScroll();
  initMobileMenu();
  initScrollReveal();
  initSmoothScroll();
});
