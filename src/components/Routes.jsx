import React from "react";

// generate the real qr code resume and replace it (note-todo)
const QRPlaceholder = ({ href, light = false }) => {
  const c = light ? "black" : "white";

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group inline-flex flex-col items-center">
      <svg
        width="90" height="90" viewBox="0 0 88 88" fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`transition-opacity ${light ? "opacity-40 group-hover:opacity-70" : "opacity-50 group-hover:opacity-90"}`}
      >
        <rect x="4" y="4" width="24" height="24" stroke={c} strokeWidth="2" fill="none" />
        <rect x="9" y="9" width="14" height="14" fill={c} />
        <rect x="60" y="4" width="24" height="24" stroke={c} strokeWidth="2" fill="none" />
        <rect x="65" y="9" width="14" height="14" fill={c} />
        <rect x="4" y="60" width="24" height="24" stroke={c} strokeWidth="2" fill="none" />
        <rect x="9" y="65" width="14" height="14" fill={c} />
        <rect x="34" y="4" width="4" height="4" fill={c} />
        <rect x="42" y="4" width="4" height="4" fill={c} />
        <rect x="50" y="4" width="4" height="4" fill={c} />
        <rect x="4" y="34" width="4" height="4" fill={c} />
        <rect x="4" y="42" width="4" height="4" fill={c} />
        <rect x="4" y="50" width="4" height="4" fill={c} />
        <rect x="34" y="12" width="4" height="4" fill={c} />
        <rect x="50" y="12" width="4" height="4" fill={c} />
        <rect x="42" y="20" width="4" height="4" fill={c} />
        <rect x="34" y="34" width="4" height="4" fill={c} />
        <rect x="42" y="42" width="4" height="4" fill={c} />
        <rect x="50" y="34" width="4" height="4" fill={c} />
        <rect x="60" y="34" width="4" height="4" fill={c} />
        <rect x="68" y="42" width="4" height="4" fill={c} />
        <rect x="76" y="34" width="4" height="4" fill={c} />
        <rect x="80" y="42" width="4" height="4" fill={c} />
        <rect x="68" y="50" width="4" height="4" fill={c} />
        <rect x="76" y="50" width="4" height="4" fill={c} />
        <rect x="34" y="50" width="4" height="4" fill={c} />
        <rect x="50" y="50" width="4" height="4" fill={c} />
        <rect x="34" y="60" width="4" height="4" fill={c} />
        <rect x="42" y="68" width="4" height="4" fill={c} />
        <rect x="50" y="60" width="4" height="4" fill={c} />
        <rect x="60" y="60" width="4" height="4" fill={c} />
        <rect x="68" y="68" width="4" height="4" fill={c} />
        <rect x="76" y="60" width="4" height="4" fill={c} />
        <rect x="80" y="68" width="4" height="4" fill={c} />
        <rect x="34" y="76" width="4" height="4" fill={c} />
        <rect x="50" y="76" width="4" height="4" fill={c} />
        <rect x="60" y="76" width="4" height="4" fill={c} />
        <rect x="80" y="76" width="4" height="4" fill={c} />
      </svg>

      <p className={`mt-1.5 -mr-[0.3em] text-center font-mono text-[8px] uppercase tracking-[0.3em] ${light ? "text-black/30" : "text-white/20"}`}>
        Document_Access
      </p>

    </a>
  );
};


const ContactRoute = ({ number, label, value, href }) => (
  <a
    href={href}
    target={href.startsWith("mailto") ? undefined : "_blank"}
    rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
    className="group flex items-center justify-between border border-black/10 bg-black/5 p-4 transition-all hover:bg-white/60"
  >
    <div className="flex items-center gap-4">
      <span className="font-mono text-[10px] font-bold opacity-30">{number}</span>

      <div>
        <p className="font-mono text-[8px] uppercase tracking-widest opacity-40">{label}</p>
        <p className="font-sans text-sm font-black uppercase tracking-tight">{value}</p>
      </div>

    </div>

    <span className="text-xl opacity-20 transition group-hover:translate-x-0.5 group-hover:opacity-60">↗</span>
  </a>
);


export default function Routes({ className = "" }) {
  return (
    <div className={`relative flex flex-col border border-white/10 bg-[#E7E8E3] p-8 text-black ${className}`}>
      <div className="mb-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-40">Communication</p>
        <h2 className="text-4xl font-black uppercase tracking-tighter">Routes</h2>
      </div>

      <div className="flex flex-col gap-2">
        <ContactRoute number="01" label="Transmission / Email" value="liaw.lapat@gmail.com" href="mailto:liaw.lapat@gmail.com" />
        <ContactRoute number="02" label="Source / Github" value="github.com/mlpm21" href="https://github.com/mlpm21" />
        <ContactRoute number="03" label="Network / Linkedin" value="linkedin.com/in/lapatrada-liawpairoj/" href="https://linkedin.com/in/lapatrada-liawpairoj/" />
      </div>

      <div className="mt-10 flex justify-center">
        <QRPlaceholder href="/resume.pdf" light />
      </div>

    </div>
  );
}
