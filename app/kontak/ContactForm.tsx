"use client";

import type { FormEvent } from "react";

const whatsappNumber = "6281319789000";

export function ContactForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const nama = String(formData.get("nama") ?? "");
    const hp = String(formData.get("hp") ?? "");
    const topik = String(formData.get("topik") ?? "");
    const pesan = String(formData.get("pesan") ?? "");
    const message = encodeURIComponent(
      `Halo, saya ${nama} ingin bertanya mengenai ${topik}.\n\n${pesan}\n\nNomor HP: ${hp}`,
    );

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="rounded-2xl border border-dq-green/10 bg-white p-6 shadow-card-lg sm:p-8">
      <h2 className="font-serif text-2xl font-semibold text-dq-charcoal">Kirim Pesan</h2>
      <p className="mt-2 text-sm leading-relaxed text-dq-warm-gray">
        Isi formulir di bawah. Setelah dikirim, WhatsApp akan terbuka dengan pesan yang sudah disiapkan untuk tim kami.
      </p>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="nama" className="mb-1.5 block text-xs font-semibold text-dq-charcoal">Nama Lengkap *</label>
            <input id="nama" name="nama" type="text" required placeholder="Nama Anda" className="min-h-11 w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-dq-charcoal outline-none transition-colors placeholder:text-dq-warm-gray/70 focus:border-dq-green focus:ring-1 focus:ring-dq-green" />
          </div>
          <div>
            <label htmlFor="hp" className="mb-1.5 block text-xs font-semibold text-dq-charcoal">Nomor HP / WA *</label>
            <input id="hp" name="hp" type="tel" required placeholder="08xx-xxxx-xxxx" className="min-h-11 w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-dq-charcoal outline-none transition-colors placeholder:text-dq-warm-gray/70 focus:border-dq-green focus:ring-1 focus:ring-dq-green" />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-dq-charcoal">Email</label>
          <input id="email" name="email" type="email" placeholder="email@example.com" className="min-h-11 w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-dq-charcoal outline-none transition-colors placeholder:text-dq-warm-gray/70 focus:border-dq-green focus:ring-1 focus:ring-dq-green" />
        </div>
        <div>
          <label htmlFor="topik" className="mb-1.5 block text-xs font-semibold text-dq-charcoal">Topik Pertanyaan *</label>
          <select id="topik" name="topik" required defaultValue="" className="min-h-11 w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-dq-charcoal outline-none transition-colors focus:border-dq-green focus:ring-1 focus:ring-dq-green">
            <option value="" disabled>Pilih topik...</option>
            <option value="pendaftaran">Pendaftaran &amp; Seleksi</option>
            <option value="biaya">Biaya &amp; Pembayaran</option>
            <option value="program">Info Program Pendidikan</option>
            <option value="kunjungan">Rencana Kunjungan</option>
            <option value="lainnya">Lainnya</option>
          </select>
        </div>
        <div>
          <label htmlFor="pesan" className="mb-1.5 block text-xs font-semibold text-dq-charcoal">Pesan *</label>
          <textarea id="pesan" name="pesan" required rows={5} placeholder="Tuliskan pertanyaan atau pesan Anda..." className="w-full resize-y rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-dq-charcoal outline-none transition-colors placeholder:text-dq-warm-gray/70 focus:border-dq-green focus:ring-1 focus:ring-dq-green" />
        </div>
        <button type="submit" className="min-h-11 w-full rounded-lg bg-dq-green px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-dq-green-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dq-green-dark">Kirim Pesan</button>
      </form>
      <p className="mt-4 text-center text-xs text-dq-warm-gray">
        Atau langsung hubungi via <a href="https://wa.me/6281319789000" target="_blank" rel="noreferrer" className="font-semibold text-dq-green hover:text-dq-green-dark">WhatsApp</a> untuk respon lebih cepat.
      </p>
    </div>
  );
}
