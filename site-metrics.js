/* Strawberry Breath footer metrics + GoatCounter integration */
(() => {
  const START_DATE = new Date("2026-08-18T00:00:00+08:00");
  const GOATCOUNTER_URL = "https://strawberrybreath.goatcounter.com";
  const GOATCOUNTER_COUNT_URL = GOATCOUNTER_URL + "/counter/TOTAL.json";

  // Load GoatCounter once on every page that includes this shared file.
  if (!document.querySelector('script[data-goatcounter="https://strawberrybreath.goatcounter.com/count"]')) {
    const tracker = document.createElement("script");
    tracker.async = true;
    tracker.src = "https://gc.zgo.at/count.js";
    tracker.dataset.goatcounter = GOATCOUNTER_URL + "/count";
    document.head.appendChild(tracker);
  }

  const render = () => {
    const footer = document.querySelector(".site-footer .footer-glass-card");
    if (!footer || footer.querySelector(".site-metrics")) return;

    const elapsed = Math.max(0, Math.floor((Date.now() - START_DATE.getTime()) / 86400000));
    const metrics = document.createElement("div");
    metrics.className = "site-metrics";
    metrics.setAttribute("aria-label", "网站运行信息");
    metrics.innerHTML =
      '<span class="site-metric"><span class="site-metric-label">始于</span><strong class="site-metric-value">2026.08.18</strong></span>' +
      '<span class="site-metric"><span class="site-metric-label">已运行</span><strong class="site-metric-value" data-site-runtime>' + elapsed.toLocaleString("zh-CN") + '</strong><span class="site-metric-unit">天</span></span>' +
      '<span class="site-metric site-metric-counter"><span class="site-metric-label">累计访问量</span><strong class="site-metric-value site-metric-count" data-site-count aria-live="polite">统计中…</strong><span class="site-metric-unit">次</span></span>';

    // Keep the existing brand and copyright block; metrics are inserted before it.
    footer.insertBefore(metrics, footer.firstChild);

    const count = metrics.querySelector("[data-site-count]");
    fetch(GOATCOUNTER_COUNT_URL, {
      method: "GET",
      mode: "cors",
      cache: "no-store",
      credentials: "omit"
    })
      .then(response => {
        if (!response.ok) throw new Error("GoatCounter counter request failed: " + response.status);
        return response.json();
      })
      .then(data => {
        if (data && data.count !== undefined && data.count !== null) {
          count.textContent = String(data.count);
        } else {
          throw new Error("GoatCounter response has no count");
        }
      })
      .catch(() => {
        count.textContent = "暂不可用";
        count.setAttribute("aria-label", "累计访问量暂不可用");
      });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render, { once: true });
  } else {
    render();
  }
})();
