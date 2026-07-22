export interface NavItem {
  label: string;
  path: string;
}

export const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "Research", path: "/research" },
  { label: "Publications", path: "/publications" },
  { label: "People", path: "/people" },
  { label: "Teaching", path: "/teaching" },
  { label: "News", path: "/news" },
  { label: "Contact", path: "/contact" },
];

export interface SiteConfig {
  labName: string;
  institution: string;
  tagline: string;
  description: string;
  email: string;
  address: string;
}

export const siteConfig: SiteConfig = {
  labName: "Systems Aging Lab",
  institution: "Westlake University",
  tagline: "Simple laws as clues to hidden principles in biology",
  description:
    "We combine quantitative experiments, mathematical modeling, and data analysis to discover the order parameters and objectives that govern living systems beyond growth.",
  email: "yangyifan@westlake.edu.cn",
  address: "Westlake University, Hangzhou, China",
};
