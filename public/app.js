(() => {
  'use strict';
  const $ = (id) => document.getElementById(id);
  const languages = window.siteCopy;
  const url = new URL(location.href);
  let language = url.searchParams.get('lang') === 'zh' ? 'zh' : 'en';
  let selected = 'glvm';
  let step = 0;
  let playing = false;
  let timer;
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const escape = (s) => String(s).replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const displayCopy = (s) => language === 'zh' ? String(s).replace(/全局逻辑虚拟机|全球计算机|逻辑执行模型|执行模型|技术服务|字节码|虚拟机|分布式|系统级|系统|每一层/g,word=>`<span class="term">${word}</span>`) : s;
  const svg = (body, label) => `<svg viewBox="0 0 660 400" role="img" aria-label="${escape(label)}">${body}</svg>`;
  const text = (x,y,s,cls='') => `<text x="${x}" y="${y}" class="${cls}">${escape(s)}</text>`;
  const line = (d,extra='') => `<path class="line ${extra}" d="${d}"/>`;
  const rect = (x,y,w,h,cls='node') => `<rect class="${cls}" x="${x}" y="${y}" width="${w}" height="${h}" rx="3"/>`;
  const dot = (x,y,r=4,cls='accent') => `<circle class="${cls}" cx="${x}" cy="${y}" r="${r}"/>`;

  function drawGLVM(d) {
    let body = `<path d="M92 47H568L623 142H37Z" fill="#11292b" stroke="#73f5de" stroke-width="1.3"/>${text(330,89,'GLVM','big')}${text(330,116,d.shared,'small')}`;
    [118,330,542].forEach((x,i)=>{
      body += line(`M${x} 142V217`) + dot(x,142,3) + dot(x,217,3) + rect(x-72,217,144,131) + text(x,244,'TVM','big') + text(x,266,d.node,'small');
      [0,1,2,3,4,5].forEach((j)=>{body += dot(x-39+(j%3)*39,289+Math.floor(j/3)*25,5,(j+i)%3===0?'accent':'muted');});
    });
    return svg(body,d.shared);
  }
  function drawTVM(d) {
    let body=rect(32,34,148,56)+text(106,69,d.source,'big')+line('M180 62H249')+rect(249,34,170,56)+text(334,69,d.bytecode,'big')+line('M419 62H511V140')+rect(74,140,512,205)+text(330,174,'TVM','big');
    [175,330,485].forEach((x,i)=>{body+=rect(x-51,202,102,59)+text(x,226,d.process)+text(x,247,String.fromCharCode(65+i),'small')+line(`M${x} 261V293`)+dot(x,293,4);});
    body+=line('M175 293H485')+text(330,324,d.channel,'small');
    return svg(body,d.runtime);
  }
  function drawOCAP(d) {
    const capabilityLabel=language==='en'?text(324,198,'Capability')+text(324,219,'reference','small'):text(324,208,d.capability);
    const reachableLabel=language==='en'?text(525,176,'Reachable')+text(525,198,'object'):text(525,190,d.allowed);
    return svg(`<rect x="33" y="40" width="594" height="310" rx="3" fill="#0b151a" stroke="#315e5a" stroke-dasharray="6 5"/>${text(330,72,d.boundary,'small')}${rect(64,164,129,79)}${text(128,210,d.task,'big')}${line('M193 203H452')}${rect(247,178,154,50)}${capabilityLabel}${rect(452,148,145,110)}${reachableLabel}${dot(525,228,9)}${rect(256,280,136,44)}${text(324,307,d.unreachable,'small')}`,d.boundary);
  }
  function drawDurable(d) {
    const xs=[66,198,330,462,594];
    let body=line('M66 158H594');
    xs.forEach((x,i)=>{body+=`<circle cx="${x}" cy="158" r="${i===step?23:15}" fill="${i<=step?'#73f5de':'#152229'}" stroke="${i<=step?'#73f5de':'#527078'}"/>`+`<text x="${x}" y="163" style="fill:${i<=step?'#09221b':'#b6c4cb'}">${i+1}</text>`+text(x,209,d.stages[i]);});
    body+=rect(109,265,442,53)+text(330,298,d.stages[step],'big');
    if(step===0||step===3){body+=line('M149 92H302M350 92H509','signal')+dot(160,92,4)+dot(493,92,4);}
    return svg(body,d.stages[step]);
  }
  function drawBlockGit(d) {
    let body='';
    const nodes=[[65,200],[185,110],[185,285],[330,110],[330,285],[475,200],[594,200]];
    [[0,1],[0,2],[1,3],[2,4],[3,5],[4,5],[5,6]].forEach(([a,b])=>{body+=line(`M${nodes[a][0]} ${nodes[a][1]}L${nodes[b][0]} ${nodes[b][1]}`);});
    nodes.forEach(([x,y],i)=>{body+=rect(x-23,y-23,46,46)+text(x,y+5,`B${i}`);});
    body+=text(330,47,'BlockGit','big')+text(330,365,d.blockgitCaption||'Concurrent history → coordinated finality','small');
    return svg(body,'BlockGit');
  }
  function renderTech() {
    const c=languages[language], t=c.tech[selected];
    document.querySelectorAll('[data-tech]').forEach(b=>{const active=b.dataset.tech===selected;b.setAttribute('aria-selected',String(active));b.tabIndex=active?0:-1;});
    $('tech-panel').setAttribute('aria-labelledby',`tab-${selected}`);
    $('tech-name').textContent=t.name;$('tech-title').innerHTML=displayCopy(escape(t.title));$('tech-description').innerHTML=displayCopy(escape(t.body));$('tech-help').innerHTML=displayCopy(escape(t.help));
    const drawers={glvm:drawGLVM,tvm:drawTVM,ocap:drawOCAP,durable:drawDurable,blockgit:drawBlockGit};
    $('diagram').innerHTML=drawers[selected](c.diagram);
    $('diagram').classList.toggle('playing',playing && !reduceMotion.matches);
    $('diagram-code').textContent=`${selected.toUpperCase()} / ${String(Object.keys(c.tech).indexOf(selected)+1).padStart(2,'0')}`;
    $('demo-controls').hidden=selected!=='durable';$('demo-status').hidden=selected!=='durable';
    $('demo-play').textContent=playing?c.pause:step===4?c.replay:c.play;
    $('demo-next').disabled=step===4;
    $('demo-status').textContent=`${c.step} ${step+1} / 5 — ${c.diagram.steps[step]}`;
  }
  function stop(){clearTimeout(timer);playing=false;}
  function tick(){if(!playing)return;if(step<4){step++;renderTech();}if(step===4){stop();renderTech();}else timer=setTimeout(tick,1600);}
  function chooseTech(key){stop();selected=key;renderTech();}
  function renderLanguage(){
    const c=languages[language];
    document.documentElement.lang=language;
    document.querySelectorAll('[data-t]').forEach(el=>{const value=c[el.dataset.t];if(value!==undefined)el.innerHTML=displayCopy(value);});
    $('language').innerHTML=language==='en'?'EN <span>/ 中文</span>':'中文 <span>/ EN</span>';
    $('language').setAttribute('aria-label',language==='en'?'切换到中文':'Switch to English');
    $('hero-art').setAttribute('aria-label',c.artAlt);
    document.querySelector('.skip').textContent=c.skip;
    document.querySelector('meta[name=description]').content=c.meta;
    document.title=language==='en'?'ConcurSys — Deep engineering. Real execution.':'ConcurSys｜底层技术与系统工程服务';
    $('service-rows').innerHTML=c.services.map((s,i)=>`<article class="service-row" id="service-${s.id}"><span class="number mono">${String(i+1).padStart(2,'0')}</span><h3>${displayCopy(s.title)}</h3><p>${displayCopy(s.body)}</p><div class="service-scope"><span class="mono">${c.deliverables}</span><p>${displayCopy(s.scope)}</p></div></article>`).join('');
    $('process').innerHTML=c.process.map((p,i)=>`<article><span class="mono">0${i+1}</span><h3>${displayCopy(p[0])}</h3><p>${displayCopy(p[1])}</p></article>`).join('');
    const subject=language==='en'?'ConcurSys technical services':'ConcurSys 技术服务咨询';
    const body=language==='en'?'Project overview:\n\nTechnical challenge:\n\nExpected scope and timeline:\n':'项目简介：\n\n技术问题：\n\n预期合作范围与时间：\n';
    $('email-cta').href=`mailto:info@concursys.io?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    $('copy-status').textContent='';
    $('menu').setAttribute('aria-label',$('navigation').classList.contains('open')?c.menuClose:c.menuOpen);
    renderTech();
  }
  $('language').addEventListener('click',()=>{language=language==='en'?'zh':'en';const nextURL=new URL(location.href);nextURL.searchParams.set('lang',language);history.replaceState(null,'',nextURL);renderLanguage();});
  $('menu').addEventListener('click',()=>{const open=$('navigation').classList.toggle('open');$('menu').setAttribute('aria-expanded',String(open));$('menu').setAttribute('aria-label',languages[language][open?'menuClose':'menuOpen']);});
  const closeMenu=()=>{$('navigation').classList.remove('open');$('menu').setAttribute('aria-expanded','false');$('menu').setAttribute('aria-label',languages[language].menuOpen);};
  $('navigation').querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&$('navigation').classList.contains('open')){closeMenu();$('menu').focus();}});
  document.querySelectorAll('[data-tech]').forEach((button)=>{
    button.addEventListener('click',()=>chooseTech(button.dataset.tech));
    button.addEventListener('keydown',e=>{const tabs=[...document.querySelectorAll('[data-tech]')];let i=tabs.indexOf(button);if(e.key==='ArrowRight')i=(i+1)%tabs.length;else if(e.key==='ArrowLeft')i=(i+tabs.length-1)%tabs.length;else if(e.key==='Home')i=0;else if(e.key==='End')i=tabs.length-1;else return;e.preventDefault();chooseTech(tabs[i].dataset.tech);tabs[i].focus();});
  });
  $('demo-play').addEventListener('click',()=>{if(playing){stop();}else{if(step===4)step=0;playing=true;timer=setTimeout(tick,1600);}renderTech();});
  $('demo-next').addEventListener('click',()=>{stop();step=Math.min(4,step+1);renderTech();});
  $('demo-reset').addEventListener('click',()=>{stop();step=0;renderTech();});
  document.addEventListener('visibilitychange',()=>{if(document.hidden&&playing){stop();renderTech();}});
  $('copy-email').addEventListener('click',async()=>{try{await navigator.clipboard.writeText('info@concursys.io');$('copy-status').textContent=languages[language].copied;}catch{$('copy-status').textContent=languages[language].copyFailed;}});
  const art=$('hero-art');
  art.addEventListener('pointermove',e=>{if(reduceMotion.matches||e.pointerType!=='mouse')return;const r=art.getBoundingClientRect();art.style.setProperty('--rx',`${-(e.clientY-r.top-r.height/2)/r.height*5}deg`);art.style.setProperty('--ry',`${(e.clientX-r.left-r.width/2)/r.width*7}deg`);});
  art.addEventListener('pointerleave',()=>{art.style.setProperty('--rx','0deg');art.style.setProperty('--ry','0deg');});
  reduceMotion.addEventListener('change',()=>{art.style.setProperty('--rx','0deg');art.style.setProperty('--ry','0deg');if(playing){stop();renderTech();}});
  renderLanguage();
})();
