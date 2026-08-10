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
        {/* Swagger strip */}
        <div className="animate-fade-up mb-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-2xl border border-[var(--accent)]/25 bg-[var(--accent-dim)] px-4 py-3 text-center sm:justify-start sm:text-left">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent-bright)]">
            <span className="pulse-dot" />
            Best in class · period
          </span>
          <span className="hidden sm:inline text-[var(--text-dim)]">·</span>
          <p className="text-sm text-[var(--text)] font-medium">
            Draft Wizard & FantasyPros? Great for{" "}
            <span className="text-[var(--text-muted)] line-through decoration-[var(--text-dim)]">
              draft week
            </span>
            . We own the whole damn season.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="animate-fade-up delay-1 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-card)]/80 px-3 py-1.5 text-xs text-[var(--text-muted)] mb-6">
              Private · Multi-league · NFL-first
            </div>

            <h1
              id="hero-heading"
              className="animate-fade-up delay-1 text-[clamp(2.35rem,5.8vw,3.9rem)] font-bold tracking-tight leading-[1.05] text-[var(--text)]"
            >
              The best fantasy AI.{" "}
              <span className="text-[var(--accent-bright)]">Not even close.</span>
            </h1>

            <p className="animate-fade-up delay-2 mt-5 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">
              Who is Draft Wizard when the season starts? Who is FantasyPros on a
              Sunday with five leagues locking?{" "}
              <strong className="font-semibold text-[var(--text)]">
                SnapFantasy is the private GM that still works after the draft —
              </strong>{" "}
              live rooms, Snap Score, FAAB war rooms, trades, portfolio heat, and a
              brain that learns your misses. They sell draft week. We win weeks.
            </p>

            <div className="animate-fade-up delay-3 mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2">
              {[
                { them: "Draft Wizard", us: "Draft night + every Sunday after" },
                { them: "FantasyPros", us: "Market fuel + YOUR judgment" },
                { them: "Host apps", us: "Rooms are free. Brains aren’t." },
              ].map((row) => (
                <div
                  key={row.them}
                  className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] px-3 py-2.5"
                >
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-[var(--text-dim)]">
                    {row.them}
                  </div>
                  <div className="text-xs font-semibold text-[var(--accent-bright)] mt-0.5 leading-snug">
                    {row.us}
                  </div>
                </div>
              ))}
            </div>

            <div className="animate-fade-up delay-3 mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="btn-primary">
                Get the better stack
                <ArrowIcon />
              </a>
              <a href="#why-better" className="btn-secondary">
                Roast Draft Wizard →
              </a>
            </div>

            <p className="animate-fade-up delay-4 mt-6 text-sm text-[var(--text-dim)] leading-relaxed max-w-lg">
              Private · Local-first · OpenRouter + optional FP ranks · You + friends —
              not per-seat SaaS for the whole league
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
