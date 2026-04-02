"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { SlidersHorizontal, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"
import SearchBar from "@/components/SearchBar"
import MechanicCard from "@/components/MechanicCard"
import MechanicsMap from "@/components/MechanicsMap"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet"
import { mechanics as allMechanics } from "@/data/mechanics"

const ALL_CATEGORIES = [
  "Oil Change",
  "Brakes",
  "Engine",
  "Tires",
  "Electrical",
  "Transmission",
  "AC & Heating",
  "Diagnostics",
]

function MechanicsContent() {
  const searchParams = useSearchParams()
  const urlCategory = searchParams.get("category") || "All"
  const urlQuery = searchParams.get("q") || ""

  const [selectedCategory, setSelectedCategory] = useState(
    urlCategory !== "All Services" ? urlCategory : "All"
  )
  const [minRating, setMinRating] = useState(1)
  const [filtersOpen, setFiltersOpen] = useState(false)

  useEffect(() => {
    const cat = searchParams.get("category")
    if (cat) setSelectedCategory(cat)
    else setSelectedCategory("All")
  }, [searchParams])

  const filtered = allMechanics.filter((m) => {
    const matchCategory =
      selectedCategory === "All" || m.categories.includes(selectedCategory)
    const matchRating = m.rating >= minRating
    const matchQuery =
      !urlQuery ||
      m.name.toLowerCase().includes(urlQuery.toLowerCase()) ||
      m.shopName.toLowerCase().includes(urlQuery.toLowerCase()) ||
      m.specialty.toLowerCase().includes(urlQuery.toLowerCase()) ||
      m.address.toLowerCase().includes(urlQuery.toLowerCase())
    return matchCategory && matchRating && matchQuery
  })

  const clearFilters = () => {
    setSelectedCategory("All")
    setMinRating(1)
  }

  const FilterPanel = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-3">Service Category</h3>
        <div className="space-y-2">
          {["All", ...ALL_CATEGORIES].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                selectedCategory === cat
                  ? "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]"
                  : "hover:bg-[hsl(var(--accent))]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="font-semibold mb-3">Minimum Rating</h3>
        <div className="px-1">
          <Slider
            min={1}
            max={5}
            step={0.5}
            value={[minRating]}
            onValueChange={([v]) => setMinRating(v)}
          />
          <div className="flex justify-between text-xs text-[hsl(var(--muted-foreground))] mt-1">
            <span>1</span>
            <span className="font-medium text-[hsl(var(--foreground))]">{minRating}+ stars</span>
            <span>5</span>
          </div>
        </div>
      </div>

      <Button variant="outline" size="sm" onClick={clearFilters} className="w-full gap-2">
        <X className="h-4 w-4" />
        Clear Filters
      </Button>
    </div>
  )

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-4">Find Mechanics</h1>
        <SearchBar
          variant="compact"
          defaultCategory={urlCategory !== "All" ? urlCategory : undefined}
          defaultQuery={urlQuery}
        />
      </div>

      {/* Active filters */}
      {(selectedCategory !== "All" || minRating > 1) && (
        <div className="flex gap-2 flex-wrap mb-4">
          {selectedCategory !== "All" && (
            <Badge variant="secondary" className="gap-1">
              {selectedCategory}
              <button onClick={() => setSelectedCategory("All")} className="ml-1 hover:text-red-500">
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
          {minRating > 1 && (
            <Badge variant="secondary" className="gap-1">
              {minRating}+ stars
              <button onClick={() => setMinRating(1)} className="ml-1 hover:text-red-500">
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
        </div>
      )}

      <div className="flex gap-6">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-24 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-lg p-4">
            <h2 className="font-semibold text-lg mb-4">Filters</h2>
            <FilterPanel />
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Mobile filter button */}
          <div className="lg:hidden mb-4">
            <Sheet open={filtersOpen} onOpenChange={setFiltersOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <SlidersHorizontal className="h-4 w-4" />
                  Filters
                  {(selectedCategory !== "All" || minRating > 1) && (
                    <Badge className="ml-1 h-5 w-5 p-0 flex items-center justify-center text-xs">
                      {(selectedCategory !== "All" ? 1 : 0) + (minRating > 1 ? 1 : 0)}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  <FilterPanel />
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Map */}
          <div className="mb-6">
            <MechanicsMap mechanics={filtered} height="350px" />
          </div>

          {/* Results */}
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-[hsl(var(--muted-foreground))]">
              Showing <span className="font-semibold text-[hsl(var(--foreground))]">{filtered.length}</span> mechanic{filtered.length !== 1 ? "s" : ""}
              {urlQuery && ` for "${urlQuery}"`}
            </p>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg font-medium mb-2">No mechanics found</p>
              <p className="text-[hsl(var(--muted-foreground))] mb-4">
                Try adjusting your filters or search query.
              </p>
              <Button onClick={clearFilters} variant="outline">
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((mechanic) => (
                <MechanicCard key={mechanic.id} mechanic={mechanic} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function MechanicsPage() {
  return (
    <Suspense fallback={
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-[hsl(var(--muted-foreground))]">Loading mechanics...</p>
      </div>
    }>
      <MechanicsContent />
    </Suspense>
  )
}
