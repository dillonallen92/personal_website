/**
 * Featured content data constants
 */

export type FeaturedItem = {
  title: string;
  description: string;
};

export const featuredCourses: FeaturedItem[] = [
  {
    title: "MATLAB Programming",
    description:
      "MATLAB Programming focuses on the intersection of computing skills and engineering concepts. In this course, I focus on core programming skills and numerical methods to help prepare students for industry and research.",
  },
];

export const featuredProjects: FeaturedItem[] = [
  {
    title: "Valley Fever Forecasting",
    description:
      "Using a two layer masked LSTM, I am predicting Valley Fever case rates in the Fresno County region based on a multitude of environmental varaibles.",
  },
];
