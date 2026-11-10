/* Strawberry Breath footer metrics */
(() => {
  const START_DATE = new Date("2026-08-18T00:00:00+08:00");
  const COUNTER_URL = "https://strawberrybreath.goatcounter.com/count";

  const renderVisitorCount = () => {
    const target = document.querySelector("[data-site-views]");
    if (!target || target.dataset.loaded === "true") return;
    if (!window.goatcounter?.visit_count) return;
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
    if (window.goatcounter?.visit_count) {
      renderVisitorCount();
      return;
    }
    if (document.querySelector('script[data-goatcounter="' + COUNTER_URL + '"]')) return;
    const tracker = document.createElement("script");
    tracker.setAttribute("data-goatcounter", COUNTER_URL);
    tracker.async = true;
    tracker.src = "https://gc.zgo.at/count.js";
    tracker.addEventListener("load", renderVisitorCount, { once: true });
    tracker.addEventListener("error", () => {
      const target = document.querySelector("[data-site-views]");
      if (target) target.textContent = "暂不可用";
    }, { once: true });
    document.head.appendChild(tracker);
  };

  const render = () => {
    const footer = document.querySelector(".site-footer .footer-glass-card");
    if (!footer || footer.querySelector(".site-metrics")) return;
    const elapsed = Math.max(0, Math.floor((Date.now() - START_DATE.getTime()) / 86400000));
    const metrics = document.createElement("div");
    metrics.className = "site-metrics";
    metrics.setAttribute("aria-label", "网站运行信息");
    metrics.innerHTML =
      '<span class="site-metric"><span class="site-metric-label">运行时间</span><strong class="site-metric-value" data-site-runtime>' + elapsed.toLocaleString("zh-CN") + '</strong><span class="site-metric-unit">天</span></span>' +
      '<span class="site-metric site-metric-counter"><span class="site-metric-label">累计访问量</span><span class="site-metric-goatcounter" data-site-views>读取中</span></span>' +
      '<p class="site-metric-info">始于 2026.08.18 <span aria-hidden="true">·</span> 个人博客 <span aria-hidden="true">·</span> GitHub Pages</p>';
    const identity = footer.querySelector(".footer-identity");
    if (identity) identity.insertAdjacentElement("afterend", metrics);
    else footer.appendChild(metrics);
    loadGoatCounter();
    window.setTimeout(() => {
      const target = document.querySelector("[data-site-views]");
      if (target && target.textContent.trim() === "读取中") target.textContent = "暂不可用";
    }, 12000);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render, { once: true });
  } else {
    render();
  }
  loadGoatCounter();
})();
