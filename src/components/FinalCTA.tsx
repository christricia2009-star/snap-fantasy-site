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
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(34,197,94,0.18),transparent_55%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <p className="section-label mb-3 justify-center">
          <span className="pulse-dot" />
          Private beta · weight class: unfair
        </p>
        <h2 id="cta-heading" className="section-title !text-[clamp(1.85rem,4.5vw,3rem)]">
          Draft Wizard can keep the souvenir.
          <br />
          <span className="text-[var(--accent-bright)]">We&apos;ll take the trophy case.</span>
        </h2>
        <p className="section-sub mt-4 mx-auto text-base sm:text-lg font-medium">
          Join the private beta. Multi-league AI that still cooks when FantasyPros is a
          rankings tab and the host app is just a scoreboard. If you&apos;re still
          juggling five apps on Sunday… that&apos;s adorable. Fix it.
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
          <button type="submit" className="btn-primary whitespace-nowrap !px-6">
            I want the edge
          </button>
        </form>

        {status === "ok" && (
          <p className="mt-3 text-sm font-bold text-[var(--accent-bright)]" role="status">
            You&apos;re in. Welcome to the unfair side.
          </p>
        )}
        {status === "err" && (
          <p className="mt-3 text-sm text-amber-400" role="alert">
            Enter a valid email — even killers need inboxes.
          </p>
        )}

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#why-better" className="btn-secondary !text-sm">
            One more dunk on Draft Wizard
          </a>
          <a href="#features" className="btn-secondary !text-sm">
            Open the arsenal
          </a>
        </div>
        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-dim)]">
          Private · Local-first · OpenRouter-native · Draft-week subs are for tourists
        </p>
      </div>
    </section>
  );
}
