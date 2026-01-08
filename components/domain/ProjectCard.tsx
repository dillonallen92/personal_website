import { SkillTag } from "@/components/ui/SkillTag";

type ProjectCardProps = {
  title: string;
  summary: string;
  technologies: string[];
  className?: string;
};

/**
 * Project card component for displaying project information
 * Similar structure to CourseCard for consistency
 * @param props - Project card configuration props
 * @returns Project card element
 */
export function ProjectCard({
  title,
  summary,
  technologies,
  className = "",
}: ProjectCardProps) {
  return (
    <div className={`rounded-lg border border-gray-200 bg-white p-6 ${className}`.trim()}>
      <h3 className="mb-3 text-xl font-semibold text-charcoal">{title}</h3>
      <p className="mb-4 text-charcoal">{summary}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <SkillTag key={tech} skill={tech} size="sm" />
        ))}
      </div>
    </div>
  );
}
