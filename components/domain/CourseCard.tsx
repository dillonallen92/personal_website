type CourseCardProps = {
  title: string;
  institution: string;
  term: string;
  summary: string;
  syllabusUrl?: string;
  onSyllabusClick?: () => void;
};

/**
 * Course card component for displaying course information
 * Used in the courses page to show course details
 * @param props - Course card configuration props
 * @returns Course card element
 */
export function CourseCard({
  title,
  institution,
  term,
  summary,
  syllabusUrl,
  onSyllabusClick,
}: CourseCardProps) {
  /**
   * Handles card click to open syllabus modal
   */
  const handleClick = () => {
    if (syllabusUrl && syllabusUrl !== "#" && onSyllabusClick) {
      onSyllabusClick();
    }
  };

  /**
   * Handles keyboard interaction (Enter/Space) to open syllabus modal
   * @param event - Keyboard event
   */
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if ((event.key === "Enter" || event.key === " ") && syllabusUrl && syllabusUrl !== "#" && onSyllabusClick) {
      event.preventDefault();
      onSyllabusClick();
    }
  };

  const isClickable = syllabusUrl && syllabusUrl !== "#" && onSyllabusClick;

  return (
    <div
      className={`rounded-lg border border-gray-200 bg-white p-6 transition-all ${
        isClickable
          ? "cursor-pointer hover:border-accentBlue hover:shadow-md active:bg-gray-50"
          : ""
      }`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role={isClickable ? "button" : undefined}
      tabIndex={isClickable ? 0 : undefined}
      aria-label={isClickable ? `View syllabus for ${title}` : undefined}
    >
      <h3 className="mb-2 text-xl font-semibold text-charcoal">{title}</h3>
      <p className="mb-2 text-sm text-accentSlate">{institution}</p>
      <p className="mb-4 text-sm text-accentSlate">{term}</p>
      <p className="mb-4 text-charcoal">{summary}</p>
      {syllabusUrl && syllabusUrl !== "#" && (
        <p className="text-sm text-accentBlue">
          Click to view syllabus →
        </p>
      )}
    </div>
  );
}
