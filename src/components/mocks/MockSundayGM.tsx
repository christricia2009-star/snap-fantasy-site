export default function MockSundayGM() {
  return (
    <div
      className="card p-5 h-full"
      role="img"
      aria-label="Sunday GM command center mock with lock chain and multi-league priorities"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-[var(--text)]">Sunday GM · Wk 8</h3>
        <span className="text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full bg-[var(--accent-dim)] text-[var(--accent-bright)]">
          One-tap
        </span>
      </div>
      <p className="text-xs text-[var(--text-muted)] mb-3 leading-relaxed">
        Multi-league brief · lock chain · inactive apocalypse plan
      </p>
      <ul className="space-y-2">
        {[
          { t: "09:40 ET", d: "Money League lock — flex + DEF set", hot: true },
          { t: "12:55 ET", d: "Office PPR — weather fade on BUF", hot: true },
          { t: "16:20 ET", d: "Keeper — late slate streamer", hot: false },
          { t: "FAAB", d: "War room: $14 / $9 / hold powder", hot: false },
        ].map((row) => (
          <li
            key={row.t + row.d}
            className="flex gap-3 rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] px-3 py-2"
          >
            <span
              className={`shrink-0 font-mono text-[10px] font-bold pt-0.5 ${
                row.hot ? "text-[var(--accent-bright)]" : "text-[var(--text-dim)]"
              }`}
            >
              {row.t}
            </span>
            <span className="text-xs text-[var(--text-muted)] leading-snug">{row.d}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
