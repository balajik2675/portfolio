type Props = {
  /** Small label, e.g. "ABOUT ME" — a blue slash is added automatically */
  label: string;
  title: string;
  className?: string;
  id?: string;
};

/** Shared section intro: tiny "/ LABEL" plus a large Space Grotesk heading. */
export function SectionHeading({ label, title, className = "", id }: Props) {
  return (
    <div className={className}>
      <p className="mb-3 text-xs font-medium tracking-[0.18em] text-muted">
        <span className="text-accent">/</span> {label}
      </p>
      <h2
        id={id}
        className="max-w-xl font-heading text-3xl font-medium leading-tight text-white sm:text-4xl lg:text-5xl"
      >
        {title}
      </h2>
    </div>
  );
}
