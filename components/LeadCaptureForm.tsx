"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const ADS_OPTIONS = [
  "Yes, Active Campaigns",
  "Planning to Launch Soon",
  "Not Running Ads Yet",
];

const TIMELINE_OPTIONS = [
  "ASAP (Within 1–2 Weeks)",
  "Next 30–60 Days",
  "Flexible",
];

export default function LeadCaptureForm() {
  const router = useRouter();
  const [step, setStep] = useState<number>(1);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [countdown, setCountdown] = useState<number>(6);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyOrUrl: "",
    runningAds: "Yes, Active Campaigns",
    timeline: "ASAP (Within 1–2 Weeks)",
  });

  // Auto-redirect timer effect on success
  useEffect(() => {
    if (status !== "success") return;

    if (countdown === 0) {
      router.push("/");
      return;
    }

    const timer = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [status, countdown, router]);

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      if (!formData.name.trim() || !formData.email.trim() || !formData.companyOrUrl.trim()) {
        setErrorMessage("Please complete all required fields before continuing.");
        return;
      }
    }
    setErrorMessage("");
    setStep((prev) => Math.min(prev + 1, 2));
  };

  const handlePrevStep = () => {
    setErrorMessage("");
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmitFinal = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/lead-capture-intake", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form. Please try again.");
      }

      setCountdown(6);
      setStatus("success");
    } catch (error: any) {
      console.error("Submission error:", error);
      setStatus("error");
      setErrorMessage(error.message || "Network error. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 sm:p-12 rounded-2xl text-center space-y-6 shadow-xl">
        <div className="h-16 w-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50">
          Request Confirmed!
        </h3>
        
        <p className="text-zinc-600 dark:text-zinc-300 max-w-md mx-auto leading-relaxed">
          Thank you, <span className="font-semibold text-zinc-900 dark:text-zinc-50">{formData.name}</span>. We've received your landing page request and will get back to you within 1 business day.
        </p>

        <div className="p-4 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl text-sm font-mono text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent-blue animate-ping"></span>
          Redirecting to home in <span className="font-bold text-accent-blue">{countdown}s</span>...
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 sm:p-10 rounded-2xl shadow-xl">
      <div className="mb-6 pb-6 border-b border-zinc-100 dark:border-zinc-800">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Start Your Campaign Landing Page</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mt-2">
          Tell us about your offer and ad goals. We will review your project and get back to you within 1 business day.
        </p>
      </div>
      
      {/* Progress Bar & Indicators */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-sm font-mono mb-3">
          <span className="text-accent-blue font-bold">
            STEP {step} OF 2
          </span>
          <span className="text-zinc-400 dark:text-zinc-500">
            {step === 1 && "Your Basic Info"}
            {step === 2 && "Ad Goals & Timeline"}
          </span>
        </div>
        <div className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-accent-blue transition-all duration-300 ease-out"
            style={{ width: `${(step / 2) * 100}%` }}
          />
        </div>
      </div>

      {/* Error Banner */}
      {errorMessage && (
        <div className="mb-6 p-4 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-300 text-sm font-medium rounded-lg">
          {errorMessage}
        </div>
      )}

      {/* Step 1: Your Business Basics */}
      {step === 1 && (
        <form onSubmit={handleNextStep} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-bold text-zinc-900 dark:text-zinc-100">
              Full Name *
            </label>
            <input
              type="text"
              required
              placeholder="Your Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-3 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:border-accent-blue transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-bold text-zinc-900 dark:text-zinc-100">
              Work Email *
            </label>
            <input
              type="email"
              required
              placeholder="Your Business Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-3 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:border-accent-blue transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-bold text-zinc-900 dark:text-zinc-100">
              Company Name or Current Website URL *
            </label>
            <input
              type="text"
              required
              placeholder="Company Name or Website URL"
              value={formData.companyOrUrl}
              onChange={(e) => setFormData({ ...formData, companyOrUrl: e.target.value })}
              className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-3 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:border-accent-blue transition-colors"
            />
          </div>

          <div className="pt-4 flex justify-end">
            <button type="submit" className="btn-brand px-8 py-3">
              Continue to Goals →
            </button>
          </div>
        </form>
      )}

      {/* Step 2: Primary Goal */}
      {step === 2 && (
        <form onSubmit={handleSubmitFinal} className="space-y-6">
          <div className="space-y-3">
            <label className="block text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-2">
              Are you currently running ads? *
            </label>
            <div className="space-y-3">
              {ADS_OPTIONS.map((option) => {
                const isSelected = formData.runningAds === option;
                return (
                  <div
                    key={option}
                    onClick={() => setFormData({ ...formData, runningAds: option })}
                    className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                      isSelected
                        ? "bg-accent-blue/10 border-accent-blue text-zinc-900 dark:text-zinc-50"
                        : "bg-zinc-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 hover:border-zinc-400"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center border text-sm ${
                          isSelected
                            ? "bg-accent-blue border-accent-blue"
                            : "border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900"
                        }`}
                      >
                        {isSelected && <div className="w-2 h-2 rounded-full bg-white"></div>}
                      </div>
                      <span className="font-medium text-sm sm:text-base">{option}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-2">
              Target Launch Timeline *
            </label>
            <div className="space-y-3">
              {TIMELINE_OPTIONS.map((option) => {
                const isSelected = formData.timeline === option;
                return (
                  <div
                    key={option}
                    onClick={() => setFormData({ ...formData, timeline: option })}
                    className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                      isSelected
                        ? "bg-accent-blue/10 border-accent-blue text-zinc-900 dark:text-zinc-50"
                        : "bg-zinc-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 hover:border-zinc-400"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center border text-sm ${
                          isSelected
                            ? "bg-accent-blue border-accent-blue"
                            : "border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900"
                        }`}
                      >
                        {isSelected && <div className="w-2 h-2 rounded-full bg-white"></div>}
                      </div>
                      <span className="font-medium text-sm sm:text-base">{option}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between">
            <button
              type="button"
              onClick={handlePrevStep}
              className="text-sm font-mono text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              ← Back
            </button>
            <div className="flex flex-col items-end gap-2">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="btn-brand px-8 py-4 text-base font-bold shadow-lg disabled:opacity-50 w-full sm:w-auto"
              >
                {status === "submitting" ? "Processing..." : "Request Your Landing Page Build"}
              </button>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-xs text-zinc-500 font-mono">
              ⚡ 1-week turnaround. 30 days of performance reporting included. No spam, ever.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
