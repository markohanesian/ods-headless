import React from "react";
import ContactForm from "@/components/ContactForm";
import StrategyAuditSection from "@/components/StrategyAuditSection";

export default function ContactPage() {
  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen">
      {/* Primary Contact Section */}
      <section className="px-6 lg:px-12 pt-36 pb-20 border-b border-zinc-100 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-950">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-8 leading-[1.08]">
              Let&apos;s Build Your Next Digital Advantage.
            </h1>
            <div className="h-px w-24 bg-accent-blue mb-8"></div>
            
            <p className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-300 font-light leading-relaxed">
              Tell us a little about your business. We&apos;ll run a free site audit and map out a roadmap to fast business growth.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-8 sm:p-12 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-xl">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Strategy Audit Section Below */}
      <StrategyAuditSection />
    </div>
  );
}



