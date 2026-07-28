export interface ResearchStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export const researchApproach = {
  title: "From simple laws to testable mechanisms",
  summary:
    "We use quantitative regularities to infer hidden state variables, build minimal models, and design experiments that can falsify them.",
  steps: [
    {
      id: "data",
      number: "01",
      title: "Data analysis",
      description:
        "Measure biological dynamics and identify reproducible structure in complex data.",
    },
    {
      id: "law",
      number: "02",
      title: "Candidate law",
      description:
        "Find simple quantitative relationships—and determine where they break down.",
    },
    {
      id: "order-parameter",
      number: "03",
      title: "Order-parameter hypothesis",
      description:
        "Propose a small set of hidden variables that organize the observed behavior.",
    },
    {
      id: "model",
      number: "04",
      title: "Mechanistic model",
      description:
        "Build the minimal dynamical model connecting those variables to biological mechanisms.",
    },
    {
      id: "perturbation",
      number: "05",
      title: "Perturbation experiments",
      description:
        "Design targeted experiments that distinguish, refine, or falsify the model.",
    },
  ],
};