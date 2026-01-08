type FeaturedCardProps = {
  title: string;
  description: string;
  className?: string;
};

/**
 * Featured card component for displaying featured items on the home page
 * @param props - Featured card configuration props
 * @returns Featured card element
 */
export function FeaturedCard({
  title,
  description,
  className = "",
}: FeaturedCardProps) {
  return (
    <div className={`rounded-lg border border-gray-200 bg-white p-6 ${className}`.trim()}>
      <h4 className="mb-2 text-xl font-semibold text-charcoal">{title}</h4>
      <p className="text-accentSlate">{description}</p>
    </div>
  );
}
