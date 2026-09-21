"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const BUILD_OPTIONS = [
  "Turn Ad Clicks into Leads",
  "Build / Redesign Full Website",
  "Agency White-Label Dev Support",
  "Custom App / Operational Automation",
];

const TIMELINE_OPTIONS = [
  "ASAP (Within 1–2 Weeks)",
  "Next 30–60 Days",
  "Flexible",
];

const HEADACHE_OPTIONS = [
  "Site is slow / outdated",
  "Traffic isn't converting",
  "Forms break / messy inbox",
  "Wasting hours on manual admin",
];

export default function InteractiveIntakeForm() {
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
    selectedServices: [] as string[],
    timeline: "Next 30–60 Days",
    selectedHeadaches: [] as string[],
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

  const handleServiceToggle = (option: string) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(option);
      if (exists) {
        return {
          ...prev,
          selectedServices: prev.selectedServices.filter((s) => s !== option),
        };
      } else {
        return {
          ...prev,
          selectedServices: [...prev.selectedServices, option],
        };
      }
    });
  };

  const handleHeadacheToggle = (option: string) => {
    setFormData((prev) => {
      const exists = prev.selectedHeadaches.includes(option);
      if (exists) {
        return {
          ...prev,
          selectedHeadaches: prev.selectedHeadaches.filter((s) => s !== option),
        };
      } else {
        return {
          ...prev,
          selectedHeadaches: [...prev.selectedHeadaches, option],
        };
      }
    });
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      if (!formData.name.trim() || !formData.email.trim() || !formData.company.trim()) {
        setErrorMessage("Please complete all required fields before continuing.");
        return;
      }
    }
    if (step === 2) {
      if (formData.selectedServices.length === 0) {
        setErrorMessage("Please select at least one option you are looking to build.");
        return;
      }
    }
    setErrorMessage("");
    setStep((prev) => Math.min(prev + 1, 3));
  };

  const handlePrevStep = () => {
    setErrorMessage("");
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmitFinal = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formattedMessage = `
COMPANY/PROJECT: ${formData.company}
WEBSITE URL: ${formData.websiteUrl || "N/A"}

WHAT THEY WANT TO SOLVE:
${formData.selectedServices.map((s) => `- ${s}`).join("\n")}

TIMELINE: ${formData.timeline}

PRIMARY HEADACHE:
${formData.selectedHeadaches.length > 0 ? formData.selectedHeadaches.map((s) => `- ${s}`).join("\n") : "N/A"}
    `.trim();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formattedMessage,
          company: formData.company,
          websiteUrl: formData.websiteUrl,
          services: formData.selectedServices,
          timeline: formData.timeline,
          headaches: formData.selectedHeadaches,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setCountdown(6);
        setStatus("success");
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag('event', 'conversion', {
            send_to: 'AW-18337571182/FsHwCJTVkOwcEO7ChKhE'
          });
        }
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 sm:p-12 rounded-2xl text-center space-y-6">
        <div className="h-16 w-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50">
          Strategy Call Request Confirmed!
        </h3>
        
        <p className="text-zinc-600 dark:text-zinc-300 max-w-md mx-auto leading-relaxed">
          Thank you, <span className="font-semibold text-zinc-900 dark:text-zinc-50">{formData.name}</span>. Our lead architect will review your project setup for <span className="font-semibold text-zinc-900 dark:text-zinc-50">{formData.company}</span> and reach out within 24 hours to schedule your strategy call.
        </p>

        <div className="p-4 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl text-sm font-mono text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent-blue animate-ping"></span>
          Redirecting to home in <span className="font-bold text-accent-blue">{countdown}s</span>...
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="btn-brand w-full sm:w-auto text-center px-6 py-3">
            Return to Home Now
          </Link>
          <Link href="/work" className="btn-secondary w-full sm:w-auto text-center px-6 py-3">
            View Our Work
          </Link>
          <button
            onClick={() => {
              setStatus("idle");
              setStep(1);
              setFormData({
                name: "",
                email: "",
                company: "",
                websiteUrl: "",
                selectedServices: [],
                timeline: "Next 30–60 Days",
                selectedHeadaches: [],
              });
            }}
            className="text-sm font-mono text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 underline underline-offset-4 py-2"
          >
            Submit Another Assessment
          </button>
        </div>
      </div>
    );
  }


  return (
    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 sm:p-10 rounded-2xl shadow-xl">
      <div className="mb-6 pb-6 border-b border-zinc-100 dark:border-zinc-800">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Technical Site & Conversion Audit</h2>
      </div>
      {/* Progress Bar & Indicators */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-sm font-mono mb-3">
          <span className="text-accent-blue font-bold">
            STEP {step} OF 3
          </span>
          <span className="text-zinc-400 dark:text-zinc-500">
            {step === 1 && "Your Business Basics"}
            {step === 2 && "What are you looking to solve?"}
            {step === 3 && "Project Details"}
          </span>
        </div>
        <div className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-accent-blue transition-all duration-300 ease-out"
            style={{ width: `${(step / 3) * 100}%` }}
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
                Current Website URL <span className="font-normal text-zinc-500">(Optional: Leave blank if launching brand new)</span>
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

      {/* Step 2: What Are You Looking to Build? */}
      {step === 2 && (
        <form onSubmit={handleNextStep} className="space-y-6">
          <div className="space-y-3">
            <label className="block text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-2">
              What are you looking to solve? (Select all that apply) *
            </label>
            <div className="space-y-3">
              {BUILD_OPTIONS.map((option) => {
                const isSelected = formData.selectedServices.includes(option);
                return (
                  <div
                    key={option}
                    onClick={() => handleServiceToggle(option)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                      isSelected
                        ? "bg-accent-blue/10 border-accent-blue text-zinc-900 dark:text-zinc-50"
                        : "bg-zinc-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 hover:border-zinc-400"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded flex items-center justify-center border text-sm ${
                          isSelected
                            ? "bg-accent-blue border-accent-blue text-white"
                            : "border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900"
                        }`}
                      >
                        {isSelected && "✓"}
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
            <button type="submit" className="btn-brand px-8 py-3">
              Continue to Details →
            </button>
          </div>
        </form>
      )}

      {/* Step 3: Timeline & Goals */}
      {step === 3 && (
        <form onSubmit={handleSubmitFinal} className="space-y-6">
          <div className="space-y-3">
            <label className="block text-sm font-bold text-zinc-900 dark:text-zinc-100">
              When do you want to launch? *
            </label>
            <div className="grid grid-cols-3 gap-3">
              {TIMELINE_OPTIONS.map((timeOpt) => {
                const isSelected = formData.timeline === timeOpt;
                return (
                  <button
                    key={timeOpt}
                    type="button"
                    onClick={() => setFormData({ ...formData, timeline: timeOpt })}
                    className={`py-3 px-3 rounded-lg text-sm sm:text-sm font-medium border text-center transition-all ${
                      isSelected
                        ? "bg-brand dark:bg-accent-blue text-white border-brand dark:border-accent-blue font-bold shadow"
                        : "bg-zinc-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400"
                    }`}
                  >
                    {timeOpt}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-2">
              Primary bottleneck or current headache? *
            </label>
            <div className="space-y-3">
              {HEADACHE_OPTIONS.map((option) => {
                const isSelected = formData.selectedHeadaches.includes(option);
                return (
                  <div
                    key={option}
                    onClick={() => handleHeadacheToggle(option)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                      isSelected
                        ? "bg-accent-blue/10 border-accent-blue text-zinc-900 dark:text-zinc-50"
                        : "bg-zinc-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 hover:border-zinc-400"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded flex items-center justify-center border text-sm ${
                          isSelected
                            ? "bg-accent-blue border-accent-blue text-white"
                            : "border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900"
                        }`}
                      >
                        {isSelected && "✓"}
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
              {status === "submitting" ? "Processing..." : "Submit Audit Request"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
