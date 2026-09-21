import React from "react";
import Link from "next/link";
import AgencyIntakeForm from "@/components/AgencyIntakeForm";

export default function PartnershipsPage() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative flex flex-col items-center text-center justify-center min-h-[80vh] px-6 lg:px-12 pt-24 pb-24 bg-white dark:bg-zinc-950 overflow-hidden">
        {/* Background architectural grid effect */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-5xl z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 mb-8 sm:mb-12">
            <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse"></span>
            <span className="text-xs sm:text-sm font-mono font-medium tracking-wide text-zinc-600 dark:text-zinc-300 uppercase">
              WHITE-LABEL TECHNICAL PARTNERSHIPS // FOR PPC & CREATIVE AGENCIES
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter mb-8 text-zinc-900 dark:text-zinc-50 leading-[1.05]">
            Let us handle your dev pipeline. <br className="hidden md:block" />
            <span className="text-accent-blue">You keep your clients winning.</span>
          </h1>
          
          <p className="lead-text text-zinc-600 dark:text-zinc-300 max-w-3xl mb-12 text-lg sm:text-xl leading-relaxed font-light">
            Eliminate your development bottleneck. We engineer sub-second Next.js campaign landing pages and custom web platforms under your brand—shipped in 5 business days, tracking-verified, with strict NDA protection.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center mb-16">
            <a 
              href="#agency-intake" 
              className="btn-brand text-center px-8"
            >
              Request Agency Partnership Specs
            </a>
            <a 
              href="#standards" 
              className="btn-secondary text-center px-8"
            >
              View Engineering Standards
            </a>
          </div>

          {/* Proof Pills */}
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-3 py-1 text-xs font-mono bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 rounded">
              [ 5-Day Delivery Window ]
            </span>
            <span className="px-3 py-1 text-xs font-mono bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 rounded">
              [ 100% Core Web Vitals ]
            </span>
            <span className="px-3 py-1 text-xs font-mono bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 rounded">
              [ GA4 & Pixel Verified ]
            </span>
            <span className="px-3 py-1 text-xs font-mono bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 rounded">
              [ Strict Non-Poaching NDA ]
            </span>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE CONNECTION UI */}
      <section id="agency-intake" className="px-6 lg:px-12 py-24 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 text-center">
        <div className="max-w-4xl mx-auto mb-12">
          <div className="label-mono !text-zinc-500 mb-4 tracking-widest font-bold">DIRECT AGENCY CHANNEL</div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6">
            Check our capacity or request partnership pricing.
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 font-light max-w-2xl mx-auto">
            Have an active campaign or an upcoming client project? Let's talk turnaround.
          </p>
        </div>
        <AgencyIntakeForm />
      </section>

      {/* 3. SECTION 3: THE AGENCY PAIN POINTS */}
      <section className="px-6 lg:px-12 py-24 bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-16 text-center">
            Why internal agency dev pipelines break down.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-zinc-950 p-8 border border-zinc-200 dark:border-zinc-800 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 flex items-center justify-center mb-6">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">Slow Dev Destroys Campaign Momentum</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                Waiting 3–4 weeks for an in-house or freelance developer burns client trust. We ship conversion-ready landing pages in 5 business days so your media campaigns launch on schedule.
              </p>
            </div>
            <div className="bg-white dark:bg-zinc-950 p-8 border border-zinc-200 dark:border-zinc-800 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 flex items-center justify-center mb-6">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">Clunky Page Builders Ruin ROAS</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                Bloated Elementor and WordPress sites load slowly, causing paid mobile clicks to bounce before the pitch is seen. We deploy custom Next.js builds on edge infrastructure for sub-second speeds.
              </p>
            </div>
            <div className="bg-white dark:bg-zinc-950 p-8 border border-zinc-200 dark:border-zinc-800 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-accent-blue flex items-center justify-center mb-6">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">Broken Tracking & Data Leaks</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                A campaign is only as good as its attribution. We wire custom GA4 events, Meta/Google pixels, and automated CRM webhooks directly into the build so your reporting is pristine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION 4: HOW THE WHITE-LABEL PARTNERSHIP WORKS */}
      <section className="px-6 lg:px-12 py-24 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-16">
            How we work with your team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative pl-6 border-l-2 border-zinc-200 dark:border-zinc-800">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-700 dark:text-zinc-300">1</div>
              <h3 className="text-lg font-bold mb-3 mt-1">The Brief</h3>
              <p className="text-zinc-600 dark:text-zinc-400 font-light text-sm">Send us your Figma/wireframe or let our team handle direct-response UI architecture.</p>
            </div>
            <div className="relative pl-6 border-l-2 border-zinc-200 dark:border-zinc-800">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-700 dark:text-zinc-300">2</div>
              <h3 className="text-lg font-bold mb-3 mt-1">The Build</h3>
              <p className="text-zinc-600 dark:text-zinc-400 font-light text-sm">We code the solution cleanly in Next.js/Tailwind with zero plugin bloat.</p>
            </div>
            <div className="relative pl-6 border-l-2 border-zinc-200 dark:border-zinc-800">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-700 dark:text-zinc-300">3</div>
              <h3 className="text-lg font-bold mb-3 mt-1">Tracking & QA</h3>
              <p className="text-zinc-600 dark:text-zinc-400 font-light text-sm">Pixel-perfect GA4 events, custom forms, webhook endpoints, and WCAG accessibility compliance verified.</p>
            </div>
            <div className="relative pl-6 border-l-2 border-brand">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-brand flex items-center justify-center text-xs font-bold text-zinc-900">4</div>
              <h3 className="text-lg font-bold mb-3 mt-1">5-Day Launch</h3>
              <p className="text-zinc-600 dark:text-zinc-400 font-light text-sm">We deploy to your client's subdomain (e.g., offers.clientdomain.com) or hand over clean repository code under your agency's name.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION 5: PROOF & ARCHITECTURE STANDARDS */}
      <section id="standards" className="px-6 lg:px-12 py-24 bg-zinc-900 dark:bg-zinc-950 text-white border-y border-zinc-800">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-6 leading-tight">
              Engineered to protect your agency's reputation.
            </h2>
            <p className="text-zinc-400 text-lg font-light mb-8">
              We operate exclusively in the background to make you look like a technical powerhouse to your clients.
            </p>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            <div>
              <div className="text-accent-blue font-bold mb-2 uppercase text-sm tracking-wider">01. Sub-Second Edge Delivery</div>
              <h3 className="text-xl font-bold mb-3">Vercel / Edge-hosted code</h3>
              <p className="text-zinc-400 font-light text-sm leading-relaxed">Guaranteeing instant load times and lower cost-per-click across mobile and desktop devices.</p>
            </div>
            <div>
              <div className="text-accent-blue font-bold mb-2 uppercase text-sm tracking-wider">02. Looker Studio Readiness</div>
              <h3 className="text-xl font-bold mb-3">Automated lead pipelines</h3>
              <p className="text-zinc-400 font-light text-sm leading-relaxed">Connecting seamlessly to Google Sheets, CRMs, or Looker dashboards for instant client reporting.</p>
            </div>
            <div>
              <div className="text-accent-blue font-bold mb-2 uppercase text-sm tracking-wider">03. E-Commerce & Custom Scope</div>
              <h3 className="text-xl font-bold mb-3">Beyond standard pages</h3>
              <p className="text-zinc-400 font-light text-sm leading-relaxed">Ability to build custom Shopify apps, quote estimators, or complex workflows when standard landing pages aren't enough.</p>
            </div>
            <div>
              <div className="text-accent-blue font-bold mb-2 uppercase text-sm tracking-wider">04. Real Track Record</div>
              <h3 className="text-xl font-bold mb-3">Proven conversion engineering</h3>
              <p className="text-zinc-400 font-light text-sm leading-relaxed">Scaled client online sales by 3x–5x (The Pomegranate) and replaced manual intake workflows with automated pipelines (Four Seasons Ag).</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL CALL TO ACTION (PRE-FOOTER) */}
      <section className="px-6 lg:px-12 py-24 bg-white dark:bg-zinc-950 text-center border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl sm:text-5xl font-bold tracking-tighter mb-8 text-zinc-900 dark:text-zinc-50 leading-[1.15]">
            Ready to scale your agency's web production?
          </h3>
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Lock in dedicated development capacity for your upcoming ad campaigns.
          </p>
          <div className="flex justify-center">
            <a 
              href="#agency-intake"
              className="btn-brand text-center px-8 py-4 text-base font-bold shadow-lg hover:shadow-xl transition-all"
            >
              Request Agency Partnership Specs
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
