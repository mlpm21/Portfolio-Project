/**
 * Final projects page.
 * Web = SpecTag cards · UX = Plate cards (uniform grid per section).
 */

import { motion } from "framer-motion";
import ProjectWorkSection from "../components/projects/ProjectWorkSection";
import { PROJECT_SECTIONS, projectsBySection } from "../data/projects";

const CornerBrackets = () => (
  <>
    <div className="absolute left-0 top-0 h-4 w-4 border-l border-t border-white/20" />
    <div className="absolute right-0 top-0 h-4 w-4 border-r border-t border-white/20" />
    <div className="absolute bottom-0 left-0 h-4 w-4 border-l border-b border-white/20" />
    <div className="absolute bottom-0 right-0 h-4 w-4 border-r border-b border-white/20" />
  </>
);

export default function Project() {
  return (
    <main className="relative min-h-screen bg-[#0A0C10] px-4 pb-28 pt-28 text-white selection:bg-[#92DCE2] selection:text-black sm:px-6 sm:pt-32 lg:px-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-5%] top-[-5%] h-[40rem] w-[40rem] bg-[#20808D]/10 opacity-50 blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-5%] h-[40rem] w-[40rem] bg-[#8B5CF6]/10 opacity-40 blur-[140px]" />
      </div>

      <section className="relative z-10 mx-auto max-w-7xl">
        {/* Page header  */}
        <div className="relative mb-12 border-l border-white/10 pl-4 sm:mb-16 sm:pl-8">
          <CornerBrackets />

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="border-b border-white/10 pb-8"
          >
            <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-[#92DCE2] sm:text-[10px] sm:tracking-[0.5em]">
              FEATURED WORK
            </p>
            <div className="mt-4 grid gap-6 sm:mt-6 sm:gap-8 lg:grid-cols-[1fr_420px] lg:items-end">
              <h1 className="max-w-4xl font-black uppercase leading-[0.9] tracking-[-0.07em]">
                <span className="block text-4xl sm:text-5xl md:text-7xl lg:text-8xl">Selected</span>
                <span className="mt-1 block text-4xl text-white/35 sm:text-5xl md:text-7xl lg:text-8xl">
                  Projects
                </span>
              </h1>
              <p className="max-w-md text-sm leading-relaxed text-muted-soft">
                A focused archive of product work — from interface systems to
                full-stack builds, including work in progress.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── Section index strip ─ */}
        <nav
          aria-label="Project sections"
          className="mb-14 flex flex-wrap gap-3 border-y border-white/[0.06] py-4"
        >
          {PROJECT_SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`#section-${section.id}`}
              className="group flex items-center gap-3 border border-white/10 bg-white/[0.02] px-4 py-2.5 transition hover:border-white/20"
            >
              <span
                className="font-mono text-[10px] text-white/30 transition group-hover:text-white/50"
              >
                {section.index}
              </span>
              <span className="text-xs font-medium uppercase tracking-wide text-white/55 group-hover:text-white/80">
                {section.title}
              </span>
              <span
                className="h-px w-6 opacity-50"
                style={{ backgroundColor: section.accent }}
              />
            </a>
          ))}
        </nav>

        {/* ── Work sections ── */}
        <div className="space-y-20 md:space-y-28">
          {PROJECT_SECTIONS.map((section, i) => (
            <ProjectWorkSection
              key={section.id}
              section={section}
              items={projectsBySection(section.id)}
              delay={i * 0.08}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
