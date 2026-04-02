import Link from "next/link"
import { Wrench, MapPin, Phone, Mail } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Wrench className="h-5 w-5 text-blue-400" />
              <span className="font-bold text-lg text-white">
                <span className="text-blue-400">Mechanic</span>Finder
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Connecting drivers with trusted local auto mechanics. Fast, reliable, and transparent.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {["Oil Change", "Brakes", "Engine", "Tires"].map((s) => (
                <li key={s}>
                  <Link
                    href={`/mechanics?category=${s}`}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">About</Link></li>
              <li><Link href="/mechanics" className="hover:text-blue-400 transition-colors">Find Mechanics</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">Contact</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">FAQ</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">Terms</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-blue-400 shrink-0" />
                <span>123 Main Street, New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-400 shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-400 shrink-0" />
                <span>info@mechanicfinder.com</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} MechanicFinder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
