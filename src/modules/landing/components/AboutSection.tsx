// AboutSection.tsx
// Introduces the vision and mission of FICOLO with scroll reveal and glassmorphism
"use client"
import React from "react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-bold ficolo-blue">
            Opening Doors to a Brighter Tomorrow
          </h2>
          <p className="text-gray-600 mt-2">
            Our vision is to empower every student with the skills and confidence for the future.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <h3 className="text-2xl font-bold ficolo-blue mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be a leading digital learning network that equips every student with future-ready technology skills, confidence in their abilities, and the clarity to choose a path they truly enjoy in life.
            </p>
          </div>
          <div className="reveal">
            <h3 className="text-2xl font-bold ficolo-blue mb-4">Our Mission</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="bg-cyan-100 text-cyan-700 p-2 rounded-full mr-4">✓</span>
                <span><strong>World-Class Education:</strong> Provide UK-standard computing and AI education for globally recognized skills.</span>
              </li>
              <li className="flex items-start">
                <span className="bg-orange-100 text-orange-700 p-2 rounded-full mr-4">✓</span>
                <span><strong>Empower Potential:</strong> Foster critical thinking, creativity, resilience, and a love for lifelong learning.</span>
              </li>
              <li className="flex items-start">
                <span className="bg-purple-100 text-purple-700 p-2 rounded-full mr-4">✓</span>
                <span><strong>Future-Ready Pathways:</strong> Equip learners for smooth transitions into higher education and the tech industry.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
