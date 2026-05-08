import { motion } from 'framer-motion';

export default function ProjectCard({ title, description, tags, delay = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className="group relative overflow-hidden border border-white/10 bg-[#121418] transition hover:border-[#92DCE2]/30 hover:bg-[#15191f]"
    >
      <div className="space-y-5 p-6 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-black uppercase tracking-tight text-white">
            {title}
          </h3>
          <span className="shrink-0 font-mono text-lg text-white/20 transition group-hover:translate-x-0.5 group-hover:text-white/50">
            ↗
          </span>
        </div>

        <p className="text-sm leading-7 text-white/50">{description}</p>

        <div className="flex flex-wrap gap-2 pt-1">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="border border-white/10 bg-white/[0.035] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#92DCE2] transition-all duration-500 group-hover:w-full" />
    </motion.article>
  );
}
