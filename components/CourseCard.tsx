type CourseCardProps = {
  title: string;
  institution: string;
  term: string;
  summary: string;
  syllabusUrl?: string;
};

export function CourseCard({
  title,
  institution,
  term,
  summary,
  syllabusUrl,
}: CourseCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6">
      <h3 className="mb-2 text-xl font-semibold text-charcoal">{title}</h3>
      <p className="mb-2 text-sm text-accentSlate">{institution}</p>
      <p className="mb-4 text-sm text-accentSlate">{term}</p>
      <p className="mb-4 text-charcoal">{summary}</p>
      {syllabusUrl && (
        <a href={syllabusUrl} className="text-accentBlue hover:underline">
          Syllabus →
        </a>
      )}
    </div>
  );
}