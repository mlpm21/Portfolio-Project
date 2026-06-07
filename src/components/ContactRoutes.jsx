import React, { useState } from "react";
import { RESUME_URL, RESUME_QR_SRC } from "../constants/resume";

const PANEL_BG = "#E7E8E3";

const ResumeQR = ({ href = RESUME_URL }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group inline-flex flex-col items-center"
    aria-label="Open resume PDF"
  >
    <span
      className="inline-flex items-center justify-center"
      style={{ backgroundColor: PANEL_BG }}
    >
      <img
        src={RESUME_QR_SRC}
        alt="QR code — scan to open resume"
        width={90}
        height={90}
        className="opacity-90 transition-opacity group-hover:opacity-100"
      />
    </span>
    <p className="mt-1.5 -mr-[0.3em] text-center font-mono text-[8px] uppercase tracking-[0.3em] text-black/30">
      Document_Access
    </p>
  </a>
);


const CopyIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const CheckIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);


const ContactRoute = ({ number, label, value, href, accent, showCopy = false, copyValue }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(copyValue);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <a
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
      className="group relative flex items-center justify-between overflow-hidden border border-black/10 bg-black/5 p-5 transition-all hover:bg-white/50"
    >
      {/* Left accent stripe */}
      <div className="absolute left-0 top-0 h-full w-[6px]" style={{ backgroundColor: accent }} />

      {/* Hover tint overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
        style={{ backgroundColor: `${accent}12` }}
      />

      <div className="relative flex items-center gap-4 pl-2">
        <span className="font-mono text-[12px] font-bold opacity-30">{number}</span>

        <div>
          <div className="flex items-center gap-2">
            <p className="font-mono text-[8.5px] uppercase tracking-widest opacity-40">{label}</p>

            {showCopy && (
              <button
                onClick={handleCopy}
                title="Copy email"
                className={`flex items-center gap-1 transition-all duration-200 ${
                  copied ? "text-[#20808D]" : "opacity-30 hover:opacity-70"
                }`}
              >
                {copied ? (
                  <>
                    <CheckIcon />
                    <span className="font-mono text-[8px] uppercase tracking-widest">Copied!</span>
                  </>
                ) : (
                  <CopyIcon />
                )}
              </button>
            )}
          </div>

          <p className="font-sans text-sm font-black uppercase tracking-tight">{value}</p>
        </div>
      </div>

      <span className="relative text-xl opacity-20 transition group-hover:translate-x-0.5 group-hover:opacity-60">↗</span>
    </a>
  );
};


export default function ContactRoutes({ className = "" }) {
  return (
    <div className={`relative flex flex-col border border-white/10 bg-[#E7E8E3] p-10 text-black ${className}`}>
      <div className="mb-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-40">Communication</p>
        <h2 className="text-4xl font-black uppercase tracking-tighter">Routes</h2>
      </div>

      <div className="flex flex-col gap-2.5">
        <ContactRoute
          number="01"
          label="Transmission / Email"
          value="liaw.lapat@gmail.com"
          href="mailto:liaw.lapat@gmail.com"
          accent="#21808D"
          showCopy
          copyValue="liaw.lapat@gmail.com"
        />
        <ContactRoute
          number="02"
          label="Source / Github"
          value="github.com/mlpm21"
          href="https://github.com/mlpm21"
          accent="#8B5CF6"
        />
        <ContactRoute
          number="03"
          label="Network / Linkedin"
          value="linkedin.com/in/lapatrada"
          href="https://linkedin.com/in/lapatrada-liawpairoj/"
          accent="#0077B5"
        />
      </div>

      <div className="mt-6 flex justify-center">
        <ResumeQR />
      </div>
    </div>
  );
}
