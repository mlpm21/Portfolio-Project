import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { RESUME_URL } from "../constants/resume";

export default function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home", id: "01" },
    { path: "/about", label: "About", id: "02" },
    { path: "/projects", label: "Projects", id: "03" },
    { path: "/contact", label: "Contact", id: "04" },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileMenuOpen]);

  const mobileMenu =
    typeof document !== "undefined"
      ? createPortal(
          <AnimatePresence>
            {mobileMenuOpen && (
              <>
                <motion.button
                  type="button"
                  aria-label="Close menu"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm md:hidden"
                  onClick={closeMenu}
                />

                <motion.div
                  id="mobile-nav-panel"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="fixed left-0 right-0 top-[57px] z-[95] max-h-[calc(100dvh-57px)] overflow-y-auto border-b border-white/10 bg-[#0a0d12] p-4 pb-8 shadow-2xl md:hidden"
                >
                  <div className="mx-auto flex max-w-7xl flex-col gap-1.5">
                    <div className="mb-3 flex items-center gap-2 border-b border-white/10 pb-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#92DCE2]" />
                      <span className="font-mono text-[9px] uppercase tracking-widest text-white/30">
                        Navigation / System
                      </span>
                    </div>

                    {navLinks.map((link) => {
                      const isActive = location.pathname === link.path;
                      return (
                        <Link
                          key={link.path}
                          to={link.path}
                          onClick={closeMenu}
                          className={`flex min-h-[52px] items-center justify-between border p-4 transition ${
                            isActive
                              ? "border-[#92DCE2]/30 bg-[#92DCE2]/10 text-[#92DCE2]"
                              : "border-white/10 bg-white/[0.02] text-white/60 hover:border-white/20 hover:text-white"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="font-mono text-[9px] text-[#92DCE2]/50">
                              {link.id}
                            </span>
                            <span className="text-sm font-bold uppercase tracking-widest">
                              {link.label}
                            </span>
                          </div>
                          {isActive && (
                            <span className="font-mono text-[9px] text-[#92DCE2]/60">
                              ● ACTIVE
                            </span>
                          )}
                        </Link>
                      );
                    })}

                    <a
                      href={RESUME_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMenu}
                      className="mt-2 flex min-h-[52px] items-center justify-between border border-[#A78BFA]/30 bg-[#A78BFA]/10 p-4 font-mono text-[11px] font-bold uppercase tracking-widest text-[#A78BFA] transition hover:bg-[#A78BFA]/20"
                    >
                      <span>Resume</span>
                      <span className="opacity-50">↗ PDF</span>
                    </a>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          document.body
        )
      : null;

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed left-0 right-0 top-0 z-[100] bg-[#0a0d12]/90 backdrop-blur-md border-b border-white/10"
      >
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#92DCE2]/50 to-transparent" />

        <div className="mx-auto flex h-[57px] max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8">
          <Link to="/" className="group flex min-w-0 items-center gap-2.5 sm:gap-3" onClick={closeMenu}>
            <div className="relative h-9 w-9 shrink-0 transition group-hover:brightness-110">
              <img
                src="/logo.svg"
                alt="Mint Lapatrada"
                width={36}
                height={36}
                className="h-9 w-9"
              />
            </div>
            <div className="hidden min-w-0 flex-col leading-none sm:flex">
              <span className="truncate font-mono text-[9px] uppercase tracking-widest text-white/30">
                Mint L.
              </span>
              <span className="truncate font-mono text-[10px] font-bold uppercase tracking-wider text-white/70">
                Software Eng
              </span>
            </div>
          </Link>

          <div className="hidden md:flex">
            <div className="flex divide-x divide-white/10 border border-white/10">
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
                    <span
                      className={`font-mono text-[9px] transition ${
                        isActive
                          ? "text-[#92DCE2]"
                          : "text-[#92DCE2]/40 group-hover:text-[#92DCE2]/70"
                      }`}
                    >
                      {link.id}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-widest">
                      {link.label}
                    </span>
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

          <div className="hidden items-center gap-4 md:flex">
            <div className="flex items-center gap-2.5 border border-white/10 bg-white/[0.03] px-3 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#92DCE2] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#92DCE2]" />
              </span>
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
                Available
              </span>
            </div>
            <div className="h-4 w-px bg-white/10" />
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 border border-[#A78BFA]/35 bg-[#A78BFA]/10 px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-widest text-[#A78BFA] transition hover:border-[#A78BFA]/60 hover:bg-[#A78BFA]/20"
            >
              Resume <span className="opacity-50">↗</span>
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-panel"
            className="relative flex h-10 w-10 shrink-0 items-center justify-center border border-white/10 bg-white/5 md:hidden"
          >
            <span className="relative flex h-[18px] w-5 items-center justify-center">
              <span
                className={`absolute block h-0.5 w-5 bg-white transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? "rotate-45" : "-translate-y-[6px]"
                }`}
              />
              <span
                className={`absolute block h-0.5 w-5 bg-white transition-all duration-300 ${
                  mobileMenuOpen ? "scale-x-0 opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute block h-0.5 w-5 bg-white transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? "-rotate-45" : "translate-y-[6px]"
                }`}
              />
            </span>
          </button>
        </div>
      </motion.nav>

      {mobileMenu}
    </>
  );
}
