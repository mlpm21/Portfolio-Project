// ver 4 (LOCKED - FINAL)

import React from "react";
import { motion } from "framer-motion";
import Routes from "../components/Routes";

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

    <main className="relative min-h-screen overflow-hidden bg-[#0D0F14] px-6 pb-24 pt-32 text-white antialiased md:px-8">
      
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
        <div className="mb-10 flex items-center justify-between border-b border-white/10 pb-6">
          
          <div className="flex items-center gap-4">
            <div className="bg-white px-2 py-1 font-mono text-[10px] font-bold text-black">
              ID_SYS_2026
            </div>

            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/20">
              Directory / Personnel_Access
            </span>

          </div>
        </div>


        <div className="grid gap-1 lg:grid-cols-12">
          {/* LEFT: THE DOSSIER CARD */}
          <div className="relative overflow-hidden border border-white/10 bg-[#121418] p-8 lg:col-span-8">
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

                <div className="absolute bottom-2 right-2 font-mono text-[8px] text-white/20 uppercase">
                  Level: 04
                </div>

              </div>


              {/* Identity Details */}
              <div className="flex-1">
                <div className="mb-6 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#92DCE2]" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#92DCE2]">Identity Verified</span>
                </div>
                
                <h1 className="text-7xl font-black uppercase tracking-[-0.06em] leading-[0.8] md:text-9xl">
                  Mint <br />
                  <span className="text-white/10">L.</span>
                </h1>

                <div className="mt-8 grid grid-cols-2 gap-6 border-t border-white/5 pt-8 md:grid-cols-4">
                  <MetaData label="Role" value="Software Eng" />
                  <MetaData label="Special" value="UX Architecture" />
                  <MetaData label="System" value="Full-Stack" />
                  <MetaData label="Origin" value="Oregon / US" />
                </div>

              </div>
            </div>


            {/* Barcode Section */}
            <div className="mt-12 flex items-end justify-between">
              <p className="font-mono text-[8px] tracking-[0.5em] text-white/20">5002-0709-ML-21</p>
              
              <div className="text-right font-mono text-[9px] uppercase tracking-widest text-white/20">
                Authorized Personnel Only <br /> © 2026
              
              </div>
            </div>
          </div>


          {/* RIGHT: THE "CONTACT ROUTE" PANEL */}
          <Routes className="lg:col-span-4" />
        </div>


        {/* Footer Stats Bar Panel */}
        <div className="mt-1 grid grid-cols-2 gap-1 md:grid-cols-4">
          {[
            { key: "Projects", val: "00" },
            { key: "Skill", val: "50+" },
            { key: "Location", val: "OR/US" },
            { key: "Status", val: "Available" },
          ].map(({ key, val }, i) => (
            <div key={i} className="border border-white/10 bg-[#121418] p-4 flex items-center justify-between">
              <div className="h-8 w-[1px] bg-white/10" />
              
              <div className="font-mono text-[11px] font-bold uppercase tracking-widest text-white/40">
                {key}:{" "}

                <span className={val === "Available" ? "text-[#92DCE2]" : "text-white/70"}>
                  {val}
                </span>

              </div>
              <div className="h-2 w-2 bg-white/10" />
            </div>

          ))}
        </div>

      </motion.section>
    </main>
  );
}