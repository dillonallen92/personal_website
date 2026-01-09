/**
 * Project data structure and constants
 */

export type Project = {
  title: string;
  summary: string;
  technologies: string[];
  githubUrl?: string;
};

export const featuredProjects: Project[] = [
  {
    title: "Valley Fever Forecasting",
    summary:
      "Using a two layer masked LSTM, I am predicting Valley Fever case rates in the Fresno County region based on a multitude of environmental varaibles.",
    technologies: ["Python", "LSTM", "Machine Learning"],
  },
];

export const allProjects: Project[] = [
  // Add more projects here as needed
  {
   title: "Valley Fever Forecasting",
   summary:
     "Using a two layer masked LSTM, I am predicting Valley Fever case rates in the Fresno County region based on a multitude of environmental varaibles.",
   technologies: ["Python", "LSTM", "Machine Learning"],
   githubUrl: "https://github.com/dillonallen92/ValleyFeverAnalysis_Cleaned", // Add your GitHub repository URL here
  },
];
