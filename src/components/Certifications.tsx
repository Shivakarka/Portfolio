import { BadgeCheck, Eye } from "lucide-react";
import { certifications } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

function ViewCredentialButton({
  url,
  light = false,
}: {
  url: string;
  light?: boolean;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label="View certificate"
      title="View certificate"
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${
        light
          ? "bg-cyan-400 text-slate-950 hover:bg-cyan-300 hover:shadow-[0_0_20px_-4px_rgba(34,211,238,0.5)]"
          : "border border-white/15 text-slate-300 hover:border-cyan-400/40 hover:text-cyan-300"
      }`}
    >
      <Eye size={13} />
      View
    </a>
  );
}

export default function Certifications() {
  const [top, ...rest] = certifications;
  return (
    <section id="certifications" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Certifications"
          title="Credentials & education"
          description="Recently AWS Certified — plus frontend fellowships and a B.Tech foundation."
        />

        {/* Featured AWS cert */}
        <Reveal className="mt-10">
          <div className="border-gradient relative overflow-hidden p-7 sm:p-9">
            <div
              className="absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-30 blur-[80px]"
              style={{ background: "linear-gradient(140deg,#22d3ee,#818cf8)" }}
              aria-hidden
            />
            <div className="relative flex flex-wrap items-center gap-6">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-cyan-400 text-slate-950 shadow-[0_0_30px_-6px_rgba(34,211,238,0.5)]">
                <top.icon size={30} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="inline-flex items-center gap-1.5 rounded-full bg-cyan-400/15 px-3 py-1 text-xs font-semibold text-cyan-300">
                  <BadgeCheck size={13} />
                  Newest certification · {top.date}
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                    {top.title}
                  </h3>
                  {top.credentialUrl && (
                    <ViewCredentialButton url={top.credentialUrl} light />
                  )}
                </div>
                <p className="mt-1 text-sm text-slate-400">
                  {top.issuer} — validates cloud concepts, AWS services,
                  security, architecture and pricing.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <div className="glass glass-hover flex h-full items-start gap-4 rounded-2xl p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-400/10 text-indigo-300">
                  <c.icon size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-sm font-semibold leading-snug text-white">
                      {c.title}
                    </h3>
                    {c.credentialUrl && (
                      <ViewCredentialButton url={c.credentialUrl} />
                    )}
                  </div>
                  <p className="mt-1 text-xs text-slate-400">
                    {c.issuer} · {c.date}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
