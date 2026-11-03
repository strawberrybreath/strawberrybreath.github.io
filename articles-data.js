/* 首页文章列表数据：目前仅展示已发布的第一篇文章。 */
const articles = [
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

function articleCard(article) {
  const item = document.createElement("article");
  item.className = "article-list-item";
  const image = article.image ? `<a class="article-list-image" href="${article.href}" tabindex="-1" aria-hidden="true"><img src="${article.image}" alt="${article.imageAlt || ""}" loading="lazy"></a>` : "";
  const date = article.date && article.dateLabel ? `<time class="article-list-date" datetime="${article.date}">${article.dateLabel}</time>` : "";
  item.innerHTML = `${image}<div class="article-list-copy"><div class="article-list-meta">${date}</div><h3><a href="${article.href}">${article.title}</a></h3><p>${article.description || ""}</p></div>`;
  return item;
}
document.addEventListener("DOMContentLoaded", () => {
  const latest = document.querySelector("[data-latest-articles]");
  if (latest) articles.forEach(article => latest.appendChild(articleCard(article)));
});
