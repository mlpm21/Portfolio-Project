/**
 * One archive block on /projects — uniform grid + section card style.
 */

import { motion } from "framer-motion";
import ProjectCard from "../ProjectCard";

const CornerBrackets = () => (
  <>
    <div className="absolute left-0 top-0 h-4 w-4 border-l border-t border-white/20" />
    <div className="absolute right-0 top-0 h-4 w-4 border-r border-t border-white/20" />
    <div className="absolute bottom-0 left-0 h-4 w-4 border-l border-b border-white/20" />
    <div className="absolute bottom-0 right-0 h-4 w-4 border-r border-b border-white/20" />
  </>
);

export default function ProjectWorkSection({ section, items = [], delay = 0 }) {
  const count = items.length;

  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
      aria-labelledby={`section-${section.id}`}
    >
      <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="flex gap-5 md:gap-8">
          <div className="flex flex-col items-center gap-2">
            <span
              className="font-mono text-4xl font-light leading-none md:text-5xl"
              style={{ color: `${section.accent}18` }}
            >
              {section.index}
            </span>
            <div className="h-full min-h-[3rem] w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />
          </div>
          <div>
            <p
              className="font-mono text-[10px] uppercase tracking-[0.35em]"
              style={{ color: section.accent }}
            >
              {section.descriptor}
            </p>
            <h2
              id={`section-${section.id}`}
              className="mt-2 text-2xl font-bold uppercase tracking-tight text-white md:text-3xl"
            >
              {section.title}
            </h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-soft">
              {section.subtitle}
            </p>
          </div>
        </div>

        <div
          className="flex items-center gap-3 self-start border border-white/10 bg-white/[0.02] px-4 py-2.5 md:self-auto"
          style={{ borderColor: `${section.accent}25` }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: section.accent }}
          />
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/45">
            {count} {count === 1 ? "entry" : "entries"}
          </span>
        </div>
      </div>

      <div
        className="relative overflow-hidden border border-white/10 bg-[#0E1016]/80"
        style={{ boxShadow: `inset 3px 0 0 0 ${section.accent}55` }}
      >
        <CornerBrackets />

        {count === 0 ? (
          <EmptySection section={section} />
        ) : (
          <UniformProjectGrid items={items} cardStyle={section.cardStyle} />
        )}
      </div>
    </motion.section>
  );
}

function EmptySection({ section }) {
  return (
    <div className="grid gap-4 p-6 md:grid-cols-2 md:p-8">
      {[1, 2].map((n) => (
        <div
          key={n}
          className="flex min-h-[140px] flex-col justify-center border border-dashed border-white/10 bg-white/[0.02] px-6 py-8"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/25">
            Slot {section.index}.{n}
          </p>
          <p className="mt-2 text-sm text-white/35">Case study in progress</p>
        </div>
      ))}
    </div>
  );
}

/** Equal tiles — one card style per section */
function UniformProjectGrid({ items, cardStyle }) {
  const isPlate = cardStyle === "plate";
  const soloPlate = isPlate && items.length === 1;

  if (soloPlate) {
    return (
      <div className="flex justify-center px-5 py-8 md:px-8 md:py-10">
        <ProjectCard project={items[0]} cardStyle={cardStyle} delay={0} />
      </div>
    );
  }

  return (
    <div
      className={`grid items-stretch gap-4 px-4 py-6 sm:gap-6 sm:px-5 sm:py-7 md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:px-8 md:py-9 ${
        isPlate ? "justify-items-center" : ""
      }`}
    >
      {items.map((project, i) => (
        <ProjectCard
          key={project.id}
          project={project}
          cardStyle={cardStyle}
          delay={i * 0.06}
        />
      ))}
    </div>
  );
}
