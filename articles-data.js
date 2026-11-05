/* One source of truth for all published articles, ordered by their real publication dates. */
const articles = [
  { title: "葡萄成熟时：关于等待、遗憾，以及人生的另一种答案", href: "article-06.html", date: "2026-11-05", dateLabel: "2026年11月5日", description: "从陈奕迅《葡萄成熟时》出发，聊聊等待、付出、遗憾、爱情的成熟，以及不必按照别人的时间表生活。", image: "https://img.yec.tw/zp/images/8170DCC60B5F2FA0CD306522B5F289F536180D21", imageAlt: "陈奕迅2005年专辑《U 87》封面" },
  {
    title: "大观园的梦醒了，女性的故事却留下了",
    href: "article-05.html",
    date: "2026-11-04",
    dateLabel: "2026年11月4日",
    description: "重新读《红楼梦》，从大观园里的女性情谊、才情与志向，看见她们被家族和时代限制的人生。",
    image: "https://p6.itc.cn/q_70/images03/20221210/23da415d67ef4e3192a17e590dc6f20c.jpeg",
    imageAlt: "人民文学出版社《红楼梦》四十周年纪念版书籍封面"
  },
  {
    title: "谁把山河装进了烟盒？二手烟世界里的女性处境",
    href: "article-04.html",
    date: "2026-11-02",
    dateLabel: "2026年11月2日",
    description: "从烟盒上的山河符号、被浪漫化的吸烟镜头，到女性与未成年人承受的二手烟，讨论烟草包装、公共空间与控烟责任。",
    image: "https://ncdalliance.org/sites/default/files/styles/original_small/public/news/screen_shot_2015-01-09_at_15.04.28.png.webp?itok=_u5zed-9",
    imageAlt: "不同国家烟草包装上的图形健康警示对比"
  },
  {
    title: "语文课本里的爱情观：重读《氓》",
    href: "article-03.html",
    date: "2026-10-26",
    dateLabel: "2026年10月26日",
    description: "重读高中语文课本里的《诗经·氓》，从两千多年前一位女子的爱情经历，重新理解亲密关系中的付出、失望与转身。",
    image: "https://www.nlc.cn/upload/img/2023-11-27/4db96e11.jpg",
    imageAlt: "国家图书馆展出的宋刻本毛诗注疏古籍"
  },
  {
    title: "女巫不曾消失：从欧洲猎巫到万圣节的女性符号",
    href: "article-02.html",
    date: "2026-10-19",
    dateLabel: "2026年10月19日",
    description: "从欧洲猎巫运动与《醋汤姆》出发，重新理解女巫符号背后的女性历史，以及当代社会对女性的规训。",
    image: "https://monstrousregiment.co.uk/wp-content/uploads/1976/10/Vinegar_Tom_1976_Photo_4-1024x696.jpg",
    imageAlt: "Monstrous Regiment 1976年《Vinegar Tom》原始演出黑白剧照"
  },
  {
    title: "她不是谁的“小姐”，她只是她自己",
    href: "article-01.html",
    date: "2026-10-12",
    dateLabel: "2026年10月12日",
    description: "从《Enola Holmes》出发，聊聊女性主体性、自我选择，以及社会期待如何影响一个人的人生。",
    image: "assets/Enola%20Holmes1.JPG",
    imageAlt: "电影《Enola Holmes》第一部官方海报"
  }
];

function articleCard(article, index) {
  const item = document.createElement("article");
  item.className = "article-list-item";
  const image = article.image ? `
    <a class="article-list-image" href="${article.href}" tabindex="-1" aria-hidden="true">
      <img src="${article.image}" alt="${article.imageAlt || ""}" loading="lazy" decoding="async">
    </a>` : "";
  const date = article.date && article.dateLabel
    ? `<time class="article-list-date" datetime="${article.date}">${article.dateLabel}</time>`
    : "";
  const issueNumber = Number((article.href.match(/article-(\d+)\.html/) || [null, String(index + 1)])[1]);
  const issue = `<span class="article-issue" aria-label="第${issueNumber}期"><span class="article-issue-prefix">第</span><span class="article-issue-number">${issueNumber}</span><span class="article-issue-suffix">期</span></span>`;
  item.innerHTML = `
    ${image}
    <div class="article-list-copy">
      <div class="article-list-meta">${issue}${date}</div>
      <h3><a href="${article.href}">${article.title}</a></h3>
      <p>${article.description || ""}</p>
    </div>`;
  return item;
}

document.addEventListener("DOMContentLoaded", () => {
  const ordered = [...articles].sort((a, b) => b.date.localeCompare(a.date));
  const latest = document.querySelector("[data-latest-articles]");
  const archive = document.querySelector("[data-all-articles]");
  if (latest) ordered.slice(0, 3).forEach((article, index) => latest.appendChild(articleCard(article, index)));
  if (archive) {
    ordered.forEach((article, index) => archive.appendChild(articleCard(article, index)));
    const search = document.querySelector("[data-article-search]");
    const count = document.querySelector("[data-article-count]");
    const empty = document.querySelector("[data-article-empty]");
    const updateResults = () => {
      const query = (search?.value || "").trim().toLocaleLowerCase();
      let visible = 0;
      archive.querySelectorAll(".article-list-item").forEach((item, index) => {
        const article = ordered[index];
        const haystack = [article.title, article.description, article.dateLabel].join(" ").toLocaleLowerCase();
        const match = !query || haystack.includes(query);
        item.hidden = !match;
        if (match) visible += 1;
      });
      if (count) count.textContent = String(visible);
      if (empty) empty.hidden = visible !== 0;
    };
    if (search) search.addEventListener("input", updateResults);
    updateResults();
  }
});
