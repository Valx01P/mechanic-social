import Link from "next/link"
import { MapPin, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import StarRating from "@/components/StarRating"
import type { Mechanic } from "@/data/mechanics"

interface MechanicCardProps {
  mechanic: Mechanic
}

export default function MechanicCard({ mechanic }: MechanicCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200 flex flex-col h-full">
      <div className="relative">
        <img
          src={mechanic.image}
          alt={mechanic.name}
          className="w-full h-48 object-cover"
        />
        <Badge className="absolute top-3 left-3 bg-white text-blue-600 hover:bg-white border-blue-200">
          {mechanic.specialty}
        </Badge>
      </div>
      <CardContent className="p-4 flex flex-col flex-1">
        <div className="flex-1">
          <h3 className="font-semibold text-lg leading-tight">{mechanic.name}</h3>
          <p className="text-sm text-[hsl(var(--muted-foreground))] mb-2">{mechanic.shopName}</p>

          <div className="flex items-center gap-2 mb-3">
            <StarRating rating={mechanic.rating} size="sm" showCount count={mechanic.reviewCount} />
          </div>

          <div className="flex items-center gap-1 text-sm text-[hsl(var(--muted-foreground))] mb-1">
            <MapPin className="h-3.5 w-3.5 shrink-0" />
            <span className="truncate">{mechanic.address.split(",").slice(0, 2).join(",")}</span>
          </div>

          <div className="flex items-center gap-1 text-sm text-[hsl(var(--muted-foreground))] mb-3">
            <Clock className="h-3.5 w-3.5 shrink-0" />
            <span>{mechanic.experience} years experience</span>
          </div>

          <div className="flex flex-wrap gap-1 mb-4">
            {mechanic.categories.slice(0, 3).map((cat) => (
              <Badge key={cat} variant="secondary" className="text-xs">
                {cat}
              </Badge>
            ))}
            {mechanic.categories.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{mechanic.categories.length - 3}
              </Badge>
            )}
          </div>
        </div>

        <Button asChild className="w-full mt-auto">
          <Link href={`/mechanic/${mechanic.id}`}>View Profile</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
