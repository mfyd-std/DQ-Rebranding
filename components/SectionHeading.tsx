type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  emphasis?: string;
  description?: string;
  light?: boolean;
  reveal?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  emphasis,
  description,
  light = false,
  reveal = true,
}: SectionHeadingProps) {
  return (
    <div className={`${reveal ? "reveal " : ""}mx-auto max-w-3xl text-center`}>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-dq-gold">
        {eyebrow}
      </p>
      <h2 className={`mt-3 font-serif text-4xl font-semibold leading-tight md:text-5xl ${light ? "text-white" : "text-dq-charcoal"}`}>
        {title} {emphasis && <span className={`italic ${light ? "text-dq-gold" : "text-dq-green"}`}>{emphasis}</span>}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-dq-warm-gray">
          {description}
        </p>
      )}
    </div>
  );
}
