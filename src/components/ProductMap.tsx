import MockExposure from "./mocks/MockExposure";
import MockScript from "./mocks/MockScript";
import MockSnapScore from "./mocks/MockSnapScore";

const pillars = [
  {
    id: "draft",
    icon: "⚡",
    title: "Live draft room",
    blurb:
      "Simultaneous multi-league drafts. Your slot, your clock, dual-signal queue.",
    points: [
      "Start / Continue Draft per league — run multiple drafts at once",
      "Team count + slot → snake or linear turn clock",
      "Log others’ picks or Sleeper auto-sync",
      "Best-available queue with Snap Score (market/FP + needs + AI)",
      "Reach/steal radar · Zero / Hero / Robust RB · keepers · auction ceilings",
      "Voice draft questions · offline draft pack · post-draft grade vs ADP/FP",
    ],
  },
  {
    id: "gm",
    icon: "🧠",
    title: "Season-long AI GM",
    blurb: "The wedge. One-tap decisions from lock-in through championship week.",
    points: [
      "One-tap Optimize Lineup — cheap model digests, smart model decides",
      "Start/Sit with confidence, floor/ceiling, plain English",
      "Waiver + FAAB engine · trade analyzer + package generator + negotiation agent",
      "Injury/news impact · weather fades · matchup smash/tough flags",
      "Bye planner · schedule preview · playoff odds",
      "Free-form AI chat + voice · decision log · accuracy charts · calibration",
    ],
  },
  {
    id: "portfolio",
    icon: "📊",
    title: "Multi-league portfolio",
    blurb: "Unique. Treat every league like a book — not six siloed apps.",
    points: [
      "Cross-league exposure map (“Bijan in 3 money leagues”)",
      "Anti-correlate strategy across leagues",
      "League importance weights (fun vs money vs must-win)",
      "Sunday batch optimize ALL leagues",
      "Silent partner digest for a co-manager",
      "Shared stash / FAAB coordination with friends",
    ],
  },
  {
    id: "import",
    icon: "🔗",
    title: "Host import",
    blurb: "Bring leagues in. Stay on the free hosts. Snap is the brain.",
    points: [
      "Sleeper sync",
      "Yahoo OAuth import (official API path)",
      "Paste invite email / league URL / HTML → AI structures the league",
      "Optional Gmail fantasy mail scan (opt-in)",
      "Settings-diff detection when rules change",
    ],
  },
  {
    id: "agents",
    icon: "🎯",
    title: "OpenRouter-native agents",
    blurb: "Scout, Risk Officer, GM — debate, then act under your spend cap.",
    points: [
      "Multi-agent debate before big calls",
      "Weekly script of the week · post-week autopsy · season thesis",
      "Prove-it citations: market + roster math + counterfactual",
      "Tool-using Sunday plan with spend cap",
      "House rules + league constitution injected into every rec",
    ],
  },
  {
    id: "fp",
    icon: "📈",
    title: "FantasyPros as fuel",
    blurb: "Optional market overlay — never the whole product.",
    points: [
      "Optional FP API key for ECR/ADP overlay",
      "Without FP: strong projection board still works offline",
      "Always: “FP/market says X · Snap says Y because…”",
    ],
  },
];

export default function ProductMap() {
  return (
    <section
      id="product"
      className="relative py-20 sm:py-28 border-t border-[var(--border)]"
      aria-labelledby="product-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <p className="section-label mb-3">
            <span className="h-1 w-1 rounded-full bg-[var(--accent)]" aria-hidden />
            What it does
          </p>
          <h2 id="product-heading" className="section-title">
            A full-season OS — not another draft-week tab.
          </h2>
          <p className="section-sub mt-4">
            Serious multi-league managers already juggle FantasyPros, Draft Wizard,
            notes, and group chats. SnapFantasy collapses that into one private brain
            next to your hosts.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <article key={p.id} className="card p-5 sm:p-6 flex flex-col">
              <div className="flex items-start gap-3 mb-3">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-dim)] text-lg"
                  aria-hidden
                >
                  {p.icon}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-[var(--text)] tracking-tight">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] mt-1 leading-snug">
                    {p.blurb}
                  </p>
                </div>
              </div>
              <ul className="mt-auto space-y-2 pt-3 border-t border-[var(--border)]">
                {p.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2 text-sm text-[var(--text-muted)] leading-snug"
                  >
                    <span
                      className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]"
                      aria-hidden
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Interactive-looking mocks row */}
        <div className="mt-12 sm:mt-16">
          <p className="section-label mb-6">
            <span className="h-1 w-1 rounded-full bg-[var(--accent)]" aria-hidden />
            Inside the app
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <MockSnapScore />
            <MockExposure />
            <MockScript />
          </div>
        </div>
      </div>
    </section>
  );
}
