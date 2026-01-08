import { type ReactNode } from "react";

type SectionProps = {
  title?: string;
  children: ReactNode;
  className?: string;
};

/**
 * Reusable Section component for structured content sections
 * @param props - Section configuration props
 * @returns Section element with optional title
 */
export function Section({ title, children, className = "" }: SectionProps) {
  return (
    <section className={className}>
      {title && (
        <h2 className="mb-4 text-2xl font-semibold text-charcoal">{title}</h2>
      )}
      <div className="text-lg leading-relaxed text-charcoal">{children}</div>
    </section>
  );
}
