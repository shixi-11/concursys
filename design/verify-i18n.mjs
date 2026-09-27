import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const ctx={window:{}};vm.createContext(ctx);
for(const file of ['content','locales/ko','locales/ja','locales/ar','brand-copy','page-copy','technology-copy','team-copy','join-copy','agent-copy','agent-relevance','tolang-copy','hero-execution-copy','stack-copy','locales/zh-TW','locales/es','locales/fr','locales/de','locales/ru'])vm.runInContext(fs.readFileSync('public/'+file+'.js','utf8'),ctx);
const langs=['en','zh','zh-TW','ja','ko','es','fr','de','ru','ar'];
const shape=(obj,prefix='')=>Object.entries(obj).flatMap(([k,v])=>v&&typeof v==='object'?shape(v,prefix+k+'.'):[prefix+k]).sort();
const summary={};
for(const catalog of ['siteCopy','pageCopy','technologyCopy','teamCopy','joinCopy','agentCopy','agentRelevance','tolangCopy','heroExecutionCopy','stackCopy']){
 const reference=shape(ctx.window[catalog].en);summary[catalog]=reference.length;
 for(const lang of langs){const data=ctx.window[catalog][lang];assert.deepEqual(shape(data),reference,catalog+': '+lang);const walk=o=>Object.values(o).forEach(v=>typeof v==='object'?walk(v):assert.ok(typeof v==='string'&&v.trim().length,catalog+' '+lang+' empty field'));walk(data);}
}
const htmlFiles=fs.readdirSync('public',{recursive:true}).filter(f=>f.endsWith('.html'));
assert.equal(htmlFiles.length,24,'24 independent routes');
for(const file of htmlFiles){const html=fs.readFileSync('public/'+file,'utf8');for(const match of html.matchAll(/(?:src|href)="(\/[^"?#]+)(?:\?[^"]*)?"/g)){const path='public'+match[1];assert.ok(fs.existsSync(path),file+' missing '+path);}assert.equal((html.match(/hreflang=/g)||[]).length,11,file+' alternate languages');assert.ok(/app\.js\?v=[a-f0-9]{12}/.test(html),file+' versioned application');}
assert.equal((fs.readFileSync('public/sitemap.xml','utf8').match(/<url>/g)||[]).length,240);
for(const lang of langs){assert.equal(ctx.window.teamCopy[lang].frank.bio.length,2);assert.equal(ctx.window.teamCopy[lang].tomislav.bio.length,2);assert.ok(ctx.window.joinCopy[lang].email.includes('\n'),'email must contain actual line breaks');}
for(const n of ['siteCopy','pageCopy','technologyCopy','teamCopy','agentCopy','tolangCopy','stackCopy'])for(const lang of langs)assert.ok(!/rho-calculus|rho演算|过程演算|反射高阶/i.test(JSON.stringify(ctx.window[n][lang])),n+' '+lang+' banned term');
console.log(JSON.stringify({languages:langs.length,pages:htmlFiles.length,sitemapUrls:240,fieldsPerCatalog:summary}));
