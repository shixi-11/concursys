// Layout sweep: every route x language x width. Reports horizontal overflow, missing H1 and script errors.
import {spawn} from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
const chrome=process.env.CHROME||'C:/Program Files/Google/Chrome/Application/chrome.exe';
const base=process.env.BASE||'http://localhost:4317';
const langs=(process.env.LANGS||'en,zh,zh-TW,ja,ko,es,fr,de,ru,ar').split(',');
const widths=(process.env.WIDTHS||'390,1440').split(',').map(Number);
const allRoutes=['/','/services.html','/services/agent.html','/services/vm.html','/services/distributed.html','/technology.html',...['glvm','tolang','tvm','blockgit','ocap','durable','atomicity','replay','framework','evm','node','tooling','sharding','worldos'].map(k=>`/technology/${k}.html`),'/company.html','/team.html','/join.html','/contact.html'];
const routes=process.env.ROUTES?process.env.ROUTES.split(','):allRoutes;
const port=9700+Math.floor(Math.random()*200);
const profile=path.resolve(process.env.TEMP||'.','ccs-layout-'+port);
const proc=spawn(chrome,['--headless=new','--disable-gpu','--hide-scrollbars','--no-first-run','--remote-debugging-port='+port,'--user-data-dir='+profile,'about:blank'],{stdio:'ignore'});
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
let ws,id=0;const pending=new Map();const errors=[];
const send=(method,params={})=>new Promise(res=>{const i=++id;pending.set(i,res);ws.send(JSON.stringify({id:i,method,params}));});
for(let t=0;t<40&&!ws;t++){try{const pg=(await (await fetch(`http://127.0.0.1:${port}/json`)).json()).find(x=>x.type==='page');if(pg){ws=new WebSocket(pg.webSocketDebuggerUrl);await new Promise(r=>ws.onopen=r);}}catch{await sleep(250);}}
ws.onmessage=e=>{const m=JSON.parse(e.data);if(m.method==='Runtime.exceptionThrown')errors.push(m.params.exceptionDetails?.exception?.description||m.params.exceptionDetails?.text);if(m.id&&pending.has(m.id)){pending.get(m.id)(m.result||m);pending.delete(m.id);}};
await send('Runtime.enable');
const probe=`JSON.stringify((()=>{const W=document.documentElement.clientWidth;const bad=[...document.querySelectorAll('main *, header *, footer *')].filter(e=>{const r=e.getBoundingClientRect();if(!r.width)return false;if(e.closest('.marquee,.lang-list,.dropdown,[hidden],.stack-tabs,canvas'))return false;return r.right>W+1||r.left<-1;}).slice(0,3).map(e=>(e.className||e.tagName)+':'+(e.textContent||'').trim().slice(0,30));return {scroll:document.documentElement.scrollWidth>W+1,h1:document.querySelectorAll('h1').length,bad,lang:document.documentElement.lang};})())`;
const fails=[];let n=0;
for(const w of widths){await send('Emulation.setDeviceMetricsOverride',{width:w,height:900,deviceScaleFactor:1,mobile:w<700});
 for(const lang of langs)for(const r of routes){errors.length=0;await send('Page.navigate',{url:base+r+(lang==='en'?'':(r.includes('?')?'&':'?')+'lang='+lang)});await sleep(1100);
  const res=JSON.parse((await send('Runtime.evaluate',{expression:probe,returnByValue:true})).result.value);n++;
  if(res.scroll||res.h1!==1||res.bad.length||errors.length)fails.push({w,lang,r,...res,errors:[...errors]});}}
console.log(JSON.stringify({checked:n,fails},null,1));
fs.writeFileSync('output/redesign/layout-sweep.json',JSON.stringify({checked:n,fails},null,1));
ws.close();proc.kill();
