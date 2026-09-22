import LeadCaptureForm from "@/components/LeadCaptureForm";
import { CheckCircle2 } from "lucide-react";

export default function LeadCapturePage() {
  return (
    <div className="flex flex-col bg-white dark:bg-zinc-950 min-h-screen">
      {/* Section 1: Hero */}
      <section className="relative px-6 pt-24 pb-20 md:pt-32 md:pb-32 lg:px-12 flex flex-col items-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-zinc-100 dark:bg-grid-zinc-900/[0.04] bg-[size:32px_32px] -z-10" />
        <div className="max-w-4xl mx-auto space-y-8 z-10">
          <div className="label-mono flex sm:justify-center items-start sm:items-center text-left sm:text-center max-sm:tracking-normal max-sm:text-xs max-sm:leading-snug">
            <span className="flex-shrink-0 h-2 w-2 bg-brand mr-3 mt-1 sm:mt-0"></span>
            <span>CAMPAIGN LANDING PAGES • 1-WEEK DELIVERY</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-[-0.05em] leading-[0.95] text-zinc-900 dark:text-zinc-50">
            Turn ad clicks into paying clients.
          </h1>
          <p className="lead-text text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto font-light">
            Stop wasting ad spend, capture qualified leads, and grow your sales—with one dedicated page.
          </p>
          <div className="pt-8 flex flex-col items-center gap-4">
            <a 
              href="#lead-form"
              className="btn-brand"
            >
              Get Started on Your Landing Page
            </a>
            <p className="text-sm font-mono text-zinc-500 dark:text-zinc-400">
              Includes 30 days of live lead tracking and performance reporting.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Comparison */}
      <section className="px-6 py-24 bg-zinc-50/50 dark:bg-zinc-900/20 lg:px-12 border-t border-zinc-100 dark:border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50">
              Why send ad traffic to a dedicated landing page?
            </h2>
          </div>
          
          <div className="overflow-hidden border border-zinc-200 dark:border-zinc-800 rounded-xl bg-white dark:bg-zinc-950 shadow-sm">
            {/* Header row */}
            <div className="grid grid-cols-2 bg-zinc-100/80 dark:bg-zinc-900/80 border-b border-zinc-200 dark:border-zinc-800 divide-x divide-zinc-200 dark:divide-zinc-800">
              <div className="p-4 sm:p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                <span className="hidden sm:inline-block w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                <h3 className="text-sm sm:text-sm font-mono uppercase tracking-wider font-bold text-zinc-700 dark:text-zinc-300">
                  Standard Website
                </h3>
              </div>
              <div className="p-4 sm:p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 bg-accent-blue/5 dark:bg-accent-blue/10">
                <span className="hidden sm:inline-block w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <h3 className="text-sm sm:text-sm font-mono uppercase tracking-wider font-bold text-zinc-900 dark:text-zinc-50">
                  ODS Dedicated Page <span className="text-accent-blue font-normal block sm:inline mt-1 sm:mt-0">(Built to Convert)</span>
                </h3>
              </div>
            </div>

            {/* Comparison items */}
            <div className="divide-y divide-zinc-100 dark:divide-zinc-900">
              <div className="grid grid-cols-2 group hover:bg-zinc-50/50 dark:hover:bg-zinc-900/20 transition-colors">
                {/* Elsewhere Column */}
                <div className="p-4 sm:p-6 md:p-8 flex flex-col sm:flex-row items-start gap-3 border-r border-zinc-100 dark:border-zinc-900">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-red-100 dark:bg-red-950/50 text-red-600 dark:text-red-400 flex items-center justify-center text-sm sm:text-sm font-bold mt-0.5">
                    ✕
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-snug sm:leading-relaxed">
                    Multi-link navigation menus, slow load times, confusing layouts, and high bounce rates that waste paid clicks.
                  </p>
                </div>

                {/* ODS Column */}
                <div className="p-4 sm:p-6 md:p-8 flex flex-col sm:flex-row items-start gap-3 bg-accent-blue/[0.02] dark:bg-accent-blue/[0.03]">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-sm sm:text-sm font-bold mt-0.5">
                    ✓
                  </div>
                  <p className="text-zinc-900 dark:text-zinc-100 font-medium text-sm sm:text-base leading-snug sm:leading-relaxed">
                    Direct headline, instant mobile loading, one clear action, and built-in tracking that proves your return on ad spend.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: What We Deliver */}
      <section className="px-6 py-24 bg-zinc-900 dark:bg-zinc-950 text-white lg:px-12 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:flex justify-between items-end">
            <div className="max-w-2xl space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">Everything you need to turn clicks into customers</h2>
              <div className="h-px w-24 bg-brand"></div>
              <p className="lead-text text-zinc-400">
                We build and launch a turn-key campaign page in 1 week with zero technical headache on your end.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Built for Fast Action", desc: "No confusing menus or links for visitors to get lost in. Every element is focused on getting qualified prospects to call you or request a quote." },
              { title: "Loads Instantly on Mobile", desc: "Over half of paid traffic leaves if a site takes more than 3 seconds to load. Our custom code loads in under 1 second on any smartphone." },
              { title: "Instant Lead Notifications", desc: "Inquiries never get lost in a cluttered inbox. New leads are dispatched immediately to your email, phone, or CRM the moment a form is submitted." },
              { title: "100% Full Ownership", desc: "You own your code and domain completely. No ongoing website builder fees, no developer lock-in, and no hidden subscriptions." }
            ].map((feature, i) => (
              <div key={i} className="p-8 bg-zinc-800/50 border border-zinc-700/50 hover:border-zinc-600 transition-colors flex flex-col gap-6 shadow-sm">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{feature.title}</h3>
                  <p className="text-zinc-400 text-lg font-light leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 & 5: Analytics & Form */}
      <section id="lead-form" className="px-6 py-24 bg-white dark:bg-zinc-950 lg:px-12 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
           <div className="space-y-10 lg:sticky lg:top-24">
            <div>
              <div className="label-mono flex items-center mb-6">
                <span className="flex-shrink-0 h-2 w-2 bg-brand mr-3"></span>
                <span>TRANSPARENT RESULTS</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">See exactly how your ads are performing.</h2>
              <div className="h-px w-24 bg-accent-blue mb-8"></div>
              <p className="lead-text text-zinc-700 dark:text-zinc-300 mb-8">
                Most web agencies build a page and walk away. With every build, we include 30 days of live performance tracking. You get a private, easy-to-read analytics dashboard that shows you exactly how many people visited, who submitted a form, and what each lead cost you.
              </p>
              
              <ul className="space-y-6">
                {[
                  "Real-time lead count and conversion rate tracking",
                  "Clear data showing which ad campaigns generate calls",
                  "30 days of post-launch technical support included"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 font-medium text-lg text-zinc-900 dark:text-zinc-100">
                    <CheckCircle2 className="w-6 h-6 text-brand flex-shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="w-full">
            <LeadCaptureForm />
          </div>
        </div>
      </section>
    </div>
  );
}
