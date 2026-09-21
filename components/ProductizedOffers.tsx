import React from "react";
import Link from "next/link";

const OFFERS = [
  {
    id: "01",
    tag: "SHIPS IN 5 DAYS • 30-DAY PERFORMANCE PILOT",
    title: "The Conversion Landing Page",
    description: "Engineered specifically for high-intent paid campaigns. Single-focus direct-response UX, sub-second edge speeds, GA4 event tracking, and automated lead routing to CRM or email. Measure cost-per-lead directly during a 30-day live tracking window.",
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
    tag: "FULL WEBSITE BUILD",
    title: "The Custom Business Hub",
    description: "Scalable multi-page architecture with custom-coded intake tools, online quote workflows, and 100% WCAG accessibility compliance. Built to eliminate manual phone calls and admin overhead.",
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
    tag: "OPERATIONAL EXTENSIONS",
    title: "Custom Applications & Automation",
    description: "Tailored Shopify extensions, quote calculators, and automated backend systems designed to eliminate repetitive administrative work.",
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
            Engineered for business results
          </h2>
          <p className="text-zinc-600 dark:text-zinc-300 text-lg leading-relaxed font-light mt-4 mb-6">
            At ODS we create digital assets that fit your business needs:
          </p>
          <div className="h-px w-full bg-zinc-200 dark:bg-zinc-800"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
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
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 tracking-tight">
                {offer.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed font-light mb-8 flex-grow">
                {offer.description}
              </p>
              <Link 
                href={offer.href} 
                className="inline-block text-center w-full px-5 py-3 text-sm font-bold tracking-wider uppercase bg-brand dark:bg-accent-blue text-zinc-950 dark:text-white rounded hover:opacity-90 transition-opacity"
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
