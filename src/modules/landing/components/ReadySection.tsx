// ReadySection.tsx
// Final call‑to‑action section inviting visitors to shape the future
"use client"
import React from "react"
import Link from "next/link"

export function ReadySection() {
  return (
    <section
      id="register"
      className="w-full py-20 bg-primary text-primary-foreground border-t border-border"
    >
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Shape the Future?
        </h2>
        <p className="mb-8 text-base md:text-lg">
          Join the FICOLO community and start your journey in the digital world.
          Contact us for enrollment or visit our learning center.
        </p>
        <div className="bg-primary/20 rounded-2xl p-6 text-left mb-8 max-w-md mx-auto">
          <h3 className="text-xl font-semibold mb-2 text-center">Our Location</h3>
          <p>
            Room B‑07, Myanmar Culture Valley, U Wisara Rd., People's Park
            Compound, Dagon Township, Yangon
          </p>
        </div>
        <Link
          href="#register"
          className="inline-flex items-center justify-center bg-background text-primary font-semibold py-2 px-6 rounded-full shadow hover:bg-secondary transition"
        >
          Register Your Interest
        </Link>
      </div>
    </section>
  )
}
