import { chromium } from 'file:///C:/Users/ShixiLin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
import {readFile,writeFile} from 'node:fs/promises';
import vm from 'node:vm';import assert from 'node:assert/strict';
const ctx=vm.createContext({window:{}});for(const f of ['public/content.js',...['ko','ja','ar'].map(l=>`public/locales/${l}.js`)])vm.runInContext(await readFile(f,'utf8'),ctx);
const langs=['en','zh','ko','ja','ar'];function shape(o,p=''){return Object.entries(o).flatMap(([k,v])=>v&&typeof v==='object'?shape(v,p+k+'.'):[p+k]);}
const keys=shape(ctx.window.siteCopy.en).sort();for(const l of langs)assert.deepEqual(shape(ctx.window.siteCopy[l]).sort(),keys,l+' missing translations');
const b=await chromium.launch({channel:'msedge',headless:true});const p=await b.newPage();const errors=[],evidence=[],overflow=[];
p.on('pageerror',e=>errors.push(e.message));p.on('response',r=>{if(r.status()>=400)errors.push(r.status()+' '+r.url());});
for(const lang of langs){
 for(const width of [320,390,820,1536]){
  await p.setViewportSize({width,height:width===1536?1024:844});await p.goto(`http://127.0.0.1:4317/?lang=${lang}`);
  assert.equal(await p.locator('html').getAttribute('lang'),lang);assert.equal(await p.locator('html').getAttribute('dir'),lang==='ar'?'rtl':'ltr');
  assert.equal(await p.locator('#language').inputValue(),lang);
  const dims=await p.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth}));if(dims.scroll>width)overflow.push({lang,...dims});
  await p.screenshot({path:`output/i18n-${lang}-${width}.png`});
  for(const tab of ['glvm','tvm','blockgit','ocap','durable']){await p.locator('#tab-'+tab).click();const d=await p.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth}));if(d.scroll>width)overflow.push({lang,tab,...d});}
  if(width===390||width===1536)await p.locator('#technology').screenshot({path:`output/i18n-tech-${lang}-${width}.png`});
  evidence.push({lang,width});
 }
 await p.locator('#language').selectOption(lang);await p.reload();assert.equal(await p.locator('html').getAttribute('lang'),lang);
 const mail=await p.locator('#email-cta').getAttribute('href');assert.equal(new URL(mail).searchParams.get('body'),ctx.window.siteCopy[lang].emailBody);
 await p.locator('#tab-glvm').focus();await p.keyboard.press(lang==='ar'?'ArrowLeft':'ArrowRight');assert.equal(await p.locator('#tab-tvm').getAttribute('aria-selected'),'true');
}
await p.goto('http://127.0.0.1:4317/?lang=invalid');assert.equal(await p.locator('html').getAttribute('lang'),'en');
await writeFile('output/i18n-verification.json',JSON.stringify({evidence,errors,overflow,keysPerLocale:keys.length},null,2));await b.close();console.log(JSON.stringify({viewports:evidence.length,errors,overflow,keysPerLocale:keys.length}));assert.equal(errors.length,0);assert.equal(overflow.length,0);
