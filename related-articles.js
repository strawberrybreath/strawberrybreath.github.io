/* Curated related reading, driven by the shared article catalogue. */
document.addEventListener("DOMContentLoaded", () => {
  const host = document.querySelector("[data-related-reading]");
  if (!host || typeof articles === "undefined" || !Array.isArray(articles)) return;
  const current = location.pathname.split("/").pop();
  const article = articles.find(item => item.href === current);
  if (!article || !Array.isArray(article.related)) return;
  const related = article.related
    .map(href => articles.find(item => item.href === href))
    .filter(Boolean)
    .slice(0, 2);
  if (!related.length) return;

  const heading = document.createElement("div");
  heading.className = "related-reading-heading";
  const kicker = document.createElement("p");
  kicker.className = "related-reading-kicker";
  kicker.textContent = "KEEP READING";
  const title = document.createElement("h2");
  title.id = "related-title";
  title.textContent = "继续阅读";
  const intro = document.createElement("p");
  intro.className = "related-reading-intro";
  intro.textContent = "从相近的主题出发，继续看看其他文章。";
  heading.append(kicker, title, intro);

  const grid = document.createElement("div");
  grid.className = "related-reading-grid";
  related.forEach(item => {
    const card = document.createElement("a");
    card.className = "related-reading-card";
    card.href = item.href;
    card.dataset.articleTheme = item.theme || "";
    const image = document.createElement("img");
    image.className = "related-reading-image";
    image.src = item.image;
    image.alt = item.imageAlt || "";
    image.loading = "lazy";
    image.decoding = "async";
    const copy = document.createElement("span");
    copy.className = "related-reading-copy";
    const category = document.createElement("span");
    category.className = "related-reading-category";
    category.textContent = item.category || "";
    const cardTitle = document.createElement("strong");
    cardTitle.textContent = item.title;
    const description = document.createElement("span");
    description.className = "related-reading-description";
    description.textContent = item.description || "";
    const tags = document.createElement("span");
    tags.className = "related-reading-tags";
    (item.tags || []).slice(0, 2).forEach(value => {
      const tag = document.createElement("span");
      tag.textContent = value;
      tags.appendChild(tag);
    });
    copy.append(category, cardTitle, description, tags);
    card.append(image, copy);
    grid.appendChild(card);
  });
  host.append(heading, grid);
});
