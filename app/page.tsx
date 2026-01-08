import { PageContainer } from "@/components/ui/PageContainer";
import { Button } from "@/components/ui/Button";
import { ProfileHeader } from "@/components/domain/ProfileHeader";
import { FeaturedCard } from "@/components/domain/FeaturedCard";
import { profileData } from "@/data/profile";
import { featuredProjects, featuredCourses } from "@/data/featured";
import { getBasePath } from "@/utils/paths";

/**
 * Landing page component
 * Displays professional headshot, name, title, summary, and CTAs
 */
export default function Home() {
  const basePath = getBasePath();

  return (
    <PageContainer>
      <div className="flex flex-col items-center text-center">
        <ProfileHeader
          name={profileData.name}
          title={profileData.title}
          summary={profileData.summary}
          headshotSrc={`${basePath}${profileData.headshotSrc}`}
        />

        {/* CTA Buttons */}
        <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button as="link" href="/courses" variant="primary">
            View Courses
          </Button>
          <Button as="link" href="/projects" variant="outline">
            View Projects
          </Button>
        </div>

        {/* Featured Section */}
        <div className="w-full space-y-8">
          <h3 className="text-2xl font-semibold text-charcoal">Featured</h3>

          <div className="grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <FeaturedCard
                key={project.title}
                title={project.title}
                description={project.description}
              />
            ))}
            {featuredCourses.map((course) => (
              <FeaturedCard
                key={course.title}
                title={course.title}
                description={course.description}
              />
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
