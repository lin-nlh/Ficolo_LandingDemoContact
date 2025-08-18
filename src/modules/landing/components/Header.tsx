// Header.tsx
// Navigation bar for FICOLO website
"use client"
import Link from "next/link"
import React from "react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          FICOLO
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="#hero" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="#about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#programs" className="hover:text-primary transition-colors">
            Programs
          </Link>
          <Link href="#philosophy" className="hover:text-primary transition-colors">
            Philosophy
          </Link>
        </nav>
        <Link
          href="#register"
          className="bg-primary text-primary-foreground py-2 px-4 rounded-full shadow hover:shadow-md transition"
        >
          Register Now
        </Link>
      </div>
    </header>
  )
}
