"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ContactForm from "./ContactForm";
import InteractiveIntakeForm from "./InteractiveIntakeForm";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const initialMode = searchParams.get("mode") === "intake" ? "intake" : "direct";
  const [activeTab, setActiveTab] = useState<"direct" | "intake">(initialMode);

  useEffect(() => {
    const mode = searchParams.get("mode");
    if (mode === "intake") {
      setActiveTab("intake");
    } else if (mode === "direct") {
      setActiveTab("direct");
    }
  }, [searchParams]);

  return (
    <div className="max-w-5xl mx-auto space-y-12">
      {/* Tab Switcher Header */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 bg-white dark:bg-zinc-900 p-2 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm max-w-2xl mx-auto">
        <button
          onClick={() => setActiveTab("direct")}
          className={`w-full sm:w-1/2 py-3 px-6 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
            activeTab === "direct"
              ? "bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 shadow-md"
              : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50"
          }`}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Quick Direct Message
        </button>

        <button
          onClick={() => setActiveTab("intake")}
          className={`w-full sm:w-1/2 py-3 px-6 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
            activeTab === "intake"
              ? "bg-accent-blue text-white shadow-md"
              : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50"
          }`}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          2-Min Strategy Audit
        </button>
      </div>

      {/* Tab 1: Simple Contact Form (Default) */}
      {activeTab === "direct" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 bg-white dark:bg-zinc-900 p-8 sm:p-12 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-xl">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                Send Us a Direct Message
              </h2>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm font-light">
                Have a question or custom inquiry? Fill out the brief form below and our team will get back to you within 24 hours.
              </p>
            </div>
            <ContactForm />
          </div>

          <div className="lg:col-span-5 space-y-8 p-8 bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 rounded-2xl">
            <div>
              <div className="label-mono text-accent-blue mb-2">
                DIRECT EMAIL
              </div>
              <a 
                href="mailto:contact@ohanesiandigitalsolutions.com" 
                className="text-lg font-bold text-zinc-900 dark:text-zinc-50 hover:text-accent-blue transition-colors break-all"
              >
                contact@ohanesiandigitalsolutions.com
              </a>
            </div>

            <div className="h-px w-full bg-zinc-200 dark:bg-zinc-800"></div>

            <div>
              <div className="label-mono text-accent-blue mb-2">
                RESPONSE SLA
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-light">
                We review every project brief within 24 hours (Monday – Friday).
              </p>
            </div>

            <div className="h-px w-full bg-zinc-200 dark:bg-zinc-800"></div>

            <div className="p-6 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl">
              <div className="label-mono text-zinc-900 dark:text-zinc-100 font-bold mb-2">
                WANT A DETAILED AUDIT?
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4 leading-relaxed">
                Looking for a structured review of your web setup, launch timeline, and operational bottlenecks?
              </p>
              <button
                onClick={() => setActiveTab("intake")}
                className="text-xs font-mono text-accent-blue font-bold hover:underline"
              >
                Switch to 2-Min Strategy Audit →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Interactive Strategy Audit */}
      {activeTab === "intake" && (
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto mb-4">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
              Interactive 3-Step Strategy Assessment
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 text-sm font-light">
              Tell us about your project requirements, launch goals, and roadblocks so we can map out a custom ROI strategy.
            </p>
          </div>
          <InteractiveIntakeForm />
        </div>
      )}
    </div>
  );
}

export default function ContactContainer() {
  return (
    <Suspense fallback={
      <div className="max-w-4xl mx-auto p-12 text-center text-zinc-400 font-mono text-xs">
        Loading contact options...
      </div>
    }>
      <ContactFormContent />
    </Suspense>
  );
}
