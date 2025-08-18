// ProgramsSection.tsx
// Displays program offerings for FICOLO website
"use client"
import React from "react"
import Link from "next/link"
import { programs } from "../data/programs"

export function ProgramsSection() {
  return (
    <section
      id="programs"
      className="bg-muted/50 py-20 border-t border-border scroll-mt-16"
    >
      <div className="container mx-auto px-4 text-center max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our Program Offerings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {programs.map(({ title, target, description, href }) => (
            <div
              key={title}
              className="bg-background rounded-2xl p-6 border border-border shadow-sm text-left"
            >
              <h3 className="text-xl font-semibold mb-1">{title}</h3>
              <p className="text-primary text-sm mb-4 font-medium">{target}</p>
              <p className="text-muted-foreground mb-6 text-sm">
                {description}
              </p>
              <Link href={href} className="text-blue-600 font-medium">
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
