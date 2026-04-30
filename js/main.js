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
      navbar.classList.add('scrolled');
      if (navBorder) {
        navBorder.classList.remove('opacity-0');
        navBorder.classList.add('opacity-100');
      }
    } else {
      navbar.classList.remove('scrolled');
      if (navBorder) {
        navBorder.classList.add('opacity-0');
        navBorder.classList.remove('opacity-100');
      }
    }
  });
}

// ─── MOBILE MENU TOGGLE (full-screen, no submenu toggle) ───
function initMobileMenu() {
  var hamburger = document.getElementById('hamburger-btn');
  var mobileMenu = document.getElementById('mobile-menu');
  var closeBtn = document.getElementById('mobile-close-btn');

  if (!hamburger || !mobileMenu) return;

  function openMenu() {
    mobileMenu.classList.add('open');
    document.body.classList.add('menu-open');
  }

  function closeMenu() {
    mobileMenu.classList.remove('open');
    document.body.classList.remove('menu-open');
  }

  hamburger.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  // Close on internal link click
  var links = mobileMenu.querySelectorAll('a[href]');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(e) {
      var href = this.getAttribute('href') || '';
      if (href.indexOf('http') !== 0) closeMenu();
    });
  }

  // Close on Esc
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeMenu();
  });
}

// ─── STATS COUNTER (rolling animation) ───
function initStatsCounter() {
  var stats = document.querySelectorAll('[data-counter]');
  if (!stats.length) return;

  function animate(el) {
    var target = parseFloat(el.getAttribute('data-counter')) || 0;
    var suffix = el.getAttribute('data-suffix') || '';
    var duration = 1600;
    var start = performance.now();

    function step(now) {
      var p = Math.min((now - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      var current = Math.floor(target * eased);
      var display = current >= 1000 ? (current / 1000).toFixed(current >= 10000 ? 0 : 1).replace(/\.0$/, '') + 'K' : current.toString();
      el.textContent = display + suffix;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = (target >= 1000 ? (target/1000).toFixed(target >= 10000 ? 0 : 1).replace(/\.0$/, '') + 'K' : target) + suffix;
    }
    requestAnimationFrame(step);
  }

  var observer = new IntersectionObserver(function(entries) {
    for (var i = 0; i < entries.length; i++) {
      if (entries[i].isIntersecting) {
        animate(entries[i].target);
        observer.unobserve(entries[i].target);
      }
    }
  }, { threshold: 0.4 });

  for (var i = 0; i < stats.length; i++) observer.observe(stats[i]);
}

// ─── NEWS FILTER ───
function initNewsFilter() {
  var buttons = document.querySelectorAll('[data-news-filter]');
  var cards = document.querySelectorAll('[data-news-category]');
  if (!buttons.length || !cards.length) return;

  function setActive(btn) {
    for (var j = 0; j < buttons.length; j++) {
      buttons[j].classList.remove('active');
      buttons[j].classList.remove('bg-dq-green', 'text-white');
      buttons[j].classList.add('bg-white', 'text-dq-charcoal');
    }
    btn.classList.add('active');
    btn.classList.remove('bg-white', 'text-dq-charcoal');
    btn.classList.add('bg-dq-green', 'text-white');
  }

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
      var filter = this.getAttribute('data-news-filter');
      setActive(this);
      for (var k = 0; k < cards.length; k++) {
        var cat = cards[k].getAttribute('data-news-category');
        cards[k].style.display = (filter === 'all' || cat === filter) ? '' : 'none';
      }
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

// ─── HERO TEXT ROTATOR ───
function initTextRotator() {
  var rotator = document.querySelector('.text-rotator');
  if (!rotator) return;
  var words = rotator.querySelectorAll('.rt-word');
  if (!words.length) return;
  var spacer = rotator.querySelector('.rt-spacer');
  var idx = 0;

  function setSpacer() {
    if (spacer) spacer.textContent = words[idx].textContent;
  }

  // Start: first word visible
  words[0].classList.add('active');
  setSpacer();

  setInterval(function() {
    var current = words[idx];
    var nextIdx = (idx + 1) % words.length;
    var next = words[nextIdx];

    current.classList.remove('active');
    current.classList.add('exit-up');

    next.classList.remove('exit-up');
    // Force reflow so transition replays
    void next.offsetWidth;
    next.classList.add('active');

    idx = nextIdx;
    setSpacer();

    setTimeout(function() {
      current.classList.remove('exit-up');
    }, 800);
  }, 2000);
}

// ─── LIGHTBOX MODAL (click-to-zoom) ───
function initLightbox() {
  var triggers = document.querySelectorAll('[data-lightbox]');
  if (!triggers.length) return;

  var lightbox = document.getElementById('lightbox');
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.className = 'lightbox';
    lightbox.innerHTML =
      '<button class="lightbox-close" aria-label="Tutup">' +
      '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/></svg>' +
      '</button>' +
      '<img class="lightbox-img" alt=""/>';
    document.body.appendChild(lightbox);
  }
  var imgEl = lightbox.querySelector('.lightbox-img');
  var closeBtn = lightbox.querySelector('.lightbox-close');

  function open(src, alt) {
    imgEl.src = src;
    imgEl.alt = alt || '';
    lightbox.classList.add('open');
    document.body.classList.add('menu-open');
  }
  function close() {
    lightbox.classList.remove('open');
    document.body.classList.remove('menu-open');
  }

  for (var i = 0; i < triggers.length; i++) {
    (function(t) {
      t.addEventListener('click', function(e) {
        e.preventDefault();
        var img = t.tagName === 'IMG' ? t : t.querySelector('img');
        var src = t.getAttribute('data-lightbox-src') || (img && img.src);
        var alt = t.getAttribute('data-lightbox-alt') || (img && img.alt) || '';
        if (src) open(src, alt);
      });
    })(triggers[i]);
  }

  closeBtn.addEventListener('click', close);
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) close();
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lightbox.classList.contains('open')) close();
  });
}

// ─── DARK MODE TOGGLE ───
function initThemeToggle() {
  var html = document.documentElement;
  var saved = null;
  try { saved = localStorage.getItem('dq-theme'); } catch (e) {}
  var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (saved === 'dark' || (!saved && prefersDark)) html.classList.add('dark');

  var btns = document.querySelectorAll('[data-theme-toggle]');
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
      html.classList.toggle('dark');
      try { localStorage.setItem('dq-theme', html.classList.contains('dark') ? 'dark' : 'light'); } catch (e) {}
    });
  }
}

// ─── INITIALIZE ───
document.addEventListener('DOMContentLoaded', function() {
  renderFAQ();
  initFAQ();
  initNavScroll();
  initMobileMenu();
  initScrollReveal();
  initSmoothScroll();
  initStatsCounter();
  initNewsFilter();
  initTextRotator();
  initLightbox();
  initThemeToggle();
});
