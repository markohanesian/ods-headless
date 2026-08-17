import React from "react";
import Link from "next/link";
import TeamSection from "@/components/TeamSection";

const CORE_STANDARDS = [
  {
    title: "Proven Technical Mastery",
    description: "We engineer resilient digital platforms designed to handle growth without crashing, slowing down, or breaking under load.",
    badge: "STANDARD 01"
  },
  {
    title: "Inclusive Digital Design",
    description: "We build fully accessible platforms that deliver a seamless experience for every potential client on every device.",
    badge: "STANDARD 02"
  },
  {
    title: "Strategy-First Architecture",
    description: "We pinpoint your exact operational bottlenecks before writing code, ensuring every feature directly drives business ROI.",
    badge: "STANDARD 03"
  }
];

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen">
      {/* Section 1: Header */}
      <section className="px-6 lg:px-12 pt-36 pb-24 border-b border-zinc-100 dark:border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="label-mono text-accent-blue mb-4">
            ABOUT OHANESIAN DIGITAL SOLUTIONS
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-8 max-w-5xl leading-[1.08]">
            Your Partner in Engineering Practical Business Growth
          </h1>
          <div className="h-px w-24 bg-accent-blue mb-12"></div>
          
          <div className="max-w-4xl">
            <p className="text-xl sm:text-2xl font-light leading-relaxed text-zinc-700 dark:text-zinc-200">
              You shouldn&apos;t have to waste time wrestling with fragile website templates or tracking down lost leads. At Ohanesian Digital Solutions (ODS), we combine senior software engineering with strategic business insight to build automated, accessible web systems. We handle the technical heavy lifting so you can focus on scaling your business and serving your clients.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Core Standards */}
      <section className="px-6 lg:px-12 py-24 bg-zinc-50 dark:bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="label-mono text-accent-blue mb-2">
              SECTION 02 // CORE STANDARDS
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Engineering Principles That Drive Value
            </h2>
            <div className="h-px w-full bg-zinc-200 dark:bg-zinc-800 mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CORE_STANDARDS.map((standard) => (
              <div 
                key={standard.title}
                className="p-8 sm:p-10 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm hover:border-accent-blue/40 transition-colors"
              >
                <div className="font-mono text-xs font-bold text-accent-blue tracking-wider mb-4">
                  {standard.badge}
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 tracking-tight">
                  {standard.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
                  {standard.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Meet the Team */}
      <TeamSection />

      {/* CTA Section */}
      <section className="px-6 lg:px-12 py-32 bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 text-center transition-colors duration-300">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mb-8 leading-[1.15]">
            Ready to Build Your Digital Engine?
          </h2>
          <p className="text-lg sm:text-xl text-zinc-300 dark:text-zinc-600 mb-12 leading-relaxed font-light">
            We are committed to your business&apos;s long-term success. Contact us today to map out your custom digital strategy.
          </p>
          <Link 
            href="/contact"
            className="btn-brand px-8 py-4 text-base font-bold shadow-lg"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}

