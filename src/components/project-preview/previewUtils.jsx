export function accent(theme, alpha = 1) {
  if (!theme || typeof theme !== "string") {
    return `rgba(255, 255, 255, ${alpha})`;
  }
  const hex = theme.replace("#", "");
  if (hex.length < 6) {
    return `rgba(255, 255, 255, ${alpha})`;
  }
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  if (Number.isNaN(r) || Number.isNaN(g) || Number.isNaN(b)) {
    return `rgba(255, 255, 255, ${alpha})`;
  }
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function StackPills({ stack = [], max = 4 }) {
  const items = stack.slice(0, max);
  const rest = stack.length - max;
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((tech) => (
        <span
          key={tech}
          className="rounded-sm border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[11px] text-white/45"
        >
          {tech}
        </span>
      ))}
      {rest > 0 && (
        <span className="px-1 text-[11px] text-white/25">+{rest}</span>
      )}
    </div>
  );
}

export function StatusPill({ status, theme }) {
  return (
    <span
      className="rounded-full px-3 py-1 text-[10px] font-medium tracking-wide"
      style={{
        color: theme,
        backgroundColor: accent(theme, 0.12),
        border: `1px solid ${accent(theme, 0.28)}`,
      }}
    >
      {status}
    </span>
  );
}

export function MetaLabel({ children, theme }) {
  return (
    <span
      className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/35"
      style={{ color: theme ? accent(theme, 0.65) : undefined }}
    >
      {children}
    </span>
  );
}
