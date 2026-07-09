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
  tagline: "Discovering design principles of homeostasis through aging and stress",
  description:
    "We use mathematical modeling and quantitative experiments to understand the dynamics of aging and uncover generalizable principles of biological homeostasis.",
  email: "yangyifan@westlake.edu.cn",
  address: "Westlake University, Hangzhou, China",
};
