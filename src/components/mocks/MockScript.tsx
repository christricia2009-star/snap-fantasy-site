export default function MockScript() {
  return (
    <div
      className="card p-5 h-full"
      role="img"
      aria-label="Weekly script of the week mock card"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-[var(--text)]">Weekly script · Wk 7</h3>
        <span className="text-[10px] font-mono text-[var(--accent)]">Scout + GM</span>
      </div>
      <ol className="space-y-3">
        {[
          {
            t: "Start/sit lock",
            d: "Flex: Flowers over Pittman — matchup smash + weather fade on IND.",
          },
          {
            t: "FAAB ($18 cap)",
            d: "Bid $11 on backup RB with path. Leave powder for bye week 9.",
          },
          {
            t: "Trade lean",
            d: "Package mid WR for RB2. Prove-it: playoff odds +4.2% if completed.",
          },
        ].map((item, i) => (
          <li key={item.t} className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[var(--accent-dim)] text-[var(--accent-bright)] text-xs font-bold font-mono">
              {i + 1}
            </span>
            <div>
              <div className="text-sm font-medium text-[var(--text)]">{item.t}</div>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed mt-0.5">
                {item.d}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
