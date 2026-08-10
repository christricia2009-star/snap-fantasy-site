const steps = [
  {
    phase: "Pre-draft",
    title: "Build the edge before the room opens",
    items: ["Mocks", "Cheat sheet", "Strategy mode", "Import leagues"],
  },
  {
    phase: "Draft night",
    title: "Clock pressure, dual signal, multi-league",
    items: ["Snap Score queue", "Sleeper / Yahoo sync", "AI second opinion"],
  },
  {
    phase: "Weekly",
    title: "Sunday as a system, not a scramble",
    items: ["Batch optimize", "FAAB sim", "Injury trees", "Weather fades"],
  },
  {
    phase: "Deadline",
    title: "Packages, politics, prove-it",
    items: ["Trade packages", "Politics pitch", "Prove-it cards"],
  },
  {
    phase: "Playoffs",
    title: "Championship pack. Ceiling mode. Lock.",
    items: ["Championship pack", "Ceiling mode", "Lock orchestrator"],
  },
];

export default function Playbook() {
  return (
    <section
      id="playbook"
      className="relative py-20 sm:py-28 border-t border-[var(--border)]"
      aria-labelledby="playbook-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <p className="section-label mb-3">
            <span className="h-1 w-1 rounded-full bg-[var(--accent)]" aria-hidden />
            How you win with it
          </p>
          <h2 id="playbook-heading" className="section-title">
            Process edge. Not guaranteed rings.
          </h2>
          <p className="section-sub mt-4">
            Better process across every league — from first mock to final lock. No
            fluff claims. Just the playbook serious managers already wish their tools
            supported.
          </p>
        </div>

        <ol className="relative grid gap-4 md:grid-cols-5">
          {/* connector line on desktop */}
          <div
            className="pointer-events-none absolute top-8 left-[10%] right-[10%] hidden md:block h-px bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent"
            aria-hidden
          />
          {steps.map((s, i) => (
            <li key={s.phase} className="card p-5 relative">
              <div className="flex items-center gap-2 mb-3">
                <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)] text-[#04120a] text-xs font-bold font-mono shadow-[0_0_16px_var(--accent-glow)]">
                  {i + 1}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                  {s.phase}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-[var(--text)] leading-snug mb-3">
                {s.title}
              </h3>
              <ul className="space-y-1.5">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="text-xs text-[var(--text-muted)] flex gap-1.5"
                  >
                    <span className="text-[var(--accent)]" aria-hidden>
                      ·
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
