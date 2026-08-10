const claims = [
  {
    value: "Week 1–17",
    label: "They rent you draft week",
    sub: "We run the whole season",
  },
  {
    value: "Multi-league",
    label: "They see one room",
    sub: "We see your whole book",
  },
  {
    value: "Your brain",
    label: "They ship fixed logic",
    sub: "We learn your misses",
  },
  {
    value: "One seat",
    label: "They sell N premiums",
    sub: "Friends stay free on hosts",
  },
];

export default function StatsBar() {
  return (
    <section
      className="relative border-y border-[var(--border)] bg-[var(--bg-elevated)]/80"
      aria-label="Why SnapFantasy wins"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-10">
        <p className="text-center text-xs font-bold uppercase tracking-[0.16em] text-[var(--accent)] mb-6">
          Draft Wizard · FantasyPros · Host apps — cool toys. Wrong weight class.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {claims.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-4 text-center sm:text-left"
            >
              <div className="text-lg sm:text-xl font-bold tracking-tight text-[var(--accent-bright)]">
                {s.value}
              </div>
              <div className="mt-1 text-sm font-semibold text-[var(--text)]">{s.label}</div>
              <div className="mt-0.5 text-xs text-[var(--text-dim)]">{s.sub}</div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-[var(--text-muted)] max-w-3xl mx-auto leading-relaxed">
          <span className="text-[var(--accent)] font-semibold">The split:</span>{" "}
          FantasyPros is the market. OpenRouter is judgment. Your private multi-league
          state is the moat. Draft apps stop when the clock dies. We don&apos;t.
        </p>
      </div>
    </section>
  );
}
