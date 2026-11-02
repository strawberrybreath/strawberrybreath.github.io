/* Single source of truth for the homepage's latest three and the complete archive. */
const articles = [
  {
    title: "谁把山河装进了烟盒？二手烟世界里的女性处境",
    href: "article-04.html",
    date: "2026-11-02",
    dateLabel: "2026年11月2日",
    category: "公共议题与女性经验",
    description: "从烟盒上的山河符号、被浪漫化的吸烟镜头，到女性与未成年人承受的二手烟，讨论烟草包装、公共空间与控烟责任。",
    image: "https://ncdalliance.org/sites/default/files/styles/original_small/public/news/screen_shot_2015-01-09_at_15.04.28.png.webp?itok=_u5zed-9",
    imageAlt: "不同国家烟草包装上的图形健康警示对比",
    reading: "约 15 分钟"
  },
  {
    title: "语文课本里的爱情观：重读《氓》",
    href: "article-03.html",
    date: "2026-10-26",
    dateLabel: "2026年10月26日",
    category: "阅读随笔",
    description: "重读高中语文课本里的《诗经·氓》，从两千多年前一位女子的爱情经历，重新理解亲密关系中的付出、失望与转身。",
    image: "https://www.nlc.cn/upload/img/2023-11-27/4db96e11.jpg",
    imageAlt: "国家图书馆展出的宋刻本毛诗注疏古籍",
    reading: "约 12 分钟"
  },
  {
    title: "女巫不曾消失：从欧洲猎巫到万圣节的女性符号",
    href: "article-02.html",
    date: "2026-10-19",
    dateLabel: "2026年10月19日",
    category: "女性主义与历史",
    description: "从欧洲猎巫运动与《醋汤姆》出发，重新理解女巫符号背后的女性历史，以及当代社会对女性的规训。",
    image: "https://monstrousregiment.co.uk/wp-content/uploads/1976/10/Vinegar_Tom_1976_Photo_4-1024x696.jpg",
    imageAlt: "Monstrous Regiment 1976年《Vinegar Tom》原始演出黑白剧照",
    reading: "约 12 分钟"
  },
  {
    title: "她不是谁的“小姐”，她只是她自己",
    href: "article-01.html",
    date: "2026-10-12",
    dateLabel: "2026年10月12日",
    category: "电影随笔",
    description: "从《Enola Holmes》出发，聊聊女性主体性、自我选择，以及社会期待如何影响一个人的人生。",
    image: "assets/Enola%20Holmes1.JPG",
    imageAlt: "电影《Enola Holmes》第一部官方海报",
    reading: "约 16 分钟"
  }
];

function articleCard(article) {
  const item = document.createElement("article");
  item.className = "article-list-item";
  item.innerHTML = `
    <a class="article-list-image" href="${article.href}" tabindex="-1" aria-hidden="true">
      <img src="${article.image}" alt="${article.imageAlt}" loading="lazy">
    </a>
    <div class="article-list-copy">
      <p class="article-list-category">${article.category}</p>
      <h3><a href="${article.href}">${article.title}</a></h3>
      <p>${article.description}</p>
      <p class="article-list-meta"><time datetime="${article.date}">${article.dateLabel}</time><span>${article.reading}</span></p>
    </div>`;
  return item;
}

document.addEventListener("DOMContentLoaded", () => {
  const ordered = [...articles].sort((a, b) => b.date.localeCompare(a.date));
  const latest = document.querySelector("[data-latest-articles]");
  const archive = document.querySelector("[data-all-articles]");
  if (latest) ordered.slice(0, 3).forEach(article => latest.appendChild(articleCard(article)));
  if (archive) ordered.forEach(article => archive.appendChild(articleCard(article)));
  const count = document.querySelector("[data-article-count]");
  if (count) count.textContent = String(ordered.length);
});
