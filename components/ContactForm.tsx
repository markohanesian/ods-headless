"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
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
        <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Transmission Received</h3>
        <p className="text-zinc-500 dark:text-zinc-400">Our team will review your project brief and respond shortly.</p>
        <button 
          onClick={() => setStatus("idle")}
          className="mt-8 text-[10px] font-mono uppercase tracking-widest text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-2">Full Name</label>
        <input 
          type="text" 
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-2 focus:outline-none focus:border-zinc-900 dark:focus:border-zinc-50 transition-colors"
          placeholder="John Doe"
        />
      </div>
      <div>
        <label className="block text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-2">Email Address</label>
        <input 
          type="email" 
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-2 focus:outline-none focus:border-zinc-900 dark:focus:border-zinc-50 transition-colors"
          placeholder="john@example.com"
        />
      </div>
      <div>
        <label className="block text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-2">Project Brief</label>
        <textarea 
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-2 focus:outline-none focus:border-zinc-900 dark:focus:border-zinc-50 transition-colors resize-none"
          placeholder="Tell us about your project..."
        />
      </div>
      {status === "error" && (
        <p className="text-xs text-red-500 font-mono">An error occurred. Please try again or email us directly.</p>
      )}
      <button 
        type="submit"
        disabled={status === "submitting"}
        className="w-full py-4 bg-brand text-zinc-900 font-bold uppercase tracking-widest text-xs hover:bg-[#e69b2d] transition-colors disabled:opacity-50"
      >
        {status === "submitting" ? "Sending..." : "Get in Touch"}
      </button>
    </form>
  );
}
