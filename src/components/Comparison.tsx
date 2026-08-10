"use client";

import { useState } from "react";
import MockTimeline from "./mocks/MockTimeline";

const rows = [
  {
    job: "Expert consensus rankings",
    them: "Best-in-class",
    us: "Optional FP overlay + market intel board (ECR velocity, arbitrage, scarcity)",
  },
  {
    job: "Live draft under a 30s clock",
    them: "Polished host auto-crossoff (paid tiers)",
    us: "Snap Score dual-signal · Draft 3.0 urgency tiers · heat runs · next-3 plan · offline pack",
  },
  {
    job: "Mock drafts",
    them: "Excellent",
    us: "Built-in mocks + multi-source grades + league clone for mocks",
  },
  {
    job: "After the draft",
    them: "Rankings / content add-ons",
    us: "Full GM OS: Sunday command, lineups, FAAB war room, trades, news, weather, playoffs",
  },
  {
    job: "Sunday across 5+ leagues",
    them: "Open N tabs, pray",
    us: "Sunday GM brief · lock chain · portfolio one-tap · week priority stack",
  },
  {
    job: "Multi-league portfolio risk",
    them: "Weak / none",
    us: "Core: exposure heat, anti-correlate, money weights, championship clash",
  },
  {
    job: "Market vs your book",
    them: "Market for everyone",
    us: "“FP says X · Snap says Y” on every call + personal truth model",
  },
  {
    job: "Learns YOUR misses",
    them: "No",
    us: "Decision log · calibration · never-again · edge journal · hybrid weight auto-tune",
  },
  {
    job: "Agent reasoning",
    them: "Fixed product logic",
    us: "OpenRouter 4-agent Scout/Risk/GM/Cap · personas · spend caps · house rules",
  },
  {
    job: "Private notes in every AI call",
    them: "No",
    us: "Yes — local memory is the moat",
  },
  {
    job: "Host coverage",
    them: "Their app or paid sync tiers",
    us: "Sleeper · Yahoo OAuth · paste any host · ESPN/CBS/NFL.com adapters · Gmail opt-in",
  },
  {
    job: "Formats beyond redraft",
    them: "Varies / extra products",
    us: "Best ball · DFS stacks · dynasty · IDP · 2QB · custom scoring in one brain",
  },
  {
    job: "Cost for you + friends",
    them: "Often per person / premium seats",
    us: "One brain; league-mates stay free on hosts. You pay tokens + optional FP",
  },
  {
    job: "Offline / local-first",
    them: "Cloud product",
    us: "Local SwiftData · Keychain · offline draft · cached recs · biometric vault",
  },
  {
    job: "Generic ChatGPT for fantasy",
    them: "No roster state · hallucinates freely",
    us: "Leagues, scores, house rules, decision history injected — audit trail on claims",
  },
];

const punchlines = [
  {
    title: "They end at “good luck this season.”",
    body: "We start there — Sunday GM, FAAB war rooms, trade desk, playoff packs, and graded learning.",
  },
  {
    title: "Don’t buy four seats.",
    body: "Beat managers who only open the host app on Sunday. Your friends stay free.",
  },
  {
    title: "Market + judgment + your state.",
    body: "FP prior · OpenRouter posterior · local multi-league memory. Dual-signal edge they can’t ship.",
  },
  {
    title: "300 reasons draft week isn’t enough.",
    body: "Gen1 win stack, Gen2 portfolio/import, Gen3 market intel + season domination. Coverage map included.",
  },
];

const gaps = [
  {
    title: "What Draft Wizard / FantasyPros still own",
    body: "Polished host auto-crossoff under a brutal 30s clock. Massive ECR ecosystem. Years of draft UX. If your only job is ranking and drafting, they remain world-class — we respect that.",
  },
  {
    title: "The gap they don’t close",
    body: "They optimize draft week for millions. SnapFantasy optimizes YOUR entire season across every league — lock chains, portfolio heat, multi-agent debate, and a learning loop that recalibrates when you’re wrong.",
  },
  {
    title: "The gap host apps don’t close",
    body: "Sleeper/Yahoo/ESPN are excellent rooms. They’re not a personal AI GM, not a multi-league risk book, and not a private decision OS with your notes in every call.",
  },
  {
    title: "The gap ChatGPT doesn’t close",
    body: "Generic chat has no live rosters, no FAAB budgets, no house rules, no graded history. SnapFantasy is tool-using, local-state, hallucination-guarded fantasy ops.",
  },
];

export default function Comparison() {
  const [mode, setMode] = useState<"draft" | "season" | "portfolio">("season");

  return (
    <section
      id="why-better"
      className="relative py-20 sm:py-28 border-t border-[var(--border)]"
      aria-labelledby="why-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(34,197,94,0.08),transparent_60%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl mb-10 sm:mb-12">
          <p className="section-label mb-3">
            <span className="h-1 w-1 rounded-full bg-[var(--accent)]" aria-hidden />
            Why better than Draft Wizard / FantasyPros / host apps
          </p>
          <h2 id="why-heading" className="section-title">
            Excellent draft products.{" "}
            <span className="text-[var(--accent-bright)]">Wrong job for the season.</span>
          </h2>
          <p className="section-sub mt-4">
            Draft Wizard and FantasyPros are excellent draft products. Host apps are
            excellent rooms. SnapFantasy is a different job: private multi-league AI GM
            that owns draft night <em>and</em> every Sunday after — with 300 enhancements
            aimed at edge, not content churn.
          </p>
        </div>

        {/* Mode toggle */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-center gap-4">
          <p className="text-sm font-medium text-[var(--text-muted)]">Frame the job:</p>
          <div
            className="inline-flex flex-wrap rounded-xl border border-[var(--border-strong)] bg-[var(--bg-elevated)] p-1"
            role="tablist"
            aria-label="Comparison frames"
          >
            {(
              [
                { id: "draft" as const, label: "Draft week" },
                { id: "season" as const, label: "Full season OS" },
                { id: "portfolio" as const, label: "Multi-league book" },
              ] as const
            ).map((t) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={mode === t.id}
                onClick={() => setMode(t.id)}
                className={`rounded-lg px-3.5 py-2 text-sm font-semibold transition-all ${
                  mode === t.id
                    ? t.id === "draft"
                      ? "bg-[var(--bg-card)] text-[var(--text)] shadow-sm border border-[var(--border)]"
                      : "bg-[var(--accent)] text-[#04120a] shadow-[0_0_20px_var(--accent-glow)]"
                    : "text-[var(--text-dim)] hover:text-[var(--text-muted)]"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="card mb-10 p-5 sm:p-6 overflow-hidden" role="tabpanel" aria-live="polite">
          {mode === "draft" && (
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)] mb-2">
                  FantasyPros / Draft Wizard
                </p>
                <h3 className="text-lg font-semibold text-[var(--text)] mb-2">
                  Built to win draft week
                </h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  Polished host auto-crossoff. Huge ECR. Years of UX. World-class if the
                  job ends when you draft.
                </p>
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)] mb-2">
                  SnapFantasy Draft 3.0
                </p>
                <ul className="space-y-2 text-sm text-[var(--text-muted)]">
                  <li>· Dual-signal Snap Score (market + needs + AI)</li>
                  <li>· Multi-league rooms · urgency tiers · next-3 plan</li>
                  <li>· Offline pack · heat runs · steal list · SF/TEP curves</li>
                  <li>· Then the season OS kicks in — they hand you “good luck”</li>
                </ul>
              </div>
            </div>
          )}
          {mode === "season" && (
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)] mb-2">
                  The season gap
                </p>
                <h3 className="text-lg font-semibold text-[var(--text)] mb-2">
                  They optimize draft week for millions
                </h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  SnapFantasy optimizes <em>your</em> week across every league — Sunday
                  GM, FAAB war room, trade desk, weather fades, championship packs, and
                  a graded learning loop.
                </p>
              </div>
              <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent-dim)] p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-bright)] mb-2">
                  Full-season surface
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Draft",
                    "Market intel",
                    "Sunday GM",
                    "FAAB war room",
                    "Trade desk",
                    "Playoffs",
                    "Calibration",
                  ].map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-[var(--accent)]/25 bg-[var(--bg-card)]/60 px-3 py-1 text-xs font-medium text-[var(--text)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-sm text-[var(--text-muted)]">
                  One private app. Every league. Every week.
                </p>
              </div>
            </div>
          )}
          {mode === "portfolio" && (
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)] mb-2">
                  Multi-league managers
                </p>
                <h3 className="text-lg font-semibold text-[var(--text)] mb-2">
                  Host apps don’t see your book
                </h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  Bijan in three money leagues is invisible to Sleeper and Yahoo. Draft
                  tools don’t anti-correlate your cash games. SnapFantasy treats the
                  whole portfolio as the unit of risk.
                </p>
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)] mb-2">
                  Portfolio heat stack
                </p>
                <ul className="space-y-2 text-sm text-[var(--text-muted)]">
                  <li>· Exposure heat · anti-correlate · do-not-stack rules</li>
                  <li>· Money-league weights · week priority · lock chain</li>
                  <li>· Cross-league FAAB · championship clash detector</li>
                  <li>· Bankroll advice · friend circle coordination</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        <div className="mb-10">
          <MockTimeline />
        </div>

        {/* Comparison table */}
        <div className="card overflow-x-auto mb-10">
          <table className="comp-table min-w-[720px]">
            <caption className="sr-only">
              Comparison of FantasyPros / Draft Wizard / host apps versus SnapFantasy
            </caption>
            <thead>
              <tr>
                <th scope="col">Job</th>
                <th scope="col">Draft Wizard / FP / Hosts</th>
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

        <div className="grid gap-4 sm:grid-cols-2 mb-10">
          {gaps.map((g) => (
            <div key={g.title} className="card p-5 sm:p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--accent)] mb-2">
                {g.title}
              </h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">{g.body}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {punchlines.map((p, i) => (
            <div key={p.title} className="card p-5 relative overflow-hidden">
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
