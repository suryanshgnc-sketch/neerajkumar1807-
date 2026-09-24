/* UI v3 — header "more" menu + auto-measured header height (keeps sticky sidebar aligned) */
(function(){
  const btn=document.getElementById('moreBtn'), menu=document.getElementById('moreMenu'), bar=document.getElementById('topbar');
  if(btn&&menu){
    btn.addEventListener('click',e=>{e.stopPropagation();menu.classList.toggle('open');});
    document.addEventListener('click',e=>{if(!menu.contains(e.target))menu.classList.remove('open');});
    menu.addEventListener('click',e=>{if(e.target.closest('.btn'))setTimeout(()=>menu.classList.remove('open'),0);});
    document.addEventListener('keydown',e=>{if(e.key==='Escape')menu.classList.remove('open');});
  }
  if(bar){const set=()=>document.documentElement.style.setProperty('--hh',bar.offsetHeight+'px');set();addEventListener('resize',set);if(window.ResizeObserver)new ResizeObserver(set).observe(bar);}
})();
