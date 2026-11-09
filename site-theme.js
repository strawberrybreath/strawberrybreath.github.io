/* Site-wide night reading mode. One preference shared by every page. */
document.addEventListener("DOMContentLoaded",()=>{
  const nav=document.querySelector(".site-header .site-nav");
  if(!nav||nav.querySelector(".site-theme-toggle"))return;
  const key="strawberrybreath-site-night";
  const button=document.createElement("button");
  button.type="button";
  button.className="site-theme-toggle";
  const iconOn='<svg class="bulb-on-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path class="bulb-outline" d="M9 18h6M10 21h4M8.2 14.7a7 7 0 1 1 7.6 0c-.9.6-1.3 1.4-1.5 2.3h-4.6c-.2-.9-.6-1.7-1.5-2.3Z"/><path class="bulb-rays" d="M12 1.5v2M3.8 4.8l1.4 1.4M1.5 12h2M20.5 12h2M18.8 6.2l1.4-1.4"/></svg>';
  const iconOff='<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M9 18h6M10 21h4M8.2 14.7a7 7 0 1 1 7.6 0c-.9.6-1.3 1.4-1.5 2.3h-4.6c-.2-.9-.6-1.7-1.5-2.3Z"/></svg>';
  const apply=enabled=>{
    document.documentElement.classList.toggle("site-night",enabled);
    button.innerHTML=enabled?iconOff:iconOn;
    button.setAttribute("aria-label",enabled?"开灯，切换到日间阅读":"关灯，切换到夜间阅读");
    button.title=enabled?"开灯｜切换到日间阅读":"关灯｜切换到夜间阅读";
    button.setAttribute("aria-pressed",String(enabled));
    try{localStorage.setItem(key,enabled?"1":"0")}catch(error){}
  };
  let enabled=false;
  try{enabled=localStorage.getItem(key)==="1"}catch(error){}
  button.addEventListener("click",()=>apply(!document.documentElement.classList.contains("site-night")));
  nav.appendChild(button);
  apply(enabled);
});