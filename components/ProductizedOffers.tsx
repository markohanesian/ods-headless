import React from "react";
import Link from "next/link";

const OFFERS = [
  {
    id: "01",
    tag: "BUILT IN 1 WEEK • 30 DAYS OF INCLUDED ANALYTICS",
    title: "The Ad Campaign Landing Page",
    technicalSubHeadline: "A single, focused page built specifically to turn paid Google and social media ad clicks into calls, quotes, and paying customers.",
    plainEnglishValue: "No confusing menus or distractions. Every word and button guides the visitor to take action. Shipped in one week, with 30 days of included performance tracking so you know exactly which ads are making you money.",
    whatYouGet: [
      "Custom mobile-first design tailored to your core offer",
      "Loads in under 1 second on phones so ad clicks don't bounce",
      "Form submissions sent straight to your phone, email, or CRM",
      "30 days of included conversion tracking and live analytics",
      "100% full ownership of your website and code"
    ],
    cta: "Get Started on Your Landing Page",
    href: "?audit=true&service=Ad+Campaign+Landing+Page",
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
    technicalSubHeadline: "A modern, multi-page website engineered to make your business look top-tier and automate client intake.",
    plainEnglishValue: "We replace fragile, slow website templates with clean code that loads immediately, ranks well on Google, and eliminates hours of phone tag by automating quotes and bookings.",
    whatYouGet: [
      "Custom design and clear navigation built around your brand",
      "Automated quote forms, booking calendars, or intake pipelines",
      "Fast, reliable performance that never breaks during updates",
      "Simple content updates without needing to touch code"
    ],
    cta: "Plan Your Website Build",
    href: "?audit=true&service=Build+%2F+Redesign+Full+Website",
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
    tag: "OPERATIONAL TOOLS & EXTENSIONS",
    title: "Custom Applications & Automation",
    technicalSubHeadline: "Custom software tools that eliminate repetitive administrative work and connect your business systems.",
    plainEnglishValue: "Software tailored to how your business actually runs. Whether you need an online price estimator, custom Shopify apps, or automated lead routing, we build tech that shortens your work week.",
    whatYouGet: [
      "Custom Shopify apps, variant previews, and checkout extensions",
      "Online quote calculators that give customers instant estimates",
      "Automated pipelines that connect your web forms to spreadsheets or CRMs",
      "Lightweight private web apps built for your team"
    ],
    cta: "Discuss Custom Development",
    href: "?audit=true&service=Custom+App+%2F+Operational+Automation",
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
