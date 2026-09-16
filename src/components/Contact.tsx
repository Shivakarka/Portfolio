"use client";

import { ArrowUpRight, Copy, Mail } from "lucide-react";
import { useState } from "react";
import { profile, socials } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a0f22] p-8 text-center sm:p-14">
            <div
              className="absolute left-1/2 top-0 h-64 w-[560px] -translate-x-1/2 rounded-full opacity-25 blur-[100px]"
              style={{
                background:
                  "linear-gradient(100deg,#22d3ee 0%,#818cf8 50%,#e879f9 100%)",
              }}
              aria-hidden
            />
            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Contact
              </p>
              <h2 className="font-display mx-auto mt-3 max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Let&apos;s build something great together
              </h2>
              <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-slate-400">
                Open to full-time roles, freelance projects and interesting
                collaborations. My inbox is always open.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-300"
                >
                  <Mail size={16} />
                  Say Hello
                </a>
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/5"
                >
                  <Copy size={16} />
                  {copied ? "Copied!" : profile.email}
                </button>
              </div>

              <div className="mt-8 flex items-center justify-center gap-4">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
                  >
                    <s.icon size={18} />
                  </a>
                ))}
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 items-center gap-1.5 rounded-full border border-white/10 px-5 text-sm font-semibold text-slate-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
                >
                  Resume
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
