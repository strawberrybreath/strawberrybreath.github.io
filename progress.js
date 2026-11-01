(function(){
  const body = document.getElementById('bodycopy');
  if (!body) return;
  const text = (body.innerText || body.textContent || '').replace(/\s+/g, ' ').trim();
  const han = (text.match(/\p{Script=Han}/gu) || []).length;
  const latin = (text.match(/[A-Za-z0-9]+(?:['’.-][A-Za-z0-9]+)*/g) || []).length;
  const count = han + latin;
  const words = document.getElementById('reading-words');
  const minutes = document.getElementById('reading-time');
  if (words) words.textContent = count.toLocaleString('zh-CN');
  if (minutes) minutes.textContent = Math.max(1, Math.ceil(count / 400));
  const bar = document.getElementById('reading-bar');
  const pct = document.getElementById('reading-percent');
  const topbar = document.getElementById('reading-progress-top');
  function update(){
    const rect = body.getBoundingClientRect();
    const start = rect.top + window.scrollY - 120;
    const end = Math.max(start + 1, rect.bottom + window.scrollY - window.innerHeight * .65);
    const progress = Math.max(0, Math.min(100, Math.round((window.scrollY - start) / (end - start) * 100)));
    if (bar) bar.style.width = progress + '%';
    if (pct) pct.textContent = progress + '%';
    if (topbar) topbar.style.width = progress + '%';
  }
  window.addEventListener('scroll', update, {passive:true});
  window.addEventListener('resize', update);
  update();
})();