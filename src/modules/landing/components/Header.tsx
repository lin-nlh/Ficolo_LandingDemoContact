// Header.tsx
// Floating navigation bar with glassmorphism and mobile menu support
"use client"
import React, { useState } from "react"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  return (
    <header className="glass-effect fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 rounded-2xl transition-all duration-300">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <div className="flex items-end space-x-0.5">
            <div className="w-2 h-2 bg-orange-500 rounded-sm"></div>
            <div className="w-2 h-4 bg-yellow-400 rounded-sm"></div>
            <div className="w-2 h-6 bg-cyan-400 rounded-sm"></div>
          </div>
          <span className="text-2xl font-bold ficolo-blue">FICOLO</span>
        </a>
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#hero" className="text-gray-700 font-semibold hover:ficolo-blue transition">
            Home
          </a>
          <a href="#about" className="text-gray-700 font-semibold hover:ficolo-blue transition">
            About
          </a>
          <a href="#programs" className="text-gray-700 font-semibold hover:ficolo-blue transition">
            Programs
          </a>
          <a href="#philosophy" className="text-gray-700 font-semibold hover:ficolo-blue transition">
            Philosophy
          </a>
          <a
            href="#register"
            className="bg-ficolo-blue text-white px-5 py-2 rounded-full hover:bg-blue-800 transition shadow-lg"
          >
            Register Now
          </a>
        </nav>
        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-ficolo-blue"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      {/* Mobile menu links */}
      <div className={`${mobileOpen ? "block" : "hidden"} md:hidden px-6 pb-4`}>
        <a
          href="#hero"
          className="block py-2 text-gray-700 font-semibold hover:ficolo-blue transition"
          onClick={() => setMobileOpen(false)}
        >
          Home
        </a>
        <a
          href="#about"
          className="block py-2 text-gray-700 font-semibold hover:ficolo-blue transition"
          onClick={() => setMobileOpen(false)}
        >
          About
        </a>
        <a
          href="#programs"
          className="block py-2 text-gray-700 font-semibold hover:ficolo-blue transition"
          onClick={() => setMobileOpen(false)}
        >
          Programs
        </a>
        <a
          href="#philosophy"
          className="block py-2 text-gray-700 font-semibold hover:ficolo-blue transition"
          onClick={() => setMobileOpen(false)}
        >
          Philosophy
        </a>
        <a
          href="#register"
          className="block mt-2 bg-ficolo-blue text-white text-center px-5 py-2 rounded-full hover:bg-blue-800 transition shadow-lg"
          onClick={() => setMobileOpen(false)}
        >
          Register Now
        </a>
      </div>
    </header>
  )
}
