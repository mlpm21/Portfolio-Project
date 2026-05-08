// ver 3 (LOCKED - FINAL)

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const navLinks = [
  { label: "01. Home", path: "/" },
  { label: "02. About", path: "/about" },
  { label: "03. Projects", path: "/projects" },
  { label: "04. Contact", path: "/contact" },
];


const socialLinks = [
  { label: "Email", href: "mailto:liaw.lapat@gmail.com" },
  { label: "GitHub", href: "https://github.com/mlpm21" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/lapatrada-liawpairoj/" }
];


export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#0D0F14] text-white">
      
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-64 w-64 bg-[#20808D]/[0.08] blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-64 w-64 bg-[#8B5CF6]/[0.08] blur-[100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-16"
      >

        {/* MAIN GRID */}
        <div className="grid gap-12 border-b border-white/10 pb-10 md:grid-cols-[1.6fr_1fr_1fr] md:gap-10">

          {/* BRAND BLOCK */}
          <div>
            <div className="mb-3 flex items-center gap-2.5">
              <div className="h-px w-5 bg-[#92DCE2]/50" />
              
              <span className="font-mono text-[9px] uppercase tracking-[0.45em] text-[#92DCE2]/60">
                Portfolio_SYS · 2026
              </span>
            </div>

            <Link to="/" className="group inline-block">
              <span className="text-3xl font-black tracking-tight text-white transition-colors group-hover:text-[#92DCE2]">
                ML<span className="text-[#92DCE2]">.</span>
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/45">
              A digital archive of architectural progress, technical solutions,
              development process, and software growth.
            </p>

            <div className="mt-6 flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-[#92DCE2]" />
              
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">
                Portfolio System / Active
              </span>

            </div>
          </div>


          {/* NAVIGATION */}
          <div>
            <div className="mb-5 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#92DCE2]" />
              
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.35em] text-[#92DCE2]">
                Navigation
              </p>
            </div>

            <div className="flex flex-col gap-3.5">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-white/50 transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>


          {/* SIGNAL ACTIVE (CONTACT LINK) */}
          <div>
            <div className="mb-5 flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#A78BFA]" />
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.35em] text-[#A78BFA]">
                Signal: Active
              </p>
            </div>

            <div className="flex flex-col">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label === "Email" ? undefined : "_blank"}
                  rel={link.label === "Email" ? undefined : "noopener noreferrer"}
                  className="group flex items-center justify-between border-b border-white/[0.07] py-3 text-sm text-white/50 transition-colors duration-200 last:border-b-0 hover:text-white"
                >
                  <span>{link.label}</span>
                  <span className="text-[#A78BFA]/40 transition-all duration-200 group-hover:text-[#A78BFA] group-hover:translate-x-0.5">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>


        {/* BOTTOM STRIP */}
        <div className="flex flex-col justify-between gap-3 pt-7 font-mono text-[9px] uppercase tracking-[0.28em] text-white/25 md:flex-row md:items-center">
          <p>© 2026 MLP | All rights reserved.</p>
          <p>Built with React / Vite / Tailwind</p>
        </div>
      </motion.div>
    </footer>
  );
}
