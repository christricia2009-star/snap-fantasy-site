"use client";

import { useState } from "react";
import { capabilityGroups } from "@/data/capabilities";

export default function UnderTheHood() {
  const [tab, setTab] = useState(capabilityGroups[0].id);
  const [expanded, setExpanded] = useState(false);
  const active = capabilityGroups.find((g) => g.id === tab) ?? capabilityGroups[0];

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
            Capability map · 300 enhancements
          </p>
          <h2 id="hood-heading" className="section-title">
            Under the hood — the stack Draft Wizard never ships.
          </h2>
          <p className="section-sub mt-4">
            Gen1 win stack (1–50). Gen2 import & portfolio (51–100). Gen3 market,
            agents, Draft 3.0, season domination, portfolio heat, hosts, learning,
            formats & UX (101–300). Browse by pillar — expand for the full inventory.
          </p>
        </div>

        <div className="mb-6 grid grid-cols-3 sm:grid-cols-3 gap-3 max-w-lg">
          {[
            { n: "50", l: "Gen1 win stack" },
            { n: "50", l: "Gen2 portfolio" },
            { n: "200", l: "Gen3 command" },
          ].map((c) => (
            <div
              key={c.l}
              className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] px-3 py-3 text-center"
            >
              <div className="font-mono text-xl font-bold text-[var(--accent-bright)]">
                {c.n}
              </div>
              <div className="text-[10px] sm:text-xs text-[var(--text-dim)] mt-0.5">
                {c.l}
              </div>
            </div>
          ))}
        </div>

        <div
          className="flex flex-wrap gap-2 mb-6"
          role="tablist"
          aria-label="Capability pillars"
        >
          {capabilityGroups.map((g) => (
            <button
              key={g.id}
              type="button"
              role="tab"
              aria-selected={tab === g.id}
              onClick={() => setTab(g.id)}
              className={`rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors border ${
                tab === g.id
                  ? "bg-[var(--accent)] text-[#04120a] border-transparent"
                  : "border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--border-strong)] hover:text-[var(--text)]"
              }`}
            >
              {g.label}
            </button>
          ))}
        </div>

        <div className="card p-5 sm:p-6" role="tabpanel" aria-label={active.label}>
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
            <h3 className="text-base font-semibold text-[var(--text)]">{active.label}</h3>
            <span className="text-xs font-mono text-[var(--text-dim)]">
              IDs {active.range}
            </span>
          </div>
          <ul className="grid gap-2 sm:grid-cols-2">
            {active.items.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-[var(--text-muted)]">
                <span className="text-[var(--accent)] mt-0.5 shrink-0" aria-hidden>
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <button
            type="button"
            className="btn-secondary !py-2.5 !text-sm w-full sm:w-auto"
            aria-expanded={expanded}
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded ? "Hide full capability map" : "See full capability map (all pillars)"}
          </button>
          <div className={`accordion-content ${expanded ? "open" : ""} mt-4`}>
            <div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {capabilityGroups.map((g) => (
                  <div key={g.id} className="card p-4">
                    <div className="flex items-baseline justify-between gap-2 mb-2">
                      <h4 className="text-sm font-semibold text-[var(--accent)]">
                        {g.label}
                      </h4>
                      <span className="text-[10px] font-mono text-[var(--text-dim)]">
                        {g.range}
                      </span>
                    </div>
                    <ul className="space-y-1">
                      {g.items.map((item) => (
                        <li key={item} className="text-xs text-[var(--text-muted)]">
                          · {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-[var(--text-dim)] text-center">
                In-app: Tools → Diagnostics & coverage confirms Gen1 + Gen2 + Gen3 = 300.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
