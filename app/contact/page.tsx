import React from "react";
import ContactForm from "@/components/ContactForm";
import StrategyAuditSection from "@/components/StrategyAuditSection";

export default function ContactPage() {
  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen">
      {/* Section 1: Header */}
      <section className="px-6 lg:px-12 pt-36 pb-16 border-b border-zinc-100 dark:border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="label-mono text-accent-blue mb-4">
            OHANESIAN DIGITAL SOLUTIONS // GET IN TOUCH
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

      {/* Section 2: Primary Regular Contact Form */}
      <section className="px-6 lg:px-12 py-20 bg-zinc-50 dark:bg-zinc-900/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Direct Contact Info & SLA */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 tracking-tight">
                Send Us a Direct Message
              </h2>
              <p className="text-zinc-600 dark:text-zinc-300 text-lg font-light leading-relaxed">
                Have a project in mind or want to discuss your web architecture? Send us a quick message below and our team will get back to you promptly.
              </p>
            </div>

            <div className="h-px w-full bg-zinc-200 dark:bg-zinc-800"></div>

            <div className="space-y-6">
              <div>
                <div className="label-mono text-accent-blue mb-2">
                  DIRECT EMAIL INQUIRIES
                </div>
                <a 
                  href="mailto:contact@ohanesiandigitalsolutions.com" 
                  className="text-lg font-bold text-zinc-900 dark:text-zinc-50 hover:text-accent-blue transition-colors break-all"
                >
                  contact@ohanesiandigitalsolutions.com
                </a>
              </div>

              <div>
                <div className="label-mono text-accent-blue mb-2">
                  RESPONSE TIME SLA
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 font-light">
                  We review and reply to every inquiry within 24 business hours.
                </p>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm space-y-3">
              <div className="label-mono text-accent-blue font-bold">
                LOOKING FOR A DETAILED AUDIT?
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-light">
                Want to map out your exact launch timeline, project scope, and operational bottlenecks?
              </p>
              <a 
                href="#intake-audit"
                className="inline-block text-xs font-mono text-zinc-900 dark:text-zinc-50 font-bold hover:text-accent-blue transition-colors"
              >
                Scroll to 2-Minute Strategy Assessment ↓
              </a>
            </div>
          </div>

          {/* Right Column: Standard Contact Form */}
          <div className="lg:col-span-7 bg-white dark:bg-zinc-900 p-8 sm:p-12 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-xl">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Section 3: Separate Strategy Audit Section Below */}
      <StrategyAuditSection />
    </div>
  );
}



