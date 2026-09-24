/* ═══ NUMBERED CHAPTER ORDER ═══ */
renderReorderPanel=function(){
  const list=document.getElementById('reorderList'); if(!list) return;
  const chs=orderedChapters(), n=chs.length, flash=window.__roFlash; window.__roFlash=null;
  list.innerHTML=chs.map((ch,i)=>{
    const skipped=isChapterSkipped(ch.id), {total,done}=weightedChapterCounts(ch.id), isDone=total>0&&done>=total;
    const badge=skipped?'<span class="ro-badge">SKIP</span>':isDone?'<span class="ro-badge" style="color:var(--green);border-color:var(--green);">DONE</span>':'';
    return `<div class="reorder-row${skipped?' ro-skipped':''}${isDone?' ro-done':''}${flash===ch.id?' ro-flash':''}" data-chid="${ch.id}">
      <input class="ro-input" type="number" inputmode="numeric" min="1" max="${n}" value="${i+1}" data-chid="${ch.id}" data-pos="${i+1}" aria-label="Position of ${ch.name}">
      <span class="ro-name">${ch.name}</span>${badge}</div>`;
  }).join('');
  list.querySelectorAll('.ro-input').forEach(inp=>{
    inp.addEventListener('keydown',e=>{ if(e.key==='Enter'){ e.preventDefault(); inp.blur(); } });
    inp.addEventListener('focus',()=>inp.select());
    inp.addEventListener('change',()=>{
      let v=parseInt(inp.value,10); const cur=+inp.dataset.pos;
      if(isNaN(v)){ inp.value=cur; return; }
      v=Math.max(1,Math.min(n,v)); if(v===cur){ inp.value=cur; return; }
      window.__roFlash=inp.dataset.chid; reorderChapterTo(inp.dataset.chid,v-1);
    });
  });
};
if(document.getElementById('reorderPanel').classList.contains('open')) renderReorderPanel();
