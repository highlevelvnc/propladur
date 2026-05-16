import { SOCIAL } from "@/lib/constants";

const Icons: Record<string, React.ReactNode> = {
  Instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  Facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M13.5 21v-7.5h2.55l.4-3H13.5V8.6c0-.85.25-1.45 1.5-1.45h1.6V4.5c-.28-.04-1.24-.12-2.36-.12-2.34 0-3.94 1.43-3.94 4.05V10.5H8v3h2.3V21h3.2z" />
    </svg>
  ),
};

type Variant = "footer" | "header" | "menu";

export function SocialIcons({ variant = "footer" }: { variant?: Variant }) {
  const sizeCls =
    variant === "header"
      ? "h-9 w-9"
      : variant === "menu"
        ? "h-11 w-11"
        : "h-10 w-10";

  return (
    <ul
      className={`flex items-center ${variant === "menu" ? "gap-3" : "gap-2"}`}
    >
      {SOCIAL.map((s) => (
        <li key={s.name}>
          <a
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Seguir no ${s.name}`}
            className={`grid place-items-center rounded-full border border-white/15 text-white/80 transition-all duration-500 hover:border-gold-400 hover:text-gold-300 hover:-translate-y-0.5 ${sizeCls}`}
          >
            <span className="h-5 w-5 inline-block">{Icons[s.name]}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
