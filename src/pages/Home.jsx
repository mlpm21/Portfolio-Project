import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const featuredProjects = [
  {
    id: "nourishly",
    index: "01",
    title: "Nourishly",
    type: "Meal Planning App",
    stack: "React / Vite / Tailwind",
    status: "STABLE",
  },
  {
    id: "reelphrases",
    index: "02",
    title: "ReelPhrases",
    type: "Movie Quote Search",
    stack: "React / API / UX",
    status: "ACTIVE",
  },
  {
    id: "portfolio",
    index: "03",
    title: "Portfolio System",
    type: "Personal Website",
    stack: "React / Tailwind / Framer",
    status: "PROTOTYPE",
  },
];


// Corner brackets for that industrial look
const CornerBrackets = () => (
  <>
    <div className="absolute left-0 top-0 h-4 w-4 border-l border-t border-white/20" />
    <div className="absolute right-0 top-0 h-4 w-4 border-r border-t border-white/20" />
    <div className="absolute bottom-0 left-0 h-4 w-4 border-l border-b border-white/20" />
    <div className="absolute bottom-0 right-0 h-4 w-4 border-r border-b border-white/20" />
  </>
);


export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0A0C10] text-white selection:bg-[#92DCE2] selection:text-black">
      {/* Background Layer: Grid & Ambient Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-5%] top-[-5%] h-[40rem] w-[40rem] bg-[#20808D]/10 blur-[140px] opacity-50" />
        <div className="absolute bottom-[-10%] right-[-5%] h-[40rem] w-[40rem] bg-[#8B5CF6]/10 blur-[140px] opacity-40" />
      </div>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-32 md:px-12 lg:pt-40">


        {/* HERO SECTION */}
        <div className="relative mb-20 border-l border-white/10 pl-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >

            <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-[#92DCE2]">
              System_Init // Deployment_2026
            </p>

            <h1 className="relative mt-6 font-black uppercase tracking-[-0.05em]">
              <span className="block text-5xl leading-[0.88] md:text-5xl lg:text-6xl xl:text-7xl">
                STRUCTURED FOR <br />
                THE FUTURE
              </span>

              <span className="mt-3 block text-2xl leading-[0.95] tracking-[-0.045em] text-white/10 md:text-2xl lg:text-3xl xl:text-4xl">
                DESIGNING WITH PURPOSE <br />
                DEVELOPING WITH INTENT
              </span>
            </h1>

            <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-center">
              <p className="max-w-md text-sm leading-relaxed text-white/40">
                Independent developer specializing in <span className="text-white/80">high-density frontend systems and technical aesthetics</span>.
                Architecting with a philosophy of <span className="text-[#92DCE2]/80 italic">Logic and Style</span>.
              </p>


              {/* Dynamic Status Bar */}
              <div className="flex items-center gap-4 border border-white/5 bg-white/[0.02] px-4 py-2">
                
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#92DCE2] opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#92DCE2]"></span>
                </span>

                <span className="font-mono text-[10px] uppercase tracking-widest text-white/60">
                  Status: Available_For_Hire
                </span>

              </div>
            </div>
          </motion.div>
        </div>


        {/* MAIN INTERFACE GRID */}
        <div className="grid gap-8 lg:grid-cols-12">

          {/* LEFT: IDENTITY MODULE */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative overflow-hidden border border-white/10 bg-[#121418] lg:col-span-7"
          >
            <CornerBrackets />


            {/* Module Header */}
            <div className="flex items-center justify-between border-b border-white/5 px-6 py-4">
              
              <div className="flex items-center gap-3">
                <div className="h-1 w-8 bg-[#92DCE2]" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/30 text-center">User Dossier</span>
              </div>

              <span className="font-mono text-[9px] text-white/20">REF: 8829-PX</span>

            </div>

            <div className="p-8 md:p-12">
              <div className="flex flex-col gap-10 md:flex-row md:items-end">
                
                <div className="relative h-40 w-40 shrink-0 border border-white/10 bg-black flex items-center justify-center">
                  <span className="text-6xl font-black italic text-white/10 select-none">ML</span>
                  <div className="absolute inset-4 border border-[#92DCE2]/20 opacity-40" />
                </div>

                <div className="space-y-6">
                  <h2 className="text-5xl font-black uppercase tracking-tighter">MINT Lapatrada Liawpairoj</h2>
                  
                  <div className="flex flex-wrap gap-2">
                    {["React", "TypeScript", "Tailwind", "Node.js"].map((skill) => (
                      
                      <span key={skill} className="border border-white/10 px-3 py-1 font-mono text-[9px] uppercase tracking-widest text-white/40">
                        {skill}
                      </span>

                    ))}
                  </div>

                </div>
              </div>

              <p className="mt-10 text-base leading-relaxed text-white/50">
                I translate complex technical requirements into <span className="text-white">polished digital products</span>. My workflow focuses on performance, scalability, and the fine details of human-computer interaction.
              </p>

              <div className="mt-12 flex gap-4">
                <Link to="/projects" className="group relative overflow-hidden bg-white px-8 py-4 text-black transition-transform active:scale-95">
                  <span className="relative z-10 font-mono text-[11px] font-black uppercase tracking-[0.2em]">Initialize Projects</span>
                </Link>

                <Link to="/contact" className="border border-white/10 px-8 py-4 font-mono text-[11px] font-black uppercase tracking-[0.2em] transition hover:bg-white/5">
                  Contact
                </Link>
              </div>

            </div>


            {/* Bottom Scrubber Strip */}
            <div className="flex h-1 bg-white/5">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="h-full bg-[#92DCE2]/40"
              />
            </div>

          </motion.article>


          {/* RIGHT: FEATURED WORK VERTICAL STRIP */}
          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-4 lg:col-span-5"
          >
            <div className="flex items-center justify-between px-2">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.4em] text-white/30">System_Preview</h3>
              <div className="h-px flex-1 mx-4 bg-white/10" />
              <span className="font-mono text-[11px] text-[#8B5CF6]">03/03</span>
            </div>

            <div className="space-y-4">
              {featuredProjects.map((project) => (
                <Link
                  key={project.id}
                  to={`/projects/${project.id}`}
                  className="group relative flex items-center justify-between border border-white/10 bg-[#E7E8E3] p-6 text-black transition-all hover:bg-white"
                >

                  <div className="absolute right-0 top-0 px-2 py-1 font-mono text-[8px] font-bold text-black/20">
                    {project.status}
                  </div>

                  <div className="flex items-center gap-6">
                    <span className="font-mono text-xl font-black opacity-20">{project.index}</span>
                    
                    <div>
                      <h4 className="text-xl font-black uppercase tracking-tight">{project.title}</h4>
                      <p className="font-mono text-[9px] uppercase tracking-widest opacity-40">{project.type}</p>
                    </div>

                  </div>

                  <span className="text-2xl opacity-20 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                    ↗
                  </span>

                </Link>
              ))}
            </div>


            {/* Footer Graphical Module */}
            <div className="mt-auto border border-white/5 bg-white/[0.02] p-6">
              
              <div className="flex gap-1 mb-4">
                {[...Array(24)].map((_, i) => (
                  <div key={i} className={`h-4 w-1 ${i % 4 === 0 ? 'bg-[#92DCE2]' : 'bg-white/5'}`} />
                ))}

              </div>

              <p className="font-mono text-[9px] uppercase tracking-widest text-white/20">
                Data latency: 14ms // Server: OS_PRIMARY // Access: Granted
              </p>
              
            </div>
          </motion.aside>

        </div>
      </section>
    </main>
  );
}