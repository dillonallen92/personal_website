import { PageContainer } from "@/components/ui/PageContainer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { SkillTag } from "@/components/ui/SkillTag";
import { CVEntry } from "@/components/domain/CVEntry";

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
      title: "Degree, Institution",
      subtitle: "",
      dateRange: "Year - Year",
    },
  ],
};

const cvExperience: CVSection = {
  title: "Experience",
  entries: [
    {
      title: "Position Title",
      subtitle: "Organization",
      description: "Description of role and responsibilities.",
      dateRange: "Date Range",
    },
  ],
};

const cvPublications: CVSection = {
  title: "Publications",
  entries: [
    {
      title: "Publication details will be listed here.",
      subtitle: "",
    },
  ],
};

const cvTeaching: CVSection = {
  title: "Teaching",
  entries: [
    {
      title: "Course Name",
      subtitle: "Institution",
      dateRange: "Term",
    },
  ],
};

const cvSkills: CVSkills = {
  skills: ["Skill 1", "Skill 2", "Skill 3"],
};

/**
 * CV page component
 * Displays curriculum vitae with structured sections
 */
export default function CV() {
  return (
    <PageContainer>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-4xl font-bold text-charcoal">Curriculum Vitae</h1>
        <Button as="link" href="#" variant="primary" className="px-4 py-2 text-sm">
          Download PDF
        </Button>
      </div>

      <div className="space-y-8">
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
            {cvPublications.entries.map((entry, index) => (
              <p key={index}>{entry.title}</p>
            ))}
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

        <Section title="Technical Skills">
          <div className="flex flex-wrap gap-2">
            {cvSkills.skills.map((skill) => (
              <SkillTag key={skill} skill={skill} />
            ))}
          </div>
        </Section>
      </div>
    </PageContainer>
  );
}
