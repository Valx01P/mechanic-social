"use client"

import dynamic from "next/dynamic"

interface SingleLocationMapProps {
  lat: number
  lng: number
  name: string
}

const MapComponent = dynamic(() => import("./SingleLocationMapInner"), { ssr: false })

export default function SingleLocationMap({ lat, lng, name }: SingleLocationMapProps) {
  return (
    <div className="w-full h-64 rounded-lg overflow-hidden border border-[hsl(var(--border))]">
      <MapComponent lat={lat} lng={lng} name={name} />
    </div>
  )
}
