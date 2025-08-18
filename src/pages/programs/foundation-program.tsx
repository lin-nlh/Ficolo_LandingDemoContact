import React from "react"
import Head from "next/head"
import Link from "next/link"

export default function FoundationProgram() {
  return (
    <>
      <Head>
        <title>FICOLO-OUS Foundation Program | FICOLO</title>
        <meta name="description" content="6-month program combining GED prep, Japanese language training, and IT education for pathway to Okayama University of Science, Japan." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap"
          rel="stylesheet"
        />
        <script src="https://cdn.tailwindcss.com"></script>
        <style>{`
          body { font-family: 'Inter', sans-serif; background-color: #f0f4f8; }
          .ficolo-blue { color: #1E3A8A; }
          .bg-ficolo-blue { background-color: #1E3A8A; }
          .glass-effect {
            background: rgba(255, 255, 255, 0.3);
            -webkit-backdrop-filter: blur(12px);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.18);
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
          }
          .liquid-glass-card {
            background: linear-gradient(145deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 100%);
            -webkit-backdrop-filter: blur(20px);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255,255,255,0.3);
            box-shadow: 
              0 8px 32px rgba(31, 38, 135, 0.15),
              inset 0 1px 0 rgba(255,255,255,0.4),
              inset 0 -1px 0 rgba(255,255,255,0.1);
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

      <div className="min-h-screen animated-gradient-bg">
        {/* Header */}
        <header className="glass-effect fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 rounded-2xl">
          <div className="container mx-auto px-6 py-3 flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex items-end space-x-0.5">
                <div className="w-2 h-2 bg-orange-500 rounded-sm"></div>
                <div className="w-2 h-4 bg-yellow-400 rounded-sm"></div>
                <div className="w-2 h-6 bg-cyan-400 rounded-sm"></div>
              </div>
              <span className="text-2xl font-bold ficolo-blue">FICOLO</span>
            </Link>
            <Link href="/" className="text-gray-700 font-semibold hover:ficolo-blue transition">
              ← Back to Home
            </Link>
          </div>
        </header>

        <main className="pt-24 pb-12">
          {/* Hero Section */}
          <section className="py-20 text-center">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold ficolo-blue mb-6">
                  FICOLO-OUS Foundation Program
                </h1>
                <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                  Your gateway to international education combining GED preparation, Japanese language mastery, and cutting-edge IT skills.
                </p>
                <div className="inline-flex items-center px-6 py-3 glass-effect rounded-full">
                  <span className="text-sm font-semibold ficolo-blue">🎯 Target: Pre-University Students</span>
                </div>
              </div>
            </div>
          </section>

          {/* Program Overview */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="liquid-glass-card p-8 rounded-3xl">
                    <h2 className="text-3xl font-bold ficolo-blue mb-6">Program Overview</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      The FICOLO-OUS Foundation Program is a comprehensive 6-month intensive course designed to prepare ambitious students for international higher education opportunities, specifically at Okayama University of Science in Japan.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                        <div>
                          <h4 className="font-semibold ficolo-blue">GED Preparation</h4>
                          <p className="text-gray-600 text-sm">Complete high school equivalency preparation</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                        <div>
                          <h4 className="font-semibold ficolo-blue">Japanese Language Training</h4>
                          <p className="text-gray-600 text-sm">From beginner to conversational proficiency</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                        <div>
                          <h4 className="font-semibold ficolo-blue">IT Foundation</h4>
                          <p className="text-gray-600 text-sm">Essential technical skills for modern education</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="liquid-glass-card p-6 rounded-2xl">
                      <h3 className="text-xl font-bold ficolo-blue mb-4">📅 Program Duration</h3>
                      <p className="text-gray-700">6 months intensive training</p>
                    </div>
                    <div className="liquid-glass-card p-6 rounded-2xl">
                      <h3 className="text-xl font-bold ficolo-blue mb-4">🎓 Qualification</h3>
                      <p className="text-gray-700">GED Certificate + Japanese Language Proficiency</p>
                    </div>
                    <div className="liquid-glass-card p-6 rounded-2xl">
                      <h3 className="text-xl font-bold ficolo-blue mb-4">🌐 Destination</h3>
                      <p className="text-gray-700">Okayama University of Science, Japan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Curriculum Details */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold ficolo-blue text-center mb-12">Curriculum Breakdown</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="liquid-glass-card p-8 rounded-3xl text-center">
                    <div className="text-4xl mb-4">📚</div>
                    <h3 className="text-xl font-bold ficolo-blue mb-4">GED Preparation</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Mathematics & Science</li>
                      <li>• Language Arts & Writing</li>
                      <li>• Social Studies</li>
                      <li>• Critical Thinking Skills</li>
                    </ul>
                  </div>
                  <div className="liquid-glass-card p-8 rounded-3xl text-center">
                    <div className="text-4xl mb-4">🇯🇵</div>
                    <h3 className="text-xl font-bold ficolo-blue mb-4">Japanese Language</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Hiragana & Katakana</li>
                      <li>• Basic Kanji (200+ characters)</li>
                      <li>• Conversational Japanese</li>
                      <li>• Academic Japanese</li>
                    </ul>
                  </div>
                  <div className="liquid-glass-card p-8 rounded-3xl text-center">
                    <div className="text-4xl mb-4">💻</div>
                    <h3 className="text-xl font-bold ficolo-blue mb-4">IT Foundations</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Computer Literacy</li>
                      <li>• Microsoft Office Suite</li>
                      <li>• Basic Programming Concepts</li>
                      <li>• Digital Research Skills</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <div className="liquid-glass-card p-12 rounded-3xl">
                  <h2 className="text-3xl font-bold ficolo-blue mb-6">Ready to Start Your Journey?</h2>
                  <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
                    Take the first step towards international education and a bright future in technology. Limited seats available.
                  </p>
                  <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                    <Link href="/#contact" className="inline-block bg-ficolo-blue text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-800 transition shadow-xl transform hover:scale-105">
                      Apply Now
                    </Link>
                    <Link href="/" className="inline-block border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-gray-400 transition">
                      Learn More Programs
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-6">
          <div className="container mx-auto px-6 text-center text-sm">
            <p>&copy; 2024 FICOLO - Fun In School. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </>
  )
}