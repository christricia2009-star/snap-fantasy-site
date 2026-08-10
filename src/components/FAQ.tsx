"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Is this a league host?",
    a: "No. Use Sleeper, Yahoo, or ESPN for the room. SnapFantasy is the brain next to them — draft OS, weekly GM, portfolio risk, and agents.",
  },
  {
    q: "Does it replace FantasyPros?",
    a: "It can use FantasyPros as market data (optional API key for ECR/ADP). What it replaces is the workflow of juggling five apps, notes, and group chats all season.",
  },
  {
    q: "Yahoo / Gmail auto-import?",
    a: "Yahoo via OAuth on the official API path. Gmail is opt-in fantasy mail scan. Paste invite email / league URL / HTML always works as a fallback.",
  },
  {
    q: "Multi-league drafts at once?",
    a: "Yes. Start and continue drafts per league. Simultaneous multi-league draft rooms with per-league clocks and Snap Score queues.",
  },
  {
    q: "Offline draft?",
    a: "Yes. Offline draft pack plus cached recommendations when the bar Wi‑Fi dies. Local-first SwiftData keeps your state ready.",
  },
  {
    q: "NBA / MLB?",
    a: "Architecture is ready. NFL-first today — the OS pattern extends across sports when the season stack is proven.",
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
