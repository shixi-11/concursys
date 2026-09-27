// A deterministic educational model. It does not submit work to a blockchain.
window.bindExecutionDemo=function(root,copy,onPhase){
 let state='idle',paused=false,timer=null;
 const run=root.querySelector('[data-demo-run]'),reset=root.querySelector('[data-demo-reset]'),scenario=root.querySelector('[data-demo-scenario]'),status=root.querySelector('[data-demo-status]');
 const phases={idle:0,defined:0,authorized:1,waiting:2,resumed:2,verified:3,denied:1};
 const terminal=()=>state==='verified'||state==='denied';
 const clear=()=>{clearTimeout(timer);timer=null;};
 function paint(){root.dataset.demoState=state;root.dataset.demoPaused=String(paused);status.textContent=copy.status[state];run.textContent=paused?copy.continue:state==='waiting'?copy.resume:terminal()?copy.replay:state==='idle'?copy.run:copy.pause;run.setAttribute('aria-label',run.textContent);reset.disabled=state==='idle';scenario.disabled=false;}
 function schedule(){clear();if(paused)return;if(state==='defined')timer=setTimeout(()=>advance(scenario.value==='denied'?'denied':'authorized'),1500);else if(state==='authorized')timer=setTimeout(()=>advance('waiting'),1500);else if(state==='resumed')timer=setTimeout(()=>advance('verified'),1700);paint();}
 function advance(next){clear();state=next;paused=false;onPhase(phases[state]);paint();if(state==='denied'){root.querySelector('#execution-detail').innerHTML='<h3>'+copy.deniedTitle+'</h3><p>'+copy.deniedBody+'</p>';}else if(state==='waiting'){root.querySelector('#execution-detail').innerHTML='<h3>'+copy.waitTitle+'</h3><p>'+copy.waitBody+'</p>';}else if(state==='verified'){root.querySelector('#execution-detail').innerHTML='<h3>'+copy.doneTitle+'</h3><p>'+copy.doneBody+'</p>';}schedule();}
 function restart(){clear();state='idle';paused=false;onPhase(0);paint();}
 run.onclick=()=>{if(paused){paused=false;schedule();paint();}else if(state==='idle'||terminal())advance('defined');else if(state==='waiting')advance('resumed');else{clear();paused=true;paint();}};
 const sceneResume=root.querySelector('[data-demo-resume]');if(sceneResume)sceneResume.onclick=()=>{if(state==='waiting')advance('resumed');};
 reset.onclick=restart;scenario.onchange=()=>advance(scenario.value==='denied'?'denied':'authorized');
 const hide=()=>{if(document.hidden&&timer){clear();paused=true;paint();}};
 document.addEventListener('visibilitychange',hide);
 paint();
 return {inspect(){clear();state='idle';paused=false;paint();},dispose(){clear();document.removeEventListener('visibilitychange',hide);}};
};
