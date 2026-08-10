const stats = [
  { value: "300", label: "Enhancements shipped", sub: "Gen1 + Gen2 + Gen3" },
  { value: "3–10", label: "Leagues at once", sub: "Portfolio OS, not one tab" },
  { value: "Full", label: "Season coverage", sub: "Draft → lock → autopsy" },
  { value: "1", label: "Brain, not N seats", sub: "Friends stay on free hosts" },
];

export default function StatsBar() {
  return (
    <section
      className="relative border-y border-[var(--border)] bg-[var(--bg-elevated)]/80"
      aria-label="SnapFantasy at a glance"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <div className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--accent-bright)] font-mono tabular-nums">
                {s.value}
              </div>
              <div className="mt-1 text-sm font-semibold text-[var(--text)]">
                {s.label}
              </div>
              <div className="mt-0.5 text-xs text-[var(--text-dim)]">{s.sub}</div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-[var(--text-muted)] max-w-3xl mx-auto leading-relaxed">
          <span className="text-[var(--accent)] font-semibold">Thesis:</span>{" "}
          FantasyPros = market prior · OpenRouter = judgment · local multi-league
          memory = moat. Draft tools stop when the clock dies. SnapFantasy is the
          private OS that owns the rest of your season.
        </p>
      </div>
    </section>
  );
}
