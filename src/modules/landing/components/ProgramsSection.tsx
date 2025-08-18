// ProgramsSection.tsx
// Displays program offerings with glassmorphism cards and reveal animations
"use client"
import React from "react"
import Link from "next/link"
import { programs } from "../data/programs"

export function ProgramsSection() {
  return (
    <section id="programs" className="py-20 animated-gradient-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-bold ficolo-blue">Our Program Offerings</h2>
          <p className="text-gray-600 mt-2">Structured pathways for every age and skill level.</p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {programs.map(({ title, target, description, href }) => (
            <div
              key={title}
              className="glass-effect p-8 rounded-2xl transform hover:-translate-y-2 transition-transform duration-300 reveal"
            >
              <h3 className="text-xl font-bold ficolo-blue mb-3">{title}</h3>
              <p className="text-sm text-gray-600 mb-4">{target}</p>
              <p className="text-gray-700 mb-4">{description}</p>
              <Link href={href} className="font-semibold text-blue-700 hover:text-blue-900">
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
