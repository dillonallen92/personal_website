/**
 * Contact page component
 * Displays contact information and links
 */
export default function Contact() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-4xl font-bold text-charcoal">Contact</h1>

      <div className="space-y-6 text-lg text-charcoal">
        <div>
          <h2 className="mb-2 text-xl font-semibold text-charcoal">Email</h2>
          <a
            href="mailto:your.email@example.com"
            className="text-accentBlue hover:underline"
          >
            your.email@example.com
          </a>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-semibold text-charcoal">LinkedIn</h2>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accentBlue hover:underline"
          >
            linkedin.com/in/yourprofile
          </a>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-semibold text-charcoal">GitHub</h2>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accentBlue hover:underline"
          >
            github.com/yourusername
          </a>
        </div>
      </div>
    </div>
  );
}
