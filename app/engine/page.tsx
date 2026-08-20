import React from "react";
import Link from "next/link";
import ArchitectureComparison from "@/components/ArchitectureComparison";
import LeadIntakeTeaser from "@/components/LeadIntakeTeaser";

export const metadata = {
  title: "The ODS Core Engine | Enterprise Web Architecture",
  description: "Our proprietary Next.js and React monorepo architecture designed for businesses that demand maximum performance, uncompromising accessibility, and robust automation.",
};

export default function EnginePage() {
  return (
    <div className="pt-24 lg:pt-32">
      {/* Hero Section */}
      <section className="px-6 lg:px-12 py-20 md:py-32 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 mb-8">
            <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
            <span className="text-sm font-mono font-medium tracking-wide text-zinc-800 dark:text-zinc-200 uppercase">Proprietary Architecture</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-8 max-w-4xl">
            The ODS <span className="text-brand dark:text-accent-blue">Core Engine.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-300 font-light leading-relaxed max-w-3xl mb-12">
            The <strong className="font-semibold text-zinc-900 dark:text-zinc-50">ODS Core Engine</strong> is our proprietary web architecture designed for businesses that demand uncompromising performance. It delivers enterprise-grade speed, ironclad security, and deep workflow automation out of the box.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="#capabilities" className="btn-brand text-center">
              Explore Capabilities
            </Link>
            <Link href="/contact" className="btn-secondary text-center">
              Request a Technical Audit
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="px-6 lg:px-12 py-24 bg-zinc-50 dark:bg-zinc-900/50 border-t border-zinc-100 dark:border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6">
              Engineered for ROI.
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 text-lg leading-relaxed font-light">
              We did not just build another theme. We engineered a robust web monorepo designed to convert traffic into revenue, automate operational busywork, and eliminate technical debt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="p-8 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-sm">
              <div className="w-12 h-12 bg-accent-blue/10 dark:bg-accent-blue/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">100/100 Core Web Vitals</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                Sub-second load times on mobile and desktop. Faster load times directly correlate to lower bounce rates and higher conversion rates.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-sm">
              <div className="w-12 h-12 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">WCAG 2.1 AA Compliance</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                Zero automated accessibility violations. Protect your business from compliance liabilities while providing an inclusive experience for all users.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-sm">
              <div className="w-12 h-12 bg-purple-500/10 dark:bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">Conversational Intake</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                Say goodbye to clunky contact forms. Our integrated form engine screens leads, collects payments, and routes data directly to your CRM.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-8 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-sm">
              <div className="w-12 h-12 bg-orange-500/10 dark:bg-orange-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">Headless CMS Freedom</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                Built on cutting-edge web architecture, yet managed effortlessly. You get the extreme performance of a custom-coded platform with the flexibility for your non-technical team to easily update content anytime—the best of both worlds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reused Architecture Comparison */}
      <ArchitectureComparison />

      {/* Lead Intake Teaser */}
      <LeadIntakeTeaser />
    </div>
  );
}
