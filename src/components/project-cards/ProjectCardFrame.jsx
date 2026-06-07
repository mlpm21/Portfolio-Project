/**
 * Shared shell: entrance motion, hover lift, opens floating preview modal (state 2).
 * Style files only supply the default + hover chrome (children).
 */

import { motion } from "framer-motion";
import { useProjectCardState } from "./useProjectCardState";
import ProjectPreviewModal from "../project-preview/ProjectPreviewModal";
import { accent } from "../project-preview/previewUtils";

export default function ProjectCardFrame({
  project,
  delay = 0,
  className = "",
  surfaceClassName = "bg-[#0E1016]",
  showFooter = true,
  bareShell = false,
  children,
}) {
  const { previewOpen, hovered, openPreview, closePreview, onEnter, onLeave } =
    useProjectCardState();
  const { theme } = project;

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        className={`group relative ${className}`}
        style={{
          transform: hovered && !previewOpen ? "translateY(-3px)" : "translateY(0)",
          transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <div
          className={`relative overflow-hidden transition-shadow duration-350 ${bareShell ? "" : surfaceClassName}`}
          style={
            bareShell
              ? undefined
              : {
                  boxShadow: hovered
                    ? `0 20px 50px -24px ${accent(theme, 0.35)}, inset 0 0 0 1px ${accent(theme, 0.22)}`
                    : `inset 0 0 0 1px rgba(255,255,255,0.06)`,
                }
          }
        >
          {children({ hovered, theme, openPreview })}

          {showFooter && (
            <div className="flex items-center justify-between border-t border-white/[0.06] px-5 py-3 md:px-6">
              <p className="text-xs text-white/30">Open preview panel</p>
              <button
                type="button"
                onClick={openPreview}
                className="rounded-sm border border-white/10 px-4 py-2 text-xs font-medium text-white/50 transition hover:border-white/20 hover:text-white/80"
                style={
                  hovered
                    ? {
                        borderColor: accent(theme, 0.35),
                        color: accent(theme, 0.9),
                      }
                    : undefined
                }
              >
                Preview
              </button>
            </div>
          )}
        </div>
      </motion.article>

      <ProjectPreviewModal
        project={project}
        open={previewOpen}
        onClose={closePreview}
      />
    </>
  );
}
