export interface ResearchArea {
  id: string;
  title: string;
  description: string;
  image?: string;
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
  heroSubtitle: "Design principles of homeostasis through aging and stress",
  overview:
    "Biological systems such as tissues and cells, despite being made from noisy and error-prone components, are strikingly robust due to intricate networks of control circuits collectively known as homeostasis. Homeostasis is fundamentally a systems-level, emergent phenomenon, difficult to understand from merely bottom-up description of individual parts.",
  areas: [
    {
      id: "aging-dynamics",
      title: "Aging Dynamics & Survival Curves",
      description:
        'Our research aims to discover "design" principles of homeostasis through its unraveling in aging and stress. In the recent decade, detailed and painstaking quantitative measurements in various organisms have yielded such empirical "laws". These are specific yet generalisable, simple yet predictable mathematical equations describing the dynamics of aging. We are delineating the principles behind these quantitative "laws", and use new experiments and data to ground and challenge the boundaries of these principles.',
      image: "/images/research/survival-curves.png",
    },
    {
      id: "cell-physiology",
      title: "Cell Physiology & Damage Dynamics",
      description:
        "We aim to resolve mechanistic mysteries in cell physiology and tissue homeostasis surrounding important genetic pathways discovered in aging research. Our top-down mathematical modeling and quantitative experiments can precisely define the functions of genes and genetic pathways on the systems-level, which are difficult to derive from molecular details alone.",
      image: "/images/research/pi-heatmap.png",
    },
    {
      id: "antibiotics",
      title: "Antibiotics & Growth Trajectories",
      description:
        "We study how bacteriostatic and bactericidal antibiotics behave at subinhibitory concentrations, using dynamic growth trajectories to distinguish their modes of action. This work bridges our understanding of stress responses and homeostatic control in bacterial systems.",
      image: "/images/research/microfluidic.png",
    },
  ],
  closingText:
    "Biological questions that motivate us include: How can the same genome give rise to cell types that vary so much in lifespan? How can mammals of the same size differ in lifespan by an order of magnitude? Whether and how do organisms control their rates of aging?",
};
