import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const projects = [
  {
    id: "nourishly",
    index: "01",
    title: "Nourishly",
    type: "Meal Planning Application",
    status: "Capstone",
    description:
      "A responsive meal planning application with recipe discovery, weekly planning, grocery list flow, and dashboard-style user experience.",
    role: "Frontend Lead / UX Architect",
    stack: ["React", "Vite", "Tailwind", "AWS Amplify"],
    github: "#",
    demo: "#",
  },
  {
    id: "reelphrases",
    index: "02",
    title: "ReelPhrases",
    type: "Movie Quote Search Engine",
    status: "Featured",
    description:
      "A cinematic quote search tool built around movie dialogue discovery, search relevance, and clean interface design.",
    role: "Frontend / Full-Stack Developer",
    stack: ["React", "FastAPI", "SQLite FTS5", "Python"],
    github: "#",
    demo: "#",
  },
  {
    id: "filmroll-pro",
    index: "03",
    title: "MLP FilmRoll Pro",
    type: "E-commerce Interface",
    status: "Archived",
    description:
      "An e-commerce style web experience for film photography products with product cards, cart flow, filters, and promotional pricing.",
    role: "Frontend Developer",
    stack: ["JavaScript", "HTML", "CSS"],
    github: "#",
    demo: "#",
  },
];

export default function Project() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0D0F14] px-6 pb-24 pt-32 text-white md:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[-10%] h-[30rem] w-[30rem] bg-[#20808D]/10 blur-[120px]" />
        <div className="absolute bottom-[-12%] right-[-10%] h-[34rem] w-[34rem] bg-[#8B5CF6]/10 blur-[120px]" />
      </div>

      <section className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mb-12 border-b border-white/10 pb-8"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.45em] text-[#92DCE2]">
            Project Archive
          </p>

          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end">
            <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.07em] md:text-7xl lg:text-8xl">
              Selected
              <span className="block text-white/35">Systems</span>
            </h1>

            <p className="max-w-md text-sm leading-7 text-white/50">
              A collection of software projects focused on frontend systems,
              full-stack development, user-centered design, and polished product
              presentation.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-5">
          {projects.map((project, index) => (
            <ProjectArchiveCard
              key={project.id}
              project={project}
              delay={index * 0.08}
            />
          ))}
        </div>
        
      </section>
    </main>
  );
}

function ProjectArchiveCard({ project, delay }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className="group relative overflow-hidden border border-white/10 bg-[#151921]/85 transition hover:border-[#92DCE2]/35 hover:bg-[#171C23]"
    >
      <div className="grid gap-0 lg:grid-cols-[140px_1.2fr_0.9fr]">
        <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.025] p-5 lg:block lg:border-b-0 lg:border-r">
          <p className="text-6xl font-black tracking-[-0.09em] text-white/20">
            {project.index}
          </p>

          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#92DCE2] lg:mt-8">
            {project.status}
          </p>
        </div>

        <div className="p-6 md:p-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-white/35">
            {project.type}
          </p>

          <h2 className="mt-3 text-3xl font-black uppercase tracking-[-0.05em] text-white md:text-5xl">
            {project.title}
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/55">
            {project.description}
          </p>

          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-[#A78BFA]">
            Role / {project.role}
          </p>
        </div>

        <div className="border-t border-white/10 p-6 md:p-8 lg:border-l lg:border-t-0">
          <div className="mb-6 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="border border-white/10 bg-white/[0.035] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/50"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap gap-3">
            <Link
              to={`/projects/${project.id}`}
              className="border border-[#92DCE2]/30 bg-[#92DCE2]/10 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.22em] text-[#92DCE2] transition hover:bg-[#92DCE2]/15"
            >
              Case Study
            </Link>

            <a
              href={project.github}
              className="border border-white/10 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.22em] text-white/50 transition hover:border-white/25 hover:text-white"
            >
              GitHub
            </a>

            <a
              href={project.demo}
              className="border border-white/10 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.22em] text-white/50 transition hover:border-white/25 hover:text-white"
            >
              Demo
            </a>

          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#92DCE2] transition-all duration-500 group-hover:w-full" />
    </motion.article>
  );
}