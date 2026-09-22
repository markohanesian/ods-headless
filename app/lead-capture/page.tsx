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
            <span>BUILT IN 1 WEEK • 30 DAYS OF INCLUDED ANALYTICS</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-[-0.05em] leading-[0.95] text-zinc-900 dark:text-zinc-50">
            A high-converting landing page built to make your ads <span className="text-accent-blue">profitable.</span>
          </h1>
          <p className="lead-text text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto font-light">
            Stop sending paid Google and social media traffic to slow, confusing websites. We build fast, focused landing pages that turn clicks into phone calls, quote requests, and real customers—shipped in one week.
          </p>
          <div className="pt-8 flex flex-col items-center gap-4">
            <a 
              href="#intake-form"
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
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Why send ad traffic to a dedicated landing page?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 sm:p-12 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-6 shadow-sm opacity-75">
              <div className="h-px w-12 bg-red-500 mb-8"></div>
              <h3 className="text-2xl font-bold tracking-tight text-red-500">Standard Website</h3>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                Too many links, slow load times, confusing navigation, and visitors leave without taking action.
              </p>
            </div>
            
            <div className="p-8 sm:p-12 bg-white dark:bg-zinc-900 border border-brand space-y-6 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <CheckCircle2 className="w-8 h-8 text-brand opacity-20" />
              </div>
              <div className="h-px w-12 bg-brand mb-8"></div>
              <h3 className="text-2xl font-bold tracking-tight">ODS Landing Page</h3>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                Direct headline, instant mobile speed, one clear call to action, and built-in tracking that proves ROI.
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
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">Everything you need to turn clicks into customers</h2>
              <div className="h-px w-24 bg-brand"></div>
              <p className="lead-text text-zinc-400">
                We deliver a finished, turn-key campaign page in 7 business days with zero technical stress on your end.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Built for Fast Action", desc: "No bloated navigation menus or distractions. Every word and button is designed to get the visitor to call you or fill out your quote form." },
              { title: "Loads Instantly on Mobile", desc: "Half of paid traffic leaves if a site takes more than 3 seconds to load. Our custom code loads in under 1 second on any smartphone." },
              { title: "Instant Lead Notifications", desc: "Inquiries never get lost in a messy inbox. New leads are dispatched immediately to your email, phone, or CRM the moment they submit." },
              { title: "100% Full Ownership", desc: "You own your code and domain completely. No ongoing platform fees, no developer lock-in, and no hidden surprises." }
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
      <section id="intake-form" className="px-6 py-24 bg-white dark:bg-zinc-950 lg:px-12 border-t border-zinc-200 dark:border-zinc-800">
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
                Most web developers build a page and disappear. With every build, we include 30 days of live conversion tracking and performance reporting. You get a private, easy-to-read analytics dashboard that shows you exactly how many people visited, who submitted a form, and what each lead cost you.
              </p>
              
              <ul className="space-y-6">
                {[
                  "Real-time lead count and conversion rate tracking",
                  "Clear data showing which ads actually generate calls",
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
