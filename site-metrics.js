/* Strawberry Breath footer metrics */
(() => {
  const START_DATE = new Date("2026-08-18T00:00:00+08:00");

  // GoatCounter: one shared site-wide page-view counter across every page.
  const loadGoatCounter = () => {
    if (document.querySelector('script[data-goatcounter="https://strawberrybreath.goatcounter.com/count"]')) return;
    const tracker = document.createElement("script");
    tracker.setAttribute("data-goatcounter", "https://strawberrybreath.goatcounter.com/count");
    tracker.async = true;
    tracker.src = "//gc.zgo.at/count.js";
    document.head.appendChild(tracker);
  };
  const render = () => {
    const footer = document.querySelector(".site-footer .footer-glass-card");
    if (!footer || footer.querySelector(".site-metrics")) return;

    const now = new Date();
    const elapsed = Math.max(0, Math.floor((now.getTime() - START_DATE.getTime()) / 86400000));
    const metrics = document.createElement("div");
    metrics.className = "site-metrics";
    metrics.setAttribute("aria-label", "网站运行信息");
    metrics.innerHTML = '<span class="site-metric"><span class="site-metric-label">网站运行</span><strong class="site-metric-value" data-site-runtime></strong><span class="site-metric-unit">天</span></span><span class="site-metric-date">始于 2026.08.18</span>';
    const identity = footer.querySelector(".footer-identity");
    if (identity) identity.insertAdjacentElement("afterend", metrics);
    else footer.appendChild(metrics);
    metrics.querySelector("[data-site-runtime]").textContent = elapsed.toLocaleString("zh-CN");
  };

  loadGoatCounter();

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render, { once: true });
  } else {
    render();
  }
})();
