import { services } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What I Do"
          title="Services I offer"
          description="From concept to deployment — I handle the full lifecycle of modern web applications so you can focus on your product."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 0.1}>
              <div className="glass glass-hover group h-full rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300 transition-transform group-hover:scale-110">
                    <s.icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {s.description}
                    </p>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-5">
                  {s.features.map((f) => (
                    <span
                      key={f}
                      className="rounded-full bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300 ring-1 ring-white/10"
                    >
                      {f}
                      </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
