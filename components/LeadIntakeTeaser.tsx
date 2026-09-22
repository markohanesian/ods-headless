import React from "react";
import Link from "next/link";

const LeadIntakeTeaser = () => {
  return (
    <section className="px-6 lg:px-12 py-24 bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl sm:text-5xl font-bold tracking-tighter mb-8 leading-[1.15]">
          Ready for a website that pulls its weight?
        </h3>
        <p className="text-lg sm:text-xl text-zinc-300 dark:text-zinc-600 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          Get an objective breakdown of your site&apos;s speed, mobile responsiveness, and conversion leaks.
        </p>
        <div className="flex justify-center">
          <Link 
            href="?audit=true"
            className="btn-brand text-center px-8 py-4 text-base font-bold shadow-lg hover:shadow-xl transition-all"
          >
            Free Site Audit
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LeadIntakeTeaser;
