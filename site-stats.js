/* Live content totals derived from the shared article catalogue. */
document.addEventListener("DOMContentLoaded", () => {
  const target = document.querySelector("[data-site-stats]");
  if (!target || typeof articles === "undefined" || !Array.isArray(articles)) return;
  const tags = new Set(articles.flatMap(item => Array.isArray(item.tags) ? item.tags : []).filter(Boolean));
  const count = articles.length;
  target.textContent = `目前收录 ${count} 篇文章，涉及 ${tags.size} 个标签。`;
  target.setAttribute("aria-live", "polite");
});
