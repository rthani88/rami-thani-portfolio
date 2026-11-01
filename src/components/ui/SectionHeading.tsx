type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  align?: "start" | "center";
};

export function SectionHeading({ eyebrow, title, align = "start" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <p className="text-sm text-gold mb-3">{eyebrow}</p>
      <h2 className="text-3xl sm:text-4xl font-semibold text-ivory max-w-2xl mx-0 leading-tight">
        {title}
      </h2>
    </div>
  );
}
