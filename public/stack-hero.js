// Homepage stack diagram. The strata and terms follow the ALUX runtime; the motion is an
// illustration driven by the deterministic demo in execution-demo.js, not live telemetry.
window.createStackHero=function({s,h,t,site,rel,href,arrow,techName}){
  const layers=['tolang','ocap','tvm','blockgit','glvm'];
  const esc=v=>String(v).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'})[c]);
  const tag=k=>techName(k).toUpperCase();
  const head=(k,cap)=>`<div class="stratum-head"><span class="tag">${tag(k)}</span><span class="stratum-sub">${s.layers[k]}</span>${cap?`<span class="stratum-cap">${cap}</span>`:''}</div>`;
  const tiles=(k,gate)=>`<div class="tiles">${s.tiles[k].map((x,i)=>`<span class="tile"${gate===i?' data-gate':''}>${esc(x)}</span>`).join('')}</div>`;
  const view=`<div class="stack-hero" data-layer="tolang" data-demo-state="idle">
<div class="stack" >
 <div class="stack-bar"><div class="stack-title"><span class="stack-sq" aria-hidden="true"></span><span>${s.frame}</span><span class="stack-by">${s.builtBy}</span></div>
  <div class="stack-ctrl"><button type="button" class="ctl ctl-run" data-demo-run>${h.demo.run}</button><select class="ctl" data-demo-scenario aria-label="${h.demo.scenario}"><option value="allowed">${h.demo.allowed}</option><option value="denied">${h.demo.denied}</option></select><button type="button" class="ctl ctl-ghost" data-demo-reset>${h.demo.reset}</button></div></div>
 <div class="stack-body">
  <div class="stack-main">
   <section class="stratum" data-layer="tolang">${head('tolang','tolangc → .tox')}${tiles('tolang')}</section>
   <section class="stratum" data-layer="ocap">${head('ocap')}${tiles('ocap',1)}</section>
   <section class="stratum" data-layer="tvm">${head('tvm',s.tvmCaption)}<div class="canvas-wrap"><canvas class="lanes" aria-hidden="true"></canvas><button type="button" class="resume" data-demo-resume>${h.demo.resume}${arrow}</button></div></section>
   <section class="stratum" data-layer="blockgit">${head('blockgit',s.bgCaption)}<div class="canvas-wrap"><canvas class="dag" aria-hidden="true"></canvas></div></section>
  </div>
  <aside class="stratum stack-side" data-layer="glvm">
   <div class="stratum-head"><span class="tag">GLVM</span><span class="stratum-sub">${s.layers.glvm}</span><span class="status evolving">${t.evolving}</span></div>
   <p class="side-note">${(site.tech.glvm||{}).title||''}</p><ul class="substrates">${s.substrates.map((x,i)=>`<li><span>${x}</span><span class="vm" aria-hidden="true"><i style="--d:${i*0.4}s"></i><i style="--d:${i*0.4+0.7}s"></i><i style="--d:${i*0.4+1.3}s"></i></span><span class="vm-label">TVM</span></li>`).join('')}</ul>
   <div class="trace"><div class="trace-head"><span>${s.trace}</span><span class="replay">ReplayTrie</span></div><p class="trace-status" data-demo-status role="status"></p><ol class="trace-log"><li class="trace-idle">${s.traceIdle}</li></ol></div>
  </aside>
 </div>
</div>
<div class="stack-tabs" role="tablist" aria-label="${h.diagramLabel}">${layers.map(k=>`<button type="button" role="tab" id="stack-tab-${k}" data-stack-tab="${k}" aria-selected="${k==='tolang'}" tabindex="${k==='tolang'?0:-1}">${tag(k)}</button>`).join('')}</div>
<div class="stack-read"><p class="read-lead"><strong>${s.readTitle}</strong> ${s.readIntro}</p><div class="read-layer" id="execution-detail" aria-live="polite"></div></div>
</div>`;
  let demo,raf=0,visible=true,ro,io,mo,disposed=false,startFn=()=>{};
  function bind(){
    const root=document.querySelector('.stack-hero');if(!root)return;
    const detail=root.querySelector('#execution-detail'),log=root.querySelector('.trace-log');
    const tabs=[...root.querySelectorAll('[data-stack-tab]')];
    const reduce=matchMedia('(prefers-reduced-motion: reduce)');
    function select(k){root.dataset.layer=k;tabs.forEach(b=>{const on=b.dataset.stackTab===k;b.setAttribute('aria-selected',String(on));b.tabIndex=on?0:-1;});
      const m=site.tech[k]||{};detail.innerHTML=`<span class="read-tag">${tag(k)}</span><h3>${m.title||''}</h3><p>${m.body||''}</p>${rel.modules[k]?`<p class="read-agent"><span>${rel.label}</span>${rel.modules[k]}</p>`:''}<a class="text-link" href="${href('technology/'+k)}">${t.details}${arrow}</a>`;}
    tabs.forEach((b,i)=>{b.onclick=()=>{demo.inspect();select(b.dataset.stackTab);};b.onkeydown=e=>{let j=i;if(e.key==='ArrowRight')j=(i+1)%tabs.length;else if(e.key==='ArrowLeft')j=(i+tabs.length-1)%tabs.length;else if(e.key==='Home')j=0;else if(e.key==='End')j=tabs.length-1;else return;e.preventDefault();tabs[j].click();tabs[j].focus();};});
    root.querySelectorAll('.stratum').forEach(el=>el.addEventListener('click',e=>{if(e.target.closest('button,a,select'))return;demo.inspect();select(el.dataset.layer);}));
    select('tolang');
    demo=window.bindExecutionDemo(root,h.demo,i=>select(layers[i]));

    // Canvas scene
    const lanesC=root.querySelector('canvas.lanes'),dagC=root.querySelector('canvas.dag');
    const ctxL=lanesC.getContext('2d'),ctxD=dagC.getContext('2d');
    const size={};
    const fit=()=>{const dpr=Math.min(devicePixelRatio||1,2);for(const [c,k] of [[lanesC,'l'],[dagC,'d']]){const r=c.getBoundingClientRect();c.width=Math.max(1,Math.round(r.width*dpr));c.height=Math.max(1,Math.round(r.height*dpr));size[k]={w:r.width,h:r.height,dpr};}};
    fit();ro=new ResizeObserver(()=>{fit();if(!raf)frame(performance.now(),true);});ro.observe(lanesC);ro.observe(dagC);
    const css=getComputedStyle(root),ACC=css.getPropertyValue('--accent').trim()||'#2ee8df',AMB=css.getPropertyValue('--amber').trim()||'#e3b15c';
    const rgba=(hex,a)=>{const n=parseInt(hex.slice(1),16);return `rgba(${n>>16&255},${n>>8&255},${n&255},${a})`;};
    const LANES=4,procs=[],comms=[];
    let seed=7;const rnd=()=>{seed=(seed*16807)%2147483647;return (seed-1)/2147483646;};
    for(let l=0;l<LANES;l++)for(let j=0;j<3;j++)procs.push({lane:l,x:rnd(),v:0.035+rnd()*0.05,w:14+rnd()*26});
    let commT=0,task={x:-0.1,on:false,alpha:0},lastState='',spawnTx=false;
    const cols=[];let colT=0,offset=0,nextX=0;const SP=46;
    const addCol=hl=>{const n=1+Math.floor(rnd()*3),rows=[0,1,2].sort(()=>rnd()-0.5).slice(0,n).sort();const prev=cols[cols.length-1],prev2=cols[cols.length-2];
      const blocks=rows.map((r,i)=>({r,hl:hl&&i===0,links:prev?[prev.blocks[Math.floor(rnd()*prev.blocks.length)].r].concat(rnd()<0.45?[prev.blocks[Math.floor(rnd()*prev.blocks.length)].r]:[]):[],weak:prev2&&rnd()<0.3?prev2.blocks[Math.floor(rnd()*prev2.blocks.length)].r:null}));
      cols.push({x:nextX,blocks});nextX+=SP;if(cols.length>60)cols.shift();};
    for(let i=0;i<22;i++)addCol(false);
    const targetOffset=()=>Math.max(0,nextX-SP-(size.d.w-56));offset=targetOffset();
    function drawLanes(dt){const {w,h:H,dpr}=size.l;const g=ctxL;g.setTransform(dpr,0,0,dpr,0,0);g.clearRect(0,0,w,H);
      const pad=16,gap=(H-pad*2)/(LANES-1),y=l=>pad+l*gap;
      g.lineWidth=1;for(let l=0;l<LANES;l++){g.strokeStyle='rgba(150,190,200,0.12)';g.beginPath();g.moveTo(0,y(l)+.5);g.lineTo(w,y(l)+.5);g.stroke();}
      g.setLineDash([2,4]);g.strokeStyle='rgba(150,190,200,0.18)';const mid=w*0.5;g.beginPath();g.moveTo(mid+.5,4);g.lineTo(mid+.5,H-4);g.stroke();g.setLineDash([]);
      for(const p of procs){p.x=(p.x+p.v*dt)%1.12;const px=(p.x-0.06)*w;g.fillStyle=rgba(ACC,0.16);g.strokeStyle=rgba(ACC,0.42);g.beginPath();g.roundRect(px,y(p.lane)-4,p.w,8,2);g.fill();g.stroke();}
      commT-=dt;if(commT<=0){commT=0.35+rnd()*0.6;const l=Math.floor(rnd()*(LANES-1));const a=procs.filter(p=>p.lane===l);const p=a[Math.floor(rnd()*a.length)];comms.push({x:(p.x-0.06)*w+p.w/2,l,life:1});}
      for(let i=comms.length-1;i>=0;i--){const c=comms[i];c.life-=dt*1.3;if(c.life<=0){comms.splice(i,1);continue;}g.strokeStyle=rgba(ACC,0.75*c.life);g.lineWidth=1.2;g.beginPath();g.moveTo(c.x,y(c.l));g.lineTo(c.x,y(c.l+1));g.stroke();g.fillStyle=rgba(ACC,c.life);for(const yy of [y(c.l),y(c.l+1)]){g.beginPath();g.arc(c.x,yy,2.2,0,7);g.fill();}}
      // Demo task on lane 1
      const st=root.dataset.demoState,paused=root.dataset.demoPaused==='true';
      const target={authorized:0.5,waiting:0.5,resumed:1.04,verified:1.08}[st];
      if(target!==undefined){if(!task.on){task.on=true;task.x=-0.02;}task.alpha=Math.min(1,task.alpha+dt*3);if(!paused){const step=reduce.matches?1:dt*0.42;task.x=task.x<target?Math.min(target,task.x+step):task.x;}}
      else{task.alpha=Math.max(0,task.alpha-dt*3);if(task.alpha===0){task.on=false;task.x=-0.02;}}
      if(task.alpha>0){const tx=Math.min(task.x,1)*w,ty=y(1),wait=st==='waiting',col=wait?AMB:ACC;g.globalAlpha=task.alpha;
        g.shadowColor=col;g.shadowBlur=14;g.fillStyle=col;g.beginPath();g.roundRect(tx-12,ty-6,24,12,3);g.fill();g.shadowBlur=0;
        if(wait){const ph=(performance.now()/900)%1;g.strokeStyle=rgba(AMB,1-ph);g.lineWidth=1.2;g.beginPath();g.roundRect(tx-12-ph*10,ty-6-ph*8,24+ph*20,12+ph*16,4);g.stroke();}
        g.globalAlpha=1;}
    }
    function drawDag(dt){const {w,h:H,dpr}=size.d;const g=ctxD;g.setTransform(dpr,0,0,dpr,0,0);g.clearRect(0,0,w,H);
      colT-=dt;if(colT<=0){colT=reduce.matches?1e9:1.25;addCol(spawnTx);spawnTx=false;}
      offset+=(targetOffset()-offset)*Math.min(1,dt*3);
      const pad=18,gap=(H-pad*2)/2,Y=r=>pad+r*gap,X=c=>c.x-offset+28;
      const finalIdx=cols.length-4,fx=cols[finalIdx]?X(cols[finalIdx])+SP/2:0;
      g.fillStyle=rgba(ACC,0.035);g.fillRect(0,0,Math.max(0,fx),H);
      g.setLineDash([3,4]);g.strokeStyle=rgba(ACC,0.4);g.beginPath();g.moveTo(fx+.5,6);g.lineTo(fx+.5,H-6);g.stroke();g.setLineDash([]);
      g.font='500 9px "Geist Mono",monospace';g.fillStyle=rgba(ACC,0.7);g.fillText('FRINGE',fx+5,H-6);
      cols.forEach((c,ci)=>{const prev=cols[ci-1],prev2=cols[ci-2];for(const b of c.blocks){if(prev)for(const r of b.links){g.strokeStyle='rgba(150,190,200,0.28)';g.lineWidth=1;g.beginPath();g.moveTo(X(prev),Y(r));g.lineTo(X(c),Y(b.r));g.stroke();}
        if(prev2&&b.weak!==null){g.setLineDash([2,3]);g.strokeStyle='rgba(150,190,200,0.22)';g.beginPath();g.moveTo(X(prev2),Y(b.weak));g.quadraticCurveTo(X(prev),Y(b.weak)+(b.r-b.weak)*gap*0.5-10,X(c),Y(b.r));g.stroke();g.setLineDash([]);}}});
      cols.forEach((c,ci)=>{const fin=ci<finalIdx;for(const b of c.blocks){const x=X(c),y=Y(b.r);if(x<-20||x>w+20)continue;
        g.fillStyle=b.hl?ACC:fin?rgba(ACC,0.26):'#0d161d';g.strokeStyle=b.hl?ACC:rgba(ACC,fin?0.7:0.45);g.lineWidth=1;g.beginPath();g.roundRect(x-8,y-6,16,12,2);g.fill();g.stroke();
        if(b.hl){g.shadowColor=ACC;g.shadowBlur=16;g.strokeStyle=ACC;g.beginPath();g.roundRect(x-12,y-10,24,20,3);g.stroke();g.shadowBlur=0;}}});
    }
    function syncTrace(){const st=root.dataset.demoState;if(st===lastState)return;const prev=lastState;lastState=st;
      if(st==='idle'){log.innerHTML=`<li class="trace-idle">${s.traceIdle}</li>`;return;}
      if(st==='defined'&&prev!=='idle'&&prev!=='')log.innerHTML='';
      log.querySelector('.trace-idle')?.remove();
      const li=document.createElement('li');li.dataset.state=st;li.textContent=h.demo.status[st];log.append(li);while(log.children.length>6)log.firstElementChild.remove();
      if(st==='verified')spawnTx=true;}
    let last=performance.now();
    function frame(now,once){const dt=Math.min(0.05,(now-last)/1000);last=now;const d=reduce.matches?0:dt;
      syncTrace();drawLanes(d);drawDag(reduce.matches&&spawnTx?1e9:d);if(reduce.matches&&spawnTx){addCol(true);spawnTx=false;drawDag(0);}
      if(!once&&!disposed&&visible&&!document.hidden)raf=requestAnimationFrame(frame);else raf=0;}
    const start=()=>{if(!raf&&!disposed){last=performance.now();raf=requestAnimationFrame(frame);}};
    startFn=start;io=new IntersectionObserver(([e])=>{visible=e.isIntersecting;if(visible)start();},{rootMargin:'80px'});io.observe(root);
    document.addEventListener('visibilitychange',onVis);start();
    // Keep the trace responsive when the loop is idle (off screen or reduced motion changes).
    mo=new MutationObserver(syncTrace);mo.observe(root,{attributes:true,attributeFilter:['data-demo-state']});
  }
  function onVis(){if(!document.hidden&&visible)startFn();}
  function dispose(){disposed=true;cancelAnimationFrame(raf);raf=0;ro?.disconnect();io?.disconnect();demo?.dispose();document.removeEventListener('visibilitychange',onVis);mo?.disconnect();}
  return {view,bind,dispose};
};
