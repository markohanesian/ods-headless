"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const GOAL_OPTIONS = [
  "Convert Paid Ad Clicks",
  "Launch a New Service",
  "Agency White-Label",
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
    company: "",
    websiteUrl: "",
    primaryGoal: "Convert Paid Ad Clicks",
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
      if (!formData.name.trim() || !formData.email.trim() || !formData.company.trim()) {
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
          Pilot Request Confirmed!
        </h3>
        
        <p className="text-zinc-600 dark:text-zinc-300 max-w-md mx-auto leading-relaxed">
          Thank you, <span className="font-semibold text-zinc-900 dark:text-zinc-50">{formData.name}</span>. We've received your request for <span className="font-semibold text-zinc-900 dark:text-zinc-50">{formData.company}</span> and will reach out shortly.
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
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Apply for the 30-Day Pilot</h2>
      </div>
      
      {/* Progress Bar & Indicators */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-sm font-mono mb-3">
          <span className="text-accent-blue font-bold">
            STEP {step} OF 2
          </span>
          <span className="text-zinc-400 dark:text-zinc-500">
            {step === 1 && "Your Business Basics"}
            {step === 2 && "Primary Goal"}
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
              What is your name and business email? *
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                required
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-3 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:border-accent-blue transition-colors"
              />
              <input
                type="email"
                required
                placeholder="Business Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-3 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:border-accent-blue transition-colors"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-bold text-zinc-900 dark:text-zinc-100">
                Company Name *
              </label>
              <input
                type="text"
                required
                placeholder="Company Name"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-3 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:border-accent-blue transition-colors"
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-bold text-zinc-900 dark:text-zinc-100">
                Website URL <span className="font-normal text-zinc-500">(Optional)</span>
              </label>
              <input
                type="url"
                placeholder="https://yourwebsite.com"
                value={formData.websiteUrl}
                onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-3 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:border-accent-blue transition-colors"
              />
            </div>
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
              Primary Goal *
            </label>
            <div className="space-y-3">
              {GOAL_OPTIONS.map((option) => {
                const isSelected = formData.primaryGoal === option;
                return (
                  <div
                    key={option}
                    onClick={() => setFormData({ ...formData, primaryGoal: option })}
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
            <button
              type="submit"
              disabled={status === "submitting"}
              className="btn-brand px-8 py-4 text-base font-bold shadow-lg disabled:opacity-50"
            >
              {status === "submitting" ? "Processing..." : "Claim Your 30-Day Pilot"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
