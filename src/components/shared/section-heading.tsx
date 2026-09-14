interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
}
export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-7 max-w-2xl">
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="section-title">{title}</h2>
      {description && <p className="body-copy mt-3">{description}</p>}
    </div>
  );
}
