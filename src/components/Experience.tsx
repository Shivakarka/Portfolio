import { MapPin } from "lucide-react";
import { experience } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          description="From operations and process excellence into full-time software engineering."
        />
        <div className="relative mt-12 space-y-8 sm:ml-2">
          {/* Gradient timeline line */}
          <div
            className="absolute bottom-2 left-[7px] top-2 w-px"
            style={{
              background:
                "linear-gradient(180deg, rgba(16,185,129,0.5), rgba(6,182,212,0.3), rgba(245,158,11,0.15))",
            }}
            aria-hidden
          />
          {experience.map((e, i) => (
            <Reveal key={e.company} delay={i * 0.08}>
              <div className="relative pl-10">
                <span className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-emerald-400 bg-[#050810] ring-4 ring-emerald-400/15" />
                <div className="glass glass-hover rounded-2xl p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-white">
                        {e.role}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-emerald-300">
                        {e.company}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-xs text-slate-400 ring-1 ring-white/10">
                      <MapPin size={12} />
                      {e.period}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {e.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-400"
                      >
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
