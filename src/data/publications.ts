export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  date: string;
  year: number;
  doi: string;
  link: string;
  highlight?: boolean;
}

/**
 * Seed publications - used as fallback and to provide
 * author lists / highlight markers for ORCID-fetched papers.
 * ORCID ID: 0000-0001-6697-0198
 */
export const seedPublications: Publication[] = [
  {
    id: "mbio-2025",
    title: "Principles of bacteriostatic and bactericidal antibiotics at subinhibitory concentrations",
    authors: ["Elizabeth Vaisbourd", "David Shaanan Glass", "Yifan Yang", "Avi Mayo", "Anat Bren", "Uri Alon"],
    journal: "mBio",
    date: "2025-11-12",
    year: 2025,
    doi: "10.1128/mbio.02066-25",
    link: "https://doi.org/g97ckt",
    highlight: true,
  },
  {
    id: "aging-model-2025",
    title: "A damage accumulation model reveals strategies of aging across species",
    authors: [],
    journal: "Research Square",
    date: "2025-07-08",
    year: 2025,
    doi: "10.21203/rs.3.rs-6946440/v1",
    link: "https://doi.org/g9vm59",
  },
  {
    id: "antibiotics-2025",
    title: "Dynamic growth trajectories distinguish bacteriostatic and bactericidal antibiotics at subinhibitory concentrations",
    authors: ["E. Vaisbourd", "D. S. Glass", "Y. Yang", "A. Mayo", "A. Bren", "U. Alon"],
    journal: "bioRxiv",
    date: "2025-06-19",
    year: 2025,
    doi: "10.1101/2025.06.14.659040",
    link: "https://doi.org/g9vm6b",
  },
  {
    id: "natcomms-2025",
    title: "Compression of morbidity by interventions that steepen the survival curve",
    authors: ["Yifan Yang", "Avi Mayo", "Tomer Levy", "Naveh Raz", "Ben Shenhar", "Daniel F. Jarosz", "Uri Alon"],
    journal: "Nature Communications",
    date: "2025-04-08",
    year: 2025,
    doi: "10.1038/s41467-025-57807-5",
    link: "https://doi.org/g9vm6c",
    highlight: true,
  },
  {
    id: "natcomms-2023",
    title: "Damage dynamics and the role of chance in the timing of E. coli cell death",
    authors: ["Yifan Yang", "Omer Karin", "Avi Mayo", "Xiaohu Song", "Peipei Chen", "Ana L. Santos", "Ariel B. Lindner", "Uri Alon"],
    journal: "Nature Communications",
    date: "2023-04-18",
    year: 2023,
    doi: "10.1038/s41467-023-37930-x",
    link: "https://doi.org/g9pq76",
    highlight: true,
  },
  {
    id: "sciadv-2019",
    title: "Temporal scaling of aging as an adaptive strategy of Escherichia coli",
    authors: ["Yifan Yang", "Ana L. Santos", "Luping Xu", "Chantal Lotton", "Fran\u00e7ois Taddei", "Ariel B. Lindner"],
    journal: "Science Advances",
    date: "2019-05-03",
    year: 2019,
    doi: "10.1126/sciadv.aaw2069",
    link: "https://doi.org/n4z7",
    highlight: true,
  },
  {
    id: "mim-2016",
    title: "Time-lapse microscopy and image analysis of Escherichia coli cells in mother machines",
    authors: ["Y. Yang", "X. Song", "A.B. Lindner"],
    journal: "Methods in Microbiology",
    date: "2016-01-01",
    year: 2016,
    doi: "10.1016/bs.mim.2016.10.003",
    link: "https://doi.org/g9vm6f",
  },
  {
    id: "msb-2015",
    title: "A synthetic growth switch based on controlled expression of RNA polymerase",
    authors: ["J\u00e9r\u00f4me Izard", "Cindy DC Gomez Balderas", "Delphine Ropers", "Stephan Lacour", "Xiaohu Song", "Yifan Yang", "Ariel B Lindner", "Johannes Geiselmann", "Hidde de Jong"],
    journal: "Molecular Systems Biology",
    date: "2015-11-01",
    year: 2015,
    doi: "10.15252/msb.20156382",
    link: "https://doi.org/f3j6sg",
  },
  {
    id: "bmc-2007",
    title: "MED: a new non-supervised gene prediction algorithm for bacterial and archaeal genomes",
    authors: ["Huaiqiu Zhu", "Gang-Qing Hu", "Yi-Fan Yang", "Jin Wang", "Zhen-Su She"],
    journal: "BMC Bioinformatics",
    date: "2007-03-16",
    year: 2007,
    doi: "10.1186/1471-2105-8-97",
    link: "https://doi.org/bpbxwd",
  },
  {
    id: "nar-2007",
    title: "ProTISA: a comprehensive resource for translation initiation site annotation in prokaryotic genomes",
    authors: ["G.-Q. Hu", "X. Zheng", "Y.-F. Yang", "P. Ortet", "Z.-S. She", "H. Zhu"],
    journal: "Nucleic Acids Research",
    date: "2007-12-23",
    year: 2007,
    doi: "10.1093/nar/gkm799",
    link: "https://doi.org/ccg46b",
  },
];

export function sortPublicationsByYear(pubs: Publication[]): Publication[] {
  return [...pubs].sort((a, b) => {
    if (b.year !== a.year) return b.year - a.year;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export function getHighlightPublications(pubs: Publication[]): Publication[] {
  return pubs.filter((p) => p.highlight);
}
