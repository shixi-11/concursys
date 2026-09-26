import { chromium } from 'file:///C:/Users/ShixiLin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
const b=await chromium.launch({channel:'msedge',headless:true}); const p=await b.newPage({deviceScaleFactor:1});
for(const lang of ['en','zh']){
 await p.setViewportSize({width:390,height:844}); await p.goto(`http://127.0.0.1:4317/?lang=${lang}`); await p.screenshot({path:`output/mobile-hero-${lang}.png`});
 await p.locator('#technology').screenshot({path:`output/mobile-tech-${lang}.png`});
 await p.locator('#services').screenshot({path:`output/mobile-services-${lang}.png`});
 await p.setViewportSize({width:1536,height:1024}); await p.goto(`http://127.0.0.1:4317/?lang=${lang}`); await p.screenshot({path:`output/hero-${lang}.png`});
 await p.locator('#technology').screenshot({path:`output/technology-${lang}.png`});
}
await p.setViewportSize({width:820,height:1180});await p.goto('http://127.0.0.1:4317/?lang=zh');await p.screenshot({path:'output/tablet-hero-zh.png'});await b.close();
