/* ==========================================================
   mdcccvii.js — AI study assistant · v5
   Personal BYO-key AI with beginner-first connection setup.
   AI can inspect and, with one approval, modify every planner
   control: pace, deadline, chapter order, skips, section counts,
   and locked-plan lifecycle.
   ========================================================== */
(function(){
'use strict';

const CFG_KEY='nkMDCCCVII_cfg_v5', HISTORY_KEY='nkMDCCCVII_history_v5', SEEN_KEY='nkMDCCCVII_seen_v5';
const store={
  get:k=>{try{return localStorage.getItem(k);}catch(e){return null;}},
  set:(k,v)=>{try{localStorage.setItem(k,v);}catch(e){}},
  del:k=>{try{localStorage.removeItem(k);}catch(e){}}
};
const PROV={
  gemini:{
    label:'Google Gemini',
    model:'gemini-3.8-flash',
    models:['gemini-3.8-flash','gemini-3.7-flash','gemini-3.1-flash-lite','gemini-3.1-pro'],
    url:'https://generativelanguage.googleapis.com/v1beta/models/',
    link:'https://aistudio.google.com/apikey',
    help:'Usually the easiest starting point. Google AI Studio creates/manages Gemini API keys.'
  },
  groq:{
    label:'Groq · fast inference',
    model:'openai/gpt-oss-20b',
    models:['openai/gpt-oss-20b','openai/gpt-oss-120b'],
    url:'https://api.groq.com/openai/v1/chat/completions',
    link:'https://console.groq.com/keys',
    help:'Very fast OpenAI-compatible API. Free-tier availability and limits can change.'
  },
  openrouter:{
    label:'OpenRouter · many models',
    model:'openai/gpt-oss-20b',
    models:['openai/gpt-oss-20b','openai/gpt-oss-120b'],
    url:'https://openrouter.ai/api/v1/chat/completions',
    link:'https://openrouter.ai/keys',
    help:'One API key can route to many model providers. Pick any compatible model you have access to.'
  },
  openai:{
    label:'OpenAI',
    model:'gpt-5.4',
    models:['gpt-5.4','gpt-5.4-mini','gpt-5.4-pro'],
    url:'https://api.openai.com/v1/chat/completions',
    link:'https://platform.openai.com/api-keys',
    help:'Use your own OpenAI API key. API usage is billed/limited according to your OpenAI account.'
  },
  custom:{
    label:'Custom · OpenAI-compatible',
    model:'',
    models:[],
    url:'',
    link:'',
    help:'Use this for another service exposing an OpenAI-compatible /chat/completions endpoint.'
  }
};
const defaults={provider:'gemini',model:'',key:'',url:'',name:'MDCCCVII',autoApply:false};
function loadCfg(){
  try{return Object.assign({},defaults,JSON.parse(store.get(CFG_KEY)||'{}'));}catch(e){return Object.assign({},defaults);}
}
let cfg=loadCfg(), history=loadHistory(), proposal=null, busy=false;
function loadHistory(){ try{ const x=JSON.parse(store.get(HISTORY_KEY)||'[]'); return Array.isArray(x)?x.filter(m=>m&&['user','assistant'].includes(m.role)&&typeof m.content==='string').slice(-80):[]; }catch(e){ return []; }}
function persistHistory(){ store.set(HISTORY_KEY, JSON.stringify(history.slice(-80))); }
function clearHistory(){ history=[]; persistHistory(); const l=$('aiLog'); if(l) l.innerHTML=''; addMsg('ai',`Chat cleared. I’m ${name()} and I’m ready for the next task.`); }
function exportHistory(){ const blob=new Blob([JSON.stringify({assistant:name(),exported:new Date().toISOString(),messages:history},null,2)],{type:'application/json'}); const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='mdcccvii-chat.json'; a.click(); setTimeout(()=>URL.revokeObjectURL(a.href),500); }

const $=id=>document.getElementById(id);
const esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const rd=n=>Math.round(Number(n)*10)/10;
const name=()=>cfg.name||'MDCCCVII';

function snapshot(){
  const chapters=orderedChapters().map(ch=>{
    let tot=0,done=0;
    if(!isChapterSkipped(ch.id)) ch.sections.forEach(s=>{
      if(isSkipped(ch.id,s.key)) return;
      const n=effCount(ch.id,s.key),m=effortFor(s.key),a=state.ticks[ch.id][s.key]||[];
      for(let i=0;i<n;i++){tot+=m;if(a[i])done+=m;}
    });
    return {id:ch.id,name:ch.name,pts_done:rd(done),pts_total:rd(tot),
      skipped:!!isChapterSkipped(ch.id),
      sections:ch.sections.map(s=>({key:s.key,label:s.label,count:effCount(ch.id,s.key),skipped:isSkipped(ch.id,s.key)}))};
  });
  const bl=planBacklog(),by={};
  bl.items.forEach(i=>by[i.chName]=rd((by[i.chName]||0)+i.pts));
  let plan=null;
  if(state.plan&&state.plan.days.length){
    const d=state.plan.days;
    plan={locked_on:state.plan.startDate,pts_per_day:rd(state.plan.dailyQuota),
      days:d.length,ends:d[d.length-1].date};
  }
  return {
    assistant_name:name(),today:todayStr(),deadline:state.deadline||null,
    daily_target:state.dailyTarget||null,
    chapters_in_current_order:chapters,
    locked_plan:plan,
    planner_controls:{
      pace:'state.dailyTarget',
      deadline:'state.deadline',
      chapter_order:'state.chapterOrder',
      chapter_skip:'state.chapterSkipped',
      section_skip:'state.skipped',
      custom_question_count:'state.customCounts',
      locked_plan:'state.plan'
    },
    backlog:{questions:bl.items.length,pts:rd(bl.pts),by_chapter:by}
  };
}

/* ---------- Model transport ---------- */
async function callAI(msgs,sys){
  const p=PROV[cfg.provider], model=cfg.model||p.model;
  if(!cfg.key) throw new Error('No API key is connected yet. Open CONNECT & GUIDE.');
  const ctl=new AbortController(), t=setTimeout(()=>ctl.abort(),45000);
  try{
    let res,data,text;
    if(cfg.provider==='gemini'){
      const url='https://generativelanguage.googleapis.com/v1beta/models/'+encodeURIComponent(model)+':generateContent?key='+encodeURIComponent(cfg.key);
      const contents=msgs.map(m=>({role:m.role==='assistant'?'model':'user',parts:[{text:String(m.content)}]}));
      res=await fetch(url,{method:'POST',signal:ctl.signal,headers:{'Content-Type':'application/json'},
        body:JSON.stringify({systemInstruction:{parts:[{text:sys}]},contents,generationConfig:{temperature:.35,responseMimeType:'application/json'}})});
    }else{
      const url=cfg.provider==='custom'?cfg.url:p.url;
      if(!url) throw new Error('Add your OpenAI-compatible endpoint URL.');
      res=await fetch(url,{method:'POST',signal:ctl.signal,headers:{
        'Content-Type':'application/json','Authorization':'Bearer '+cfg.key,
        ...(cfg.provider==='openrouter'?{'HTTP-Referer':location.href,'X-Title':'NK Chemistry Planner'}:{})
      },body:JSON.stringify({model,temperature:.35,messages:[{role:'system',content:sys},...msgs]})});
    }
    data=await res.json().catch(()=>({}));
    if(!res.ok){
      const m=(data.error&&(data.error.message||data.error))||res.statusText||'Unknown provider error';
      if(res.status===429) throw new Error('PROVIDER_RATE_LIMIT: '+m);
      if(res.status===503) throw new Error('PROVIDER_TEMPORARY: '+m);
      if(res.status===400) throw new Error('REQUEST_REJECTED: '+m);
      if(res.status===401||res.status===403) throw new Error('AUTH_FAILED: '+m);
      throw new Error('API_ERROR_'+res.status+': '+m);
    }
    text=cfg.provider==='gemini'
      ?((data.candidates?.[0]?.content?.parts||[]).map(x=>x.text||'').join(''))
      :(data.choices?.[0]?.message?.content||'');
    if(!text) throw new Error('The model returned an empty response.');
    return text;
  }catch(e){
    if(e.name==='AbortError') throw new Error('Timed out after 45 seconds. Try again.');
    if(e instanceof TypeError) throw new Error('Browser/network error. The provider may block direct browser requests, or you may be offline.');
    throw e;
  }finally{clearTimeout(t);}
}

function parseReply(t){
  const s=String(t).replace(/^```(?:json)?/i,'').replace(/```$/,'').trim();
  try{return JSON.parse(s);}catch(e){
    const m=s.match(/\{[\s\S]*\}/); if(m){try{return JSON.parse(m[0]);}catch(_){}}
    return {reply:s,actions:[]};
  }
}

/* ---------- Planner action engine ---------- */
function validAction(a){
  if(!a||typeof a!=='object'||!a.type) return null;
  const ids=CHAPTERS.map(c=>c.id);
  const sectionExists=(cid,key)=>{
    const ch=CHAPTERS.find(c=>c.id===cid); return !!ch?.sections.some(s=>s.key===key);
  };
  switch(a.type){
    case 'set_daily_target':{
      const v=Number(a.value); return Number.isFinite(v)&&v>0&&v<=300?{type:a.type,value:rd(v)}:null;
    }
    case 'clear_daily_target': return {type:a.type};
    case 'set_deadline': return /^\d{4}-\d{2}-\d{2}$/.test(a.value||'')&&a.value>todayStr()?{type:a.type,value:a.value}:null;
    case 'clear_deadline': return {type:a.type};
    case 'reorder_chapters':{
      if(!Array.isArray(a.order)) return null;
      const order=[...new Set(a.order.filter(x=>ids.includes(x)))];
      return order.length?{type:a.type,order}:null;
    }
    case 'skip_chapter':
      return ids.includes(a.chapterId)?{type:a.type,chapterId:a.chapterId,skipped:!!a.skipped}:null;
    case 'skip_section':
      return ids.includes(a.chapterId)&&sectionExists(a.chapterId,a.sectionKey)?{type:a.type,chapterId:a.chapterId,sectionKey:a.sectionKey,skipped:!!a.skipped}:null;
    case 'set_section_count':{
      const v=Math.floor(Number(a.count));
      return ids.includes(a.chapterId)&&sectionExists(a.chapterId,a.sectionKey)&&v>=0&&v<=5000?{type:a.type,chapterId:a.chapterId,sectionKey:a.sectionKey,count:v}:null;
    }
    case 'clear_locked_plan': return {type:a.type};
    case 'lock_plan': return {type:a.type};
    case 'regenerate_plan': return {type:a.type};
    default:return null;
  }
}
function validActions(arr){
  return Array.isArray(arr)?arr.map(validAction).filter(Boolean).slice(0,30):[];
}
function actionLabel(a){
  const ch=CHAPTERS.find(c=>c.id===a.chapterId), sec=ch?.sections.find(s=>s.key===a.sectionKey);
  switch(a.type){
    case 'set_daily_target':return `Set daily pace → ${a.value} pts/day`;
    case 'clear_daily_target':return 'Clear daily pace';
    case 'set_deadline':return `Set deadline → ${a.value}`;
    case 'clear_deadline':return 'Clear deadline';
    case 'reorder_chapters':return `Reorder chapters → ${a.order.map(id=>(CHAPTERS.find(c=>c.id===id)||{}).name||id).join(' → ')}`;
    case 'skip_chapter':return `${a.skipped?'Skip':'Unskip'} chapter → ${ch?.name||a.chapterId}`;
    case 'skip_section':return `${a.skipped?'Skip':'Unskip'} section → ${ch?.name||a.chapterId} / ${sec?.label||a.sectionKey}`;
    case 'set_section_count':return `Set ${ch?.name||a.chapterId} / ${sec?.label||a.sectionKey} → ${a.count} questions`;
    case 'clear_locked_plan':return 'Clear the current locked schedule';
    case 'lock_plan':return 'Build + lock a new schedule from current settings';
    case 'regenerate_plan':return 'Regenerate the locked schedule from current progress';
    default:return a.type;
  }
}
function applyActions(){
  const acts=proposal?.actions||[];
  if(!acts.length)return;
  try{
    acts.forEach(a=>{
      if(a.type==='set_daily_target') state.dailyTarget=a.value;
      else if(a.type==='clear_daily_target') state.dailyTarget=null;
      else if(a.type==='set_deadline') state.deadline=a.value;
      else if(a.type==='clear_deadline') state.deadline=null;
      else if(a.type==='reorder_chapters'){
        const rest=state.chapterOrder.filter(i=>!a.order.includes(i));
        state.chapterOrder=[...a.order,...rest];
      }else if(a.type==='skip_chapter') state.chapterSkipped[a.chapterId]=a.skipped;
      else if(a.type==='skip_section'){
        state.skipped[a.chapterId]=state.skipped[a.chapterId]||{};
        state.skipped[a.chapterId][a.sectionKey]=a.skipped;
      }else if(a.type==='set_section_count'){
        state.customCounts[a.chapterId]=state.customCounts[a.chapterId]||{};
        state.customCounts[a.chapterId][a.sectionKey]=a.count;
        if(typeof pruneLogForSection==='function') pruneLogForSection(a.chapterId,a.sectionKey,a.count);
        if(typeof normalizeTicksFor==='function') normalizeTicksFor(state);
      }else if(a.type==='clear_locked_plan') state.plan=null;
      else if(a.type==='lock_plan'){
        if(typeof lockPlan==='function') lockPlan();
      }else if(a.type==='regenerate_plan'){
        state.plan=null;
        if(typeof lockPlan==='function') lockPlan();
      }
    });
    saveState();
    if(typeof renderAll==='function') renderAll();
    if(typeof renderPlanner==='function') renderPlanner();
    if(typeof renderReorderPanel==='function') renderReorderPanel();
    if(typeof renderDailyPace==='function') renderDailyPace();
    if(typeof renderDeadline==='function') renderDeadline();
    showToast('✦ '+name()+' updated the planner','ach');
    proposal=null;showProposal();
  }catch(e){addMsg('ai','Could not apply those changes: '+e.message);}
}

/* ---------- UI ---------- */
function build(){
  const o=document.createElement('div'); o.className='log-overlay'; o.id='aiOverlay';
  o.innerHTML=`<div class="log-modal ai-modal">
   <div class="log-modal-head">
    <div class="ai-title-wrap">
      <div class="ai-orb">✦</div><div><h2 id="aiTitle">${esc(name())}</h2><div class="sub">AI study assistant · planner control center</div></div>
    </div>
    <div class="log-modal-actions">
      <button class="btn sm ai-tab active" data-t="coach">CHAT</button>
      <button class="btn sm ai-tab" data-t="connect">CONNECT</button>
      <button class="btn sm ai-tab" data-t="about">WHAT CAN I DO?</button>
      <button class="btn sm danger" id="aiClose">CLOSE</button>
    </div>
   </div>

   <div id="aiCoach">
     <div class="ai-statusbar"><span id="aiStatusDot"></span><span id="aiStatusText">Not connected</span><button class="btn sm" id="aiQuickConnect">SET UP AI</button></div>
     <div class="ai-chat-tools"><span>LOCAL CHAT HISTORY · NO APP MESSAGE CAP</span><button class="btn sm" id="aiExportChat">EXPORT CHAT</button><button class="btn sm danger" id="aiClearChat">CLEAR CHAT</button></div>
     <div class="ai-chips">
       <button class="ai-chip" data-q="Look at my entire planner and tell me what I should change first.">🧭 Audit planner</button>
       <button class="ai-chip" data-q="Make a realistic day-wise plan from today using my current backlog.">🗓 Build plan</button>
       <button class="ai-chip" data-q="I fell behind. Rebalance my pace, deadline and locked plan intelligently.">⚖ Rebalance everything</button>
       <button class="ai-chip" data-q="Reorder my chapters for a sensible progression and apply the changes.">🔀 Reorder</button>
       <button class="ai-chip" data-q="Find sections I should skip or reduce based on my current workload.">✂ Reduce workload</button>
     </div>
     <div class="ai-log" id="aiLog"></div><div id="aiProposal"></div>
     <div class="ai-input"><textarea id="aiText" rows="2" placeholder="Ask anything about your planner… e.g. “I have 32 days left, fix the whole plan.”"></textarea><button class="btn" id="aiSend">SEND</button></div>
   </div>

   <div id="aiConnect" style="display:none">
     <div class="connect-hero">
       <div class="connect-kicker">BEGINNER MODE</div>
       <h3>Connect your own AI</h3>
       <p>No server, no hidden account. You choose the provider, create your own API key, paste it here, test it, and this browser talks directly to that provider.</p>
     </div>
     <div class="connection-grid">
       <div class="connection-main">
        <label class="ai-l">1 · Choose your AI provider</label>
        <select id="aiProv"></select>
        <div id="providerHelp" class="provider-help"></div>

        <label class="ai-l">2 · Choose the model</label>
        <input id="aiModel" list="aiModels" autocomplete="off"><datalist id="aiModels"></datalist>

        <div id="aiUrlWrap" style="display:none">
          <label class="ai-l">3 · API endpoint URL</label>
          <input id="aiUrl" placeholder="https://your-provider.example/v1/chat/completions">
        </div>

        <label class="ai-l" id="keyStepLabel">3 · Paste your API key</label>
        <div class="key-row"><input id="aiKey" type="password" autocomplete="off" placeholder="Paste your key here"><button class="btn sm" id="aiShowKey">SHOW</button></div>

        <div class="connect-actions">
          <button class="btn" id="aiSave">SAVE CONNECTION</button>
          <button class="btn" id="aiTest">TEST CONNECTION</button>
          <button class="btn danger" id="aiForget">REMOVE KEY</button>
        </div>
        <div class="sync-msg" id="aiMsg"></div>

        <div class="privacy-box">
          <b>🔐 What happens to the key?</b><br>
          It is stored in this browser's local storage and sent directly to the provider you selected. It is <b>not</b> put into your planner export or GitHub cloud-sync data by this assistant. This is suitable for a personal/local app; for a public website, use a server-side proxy instead of exposing a reusable API key in the browser.
        </div>
       </div>
       <aside class="beginner-guide">
         <div class="guide-title">HOW TO CONNECT · LIKE I'M EXPLAINING IT TO A BEGINNER</div>
         <div id="guideBody"></div>
       </aside>
     </div>

     <div class="advanced-connection">
       <div class="advanced-head"><b>⚙ Assistant settings</b><label><input type="checkbox" id="aiAutoApply"> Allow automatic planner changes</label></div>
       <div class="rename-row"><div><b>Assistant name</b><small>Change “MDCCCVII” to anything you want. This only changes the local display name.</small></div><div><input id="aiName" maxlength="32" placeholder="e.g. NOVA"><button class="btn sm" id="aiRename">RENAME</button></div></div>
     </div>
   </div>

   <div id="aiAbout" style="display:none">
     <div class="cap-grid">
       <div class="cap-card"><b>🧠 Understand</b><span>Reads your current backlog, chapter order, pace, deadline, skips, custom counts and locked schedule.</span></div>
       <div class="cap-card"><b>🗓 Plan</b><span>Creates or rebuilds a realistic daily workload and can set pace + deadline.</span></div>
       <div class="cap-card"><b>🔀 Reorganize</b><span>Changes chapter order and can skip/unskip chapters or individual section types.</span></div>
       <div class="cap-card"><b>✂ Resize</b><span>Changes custom question counts for sections when you explicitly ask for a smaller workload.</span></div>
       <div class="cap-card"><b>🔒 Schedule</b><span>Can clear, lock or regenerate the planner schedule after your approval.</span></div>
       <div class="cap-card"><b>💬 Explain</b><span>Discusses why a change makes sense, catches unrealistic requests and suggests alternatives.</span></div>
     </div>
     <div class="about-note"><b>Important:</b> The assistant can only change planner controls exposed by this app. It cannot secretly access your files, accounts, passwords or other browser data. It also cannot magically browse the internet unless the provider/model you connect supplies that capability.</div>
   </div>
  </div>`;
  document.body.appendChild(o);

  const sel=$('aiProv');
  sel.innerHTML=Object.keys(PROV).map(k=>`<option value="${k}">${PROV[k].label}</option>`).join('');
  o.addEventListener('click',e=>{if(e.target===o)closeAI();});
  $('aiClose').onclick=closeAI;
  o.querySelectorAll('.ai-tab').forEach(b=>b.onclick=()=>tab(b.dataset.t));
  o.querySelectorAll('.ai-chip').forEach(b=>b.onclick=()=>send(b.dataset.q));
  $('aiSend').onclick=()=>send($('aiText').value);
  $('aiClearChat').onclick=()=>{if(confirm('Clear this AI conversation?')) clearHistory();};
  $('aiExportChat').onclick=exportHistory;
  $('aiText').addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();send($('aiText').value);}});
  $('aiQuickConnect').onclick=()=>{tab('connect');};

  sel.onchange=()=>{cfg.provider=sel.value;cfg.model='';fillConnect();};
  $('aiSave').onclick=()=>{readForm();persist();$('aiKey').value=cfg.key;msg(cfg.key ? 'Saved ✓ Key is stored in this browser. Press TEST CONNECTION to verify that the provider accepts it.' : 'Saved, but no key was entered.', !cfg.key);paintStatus();};
  $('aiForget').onclick=()=>{cfg.key='';persist();$('aiKey').value='';msg('Key removed from this browser.');paintStatus();};
  $('aiTest').onclick=async()=>{
    readForm();msg('Testing the connection…');
    try{
      if(!cfg.key) throw new Error('Paste your API key first.');
      persist();
      const t=await callAI([{role:'user',content:'Reply with only this JSON: {"reply":"ONLINE"}'}],
        'Return only valid JSON {"reply":"ONLINE"}');
      const r=parseReply(t);msg('✓ Connected — '+String(r.reply||'ONLINE').slice(0,80));persist();paintStatus();
    }catch(e){msg('✗ '+e.message,true);}
  };
  $('aiShowKey').onclick=()=>{
    const x=$('aiKey');x.type=x.type==='password'?'text':'password';$('aiShowKey').textContent=x.type==='password'?'SHOW':'HIDE';
  };
  $('aiRename').onclick=()=>{
    const n=$('aiName').value.trim().replace(/\s+/g,' ');
    if(!n)return msg('Enter a name first.',true);
    cfg.name=n.slice(0,32);persist();refreshName();msg('Renamed ✓ Your assistant is now '+cfg.name+'.');paintStatus();
  };
  $('aiAutoApply').onchange=()=>{cfg.autoApply=$('aiAutoApply').checked;persist();};
  fillConnect();refreshName();paintStatus();
}
function cleanKey(v){ return String(v||'').trim().replace(/^['\"]|['\"]$/g,'').replace(/^Bearer\s+/i,'').trim(); }
function readForm(){
  cfg.provider=$('aiProv').value;
  const p=PROV[cfg.provider]||PROV.gemini;
  cfg.model=$('aiModel').value.trim()||p.model;
  cfg.key=cleanKey($('aiKey').value);
  cfg.url=$('aiUrl').value.trim();
}
function persist(){store.set(CFG_KEY,JSON.stringify(cfg));}
function keyLooksValid(){
  const k=String(cfg.key||'');
  if(!k) return false;
  if(k.length<12) return false;
  if(/^AIzaSy/i.test(k)) return true;
  if(/^gsk_/i.test(k)) return true;
  if(/^sk-or-/i.test(k)) return true;
  if(/^sk-[A-Za-z0-9]/.test(k)) return true;
  return cfg.provider==='custom';
}
function fillConnect(){
  const p=PROV[cfg.provider]||PROV.gemini;
  $('aiProv').value=cfg.provider;
  $('aiModel').value=cfg.model||p.model;
  $('aiModels').innerHTML=(p.models||[]).map(m=>`<option value="${esc(m)}">`).join('');
  $('aiKey').value=cfg.key||'';
  $('aiUrl').value=cfg.url||'';
  $('aiUrlWrap').style.display=cfg.provider==='custom'?'block':'none';
  $('keyStepLabel').textContent=(cfg.provider==='custom'?'4':'3')+' · Paste your API key';
  $('providerHelp').innerHTML='<b>'+esc(p.label)+'</b> — '+esc(p.help);
  $('aiName').value=cfg.name||'MDCCCVII';
  $('aiAutoApply').checked=!!cfg.autoApply;
  renderGuide();
}
function renderGuide(){
  const p=cfg.provider;
  const guides={
    gemini:[
      'Open Google AI Studio using the “GET KEY” button/link shown by this app.',
      'Sign in with your Google account if asked.',
      'Create/copy an API key from the API keys area. Google’s current docs say AI Studio can create a key for you.',
      'Come back here, choose your Gemini model, paste the key, then press TEST CONNECTION.',
      'If the test says ONLINE, press SAVE CONNECTION and go to CHAT.',
      'For a public website, do not ship this key to every visitor; use a server-side proxy.'
    ],
    groq:[
      'Open the Groq key page with the “GET KEY” link.',
      'Sign in/create your Groq account and create an API key.',
      'Copy the key once it is shown.',
      'Return here → choose a model → paste the key → TEST CONNECTION.',
      'If it works, SAVE CONNECTION. Groq uses an OpenAI-compatible chat endpoint, so this app can talk to it directly.',
      'Free-tier limits can change. A 429 message usually means you hit a rate limit.'
    ],
    openrouter:[
      'Open OpenRouter’s key page using the “GET KEY” link.',
      'Create/sign in to your account and create an API key.',
      'Pick a model you have access to, paste the key here, then TEST CONNECTION.',
      'OpenRouter is useful when you want to switch between many model providers without changing this app’s connection method.',
      'If a model fails, try another model ID available to your account.'
    ],
    openai:[
      'Open the OpenAI API keys page using the “GET KEY” link.',
      'Create/copy an API key in your OpenAI developer account.',
      'Make sure your account has API access/credits as required for the selected model.',
      'Return here → choose the model → paste the key → TEST CONNECTION → SAVE CONNECTION.',
      'This app sends requests directly from your browser. For a public deployment, use your own backend proxy so visitors never receive your secret API key.'
    ],
    custom:[
      'Ask your provider for its OpenAI-compatible Chat Completions endpoint.',
      'Paste that endpoint into API endpoint URL. Example shape: https://provider.example/v1/chat/completions',
      'Enter the exact model ID supplied by that provider.',
      'Paste the API key and TEST CONNECTION.',
      'If the provider blocks browser/CORS requests, this direct-browser mode will not work; use a small server-side proxy.'
    ]
  };
  const arr=guides[p]||guides.gemini;
  $('guideBody').innerHTML=arr.map((x,i)=>`<div class="guide-step"><i>${i+1}</i><span>${esc(x)}</span></div>`).join('')+
    `<a class="guide-link" href="${PROV[p].link||'#'}" target="_blank" rel="noopener">${PROV[p].link?'OPEN '+esc(PROV[p].label.toUpperCase())+' KEY PAGE ↗':'No provider key page configured'}</a>
     <div class="guide-faq"><b>Why do I need my own key?</b><span>This is a BYO-key app. The website does not secretly provide an AI account. Your provider account pays/controls the API usage.</span><b>Will my planner be sent?</b><span>Only the compact planner snapshot needed for the conversation is sent to the AI provider. Your API key is not included in that snapshot.</span></div>`;
}
function msg(t,bad){
  const m=$('aiMsg');m.textContent=t;m.style.color=bad?'var(--red)':'';
}
function tab(t){
  $('aiCoach').style.display=t==='coach'?'block':'none';
  $('aiConnect').style.display=t==='connect'?'block':'none';
  $('aiAbout').style.display=t==='about'?'block':'none';
  $('aiOverlay').querySelectorAll('.ai-tab').forEach(b=>b.classList.toggle('active',b.dataset.t===t));
  if(t==='connect')fillConnect();
}
function paintStatus(){
  const connected=!!cfg.key;
  const dot=$('aiStatusDot'),tx=$('aiStatusText');
  if(dot)dot.classList.toggle('on',connected);
  if(tx)tx.textContent=connected?('Connected · '+PROV[cfg.provider].label+' · '+(cfg.model||PROV[cfg.provider].model)):'Not connected · connect your own API key';
  updateCommandDeck();
}
function refreshName(){
  const n=name();
  const title=$('aiTitle'); if(title)title.textContent=n;
  const btn=$('aiBtn');if(btn)btn.textContent='✦ '+n;
  const pbtn=$('aiPlannerBtn');if(pbtn)pbtn.textContent='✦ ASK '+n;
  updateCommandDeck();
}
function updateCommandDeck(){
  const n=name(), nm=$('acdAssistantName'), st=$('acdConnectionState');
  if(nm) nm.textContent=n;
  if(st){const on=!!cfg.key;st.textContent=on?'CONNECTED':'NOT CONNECTED';st.classList.toggle('on',on);}
}
function addMsg(who,text){
  const l=$('aiLog');const d=document.createElement('div');d.className='ai-msg '+who;
  d.innerHTML=esc(text).replace(/\*\*(.+?)\*\*/g,'<b>$1</b>').replace(/\n/g,'<br>');
  l.appendChild(d);l.scrollTop=l.scrollHeight;return d;
}
function showProposal(){
  const el=$('aiProposal'); if(!proposal){el.innerHTML='';return;}
  const acts=proposal.actions||[];
  const rows=acts.map(a=>`<div class="ai-action-row"><span>CHANGE</span><b>${esc(actionLabel(a))}</b></div>`).join('');
  el.innerHTML=`<div class="ai-prop">
    <div class="ai-prop-t">✦ PLANNER CHANGES READY</div>
    ${rows||'<div>No planner changes were requested.</div>'}
    ${proposal.why?`<small>${esc(proposal.why)}</small>`:''}
    ${acts.length?`<div class="sync-actions"><button class="btn" id="aiApply">APPLY ${acts.length} CHANGE${acts.length===1?'':'S'}</button><button class="btn" id="aiDismiss">DISMISS</button></div>`:''}
  </div>`;
  if($('aiApply'))$('aiApply').onclick=applyActions;
  if($('aiDismiss'))$('aiDismiss').onclick=()=>{proposal=null;showProposal();};
  if(cfg.autoApply&&acts.length) setTimeout(()=>{if(proposal?.actions?.length)applyActions();},120);
}
const SYS=()=>`You are ${name()}, the AI study assistant inside a JEE Physical Chemistry tracker.
You can advise AND operate the planner. The student's planner is the source of truth.
You receive a live JSON snapshot.

WHAT YOU CAN CHANGE:
- daily target / pace
- deadline
- chapter order
- skip or unskip an entire chapter
- skip or unskip an individual section in a chapter
- custom question count for a section
- clear, lock, or regenerate the locked day-wise plan

DO NOT invent chapter IDs or section keys. Do arithmetic from the supplied snapshot. Be realistic about workload.
If the student asks to change the planner, return actions that accomplish it. If they ask to "fix everything", inspect the whole snapshot and make the smallest sensible set of changes.
If they only ask a question, actions can be [].
Never claim you changed anything until the app applies the returned actions.

Return ONLY valid JSON:
{"reply":"plain-text helpful answer, max 180 words","why":"one concise reason for the proposed changes or empty string","actions":[
 {"type":"set_daily_target","value":20},
 {"type":"set_deadline","value":"YYYY-MM-DD"},
 {"type":"reorder_chapters","order":["mole","thermo"]},
 {"type":"skip_chapter","chapterId":"mole","skipped":true},
 {"type":"skip_section","chapterId":"mole","sectionKey":"ex1","skipped":true},
 {"type":"set_section_count","chapterId":"mole","sectionKey":"ex1","count":100},
 {"type":"clear_locked_plan"},
 {"type":"lock_plan"},
 {"type":"regenerate_plan"}
]}
Use only the action types that are necessary.`;

async function send(text){
  text=(text||'').trim();if(!text||busy)return;
  if(!cfg.key){tab('connect');msg('Connect an API key first — the beginner guide will walk you through it.',true);return;}
  busy=true;$('aiText').value='';proposal=null;showProposal();addMsg('me',text);
  const wait=addMsg('ai',name()+' is thinking…');wait.classList.add('wait');
  try{
    const msgs=[...history.slice(-12),{role:'user',content:'LIVE PLANNER DATA:\n'+JSON.stringify(snapshot())+'\n\nSTUDENT REQUEST: '+text}];
    let raw, lastErr;
    for(let attempt=0;attempt<3;attempt++){
      try{ raw=await callAI(msgs,SYS()); break; }
      catch(e){ lastErr=e; const m=String(e.message||''); if(!m.startsWith('PROVIDER_TEMPORARY:') || attempt===2) throw e; wait.textContent=name()+' is retrying… ('+(attempt+1)+'/2)'; await new Promise(r=>setTimeout(r,1000*Math.pow(2,attempt))); }
    }
    const r=parseReply(raw);
    history.push({role:'user',content:text},{role:'assistant',content:String(r.reply||'')});
    persistHistory();
    wait.remove();addMsg('ai',String(r.reply||'…'));
    proposal={actions:validActions(r.actions),why:String(r.why||'')};
    showProposal();
  }catch(e){wait.remove(); const m=String(e.message||e); let friendly=m; if(m.startsWith('PROVIDER_RATE_LIMIT:')) friendly='⏳ The provider rate-limited this request. This is your provider’s quota/rate limit — not a limit imposed by this app. Wait a moment and try again.'; else if(m.startsWith('PROVIDER_TEMPORARY:')) friendly='⏳ The provider is temporarily overloaded. Your key reached the provider; try again in a moment.'; else if(m.startsWith('AUTH_FAILED:')) friendly='🔑 The provider rejected the key. Check the key, account access, and selected model.'; else if(m.startsWith('REQUEST_REJECTED:')) friendly='⚠ The provider rejected the request. Check the selected model and endpoint.'; addMsg('ai',friendly);}
  busy=false;
}
function openAI(){
  store.set(SEEN_KEY,'1');
  const b=$('aiBtn');if(b)b.classList.remove('btn-new');
  $('aiOverlay').classList.add('open');paintStatus();
  tab(cfg.key?'coach':'connect');
  const log=$('aiLog');
  if(log && log.children.length===0){
    if(history.length){ history.forEach(m=>addMsg(m.role==='user'?'me':'ai',m.content)); }
    else addMsg('ai',cfg.key
      ?`Hi — I’m ${name()}. I can read the live planner and propose changes to pace, deadline, chapter order, skips, section counts and schedules.`
      :`Hi — I’m ${name()}. I’m not connected yet. Open CONNECT & GUIDE and I’ll walk you through the API setup step by step.`);
  }
}
function closeAI(){$('aiOverlay').classList.remove('open');}

function init(){
  build();
  const pb=$('plannerBtn');
  if(pb)pb.insertAdjacentHTML('afterend',`<button class="btn sm ${store.get(SEEN_KEY)?'':'btn-new'}" id="aiBtn">✦ ${esc(name())}</button>`);
  const pp=$('printPlannerBtn');
  if(pp)pp.insertAdjacentHTML('beforebegin',`<button class="btn sm ai-cta" id="aiPlannerBtn">✦ ASK ${esc(name())}</button>`);
  ['aiBtn','aiPlannerBtn'].forEach(i=>{const b=$(i);if(b)b.onclick=openAI;});
  const acdOpen=$('acdOpen'), acdConnect=$('acdConnect'), acdRename=$('acdRename');
  if(acdOpen) acdOpen.onclick=openAI;
  if(acdConnect) acdConnect.onclick=()=>{openAI();tab('connect');};
  if(acdRename) acdRename.onclick=()=>{openAI();tab('connect');setTimeout(()=>{const x=$('aiName');if(x){x.focus();x.select();}},80);};
  window.openMDCCCVII=openAI;
  updateCommandDeck();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
