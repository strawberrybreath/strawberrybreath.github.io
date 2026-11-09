/* Site-wide night reading mode. One preference shared by every page. */
document.addEventListener("DOMContentLoaded",()=>{
  const nav=document.querySelector(".site-header .site-nav");
  if(!nav)return;
  const key="strawberrybreath-site-night";
  const button=document.createElement("button");
  button.type="button";
  button.className="site-theme-toggle";
  button.setAttribute("aria-label","切换全站夜间模式");
  const apply=enabled=>{
    document.documentElement.classList.toggle("site-night",enabled);
    button.textContent=enabled?"日间模式":"夜间模式";
    button.setAttribute("aria-pressed",String(enabled));
    try{localStorage.setItem(key,enabled?"1":"0")}catch(error){}
  };
  let enabled=false;
  try{enabled=localStorage.getItem(key)==="1"}catch(error){}
  button.addEventListener("click",()=>apply(!document.documentElement.classList.contains("site-night")));
  nav.appendChild(button);
  apply(enabled);
});