/**
 * Generate static params for blog post pages
 * Returns empty array for now - update when you have actual blog posts
 */
export function generateStaticParams() {
  // Return empty array for now - update with actual blog post slugs when available
  // Example: return [{ slug: 'my-first-post' }, { slug: 'another-post' }]
  return [];
}

/**
 * Individual blog post page component
 * Displays full blog post content
 */
export default function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <article className="prose prose-lg max-w-none">
        <h1 className="mb-4 text-4xl font-bold text-charcoal">
          Blog Post Title
        </h1>
        <p className="mb-8 text-sm text-accentSlate">January 1, 2024</p>
        <div className="space-y-4 text-lg leading-relaxed text-charcoal">
          <p>
            Blog post content will be rendered here. This page supports MDX
            with math and code blocks.
          </p>
        </div>
      </article>
    </div>
  );
}
