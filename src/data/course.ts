/**
 * Course content for the Teaching page.
 *
 * Edit this file to update the course information shown on the website —
 * the Teaching page reads everything from here.
 */

export interface CoursePerson {
  name: string;
  email?: string;
  note?: string;
}

export interface DownloadItem {
  label: string;
  file: string;
}

export interface Lecture {
  title: string;
  file?: string; // download link; leave empty until materials are available
}

export const course = {
  code: "QBCS5002",
  title: "Introduction to quantitative biology A&B",
  term: "Fall 2026",
  time: "Tuesday and Friday 13:30-15:55",
  location: "E13-210, Yungu campus",
  officeHours: "1 hour/week, 10am -11am per Friday, E14-417",
  website: "", // fill in when available, e.g. "https://..."
  lecturers: [
    { name: "Yifan Yang", email: "yangyifan@westlake.edu.cn" },
    { name: "Po-Yi Ho", email: "poyiho@westlake.edu.cn" },
  ],
  tas: [
    { name: "Yihao Lin", email: "linyihao@westlake.edu.cn", note: "2026 Fall" },
  ],
  description: [
    "This course introduces researchers from diverse backgrounds to quantitative principles in biological systems. These principles aim to provide for biology a unified and quantitative framework comparable to that of physics or mathematics. We cover several perspectives, including dynamical systems analysis of biological networks and how biological systems represent information in face of stochasticity. Model systems that we analyze include gene regulation, cell biology, neural dynamics, and evolution. Close connection between theory and experiment is emphasized. We also discuss connections to modern data-driven approaches in biology. Problem sets involve the application of mathematical models and computational tools to test candidate principles. The major learning goal is fluency of the conceptual and quantitative tools required to think quantitatively about biological systems.",
    "This course is listed as two parts “Introduction to quantitative biology A/B”. It serves as an entry point for the Quantitative Biology and Complex Systems PhD curriculum. It prepares students for more advanced courses in dynamical systems, stochastic processes, statistical mechanics, and data-driven approaches to biology.",
  ],
  prerequisites: "Calculus, linear algebra, statistics, general physics, general biology",
  outlineFiles: [
    {
      label: "Doctoral Course Syllabus — Part A (PDF)",
      file: "/course_file/Doctoral_Course_Syllabus_Qbio (A).pdf",
    },
    {
      label: "Doctoral Course Syllabus — Part B (PDF)",
      file: "/course_file/Doctoral_Course_Syllabus_Qbio (B).pdf",
    },
  ],
  lectures: [
    { title: "Lecture_1_Chemotaxis", file: "/course_file/Lecture_1_Chemotaxis.pdf" },
    { title: "Numbers and scales, and how to build simple models" },
    { title: "Chemical kinetics, the lac operon, and transcription networks" },
    { title: "Nonlinear regulation and solving equations graphically" },
    { title: "Network motifs and dynamical functions" },
    { title: "Positive feedback, bistability, and cellular decision-making" },
    { title: "Negative feedback, delay, and oscillations" },
    { title: "Excitability, thresholds, and transient cell states" },
    { title: "Chemotaxis and random walks" },
    { title: "Cell cycle regulation and correlations" },
    { title: "Morphogenesis and information theory" },
    { title: "Damage dynamics" },
    { title: "Statistical mechanics description of the lac operon" },
    { title: "Hemoglobin and cooperativity" },
    { title: "Kinetic proofreading" },
    { title: "Whole-cell modelling, FBA, and coarse-grained descriptions" },
  ] as Lecture[],
  problemSets: [
    { title: "Problem Set 1", file: "/course_file/Problem_Set_1.pdf" },
    { title: "Problem Set 2" },
    { title: "Problem Set 3" },
    { title: "Problem Set 4" },
    { title: "Problem Set 5" },
    { title: "Problem Set 6" },
  ] as Lecture[],
  lectureNotes: [
    {
      title: "Lecture_Notes_bionumber_0902",
      file: "/course_file/Lecture_Notes_bionumber_0902.pdf",
    },
  ] as Lecture[],
};

export type Course = typeof course;
