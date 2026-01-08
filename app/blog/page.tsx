import Link from "next/link";

/**
 * Blog index page component
 * Displays list of blog posts with title, date, and excerpt
 */
export default function Blog() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-4xl font-bold text-charcoal">Blog</h1>

      <div className="space-y-8">
        {/* Blog Post Placeholder */}
        <article className="rounded-lg border border-gray-200 bg-white p-6">
          <Link href="/blog/example-post">
            <h2 className="mb-2 text-2xl font-semibold text-charcoal hover:text-accentBlue transition-colors">
              Blog Post Title
            </h2>
          </Link>
          <p className="mb-4 text-sm text-accentSlate">January 1, 2024</p>
          <p className="text-charcoal">
            Short excerpt from the blog post that gives readers a preview of
            the content...
          </p>
        </article>
      </div>
    </div>
  );
}
