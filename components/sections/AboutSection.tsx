import { AboutData } from "@/types/compro";
import { Eye, Target, CheckCircle2, ArrowUpRight } from "lucide-react";

interface Props {
  data: AboutData;
}

export default function AboutSection({ data }: Props) {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative overflow-hidden border-t border-white/6 bg-[#080b12] px-6 py-24 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-purple-600/8 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-fuchsia-600/6 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-purple-400/20 bg-purple-400/6 px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(192,132,252,0.8)]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-purple-300 sm:text-xs">
                {data.badge}
              </span>
            </div>

            <div className="space-y-6">
              <h2
                id="about-title"
                className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
              >
                {data.title}
              </h2>

              <div className="h-1 w-20 rounded-full bg-linear-to-r from-purple-400 via-fuchsia-400 to-pink-500" />

              <p className="max-w-2xl text-sm leading-8 text-slate-300 sm:text-base">
                {data.description1}
              </p>

              <p className="max-w-2xl text-sm leading-8 text-slate-400 sm:text-base">
                {data.description2}
              </p>
            </div>

            <div className="border-t border-white/8 pt-7">
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500 sm:text-xs">
                Part of Our Corporate Group
              </p>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {data.corporateGroup.map((group) => (
                  <div
                    key={group}
                    className="group flex min-h-16 items-center justify-between gap-3 rounded-xl border border-white/8 bg-white/2.5 px-4 py-3 transition-all duration-300 hover:border-purple-400/30 hover:bg-purple-400/4"
                  >
                    <span className="text-xs font-semibold leading-relaxed tracking-wide text-slate-200 transition-colors group-hover:text-purple-300 sm:text-sm">
                      {group}
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-purple-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative space-y-5">
            <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-linear-to-br from-purple-500/[0.07] via-transparent to-fuchsia-500/[0.07] blur-2xl" />

            <article className="group relative overflow-hidden rounded-2xl border border-purple-400/20 bg-linear-to-br from-purple-400/8 to-white/1.5 p-6 transition-all duration-300 hover:border-purple-400/40 hover:shadow-[0_16px_50px_rgba(147,51,234,0.10)] sm:p-8">
              <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-purple-400/6 blur-3xl transition-all group-hover:bg-purple-400/12" />

              <div className="relative">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-400/8">
                    <Eye className="h-5 w-5 text-purple-300" />
                  </div>
                  <span className="text-xs font-bold tracking-[0.2em] text-purple-400/70">
                    01 / VISION
                  </span>
                </div>

                <h3 className="mb-4 text-xl font-bold text-white sm:text-2xl">
                  Visi Kami
                </h3>

                <p className="text-sm leading-8 text-slate-300 sm:text-base">
                  {data.vision}
                </p>
              </div>
            </article>

            <article className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/2.5 p-6 transition-all duration-300 hover:border-fuchsia-400/30 hover:bg-white/4 sm:p-8">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-fuchsia-400/20 bg-fuchsia-400/8">
                  <Target className="h-5 w-5 text-fuchsia-300" />
                </div>
                <span className="text-xs font-bold tracking-[0.2em] text-slate-500">
                  02 / MISSION
                </span>
              </div>

              <h3 className="mb-6 text-xl font-bold text-white sm:text-2xl">
                Misi Kami
              </h3>

              <ul className="space-y-5">
                {data.mission.map((item, idx) => (
                  <li key={`${idx}-${item}`} className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-purple-400/15 bg-purple-400/6">
                      <CheckCircle2 className="h-4 w-4 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <span className="mb-1 block text-[10px] font-bold tracking-[0.16em] text-slate-500">
                        OBJECTIVE {String(idx + 1).padStart(2, "0")}
                      </span>
                      <p className="text-sm leading-7 text-slate-300">{item}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </article>

            <div className="flex items-center gap-3 px-2 pt-2">
              <div className="h-px flex-1 bg-linear-to-r from-purple-400/30 to-transparent" />
              <span className="text-center text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
                Connecting Indonesia
              </span>
              <div className="h-px flex-1 bg-linear-to-l from-purple-400/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
