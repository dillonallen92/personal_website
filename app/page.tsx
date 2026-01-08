import Image from "next/image";
import Link from "next/link";

/**
 * Landing page component
 * Displays professional headshot, name, title, summary, and CTAs
 */
export default function Home() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center text-center">
        {/* Headshot */}
        <div className="mb-8">
          <Image
            src="/images/headshot.jpg"
            alt="Professional headshot"
            width={200}
            height={200}
            className="rounded-full object-cover"
            priority
          />
        </div>

        {/* Name */}
        <h1 className="mb-4 text-4xl font-bold text-charcoal sm:text-5xl">
          Your Name
        </h1>

        {/* Title */}
        <h2 className="mb-6 text-xl text-accentSlate sm:text-2xl">
          Engineering Professor & Applied Technical Practitioner
        </h2>

        {/* Professional Summary */}
        <p className="mb-8 max-w-2xl text-lg leading-relaxed text-charcoal">
          One-sentence professional summary that bridges academic teaching and
          applied technical work.
        </p>

        {/* CTA Buttons */}
        <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/courses"
            className="rounded-md bg-accentBlue px-6 py-3 text-base font-medium text-white hover:bg-blue-600 transition-colors"
          >
            View Courses
          </Link>
          <Link
            href="/projects"
            className="rounded-md border-2 border-accentBlue px-6 py-3 text-base font-medium text-accentBlue hover:bg-accentBlue hover:text-white transition-colors"
          >
            View Projects
          </Link>
        </div>

        {/* Featured Section */}
        <div className="w-full space-y-8">
          <h3 className="text-2xl font-semibold text-charcoal">Featured</h3>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Featured Projects Placeholder */}
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h4 className="mb-2 text-xl font-semibold text-charcoal">
                Featured Project 1
              </h4>
              <p className="text-accentSlate">
                Brief description of a highlighted project.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h4 className="mb-2 text-xl font-semibold text-charcoal">
                Featured Project 2
              </h4>
              <p className="text-accentSlate">
                Brief description of another highlighted project.
              </p>
            </div>
          </div>

          {/* Featured Course */}
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h4 className="mb-2 text-xl font-semibold text-charcoal">
              Featured Course
            </h4>
            <p className="text-accentSlate">
              Brief description of a highlighted course or teaching item.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
