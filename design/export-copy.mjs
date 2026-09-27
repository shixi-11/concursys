import fs from 'node:fs';
import vm from 'node:vm';
const sandbox={window:{}};vm.runInNewContext(fs.readFileSync('public/content.js','utf8'),sandbox);
for(const lang of ['ko','ja','ar'])vm.runInNewContext(fs.readFileSync(`public/locales/${lang}.js`,'utf8'),sandbox);
for(const file of ['brand-copy','page-copy','technology-copy','team-copy','join-copy','agent-copy','agent-relevance','tolang-copy','hero-execution-copy','stack-copy','locales/zh-TW','locales/es','locales/fr','locales/de','locales/ru'])vm.runInNewContext(fs.readFileSync(`public/${file}.js`,'utf8'),sandbox);
let out='';
for(const lang of ['en','zh','zh-TW','ja','ko','es','fr','de','ru','ar']){
 const c=sandbox.window.siteCopy[lang];const clean=s=>s.replaceAll('<br>',' ');
 out+=`## ${({en:'English',zh:'简体中文','zh-TW':'繁體中文',ja:'日本語',ko:'한국어',es:'Español',fr:'Français',de:'Deutsch',ru:'Русский',ar:'العربية'})[lang]}\n\n`;
 out+=`### ${clean(c.heroTitle)}\n\n${c.heroBody}\n\n`;
 out+=`导航：${c.navServices} / ${c.navTechnology} / ${c.navCompany} / ${sandbox.window.technologyCopy[lang].team}\n\n${c.discuss} / ${c.explore}\n\n`;
 out+=`### ${clean(c.servicesTitle)}\n\n${c.servicesIntro}\n\n`;
 for(const s of c.services)out+=`#### ${clean(s.title)}\n\n${s.body}\n\n${s.scope}\n\n`;
 out+=`### ${clean(c.techTitle)}\n\n${c.techIntro}\n\n`;
 for(const [key,t] of Object.entries(c.tech))out+=`#### ${key.toUpperCase()} · ${t.name}\n\n${t.title}\n\n${t.body}\n\n${c.helpTitle}：${t.help}\n\n`;
 out+=`### ${c.originalTitle}\n\n${c.originalBody}\n\nTolang：${c.tolangDetail}\n\nReplayTrie：${c.replayDetail}\n\n${c.originalNote}\n\n`;
 out+=`### ${c.companyTitle}\n\n${c.companyBody}\n\n`;
 for(const p of c.process)out+=`#### ${p[0]}\n\n${p[1]}\n\n`;
 out+=`### ${clean(c.contactTitle)}\n\n${c.contactBody}\n\n${c.contactCTA}\n\ninfo@concursys.io\n\n${c.footerLine}\n\n`;
 for(const [catalog,label] of [['pageCopy','Pages'],['technologyCopy','Technology map'],['teamCopy','Team'],['joinCopy','Join Us'],['agentCopy','Agent infrastructure'],['agentRelevance','Agent relevance'],['tolangCopy','Tolang'],['heroExecutionCopy','Execution model']]){out+=`### ${label}\n\n`;const walk=(value,key='')=>{if(typeof value==='string')out+=`**${key}**\n\n${clean(value)}\n\n`;else for(const [k,v] of Object.entries(value))walk(v,key?key+'.'+k:k);};walk(sandbox.window[catalog][lang]);}
}
fs.writeFileSync('20260927_ConcurSys网站文案.md',out.trimEnd()+'\n');
