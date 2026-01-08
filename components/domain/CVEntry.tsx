type CVEntryProps = {
  title: string;
  subtitle: string;
  description?: string;
  dateRange?: string;
};

/**
 * CV entry component for displaying structured CV items
 * Used for education, experience, publications, and teaching sections
 * @param props - CV entry configuration props
 * @returns CV entry element
 */
export function CVEntry({
  title,
  subtitle,
  description,
  dateRange,
}: CVEntryProps) {
  return (
    <div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-accentSlate">
        {subtitle}
        {dateRange && ` | ${dateRange}`}
      </p>
      {description && <p className="mt-1">{description}</p>}
    </div>
  );
}
