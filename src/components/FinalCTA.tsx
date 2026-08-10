"use client";

import { useState, type FormEvent } from "react";

export default function FinalCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("err");
      return;
    }
    setStatus("ok");
    setEmail("");
  };

  return (
    <section
      id="cta"
      className="relative py-20 sm:py-28 border-t border-[var(--border)] overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(34,197,94,0.14),transparent_55%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <p className="section-label mb-3 justify-center">
          <span className="pulse-dot" />
          Private beta · better than draft week
        </p>
        <h2 id="cta-heading" className="section-title">
          Draft Wizard can keep draft week. We&apos;ll take the championship.
        </h2>
        <p className="section-sub mt-4 mx-auto">
          Join the private beta. Multi-league AI that still works when FantasyPros is
          just a rankings tab and the host app is just a scoreboard. TestFlight when
          ready.
        </p>

        <form
          onSubmit={onSubmit}
          className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          noValidate
        >
          <label htmlFor="waitlist-email" className="sr-only">
            Email for private beta
          </label>
          <input
            id="waitlist-email"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@email.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status !== "idle") setStatus("idle");
            }}
            className="flex-1 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-dim)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
            required
          />
          <button type="submit" className="btn-primary whitespace-nowrap">
            Join waitlist
          </button>
        </form>

        {status === "ok" && (
          <p className="mt-3 text-sm text-[var(--accent-bright)]" role="status">
            You&apos;re on the list. We&apos;ll be in touch.
          </p>
        )}
        {status === "err" && (
          <p className="mt-3 text-sm text-amber-400" role="alert">
            Enter a valid email to join the waitlist.
          </p>
        )}

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#why-better" className="btn-secondary !text-sm">
            Compare to Draft Wizard
          </a>
          <a href="#features" className="btn-secondary !text-sm">
            Full capability map
          </a>
        </div>
        <p className="mt-4 text-xs text-[var(--text-dim)]">
          Private · Local-first · OpenRouter-native · Who needs another draft-week sub?
        </p>
      </div>
    </section>
  );
}
