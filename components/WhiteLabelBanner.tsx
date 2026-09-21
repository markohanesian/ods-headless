import React from "react";
import Link from "next/link";

const WhiteLabelBanner = () => {
  return (
    <section id="for-agencies" className="px-6 lg:px-12 py-20 bg-zinc-900 dark:bg-zinc-950 text-white border-t border-zinc-800">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1">
          <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full border border-zinc-700 bg-zinc-800/50">
            <span className="w-2 h-2 rounded-full bg-accent-blue mr-2 animate-pulse"></span>
            <span className="text-xs font-mono tracking-wider uppercase text-zinc-300">AGENCY PARTNERSHIPS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-6">
            A reliable development partner for PPC/Ad, Branding, and Marketing agencies.
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed font-light mb-8 max-w-2xl">
            Eliminate the development bottleneck so you can tackle bigger projects. We build lightning-fast, tracking-ready landing pages and web apps under your agency&apos;s brand in 5-days so you can focus on what you do best.
          </p>
          <Link 
            href="/partnerships" 
            className="btn-brand inline-flex items-center justify-center"
          >
            Inquire about White-Label Partnerships
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhiteLabelBanner;
