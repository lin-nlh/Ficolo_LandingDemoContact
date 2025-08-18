// HeroSection.tsx
// Top hero section for the FICOLO landing page
"use client"
import React from "react"
import Link from "next/link"
import { Button } from "@radix-ui/themes"

// The hero content is defined inline rather than via external data because
// the FICOLO design requires rich markup (gradient text) that isn’t easily
// expressed as plain strings.

export function HeroSection() {
  return (
    <section
      id="hero"
      className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/10 text-foreground w-full py-24 border-b border-border scroll-mt-16"
    >
      <div className="container px-4 mx-auto max-w-5xl text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          Let&apos;s Code, Create &amp; Imagine <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-purple-500">
            The FICOLO Way!
          </span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl mb-8">
          Equipping students aged 8–16 with future‑ready AI &amp; Digital Skills
          to open doors to a brighter tomorrow.
        </p>
        <Button asChild size="3" variant="solid">
          <Link href="#programs">Explore Our Programs</Link>
        </Button>
      </div>
    </section>
  )
}
