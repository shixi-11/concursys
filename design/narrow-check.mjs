import { chromium } from 'file:///C:/Users/ShixiLin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
import {writeFile} from 'node:fs/promises';
const b=await chromium.launch({channel:'msedge',headless:true});
const p=await b.newPage();const results=[];
for(const lang of ['en','zh']) for(const width of [320,360]) {
 await p.setViewportSize({width,height:800});await p.goto(`http://127.0.0.1:4317/?lang=${lang}`);
 const layout=await p.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth,overflow:[...document.querySelectorAll('body *')].filter(e=>{const r=e.getBoundingClientRect();return r.width>0&&(r.right>innerWidth+1||r.left< -1)}).slice(0,12).map(e=>e.className)}));
 await p.locator('#menu').click(); await p.locator('#navigation a').first().focus(); await p.keyboard.press('Escape'); const restored=await p.evaluate(()=>document.activeElement.id==='menu' && document.querySelector('#menu').getAttribute('aria-expanded')==='false'); if(!restored) throw new Error('Escape focus regression'); results.push({lang,...layout,escapeFocusRestored:restored});await p.screenshot({path:`output/narrow-${width}-${lang}.png`,fullPage:true});
}
await writeFile('output/narrow-verification.json',JSON.stringify(results,null,2));console.log(JSON.stringify(results));await b.close();
