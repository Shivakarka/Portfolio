"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, FileText, MapPin } from "lucide-react";
import Image from "next/image";
import { profile, socials } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      {/* Backdrop */}
      <div className="bg-grid absolute inset-0" aria-hidden />
      <div
        className="absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full opacity-25 blur-[120px]"
        style={{
          background:
            "linear-gradient(100deg, #22d3ee 0%, #818cf8 50%, #e879f9 100%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:pb-28 lg:pt-20">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-1.5 text-sm font-medium text-cyan-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            Available for new opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl"
          >
            Hi, I&apos;m Shiva Karka.
            <br />
            <span className="text-gradient">{profile.tagline}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            Full-stack developer based in Hyderabad with 6+ years in tech —
            from process excellence at Cognizant to shipping MERN & Next.js
            products. Recently AWS Certified (CLF-C02).
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-300"
            >
              View My Work
              <ArrowDown
                size={16}
                className="transition-transform group-hover:translate-y-0.5"
              />
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/5"
            >
              <FileText size={16} />
              Resume
              <ArrowUpRight size={16} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 flex items-center gap-5"
          >
            <span className="inline-flex items-center gap-1.5 text-sm text-slate-500">
              <MapPin size={14} />
              {profile.location}
            </span>
            <span className="h-4 w-px bg-white/15" />
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="text-slate-400 transition-colors hover:text-cyan-300"
                >
                  <s.icon size={19} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Photo card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div
            className="absolute -inset-3 rounded-[28px] opacity-40 blur-2xl"
            style={{
              background:
                "linear-gradient(140deg, #22d3ee 0%, #818cf8 60%, #e879f9 100%)",
            }}
            aria-hidden
          />
          <div className="glass relative overflow-hidden rounded-[24px]">
            <div className="relative aspect-[3/3.4] w-full">
              <Image
                src="/shiva.jpg"
                alt="Shiva Karka"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="flex items-center justify-between px-5 py-4">
              <div>
                <p className="font-display text-sm font-semibold text-white">
                  {profile.name}
                </p>
                <p className="text-xs text-slate-400">{profile.role}</p>
              </div>
              <span className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                AWS Certified
              </span>
            </div>
          </div>

          {/* Floating badges */}
          <div className="glass absolute -left-4 top-8 hidden rounded-2xl px-4 py-3 sm:block lg:-left-10">
            <p className="font-display text-xl font-bold text-white">MERN</p>
            <p className="text-xs text-slate-400">Full-stack apps</p>
          </div>
          <div className="glass absolute -right-4 bottom-24 hidden rounded-2xl px-4 py-3 sm:block lg:-right-8">
            <p className="font-display text-xl font-bold text-white">Next.js</p>
            <p className="text-xs text-slate-400">TypeScript builds</p>
          </div>
        </motion.div>
      </div>

      {/* Stats strip */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto grid max-w-6xl grid-cols-3 divide-x divide-white/10 px-5 sm:px-8">
          {profile.stats.map((s) => (
            <div key={s.label} className="px-4 py-6 text-center sm:py-8">
              <p className="font-display text-2xl font-bold text-white sm:text-3xl">
                {s.value}
              </p>
              <p className="mt-1 text-xs text-slate-400 sm:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
