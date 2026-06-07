import { Link } from "react-router-dom";
import { StatusPill, StackPills, MetaLabel, accent } from "./previewUtils";

export default function ModalLeftPanel({ project }) {
  const { id, index, title, type, status, tagline, role, stack, theme, github } =
    project;

  return (
    <aside className="flex h-full min-h-0 flex-col overflow-hidden border-r border-white/[0.08] bg-[#0C0E12]">
      <div className="min-h-0 flex-1 p-6 md:p-8">
        <div className="flex items-start justify-between gap-3">
          <MetaLabel theme={theme}>Project {index}</MetaLabel>
          <StatusPill status={status} theme={theme} />
        </div>

        <h2 className="mt-5 text-2xl font-semibold tracking-tight text-white md:text-[1.65rem]">
          {title}
        </h2>
        <p className="mt-1.5 text-sm text-white/45">{type}</p>
        <p className="mt-4 text-[15px] leading-relaxed text-muted">{tagline}</p>
        <p className="mt-3 text-xs text-white/35">{role}</p>

        <div className="mt-6">
          <StackPills stack={stack} max={6} />
        </div>
      </div>

      <div className="shrink-0 border-t border-white/[0.08] bg-[#0C0E12] p-6 md:sticky md:bottom-0 md:p-8">
        <p className="mb-3 text-[11px] font-medium uppercase tracking-wider text-white/28">
          Links
        </p>
        <div className="flex flex-col gap-2.5">
          <Link
            to={`/projects/${id}`}
            className="rounded-sm px-4 py-2.5 text-sm font-medium transition-opacity hover:opacity-85"
            style={{
              color: theme,
              backgroundColor: accent(theme, 0.14),
              border: `1px solid ${accent(theme, 0.35)}`,
            }}
          >
            Case study →
          </Link>
          <ModalActionLink href={github}>GitHub</ModalActionLink>
          {/* Demo — enable when live URLs are ready
          <ModalActionLink href={demo}>Demo</ModalActionLink>
          */}
        </div>
      </div>
    </aside>
  );
}

function ModalActionLink({ href, children }) {
  if (!href || href === "#") return null;

  return (
    <a
      href={href}
      className="rounded-sm border border-white/10 px-4 py-2.5 text-sm text-white/50 transition hover:border-white/20 hover:text-white/75"
    >
      {children}
    </a>
  );
}
