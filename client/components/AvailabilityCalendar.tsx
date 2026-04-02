"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"

interface AvailabilityCalendarProps {
  onDateSelect: (date: Date) => void
  onTimeSelect: (time: string) => void
  selectedDate?: Date
  selectedTime?: string
}

function generateTimeSlots(date: Date): string[] {
  const dayOfWeek = date.getDay()
  const slots: string[] = []

  if (dayOfWeek === 0) return [] // Sunday - closed
  if (dayOfWeek === 6) {
    // Saturday: 9am - 1pm
    let hour = 9
    let minute = 0
    while (hour < 13) {
      const ampm = hour < 12 ? "AM" : "PM"
      const displayHour = hour > 12 ? hour - 12 : hour
      slots.push(`${displayHour}:${minute === 0 ? "00" : "30"} ${ampm}`)
      minute += 30
      if (minute === 60) {
        minute = 0
        hour++
      }
    }
  } else {
    // Weekday: 9am - 5pm
    let hour = 9
    let minute = 0
    while (hour < 17) {
      const ampm = hour < 12 ? "AM" : "PM"
      const displayHour = hour > 12 ? hour - 12 : hour === 12 ? 12 : hour
      slots.push(`${displayHour}:${minute === 0 ? "00" : "30"} ${ampm}`)
      minute += 30
      if (minute === 60) {
        minute = 0
        hour++
      }
    }
  }

  return slots
}

export default function AvailabilityCalendar({
  onDateSelect,
  onTimeSelect,
  selectedDate,
  selectedTime,
}: AvailabilityCalendarProps) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const timeSlots = selectedDate ? generateTimeSlots(selectedDate) : []

  const isSunday = (date: Date) => date.getDay() === 0
  const isPast = (date: Date) => {
    const d = new Date(date)
    d.setHours(0, 0, 0, 0)
    return d < today
  }

  return (
    <div>
      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={(date) => {
          if (date) onDateSelect(date)
        }}
        disabled={(date) => isPast(date) || isSunday(date)}
        className="rounded-md border border-[hsl(var(--border))] w-full"
      />

      {selectedDate && timeSlots.length > 0 && (
        <div className="mt-4">
          <p className="text-sm font-medium mb-2">Available Time Slots</p>
          <div className="grid grid-cols-3 gap-2">
            {timeSlots.map((slot) => (
              <button
                key={slot}
                type="button"
                onClick={() => onTimeSelect(slot)}
                className={cn(
                  "px-2 py-1.5 text-xs rounded-md border transition-colors",
                  selectedTime === slot
                    ? "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] border-[hsl(var(--primary))]"
                    : "border-[hsl(var(--border))] hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))]"
                )}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      )}

      {selectedDate && timeSlots.length === 0 && (
        <p className="mt-4 text-sm text-[hsl(var(--muted-foreground))]">
          No available slots for this day.
        </p>
      )}
    </div>
  )
}
