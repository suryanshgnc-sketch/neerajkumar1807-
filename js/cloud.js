/* ==========================================================
   cloud.js — Cloud Sync (GitHub Gist) + beginner guide UI
   v2.0 · update pushed by suryansh1807
   ========================================================== */
(function(){
  const CK='nkChemSync',FN='nk-chem-tracker.json',API='https://api.github.com',BOOT=Date.now();
  let cfg={}; try{cfg=JSON.parse(localStorage.getItem(CK)||'{}');}catch(e){}
  const $=id=>document.getElementById(id), keep=()=>localStorage.setItem(CK,JSON.stringify(cfg));
  let status=cfg.token?'idle':'off', msg='', timer=null, busy=false, reloading=false, ver=0;
  const COL={off:'#444',idle:'#6fd39b',ok:'#6fd39b',busy:'#d9ad54',pending:'#d9ad54',err:'#d9666a'};
  const LABEL={off:'off',idle:'connected',ok:'synced',busy:'syncing…',pending:'saving…',err:'error'};

  async function gh(path,opt){
    const r=await fetch(API+path,Object.assign({headers:{Authorization:'Bearer '+cfg.token,Accept:'application/vnd.github+json'}},opt));
    if(r.status===401) throw new Error('GitHub rejected this token. Create a new one and paste it again.');
    if(!r.ok) throw new Error('GitHub error '+r.status+(r.status===404?' — the token needs the "gist" permission.':''));
    return r.json();
  }
  async function findGist(){
    if(cfg.gistId) return cfg.gistId;
    for(let p=1;p<=5;p++){
      const l=await gh('/gists?per_page=100&page='+p), g=l.find(x=>x.files&&x.files[FN]);
      if(g){ cfg.gistId=g.id; keep(); return g.id; }
      if(l.length<100) break;
    }
    return null;
  }
  async function readCloud(id){
    const g=await gh('/gists/'+id), f=g.files&&g.files[FN]; if(!f) return null;
    const t=f.truncated?await (await fetch(f.raw_url)).text():f.content;
    return JSON.parse(t);
  }
  async function writeCloud(){
    const v0=ver, raw=localStorage.getItem(STORAGE_KEY), rev=Date.now()+'-'+Math.random().toString(36).slice(2,7);
    const files={[FN]:{content:JSON.stringify({rev,at:new Date().toISOString(),data:raw})}};
    if(cfg.gistId) await gh('/gists/'+cfg.gistId,{method:'PATCH',body:JSON.stringify({files})});
    else { const g=await gh('/gists',{method:'POST',body:JSON.stringify({description:'Chem Tracker cloud sync',public:false,files})}); cfg.gistId=g.id; }
    cfg.syncedRev=rev; cfg.last=Date.now(); cfg.dirty=(ver!==v0); keep();
    if(cfg.dirty) schedule();
  }
  function apply(cloud){
    reloading=true; localStorage.setItem(STORAGE_KEY,cloud.data);
    cfg.syncedRev=cloud.rev; cfg.dirty=false; cfg.last=Date.now(); keep(); location.reload();
  }
  async function sync(){
    if(!cfg.token||busy||reloading) return;
    busy=true; set('busy');
    try{
      const id=await findGist(), cloud=id?await readCloud(id):null;
      if(!cloud){ origSave(); await writeCloud(); }
      else if(cloud.rev===cfg.syncedRev){ if(cfg.dirty){ origSave(); await writeCloud(); } }
      else if(!localStorage.getItem(STORAGE_KEY)||(!cfg.dirty&&cfg.syncedRev)){ apply(cloud); return; }
      else if(confirm('Saved progress found in the cloud, and this device has different data.\n\nOK = load the cloud data here (replaces this device)\nCancel = keep this device and overwrite the cloud')){ apply(cloud); return; }
      else { origSave(); await writeCloud(); }
      set('ok');
    }catch(e){ set('err',e.message||'Network error'); }
    finally{ busy=false; }
  }
  function schedule(){ clearTimeout(timer); timer=setTimeout(sync,2500); }

  const origSave=saveState;
  saveState=function(){
    if(reloading) return;
    origSave(); ver++;
    if(cfg.token&&Date.now()-BOOT>2500){ cfg.dirty=true; keep(); if(!busy) set('pending'); schedule(); }
  };

  function ago(t){ if(!t) return '—'; const s=Math.round((Date.now()-t)/1000); return s<60?'just now':s<3600?Math.round(s/60)+' min ago':new Date(t).toLocaleString(); }
  function set(s,m){ status=s; msg=m||''; paint(); }
  function paint(){
    const d=$('syncDot'); if(d) d.style.background=COL[status]||'#444';
    const st=$('settingsSyncState'); if(st) st.textContent=LABEL[status]||'';
    const sb=$('settingsSyncBtn'); if(sb) sb.textContent=cfg.token?'☁ MANAGE':'☁ SET UP';
    if($('syncOverlay').classList.contains('open')) view();
  }

  /* ---------- Cloud modal: tabs, benefits, noob guide, FAQ (edit the text here) ---------- */
  let tab=null, tokDraft='';
  const TOKEN_URL='https://github.com/settings/tokens/new?scopes=gist&description=Chem%20Tracker%20Sync';
  const TABS_OFF=[['why','☁ WHY CLOUD'],['guide','📖 SETUP GUIDE'],['connect','🔑 CONNECT'],['help','❓ HELP']];
  const TABS_ON=[['status','● STATUS'],['why','☁ BENEFITS'],['guide','📖 GUIDE'],['help','❓ HELP']];
  const BENEFITS=[
    ['📱','Same progress everywhere','Study on your phone, continue on your laptop. XP, level, streak, chapters and logs follow you.'],
    ['🛡️','Never lose your grind','Cleared browser data, new phone, formatted PC? Your progress is safe in the cloud and comes back in one paste.'],
    ['⚡','Fully automatic','No exporting or importing files. Changes upload a couple of seconds after you make them.'],
    ['💸','100% free','Uses a free GitHub account. No subscription, no card, no ads, no extra app.'],
    ['🔒','Private & yours','Data sits in a private (unlisted) gist in YOUR GitHub account. Nobody else runs a server for it.'],
    ['🔁','Smart conflict check','If two devices differ, you are asked which one to keep — nothing is overwritten silently.']];
  const STEPS=[
    ['Create a free GitHub account','Open <a href="https://github.com/signup" target="_blank" rel="noopener">github.com/signup</a>, enter email, password and username, then confirm the code GitHub emails you. Already have an account? Just sign in.','GitHub is only used as your private storage locker. You do not need to know coding.'],
    ['Open the token page',`Tap <a href="${TOKEN_URL}" target="_blank" rel="noopener">this token link</a>. A token is like a special password that lets this tracker save to your account. The <code>gist</code> permission is already ticked for you — leave it as it is.`,'GitHub may ask for your password again. That is normal.'],
    ['Set "No expiration" and generate','Find <b>Expiration</b> and choose <b>No expiration</b> (so it never stops working). Scroll down and press the green <b>Generate token</b> button.','If you pick a short expiry, sync will stop later and you will need a new token.'],
    ['Copy the token NOW','A code starting with <code>ghp_</code> appears. Press the copy icon next to it (or long-press and copy on phone).','GitHub shows it only once. If you lose it, just make a new one — nothing is lost.'],
    ['Paste it in the CONNECT tab','Come back here, open the <b>CONNECT</b> tab, paste the token and press <b>CONNECT</b>. The status turns to <b>synced</b> and the ☁ dot goes green.',null],
    ['Use it on your other devices','Open this same tracker file on the other device (send the file to yourself, or host it), tap ☁, and paste the <b>same token</b>. Your progress appears automatically.','Tip: keep the HTML file in Google Drive / WhatsApp-to-self so it is easy to open anywhere.']];
  const FAQ=[
    ['Is it really free?','Yes. GitHub accounts and gists are free, and this tracker never charges anything.'],
    ['Is my data private?','Your progress is stored in a private (unlisted) gist in your own GitHub account. The token stays only in this browser and is sent only to api.github.com. Anyone who has your token can read the data, so never share it.'],
    ['I lost my token. What now?','Nothing is lost. Make a new token with the same steps, paste it in CONNECT, and the tracker finds your existing cloud data automatically.'],
    ['How fast does it sync?','Saves upload about 2–3 seconds after a change. Other devices pick up the update when you reopen or return to the tab (and every ~90 seconds while open).'],
    ['It says "GitHub rejected this token"','The token was copied incompletely, expired, or was deleted. Generate a new one, make sure it has the <b>gist</b> permission, and paste the whole thing.'],
    ['Two devices show different data','You will be asked once: load the cloud data here, or keep this device and overwrite the cloud. Pick the device you studied on most recently as the "keep" one.'],
    ['Can I stop using cloud?','Yes. Press DISCONNECT in the STATUS tab. Your data stays on this device and in the cloud. You can also delete the gist from your GitHub account any time.']];

  function view(){
    const on=!!cfg.token, tabs=on?TABS_ON:TABS_OFF;
    if(!tab||!tabs.some(t=>t[0]===tab)) tab=on?'status':'why';
    let h='';
    if(tab==='why'){
      h=`<h3>Why use Cloud Sync?</h3><p class="sync-lead">One tracker, every device. Here is what you get:</p>
        <div class="benefit-grid">${BENEFITS.map(b=>`<div class="benefit"><div class="ic">${b[0]}</div><div><b>${b[1]}</b><span>${b[2]}</span></div></div>`).join('')}</div>
        <div class="sync-cta"><button class="btn" data-go="guide">📖 SHOW ME HOW (2 MIN)</button><button class="btn" data-go="connect">I ALREADY HAVE A TOKEN</button></div>`;
    } else if(tab==='guide'){
      h=`<h3>Setup guide for beginners</h3><p class="sync-lead">No coding needed. Follow the steps in order — it takes about 2 minutes, once.</p>
        <ol class="steps">${STEPS.map(s=>`<li><b class="t">${s[0]}</b>${s[1]}${s[2]?`<div class="tip">💡 ${s[2]}</div>`:''}</li>`).join('')}</ol>
        <div class="callout ok">✅ Done! From now on everything saves to the cloud by itself. GitHub's buttons may be worded a little differently over time, but the idea stays the same.</div>
        <div class="sync-cta"><button class="btn" data-go="connect">🔑 GO TO CONNECT</button></div>`;
    } else if(tab==='connect'){
      h=`<h3>Connect your cloud</h3><p class="sync-lead">Paste the token you copied from GitHub (it starts with <code>ghp_</code>). Need one? Open the <a href="#" data-go="guide" style="color:var(--accent-a)">setup guide</a>.</p>
        <div class="sync-field"><input id="syncTok" type="password" placeholder="ghp_…" autocomplete="off" spellcheck="false" value="${tokDraft.replace(/"/g,'')}"><button class="btn" id="syncConnect">CONNECT</button></div>
        <div class="sync-msg" id="syncMsg">${msg}</div>
        <div class="callout bad">🔐 Keep your token private. Anyone with it can read your progress. It is stored only in this browser.</div>`;
    } else if(tab==='status'){
      const ok=status==='ok'||status==='idle';
      h=`<div class="sync-status-hero"><div class="big">${status==='err'?'⚠️':ok?'✅':'⏳'}</div><div><b style="color:#fff">${ok?'Cloud is connected':status==='err'?'Something went wrong':'Working…'}</b><br><span style="color:var(--text-dim)">${LABEL[status]||''}</span></div></div>
        <div class="sync-line"><span>Last synced</span><span>${ago(cfg.last)}</span></div>
        <div class="sync-line"><span>Storage</span><span>private gist · ${FN}</span></div>
        <div class="sync-msg" id="syncMsg" style="color:${status==='err'?'#ff8095':'#d9ad54'}">${msg}</div>
        <div class="sync-actions"><button class="btn" id="syncNow">↻ SYNC NOW</button><button class="btn danger" id="syncOff">DISCONNECT</button></div>
        <div class="sync-note">On a new device: open this tracker, tap ☁, and paste the same token. Disconnecting keeps your data here and in the cloud.</div>`;
    } else {
      h=`<h3>Help &amp; FAQ</h3><p class="sync-lead">Quick answers to common questions.</p><div class="faq">${FAQ.map(f=>`<details><summary>${f[0]}</summary><p>${f[1]}</p></details>`).join('')}</div>`;
    }
    $('syncBody').innerHTML='<div class="sync-tabs">'+tabs.map(t=>`<button class="sync-tab${t[0]===tab?' active':''}" data-tab="${t[0]}">${t[1]}</button>`).join('')+'</div><div class="sync-pane">'+h+'</div>';
    const go=t=>{tab=t;view();};
    $('syncBody').querySelectorAll('[data-tab]').forEach(el=>el.onclick=()=>go(el.dataset.tab));
    $('syncBody').querySelectorAll('[data-go]').forEach(el=>el.onclick=e=>{e.preventDefault();go(el.dataset.go);});
    if($('syncConnect')){ $('syncConnect').onclick=connect;
      $('syncTok').addEventListener('input',e=>tokDraft=e.target.value);
      $('syncTok').addEventListener('keydown',e=>{ if(e.key==='Enter') connect(); }); }
    if($('syncNow')) $('syncNow').onclick=sync;
    if($('syncOff')) $('syncOff').onclick=()=>{ cfg={}; keep(); tab=null; set('off'); };
  }

  async function connect(){
    const t=$('syncTok').value.trim(); if(!t){ set('off','Paste your token first.'); return; }
    cfg={token:t}; keep(); set('busy','Connecting…');
    try{ await gh('/user'); msg=''; await sync(); }
    catch(e){ cfg={}; keep(); set('off',e.message); }
  }
  function open(){ $('settingsOverlay').classList.remove('open'); $('syncOverlay').classList.add('open'); view(); }
  $('syncBtn').onclick=open; $('settingsSyncBtn').onclick=open;
  $('syncClose').onclick=()=>$('syncOverlay').classList.remove('open');
  $('syncOverlay').addEventListener('click',e=>{ if(e.target.id==='syncOverlay') $('syncOverlay').classList.remove('open'); });
  document.addEventListener('visibilitychange',()=>{ if(cfg.token) sync(); });
  setInterval(()=>{ if(!document.hidden&&cfg.token) sync(); },90000);
  paint(); if(cfg.token) setTimeout(sync,1200);
})();
