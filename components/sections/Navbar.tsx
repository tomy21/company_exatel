"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "Tentang Kami", href: "#about" },
  { label: "Keunggulan", href: "#advantages" },
  { label: "Layanan & Solusi", href: "#services" },
  { label: "Cakupan Area", href: "#coverage" },
  { label: "Mitra", href: "#partners" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-[#0b0e17]/90 px-5 py-3 backdrop-blur-xl sm:px-6 lg:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <a
          href="#"
          aria-label="EXATEL Telecom - Beranda"
          className="flex h-16 w-16 items-center rounded-xl bg-white px-2 py-2"
        >
          <Image
            src="/exatel-logo.png"
            alt="EXATEL Telecom"
            width={300}
            height={300}
            className="h-full w-full object-contain"
          />
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 lg:flex xl:gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap transition-colors hover:text-purple-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-linear-to-r from-purple-600 to-pink-600 px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-purple-900/30 transition hover:opacity-90 sm:inline-flex lg:px-5"
          >
            <span>Hubungi Kami</span>
            <ArrowRight className="h-4 w-4" />
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/4 text-white transition hover:border-purple-400/40 hover:bg-purple-500/10 lg:hidden"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Navigasi mobile"
          className="absolute inset-x-0 top-full border-b border-white/8 bg-[#0b0e17]/98 px-5 py-4 shadow-2xl shadow-black/30 backdrop-blur-xl sm:px-6 lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition-colors hover:bg-purple-500/10 hover:text-purple-300"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-purple-600 to-pink-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-purple-900/30 transition hover:opacity-90"
            >
              Hubungi Kami
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
