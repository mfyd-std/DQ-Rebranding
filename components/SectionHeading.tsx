type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  emphasis?: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  emphasis,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-dq-gold">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-dq-charcoal md:text-5xl">
        {title} {emphasis && <span className="italic text-dq-green">{emphasis}</span>}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-dq-warm-gray">
          {description}
        </p>
      )}
    </div>
  );
}
