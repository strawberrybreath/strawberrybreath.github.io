(function(){
  function init(){
    var header=document.querySelector('.sb-header-inner')||document.querySelector('header');
    var main=document.querySelector('main')||document.querySelector('article')||document.body;
    if(!header||!main||document.querySelector('.sb-global-reading'))return;
    var widget=document.createElement('div');
    widget.className='sb-global-reading';
    widget.setAttribute('role','status');
    widget.setAttribute('aria-live','off');
    widget.innerHTML='<span class="sb-global-reading-label">阅读</span><span class="sb-global-reading-track"><i class="sb-global-reading-fill"></i></span><span class="sb-global-reading-percent">0%</span>';
    header.appendChild(widget);
    var fill=widget.querySelector('.sb-global-reading-fill');
    var pct=widget.querySelector('.sb-global-reading-percent');
    var text=(main.innerText||main.textContent||'').replace(/\s+/g,' ').trim();
    var count=(text.match(/\p{Script=Han}/gu)||[]).length+(text.match(/[A-Za-z0-9]+(?:['’.-][A-Za-z0-9]+)*/g)||[]).length;
    widget.title=count.toLocaleString('zh-CN')+' 字 · 约 '+Math.max(1,Math.ceil(count/400))+' 分钟';
    function update(){
      var rect=main.getBoundingClientRect(),top=rect.top+window.scrollY,bottom=rect.bottom+window.scrollY;
      var start=top-70,end=Math.max(start+1,bottom-window.innerHeight*.72);
      var value=Math.max(0,Math.min(100,Math.round((window.scrollY-start)/(end-start)*100)));
      fill.style.width=value+'%';pct.textContent=value+'%';
      widget.setAttribute('aria-label','阅读进度 '+value+'%，约 '+Math.max(1,Math.ceil(count/400))+' 分钟');
      widget.classList.toggle('is-complete',value===100);
    }
    window.addEventListener('scroll',update,{passive:true});
    window.addEventListener('resize',update);
    update();
    addReturnTop();
  }
  function addReturnTop(){
    var article=document.querySelector('.article-page');
    if(!article||document.querySelector('.sb-return-top-wrap'))return;
    var wrap=document.createElement('div');
    wrap.className='sb-return-top-wrap';
    var button=document.createElement('button');
    button.type='button';
    button.className='sb-return-top';
    button.textContent='↑ 返回顶部';
    button.setAttribute('aria-label','返回页面顶部');
    button.addEventListener('click',function(){
      window.scrollTo({top:0,behavior:'smooth'});
    });
    wrap.appendChild(button);
    article.appendChild(wrap);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();