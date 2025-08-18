// AboutSection.tsx
// Introduces the vision and mission of FICOLO
"use client"
import React from "react"
import { CheckCircle2 } from "lucide-react"

const missionPoints = [
  {
    title: "World‑Class Education",
    description:
      "Provide UK‑standard computing and AI education for globally recognized skills.",
  },
  {
    title: "Empower Potential",
    description:
      "Foster critical thinking, creativity, resilience, and a love for lifelong learning.",
  },
  {
    title: "Future‑Ready Pathways",
    description:
      "Equip learners for smooth transitions into higher education and the tech industry.",
  },
]

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 bg-muted/50 border-t border-border scroll-mt-16"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Opening Doors to a Brighter Tomorrow
          </h2>
          <p className="text-muted-foreground mt-2">
            Our vision is to empower every student with the skills and
            confidence for the future.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be a leading digital learning network that equips every student
              with future‑ready technology skills, confidence in their abilities,
              and the clarity to choose a path they truly enjoy in life.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
            <ul className="space-y-4">
              {missionPoints.map(({ title, description }) => (
                <li key={title} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3" />
                  <span>
                    <strong>{title}:</strong> {description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
