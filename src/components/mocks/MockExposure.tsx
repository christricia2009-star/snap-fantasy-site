export default function MockExposure() {
  return (
    <div
      className="card p-5 h-full"
      role="img"
      aria-label="Portfolio exposure map across leagues with anti-correlate warning"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-[var(--text)]">Exposure map</h3>
        <span className="text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-400">
          Anti-correlate
        </span>
      </div>
      <p className="text-xs text-[var(--text-dim)] mb-4">
        Bijan Robinson in 3 money leagues
      </p>
      <ul className="space-y-2.5">
        {[
          { league: "High Stakes $250", weight: "Must-win", pct: 100, risk: true },
          { league: "Keeper Dynasty", weight: "Money", pct: 100, risk: true },
          { league: "Work Pod", weight: "Money", pct: 100, risk: true },
          { league: "Fun Bowl", weight: "Fun", pct: 0, risk: false },
        ].map((row) => (
          <li key={row.league}>
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="font-medium text-[var(--text)]">{row.league}</span>
              <span className="text-[var(--text-dim)]">{row.weight}</span>
            </div>
            <div className="h-1.5 rounded-full bg-[var(--border)] overflow-hidden">
              <div
                className={`h-full rounded-full ${
                  row.risk ? "bg-amber-400" : "bg-[var(--accent)]"
                }`}
                style={{ width: `${row.pct || 8}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs leading-relaxed text-amber-400/90 border-t border-[var(--border)] pt-3">
        Warning: correlated upside in 3 money leagues. Consider diversifying WRs in Fun Bowl.
      </p>
    </div>
  );
}
