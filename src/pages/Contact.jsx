// ver 4 (LOCKED - FINAL)

import React from "react";
import { motion } from "framer-motion";
import ContactRoutes from "../components/ContactRoutes";

// Industrial Design Elements
const CornerFrame = () => (
  <>
    <span className="absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-current" />
    <span className="absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 border-current" />
    <span className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-current" />
    <span className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-current" />
  </>
);


const MetaData = ({ label, value }) => (
  <div className="flex flex-col border-l border-white/10 pl-3">
    <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-white/30">{label}</span>
    <span className="font-sans text-[11px] font-black uppercase text-white">{value}</span>
  </div>
);


// MAIN COMPONENT
export default function Contact() {
  return (

    <main className="relative min-h-screen overflow-x-hidden bg-[#0D0F14] px-4 pb-24 pt-28 text-white antialiased sm:px-6 md:px-8 md:pt-32">
      
      {/* Background: ambient glows + grid */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[-10%] h-[34rem] w-[34rem] bg-[#20808D]/10 blur-[120px]" />
        <div className="absolute bottom-[-12%] right-[-10%] h-[34rem] w-[34rem] bg-[#8B5CF6]/10 blur-[120px]" />
      </div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-7xl"
      >
        {/* Top Technical Header */}
        <div className="mb-8 flex flex-col gap-3 border-b border-white/10 pb-6 sm:mb-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex min-w-0 flex-wrap items-center gap-3 sm:gap-4">
            <div className="shrink-0 bg-white px-2 py-1 font-mono text-[10px] font-bold text-black">
              ID_SYS_2026
            </div>
            <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/20 sm:text-[10px] sm:tracking-[0.35em]">
              Directory / Personnel_Access
            </span>
          </div>
        </div>


        <div className="grid gap-1 lg:grid-cols-12">
          {/* LEFT: THE DOSSIER CARD */}
          <div className="relative overflow-hidden border border-white/10 bg-[#121418] p-5 sm:p-8 lg:col-span-8">
            <CornerFrame />
            
            <div className="flex flex-col gap-8 md:flex-row">
              {/* Photo Placeholder inspired by industrial badges */}
              <div className="relative h-56 w-44 shrink-0 border border-white/5 bg-[#0D0F12]">
                
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <div className="h-full w-full bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.05)_10px,rgba(255,255,255,0.05)_20px)]" />
                </div>

                <div className="relative z-10 flex h-full flex-col items-center justify-center">
                  <span className="text-7xl font-black italic tracking-tighter text-[#92DCE2]">ML</span>
                  <div className="mt-4 h-[1px] w-12 bg-white/20" />
                </div>

                <div className="absolute bottom-2 right-2 font-mono text-[10px] text-white/20 uppercase">
                  Level: 04
                </div>

              </div>


              {/* Identity Details */}
              <div className="flex-1">
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#92DCE2]" />
                  <span className="font-mono text-[11px] uppercase tracking-widest text-[#92DCE2]">Identity Verified</span>
                </div>
                
                <h1 className="text-4xl font-black uppercase leading-[0.88] tracking-[-0.06em] sm:text-5xl md:text-7xl lg:text-8xl">
                  Mint <br />
                  <span className="text-white/10">L.</span>
                </h1>

                <div className="mt-6 grid grid-cols-2 gap-4 sm:mt-8 sm:gap-6 md:grid-cols-4">
                  <MetaData label="Role" value="Software Eng" />
                  <MetaData label="Special" value="UX Architecture" />
                  <MetaData label="System" value="Full-Stack" />
                  <MetaData label="Origin" value="Oregon / US" />
                </div>

                {/* Core Stack Tags */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {[
                    { tag: "React",          color: "teal"  },
                    { tag: "JavaScript",     color: "teal"  },
                    { tag: "Tailwind",       color: "teal"  },
                    { tag: "Framer Motion",  color: "teal"  },
                    { tag: "Node.js",        color: "purple"},
                    { tag: "Express",        color: "purple"},
                    { tag: "MySQL",          color: "purple"},
                    { tag: "REST API",       color: "purple"},
                    { tag: "UI/UX",          color: "slate" },
                    { tag: "Wireframing",    color: "slate" },
                    { tag: "UX Research",    color: "slate" },
                    { tag: "Design System",  color: "slate" },
                  ].map(({ tag, color }) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.2em] ${
                        color === "teal"
                          ? "border border-[#92DCE2]/20 bg-[#92DCE2]/5 text-[#92DCE2]/50 shadow-[0_0_10px_rgba(146,220,226,0.08)]"
                          : color === "purple"
                          ? "border border-[#8B5CF6]/20 bg-[#8B5CF6]/5 text-[#8B5CF6]/50 shadow-[0_0_10px_rgba(139,92,246,0.08)]"
                          : "border border-[#94A3B8]/20 bg-[#94A3B8]/5 text-[#94A3B8]/50 shadow-[0_0_10px_rgba(148,163,184,0.08)]"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </div>


            {/* Barcode Section */}
            <div className="mt-5 flex items-end justify-between border-t border-white/5 pt-6"></div>
            <div className="mt-2.5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <p className="font-mono text-[8px] tracking-[0.35em] text-white/20 sm:tracking-[0.5em]">
                5002-0709-ML-21
              </p>
              <div className="font-mono text-[8px] uppercase tracking-widest text-white/20 sm:text-[9px] sm:text-right">
                Authorized Personnel Only © 2026
              </div>
            </div>

            {/* Stats Bar */}
            <div className="mt-1 grid grid-cols-1 gap-1.5 sm:grid-cols-3">
              {[
                { key: "Projects", val: "04" },
                { key: "Skill", val: "50+" },
                { key: "Status", val: "Available" },
              ].map(({ key, val }, i) => (
                <div key={i} className="flex items-center justify-between border border-white/10 bg-[#0D0F12] p-3 sm:p-4">
                  <div className="hidden h-6 w-px bg-white/10 sm:block" />
                  <div className="min-w-0 flex-1 text-center font-mono text-[10px] font-bold uppercase tracking-wider text-white/40 sm:text-[11px] sm:tracking-widest">
                    {key}:{" "}
                    <span className={val === "Available" ? "text-[#92DCE2]" : "text-muted-strong"}>
                      {val}
                    </span>
                  </div>
                  <div className="h-2 w-2 bg-white/10" />
                </div>
              ))}
            </div>
          </div>


          {/* RIGHT: THE "CONTACT ROUTE" PANEL */}
          <ContactRoutes className="lg:col-span-4" />
        </div>


      </motion.section>
    </main>
  );
}