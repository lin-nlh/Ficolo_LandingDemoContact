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
    <section id="philosophy" className="py-20 animated-gradient-bg relative overflow-hidden">
      {/* Floating background elements for liquid effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-cyan-400 to-pink-500 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold ficolo-blue mb-4">
            Our Learning Philosophy
          </h2>
          <p className="text-gray-600 mt-2 text-lg max-w-2xl mx-auto">
            A complete approach combining skills, practice, teamwork, and self-discovery.
          </p>
          {/* Professional pointer line */}
          <div className="mt-8 flex justify-center items-center space-x-4">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-blue-500"></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-300"></div>
            <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></div>
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map(({ title, description, emoji }, index) => (
            <div
              key={title}
              className="liquid-glass-card group p-8 rounded-3xl shadow-2xl reveal transform hover:-translate-y-3 transition-all duration-500 relative overflow-hidden"
            >
              {/* Liquid glass background layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-white/10 backdrop-blur-xl rounded-3xl"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-500/10 rounded-3xl"></div>
              <div className="absolute inset-px bg-gradient-to-b from-white/20 to-transparent rounded-3xl"></div>
              
              {/* Professional pointer indicator */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                {index + 1}
              </div>
              
              {/* Card content */}
              <div className="relative z-10 text-center">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                  {emoji}
                </div>
                
                {/* Clean pointer line under emoji */}
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
                
                <h3 className="text-lg font-bold ficolo-blue mb-3 group-hover:text-blue-700 transition-colors">
                  {title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed font-medium">
                  {description}
                </p>
                
                {/* Bottom accent line */}
                <div className="mt-6 flex justify-center">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-400/10 to-pink-400/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            </div>
          ))}
        </div>
        
        {/* Section bottom accent */}
        <div className="mt-16 flex justify-center reveal">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
            <div className="w-2 h-2 bg-pink-500 rounded-full animate-ping delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
