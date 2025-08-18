import React from "react"
import Head from "next/head"
import Link from "next/link"

export default function DigitalSkillsProgram() {
  return (
    <>
      <Head>
        <title>Digital Skills for Young Learners | FICOLO</title>
        <meta name="description" content="4-month modules from Digital Foundations to Advanced Pathways in ICT and Computer Science, aligned with GCE O/A Levels." />
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
                  Digital Skills for Young Learners
                </h1>
                <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                  Progressive learning modules designed to build digital literacy and computational thinking from the ground up.
                </p>
                <div className="inline-flex items-center px-6 py-3 glass-effect rounded-full">
                  <span className="text-sm font-semibold ficolo-blue">🎯 Target: Primary to Secondary Students</span>
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
                      Our Digital Skills program offers a series of 4-month progressive modules, taking students from basic digital literacy to advanced computer science concepts, fully aligned with GCE O/A Level standards.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                        <div>
                          <h4 className="font-semibold ficolo-blue">Digital Foundations</h4>
                          <p className="text-gray-600 text-sm">Basic computer skills and digital citizenship</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                        <div>
                          <h4 className="font-semibold ficolo-blue">Programming Basics</h4>
                          <p className="text-gray-600 text-sm">Introduction to coding and computational thinking</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                        <div>
                          <h4 className="font-semibold ficolo-blue">Advanced Pathways</h4>
                          <p className="text-gray-600 text-sm">Specialized tracks in AI, Web Development, or Data Science</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="liquid-glass-card p-6 rounded-2xl">
                      <h3 className="text-xl font-bold ficolo-blue mb-4">📅 Module Duration</h3>
                      <p className="text-gray-700">4 months per module, flexible progression</p>
                    </div>
                    <div className="liquid-glass-card p-6 rounded-2xl">
                      <h3 className="text-xl font-bold ficolo-blue mb-4">🎓 Certification</h3>
                      <p className="text-gray-700">GCE O/A Level aligned certificates</p>
                    </div>
                    <div className="liquid-glass-card p-6 rounded-2xl">
                      <h3 className="text-xl font-bold ficolo-blue mb-4">👥 Age Range</h3>
                      <p className="text-gray-700">8-16 years, grouped by skill level</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Learning Pathways */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold ficolo-blue text-center mb-12">Learning Pathways</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  
                  {/* Foundation Level */}
                  <div className="liquid-glass-card p-8 rounded-3xl">
                    <div className="text-center mb-6">
                      <div className="text-4xl mb-4">🌱</div>
                      <h3 className="text-xl font-bold ficolo-blue mb-2">Digital Foundations</h3>
                      <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">Beginner Level</span>
                    </div>
                    <ul className="space-y-3 text-gray-700 text-sm">
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span>Computer Basics & Digital Literacy</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span>Internet Safety & Digital Citizenship</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span>Microsoft Office & Google Workspace</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span>Basic Image & Video Editing</span>
                      </li>
                    </ul>
                  </div>

                  {/* Intermediate Level */}
                  <div className="liquid-glass-card p-8 rounded-3xl">
                    <div className="text-center mb-6">
                      <div className="text-4xl mb-4">🚀</div>
                      <h3 className="text-xl font-bold ficolo-blue mb-2">Programming Basics</h3>
                      <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Intermediate Level</span>
                    </div>
                    <ul className="space-y-3 text-gray-700 text-sm">
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span>Scratch & Block-based Programming</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span>Python Programming Fundamentals</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span>Web Development (HTML, CSS, JavaScript)</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span>Game Development with Scratch/Python</span>
                      </li>
                    </ul>
                  </div>

                  {/* Advanced Level */}
                  <div className="liquid-glass-card p-8 rounded-3xl">
                    <div className="text-center mb-6">
                      <div className="text-4xl mb-4">⭐</div>
                      <h3 className="text-xl font-bold ficolo-blue mb-2">Advanced Pathways</h3>
                      <span className="text-sm bg-purple-100 text-purple-800 px-3 py-1 rounded-full">Advanced Level</span>
                    </div>
                    <ul className="space-y-3 text-gray-700 text-sm">
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        <span>AI & Machine Learning Basics</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        <span>Mobile App Development</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        <span>Data Science & Analytics</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        <span>Robotics & IoT Projects</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Progression */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold ficolo-blue text-center mb-12">Skills Progression Timeline</h2>
                <div className="liquid-glass-card p-8 rounded-3xl">
                  <div className="space-y-8">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                        4M
                      </div>
                      <div>
                        <h4 className="font-bold ficolo-blue">Digital Literacy Foundation</h4>
                        <p className="text-gray-600 text-sm">Master basic computer skills and online safety</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                        8M
                      </div>
                      <div>
                        <h4 className="font-bold ficolo-blue">Programming & Problem Solving</h4>
                        <p className="text-gray-600 text-sm">Build logic skills and create first programs</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                        12M
                      </div>
                      <div>
                        <h4 className="font-bold ficolo-blue">Specialized Track Mastery</h4>
                        <p className="text-gray-600 text-sm">Develop expertise in chosen specialization</p>
                      </div>
                    </div>
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
                  <h2 className="text-3xl font-bold ficolo-blue mb-6">Start Your Digital Journey Today</h2>
                  <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
                    Join thousands of young learners who are building their future with essential digital skills. Flexible scheduling and personalized learning paths available.
                  </p>
                  <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                    <Link href="/#contact" className="inline-block bg-ficolo-blue text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-800 transition shadow-xl transform hover:scale-105">
                      Enroll Now
                    </Link>
                    <Link href="/" className="inline-block border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-gray-400 transition">
                      View All Programs
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