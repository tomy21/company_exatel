"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  Mail,
  MapPin,
  MessageSquare,
  Network,
  Phone,
  Send,
  ShieldCheck,
  Wifi,
} from "lucide-react";

const services = [
  "FTTH Open Access",
  "Local Loop / Metro Ethernet",
  "Internet Dedicated",
  "Broadband Bisnis",
  "Managed Service",
  "Lainnya",
];

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFeedback("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

    if (!email) {
      setFeedback(
        "Formulir siap digunakan. Konfigurasikan NEXT_PUBLIC_CONTACT_EMAIL untuk mengaktifkan pengiriman email.",
      );
      return;
    }

    setIsSubmitting(true);

    const name = String(formData.get("name") ?? "");
    const company = String(formData.get("company") ?? "");
    const senderEmail = String(formData.get("email") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const service = String(formData.get("service") ?? "");
    const message = String(formData.get("message") ?? "");

    const subject = encodeURIComponent(
      `Business Inquiry - ${service} - ${company}`,
    );

    const body = encodeURIComponent(
      `Nama: ${name}\nPerusahaan: ${company}\nEmail: ${senderEmail}\nTelepon: ${phone}\nLayanan: ${service}\n\nPesan:\n${message}`,
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;

    setFeedback(
      "Aplikasi email sedang dibuka. Silakan periksa dan kirim pesan dari aplikasi email kamu.",
    );
    setIsSubmitting(false);
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative isolate overflow-hidden border-t border-white/8 bg-[#080b12] px-5 py-24 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full bg-purple-600/12 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-pink-600/8 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-purple-400/20 bg-purple-500/8 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.8)]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-purple-300 sm:text-xs">
              Let&apos;s Connect
            </span>
          </div>

          <h2
            id="contact-title"
            className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Let&apos;s Build Your
            <span className="mt-2 block bg-linear-to-r from-purple-300 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
              Connectivity Together.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-400 sm:text-base">
            Diskusikan kebutuhan infrastruktur fiber optic, konektivitas
            internet, dan solusi IT perusahaan kamu bersama tim EXATEL.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <div className="flex flex-col gap-5">
            <div className="relative overflow-hidden rounded-3xl border border-purple-400/20 bg-linear-to-br from-purple-500/12 via-[#10111d] to-[#0b0e17] p-7 sm:p-8">
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-fuchsia-500/10 blur-3xl" />

              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-400/25 bg-purple-500/10 text-purple-300">
                  <Network className="h-7 w-7" />
                </div>

                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-300">
                  EXATEL Telecom
                </p>

                <h3 className="mt-3 text-2xl font-bold leading-snug text-white">
                  Your Network.
                  <br />
                  Our Expertise.
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  Infrastruktur yang andal untuk mendukung pertumbuhan bisnis
                  dan konektivitas digital.
                </p>
              </div>

              <div className="mt-8 space-y-4 border-t border-white/8 pt-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/4 text-purple-300">
                    <Wifi className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Network & Connectivity
                    </p>
                    <p className="mt-1 text-xs leading-6 text-slate-400">
                      FTTH Open Access, Metro Ethernet, dan internet dedicated.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/4 text-purple-300">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Managed IT Services
                    </p>
                    <p className="mt-1 text-xs leading-6 text-slate-400">
                      Dukungan pengelolaan infrastruktur dan jaringan bisnis.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/8 bg-white/2.5 p-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                Contact Information
              </p>

              <div className="mt-5 space-y-4">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <Mail className="h-4 w-4 shrink-0 text-purple-300" />
                  <span>Business inquiry via contact form</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <MessageSquare className="h-4 w-4 shrink-0 text-purple-300" />
                  <span>Corporate & partnership inquiries</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <MapPin className="h-4 w-4 shrink-0 text-purple-300" />
                  <span>PT. Elemen Jaringan Nusantara</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/8 bg-white/2.5 p-5 shadow-2xl shadow-black/10 sm:p-8 lg:p-10">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                Tell Us About Your Project
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Isi detail berikut agar tim kami memahami kebutuhan kamu.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-xs font-semibold text-slate-300"
                  >
                    Nama Lengkap *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Nama kamu"
                    required
                    maxLength={100}
                    className="w-full rounded-xl border border-white/10 bg-[#090c14] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-purple-400/60 focus:ring-2 focus:ring-purple-500/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-company"
                    className="mb-2 block text-xs font-semibold text-slate-300"
                  >
                    Nama Perusahaan *
                  </label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    placeholder="Nama perusahaan"
                    required
                    maxLength={150}
                    className="w-full rounded-xl border border-white/10 bg-[#090c14] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-purple-400/60 focus:ring-2 focus:ring-purple-500/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-xs font-semibold text-slate-300"
                  >
                    Email Bisnis *
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="nama@perusahaan.com"
                    required
                    maxLength={254}
                    className="w-full rounded-xl border border-white/10 bg-[#090c14] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-purple-400/60 focus:ring-2 focus:ring-purple-500/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="mb-2 block text-xs font-semibold text-slate-300"
                  >
                    Nomor Telepon
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+62 ..."
                    maxLength={30}
                    className="w-full rounded-xl border border-white/10 bg-[#090c14] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-purple-400/60 focus:ring-2 focus:ring-purple-500/10"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-service"
                  className="mb-2 block text-xs font-semibold text-slate-300"
                >
                  Layanan yang Dibutuhkan *
                </label>
                <select
                  id="contact-service"
                  name="service"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-white/10 bg-[#090c14] px-4 py-3.5 text-sm text-slate-300 outline-none transition focus:border-purple-400/60 focus:ring-2 focus:ring-purple-500/10"
                >
                  <option value="" disabled>
                    Pilih layanan
                  </option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-xs font-semibold text-slate-300"
                >
                  Detail Kebutuhan *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Ceritakan kebutuhan jaringan, lokasi, kapasitas bandwidth, atau rencana kerja sama kamu..."
                  required
                  maxLength={5000}
                  className="w-full resize-y rounded-xl border border-white/10 bg-[#090c14] px-4 py-3.5 text-sm leading-6 text-white outline-none transition placeholder:text-slate-600 focus:border-purple-400/60 focus:ring-2 focus:ring-purple-500/10"
                />
              </div>

              {feedback && (
                <p
                  role="status"
                  aria-live="polite"
                  className="rounded-xl border border-purple-400/20 bg-purple-500/8 p-4 text-xs leading-6 text-purple-200"
                >
                  {feedback}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-linear-to-r from-purple-600 via-fuchsia-600 to-pink-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-purple-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-900/30 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {isSubmitting ? "Memproses..." : "Kirim Pesan"}
                <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                <ArrowRight className="h-4 w-4" />
              </button>

              <p className="text-xs leading-6 text-slate-500">
                Dengan mengirim formulir, kamu menyampaikan permintaan informasi
                bisnis kepada EXATEL.
              </p>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3 text-center">
          <div className="h-px w-8 bg-linear-to-r from-transparent to-purple-400/40" />
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500 sm:text-xs">
            Connecting The Unconnected
          </p>
          <div className="h-px w-8 bg-linear-to-l from-transparent to-purple-400/40" />
        </div>
      </div>
    </section>
  );
}
