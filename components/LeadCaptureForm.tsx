"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LeadCaptureForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/lead-capture-intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to submit form. Please try again.");
      }

      router.push("/lead-capture/thank-you");
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white dark:bg-zinc-900 p-8 sm:p-12 border border-zinc-200 dark:border-zinc-800 rounded-none shadow-xl">
      <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10">
        {error && (
          <div className="p-4 bg-red-500/10 border border-red-500/20">
            <p className="text-sm text-red-500 font-mono">{error}</p>
          </div>
        )}
        
        <div className="grid grid-cols-1 gap-8 md:gap-10 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="fullName" className="block label-mono">
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              required
              className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-3 text-lg focus:outline-none focus:border-brand transition-colors rounded-none appearance-none"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="businessName" className="block label-mono">
              Business Name *
            </label>
            <input
              type="text"
              name="businessName"
              id="businessName"
              required
              className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-3 text-lg focus:outline-none focus:border-brand transition-colors rounded-none appearance-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:gap-10 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="email" className="block label-mono">
              Work Email *
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-3 text-lg focus:outline-none focus:border-brand transition-colors rounded-none appearance-none"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="block label-mono">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              required
              className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-3 text-lg focus:outline-none focus:border-brand transition-colors rounded-none appearance-none"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="websiteUrl" className="block label-mono">
            Website URL (Optional)
          </label>
          <input
            type="url"
            name="websiteUrl"
            id="websiteUrl"
            className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-3 text-lg focus:outline-none focus:border-brand transition-colors rounded-none appearance-none"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="primaryGoal" className="block label-mono">
            Primary Goal *
          </label>
          <select
            name="primaryGoal"
            id="primaryGoal"
            required
            className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-3 text-lg focus:outline-none focus:border-brand transition-colors rounded-none appearance-none"
          >
            <option value="">Select a goal...</option>
            <option value="Launch New Ad Campaign">Launch New Ad Campaign</option>
            <option value="Fix Low-Converting Ads">Fix Low-Converting Ads</option>
            <option value="Replace Outdated Lead Form">Replace Outdated Lead Form</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-brand disabled:opacity-50"
        >
          {isSubmitting ? "PROCESSING..." : "SUBMIT PILOT REQUEST"}
        </button>
      </form>
    </div>
  );
}
