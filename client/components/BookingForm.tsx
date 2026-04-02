"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import AvailabilityCalendar from "@/components/AvailabilityCalendar"
import type { Service } from "@/data/mechanics"

interface BookingFormProps {
  mechanicId: string
  mechanicName: string
  services: Service[]
}

interface FormData {
  fullName: string
  phone: string
  email: string
  service: string
  notes: string
}

export default function BookingForm({ mechanicId: _mechanicId, mechanicName, services }: BookingFormProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    notes: "",
  })
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()
  const [selectedTime, setSelectedTime] = useState<string | undefined>()
  const [loading, setLoading] = useState(false)

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.fullName.trim()) {
      toast.error("Please enter your full name.")
      return
    }
    if (!formData.phone.trim()) {
      toast.error("Please enter your phone number.")
      return
    }
    if (!formData.email.trim()) {
      toast.error("Please enter your email address.")
      return
    }
    if (!formData.service) {
      toast.error("Please select a service.")
      return
    }
    if (!selectedDate) {
      toast.error("Please select an appointment date.")
      return
    }
    if (!selectedTime) {
      toast.error("Please select an appointment time.")
      return
    }

    setLoading(true)
    await new Promise((r) => setTimeout(r, 800))
    setLoading(false)

    toast.success(`Booking confirmed with ${mechanicName}!`, {
      description: `${formData.service} on ${selectedDate.toLocaleDateString()} at ${selectedTime}. We'll send a confirmation to ${formData.email}.`,
    })

    setFormData({ fullName: "", phone: "", email: "", service: "", notes: "" })
    setSelectedDate(undefined)
    setSelectedTime(undefined)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="fullName">Full Name *</Label>
          <Input
            id="fullName"
            placeholder="John Doe"
            value={formData.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="(555) 000-0000"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="email">Email Address *</Label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />
      </div>

      <div className="space-y-1.5">
        <Label>Service *</Label>
        <Select value={formData.service} onValueChange={(v) => handleChange("service", v)}>
          <SelectTrigger>
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {services.map((s) => (
              <SelectItem key={s.name} value={s.name}>
                {s.name} — {s.price}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-1.5">
        <Label>Appointment Date & Time *</Label>
        <AvailabilityCalendar
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          onDateSelect={(date) => {
            setSelectedDate(date)
            setSelectedTime(undefined)
          }}
          onTimeSelect={setSelectedTime}
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="notes">Additional Notes</Label>
        <Textarea
          id="notes"
          placeholder="Describe your issue or any additional information..."
          value={formData.notes}
          onChange={(e) => handleChange("notes", e.target.value)}
          rows={3}
        />
      </div>

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Booking..." : "Book Appointment"}
      </Button>
    </form>
  )
}
