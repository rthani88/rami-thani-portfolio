"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "@/components/navigation/LanguageSwitcher";
import { Menu, X } from "lucide-react";

const links = ["journey", "impact", "work", "expertise", "ventures", "contact"] as const;

export function Header() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 inset-x-0 z-40 border-b border-steel/15 bg-navy/90 backdrop-blur"
      style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
    >
      <div className="max-w-content mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="text-ivory font-semibold tracking-wide text-sm">
          RAMI THANI
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              className="text-sm text-steel hover:text-gold transition-colors"
            >
              {t(key)}
            </a>
          ))}
          <LanguageSwitcher />
        </nav>

        <button
          className="md:hidden text-ivory"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-steel/15 bg-navy px-6 py-4 flex flex-col gap-4">
          {links.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              className="text-steel hover:text-gold"
              onClick={() => setOpen(false)}
            >
              {t(key)}
            </a>
          ))}
          <LanguageSwitcher />
        </nav>
      )}
    </header>
  );
}
