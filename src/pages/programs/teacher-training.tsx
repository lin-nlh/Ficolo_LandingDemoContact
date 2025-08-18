import React from "react"
import Head from "next/head"
import Link from "next/link"

export default function TeacherTrainingProgram() {
  return (
    <>
      <Head>
        <title>FICOLO Teacher Training Program | FICOLO</title>
        <meta name="description" content="6-month program to equip educators with skills to become certified digital trainers, with potential employment at FICOLO." />
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
                  FICOLO Teacher Training Program
                </h1>
                <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                  Transform your passion for education into expertise in digital learning. Become a certified trainer in the future of education.
                </p>
                <div className="inline-flex items-center px-6 py-3 glass-effect rounded-full">
                  <span className="text-sm font-semibold ficolo-blue">🎯 Target: Aspiring Digital Trainers</span>
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
                      The FICOLO Teacher Training Program is designed to prepare passionate educators to become certified digital learning trainers. Our comprehensive 6-month program combines pedagogical theory with hands-on digital teaching experience.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                        <div>
                          <h4 className="font-semibold ficolo-blue">Modern Pedagogy</h4>
                          <p className="text-gray-600 text-sm">Learn contemporary teaching methodologies</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                        <div>
                          <h4 className="font-semibold ficolo-blue">Digital Tools Mastery</h4>
                          <p className="text-gray-600 text-sm">Master educational technology and digital platforms</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                        <div>
                          <h4 className="font-semibold ficolo-blue">Practical Experience</h4>
                          <p className="text-gray-600 text-sm">Hands-on teaching practice with real students</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="liquid-glass-card p-6 rounded-2xl">
                      <h3 className="text-xl font-bold ficolo-blue mb-4">📅 Program Duration</h3>
                      <p className="text-gray-700">6 months intensive + 3 months mentoring</p>
                    </div>
                    <div className="liquid-glass-card p-6 rounded-2xl">
                      <h3 className="text-xl font-bold ficolo-blue mb-4">🎓 Certification</h3>
                      <p className="text-gray-700">FICOLO Certified Digital Trainer</p>
                    </div>
                    <div className="liquid-glass-card p-6 rounded-2xl">
                      <h3 className="text-xl font-bold ficolo-blue mb-4">💼 Career Opportunity</h3>
                      <p className="text-gray-700">Potential employment for top performers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Training Modules */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold ficolo-blue text-center mb-12">Training Modules</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  
                  {/* Module 1 */}
                  <div className="liquid-glass-card p-8 rounded-3xl">
                    <div className="text-center mb-6">
                      <div className="text-4xl mb-4">📚</div>
                      <h3 className="text-xl font-bold ficolo-blue mb-2">Educational Foundation</h3>
                      <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Months 1-2</span>
                    </div>
                    <ul className="space-y-3 text-gray-700 text-sm">
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span>Modern Learning Theories</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span>Child Development & Psychology</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span>Curriculum Design & Planning</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span>Assessment & Evaluation Methods</span>
                      </li>
                    </ul>
                  </div>

                  {/* Module 2 */}
                  <div className="liquid-glass-card p-8 rounded-3xl">
                    <div className="text-center mb-6">
                      <div className="text-4xl mb-4">💻</div>
                      <h3 className="text-xl font-bold ficolo-blue mb-2">Digital Teaching Tools</h3>
                      <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">Months 2-3</span>
                    </div>
                    <ul className="space-y-3 text-gray-700 text-sm">
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span>Learning Management Systems</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span>Interactive Whiteboard Technology</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span>Educational Software & Apps</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span>Online Collaboration Tools</span>
                      </li>
                    </ul>
                  </div>

                  {/* Module 3 */}
                  <div className="liquid-glass-card p-8 rounded-3xl">
                    <div className="text-center mb-6">
                      <div className="text-4xl mb-4">🎯</div>
                      <h3 className="text-xl font-bold ficolo-blue mb-2">Specialized Tech Training</h3>
                      <span className="text-sm bg-purple-100 text-purple-800 px-3 py-1 rounded-full">Months 3-4</span>
                    </div>
                    <ul className="space-y-3 text-gray-700 text-sm">
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        <span>Programming & Computational Thinking</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        <span>AI & Machine Learning Basics</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        <span>Robotics & STEM Education</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        <span>Digital Content Creation</span>
                      </li>
                    </ul>
                  </div>

                  {/* Module 4 */}
                  <div className="liquid-glass-card p-8 rounded-3xl">
                    <div className="text-center mb-6">
                      <div className="text-4xl mb-4">👥</div>
                      <h3 className="text-xl font-bold ficolo-blue mb-2">Teaching Practice</h3>
                      <span className="text-sm bg-orange-100 text-orange-800 px-3 py-1 rounded-full">Months 4-6</span>
                    </div>
                    <ul className="space-y-3 text-gray-700 text-sm">
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        <span>Supervised Teaching Sessions</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        <span>Classroom Management</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        <span>Student Progress Tracking</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        <span>Parent Communication</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Career Pathway */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold ficolo-blue text-center mb-12">Your Career Pathway</h2>
                <div className="liquid-glass-card p-8 rounded-3xl">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                        1
                      </div>
                      <h4 className="font-bold ficolo-blue mb-2">Complete Training</h4>
                      <p className="text-gray-600 text-sm">6-month intensive program with practical experience</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                        2
                      </div>
                      <h4 className="font-bold ficolo-blue mb-2">Get Certified</h4>
                      <p className="text-gray-600 text-sm">Receive FICOLO Certified Digital Trainer credential</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                        3
                      </div>
                      <h4 className="font-bold ficolo-blue mb-2">Start Teaching</h4>
                      <p className="text-gray-600 text-sm">Join FICOLO team or start your own digital training career</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold ficolo-blue text-center mb-12">Program Benefits</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="liquid-glass-card p-6 rounded-2xl text-center">
                    <div className="text-3xl mb-4">🎯</div>
                    <h4 className="font-bold ficolo-blue mb-2">Job Guarantee</h4>
                    <p className="text-gray-600 text-sm">Top performers get employment offers</p>
                  </div>
                  <div className="liquid-glass-card p-6 rounded-2xl text-center">
                    <div className="text-3xl mb-4">💰</div>
                    <h4 className="font-bold ficolo-blue mb-2">Competitive Salary</h4>
                    <p className="text-gray-600 text-sm">Attractive compensation packages</p>
                  </div>
                  <div className="liquid-glass-card p-6 rounded-2xl text-center">
                    <div className="text-3xl mb-4">📈</div>
                    <h4 className="font-bold ficolo-blue mb-2">Career Growth</h4>
                    <p className="text-gray-600 text-sm">Clear progression pathway</p>
                  </div>
                  <div className="liquid-glass-card p-6 rounded-2xl text-center">
                    <div className="text-3xl mb-4">🌍</div>
                    <h4 className="font-bold ficolo-blue mb-2">Global Recognition</h4>
                    <p className="text-gray-600 text-sm">International certification standards</p>
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
                  <h2 className="text-3xl font-bold ficolo-blue mb-6">Ready to Shape the Next Generation?</h2>
                  <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
                    Join our exclusive Teacher Training Program and become part of the educational revolution. Limited spots available for our next cohort.
                  </p>
                  <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                    <Link href="/#contact" className="inline-block bg-ficolo-blue text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-800 transition shadow-xl transform hover:scale-105">
                      Apply for Training
                    </Link>
                    <Link href="/" className="inline-block border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-gray-400 transition">
                      Learn More
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