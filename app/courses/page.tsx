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
import { courses, type Semester } from "@/data/courses";

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

  /**
   * Handles semester toggle button clicks
   * @param semester - The semester to toggle (fall or spring)
   */
  const handleSemesterToggle = (semester: Semester) => {
    setSelectedSemester(toggleSemester(selectedSemester, semester));
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
                />
              ))}
            </div>
          </section>
        )}

        {selectedSemester === null && (
          <EmptyState message="Please select a semester to view courses." />
        )}
      </div>
    </PageContainer>
  );
}
