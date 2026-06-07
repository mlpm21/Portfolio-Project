/**
 * Shared industrial plate UI — SpecTag + Plate cards.
 */

function parseHex(hex) {
  const h = hex.replace("#", "");
  return [
    parseInt(h.slice(0, 2), 16),
    parseInt(h.slice(2, 4), 16),
    parseInt(h.slice(4, 6), 16),
  ];
}

function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  let h = 0;
  let s = 0;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      default:
        h = ((r - g) / d + 4) / 6;
    }
  }

  return { h: h * 360, s: s * 100, l: l * 100 };
}

function hslToHex(h, s, l) {
  s /= 100;
  l /= 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n) => {
    const k = (n + h / 30) % 12;
    return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  };
  const toHex = (x) =>
    Math.round(x * 255)
      .toString(16)
      .padStart(2, "0");
  return `#${toHex(f(0))}${toHex(f(8))}${toHex(f(4))}`;
}

/** Darkened theme for left rail; preview bar is slightly lighter/fainter */
export function getThemeRailColors(theme) {
  const [r, g, b] = parseHex(theme);
  const { h, s } = rgbToHsl(r, g, b);
  const sat = Math.min(Math.max(s, 35), 72);

  return {
    rail: hslToHex(h, sat, 20),
    railDark: hslToHex(h, sat, 14),
    preview: hslToHex(h, sat * 0.72, 30),
  };
}

export function PerforationRow() {
  return (
    <div className="flex justify-center gap-1.5 py-1.5" aria-hidden>
      {Array.from({ length: 18 }).map((_, i) => (
        <span key={i} className="h-1 w-1 rounded-full bg-[#1a1d1a]/20" />
      ))}
    </div>
  );
}

export function BarcodeStrip() {
  return (
    <div
      className="h-8 w-20 opacity-60"
      style={{
        background:
          "repeating-linear-gradient(90deg, #1a1d1a 0 2px, transparent 2px 4px, #1a1d1a 4px 5px, transparent 5px 8px)",
      }}
      aria-hidden
    />
  );
}

export function StackTags({ stack, theme, size = "default" }) {
  const tagClass =
    size === "plate"
      ? "border px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.1em]"
      : "border px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em]";

  return (
    <div className="flex flex-wrap gap-2">
      {stack.map((tech) => (
        <span
          key={tech}
          className={tagClass}
          style={{
            borderColor: `${theme}35`,
            backgroundColor: `${theme}12`,
            color: "#1a1d1a",
          }}
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

/** Status pill — dot + label on one line */
export function LifecycleBadge({ lifecycle, className = "", railVertical = false }) {
  const widthClass = railVertical ? "w-max shrink-0" : "max-w-full";

  return (
    <div
      className={`inline-flex ${widthClass} items-center gap-1.5 whitespace-nowrap px-2 py-1.5 font-mono text-[8px] uppercase leading-none tracking-[0.1em] ${className}`}
      style={{ background: lifecycle.bg, color: lifecycle.text }}
    >
      <span
        className="h-1.5 w-1.5 shrink-0 rounded-full"
        style={{ background: lifecycle.dot }}
      />
      <span>{lifecycle.label}</span>
    </div>
  );
}

export const PLATE_COLORS = {
  rail: "#4a5648",
  railDark: "#3d483c",
  panel: "#b8bdb5",
  ink: "#141816",
  muted: "rgba(26, 29, 26, 0.55)",
  shell: "#121514",
};

/** Muted rail typography — not bright off-white */
export const RAIL_INDEX_CLASS = "text-[#dce8d8]/40";
export const RAIL_CODE_CLASS = "text-[#b8c4bc]/55";

/** Top-right chamfer only — bottom-left stays filled */
export const SPECTAG_CLIP =
  "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)";
