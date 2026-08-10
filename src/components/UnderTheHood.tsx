"use client";

import { useState } from "react";
import { capabilityGroups } from "@/data/capabilities";

export default function UnderTheHood() {
  const [openId, setOpenId] = useState<string | null>(capabilityGroups[0].id);

  return (
    <section
      id="features"
      className="relative py-20 sm:py-28 border-t border-[var(--border)]"
      aria-labelledby="hood-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl mb-10">
          <p className="section-label mb-3">
            <span className="h-1 w-1 rounded-full bg-[var(--accent)]" aria-hidden />
            Deep dive · open the vault
          </p>
          <h2 id="hood-heading" className="section-title">
            Open any category. Draft Wizard doesn&apos;t even have this menu.
          </h2>
          <p className="section-sub mt-4">
            Not a feature-count flex for LinkedIn. The actual surface of a season-long
            GM — tap a category, read the weapons. This is why draft-week apps feel thin.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {capabilityGroups.map((g) => {
            const isOpen = openId === g.id;
            return (
              <article
                key={g.id}
                className={`card overflow-hidden transition-colors ${
                  isOpen ? "border-[var(--accent)]/35 sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpenId(isOpen ? null : g.id)}
                >
                  <h3 className="text-sm sm:text-base font-semibold text-[var(--text)]">
                    {g.label}
                  </h3>
                  <span
                    className={`shrink-0 text-[var(--accent)] text-lg leading-none transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div className={`accordion-content ${isOpen ? "open" : ""}`}>
                  <div>
                    <ul className="px-5 pb-5 space-y-1.5 border-t border-[var(--border)] pt-3">
                      {g.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 text-sm text-[var(--text-muted)]"
                        >
                          <span className="text-[var(--accent)] mt-0.5" aria-hidden>
                            ·
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
