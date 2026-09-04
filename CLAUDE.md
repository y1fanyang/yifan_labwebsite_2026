# CLAUDE.md

西湖大学 Systems Aging Lab 官方网站（yifanlab.org）的维护说明。单人维护；内容大多是数据驱动的，**改内容几乎永远改 `src/data/*.ts`，不用动页面组件**。

## 技术栈与命令

- Vite + React 18 + TypeScript + Tailwind CSS + shadcn/ui（lucide 图标）+ React Router。
- 常用命令（详见 package.json / README.md）：
  - `npm install`
  - `npm run dev`（本地 http://localhost:3000）
  - `npm run build`（= `tsc -b && vite build`，输出到 gitignored 的 `dist/`）
  - `npm run lint`
- **发布**：push 到 `main` 即自动构建并部署到 GitHub Pages（`.github/workflows/deploy.yml`，域名 yifanlab.org）。main 没有分支保护，push 即上线，注意审慎。

## 路由 / 页面

路由在 `src/App.tsx`，导航项在 `src/data/site.ts` 的 `navItems`。

| 路径 | 页面文件 | 内容数据源 |
|------|----------|-----------|
| `/` | `src/pages/Home.tsx` | `src/data/research.ts` 等 |
| `/research` | `src/pages/Research.tsx` | `src/data/research.ts` + `researchApproach.ts` |
| `/publications` | `src/pages/Publications.tsx` | ORCID/crossref 抓取，`src/data/publications.ts` 的 `seedPublications` 作兜底 |
| `/people` | `src/pages/People.tsx` | `src/data/people.ts` |
| `/teaching` | `src/pages/Teaching.tsx` | `src/data/course.ts` |
| `/news` | `src/pages/News.tsx` | `src/pages/News.tsx` 内内容 |
| `/contact` | `src/pages/Contact.tsx` | `src/data/site.ts` |

## 内容入口（常见任务改哪里）

- **成员增删 / 照片 / 简介 / 邮箱** → `src/data/people.ts`。每条 Person 含 `id, name, nameCn, role, roleLabel, image, email?, bio`。头像放 `public/images/team/<id>-headshot.jpg|.webp`（id 与数据一致）。新增大图先跑 `scripts/optimize-team-images.mjs` 压缩/转 webp。
- **课程 / Teaching 页** → `src/data/course.ts` 里的 `course` 常量：
  - `lectures[]`：某一讲填了 `file`，就会显示在 Downloadable material → **Slides**（可下载）。幻灯片 PDF 放 `public/course_file/`。
  - `problemSets[]`：某一套填了 `file`，就会显示在 → **Problem Sets**。
  - `lectureNotes[]`：某份笔记填了 `file`，就会显示在 → **Lecture Notes**（Problem Sets 之后）。
  - `outlineFiles[]`：Syllabus 下载。
- **论文**：正常情况自动从 ORCID 抓取（ORCID ID 见 `publications.ts` 注释，拉取逻辑在 `src/services/*`、`src/hooks/usePublications.ts`）；手补/高亮文章在 `src/data/publications.ts`。
- **网站口号 / 地址 / 实验室简介 / 联系邮箱** → `src/data/site.ts` 的 `siteConfig`。
- **研究内容 / 研究方式** → `src/data/research.ts`、`src/data/researchApproach.ts`。
- **静态资源**（图片、PDF、logo）放 `public/`，通过 `/xxx` 相对根路径引用；课程文件统一在 `public/course_file/`。

## 红线（务必遵守）

1. **邮箱不出现明文**。数据文件里存明文，但任何页面展示都要经 `src/lib/utils.ts` 的 `obfuscateEmail()` 混淆渲染。改展示逻辑时保持一致。
2. **不要删改** `.github/workflows/deploy.yml`（自动部署）和 `public/CNAME`（内容为 `yifanlab.org`，删除会让线上自定义域名失效）。
3. 主题/配色走 `src/index.css` 里的 CSS 变量（如 `var(--color-secondary)`、`var(--text-muted)`、`var(--bg-card)`），不要硬编码颜色。
4. 页面只读数据，别把内容写死在 `src/pages/*.tsx` 的 JSX 里（News 页例外，内容目前在页面内）。

## Git 工作流（本项目规则）

- 唯一长期分支 `main`，始终与 `origin/main` 同步、始终可部署。其他分支用完即删，别在 main 之外长期堆集。
- **每次动手前先** `git switch main && git pull`，确保基于最新 main，避免产生"幽灵差异"。
- **小改动**（改内容、加 PDF、调样式）→ 直接 commit 到 main 并 push（会自动部署）。一条改动一个 commit，信息简洁清楚。
- **大改动 / 重构** → 开短命分支 `feature/<简短描述>`，做完合回 main（可走 GitHub PR），随后删除该分支。
