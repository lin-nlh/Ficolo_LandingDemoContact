// ReadySection.tsx
// Final call-to-action section inviting visitors to shape the future with glass effect
"use client"
import React from "react"

export function ReadySection() {
  return (
    <section id="register" className="py-20 bg-ficolo-blue text-white">
      <div className="container mx-auto px-6 text-center reveal">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Shape the Future?
        </h2>
        <p className="mt-4 mb-8 max-w-2xl mx-auto">
          Join the FICOLO community and start your journey in the digital world. Contact us for enrollment or visit our learning center.
        </p>
        <div className="glass-effect text-gray-800 rounded-2xl p-6 max-w-md mx-auto mb-8">
          <h4 className="font-bold text-lg ficolo-blue">Our Location</h4>
          <p className="mt-2">
            Room B-07, Myanmar Culture Valley, U Wisara Rd., People's Park Compound, Dagon Township, Yangon
          </p>
        </div>
        <a
          href="#register"
          className="bg-white ficolo-blue px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition shadow-xl transform hover:scale-105"
        >
          Register Your Interest
        </a>
      </div>
    </section>
  )
}
