"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Is this a league host?",
    a: "No. Use Sleeper, Yahoo, ESPN, or other hosts for the room. SnapFantasy is the private AI GM next to them — draft OS, Sunday command, portfolio risk, market intel, and agents.",
  },
  {
    q: "Does it replace FantasyPros or Draft Wizard?",
    a: "It can use FantasyPros as market data (optional API for ECR/ADP). Draft Wizard-class live assist is built in for personal multi-league use. What it replaces is the season-long workflow of juggling draft tools, notes, chats, and host apps — not necessarily your love of consensus ranks.",
  },
  {
    q: "Why is this better for multi-league managers?",
    a: "Host apps and draft tools don’t see your whole book. Portfolio heat, anti-correlate, money-league weights, lock chains, cross-league FAAB, and Sunday one-tap exist because 3–10 leagues is the real job.",
  },
  {
    q: "What do you have that Draft Wizard / FantasyPros don’t?",
    a: "Sunday command across every league, portfolio heat, FAAB war rooms, trade desk + politics, learning from YOUR graded misses, multi-host import, and AI agents with your house rules — not just rankings and a draft room. They’re great at draft week. We’re built for the season.",
  },
  {
    q: "Yahoo / Gmail / other hosts?",
    a: "Yahoo via official OAuth. Gmail is opt-in fantasy mail scan. Paste invite/URL/HTML always works. Also: ESPN deep adapter, CBS/NFL.com/Fleaflicker paste, CSV, screenshot OCR path, and bulk re-sync.",
  },
  {
    q: "Multi-league drafts at once?",
    a: "Yes. Simultaneous rooms with per-league clocks, Snap Score queues, urgency tiers, and offline packs.",
  },
  {
    q: "Offline draft?",
    a: "Yes — offline pack 2.0 plus cached recommendations. Local-first SwiftData keeps state ready when bar Wi‑Fi dies.",
  },
  {
    q: "How is this different from ChatGPT?",
    a: "Generic chat has no live rosters, FAAB budgets, house rules, or graded history. SnapFantasy injects local multi-league state, uses tool-using agents with spend caps, and keeps a hallucination audit trail.",
  },
  {
    q: "NBA / MLB?",
    a: "Architecture is multi-sport ready (Sport enum, provider protocols). NFL-first today — the OS pattern extends when the season stack is proven.",
  },
  {
    q: "Is it on the App Store?",
    a: "No. Private / personal distribution for you + friends. Not mass-market SaaS. Not selling seats to your whole league.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative py-20 sm:py-28 border-t border-[var(--border)]"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mb-10 text-center sm:text-left">
          <p className="section-label mb-3 justify-center sm:justify-start">
            <span className="h-1 w-1 rounded-full bg-[var(--accent)]" aria-hidden />
            FAQ
          </p>
          <h2 id="faq-heading" className="section-title">
            Straight answers.
          </h2>
        </div>

        <div className="space-y-2">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="card overflow-hidden">
                <h3>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm sm:text-base font-semibold text-[var(--text)]"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    {f.q}
                    <span
                      className={`shrink-0 text-[var(--accent)] transition-transform ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                </h3>
                <div className={`accordion-content ${isOpen ? "open" : ""}`}>
                  <div>
                    <p className="px-5 pb-4 text-sm text-[var(--text-muted)] leading-relaxed">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
