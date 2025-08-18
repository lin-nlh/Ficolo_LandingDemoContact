// PhilosophySection.tsx
// Describes the FICOLO learning philosophy pillars
"use client"
import React from "react"
import { Brain, Hammer, Users, Sparkles } from "lucide-react"

const pillars = [
  {
    title: "Learning to Know",
    description:
      "Building solid foundations in computing, AI, and digital literacy.",
    icon: Brain,
  },
  {
    title: "Learning to Do",
    description:
      "Applying knowledge through real‑world projects and coding challenges.",
    icon: Hammer,
  },
  {
    title: "Learning to Live Together",
    description:
      "Encouraging teamwork, peer‑to‑peer learning, and respect.",
    icon: Users,
  },
  {
    title: "Learning to Be",
    description:
      "Helping students discover their passions and purpose.",
    icon: Sparkles,
  },
]

export function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="w-full py-20 border-t border-border scroll-mt-16"
    >
      <div className="container mx-auto px-4 text-center max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our Learning Philosophy
        </h2>
        <p className="text-muted-foreground mb-12">
          A complete approach combining skills, practice, teamwork, and
          self‑discovery.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {pillars.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="bg-background rounded-2xl p-6 border border-border shadow-sm text-center"
            >
              <Icon className="mx-auto mb-4 h-8 w-8 text-accent" />
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
