import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";


export default function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home", id: "01" },
    { path: "/about", label: "About", id: "02" },
    { path: "/projects", label: "Projects", id: "03" },
    { path: "/contact", label: "Contact", id: "04" },
  ];


  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 right-0 top-0 z-50 bg-[#0a0d12]/85 backdrop-blur-md border-b border-white/10"
    >

      {/* Teal accent line at top */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#92DCE2]/50 to-transparent" />
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-8">


        {/* LOGO */}
        <Link
          to="/"
          className="group flex items-center gap-3"
          onClick={() => setMobileMenuOpen(false)}
        >

          <div className="relative flex h-9 w-9 items-center justify-center border border-white/20 bg-white/5 font-mono text-sm font-black transition group-hover:border-[#92DCE2]/60 group-hover:text-[#92DCE2]">
            ML
            <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#92DCE2] ring-2 ring-[#0a0d12]" />
          </div>

          <div className="hidden flex-col leading-none md:flex">
            <span className="font-mono text-[9px] uppercase tracking-widest text-white/30">Mint L.</span>
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-white/70">Software Eng</span>
          </div>

        </Link>


        {/* DESKTOP NAV */}
        <div className="hidden md:flex">
          <div className="flex border border-white/10 divide-x divide-white/10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`group relative flex items-center gap-2 px-5 py-3 transition-all ${
                    isActive
                      ? "bg-white/[0.05] text-white"
                      : "text-white/40 hover:bg-white/[0.03] hover:text-white/80"
                  }`}
                >

                  <span className={`font-mono text-[9px] transition ${
                    isActive ? "text-[#92DCE2]" : "text-[#92DCE2]/40 group-hover:text-[#92DCE2]/70"
                  }`}>
                    {link.id}
                  </span>

                  <span className="text-[11px] font-bold uppercase tracking-widest">{link.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-line"
                      className="absolute bottom-0 left-0 h-[2px] w-full bg-[#92DCE2]"
                    />
                  )}

                </Link>
              );
            })}
          </div>
        </div>


        {/* RIGHT: STATUS + RESUME */}
        <div className="hidden items-center gap-4 md:flex">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#92DCE2] animate-pulse" />
            <span className="font-mono text-[9px] uppercase tracking-widest text-white/25">Available</span>
          </div>

          <div className="h-4 w-px bg-white/10" />
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 border border-[#A78BFA]/35 bg-[#A78BFA]/10 px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-widest text-[#A78BFA] transition hover:border-[#A78BFA]/60 hover:bg-[#A78BFA]/20"
          >
            Resume <span className="opacity-50">↗</span>
          </a>
        </div>


        {/* MOBILE TOGGLE */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="relative flex h-9 w-9 flex-col items-center justify-center gap-[5px] border border-white/10 bg-white/5 md:hidden"
          aria-label="Toggle menu"
        >
          <div className={`h-px w-4 bg-white transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
          <div className={`h-px w-4 bg-white transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`} />
          <div className={`h-px w-4 bg-white transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
        </button>
      </div>


      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 top-[57px] z-40 bg-[#0a0d12] p-6 md:hidden"
          >

            <div className="flex flex-col gap-1.5">
              <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-[#92DCE2]" />
                <span className="font-mono text-[9px] uppercase tracking-widest text-white/30">Navigation / System</span>
              </div>

              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between border p-4 transition ${
                      isActive
                        ? "border-[#92DCE2]/30 bg-[#92DCE2]/10 text-[#92DCE2]"
                        : "border-white/10 bg-white/[0.02] text-white/60 hover:border-white/20 hover:text-white"
                    }`}
                  >

                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[9px] text-[#92DCE2]/50">{link.id}</span>
                      <span className="text-sm font-bold uppercase tracking-widest">{link.label}</span>
                    </div>

                    {isActive && <span className="font-mono text-[9px] text-[#92DCE2]/60">● ACTIVE</span>}
                  </Link>

                );
              })}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-between border border-[#A78BFA]/30 bg-[#A78BFA]/10 p-4 font-mono text-[11px] font-bold uppercase tracking-widest text-[#A78BFA] transition hover:bg-[#A78BFA]/20"
              >
                <span>Resume</span>
                <span className="opacity-50">↗ PDF</span>
              </a>
            </div>
            
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}