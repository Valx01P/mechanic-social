import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface StarRatingProps {
  rating: number
  size?: "sm" | "md" | "lg"
  showCount?: boolean
  count?: number
}

export default function StarRating({ rating, size = "md", showCount = false, count }: StarRatingProps) {
  const sizeClasses = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  }

  const textClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  }

  const stars = Array.from({ length: 5 }, (_, i) => {
    const filled = i + 1 <= Math.floor(rating)
    const half = !filled && i < rating && rating - Math.floor(rating) >= 0.5
    return { filled, half }
  })

  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center">
        {stars.map((star, i) => (
          <div key={i} className="relative">
            <Star
              className={cn(sizeClasses[size], "text-gray-200 fill-gray-200")}
            />
            {(star.filled || star.half) && (
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: star.half ? "50%" : "100%" }}
              >
                <Star className={cn(sizeClasses[size], "text-yellow-400 fill-yellow-400")} />
              </div>
            )}
          </div>
        ))}
      </div>
      {showCount && (
        <span className={cn(textClasses[size], "text-[hsl(var(--muted-foreground))]")}>
          {rating.toFixed(1)}{count !== undefined ? ` (${count})` : ""}
        </span>
      )}
    </div>
  )
}
