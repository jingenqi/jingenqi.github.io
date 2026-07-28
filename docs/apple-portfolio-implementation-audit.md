# Apple Portfolio 重构实施审计

审计日期：2026-07-28  
对照文档：`docs/apple-portfolio-redesign-spec.md`  
结论：核心设计、内容、路由、交互、SEO、部署兼容和工程迁移均已落地。规范允许记录的性能测量例外见下文。

## 1. 内容与信息架构

| 规范要求 | 状态 | 实现证据 |
| --- | --- | --- |
| 首页形成定位、案例、研究、经历、关于和联系叙事 | 完成 | `src/pages/HomePage.jsx` |
| Work、Research、About、Contact 独立页面 | 完成 | `src/pages/` |
| 三个重点项目拥有独立案例页 | 完成 | `src/pages/CaseStudyPage.jsx`、`src/content/projects.js` |
| 简历内容作为事实基线 | 完成 | `src/content/profile.js`、`experience.js`、`education.js`、`projects.js` |
| 不虚构项目数据和经历 | 完成 | 指标、任职、学历和项目描述均来自提供的简历；展示措辞仅做专业化编辑 |
| Notes 仅在有真实内容时发布 | 按规范省略 | 当前没有可验证的长期文章内容，因此未保留空壳 Notes 页面 |

公开路由：

- `/`
- `/work`
- `/work/trading-infrastructure`
- `/work/industrial-predictive-modelling`
- `/work/trajectory-intelligence`
- `/research`
- `/about`
- `/resume`
- `/contact`

## 2. 视觉与交互

| 规范要求 | 状态 | 实现证据 |
| --- | --- | --- |
| Apple 风格的克制、清淡、留白和清晰层级 | 完成 | `src/styles/tokens.css`、`globals.css` |
| 原生系统字体和响应式字号 | 完成 | CSS 字体栈与 `clamp()` 排版 |
| 统一色彩、圆角、边框、阴影和间距令牌 | 完成 | `src/styles/tokens.css` |
| 浅色、深色和系统主题 | 完成 | `ThemeToggle.jsx` 与初始化主题脚本 |
| 主题记忆和无闪烁初始化 | 完成 | `index.html` 内联初始化脚本与版本化 localStorage key |
| 少量高价值动效 | 完成 | 项目图形中的主题相关 CSS 动效 |
| 尊重 reduced-motion | 完成 | CSS 媒体查询统一降级 |
| 本地、自有项目视觉 | 完成 | `src/components/visuals/ProjectVisuals.jsx` |
| 每个案例独立社交分享图 | 完成 | `public/og/` 下三张 1200×630 PNG |

Hero 使用自有“风险与系统协调”项目视觉，而非个人照片。规格明确允许 Hero 使用照片或项目视觉；在没有合适、可验证个人照片的情况下，这是有意选择，不是缺失。

## 3. 技术迁移

| 规范要求 | 状态 | 实现证据 |
| --- | --- | --- |
| CRA 硬迁移至 Vite | 完成 | `vite.config.js`、`src/main.jsx`、`package.json` |
| React Router 路由 | 完成 | `src/App.jsx` |
| 非首页路由懒加载 | 完成 | `React.lazy` 与 `Suspense` |
| 内容数据与页面展示分离 | 完成 | `src/content/` |
| 删除旧 CRA、PWA 和混杂样式资产 | 完成 | 旧入口、默认 manifest、旧页面和未使用素材已移除 |
| 大型下屏内容优化 | 完成 | `content-visibility: auto` 与 route chunking |
| 生产构建完整性校验 | 完成 | `scripts/validate-content.mjs`、`validate-build.mjs` |

生产构建会自动生成所有公开路由的静态 HTML shell，并在构建阶段验证：

- title、canonical、Open Graph 和 Twitter metadata；
- 深层路由文件；
- CNAME、404 fallback、简历和分享图片；
- 已退役域名和 CRA 元数据不会重新出现；
- 入口 JavaScript gzip 体积不超过 150 KB。

## 4. SEO 与 GitHub Pages

| 规范要求 | 状态 | 实现证据 |
| --- | --- | --- |
| 正式域名 | 完成 | `https://jingenqi.tech` |
| 简历固定公开路径 | 完成 | `/Enqi_Jing_Resume_File.pdf` |
| 站内 Resume 阅读页与原生 PDF 工具 | 完成 | `/resume`、`src/pages/ResumePage.jsx` |
| CNAME 和 `.nojekyll` | 完成 | `public/CNAME`、`public/.nojekyll` |
| BrowserRouter 深层路由刷新 | 完成 | 静态路由 shell 与 `public/404.html` fallback |
| 每页独立 title、description 和 canonical | 完成 | `PageMeta.jsx`、`prerender-routes.mjs` |
| Open Graph、Twitter Card 和结构化数据 | 完成 | `index.html`、`PageMeta.jsx`、预渲染脚本 |
| robots 和 sitemap | 完成 | `public/robots.txt`、`public/sitemap.xml` |
| GitHub Actions 自动构建与部署 | 完成 | `.github/workflows/deploy.yml` |

## 5. 无障碍

| 检查项 | 状态 |
| --- | --- |
| 每页唯一 `main` 与唯一 `h1` | 通过 |
| 标题层级连续 | 通过 |
| Skip link 和路由切换后主标题聚焦 | 通过 |
| `:focus-visible` 清晰可见 | 通过 |
| 桌面与移动端关键点击区域至少 44px | 通过 |
| 移动菜单打开后聚焦首项 | 通过 |
| Tab/Shift+Tab 焦点闭环 | 通过 |
| Escape 关闭并把焦点归还菜单按钮 | 通过 |
| 外链新窗口和 PDF 下载有明确名称 | 通过 |
| forced-colors 与 reduced-motion 降级 | 通过 |

## 6. 验证结果

2026-07-28 本地生产构建结果：

- `npm test`：通过；
- `npm run build`：通过；
- 9 个公开路由浏览器验收：通过；
- Resume 与 3 张案例分享图 HTTP 验证：通过；
- 桌面 1440px、移动 390px：无横向溢出；
- 控制台和页面运行时错误：0；
- 入口 JavaScript：64.0 KB gzip；
- 全站 CSS：6.70 KB gzip。

浏览器验收同时覆盖主题切换持久化、移动菜单键盘操作、路由 metadata、语义 landmark、标题层级和 reduced-motion。

## 7. 已记录的合理例外

- 未在本地安装 Lighthouse CLI，因此没有伪造 Lighthouse 或 Core Web Vitals 分数。当前以生产 bundle budget、静态资源检查和真实 Chromium 多视口验收作为替代证据。正式发布后应使用生产 URL 再记录一次 Lighthouse mobile/desktop 和真实 Core Web Vitals。
- 项目主视觉为内联 SVG，因此不需要为这些矢量图额外生成 WebP/AVIF。社交平台兼容图使用 1200×630 PNG。

以上例外均符合原规范“达到目标或记录明确、合理例外”的完成标准。

## 8. 个人主页方向修订

根据后续视觉反馈，并依据 Anthropic `frontend-design` skill 进行两轮设计与自我批评，首页已从偏产品发布和咨询落地页的表达调整为个人研究索引：

- 首屏以姓名和具体工作内容为主体，不再使用系统架构图、通用卡片或大号 CTA；
- 使用来自研究记录和系统状态的窄边注作为唯一标志性元素；
- About、研究兴趣、作品和经历使用直白标题，不再使用 LLM 式“聪明句式”；
- 首页作品改为三条精简文本索引，案例视觉、指标和技术标签留在 Work 页面；
- 联系区改为普通个人联系方式，不再使用销售式提问；
- 浅色主题使用冷静矿物灰，深色主题使用柔和石墨灰，强调色为低饱和深青；
- 纯白、纯黑和高饱和亮蓝不再作为页面主底色。
- 删除重复的滚动淡入，仅保留路由切换动效。
