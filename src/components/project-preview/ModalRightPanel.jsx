import { accent } from "./previewUtils";

export default function ModalRightPanel({ project }) {
  const { summary, problem, keyFeature, theme, image, title } = project;

  return (
    <div className="min-h-0 flex-1 overflow-y-auto bg-[#0A0C10] p-6 md:p-10">
      <section>
        <p
          className="font-mono text-[10px] uppercase tracking-[0.28em]"
          style={{ color: accent(theme, 0.75) }}
        >
          Overview
        </p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          {summary}
        </p>
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-2">
        <DetailBlock label="Problem" text={problem} />
        <DetailBlock label="Key capability" text={keyFeature} />
      </section>

      <section className="mt-8">
        <p className="mb-3 text-[11px] font-medium uppercase tracking-wider text-white/30">
          Preview
        </p>
        <div className="overflow-hidden rounded-sm border border-white/[0.08] bg-[#08090D]">
          {image ? (
            <img
              src={image}
              alt={`${title} preview`}
              className="aspect-[16/10] w-full object-cover"
            />
          ) : (
            <div className="flex aspect-[16/10] items-center justify-center">
              <p className="text-sm text-white/25">Screenshot / visual</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function DetailBlock({ label, text }) {
  return (
    <div className="rounded-sm border border-white/[0.07] bg-white/[0.02] p-4">
      <p className="text-[11px] font-medium uppercase tracking-wider text-white/30">
        {label}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted-soft">{text}</p>
    </div>
  );
}
