"use client"

import "leaflet/dist/leaflet.css"
import L from "leaflet"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

delete (L.Icon.Default.prototype as { _getIconUrl?: unknown })._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
})

interface Props {
  lat: number
  lng: number
  name: string
}

export default function SingleLocationMapInner({ lat, lng, name }: Props) {
  return (
    <MapContainer
      center={[lat, lng]}
      zoom={15}
      style={{ height: "100%", width: "100%" }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]}>
        <Popup>
          <p className="font-semibold text-sm">{name}</p>
        </Popup>
      </Marker>
    </MapContainer>
  )
}
