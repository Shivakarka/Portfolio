import { Cloud, Code2, Rocket } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Builds",
    text: "MERN & Next.js apps with TypeScript end-to-end — auth, payments, realtime features.",
  },
  {
    icon: Cloud,
    title: "Cloud Aware",
    text: "AWS Certified Cloud Practitioner (CLF-C02). Deploy on Vercel, Supabase, MongoDB Atlas.",
  },
  {
    icon: Rocket,
    title: "Career Switcher",
    text: "B.Tech Electrical → Cognizant process excellence → full-time software development.",
  },
];

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
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 0.1}>
              <div className="glass h-full rounded-2xl p-6 transition-colors hover:border-cyan-400/30">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
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
          ))}
        </div>
      </div>
    </section>
  );
}
