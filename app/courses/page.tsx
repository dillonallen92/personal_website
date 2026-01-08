/**
 * Courses page component
 * Displays teaching and courses organized by term
 */
import { CourseCard } from "@/components/CourseCard";

export default function Courses() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-4xl font-bold text-charcoal">Courses</h1>

      <div className="space-y-12">
        {/* Fall Courses */}
        <section>
          <h2 className="mb-6 text-3xl font-semibold text-charcoal">
            Fall Courses
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Course Card Placeholder */}
            <CourseCard
              title="MATLAB Programming"
              institution="College of the Sequoias"
              term="Fall 2025"
              summary="This course focuses on the fundamentals of MATLAB programming, including the use of arrays, matrices, and functions. Students learn Object Oriented Programming and Applied Mathematics to solve real-world problems."
              syllabusUrl="#"
            />
            <CourseCard
              title="Introduction to Engineering"
              institution="College of the Sequoias"
              term="Fall 2025"
              summary="This course is an introduction to the field of engineering, covering the major branches of engineering and the skills needed to succeed in the field."
              syllabusUrl="#"
            />
            <CourseCard
              title="Statics"
              institution="College of the Sequoias"
              term="Fall 2025"
              summary="This course focuses on the principles of statics, including the analysis of forces and moments on rigid bodies."
              syllabusUrl="#"
            />
            <CourseCard
              title="Engineering Graphics"
              institution="College of the Sequoias"
              term="Fall 2025"
              summary="Engineering Graphics is a course that teaches students how to read and interpret engineering drawings. This course also focuses on the SolidWorks CAD Software and 3D printing."
              syllabusUrl="#"
            />
          </div>
        </section>

        {/* Spring Courses */}
        <section>
          <h2 className="mb-6 text-3xl font-semibold text-charcoal">
            Spring Courses
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <CourseCard
              title="MATLAB Programming"
              institution="College of the Sequoias"
              term="Spring 2026"
              summary="This course focuses on the fundamentals of MATLAB programming, including the use of arrays, matrices, and functions. Students learn Object Oriented Programming and Applied Mathematics to solve real-world problems."
              syllabusUrl="#"
            />
            <CourseCard
              title="Introduction to Engineering"
              institution="College of the Sequoias"
              term="Spring 2026"
              summary="This course is an introduction to the field of engineering, covering the major branches of engineering and the skills needed to succeed in the field."
              syllabusUrl="#"
            />
            <CourseCard
              title="Material Science and Engineering"
              institution="College of the Sequoias"
              term="Spring 2026"
              summary="This course focuses on the principles of material science and engineering, including the properties of materials and the ways in which they are used in engineering applications."
              syllabusUrl="#"
            />
            <CourseCard
              title="Circuit Analysis"
              institution="College of the Sequoias"
              term="Spring 2026"
              summary="This course focuses on analog circuit analysis, including nodal and mesh current analysis, RLC Circuits, Op Amps, and AC Circuits/AC Power."
              syllabusUrl="#"
            />
          </div>
        </section>
      </div >
    </div>
  );
}
