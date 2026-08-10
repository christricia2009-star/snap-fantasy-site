export default function MockTimeline() {
  return (
    <div
      className="card p-5 sm:p-6"
      role="img"
      aria-label="Side-by-side timeline: Draft Wizard covers draft week; SnapFantasy covers the full season OS"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)] mb-3">
            Draft Wizard / FantasyPros
          </p>
          <div className="relative pl-4 border-l-2 border-[var(--border-strong)] space-y-4">
            <div>
              <div className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-[var(--text-dim)]" />
              <p className="text-sm font-semibold text-[var(--text)]">Draft week</p>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">
                Mocks · ECR · live assist · grades
              </p>
            </div>
            <div className="opacity-40">
              <div className="absolute -left-[5px] top-[4.5rem] h-2 w-2 rounded-full bg-[var(--text-dim)]" />
              <p className="text-sm font-medium text-[var(--text-dim)]">Rest of season</p>
              <p className="text-xs text-[var(--text-dim)] mt-0.5">
                Rankings & content add-ons — not a GM OS
              </p>
            </div>
          </div>
          <p className="mt-4 text-xs font-medium text-[var(--text-dim)]">
            Ends at “good luck this season.”
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)] mb-3">
            SnapFantasy
          </p>
          <div className="relative pl-4 border-l-2 border-[var(--accent)]/50 space-y-3">
            {[
              { t: "Pre-draft", d: "Mocks · market intel · import any host" },
              { t: "Draft night", d: "Draft 3.0 · Snap Score · next-3 plan" },
              { t: "Weekly", d: "Sunday GM · lock chain · FAAB war room" },
              { t: "Deadline", d: "Trade desk · prove-it · politics map" },
              { t: "Playoffs", d: "Championship pack · ceiling · clash detect" },
              { t: "Learning", d: "Edge journal · hybrid weights · never-again" },
            ].map((s) => (
              <div key={s.t} className="relative">
                <div className="absolute -left-[21px] top-1.5 h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent-glow)]" />
                <p className="text-sm font-semibold text-[var(--text)]">{s.t}</p>
                <p className="text-xs text-[var(--text-muted)] mt-0.5">{s.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs font-semibold text-[var(--accent-bright)]">
            Full season OS. Keeps getting sharper.
          </p>
        </div>
      </div>
    </div>
  );
}
