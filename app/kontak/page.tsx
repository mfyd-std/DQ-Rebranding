import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ArrowRightIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { SectionHeading } from "@/components/SectionHeading";
import { registrationUrl } from "@/components/site-navigation";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Kontak Daar el-Qolam | Alamat, WhatsApp, dan Formulir",
  description:
    "Hubungi Pondok Pesantren Daar el-Qolam melalui alamat, telepon, WhatsApp, email, atau formulir kontak.",
};

const whatsappUrl = "https://wa.me/6281319789000";
const mapUrl = "https://maps.google.com/?q=Pondok+Pesantren+Daar+el-Qolam+Jayanti+Tangerang";
const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.021!2d106.5097!3d-6.2453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f9c03c5c0000%3A0x1234567890abcdef!2sPondok%20Pesantren%20Daar%20el-Qolam!5e0!3m2!1sid!2sid!4v1620000000000!5m2!1sid!2sid";

type ContactCardProps = {
  title: string;
  children: ReactNode;
  icon: ReactNode;
};

function ContactCard({ title, children, icon }: ContactCardProps) {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-dq-green/10 bg-white p-5 shadow-card">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-dq-green-light text-dq-green" aria-hidden="true">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="mb-1 text-sm font-semibold text-dq-charcoal">{title}</p>
        {children}
      </div>
    </div>
  );
}

function PinIcon() {
  return <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657 13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0Z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>;
}

function PhoneIcon() {
  return <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498A1 1 0 0 1 21 15.72V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5Z" /></svg>;
}

function MailIcon() {
  return <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m3 8 7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z" /></svg>;
}


export default function ContactPage() {
  return (
    <main className="overflow-hidden pt-16 lg:pt-20">
      <section className="arabesque-bg bg-dq-green px-6 py-16 text-center lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-dq-gold" />
            <span className="text-xs font-semibold uppercase tracking-wide text-dq-gold">Hubungi Kami</span>
          </div>
          <h1 className="font-serif text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
            Kami Siap <span className="italic text-dq-gold">Membantu Anda</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/80 lg:text-lg">
            Ada pertanyaan tentang pendaftaran, program, atau kehidupan pesantren? Tim kami siap menjawab.
          </p>
        </div>
      </section>

      <section className="bg-dq-ivory px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading eyebrow="Informasi Kontak" title="Cara Menghubungi" emphasis="Pesantren" />
            <div className="mt-8 space-y-5">
              <ContactCard title="Alamat" icon={<PinIcon />}>
                <p className="text-sm text-dq-warm-gray">Jl. Pesantren No. 1, Jayanti, Kabupaten Tangerang, Banten 15610</p>
                <a href={mapUrl} target="_blank" rel="noreferrer" className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-dq-green hover:text-dq-green-dark">Buka di Google Maps <ArrowRightIcon className="h-4 w-4 shrink-0" aria-hidden="true" focusable="false" /></a>
              </ContactCard>
              <ContactCard title="Telepon" icon={<PhoneIcon />}>
                <a href="tel:+622159576882" className="text-sm text-dq-warm-gray hover:text-dq-green">+62 21 5957 6882</a>
                <p className="mt-0.5 text-xs text-dq-warm-gray">Senin–Jumat, 08:00–16:00 WIB</p>
              </ContactCard>
              <ContactCard title="WhatsApp" icon={<WhatsAppIcon className="h-4 w-4" />}>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="text-sm text-dq-warm-gray hover:text-dq-green">+62 813-1978-9000</a>
                <p className="mt-0.5 text-xs text-dq-warm-gray">Respon cepat untuk pertanyaan pendaftaran</p>
              </ContactCard>
              <ContactCard title="Email" icon={<MailIcon />}>
                <a href="mailto:info@daarelqolam.ac.id" className="text-sm text-dq-warm-gray hover:text-dq-green">info@daarelqolam.ac.id</a>
              </ContactCard>
            </div>

            <div className="mt-8 rounded-2xl bg-dq-green p-6">
              <h2 className="mb-4 font-serif text-lg font-semibold text-white">Jam Kunjungan Santri</h2>
              <div className="space-y-2">
                <div className="flex flex-col gap-1 text-sm sm:flex-row sm:justify-between"><span className="text-white/80">Hari Kunjungan</span><span className="font-semibold text-white">Jum&apos;at, Sabtu, Ahad</span></div>
                <div className="flex flex-col gap-1 text-sm sm:flex-row sm:justify-between"><span className="text-white/80">Jam Kunjungan</span><span className="font-semibold text-white">07:00 – 17:00 WIB</span></div>
                <div className="flex flex-col gap-1 text-sm sm:flex-row sm:justify-between"><span className="text-white/80">Hari Terbaik</span><span className="font-semibold text-white">Jum&apos;at (direkomendasikan)</span></div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="bg-dq-ivory px-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-2xl shadow-card-lg">
            <iframe src={mapEmbedUrl} title="Peta Lokasi Pondok Pesantren Daar el-Qolam" className="h-[320px] w-full border-0 sm:h-[400px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          </div>
          <div className="mt-4 flex justify-center">
            <a href={mapUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-dq-green px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-dq-green-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dq-green-dark">
              <PinIcon />
              Buka di Google Maps
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 lg:px-8">
        <div className="arabesque-bg mx-auto flex max-w-7xl flex-col justify-between gap-6 rounded-2xl bg-dq-green p-8 text-white lg:flex-row lg:items-center lg:p-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-dq-gold">Tahun Pelajaran 2026/2027</p>
            <h2 className="mt-2 font-serif text-2xl font-semibold lg:text-3xl">Siap Mendaftarkan Putra-Putri Anda?</h2>
            <p className="mt-2 text-sm text-white/70">Daftar sekarang di <span className="font-semibold text-white">daftar.daarelqolam.ac.id</span> · Biaya pendaftaran Rp 400.000</p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <a href={registrationUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-dq-gold px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-yellow-600">Daftar Sekarang <PaperAirplaneIcon className="h-4 w-4 shrink-0" aria-hidden="true" focusable="false" /></a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border-2 border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/80"><WhatsAppIcon className="h-4 w-4 shrink-0" />Hubungi WhatsApp</a>
          </div>
        </div>
      </section>

    </main>
  );
}
