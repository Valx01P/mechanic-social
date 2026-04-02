"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  Droplets,
  Disc,
  Cog,
  Circle,
  Zap,
  Settings,
  Wind,
  Search,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import SearchBar from "@/components/SearchBar"
import MechanicCard from "@/components/MechanicCard"
import MechanicsMap from "@/components/MechanicsMap"
import { mechanics } from "@/data/mechanics"

const serviceCategories = [
  { name: "Oil Change", icon: Droplets, color: "text-yellow-500 bg-yellow-50" },
  { name: "Brakes", icon: Disc, color: "text-red-500 bg-red-50" },
  { name: "Engine", icon: Cog, color: "text-gray-600 bg-gray-100" },
  { name: "Tires", icon: Circle, color: "text-slate-600 bg-slate-100" },
  { name: "Electrical", icon: Zap, color: "text-blue-500 bg-blue-50" },
  { name: "Transmission", icon: Settings, color: "text-purple-500 bg-purple-50" },
  { name: "AC & Heating", icon: Wind, color: "text-cyan-500 bg-cyan-50" },
  { name: "Diagnostics", icon: Search, color: "text-green-500 bg-green-50" },
]

export default function HomePage() {
  const router = useRouter()

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Find Trusted Mechanics
            <span className="block text-yellow-300">Near You</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Connect with verified local auto mechanics. Transparent pricing, real reviews, and easy online booking — all in one place.
          </p>
          <SearchBar variant="hero" />
          <p className="mt-4 text-blue-200 text-sm">
            Trusted by 10,000+ drivers across the NYC metro area
          </p>
        </div>
      </section>

      {/* Browse by Service */}
      <section className="py-16 px-4 bg-[hsl(var(--background))]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Browse by Service</h2>
            <p className="text-[hsl(var(--muted-foreground))]">Find mechanics who specialize in exactly what you need</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {serviceCategories.map(({ name, icon: Icon, color }) => (
              <button
                key={name}
                onClick={() => router.push(`/mechanics?category=${encodeURIComponent(name)}`)}
                className="group"
              >
                <Card className="hover:shadow-md transition-all duration-200 hover:-translate-y-1 cursor-pointer h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                    <div className={`p-3 rounded-full ${color} group-hover:scale-110 transition-transform`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-medium text-sm">{name}</span>
                  </CardContent>
                </Card>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 bg-[hsl(var(--muted))]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Mechanics Near You</h2>
            <p className="text-[hsl(var(--muted-foreground))]">Browse mechanics across the NYC metro area</p>
          </div>
          <MechanicsMap mechanics={mechanics} height="450px" />
        </div>
      </section>

      {/* Top Rated Mechanics */}
      <section className="py-16 px-4 bg-[hsl(var(--background))]">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-1">Top Rated Mechanics</h2>
              <p className="text-[hsl(var(--muted-foreground))]">Highly reviewed professionals in your area</p>
            </div>
            <Button asChild variant="outline" className="hidden sm:flex gap-2">
              <Link href="/mechanics">
                View All <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mechanics.map((mechanic) => (
              <MechanicCard key={mechanic.id} mechanic={mechanic} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Button asChild>
              <Link href="/mechanics">View All Mechanics</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Your Car Fixed?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Browse hundreds of verified mechanics and book your appointment online in minutes.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold">
            <Link href="/mechanics">Find a Mechanic Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
