// Page-level motion. Every effect is decorative-only and collapses under prefers-reduced-motion.
window.ccsEffects=(()=>{
  const reduce=matchMedia('(prefers-reduced-motion: reduce)');
  let cleanups=[];
  const onDispose=f=>cleanups.push(f);
  const seen=(el,cb,opts={threshold:.25})=>{const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){cb(e.target);io.unobserve(e.target);}}),opts);[].concat(el).forEach(x=>x&&io.observe(x));onDispose(()=>io.disconnect());};

  // Hero field: a slow concurrent network. Packets travel along edges; the pointer lights nearby nodes.
  function field(){
    const hero=document.querySelector('.hero');if(!hero)return;
    const c=document.createElement('canvas');c.className='hero-field';c.setAttribute('aria-hidden','true');hero.querySelector('.hero-bg').append(c);
    const g=c.getContext('2d');let W=0,H=0,dpr=1,nodes=[],packets=[],raf=0,visible=true,mouse=null,t0=performance.now();
    const ACC=[46,232,223];
    function build(){const r=hero.getBoundingClientRect();dpr=Math.min(devicePixelRatio||1,2);W=r.width;H=Math.min(r.height,1100);c.width=W*dpr;c.height=H*dpr;c.style.height=H+'px';
      const cols=W<700?6:12,rows=W<700?7:7,sx=W/cols,sy=H/rows;nodes=[];
      for(let i=0;i<=cols;i++)for(let j=0;j<=rows;j++){const s=(i*7919+j*104729)%997/997;nodes.push({bx:i*sx+(s-.5)*sx*.7,by:j*sy+((s*13)%1-.5)*sy*.7,p:s*6.28,a:.25+s*.5});}
      nodes.forEach(n=>{n.nb=nodes.filter(m=>m!==n&&Math.hypot(m.bx-n.bx,m.by-n.by)<Math.max(sx,sy)*1.25);});}
    function pos(n,t){return [n.bx+Math.sin(t*.00023+n.p)*9,n.by+Math.cos(t*.00019+n.p*1.3)*9];}
    function frame(now){const t=now-t0;g.setTransform(dpr,0,0,dpr,0,0);g.clearRect(0,0,W,H);
      g.lineWidth=1;for(const n of nodes){const [x,y]=pos(n,t);for(const m of n.nb){if(m.bx<n.bx||(m.bx===n.bx&&m.by<n.by))continue;const [x2,y2]=pos(m,t);let a=.1;if(mouse){const d=Math.hypot((x+x2)/2-mouse[0],(y+y2)/2-mouse[1]);if(d<220)a+=.22*(1-d/220);}g.strokeStyle=`rgba(${ACC},${a})`;g.beginPath();g.moveTo(x,y);g.lineTo(x2,y2);g.stroke();}}
      for(const n of nodes){const [x,y]=pos(n,t);let a=n.a*.62,r=1.5;if(mouse){const d=Math.hypot(x-mouse[0],y-mouse[1]);if(d<200){a+=.6*(1-d/200);r+=1.4*(1-d/200);if(d<150){g.strokeStyle=`rgba(${ACC},${.25*(1-d/150)})`;g.beginPath();g.moveTo(x,y);g.lineTo(mouse[0],mouse[1]);g.stroke();}}}g.fillStyle=`rgba(${ACC},${a})`;g.beginPath();g.arc(x,y,r,0,7);g.fill();}
      if(packets.length<(W<700?5:11)&&Math.random()<.06){const n=nodes[Math.floor(Math.random()*nodes.length)];if(n.nb.length)packets.push({a:n,b:n.nb[Math.floor(Math.random()*n.nb.length)],k:0,hops:2+Math.floor(Math.random()*4)});}
      for(let i=packets.length-1;i>=0;i--){const p=packets[i];p.k+=.012;if(p.k>=1){p.hops--;if(p.hops<=0||!p.b.nb.length){packets.splice(i,1);continue;}const nx=p.b.nb[Math.floor(Math.random()*p.b.nb.length)];p.a=p.b;p.b=nx;p.k=0;}
        const [x1,y1]=pos(p.a,t),[x2,y2]=pos(p.b,t),x=x1+(x2-x1)*p.k,y=y1+(y2-y1)*p.k,tx=x1+(x2-x1)*Math.max(0,p.k-.25),ty=y1+(y2-y1)*Math.max(0,p.k-.25);
        const gr=g.createLinearGradient(tx,ty,x,y);gr.addColorStop(0,`rgba(${ACC},0)`);gr.addColorStop(1,`rgba(${ACC},.9)`);g.strokeStyle=gr;g.lineWidth=1.6;g.beginPath();g.moveTo(tx,ty);g.lineTo(x,y);g.stroke();g.lineWidth=1;
        g.shadowColor=`rgb(${ACC})`;g.shadowBlur=10;g.fillStyle='#bff9f5';g.beginPath();g.arc(x,y,1.8,0,7);g.fill();g.shadowBlur=0;}
      if(visible&&!document.hidden&&!reduce.matches)raf=requestAnimationFrame(frame);else raf=0;}
    const start=()=>{if(!raf&&!reduce.matches)raf=requestAnimationFrame(frame);};
    build();if(reduce.matches)frame(performance.now());else start();
    const ro=new ResizeObserver(()=>{build();if(!raf)frame(performance.now());});ro.observe(hero);
    const io=new IntersectionObserver(([e])=>{visible=e.isIntersecting;if(visible)start();});io.observe(hero);
    const move=e=>{const r=c.getBoundingClientRect();mouse=e.pointerType==='mouse'?[e.clientX-r.left,e.clientY-r.top]:null;};const leave=()=>{mouse=null;};
    hero.addEventListener('pointermove',move,{passive:true});hero.addEventListener('pointerleave',leave);
    const vis=()=>{if(!document.hidden&&visible)start();};document.addEventListener('visibilitychange',vis);
    onDispose(()=>{cancelAnimationFrame(raf);ro.disconnect();io.disconnect();document.removeEventListener('visibilitychange',vis);});
  }

  // Decode effect for short monospace labels.
  const GLYPHS='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/<>_#';
  function scramble(el){const final=el.textContent;if(!/^[\x20-\x7e·→]+$/.test(final.trim())||reduce.matches)return;const len=final.length,start=performance.now(),dur=650+len*18;let raf;
    const step=now=>{const k=Math.min(1,(now-start)/dur),fixed=Math.floor(k*len);let out='';for(let i=0;i<len;i++){const ch=final[i];out+=i<fixed||ch===' '?ch:GLYPHS[(Math.random()*GLYPHS.length)|0];}el.textContent=out;if(k<1)raf=requestAnimationFrame(step);else el.textContent=final;};
    raf=requestAnimationFrame(step);onDispose(()=>{cancelAnimationFrame(raf);el.textContent=final;});}
  function decode(){const els=[...document.querySelectorAll('.stack .tag, .stack-title>span:nth-child(2), .stack-tabs button, .read-tag, .code-bar b, .tech-directory .mono, .arch-topline span:first-child, .pipeline strong')];seen(els,scramble,{threshold:.6});
    const eb=document.querySelector('.hero-eyebrow');if(eb){const txt=[...eb.childNodes].find(n=>n.nodeType===3);if(txt&&/^[\x20-\x7e]+$/.test(txt.textContent.trim())){const span=document.createElement('span');span.textContent=txt.textContent;txt.replaceWith(span);setTimeout(()=>scramble(span),200);}}}

  // Headings rise word by word when they enter view (Latin, Cyrillic, Arabic). CJK reveals as a line.
  function words(){document.querySelectorAll('main h2:not(.hero h2), .page-hero h1').forEach(h=>{if(h.dataset.split||h.closest('.stack-hero,.arch-inspector'))return;if([...h.childNodes].some(n=>n.nodeType===1&&n.tagName!=='BR'))return;const text=h.innerHTML;if(/[　-鿿가-힯]/.test(h.textContent))return;h.dataset.split='1';
      let i=0;h.innerHTML=text.split(/(<br\s*\/?>)/).map(part=>/^<br/.test(part)?part:part.split(/(\s+)/).map(w=>/^\s+$/.test(w)||!w?w:`<span class="w"><span style="--wi:${i++}">${w}</span></span>`).join('')).join('');});
    seen([...document.querySelectorAll('[data-split]')],h=>h.classList.add('words-in'),{threshold:.3});}

  // Tolang code types itself in, line by line.
  function code(){const pre=document.querySelector('.code pre');if(!pre)return;pre.querySelectorAll('.l').forEach((l,i)=>l.style.setProperty('--n',i));seen(pre,p=>p.classList.add('typing'),{threshold:.35});}

  // Stack: gentle tilt and a cursor spotlight.
  function tilt(){const s=document.querySelector('.stack');if(!s)return;const move=e=>{if(e.pointerType!=='mouse'||reduce.matches)return;const r=s.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;s.style.setProperty('--ry',(x*2.4).toFixed(2)+'deg');s.style.setProperty('--rx',(-y*2).toFixed(2)+'deg');s.style.setProperty('--sx',(e.clientX-r.left)+'px');s.style.setProperty('--sy',(e.clientY-r.top)+'px');s.classList.add('lit');};
    const leave=()=>{s.style.setProperty('--rx','0deg');s.style.setProperty('--ry','0deg');s.classList.remove('lit');};s.addEventListener('pointermove',move,{passive:true});s.addEventListener('pointerleave',leave);}

  // One guided run when the diagram first comes into view; any visitor input hands control back.
  function tour(){const root=document.querySelector('.stack-hero');if(!root||reduce.matches)return;let active=false,timer;const stop=()=>{active=false;clearTimeout(timer);mo.disconnect();};
    const mo=new MutationObserver(()=>{if(!active)return;const st=root.dataset.demoState;if(st==='waiting'){clearTimeout(timer);timer=setTimeout(()=>{if(active&&root.dataset.demoState==='waiting')root.querySelector('[data-demo-resume]')?.click();},1700);}if(st==='verified'||st==='denied')stop();});
    const user=e=>{if(e.isTrusted)stop();};root.addEventListener('pointerdown',user,true);root.addEventListener('keydown',user,true);
    seen(root,()=>{timer=setTimeout(()=>{if(root.dataset.demoState!=='idle'||document.hidden)return;active=true;mo.observe(root,{attributes:true,attributeFilter:['data-demo-state']});root.querySelector('[data-demo-run]')?.click();},900);},{threshold:.35});
    onDispose(()=>{stop();root.removeEventListener('pointerdown',user,true);root.removeEventListener('keydown',user,true);});}

  function init(){dispose();field();decode();words();code();tilt();tour();}
  function dispose(){cleanups.forEach(f=>{try{f();}catch{}});cleanups=[];}
  return {init,dispose};
})();
