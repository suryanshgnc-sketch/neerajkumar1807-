/* ==========================================================
   mdcccvii.js — MDCCCVII · AI study coach for the Planner (v4.0)
   Bring-your-own API key. The key lives ONLY in this browser's localStorage
   (never in the tracker state, so Cloud Sync / exports never carry it).
   The AI only *proposes* a plan; nothing changes until you press APPLY.
   ========================================================== */
(function(){
'use strict';
const CFG_KEY='nkMDCCCVII_cfg', SEEN_KEY='nkMDCCCVII_seen';
const store={get:k=>{try{return localStorage.getItem(k);}catch(e){return null;}},set:(k,v)=>{try{localStorage.setItem(k,v);}catch(e){}},del:k=>{try{localStorage.removeItem(k);}catch(e){}}};
const PROV={
  gemini:{label:'Google Gemini · free key',model:'gemini-3.5-flash',models:['gemini-3.5-flash','gemini-3-flash-preview','gemini-2.5-flash'],link:'https://aistudio.google.com/apikey'},
  groq:{label:'Groq · free tier',model:'llama-3.3-70b-versatile',models:['llama-3.3-70b-versatile'],url:'https://api.groq.com/openai/v1/chat/completions',link:'https://console.groq.com/keys'},
  openrouter:{label:'OpenRouter · free models',model:'meta-llama/llama-3.3-70b-instruct:free',models:['meta-llama/llama-3.3-70b-instruct:free'],url:'https://openrouter.ai/api/v1/chat/completions',link:'https://openrouter.ai/keys'},
  custom:{label:'Custom · any OpenAI-compatible API',model:'',models:[],url:'',link:''}
};
const loadCfg=()=>{try{return Object.assign({provider:'gemini',model:'',key:'',url:''},JSON.parse(store.get(CFG_KEY)||'{}'));}catch(e){return {provider:'gemini',model:'',key:'',url:''};}};
let cfg=loadCfg(), history=[], proposal=null, busy=false;
const $=id=>document.getElementById(id);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const rd=n=>Math.round(n*10)/10;

const SYS=`You are MDCCCVII, the AI study coach inside a JEE 2027 Physical Chemistry tracker's Planner.
You get the student's live data as JSON. Help with: clearing backlog, making/rebalancing a plan, choosing chapter order, pacing.
Units: "pts" = weighted questions (1 normal question ≈ 1 pt). The app spreads remaining questions across days itself, so you only choose: daily_target (pts/day), optional deadline (YYYY-MM-DD), optional chapter order (ids).
Reply with ONLY valid JSON, no markdown fences:
{"reply":"short, warm, practical advice (max ~120 words, plain text, Hinglish ok if the student writes Hinglish)","proposal":null OR {"dailyTarget":number|null,"deadline":"YYYY-MM-DD"|null,"chapterOrder":["id",...]|null,"why":"one line"}}
Only include a proposal when the student wants a plan/backlog fix/reorder. Use only chapter ids from the data. Be realistic: never propose a pace above ~1.6x the current one without saying it is a sprint. Do the arithmetic (remaining pts / days) before choosing numbers.`;

function snapshot(){
  const chapters=orderedChapters().map(ch=>{let tot=0,done=0;
    if(!isChapterSkipped(ch.id)) ch.sections.forEach(s=>{ if(isSkipped(ch.id,s.key)) return;
      const n=effCount(ch.id,s.key),m=effortFor(s.key),a=state.ticks[ch.id][s.key]||[];
      for(let i=0;i<n;i++){tot+=m;if(a[i])done+=m;} });
    return {id:ch.id,name:ch.name,pts_done:rd(done),pts_total:rd(tot),skipped:!!isChapterSkipped(ch.id)};});
  const bl=planBacklog(), by={}; bl.items.forEach(i=>by[i.chName]=rd((by[i.chName]||0)+i.pts));
  let plan=null; if(state.plan&&state.plan.days.length){const d=state.plan.days;plan={locked_on:state.plan.startDate,pts_per_day:rd(state.plan.dailyQuota),days:d.length,ends:d[d.length-1].date};}
  return {today:todayStr(),deadline:state.deadline||null,daily_target:state.dailyTarget||null,chapters_in_current_order:chapters,locked_plan:plan,backlog:{questions:bl.items.length,pts:rd(bl.pts),by_chapter:by}};
}

async function callAI(msgs,sys){
  const p=PROV[cfg.provider], model=cfg.model||p.model;
  if(!cfg.key) throw new Error('Add your API key in the CONNECT tab first.');
  const ctl=new AbortController(), t=setTimeout(()=>ctl.abort(),45000);
  try{
    let res,data,text;
    if(cfg.provider==='gemini'){
      res=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`,{method:'POST',signal:ctl.signal,
        headers:{'Content-Type':'application/json','x-goog-api-key':cfg.key},
        body:JSON.stringify({systemInstruction:{parts:[{text:sys}]},contents:msgs.map(m=>({role:m.role==='assistant'?'model':'user',parts:[{text:m.content}]})),generationConfig:{temperature:.4,responseMimeType:'application/json'}})});
    }else{
      const url=cfg.provider==='custom'?cfg.url:p.url; if(!url) throw new Error('Add your API endpoint URL in CONNECT.');
      res=await fetch(url,{method:'POST',signal:ctl.signal,headers:{'Content-Type':'application/json','Authorization':'Bearer '+cfg.key},
        body:JSON.stringify({model,temperature:.4,messages:[{role:'system',content:sys},...msgs]})});
    }
    data=await res.json().catch(()=>({}));
    if(!res.ok){
      const m=(data.error&&(data.error.message||data.error))||res.statusText;
      if(res.status===429) throw new Error('Rate limit reached on the free tier — wait a minute (or switch model/provider) and retry.');
      if(res.status===401||res.status===403) throw new Error('The provider rejected the key (check it, and that its restrictions allow this site). '+m);
      throw new Error('API error '+res.status+': '+m);
    }
    text=cfg.provider==='gemini'?((data.candidates&&data.candidates[0]&&data.candidates[0].content.parts||[]).map(x=>x.text||'').join('')):(data.choices&&data.choices[0]&&data.choices[0].message.content)||'';
    if(!text) throw new Error('Empty reply from the model.');
    return text;
  }catch(e){ if(e.name==='AbortError') throw new Error('Timed out — try again.'); if(e instanceof TypeError) throw new Error('Network/CORS error — this provider may block browser calls, or you are offline.'); throw e; }
  finally{clearTimeout(t);}
}
function parseReply(t){
  const s=t.replace(/^```(?:json)?/i,'').replace(/```$/,'').trim();
  try{return JSON.parse(s);}catch(e){const m=s.match(/\{[\s\S]*\}/);if(m){try{return JSON.parse(m[0]);}catch(_){}}return {reply:t,proposal:null};}
}

function validProposal(p){
  if(!p||typeof p!=='object') return null;
  const ids=CHAPTERS.map(c=>c.id), out={why:String(p.why||'')};
  const dt=Number(p.dailyTarget); out.dailyTarget=(dt>=0.5&&dt<=300)?rd(dt):null;
  out.deadline=(/^\d{4}-\d{2}-\d{2}$/.test(p.deadline||'')&&p.deadline>todayStr())?p.deadline:null;
  out.chapterOrder=Array.isArray(p.chapterOrder)?[...new Set(p.chapterOrder.filter(i=>ids.includes(i)))]:null;
  if(out.chapterOrder&&!out.chapterOrder.length) out.chapterOrder=null;
  return (out.dailyTarget||out.deadline||out.chapterOrder)?out:null;
}
function applyProposal(){
  const p=proposal; if(!p) return;
  try{
    if(p.chapterOrder){const rest=state.chapterOrder.filter(i=>!p.chapterOrder.includes(i));state.chapterOrder=[...p.chapterOrder,...rest];}
    if(p.deadline) state.deadline=p.deadline;
    if(p.dailyTarget) state.dailyTarget=p.dailyTarget; else if(p.deadline) state.dailyTarget=null;
    saveState(); lockPlan();
    if(typeof renderDailyPace==='function') renderDailyPace();
    if(typeof renderReorderPanel==='function') renderReorderPanel();
    if(typeof renderPlanner==='function') renderPlanner();
    showToast('✦ MDCCCVII plan applied & locked','ach');
    proposal=null; closeAI();
  }catch(e){ addMsg('ai','Could not apply that: '+e.message); }
}

/* ---------- UI ---------- */
function build(){
  const o=document.createElement('div'); o.className='log-overlay'; o.id='aiOverlay';
  o.innerHTML=`<div class="log-modal ai-modal">
   <div class="log-modal-head"><div><h2>✦ MDCCCVII</h2><div class="sub">AI study coach · planner &amp; backlog help</div></div>
     <div class="log-modal-actions"><button class="btn sm ai-tab active" data-t="coach">COACH</button><button class="btn sm ai-tab" data-t="connect">CONNECT</button><button class="btn sm danger" id="aiClose">CLOSE</button></div></div>
   <div id="aiCoach">
     <div class="ai-chips"><button class="ai-chip" data-q="Clear my backlog as fast as is realistic.">🧹 Clear backlog</button><button class="ai-chip" data-q="Make me the best day-wise plan from today.">🗓 Make a plan</button><button class="ai-chip" data-q="I fell behind. Rebalance my plan.">⚖ Rebalance</button><button class="ai-chip" data-q="Which chapter order should I follow?">🔀 Chapter order</button></div>
     <div class="ai-log" id="aiLog"></div><div id="aiProposal"></div>
     <div class="ai-input"><textarea id="aiText" rows="2" placeholder="Ask MDCCCVII… e.g. “I have 40 days, exams in 3 weeks”"></textarea><button class="btn" id="aiSend">SEND</button></div>
   </div>
   <div id="aiConnect" style="display:none">
     <div class="ai-note">Pick a provider, paste <b>your own</b> API key. It is stored only in this browser and sent only to that provider. MDCCCVII sees a small summary of your progress (chapters, points, backlog) — nothing else.</div>
     <label class="ai-l">Provider</label><select id="aiProv"></select>
     <label class="ai-l">Model <small>(editable)</small></label><input id="aiModel" list="aiModels" autocomplete="off"><datalist id="aiModels"></datalist>
     <div id="aiUrlWrap" style="display:none"><label class="ai-l">Endpoint URL</label><input id="aiUrl" placeholder="https://…/v1/chat/completions"></div>
     <label class="ai-l">API key <a id="aiGet" href="#" target="_blank" rel="noopener">get a free key ↗</a></label><input id="aiKey" type="password" autocomplete="off" placeholder="paste key here">
     <div class="sync-actions"><button class="btn" id="aiSave">SAVE</button><button class="btn" id="aiTest">TEST</button><button class="btn danger" id="aiForget">REMOVE KEY</button></div>
     <div class="sync-msg" id="aiMsg"></div>
     <div class="ai-note">Tip: on Google AI Studio, restrict the key to your site's domain. Free-tier limits change — check your provider's dashboard.</div>
   </div></div>`;
  document.body.appendChild(o);
  const sel=$('aiProv'); sel.innerHTML=Object.keys(PROV).map(k=>`<option value="${k}">${PROV[k].label}</option>`).join('');
  o.addEventListener('click',e=>{if(e.target===o)closeAI();});
  $('aiClose').onclick=closeAI;
  o.querySelectorAll('.ai-tab').forEach(b=>b.onclick=()=>tab(b.dataset.t));
  o.querySelectorAll('.ai-chip').forEach(b=>b.onclick=()=>send(b.dataset.q));
  $('aiSend').onclick=()=>send($('aiText').value);
  $('aiText').addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();send($('aiText').value);}});
  sel.onchange=()=>{cfg.provider=sel.value;cfg.model='';fillConnect();};
  $('aiSave').onclick=()=>{readForm();store.set(CFG_KEY,JSON.stringify(cfg));msg('Saved ✓ — key stays in this browser only.');};
  $('aiForget').onclick=()=>{cfg.key='';store.set(CFG_KEY,JSON.stringify(cfg));$('aiKey').value='';msg('Key removed.');};
  $('aiTest').onclick=async()=>{readForm();msg('Testing…');try{const t=await callAI([{role:'user',content:'ping'}],'Reply with only this JSON: {"reply":"MDCCCVII online"}');msg('✓ Connected — '+esc(String(parseReply(t).reply||'ok')).slice(0,80));store.set(CFG_KEY,JSON.stringify(cfg));}catch(e){msg('✗ '+e.message,1);}};
}
function readForm(){cfg.provider=$('aiProv').value;cfg.model=$('aiModel').value.trim();cfg.key=$('aiKey').value.trim();cfg.url=$('aiUrl').value.trim();}
function fillConnect(){const p=PROV[cfg.provider];$('aiProv').value=cfg.provider;$('aiModel').value=cfg.model||p.model;$('aiModels').innerHTML=p.models.map(m=>`<option value="${m}">`).join('');$('aiKey').value=cfg.key;$('aiUrl').value=cfg.url;$('aiUrlWrap').style.display=cfg.provider==='custom'?'block':'none';const g=$('aiGet');g.style.display=p.link?'inline':'none';g.href=p.link||'#';}
function msg(t,bad){const m=$('aiMsg');m.textContent=t;m.style.color=bad?'var(--red)':'';}
function tab(t){$('aiCoach').style.display=t==='coach'?'block':'none';$('aiConnect').style.display=t==='connect'?'block':'none';$('aiOverlay').querySelectorAll('.ai-tab').forEach(b=>b.classList.toggle('active',b.dataset.t===t));if(t==='connect')fillConnect();}
function addMsg(who,text){const l=$('aiLog');const d=document.createElement('div');d.className='ai-msg '+who;d.innerHTML=esc(text).replace(/\*\*(.+?)\*\*/g,'<b>$1</b>').replace(/\n/g,'<br>');l.appendChild(d);l.scrollTop=l.scrollHeight;return d;}
function showProposal(){
  const el=$('aiProposal'); if(!proposal){el.innerHTML='';return;}
  const nm=id=>(CHAPTERS.find(c=>c.id===id)||{}).name||id, p=proposal, rows=[];
  if(p.dailyTarget) rows.push(`<div><span>Pace</span><b>${p.dailyTarget} pts/day</b></div>`);
  if(p.deadline) rows.push(`<div><span>Deadline</span><b>${p.deadline}</b></div>`);
  if(p.chapterOrder) rows.push(`<div><span>Order</span><b>${p.chapterOrder.map(nm).map(esc).join(' → ')}</b></div>`);
  el.innerHTML=`<div class="ai-prop"><div class="ai-prop-t">✦ PROPOSED PLAN</div>${rows.join('')}${p.why?`<small>${esc(p.why)}</small>`:''}<div class="sync-actions"><button class="btn" id="aiApply">APPLY &amp; LOCK PLAN</button><button class="btn" id="aiDismiss">DISMISS</button></div></div>`;
  $('aiApply').onclick=applyProposal; $('aiDismiss').onclick=()=>{proposal=null;showProposal();};
}
async function send(text){
  text=(text||'').trim(); if(!text||busy) return;
  if(!cfg.key){tab('connect');msg('Connect an API key first — takes 1 minute.',1);return;}
  busy=true; $('aiText').value=''; proposal=null; showProposal(); addMsg('me',text);
  const wait=addMsg('ai','MDCCCVII is thinking…'); wait.classList.add('wait');
  try{
    const msgs=[...history.slice(-6),{role:'user',content:'STUDY DATA:\n'+JSON.stringify(snapshot())+'\n\nSTUDENT: '+text}];
    const r=parseReply(await callAI(msgs,SYS));
    history.push({role:'user',content:text},{role:'assistant',content:String(r.reply||'')});
    wait.remove(); addMsg('ai',String(r.reply||'…'));
    proposal=validProposal(r.proposal); showProposal();
  }catch(e){ wait.remove(); addMsg('ai','⚠ '+e.message); }
  busy=false;
}
function openAI(){ store.set(SEEN_KEY,'1'); const b=$('aiBtn'); if(b) b.classList.remove('btn-new'); $('aiOverlay').classList.add('open');
  tab(cfg.key?'coach':'connect'); if($('aiLog').children.length===0) addMsg('ai',cfg.key?'Hi, I am MDCCCVII. I can read your pace, backlog and chapters — ask me to clear your backlog, build a plan or reorder chapters. I only propose; you press APPLY.':'Hi, I am MDCCCVII, your planner coach. Connect your own API key (free Gemini/Groq/OpenRouter work) and I can clear your backlog and build plans.'); }
function closeAI(){ $('aiOverlay').classList.remove('open'); }

function init(){
  build();
  const pb=$('plannerBtn'); if(pb) pb.insertAdjacentHTML('afterend',`<button class="btn sm ${store.get(SEEN_KEY)?'':'btn-new'}" id="aiBtn">✦ MDCCCVII</button>`);
  const pp=$('printPlannerBtn'); if(pp) pp.insertAdjacentHTML('beforebegin','<button class="btn sm ai-cta" id="aiPlannerBtn">✦ ASK MDCCCVII</button>');
  ['aiBtn','aiPlannerBtn'].forEach(i=>{const b=$(i); if(b) b.onclick=openAI;});
  window.openMDCCCVII=openAI;
}
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
})();
