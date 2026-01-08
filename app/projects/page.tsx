import Link from "next/link";

/**
 * Projects index page component
 * Displays grid of project cards
 */
export default function Projects() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-4xl font-bold text-charcoal">Projects</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Project Card Placeholder */}
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h3 className="mb-3 text-xl font-semibold text-charcoal">
            Project Title
          </h3>
          <p className="mb-4 text-charcoal">
            Short technical summary of the project and its key achievements.
          </p>
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-charcoal">
              React
            </span>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-charcoal">
              TypeScript
            </span>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-charcoal">
              Next.js
            </span>
          </div>
          <Link
            href="/projects/example"
            className="text-accentBlue hover:underline"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
}
