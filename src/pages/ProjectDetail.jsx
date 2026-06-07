import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { getProjectById } from "../data/projects";

const CornerBrackets = () => (
  <>
    <div className="absolute left-0 top-0 h-4 w-4 border-l border-t border-white/20" />
    <div className="absolute right-0 top-0 h-4 w-4 border-r border-t border-white/20" />
    <div className="absolute bottom-0 left-0 h-4 w-4 border-l border-b border-white/20" />
    <div className="absolute bottom-0 right-0 h-4 w-4 border-r border-b border-white/20" />
  </>
);

function accentAlpha(hex, a) {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${a})`;
}

function NotFound({ projectId }) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0D0F14] px-6 pb-24 pt-32 text-white md:px-8">
      <section className="relative z-10 mx-auto max-w-7xl">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.35em] text-white/40 transition hover:text-[#92DCE2]"
        >
          ← Project Archive
        </Link>
        <h1 className="mt-10 text-4xl font-black uppercase tracking-tight">Project not found</h1>
        <p className="mt-4 font-mono text-sm text-white/40">
          No entry for <span className="text-white/60">{projectId}</span>.
        </p>
      </section>
    </main>
  );
}

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = getProjectById(projectId);

  if (!project) {
    return <NotFound projectId={projectId} />;
  }

  const {
    index,
    title,
    type,
    status,
    tagline,
    role,
    stack,
    theme,
    summary,
    problem,
    keyFeature,
    fullDescription,
    features,
    outcome,
    github,
    demo,
    image,
    screenshots,
  } = project;

  const description =
    fullDescription ||
    summary ||
    "Case study content is being written for this project.";

  const paragraphs = description.split("\n\n").filter(Boolean);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#0D0F14] px-4 pb-24 pt-28 text-white sm:px-6 md:px-8 md:pt-32">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-[-10%] top-[-10%] h-[34rem] w-[34rem] blur-[120px]"
          style={{ backgroundColor: accentAlpha(theme, 0.12) }}
        />
        <div className="absolute bottom-[-12%] right-[-10%] h-[30rem] w-[30rem] bg-[#8B5CF6]/10 blur-[120px]" />
      </div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto max-w-7xl"
      >
        {/* Header */}
        <div className="mb-12 border-b border-white/10 pb-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.35em] text-white/40 transition hover:text-[#92DCE2]"
          >
            ← Project Archive
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-white/30">
              Project {index}
            </span>
            <span
              className="border px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider"
              style={{ borderColor: accentAlpha(theme, 0.4), color: theme }}
            >
              {status}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-white/25">
              {type}
            </span>
          </div>

          <h1 className="mt-5 max-w-4xl break-words text-3xl font-black uppercase leading-[0.92] tracking-[-0.07em] sm:text-4xl md:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">{tagline}</p>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-white/30">
            {role}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="relative overflow-hidden border border-white/10 bg-[#121418] p-5 sm:p-6 md:p-8 lg:sticky lg:top-28">
              <CornerBrackets />

              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">
                Stack
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className="border px-2.5 py-1 font-mono text-[9px] uppercase tracking-wide text-white/55"
                    style={{
                      borderColor: accentAlpha(theme, 0.35),
                      backgroundColor: accentAlpha(theme, 0.08),
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">
                Links
              </p>
              <div className="mt-4 flex flex-col gap-2.5">
                {github && github !== "#" && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between border border-white/10 px-4 py-3 text-sm text-white/55 transition hover:border-white/20 hover:text-white"
                  >
                    GitHub <span className="opacity-40">↗</span>
                  </a>
                )}
                {demo && demo !== "#" && (
                  <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between border border-white/10 px-4 py-3 text-sm text-white/55 transition hover:border-white/20 hover:text-white"
                  >
                    Live demo <span className="opacity-40">↗</span>
                  </a>
                )}
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="space-y-8 lg:col-span-8">
            <article className="relative overflow-hidden border border-white/10 bg-[#121418] p-5 sm:p-6 md:p-10">
              <CornerBrackets />
              <p
                className="font-mono text-[10px] uppercase tracking-[0.28em]"
                style={{ color: accentAlpha(theme, 0.85) }}
              >
                Overview
              </p>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-muted">
                {paragraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </article>

            <div className="grid gap-4 sm:grid-cols-2">
              <DetailBlock label="Problem" text={problem} theme={theme} />
              <DetailBlock label="Key capability" text={keyFeature} theme={theme} />
            </div>

            {features?.length > 0 && (
              <section className="border border-white/10 bg-[#121418] p-6 md:p-10">
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/30">
                  Features
                </p>
                <ul className="mt-6 space-y-5">
                  {features.map(({ title: featTitle, text }) => (
                    <li
                      key={featTitle}
                      className="border-l-2 pl-4"
                      style={{ borderColor: accentAlpha(theme, 0.5) }}
                    >
                      <p className="font-semibold text-white">{featTitle}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-soft">{text}</p>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {outcome && (
              <section className="border border-white/10 bg-[#121418] p-6 md:p-10">
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/30">
                  Outcome
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted">{outcome}</p>
              </section>
            )}

            <section>
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.28em] text-white/30">
                Preview
              </p>
              <div className="overflow-hidden border border-white/10 bg-[#08090D]">
                {image ? (
                  <img
                    src={image}
                    alt={`${title} preview`}
                    className="aspect-[16/10] w-full object-cover"
                  />
                ) : (
                  <div className="flex aspect-[16/10] items-center justify-center">
                    <p className="font-mono text-sm text-white/25">Screenshot / visual</p>
                  </div>
                )}
              </div>
              {screenshots?.length > 0 && (
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {screenshots.map((src, i) => (
                    <img
                      key={src}
                      src={src}
                      alt={`${title} screenshot ${i + 1}`}
                      className="aspect-[16/10] w-full border border-white/10 object-cover"
                    />
                  ))}
                </div>
              )}
            </section>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

function DetailBlock({ label, text, theme }) {
  if (!text) return null;

  return (
    <div className="rounded-sm border border-white/[0.07] bg-[#121418] p-5">
      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/30">
        {label}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted-soft">{text}</p>
    </div>
  );
}
