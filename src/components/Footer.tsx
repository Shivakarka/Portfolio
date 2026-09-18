import { profile, socials } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row sm:px-8">
        <p className="font-display text-sm font-semibold text-white">
          shiva<span className="text-cyan-400">.</span>dev
        </p>
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} {profile.name} · Built with Next.js &
          Tailwind CSS
        </p>
        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="text-slate-500 transition-colors hover:text-cyan-300"
            >
              <s.icon size={17} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
