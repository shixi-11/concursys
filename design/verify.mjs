import { chromium } from 'file:///C:/Users/ShixiLin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
import assert from 'node:assert/strict';
import { writeFile } from 'node:fs/promises';

const browser=await chromium.launch({channel:'msedge',headless:true});
const context=await browser.newContext({viewport:{width:1536,height:1024},deviceScaleFactor:1,permissions:['clipboard-read','clipboard-write']});
const page=await context.newPage();
const errors=[];const failed=[];const evidence=[];
page.on('pageerror',e=>errors.push(e.message));
page.on('response',r=>{if(r.status()>=400)failed.push(`${r.status()} ${r.url()}`);});
try{
 for(const lang of ['en','zh']){
  await page.goto(`http://127.0.0.1:4317/?lang=${lang}`);
  await page.locator('#tech-title').waitFor();
  assert.equal(await page.locator('html').getAttribute('lang'),lang);
  assert.equal(await page.locator('.service-row').count(),3);
  for(const [name,width,height] of [['desktop',1536,1024],['tablet',820,1180],['mobile',390,844]]){
   await page.setViewportSize({width,height});
   const dims=await page.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth}));
   assert(dims.scroll<=dims.width,`${lang}/${name}: horizontal overflow`);
   await page.screenshot({path:`output/${name}-${lang}.png`,fullPage:true});
   evidence.push({lang,viewport:name,width,height,overflow:false});
  }
  await page.setViewportSize({width:1536,height:1024});
  for(const key of ['glvm','tvm','blockgit','ocap','durable']){
   await page.locator(`#tab-${key}`).click();
   assert.equal(await page.locator(`#tab-${key}`).getAttribute('aria-selected'),'true');
   assert.equal(await page.locator('[role=tab][aria-selected=true]').count(),1);
   assert((await page.locator('#tech-title').textContent()).length>3);
   await page.locator('#technology').screenshot({path:`output/technology-${key}-${lang}.png`});
  }
  await page.locator('#demo-next').click();
  assert.match(await page.locator('#demo-status').textContent(),/2 \/ 5/);
  await page.locator('#demo-reset').click();
  assert.match(await page.locator('#demo-status').textContent(),/1 \/ 5/);
  await page.locator('#demo-play').click();
  await page.waitForFunction(()=>document.querySelector('#demo-status').textContent.includes('2 / 5'));
  await page.locator('#demo-play').click();
  const paused=await page.locator('#demo-status').textContent();
  await page.waitForTimeout(1800);
  assert.equal(await page.locator('#demo-status').textContent(),paused);
  await page.locator('#demo-play').click();
  await page.waitForFunction(()=>document.querySelector('#demo-status').textContent.includes('5 / 5'));
  assert(await page.locator('#demo-next').isDisabled());
  await page.locator('#tab-glvm').click();
  await page.locator('#tab-glvm').press('ArrowRight');
  assert.equal(await page.locator('#tab-tvm').getAttribute('aria-selected'),'true');
  await page.locator('#tab-tvm').press('End');
  assert.equal(await page.locator('#tab-durable').getAttribute('aria-selected'),'true');
  await page.locator('#tab-glvm').click();
  const email=await page.locator('#email-cta').getAttribute('href');
  assert(email.startsWith('mailto:info@concursys.io?subject='));
  assert(email.includes('&body='));
  await page.locator('#copy-email').click();
  assert.equal(await page.evaluate(()=>navigator.clipboard.readText()),'info@concursys.io');
  assert((await page.locator('#copy-status').textContent()).length>0);
  await page.setViewportSize({width:390,height:844});
  await page.locator('#menu').click();
  assert.equal(await page.locator('#menu').getAttribute('aria-expanded'),'true');
  await page.locator('#navigation a[href="#services"]').click();
  assert.equal(await page.locator('#menu').getAttribute('aria-expanded'),'false');
  assert.equal(new URL(page.url()).hash,'#services');
  await page.locator('#language').selectOption(lang==='en'?'zh':'en');
  assert.equal(await page.locator('html').getAttribute('lang'),lang==='en'?'zh':'en');
  await page.reload();
  assert.equal(await page.locator('html').getAttribute('lang'),lang==='en'?'zh':'en');
 }
 await page.setViewportSize({width:1536,height:1024});
 await page.goto('http://127.0.0.1:4317/?lang=en');
 await page.locator('#hero-art').hover({position:{x:200,y:200}});
 assert.notEqual(await page.locator('.art-image').evaluate(el=>getComputedStyle(el).transform),'none');
 await page.emulateMedia({reducedMotion:'reduce'});
 assert.equal(await page.locator('.art-image').evaluate(el=>getComputedStyle(el).transform),'none');
 await page.emulateMedia({reducedMotion:'no-preference'});
 await page.mouse.move(0,0);
 await page.waitForTimeout(500);
 await page.screenshot({path:'output/desktop.png'});
 await page.locator('#services').screenshot({path:'output/services.png'});
 await page.locator('#technology').screenshot({path:'output/technology.png'});
 await page.locator('#company').screenshot({path:'output/company.png'});
 await page.locator('#contact').screenshot({path:'output/contact.png'});
 const localLinks=await page.locator('a[href^="#"]').evaluateAll(as=>as.map(a=>a.getAttribute('href')).filter(h=>h.length>1));
 for(const href of localLinks)assert.equal(await page.locator(href).count(),1,`Missing anchor ${href}`);
 assert.deepEqual(errors,[]);assert.deepEqual(failed,[]);
 await writeFile('output/verification.json',JSON.stringify({date:new Date().toISOString(),browser:'Microsoft Edge / Playwright, independent clean context',evidence,checks:['all 5 technology tabs in both languages','keyboard arrow/end navigation','durable sequence play/pause/reset/complete','language persistence in URL','mobile menu and service anchor','email address copy','mailto recipient and localized draft','pointer perspective and reduced motion','all local anchors','zero page errors and HTTP errors'],errors,failed},null,2));
 console.log(JSON.stringify({passed:true,viewports:evidence.length,errors,failed}));
}finally{await browser.close();}
