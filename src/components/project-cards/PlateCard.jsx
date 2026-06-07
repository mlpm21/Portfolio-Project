/**
 * PlateCard — vertical portrait decal + SpecTag industrial interior.
 */

import ProjectCardFrame from "./ProjectCardFrame";
import { getLifecycle, projectCode } from "./specTagUtils";
import {
  LifecycleBadge,
  PerforationRow,
  PLATE_COLORS,
  StackTags,
  getThemeRailColors,
  RAIL_CODE_CLASS,
  RAIL_INDEX_CLASS,
} from "./plateShared";

const CARD_W = 324;
const CARD_H = 488;
const MOBILE_CARD_SCALE = "max-[380px]:scale-[0.88] max-[380px]:origin-top";

const DECAL_CLIP = `path("M 0 0 L 297 0 L 320 20 L 320 172
  L 269 172 L 269 292 L 320 292 L 320 498 L 0 498 Z")`;

function RailVerticalText({ children, className = "", style = {} }) {
  return (
    <span
      className={`inline-block whitespace-nowrap font-mono font-black uppercase ${className}`}
      style={{
        transform: "rotate(90deg)",
        transformOrigin: "center center",
        letterSpacing: "0.08em",
        fontSize: "1.7rem",
        ...style,
      }}
    >
      {children}
    </span>
  );
}

export default function PlateCard({ project, delay = 0 }) {
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
      className="mx-auto w-full max-w-[380px]"
    >
      {({ hovered, openPreview }) => (
        <div className={`flex justify-center p-2 sm:p-3 md:p-4 ${MOBILE_CARD_SCALE}`}>
          <div
            className="relative max-w-full overflow-hidden transition-shadow duration-300"
            style={{
              width: CARD_W,
              maxWidth: "100%",
              height: CARD_H,
              clipPath: DECAL_CLIP,
              WebkitClipPath: DECAL_CLIP,
              background: PLATE_COLORS.shell,
              boxShadow: hovered
                ? `0 16px 40px -20px rgba(0,0,0,0.5), 0 0 0 1px ${theme}40`
                : "0 12px 32px -22px rgba(0,0,0,0.45)",
            }}
          >
            <div className="flex h-full flex-col">
              <div className="flex min-h-0 flex-1">
                <aside
                  className="relative flex w-[48px] shrink-0 flex-col border-r border-black/30 py-3"
                  style={{ background: rail.rail }}
                >
                  <p className={`shrink-0 text-center font-mono text-[10px] tracking-[0.15em] ${RAIL_INDEX_CLASS}`}>
                    {index}
                  </p>

                  <div className="flex min-h-0 flex-1 items-center justify-center py-4">
                    <RailVerticalText className={RAIL_CODE_CLASS}>
                      {code}
                    </RailVerticalText>
                  </div>

                  <div className="flex h-[84px] shrink-0 items-center justify-center">
                    <LifecycleBadge
                      lifecycle={lifecycle}
                      railVertical
                      className="rotate-90 px-2.5 py-1.5 text-[7.5px] tracking-[0.06em]"
                    />
                  </div>
                </aside>

                <div className="relative flex min-w-0 flex-1 flex-col bg-[#b8bdb5]">
                  <PerforationRow />

                  <div className="relative flex min-h-0 flex-1 flex-col px-4 py-3">
                    <span
                      className="pointer-events-none absolute bottom-1 right-0 select-none font-black text-[#1a1d1a]/[0.05]"
                      style={{ fontSize: "4.5rem", lineHeight: 1 }}
                      aria-hidden
                    >
                      {index}
                    </span>

                    <div
                      className="absolute left-0 top-0 h-full w-1"
                      style={{ background: `${theme}88` }}
                    />

                    <p className="relative font-mono text-[9px] uppercase tracking-[0.28em] text-[#1a1d1a]/55">
                      {type}
                    </p>

                    <h3 className="relative mt-2.5 text-[1.3rem] font-bold uppercase leading-[1.08] tracking-tight text-[#141816]">
                      {title}
                    </h3>

                    <p className="relative mt-3 line-clamp-4 flex-1 text-[13px] leading-[1.55] text-[#1a1d1a]/75">
                      {tagline}
                    </p>
                  </div>

                  <div className="min-h-[112px] shrink-0 border-t border-[#1a1d1a]/10 px-4 py-3.5">
                    <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.26em] text-[#1a1d1a]/45">
                      Stack
                    </p>
                    <StackTags stack={stack} theme={theme} size="plate" />
                  </div>

                  <button
                    type="button"
                    onClick={openPreview}
                    className="group flex w-full shrink-0 items-center justify-between border-t border-black/15 px-4 py-3.5 font-mono text-[10px] uppercase tracking-[0.22em] text-white/50 transition hover:brightness-105"
                    style={{ background: rail.preview }}
                  >
                    <span>Preview</span>
                    <span className="text-white/35 transition-transform group-hover:translate-x-1 group-hover:text-white/55">
                      →
                    </span>
                  </button>
                </div>

                <div
                  className="w-[14px] shrink-0 border-l border-black/25 bg-[#a8aea6]"
                  aria-hidden
                />
              </div>
            </div>

            <div
              className="absolute right-0 top-0 h-5 w-5 bg-[#121514]"
              style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
              aria-hidden
            />
          </div>
        </div>
      )}
    </ProjectCardFrame>
  );
}
