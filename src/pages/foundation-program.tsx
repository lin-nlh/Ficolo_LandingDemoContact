import { useEffect, useState } from "react";
import Head from "next/head";

/*
 * FICOLO × OUS Foundation Program Landing Page
 * 
 * A comprehensive visual presentation of the essential information
 * parents and students need to know before joining the program.
 * Features liquid glass UI design and clear visual pathways.
 */

export default function FoundationProgram() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function reveal() {
      const reveals = document.querySelectorAll<HTMLElement>(".reveal");
      reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          el.classList.add("active");
        }
      });
    }
    window.addEventListener("scroll", reveal);
    reveal();
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <>
      <Head>
        <title>FICOLO × OUS Foundation Program | Your Gateway to Study IT in Japan</title>
        <meta
          name="description"
          content="A comprehensive 6-month program preparing students for Okayama University of Science. Includes GED prep, Japanese language (JLPT N3), and digital skills training."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap"
          rel="stylesheet"
        />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      {/* Global Styles */}
      <style jsx global>{`
        body {
          font-family: "Inter", sans-serif;
          background-color: #f0f4f8;
        }
        .ficolo-blue { color: #1e3a8a; }
        .bg-ficolo-blue { background-color: #1e3a8a; }
        .border-ficolo-blue { border-color: #1e3a8a; }
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
        .step-connector {
          position: relative;
        }
        .step-connector::after {
          content: '';
          position: absolute;
          top: 50%;
          right: -20px;
          width: 40px;
          height: 2px;
          background: linear-gradient(to right, #1e3a8a, #3b82f6);
        }
        @media (max-width: 768px) {
          .step-connector::after {
            display: none;
          }
        }
      `}</style>

      {/* Floating Navigation */}
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-6xl z-50 rounded-2xl transition-all duration-300">
        <nav className="glass-effect flex items-center justify-between py-4 px-6 rounded-2xl">
          <a href="/" className="flex items-center space-x-2">
            <div className="flex items-end space-x-0.5">
              <div className="w-2 h-2 bg-orange-500 rounded-sm"></div>
              <div className="w-2 h-4 bg-yellow-400 rounded-sm"></div>
              <div className="w-2 h-6 bg-cyan-400 rounded-sm"></div>
            </div>
            <span className="text-2xl font-bold ficolo-blue">FICOLO</span>
          </a>
          
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-ficolo-blue focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <ul className="hidden md:flex space-x-8 text-sm font-semibold ficolo-blue items-center">
            <li><a href="#overview" className="hover:text-blue-800 transition">Overview</a></li>
            <li><a href="#who-should-enroll" className="hover:text-blue-800 transition">Who Should Enroll</a></li>
            <li><a href="#pathway" className="hover:text-blue-800 transition">Learning Path</a></li>
            <li><a href="#requirements" className="hover:text-blue-800 transition">Requirements</a></li>
            <li>
              <a href="#apply" className="bg-ficolo-blue text-white py-2 px-5 rounded-full hover:bg-blue-800 transition shadow-lg">
                Apply Now
              </a>
            </li>
          </ul>
        </nav>

        {mobileOpen && (
          <div className="glass-effect rounded-2xl mt-2 shadow-lg md:hidden">
            <ul className="flex flex-col space-y-4 py-6 px-6 ficolo-blue text-base">
              <li><a href="#overview" onClick={() => setMobileOpen(false)} className="block py-2 hover:text-blue-800 transition">Overview</a></li>
              <li><a href="#who-should-enroll" onClick={() => setMobileOpen(false)} className="block py-2 hover:text-blue-800 transition">Who Should Enroll</a></li>
              <li><a href="#pathway" onClick={() => setMobileOpen(false)} className="block py-2 hover:text-blue-800 transition">Learning Path</a></li>
              <li><a href="#requirements" onClick={() => setMobileOpen(false)} className="block py-2 hover:text-blue-800 transition">Requirements</a></li>
              <li>
                <a href="#apply" className="bg-ficolo-blue text-white py-2 px-4 rounded-full inline-block hover:bg-blue-800 transition mt-2" onClick={() => setMobileOpen(false)}>
                  Apply Now
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="animated-gradient-bg min-h-screen flex items-center justify-center px-6 text-center reveal">
          <div className="max-w-6xl mx-auto">
            <div className="glass-effect inline-block px-6 py-3 rounded-full mb-8 border border-white/20">
              <span className="text-sm font-medium ficolo-blue">🇯🇵 FICOLO × OUS Foundation Program</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black ficolo-blue leading-tight mb-6">
              Your Gateway to Study<br />
              <span className="ficolo-pixels">IT in Japan</span>
            </h1>
            <p className="text-lg md:text-xl max-w-4xl mx-auto text-gray-700 mb-10 leading-relaxed">
              A comprehensive 6-month program preparing students for <strong>Okayama University of Science</strong>. 
              Includes GED preparation, Japanese language training (JLPT N3), and essential digital skills.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="glass-effect p-6 rounded-2xl border border-white/20">
                <div className="text-3xl font-bold ficolo-blue mb-2">6</div>
                <div className="text-gray-700">Months Duration</div>
              </div>
              <div className="glass-effect p-6 rounded-2xl border border-white/20">
                <div className="text-3xl font-bold ficolo-blue mb-2">N3</div>
                <div className="text-gray-700">JLPT Level Target</div>
              </div>
              <div className="glass-effect p-6 rounded-2xl border border-white/20">
                <div className="text-3xl font-bold ficolo-blue mb-2">2+2</div>
                <div className="text-gray-700">Years at OUS Japan</div>
              </div>
            </div>

            <a
              href="#overview"
              className="bg-ficolo-blue text-white py-4 px-8 rounded-full text-lg font-semibold hover:bg-blue-800 transition shadow-xl transform hover:scale-105"
            >
              Discover Your Path
            </a>
          </div>
        </section>

        {/* Program Overview */}
        <section id="overview" className="py-20 px-6 md:px-20 bg-white reveal">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold ficolo-blue mb-12 text-center">
              Program Overview
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold ficolo-blue mb-6">What You'll Achieve</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold ficolo-blue">Academic Readiness</h4>
                      <p className="text-gray-600">Complete GED preparation or enhance Grade 12 foundations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold ficolo-blue">Japanese Proficiency</h4>
                      <p className="text-gray-600">Achieve JLPT N3 level for university admission</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold ficolo-blue">Digital Skills</h4>
                      <p className="text-gray-600">Master programming fundamentals and computing literacy</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="glass-effect p-8 rounded-3xl border border-white/20">
                <h3 className="text-xl font-bold ficolo-blue mb-6 text-center">Program Purpose</h3>
                <p className="text-gray-700 text-center leading-relaxed mb-6">
                  A comprehensive academic and skills-based preparatory program designed to equip students 
                  for successful admission into the <strong>Bachelor of Information Science and Engineering</strong> 
                  program at Okayama University of Science (OUS), Japan.
                </p>
                <div className="text-center">
                  <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                    🎯 100% University Preparation Focus
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who Should Enroll */}
        <section id="who-should-enroll" className="py-20 px-6 md:px-20 animated-gradient-bg reveal">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold ficolo-blue mb-12 text-center">
              Who Should Enroll?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Track 1: No Grade 12 */}
              <div className="glass-effect p-8 rounded-3xl border border-white/20 hover:scale-105 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">📚</span>
                  </div>
                  <h3 className="text-xl font-bold ficolo-blue">Track 1: GED Preparation</h3>
                  <p className="text-gray-600 mt-2">For students without Myanmar Grade 12</p>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/50 p-4 rounded-xl">
                    <h4 className="font-semibold ficolo-blue mb-2">What's Included:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        Complete GED exam preparation
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        Japanese language training (N5→N4→N3)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        Coding & digital skills foundation
                      </li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                      Duration: 6-8 months
                    </span>
                  </div>
                </div>
              </div>

              {/* Track 2: Has Grade 12 */}
              <div className="glass-effect p-8 rounded-3xl border border-white/20 hover:scale-105 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🎓</span>
                  </div>
                  <h3 className="text-xl font-bold ficolo-blue">Track 2: University Prep</h3>
                  <p className="text-gray-600 mt-2">For students with Myanmar Grade 12</p>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/50 p-4 rounded-xl">
                    <h4 className="font-semibold ficolo-blue mb-2">What's Included:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        Intensive Japanese language (focus on N3)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        Advanced digital skills development
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        University preparation workshops
                      </li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      Duration: 6 months
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Path by Age */}
        <section className="py-20 px-6 md:px-20 bg-white reveal">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold ficolo-blue mb-12 text-center">
              Structured Learning Path by Age
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-effect p-8 rounded-3xl border border-white/20 text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold ficolo-blue">16-17</span>
                </div>
                <h3 className="text-xl font-bold ficolo-blue mb-4">Ages 16–17</h3>
                <div className="bg-purple-50 p-4 rounded-xl mb-4">
                  <p className="text-gray-700 font-medium">One-year GED Foundation Program</p>
                  <p className="text-gray-600 text-sm mt-2">At partner private schools</p>
                </div>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  Extended Preparation
                </span>
              </div>

              <div className="glass-effect p-8 rounded-3xl border border-white/20 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold ficolo-blue">18+</span>
                </div>
                <h3 className="text-xl font-bold ficolo-blue mb-4">Age 18 and Above</h3>
                <div className="bg-green-50 p-4 rounded-xl mb-4">
                  <p className="text-gray-700 font-medium">6-month Accelerated Program</p>
                  <p className="text-gray-600 text-sm mt-2">At FICOLO (if GED needed)</p>
                </div>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Fast Track
                </span>
              </div>

              <div className="glass-effect p-8 rounded-3xl border border-white/20 text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold ficolo-blue">📋</span>
                </div>
                <h3 className="text-xl font-bold ficolo-blue mb-4">Standard GED Pathway</h3>
                <div className="bg-blue-50 p-4 rounded-xl mb-4">
                  <p className="text-gray-700 font-medium">6-8 months preparation</p>
                  <p className="text-gray-600 text-sm mt-2">Structured instruction at FICOLO</p>
                </div>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Comprehensive
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* GED Placement & Preparation Path */}
        <section id="pathway" className="py-20 px-6 md:px-20 animated-gradient-bg reveal">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold ficolo-blue mb-12 text-center">
              GED Placement & Preparation Path
            </h2>
            
            {/* Visual Pathway */}
            <div className="mb-16">
              <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
                {/* Step 1: Placement Test */}
                <div className="glass-effect p-6 rounded-2xl border border-white/20 text-center md:w-1/4 step-connector">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h3 className="font-bold ficolo-blue mb-2">Placement Test</h3>
                  <p className="text-sm text-gray-600">English, Math, Science, Social Studies</p>
                </div>

                {/* Step 2A: Passed */}
                <div className="glass-effect p-6 rounded-2xl border border-white/20 text-center md:w-1/4 step-connector">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">2A</span>
                  </div>
                  <h3 className="font-bold ficolo-blue mb-2">If Passed</h3>
                  <p className="text-sm text-gray-600">6-month GED track + 2-month exam prep</p>
                </div>

                {/* Step 3: GED Exam */}
                <div className="glass-effect p-6 rounded-2xl border border-white/20 text-center md:w-1/4 step-connector">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h3 className="font-bold ficolo-blue mb-2">GED Exam</h3>
                  <p className="text-sm text-gray-600">Official examinations in all four subjects</p>
                </div>

                {/* Step 4: University */}
                <div className="glass-effect p-6 rounded-2xl border border-white/20 text-center md:w-1/4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <h3 className="font-bold ficolo-blue mb-2">University Entry</h3>
                  <p className="text-sm text-gray-600">Eligible for OUS admission</p>
                </div>
              </div>

              {/* Alternative Path 2B */}
              <div className="mt-8 flex justify-center">
                <div className="glass-effect p-6 rounded-2xl border border-red-200 text-center max-w-md">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">2B</span>
                  </div>
                  <h3 className="font-bold ficolo-blue mb-2">If Not Passed</h3>
                  <p className="text-sm text-gray-600">4-month Pre-GED Program → Standard GED track</p>
                </div>
              </div>
            </div>

            {/* Subjects Detail */}
            <div className="glass-effect p-8 rounded-3xl border border-white/20">
              <h3 className="text-xl font-bold ficolo-blue mb-6 text-center">GED Subjects Covered</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-white/50 rounded-xl">
                  <div className="text-2xl mb-2">📝</div>
                  <h4 className="font-semibold ficolo-blue">English</h4>
                  <p className="text-xs text-gray-600">Language Arts</p>
                </div>
                <div className="text-center p-4 bg-white/50 rounded-xl">
                  <div className="text-2xl mb-2">🔢</div>
                  <h4 className="font-semibold ficolo-blue">Mathematics</h4>
                  <p className="text-xs text-gray-600">Problem Solving</p>
                </div>
                <div className="text-center p-4 bg-white/50 rounded-xl">
                  <div className="text-2xl mb-2">🔬</div>
                  <h4 className="font-semibold ficolo-blue">Science</h4>
                  <p className="text-xs text-gray-600">General Sciences</p>
                </div>
                <div className="text-center p-4 bg-white/50 rounded-xl">
                  <div className="text-2xl mb-2">🌍</div>
                  <h4 className="font-semibold ficolo-blue">Social Studies</h4>
                  <p className="text-xs text-gray-600">History & Civics</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Entry Requirements */}
        <section id="requirements" className="py-20 px-6 md:px-20 bg-white reveal">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold ficolo-blue mb-12 text-center">
              Entry Requirements for OUS
            </h2>
            <div className="glass-effect p-12 rounded-3xl border border-white/20">
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold ficolo-blue mb-4">To apply for the bachelor's program at OUS, students must meet:</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎂</span>
                  </div>
                  <h4 className="font-bold ficolo-blue mb-2">Age Requirement</h4>
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <p className="text-2xl font-bold ficolo-blue">18+</p>
                    <p className="text-gray-600 text-sm">Years old</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🇯🇵</span>
                  </div>
                  <h4 className="font-bold ficolo-blue mb-2">Japanese Proficiency</h4>
                  <div className="bg-green-50 p-4 rounded-xl">
                    <p className="text-2xl font-bold ficolo-blue">JLPT N3</p>
                    <p className="text-gray-600 text-sm">Or higher</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📜</span>
                  </div>
                  <h4 className="font-bold ficolo-blue mb-2">Academic Qualification</h4>
                  <div className="bg-orange-50 p-4 rounded-xl">
                    <p className="text-lg font-bold ficolo-blue">Grade 12</p>
                    <p className="text-gray-600 text-sm">Certificate or GED</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Academic Pathway After Completion */}
        <section className="py-20 px-6 md:px-20 animated-gradient-bg reveal">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold ficolo-blue mb-12 text-center">
              Academic Pathway After Completion
            </h2>
            
            {/* 2+2 Pathway Visual */}
            <div className="grid md:grid-cols-3 gap-8 items-center mb-12">
              {/* Foundation Program */}
              <div className="glass-effect p-8 rounded-3xl border border-white/20 text-center">
                <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">F</span>
                </div>
                <h3 className="text-xl font-bold ficolo-blue mb-4">Foundation</h3>
                <p className="text-gray-700 mb-4">FICOLO × OUS Program</p>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  6 months
                </span>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex justify-center">
                <svg className="w-12 h-8 text-ficolo-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </div>

              {/* Years 1-2 MSC */}
              <div className="glass-effect p-8 rounded-3xl border border-white/20 text-center">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">1-2</span>
                </div>
                <h3 className="text-xl font-bold ficolo-blue mb-4">Years 1-2</h3>
                <p className="text-gray-700 mb-4">MSC (Myanmar Satellite Center)</p>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  2 years
                </span>
              </div>
            </div>

            {/* Arrow Down */}
            <div className="flex justify-center mb-8">
              <svg className="w-8 h-12 text-ficolo-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>

            {/* Years 3-4 OUS */}
            <div className="flex justify-center">
              <div className="glass-effect p-8 rounded-3xl border border-white/20 text-center max-w-md">
                <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">3-4</span>
                </div>
                <h3 className="text-xl font-bold ficolo-blue mb-4">Years 3-4</h3>
                <p className="text-gray-700 mb-4">Okayama University of Science (Japan)</p>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  2 years in Japan
                </span>
              </div>
            </div>

            {/* What You'll Get */}
            <div className="mt-16 glass-effect p-8 rounded-3xl border border-white/20">
              <h3 className="text-xl font-bold ficolo-blue mb-6 text-center">What Graduates Achieve</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold ficolo-blue mb-4">Years 1-2 at MSC:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Foundational coursework
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Japanese language immersion
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Academic readiness preparation
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold ficolo-blue mb-4">Years 3-4 at OUS Japan:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      Specialized engineering curriculum
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      Research exposure
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      International experience
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Call to Action */}
        <section id="apply" className="py-20 px-6 md:px-20 bg-white reveal">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-effect p-12 rounded-3xl border border-white/20">
              <h2 className="text-3xl md:text-4xl font-bold ficolo-blue mb-6">
                Ready to Start Your Journey to Japan?
              </h2>
              <p className="text-gray-700 text-lg md:text-xl mb-8 leading-relaxed">
                Join the FICOLO × OUS Foundation Program and take the first step toward studying 
                Information Science & Engineering at one of Japan's premier universities.
              </p>
              
              {/* Key Benefits Summary */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-blue-50 p-4 rounded-xl">
                  <div className="text-2xl mb-2">🎯</div>
                  <p className="text-sm font-medium ficolo-blue">Guaranteed University Pathway</p>
                </div>
                <div className="bg-green-50 p-4 rounded-xl">
                  <div className="text-2xl mb-2">🌸</div>
                  <p className="text-sm font-medium ficolo-blue">Study in Japan Experience</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-xl">
                  <div className="text-2xl mb-2">💼</div>
                  <p className="text-sm font-medium ficolo-blue">International Career Opportunities</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <a
                  href="/contact"
                  className="bg-ficolo-blue text-white py-4 px-8 rounded-full text-lg font-semibold hover:bg-blue-800 transition shadow-xl transform hover:scale-105"
                >
                  Apply Now
                </a>
                <a
                  href="/contact"
                  className="glass-effect text-ficolo-blue py-4 px-8 rounded-full text-lg font-semibold hover:scale-105 transition border border-white/20"
                >
                  Get More Information
                </a>
              </div>
              
              <p className="text-sm text-gray-600">
                📞 Contact us for personalized guidance • 🎓 Limited seats available • ⭐ Early bird discounts apply
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-ficolo-blue text-white py-8 text-center">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex items-end space-x-0.5">
              <div className="w-2 h-2 bg-orange-500 rounded-sm"></div>
              <div className="w-2 h-4 bg-yellow-400 rounded-sm"></div>
              <div className="w-2 h-6 bg-cyan-400 rounded-sm"></div>
            </div>
            <span className="text-xl font-bold">FICOLO</span>
          </div>
          <p className="text-sm opacity-80">
            © 2025 FICOLO – AI & Digital Learning Center. Your gateway to studying IT in Japan.
          </p>
        </div>
      </footer>
    </>
  );
}