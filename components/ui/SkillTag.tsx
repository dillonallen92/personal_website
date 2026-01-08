type SkillTagProps = {
  skill: string;
  size?: "sm" | "md";
};

/**
 * Reusable skill tag component for displaying technical skills
 * Used in CV and Projects pages
 * @param props - Skill tag configuration props
 * @returns Skill tag element
 */
export function SkillTag({ skill, size = "md" }: SkillTagProps) {
  const sizeStyles = {
    sm: "text-xs",
    md: "text-sm",
  };

  return (
    <span
      className={`rounded-full bg-gray-100 px-3 py-1 ${sizeStyles[size]} text-charcoal`}
    >
      {skill}
    </span>
  );
}
