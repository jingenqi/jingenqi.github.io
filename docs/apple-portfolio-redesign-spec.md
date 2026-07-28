# Enqi Jing 个人网站 Apple 风格重构规格

## 1. 文档目的

本文档定义 Enqi Jing 个人网站的内容方向、信息架构、首页重点案例、Apple 风格视觉系统、技术实施方案和验收标准。

它将作为后续视觉概念设计、页面开发、内容整理和质量验收的统一依据。网站不应继续围绕通用的“Software Engineer”模板展开，而应基于最新简历中的真实研究经历、工程成果和职业方向，建立清晰、可信且有辨识度的个人品牌。

## 2. 项目期望

### 2.1 核心目标

新版网站需要在访问者进入后的 8 秒内回答以下问题：

1. Enqi Jing 是谁。
2. 主要研究和工程方向是什么。
3. 解决过哪些真实且复杂的问题。
4. 产生了哪些可以验证的结果。
5. 如何进一步查看作品、简历或取得联系。

网站需要同时服务以下受众：

- 招聘经理和工程团队。
- 博士项目导师、研究人员和学术合作方。
- 机器学习、风险智能、分布式系统和金融基础设施领域的专业人士。
- 希望了解项目细节、技术方法和实际影响的潜在合作方。

### 2.2 品牌定位

推荐的主定位不是泛化的 Full-stack Developer 或 Software Engineer，而是：

> Risk Intelligence Engineer and Researcher

推荐的首页核心表达：

> Enqi Jing
>
> Engineering intelligence for complex systems.
>
> I combine machine learning, cyber-risk analysis, and distributed systems to make high-consequence systems more observable, reliable, and decision-ready.

这套表达能够覆盖最新简历中的共同主线：

- 机器学习预测与异常分析。
- 网络安全和风险识别。
- 分布式交易系统和实时监控。
- 工业、能源和去中心化金融等复杂系统。
- 不确定性、异常行为和高影响风险的决策支持。

### 2.3 内容原则

- 所有经历、项目、指标、时间和联系方式必须来自最新简历或经过本人确认。
- 不使用模板项目、虚构客户、示例电话号码或无法验证的成果。
- 不为了填满页面而保留空泛的 Blog、Notes、Skills 或 Services 内容。
- 不把简历全文直接复制到网页。网站负责叙事和展示，PDF 简历负责完整记录。
- 所有项目都要说明问题、约束、方法、个人贡献和结果。
- 涉及公司保密内容时，使用匿名化架构图、抽象数据和不泄露业务细节的描述。
- 网站默认使用英文，以服务国际受众。中文版本只在有能力持续维护两套内容时加入。

### 2.4 体验目标

- 桌面、平板和手机上保持同一内容层级和品牌体验。
- 首屏必须展示姓名、定位、简短说明、主要行动按钮和下一部分的视觉提示。
- 页面动效应帮助理解层级，不应抢夺注意力。
- 所有导航、按钮、主题切换、下载和联系方式必须真实可用。
- 页面需支持键盘操作、屏幕阅读器、系统主题和减少动态效果偏好。
- 视觉上接近 Apple 的克制、精确和产品感，但不复制 Apple 官网内容或组件。

## 3. 推荐站点结构

### 3.1 总体架构

推荐采用“叙事型首页 + 项目案例详情页”的结构。首页负责快速建立定位和可信度，项目详情页负责展示技术深度。

主要路由建议：

| 路由 | 用途 |
| --- | --- |
| `/` | 完整叙事型首页 |
| `/work` | 所有精选项目的索引 |
| `/work/trading-infrastructure` | 分布式交易基础设施案例 |
| `/work/industrial-predictive-modelling` | 工业预测建模案例 |
| `/work/trajectory-intelligence` | GPS 轨迹智能案例 |
| `/research` | 研究兴趣、研究经历和方法方向 |
| `/about` | 精简个人背景、经历时间线和技术能力 |
| `/notes` | 真实文章和研究笔记，内容不足时暂不上线 |
| `/contact` | 联系方式和简历下载 |

全局导航建议保持简洁：

- Work
- Research
- About
- Notes，仅在有真实内容时显示
- Contact
- Resume，作为独立主要操作

### 3.2 首页结构

#### A. Global Header

- 左侧显示 `Enqi Jing` 或简化品牌标识。
- 中间或右侧显示核心导航。
- 提供主题切换和 Resume 操作。
- 桌面端使用轻量吸顶导航。
- 手机端使用清晰的菜单按钮、展开状态、关闭状态和当前页面反馈。

#### B. Hero

必须包含：

- H1：`Enqi Jing`。
- 主标题：`Engineering intelligence for complex systems.`
- 一段不超过三行的定位说明。
- 主要按钮：`Explore selected work`。
- 次要按钮：`Download resume`。
- GitHub 和 LinkedIn 入口。
- 一张真实且高质量的个人环境照，或与风险智能、监控和复杂系统相关的项目可视化。

首屏不应包含：

- 打字机动画。
- 装饰性标签、徽章或大量技术图标。
- 空泛的 clean code、passion、purpose 等文案。
- 与真实项目无关的图库照片。

#### C. Impact Summary

使用开放式横向信息带，而不是卡片网格，展示最强的真实结果：

- `50+ concurrent accounts`
- `<100 ms signal replication`
- `60% to 95% coordinated execution success`
- `10x clustering runtime improvement`

每个数字需要能够链接到对应案例，避免成为脱离上下文的装饰性指标。

#### D. Selected Work

首页只展示三个重点案例。每个案例使用大幅视觉、短标题、问题摘要和结果，不使用六宫格模板卡片。

推荐顺序：

1. Distributed Trading Infrastructure。
2. Industrial Predictive Modelling。
3. Trajectory Intelligence。

#### E. Research Direction

用一段清晰的研究陈述连接三个方向：

- Risk Intelligence and Uncertainty Quantification。
- AI for Security and Anomaly Detection。
- Distributed and Cyber-Physical Systems。

此区域应解释这些方向如何共同服务于高影响复杂系统，而不是简单展示关键词列表。

#### F. Experience Timeline

采用简洁的纵向时间线，展示：

- DP Consulting。
- Outlier。
- University of Warwick 研究经历。
- IShangu Cyber Security Technology。
- Saint Laurent Consulting。

时间线只展示角色、时间、一句话职责和一个代表结果。完整细节留给 About 或 Resume。

#### G. About

使用两到三段短文解释：

- 从计算机科学和预测建模进入复杂系统研究的路径。
- 从学术模型到生产级分布式交易系统的能力跨度。
- 对风险、可靠性、异常行为和决策支持的长期兴趣。

#### H. Contact and Footer

- 使用最新简历中的真实邮箱。
- 提供 GitHub、LinkedIn 和 Resume 下载。
- 不公开没有必要展示的电话号码或详细地址。
- 页脚显示姓名、版权年份和简洁导航。

## 4. 首页重点案例

### 4.1 Distributed Trading Infrastructure

推荐标题：

> Coordinating 50+ trading accounts in under 100 ms

案例内容结构：

| 部分 | 内容 |
| --- | --- |
| Context | 生产级 MT5 多主机复制交易平台，需要在多个账户和主机之间保持低延迟与一致执行状态。 |
| Challenge | 异步协调、网络延迟和失败恢复可能造成账户状态不一致和执行结果偏差。 |
| Contribution | 设计分布式平台、状态机编排、CAS 同步、事件监控和故障报告基础设施。 |
| Result | 支持 50+ 并发账户，信号复制低于 100 ms，协同执行成功率由 60% 提升到 95%。 |
| Visual | 匿名化系统架构图、事件流、账户状态图和延迟分布，不展示客户或交易机密。 |

案例页面应重点表现系统可靠性和风险监控，而不是将其描述为普通交易工具。

### 4.2 Industrial Predictive Modelling

推荐标题：

> Finding signal in noisy industrial process data

案例内容结构：

| 部分 | 内容 |
| --- | --- |
| Context | 使用工业生产和质量控制数据预测铝合金硬度。 |
| Challenge | 化学成分、处理曲线、异常样本和工业噪声之间存在复杂关系。 |
| Contribution | 构建并比较 DNN、SVR、Decision Tree 和 XGBoost 回归模型。 |
| Analysis | 使用 Local Outlier Factor 识别老化过程中的异常观测，并分析其对预测表现的影响。 |
| Visual | 数据处理流程、模型比较图、异常点分布和特征关系图。 |

除非有原始报告可以验证，不应继续使用旧网页中未经最新简历确认的准确率提升百分比。

### 4.3 Trajectory Intelligence

推荐标题：

> Turning GPS trajectories into predictable movement patterns

案例内容结构：

| 部分 | 内容 |
| --- | --- |
| Context | 从异构 GPS 轨迹数据中提取重要位置并预测移动行为。 |
| Challenge | 原始轨迹规模大、噪声多、时间和空间结构复杂。 |
| Contribution | 使用 k-means 和 DBSCAN 进行位置提取，构建 LSTM 移动预测流程。 |
| Result | 通过轨迹分段、预处理和实现优化，将聚类运行时间降低约 10 倍。 |
| Visual | 轨迹地图、聚类前后对比、位置节点和预测路径动画。 |

## 5. Apple 风格视觉落地

### 5.1 设计原则

- 内容优先：每个视觉元素必须服务于身份、项目或结果。
- 大尺度但不空洞：大标题必须配合有价值的内容和真实视觉。
- 克制用色：以中性色为主，只用一种主要强调色。
- 精确层级：标题、正文、说明文字和控件文字有稳定且有限的字号体系。
- 开放布局：优先使用全宽色带、图文区域、列表和时间线，不把所有内容装进卡片。
- 一致交互：按钮、链接、图标、悬停和焦点状态遵循同一规则。
- 高质量素材：真实人物、项目界面、数据图和架构图优先于模板图库。

### 5.2 色彩系统

浅色主题建议：

| Token | 建议值 | 用途 |
| --- | --- | --- |
| `--color-background` | `#ffffff` | 主背景 |
| `--color-surface` | `#f5f5f7` | 分区背景 |
| `--color-text` | `#1d1d1f` | 主文字 |
| `--color-text-muted` | `#6e6e73` | 次要文字 |
| `--color-border` | `rgba(0, 0, 0, 0.12)` | 分隔线和控件边界 |
| `--color-accent` | `#0071e3` | 主要链接和行动按钮 |
| `--color-accent-hover` | `#0077ed` | 悬停状态 |

暗色主题建议：

| Token | 建议值 | 用途 |
| --- | --- | --- |
| `--color-background` | `#000000` | 主背景 |
| `--color-surface` | `#1c1c1e` | 分区背景 |
| `--color-text` | `#f5f5f7` | 主文字 |
| `--color-text-muted` | `#a1a1a6` | 次要文字 |
| `--color-border` | `rgba(255, 255, 255, 0.16)` | 分隔线和控件边界 |
| `--color-accent` | `#2997ff` | 主要链接和行动按钮 |

不使用米色、棕色、鼠尾草绿和陶土色作为全站主色，也不使用彩色光球或大面积渐变作为装饰。

### 5.3 字体系统

采用系统字体栈，不自行分发 Apple 专有字体文件：

```css
font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Segoe UI", sans-serif;
```

推荐字号：

| 类型 | 桌面 | 手机 |
| --- | --- | --- |
| Hero Name | 64px | 44px |
| Hero Statement | 40px | 30px |
| Section Title | 48px | 32px |
| Case Study Title | 32px | 26px |
| Body Large | 21px | 18px |
| Body | 17px | 16px |
| Caption and UI | 13px to 15px | 13px to 15px |

规则：

- 字号通过断点切换，不随视口宽度连续缩放。
- 字距统一为 `0`。
- 正文行高保持在 1.5 到 1.7。
- 正文单行最大宽度控制在约 65 到 72 个英文字符。
- 不使用全大写长标题。只允许少量短控件或数据标签使用大写。

### 5.4 布局和间距

- 内容最大宽度建议为 1200px。
- 桌面左右安全边距至少 32px，手机为 20px。
- 使用 8px 基础间距系统：8、16、24、32、48、64、96、128。
- 首屏必须在常见笔记本视口中显示下一部分的一小段内容。
- 章节之间通过背景、比例和内容密度变化形成节奏，不重复同一种居中卡片布局。
- 不使用卡片嵌套卡片。
- 单个项目卡片或媒体框圆角不超过 8px，除非人物头像需要圆形裁切。

### 5.5 导航和控件

- 桌面导航高度控制在 48px 到 52px。
- 使用半透明背景、轻微 `backdrop-filter` 和 1px 分隔线。
- 主要按钮采用系统蓝实心样式，次要操作采用文字加箭头或轻量边框。
- 图标优先使用统一的 Lucide 图标，不在 JSX 中维护超长手写 SVG。
- 主题切换按钮必须有 tooltip、`aria-label` 和明确焦点状态。
- 手机菜单按钮必须提供 `aria-expanded`、`aria-controls` 和关闭状态。
- 所有按钮最小可点击区域不小于 44px。

### 5.6 图片和项目视觉

新版至少需要以下视觉素材：

- 一张专业、自然、有环境信息的个人照片。
- 三个首页案例的独立主视觉。
- 交易基础设施的匿名化架构图或事件流图。
- 工业预测案例的数据与模型比较图。
- GPS 轨迹案例的地图和聚类可视化。
- 一张用于社交分享的 Open Graph 图片。

素材规则：

- 不继续使用当前重复的生活自拍作为主要个人品牌图。
- 不使用与实际项目无关的 Unsplash 图库照片。
- 图片输出 WebP 或 AVIF，并保留合理的 JPEG/PNG 回退。
- 明确设置 `width`、`height`、`aspect-ratio` 和 `object-fit`，避免布局跳动。
- 首屏关键图片预加载，非首屏图片使用延迟加载。

### 5.7 动效

- 页面入场以 300ms 到 500ms 的淡入和 8px 到 16px 位移为主。
- 项目图片悬停缩放控制在 1.01 到 1.03。
- 滚动进入动画只执行一次，避免页面反复闪动。
- 不使用打字机、粒子背景、持续漂浮、光晕或无意义旋转。
- 所有动效支持 `prefers-reduced-motion: reduce`。
- 页面切换只在确实能保持内容稳定时使用，不应制造空白或延迟。

## 6. 技术方向

### 6.1 基础技术栈

推荐保留 React，并完成以下调整：

- React 18。
- 从 Create React App 迁移到 Vite。
- React Router 负责页面路由。
- 使用原生 CSS Design Tokens 和 CSS Modules 或按组件拆分的样式文件。
- 使用 Framer Motion 处理少量高价值页面动效。
- 使用 React Markdown 或 MDX 管理真实 Notes 和案例长文。
- 使用 Lucide React 统一图标。

不建议加入 Ant Design。它更适合业务后台和表单系统，会让个人网站呈现明显的组件库风格。Tailwind 与现有 CSS 只能选择一套作为主要样式方案，不应同时保留未启用的 Tailwind、全局 CSS 和另一套组件库主题。

### 6.2 内容数据层

个人信息和项目内容应从页面组件中抽离，建议结构：

```text
src/
  content/
    profile.js
    experience.js
    projects.js
    research.js
    navigation.js
  components/
    layout/
    navigation/
    home/
    work/
    research/
    common/
  pages/
    HomePage.jsx
    WorkPage.jsx
    CaseStudyPage.jsx
    ResearchPage.jsx
    AboutPage.jsx
    NotesPage.jsx
    ContactPage.jsx
  styles/
    tokens.css
    globals.css
    utilities.css
```

数据层需要成为唯一内容来源，避免 About、Resume 和 Contact 各自保存一套互相矛盾的信息。

### 6.3 路由和加载性能

- 首页只加载首屏和必要组件。
- Work、Research、About、Notes 和 Contact 使用 `React.lazy` 与 `Suspense` 按路由拆分。
- React Markdown、KaTeX 和 Notes 数据只在访问 Notes 或确实需要数学内容时加载。
- 大型项目图表和交互可视化按进入视口或用户操作动态加载。
- 删除未使用的 EmailJS、React Icons、旧国际化文件和其他无实际用途依赖。
- 对长文章和案例列表使用 `content-visibility: auto`，减少首屏布局和绘制成本。

### 6.4 主题系统

- 全站只保留一套主题控制逻辑和一个版本化存储 key；没有多消费者时不引入 Context。
- 首次访问遵循 `prefers-color-scheme`。
- 用户主动选择后写入版本化的 localStorage 配置。
- 在 React 首次渲染前应用主题，避免浅色和暗色之间闪烁。
- 主题切换只改变 Design Tokens，不维护两套重复组件样式。

### 6.5 GitHub Pages 和部署

- Vite 的 `base` 必须与自定义域名和 GitHub Pages 部署方式一致。
- 保留并验证 `CNAME`。
- BrowserRouter 需要配置 GitHub Pages SPA fallback，确保直接访问或刷新 `/work/...` 不返回 404。
- 部署前验证首页、深层路由、静态资源、PDF 和社交分享图片。
- GitHub Actions 应执行安装、构建、测试和部署，避免手动提交 build 产物。

### 6.6 SEO 和分享信息

至少需要：

- 页面标题：`Enqi Jing - Risk Intelligence Engineer and Researcher`。
- 唯一且真实的 meta description。
- Canonical URL。
- Open Graph 和 Twitter Card。
- `Person` JSON-LD，包括姓名、学校、GitHub、LinkedIn 和专业方向。
- 每个案例页面独立的标题、描述和分享图片。
- `sitemap.xml` 和正确的 `robots.txt`。
- 有意义的 favicon 和应用名称，不保留 Create React App 默认内容。

### 6.7 无障碍

- 页面只能有一个主 `main` landmark。
- 标题层级从 H1 到 H3 连续且有语义。
- 所有图像包含准确 alt 文本，装饰图使用空 alt。
- 所有控件具有可见焦点状态。
- 颜色对比满足 WCAG AA。
- 导航菜单打开后正确管理焦点，Escape 可以关闭。
- 路由切换后将焦点移动到新页面主标题。
- 外部链接和 PDF 下载行为需要清晰说明。

### 6.8 性能目标

生产环境目标：

| 指标 | 目标 |
| --- | --- |
| Lighthouse Performance | 95 或以上 |
| Lighthouse Accessibility | 95 或以上 |
| Lighthouse SEO | 95 或以上 |
| LCP | 小于 2.5 秒 |
| CLS | 小于 0.1 |
| INP | 小于 200 ms |
| 首屏 JavaScript | 尽可能低于 150 KB gzip |

### 6.9 测试和视觉验收

每次主要页面改动都需要验证：

- 桌面宽屏、常见笔记本、平板和手机视口。
- 浅色与暗色主题。
- 首屏内容、下一章节提示和主要行动按钮。
- 手机导航打开、关闭和路由切换。
- Resume 下载、外部链接和联系操作。
- 所有项目案例图片和图表加载。
- 无运行时错误、框架错误覆盖层或无关控制台错误。
- `prefers-reduced-motion` 下没有强制动画。
- 浏览器截图与已批准的设计概念逐项比较。

## 7. 实施顺序

### Phase 1: 内容整理

- 以 2026 年最新 Resume 为唯一事实来源。
- 确认姓名、邮箱、GitHub、LinkedIn、教育和工作时间。
- 为三个重点案例补充可公开的背景、职责、技术选择和图片素材。
- 删除所有模板项目、示例联系方式和无法验证的指标。

### Phase 2: 视觉概念

- 分别制作 Hero、Impact、Selected Work、Research、Experience 和 Contact 的独立视觉概念。
- 制作桌面首页整体节奏参考。
- 制作手机首页和手机导航状态。
- 在实现前确认颜色、字体、素材、章节顺序和首页文案。

### Phase 3: 技术基础

- 迁移 Vite。
- 建立 Design Tokens。
- 重构内容数据层。
- 建立路由懒加载、主题系统、SEO 和 GitHub Pages fallback。
- 删除旧样式、重复主题和未使用依赖。

### Phase 4: 首页和案例实现

- 先完成 Header 与 Hero，并与已批准概念对比。
- 依次完成 Impact、三个重点案例、Research、Experience、About 和 Contact。
- 再完成三个案例详情页。
- Notes 只在真实内容准备好后加入导航。

### Phase 5: 验收和发布

- 执行响应式、交互、无障碍和性能测试。
- 检查所有真实内容和外部链接。
- 对照设计概念进行截图级视觉检查。
- 验证 GitHub Pages 的首页和深层路由。
- 完成 SEO、分享图片和正式部署。

## 8. 完成标准

满足以下条件后，重构才视为完成：

- 首页在首屏清晰表达姓名、定位、专业方向和主要操作。
- 三个重点案例都来自真实经历，并展示问题、贡献和结果。
- 网站不包含任何模板项目、示例联系方式或过期简历内容。
- Apple 风格通过版式、素材、动效和一致性体现，而不是依靠模仿性装饰。
- 桌面和手机都没有文字截断、元素重叠或布局跳动。
- 浅色、暗色、键盘导航和减少动态效果模式都能正常使用。
- Resume 按钮下载最新 PDF。
- 所有路由可直接打开和刷新。
- Lighthouse 和 Core Web Vitals 达到本文目标或记录明确、合理的例外。
- 浏览器实际渲染与已批准视觉概念一致，没有未说明的设计偏差。

## 9. 迁移前主要问题

1. 首页内容不足。`src/pages/HomePage.jsx` 只有 Hero，没有案例、成果、研究方向、经历或下一章节内容，大面积空白不能等同于有效极简。
2. 个人定位过于泛化。首页仍使用 `Software Engineer` 和 clean code、purpose、passion 等模板化打字机文案，无法体现风险智能、机器学习和分布式系统的差异化方向。
3. Work 页面内容不真实。`src/pages/ProjectsPage.jsx` 中的电商、任务管理、移动银行、房地产和 AI 内容生成项目均为模板数据，图片来自 Unsplash，链接为 `#`。
4. Contact 页面包含示例信息。`src/pages/ContactPage.jsx` 仍展示 `enqi.jing@example.com`、美国示例电话和 San Francisco 地址，与最新简历不一致。
5. 网页简历已经过期。`src/pages/SkillsPage.jsx` 中的 Resume Markdown 和 `src/assets/Enqi_Jing_Software_Engineer_Resume.pdf` 都没有包含最新的 DP Consulting 经历和当前研究定位。
6. Resume 控件不可用。About 页的 Download PDF 和 Print 按钮没有事件处理、下载链接或打印逻辑。
7. Blog 和 Notes 是示例内容。文章集中在 2024 年，使用模板标题、虚构性能数据和大量 Emoji，不能代表当前个人研究或真实写作。
8. 人物素材不适合专业首页。`src/assets/profile.jpg` 和 `src/assets/about.jpg` 实际为同一张生活自拍，背景、光线和构图不足以支撑专业个人品牌。
9. CSS 结构失控。`src/styles/globals.css` 达到 2215 行，存在重复暗色主题变量、未定义变量、旧版 Home/About/Portfolio 样式和当前组件样式混杂的问题。
10. 视觉风格不统一。浅色主题使用米白和鼠尾草绿，暗色主题使用棕色和陶土色，与目标中的 Apple 中性色体系不一致。
11. 当前所谓极简缺乏视觉重点。首页没有人物、产品、项目界面或数据视觉，文字对比度偏低，CTA 与社交入口缺少明确层级。
12. 动效价值较低。打字机动画持续改变文本并保留大块高度，降低信息读取效率，也没有处理减少动态效果偏好。
13. 手机菜单不完整。菜单按钮缺少 `aria-label`、`aria-expanded` 和关闭动画，展开菜单占据较大首屏空间，也没有焦点管理或 Escape 关闭。
14. 主题系统重复。项目同时存在 `ThemeToggle.jsx`、`contexts/ThemeContext.js` 和 `hooks/useTheme.js` 三套逻辑，使用不同的 `data-theme` 与 class 策略。
15. 页面语义存在重复。`MainLayout` 和多个页面组件同时输出 `main`，可能形成嵌套主 landmark。
16. 所有页面被同步打包。`src/App.js` 直接导入 Notes、Skills、Markdown 和 KaTeX 相关页面，没有进行路由级代码拆分。
17. AnimatePresence 使用不完整。路由没有绑定 location 和稳定 key，当前页面切换动画不能形成清晰、可靠的状态过渡。
18. 外部图片依赖脆弱。项目图片全部依赖远程 Unsplash，没有本地优化、固定资源控制或完整的加载策略。
19. SEO 仍为默认状态。`public/index.html` 的标题是 `Portfolio Website`，没有 description、Canonical、Open Graph 或结构化数据。
20. PWA 元数据仍为 Create React App 默认值。`public/manifest.json` 中保留 `React App` 和 `Create React App Sample`。
21. GitHub Pages 深层路由有风险。项目使用 BrowserRouter，但没有看到用于直接访问 `/projects`、`/notes` 等路径的 404 fallback。
22. 可访问性基础不足。全局按钮样式删除 outline，多个控件没有明确焦点样式，项目交互依赖 hover，移动端和键盘用户体验不完整。
23. 依赖和样式方案混杂。package 中存在 Tailwind、EmailJS、React Icons 等依赖，但当前实现未形成一致用途，Tailwind 导入还处于禁用状态。
24. 缺少正式的视觉和交互测试。当前测试文件已删除，也没有 Playwright 或其他端到端测试覆盖首页、导航、主题、下载和响应式行为。
