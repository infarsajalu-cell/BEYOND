"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const serviceOptions = [
  "Video Production",
  "Web Development",
  "App Development",
  "UI/UX Design",
  "Digital Marketing",
  "Photography",
  "Animation",
  "Other",
];

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 2000));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-16 bg-[#0a0a0a]" id="contact-hero">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d2b35]/15 via-[#0a0a0a] to-[#0a0a0a] noise-overlay" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pt-32 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="text-[0.65rem] tracking-[0.4em] text-[#c9a84c] uppercase mb-6">
              Get In Touch
            </div>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl tracking-wider leading-[0.95] font-display"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              LET&apos;S
              <br />
              <span className="text-gradient-gold">CONNECT</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 lg:py-24 bg-[#111]" id="contact-form">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2
                className="text-3xl md:text-4xl tracking-wider mb-8 font-display"
              >
                CONTACT INFORMATION
              </h2>

              <div className="space-y-8">
                <div>
                  <div className="text-[0.6rem] tracking-[0.3em] text-[#c9a84c] uppercase mb-2">
                    Address
                  </div>
                  <p className="text-sm text-[#888] leading-relaxed">
                    115, Crocus Way,
                    <br />
                    Chelmsford, CM1 5XH,
                    <br />
                    United Kingdom
                  </p>
                </div>

                <div>
                  <div className="text-[0.6rem] tracking-[0.3em] text-[#c9a84c] uppercase mb-2">
                    Email
                  </div>
                  <a
                    href="mailto:hello@beyondtheborders.co.uk"
                    className="text-sm text-[#888] hover:text-[#c9a84c] transition-colors"
                  >
                    hello@beyondtheborders.co.uk
                  </a>
                </div>

                <div>
                  <div className="text-[0.6rem] tracking-[0.3em] text-[#c9a84c] uppercase mb-2">
                    Phone
                  </div>
                  <a
                    href="tel:+44000000000"
                    className="text-sm text-[#888] hover:text-[#c9a84c] transition-colors"
                  >
                    +44 (0) 000 000 000
                  </a>
                </div>

                <div>
                  <div className="text-[0.6rem] tracking-[0.3em] text-[#c9a84c] uppercase mb-2">
                    Business Hours
                  </div>
                  <p className="text-sm text-[#888]">
                    Monday — Friday: 9:00 AM — 6:00 PM
                    <br />
                    Saturday — Sunday: By appointment
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {submitted ? (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/30 flex items-center justify-center"
                    >
                      <svg className="w-8 h-8 text-[#c9a84c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <h3
                      className="text-2xl tracking-wider mb-3 font-display"
                    >
                      MESSAGE SENT
                    </h3>
                    <p className="text-sm text-[#888]">
                      Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2
                    className="text-3xl md:text-4xl tracking-wider mb-8 font-display"
                  >
                    SEND US A MESSAGE
                  </h2>

                  {/* Name */}
                  <div className="floating-label-group">
                    <input
                      type="text"
                      id="contact-name"
                      placeholder=" "
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    <label htmlFor="contact-name">Full Name</label>
                  </div>

                  {/* Email */}
                  <div className="floating-label-group">
                    <input
                      type="email"
                      id="contact-email"
                      placeholder=" "
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    <label htmlFor="contact-email">Email Address</label>
                  </div>

                  {/* Phone */}
                  <div className="floating-label-group">
                    <input
                      type="tel"
                      id="contact-phone"
                      placeholder=" "
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                    <label htmlFor="contact-phone">Phone Number</label>
                  </div>

                  {/* Service */}
                  <div className="floating-label-group">
                    <select
                      id="contact-service"
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option value="" disabled></option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#111]">
                          {opt}
                        </option>
                      ))}
                    </select>
                    <label htmlFor="contact-service">Service Required</label>
                  </div>

                  {/* Message */}
                  <div className="floating-label-group">
                    <textarea
                      id="contact-message"
                      placeholder=" "
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                    <label htmlFor="contact-message">Your Message</label>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full px-8 py-4 bg-[#c9a84c] text-[#0a0a0a] text-xs tracking-[0.3em] uppercase font-bold hover:bg-[#c9a84c]/90 transition-all duration-500 rounded disabled:opacity-50 relative overflow-hidden"
                    id="contact-submit"
                  >
                    {submitting ? (
                      <div className="flex items-center justify-center gap-3">
                        <div className="w-4 h-4 border-2 border-[#0a0a0a]/30 border-t-[#0a0a0a] rounded-full animate-spin" />
                        Sending...
                      </div>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
