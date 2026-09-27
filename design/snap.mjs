// Visual QA: node design/snap.mjs <outDir> <width>x<height> <path>... (paths relative to the local preview)
import {spawn} from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
const [outDir,size,...routes]=process.argv.slice(2);
const [W,H]=size.split('x').map(Number);
const chrome=process.env.CHROME||'C:/Program Files/Google/Chrome/Application/chrome.exe';
const base=process.env.BASE||'http://localhost:4317';
const port=9300+Math.floor(Math.random()*400);
const profile=path.resolve(process.env.TEMP||'.', 'ccs-snap-'+port);
const proc=spawn(chrome,['--headless=new','--disable-gpu','--hide-scrollbars','--no-first-run','--remote-debugging-port='+port,'--user-data-dir='+profile,`--window-size=${W},${H}`,'about:blank'],{stdio:'ignore'});
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
let ws,id=0;const pending=new Map();
const send=(method,params={})=>new Promise(res=>{const i=++id;pending.set(i,res);ws.send(JSON.stringify({id:i,method,params}));});
async function connect(){for(let t=0;t<40;t++){try{const list=await (await fetch(`http://127.0.0.1:${port}/json`)).json();const pg=list.find(x=>x.type==='page');if(pg){ws=new WebSocket(pg.webSocketDebuggerUrl);await new Promise(r=>ws.onopen=r);ws.onmessage=e=>{const m=JSON.parse(e.data);if(m.id&&pending.has(m.id)){pending.get(m.id)(m.result||m);pending.delete(m.id);}};return;}}catch{}await sleep(250);}throw new Error('no chrome');}
await connect();
fs.mkdirSync(outDir,{recursive:true});
const mobile=W<700;
await send('Emulation.setDeviceMetricsOverride',{width:W,height:H,deviceScaleFactor:1,mobile});
await send('Page.enable');if(process.env.RM)await send('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]});
for(const r of routes){
  await send('Page.navigate',{url:base+r});await sleep(2600);if(process.env.PRE){await send('Runtime.evaluate',{expression:process.env.PRE});await sleep(Number(process.env.WAIT||2000));}
  const {result}=await send('Runtime.evaluate',{expression:'document.documentElement.scrollHeight',returnByValue:true});
  const full=process.env.CLIPH?Number(process.env.CLIPH):Math.min(result.value,16000);
  if(!process.env.PRE)for(let y=0;y<full;y+=Math.round(H*0.6)){await send('Runtime.evaluate',{expression:`window.scrollTo({top:${y},behavior:'instant'})`});await sleep(120);}
  await send('Runtime.evaluate',{expression:"window.scrollTo({top:0,behavior:'instant'});document.querySelectorAll('.rv').forEach(e=>e.classList.add('in'))"});await sleep(900);
  const shot=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:true,clip:{x:0,y:0,width:W,height:full,scale:1}});
  const name=(r.replace(/^\//,'').replace(/[\/?=&.]+/g,'_')||'home')+`-${W}.png`;
  fs.writeFileSync(path.join(outDir,name),Buffer.from(shot.data,'base64'));
  const info=await send('Runtime.evaluate',{expression:process.env.EXPR||"JSON.stringify({overflow:document.documentElement.scrollWidth>innerWidth,h1:document.querySelectorAll('h1').length,err:window.__errs||0,st:window.__st,now:document.querySelector('.stack-hero')?.dataset.demoState})",returnByValue:true});
  console.log(name,full,info.result.value);
}
ws.close();proc.kill();
