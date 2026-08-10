const claims = [
  {
    value: "17 weeks",
    label: "They rent you ~3 days",
    sub: "We run the whole war",
  },
  {
    value: "Every league",
    label: "They see one tab",
    sub: "We see the whole book",
  },
  {
    value: "Your DNA",
    label: "They ship fixed logic",
    sub: "We learn when you're wrong",
  },
  {
    value: "1 brain",
    label: "They sell N seats",
    sub: "League-mates stay free",
  },
];

export default function StatsBar() {
  return (
    <section
      className="relative border-y border-[var(--border)] bg-[var(--bg-elevated)]/80"
      aria-label="Why SnapFantasy wins"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-12">
        <p className="text-center text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-[var(--accent-bright)] mb-2">
          This is not a respectful debate
        </p>
        <p className="text-center text-base sm:text-lg font-bold text-[var(--text)] mb-8 max-w-2xl mx-auto">
          Draft Wizard · FantasyPros · Host apps ={" "}
          <span className="text-[var(--text-muted)]">cool toys in the wrong weight class.</span>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {claims.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] p-5 text-center sm:text-left relative overflow-hidden"
            >
              <div
                className="pointer-events-none absolute -right-4 -top-4 h-20 w-20 rounded-full bg-[var(--accent)]/10 blur-xl"
                aria-hidden
              />
              <div className="relative text-2xl sm:text-3xl font-black tracking-tight text-[var(--accent-bright)]">
                {s.value}
              </div>
              <div className="relative mt-2 text-sm font-bold text-[var(--text)]">{s.label}</div>
              <div className="relative mt-0.5 text-xs font-medium text-[var(--text-dim)]">
                {s.sub}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm sm:text-base text-[var(--text-muted)] max-w-3xl mx-auto leading-relaxed font-medium">
          <span className="text-[var(--accent-bright)] font-black">The cheat code:</span>{" "}
          FantasyPros = market prior. OpenRouter = judgment. Your private multi-league
          memory = moat. Draft apps die when the clock dies.{" "}
          <span className="text-[var(--text)] font-bold">We don&apos;t die.</span>
        </p>
      </div>
    </section>
  );
}
