"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#product", label: "Product" },
  { href: "#why-better", label: "Why better" },
  { href: "#playbook", label: "Playbook" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

function readStoredTheme(): "dark" | "light" {
  if (typeof window === "undefined") return "dark";
  const stored = localStorage.getItem("sf-theme");
  return stored === "light" || stored === "dark" ? stored : "dark";
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const stored = readStoredTheme();
    document.documentElement.setAttribute("data-theme", stored);
    // Defer so we don't sync-set state in the effect body (eslint react-hooks)
    const id = requestAnimationFrame(() => setTheme(stored));
    return () => cancelAnimationFrame(id);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("sf-theme", next);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open ? "glass shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6"
        aria-label="Primary"
      >
        <a href="#top" className="flex items-center gap-2.5 group">
          <span
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--accent)] text-[#04120a] font-bold text-sm tracking-tight shadow-[0_0_20px_var(--accent-glow)]"
            aria-hidden
          >
            SF
          </span>
          <span className="font-semibold tracking-tight text-[var(--text)] group-hover:text-[var(--accent-bright)] transition-colors">
            SnapFantasy
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-3 py-2 text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors rounded-lg"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[var(--border-strong)] transition-colors"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? (
              <SunIcon />
            ) : (
              <MoonIcon />
            )}
          </button>
          <a href="#cta" className="btn-primary !py-2 !px-4 !text-sm hidden sm:inline-flex">
            Join private beta
          </a>
          <button
            type="button"
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text)]"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-[var(--border)] px-4 pb-4 pt-2 glass"
        >
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block px-3 py-2.5 text-sm text-[var(--text-muted)] hover:text-[var(--text)] rounded-lg"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-lg border border-[var(--border)] text-sm text-[var(--text-muted)]"
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
              {theme === "dark" ? "Light" : "Dark"}
            </button>
            <a
              href="#cta"
              className="btn-primary !py-2.5 flex-1 !text-sm"
              onClick={() => setOpen(false)}
            >
              Join beta
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" strokeLinecap="round" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M21 14.5A8.5 8.5 0 1 1 9.5 3a7 7 0 0 0 11.5 11.5z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
