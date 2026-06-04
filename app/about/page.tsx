import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getAboutPageData } from "@/lib/wordpress";
import TeamSection from "@/components/TeamSection";

export default async function AboutPage() {
  const aboutData = await getAboutPageData();
  const featuredImage = aboutData?.featuredImage?.node;

  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen">
      {/* Header Section */}
      <section className="px-6 lg:px-12 pt-32 pb-24 border-b border-zinc-100 dark:border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-zinc-900 dark:text-zinc-50 mb-8 uppercase">
            About
          </h1>
          <div className="h-px w-24 bg-accent-blue mb-12"></div>
          
          <div className="max-w-4xl">
            <h2 className="text-zinc-900 dark:text-zinc-50 mb-8 tracking-tight">
              Our Story: Built for Business Growth
            </h2>
            <div className="space-y-6 text-zinc-500 dark:text-zinc-300">
              <p className="text-xl md:text-2xl font-light leading-relaxed">
                We don’t just build websites; we design and engineer digital platforms designed 
                for measurable results. At Ohanesian Digital Solutions, our entire process is 
                centered on strategy-first consultation to ensure every feature delivers value 
                to your bottom line.
              </p>
              <p>
                Drawing on over 20 years of combined experience in the field, our team delivers clean, 
                high-performing solutions built on rigorous UX principles and accessibility standards. 
                A successful website is one that drives conversions, not just clicks—that is the 
                singular focus that guides our work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="px-6 lg:px-12 py-24 bg-zinc-50 dark:bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            <div className="p-12 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
              <div className="text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 tracking-tighter">20+</div>
              <h3 className="label-mono mb-6">Years Collective Experience</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-300">
                We apply decades of insights to build resilient, conversion-focused platforms.
              </p>
            </div>
            <div className="p-12 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
              <div className="text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 tracking-tighter">100%</div>
              <h3 className="label-mono mb-6">Commitment to Accessibility</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-300">
                Every project prioritizes WCAG standards for an inclusive, high-quality user experience.
              </p>
            </div>
            <div className="p-12 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
              <div className="text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 tracking-tighter">1st</div>
              <h3 className="label-mono mb-6">Strategy-First Approach</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-300">
                We start with your business goals, not just the code, ensuring maximum ROI from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* CTA Section */}
      <section className="px-6 lg:px-12 py-32 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-8 text-zinc-900 dark:text-zinc-50">
            Ready for Success?
          </h2>
          <p className="text-zinc-500 dark:text-zinc-300 mb-12">
            We’re committed to your business’s success – send us a message to set up a quick strategic consultation.
          </p>
          <Link 
            href="/contact"
            className="btn-brand"
          >
            Message Us
          </Link>
        </div>
      </section>
    </div>
  );
}
