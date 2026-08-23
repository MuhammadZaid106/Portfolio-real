"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, CheckCircle2, ChevronDown, Award, ShieldCheck, Zap, Loader2 } from "lucide-react";

const stackOptions = [
  "Next.js + Tailwind",
  "TypeScript Full-Stack",
  "AI / LLM Integration",
  "SaaS Dashboard / App"
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    stack: "Next.js + Tailwind",
    message: "",
    agree: false,
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.agree) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          stack: "Next.js + Tailwind",
          message: "",
          agree: false,
        });
      }, 4000);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to send. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-gradient-to-br from-[#edfaf3] via-[#d6f0e3] to-[#b8e4cc] pt-12 pb-20 md:pt-24 md:pb-32 overflow-hidden"
    >
      {/* High-tech background grid line overlays */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern
            id="contact-grid"
            width="30"
            height="30"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 30 0 L 0 0 0 30"
              fill="none"
              stroke="#52c48a"
              strokeWidth="0.5"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#contact-grid)" />
        </svg>
      </div>

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#52c48a]/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 relative z-10">
        {/* Contact Form Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border-t-8 border-[#52c48a] p-5 sm:p-8 md:p-12 relative"
        >
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#52c48a]/10 text-[#52c48a] text-xs font-bold font-sans uppercase tracking-widest mb-3">
              <Zap className="w-3.5 h-3.5" /> Project Inquiry
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#141f19] font-sans">
              Let&apos;s Discuss Your Needs
            </h2>
            <p className="text-[#5c6c64] text-sm font-sans mt-2">
              Tell me about your project, we&apos;ll work it out.
            </p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-16 text-center space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-[#52c48a]/10 flex items-center justify-center text-[#52c48a]">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-[#141f19] font-sans">
                Message Sent Successfully!
              </h3>
              <p className="text-[#5c6c64] font-sans max-w-sm">
                Thank you for reaching out. I will review your requirements and
                get back to you within 24 hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Form Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold font-sans text-[#141f19]/75 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="full name"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="w-full bg-[#f5f8f6] border border-gray-200/60 rounded-xl px-4 py-3 text-sm font-sans text-[#141f19] focus:outline-none focus:border-[#52c48a] focus:bg-white transition-all duration-200"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold font-sans text-[#141f19]/75 uppercase tracking-wider">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="phone number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full bg-[#f5f8f6] border border-gray-200/60 rounded-xl px-4 py-3 text-sm font-sans text-[#141f19] focus:outline-none focus:border-[#52c48a] focus:bg-white transition-all duration-200"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold font-sans text-[#141f19]/75 uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-[#f5f8f6] border border-gray-200/60 rounded-xl px-4 py-3 text-sm font-sans text-[#141f19] focus:outline-none focus:border-[#52c48a] focus:bg-white transition-all duration-200"
                  />
                </div>

                {/* Styled Choose Stack Dropdown */}
                <div className="flex flex-col gap-1.5" ref={dropdownRef}>
                  <label className="text-xs font-bold font-sans text-[#141f19]/75 uppercase tracking-wider">
                    Choose Stack
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className={`w-full bg-[#f5f8f6] border rounded-xl px-4 py-3 text-sm font-sans text-[#141f19] flex items-center justify-between transition-all duration-200 cursor-pointer ${
                        dropdownOpen ? "border-[#52c48a] bg-white ring-1 ring-[#52c48a]" : "border-gray-200/60"
                      }`}
                    >
                      <span>{formData.stack}</span>
                      <motion.div
                        animate={{ rotate: dropdownOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-4 h-4 text-gray-500" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.ul
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute z-30 left-0 right-0 mt-1.5 bg-white border border-gray-150 rounded-xl shadow-xl max-h-60 overflow-y-auto py-1 font-sans text-sm text-[#141f19] divide-y divide-gray-50"
                        >
                          {stackOptions.map((option) => (
                            <li
                              key={option}
                              onClick={() => {
                                setFormData({ ...formData, stack: option });
                                setDropdownOpen(false);
                              }}
                              className={`px-4 py-2.5 cursor-pointer transition-colors ${
                                formData.stack === option
                                  ? "bg-[#52c48a]/10 text-[#52c48a] font-semibold"
                                  : "hover:bg-gray-50 text-gray-700"
                              }`}
                            >
                              {option}
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Message Details */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold font-sans text-[#141f19]/75 uppercase tracking-wider">
                  Project details / Assistance needed
                </label>
                <textarea
                  rows={4}
                  placeholder="Help me understand what you require assistance with, the goal of your project, and the problems you're dedicated to solving."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-[#f5f8f6] border border-gray-200/60 rounded-xl px-4 py-3 text-sm font-sans text-[#141f19] focus:outline-none focus:border-[#52c48a] focus:bg-white transition-all duration-200 resize-none leading-relaxed"
                />
              </div>

              {/* Checkbox Agreement */}
              <div className="flex items-start gap-3">
                <input
                  id="agree-checkbox"
                  type="checkbox"
                  checked={formData.agree}
                  onChange={(e) =>
                    setFormData({ ...formData, agree: e.target.checked })
                  }
                  className="w-4.5 h-4.5 accent-[#52c48a] border-gray-300 rounded cursor-pointer mt-0.5"
                />
                <label
                  htmlFor="agree-checkbox"
                  className="text-xs sm:text-sm font-sans text-[#5c6c64] select-none cursor-pointer leading-tight"
                >
                  I understand and agree to the Terms &amp; Conditions.
                </label>
              </div>

              {/* Error message */}
              {error && (
                <p className="text-red-500 text-xs font-sans text-center">{error}</p>
              )}

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={!formData.agree || loading}
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#52c48a] text-[#070d0a] font-sans font-bold text-sm shadow-md hover:bg-[#141f19] hover:text-[#52c48a] transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    "Submit Details"
                  )}
                </button>
              </div>
            </form>
          )}

          {/* Accreditations Trust Badges */}
          <div className="border-t border-gray-100 mt-10 pt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 opacity-50">
            <div className="flex items-center gap-1.5 text-[#141f19] font-sans text-xs font-bold">
              <Award className="w-4 h-4 text-[#52c48a]" /> Top Developer
            </div>
            <div className="flex items-center gap-1.5 text-[#141f19] font-sans text-xs font-bold">
              <ShieldCheck className="w-4 h-4 text-[#52c48a]" /> Verified
              Provider
            </div>
            <div className="text-xs font-bold text-[#141f19] font-sans">
              Google Rated 5.0
            </div>
            <div className="text-xs font-bold text-[#141f19] font-sans">
              Clutch Certified
            </div>
            <div className="text-xs font-bold text-[#141f19] font-sans">
              Trustpilot Active
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
