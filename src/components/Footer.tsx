"use client";

import { GithubIcon, LinkedinIcon, XTwitterIcon } from "./SocialIcons";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const socialLinks = [
    {
      icon: <LinkedinIcon size={18} />,
      href: "https://www.linkedin.com/in/enrico-perania-3689ba403/",
      label: "LinkedIn",
    },
    {
      icon: <GithubIcon size={18} />,
      href: "https://github.com/ethhandy",
      label: "GitHub",
    },
    {
      icon: <XTwitterIcon size={18} />,
      href: "https://x.com/ThepaulCreative",
      label: "X / Twitter",
    },
  ];

  return (
    <footer className="relative border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="flex items-center gap-1 text-sm text-slate-500">
            <span>&copy; {new Date().getFullYear()} Enrico Perania.</span>
            <span>{t.footer.rights}</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-2.5 text-slate-500 hover:text-indigo-400 border border-slate-800 hover:border-indigo-500/30 rounded-lg transition-all hover:bg-indigo-500/5"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
