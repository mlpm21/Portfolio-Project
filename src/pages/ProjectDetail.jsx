import { useParams, Link } from 'react-router-dom';

export default function ProjectDetail() {
  const { projectId } = useParams();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0D0F14] px-6 pb-24 pt-32 text-white md:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[-10%] h-[34rem] w-[34rem] bg-[#20808D]/10 blur-[120px]" />
        <div className="absolute bottom-[-12%] right-[-10%] h-[30rem] w-[30rem] bg-[#8B5CF6]/10 blur-[120px]" />
      </div>

      <section className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 border-b border-white/10 pb-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.35em] text-white/40 transition hover:text-[#92DCE2]"
          >
            ← Project Archive
          </Link>

          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.45em] text-[#92DCE2]">
            Case Study
          </p>

          <h1 className="mt-5 text-5xl font-black uppercase leading-[0.9] tracking-[-0.07em] md:text-7xl lg:text-8xl">
            {projectId}
            <span className="block text-white/35">Detail</span>
          </h1>
        </div>

        <div className="border border-white/10 bg-[#121418] p-8 md:p-12">
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-white/30">
            Case study content coming soon.
          </p>
        </div>
        
      </section>
    </main>
  );
}
