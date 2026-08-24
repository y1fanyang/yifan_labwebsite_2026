export interface Person {
  id: string;
  name: string;
  nameCn?: string;
  role: "pi" | "assistant" | "phd" | "staff" | "postdoc" | "visitor" | "alumni";
  roleLabel: string;
  image: string;
  email?: string;
  bio: string;
}

export const people: Person[] = [
  {
    id: "yifan",
    name: "Yifan Yang",
    nameCn: "杨一帆",
    role: "pi",
    roleLabel: "Principal Investigator",
    image: "/images/team/yifan-headshot.jpg",
    email: "yangyifan@westlake.edu.cn",
    bio: "Yifan started his own group at Westlake after his postdoc at Weizmann Institute of Science. In his personal time, he likes to read about history and plays with his kids.",
  },
  {
    id: "jinjian",
    name: "Jinjian Xu",
    nameCn: "徐锦建",
    role: "assistant",
    roleLabel: "Assistant Research Fellow",
    image: "/images/team/jinjian-headshot.webp",
    bio: "Dr Jinjian Xu obtained his PhD in Epidemiology and Health Statistics from Sun Yat‑sen University in 2024. He completed his postdoctoral research at Zhejiang Provincial People’s Hospital from 2024 to 2026, where he advanced the development and translational application of intelligent assessment and risk‑management systems for ageing‑related diseases. Appointed as an Assistant Research Fellow in the Yang Lab at the Centre for Interdisciplinary Science in 2026, he conducts cross‑disciplinary work combining damage‑dynamics mathematical models with multi‑omics data to connect molecular‑level alterations to organ‑level physiological states. Drawing on population‑cohort multi‑omics big data and artificial‑intelligence algorithms, his research explores pathogenic mechanisms, intervention targets and novel biomarkers for ageing‑associated chronic conditions such as metabolic disorders and cognitive decline.\n\nHe applies bioinformatic tools to profile gut microbiomes in older Chinese populations, dissect microbe‑host interactions governing ageing and metabolic phenotypes, and develops omics clocks and biomarkers to track biological age, forecast health trajectories and clarify their fundamental biological underpinnings.",
  },
  {
    id: "yihao",
    name: "Yihao Lin",
    nameCn: "林奕豪",
    role: "phd",
    roleLabel: "PhD Student",
    image: "/images/team/yihao-headshot.png",
    email: "linyihao@westlake.edu.cn",
    bio: "Yihao Lin is a doctoral student in the Systems Biology program at Westlake University. Previously, he obtained a Bachelor of Science degree from South China Agricultural University. He is interested in thinking about and understanding the world from a systems-biology perspective. Outside of work, he enjoys exploring different fields and trying new things.",
  },
  {
    id: "kaijun",
    name: "Kaijun Wang",
    nameCn: "王恺君",
    role: "phd",
    roleLabel: "PhD Student",
    image: "/images/team/kaijun-headshot.png",
    email: "wangkaijun@westlake.edu.cn",
    bio: "Kaijun is a PhD student in the class of 2024, majoring in biology. In her spare time, football is one of her most faithful friends.",
  },
  {
    id: "zhirui",
    name: "Zhirui Liu",
    nameCn: "刘之睿",
    role: "staff",
    roleLabel: "Research Assistant",
    image: "/images/team/zhirui-headshot.png",
    email: "liuzhirui@westlake.edu.cn",
    bio: "Zhirui received her Bachelor's degree in Chemical Biology from Hengyang Normal University in 2023. She was involved in research on the application of microfluidic chips in biomedicine after graduation. In 2025, she joined Yang Lab at the Center for Interdisciplinary Science. She is interested in interdisciplinary studies and quantitative Biology. Outside the lab, she enjoys hiking.",
  },
  {
    id: "dan",
    name: "Dan Huang",
    nameCn: "黄丹",
    role: "staff",
    roleLabel: "Research Assistant",
    image: "/images/team/dan-headshot.png",
    email: "huangdan09@westlake.edu.cn",
    bio: "Dan joined Yifan Lab as a Research Assistant in 2025. An avid wildlife photographer, she loves caring for her pet cat and bunny in her free time.",
  },
  {
    id: "lanning",
    name: "Lanning Liu",
    nameCn: "刘兰凝",
    role: "staff",
    roleLabel: "Administrative Assistant",
    image: "/images/team/lanning-headshot.webp",
    email: "liulanning@westlake.edu.cn",
    bio: "Lanning studied Health Economics at Paris V. She has two Border Collies. In her personal time, she enjoys exploring the natural world with her dogs and discovering its beauty.",
  },
  {
    id: "hongjie",
    name: "Hongjie Wang",
    nameCn: "王泓杰",
    role: "staff",
    roleLabel: "Research Assistant",
    image: "/images/team/hongjie-headshot.png",
    email: "wanghongjie@westlake.edu.cn",
    bio: "Hongjie graduated from Chongqing Medical University with a bachelor's degree in Clinical Medicine and joined the laboratory in 2026. He enjoys approaching biomedical problems from quantitative and physics-based perspectives. Outside the lab, he likes to explore nature.",
  },
  {
    id: "weirong",
    name: "WeiRong Xiang",
    nameCn: "向薇蓉",
    role: "visitor",
    roleLabel: "Visiting Student",
    image: "/images/team/weirong-headshot.webp",
    bio: "WeiRong studied Marine Science at Sun Yat-sen University and Biochemistry at Fudan University. Outside the lab, I'm into rock 'n' roll and live music.",
  },
];

export const roleOrder = ["pi", "assistant", "phd", "postdoc", "staff", "visitor", "alumni"];

export function sortPeople(peopleList: Person[]): Person[] {
  return [...peopleList].sort((a, b) => {
    const roleDiff = roleOrder.indexOf(a.role) - roleOrder.indexOf(b.role);
    if (roleDiff !== 0) return roleDiff;
    return a.name.localeCompare(b.name);
  });
}
