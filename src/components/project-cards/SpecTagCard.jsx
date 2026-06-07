/**
 * SpecTagCard — industrial ID plate inside the standard outer frame.
 */

import ProjectCardFrame from "./ProjectCardFrame";
import { getLifecycle, projectCode } from "./specTagUtils";
import {
  LifecycleBadge,
  PerforationRow,
  PLATE_COLORS,
  SPECTAG_CLIP,
  StackTags,
  getThemeRailColors,
  RAIL_CODE_CLASS,
  RAIL_INDEX_CLASS,
} from "./plateShared";

/** Uniform plate height — width stays fluid in the grid */
const SPECTAG_PLATE_H = 368;
const SPECTAG_STACK_H = 100;

export default function SpecTagCard({ project, delay = 0 }) {
  const { index, title, tagline, type, stack, theme } = project;
  const lifecycle = getLifecycle(project);
  const code = projectCode(project);
  const rail = getThemeRailColors(theme);

  return (
    <ProjectCardFrame
      project={project}
      delay={delay}
      showFooter={false}
      bareShell
      className="h-full w-full"
    >
      {({ hovered, openPreview }) => (
        <div className="h-full p-3 md:p-4">
          <div
            className="relative h-full w-full overflow-hidden transition-shadow duration-300"
            style={{
              height: SPECTAG_PLATE_H,
              clipPath: SPECTAG_CLIP,
              WebkitClipPath: SPECTAG_CLIP,
              background: PLATE_COLORS.shell,
              boxShadow: hovered
                ? `0 16px 40px -20px rgba(0,0,0,0.5), 0 0 0 1px ${theme}40`
                : "0 12px 32px -22px rgba(0,0,0,0.45)",
            }}
          >
            <div className="flex h-full">
              <aside
                className="relative flex h-full w-[96px] shrink-0 flex-col justify-between overflow-hidden border-r border-black/30 py-4 pl-3 pr-2 md:w-[108px]"
                style={{ background: rail.rail }}
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.07]"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(-45deg, #000 0 2px, transparent 2px 6px)",
                  }}
                />
                <div className="relative">
                  <p className={`font-mono text-[9px] tracking-[0.2em] ${RAIL_INDEX_CLASS}`}>
                    {index}
                  </p>
                  <p
                    className={`mt-3 font-black leading-none tracking-tight ${RAIL_CODE_CLASS}`}
                    style={{ fontSize: "1.65rem", letterSpacing: "-0.03em" }}
                  >
                    {code}
                  </p>
                </div>

                <LifecycleBadge lifecycle={lifecycle} className="relative max-w-[96px]" />
              </aside>

              <div className="relative flex h-full min-w-0 flex-1 flex-col bg-[#b8bdb5]">
                <PerforationRow />

                <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden px-5 pt-2 md:px-6">
                  <span
                    className="pointer-events-none absolute bottom-2 right-3 select-none font-black text-[#1a1d1a]/[0.045]"
                    style={{ fontSize: "4.5rem", lineHeight: 1 }}
                    aria-hidden
                  >
                    {index}
                  </span>

                  <span className="absolute left-3 top-6 h-3.5 w-3.5 border-l border-t border-[#1a1d1a]/25" />
                  <span className="absolute right-3 top-6 h-3.5 w-3.5 border-r border-t border-[#1a1d1a]/25" />

                  <div
                    className="absolute left-0 top-0 h-full w-1"
                    style={{ background: `${theme}88` }}
                  />

                  <p className="relative shrink-0 font-mono text-[10px] uppercase tracking-[0.32em] text-[#1a1d1a]/55">
                    {type}
                  </p>

                  <h3 className="relative mt-2 line-clamp-2 max-w-[92%] shrink-0 text-[1.35rem] font-bold uppercase leading-[1.08] tracking-tight text-[#141816] md:text-[1.65rem]">
                    {title}
                  </h3>

                  <p className="relative mt-2.5 line-clamp-3 min-h-0 flex-1 overflow-hidden text-[14px] leading-[1.55] text-[#1a1d1a]/75">
                    {tagline}
                  </p>
                </div>

                <div
                  className="flex shrink-0 flex-col border-t border-[#1a1d1a]/10 px-5 py-3 md:px-6"
                  style={{ minHeight: SPECTAG_STACK_H }}
                >
                  <p className="mb-2 shrink-0 font-mono text-[9px] uppercase tracking-[0.26em] text-[#1a1d1a]/45">
                    Stack
                  </p>
                  <StackTags stack={stack} theme={theme} />
                </div>

                <button
                  type="button"
                  onClick={openPreview}
                  className="group flex h-[52px] w-full shrink-0 items-center justify-between border-t border-black/15 px-5 font-mono text-[11px] uppercase tracking-[0.22em] text-white/50 transition hover:brightness-105"
                  style={{ background: rail.preview }}
                >
                  <span>Preview</span>
                  <span className="text-white/35 transition-transform group-hover:translate-x-1 group-hover:text-white/55">
                    →
                  </span>
                </button>
              </div>
            </div>

            <div
              className="absolute right-0 top-0 h-5 w-5 bg-[#121514]"
              style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
            />
          </div>
        </div>
      )}
    </ProjectCardFrame>
  );
}
