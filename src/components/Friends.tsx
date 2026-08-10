const points = [
  {
    title: "Not selling seats to your whole league",
    body: "Your opponents can stay on Sleeper/Yahoo free. You run the OS.",
  },
  {
    title: "Optional buddy co-pilot",
    body: "Shared stash, co-manager notes, silent partner digests — without N× premium seats.",
  },
  {
    title: "CloudKit-ready private backup",
    body: "Small-group path when you want sync without selling your league graph.",
  },
  {
    title: "Cost model that fits friends",
    body: "OpenRouter usage + optional FP key — not four FantasyPros premium seats.",
  },
];

export default function Friends() {
  return (
    <section
      className="relative py-20 sm:py-28 border-t border-[var(--border)]"
      aria-labelledby="friends-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="section-label mb-3">
              <span className="h-1 w-1 rounded-full bg-[var(--accent)]" aria-hidden />
              For you + friends
            </p>
            <h2 id="friends-heading" className="section-title">
              You + friends. Not the whole App Store.
            </h2>
            <p className="section-sub mt-4">
              SnapFantasy is built for one manager and a few friends — people in 3–10
              leagues who hate paying per-seat tools. Portfolio heat, shared stash,
              co-manager briefs, and buddy draft notes — without buying seats for the
              whole league. Not an App Store product. Not a host.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {points.map((p) => (
              <article key={p.title} className="card p-5">
                <h3 className="text-sm font-semibold text-[var(--text)] leading-snug">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
                  {p.body}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Testimonials placeholders */}
        <div className="mt-14">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)] mb-4">
            Friend-league wins · placeholders
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                q: "“Ran three drafts on one laptop. Draft 3.0 next-3 plan paid for itself by pick 40.”",
                a: "— Money league, 12-team PPR",
              },
              {
                q: "“Portfolio heat stopped me from stacking the same RB in every cash league. Sunday GM is unfair.”",
                a: "— Multi-league manager",
              },
              {
                q: "“Draft Wizard ended at good luck. SnapFantasy still running my lock chain in week 14.”",
                a: "— Keeper co-manager",
              },
            ].map((t) => (
              <blockquote key={t.a} className="card p-5">
                <p className="text-sm text-[var(--text)] leading-relaxed">{t.q}</p>
                <footer className="mt-3 text-xs text-[var(--text-dim)]">{t.a}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
