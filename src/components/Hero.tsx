"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon, XTwitterIcon } from "./SocialIcons";
import { useLanguage } from "@/context/LanguageContext";

const ParticleField = dynamic(() => import("./ParticleField"), { ssr: false });

export default function Hero() {
  const { t, language } = useLanguage();

  const resumeUrl =
    language === "es"
      ? "https://docs.google.com/document/d/1zfKIM1yOamdMJaN_e-YyaCRmqGfQR4GBBw9b1l0Z7Bc/edit?usp=sharing"
      : "https://docs.google.com/document/d/1peOh5wzkxP7zBQWwCvO2IJ9o1nQh86asml0aSh_cWY4/edit?usp=sharing";

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-bg grid-pattern overflow-hidden">
      {/* Three.js Particle Field */}
      <ParticleField />

      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse [animation-delay:2s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-violet-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/5 text-indigo-300 text-sm mb-8"
        >
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          {t.about.remote}
        </motion.div>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg sm:text-xl text-slate-400 mb-4"
        >
          {t.hero.greeting}
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-4 glow-text"
        >
          <span className="gradient-text">{t.hero.name}</span>
        </motion.h1>

        {/* Role */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white/90 mb-6"
        >
          {t.hero.role}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t.hero.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-full transition-all hover:shadow-lg hover:shadow-indigo-500/25"
          >
            <FileText size={18} />
            {t.hero.cta_resume}
          </a>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex items-center gap-2 px-8 py-3.5 border border-slate-700 hover:border-indigo-500/50 text-slate-300 hover:text-white font-medium rounded-full transition-all hover:bg-white/5"
          >
            {t.hero.cta_contact}
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-5"
        >
          {[
            {
              icon: <LinkedinIcon size={20} />,
              href: "https://www.linkedin.com/in/enrico-perania-3689ba403/",
              label: "LinkedIn",
            },
            {
              icon: <GithubIcon size={20} />,
              href: "https://github.com/ethhandy",
              label: "GitHub",
            },
            {
              icon: <XTwitterIcon size={20} />,
              href: "https://x.com/ThepaulCreative",
              label: "X / Twitter",
            },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="p-3 text-slate-500 hover:text-indigo-400 border border-slate-800 hover:border-indigo-500/30 rounded-full transition-all hover:bg-indigo-500/5"
            >
              {social.icon}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={20} className="text-slate-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
