// HeroSection.tsx
// Top hero section with animated gradient background and glassmorphism styles
"use client"
import React from "react"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-20 relative overflow-hidden animated-gradient-bg"
    >
      <div className="container mx-auto px-6 text-center z-10">
        <h1 className="text-4xl md:text-7xl font-black ficolo-blue leading-tight mb-4">
          Let&apos;s Code, Create &amp; Imagine<br />
          <span className="ficolo-pixels">The FICOLO Way!</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Equipping students aged 8–16 with future-ready AI &amp; Digital Skills to open doors to a brighter tomorrow.
        </p>
        <a
          href="#programs"
          className="bg-ficolo-blue text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-800 transition shadow-xl transform hover:scale-105"
        >
          Explore Our Programs
        </a>
      </div>
    </section>
  )
}
