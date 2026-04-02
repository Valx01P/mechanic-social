import type { Metadata } from "next"
import "./globals.css"
import { Toaster } from "sonner"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "MechanicFinder - Find Local Auto Mechanics",
  description: "Find and book trusted local auto mechanics near you",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster richColors position="top-right" />
      </body>
    </html>
  )
}
