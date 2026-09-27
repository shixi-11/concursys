import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
function setup(){
 const tasks=new Map(),events=new Map();let id=0;
 const nodes=Object.fromEntries(['run','reset','scenario','status','resume'].map(k=>[k,{value:'allowed',setAttribute(){}}]));
 const root={dataset:{},querySelector(s){return s==='#execution-detail'?{}:nodes[s.match(/data-demo-(\w+)/)[1]];}};
 const sandbox={window:{},document:{hidden:false,addEventListener:(k,f)=>events.set(k,f),removeEventListener:k=>events.delete(k)},setTimeout:f=>{tasks.set(++id,f);return id;},clearTimeout:i=>tasks.delete(i)};
 vm.createContext(sandbox);vm.runInContext(fs.readFileSync('public/execution-demo.js','utf8'),sandbox);
 const phases=[],copy={status:{},run:'run',pause:'pause',continue:'continue',resume:'resume',replay:'replay'};
 const demo=sandbox.window.bindExecutionDemo(root,copy,i=>phases.push(i));
 const tick=()=>{const entry=tasks.entries().next().value;if(entry){tasks.delete(entry[0]);entry[1]();}};
 return {root,nodes,demo,tasks,events,phases,tick,sandbox};
}
test('authorized task waits for visitor input before it can reach verification',()=>{const s=setup();assert.equal(s.tasks.size,0);s.nodes.run.onclick();s.tick();s.tick();assert.equal(s.root.dataset.demoState,'waiting');assert.equal(s.tasks.size,0);s.nodes.run.onclick();s.tick();assert.equal(s.root.dataset.demoState,'verified');assert.equal(s.tasks.size,0);});
test('denied access never advances to execution or verification',()=>{const s=setup();s.nodes.scenario.value='denied';s.nodes.run.onclick();s.tick();assert.equal(s.root.dataset.demoState,'denied');assert.equal(s.tasks.size,0);assert.deepEqual(s.phases,[0,1]);});
test('pause, reset and disposal clear pending transitions',()=>{const s=setup();s.nodes.run.onclick();s.nodes.run.onclick();assert.equal(s.root.dataset.demoPaused,'true');assert.equal(s.tasks.size,0);s.nodes.run.onclick();assert.equal(s.tasks.size,1);s.nodes.reset.onclick();assert.equal(s.root.dataset.demoState,'idle');assert.equal(s.tasks.size,0);s.nodes.run.onclick();s.demo.dispose();assert.equal(s.tasks.size,0);assert.equal(s.events.size,0);});
test('hidden pages pause rather than silently complete the demonstration',()=>{const s=setup();s.nodes.run.onclick();s.sandbox.document.hidden=true;s.events.get('visibilitychange')();assert.equal(s.tasks.size,0);assert.equal(s.root.dataset.demoPaused,'true');assert.equal(s.root.dataset.demoState,'defined');});

test('scene resume only releases an actually waiting task',()=>{const s=setup();s.nodes.resume.onclick();assert.equal(s.root.dataset.demoState,'idle');s.nodes.run.onclick();s.tick();s.tick();s.nodes.resume.onclick();assert.equal(s.root.dataset.demoState,'resumed');s.tick();assert.equal(s.root.dataset.demoState,'verified');});

test('scenario selection immediately changes the scene and cancels the previous run',()=>{const s=setup();s.nodes.run.onclick();assert.equal(s.nodes.scenario.disabled,false);s.nodes.scenario.value='denied';s.nodes.scenario.onchange();assert.equal(s.root.dataset.demoState,'denied');assert.equal(s.tasks.size,0);s.nodes.scenario.value='allowed';s.nodes.scenario.onchange();assert.equal(s.root.dataset.demoState,'authorized');assert.equal(s.tasks.size,1);s.tick();assert.equal(s.root.dataset.demoState,'waiting');s.nodes.scenario.value='denied';s.nodes.scenario.onchange();assert.equal(s.root.dataset.demoState,'denied');s.nodes.resume.onclick();assert.equal(s.root.dataset.demoState,'denied');});
