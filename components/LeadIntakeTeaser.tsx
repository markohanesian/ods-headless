import React from "react";
import Link from "next/link";

const LeadIntakeTeaser = () => {
  return (
    <section className="px-6 lg:px-12 py-24 bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block px-3 py-1 mb-6 label-mono border border-zinc-700 dark:border-zinc-300 text-accent-blue dark:text-brand">
          SECTION 04 // STRATEGIC ASSESSMENT
        </div>
        <h3 className="text-3xl sm:text-5xl font-bold tracking-tighter mb-8 leading-[1.15]">
          Ready to Reclaim 10+ Hours Every Week?
        </h3>
        <p className="text-lg sm:text-xl text-zinc-300 dark:text-zinc-600 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          Let us audit your existing web setup and identify where manual tasks are slowing you down. We will map out a clear roadmap to automate your operations and accelerate client acquisition.
        </p>
        <div className="flex justify-center">
          <Link 
            href="/contact#intake-audit"
            className="btn-brand text-center px-8 py-4 text-base font-bold shadow-lg hover:shadow-xl transition-all"
          >
            Start Your Free 2-Minute Assessment
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LeadIntakeTeaser;
