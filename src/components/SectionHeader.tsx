type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: Props) {
  const alignClasses =
    align === "center" ? "text-center items-center" : "items-start";
  return (
    <div
      className={`flex flex-col gap-4 max-w-2xl ${alignClasses} ${
        align === "center" ? "mx-auto" : ""
      }`}
    >
      {eyebrow && (
        <div
          data-reveal
          className="flex items-center gap-3"
        >
          <span className="gold-divider" />
          <span className="label-caps text-gold-300">{eyebrow}</span>
        </div>
      )}
      <h2
        data-reveal
        data-reveal-delay="80"
        className="font-display font-bold tracking-tightish text-3xl sm:text-4xl lg:text-[40px] lg:leading-[1.15] text-white"
      >
        {title}
      </h2>
      {subtitle && (
        <p
          data-reveal
          data-reveal-delay="160"
          className="text-white/65 text-lg leading-relaxed"
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
