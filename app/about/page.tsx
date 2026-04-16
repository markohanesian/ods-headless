import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getAboutPageData } from "@/lib/wordpress";

export default async function AboutPage() {
  const aboutData = await getAboutPageData();
  const featuredImage = aboutData?.featuredImage?.node;

  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen">
      {/* Header Section */}
      <section className="px-6 lg:px-12 pt-32 pb-24 border-b border-zinc-100 dark:border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500 mb-6">
            Company_Profile // Archive_01
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-12">
            About Us
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/5] bg-zinc-100 dark:bg-zinc-900 overflow-hidden border border-zinc-200 dark:border-zinc-800">
              {featuredImage ? (
                <Image 
                  src={featuredImage.sourceUrl}
                  alt={featuredImage.altText || "Mark Sarkis Ohanesian"}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-[10px] font-mono text-zinc-400 uppercase tracking-widest text-center p-8">
                  Proprietor_Image_Archive // [ Mark_Sarkis_Ohanesian ]
                </div>
              )}
              <div className="absolute bottom-6 left-6 bg-white dark:bg-zinc-950 p-4 border border-zinc-200 dark:border-zinc-800">
                <p className="text-sm font-bold text-zinc-900 dark:text-zinc-50 leading-tight">
                  Mark Sarkis Ohanesian
                </p>
                <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mt-1">
                  Founder & Principal Architect
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-8">
                Our Story: Built for Business Growth
              </h2>
              <div className="space-y-6 text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed font-light">
                <p>
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
        </div>
      </section>

      {/* Metrics Section */}
      <section className="px-6 lg:px-12 py-24 bg-zinc-50 dark:bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            <div className="p-12 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
              <div className="text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 tracking-tighter">20+</div>
              <h3 className="text-sm font-mono uppercase tracking-widest text-zinc-400 mb-6">Years_Collective_Experience</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                We apply decades of insights to build resilient, conversion-focused platforms.
              </p>
            </div>
            <div className="p-12 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
              <div className="text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 tracking-tighter">100%</div>
              <h3 className="text-sm font-mono uppercase tracking-widest text-zinc-400 mb-6">Commitment_to_Accessibility</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Every project prioritizes WCAG standards for an inclusive, high-quality user experience.
              </p>
            </div>
            <div className="p-12 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
              <div className="text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 tracking-tighter">1st</div>
              <h3 className="text-sm font-mono uppercase tracking-widest text-zinc-400 mb-6">Strategy-First_Approach</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                We start with your business goals, not just the code, ensuring maximum ROI from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-12 py-32 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 leading-tight text-zinc-900 dark:text-zinc-50">
            Ready for Success?
          </h2>
          <p className="text-xl text-zinc-500 dark:text-zinc-400 mb-12 font-light">
            We’re committed to your business’s success – send us a message to set up a quick strategic consultation.
          </p>
          <Link 
            href="/contact"
            className="inline-block px-12 py-5 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 font-bold uppercase tracking-widest text-[10px] hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all"
          >
            Message Us
          </Link>
        </div>
      </section>
    </div>
  );
}
