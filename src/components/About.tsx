"use client";

import { MapPin, Globe2, Briefcase, TrendingUp, Shield } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  const { t } = useLanguage();

  const stats = [
    { value: t.about.years, label: t.about.years_label, icon: <Briefcase size={20} /> },
    { value: t.about.projects, label: t.about.projects_label, icon: <TrendingUp size={20} /> },
    { value: t.about.uptime, label: t.about.uptime_label, icon: <Shield size={20} /> },
  ];

  const languages = [
    { name: t.about.spanish, flag: "🇪🇸" },
    { name: t.about.english, flag: "🇺🇸" },
    { name: t.about.japanese, flag: "🇯🇵" },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">{t.about.title}</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Main description */}
          <ScrollReveal className="lg:col-span-3" delay={0.1}>
            <div className="glass-card rounded-2xl p-6 sm:p-8 h-full">
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
                {t.about.description}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                <span className="flex items-center gap-2">
                  <MapPin size={16} className="text-indigo-400" />
                  {t.about.location}
                </span>
                <span className="flex items-center gap-2">
                  <Globe2 size={16} className="text-emerald-400" />
                  {t.about.remote}
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Languages */}
          <ScrollReveal className="lg:col-span-2" delay={0.2}>
            <div className="glass-card rounded-2xl p-6 sm:p-8 h-full">
              <h3 className="text-lg font-semibold text-white mb-6">
                {t.about.languages_title}
              </h3>
              <div className="space-y-4">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.05]"
                  >
                    <span className="text-2xl">{lang.flag}</span>
                    <span className="text-slate-300">{lang.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={0.1 * (i + 1)}>
              <div className="glass-card rounded-2xl p-6 text-center group hover:glow transition-all duration-500">
                <div className="inline-flex p-3 rounded-xl bg-indigo-500/10 text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
