import React from "react";
import Link from "next/link";

const SERVICE_TIERS = [
  {
    id: "01",
    title: "Custom Websites & Client Portals",
    summary: "Turn casual visitors into active clients with a custom digital hub designed specifically for your sales process.",
    whatYouGet: "Instant load speeds that retain visitors, flawless mobile experience, WCAG-compliant accessibility, and an intuitive custom CMS so you can update content effortlessly without touching code.",
  },
  {
    id: "02",
    title: "Design Systems & Brand Strategy",
    summary: "Build instant credibility and command premium pricing with a modern, cohesive brand identity.",
    whatYouGet: "A complete design system including high-converting visual assets, modern typography rules, interactive UI components, and clear brand guidelines that set you apart from competitors.",
  },
  {
    id: "03",
    title: "E-Commerce, Bookings & Automations",
    summary: "Eliminate admin overhead by connecting your website directly to your payment, booking, and operational tools.",
    whatYouGet: "Frictionless Stripe checkout flows, automated lead screening forms, instant onboarding email sequences, and centralized event management built to save you hours every week.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen">
      {/* Section 1: Header */}
      <section className="px-6 lg:px-12 pt-36 pb-20 border-b border-zinc-100 dark:border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="label-mono text-accent-blue mb-4">
            ODS SERVICES // ARCHITECTURE & AUTOMATION
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-8 max-w-5xl leading-[1.08]">
            Custom Web Systems Built to Grow Your Business
          </h1>
          <div className="h-px w-24 bg-accent-blue mb-8"></div>
          
          <p className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-300 max-w-4xl font-light leading-relaxed">
            Stop fighting clunky platforms and manual workarounds. We build high-performance digital tools that capture qualified leads, automate your operations, and scale your revenue.
          </p>
        </div>
      </section>

      {/* Section 2: Service Tiers */}
      <section className="px-6 lg:px-12 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500 mb-2">
              SERVICE TIERS
            </h2>
            <div className="h-px w-full bg-zinc-200 dark:bg-zinc-800"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {SERVICE_TIERS.map((service) => (
              <div 
                key={service.id} 
                className="flex flex-col p-8 sm:p-10 border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-zinc-50/50 dark:bg-zinc-900/30 hover:border-accent-blue/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold px-3 py-1 bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded">
                    SERVICE {service.id}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-zinc-700 dark:text-zinc-200 font-medium mb-8 leading-relaxed">
                  {service.summary}
                </p>

                <div className="mt-auto pt-6 border-t border-zinc-200 dark:border-zinc-800">
                  <div className="label-mono text-[10px] text-accent-blue uppercase tracking-widest mb-3">
                    WHAT YOU GET
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
                    {service.whatYouGet}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Ongoing Support */}
      <section className="px-6 lg:px-12 py-24 bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-3 py-1 mb-6 label-mono border border-zinc-700 dark:border-zinc-300 text-accent-blue dark:text-brand">
            SECTION 03 // ONGOING SUPPORT
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mb-8 leading-[1.15]">
            Never Worry About Your Website Again
          </h2>
          <p className="text-lg sm:text-xl text-zinc-300 dark:text-zinc-600 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Focus on serving your clients while we handle hosting, security, and updates behind the scenes. The Webmaster Care Plan ensures your digital system stays fast, secure, and fully operational 24/7.
          </p>
          <div className="flex justify-center">
            <Link 
              href="/contact"
              className="btn-brand px-8 py-4 text-base font-bold shadow-lg"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

