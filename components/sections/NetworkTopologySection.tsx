"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Building2,
  Check,
  ChevronLeft,
  ChevronRight,
  Globe2,
  Maximize2,
  Network,
  Router,
  Server,
  X,
} from "lucide-react";

const topologies = [
  {
    id: "fiber",
    number: "01",
    title: "Exatel Fiber Network",
    subtitle: "FTTH, Metro Ethernet & DWDM",
    description:
      "Infrastruktur fiber optic yang menghubungkan jaringan FTTH Open Access, gedung, ISP partner, data center, dan pelanggan korporat melalui jaringan distribusi Metro Ethernet dan DWDM.",
    image: "/images/exatel-fiber-network.png",
    alt: "Diagram asli Exatel Fiber Network dari company profile",
  },
  {
    id: "global",
    number: "02",
    title: "Exatel Global Internet",
    subtitle: "POP, IIX, NAP & Global Peering",
    description:
      "Ilustrasi konektivitas Exatel ke ekosistem internet Indonesia dan global melalui POP, local exchange, internet exchange, NAP, dan upstream provider yang ditampilkan dalam company profile.",
    image: "/images/exatel-global-internet.png",
    alt: "Diagram asli Exatel Global Internet dari company profile",
  },
  {
    id: "ftth",
    number: "03",
    title: "FTTH Open Access",
    subtitle: "From OLT to End User",
    description:
      "Alur konseptual Fiber to the Home yang memperlihatkan hubungan OLT, jaringan distribusi optik, ODP, ONT, serta ISP sebagai penyedia layanan internet kepada pengguna akhir.",
    image: null,
    alt: "Ilustrasi konseptual jaringan FTTH Open Access",
  },
] as const;

function FTTHDiagram() {
  const [activeNode, setActiveNode] = useState("odn");

  const nodes = [
    {
      id: "olt",
      title: "GPON OLT",
      subtitle: "Network Core",
      description:
        "Optical Line Terminal berada di sisi pusat jaringan dan menjadi titik awal akses FTTH.",
      icon: Server,
    },
    {
      id: "odn",
      title: "ODN / ODP",
      subtitle: "Fiber Distribution",
      description:
        "Optical Distribution Network mendistribusikan sinyal optik dari OLT menuju area pelanggan melalui jaringan fiber dan titik distribusi.",
      icon: Network,
    },
    {
      id: "ont",
      title: "ONT / CPE",
      subtitle: "Customer Premises",
      description:
        "Optical Network Terminal berada di lokasi pelanggan dan menjadi titik terminasi koneksi optik.",
      icon: Router,
    },
    {
      id: "isp",
      title: "ISP Partner",
      subtitle: "Internet Service",
      description:
        "ISP atau reseller resmi menyediakan layanan internet kepada pengguna akhir melalui infrastruktur akses Exatel.",
      icon: Globe2,
    },
  ];

  const selected = nodes.find((node) => node.id === activeNode) ?? nodes[1];
  const SelectedIcon = selected.icon;

  return (
    <div className="grid gap-6 xl:grid-cols-[1fr_280px]">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#090d17] p-4 sm:p-8">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(rgba(168,85,247,0.24) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative mx-auto max-w-4xl">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {nodes.map((node, index) => {
              const Icon = node.icon;
              const active = activeNode === node.id;

              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => setActiveNode(node.id)}
                  aria-pressed={active}
                  className={`flex min-h-32 flex-col items-center justify-center rounded-2xl border p-3 text-center transition-all duration-300 sm:min-h-36 ${
                    active
                      ? "border-purple-400/60 bg-purple-500/15 shadow-[0_0_30px_rgba(168,85,247,0.12)]"
                      : "border-white/10 bg-white/2.5 hover:border-purple-400/30"
                  }`}
                >
                  <div
                    className={`mb-3 flex h-11 w-11 items-center justify-center rounded-xl border ${
                      active
                        ? "border-purple-400/40 bg-purple-500/15 text-purple-300"
                        : "border-white/10 bg-white/4 text-slate-400"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-bold text-white sm:text-sm">
                    {node.title}
                  </span>
                  <span className="mt-1 text-[10px] text-slate-500">
                    {node.subtitle}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="my-5 flex items-center justify-center gap-2 text-purple-300 sm:my-7">
            <div className="h-px flex-1 bg-linear-to-r from-transparent via-purple-400/50 to-purple-400/50" />
            <ArrowDown className="h-4 w-4" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">
              Access Network Flow
            </span>
            <ArrowDown className="h-4 w-4" />
            <div className="h-px flex-1 bg-linear-to-l from-transparent via-purple-400/50 to-purple-400/50" />
          </div>

          <svg
            viewBox="0 0 640 130"
            role="img"
            aria-label="Ilustrasi jalur fiber optik dari pusat jaringan menuju area pelanggan"
            className="w-full"
          >
            <defs>
              <linearGradient id="ftth-line" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="50%" stopColor="#d946ef" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
            <path
              d="M80 15 V55 H220 V90 H420 V55 H560 V15"
              fill="none"
              stroke="url(#ftth-line)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="7 6"
            />
            <path
              d="M80 15 V55 H220 V90 H420 V55 H560 V15"
              fill="none"
              stroke="#d8b4fe"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.6"
            />
            {[80, 220, 420, 560].map((x) => (
              <circle
                key={x}
                cx={x}
                cy={x === 80 || x === 560 ? 15 : x === 220 ? 55 : 90}
                r="5"
                fill="#c084fc"
                stroke="#080b12"
                strokeWidth="2"
              />
            ))}
            <text
              x="80"
              y="118"
              fill="#94a3b8"
              fontSize="11"
              textAnchor="middle"
            >
              OLT
            </text>
            <text
              x="220"
              y="118"
              fill="#94a3b8"
              fontSize="11"
              textAnchor="middle"
            >
              Distribution
            </text>
            <text
              x="420"
              y="118"
              fill="#94a3b8"
              fontSize="11"
              textAnchor="middle"
            >
              ODP
            </text>
            <text
              x="560"
              y="118"
              fill="#94a3b8"
              fontSize="11"
              textAnchor="middle"
            >
              ONT
            </text>
          </svg>

          <p className="mt-4 text-center text-xs leading-6 text-slate-500">
            Conceptual access flow. Jalur aktual bergantung pada desain dan
            implementasi jaringan di setiap lokasi.
          </p>
        </div>
      </div>

      <aside className="flex flex-col rounded-2xl border border-purple-400/20 bg-linear-to-br from-purple-500/10 to-white/2 p-6">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-300">
          Network Component
        </span>
        <div className="mb-5 mt-6 flex h-12 w-12 items-center justify-center rounded-xl border border-purple-400/25 bg-purple-500/10 text-purple-300">
          <SelectedIcon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold text-white">{selected.title}</h3>
        <p className="mt-2 text-xs text-purple-300">{selected.subtitle}</p>
        <p className="mt-5 text-sm leading-7 text-slate-400">
          {selected.description}
        </p>
        <div className="mt-auto flex items-center gap-2 pt-8 text-xs text-slate-500">
          <Check className="h-4 w-4 text-purple-400" />
          Select a component to explore
        </div>
      </aside>
    </div>
  );
}

export default function NetworkTopologySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const active = topologies[activeIndex];

  function changeTab(index: number) {
    setActiveIndex((index + topologies.length) % topologies.length);
  }

  return (
    <section
      id="topology"
      aria-labelledby="topology-title"
      className="relative overflow-hidden border-t border-white/8 bg-[#080b12] px-5 py-24 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-pink-600/[0.07] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex items-center gap-3 rounded-full border border-purple-400/20 bg-purple-500/8 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-purple-300 sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
            Network Infrastructure
          </span>

          <h2
            id="topology-title"
            className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Explore the
            <span className="mt-2 block bg-linear-to-r from-purple-300 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
              EXATEL Network
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-slate-400 sm:text-base">
            Mengenal arsitektur jaringan fiber optic dan konektivitas internet
            Exatel melalui diagram company profile.
          </p>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {topologies.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => changeTab(index)}
              aria-pressed={activeIndex === index}
              className={`rounded-2xl border p-4 text-left transition-all duration-300 sm:p-5 ${
                activeIndex === index
                  ? "border-purple-400/40 bg-purple-500/10"
                  : "border-white/8 bg-white/2 hover:border-purple-400/25"
              }`}
            >
              <span
                className={`text-[10px] font-bold tracking-[0.18em] ${
                  activeIndex === index ? "text-purple-300" : "text-slate-500"
                }`}
              >
                TOPOLOGY {item.number}
              </span>
              <span className="mt-2 block text-sm font-bold text-white sm:text-base">
                {item.title}
              </span>
              <span className="mt-1 block text-xs text-slate-500">
                {item.subtitle}
              </span>
            </button>
          ))}
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0b0f19] shadow-2xl shadow-black/20">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/8 px-5 py-4 sm:px-7">
            <div>
              <p className="text-sm font-bold text-white">{active.title}</p>
              <p className="mt-1 text-xs text-slate-500">{active.subtitle}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => changeTab(activeIndex - 1)}
                aria-label="Topologi sebelumnya"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition hover:border-purple-400/40 hover:text-purple-300"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="min-w-12 text-center text-xs text-slate-500">
                {String(activeIndex + 1).padStart(2, "0")} / 03
              </span>
              <button
                type="button"
                onClick={() => changeTab(activeIndex + 1)}
                aria-label="Topologi berikutnya"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition hover:border-purple-400/40 hover:text-purple-300"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="p-3 sm:p-6 lg:p-8">
            {active.image ? (
              <button
                type="button"
                onClick={() => setIsZoomed(true)}
                aria-label={`Perbesar diagram ${active.title}`}
                className="group relative block w-full overflow-hidden rounded-xl bg-white text-left"
              >
                <Image
                  src={active.image}
                  alt={active.alt}
                  width={1188}
                  height={893}
                  priority={activeIndex < 2}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className="h-auto max-h-[70vh] w-full object-contain transition duration-500 group-hover:scale-[1.01]"
                />
                <span className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-lg border border-white/20 bg-[#080b12]/90 px-3 py-2 text-xs font-semibold text-white backdrop-blur-md">
                  <Maximize2 className="h-4 w-4" />
                  Perbesar diagram
                </span>
              </button>
            ) : (
              <FTTHDiagram />
            )}
          </div>

          <div className="border-t border-white/8 px-5 py-5 sm:px-7">
            <p className="text-sm leading-7 text-slate-400">
              {active.description}
            </p>
            <div className="mt-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
              {active.image ? (
                <>
                  <Maximize2 className="h-3.5 w-3.5 text-purple-300" />
                  Original company profile diagram
                </>
              ) : (
                <>
                  <Network className="h-3.5 w-3.5 text-purple-300" />
                  Conceptual FTTH illustration
                </>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/8 bg-white/2 p-5 sm:flex-row sm:p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-500/8 text-purple-300">
              <Building2 className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">
                Need a network solution?
              </h3>
              <p className="mt-1 text-xs leading-6 text-slate-400">
                Diskusikan kebutuhan konektivitas bisnis bersama EXATEL.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-linear-to-r from-purple-600 to-pink-600 px-5 py-3 text-xs font-bold text-white transition hover:opacity-90"
          >
            Contact Us
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {isZoomed && active.image && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-[#05060b]/95 p-3 backdrop-blur-xl sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`Diagram ${active.title}`}
          onClick={() => setIsZoomed(false)}
        >
          <button
            type="button"
            onClick={() => setIsZoomed(false)}
            aria-label="Tutup diagram"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white transition hover:bg-white/15"
          >
            <X className="h-5 w-5" />
          </button>
          <div
            className="relative max-h-full w-full max-w-7xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={active.image}
              alt={active.alt}
              width={1188}
              height={893}
              sizes="100vw"
              className="mx-auto max-h-[90vh] w-full object-contain"
            />
            <p className="mt-3 text-center text-xs text-slate-400">
              {active.title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
