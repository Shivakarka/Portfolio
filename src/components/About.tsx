import { Cloud, Code2, Rocket } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Builds",
    text: "MERN & Next.js apps with TypeScript end-to-end — auth, payments, realtime features.",
    accent: "cyan",
  },
  {
    icon: Cloud,
    title: "Cloud Aware",
    text: "AWS Certified Cloud Practitioner (CLF-C02). Deploy on Vercel, Supabase, MongoDB Atlas.",
    accent: "indigo",
  },
  {
    icon: Rocket,
    title: "Career Switcher",
    text: "B.Tech Electrical → Cognizant process excellence → full-time software development.",
    accent: "fuchsia",
  },
];

const accentMap: Record<string, { bg: string; text: string; border: string }> = {
  cyan: {
    bg: "bg-cyan-400/10",
    text: "text-cyan-300",
    border: "hover:border-cyan-400/30",
  },
  indigo: {
    bg: "bg-indigo-400/10",
    text: "text-indigo-300",
    border: "hover:border-indigo-400/30",
  },
  fuchsia: {
    bg: "bg-fuchsia-400/10",
    text: "text-fuchsia-300",
    border: "hover:border-fuchsia-400/30",
  },
};

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="About"
          title="Developer who ships, not just codes"
          description="I'm Shiva Karka, a full-stack developer in Hyderabad. I went from an Electrical engineering degree through operations roles at Cognizant into software — and now I build production web apps with React, Next.js and Node. I care about clean TypeScript, fast pages, and features users actually feel."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {highlights.map((h, i) => {
            const a = accentMap[h.accent];
            return (
              <Reveal key={h.title} delay={i * 0.1}>
                <div
                  className={`glass glass-hover group h-full rounded-2xl p-6 ${a.border}`}
                >
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${a.bg} ${a.text} transition-transform group-hover:scale-110`}
                  >
                    <h.icon size={20} />
                  </div>
                  <h3 className="font-display mt-4 text-base font-semibold text-white">
                    {h.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {h.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
