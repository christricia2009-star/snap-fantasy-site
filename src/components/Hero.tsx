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
        {/* Over-the-top swagger strip */}
        <div className="animate-fade-up mb-8 rounded-2xl border-2 border-[var(--accent)]/40 bg-gradient-to-r from-[var(--accent-dim)] via-[var(--bg-card)] to-[var(--accent-dim)] px-4 py-4 text-center sm:text-left sm:px-5">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-[#04120a] shadow-[0_0_24px_var(--accent-glow)]">
              <span className="pulse-dot !bg-[#04120a] !shadow-none" />
              Undisputed #1
            </span>
            <p className="text-sm sm:text-base font-bold text-[var(--text)]">
              Draft Wizard & FantasyPros built a{" "}
              <span className="text-[var(--text-muted)] line-through decoration-2 decoration-[var(--danger)]/70">
                draft-week rental
              </span>
              . We built a{" "}
              <span className="text-[var(--accent-bright)]">full-season war machine.</span>
            </p>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="animate-fade-up delay-1 inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/30 bg-[var(--accent-dim)] px-3 py-1.5 text-xs font-semibold text-[var(--accent-bright)] mb-6">
              Private · Ruthless · Multi-league · NFL-first
            </div>

            <h1
              id="hero-heading"
              className="animate-fade-up delay-1 text-[clamp(2.5rem,6.2vw,4.25rem)] font-black tracking-tight leading-[0.98] text-[var(--text)]"
            >
              The best fantasy AI
              <br />
              <span className="text-[var(--accent-bright)] drop-shadow-[0_0_40px_var(--accent-glow)]">
                on the planet.
              </span>
            </h1>

            <p className="animate-fade-up delay-2 mt-3 text-base sm:text-lg font-semibold text-[var(--text-muted)]">
              Not a hot take. A mismatch.
            </p>

            <p className="animate-fade-up delay-2 mt-4 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">
              Who is{" "}
              <strong className="text-[var(--text)]">Draft Wizard</strong> when the
              season starts? Who is{" "}
              <strong className="text-[var(--text)]">FantasyPros</strong> when five
              leagues lock in 90 minutes?{" "}
              <strong className="font-bold text-[var(--text)]">
                SnapFantasy is the private AI GM that still cooks after the draft —
              </strong>{" "}
              Snap Score, Sunday command, FAAB war rooms, trade politics, portfolio heat,
              and a brain that grades your misses. They sell rankings. We run the front
              office.
            </p>

            <div className="animate-fade-up delay-3 mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2">
              {[
                {
                  them: "Draft Wizard",
                  us: "Cute for 3 hours. We go 17 weeks.",
                },
                {
                  them: "FantasyPros",
                  us: "Market fuel. Not the whole meal.",
                },
                {
                  them: "Host apps",
                  us: "Scoreboards. We bring the brain.",
                },
              ].map((row) => (
                <div
                  key={row.them}
                  className="rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-3 relative overflow-hidden"
                >
                  <div
                    className="absolute top-0 left-0 h-full w-1 bg-[var(--accent)]"
                    aria-hidden
                  />
                  <div className="text-[10px] font-black uppercase tracking-wider text-[var(--text-dim)] pl-1">
                    vs {row.them}
                  </div>
                  <div className="text-xs font-bold text-[var(--accent-bright)] mt-1 leading-snug pl-1">
                    {row.us}
                  </div>
                </div>
              ))}
            </div>

            <div className="animate-fade-up delay-3 mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="btn-primary !text-base !px-6 !py-3.5">
                Claim the unfair advantage
                <ArrowIcon />
              </a>
              <a href="#why-better" className="btn-secondary !text-base !px-6 !py-3.5">
                Publicly dunk on Draft Wizard →
              </a>
            </div>

            <p className="animate-fade-up delay-4 mt-6 text-sm font-medium text-[var(--text-dim)] leading-relaxed max-w-lg">
              Private · Local-first · OpenRouter + optional FP · Built for killers in
              3–10 leagues — not tourists buying another draft-week seat
            </p>
          </div>

          <div className="animate-fade-up delay-2 relative">
            <div
              className="absolute -inset-4 rounded-3xl bg-[var(--accent)]/15 blur-2xl"
              aria-hidden
            />
            <div className="absolute -top-3 -right-2 z-10 rotate-6 rounded-lg bg-[var(--accent)] px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-[#04120a] shadow-[0_0_24px_var(--accent-glow)] sm:-right-4">
              Weight class: unfair
            </div>
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
