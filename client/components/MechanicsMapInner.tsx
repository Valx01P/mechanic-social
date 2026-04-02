"use client"

import "leaflet/dist/leaflet.css"
import L from "leaflet"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import Link from "next/link"
import type { Mechanic } from "@/data/mechanics"

// Fix Leaflet default icon
delete (L.Icon.Default.prototype as { _getIconUrl?: unknown })._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
})

interface Props {
  mechanics: Mechanic[]
  height?: string
}

export default function MechanicsMapInner({ mechanics }: Props) {
  return (
    <MapContainer
      center={[40.7128, -74.006]}
      zoom={11}
      style={{ height: "100%", width: "100%" }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {mechanics.map((mechanic) => (
        <Marker
          key={mechanic.id}
          position={[mechanic.coordinates.lat, mechanic.coordinates.lng]}
        >
          <Popup>
            <div className="min-w-[160px]">
              <p className="font-semibold text-sm">{mechanic.name}</p>
              <p className="text-xs text-gray-500 mb-1">{mechanic.shopName}</p>
              <p className="text-xs mb-2">&#9733; {mechanic.rating} ({mechanic.reviewCount} reviews)</p>
              <a
                href={`/mechanic/${mechanic.id}`}
                className="text-xs text-blue-600 hover:underline font-medium"
              >
                View Profile &rarr;
              </a>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
