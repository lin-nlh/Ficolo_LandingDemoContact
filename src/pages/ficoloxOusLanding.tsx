import { useEffect, useState } from "react";
import Head from "next/head";

/*
 * FICOLOx OUS Landing Page (Essential Information)
 *
 * This React component encapsulates the core information about the
 * FICOLOx OUS Foundation Program in a single, self‑contained
 * TypeScript file. It preserves the visual identity of the
 * existing FICOLO website by reusing the same colour palette,
 * glass‑effect cards, and animated gradient backgrounds defined on
 * the home page. Only the most important details parents and
 * students need before joining are included here: what the
 * programme covers, how it works, who it’s for, and how to apply.
 */

export default function FicoloxOusLanding() {
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
        <title>FICOLOx OUS Foundation Program – Essential Info</title>
        <meta
          name="description"
          content="Get an at‑a‑glance overview of the FICOLOx OUS Foundation Program: GED prep, Japanese language, digital skills and a guaranteed pathway to Okayama University of Science."
        />
      </Head>

      {/* Global styles matching the FICOLO design language */}
      <style jsx global>{`
        body {
          font-family: "Inter", sans-serif;
          background-color: #f0f4f8;
        }
        .ficolo-blue {
          color: #1e3a8a;
        }
        .bg-ficolo-blue {
          background-color: #1e3a8a;
        }
        .border-ficolo-blue {
          border-color: #1e3a8a;
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
          background: linear-gradient(
            -45deg,
            #e0f7fa,
            #fce4ec,
            #e8eaf6,
            #e3f2fd
          );
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
        }
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>

      {/* Top navigation bar with floating glass effect */}
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <ul className="hidden md:flex space-x-8 text-sm font-semibold ficolo-blue items-center">
            <li>
              <a href="#overview" className="hover:text-blue-800 transition">
                Overview
              </a>
            </li>
            <li>
              <a href="#highlights" className="hover:text-blue-800 transition">
                Highlights
              </a>
            </li>
            <li>
              <a href="#pathway" className="hover:text-blue-800 transition">
                Pathway
              </a>
            </li>
            <li>
              <a href="#eligibility" className="hover:text-blue-800 transition">
                Eligibility
              </a>
            </li>
            <li>
              <a href="/register" className="bg-ficolo-blue text-white py-2 px-5 rounded-full hover:bg-blue-800 transition shadow-lg">
                Apply Now
              </a>
            </li>
          </ul>
        </nav>
        {mobileOpen && (
          <div className="glass-effect rounded-2xl mt-2 shadow-lg md:hidden">
            <ul className="flex flex-col space-y-4 py-6 px-6 ficolo-blue text-base">
              <li>
                <a href="#overview" onClick={() => setMobileOpen(false)} className="block py-2 hover:text-blue-800 transition">
                  Overview
                </a>
              </li>
              <li>
                <a href="#highlights" onClick={() => setMobileOpen(false)} className="block py-2 hover:text-blue-800 transition">
                  Highlights
                </a>
              </li>
              <li>
                <a href="#pathway" onClick={() => setMobileOpen(false)} className="block py-2 hover:text-blue-800 transition">
                  Pathway
                </a>
              </li>
              <li>
                <a href="#eligibility" onClick={() => setMobileOpen(false)} className="block py-2 hover:text-blue-800 transition">
                  Eligibility
                </a>
              </li>
              <li>
                <a
                  href="/register"
                  className="bg-ficolo-blue text-white py-2 px-4 rounded-full inline-block hover:bg-blue-800 transition mt-2"
                  onClick={() => setMobileOpen(false)}
                >
                  Apply Now
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      <main className="pt-20">
        {/* Hero: succinct description */}
        <section className="animated-gradient-bg min-h-screen flex items-center justify-center px-6 text-center reveal">
          <div className="max-w-5xl mx-auto">
            <div className="glass-effect inline-block px-6 py-2 rounded-full mb-8 border border-white/20">
              <span className="text-sm font-medium ficolo-blue">FICOLO × OUS Foundation Program</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black ficolo-blue leading-tight mb-6">
              Your Path to Studying IT in Japan<br />
              <span className="bg-gradient-to-r from-orange-500 via-yellow-400 via-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Clear, Structured, Attainable
              </span>
            </h1>
            <p className="text-lg md:text-xl max-w-4xl mx-auto text-gray-700 mb-8 leading-relaxed">
              A focused preparation to meet Okayama University of Science (OUS) entry expectations:
              GED (if needed), Japanese (up to JLPT N3), and core digital skills.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
              <span className="glass-effect px-4 py-2 rounded-full text-sm font-medium ficolo-blue border border-white/20">JLPT N3 Target</span>
              <span className="glass-effect px-4 py-2 rounded-full text-sm font-medium ficolo-blue border border-white/20">GED Included</span>
              <span className="glass-effect px-4 py-2 rounded-full text-sm font-medium ficolo-blue border border-white/20">Digital Skills & Coding</span>
            </div>
            <a
              href="/register"
              className="bg-ficolo-blue text-white py-4 px-8 rounded-full text-lg font-semibold hover:bg-blue-800 transition shadow-xl transform hover:scale-105"
            >
              Start Your Journey
            </a>
          </div>
        </section>

        {/* Overview: summary of what’s included */}
        <section id="overview" className="py-16 px-6 md:px-20 bg-white reveal">
          <h2 className="text-2xl md:text-3xl font-bold ficolo-blue mb-6 text-center">
            Overview
          </h2>
          <div className="max-w-5xl mx-auto text-gray-700 space-y-4 text-base md:text-lg">
            <p>
              In just six months you will cover three critical pillars: the
              General Educational Development (GED) curriculum for an
              internationally recognised high‑school equivalent, Japanese
              language training to reach N4/N3 proficiency and a solid
              foundation in digital skills through practical coding and
              computing modules.
            </p>
            <p>
              Successful graduates are guaranteed admission into the 2+2
              articulation programme at Okayama University of Science,
              spending the first two years on the Kurashiki campus and
              finishing the final two years in a selected major.
            </p>
          </div>
        </section>

        {/* Highlights: essential features of the programme */}
        <section id="highlights" className="py-20 px-6 md:px-20 reveal">
          <h2 className="text-3xl md:text-4xl font-bold ficolo-blue mb-12 text-center">
            Programme Highlights
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-effect p-8 rounded-3xl border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold ficolo-blue mb-3">GED Curriculum</h3>
              <p className="text-gray-700 leading-relaxed">
                Four subject modules: Mathematics, Science, Social Studies
                and Language Arts. Prepare for the GED test and earn a
                globally recognised high‑school credential.
              </p>
            </div>
            <div className="glass-effect p-8 rounded-3xl border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold ficolo-blue mb-3">Japanese Language</h3>
              <p className="text-gray-700 leading-relaxed">
                Intensive Japanese classes focusing on listening,
                speaking, reading and writing, aiming for JLPT N4/N3
                proficiency.
              </p>
            </div>
            <div className="glass-effect p-8 rounded-3xl border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold ficolo-blue mb-3">Digital & Coding Skills</h3>
              <p className="text-gray-700 leading-relaxed">
                Learn programming fundamentals, computational thinking and
                IT literacy through hands‑on projects.
              </p>
            </div>
            <div className="glass-effect p-8 rounded-3xl border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold ficolo-blue mb-3">Guaranteed 2+2 Pathway</h3>
              <p className="text-gray-700 leading-relaxed">
                Upon completion, receive assured entry into Years 1–2 at
                OUS and continue into a specialisation for Years 3–4.
              </p>
            </div>
            <div className="glass-effect p-8 rounded-3xl border border-white/20 hover:scale-105 transition-all duration-300 md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold ficolo-blue mb-3">Personalised Support</h3>
              <p className="text-gray-700 leading-relaxed">
                Small class sizes, experienced mentors and dedicated
                pastoral care help you succeed academically and adjust to
                life in Japan.
              </p>
            </div>
          </div>
        </section>

        {/* Pathway: simplified steps of the programme */}
        <section id="pathway" className="py-20 px-6 md:px-20 animated-gradient-bg reveal">
          <h2 className="text-3xl md:text-4xl font-bold ficolo-blue mb-12 text-center">
            Your Academic Journey
          </h2>
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:justify-between space-y-12 md:space-y-0 md:space-x-4">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center md:w-1/4">
              <div className="w-10 h-10 rounded-full bg-ficolo-blue text-white flex items-center justify-center font-bold mb-3">
                1
              </div>
              <h4 className="font-semibold ficolo-blue mb-1 text-base">Foundation
                (6 mo.)
              </h4>
              <p className="text-sm text-gray-700">
                Complete GED, Japanese and digital skills training at FICOLO.
              </p>
            </div>
            <div className="hidden md:block flex-1 h-0.5 bg-gray-300"></div>
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center md:w-1/4">
              <div className="w-10 h-10 rounded-full bg-ficolo-blue text-white flex items-center justify-center font-bold mb-3">
                2
              </div>
              <h4 className="font-semibold ficolo-blue mb-1 text-base">Years 1–2
              </h4>
              <p className="text-sm text-gray-700">
                Start your studies at OUS with a general science and
                mathematics curriculum on the Kurashiki campus.
              </p>
            </div>
            <div className="hidden md:block flex-1 h-0.5 bg-gray-300"></div>
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center md:w-1/4">
              <div className="w-10 h-10 rounded-full bg-ficolo-blue text-white flex items-center justify-center font-bold mb-3">
                3
              </div>
              <h4 className="font-semibold ficolo-blue mb-1 text-base">Years 3–4
              </h4>
              <p className="text-sm text-gray-700">
                Move into a degree major (engineering, science, IT etc.) and
                finish your bachelor’s at OUS.
              </p>
            </div>
          </div>
        </section>

        {/* Eligibility: the bare minimum requirements */}
        <section id="eligibility" className="py-16 px-6 md:px-20 animated-gradient-bg reveal">
          <h2 className="text-2xl md:text-3xl font-bold ficolo-blue mb-8 text-center">
            Eligibility &amp; Requirements
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-effect p-5 rounded-lg border border-ficolo-blue">
              <h3 className="text-lg font-semibold ficolo-blue mb-2">Who
                Should Apply?
              </h3>
              <ul className="list-disc list-inside text-sm md:text-base text-gray-700 space-y-1">
                <li>Students 16+ with at least Grade 10/O‑Level equivalent</li>
                <li>Non‑native English speakers welcome</li>
                <li>Willingness to commit to full‑time study</li>
              </ul>
            </div>
            <div className="glass-effect p-5 rounded-lg border border-ficolo-blue">
              <h3 className="text-lg font-semibold ficolo-blue mb-2">What You’ll Provide</h3>
              <ul className="list-disc list-inside text-sm md:text-base text-gray-700 space-y-1">
                <li>Recent school transcripts or certificates</li>
                <li>A short motivation letter</li>
                <li>Valid passport for visa processing</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Final Call to Action */}
        <section className="py-20 px-6 md:px-20 animated-gradient-bg reveal">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-effect p-12 rounded-3xl border border-white/20">
              <h2 className="text-3xl md:text-4xl font-bold ficolo-blue mb-6">
                Ready to Begin Your Journey?
              </h2>
              <p className="text-gray-700 text-lg md:text-xl mb-8 leading-relaxed">
                Join the next generation of tech leaders. The FICOLO-OUS Foundation Program
                is your gateway to studying IT in Japan and building a global career.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/register"
                  className="bg-ficolo-blue text-white py-4 px-8 rounded-full text-lg font-semibold hover:bg-blue-800 transition shadow-xl transform hover:scale-105"
                >
                  Apply Now
                </a>
                <a
                  href="#overview"
                  className="glass-effect text-ficolo-blue py-4 px-8 rounded-full text-lg font-semibold hover:scale-105 transition border border-white/20"
                >
                  Learn More
                </a>
              </div>
              <p className="text-sm text-gray-600 mt-6">
                Limited seats available • Rolling admissions • Early bird discounts apply
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white py-6 text-center text-sm text-gray-600">
        © 2025 FICOLO – AI &amp; Digital Learning Center.
      </footer>
    </>
  );
}