const ImagePlaceholder = ({
  label,
  color = "brand-beige",
  className = "",
  aspectRatio = "aspect-[4/3]",
}: {
  label: string;
  color?: string;
  className?: string;
  aspectRatio?: string;
}) => (
  <div className={`bg-${color} ${aspectRatio} flex items-center justify-center ${className}`}>
    <span className="font-body text-[11px] uppercase tracking-[2px] text-brand-taupe text-center px-6">
      {label}
    </span>
  </div>
);

export default ImagePlaceholder;
