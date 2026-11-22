/* Strawberry Breath footer metrics — GoatCounter visitor total */
(() => {
  const START_DATE = new Date("2026-08-18T00:00:00+08:00");
  const GOATCOUNTER_BASE = "https://strawberrybreath.goatcounter.com";
  const GOATCOUNTER_COUNT_URL = GOATCOUNTER_BASE + "/count";
  const GOATCOUNTER_TOTAL_URL = GOATCOUNTER_BASE + "/counter/TOTAL.json";

  const loadGoatCounter = () => {
    if (document.querySelector("script[data-goatcounter]")) return;
    const tracker = document.createElement("script");
    tracker.dataset.goatcounter = GOATCOUNTER_COUNT_URL;
    tracker.async = true;
    tracker.src = "https://gc.zgo.at/count.js";
    document.head.appendChild(tracker);
  };

  const render = () => {
    const footerCard = document.querySelector(".site-footer .footer-glass-card");
    if (!footerCard) return;

    loadGoatCounter();

    let metrics = footerCard.querySelector(".site-metrics");
    if (!metrics) {
      const elapsed = Math.max(0, Math.floor((Date.now() - START_DATE.getTime()) / 86400000));
      metrics = document.createElement("div");
      metrics.className = "site-metrics";
      metrics.setAttribute("aria-label", "网站运行信息");
      metrics.innerHTML =
        '<span class="site-metric"><span class="site-metric-label">始于</span><strong class="site-metric-value">2026.08.18</strong></span>' +
        '<span class="site-metric"><span class="site-metric-label">已运行</span><strong class="site-metric-value" data-site-runtime>' + elapsed.toLocaleString("zh-CN") + '</strong><span class="site-metric-unit">天</span></span>' +
        '<span class="site-metric site-metric-counter"><span class="site-metric-label">累计访问量</span><strong class="site-metric-value site-metric-count" data-site-count aria-live="polite">统计中…</strong><span class="site-metric-unit">次</span></span>';
      footerCard.appendChild(metrics);
    }

    const count = metrics.querySelector("[data-site-count]");
    if (!count || count.dataset.loaded === "true") return;

    fetch(GOATCOUNTER_TOTAL_URL, {
      method: "GET",
      mode: "cors",
      cache: "no-store",
      credentials: "omit"
    })
      .then(response => {
        if (!response.ok) throw new Error("GoatCounter request failed: " + response.status);
        return response.json();
      })
      .then(data => {
        if (data && data.count !== undefined) {
          count.textContent = String(data.count);
          count.dataset.loaded = "true";
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
