export default function MockSnapScore() {
  return (
    <div
      className="card p-5 h-full overflow-hidden"
      role="img"
      aria-label="Snap Score ranked list with dual signal market and AI"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-[var(--text)]">Snap Score queue</h3>
        <span className="text-[10px] text-[var(--text-dim)]">Dual-signal</span>
      </div>
      <div className="space-y-2">
        {[
          { name: "Jahmyr Gibbs", pos: "RB", fp: 8, snap: 4, why: "Need + schedule" },
          { name: "Amon-Ra St. Brown", pos: "WR", fp: 11, snap: 6, why: "Target share" },
          { name: "Lamar Jackson", pos: "QB", fp: 15, snap: 18, why: "Stack later" },
        ].map((p) => (
          <div
            key={p.name}
            className="rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-3"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="text-sm font-semibold text-[var(--text)]">{p.name}</div>
                <div className="text-[10px] text-[var(--text-dim)] mt-0.5">
                  {p.pos} · {p.why}
                </div>
              </div>
              <div className="text-right">
                <div className="font-mono text-lg font-bold text-[var(--accent-bright)] leading-none">
                  {100 - p.snap * 2}
                </div>
                <div className="text-[9px] uppercase text-[var(--text-dim)] mt-0.5">Snap</div>
              </div>
            </div>
            <p className="mt-2 text-[11px] text-[var(--text-muted)] leading-snug">
              <span className="text-[var(--text-dim)]">FP/market says</span> #{p.fp}
              <span className="mx-1.5 text-[var(--text-dim)]">·</span>
              <span className="text-[var(--accent)]">Snap says</span> #{p.snap}{" "}
              <span className="text-[var(--text-dim)]">because {p.why.toLowerCase()}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
