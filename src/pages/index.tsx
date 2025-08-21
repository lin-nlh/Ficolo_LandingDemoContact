import { useEffect, useState } from "react"
import Head from "next/head"

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false)

  // Scroll reveal logic
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
          {/* Load Tailwind via CDN to support utility classes used throughout the page. */}
          <script
            src="https://cdn.tailwindcss.com"
            // @ts-ignore: external script injection is safe here
          ></script>
        {/* Custom styles for FICOLO design */}
        <style>{`
          body { font-family: 'Inter', sans-serif; background-color: #f0f4f8; }
          /* Custom brand colors inspired by the logo */
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
      {/* Header & Navigation with Glass Effect */}
      <header
        id="navbar"
        className="glass-effect fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 rounded-2xl transition-all duration-300"
      >
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <a href="#" className="flex items-center space-x-2">
            <div className="flex items-end space-x-0.5">
              <div className="w-2 h-2 bg-orange-500 rounded-sm"></div>
              <div className="w-2 h-4 bg-yellow-400 rounded-sm"></div>
              <div className="w-2 h-6 bg-cyan-400 rounded-sm"></div>
            </div>
            <span className="text-2xl font-bold ficolo-blue">FICOLO</span>
          </a>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#hero" className="text-gray-700 font-semibold hover:ficolo-blue transition">
              Home
            </a>
            <a href="#about" className="text-gray-700 font-semibold hover:ficolo-blue transition">
              About
            </a>
            <a href="#programs" className="text-gray-700 font-semibold hover:ficolo-blue transition">
              Programs
            </a>
            <a href="#philosophy" className="text-gray-700 font-semibold hover:ficolo-blue transition">
              Philosophy
            </a>
            <a
              href="#contact"
              className="bg-ficolo-blue text-white px-5 py-2 rounded-full hover:bg-blue-800 transition shadow-lg"
            >
              Register Now
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
            href="#hero"
            className="block py-2 text-gray-700 font-semibold hover:ficolo-blue transition"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="block py-2 text-gray-700 font-semibold hover:ficolo-blue transition"
            onClick={() => setMobileOpen(false)}
          >
            About
          </a>
          <a
            href="#programs"
            className="block py-2 text-gray-700 font-semibold hover:ficolo-blue transition"
            onClick={() => setMobileOpen(false)}
          >
            Programs
          </a>
          <a
            href="#philosophy"
            className="block py-2 text-gray-700 font-semibold hover:ficolo-blue transition"
            onClick={() => setMobileOpen(false)}
          >
            Philosophy
          </a>
          <a
            href="#contact"
            className="block mt-2 bg-ficolo-blue text-white text-center px-5 py-2 rounded-full hover:bg-blue-800 transition shadow-lg"
            onClick={() => setMobileOpen(false)}
          >
            Register Now
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
              Let&apos;s Code, Create &amp; Imagine<br />
              <span className="ficolo-pixels">The FICOLO Way!</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Equipping students aged 8–16 with future-ready AI &amp; Digital Skills to
              open doors to a brighter tomorrow.
            </p>
            <a
              href="#programs"
              className="bg-ficolo-blue text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-800 transition shadow-xl transform hover:scale-105"
            >
              Explore Our Programs
            </a>
          </div>
        </section>
        {/* About Us Section */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12 reveal">
              <h2 className="text-3xl md:text-4xl font-bold ficolo-blue">
                Opening Doors to a Brighter Tomorrow
              </h2>
              <p className="text-gray-600 mt-2">
                Our vision is to empower every student with the skills and confidence for the
                future.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="reveal">
                <h3 className="text-2xl font-bold ficolo-blue mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be a leading digital learning network that equips every student with
                  future-ready technology skills, confidence in their abilities, and the
                  clarity to choose a path they truly enjoy in life.
                </p>
              </div>
              <div className="reveal">
                <h3 className="text-2xl font-bold ficolo-blue mb-4">Our Mission</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-cyan-100 text-cyan-700 p-2 rounded-full mr-4">
                      ✔
                    </span>
                    <span>
                      <strong>World-Class Education:</strong> Provide UK-standard computing and
                      AI education for globally recognized skills.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-orange-100 text-orange-700 p-2 rounded-full mr-4">
                      ✔
                    </span>
                    <span>
                      <strong>Empower Potential:</strong> Foster critical thinking, creativity,
                      resilience, and a love for lifelong learning.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-700 p-2 rounded-full mr-4">
                      ✔
                    </span>
                    <span>
                      <strong>Future-Ready Pathways:</strong> Equip learners for smooth
                      transitions into higher education and the tech industry.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Programs Section with Glass Effect Cards */}
        <section id="programs" className="py-20 animated-gradient-bg">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12 reveal">
              <h2 className="text-3xl md:text-4xl font-bold ficolo-blue">
                Our Program Offerings
              </h2>
              <p className="text-gray-600 mt-2">
                Structured pathways for every age and skill level.
              </p>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Program Card 1 */}
              <div className="glass-effect p-8 rounded-2xl transform hover:-translate-y-2 transition-transform duration-300 reveal">
                <h3 className="text-xl font-bold ficolo-blue mb-3">
                  FICOLO-OUS Foundation Program
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Target: Pre-University Students
                </p>
                <p className="text-gray-700 mb-4">
                  A 6-month program combining GED prep, Japanese language training, and IT
                  education for a pathway to Okayama University of Science, Japan.
                </p>
                <a href="/foundation-program" className="font-semibold text-blue-700 hover:text-blue-900">
                  Learn More →
                </a>
              </div>
              {/* Program Card 2 */}
              <div className="glass-effect p-8 rounded-2xl transform hover:-translate-y-2 transition-transform duration-300 reveal">
                <h3 className="text-xl font-bold ficolo-blue mb-3">
                  Digital Skills for Young Learners
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Target: Primary to Secondary Students
                </p>
                <p className="text-gray-700 mb-4">
                  A series of 4-month modules from Digital Foundations to Advanced Pathways in
                  ICT and Computer Science, aligned with GCE O/A Levels.
                </p>
                <a href="#" className="font-semibold text-blue-700 hover:text-blue-900">
                  Learn More →
                </a>
              </div>
              {/* Program Card 3 */}
              <div className="glass-effect p-8 rounded-2xl transform hover:-translate-y-2 transition-transform duration-300 reveal">
                <h3 className="text-xl font-bold ficolo-blue mb-3">
                  FICOLO Teacher Training Program
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Target: Aspiring Digital Trainers
                </p>
                <p className="text-gray-700 mb-4">
                  A 6-month program to equip educators with the skills to become certified
                  digital trainers, with potential employment at FICOLO for top performers.
                </p>
                <a href="#" className="font-semibold text-blue-700 hover:text-blue-900">
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Learning Philosophy Section */}
        <section id="philosophy" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12 reveal">
              <h2 className="text-3xl md:text-4xl font-bold ficolo-blue">
                Our Learning Philosophy
              </h2>
              <p className="text-gray-600 mt-2">
                A complete approach combining skills, practice, teamwork, and self-discovery.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-6 rounded-lg shadow-md reveal">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-lg font-bold ficolo-blue mb-2">Learning to Know</h3>
                <p className="text-gray-600 text-sm">
                  Building solid foundations in computing, AI, and digital literacy.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md reveal">
                <div className="text-4xl mb-4">🛠️</div>
                <h3 className="text-lg font-bold ficolo-blue mb-2">Learning to Do</h3>
                <p className="text-gray-600 text-sm">
                  Applying knowledge through real-world projects and coding challenges.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md reveal">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-lg font-bold ficolo-blue mb-2">
                  Learning to Live Together
                </h3>
                <p className="text-gray-600 text-sm">
                  Encouraging teamwork, peer-to-peer learning, and respect.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md reveal">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-lg font-bold ficolo-blue mb-2">Learning to Be</h3>
                <p className="text-gray-600 text-sm">
                  Helping students discover their passions and purpose.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section id="contact" className="py-20 bg-ficolo-blue text-white">
          <div className="container mx-auto px-6 text-center reveal">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Shape the Future?
            </h2>
            <p className="mt-4 mb-8 max-w-2xl mx-auto">
              Join the FICOLO community and start your journey in the digital world. Contact us
              for enrollment or visit our learning center.
            </p>
            <div className="glass-effect text-gray-800 rounded-2xl p-6 max-w-md mx-auto mb-8">
              <h4 className="font-bold text-lg ficolo-blue">Our Location</h4>
              <p className="mt-2">
                Room B-07, Myanmar Culture Valley, U Wisara Rd., People's Park Compound,
                Dagon Township, Yangon
              </p>
            </div>
            <a
              href="#"
              className="bg-white ficolo-blue px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition shadow-xl transform hover:scale-105"
            >
              Register Your Interest
            </a>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 text-center text-sm">
          <p>&copy; 2024 FICOLO - Fun In School. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  )
}
