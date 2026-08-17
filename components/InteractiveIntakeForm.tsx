"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const BUILD_OPTIONS = [
  "A brand new custom business website",
  "An automated client intake or booking system",
  "An e-commerce shop or event management hub",
  "A custom web application or business tool",
];

const TIMELINE_OPTIONS = [
  "ASAP",
  "Next 30–60 Days",
  "Flexible",
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
    selectedServices: [] as string[],
    timeline: "Next 30–60 Days",
    headache: "",
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

WHAT THEY WANT TO BUILD:
${formData.selectedServices.map((s) => `- ${s}`).join("\n")}

TIMELINE: ${formData.timeline}

BIGGEST OPERATIONAL HEADACHE:
${formData.headache || "N/A"}
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
          services: formData.selectedServices,
          timeline: formData.timeline,
          headache: formData.headache,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setCountdown(6);
        setStatus("success");
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

        <div className="p-4 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl text-xs font-mono text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent-blue animate-ping"></span>
          Redirecting to home in <span className="font-bold text-accent-blue">{countdown}s</span>...
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="btn-brand w-full sm:w-auto text-center px-6 py-3">
            Return to Home Now
          </Link>
          <Link href="/portfolio" className="btn-secondary w-full sm:w-auto text-center px-6 py-3">
            View Our Portfolio
          </Link>
          <button
            onClick={() => {
              setStatus("idle");
              setStep(1);
              setFormData({
                name: "",
                email: "",
                company: "",
                selectedServices: [],
                timeline: "Next 30–60 Days",
                headache: "",
              });
            }}
            className="text-xs font-mono text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 underline underline-offset-4 py-2"
          >
            Submit Another Assessment
          </button>
        </div>
      </div>
    );
  }


  return (
    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 sm:p-10 rounded-2xl shadow-xl">
      {/* Progress Bar & Indicators */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-mono mb-3">
          <span className="text-accent-blue font-bold">
            STEP {step} OF 3
          </span>
          <span className="text-zinc-400 dark:text-zinc-500">
            {step === 1 && "Your Business Basics"}
            {step === 2 && "What Are You Looking to Build?"}
            {step === 3 && "Timeline & Goals"}
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
                placeholder="Full Name (e.g., Sarah Connor)"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-3 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:border-accent-blue transition-colors"
              />
              <input
                type="email"
                required
                placeholder="Business Email (e.g., sarah@company.com)"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-3 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:border-accent-blue transition-colors"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-bold text-zinc-900 dark:text-zinc-100">
              What is the name of your company or project? *
            </label>
            <input
              type="text"
              required
              placeholder="Company or Project Name (e.g., Cyberdyne Systems)"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-3 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:border-accent-blue transition-colors"
            />
          </div>

          <div className="pt-4 flex justify-end">
            <button type="submit" className="btn-brand px-8 py-3">
              Continue to Step 2 →
            </button>
          </div>
        </form>
      )}

      {/* Step 2: What Are You Looking to Build? */}
      {step === 2 && (
        <form onSubmit={handleNextStep} className="space-y-6">
          <div className="space-y-3">
            <label className="block text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-2">
              What are you looking to build? (Select all that apply) *
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
                        className={`w-5 h-5 rounded flex items-center justify-center border text-xs ${
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
              Continue to Step 3 →
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
                    className={`py-3 px-3 rounded-lg text-xs sm:text-sm font-medium border text-center transition-all ${
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

          <div className="space-y-2">
            <label className="block text-sm font-bold text-zinc-900 dark:text-zinc-100">
              What is the biggest operational headache holding your business back right now?
            </label>
            <textarea
              rows={4}
              placeholder="e.g., We waste 15 hours a week manually emailing clients, gathering PDFs, and chasing down payments..."
              value={formData.headache}
              onChange={(e) => setFormData({ ...formData, headache: e.target.value })}
              className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg p-4 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:border-accent-blue transition-colors resize-none"
            />
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
              {status === "submitting" ? "Processing..." : "Claim Your Free Strategy Call"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
