export interface Person {
  id: string;
  name: string;
  nameCn?: string;
  role: "pi" | "phd" | "staff" | "postdoc" | "visitor" | "alumni";
  roleLabel: string;
  image: string;
  email: string;
  bio: string;
}

export const people: Person[] = [
  {
    id: "yifan",
    name: "Yifan Yang",
    nameCn: "\u6768\u4e00\u5e06",
    role: "pi",
    roleLabel: "Principal Investigator",
    image: "/images/team/yifan-headshot.jpg",
    email: "yangyifan@westlake.edu.cn",
    bio: "Yifan started his own group at Westlake after his postdoc at Weizmann Institute of Science. In his personal time, he likes to read about history and plays with his kids.",
  },
  {
    id: "yihao",
    name: "Yihao Lin",
    nameCn: "\u6797\u5955\u8c6a",
    role: "phd",
    roleLabel: "PhD Student",
    image: "/images/team/yihao-headshot.png",
    email: "linyihao@westlake.edu.cn",
    bio: "Yihao Lin is a doctoral student in the Systems Biology program at Westlake University. Previously, he obtained a Bachelor of Science degree from South China Agricultural University. He is interested in thinking about and understanding the world from a systems-biology perspective. Outside of work, he enjoys exploring different fields and trying new things.",
  },
  {
    id: "kaijun",
    name: "Kaijun Wang",
    nameCn: "\u738b\u607a\u541b",
    role: "phd",
    roleLabel: "PhD Student",
    image: "/images/team/kaijun-headshot.png",
    email: "wangkaijun@westlake.edu.cn",
    bio: "Kaijun is a PhD student in the class of 2024, majoring in biology. In her spare time, football is one of her most faithful friends.",
  },
  {
    id: "zhirui",
    name: "Zhirui Liu",
    nameCn: "\u5218\u4e4b\u777f",
    role: "staff",
    roleLabel: "Research Assistant",
    image: "/images/team/zhirui-headshot.png",
    email: "liuzhirui@westlake.edu.cn",
    bio: "Zhirui received her Bachelor's degree in Chemical Biology from Hengyang Normal University in 2023. She was involved in research on the application of microfluidic chips in biomedicine after graduation. In 2025, she joined Yang Lab at the Center for Interdisciplinary Science. She is interested in interdisciplinary studies and quantitative Biology. Outside the lab, she enjoys hiking.",
  },
  {
    id: "dan",
    name: "Dan Huang",
    nameCn: "\u9ec4\u4e39",
    role: "staff",
    roleLabel: "Research Assistant",
    image: "/images/team/dan-headshot.png",
    email: "huangdan09@westlake.edu.cn",
    bio: "Dan joined Yifan Lab as a Research Assistant in 2015. An avid wildlife photographer, she loves caring for her pet cat and bunny in her free time.",
  },
  {
    id: "lanning",
    name: "Lanning Liu",
    nameCn: "\u5218\u5170\u51dd",
    role: "staff",
    roleLabel: "Administrative Assistant",
    image: "/images/team/lanning-headshot.jpg",
    email: "liulanning@westlake.edu.cn",
    bio: "Lanning studied Health Economics at Paris V. She has two Border Collies. In her personal time, she enjoys exploring the natural world with her dogs and discovering its beauty.",
  },
  {
    id: "hongjie",
    name: "Hongjie Wang",
    nameCn: "\u738b\u6dfc\u6770",
    role: "visitor",
    roleLabel: "Visiting Student",
    image: "/images/team/hongjie-headshot.png",
    email: "wanghongjie@westlake.edu.cn",
    bio: "Hongjie graduated from Chongqing Medical University with a bachelor's degree in Clinical Medicine and joined the laboratory in 2026. He enjoys approaching biomedical problems from quantitative and physics-based perspectives. Outside the lab, he likes to explore nature.",
  },
];

export const roleOrder = ["pi", "phd", "postdoc", "staff", "visitor", "alumni"];

export function sortPeople(peopleList: Person[]): Person[] {
  return [...peopleList].sort((a, b) => {
    const roleDiff = roleOrder.indexOf(a.role) - roleOrder.indexOf(b.role);
    if (roleDiff !== 0) return roleDiff;
    return a.name.localeCompare(b.name);
  });
}
