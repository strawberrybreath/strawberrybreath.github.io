/* Article reading tools: generated contents, search handoff and warm night mode. */
document.addEventListener("DOMContentLoaded",()=>{
  const page=document.body;
  if(!page.classList.contains("article-page"))return;
  const essay=document.querySelector(".essay-content");
  if(!essay)return;

  const tools=document.createElement("div");
  tools.className="reading-tools";
  const toggle=document.createElement("button");
  toggle.type="button";toggle.className="reading-theme-toggle";
  const nightKey="strawberrybreath-reading-night";
  const setNight=enabled=>{
    page.classList.toggle("reading-night",enabled);
    toggle.setAttribute("aria-pressed",String(enabled));
    toggle.textContent=enabled?"切换为纸页模式":"切换为夜读模式";
    try{localStorage.setItem(nightKey,enabled?"1":"0")}catch(error){}
  };
  let saved=false;try{saved=localStorage.getItem(nightKey)==="1"}catch(error){}
  toggle.addEventListener("click",()=>setNight(!page.classList.contains("reading-night")));
  tools.appendChild(toggle);
  const topline=document.querySelector(".article-topline");
  if(topline)topline.insertAdjacentElement("afterend",tools);
  else essay.insertAdjacentElement("beforebegin",tools);
  setNight(saved);

  const headings=[...essay.querySelectorAll("h2,h3")].filter(h=>h.textContent.trim());
  if(headings.length>=2){
    const toc=document.createElement("details");
    toc.className="reading-toc";
    const summary=document.createElement("summary");
    summary.textContent="本文目录 · "+headings.length+" 个章节";
    const list=document.createElement("ol");
    headings.forEach((heading,index)=>{
      if(!heading.id)heading.id="reading-section-"+(index+1);
      const item=document.createElement("li");
      if(heading.tagName==="H3")item.style.marginLeft="10px";
      const link=document.createElement("a");
      link.href="#"+heading.id;link.textContent=heading.textContent.trim();
      item.appendChild(link);list.appendChild(item);
    });
    toc.append(summary,list);
    tools.insertAdjacentElement("afterend",toc);
  }

  const params=new URLSearchParams(location.search);
  const query=(params.get("q")||"").trim();
  if(query){
    const terms=query.split(/\s+/).filter(term=>term.length>0).slice(0,6);
    const pattern=new RegExp(terms.map(term=>term.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|"),"gi");
    const walker=document.createTreeWalker(essay,NodeFilter.SHOW_TEXT,{
      acceptNode(node){return node.nodeValue.trim()&&node.parentElement&&!node.parentElement.closest("mark,script,style")?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT;}
    });
    const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
    let first=null,marked=0;
    nodes.forEach(node=>{
      if(marked>=80)return;
      const value=node.nodeValue;pattern.lastIndex=0;
      if(!pattern.test(value))return;
      pattern.lastIndex=0;
      const fragment=document.createDocumentFragment();let cursor=0,match;
      while((match=pattern.exec(value))&&marked<80){
        if(match.index>cursor)fragment.appendChild(document.createTextNode(value.slice(cursor,match.index)));
        const mark=document.createElement("mark");mark.className="search-hit";mark.textContent=match[0];
        fragment.appendChild(mark);if(!first)first=mark;marked++;cursor=match.index+match[0].length;
        if(!match[0].length)pattern.lastIndex++;
      }
      if(cursor<value.length)fragment.appendChild(document.createTextNode(value.slice(cursor)));
      node.parentNode.replaceChild(fragment,node);
    });
    if(first)requestAnimationFrame(()=>{first.scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"center"});});
  }
});
