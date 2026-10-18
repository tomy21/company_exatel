import { AdvantageItem } from "@/types/compro";
import { Network, Zap, ShieldCheck, Award, ArrowUpRight } from "lucide-react";

interface Props {
  items: AdvantageItem[];
}

const iconMap = {
  network: Network,
  zap: Zap,
  "shield-check": ShieldCheck,
  award: Award,
};

export default function AdvantagesSection({ items }: Props) {
  return (
    <section
      id="advantages"
      aria-labelledby="advantages-title"
      className="relative overflow-hidden border-t border-white/6 bg-[#080b12] px-6 py-24 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-purple-600/8 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-fuchsia-600/6 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl space-y-5 text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-purple-400/20 bg-purple-400/6 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(192,132,252,0.8)]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-purple-300 sm:text-xs">
              Why Exatel
            </span>
          </div>

          <h2
            id="advantages-title"
            className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Keunggulan yang
            <span className="mt-2 block bg-linear-to-r from-purple-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
              Menghubungkan Masa Depan
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Keandalan infrastruktur, teknologi modern, dan komitmen layanan
            menjadi fondasi Exatel dalam mendukung kebutuhan konektivitas bisnis
            yang terus berkembang.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => {
            const IconComponent =
              iconMap[item.icon as keyof typeof iconMap] || Network;

            return (
              <article
                key={item.id}
                className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/2.5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/30 hover:bg-white/4.5 hover:shadow-[0_16px_50px_rgba(147,51,234,0.10)] sm:p-7"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-purple-400/4 blur-3xl transition-all duration-300 group-hover:bg-purple-400/12" />

                <div className="relative mb-8 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-400/20 bg-linear-to-br from-purple-400/12 to-fuchsia-500/4 text-purple-300 transition-all duration-300 group-hover:border-purple-400/40 group-hover:shadow-[0_0_24px_rgba(192,132,252,0.12)]">
                    <IconComponent className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  <span className="text-3xl font-bold tracking-tight text-white/8 transition-colors duration-300 group-hover:text-purple-400/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="relative mb-3 text-lg font-bold leading-snug text-white transition-colors duration-300 group-hover:text-purple-300">
                  {item.title}
                </h3>

                <p className="relative min-h-20 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>

                <div className="relative mt-7 flex items-center justify-between border-t border-white/8 pt-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 transition-colors duration-300 group-hover:text-slate-300">
                    Exatel Advantage
                  </span>

                  <ArrowUpRight className="h-4 w-4 text-slate-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-purple-400" />
                </div>

                <div className="absolute inset-x-6 bottom-0 h-px bg-linear-to-r from-transparent via-purple-400/0 to-transparent transition-all duration-300 group-hover:via-purple-400/70" />
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex items-center justify-center gap-3">
          <div className="h-px w-10 bg-linear-to-r from-transparent to-purple-400/30" />
          <p className="text-center text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500 sm:text-xs">
            Built on Reliability. Driven by Innovation.
          </p>
          <div className="h-px w-10 bg-linear-to-l from-transparent to-purple-400/30" />
        </div>
      </div>
    </section>
  );
}
