export type ResearchMaturity = "active" | "developing" | "exploratory";

export interface ResearchArea {
  id: string;
  title: string;
  description: string;
  image?: string;
  maturity?: ResearchMaturity;
  system?: string;
  centralQuestion?: string;
  currentEvidence?: string;
  openQuestion?: string;
}

export interface ResearchContent {
  heroTitle: string;
  heroSubtitle: string;
  overview: string;
  areas: ResearchArea[];
  closingText: string;
}

export const researchContent: ResearchContent = {
  heroTitle: "Research",
  heroSubtitle:
    "Using simple laws to identify the hidden variables and objectives that organize living systems.",
  overview:
    "Living systems are extraordinarily high-dimensional, yet under some conditions their behavior collapses onto simple quantitative laws. We treat these regularities not as endpoints, but as clues to effective variables, constraints, and biological objectives. We combine data analysis, minimal modeling, and targeted perturbations to test these ideas—and use departures from simple laws to discover where additional mechanisms become important.",
  areas: [
    {
      id: "beyond-growth",
      title: "What replaces growth rate when cells stop growing?",
      description:
        "During balanced growth, growth rate acts as a powerful organizing variable for microbial physiology. Once growth stops, this familiar coordinate disappears even though cells continue to change, adapt, accumulate damage, and die. Using starving E. coli as a controlled experimental system, we combine single-cell measurements, large-scale perturbations, and stochastic modeling to search for the physiological variables that govern survival and the onset of decline. Our aim is to determine when diverse survival trajectories reflect a common low-dimensional process, and when their departures reveal distinct mechanisms.",
      image: "/images/research/survival-curves.png",
      maturity: "active",
      system: "Starving E. coli",
      centralQuestion:
        "Which physiological state variable organizes cellular dynamics after growth stops?",
      currentEvidence:
        "Survival curves and mortality dynamics show reproducible quantitative structure across conditions and perturbations.",
      openQuestion:
        "Whether a common state coordinate explains this structure, and which molecular processes set its dynamics.",
    },
    {
      id: "physiological-time",
      title: "What controls the speed of physiological time?",
      description:
        "Aging and damage dynamics can often be rescaled by a change in the speed of physiological time: different individuals, genotypes, or environments traverse similar trajectories at different rates. We ask what biological processes determine this rate and when temporal scaling should hold or fail. By connecting comparative data with experiments in tractable cellular systems, we seek mechanistic interpretations of the effective rate variable and principles that link short-term physiological dynamics to long-term survival.",
      image: "/images/research/pi-heatmap.png",
      maturity: "developing",
      system: "Microbes, model organisms, and mammalian aging data",
      centralQuestion:
        "What biological processes set the rate at which physiological state changes?",
      currentEvidence:
        "Temporal scaling provides a compact description of mortality and damage trajectories across several systems.",
      openQuestion:
        "The microscopic origin of the scaling rate and the biological regimes in which it remains a valid coordinate.",
    },
    {
      id: "machine-learning-laws",
      title:
        "Can machine learning discover simple laws in high-dimensional biology?",
      description:
        "Modern biological measurements contain thousands of molecular and cellular features, but prediction alone does not reveal which collective variables make the system intelligible. We use dimensional reduction and interpretable machine learning as tools for scientific discovery: to identify candidate low-dimensional coordinates, test whether they obey simple dynamics, and connect them to perturbations and biological objectives. The goal is not a virtual cell that merely reproduces observations, but models that expose falsifiable organizing principles.",
      image: "/images/research/microfluidic.png",
      maturity: "exploratory",
      system: "Multimodal cellular and organismal data",
      centralQuestion:
        "Can high-dimensional data reveal compact variables and objectives with predictive and mechanistic meaning?",
      currentEvidence:
        "Low-dimensional structure repeatedly appears in physiological, aging, and population-scale data.",
      openQuestion:
        "How to distinguish biologically meaningful coordinates from statistical compression and connect them to causal perturbations.",
    },
  ],
  closingText:
    "Across these systems, our goal is not merely to predict biological outcomes, but to identify the effective variables, constraints, and objectives that make complex behavior intelligible.",
};
