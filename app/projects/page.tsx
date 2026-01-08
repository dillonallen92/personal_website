import { PageContainer } from "@/components/ui/PageContainer";
import { PageTitle } from "@/components/ui/PageTitle";
import { ProjectCard } from "@/components/domain/ProjectCard";
import { allProjects } from "@/data/projects";

/**
 * Projects index page component
 * Displays grid of project cards
 */
export default function Projects() {
  return (
    <PageContainer>
      <PageTitle title="Projects" />

      <div className="grid gap-6 md:grid-cols-2">
        {allProjects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            summary={project.summary}
            technologies={project.technologies}
          />
        ))}
      </div>
    </PageContainer>
  );
}
