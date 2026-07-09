# Systems Aging Lab Website

[西湖大学](https://www.westlake.edu.cn/) Systems Aging Lab（系统衰老实验室）官方网站，使用 Vite + React + TypeScript + Tailwind CSS 构建。

## 环境要求

| 依赖 | 版本要求 |
|------|----------|
| **Node.js** | ≥ 20.x（推荐 20 LTS） |
| **npm** | ≥ 10.x（随 Node.js 20 自带） |

建议使用 [nvm-windows](https://github.com/coreybutler/nvm-windows) 管理 Node.js 版本。

## 快速开始

```bash
# 1. 安装依赖
npm install

# 2. 启动开发服务器（默认 http://localhost:3000）
npm run dev

# 3. 构建生产版本（输出到 dist/ 目录）
npm run build

# 4. 本地预览生产构建
npm run preview
```

> 构建产物在 `dist/` 文件夹内，可直接部署到任意静态托管服务（GitHub Pages、Vercel、Netlify、自己的服务器等）。

## 项目结构

```
lab_website_kimibase/
├── public/
│   └── images/
│       ├── team/          # 团队成员头像
│       ├── research/      # 研究方向配图
│       └── news/          # 新闻活动图片
├── src/
│   ├── data/              # ★ 核心数据文件（修改内容主要在这里）
│   │   ├── site.ts        #   基本信息（实验室名称、邮箱、地址等）
│   │   ├── people.ts      #   团队成员信息
│   │   ├── research.ts    #   研究方向介绍
│   │   ├── publications.ts #   Seed 论文列表
│   │   └── ...
│   ├── pages/             # ★ 各页面组件（需要改页面结构时在这里）
│   │   ├── Home.tsx
│   │   ├── Research.tsx
│   │   ├── Publications.tsx
│   │   ├── People.tsx
│   │   ├── Teaching.tsx
│   │   ├── News.tsx
│   │   └── Contact.tsx
│   ├── components/        # 可复用组件
│   │   ├── ui/            # shadcn/ui 组件（按钮、卡片、弹窗等）
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   ├── services/          # API 服务
│   │   ├── crossrefApi.ts # Crossref 接口（通过 DOI 获取论文作者信息）
│   │   └── orcidApi.ts    # ORCID 接口（通过 ORCID 获取论文列表）
│   ├── hooks/             # 自定义 Hooks
│   ├── App.tsx            # 路由配置
│   └── main.tsx           # 入口文件
├── index.html             # HTML 入口（可修改页面标题和 meta 标签）
├── tailwind.config.js     # Tailwind CSS 主题配置（颜色、圆角等）
├── vite.config.ts         # Vite 构建配置
└── package.json           # 依赖和脚本
```

## 修改内容指南

所有网站内容数据集中在 `src/data/` 目录下，修改后保存即可热更新。

### 1. 基本信息（实验室名称、邮箱、地址等）

**文件：** [`src/data/site.ts`](src/data/site.ts)

```ts
export const siteConfig: SiteConfig = {
  labName: "Systems Aging Lab",            // 实验室名称
  institution: "Westlake University",       // 所属机构
  tagline: "Discovering design principles…", // 标语
  description: "We use mathematical modeling…", // 描述
  email: "yangyifan@westlake.edu.cn",        // 联系邮箱
  address: "Westlake University, Hangzhou, China", // 地址
};
```

导航栏菜单项也在同一文件中修改 `navItems` 数组。

### 2. 团队成员

**文件：** [`src/data/people.ts`](src/data/people.ts)

```ts
export const people: Person[] = [
  {
    id: "yifan",
    name: "Yifan Yang",
    nameCn: "杨一帆",
    role: "pi",             // pi | phd | postdoc | staff | visitor | alumni
    roleLabel: "Principal Investigator",
    image: "/images/team/yifan-headshot.jpg", // 放在 public/images/team/ 下
    email: "yangyifan@westlake.edu.cn",
    bio: "个人简介文字…",
  },
  // 添加新成员：在数组中新增一个对象即可
];
```

> 头像图片放在 `public/images/team/` 目录下。

### 3. 研究方向

**文件：** [`src/data/research.ts`](src/data/research.ts)

修改 `researchContent` 对象的 `overview`（概述）、`areas`（各研究方向）、`closingText`（结尾语）字段。每个研究方向可配图（放在 `public/images/research/` 下）。

### 4. 论文列表

**文件：** [`src/data/publications.ts`](src/data/publications.ts)

```ts
{
  id: "natcomms-2025",
  title: "论文标题",
  authors: ["作者1", "作者2"],   // 留空则从 Crossref/ORCID 自动拉取
  journal: "Nature Communications",
  date: "2025-04-08",          // ISO 格式日期
  year: 2025,
  doi: "10.1038/…",
  link: "https://doi.org/…",
  highlight: true,              // true 则标记为高亮/精选论文
}
```

> 论文自动同步自 ORCID（ID: `0000-0001-6697-0198`），`seedPublications` 作为本地备选和 author list / highlight 标记的来源。

### 5. 新闻动态

**文件：** [`src/pages/News.tsx`](src/pages/News.tsx)

在文件中的 `newsItems` 数组里新增条目：

```ts
{
  id: "unique-id",
  date: "2026.05.21",
  title: "标题",
  description: "正文内容…",
  location: "地点",
  type: "activity",       // activity | publication | people
  images: ["/images/news/…/photo.jpg"], // 放在 public/images/news/ 下
}
```

### 6. 联系方式

页面在 [`src/pages/Contact.tsx`](src/pages/Contact.tsx)，邮箱和地址从 `src/data/site.ts` 自动读取，一般无需修改此文件。要修改联系文案、加入实验室的板块内容时在此编辑。

### 7. HTML 标题和 Meta

**文件：** [`index.html`](index.html)

```html
<title>Systems Aging Lab @ Westlake University</title>
<meta name="description" content="…" />
```

### 8. 页面主题色

**文件：** CSS 变量定义在 `src/index.css` 中，Tailwind 主题配置在 [`tailwind.config.js`](tailwind.config.js)。

## 部署

构建后 `dist/` 目录即为静态网站，可直接部署：

### GitHub Pages

```bash
npm run build
# 将 dist/ 目录推送到 gh-pages 分支，或使用 GitHub Actions 自动部署
```

### Vercel / Netlify

1. 连接 GitHub 仓库
2. 构建命令：`npm run build`
3. 输出目录：`dist`
4. 自动部署完成

### 自有服务器

将 `dist/` 目录下的文件复制到任意 Web 服务器（Nginx、Apache 等）的静态文件目录即可。

## ORCID 论文同步（可选）

网站支持通过 ORCID API 自动拉取论文列表。配置在 `src/services/orcidApi.ts` 中，默认 ORCID ID 为 `0000-0001-6697-0198`。如果 ORCID 拉取失败或超时，会自动回退到 `seedPublications` 列表。

## 技术栈

| 技术 | 用途 |
|------|------|
| [React 19](https://react.dev/) | UI 框架 |
| [TypeScript](https://www.typescriptlang.org/) | 类型安全 |
| [Vite 7](https://vite.dev/) | 构建工具与开发服务器 |
| [Tailwind CSS 3.4](https://tailwindcss.com/) | 样式框架 |
| [shadcn/ui](https://ui.shadcn.com/) | UI 组件库 |
| [React Router 7](https://reactrouter.com/) | 路由 |
| [Recharts](https://recharts.org/) | 数据可视化图表 |
| [next-themes](https://github.com/pacocoursey/next-themes) | 深色/浅色主题切换 |
