import React, { useMemo } from 'react';
import Head from 'next/head';

// Minimal badge component
function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide glass-effect">
      {children}
    </span>
  );
}

// Simple card wrapper
function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border shadow-sm p-5 glass-effect ${className}`}>{children}</div>
  );
}

// Step item
function Step({
  index,
  title,
  desc,
}: {
  index: number | string;
  title: string;
  desc: string;
}) {
  return (
    <div className="relative pl-10">
      <div className="absolute left-0 top-1.5 flex h-7 w-7 items-center justify-center rounded-full border glass-effect font-semibold ficolo-blue">
        {index}
      </div>
      <h4 className="font-semibold leading-tight ficolo-blue">{title}</h4>
      <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}

export default function Foundation() {
  const facts = useMemo(
    () => [
      {
        icon: "⏱️",
        title: "Program Duration",
        text: "Standard 6 months (accelerated). GED track may extend to 6–8 months based on placement and proficiency.",
      },
      {
        icon: "👥",
        title: "Who Should Enroll?",
        text: "(1) Students without Myanmar Grade 12 — includes GED preparation. (2) Students with Grade 12 — focus on Japanese and digital skills.",
      },
      {
        icon: "🎓",
        title: "Outcome",
        text: "Preparation to apply for OUS (Japan) Bachelor of Information Science & Engineering via the OUS–MSC pathway.",
      },
    ],
    []
  );

  return (
    <>
      <Head>
        <title>FICOLO‑OUS Foundation Program | FICOLO</title>
        <meta
          name="description"
          content="Prepare for your future in Japan with the FICOLO‑OUS Foundation Program. Complete your GED, learn Japanese and build digital skills before transferring to Okayama University of Science."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen w-full animated-bg text-gray-900">
        {/* Add CSS for animations */}
        <style jsx>{`
          .glass-effect {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
          
          .ficolo-blue {
            color: #1e40af;
          }
          
          .bg-ficolo-blue {
            background-color: #1e40af;
          }
          
          .animated-bg {
            background: linear-gradient(-45deg, #667eea, #764ba2, #f093fb, #f5576c);
            background-size: 400% 400%;
            animation: gradient 15s ease infinite;
          }
          
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>

        {/* HERO */}
        <section className="mx-auto max-w-6xl px-5 pb-8 pt-14 sm:pb-12 sm:pt-20">
          <div className="text-center">
            <Badge>FICOLO × OUS Foundation Program</Badge>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl ficolo-blue">
              Your Path to Studying IT in Japan — Clear, Structured, Attainable
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-base sm:text-lg text-gray-600">
              A focused preparation to meet Okayama University of Science (OUS) entry expectations:
              GED (if needed), Japanese (up to JLPT N3), and core digital skills.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              <Badge>JLPT N3 Target</Badge>
              <Badge>GED Included (if no G12)</Badge>
              <Badge>Digital Skills & Coding</Badge>
            </div>
          </div>

          {/* Quick Facts */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {facts.map((f, i) => (
              <div key={i}>
                <Card>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 rounded-xl border p-2 glass-effect text-2xl">{f.icon}</div>
                    <div>
                      <h3 className="font-semibold ficolo-blue">{f.title}</h3>
                      <p className="mt-1 text-sm text-gray-600">{f.text}</p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* CORE FOCUS */}
        <section className="mx-auto max-w-6xl px-5 py-10">
          <div className="grid items-stretch gap-5 md:grid-cols-3">
            <Card>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📚</span>
                <h3 className="font-semibold ficolo-blue">GED Exam Preparation</h3>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                For students without Myanmar Grade 12. Structured instruction leading to official exams in English, Math,
                Science and Social Studies.
              </p>
            </Card>
            <Card>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🗾</span>
                <h3 className="font-semibold ficolo-blue">Japanese Language Training</h3>
              </div>
              <p className="mt-2 text-sm text-gray-600">JLPT levels: N5 → N4 → N3.</p>
            </Card>
            <Card>
              <div className="flex items-center gap-3">
                <span className="text-2xl">💻</span>
                <h3 className="font-semibold ficolo-blue">Coding & Digital Skills</h3>
              </div>
              <p className="mt-2 text-sm text-gray-600">Foundational programming, problem‑solving and computing literacy.</p>
            </Card>
          </div>
        </section>

        {/* ENTRY REQUIREMENTS FOR OUS */}
        <section className="mx-auto max-w-6xl px-5 py-6">
          <Card className="bg-white/80">
            <div className="flex items-center gap-3">
              <span className="text-2xl">✅</span>
              <h3 className="text-lg font-semibold ficolo-blue">Entry Requirements for OUS (to apply for the degree)</h3>
            </div>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border p-4 glass-effect">
                <p className="text-sm font-semibold ficolo-blue">Age</p>
                <p className="text-sm text-gray-600">18 years or older</p>
              </div>
              <div className="rounded-xl border p-4 glass-effect">
                <p className="text-sm font-semibold ficolo-blue">Japanese Proficiency</p>
                <p className="text-sm text-gray-600">JLPT N3 or higher</p>
              </div>
              <div className="rounded-xl border p-4 glass-effect">
                <p className="text-sm font-semibold ficolo-blue">Academic Qualification</p>
                <p className="text-sm text-gray-600">Myanmar Grade 12 certificate or GED</p>
              </div>
            </div>
          </Card>
        </section>

        {/* AGE-BASED LEARNING PATH */}
        <section className="mx-auto max-w-6xl px-5 py-10">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-2xl">🧭</span>
            <h3 className="text-lg font-semibold ficolo-blue">Structured Learning Path by Age</h3>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <h4 className="font-semibold ficolo-blue">Ages 16–17</h4>
              <p className="mt-1 text-sm text-gray-600">One‑year GED Foundation Program at partner private schools.</p>
            </Card>
            <Card>
              <h4 className="font-semibold ficolo-blue">Age 18+</h4>
              <p className="mt-1 text-sm text-gray-600">6‑month accelerated GED program at FICOLO (if applicable).</p>
            </Card>
            <Card>
              <h4 className="font-semibold ficolo-blue">Standard GED Pathway</h4>
              <p className="mt-1 text-sm text-gray-600">6–8 months of structured instruction and preparation.</p>
            </Card>
          </div>
        </section>

        {/* GED PLACEMENT & PREP FLOW */}
        <section className="mx-auto max-w-6xl px-5 py-10">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-2xl">🛤️</span>
            <h3 className="text-lg font-semibold ficolo-blue">GED Placement & Preparation Path</h3>
          </div>
          <Card>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h4 className="mb-2 font-semibold ficolo-blue">Step 1 — Placement Test</h4>
                <p className="text-sm text-gray-600">Subjects: English, Mathematics, Science, Social Studies.</p>
                <div className="mt-4 space-y-3">
                  <Step index={"1A"} title="If Passed" desc="6‑month GED instructional track → 2‑month intensive exam prep." />
                  <Step index={"1B"} title="If Not Passed" desc="4‑month Pre‑GED → progress to standard GED track upon completion." />
                </div>
              </div>
              <div className="md:border-l md:pl-8">
                <h4 className="mb-2 font-semibold ficolo-blue">Final Step</h4>
                <p className="text-sm text-gray-600">
                  Sit official GED examinations in all four subjects. Upon passing, you are eligible for admission to OUS or other
                  international universities and colleges.
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm text-gray-700">
                  <span className="inline-flex items-center gap-2"><span className="text-lg">📚</span> GED Exam</span>
                  <span className="text-lg">→</span>
                  <span className="inline-flex items-center gap-2"><span className="text-lg">🎓</span> University Eligibility</span>
                </div>
              </div>
            </div>
          </Card>
          <p className="mt-3 text-xs text-gray-500">Visual overview: Placement Test → GED/Pre‑GED Track → GED Exam → University Entry</p>
        </section>

        {/* 2+2 ACADEMIC PATHWAY */}
        <section className="mx-auto max-w-6xl px-5 pb-16">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-2xl">🎓</span>
            <h3 className="text-lg font-semibold ficolo-blue">Academic Pathway After Completion</h3>
          </div>
          <Card>
            <div className="grid items-center gap-4 md:grid-cols-3">
              <div className="rounded-xl border p-4 text-center glass-effect">
                <p className="text-sm font-semibold ficolo-blue">Years 1–2</p>
                <p className="text-sm text-gray-600">MSC (Myanmar Satellite Center) — foundational coursework, Japanese immersion, academic readiness</p>
              </div>
              <div className="hidden items-center justify-center md:flex">
                <span className="text-2xl ficolo-blue">→</span>
              </div>
              <div className="rounded-xl border p-4 text-center glass-effect">
                <p className="text-sm font-semibold ficolo-blue">Years 3–4</p>
                <p className="text-sm text-gray-600">Okayama University of Science (Japan) — specialized engineering curriculum and research exposure</p>
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-700">
              Graduates of the foundation program are prepared to apply for the OUS Bachelor of Information Science & Engineering.
            </p>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="mx-auto max-w-6xl px-5 pb-20">
          <div className="text-center">
            <Card className="bg-white/90">
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
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}
