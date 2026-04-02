"use client"

import dynamic from "next/dynamic"
import type { Mechanic } from "@/data/mechanics"

interface MechanicsMapProps {
  mechanics: Mechanic[]
  height?: string
}

const MapComponent = dynamic(() => import("./MechanicsMapInner"), { ssr: false })

export default function MechanicsMap({ mechanics, height = "400px" }: MechanicsMapProps) {
  return (
    <div style={{ height }} className="w-full rounded-lg overflow-hidden border border-[hsl(var(--border))]">
      <MapComponent mechanics={mechanics} height={height} />
    </div>
  )
}
