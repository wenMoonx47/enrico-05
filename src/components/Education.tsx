"use client";

import { GraduationCap, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import ScrollReveal from "./ScrollReveal";

export default function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">{t.education.title}</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="max-w-2xl mx-auto">
            <div className="glass-card rounded-2xl p-8 sm:p-10 text-center relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

              <div className="inline-flex p-4 rounded-2xl bg-indigo-500/10 text-indigo-400 mb-6">
                <GraduationCap size={32} />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {t.education.degree}
              </h3>

              <div className="flex items-center justify-center gap-2 text-slate-400 mb-2">
                <MapPin size={16} className="text-indigo-400" />
                <span>{t.education.university}</span>
              </div>

              <p className="text-indigo-400 font-medium">
                {t.education.graduated}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
