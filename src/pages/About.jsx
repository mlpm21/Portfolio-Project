import { motion } from "framer-motion";

const profileStats = [
  { label: "Degree", value: "B.S. Computer Science" },
  { label: "School", value: "Oregon State University" },
  { label: "Focus", value: "Frontend / Full-Stack / UX" },
  { label: "Status", value: "Graduating 2026" },
];

const strengths = [
  "Frontend architecture",
  "Responsive UI systems",
  "User-centered design",
  "Project planning",
  "API integration",
  "Product thinking",
];

const timeline = [
  {
    year: "2026",
    title: "Portfolio Project",
    text: "Designing and building a personal portfolio as a polished, recruiter-facing web experience.",
  },
  {
    year: "2025",
    title: "Nourishly Capstone",
    text: "Led frontend and UX direction for a meal planning application with recipe, dashboard, and grocery list flows.",
  },
  {
    year: "Now",
    title: "Career Direction",
    text: "Focused on software engineering roles that combine clean development, product thinking, and strong interface design.",
  },
];

export default function About() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0D0F14] px-6 pb-24 pt-32 text-white md:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-10%] top-[-10%] h-[34rem] w-[34rem] bg-[#20808D]/10 blur-[120px]" />
        <div className="absolute bottom-[-12%] left-[-10%] h-[30rem] w-[30rem] bg-[#8B5CF6]/10 blur-[120px]" />
      </div>

      <section className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mb-12 border-b border-white/10 pb-8"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.45em] text-[#92DCE2]">
            Personnel Dossier
          </p>

          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end">
            <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.07em] md:text-7xl lg:text-8xl">
              About
              <span className="block text-white/35">Profile</span>
            </h1>

            <p className="max-w-md text-sm leading-7 text-white/50">
              A quick look at my background, interests, strengths, and the way I
              approach building software products.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          {/* profile card */}
          <motion.article
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
            className="relative overflow-hidden border border-white/10 bg-[#151921]/85"
          >
            <div className="border-b border-white/10 bg-white/[0.025] px-5 py-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-white/40">
                Identity File / Active
              </p>
            </div>

            <div className="p-6 md:p-8">
              <div className="mb-8 flex aspect-[4/3] items-center justify-center border border-white/10 bg-[#0D0F14]">
                <div className="text-center">
                  <p className="text-7xl font-black tracking-[-0.08em] text-white">
                    ML
                  </p>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.32em] text-white/35">
                    profile image placeholder
                  </p>
                </div>
              </div>

              <div className="grid gap-3">
                {profileStats.map((item) => (
                  <InfoRow key={item.label} label={item.label} value={item.value} />
                ))}
              </div>
            </div>
          </motion.article>

          {/* main content */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16, ease: "easeOut" }}
            className="grid gap-5"
          >
            <section className="border border-white/10 bg-[#151921]/85 p-6 md:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#92DCE2]">
                Background
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase tracking-[-0.05em] md:text-5xl">
                I build with code, design, and product thinking.
              </h2>

              <div className="mt-6 space-y-5 text-sm leading-7 text-white/60">
                <p>
                  I’m a Computer Science student at Oregon State University with
                  an interest in frontend development, full-stack systems, and
                  user-centered design. I enjoy building products that are not
                  only functional, but also clear, polished, and easy to use.
                </p>

                <p>
                  My work often sits between engineering and design: planning
                  user flows, structuring components, connecting APIs, improving
                  responsive layouts, and turning project ideas into usable
                  interfaces.
                </p>

                <p className="text-white/35">
                  Note: will edited later once the final bio is
                  locked.
                </p>
              </div>
            </section>

            <section className="grid gap-5 md:grid-cols-2">
              <div className="border border-white/10 bg-[#E7E8E3] p-6 text-[#11151B]">
                <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-black/40">
                  Core Strengths
                </p>

                <div className="mt-6 grid gap-3">
                  {strengths.map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-4 border border-black/10 bg-white/45 p-3"
                    >
                      <span className="font-mono text-xs font-black text-[#20808D]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-white/10 bg-[#151921]/85 p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#A78BFA]">
                  Current Direction
                </p>

                <div className="mt-6 space-y-5">
                  {timeline.map((item) => (
                    <div key={item.title} className="border-l border-white/10 pl-4">
                      <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/30">
                        {item.year}
                      </p>
                      <h3 className="mt-2 text-lg font-black uppercase tracking-[-0.04em]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-white/50">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 border border-white/10 bg-white/[0.025] px-4 py-3">
      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/35">
        {label}
      </p>
      <p className="text-right text-sm font-medium text-white/75">{value}</p>
    </div>
  );
}