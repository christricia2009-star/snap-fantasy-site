const lines = [
  "DRAFT WIZARD WHO?",
  "FANTASYPROS IS A RANKINGS TAB",
  "WE OWN SUNDAY",
  "FIVE LEAGUES. ONE BRAIN.",
  "GOOD LUCK THIS SEASON — LOL",
  "HOST APPS ARE SCOREBOARDS",
  "CHATGPT DOESN'T KNOW YOUR FAAB",
  "SNAP SCORE > GUT FEEL",
  "PORTFOLIO HEAT HITS DIFFERENT",
  "STOP RENTING DRAFT WEEK",
];

export default function TrashTalkTicker() {
  const loop = [...lines, ...lines];
  return (
    <div
      className="relative border-y border-[var(--accent)]/30 bg-[var(--accent)] text-[#04120a] overflow-hidden"
      aria-hidden
    >
      <div className="marquee-track py-2.5">
        {loop.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="mx-4 sm:mx-6 text-xs sm:text-sm font-black uppercase tracking-[0.18em] whitespace-nowrap"
          >
            {t}
            <span className="mx-4 sm:mx-6 opacity-40">{"//"}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
