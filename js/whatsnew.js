/* ==========================================================
   whatsnew.js — "New version" banner + NEW badge handling
   Shown once; dismissal is remembered in localStorage.
   Change VERSION_KEY when you ship a new release to show it again.
   ========================================================== */
(function(){
  const VERSION_KEY='nkV2BannerSeen', BADGE_KEY='nkV2CloudOpened';
  const CREDIT='suryansh1807';
  const store={get:k=>{try{return localStorage.getItem(k);}catch(e){return null;}},
               set:(k,v)=>{try{localStorage.setItem(k,v);}catch(e){}}};

  const hdr=document.querySelector('header');
  if(hdr && store.get(VERSION_KEY)!=='1'){
    const b=document.createElement('div');
    b.className='whatsnew';
    b.innerHTML=`<span class="wn-badge">NEW VERSION 2.0</span>
      <span class="wn-text">☁ <b>Cloud Sync is here!</b> Keep your XP, streaks and chapters on every device — free, private and automatic.
      Update pushed by <span class="wn-by">${CREDIT}</span>.</span>
      <button class="btn sm" id="wnSetup">SET UP CLOUD →</button>
      <button class="wn-x" id="wnClose" aria-label="Dismiss">✕</button>`;
    hdr.insertAdjacentElement('afterend',b);
    const close=()=>{store.set(VERSION_KEY,'1');b.remove();};
    b.querySelector('#wnClose').onclick=close;
    b.querySelector('#wnSetup').onclick=()=>{document.getElementById('syncBtn').click();close();};
  }

  const sb=document.getElementById('syncBtn');
  if(sb){
    if(store.get(BADGE_KEY)==='1') sb.classList.remove('btn-new');
    sb.addEventListener('click',()=>{store.set(BADGE_KEY,'1');sb.classList.remove('btn-new');});
  }
})();
