import MockExposure from "./mocks/MockExposure";
import MockScript from "./mocks/MockScript";
import MockSnapScore from "./mocks/MockSnapScore";
import MockSundayGM from "./mocks/MockSundayGM";
import MockMarketIntel from "./mocks/MockMarketIntel";

/** Feature categories — no gen labels; each card is a category with items inside. */
const categories = [
  {
    id: "draft",
    icon: "⚡",
    title: "Live draft",
    blurb: "Draft Wizard is a co-pilot for one room. We run the whole airport.",
    items: [
      "Simultaneous multi-league draft rooms",
      "Snap Score: market + needs + AI",
      "Urgency tiers · heat runs · next-3 plan",
      "Reach / steal radar · Zero / Hero / Robust",
      "Sleeper sync · offline pack · auction snipe",
      "SF / TE premium curves · handcuff queue",
      "Buddy copilot · post-draft multi-source grade",
    ],
  },
  {
    id: "sunday",
    icon: "🎯",
    title: "Sunday command",
    blurb: "FantasyPros doesn’t juggle five lock times. We do — before coffee.",
    items: [
      "Multi-league Sunday GM brief",
      "Lock chain across every slate",
      "Inactive apocalypse planner",
      "One-tap optimize by league importance",
      "FAAB war room · budget-aware week plan",
      "Widgets · Live Activity · Siri on game day",
    ],
  },
  {
    id: "lineups",
    icon: "🧠",
    title: "Lineups & start/sit",
    blurb: "Where “good luck this season” tools leave you on read.",
    items: [
      "Two-stage Optimize Lineup pipeline",
      "Start/Sit with confidence bands",
      "Ceiling / floor / must-win modes",
      "Flex optimizer · contingency starters",
      "Weather fades · injury replacement trees",
      "Opponent projected lineup",
    ],
  },
  {
    id: "waivers",
    icon: "💰",
    title: "Waivers & FAAB",
    blurb: "Market heat + your budget across the book.",
    items: [
      "FAAB sim · waiver market heat",
      "Drop candidates ranked",
      "Add priority queue",
      "Rest-of-week waiver plan",
      "Cross-league FAAB allocation",
      "Streamer calendar (DEF/K)",
    ],
  },
  {
    id: "trades",
    icon: "🔄",
    title: "Trades & politics",
    blurb: "Packages, prove-it cards, rival dossiers.",
    items: [
      "Trade analyzer + package generator",
      "Trade desk multi-offer",
      "Sell-high / buy-low board",
      "Prove-it deep mode",
      "Politics map · commissioner court",
      "Rival psychology dossier",
    ],
  },
  {
    id: "portfolio",
    icon: "📊",
    title: "Multi-league portfolio",
    blurb: "Host apps are blind to Bijan in three money leagues. We’re not.",
    items: [
      "Exposure heat map",
      "Anti-correlate across leagues",
      "Money-league attention weights",
      "Week priority stack · lock timeline",
      "Shared stash · friend circle",
      "Championship clash detector",
    ],
  },
  {
    id: "market",
    icon: "📈",
    title: "Market intel",
    blurb: "FantasyPros is fuel. We are the engine. Big difference.",
    items: [
      "Consensus deltas · ECR velocity",
      "ADP vs ECR arbitrage",
      "Expert split heatmap · scarcity index",
      "Playoff rank flip · SOS-adjusted ROS",
      "Vegas totals · snap share cliffs",
      "Always: FP says X · Snap says Y",
    ],
  },
  {
    id: "agents",
    icon: "🤖",
    title: "AI agents",
    blurb: "Scout / Risk / GM / Cap — debate under spend caps.",
    items: [
      "4-agent multi-model debate",
      "Weekly script · post-week autopsy",
      "Season thesis · voice debrief",
      "Memory chat · house rules injected",
      "Hallucination audit trail",
      "Counterfactual week sim",
    ],
  },
  {
    id: "import",
    icon: "🔗",
    title: "Host import",
    blurb: "Keep Sleeper/Yahoo free. Snap is the brain.",
    items: [
      "Sleeper sync · Yahoo OAuth",
      "Paste invite / URL / HTML / email",
      "Gmail fantasy scan (opt-in)",
      "ESPN / CBS / NFL.com / Fleaflicker paste",
      "CSV · OCR path · bulk re-sync",
      "Settings drift watchdog",
    ],
  },
  {
    id: "learning",
    icon: "📐",
    title: "Learning & accuracy",
    blurb: "Draft tools don’t grade your bad flex.",
    items: [
      "Decision log · accuracy charts",
      "Confidence calibration",
      "Personal truth model",
      "Never-again list · edge journal",
      "Hybrid weight auto-tune",
      "Mistake replay · monthly digest",
    ],
  },
  {
    id: "playoffs",
    icon: "🏆",
    title: "Playoffs & formats",
    blurb: "Championship mode. Best ball. Dynasty. DFS.",
    items: [
      "Championship week pack",
      "Playoff path planner",
      "Best ball optimize · DFS stacks",
      "Dynasty startup + rookie",
      "IDP lite · 2QB curves",
      "Custom scoring per league",
    ],
  },
  {
    id: "platform",
    icon: "📱",
    title: "Platform & privacy",
    blurb: "Local-first. Keychain. Apple-native surface.",
    items: [
      "Local SwiftData · offline draft",
      "Keychain API keys · biometric lock",
      "Home widgets · Watch · Live Activity",
      "Quiet hours · Focus game day",
      "Share cards · season export",
      "No selling your league graph",
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
            The arsenal
          </p>
          <h2 id="product-heading" className="section-title">
            Everything they ghost after “good luck.”
          </h2>
          <p className="section-sub mt-4">
            Rankings apps clock out. Host apps keep score. SnapFantasy is the full
            category stack that decides real seasons — draft through autopsy. Open a
            card. Feel the weight class shift.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <article key={c.id} className="card p-5 sm:p-6 flex flex-col">
              <div className="flex items-start gap-3 mb-3">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-dim)] text-lg"
                  aria-hidden
                >
                  {c.icon}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-[var(--text)] tracking-tight">
                    {c.title}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] mt-1 leading-snug">
                    {c.blurb}
                  </p>
                </div>
              </div>
              <ul className="mt-auto space-y-2 pt-3 border-t border-[var(--border)]">
                {c.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm text-[var(--text-muted)] leading-snug"
                  >
                    <span
                      className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]"
                      aria-hidden
                    />
                    {item}
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
            <div className="card p-5 flex flex-col justify-center border-2 border-[var(--accent)]/40 bg-[var(--accent-dim)]/50">
              <p className="text-xs font-black uppercase tracking-wider text-[var(--accent-bright)] mb-2">
                The only take that matters
              </p>
              <p className="text-xl font-black text-[var(--text)] tracking-tight leading-snug">
                They’re draft week.{" "}
                <span className="text-[var(--accent-bright)]">We&apos;re the season.</span>
              </p>
              <p className="mt-2 text-sm text-[var(--text-muted)] leading-relaxed font-medium">
                Rankings apps don&apos;t run lock chains, FAAB war rooms, or portfolio
                heat. Host apps don&apos;t learn when your flex was trash. We do — every
                week, every league, no apology.
              </p>
              <a
                href="#why-better"
                className="mt-4 text-sm font-black text-[var(--accent-bright)] hover:underline"
              >
                Watch us dunk head-to-head →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
