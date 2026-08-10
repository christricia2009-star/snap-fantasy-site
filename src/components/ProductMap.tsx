import MockExposure from "./mocks/MockExposure";
import MockScript from "./mocks/MockScript";
import MockSnapScore from "./mocks/MockSnapScore";
import MockSundayGM from "./mocks/MockSundayGM";
import MockMarketIntel from "./mocks/MockMarketIntel";

const pillars = [
  {
    id: "draft",
    icon: "⚡",
    gen: "Gen1–3",
    title: "Live draft room · Draft 3.0",
    blurb:
      "Simultaneous multi-league drafts. Urgency tiers, heat runs, next-3 plan, steals.",
    points: [
      "Start / Continue Draft per league — multi-league at once",
      "Snap Score queue: market/FP + needs + AI dual-signal",
      "Sleeper sync · offline pack 2.0 · watch top-3 complications",
      "Reach/steal radar · Zero/Hero/Robust · SF/TEP curves · auction snipe",
      "Poison-the-well · handcuff auto-queue · post-draft multi-source grade",
      "Buddy copilot notes · draft transcript AI · snake path simulator",
    ],
  },
  {
    id: "sunday",
    icon: "🎯",
    gen: "Gen3",
    title: "Sunday GM command",
    blurb: "The morning OS. One place for every league before kickoff.",
    points: [
      "Sunday GM brief — multi-league priorities + narrative",
      "Lock chain timeline across every slate",
      "Inactive apocalypse planner when starters go out",
      "Portfolio Sunday one-tap optimize by importance",
      "FAAB war room across leagues · budget-aware week plan",
      "Widgets · Live Activity lock · Siri shortcuts on game day",
    ],
  },
  {
    id: "gm",
    icon: "🧠",
    gen: "Gen1–3",
    title: "Season domination AI",
    blurb: "Where draft-only apps stop — and where you win weeks.",
    points: [
      "Two-stage Optimize Lineup (cheap digest → smart decision)",
      "Ceiling / floor / must-win modes · flex optimizer · confidence bands",
      "FAAB sim 2.0 · waiver heat · drop candidates · add priority queue",
      "Trade desk multi-offer · sell-high/buy-low · prove-it deep mode",
      "Weather fade auto · injury trees · opponent projected lineup",
      "Championship pack · live score pivot · playoff path planner",
    ],
  },
  {
    id: "portfolio",
    icon: "📊",
    gen: "Gen2–3",
    title: "Portfolio heat (unique)",
    blurb: "Treat 3–10 leagues like a book — not siloed host apps.",
    points: [
      "Exposure heat map · anti-correlate engine 2.0",
      "Money-league attention weights · week priority stack",
      "Cross-league FAAB allocation · shared stash 2.0",
      "Conflict ownership · do-not-stack rules · injury correlation budget",
      "Championship clash detector · bankroll allocation advice",
      "Silent partner / co-manager SMS brief · friend circle portfolio",
    ],
  },
  {
    id: "market",
    icon: "📈",
    gen: "Gen3",
    title: "Market intel board",
    blurb: "FantasyPros as fuel — never the whole product.",
    points: [
      "Nightly consensus delta · ECR velocity · expert split heatmap",
      "ADP vs ECR arbitrage · positional scarcity · waiver market heat",
      "Playoff-week rank flip · SOS-adjusted ROS · Vegas totals",
      "Snap share cliffs · rookie trajectory · veteran cliff detector",
      "Always: “FP says X · Snap says Y because…”",
      "Works offline without FP — optional API for ECR/ADP overlay",
    ],
  },
  {
    id: "agents",
    icon: "🤖",
    gen: "Gen2–3",
    title: "OpenRouter agent stack",
    blurb: "Scout / Risk / GM / Capologist — debate, then act under spend caps.",
    points: [
      "4-agent multi-model debate · constitution + house rules injected",
      "Weekly script · post-week autopsy · season thesis · voice debrief",
      "Trade politics · commissioner court · rival psychology dossier",
      "Memory-augmented chat · NL multi-league ops · tool-using agents",
      "Hallucination audit trail · explainability share cards",
      "Counterfactual week sim · A/B outcome learning · FP-do vs I-should",
    ],
  },
  {
    id: "import",
    icon: "🔗",
    gen: "Gen2–3",
    title: "Host import · any room",
    blurb: "You stay on free hosts. Snap is the brain next to them.",
    points: [
      "Sleeper sync + enhanced poller · Yahoo OAuth full roster",
      "Paste invite / URL / HTML / email → AI structures league",
      "Gmail fantasy scan (opt-in) · CSV · screenshot OCR path",
      "ESPN / CBS / NFL.com / Fleaflicker paste adapters",
      "Settings hash watchdog · host change detector · bulk re-sync",
      "League clone for mocks · unified import wizard",
    ],
  },
  {
    id: "learning",
    icon: "📐",
    gen: "Gen1–3",
    title: "Learning loop",
    blurb: "It gets sharper from YOUR graded decisions — not generic tips.",
    points: [
      "Decision log · accuracy charts · Brier score · calibration 2.0",
      "Personal truth model · never-again list · miss/hit taxonomy",
      "Hybrid M/AI/P weight auto-tune · ECR vs AI trust personal",
      "Edge journal · monthly learning digest · mistake replay",
      "Position bias detector · overconfidence shrinker",
      "Hall of fame decisions · personal ADP vs market",
    ],
  },
  {
    id: "formats",
    icon: "🏆",
    gen: "Gen1–3",
    title: "Formats & platform",
    blurb: "Best ball, DFS, dynasty, IDP, 2QB — plus Apple-native surface.",
    points: [
      "Best ball optimize · DFS multi-entry correlation stacks",
      "Dynasty startup + rookie · IDP lite · 2QB deep curve",
      "Custom scoring solver per league",
      "Home widgets S/M/L · Watch complications · iPad split board",
      "Biometric vault · quiet hours · Focus filter game day",
      "Season package export · coverage map of all 300",
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
            What it does · 300 enhancements
          </p>
          <h2 id="product-heading" className="section-title">
            Full-season OS. Not another draft-week tab.
          </h2>
          <p className="section-sub mt-4">
            Gen1 win stack. Gen2 import + portfolio. Gen3 market intel, Sunday GM,
            Draft 3.0, season domination, and a learning loop that actually
            recalibrates. Serious multi-league managers stop juggling five apps.
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
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-[var(--accent)] mb-0.5">
                    {p.gen}
                  </div>
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

        <div className="mt-12 sm:mt-16">
          <p className="section-label mb-6">
            <span className="h-1 w-1 rounded-full bg-[var(--accent)]" aria-hidden />
            Inside the app
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <MockSnapScore />
            <MockSundayGM />
            <MockMarketIntel />
            <MockExposure />
            <MockScript />
            <div className="card p-5 flex flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)] mb-2">
                Coverage map
              </p>
              <p className="text-2xl font-bold text-[var(--text)] tracking-tight">
                50 + 50 + 200 ={" "}
                <span className="text-[var(--accent-bright)]">300</span>
              </p>
              <p className="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
                Gen1 win stack · Gen2 portfolio & import · Gen3 market, agents,
                Draft 3.0, season domination, learning 2.0, formats, UX.
              </p>
              <a
                href="#features"
                className="mt-4 text-sm font-semibold text-[var(--accent-bright)] hover:underline"
              >
                Browse the full capability map →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
