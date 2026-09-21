"use client";

import React, { useState } from "react";

const AGENCY_FOCUS_OPTIONS = [
  "Paid Media / PPC",
  "SEO / Organic Growth",
  "Full-Service / Creative",
  "Branding & UI Design",
];

const DEV_NEED_OPTIONS = [
  "5 Business-Day Campaign Landing Page",
  "Custom Web App / Shopify",
  "Ongoing Overflow Dev Support",
];

export default function AgencyIntakeForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    agencyName: "",
    email: "",
    focus: "",
    devNeed: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agencyName || !formData.email || !formData.focus || !formData.devNeed) {
      setErrorMessage("Please complete all required fields.");
      return;
    }
    
    setStatus("submitting");
    setErrorMessage("");

    const formattedMessage = `
WHITE-LABEL PARTNERSHIP INQUIRY

AGENCY NAME: ${formData.agencyName}
CORE FOCUS: ${formData.focus}
IMMEDIATE DEV NEED: ${formData.devNeed}
    `.trim();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.agencyName,
          email: formData.email,
          message: formattedMessage,
          company: formData.agencyName,
        }),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        const data = await response.json();
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
      <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 sm:p-12 rounded-2xl text-center space-y-6">
        <div className="h-16 w-16 bg-brand/10 text-brand rounded-full flex items-center justify-center mx-auto">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50">
          Request Received
        </h3>
        <p className="text-zinc-600 dark:text-zinc-300 max-w-md mx-auto leading-relaxed">
          Thank you. Our partnership team will review your agency's details and reach out within 1 business day with the white-label spec sheet and rates.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 sm:p-10 rounded-2xl shadow-xl w-full max-w-3xl mx-auto">
      {errorMessage && (
        <div className="mb-6 p-4 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-300 text-sm font-medium rounded-lg">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8 text-left">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-bold text-zinc-900 dark:text-zinc-100">
              Agency Name *
            </label>
            <input
              type="text"
              required
              placeholder="Agency Name"
              value={formData.agencyName}
              onChange={(e) => setFormData({ ...formData, agencyName: e.target.value })}
              className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-3 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:border-brand transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-bold text-zinc-900 dark:text-zinc-100">
              Partner / Lead Email *
            </label>
            <input
              type="email"
              required
              placeholder="email@agency.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-3 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:border-brand transition-colors"
            />
          </div>
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-bold text-zinc-900 dark:text-zinc-100">
            Agency Core Focus *
          </label>
          <div className="flex flex-wrap gap-3">
            {AGENCY_FOCUS_OPTIONS.map((opt) => (
              <button
                type="button"
                key={opt}
                onClick={() => setFormData({ ...formData, focus: opt })}
                className={`py-2 px-4 rounded-full text-sm font-medium border transition-all ${
                  formData.focus === opt
                    ? "bg-brand text-zinc-950 border-brand font-bold"
                    : "bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-bold text-zinc-900 dark:text-zinc-100">
            Immediate Dev Need *
          </label>
          <div className="flex flex-wrap gap-3">
            {DEV_NEED_OPTIONS.map((opt) => (
              <button
                type="button"
                key={opt}
                onClick={() => setFormData({ ...formData, devNeed: opt })}
                className={`py-2 px-4 rounded-full text-sm font-medium border transition-all ${
                  formData.devNeed === opt
                    ? "bg-brand text-zinc-950 border-brand font-bold"
                    : "bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <div className="pt-4 flex flex-col items-center gap-4">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="btn-brand w-full sm:w-auto px-8 py-4 text-base font-bold shadow-lg disabled:opacity-50"
          >
            {status === "submitting" ? "Processing..." : "Get White-Label Spec Sheet & Rates"}
          </button>
          <p className="text-xs sm:text-sm text-zinc-500 text-center max-w-lg mt-2">
            ⚡ We respond within 1 business day. We work under your brand and strictly observe client-non-poach agreements.
          </p>
        </div>
      </form>
    </div>
  );
}
