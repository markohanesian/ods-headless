"use client";

import React, { useState, useEffect } from "react";
import InteractiveIntakeForm from "./InteractiveIntakeForm";

export default function StrategyAuditSection() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Automatically expand if user navigated directly to #intake-audit or ?mode=intake
    if (typeof window !== "undefined") {
      if (window.location.hash === "#intake-audit" || window.location.search.includes("mode=intake")) {
        setIsOpen(true);
      }
    }
  }, []);

  return (
    <section id="intake-audit" className="px-6 lg:px-12 py-24 bg-zinc-900 dark:bg-zinc-900/60 text-zinc-50 border-t border-zinc-800 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter text-white">
            Free Site Audit & Strategy Questionnaire
          </h2>
          
          <p className="text-zinc-400 text-lg sm:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Tell us a little about your business. We&apos;ll run a free site audit and map out a roadmap to fast business growth.
          </p>

          {!isOpen && (
            <div className="pt-4">
              <button
                onClick={() => setIsOpen(true)}
                className="btn-brand px-8 py-4 text-base font-bold shadow-xl inline-flex items-center gap-3 transition-transform hover:scale-105"
              >
                <span>Start questionnaire</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          )}
        </div>

        {isOpen && (
          <div className="mt-8 transition-all duration-500 animate-fadeIn">
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setIsOpen(false)}
                className="text-sm font-mono text-zinc-400 hover:text-white flex items-center gap-1.5 py-1 px-3 border border-zinc-800 rounded-lg hover:border-zinc-600 transition-colors"
              >
                <span>Hide Assessment Questionnaire</span>
                <span>✕</span>
              </button>
            </div>
            <InteractiveIntakeForm />
          </div>
        )}
      </div>
    </section>
  );
}
