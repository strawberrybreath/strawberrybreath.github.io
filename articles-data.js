/* Article catalogue: one source of truth for home cards, archive filters and search. */
const articles = [
  {
    "title": "当爱情开始承担整个社会的重量",
    "href": "article-10.html",
    "date": "2026-11-10",
    "dateLabel": "2026年11月10日",
    "description": "当亲情、友情、陪伴与归属感逐渐集中到伴侣身上，我们是不是正在让爱情替整个社会关系网络买单？",
    "image": "https://images.pexels.com/photos/17095799/pexels-photo-17095799.jpeg?auto=compress&cs=tinysrgb&w=1400",
    "imageAlt": "地铁通道中人物映在玻璃上的倒影，摄影：Yusuf Çelik / Pexels",
    "theme": "issue10",
    "category": "社会观察与亲密关系",
    "tags": ["社会关系", "弱关系", "社会资本", "亲密关系"],
    "related": ["article-09.html", "article-03.html", "article-06.html"]
  },
  {
    "title": "重男轻女：当偏见成为代际传递的枷锁",
    "href": "article-09.html",
    "date": "2026-11-10",
    "dateLabel": "2026年11月10日",
    "description": "从价值认同、家庭经济逻辑与代际创伤出发，思考重男轻女如何在家庭中延续，以及女性如何打破偏见的循环。",
    "image": "https://images.pexels.com/photos/36765475/pexels-photo-36765475.jpeg?auto=compress&cs=tinysrgb&w=1400",
    "imageAlt": "母亲与女儿在家中进行一场严肃的交谈，摄影：Vitaly Gariev / Pexels",
    "theme": "issue09",
    "category": "女性主义与社会观察",
    "tags": ["女性主义", "重男轻女", "家庭与代际", "自我价值"],
    "related": ["article-10.html", "article-05.html", "article-02.html"]
  },
  {
    "title": "语言的通货膨胀：当「爱你」沦为一句谢谢",
    "href": "article-08.html",
    "date": "2026-11-06",
    "dateLabel": "2026年11月6日",
    "description": "从日常表达的泛化出发，思考语言如何影响情绪识别、阅读、教育与社会文化生活。",
    "image": "https://images.pexels.com/photos/19561464/pexels-photo-19561464/free-photo-of-open-book-on-desk.jpeg?auto=compress&cs=tinysrgb&w=900",
    "imageAlt": "阳光下摊开的书本，摄影：Jessika Arraes / Pexels",
    "theme": "issue08",
    "category": "历史与文化",
    "tags": [
      "语言表达",
      "情绪识别",
      "阅读与文化"
    ],
    "related": [
      "article-07.html",
      "article-04.html",
      "article-02.html"
    ]
  },
  {
    "title": "自律即自由：当我终于不再为别人而行动",
    "href": "article-07.html",
    "date": "2026-11-06",
    "dateLabel": "2026年11月6日",
    "description": "从一句善意的夸奖、青春期的叛逆，到康德关于自律与自由的思想，重新思考我们为什么行动，以及如何拿回选择生活的主动权。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/a2/Immanuel_Kant_portrait_c1790.jpg",
    "imageAlt": "德国哲学家伊曼努尔·康德约1790年的肖像",
    "theme": "issue07",
    "category": "哲学与个人思考",
    "tags": [
      "康德",
      "自律与自由",
      "自我选择"
    ],
    "related": [
      "article-06.html",
      "article-08.html",
      "article-03.html"
    ]
  },
  {
    "title": "葡萄成熟时：关于等待、遗憾，以及人生的另一种答案",
    "href": "article-06.html",
    "date": "2026-11-05",
    "dateLabel": "2026年11月5日",
    "description": "从陈奕迅《葡萄成熟时》出发，聊聊等待、付出、遗憾、爱情的成熟，以及不必按照别人的时间表生活。",
    "image": "https://img.yec.tw/zp/images/8170DCC60B5F2FA0CD306522B5F289F536180D21",
    "imageAlt": "陈奕迅2005年专辑《U 87》封面",
    "theme": "issue06",
    "category": "音乐与生活",
    "tags": [
      "陈奕迅",
      "葡萄成熟时",
      "等待与遗憾"
    ],
    "related": [
      "article-03.html",
      "article-07.html",
      "article-08.html"
    ]
  },
  {
    "title": "大观园的梦醒了，女性的故事却留下了",
    "href": "article-05.html",
    "date": "2026-11-04",
    "dateLabel": "2026年11月4日",
    "description": "重新读《红楼梦》，从大观园里的女性情谊、才情与志向，看见她们被家族和时代限制的人生。",
    "image": "https://static.bjd.com.cn/dams-res/editing/image/202312/30/658f8ee1d5de9bf28166ae9f.jpeg",
    "imageAlt": "人民文学出版社《红楼梦》四十周年纪念版书籍封面",
    "theme": "issue05",
    "category": "文学与电影",
    "tags": [
      "红楼梦",
      "女性群像",
      "女性友谊"
    ],
    "related": [
      "article-01.html",
      "article-02.html",
      "article-04.html"
    ]
  },
  {
    "title": "谁把山河装进了烟盒？二手烟世界里的女性处境",
    "href": "article-04.html",
    "date": "2026-11-02",
    "dateLabel": "2026年11月2日",
    "description": "从烟盒上的山河符号、被浪漫化的吸烟镜头，到女性与未成年人承受的二手烟，讨论烟草包装、公共空间与控烟责任。",
    "image": "https://ncdalliance.org/sites/default/files/styles/original_small/public/news/screen_shot_2015-01-09_at_15.04.28.png.webp?itok=_u5zed-9",
    "imageAlt": "不同国家烟草包装上的图形健康警示对比",
    "theme": "issue04",
    "category": "女性主义与社会观察",
    "tags": [
      "二手烟",
      "女性处境",
      "公共卫生"
    ],
    "related": [
      "article-02.html",
      "article-05.html",
      "article-01.html"
    ]
  },
  {
    "title": "语文课本里的爱情观：重读《氓》",
    "href": "article-03.html",
    "date": "2026-10-26",
    "dateLabel": "2026年10月26日",
    "description": "重读高中语文课本里的《诗经·氓》，从两千多年前一位女子的爱情经历，重新理解亲密关系中的付出、失望与转身。",
    "image": "https://www.nlc.cn/upload/img/2023-11-27/4db96e11.jpg",
    "imageAlt": "国家图书馆展出的宋刻本毛诗注疏古籍",
    "theme": "issue03",
    "category": "文学与电影",
    "tags": [
      "诗经",
      "亲密关系",
      "女性经验"
    ],
    "related": [
      "article-06.html",
      "article-07.html",
      "article-01.html"
    ]
  },
  {
    "title": "女巫不曾消失：从欧洲猎巫到万圣节的女性符号",
    "href": "article-02.html",
    "date": "2026-10-19",
    "dateLabel": "2026年10月19日",
    "description": "从欧洲猎巫运动与《醋汤姆》出发，重新理解女巫符号背后的女性历史，以及当代社会对女性的规训。",
    "image": "https://monstrousregiment.co.uk/wp-content/uploads/1976/10/Vinegar_Tom_1976_Photo_4-1024x696.jpg",
    "imageAlt": "Monstrous Regiment 1976年《Vinegar Tom》原始演出黑白剧照",
    "theme": "issue02",
    "category": "历史与文化",
    "tags": [
      "欧洲猎巫",
      "女性历史",
      "社会规训"
    ],
    "related": [
      "article-04.html",
      "article-05.html",
      "article-01.html"
    ]
  },
  {
    "title": "她不是谁的“小姐”，她只是她自己",
    "href": "article-01.html",
    "date": "2026-10-12",
    "dateLabel": "2026年10月12日",
    "description": "从《Enola Holmes》出发，聊聊女性主体性、自我选择，以及社会期待如何影响一个人的人生。",
    "image": "assets/Enola%20Holmes1.JPG",
    "imageAlt": "电影《Enola Holmes》第一部官方海报",
    "theme": "issue01",
    "category": "文学与电影",
    "tags": [
      "Enola Holmes",
      "女性主体性",
      "自我选择"
    ],
    "related": [
      "article-02.html",
      "article-05.html",
      "article-04.html"
    ]
  }
];
const articleCategories = ["全部","文学与电影","女性主义与社会观察","历史与文化","哲学与个人思考","音乐与生活"];

function articleCard(article, index, interactiveTags = false) {
  const item = document.createElement("article");
  item.className = "article-list-item";
  item.dataset.articleTheme = article.theme || "";
  item.dataset.articleCategory = article.category || "";
  const image = article.image ? `
    <a class="article-list-image" href="${article.href}" tabindex="-1" aria-hidden="true">
      <img src="${article.image}" alt="${article.imageAlt || ""}" loading="lazy" decoding="async">
    </a>` : "";
  const date = article.date && article.dateLabel ? `<time class="article-list-date" datetime="${article.date}">${article.dateLabel}</time>` : "";
  const issueNumber = Number((article.href.match(/article-(\d+)\.html/) || [null, String(index + 1)])[1]);
  const issue = `<span class="article-issue" aria-label="第${issueNumber}期"><span class="article-issue-prefix">第</span><span class="article-issue-number">${issueNumber}</span><span class="article-issue-suffix">期</span></span>`;
  const tags = (article.tags || []).map(tag => interactiveTags
    ? `<button class="article-tag" type="button" data-filter-tag="${tag}" aria-label="按标签筛选：${tag}">${tag}</button>`
    : `<span class="article-tag">${tag}</span>`).join("");
  item.innerHTML = `${image}<div class="article-list-copy">
    <div class="article-list-meta">${issue}${date}<span class="article-category-label">${article.category || ""}</span></div>
    <h3><a href="${article.href}">${article.title}</a></h3><p>${article.description || ""}</p>
    <div class="article-card-tags" aria-label="文章标签">${tags}</div>
  </div>`;
  return item;
}

document.addEventListener("DOMContentLoaded", () => {
  const ordered = [...articles].sort((a,b) => b.date.localeCompare(a.date));
  const latest = document.querySelector("[data-latest-articles]");
  const archive = document.querySelector("[data-all-articles]");
  if (latest) { latest.replaceChildren(); ordered.slice(0,3).forEach((a,i)=>latest.appendChild(articleCard(a,i))); }
  if (!archive) return;
  archive.replaceChildren();
  ordered.forEach((a,i)=>archive.appendChild(articleCard(a,i,true)));

  const search=document.querySelector("[data-article-search]");
  const count=document.querySelector("[data-article-count]");
  const empty=document.querySelector("[data-article-empty]");
  const categoryHost=document.querySelector("[data-category-filters]");
  const activeLabel=document.querySelector("[data-active-filter-label]");
  const reset=document.querySelector("[data-reset-article-filters]");
  let activeCategory="全部", activeTag="", bodyIndex={}, bodyIndexPromise=null, version=0;

  if(categoryHost){
    categoryHost.replaceChildren();
    articleCategories.forEach(category=>{
      const button=document.createElement("button");
      button.type="button"; button.className="article-filter-chip";
      button.textContent=category; button.dataset.filterCategory=category;
      button.setAttribute("aria-pressed",String(category===activeCategory));
      categoryHost.appendChild(button);
    });
  }

  const loadBodyIndex=()=>{
    if(bodyIndexPromise)return bodyIndexPromise;
    bodyIndexPromise=Promise.all(ordered.map(async article=>{
      try{
        const response=await fetch(article.href,{credentials:"same-origin"});
        if(!response.ok)return;
        const html=await response.text();
        const page=new DOMParser().parseFromString(html,"text/html");
        const content=page.querySelector(".essay-content")||page.querySelector("main");
        bodyIndex[article.href]=(content?.textContent||"").replace(/\s+/g," ").toLocaleLowerCase();
      }catch(error){bodyIndex[article.href]="";}
    }));
    return bodyIndexPromise;
  };

  const updateResults=async()=>{
    const current=++version;
    const query=(search?.value||"").trim().toLocaleLowerCase();
    const terms=query.split(/\s+/).filter(Boolean);
    if(terms.length&&!Object.keys(bodyIndex).length){
      if(count)count.textContent="正在检索正文…";
      await loadBodyIndex();
      if(current!==version)return;
    }
    let visible=0;
    archive.querySelectorAll(".article-list-item").forEach((item,index)=>{
      const article=ordered[index];
      const text=[article.title,article.description,article.dateLabel,article.category,...(article.tags||[]),bodyIndex[article.href]||""].join(" ").toLocaleLowerCase();
      const match=terms.every(term=>text.includes(term))&&
        (activeCategory==="全部"||article.category===activeCategory)&&
        (!activeTag||(article.tags||[]).includes(activeTag));
      item.hidden=!match; if(match)visible++;
      let jump=item.querySelector(".article-search-open");
      if(terms.length&&match){
        if(!jump){jump=document.createElement("a");jump.className="article-search-open";item.querySelector(".article-list-copy")?.appendChild(jump);}
        jump.href=article.href+"?q="+encodeURIComponent(query)+"#bodycopy";
        jump.textContent="查看正文匹配位置 →";
        jump.hidden=false;
      }else if(jump){jump.hidden=true;}
    });
    if(count)count.textContent=String(visible);
    if(empty)empty.hidden=visible!==0;
    if(activeLabel){
      const selected=[];
      if(activeCategory!=="全部")selected.push(activeCategory);
      if(activeTag)selected.push("#"+activeTag);
      activeLabel.textContent=selected.length?"当前筛选："+selected.join(" · "):"按分类浏览，也可以搜索标题、标签和正文";
    }
    categoryHost?.querySelectorAll("[data-filter-category]").forEach(button=>button.setAttribute("aria-pressed",String(button.dataset.filterCategory===activeCategory)));
  };
  search?.addEventListener("input",updateResults);
  categoryHost?.addEventListener("click",event=>{
    const button=event.target.closest("[data-filter-category]"); if(!button)return;
    activeCategory=button.dataset.filterCategory; activeTag=""; updateResults();
  });
  archive.addEventListener("click",event=>{
    const button=event.target.closest("[data-filter-tag]"); if(!button)return;
    activeTag=button.dataset.filterTag; activeCategory="全部"; if(search)search.value="";
    updateResults();
    document.querySelector(".article-search")?.scrollIntoView({behavior:"smooth",block:"nearest"});
  });
  reset?.addEventListener("click",()=>{
    if(search)search.value=""; activeCategory="全部"; activeTag=""; updateResults();
  });
  updateResults();
});
