import { type ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Consistent page container wrapper for all pages
 * Provides consistent max-width and padding
 * @param props - Container configuration props
 * @returns Wrapped page content
 */
export function PageContainer({ children, className = "" }: PageContainerProps) {
  return (
    <div className={`mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 ${className}`.trim()}>
      {children}
    </div>
  );
}
