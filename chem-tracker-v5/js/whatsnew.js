/* ==========================================================
   whatsnew.js — "New version" banner + NEW badge handling
   Shown once; dismissal is remembered in localStorage.
   Change VERSION_KEY when you ship a new release to show it again.
   ========================================================== */
(function(){
  const VERSION_KEY='nkV5BannerSeen', BADGE_KEY='nkV2CloudOpened';
  const CREDIT='suryansh1807';
  const store={get:k=>{try{return localStorage.getItem(k);}catch(e){return null;}},
               set:(k,v)=>{try{localStorage.setItem(k,v);}catch(e){}}};

  const hdr=document.querySelector('header');
  if(hdr && store.get(VERSION_KEY)!=='1'){
    const b=document.createElement('div');
    b.className='whatsnew big';
    b.innerHTML=`<span class="wn-badge">🚀 BIG UPDATE · v5.0</span>
      <span class="wn-text"><span class="wn-title">Meet AI assistant — your AI study coach, built into the Planner</span>
      Clears backlog, builds day-wise plans, reorders chapters. Bring your own free API key (Gemini, Groq, OpenRouter or custom). You approve every change.
      Made by <span class="wn-by">${CREDIT}</span>.</span>
      <button class="btn sm" id="wnSetup">MEET AI assistant →</button>
      <button class="wn-x" id="wnClose" aria-label="Dismiss">✕</button>`;
    hdr.insertAdjacentElement('afterend',b);
    const close=()=>{store.set(VERSION_KEY,'1');b.remove();};
    b.querySelector('#wnClose').onclick=close;
    b.querySelector('#wnSetup').onclick=()=>{close();if(window.openMDCCCVII)window.openMDCCCVII();};
  }

  const sb=document.getElementById('syncBtn');
  if(sb){
    if(store.get(BADGE_KEY)==='1') sb.classList.remove('btn-new');
    sb.addEventListener('click',()=>{store.set(BADGE_KEY,'1');sb.classList.remove('btn-new');});
  }
})();
