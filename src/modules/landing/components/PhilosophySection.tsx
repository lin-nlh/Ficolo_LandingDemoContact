// PhilosophySection.tsx
// Describes the FICOLO learning philosophy pillars with glass cards and emojis
"use client"
import React from "react"

const pillars = [
  {
    title: "Learning to Know",
    description: "Building solid foundations in computing, AI, and digital literacy.",
    emoji: "🧠",
  },
  {
    title: "Learning to Do",
    description: "Applying knowledge through real-world projects and coding challenges.",
    emoji: "🛠️",
  },
  {
    title: "Learning to Live Together",
    description: "Encouraging teamwork, peer-to-peer learning, and respect.",
    emoji: "🤝",
  },
  {
    title: "Learning to Be",
    description: "Helping students discover their passions and purpose.",
    emoji: "🌟",
  },
]

export function PhilosophySection() {
  return (
    <section id="philosophy" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-bold ficolo-blue">
            Our Learning Philosophy
          </h2>
          <p className="text-gray-600 mt-2">
            A complete approach combining skills, practice, teamwork, and self-discovery.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {pillars.map(({ title, description, emoji }) => (
            <div
              key={title}
              className="glass-effect p-6 rounded-2xl shadow-md reveal"
            >
              <div className="text-4xl mb-4">{emoji}</div>
              <h3 className="text-lg font-bold ficolo-blue mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
