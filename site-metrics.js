/* Strawberry Breath footer metrics — resilient, mobile-first footer */
(() => {
  const START_DATE = new Date("2026-08-18T00:00:00+08:00");

  const render = () => {
    const footer = document.querySelector(".site-footer .footer-glass-card");
    if (!footer || footer.querySelector(".site-metrics")) return;
    const elapsed = Math.max(0, Math.floor((Date.now() - START_DATE.getTime()) / 86400000));
    const metrics = document.createElement("div");
    metrics.className = "site-metrics";
    metrics.setAttribute("aria-label", "网站运行信息");
    metrics.innerHTML =
      '<span class="site-metric"><span class="site-metric-label">运行时间</span><strong class="site-metric-value" data-site-runtime>' + elapsed.toLocaleString("zh-CN") + '</strong><span class="site-metric-unit">天</span></span>' +
      '<span class="site-metric site-metric-counter"><span class="site-metric-label">累计访问量</span><span class="site-metric-goatcounter" aria-label="累计访问量">暂不可用</span></span>' +
      '<p class="site-metric-info">始于 2026.08.18 <span aria-hidden="true">·</span> 个人博客 <span aria-hidden="true">·</span> GitHub Pages</p>';
    const identity = footer.querySelector(".footer-identity");
    if (identity) identity.insertAdjacentElement("afterend", metrics);
    else footer.appendChild(metrics);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render, { once: true });
  } else {
    render();
  }
})();
