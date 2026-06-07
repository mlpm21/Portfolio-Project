/**
 * State 2 — floating preview (30% left sticky summary + links, 70% right scroll).
 */

import { useEffect } from "react";
import { createPortal } from "react-dom";
import ModalLeftPanel from "./ModalLeftPanel";
import ModalRightPanel from "./ModalRightPanel";
import { accent } from "./previewUtils";

export default function ProjectPreviewModal({ project, open, onClose }) {
  const { theme, title } = project;

  useEffect(() => {
    if (!open) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open || typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} preview`}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-10"
    >
      <button
        type="button"
        aria-label="Close preview backdrop"
        className="absolute inset-0 bg-black/75"
        onClick={onClose}
      />

      <div
        className="relative flex max-h-[min(92vh,880px)] w-full max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-sm border border-white/15 bg-[#0A0C10] shadow-2xl sm:max-w-5xl md:max-w-6xl md:flex-row"
        style={{ boxShadow: `0 40px 80px -20px ${accent(theme, 0.25)}` }}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close preview"
          className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-sm border border-white/15 bg-[#0E1016] text-lg leading-none text-white/70 transition hover:border-white/35 hover:text-white"
        >
          ×
        </button>

        <div className="flex min-h-0 flex-1 flex-col md:flex-row">
          <div className="flex max-h-[40vh] min-h-0 w-full shrink-0 flex-col md:max-h-none md:w-[30%]">
            <ModalLeftPanel project={project} />
          </div>
          <div className="min-h-0 w-full md:w-[70%]">
            <ModalRightPanel project={project} />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
