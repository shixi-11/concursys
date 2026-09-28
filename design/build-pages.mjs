import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import {createHash} from 'node:crypto';
const versionAssets=html=>html.replace(/(src|href)="(\/[^"]+\.(?:js|css|png))"/g,(_,attr,url)=>attr+'="'+url+'?v='+createHash('sha256').update(fs.readFileSync('public'+url)).digest('hex').slice(0,12)+'"');
const context={window:{}};vm.createContext(context);
const newLocales=['zh-TW','es','fr','de','ru'];
for(const file of ['content','locales/ko','locales/ja','locales/ar','brand-copy','page-copy','technology-copy','team-copy','join-copy','agent-copy','agent-relevance','tolang-copy','hero-execution-copy','stack-copy','company-copy',...newLocales.map(l=>'locales/'+l)])vm.runInContext(fs.readFileSync('public/'+file+'.js','utf8'),context);
const copy=context.window,plain=s=>String(s||'').replace(/<br\s*\/?\s*>/g,' ').replace(/<[^>]+>/g,'');
const attr=s=>plain(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');
const langs=['en','zh','zh-TW','ja','ko','es','fr','de','ru','ar'];
const localeCodes={en:'en',zh:'zh-Hans','zh-TW':'zh-Hant',ja:'ja',ko:'ko',es:'es',fr:'fr',de:'de',ru:'ru',ar:'ar'};
const techName=(k,l)=>({glvm:'GLVM',tvm:'TVM',ocap:'OCAP',blockgit:'BlockGit',tolang:'Tolang',replay:'ReplayTrie',framework:'Segments / Fringe',evm:'EVM / TSAC',node:'RPC / P2P',tooling:'LSP / Playground'})[k]||(k==='durable'?copy.siteCopy[l].durableTab:copy.technologyCopy[l].modules[k]?.name||k);
function metadata(route,l){const [group,key]=route.split('/'),c=copy.siteCopy[l],p=copy.pageCopy[l],t=copy.technologyCopy[l];let title,description;
if(group==='home')return {title:c.pageTitle,description:c.heroBody};
if(group==='services'){title=key?p.serviceDetails[key].eyebrow:c.navServices;description=key?p.serviceDetails[key].intro:p.servicesIntro;}
else if(group==='technology'){const mod=t.modules[key];title=key?techName(key,l):c.navTechnology;description=key?(mod?.body||c.tech?.[key]?.body||p.technologyIntro):p.technologyIntro;}
else if(group==='team'){title=t.team;description=copy.teamCopy[l].intro;}
else if(group==='join'){title=copy.joinCopy[l].nav;description=copy.joinCopy[l].intro;}
else if(group==='company'){title=c.navCompany;description=copy.companyCopy[l].heroIntro;}
else{title=c.talk;description=p.contactIntro;}
return {title:plain(title)+' | ConcurSys',description:plain(description)};}
const routes=['home','services','services/agent','services/vm','services/distributed','technology',...['glvm','tolang','tvm','blockgit','ocap','durable','atomicity','replay','framework','evm','node','tooling','sharding','worldos'].map(k=>'technology/'+k),'company','team','join','contact'];
const pathFor=(route,l)=>{const pre=l==='en'?'':'/'+l;return route==='home'?(pre||'/'):pre+'/'+route;};
const urlFor=(route,l)=>'https://concursys.io'+pathFor(route,l);
const fileFor=(route,l)=>'public/'+(l==='en'?'':l+'/')+(route==='home'?'index.html':route+'.html');
for(const l of langs)fs.rmSync('public/'+l,{recursive:true,force:true});
let count=0;
for(const l of langs)for(const route of routes){const meta=metadata(route,l),title=attr(meta.title),description=attr(meta.description),url=urlFor(route,l),c=copy.siteCopy[l],file=fileFor(route,l);
const nav=[['services',c.navServices],['technology',c.navTechnology],['company',c.navCompany],['team',copy.technologyCopy[l].team]].map(([r,t])=>`<a href="${pathFor(r,l)}">${attr(t)}</a>`).join(' · ');
fs.mkdirSync(path.dirname(file),{recursive:true});fs.writeFileSync(file,versionAssets(`<!doctype html>
<html lang="${localeCodes[l]}"${l==='ar'?' dir="rtl"':''}><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#070b0f"><title>${title}</title><meta name="description" content="${description}"><link rel="canonical" href="${url}">${langs.map(x=>`<link rel="alternate" hreflang="${localeCodes[x]}" href="${urlFor(route,x)}">`).join('')}<link rel="alternate" hreflang="x-default" href="${urlFor(route,'en')}"><meta property="og:type" content="website"><meta property="og:site_name" content="ConcurSys"><meta property="og:title" content="${title}"><meta property="og:description" content="${description}"><meta property="og:url" content="${url}"><meta property="og:image" content="https://concursys.io/assets/concursys-social-en-20260928.jpg?v=de23dceb336c"><meta property="og:image:type" content="image/jpeg"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="ConcurSys — Foundations for agents."><meta name="twitter:card" content="summary_large_image"><meta name="twitter:image" content="https://concursys.io/assets/concursys-social-en-20260928.jpg?v=de23dceb336c"><meta name="twitter:image:alt" content="ConcurSys — Foundations for agents."><link rel="icon" type="image/png" href="/assets/concursys-favicon.png"><link rel="apple-touch-icon" href="/assets/concursys-favicon.png"><link rel="preload" href="/assets/fonts/geist.woff2" as="font" type="font/woff2" crossorigin><link rel="stylesheet" href="/site.css"><script src="/content.js" defer></script>${['ko','ja','ar'].map(l=>`<script src="/locales/${l}.js" defer></script>`).join('')}<script src="/brand-copy.js" defer></script><script src="/page-copy.js" defer></script><script src="/technology-copy.js" defer></script><script src="/architecture.js" defer></script><script src="/team-copy.js" defer></script><script src="/join-copy.js" defer></script><script src="/agent-copy.js" defer></script><script src="/agent-relevance.js" defer></script><script src="/tolang-copy.js" defer></script><script src="/hero-execution-copy.js" defer></script><script src="/stack-copy.js" defer></script><script src="/company-copy.js" defer></script>${newLocales.map(l=>`<script src="/locales/${l}.js" defer></script>`).join('')}<script src="/stack-hero.js" defer></script><script src="/effects.js" defer></script><script src="/execution-demo.js" defer></script><script src="/app.js" defer></script></head><body data-page="${route}"><div id="site"></div><noscript><main><h1>${title}</h1><p>${description}</p><nav>${nav}</nav><a href="mailto:info@concursys.io">info@concursys.io</a></main></noscript></body></html>`));count++;}
console.log('Generated '+count+' pages');
fs.writeFileSync('public/sitemap.xml','<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n'+routes.flatMap(route=>langs.map(l=>`<url><loc>${urlFor(route,l)}</loc>${langs.map(x=>`<xhtml:link rel="alternate" hreflang="${localeCodes[x]}" href="${urlFor(route,x)}"/>`).join('')}</url>`)).join('\n')+'\n</urlset>\n');
