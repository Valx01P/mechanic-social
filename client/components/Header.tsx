"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Wrench, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { useState } from "react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/mechanics", label: "Find Mechanics" },
  { href: "/about", label: "About" },
]

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[hsl(var(--border))] bg-[hsl(var(--background))]/95 backdrop-blur supports-[backdrop-filter]:bg-[hsl(var(--background))]/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Wrench className="h-6 w-6 text-blue-600" />
          <span>
            <span className="text-blue-600">Mechanic</span>
            <span>Finder</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-blue-600",
                pathname === link.href
                  ? "text-blue-600"
                  : "text-[hsl(var(--foreground))]"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm">
            <Link href="/mechanics">Find a Mechanic</Link>
          </Button>
        </nav>

        {/* Mobile nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex items-center gap-2 mb-8">
              <Wrench className="h-5 w-5 text-blue-600" />
              <span className="font-bold text-lg">
                <span className="text-blue-600">Mechanic</span>Finder
              </span>
            </div>
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "text-base font-medium transition-colors hover:text-blue-600 py-2 border-b border-[hsl(var(--border))]",
                    pathname === link.href
                      ? "text-blue-600"
                      : "text-[hsl(var(--foreground))]"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="mt-4">
                <Link href="/mechanics" onClick={() => setOpen(false)}>
                  Find a Mechanic
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
