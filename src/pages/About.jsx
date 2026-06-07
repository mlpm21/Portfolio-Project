// v2
import { motion } from "framer-motion";

const strengths = [
  { label: "Frontend Architecture", desc: "Scalable component systems" },
  { label: "Responsive UI", desc: "Mobile-first, adaptive layouts" },
  { label: "User-Centered Design", desc: "UX-driven development" },
  { label: "API Integration", desc: "REST, data fetching, state mgmt" },
  { label: "Project Planning", desc: "Scoping, roadmaps, delivery" },
  { label: "Product Thinking", desc: "Feature prioritization & strategy" },
];

const directions = [
  {
    label: "Now",
    title: "Capstone & Portfolio",
    text: "Finishing the Nourishly capstone and building a portfolio that reflects real engineering depth.",
  },
  {
    label: "2026",
    title: "Entering Industry",
    text: "Targeting frontend and full-stack roles at product-focused companies where design and engineering overlap.",
  },
  {
    label: "Future",
    title: "Long-Term Vision",
    text: "Grow into a role that blends systems thinking, design quality, and product impact across the full stack.",
  },
];

const buildInterests = [
  {
    title: "Clean interfaces",
    text: "UIs that are minimal, precise, and satisfying to interact with — where every pixel earns its place.",
  },
  {
    title: "Useful tools",
    text: "Apps that solve real problems without getting in the way. Simple to learn, powerful to use.",
  },
  {
    title: "Full product flows",
    text: "From database schema to polished final screen — I enjoy owning the whole thing end to end.",
  },
];

const interests = [
  { label: "Photography", accent: "#F59E0B" },
  { label: "Design", accent: "#92DCE2" },
  { label: "Music", accent: "#A78BFA" },
  { label: "Cooking & Baking", accent: "#FB7185" },
  { label: "Sport", accent: "#4ADE80" },
];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: "easeOut" },
});

export default function About() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#0D0F14] px-4 pb-24 pt-28 text-white sm:px-6 md:px-8 md:pt-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-10%] top-[-10%] h-[34rem] w-[34rem] bg-[#20808D]/10 blur-[120px]" />
        <div className="absolute bottom-[-12%] left-[-10%] h-[30rem] w-[30rem] bg-[#8B5CF6]/10 blur-[120px]" />
      </div>

      <section className="relative z-10 mx-auto max-w-7xl space-y-16 md:space-y-20">

        {/* PAGE HEADER */}
        <motion.div {...fade(0)} className="border-b border-white/10 pb-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.45em] text-[#92DCE2]">
            Personnel Dossier
          </p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end">
            <h1 className="max-w-4xl text-4xl font-black uppercase leading-[0.9] tracking-[-0.07em] sm:text-5xl md:text-7xl lg:text-8xl">
              About
              <span className="block text-white/35">Profile</span>
            </h1>
            <p className="max-w-md text-sm leading-7 text-muted">
              A look at my background, interests, strengths, and how I approach
              building software products.
            </p>
          </div>
        </motion.div>

        {/* INTRO: profile summary + personal story — 40 / 60 */}
        <motion.div
          {...fade(0.08)}
          className="grid gap-6 lg:grid-cols-[2fr_3fr] lg:items-stretch"
        >
          <div className="relative flex flex-col border border-white/10 bg-[#151921]/85 p-6 md:p-7 lg:p-8">
            <span className="absolute left-0 top-0 h-3.5 w-3.5 border-l border-t border-[#92DCE2]/35" />
            <span className="absolute right-0 top-0 h-3.5 w-3.5 border-r border-t border-white/15" />
            <span className="absolute bottom-0 left-0 h-3.5 w-3.5 border-b border-l border-white/10" />
            <span className="absolute bottom-0 right-0 h-3.5 w-3.5 border-b border-r border-white/10" />

            <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#92DCE2]">
              Identity / Active
            </p>
            <div className="mt-5">
              <p className="text-3xl font-black uppercase tracking-[-0.06em] leading-tight md:text-4xl">
                Mint Lapatrada
              </p>
              <p className="mt-2 font-mono text-[9px] uppercase leading-relaxed tracking-[0.22em] text-white/35 md:text-[10px]">
                CS Student · Frontend & Full-Stack · UX-Minded
              </p>
            </div>
            <div className="mt-auto grid gap-2.5 pt-8">
              {[
                { label: "Degree", value: "B.S. Computer Science" },
                { label: "School", value: "Oregon State University" },
                { label: "Status", value: "Graduating 2026" },
              ].map((item) => (
                <InfoRow key={item.label} label={item.label} value={item.value} />
              ))}
            </div>
          </div>

          <div className="relative flex flex-col border border-white/10 bg-[#151921]/85 p-6 md:p-8 lg:p-9">
            <span className="absolute left-0 top-0 h-3.5 w-3.5 border-l border-t border-[#92DCE2]/35" />
            <span className="absolute right-0 top-0 h-3.5 w-3.5 border-r border-t border-white/15" />
            <span className="absolute bottom-0 right-0 h-3.5 w-3.5 border-b border-r border-white/10" />

            <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#92DCE2]">
              Background
            </p>
            <h2 className="mt-4 max-w-2xl text-xl font-black uppercase tracking-[-0.05em] leading-tight md:text-2xl">
              I build with code, design, and product thinking.
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-muted">
              <p>
                I'm a Computer Science student at Oregon State University finishing my
                degree in 2026. My work lives at the intersection of engineering and
                design — I care about how things are built, how they look, and how
                they feel to use.
              </p>
              <p>
                Over the past few years I've gone from learning the basics to leading
                frontend and UX direction on real capstone projects. I find the most
                satisfying work is the kind where a clear technical decision also
                produces a better user experience.
              </p>
              <p>
                Outside the classroom I'm drawn to design systems, clean typography,
                and building tools that feel intuitive without trying too hard.
              </p>
            </div>
          </div>
        </motion.div>

        {/* EDUCATION / HONORS / LEADERSHIP / LEARNING */}
        <motion.div {...fade(0.16)} className="space-y-5">
          <SectionLabel color="teal">Credentials</SectionLabel>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          <InfoCard
            label="Education"
            accent="teal"
            items={[
              { label: "Degree", value: "B.S. Computer Science" },
              { label: "School", value: "Oregon State University" },
              { label: "Graduating", value: "2026" },
            ]}
          />
          <InfoCard
            label="Honors"
            accent="teal"
            items={[
              { label: "Recognition", value: "Dean's List" },
              { label: "Award", value: "Merit Scholarship" },
            ]}
          />
          <InfoCard
            label="Leadership"
            accent="purple"
            items={[
              { label: "Club", value: "Women in Tech" },
              { label: "Role", value: "CS Study Group Co-org" },
            ]}
          />
          <InfoCard
            label="Certificates & Learning"
            accent="purple"
            items={[
              { label: "React & Vite", value: "In Practice" },
              { label: "Tailwind CSS", value: "Advanced" },
              { label: "UI / UX", value: "Self-Directed" },
            ]}
          />
          </div>
        </motion.div>

        {/* CORE STRENGTHS: 3-col card grid */}
        <motion.div {...fade(0.22)}>
          <SectionLabel color="teal">Core Strengths</SectionLabel>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
            {strengths.map((item, i) => (
              <div
                key={item.label}
                className="flex min-h-[108px] flex-col border border-white/10 bg-[#151921]/85 p-5"
              >
                <span className="font-mono text-[10px] font-black text-[#92DCE2]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-sm font-black uppercase tracking-[-0.02em]">
                  {item.label}
                </h3>
                <p className="mt-1 text-xs leading-5 text-muted-soft">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* INTERESTS */}
        <motion.div {...fade(0.28)}>
          <SectionLabel color="purple">Interests</SectionLabel>
          <div className="mt-5 grid grid-cols-3 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-5 lg:gap-4">
            {interests.map(({ label, accent }) => (
              <div
                key={label}
                className="flex min-h-[52px] items-center justify-center border px-2 py-2.5 text-center transition duration-300 hover:brightness-110 sm:min-h-[72px] sm:px-3 sm:py-4 lg:min-h-[80px] lg:px-4"
                style={{
                  borderColor: `${accent}45`,
                  backgroundColor: `${accent}14`,
                }}
              >
                <span
                  className="font-mono text-[9px] uppercase leading-tight tracking-[0.1em] sm:text-xs sm:leading-snug sm:tracking-[0.14em] lg:text-[13px] lg:tracking-[0.16em]"
                  style={{ color: accent }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CURRENT DIRECTION: 3 compact cards */}
        <motion.div {...fade(0.32)}>
          <SectionLabel color="purple">Current Direction</SectionLabel>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {directions.map((item) => (
              <div
                key={item.title}
                className="border border-white/10 bg-[#151921]/85 p-6"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#A78BFA]">
                  {item.label}
                </p>
                <h3 className="mt-3 text-base font-black uppercase tracking-[-0.03em]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* WHAT I ENJOY BUILDING */}
        <motion.div
          {...fade(0.38)}
          className="border border-white/10 bg-[#E7E8E3] p-8 text-[#11151B]"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.45em] text-black/40">
            What I Enjoy Building
          </p>
          <h2 className="mt-4 text-2xl font-black uppercase tracking-[-0.04em]">
            Software that feels intentional.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {buildInterests.map((item) => (
              <div
                key={item.title}
                className="border border-black/10 bg-white/50 p-5"
              >
                <h3 className="text-sm font-black uppercase tracking-[-0.02em]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-black/55">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

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
      <p className="text-right text-sm font-medium text-muted-strong">{value}</p>
    </div>
  );
}

function InfoCard({ label, accent, items }) {
  const accentClass =
    accent === "teal" ? "text-[#92DCE2]" : "text-[#A78BFA]";
  return (
    <div className="flex h-full min-h-[168px] flex-col border border-white/10 bg-[#151921]/85 p-5">
      <p className={`font-mono text-[10px] uppercase tracking-[0.35em] ${accentClass}`}>
        {label}
      </p>
      <div className="mt-5 space-y-3">
        {items.map((item, i) => (
          <div
            key={i}
            className="border-b border-white/[0.06] pb-3 last:border-0 last:pb-0"
          >
            <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/30">
              {item.label}
            </p>
            <p className="mt-1 text-sm font-semibold text-muted-strong">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionLabel({ color, children }) {
  const lineColor =
    color === "teal" ? "text-[#92DCE2]" : "text-[#A78BFA]";
  return (
    <div className="flex items-center gap-4">
      <p className={`font-mono text-[10px] uppercase tracking-[0.45em] ${lineColor}`}>
        {children}
      </p>
      <div className="h-px flex-1 bg-white/10" />
    </div>
  );
}