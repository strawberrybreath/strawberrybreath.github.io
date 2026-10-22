# 草莓味口气 · 她的影单

用 GitHub Pages 托管的纯静态独立女性电影与文化刊物。每期按主题组织专题，电影数量以该期内容为准；第一期聚焦 Enola Holmes 三部电影。

- 线上地址：<https://strawberrybreath.github.io/>

## 目录结构

```
index.html                 首页（编辑专题 + 三个栏目 + 联系方式）
about/index.html           栏目介绍（编辑理念与三个栏目）
issue-001/index.html       第一期专题：Enola Holmes 三部曲
assets/                    样式与本地图片
  ├─ posters/              三部影片官方海报
  ├─ stills/               Netflix 官方剧照
  └─ *.jpg / *.png         原创编辑插画与响应式图片
.nojekyll                  关闭 Jekyll 处理，保证静态文件原样输出
```

## 片名与人名的使用原则

影片片名与人物名一律使用发行国原文（本系列为英语片）：

- Enola Holmes / Enola Holmes 2 / Enola Holmes 3
- Enola、Eudoria、Sherlock Holmes、Holmes 家族

不使用中文译名替代，以避免译名偏离原名含义。栏目名（草莓味口气、她的影单）保持中文。

## 影片资料、台词与编辑规范

- 每部影片统一列出正式片名、发行年份、导演、主要主演、剧情简介与官方资料链接。
- 剧情资料优先采用 Netflix Media Center、Netflix Tudum 等权利方官方来源；将剧情事实与编辑解读分开书写。
- 直接引用电影台词时，核对原文、说话人、影片及场景；无法逐字核实的句子不得加引号冒充原台词，应标注为“编辑概括 / 非电影原句”。
- 影评需以具体场景、人物动作、叙事安排或冲突为依据，避免仅用抽象口号替代文本分析。

## 图片与版权说明

- **官方海报**：来自 TMDB / Netflix 官方渠道，已下载并本地托管于 `assets/posters/`。
- **官方剧照**：来自 Netflix 官方影片页与 Netflix Tudum 官方图库，已下载并本地托管于 `assets/stills/`，署名如下：
  - 《Enola Holmes 2》首看剧照：摄影 Alex Bailey / Netflix
  - 《Enola Holmes 3》剧照：摄影 John Wilson / Netflix
- 官方海报与剧照版权归 Netflix 及相应权利人所有，本站仅作介绍性引用。
- 其余配图（栏目封面、金句装饰等）为编辑视觉素材；如使用原创或 AI 生成图，会与官方电影素材明确区分，不将其标注为官方海报或剧照。

## 发布流程

站点为纯静态文件，推送至 `main` 分支后 GitHub Pages 自动构建发布。新增一期时：

1. 新建 `issue-00N/index.html`，沿用现有页面结构；
2. 官方素材核对来源与图注后放入 `assets/`，优先使用本地图片，减少热链外部 CDN；
3. 在首页专题入口与相关栏目页面中添加入口。
