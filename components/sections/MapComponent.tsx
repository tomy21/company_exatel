"use client";

import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
  useMap,
} from "react-leaflet";
import { CityData } from "./CoverageSection";

interface Props {
  data: CityData[];
  selectedRegion: CityData;
  onSelectRegion: (region: CityData) => void;
}

// Komponen penanganan perubahan kamera peta
function ChangeView({ center }: { center: [number, number] }) {
  const map = useMap();
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  useEffect(() => {
    // Abaikan render pertama agar defaultCenter peta tidak tertimpa koordinat Jakarta
    if (!hasUserInteracted) {
      setHasUserInteracted(true);
      return;
    }

    // Hanya jalankan flyTo jika user sudah mengklik pin/region lain
    map.flyTo(center, 5.5, { duration: 1.2 });
  }, [center, map]);

  return null;
}

export default function MapComponent({
  data,
  selectedRegion,
  onSelectRegion,
}: Props) {
  // Koordinat ideal tengah Indonesia agar pandangan peta bergeser pas ke kanan
  const defaultCenter: [number, number] = [-2.5, 117.5];

  return (
    <MapContainer
      center={defaultCenter}
      zoom={4.5} // Level zoom default pas untuk seluruh pulau Indonesia
      scrollWheelZoom={false}
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "1rem",
        background: "#090d16",
      }}
    >
      <ChangeView center={[selectedRegion.lat, selectedRegion.lng]} />

      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {data.map((region, idx) => {
        const isSelected = selectedRegion.name === region.name;
        const isAvailable = region.status === "available";

        return (
          <CircleMarker
            key={idx}
            center={[region.lat, region.lng]}
            radius={isSelected ? 10 : 7}
            pathOptions={{
              color: isSelected
                ? "#00f0ff"
                : isAvailable
                  ? "#ec4899"
                  : "#fbbf24",
              fillColor: isAvailable ? "#db2777" : "#f59e0b",
              fillOpacity: isSelected ? 0.9 : 0.7,
              weight: isSelected ? 3 : 1.5,
            }}
            eventHandlers={{
              click: () => onSelectRegion(region),
            }}
          >
            <Popup>
              <div className="p-1 text-slate-900 font-sans">
                <p className="font-bold text-xs">{region.name}</p>
                <p className="text-[10px] text-slate-600">
                  Status: {isAvailable ? "Tersedia" : "Akan Tersedia"}
                </p>
              </div>
            </Popup>
          </CircleMarker>
        );
      })}
    </MapContainer>
  );
}
