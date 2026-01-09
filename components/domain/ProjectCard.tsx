import { SkillTag } from "@/components/ui/SkillTag";

type ProjectCardProps = {
  title: string;
  summary: string;
  technologies: string[];
  githubUrl?: string;
  className?: string;
};

/**
 * Project card component for displaying project information
 * Similar structure to CourseCard for consistency
 * Card is clickable when githubUrl is provided, opening the GitHub repository in a new tab
 * @param props - Project card configuration props
 * @returns Project card element
 */
export function ProjectCard({
  title,
  summary,
  technologies,
  githubUrl,
  className = "",
}: ProjectCardProps) {
  const cardContent = (
    <>
      <div className="mb-3 flex items-start justify-between">
        <h3 className="text-xl font-semibold text-charcoal">{title}</h3>
        {githubUrl && (
          <svg
            className="h-5 w-5 flex-shrink-0 text-accentSlate transition-colors group-hover:text-accentBlue"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-label="GitHub Repository"
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
      <p className="mb-4 text-charcoal">{summary}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <SkillTag key={tech} skill={tech} size="sm" />
        ))}
      </div>
    </>
  );

  if (githubUrl) {
    return (
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`group block rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-accentBlue hover:shadow-md ${className}`.trim()}
      >
        {cardContent}
      </a>
    );
  }

  return (
    <div className={`rounded-lg border border-gray-200 bg-white p-6 ${className}`.trim()}>
      {cardContent}
    </div>
  );
}
