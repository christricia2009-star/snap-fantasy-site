import MockDashboard from "./mocks/MockDashboard";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-glow" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-card)]/80 px-3 py-1.5 text-xs text-[var(--text-muted)] mb-6">
              <span className="pulse-dot" />
              300 enhancements · NFL-first · Private beta
            </div>

            <h1
              id="hero-heading"
              className="animate-fade-up delay-1 text-[clamp(2.25rem,5.5vw,3.75rem)] font-bold tracking-tight leading-[1.08] text-[var(--text)]"
            >
              The AI GM that{" "}
              <span className="text-[var(--accent-bright)]">doesn&apos;t stop</span>{" "}
              after the draft.
            </h1>

            <p className="animate-fade-up delay-2 mt-5 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">
              Draft Wizard and FantasyPros crush draft week. Then they hand you rankings
              and wish you luck.{" "}
              <strong className="font-semibold text-[var(--text)]">
                SnapFantasy is the private full-season OS
              </strong>{" "}
              — live draft, Sunday GM, market intel, portfolio heat, FAAB war rooms,
              trades, and a learning loop that grades your misses. Built for you +
              friends next to Sleeper/Yahoo/ESPN. Not a host. Not per-seat SaaS.
            </p>

            <div className="animate-fade-up delay-3 mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="btn-primary">
                Get SnapFantasy
                <ArrowIcon />
              </a>
              <a href="#why-better" className="btn-secondary">
                Why we beat Draft Wizard
              </a>
            </div>

            <p className="animate-fade-up delay-4 mt-6 text-sm text-[var(--text-dim)] leading-relaxed max-w-lg">
              Private · Local-first · OpenRouter + optional FantasyPros · 50 + 50 + 200
              = 300 capabilities · Built for multi-league managers, not the App Store
              crowd
            </p>

            <p className="mt-4 text-sm font-medium text-[var(--text-muted)]">
              Draft like a pro. Manage like a full-time front office.
            </p>
          </div>

          <div className="animate-fade-up delay-2 relative">
            <div
              className="absolute -inset-4 rounded-3xl bg-[var(--accent)]/10 blur-2xl"
              aria-hidden
            />
            <MockDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
