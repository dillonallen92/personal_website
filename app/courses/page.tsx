/**
 * Courses page component
 * Displays teaching and courses organized by term
 */
export default function Courses() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-4xl font-bold text-charcoal">Courses</h1>

      <div className="space-y-12">
        {/* Fall Courses */}
        <section>
          <h2 className="mb-6 text-3xl font-semibold text-charcoal">
            Fall Courses
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Course Card Placeholder */}
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-2 text-xl font-semibold text-charcoal">
                Course Title
              </h3>
              <p className="mb-2 text-sm text-accentSlate">Institution</p>
              <p className="mb-4 text-sm text-accentSlate">Term</p>
              <p className="mb-4 text-charcoal">
                Short description of the course content and objectives.
              </p>
              <a
                href="#"
                className="text-accentBlue hover:underline"
              >
                Syllabus →
              </a>
            </div>
          </div>
        </section>

        {/* Spring Courses */}
        <section>
          <h2 className="mb-6 text-3xl font-semibold text-charcoal">
            Spring Courses
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Course Card Placeholder */}
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-2 text-xl font-semibold text-charcoal">
                Course Title
              </h3>
              <p className="mb-2 text-sm text-accentSlate">Institution</p>
              <p className="mb-4 text-sm text-accentSlate">Term</p>
              <p className="mb-4 text-charcoal">
                Short description of the course content and objectives.
              </p>
              <a
                href="#"
                className="text-accentBlue hover:underline"
              >
                Syllabus →
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
