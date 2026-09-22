import LeadCaptureForm from "@/components/LeadCaptureForm";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Zap, LayoutTemplate, MousePointerClick, BarChart3, Mail, Globe } from "lucide-react";

export default function LeadCapturePage() {
  return (
    <div className="flex flex-col bg-white dark:bg-zinc-950 min-h-screen">
      {/* Section 1: Hero */}
      <section className="relative px-6 pt-24 pb-20 md:pt-32 md:pb-32 lg:px-12 flex flex-col items-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-zinc-100 dark:bg-grid-zinc-900/[0.04] bg-[size:32px_32px] -z-10" />
        <div className="max-w-4xl mx-auto space-y-8 z-10">
          <div className="label-mono flex sm:justify-center items-start sm:items-center text-left sm:text-center max-sm:tracking-normal max-sm:text-xs max-sm:leading-snug">
            <span className="flex-shrink-0 h-2 w-2 bg-brand mr-3 mt-1 sm:mt-0"></span>
            <span>BUILT IN 1 WEEK • 30-DAY PERFORMANCE TRACKING</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-[-0.05em] leading-[0.95] text-zinc-900 dark:text-zinc-50">
            A high-converting landing page built in <span className="text-accent-blue">1 week.</span>
          </h1>
          <p className="lead-text text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto font-light">
            Turn your paid ad clicks into booked calls, quote requests, and revenue. Deployed on high-speed infrastructure with built-in conversion tracking and a live 30-day Looker Studio performance dashboard.
          </p>
          <div className="pt-8">
            <a 
              href="#pilot-application"
              className="btn-brand"
            >
              Claim Your 30-Day Pilot
            </a>
          </div>
        </div>
      </section>

      {/* Section 2: The Problem */}
      <section className="px-6 py-24 bg-zinc-50/50 dark:bg-zinc-900/20 lg:px-12 border-t border-zinc-100 dark:border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Why Traditional Websites Waste Ad Spend</h2>
            <p className="lead-text text-zinc-600 dark:text-zinc-400">
              When you pay for a click, every second and every distraction costs you money.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 sm:p-10 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-6 shadow-sm">
              <div className="h-px w-12 bg-accent-blue mb-8"></div>
              <h3 className="text-2xl font-bold tracking-tight">Slow Load Times</h3>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                4+ second load times cause 50%+ of paid clicks to bounce before seeing your offer. We build on Next.js edge infrastructure for sub-second loads that retain impatient ad traffic.
              </p>
            </div>
            
            <div className="p-8 sm:p-10 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-6 shadow-sm">
              <div className="h-px w-12 bg-brand mb-8"></div>
              <h3 className="text-2xl font-bold tracking-tight">Navigation Distractions</h3>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                20+ menu links give prospects every excuse to leave without calling or requesting a quote. Our dedicated pages force the visitor to focus on your core offer.
              </p>
            </div>
            
            <div className="p-8 sm:p-10 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-6 shadow-sm">
              <div className="h-px w-12 bg-accent-blue mb-8"></div>
              <h3 className="text-2xl font-bold tracking-tight">Zero Conversion Tracking</h3>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                Running ads without conversion tracking is flying blind on your marketing spend. We architect the page flow to drive users straight to a call or quote request and track every event.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: What We Deliver */}
      <section className="px-6 py-24 bg-zinc-900 dark:bg-zinc-950 text-white lg:px-12 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:flex justify-between items-end">
            <div className="max-w-2xl space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">What We Launch in 1 Week</h2>
              <div className="h-px w-24 bg-brand"></div>
              <p className="lead-text text-zinc-400">
                A complete, end-to-end conversion asset deployed to your domain, ready to receive live ad traffic.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Sub-second load speeds", desc: "Loads instantly on mobile phones so ad clicks don't bounce.", badge: "CODE" },
              { title: "Conversion-focused design", desc: "Single direct-action layout with no distracting navigation menus.", badge: "UI/UX" },
              { title: "Verified tracking", desc: "Complete setup of Google Analytics and ad conversion tags to measure cost-per-lead accurately.", badge: "DATA" },
              { title: "Automated lead routing", desc: "Customer inquiries dispatched immediately to your email, phone, or CRM.", badge: "API" },
              { title: "100% full ownership", desc: "Full ownership of your code and domain with zero recurring platform lock-in.", badge: "OPS" }
            ].map((feature, i) => (
              <div key={i} className="p-8 bg-zinc-800/50 border border-zinc-700/50 hover:border-zinc-600 transition-colors flex flex-col gap-6 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <span className="label-mono text-brand">
                    {feature.badge}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{feature.title}</h3>
                  <p className="text-zinc-400 text-lg font-light leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 & 5: Pilot & Form */}
      <section id="pilot-application" className="px-6 py-24 bg-white dark:bg-zinc-950 lg:px-12 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-10 lg:sticky lg:top-24">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 uppercase">The 30-Day Performance Window</h2>
              <div className="h-px w-24 bg-accent-blue mb-8"></div>
              <p className="lead-text text-zinc-700 dark:text-zinc-300 mb-8">
                We build and launch your custom landing page in 1 week. Then, we monitor real-world traffic on a private 30-day Looker Studio dashboard so you can verify your conversion rate and cost-per-lead before deciding whether to take on an ongoing maintenance retainer.
              </p>
              <div className="p-6 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg">
                <p className="font-bold text-zinc-900 dark:text-zinc-50 flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand flex-shrink-0" />
                  Guaranteed sub-second load speeds, flawless mobile usability, and verified lead delivery on day one.
                </p>
              </div>
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
