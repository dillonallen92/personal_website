/**
 * About page component
 * Displays expanded professional background
 */
export default function About() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-4xl font-bold text-charcoal">About</h1>

      <div className="space-y-8 text-lg leading-relaxed text-charcoal">
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-charcoal">
            Current Role
          </h2>
          <p>Professor of Engineering at a local community college in Visalia, California. I am responsible for teaching all of the engineering courses on campus and I am also teaching a couple courses in the Computer Science department.</p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-charcoal">
            Prior Industry Experience
          </h2>
          <p>Previously, I have worked for Lockheed Martin, with a focus on Guidance, Navigation, and Control (GNC) systems for various systems. Additionally, as a graduate student, I have done internships at the Johns Hopkins Applied Physics Lab, focusing on mathematical modeling, GNC work, and machine learning for a multitude of projects within the lab. </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-charcoal">
            Technical Interests
          </h2>
          <p>Your areas of technical focus and interests.</p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-charcoal">
            Teaching Interests
          </h2>
          <p>Your teaching philosophy and areas of focus.</p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-charcoal">
            Career Direction
          </h2>
          <p>Your professional goals and direction.</p>
        </section>
      </div>
    </div>
  );
}
