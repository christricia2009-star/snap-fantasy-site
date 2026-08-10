"use client";

import { useState } from "react";

const groups = [
  {
    id: "draft-night",
    label: "Draft night",
    items: [
      "Simultaneous multi-league draft rooms",
      "Snake / linear clocks from slot + team count",
      "Sleeper auto-sync + manual pick log",
      "Snap Score dual-signal queue",
      "Reach / steal radar",
      "Strategy modes: Zero / Hero / Robust RB",
      "Keeper awareness + auction ceilings",
      "Voice draft Q&A",
      "Offline draft pack + cached recs",
      "Post-draft grade vs ADP / FP",
    ],
  },
  {
    id: "season-ai",
    label: "Season AI",
    items: [
      "One-tap Optimize Lineup pipeline",
      "Start/Sit confidence + floor/ceiling",
      "Waiver wire + FAAB engine",
      "Trade analyzer + package generator",
      "Negotiation agent",
      "Injury & news impact",
      "Weather fades",
      "Matchup smash / tough flags",
      "Bye planner + schedule preview",
      "Playoff odds",
      "Free-form chat + voice",
    ],
  },
  {
    id: "portfolio",
    label: "Portfolio",
    items: [
      "Cross-league exposure map",
      "Anti-correlate suggestions",
      "League importance weights",
      "Sunday batch optimize all leagues",
      "Silent partner digest",
      "Shared stash / FAAB coordination",
    ],
  },
  {
    id: "host-import",
    label: "Host import",
    items: [
      "Sleeper sync",
      "Yahoo OAuth (official API)",
      "Paste invite / URL / HTML → structured league",
      "Optional Gmail fantasy scan",
      "Settings-diff when rules change",
    ],
  },
  {
    id: "agents",
    label: "Agents",
    items: [
      "Scout / Risk Officer / GM debate",
      "Weekly script of the week",
      "Post-week autopsy",
      "Season thesis",
      "Prove-it citations",
      "Tool-using Sunday plan + spend cap",
      "House rules + constitution injection",
    ],
  },
  {
    id: "learning",
    label: "Learning",
    items: [
      "Decision log",
      "Accuracy charts",
      "Confidence calibration",
      "Personal truth model from graded misses",
      "Private notes in every AI call",
      "Hallucination guards vs local DB / rankings",
    ],
  },
];

export default function UnderTheHood() {
  const [tab, setTab] = useState(groups[0].id);
  const [expanded, setExpanded] = useState(false);
  const active = groups.find((g) => g.id === tab) ?? groups[0];

  return (
    <section
      className="relative py-20 sm:py-28 border-t border-[var(--border)]"
      aria-labelledby="hood-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl mb-10">
          <p className="section-label mb-3">
            <span className="h-1 w-1 rounded-full bg-[var(--accent)]" aria-hidden />
            Feature depth
          </p>
          <h2 id="hood-heading" className="section-title">
            Under the hood — without the 100-bullet dump.
          </h2>
          <p className="section-sub mt-4">
            Capability map by pillar. Expand when you want the full inventory.
          </p>
        </div>

        {/* Tabs */}
        <div
          className="flex flex-wrap gap-2 mb-6"
          role="tablist"
          aria-label="Capability pillars"
        >
          {groups.map((g) => (
            <button
              key={g.id}
              type="button"
              role="tab"
              aria-selected={tab === g.id}
              onClick={() => setTab(g.id)}
              className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors border ${
                tab === g.id
                  ? "bg-[var(--accent)] text-[#04120a] border-transparent"
                  : "border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--border-strong)] hover:text-[var(--text)]"
              }`}
            >
              {g.label}
            </button>
          ))}
        </div>

        <div
          className="card p-5 sm:p-6"
          role="tabpanel"
          aria-label={active.label}
        >
          <h3 className="text-base font-semibold text-[var(--text)] mb-4">
            {active.label}
          </h3>
          <ul className="grid gap-2 sm:grid-cols-2">
            {active.items.map((item) => (
              <li
                key={item}
                className="flex gap-2 text-sm text-[var(--text-muted)]"
              >
                <span className="text-[var(--accent)] mt-0.5" aria-hidden>
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Full capability accordion */}
        <div className="mt-4">
          <button
            type="button"
            className="btn-secondary !py-2.5 !text-sm w-full sm:w-auto"
            aria-expanded={expanded}
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded ? "Hide full capability map" : "See full capability map"}
          </button>
          <div className={`accordion-content ${expanded ? "open" : ""} mt-4`}>
            <div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {groups.map((g) => (
                  <div key={g.id} className="card p-4">
                    <h4 className="text-sm font-semibold text-[var(--accent)] mb-2">
                      {g.label}
                    </h4>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
