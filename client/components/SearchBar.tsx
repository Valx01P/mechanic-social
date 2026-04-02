"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

const categories = [
  "All Services",
  "Oil Change",
  "Brakes",
  "Engine",
  "Tires",
  "Electrical",
  "Transmission",
  "AC & Heating",
  "Diagnostics",
]

interface SearchBarProps {
  variant: "hero" | "compact"
  defaultCategory?: string
  defaultQuery?: string
}

export default function SearchBar({ variant, defaultCategory, defaultQuery }: SearchBarProps) {
  const router = useRouter()
  const [category, setCategory] = useState(defaultCategory || "All Services")
  const [query, setQuery] = useState(defaultQuery || "")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (category && category !== "All Services") params.set("category", category)
    if (query.trim()) params.set("q", query.trim())
    router.push(`/mechanics?${params.toString()}`)
  }

  if (variant === "hero") {
    return (
      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 w-full max-w-2xl mx-auto">
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="bg-white text-gray-900 border-white sm:w-48 shrink-0 focus:ring-blue-500">
            <SelectValue placeholder="Service type" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat} value={cat}>{cat}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name, location..."
          className="bg-white text-gray-900 border-white placeholder:text-gray-400 flex-1 focus-visible:ring-blue-500"
        />
        <Button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold shrink-0">
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </form>
    )
  }

  return (
    <form onSubmit={handleSearch} className={cn("flex gap-2 w-full")}>
      <Select value={category} onValueChange={setCategory}>
        <SelectTrigger className="w-44 shrink-0">
          <SelectValue placeholder="Service type" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((cat) => (
            <SelectItem key={cat} value={cat}>{cat}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search mechanics..."
        className="flex-1"
      />
      <Button type="submit">
        <Search className="h-4 w-4" />
        <span className="hidden sm:inline ml-2">Search</span>
      </Button>
    </form>
  )
}
