export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[var(--accent)] text-[#04120a] font-bold text-xs">
                SF
              </span>
              <span className="font-semibold text-[var(--text)]">SnapFantasy</span>
            </div>
            <p className="text-sm text-[var(--text-muted)] max-w-xs leading-relaxed">
              Private multi-league fantasy football AI. The brain next to
              Sleeper, Yahoo, and ESPN.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a href="#product" className="text-[var(--text-muted)] hover:text-[var(--text)]">
              Product
            </a>
            <a href="#why-better" className="text-[var(--text-muted)] hover:text-[var(--text)]">
              Why better
            </a>
            <a href="#playbook" className="text-[var(--text-muted)] hover:text-[var(--text)]">
              Playbook
            </a>
            <a href="#pricing" className="text-[var(--text-muted)] hover:text-[var(--text)]">
              Pricing
            </a>
            <a href="#faq" className="text-[var(--text-muted)] hover:text-[var(--text)]">
              FAQ
            </a>
            <a href="#cta" className="text-[var(--text-muted)] hover:text-[var(--text)]">
              Join beta
            </a>
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs text-[var(--text-dim)] leading-relaxed max-w-xl">
            <strong className="font-medium text-[var(--text-muted)]">Privacy note:</strong>{" "}
            Local-first by design. API keys in Keychain. We do not sell your league
            graph. Personal use / private distribution. Fantasy outcomes are never
            guaranteed — SnapFantasy improves process and edge, not certainty.
          </p>
          <p className="text-xs text-[var(--text-dim)] shrink-0">
            © {new Date().getFullYear()} SnapFantasy
          </p>
        </div>
      </div>
    </footer>
  );
}
