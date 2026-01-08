import Image from "next/image";
import Link from "next/link";

/**
 * Get the base path for the application
 * In production, this is '/personal_website', locally it's empty
 */
const getBasePath = () => {
  return process.env.NODE_ENV === 'production' ? '/personal_website' : '';
};

/**
 * Landing page component
 * Displays professional headshot, name, title, summary, and CTAs
 */
export default function Home() {
  const basePath = getBasePath();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center text-center">
        {/* Headshot */}
        <div className="mb-8">
          <Image
            src={`${basePath}/images/headshot.jpg`}
            alt="Professional headshot"
            width={200}
            height={200}
            className="rounded-full object-cover"
            priority
          />
        </div>

        {/* Name */}
        <h1 className="mb-4 text-4xl font-bold text-charcoal sm:text-5xl">
          Hello, I&apos;m Dillon Allen
        </h1>

        {/* Title */}
        <h2 className="mb-6 text-xl text-accentSlate sm:text-2xl">
          Engineering Professor & Applied Technical Practitioner
        </h2>

        {/* Professional Summary */}
        <p className="mb-8 max-w-2xl text-lg leading-relaxed text-charcoal">
          Engineering Professor, teaching at a local community college in Visalia, California. I have a passion for teaching and learning, and I have a passion for development and deep technical work.
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
                Valley Fever Forecasting
              </h4>
              <p className="text-accentSlate">
                Using a two layer masked LSTM, I am predicting Valley Fever case rates in the Fresno County region based on a multitude of environmental varaibles.
              </p>
            </div>
          </div>

          {/* Featured Course */}
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h4 className="mb-2 text-xl font-semibold text-charcoal">
              MATLAB Programming
            </h4>
            <p className="text-accentSlate">
              MATLAB Programming focuses on the intersection of computing skills and engineering concepts. In this course, I focus on core programming skills and numerical methods to help prepare students for industry and research.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
