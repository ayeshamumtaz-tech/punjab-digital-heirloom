type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  variant?: "dark" | "light";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  variant = "dark",
}: Props) {
  const isCenter = align === "center";
  const isLight = variant === "light";
  return (
    <div className={`max-w-3xl ${isCenter ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase mb-5 ${
            isLight ? "text-mustard" : "text-primary"
          }`}
        >
          <span className="h-px w-8 bg-current" />
          {eyebrow}
        </div>
      )}
      <h2
        className={`font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance ${
          isLight ? "text-beige" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-6 text-lg leading-relaxed text-pretty ${
            isLight ? "text-beige/70" : "text-muted-foreground"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
