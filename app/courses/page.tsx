/**
 * Courses page component
 * Displays teaching and courses organized by term with toggle functionality
 */
"use client";

import { useState } from "react";
import { PageContainer } from "@/components/ui/PageContainer";
import { PageTitle } from "@/components/ui/PageTitle";
import { EmptyState } from "@/components/ui/EmptyState";
import { CourseCard } from "@/components/domain/CourseCard";
import { SemesterToggle } from "@/components/domain/SemesterToggle";
import { Modal } from "@/components/ui/Modal";
import { PdfViewer } from "@/components/ui/PdfViewer";
import { courses, type Semester, type Course } from "@/data/courses";

type SelectedSemester = Semester | null;

/**
 * Toggles the selected semester
 * @param currentSemester - The currently selected semester
 * @param targetSemester - The semester to toggle (fall or spring)
 * @returns The new selected semester state
 */
const toggleSemester = (
  currentSemester: SelectedSemester,
  targetSemester: Semester
): SelectedSemester => {
  if (currentSemester === targetSemester) {
    return null;
  }
  return targetSemester;
};

export default function Courses() {
  const [selectedSemester, setSelectedSemester] =
    useState<SelectedSemester>("fall");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  /**
   * Handles semester toggle button clicks
   * @param semester - The semester to toggle (fall or spring)
   */
  const handleSemesterToggle = (semester: Semester) => {
    setSelectedSemester(toggleSemester(selectedSemester, semester));
  };

  /**
   * Handles course card click to open syllabus modal
   * @param course - The course whose syllabus to display
   */
  const handleSyllabusClick = (course: Course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
    setIsFullscreen(false);
  };

  /**
   * Handles modal close
   */
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
    setIsFullscreen(false);
  };

  /**
   * Handles fullscreen toggle
   */
  const handleToggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const semesterCourses = selectedSemester
    ? courses[selectedSemester]
    : [];

  return (
    <PageContainer>
      <PageTitle title="Courses" />

      <SemesterToggle
        selectedSemester={selectedSemester}
        onToggle={handleSemesterToggle}
      />

      <div className="space-y-12">
        {selectedSemester && (
          <section>
            <h2 className="mb-6 text-3xl font-semibold text-charcoal">
              {selectedSemester === "fall" ? "Fall" : "Spring"} Courses
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {semesterCourses.map((course) => (
                <CourseCard
                  key={`${course.title}-${course.term}`}
                  title={course.title}
                  institution={course.institution}
                  term={course.term}
                  summary={course.summary}
                  syllabusUrl={course.syllabusUrl}
                  onSyllabusClick={() => handleSyllabusClick(course)}
                />
              ))}
            </div>
          </section>
        )}

        {selectedSemester === null && (
          <EmptyState message="Please select a semester to view courses." />
        )}
      </div>

      {/* Syllabus Modal */}
      {selectedCourse && selectedCourse.syllabusUrl && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={`${selectedCourse.title} - Syllabus`}
          allowFullscreen={true}
          isFullscreen={isFullscreen}
          onToggleFullscreen={handleToggleFullscreen}
        >
          <PdfViewer
            url={selectedCourse.syllabusUrl}
            title={selectedCourse.title}
          />
        </Modal>
      )}
    </PageContainer>
  );
}
