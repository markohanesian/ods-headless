"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Message not sent.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (status === "success") {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
        <div className="h-12 w-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4">
          <svg className="h-6 w-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Message Received</h3>
        <p className="text-zinc-500 dark:text-zinc-300">Our team will review your project brief and respond shortly.</p>
        <button 
          onClick={() => setStatus("idle")}
          className="mt-8 label-mono hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10">
      <div className="space-y-2">
        <label className="block label-mono">Full Name</label>
        <input 
          type="text" 
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-3 text-lg focus:outline-none focus:border-brand transition-colors rounded-none appearance-none"
          placeholder="John Doe"
        />
      </div>
      <div className="space-y-2">
        <label className="block label-mono">Email Address</label>
        <input 
          type="email" 
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-3 text-lg focus:outline-none focus:border-brand transition-colors rounded-none appearance-none"
          placeholder="john@example.com"
        />
      </div>
      <div className="space-y-2">
        <label className="block label-mono">Project Brief</label>
        <textarea 
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-3 text-lg focus:outline-none focus:border-brand transition-colors resize-none rounded-none appearance-none"
          placeholder="Tell us about your project requirements..."
        />
      </div>
      {status === "error" && (
        <div className="p-4 bg-red-500/10 border border-red-500/20">
          <p className="text-xs text-red-500 font-mono">{errorMessage}</p>
        </div>
      )}
      <button 
        type="submit"
        disabled={status === "submitting"}
        className="w-full btn-brand disabled:opacity-50"
      >
        {status === "submitting" ? "Processing..." : "SEND"}
      </button>

    </form>
  );
}
