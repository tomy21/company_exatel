"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { CheckCircle, Clock } from "lucide-react";

export interface CityData {
  name: string;
  cities: string[];
  status: "available" | "upcoming";
  lat: number;
  lng: number;
}

// Data lengkap dari dokumen Company Profile EXATEL
const coverageData: CityData[] = [
  {
    name: "DKI Jakarta",
    cities: [
      "Jakarta Pusat",
      "Jakarta Selatan",
      "Jakarta Barat",
      "Jakarta Timur",
      "Jakarta Utara",
    ],
    status: "available",
    lat: -6.2,
    lng: 106.845,
  },
  {
    name: "Banten",
    cities: [
      "Tangerang",
      "Cilegon",
      "Kota Serang",
      "Kab. Serang",
      "Kab. Lebak",
    ],
    status: "available",
    lat: -6.12,
    lng: 106.15,
  },
  {
    name: "Jawa Barat",
    cities: [
      "Bandung Raya",
      "Bekasi",
      "Cikarang",
      "Karawang",
      "Purwakarta",
      "Subang",
      "Cirebon",
      "Sumedang",
      "Majalengka",
      "Kuningan",
      "Bogor",
      "Cianjur",
      "Sukabumi",
    ],
    status: "available",
    lat: -6.917,
    lng: 107.619,
  },
  {
    name: "Jawa Tengah",
    cities: [
      "Semarang",
      "Weleri",
      "Batang",
      "Brebes",
      "Tegal",
      "Pemalang",
      "Kendal",
      "Kota Pekalongan",
      "Kab. Pekalongan",
    ],
    status: "available",
    lat: -6.966,
    lng: 110.416,
  },
  {
    name: "Jawa Timur",
    cities: [
      "Surabaya",
      "Sidoarjo",
      "Pasuruan",
      "Bangil",
      "Purwosari",
      "Malang",
      "Lamongan",
      "Gresik",
      "Kediri",
      "Kertosono",
      "Jombang",
      "Mojokerto",
    ],
    status: "available",
    lat: -7.257,
    lng: 112.752,
  },
  {
    name: "Bali & NTB",
    cities: ["Gianyar", "Buleleng", "Lombok"],
    status: "upcoming",
    lat: -8.409,
    lng: 115.188,
  },
  {
    name: "Kalimantan Timur",
    cities: ["Balikpapan", "Samarinda", "Bontang"],
    status: "available",
    lat: -1.237,
    lng: 116.852,
  },
  {
    name: "Sulawesi Tengah",
    cities: ["Morowali", "Ampana", "Palu", "Poso", "Luwuk", "Tentena"],
    status: "available",
    lat: -0.9,
    lng: 119.87,
  },
  {
    name: "Sulawesi Tenggara",
    cities: ["Kendari"],
    status: "available",
    lat: -3.998,
    lng: 122.512,
  },
];

const MapContainerComponent = dynamic(() => import("./MapComponent"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-95 bg-slate-900 animate-pulse rounded-2xl flex items-center justify-center text-slate-500 text-xs font-semibold">
      Memuat Peta Jaringan...
    </div>
  ),
});

export default function CoverageSection() {
  const [selectedRegion, setSelectedRegion] = useState<CityData>(
    coverageData[0],
  ); // Default DKI Jakarta

  return (
    <section
      id="coverage"
      className="py-20 px-6 lg:px-12 bg-slate-950 relative border-t border-slate-800/50"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-block px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-400">
            COVERAGE AREA
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Jangkauan Jaringan EXATEL
          </h2>
          <p className="text-slate-400 text-sm">
            Infrastruktur Fiber Optic &amp; Node POP EXATEL yang menghubungkan
            kota-kota utama di Indonesia.
          </p>

          {/* Indikator Legend */}
          <div className="flex items-center justify-center gap-6 pt-2 text-xs font-medium">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-pink-500 shadow-lg shadow-pink-500/50 animate-pulse" />
              <span className="text-slate-200">Tersedia (Active POP)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber-400 shadow-lg shadow-amber-400/50" />
              <span className="text-slate-200">Akan Tersedia (Expansion)</span>
            </div>
          </div>
        </div>

        {/* Layout Map & Sidebar Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Peta (8 Columns) */}
          <div className="lg:col-span-8 bg-slate-900/80 border border-slate-800 rounded-2xl p-3 relative overflow-hidden backdrop-blur-md shadow-2xl h-[420px]">
            <MapContainerComponent
              data={coverageData}
              selectedRegion={selectedRegion}
              onSelectRegion={setSelectedRegion}
            />
          </div>

          {/* Panel Detail Area Samping (4 Columns) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-slate-900/80 border border-purple-500/30 rounded-2xl p-6 backdrop-blur-md shadow-xl space-y-5">
              {/* Region Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {selectedRegion.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Area POP &amp; Network Node EXATEL
                  </p>
                </div>
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                    selectedRegion.status === "available"
                      ? "bg-pink-500/10 text-pink-400 border border-pink-500/20"
                      : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                  }`}
                >
                  {selectedRegion.status === "available" ? (
                    <>
                      <CheckCircle className="w-3.5 h-3.5" /> Tersedia
                    </>
                  ) : (
                    <>
                      <Clock className="w-3.5 h-3.5" /> Akan Tersedia
                    </>
                  )}
                </span>
              </div>

              {/* List Kota / Wilayah */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Cakupan Kota / Wilayah:
                </h4>
                <div className="flex flex-wrap gap-2 max-h-60 overflow-y-auto pr-1">
                  {selectedRegion.cities.map((city, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-medium text-slate-200 hover:border-cyan-500/50 transition"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
