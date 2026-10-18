import { ServiceCategory } from "@/types/compro";
import { Server, Wifi, Cpu } from "lucide-react";

interface Props {
  categories: ServiceCategory[];
}

const iconMap = {
  server: Server,
  wifi: Wifi,
  cpu: Cpu,
};

export default function ServicesSection({ categories }: Props) {
  return (
    <section
      id="services"
      className="py-20 px-6 lg:px-12 relative border-t border-slate-800/50 bg-[#0a0d14]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-block px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/30 text-xs font-semibold text-purple-400">
            PORTFOLIO PRODUK
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Layanan & Solusi Komprehensif
          </h2>
          <p className="text-slate-400 text-sm">
            Dirancang khusus untuk mendukung pertumbuhan bisnis dan konektivitas
            Anda secara optimal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => {
            const IconComponent = iconMap[cat.icon] || Server;
            return (
              <div
                key={idx}
                className={`bg-slate-900/60 backdrop-blur-md rounded-2xl p-6 border ${
                  cat.isPopular
                    ? "border-purple-500/40 shadow-xl shadow-purple-900/10 relative"
                    : "border-slate-800"
                } space-y-6`}
              >
                {cat.isPopular && (
                  <div className="absolute -top-3 right-6 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase">
                    Populer
                  </div>
                )}
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-purple-500/20 text-purple-400">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {cat.category}
                    </h3>
                    <p className="text-xs text-purple-400 font-semibold">
                      {cat.subtitle}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {cat.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80"
                    >
                      <h4 className="text-sm font-bold text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-400 mb-2">
                        {item.description}
                      </p>
                      {item.badge && (
                        <span className="inline-block text-[10px] bg-cyan-500/10 text-cyan-300 px-2 py-0.5 rounded border border-cyan-500/20">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
