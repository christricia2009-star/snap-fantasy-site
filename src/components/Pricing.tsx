export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative py-20 sm:py-28 border-t border-[var(--border)]"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <p className="section-label mb-3">
            <span className="h-1 w-1 rounded-full bg-[var(--accent)]" aria-hidden />
            Pricing · honest
          </p>
          <h2 id="pricing-heading" className="section-title">
            Stop renting draft week.{" "}
            <span className="text-[var(--accent-bright)]">Buy a weapon.</span>
          </h2>
          <p className="section-sub mt-4">
            Draft tools sell seats. Hosts are free but dumb about your portfolio.
            SnapFantasy is one private brain with usage you control — not N× premium
            subs so your friends can open the same rankings app.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <article className="card p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)]">
              The app
            </p>
            <h3 className="mt-2 text-xl font-bold text-[var(--text)]">Private / personal</h3>
            <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed">
              Not App Store mass product. Built for you + friends. Private beta.
              Mock AI demos every feature offline without a key.
            </p>
          </article>

          <article className="card p-6 border-[var(--accent)]/30 relative overflow-hidden">
            <div
              className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[var(--accent)]/10 blur-2xl"
              aria-hidden
            />
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
              You pay
            </p>
            <h3 className="mt-2 text-xl font-bold text-[var(--text)]">Usage, not seats</h3>
            <ul className="mt-4 space-y-3 text-sm text-[var(--text-muted)]">
              <li className="flex gap-2">
                <span className="text-[var(--accent)]" aria-hidden>
                  →
                </span>
                OpenRouter tokens (daily/weekly budget caps in-app)
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--accent)]" aria-hidden>
                  →
                </span>
                Optional FantasyPros personal / HOF for ranks
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--accent)]" aria-hidden>
                  →
                </span>
                League-mates stay free on Sleeper / Yahoo / ESPN
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--accent)]" aria-hidden>
                  →
                </span>
                Cheap + smart model split · spend-capped Sunday plans
              </li>
            </ul>
          </article>

          <article className="card p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)]">
              Compare to
            </p>
            <h3 className="mt-2 text-xl font-bold text-[var(--text)]">
              Premium tiers × managers
            </h3>
            <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed">
              FantasyPros premium and Draft Wizard seats scale per serious manager.
              ChatGPT Pro still doesn’t know your FAAB. SnapFantasy: one brain, optional
              market key, models and personas you control.
            </p>
          </article>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <a href="#cta" className="btn-primary">
            Join private beta
          </a>
          <a href="#why-better" className="btn-secondary">
            Re-read why we win
          </a>
          <a href="#features" className="btn-secondary">
            Browse features
          </a>
        </div>
      </div>
    </section>
  );
}
