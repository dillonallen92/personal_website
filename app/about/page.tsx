import { PageContainer } from "@/components/ui/PageContainer";
import { PageTitle } from "@/components/ui/PageTitle";
import { Section } from "@/components/ui/Section";

type AboutSection = {
  title: string;
  content: string;
};

const aboutSections: AboutSection[] = [
  {
    title: "Current Role",
    content:
      "Professor of Engineering at a local community college in Visalia, California. I am responsible for teaching all of the engineering courses on campus and I am also teaching a couple courses in the Computer Science department.",
  },
  {
    title: "Prior Industry Experience",
    content:
      "Previously, I have worked for Lockheed Martin, with a focus on Guidance, Navigation, and Control (GNC) systems for various systems. Additionally, as a graduate student, I have done internships at the Johns Hopkins Applied Physics Lab, focusing on mathematical modeling, GNC work, and machine learning for a multitude of projects within the lab.",
  },
  {
    title: "Technical Interests",
    content: "I am interested in all things related to software development, machine learning, and artificial intelligence. I am also interested in the intersection of software development and engineering, and how to use software development to solve engineering problems. I am also interested in robotics, computer vision, and autonomous systems.",
  },
  {
    title: "Teaching Interests",
    content: "For my teaching style, I try to follow a project-focused approach. I believe that the best way to learn is by doing. I also believe that the best way to teach is by doing. I try to make my courses as hands-on as possible, and I try to use real-world examples whenever possible.",
  },
];

/**
 * About page component
 * Displays expanded professional background
 */
export default function About() {
  return (
    <PageContainer>
      <PageTitle title="About" />

      <div className="space-y-8">
        {aboutSections.map((section) => (
          <Section key={section.title} title={section.title}>
            <p>{section.content}</p>
          </Section>
        ))}
      </div>
    </PageContainer>
  );
}
