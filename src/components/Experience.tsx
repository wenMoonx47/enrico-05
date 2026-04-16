"use client";

import { useLanguage } from "@/context/LanguageContext";
import ScrollReveal from "./ScrollReveal";
import { MapPin, Calendar, CheckCircle2, ExternalLink } from "lucide-react";

const companyBranding: Record<
  string,
  {
    gradient: string;
    accent: string;
    logo: string;
    url: string;
    image: string;
    mobile?: boolean;
  }
> = {
  Kueski: {
    gradient: "from-green-500 to-emerald-600",
    accent: "text-green-400",
    logo: "K",
    url: "https://kueski.com",
    image: "/images/kueski.webp",
    mobile: true,
  },
  Retool: {
    gradient: "from-blue-500 to-indigo-600",
    accent: "text-blue-400",
    logo: "R",
    url: "https://retool.com",
    image: "/images/retool.png",
  },
  Factorial: {
    gradient: "from-violet-500 to-purple-600",
    accent: "text-violet-400",
    logo: "F",
    url: "https://factorialhr.com",
    image: "/images/factorial.webp",
  },
  Holded: {
    gradient: "from-amber-500 to-orange-600",
    accent: "text-amber-400",
    logo: "H",
    url: "https://holded.com",
    image: "/images/holded.webp",
  },
};

function ProductScreenshot({
  company,
  description,
}: {
  company: string;
  description: string;
}) {
  const branding = companyBranding[company];
  if (!branding) return null;

  if (branding.mobile) {
    return (
      <div className="mt-6 group flex items-center justify-center">
        <div className="relative w-[160px] sm:w-[180px]">
          {/* Phone frame */}
          <div className="rounded-[24px] border-[3px] border-slate-600 bg-slate-900 p-1.5 shadow-xl shadow-black/30">
            {/* Notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-slate-700 rounded-full z-10" />
            {/* Screen */}
            <div className="rounded-[18px] overflow-hidden relative">
              <img
                src={branding.image}
                alt={`${company} product screenshot`}
                loading="lazy"
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
          {/* Description below */}
          <p className="text-xs text-slate-500 mt-3 text-center italic">
            {description}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="browser-mockup mt-6 group">
      {/* Browser bar */}
      <div className="browser-bar">
        <div className="browser-dot bg-red-500/80" />
        <div className="browser-dot bg-yellow-500/80" />
        <div className="browser-dot bg-green-500/80" />
        <div className="flex-1 mx-4">
          <div className="bg-slate-800 rounded-md px-3 py-1 text-xs text-slate-400 max-w-xs truncate">
            {branding.url}
          </div>
        </div>
      </div>
      {/* Real product screenshot */}
      <div className="relative overflow-hidden bg-slate-900/50 h-55 sm:h-65">
        <img
          src={branding.image}
          alt={`${company} product screenshot`}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay with description on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <p className="text-xs text-slate-300 p-4 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="relative py-24 sm:py-32 grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">{t.experience.title}</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              {t.experience.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-12">
          {t.experience.jobs.map((job, index) => {
            const branding = companyBranding[job.company];
            return (
              <ScrollReveal key={job.company} delay={0.1 * index}>
                <div className="glass-card rounded-2xl overflow-hidden">
                  {/* Gradient top bar */}
                  <div
                    className={`h-1 bg-gradient-to-r ${branding?.gradient || "from-indigo-500 to-purple-500"}`}
                  />

                  <div className="p-6 sm:p-8">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                      <div className="flex items-start gap-4">
                        {/* Company Logo */}
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${branding?.gradient || "from-indigo-500 to-purple-500"} flex items-center justify-center text-white font-bold text-xl shrink-0`}
                        >
                          {branding?.logo || job.company[0]}
                        </div>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-white">
                            {job.role}
                          </h3>
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
                            <a
                              href={branding?.url || "#"}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`font-semibold ${branding?.accent || "text-indigo-400"} hover:underline flex items-center gap-1`}
                            >
                              {job.company}
                              <ExternalLink size={12} />
                            </a>
                            <span className="text-slate-500 flex items-center gap-1 text-sm">
                              <MapPin size={12} />
                              {job.location}
                            </span>
                          </div>
                        </div>
                      </div>
                      <span className="flex items-center gap-1.5 text-sm text-slate-400 shrink-0">
                        <Calendar size={14} />
                        {job.period}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-slate-400 mb-6">{job.description}</p>

                    <div className="grid lg:grid-cols-2 gap-6">
                      {/* Achievements */}
                      <div>
                        <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">
                          {t.experience.achievements}
                        </h4>
                        <ul className="space-y-3">
                          {job.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2.5 text-sm text-slate-400"
                            >
                              <CheckCircle2
                                size={16}
                                className={`${branding?.accent || "text-indigo-400"} shrink-0 mt-0.5`}
                              />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Real Product Screenshot */}
                      <div>
                        <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-2">
                          {t.experience.product}
                        </h4>
                        <ProductScreenshot
                          company={job.company}
                          description={job.product_description}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
