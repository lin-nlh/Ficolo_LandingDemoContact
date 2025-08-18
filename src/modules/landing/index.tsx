import React, { useEffect } from "react"
import Head from "next/head"
import { Header } from "./components/Header"
import { HeroSection } from "./components/HeroSection"
import { AboutSection } from "./components/AboutSection"
import { ProgramsSection } from "./components/ProgramsSection"
import { PhilosophySection } from "./components/PhilosophySection"
import { ReadySection } from "./components/ReadySection"

export default function LandingPage() {
  // Attach scroll reveal animation similar to the original HTML. Elements with
  // the `.reveal` class will slide up and fade in when scrolled into view.
  useEffect(() => {
    function reveal() {
      const reveals = document.querySelectorAll<HTMLElement>(".reveal")
      reveals.forEach((el) => {
        const windowHeight = window.innerHeight
        const elementTop = el.getBoundingClientRect().top
        const elementVisible = 150
        if (elementTop < windowHeight - elementVisible) {
          el.classList.add("active")
        }
      })
    }
    window.addEventListener("scroll", reveal)
    reveal()
    return () => window.removeEventListener("scroll", reveal)
  }, [])

  return (
    <>
      <Head>
        <title>FICOLO - Fun In School | AI & Digital Learning Center</title>
        {/* Google fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap"
          rel="stylesheet"
        />
        {/* Load Tailwind via CDN to support utility classes */}
        <script
          src="https://cdn.tailwindcss.com"
          // @ts-ignore external script injection
        ></script>
        {/* Custom styles for FICOLO design */}
        <style>{`
          body { font-family: 'Inter', sans-serif; background-color: #f0f4f8; }
          .ficolo-blue { color: #1E3A8A; }
          .bg-ficolo-blue { background-color: #1E3A8A; }
          .border-ficolo-blue { border-color: #1E3A8A; }
          .ficolo-pixels {
            background: linear-gradient(45deg, #F97316, #FBBF24, #22D3EE, #A855F7, #EC4899);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .glass-effect {
            background: rgba(255, 255, 255, 0.3);
            -webkit-backdrop-filter: blur(12px);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.18);
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
          }
          .reveal {
            position: relative;
            transform: translateY(100px);
            opacity: 0;
            transition: 1s all ease;
          }
          .reveal.active {
            transform: translateY(0);
            opacity: 1;
          }
          .animated-gradient-bg {
            background: linear-gradient(-45deg, #e0f7fa, #fce4ec, #e8eaf6, #e3f2fd);
            background-size: 400% 400%;
            animation: gradient 15s ease infinite;
          }
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>
      </Head>
      <div className="flex flex-col min-h-screen">
        {/* Floating glass header */}
        <Header />
        {/* Main sections */}
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <PhilosophySection />
        <ReadySection />
      </div>
    </>
  )
}
