import MockDashboard from "./mocks/MockDashboard";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-glow" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-card)]/80 px-3 py-1.5 text-xs text-[var(--text-muted)] mb-6">
              <span className="pulse-dot" />
              Private beta · NFL-first · You + friends
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
              Draft tools end when the clock dies. SnapFantasy is a private fantasy
              sports OS — live draft, weekly optimize, FAAB, trades, and multi-league
              portfolio risk — sitting next to Sleeper, Yahoo, and ESPN. Not a host.
              Not App Store mass market.{" "}
              <strong className="font-semibold text-[var(--text)]">
                Your brain for every league.
              </strong>
            </p>

            <div className="animate-fade-up delay-3 mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="btn-primary">
                Get SnapFantasy
                <ArrowIcon />
              </a>
              <a href="#why-better" className="btn-secondary">
                See why we beat Draft Wizard
              </a>
            </div>

            <p className="animate-fade-up delay-4 mt-6 text-sm text-[var(--text-dim)] leading-relaxed max-w-lg">
              Private · Local-first · OpenRouter + optional FantasyPros · Built for
              you + friends, not the App Store crowd
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
