/* ══════════════════════════════════════════════════
   KEYBOARD SHORTCUTS — power-user layer, purely additive.
   Press "?" anytime for the cheat sheet.
   ══════════════════════════════════════════════════ */
(function(){
  // "bind:false" entries document shortcuts app.js already implements —
  // listed here for discoverability only, never double-handled.
  const MAP = [
    {key:'1-9', label:'Jump to chapter N', bind:false},
    {key:'Enter', label:'Mark next unsolved question', bind:false},
    {key:'F', label:'Toggle focus mode', bind:false},
    {key:'L', label:'Open daily solve log', run:()=>document.getElementById('logBtn')?.click()},
    {key:'P', label:'Open planner', run:()=>document.getElementById('plannerBtn')?.click()},
    {key:'S', label:'Open weekly / monthly stats', run:()=>document.getElementById('statsBtn')?.click()},
    {key:'G', label:'Open GOOD questions', run:()=>document.getElementById('goodBtn')?.click()},
    {key:'/', label:'Toggle "only left" filter', run:()=>document.getElementById('pendingToggleBtn')?.click()},
    {key:'Esc', label:'Close whatever is open', bind:false},
    {key:'?', label:'Show this cheat sheet', run:()=>toggleHelp()},
  ];

  function buildOverlay(){
    if(document.getElementById('shortcutsOverlay')) return;
    const el = document.createElement('div');
    el.className = 'log-overlay';
    el.id = 'shortcutsOverlay';
    el.innerHTML = `
      <div class="log-modal" style="max-width:420px;">
        <div class="log-modal-head">
          <div><h2>⌨ SHORTCUTS</h2><div class="sub">Keyboard cheat sheet</div></div>
          <div class="log-modal-actions"><button class="btn sm danger" id="shortcutsCloseBtn">CLOSE</button></div>
        </div>
        <div class="shortcuts-list">
          ${MAP.map(m=>`<div class="sc-row"><kbd class="sc-key">${m.key}</kbd><span class="sc-label">${m.label}</span></div>`).join('')}
        </div>
      </div>`;
    document.body.appendChild(el);
    document.getElementById('shortcutsCloseBtn').onclick = ()=>el.classList.remove('open');
    el.addEventListener('click', e=>{ if(e.target.id==='shortcutsOverlay') el.classList.remove('open'); });
  }

  function toggleHelp(){
    buildOverlay();
    document.getElementById('shortcutsOverlay').classList.toggle('open');
  }

  function isTypingTarget(el){
    if(!el) return false;
    const tag = el.tagName;
    return tag==='INPUT' || tag==='TEXTAREA' || tag==='SELECT' || el.isContentEditable;
  }

  document.addEventListener('keydown', e=>{
    if(isTypingTarget(e.target)) return;
    if(e.metaKey||e.ctrlKey||e.altKey) return;
    const k = e.key;
    if(k==='?'){ e.preventDefault(); toggleHelp(); return; }
    const hit = MAP.find(m=> m.bind!==false && m.key.length===1 && m.key.toLowerCase()===k.toLowerCase());
    if(hit){ hit.run(); }
  });

  buildOverlay();
  window.toggleShortcutsHelp = toggleHelp;

  const hint = document.createElement('div');
  hint.className = 'shortcuts-hint';
  hint.innerHTML = 'shortcuts <kbd>?</kbd>';
  hint.onclick = toggleHelp;
  const moreMenu = document.getElementById('moreMenu');
  if(moreMenu) moreMenu.insertAdjacentElement('beforebegin', hint);
})();
