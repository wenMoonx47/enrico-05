"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const navLinks = ["about", "skills", "experience", "education", "contact"] as const;

function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`flex items-center rounded-full border border-indigo-500/30 overflow-hidden ${
        compact ? "text-xs" : "text-sm"
      }`}
    >
      <button
        onClick={() => setLanguage("es")}
        className={`flex items-center gap-1 px-3 py-1.5 transition-all ${
          language === "es"
            ? "bg-indigo-500/20 text-indigo-300 font-semibold"
            : "text-slate-500 hover:text-slate-300 hover:bg-white/5"
        }`}
      >
        {!compact && <Globe size={14} />}
        ES
      </button>
      <div className="w-px h-4 bg-indigo-500/30" />
      <button
        onClick={() => setLanguage("en")}
        className={`flex items-center gap-1 px-3 py-1.5 transition-all ${
          language === "en"
            ? "bg-indigo-500/20 text-indigo-300 font-semibold"
            : "text-slate-500 hover:text-slate-300 hover:bg-white/5"
        }`}
      >
        EN
      </button>
    </div>
  );
}

export default function Navbar() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#030014]/80 backdrop-blur-xl border-b border-indigo-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => handleNavClick(link)}
                className="px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                {t.nav[link]}
              </button>
            ))}
          </div>

          {/* Language Switcher - right side */}
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-3 md:hidden">
            <LanguageSwitcher compact />
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="text-slate-400 hover:text-white transition-colors"
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#030014]/95 backdrop-blur-xl border-b border-indigo-500/10"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => handleNavClick(link)}
                  className="block w-full text-left px-4 py-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {t.nav[link]}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
