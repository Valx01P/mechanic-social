import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Wrench } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <div className="mb-6 p-4 bg-blue-50 rounded-full">
        <Wrench className="h-12 w-12 text-blue-500" />
      </div>
      <h1 className="text-8xl font-bold text-blue-600 mb-2">404</h1>
      <h2 className="text-2xl font-semibold mb-3">Page Not Found</h2>
      <p className="text-[hsl(var(--muted-foreground))] max-w-md mb-8">
        Looks like this page took a wrong turn at the last oil change. Let us help you get back on the road.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Button asChild>
          <Link href="/">Go Home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/mechanics">Find Mechanics</Link>
        </Button>
      </div>
    </div>
  )
}
