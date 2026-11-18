/* Related reading: choose the two closest-dated articles sharing at least one tag. */
document.addEventListener("DOMContentLoaded", () => {
  const host = document.querySelector("[data-related-reading]");
  if (!host || typeof articles === "undefined" || !Array.isArray(articles)) return;
  document.querySelectorAll(".article-pagination").forEach(node => node.remove());
  const current = location.pathname.split("/").pop();
  const article = articles.find(item => item.href === current);
  if (!article) return;
  const currentTags = new Set(article.tags || []);
  const currentDate = Date.parse((article.date || "") + "T00:00:00");
  const related = articles
    .filter(item => item.href !== current)
    .map(item => ({
      item,
      sharedTags: (item.tags || []).filter(tag => currentTags.has(tag)),
      dateDistance: Number.isFinite(currentDate) && item.date
        ? Math.abs(Date.parse(item.date + "T00:00:00") - currentDate)
        : Number.MAX_SAFE_INTEGER
    }))
    .filter(entry => entry.sharedTags.length > 0)
    .sort((a, b) =>
      a.dateDistance - b.dateDistance ||
      b.sharedTags.length - a.sharedTags.length ||
      (b.item.date || "").localeCompare(a.item.date || "")
    )
    .slice(0, 2);
  if (!related.length) return;

  const heading = document.createElement("div");
  heading.className = "related-reading-heading";
  const kicker = document.createElement("p");
  kicker.className = "related-reading-kicker";
  kicker.textContent = "RELATED READING";
  const title = document.createElement("h2");
  title.id = "related-title";
  title.textContent = "你可能还想读";
  const intro = document.createElement("p");
  intro.className = "related-reading-intro";
  intro.textContent = "优先推荐发布日期相近、并与你正在阅读的文章共享标签的两篇文章。";
  heading.append(kicker, title, intro);

  const grid = document.createElement("div");
  grid.className = "related-reading-grid";
  related.forEach(({ item, sharedTags }) => {
    const card = document.createElement("a");
    card.className = "related-reading-card";
    card.href = item.href;
    card.dataset.articleTheme = item.theme || "";
    if (item.image) {
      const image = document.createElement("img");
      image.className = "related-reading-image";
      image.src = item.image;
      image.alt = item.imageAlt || "";
      image.loading = "lazy";
      image.decoding = "async";
      card.appendChild(image);
    }
    const copy = document.createElement("span");
    copy.className = "related-reading-copy";
    const date = document.createElement("span");
    date.className = "related-reading-category";
    date.textContent = item.dateLabel || item.date || "";
    const cardTitle = document.createElement("strong");
    cardTitle.textContent = item.title;
    const description = document.createElement("span");
    description.className = "related-reading-description";
    description.textContent = item.description || "";
    const tags = document.createElement("span");
    tags.className = "related-reading-tags";
    sharedTags.forEach(value => {
      const tag = document.createElement("span");
      tag.textContent = value;
      tags.appendChild(tag);
    });
    copy.append(date, cardTitle, description, tags);
    card.appendChild(copy);
    grid.appendChild(card);
  });
  host.replaceChildren(heading, grid);
});
