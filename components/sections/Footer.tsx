import Image from "next/image";
import { PhoneCall } from "lucide-react";

const navLinks = {
  services: [
    "FTTH Open Access",
    "Metro Ethernet",
    "Internet Dedicated",
    "Broadband Bisnis",
  ],
  company: [
    { label: "Tentang Kami", href: "#about" },
    { label: "Visi & Misi", href: "#about" },
    { label: "Coverage Area", href: "#coverage" },
    { label: "Mitra Kerja", href: "#partners" },
  ],
};

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer
      id="contact"
      className="border-t border-white/8 bg-[#080b12] px-6 pb-12 pt-16 sm:px-8 lg:px-12"
    >
      <div className="mx-auto mb-12 grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
        <div className="space-y-5 lg:col-span-2">
          <a
            href="#"
            aria-label="EXATEL Telecom - Beranda"
            className="flex h-24 w-24 items-center rounded-xl bg-white px-2 py-2"
          >
            <Image
              src="/exatel-logo.png"
              alt="EXATEL Telecom"
              width={300}
              height={300}
              className="h-full w-full object-contain"
            />
          </a>

          <p className="max-w-sm text-xs leading-7 text-slate-400">
            PT. ELEMEN JARINGAN NUSANTARA (EXATEL).
            <br />
            Penyedia infrastruktur fiber optic, internet dedicated, dan solusi
            IT Managed Service terpercaya di Indonesia.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold text-white">Layanan</h4>
          <ul className="space-y-3 text-xs text-slate-400">
            {navLinks.services.map((service) => (
              <li key={service}>
                <a
                  href="#services"
                  className="transition-colors hover:text-purple-300"
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold text-white">Perusahaan</h4>
          <ul className="space-y-3 text-xs text-slate-400">
            {navLinks.company.map((link) => (
              <li key={link.href + link.label}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-purple-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold text-white">Dukungan</h4>
          <p className="mb-3 text-xs leading-6 text-slate-400">
            Helpdesk & Customer Care 24/7
          </p>

          <div className="inline-flex items-center gap-2 rounded-lg border border-purple-400/20 bg-purple-500/8 px-3 py-2 text-xs font-bold text-purple-300">
            <PhoneCall className="h-3.5 w-3.5" />
            Support 24x7 Active
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/6 pt-8 text-center text-xs text-slate-500 sm:flex-row sm:text-left">
        <p>
          &copy; {currentYear} PT. Elemen Jaringan Nusantara (EXATEL). All
          rights reserved.
        </p>
        <p>Digital Connectivity Infrastructure</p>
      </div>
    </footer>
  );
}
