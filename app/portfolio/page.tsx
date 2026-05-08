import React from "react";
import Link from "next/link";
import CaseStudyGrid from "@/components/CaseStudyGrid";

export const metadata = {
  title: "Portfolio | Ohanesian Digital Solutions",
  description: "A curated inventory of high-performance digital platforms and engineering-led web solutions.",
};

export default function PortfolioPage() {
  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen">
      {/* Header Section */}
      <section className="px-6 lg:px-12 pt-32 pb-24 border-b border-zinc-100 dark:border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-zinc-900 dark:text-zinc-50 mb-8 uppercase">
            Portfolio
          </h1>
          <div className="h-px w-24 bg-accent-blue mb-12"></div>
          
          <div className="max-w-3xl">
            <p className="lead-text text-zinc-900 dark:text-zinc-50 mb-8">
              A highlight of our most impactful projects that have measurable use and create business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Dynamic Grid Section - Client Inventory */} 
      <CaseStudyGrid 
        title="CLIENT WORK" 
        subtitle="Full technical breakdowns of architectural implementations for our global client base."            category="work"
        excludeCategory="custom-apps"
        limit={50}
      />

      {/* Innovation Lab Section */}
      <CaseStudyGrid 
        title="Custom Apps & Development" 
        subtitle="A collection of specialized apps, plugins, and other custom tools"
        category="custom-apps"
        variant="lab"
        limit={20}
      />

      {/* CTA Section */}
      <section className="px-6 lg:px-12 py-32 bg-zinc-50 dark:bg-zinc-900/30 border-t border-zinc-100 dark:border-zinc-800 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-8 text-zinc-900 dark:text-zinc-50">
            Have a project in mind?
          </h2>
          <p className="mb-12 text-zinc-500 dark:text-zinc-300">
            How can we help innovate for you today? 
          </p>
          <Link 
            href="/contact"
            className="btn-brand"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
