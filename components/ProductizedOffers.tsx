import React from "react";
import Link from "next/link";

const OFFERS = [
  {
    id: "01",
    tag: "BUILT IN 1 WEEK • 30-DAY PERFORMANCE TRACKING",
    title: "The Ad Campaign Landing Page",
    technicalSubHeadline: "Custom Next.js single-page build deployed on edge infrastructure with sub-second (<1s) load speeds, GA4 conversion tracking, and automated lead routing.",
    plainEnglishValue: "A dedicated page engineered to turn paid Google and Meta clicks into phone calls, quote requests, and paying clients. No bloated menus or distractions. We launch in one week, then track your cost-per-lead live on a private Looker Studio dashboard for 30 days before discussing any ongoing retainers.",
    whatYouGet: [
      "Mobile-first Next.js build with <1s load speeds on edge hosting",
      "Pixel-perfect GA4 and ad conversion tracking (calls and form fills)",
      "Instant lead routing directly to your email, Google Sheets, or CRM",
      "30-day live Looker Studio dashboard to monitor real conversion metrics",
      "100% full ownership of your code and domain"
    ],
    cta: "Claim Your 30-Day Pilot",
    href: "/contact",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    )
  },
  {
    id: "02",
    tag: "FULL WEBSITE BUILD OR COMPLETE REDESIGN",
    title: "The Custom Business Hub",
    technicalSubHeadline: "Multi-page web platform custom-coded for sub-second speeds, 100% WCAG AA accessibility compliance, and automated online quote/booking intake.",
    plainEnglishValue: "A full, high-performance website engineered to make your business look authoritative and run smoothly. We replace fragile, slow site builders with clean code that ranks on Google, eliminates hours of manual phone intake, and makes updating content effortless.",
    whatYouGet: [
      "Clean visual design and structured navigation tailored to your brand",
      "Automated quote requests, booking calendars, or custom intake pipelines",
      "Sub-second load speeds with 100% WCAG AA accessibility standards",
      "Simple, bloat-free content management with zero fragile plugins"
    ],
    cta: "Plan Your Website Build",
    href: "/contact",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    )
  },
  {
    id: "03",
    tag: "TAILORED SOFTWARE & OPERATIONAL EXTENSIONS",
    title: "Custom Applications & Automation",
    technicalSubHeadline: "Custom Shopify extensions, interactive pricing estimators, and automated API workflows built to cut repetitive administrative work.",
    plainEnglishValue: "Custom software built to solve specific operational bottlenecks. Whether you need an instant quote calculator for customers, custom Shopify product variant previews, or direct integrations between your web forms and internal tools, we build code that saves you time.",
    whatYouGet: [
      "Custom Shopify apps, checkout widgets, and product variant tools",
      "Digital quote estimators and dynamic client intake workflows",
      "Webhook pipelines connecting website leads directly to your tools",
      "Edge-hosted internal apps and custom tools"
    ],
    cta: "Discuss Custom Development",
    href: "/contact",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    )
  }
];

const ProductizedOffers = () => {
  return (
    <section className="px-6 lg:px-12 py-24 bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6">
            Built by engineers, made for business profit
          </h2>
          <p className="text-zinc-600 dark:text-zinc-300 text-lg leading-relaxed font-light mt-4 mb-6">
            Clear deliverables with zero scope confusion. Pick the engine your business needs:
          </p>
          <div className="h-px w-full bg-zinc-200 dark:bg-zinc-800"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {OFFERS.map((offer) => (
            <div 
              key={offer.id} 
              className="flex flex-col p-8 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-zinc-50/50 dark:bg-zinc-900/20 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors group"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="p-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-accent-blue group-hover:scale-105 transition-transform">
                  {offer.icon}
                </div>
                <span className="font-mono text-xl font-bold text-zinc-400 dark:text-zinc-600">
                  {offer.id}
                </span>
              </div>
              
              {offer.tag && (
                <div className="label-mono !text-zinc-500 mb-3 text-xs tracking-widest font-bold">
                  {offer.tag}
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 tracking-tight">
                {offer.title}
              </h3>
              
              <p className="text-zinc-800 dark:text-zinc-200 text-sm font-medium mb-4 leading-relaxed border-l-2 border-accent-blue pl-4">
                {offer.technicalSubHeadline}
              </p>
              
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed font-light mb-6">
                {offer.plainEnglishValue}
              </p>

              <div className="mb-8 flex-grow">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-50 mb-4">
                  What You Get:
                </h4>
                <ul className="space-y-3">
                  {offer.whatYouGet.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-accent-blue shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-zinc-600 dark:text-zinc-400 font-light leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link 
                href={offer.href} 
                className="inline-block text-center w-full px-5 py-4 text-sm font-bold tracking-wider uppercase bg-brand dark:bg-accent-blue text-zinc-950 dark:text-white rounded hover:opacity-90 transition-opacity mt-auto"
              >
                {offer.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductizedOffers;
