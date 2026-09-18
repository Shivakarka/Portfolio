import { skillGroups } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

const accents = [
  { bg: "bg-emerald-400/10", text: "text-emerald-300", dot: "bg-emerald-400" },
  { bg: "bg-cyan-400/10", text: "text-cyan-300", dot: "bg-cyan-400" },
  { bg: "bg-amber-400/10", text: "text-amber-300", dot: "bg-amber-400" },
  { bg: "bg-fuchsia-400/10", text: "text-fuchsia-300", dot: "bg-fuchsia-400" },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="My toolbox"
          description="Technologies I use to take products from idea to production deployment."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((g, i) => {
            const a = accents[i % accents.length];
            return (
              <Reveal key={g.title} delay={i * 0.08}>
                <div className="glass glass-hover group h-full rounded-2xl p-6">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${a.bg} ${a.text} transition-transform group-hover:scale-110`}
                  >
                    <g.icon size={20} />
                  </div>
                  <h3 className="font-display mt-4 text-base font-semibold text-white">
                    {g.title}
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {g.skills.map((s) => (
                      <li
                        key={s}
                        className="flex items-center gap-2 text-sm text-slate-400 transition-colors group-hover:text-slate-300"
                      >
                        <span className={`h-1 w-1 shrink-0 rounded-full ${a.dot}`} />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
