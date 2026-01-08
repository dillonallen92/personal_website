import Link from "next/link";

/**
 * Individual project detail page component
 * Displays full project information
 */
export default function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <Link
        href="/projects"
        className="mb-6 inline-block text-accentBlue hover:underline"
      >
        ← Back to Projects
      </Link>

      <article className="space-y-8">
        <header>
          <h1 className="mb-4 text-4xl font-bold text-charcoal">
            Project Title
          </h1>
        </header>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-charcoal">
            Problem Statement
          </h2>
          <p className="text-lg leading-relaxed text-charcoal">
            Description of the problem this project addresses.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-charcoal">
            Motivation / Context
          </h2>
          <p className="text-lg leading-relaxed text-charcoal">
            Why this project was undertaken and the context surrounding it.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-charcoal">
            Technical Approach
          </h2>
          <p className="text-lg leading-relaxed text-charcoal">
            Detailed explanation of the technical approach and methodology.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-charcoal">
            Tools and Technologies
          </h2>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-charcoal">
              Technology 1
            </span>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-charcoal">
              Technology 2
            </span>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-charcoal">
              Technology 3
            </span>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-charcoal">
            Results or Outcomes
          </h2>
          <p className="text-lg leading-relaxed text-charcoal">
            What was achieved and the outcomes of the project.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-charcoal">
            What Was Learned
          </h2>
          <p className="text-lg leading-relaxed text-charcoal">
            Key learnings and insights from working on this project.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-charcoal">Links</h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="text-accentBlue hover:underline"
            >
              GitHub →
            </a>
            <a
              href="#"
              className="text-accentBlue hover:underline"
            >
              Paper →
            </a>
            <a
              href="#"
              className="text-accentBlue hover:underline"
            >
              Demo →
            </a>
          </div>
        </section>
      </article>
    </div>
  );
}
