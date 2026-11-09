/* Live content totals derived from the shared article catalogue. */
document.addEventListener("DOMContentLoaded", () => {
  const target = document.querySelector("[data-site-stats]");
  if (!target || typeof articles === "undefined" || !Array.isArray(articles)) return;
  const categories = new Set(articles.map(item => item.category).filter(Boolean));
  const count = articles.length;
  const categoryCount = categories.size;
  target.textContent = `目前收录 ${count} 篇文章，涉及 ${categoryCount} 个主题分类。`;
  target.setAttribute("aria-live", "polite");
});
