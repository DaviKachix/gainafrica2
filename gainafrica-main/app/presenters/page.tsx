"use client"

import { useQuery } from "convex/react"
import { api } from "@/convex/_generated/api"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PresentersGrid } from "@/components/presenters-grid"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"

export default function PresentersPage() {
  const events = useQuery(api.events.getAll)
  const [selectedYear, setSelectedYear] = useState<string>("")

  const selectedEvent = events?.find(
    (e) => e.year.toString() === selectedYear
  )

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />

      <main className="flex-1 pt-20">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-950 via-black to-background py-24 text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Presenters
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/70 leading-relaxed">
              Meet the speakers, practitioners, and thought leaders who have
              contributed to GAiN Africa conferences across the years.
            </p>
          </div>
        </section>

        {/* FILTER */}
        <section className="relative z-10 -mt-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-2xl border bg-background/95 backdrop-blur-md p-6 shadow-lg">
              <span className="text-sm font-semibold text-muted-foreground">
                Filter presenters by year
              </span>

              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                  {events?.map((event) => (
                    <SelectItem
                      key={event._id}
                      value={event.year.toString()}
                    >
                      {event.year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {selectedEvent ? (
              <>
                <h2 className="mb-8 text-2xl font-bold tracking-tight">
                  GAiN Africa {selectedEvent.year} Presenters
                </h2>

                <PresentersGrid eventId={selectedEvent._id} />
              </>
            ) : (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <p className="text-lg font-semibold">
                  Select a year to view presenters
                </p>
                <p className="mt-2 max-w-md text-muted-foreground">
                  Choose a GAiN Africa conference year above to explore the
                  speakers and contributors from that event.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
