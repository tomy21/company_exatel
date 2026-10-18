"use client";

import dynamic from "next/dynamic";
import { HeroData } from "@/types/compro";
import { ChevronRight, Globe } from "lucide-react";

const NetworkGlobe3D = dynamic(() => import("@/components/3d/NetworkGlobe3D"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-slate-950/20" />,
});

interface Props {
  data: HeroData;
}

export default function HeroSection({ data }: Props) {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 px-6 lg:px-12 overflow-hidden bg-[#0a0d14]">
      <NetworkGlobe3D />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 pointer-events-none">
        <div className="lg:col-span-7 space-y-6 pointer-events-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-purple-500/30 text-xs font-semibold text-cyan-400 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            {data.badge}
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            {data.title} <br />
            <span className="bg-linear-to-r from-sky-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {data.gradientTitle}
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed">
            {data.description}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#services"
              className="px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-linear-to-r from-purple-600 to-pink-600 shadow-lg shadow-purple-600/30 hover:scale-105 transition flex items-center gap-2"
            >
              <span>Jelajahi Layanan</span>
              <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="#about"
              className="px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/60 border border-slate-700 hover:bg-slate-800 transition backdrop-blur-md"
            >
              Pelajari Profile
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-800/80 max-w-lg">
            {data.stats.map((stat, idx) => (
              <div key={idx}>
                <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 hidden lg:block pointer-events-auto">
          <div className="bg-slate-900/65 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">
                  Visualisasi 3D Network
                </h3>
                <p className="text-xs text-slate-400">
                  Putar & interaksi dengan globe di layar
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/50 p-3.5 rounded-xl border border-slate-800">
              "Exatel menerapkan standar infrastruktur jaringan berkecepatan
              tinggi dengan sistem Open Access FTTH & DWDM Network 100G."[cite:
              7, 11]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
