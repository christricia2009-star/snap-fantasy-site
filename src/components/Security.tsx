const items = [
  {
    title: "Local-first SwiftData",
    body: "Your leagues live on device (SnapFantasy_v5). CloudKit schema ready — not required.",
  },
  {
    title: "Keys in Keychain",
    body: "OpenRouter, FantasyPros, Yahoo, Gmail — multi-host token vault. Biometric lock optional.",
  },
  {
    title: "No selling your league graph",
    body: "Private distribution. Personal use. We are not monetizing your rosters.",
  },
  {
    title: "Hallucination audit trail",
    body: "Prefer local DB / rankings. Prove-it citations. Guardrails on every agent call.",
  },
];

export default function Security() {
  return (
    <section
      className="relative py-20 sm:py-28 border-t border-[var(--border)]"
      aria-labelledby="security-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl mb-10">
          <p className="section-label mb-3">
            <span className="h-1 w-1 rounded-full bg-[var(--accent)]" aria-hidden />
            Security & philosophy
          </p>
          <h2 id="security-heading" className="section-title">
            Private by design. Sharp by default.
          </h2>
          <p className="section-sub mt-4">
            Local-first. Keychain credentials. No mass-market data harvest. Built for
            personal use and private distribution with friends.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <article key={item.title} className="card p-5">
              <div
                className="mb-3 h-8 w-8 rounded-lg bg-[var(--accent-dim)] flex items-center justify-center"
                aria-hidden
              >
                <LockIcon />
              </div>
              <h3 className="text-sm font-semibold text-[var(--text)]">{item.title}</h3>
              <p className="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function LockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" aria-hidden>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" strokeLinecap="round" />
    </svg>
  );
}
