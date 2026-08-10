export default function MockDashboard() {
  return (
    <div
      className="relative rounded-2xl border border-[var(--border-strong)] bg-[var(--bg-card)] shadow-2xl shadow-black/40 overflow-hidden"
      role="img"
      aria-label="SnapFantasy multi-league dashboard mockup showing leagues needing attention, YOUR TURN draft banner, and Snap Score"
    >
      {/* Title bar */}
      <div className="flex items-center justify-between gap-3 border-b border-[var(--border)] px-4 py-3 bg-[var(--bg-elevated)]">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ef4444]/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#f59e0b]/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]/60" />
        </div>
        <span className="text-[11px] font-medium text-[var(--text-dim)] font-mono tracking-wide">
          SNAPFANTASY · PORTFOLIO
        </span>
        <span className="text-[11px] text-[var(--accent)] font-semibold">LIVE</span>
      </div>

      <div className="p-4 space-y-3">
        {/* YOUR TURN banner */}
        <div className="flex items-center justify-between gap-3 rounded-xl bg-[var(--accent)] px-3.5 py-2.5 text-[#04120a]">
          <div className="flex items-center gap-2 min-w-0">
            <span className="font-bold text-xs tracking-wider uppercase shrink-0">
              Your turn
            </span>
            <span className="text-xs font-medium opacity-80 truncate">
              Money League · Rd 4 · Pick 3
            </span>
          </div>
          <span className="font-mono font-bold text-sm tabular-nums shrink-0">0:28</span>
        </div>

        {/* Leagues needing attention */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)]">
              Needs attention
            </h3>
            <span className="text-[10px] text-[var(--text-dim)]">3 of 6 leagues</span>
          </div>
          <ul className="space-y-1.5">
            {[
              { name: "High Stakes $250", badge: "Draft live", tone: "green" },
              { name: "Office League", badge: "Lineup lock 2h", tone: "amber" },
              { name: "Family Keeper", badge: "FAAB due Sun", tone: "muted" },
            ].map((l) => (
              <li
                key={l.name}
                className="flex items-center justify-between rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] px-3 py-2"
              >
                <span className="text-sm font-medium text-[var(--text)]">{l.name}</span>
                <span
                  className={`text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full ${
                    l.tone === "green"
                      ? "bg-[var(--accent-dim)] text-[var(--accent-bright)]"
                      : l.tone === "amber"
                        ? "bg-amber-500/15 text-amber-400"
                        : "bg-white/5 text-[var(--text-dim)]"
                  }`}
                >
                  {l.badge}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Snap Score queue */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)]">
              Best available · Snap Score
            </h3>
            <span className="text-[10px] text-[var(--text-dim)]">Market + needs + AI</span>
          </div>
          <ul className="space-y-1">
            {[
              { rank: 1, name: "Bijan Robinson", pos: "RB", score: 94, note: "Need + steal" },
              { rank: 2, name: "CeeDee Lamb", pos: "WR", score: 91, note: "FP 12 · Snap 7" },
              { rank: 3, name: "Josh Allen", pos: "QB", score: 88, note: "Zero RB ok" },
            ].map((p) => (
              <li
                key={p.name}
                className="flex items-center gap-3 rounded-lg px-2.5 py-2 hover:bg-[var(--bg-elevated)] transition-colors"
              >
                <span className="w-5 text-center font-mono text-xs text-[var(--text-dim)]">
                  {p.rank}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-[var(--text)] truncate">
                      {p.name}
                    </span>
                    <span className="text-[10px] font-mono text-[var(--text-dim)]">
                      {p.pos}
                    </span>
                  </div>
                  <span className="text-[10px] text-[var(--text-dim)]">{p.note}</span>
                </div>
                <div className="text-right shrink-0">
                  <div className="font-mono text-sm font-bold text-[var(--accent-bright)] tabular-nums">
                    {p.score}
                  </div>
                  <div className="text-[9px] uppercase tracking-wide text-[var(--text-dim)]">
                    Snap
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
