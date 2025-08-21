import { useEffect, useState } from "react";
import Head from "next/head";

/*
 * This page presents the FICOLO‑OUS Foundation Program using the same
 * visual language as the existing FICOLO website. It reuses custom
 * colour classes (ficolo‑blue, bg‑ficolo‑blue, border‑ficolo‑blue), a
 * glass‑effect card style and the animated pastel gradient backdrop.
 *
 * The content is distilled from the program catalogue: a 6‑month
 * pathway that prepares pre‑university students with an American GED
 * high‑school equivalency, Japanese language skills and hands‑on
 * digital skills. Graduates can seamlessly progress into the
 * 2+2 articulation programme at Okayama University of Science (OUS) in
 * Japan. Key sections explain the programme overview, highlights,
 * eligibility and the step‑by‑step pathway.
 */

export default function FoundationProgram() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Scroll reveal behaviour reused from the main homepage: elements
  // with the `reveal` class animate into view on scroll.
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
      {/* Metadata */}
      <Head>
        <title>FICOLO‑OUS Foundation Program | FICOLO</title>
        <meta
          name="description"
          content="Prepare for your future in Japan with the FICOLO‑OUS Foundation Program. Complete your GED, learn Japanese and build digital skills before transferring to Okayama University of Science."
        />
        <link rel="icon" href="/favicon.ico" />
        {/* Google fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap"
          rel="stylesheet"
        />
          {/* Load Tailwind via CDN to support utility classes used throughout the page. */}
          <script
            src="https://cdn.tailwindcss.com"
            // @ts-ignore: external script injection is safe here
          ></script>
      </Head>

      {/* Custom styles for FICOLO theme. These mirror styles defined on
          the homepage: brand colours, glass effect and the animated
          pastel gradient background. */}
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
        .ficolo-pixels {
          background: linear-gradient(
            45deg,
            #f97316,
            #fbbf24,
            #22d3ee,
            #a855f7,
            #ec4899
          );
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

      {/* Header & Navigation with Glass Effect */}
      <header
        id="navbar"
        className="glass-effect fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 rounded-2xl transition-all duration-300"
      >
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <a href="/" className="flex items-center space-x-2">
            <div className="flex items-end space-x-0.5">
              <div className="w-2 h-2 bg-orange-500 rounded-sm"></div>
              <div className="w-2 h-4 bg-yellow-400 rounded-sm"></div>
              <div className="w-2 h-6 bg-cyan-400 rounded-sm"></div>
            </div>
            <span className="text-2xl font-bold ficolo-blue">FICOLO</span>
          </a>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="/" className="text-gray-700 font-semibold hover:ficolo-blue transition">
              Home
            </a>
            <a href="#overview" className="text-gray-700 font-semibold hover:ficolo-blue transition">
              Overview
            </a>
            <a href="#highlights" className="text-gray-700 font-semibold hover:ficolo-blue transition">
              Highlights
            </a>
            <a href="#pathway" className="text-gray-700 font-semibold hover:ficolo-blue transition">
              Pathway
            </a>
            <a
              href="#eligibility"
              className="text-gray-700 font-semibold hover:ficolo-blue transition"
            >
              Eligibility
            </a>
          </nav>
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-ficolo-blue"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        <div className={`${mobileOpen ? "block" : "hidden"} md:hidden px-6 pb-4`}>
          <a
            href="/"
            className="block py-2 text-gray-700 font-semibold hover:ficolo-blue transition"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </a>
          <a
            href="#overview"
            className="block py-2 text-gray-700 font-semibold hover:ficolo-blue transition"
            onClick={() => setMobileOpen(false)}
          >
            Overview
          </a>
          <a
            href="#highlights"
            className="block py-2 text-gray-700 font-semibold hover:ficolo-blue transition"
            onClick={() => setMobileOpen(false)}
          >
            Highlights
          </a>
          <a
            href="#pathway"
            className="block py-2 text-gray-700 font-semibold hover:ficolo-blue transition"
            onClick={() => setMobileOpen(false)}
          >
            Pathway
          </a>
          <a
            href="#eligibility"
            className="block py-2 text-gray-700 font-semibold hover:ficolo-blue transition"
            onClick={() => setMobileOpen(false)}
          >
            Eligibility
          </a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section
          id="hero"
          className="min-h-screen flex items-center pt-20 relative overflow-hidden animated-gradient-bg"
        >
          <div className="container mx-auto px-6 text-center z-10">
            <h1 className="text-4xl md:text-7xl font-black ficolo-blue leading-tight mb-4">
              FICOLOxOUS Foundation Program
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              🎯 6-8 month program • 🎓 GED preparation • 🇯🇵 Japanese JLPT N3 • 💻 Coding skills • 🏫 Direct pathway to Okayama University of Science
            </p>
            <a
              href="#highlights"
              className="bg-ficolo-blue text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-800 transition shadow-xl transform hover:scale-105"
            >
              Explore Highlights
            </a>
          </div>
        </section>

        {/* Overview Section */}
        <section
          id="overview"
          className="py-20 bg-gray-50"
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-12 reveal">
              <h2 className="text-3xl md:text-4xl font-bold ficolo-blue">
                🎯 Who Should Enroll?
              </h2>
              <p className="text-gray-600 mt-2">
                Two pathways designed for different academic backgrounds
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="glass-effect p-8 rounded-2xl text-center reveal">
                <div className="text-6xl mb-4">📚</div>
                <h3 className="text-xl font-bold ficolo-blue mb-3">Without Myanmar Grade 12</h3>
                <p className="text-gray-600 mb-4">
                  Complete GED preparation + Japanese + Coding
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-700 font-semibold">⏱️ Duration: 6-8 months</p>
                </div>
              </div>
              <div className="glass-effect p-8 rounded-2xl text-center reveal">
                <div className="text-6xl mb-4">�</div>
                <h3 className="text-xl font-bold ficolo-blue mb-3">With Myanmar Grade 12</h3>
                <p className="text-gray-600 mb-4">
                  Focus on Japanese language + Coding skills
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-green-700 font-semibold">⏱️ Duration: 6 months</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section
          id="highlights"
          className="py-20 animated-gradient-bg"
        >
          <h2 className="text-3xl md:text-4xl font-bold ficolo-blue">
            📚 Core Focus Areas
          </h2>
          <p className="text-gray-600 mt-2">
            Three essential pillars for university success
          </p>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* GED Preparation Card */}
            <div className="glass-effect p-6 rounded-lg border border-ficolo-blue">
              <h3 className="text-xl font-semibold ficolo-blue mb-2">
                GED High‑School Equivalency
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                Achieve an American GED certification covering Maths, Science,
                Social Studies and Reasoning through Language Arts. This
                qualification meets OUS entry requirements and is recognised
                worldwide.
              </p>
            </div>
            {/* Japanese Language Card */}
            <div className="glass-effect p-6 rounded-lg border border-ficolo-blue">
              <h3 className="text-xl font-semibold ficolo-blue mb-2">
                Japanese Language &amp; Culture
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                Build conversational fluency (JLPT N4/N3 level) through
                immersive classes and cultural activities. Gain the
                confidence to live and study in Japan.
              </p>
            </div>
            {/* Digital Skills Card */}
            <div className="glass-effect p-6 rounded-lg border border-ficolo-blue">
              <h3 className="text-xl font-semibold ficolo-blue mb-2">
                Digital &amp; Coding Skills
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                Learn practical ICT skills including programming,
                computational thinking and digital literacy. Develop
                projects that showcase your ability to solve real‑world
                problems.
              </p>
            </div>
            {/* Support & Community Card */}
            <div className="glass-effect p-6 rounded-lg border border-ficolo-blue">
              <h3 className="text-xl font-semibold ficolo-blue mb-2">
                Personalised Support
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                Benefit from small class sizes, experienced instructors
                and dedicated mentorship. We guide you through every
                step – from GED prep to university applications.
              </p>
            </div>
            {/* Pathway Guarantee Card */}
            <div className="glass-effect p-6 rounded-lg border border-ficolo-blue">
              <h3 className="text-xl font-semibold ficolo-blue mb-2">
                Guaranteed Pathway to OUS
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                Upon successful completion you are guaranteed a place in
                the 2+2 programme at Okayama University of Science –
                study two years on the Kurashiki campus and finish with
                two years in your chosen major.
              </p>
            </div>
            {/* Scholarships & Funding Card */}
            <div className="glass-effect p-6 rounded-lg border border-ficolo-blue">
              <h3 className="text-xl font-semibold ficolo-blue mb-2">
                Scholarships &amp; Living Support
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                Access merit‑based scholarships and affordable housing
                options in Japan. We assist with visa processing and
                provide pastoral care during your studies.
              </p>
            </div>
          </div>
        </section>

        {/* Pathway Section */}
        <section
          id="pathway"
          className="py-16 px-6 md:px-20 bg-white reveal"
        >
          <h2 className="text-2xl md:text-3xl font-bold ficolo-blue mb-8 text-center">
            Pathway to Okayama University of Science
          </h2>
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:justify-between space-y-10 md:space-y-0 md:space-x-4">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center md:w-1/5">
              <div className="w-12 h-12 rounded-full bg-ficolo-blue text-white flex items-center justify-center font-bold mb-4">
                1
              </div>
              <h4 className="font-semibold ficolo-blue mb-2">
                6‑Month Foundation
              </h4>
              <p className="text-sm text-gray-700">
                Complete GED, Japanese and digital skills training at
                FICOLO.
              </p>
            </div>
            <div className="hidden md:block flex-1 h-0.5 bg-gray-300"></div>
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center md:w-1/5">
              <div className="w-12 h-12 rounded-full bg-ficolo-blue text-white flex items-center justify-center font-bold mb-4">
                2
              </div>
              <h4 className="font-semibold ficolo-blue mb-2">
                Years 1–2 at OUS
              </h4>
              <p className="text-sm text-gray-700">
                Begin the general education phase on the Kurashiki
                campus – focus on science, maths and Japanese.
              </p>
            </div>
            <div className="hidden md:block flex-1 h-0.5 bg-gray-300"></div>
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center md:w-1/5">
              <div className="w-12 h-12 rounded-full bg-ficolo-blue text-white flex items-center justify-center font-bold mb-4">
                3
              </div>
              <h4 className="font-semibold ficolo-blue mb-2">
                Years 3–4 Specialisation
              </h4>
              <p className="text-sm text-gray-700">
                Transfer into your chosen major (Engineering, Science,
                IT etc.) and complete the degree in English or
                Japanese.
              </p>
            </div>
            <div className="hidden md:block flex-1 h-0.5 bg-gray-300"></div>
            {/* Step 4 */}
            <div className="flex flex-col items-center text-center md:w-1/5">
              <div className="w-12 h-12 rounded-full bg-ficolo-blue text-white flex items-center justify-center font-bold mb-4">
                4
              </div>
              <h4 className="font-semibold ficolo-blue mb-2">
                Graduate &amp; Thrive
              </h4>
              <p className="text-sm text-gray-700">
                Earn a bachelor’s degree from OUS and open the door
                to global opportunities in Japan and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* Eligibility Section */}
        <section
          id="eligibility"
          className="py-16 px-6 md:px-20 animated-gradient-bg reveal"
        >
          <h2 className="text-2xl md:text-3xl font-bold ficolo-blue mb-8 text-center">
            Eligibility &amp; Requirements
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-effect p-6 rounded-lg border border-ficolo-blue">
              <h3 className="text-lg font-semibold ficolo-blue mb-2">
                Who Can Apply?
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm md:text-base">
                <li>Students aged 16+ with Year 10/O‑Level or equivalent education</li>
                <li>Non‑native English speakers are welcome – instruction is in English</li>
                <li>Commitment to full‑time study for the 6‑month foundation programme</li>
                <li>Pass a basic maths and English placement assessment</li>
              </ul>
            </div>
            <div className="glass-effect p-6 rounded-lg border border-ficolo-blue">
              <h3 className="text-lg font-semibold ficolo-blue mb-2">
                What You’ll Need
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm md:text-base">
                <li>Copy of most recent school transcript/certificate</li>
                <li>Motivation letter outlining your goals and interest in studying in Japan</li>
                <li>Valid passport (or national ID) for visa application</li>
                <li>Proof of financial support for tuition and living expenses</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12 reveal">
              <h2 className="text-3xl md:text-4xl font-bold ficolo-blue">
                🚀 GED Placement Process
              </h2>
              <p className="text-gray-600 mt-2">
                Step-by-step pathway visualization
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-4 gap-4 mb-12">
                <div className="glass-effect p-6 rounded-2xl text-center reveal">
                  <div className="w-12 h-12 rounded-full bg-ficolo-blue text-white flex items-center justify-center font-bold mx-auto mb-4">1</div>
                  <h4 className="font-bold ficolo-blue mb-2">📝 Placement Test</h4>
                  <p className="text-sm text-gray-600">English, Math, Science, Social Studies</p>
                </div>
                <div className="glass-effect p-6 rounded-2xl text-center reveal">
                  <div className="w-12 h-12 rounded-full bg-ficolo-blue text-white flex items-center justify-center font-bold mx-auto mb-4">2</div>
                  <h4 className="font-bold ficolo-blue mb-2">📚 Track Assignment</h4>
                  <p className="text-sm text-gray-600">GED (6mo) or Pre-GED (4mo) + GED</p>
                </div>
                <div className="glass-effect p-6 rounded-2xl text-center reveal">
                  <div className="w-12 h-12 rounded-full bg-ficolo-blue text-white flex items-center justify-center font-bold mx-auto mb-4">3</div>
                  <h4 className="font-bold ficolo-blue mb-2">✍️ Official GED Exam</h4>
                  <p className="text-sm text-gray-600">All four subjects examination</p>
                </div>
                <div className="glass-effect p-6 rounded-2xl text-center reveal">
                  <div className="w-12 h-12 rounded-full bg-ficolo-blue text-white flex items-center justify-center font-bold mx-auto mb-4">4</div>
                  <h4 className="font-bold ficolo-blue mb-2">🎓 University Ready</h4>
                  <p className="text-sm text-gray-600">Eligible for OUS admission</p>
                </div>
              </div>
            </div>

            <div className="text-center reveal">
              <h3 className="text-2xl font-bold ficolo-blue mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
                Join the FICOLOxOUS Foundation Program and prepare for your Bachelor of Information Science and Engineering at Okayama University of Science, Japan.
              </p>
              <a
                href="/register"
                className="bg-ficolo-blue text-white py-4 px-8 rounded-full text-lg font-semibold hover:bg-blue-800 transition shadow-xl transform hover:scale-105 inline-block"
              >
                Apply Now
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 text-center text-sm">
          <p>&copy; 2025 FICOLO – AI &amp; Digital Learning Center. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}