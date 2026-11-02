(function(){
  const content = document.querySelector('main');
  if (!content) return;

  const rawText = (content.innerText || content.textContent || '').replace(/\s+/g, ' ').trim();
  const han = (rawText.match(/\p{Script=Han}/gu) || []).length;
  const latin = (rawText.match(/[A-Za-z0-9]+(?:['’.-][A-Za-z0-9]+)*/g) || []).length;
  const count = han + latin;
  const words = document.getElementById('reading-words');
  const minutes = document.getElementById('reading-time');
  if (words) words.textContent = count.toLocaleString('zh-CN');
  if (minutes) minutes.textContent = Math.max(1, Math.ceil(count / 400));

  const ring = document.getElementById('reading-ring');
  const pct = document.getElementById('reading-percent');
  const confetti = document.getElementById('reading-confetti');
  let celebrated = false;

  function celebrate(){
    if (celebrated || !confetti) return;
    celebrated = true;
    document.body.classList.add('reading-complete');
    const symbols = ['✦','✧','✿','❀','·','✧','✦','❋','✿','·','❀','✧'];
    symbols.forEach((symbol,index)=>{
      const bit=document.createElement('span');
      const angle=(Math.PI*2*index)/symbols.length;
      bit.className='confetti-bit';
      bit.textContent=symbol;
      bit.style.setProperty('--x',(Math.cos(angle)*58)+'px');
      bit.style.setProperty('--y',(Math.sin(angle)*42-8)+'px');
      confetti.appendChild(bit);
    });
    window.setTimeout(()=>{ confetti.replaceChildren(); },2600);
  }

  function update(){
    const rect=content.getBoundingClientRect();
    const start=rect.top+window.scrollY-90;
    const end=Math.max(start+1,rect.bottom+window.scrollY-window.innerHeight);
    const raw=(window.scrollY-start)/(end-start);
    const progress=Math.max(0,Math.min(100,Math.round(raw*100)));
    if(ring){
      ring.style.setProperty('--read-progress',progress+'%');
      ring.setAttribute('aria-label','阅读进度 '+progress+'%');
    }
    if(pct) pct.textContent=progress+'%';
    if(progress>=100) celebrate();
  }

  window.addEventListener('scroll',update,{passive:true});
  window.addEventListener('resize',update);
  update();
})();