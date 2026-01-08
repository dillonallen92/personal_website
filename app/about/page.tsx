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
    content: "Your areas of technical focus and interests.",
  },
  {
    title: "Teaching Interests",
    content: "Your teaching philosophy and areas of focus.",
  },
  {
    title: "Career Direction",
    content: "Your professional goals and direction.",
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
