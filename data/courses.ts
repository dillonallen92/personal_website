/**
 * Course data structure and constants
 * 
 * TO ADD SYLLABUS PATHS:
 * 1. Place your PDF files in the public/pdfs/ directory
 * 2. Update the syllabusUrl field for each course below
 * 3. Use the format: "/pdfs/your-filename.pdf"
 * 4. Example: syllabusUrl: "/pdfs/Syllabus_ENGR001_F25.pdf"
 * 5. If a course doesn't have a syllabus yet, keep syllabusUrl as "#" or undefined
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
      // TODO: Add syllabus PDF path here
      // Example: syllabusUrl: "/pdfs/matlab-programming-fall-2025.pdf",
      syllabusUrl: "/pdfs/SyllabusENGR020_CSCI20_F25.pdf",
    },
    {
      title: "Introduction to Engineering",
      institution: "College of the Sequoias",
      term: "Fall 2025",
      summary:
        "This course is an introduction to the field of engineering, covering the major branches of engineering and the skills needed to succeed in the field.",
      // Syllabus path example - update with your actual PDF filename
      syllabusUrl: "/pdfs/Syllabus_ENGR110_F25.pdf",
    },
    {
      title: "Statics",
      institution: "College of the Sequoias",
      term: "Fall 2025",
      summary:
        "This course focuses on the principles of statics, including the analysis of forces and moments on rigid bodies.",
      // TODO: Add syllabus PDF path here
      // Example: syllabusUrl: "/pdfs/statics-fall-2025.pdf",
      syllabusUrl: "/pdfs/Syllabus_ENGR002_F25.pdf",
    },
    {
      title: "Engineering Graphics",
      institution: "College of the Sequoias",
      term: "Fall 2025",
      summary:
        "Engineering Graphics is a course that teaches students how to read and interpret engineering drawings. This course also focuses on the SolidWorks CAD Software and 3D printing.",
      // TODO: Add syllabus PDF path here
      // Example: syllabusUrl: "/pdfs/engineering-graphics-fall-2025.pdf",
      syllabusUrl: "/pdfs/Syllabus_ENGR001_F25.pdf",
    },
    {
      title: "Computer Organization and Architecture",
      institution: "College of the Sequoias",
      term: "Fall 2025",
      summary:
        "This course focuses on the principles of computer organization and architecture, including the design and implementation of Assembly programs. Students focus on boolean algebra, finite state machines, and programming basics for Assembly and C.",
      // TODO: Add syllabus PDF path here
      // Example: syllabusUrl: "/pdfs/computer-architecture-fall-2025.pdf",
      syllabusUrl: "/pdfs/SyllabusCSCI005_F25.pdf",
    },
  ],
  spring: [
    {
      title: "MATLAB Programming",
      institution: "College of the Sequoias",
      term: "Spring 2026",
      summary:
        "This course focuses on the fundamentals of MATLAB programming, including the use of arrays, matrices, and functions. Students learn Object Oriented Programming and Applied Mathematics to solve real-world problems.",
      // TODO: Add syllabus PDF path here
      // Example: syllabusUrl: "/pdfs/matlab-programming-spring-2026.pdf",
      syllabusUrl: "/pdfs/SyllabusENGR020_CSCI20_S26.pdf",
    },
    {
      title: "Introduction to Engineering",
      institution: "College of the Sequoias",
      term: "Spring 2026",
      summary:
        "This course is an introduction to the field of engineering, covering the major branches of engineering and the skills needed to succeed in the field.",
      // TODO: Add syllabus PDF path here
      // Example: syllabusUrl: "/pdfs/introduction-to-engineering-spring-2026.pdf",
      syllabusUrl: "/pdfs/Syllabus_ENGR110_F25.pdf",
    },
    {
      title: "Material Science and Engineering",
      institution: "College of the Sequoias",
      term: "Spring 2026",
      summary:
        "This course focuses on the principles of material science and engineering, including the properties of materials and the ways in which they are used in engineering applications.",
      // TODO: Add syllabus PDF path here
      // Example: syllabusUrl: "/pdfs/material-science-spring-2026.pdf",
      syllabusUrl: "/pdfs/Syllabus_ENGR003_S26.pdf",
    },
    {
      title: "Circuit Analysis",
      institution: "College of the Sequoias",
      term: "Spring 2026",
      summary:
        "This course focuses on analog circuit analysis, including nodal and mesh current analysis, RLC Circuits, Op Amps, and AC Circuits/AC Power.",
      // TODO: Add syllabus PDF path here
      // Example: syllabusUrl: "/pdfs/circuit-analysis-spring-2026.pdf",
      syllabusUrl: "/pdfs/Syllabus_ENGR004_SP26.pdf",
    },
    {
      title: "Discrete Mathematics",
      institution: "College of the Sequoias",
      term: "Spring 2026",
      summary:
        "This course focuses on the principles of discrete mathematics, including set theory, logic, and proof techniques. Applications in Computer Science include Graph Theory and Analysis of Algorithms",
      // TODO: Add syllabus PDF path here
      // Example: syllabusUrl: "/pdfs/discrete-mathematics-spring-2026.pdf",
      syllabusUrl: "/pdfs/SyllabusCSCI006_S26.pdf",
    },
  ],
};
