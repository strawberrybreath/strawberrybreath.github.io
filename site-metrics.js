/* Strawberry Breath footer metrics */
(() => {
  const START_DATE = new Date("2026-08-18T00:00:00+08:00");

  // GoatCounter: one shared site-wide page-view counter across every page.
  const renderVisitorCount = () => {
    const target = document.querySelector("[data-site-views]");
    if (!target || target.dataset.loaded === "true" || !window.goatcounter?.visit_count) return;
    target.dataset.loaded = "true";
    try {
      window.goatcounter.visit_count({
        append: "[data-site-views]",
        path: "TOTAL",
        no_branding: true,
        style: "div { border: 0 !important; background: transparent !important; padding: 0 !important; margin: 0 !important; width: auto !important; height: auto !important; color: inherit !important; font: inherit !important; } #gcvc-for, #gcvc-by { display: none !important; } #gcvc-views { color: inherit !important; font: inherit !important; }"
      });
    } catch (error) {
      target.textContent = "暂不可用";
      target.dataset.loaded = "false";
    }
  };

  const loadGoatCounter = () => {
    if (document.querySelector('script[data-goatcounter="https://strawberrybreath.goatcounter.com/count"]')) return;
    const tracker = document.createElement("script");
    tracker.setAttribute("data-goatcounter", "https://strawberrybreath.goatcounter.com/count");
    tracker.async = true;
    tracker.src = "https://gc.zgo.at/count.js";
    tracker.addEventListener("load", renderVisitorCount, { once: true });
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
    metrics.innerHTML = '<span class="site-metric"><span class="site-metric-label">网站运行</span><strong class="site-metric-value" data-site-runtime></strong><span class="site-metric-unit">天</span></span><span class="site-metric site-metric-counter"><span class="site-metric-label">累计访问</span><span class="site-metric-goatcounter" data-site-views>读取中</span></span><span class="site-metric-date">始于 2026.08.18</span>';
    const identity = footer.querySelector(".footer-identity");
    if (identity) identity.insertAdjacentElement("afterend", metrics);
    else footer.appendChild(metrics);
    metrics.querySelector("[data-site-runtime]").textContent = elapsed.toLocaleString("zh-CN");
    renderVisitorCount();
  };

  loadGoatCounter();

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render, { once: true });
  } else {
    render();
  }
})();
