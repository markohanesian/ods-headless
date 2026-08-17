import React from "react";
import InteractiveIntakeForm from "@/components/InteractiveIntakeForm";

export default function ContactPage() {
  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen">
      {/* Section 1: Header */}
      <section className="px-6 lg:px-12 pt-36 pb-16 border-b border-zinc-100 dark:border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="label-mono text-accent-blue mb-4">
            ODS INTAKE & STRATEGY // START HERE
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-8 max-w-5xl leading-[1.08]">
            Ready to Automate Your Operations & Win More Clients?
          </h1>
          <div className="h-px w-24 bg-accent-blue mb-8"></div>
          
          <p className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-300 max-w-4xl font-light leading-relaxed">
            Tell us about your business goals and current roadblocks. We will analyze your workflow and map out a custom web strategy to scale your revenue.
          </p>
        </div>
      </section>

      {/* Section 2: Interactive Intake Form */}
      <section className="px-6 lg:px-12 py-20 bg-zinc-50 dark:bg-zinc-900/30">
        <div className="max-w-4xl mx-auto">
          <InteractiveIntakeForm />
        </div>
      </section>
    </div>
  );
}

