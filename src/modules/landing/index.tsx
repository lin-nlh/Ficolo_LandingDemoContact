import React from "react"
import { Header } from "./components/Header"
import { HeroSection } from "./components/HeroSection"
import { AboutSection } from "./components/AboutSection"
import { ProgramsSection } from "./components/ProgramsSection"
import { PhilosophySection } from "./components/PhilosophySection"
import { ReadySection } from "./components/ReadySection"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed header at the top of the viewport */}
      <Header />
      {/* Main content sections */}
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <PhilosophySection />
      <ReadySection />
    </div>
  )
}
