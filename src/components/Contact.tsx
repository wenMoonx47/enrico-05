"use client";

import { useState, FormEvent } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon, XTwitterIcon } from "./SocialIcons";
import { useLanguage } from "@/context/LanguageContext";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:enricoperania@gmail.com?subject=${encodeURIComponent(
      `[Portfolio] ${formData.subject}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.open(mailtoUrl, "_blank");
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">{t.contact.title}</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Form */}
          <ScrollReveal className="lg:col-span-3" delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-6 sm:p-8"
            >
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    {t.contact.name_label}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t.contact.name_placeholder}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/25 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    {t.contact.email_label}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder={t.contact.email_placeholder}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/25 transition-all"
                  />
                </div>
              </div>
              <div className="mb-5">
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  {t.contact.subject_label}
                </label>
                <input
                  type="text"
                  required
                  placeholder={t.contact.subject_placeholder}
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/25 transition-all"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  {t.contact.message_label}
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder={t.contact.message_placeholder}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/25 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-xl transition-all hover:shadow-lg hover:shadow-indigo-500/25"
              >
                <Send size={16} />
                {t.contact.send}
              </button>
            </form>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal className="lg:col-span-2" delay={0.2}>
            <div className="space-y-6">
              {/* Address */}
              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">
                      {t.contact.address_title}
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {t.contact.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">
                      {t.contact.email_title}
                    </h4>
                    <a
                      href="mailto:enricoperania@gmail.com"
                      className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      enricoperania@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">
                      {t.contact.phone_title}
                    </h4>
                    <a
                      href="tel:+19282688561"
                      className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      +1 928-268-8561
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.linkedin.com/in/enrico-perania-3689ba403/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/[0.03] border border-slate-700/50 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/30 transition-all"
                  >
                    <LinkedinIcon size={20} />
                  </a>
                  <a
                    href="https://github.com/ethhandy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/[0.03] border border-slate-700/50 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/30 transition-all"
                  >
                    <GithubIcon size={20} />
                  </a>
                  <a
                    href="https://x.com/ThepaulCreative"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/[0.03] border border-slate-700/50 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/30 transition-all"
                  >
                    <XTwitterIcon size={20} />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
