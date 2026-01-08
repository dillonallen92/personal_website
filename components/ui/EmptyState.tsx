type EmptyStateProps = {
  message: string;
  className?: string;
};

/**
 * Reusable empty state component for displaying messages when content is unavailable
 * @param props - Empty state configuration props
 * @returns Empty state element
 */
export function EmptyState({ message, className = "" }: EmptyStateProps) {
  return (
    <div
      className={`rounded-lg border border-gray-200 bg-gray-50 p-8 text-center ${className}`.trim()}
    >
      <p className="text-lg text-charcoal">{message}</p>
    </div>
  );
}
