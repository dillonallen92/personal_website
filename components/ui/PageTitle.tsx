type PageTitleProps = {
  title: string;
  className?: string;
};

/**
 * Consistent page title component
 * @param props - Page title configuration props
 * @returns Page title heading element
 */
export function PageTitle({ title, className = "" }: PageTitleProps) {
  return (
    <h1 className={`mb-8 text-4xl font-bold text-charcoal ${className}`.trim()}>
      {title}
    </h1>
  );
}
