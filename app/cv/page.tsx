import { PageContainer } from "@/components/ui/PageContainer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { SkillTag } from "@/components/ui/SkillTag";
import { CVEntry } from "@/components/domain/CVEntry";
import { getBasePath } from "@/utils/paths";

type CVSection = {
  title: string;
  entries: Array<{
    title: string;
    subtitle: string;
    description?: string;
    dateRange?: string;
  }>;
};

type CVSkills = {
  skills: string[];
};

const cvEducation: CVSection = {
  title: "Education",
  entries: [
    {
      title: "M.S. Mathematics",
      subtitle: "Fresno State University",
      dateRange: "In Progress",
    },
    {
      title: "M.S. Space Systems Engineering",
      subtitle: "Johns Hopkins University, Whiting College of Engineering",
      dateRange: "Dec 2021",
    },
    {
      title: "B.S. Physics",
      subtitle: "University of California at Santa Barbara, College of Letters and Science",
      dateRange: "June 2017",
    },
  ],
};

const cvExperience: CVSection = {
  title: "Experience",
  entries: [
    {
      title: "Engineering Professor",
      subtitle: "College of the Sequoias – Visalia, CA",
      description: "Teach MATLAB, Computer Architecture, Introduction to Engineering, Engineering Graphics (SolidWorks), Engineering Statics, Material Science, Engineering Circuits. Manage the engineering department, handle curriculum, articulation, mentor students.",
      dateRange: "Aug 2023 – Present",
    },
    {
      title: "ATLAS Intern",
      subtitle: "John's Hopkins Applied Physics Lab – Laurel, MD",
      description: "Conduct statistical analyses on big data sets to develop efficient compression algorithms. Simulation design and analysis in AFSIM. Developed probabilistic models for operational usage.",
      dateRange: "May 2023 – Aug 2024",
    },
    {
      title: "Guidance, Navigation and Control Engineer",
      subtitle: "Lockheed Martin, Space – Sunnyvale, CA",
      description: "Conduct statistical analyses on big data sets to draw design conclusions. Present analyses and design conclusions to chief engineers and stakeholders. Monte Carlo Probabilistic Simulations for Systems Engineering Work. Create Mathematical Models for IRAD Studies. Implement/design clustering and discrimination algorithms. Simulation Development for GNC IRADs.",
      dateRange: "Jan 2022 – Jan 2023",
    },
    {
      title: "Electrical Engineer – High Power Electronic Attack Technique Radiation Group",
      subtitle: "SAIC – Oxnard, CA",
      description: "Requirement Analysis on Next Generation Jammer – Mid Band. Developed software to automate test point analysis and report creation. Wrote Detailed Methods of Test reports and supervised test runs. Generated Verification and Validation Matrices. Implemented custom NI VISA scripts for instrumentation and data collection.",
      dateRange: "July 2019 – July 2020",
    },
  ],
};

const cvPublications: CVSection = {
  title: "Publications",
  entries: [],
};

const cvTeaching: CVSection = {
  title: "Teaching",
  entries: [
    {
      title: "MATLAB",
      subtitle: "College of the Sequoias",
      dateRange: "Aug 2023 – Present",
    },
    {
      title: "Computer Architecture",
      subtitle: "College of the Sequoias",
      dateRange: "Aug 2023 – Present",
    },
    {
      title: "Introduction to Engineering",
      subtitle: "College of the Sequoias",
      dateRange: "Aug 2023 – Present",
    },
    {
      title: "Engineering Graphics (SolidWorks)",
      subtitle: "College of the Sequoias",
      dateRange: "Aug 2023 – Present",
    },
    {
      title: "Engineering Statics",
      subtitle: "College of the Sequoias",
      dateRange: "Aug 2023 – Present",
    },
    {
      title: "Material Science",
      subtitle: "College of the Sequoias",
      dateRange: "Aug 2023 – Present",
    },
    {
      title: "Engineering Circuits",
      subtitle: "College of the Sequoias",
      dateRange: "Aug 2023 – Present",
    },
  ],
};

const cvSkills: CVSkills = {
  skills: [
    "Mathematical Modeling",
    "Kalman Filter and Smoothing Algorithms",
    "Estimation Algorithms",
    "Data Driven Design",
    "Simulation Design",
    "Statistical and Machine Learning",
    "Stochastic Models",
    "MATLAB",
    "C++",
    "Modern Fortran",
    "Python",
    "Git",
  ],
};

/**
 * CV page component
 * Displays curriculum vitae with structured sections
 */
export default function CV() {
  const basePath = getBasePath();

  return (
    <PageContainer>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-4xl font-bold text-charcoal">Curriculum Vitae</h1>
        <Button
          as="link"
          href={`${basePath}/pdfs/Resume_DA_2026.pdf`}
          variant="primary"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-sm min-h-[44px]"
          ariaLabel="Download resume PDF (opens in new tab)"
        >
          Download PDF
        </Button>
      </div>

      <div className="space-y-8">
        <Section title="Technical Skills">
          <div className="flex flex-wrap gap-2">
            {cvSkills.skills.map((skill) => (
              <SkillTag key={skill} skill={skill} />
            ))}
          </div>
        </Section>

        <Section title={cvEducation.title}>
          <div className="space-y-4">
            {cvEducation.entries.map((entry, index) => (
              <CVEntry
                key={index}
                title={entry.title}
                subtitle={entry.subtitle}
                dateRange={entry.dateRange}
                description={entry.description}
              />
            ))}
          </div>
        </Section>

        <Section title={cvExperience.title}>
          <div className="space-y-4">
            {cvExperience.entries.map((entry, index) => (
              <CVEntry
                key={index}
                title={entry.title}
                subtitle={entry.subtitle}
                dateRange={entry.dateRange}
                description={entry.description}
              />
            ))}
          </div>
        </Section>

        <Section title={cvPublications.title}>
          <div className="space-y-2">
            {cvPublications.entries.length > 0 ? (
              cvPublications.entries.map((entry, index) => (
                <p key={index}>{entry.title}</p>
              ))
            ) : (
              <p className="text-accentSlate">No publications listed.</p>
            )}
          </div>
        </Section>

        <Section title={cvTeaching.title}>
          <div className="space-y-4">
            {cvTeaching.entries.map((entry, index) => (
              <CVEntry
                key={index}
                title={entry.title}
                subtitle={entry.subtitle}
                dateRange={entry.dateRange}
              />
            ))}
          </div>
        </Section>
      </div>
    </PageContainer>
  );
}
