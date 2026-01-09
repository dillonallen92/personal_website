/**
 * Course data structure and constants
 */

export type Course = {
  title: string;
  institution: string;
  term: string;
  summary: string;
  syllabusUrl?: string;
};

export type Semester = "fall" | "spring";

export const courses: Record<Semester, Course[]> = {
  fall: [
    {
      title: "MATLAB Programming",
      institution: "College of the Sequoias",
      term: "Fall 2025",
      summary:
        "This course focuses on the fundamentals of MATLAB programming, including the use of arrays, matrices, and functions. Students learn Object Oriented Programming and Applied Mathematics to solve real-world problems.",
      syllabusUrl: "#",
    },
    {
      title: "Introduction to Engineering",
      institution: "College of the Sequoias",
      term: "Fall 2025",
      summary:
        "This course is an introduction to the field of engineering, covering the major branches of engineering and the skills needed to succeed in the field.",
      syllabusUrl: "#",
    },
    {
      title: "Statics",
      institution: "College of the Sequoias",
      term: "Fall 2025",
      summary:
        "This course focuses on the principles of statics, including the analysis of forces and moments on rigid bodies.",
      syllabusUrl: "#",
    },
    {
      title: "Engineering Graphics",
      institution: "College of the Sequoias",
      term: "Fall 2025",
      summary:
        "Engineering Graphics is a course that teaches students how to read and interpret engineering drawings. This course also focuses on the SolidWorks CAD Software and 3D printing.",
      syllabusUrl: "#",
    },
    {
      title: "Computer Organization and Architecture",
      institution: "College of the Sequoias",
      term: "Fall 2025",
      summary:
        "This course focuses on the principles of computer organization and architecture, including the design and implementation of Assembly programs. Students focus on boolean algebra, finite state machines, and programming basics for Assembly and C.",
      syllabusUrl: "#",
    },
  ],
  spring: [
    {
      title: "MATLAB Programming",
      institution: "College of the Sequoias",
      term: "Spring 2026",
      summary:
        "This course focuses on the fundamentals of MATLAB programming, including the use of arrays, matrices, and functions. Students learn Object Oriented Programming and Applied Mathematics to solve real-world problems.",
      syllabusUrl: "#",
    },
    {
      title: "Introduction to Engineering",
      institution: "College of the Sequoias",
      term: "Spring 2026",
      summary:
        "This course is an introduction to the field of engineering, covering the major branches of engineering and the skills needed to succeed in the field.",
      syllabusUrl: "#",
    },
    {
      title: "Material Science and Engineering",
      institution: "College of the Sequoias",
      term: "Spring 2026",
      summary:
        "This course focuses on the principles of material science and engineering, including the properties of materials and the ways in which they are used in engineering applications.",
      syllabusUrl: "#",
    },
    {
      title: "Circuit Analysis",
      institution: "College of the Sequoias",
      term: "Spring 2026",
      summary:
        "This course focuses on analog circuit analysis, including nodal and mesh current analysis, RLC Circuits, Op Amps, and AC Circuits/AC Power.",
      syllabusUrl: "#",
    },
    {
      title: "Discrete Mathematics",
      institution: "College of the Sequoias",
      term: "Spring 2026",
      summary:
        "This course focuses on the principles of discrete mathematics, including set theory, logic, and proof techniques. Applications in Computer Science include Graph Theory and Analysis of Algorithms",
      syllabusUrl: "#",
    },
  ],
};
