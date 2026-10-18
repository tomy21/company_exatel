"use client";

import { useEffect, useState } from "react";
import type { Partner } from "@/types/compro";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

interface Props {
  partners: Partner[];
}

export default function PartnersSection({ partners }: Props) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section
      id="partners"
      aria-labelledby="partners-title"
      className="relative overflow-hidden border-t border-white/6 bg-[#080b12] px-6 py-24 sm:px-8 lg:px-12"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[70%] -translate-x-1/2 rounded-full bg-purple-600/8 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-64 w-64 rounded-full bg-fuchsia-600/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-purple-400/20 bg-purple-400/6 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(192,132,252,0.8)]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-purple-300 sm:text-xs">
              Trusted Network Ecosystem
            </span>
          </div>

          <h2
            id="partners-title"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Stronger Connections,
            <span className="mt-2 block bg-linear-to-r from-purple-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
              Stronger Partnerships.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Dipercaya oleh berbagai perusahaan, lembaga, dan mitra strategis
            untuk membangun ekosistem konektivitas digital yang andal dan
            berkelanjutan di Indonesia.
          </p>

          <div className="mx-auto mt-8 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-linear-to-r from-transparent to-purple-400/60" />
            <span className="text-xs font-medium tracking-widest text-slate-500">
              OUR PARTNERS
            </span>
            <span className="h-px w-10 bg-linear-to-l from-transparent to-purple-400/60" />
          </div>
        </div>

        {isMounted ? (
          partners.length > 0 ? (
            <Swiper
              modules={[Autoplay]}
              spaceBetween={18}
              slidesPerView={2}
              loop={partners.length >= 4}
              speed={4000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                320: { slidesPerView: 2, spaceBetween: 12 },
                480: { slidesPerView: 2, spaceBetween: 16 },
                640: { slidesPerView: 3, spaceBetween: 18 },
                768: { slidesPerView: 4, spaceBetween: 20 },
                1024: { slidesPerView: 5, spaceBetween: 20 },
                1280: { slidesPerView: 6, spaceBetween: 20 },
              }}
              className="partners-swiper overflow-visible! py-3!"
            >
              {partners.map((partner) => (
                <SwiperSlide key={partner.name} className="h-auto">
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-white/8 bg-white/2.5 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/30 hover:bg-white/4.5 hover:shadow-[0_12px_40px_rgba(147,51,234,0.10)] sm:p-4">
                    <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-purple-400/0 to-transparent transition-all duration-300 group-hover:via-purple-400/70" />

                    <div className="flex h-24 items-center justify-center rounded-xl border border-slate-200/60 bg-white px-3 sm:h-28 sm:px-4">
                      <img
                        src={partner.logo}
                        alt={`Logo ${partner.name}`}
                        loading="lazy"
                        className="max-h-16 max-w-full object-contain transition-transform duration-300 group-hover:scale-105 sm:max-h-20"
                      />
                    </div>

                    <div className="flex min-h-19 items-center justify-center px-1 py-4 text-center sm:min-h-21">
                      <h3 className="text-xs font-semibold leading-relaxed text-slate-200 transition-colors duration-300 group-hover:text-purple-300 sm:text-sm">
                        {partner.name}
                      </h3>
                    </div>

                    <div className="mx-auto h-0.5 w-8 rounded-full bg-slate-700 transition-all duration-300 group-hover:w-12 group-hover:bg-linear-to-r group-hover:from-purple-400 group-hover:to-pink-500" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <p className="py-10 text-center text-sm text-slate-500">
              Partner information will be available soon.
            </p>
          )
        ) : (
          <div aria-hidden="true" className="h-64" />
        )}

        <div className="mt-12 flex items-center justify-center gap-3 text-center">
          <div className="h-px w-8 bg-slate-800" />
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500 sm:text-xs">
            Building Indonesia&apos;s Digital Connectivity
          </p>
          <div className="h-px w-8 bg-slate-800" />
        </div>
      </div>
    </section>
  );
}
