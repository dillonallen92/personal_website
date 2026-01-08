/**
 * CV page component
 * Displays curriculum vitae with structured sections
 */
export default function CV() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-4xl font-bold text-charcoal">Curriculum Vitae</h1>
        <a
          href="#"
          className="rounded-md bg-accentBlue px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 transition-colors"
        >
          Download PDF
        </a>
      </div>

      <div className="space-y-8 text-lg leading-relaxed text-charcoal">
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-charcoal">
            Education
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Degree, Institution</h3>
              <p className="text-accentSlate">Year - Year</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-charcoal">
            Experience
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Position Title</h3>
              <p className="text-accentSlate">Organization | Date Range</p>
              <p>Description of role and responsibilities.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-charcoal">
            Publications
          </h2>
          <div className="space-y-2">
            <p>Publication details will be listed here.</p>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-charcoal">
            Teaching
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Course Name</h3>
              <p className="text-accentSlate">Institution | Term</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-charcoal">
            Technical Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-charcoal">
              Skill 1
            </span>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-charcoal">
              Skill 2
            </span>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-charcoal">
              Skill 3
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}
