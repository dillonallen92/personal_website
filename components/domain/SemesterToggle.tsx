type Semester = "fall" | "spring" | null;

type SemesterToggleProps = {
  selectedSemester: Semester;
  onToggle: (semester: "fall" | "spring") => void;
};

/**
 * Semester toggle component for the courses page
 * Allows users to filter courses by semester
 * @param props - Semester toggle configuration props
 * @returns Semester toggle buttons element
 */
export function SemesterToggle({
  selectedSemester,
  onToggle,
}: SemesterToggleProps) {
  return (
    <div className="mb-8 flex gap-4">
      <button
        onClick={() => onToggle("fall")}
        className={`rounded-lg px-6 py-3 font-semibold transition-colors ${
          selectedSemester === "fall"
            ? "bg-accentBlue text-white"
            : "bg-gray-200 text-charcoal hover:bg-gray-300"
        }`}
      >
        Fall Courses
      </button>
      <button
        onClick={() => onToggle("spring")}
        className={`rounded-lg px-6 py-3 font-semibold transition-colors ${
          selectedSemester === "spring"
            ? "bg-accentBlue text-white"
            : "bg-gray-200 text-charcoal hover:bg-gray-300"
        }`}
      >
        Spring Courses
      </button>
    </div>
  );
}
