"use client"

import { useParams, notFound } from "next/navigation"
import { MapPin, Phone, Clock, Award, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import StarRating from "@/components/StarRating"
import SingleLocationMap from "@/components/SingleLocationMap"
import BookingForm from "@/components/BookingForm"
import { mechanics } from "@/data/mechanics"
import { format, parseISO } from "date-fns"

export default function MechanicProfilePage() {
  const params = useParams()
  const mechanic = mechanics.find((m) => m.id === params.id)

  if (!mechanic) {
    notFound()
  }

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ]

  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      {/* Breadcrumb */}
      <div className="bg-[hsl(var(--muted))] border-b border-[hsl(var(--border))]">
        <div className="container mx-auto px-4 py-3 flex items-center gap-1 text-sm text-[hsl(var(--muted-foreground))]">
          <Link href="/" className="hover:text-[hsl(var(--foreground))]">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/mechanics" className="hover:text-[hsl(var(--foreground))]">Mechanics</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-[hsl(var(--foreground))]">{mechanic.name}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Profile Header */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div className="md:col-span-1">
            <img
              src={mechanic.image}
              alt={mechanic.name}
              className="w-full aspect-square object-cover rounded-xl shadow-lg"
            />
          </div>
          <div className="md:col-span-2">
            <div className="flex flex-wrap gap-2 mb-3">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-blue-200">
                {mechanic.specialty}
              </Badge>
              {mechanic.categories.map((cat) => (
                <Badge key={cat} variant="secondary">{cat}</Badge>
              ))}
            </div>
            <h1 className="text-3xl font-bold mb-1">{mechanic.name}</h1>
            <p className="text-lg text-[hsl(var(--muted-foreground))] mb-3">{mechanic.shopName}</p>
            <div className="flex items-center gap-3 mb-4">
              <StarRating rating={mechanic.rating} size="lg" showCount count={mechanic.reviewCount} />
              <span className="text-sm text-[hsl(var(--muted-foreground))]">
                {mechanic.experience} years experience
              </span>
            </div>
            <p className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-6">{mechanic.bio}</p>
            <div>
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Award className="h-4 w-4 text-yellow-500" />
                Certifications
              </h3>
              <div className="flex flex-wrap gap-2">
                {mechanic.certifications.map((cert) => (
                  <Badge key={cert} variant="outline" className="text-xs">
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Contact & Hours */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Information</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                <span className="text-sm">{mechanic.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-600 shrink-0" />
                <a href={`tel:${mechanic.phone}`} className="text-sm hover:text-blue-600">
                  {mechanic.phone}
                </a>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-600" />
              Business Hours
            </h2>
            <table className="w-full text-sm">
              <tbody>
                {days.map((day) => (
                  <tr key={day} className="border-b border-[hsl(var(--border))] last:border-0">
                    <td className="py-1.5 font-medium w-28">{day}</td>
                    <td
                      className={`py-1.5 ${
                        mechanic.hours[day] === "Closed"
                          ? "text-red-500"
                          : "text-[hsl(var(--muted-foreground))]"
                      }`}
                    >
                      {mechanic.hours[day] || "Closed"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Services */}
        <div className="mb-10">
          <h2 className="text-xl font-bold mb-4">Services & Pricing</h2>
          <div className="overflow-x-auto rounded-lg border border-[hsl(var(--border))]">
            <table className="w-full text-sm">
              <thead className="bg-[hsl(var(--muted))]">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">Service</th>
                  <th className="text-left px-4 py-3 font-semibold">Duration</th>
                  <th className="text-right px-4 py-3 font-semibold">Price</th>
                </tr>
              </thead>
              <tbody>
                {mechanic.services.map((service, i) => (
                  <tr
                    key={i}
                    className="border-t border-[hsl(var(--border))] hover:bg-[hsl(var(--muted))]/50 transition-colors"
                  >
                    <td className="px-4 py-3 font-medium">{service.name}</td>
                    <td className="px-4 py-3 text-[hsl(var(--muted-foreground))]">{service.duration}</td>
                    <td className="px-4 py-3 text-right font-semibold text-blue-600">{service.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Reviews */}
        <div className="mb-10">
          <h2 className="text-xl font-bold mb-6">
            Customer Reviews
            <span className="text-[hsl(var(--muted-foreground))] font-normal text-base ml-2">
              ({mechanic.reviewCount} total)
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mechanic.reviews.map((review) => (
              <div
                key={review.id}
                className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-lg p-5"
              >
                <div className="flex items-start gap-3 mb-3">
                  <img
                    src={review.authorImage}
                    alt={review.author}
                    className="w-10 h-10 rounded-full object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm">{review.author}</p>
                    <div className="flex items-center gap-2">
                      <StarRating rating={review.rating} size="sm" />
                      <span className="text-xs text-[hsl(var(--muted-foreground))]">
                        {format(parseISO(review.date), "MMM d, yyyy")}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed mb-3">
                  {review.comment}
                </p>
                {review.servicePhotos && review.servicePhotos.length > 0 && (
                  <div className="flex gap-2 overflow-x-auto pb-1">
                    {review.servicePhotos.map((photo, idx) => (
                      <img
                        key={idx}
                        src={photo}
                        alt={`Service photo ${idx + 1}`}
                        className="h-20 w-28 object-cover rounded-md shrink-0"
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Location */}
        <div className="mb-10">
          <h2 className="text-xl font-bold mb-4">Location</h2>
          <p className="text-sm text-[hsl(var(--muted-foreground))] mb-4">{mechanic.address}</p>
          <SingleLocationMap
            lat={mechanic.coordinates.lat}
            lng={mechanic.coordinates.lng}
            name={mechanic.shopName}
          />
        </div>

        <Separator className="mb-8" />

        {/* Booking */}
        <div id="booking">
          <h2 className="text-xl font-bold mb-6">Book an Appointment</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="font-semibold mb-2 text-blue-800">Why book with {mechanic.name}?</h3>
              <ul className="space-y-2 text-sm text-blue-700">
                <li className="flex items-center gap-2">
                  <Award className="h-4 w-4 shrink-0" />
                  {mechanic.certifications[0]}
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4 shrink-0" />
                  {mechanic.experience} years of experience
                </li>
                <li className="flex items-center gap-2">
                  <StarRating rating={mechanic.rating} size="sm" showCount count={mechanic.reviewCount} />
                </li>
              </ul>
            </div>
            <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl p-6">
              <BookingForm
                mechanicId={mechanic.id}
                mechanicName={mechanic.name}
                services={mechanic.services}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
