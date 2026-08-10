const steps = [
  {
    phase: "Pre-draft",
    title: "Build the edge before the room opens",
    items: [
      "Import hosts (Sleeper/Yahoo/paste)",
      "Mocks + cheat sheet + strategy mode",
      "Market intel · scarcity · ADP arbitrage",
      "Keeper / auction / SF curves loaded",
    ],
  },
  {
    phase: "Draft night",
    title: "Clock pressure, dual signal, multi-league",
    items: [
      "Snap Score queue + urgency tiers",
      "Sleeper sync · next-3 plan · heat runs",
      "Offline pack when Wi‑Fi dies",
      "Buddy copilot + multi-source grade",
    ],
  },
  {
    phase: "Weekly",
    title: "Sunday as a system, not a scramble",
    items: [
      "Sunday GM brief + lock chain",
      "Portfolio one-tap by importance",
      "FAAB war room · weather fades",
      "Market deltas · injury trees",
    ],
  },
  {
    phase: "Deadline",
    title: "Packages, politics, prove-it",
    items: [
      "Trade desk multi-offer",
      "Sell-high / buy-low board",
      "Politics pitch + prove-it cards",
      "Rival dossier · commissioner court",
    ],
  },
  {
    phase: "Playoffs",
    title: "Championship pack. Ceiling mode. Lock.",
    items: [
      "Championship week pack 2.0",
      "Ceiling / must-win modes",
      "Lock orchestrator + Live Activity",
      "Clash detector across money leagues",
    ],
  },
  {
    phase: "Learning",
    title: "Grade it. Recalibrate. Get sharper.",
    items: [
      "Decision log + accuracy charts",
      "Never-again list · edge journal",
      "Hybrid weight auto-tune",
      "Monthly learning digest",
    ],
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
            How you run the table
          </p>
          <h2 id="playbook-heading" className="section-title">
            Process so sharp it feels illegal.
          </h2>
          <p className="section-sub mt-4">
            No guaranteed rings — just an operating system that makes managers who
            “wing it on Sleeper” look casual. Draft tools leave after pick 15×12. We
            still own your lock chain in week 17.
          </p>
        </div>

        <ol className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                  <li key={item} className="text-xs text-[var(--text-muted)] flex gap-1.5">
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
