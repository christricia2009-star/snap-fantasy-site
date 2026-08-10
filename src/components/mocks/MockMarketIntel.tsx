export default function MockMarketIntel() {
  return (
    <div
      className="card p-5 h-full"
      role="img"
      aria-label="Market intel board with risers fallers and ADP arbitrage"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-[var(--text)]">Market intel</h3>
        <span className="text-[10px] text-[var(--text-dim)]">Consensus deltas</span>
      </div>
      <ul className="space-y-2">
        {[
          { name: "Kyren Williams", tag: "Riser", delta: "+6 ECR", tone: "up" },
          { name: "Garrett Wilson", tag: "Arbitrage", delta: "ADP 28 · ECR 19", tone: "arb" },
          { name: "Calvin Ridley", tag: "Faller", delta: "−4 · weather", tone: "down" },
          { name: "TE scarcity", tag: "Index", delta: "High · week 8", tone: "arb" },
        ].map((r) => (
          <li
            key={r.name}
            className="flex items-center justify-between gap-2 rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] px-3 py-2"
          >
            <div className="min-w-0">
              <div className="text-sm font-medium text-[var(--text)] truncate">{r.name}</div>
              <div className="text-[10px] text-[var(--text-dim)]">{r.tag}</div>
            </div>
            <span
              className={`shrink-0 text-[11px] font-mono font-semibold ${
                r.tone === "up"
                  ? "text-[var(--accent-bright)]"
                  : r.tone === "down"
                    ? "text-amber-400"
                    : "text-sky-400"
              }`}
            >
              {r.delta}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-[11px] text-[var(--text-dim)] leading-snug border-t border-[var(--border)] pt-3">
        FP/market says X · Snap says Y — every call shows the split.
      </p>
    </div>
  );
}
