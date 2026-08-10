"use client";

import { useState } from "react";
import MockTimeline from "./mocks/MockTimeline";

const rows = [
  {
    job: "Expert consensus rankings",
    them: "Best-in-class",
    us: "Optional overlay via FP API",
  },
  {
    job: "Live draft sync with hosts",
    them: "Strong (paid tiers)",
    us: "Sleeper sync + Yahoo OAuth + manual; improving",
  },
  {
    job: "Mock drafts",
    them: "Excellent",
    us: "Built-in mocks + grades",
  },
  {
    job: "After the draft",
    them: "Rankings/content add-ons",
    us: "Full GM OS: lineups, FAAB, trades, news, weather, playoffs",
  },
  {
    job: "Multi-league portfolio risk",
    them: "Weak / none",
    us: "Core feature",
  },
  {
    job: "Learns YOUR misses",
    them: "No",
    us: "Decision log + calibration + personal truth model",
  },
  {
    job: "Private notes in every AI call",
    them: "No",
    us: "Yes",
  },
  {
    job: "Cost for you + friends in mixed leagues",
    them: "Often per person / premium seats",
    us: "One brain; league-mates stay on free hosts",
  },
  {
    job: "Model/persona control",
    them: "Fixed product logic",
    us: "OpenRouter models, personas, risk, house rules",
  },
  {
    job: "Offline / local-first",
    them: "Cloud product",
    us: "Local SwiftData + offline draft packs",
  },
];

const punchlines = [
  {
    title: "They end at “good luck this season.”",
    body: "We start there — lineups, FAAB, trades, news, weather, playoffs.",
  },
  {
    title: "Don’t buy four seats.",
    body: "Beat people who only open the host app on Sunday.",
  },
  {
    title: "Dual-signal edge.",
    body: "Market (FP) + reasoning (OpenRouter) + your private state.",
  },
];

export default function Comparison() {
  const [mode, setMode] = useState<"draft" | "season">("season");

  return (
    <section
      id="why-better"
      className="relative py-20 sm:py-28 border-t border-[var(--border)]"
      aria-labelledby="why-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(34,197,94,0.08),transparent_60%)]" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl mb-10 sm:mb-12">
          <p className="section-label mb-3">
            <span className="h-1 w-1 rounded-full bg-[var(--accent)]" aria-hidden />
            Why better than Draft Wizard / FantasyPros
          </p>
          <h2 id="why-heading" className="section-title">
            Excellent draft products.{" "}
            <span className="text-[var(--accent-bright)]">Different job.</span>
          </h2>
          <p className="section-sub mt-4">
            Draft Wizard and FantasyPros are excellent draft products. SnapFantasy is
            a different job — the private AI GM that owns the rest of your season
            across every league.
          </p>
        </div>

        {/* Animated comparison toggle */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-center gap-4">
          <p className="text-sm font-medium text-[var(--text-muted)]">
            Frame the job:
          </p>
          <div
            className="inline-flex rounded-xl border border-[var(--border-strong)] bg-[var(--bg-elevated)] p-1"
            role="tablist"
            aria-label="Draft week vs full season"
          >
            <button
              type="button"
              role="tab"
              aria-selected={mode === "draft"}
              onClick={() => setMode("draft")}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all ${
                mode === "draft"
                  ? "bg-[var(--bg-card)] text-[var(--text)] shadow-sm border border-[var(--border)]"
                  : "text-[var(--text-dim)] hover:text-[var(--text-muted)]"
              }`}
            >
              Draft week
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={mode === "season"}
              onClick={() => setMode("season")}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all ${
                mode === "season"
                  ? "bg-[var(--accent)] text-[#04120a] shadow-[0_0_20px_var(--accent-glow)]"
                  : "text-[var(--text-dim)] hover:text-[var(--text-muted)]"
              }`}
            >
              Full season OS
            </button>
          </div>
        </div>

        {/* Toggle content */}
        <div
          className="card mb-10 p-5 sm:p-6 overflow-hidden"
          role="tabpanel"
          aria-live="polite"
        >
          {mode === "draft" ? (
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)] mb-2">
                  FantasyPros / Draft Wizard
                </p>
                <h3 className="text-lg font-semibold text-[var(--text)] mb-2">
                  Built to win draft week
                </h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  Polished host auto-crossoff under a 30s clock. Huge ECR ecosystem.
                  Years of UX. If your only job is ranking and drafting, they are
                  world-class.
                </p>
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)] mb-2">
                  SnapFantasy on draft night
                </p>
                <ul className="space-y-2 text-sm text-[var(--text-muted)]">
                  <li>· Snap Score dual-signal queue</li>
                  <li>· Multi-league simultaneous drafts</li>
                  <li>· Offline pack when the bar Wi‑Fi dies</li>
                  <li>· Then — the season OS kicks in</li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)] mb-2">
                  The gap they don’t close
                </p>
                <h3 className="text-lg font-semibold text-[var(--text)] mb-2">
                  They optimize draft week for millions
                </h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  SnapFantasy optimizes <em>your</em> entire season across every league —
                  and keeps getting sharper from graded decisions. Portfolio risk,
                  private notes, FAAB politics, prove-it trade cards.
                </p>
              </div>
              <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent-dim)] p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-bright)] mb-2">
                  Full-season timeline
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Draft", "Weekly", "Deadline", "Playoffs", "Calibration"].map(
                    (s) => (
                      <span
                        key={s}
                        className="rounded-full border border-[var(--accent)]/25 bg-[var(--bg-card)]/60 px-3 py-1 text-xs font-medium text-[var(--text)]"
                      >
                        {s}
                      </span>
                    )
                  )}
                </div>
                <p className="mt-3 text-sm text-[var(--text-muted)]">
                  One private app. Every league. Every week.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Side-by-side season timeline */}
        <div className="mb-10">
          <MockTimeline />
        </div>

        {/* Comparison table */}
        <div className="card overflow-x-auto mb-10">
          <table className="comp-table min-w-[640px]">
            <caption className="sr-only">
              Comparison of FantasyPros / Draft Wizard versus SnapFantasy by job
            </caption>
            <thead>
              <tr>
                <th scope="col">Job</th>
                <th scope="col">FantasyPros / Draft Wizard</th>
                <th scope="col">SnapFantasy</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.job}>
                  <td>{r.job}</td>
                  <td className="text-[var(--text-muted)]">{r.them}</td>
                  <td>{r.us}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Respect gap + punchlines */}
        <div className="grid gap-4 lg:grid-cols-2 mb-10">
          <div className="card p-5 sm:p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-dim)] mb-2">
              The Draft Wizard gap we respect
            </h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              Polished host auto-crossoff under a 30s clock. Huge ECR ecosystem. Years
              of UX. We don&apos;t trash that — we stand on a different field.
            </p>
          </div>
          <div className="card p-5 sm:p-6 border-[var(--accent)]/20">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--accent)] mb-2">
              The gap they don&apos;t close
            </h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              They optimize draft week for millions. SnapFantasy optimizes YOUR entire
              season across every league — and keeps getting sharper from graded
              decisions.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {punchlines.map((p, i) => (
            <div
              key={p.title}
              className="card p-5 relative overflow-hidden"
            >
              <span
                className="absolute top-3 right-4 font-mono text-4xl font-bold text-[var(--accent)]/15 select-none"
                aria-hidden
              >
                0{i + 1}
              </span>
              <h3 className="text-base font-semibold text-[var(--text)] pr-8 leading-snug">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
