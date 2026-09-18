"use client";

import { ArrowUpRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { projects } from "@/data/portfolio";
import { GithubIcon } from "./BrandIcons";
import { Reveal, SectionHeading } from "./Reveal";

const categories = ["All", "Full-Stack", "Frontend"];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Recent work, biggest builds"
          description="A selection of my most recent and substantial projects — full-stack apps with real auth, payments, and data. Every one is live with source code."
        />

        {/* Filter pills */}
        <Reveal delay={0.2} className="mt-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  filter === c
                    ? "bg-emerald-500 text-slate-950"
                    : "border border-white/10 text-slate-400 hover:border-white/20 hover:text-white"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {filtered.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.1}>
              <article
                className={`glass glass-hover group relative flex h-full flex-col overflow-hidden rounded-2xl ${
                  p.featured ? "ring-1 ring-emerald-400/20" : ""
                }`}
              >
                {p.featured && (
                  <span className="absolute right-4 top-4 z-10 inline-flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-300 backdrop-blur-md">
                    <Sparkles size={11} />
                    Featured
                  </span>
                )}
                {p.image ? (
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c1322] via-[#0c1322]/20 to-transparent" />
                  </div>
                ) : (
                  <div className="relative flex h-52 w-full items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-500/15 via-cyan-500/15 to-amber-500/15">
                    <div className="bg-grid absolute inset-0" aria-hidden />
                    <Sparkles size={44} className="relative text-emerald-300/70" />
                    <span className="absolute right-4 top-4 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-300">
                      Latest · {p.year}
                    </span>
                  </div>
                )}

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg font-semibold leading-snug text-white">
                      {p.title}
                    </h3>
                    {p.image && !p.featured && (
                      <span className="shrink-0 rounded-full border border-white/10 px-2.5 py-1 text-xs text-slate-400">
                        {p.year}
                      </span>
                    )}
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                    {p.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300 ring-1 ring-white/10 transition-colors group-hover:ring-white/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex gap-3 border-t border-white/10 pt-5">
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="group/btn inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition-all hover:bg-emerald-400 hover:shadow-[0_0_20px_-4px_rgba(16,185,129,0.5)]"
                    >
                      Live Demo
                      <ArrowUpRight
                        size={15}
                        className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                      />
                    </a>
                    <a
                      href={p.code}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-white/15 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/5"
                    >
                      <GithubIcon size={15} />
                      Code
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 text-center">
          <a
            href="https://github.com/Shivakarka?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 hover:text-emerald-200"
          >
            <GithubIcon size={16} />
            See all 46 repositories on GitHub
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
