/* ══════════════════════════════════════════════════
   ANALYTICS — chapter leaderboard, activity heatmap,
   time-invested summary. Pure read-only view over
   existing state; hooks into renderAll() non-destructively.
   ══════════════════════════════════════════════════ */
(function(){
  const HEATMAP_WEEKS = 18; // ~4.5 months, fits nicely on desktop + mobile

  function pct(done,total){ return total>0 ? Math.round((done/total)*100) : 0; }

  function chapterLeaderboardHTML(){
    const rows = orderedChaptersSafe().map(ch=>{
      const skipped = isChapterSkipped(ch.id);
      const {total,done} = weightedChapterCounts(ch.id);
      const p = skipped ? 0 : pct(done,total);
      return {name:ch.name, p, skipped, done, total};
    });
    rows.sort((a,b)=> b.p - a.p);
    return rows.map(r=>{
      const barColor = r.skipped ? 'var(--text-dim)' : r.p>=100 ? 'var(--green)' : r.p>=50 ? 'var(--amber)' : 'var(--purple)';
      const tag = r.skipped ? '<span class="an-tag an-skip">SKIPPED</span>' : r.p>=100 ? '<span class="an-tag an-done">DONE</span>' : '';
      return `<div class="an-lb-row">
        <div class="an-lb-name">${r.name}${tag}</div>
        <div class="an-lb-track"><div class="an-lb-fill" style="width:${r.skipped?0:r.p}%;background:${barColor};"></div></div>
        <div class="an-lb-pct">${r.skipped?'—':r.p+'%'}</div>
      </div>`;
    }).join('');
  }

  function orderedChaptersSafe(){
    try{ return orderedChapters(); }catch(e){ return CHAPTERS; }
  }

  function heatmapHTML(){
    const days = HEATMAP_WEEKS*7;
    const cells = [];
    let max = 1;
    for(let i=days-1;i>=0;i--){
      const d = dateStrOffset(i);
      const v = (state.activity && state.activity[d]) || 0;
      if(v>max) max=v;
      cells.push({d,v});
    }
    // group into weeks (columns), Sun..Sat rows — simplest: pad start so array%7===0
    const pad = (7 - (cells.length % 7)) % 7;
    for(let i=0;i<pad;i++) cells.unshift({d:null,v:0});
    const weeks = [];
    for(let i=0;i<cells.length;i+=7) weeks.push(cells.slice(i,i+7));
    const level = v => v<=0?0: v<max*0.25?1: v<max*0.5?2: v<max*0.75?3:4;
    const cols = weeks.map(week=>{
      const cells2 = week.map(c=>{
        if(c.d===null) return `<div class="an-hm-cell an-hm-l0" style="visibility:hidden;"></div>`;
        const lv = level(c.v);
        const title = `${c.d} · ${fmtNum(c.v)} pts`;
        return `<div class="an-hm-cell an-hm-l${lv}" title="${title}"></div>`;
      }).join('');
      return `<div class="an-hm-col">${cells2}</div>`;
    }).join('');
    return `<div class="an-hm-grid">${cols}</div>
      <div class="an-hm-legend">Less <span class="an-hm-cell an-hm-l0"></span><span class="an-hm-cell an-hm-l1"></span><span class="an-hm-cell an-hm-l2"></span><span class="an-hm-cell an-hm-l3"></span><span class="an-hm-cell an-hm-l4"></span> More</div>`;
  }

  function timeStatsHTML(){
    const sessions = state.sessions||[];
    const totalSec = sessions.reduce((s,x)=>s+(x.durationSec||0),0);
    const totalHrs = (totalSec/3600);
    const totalQ = sessions.reduce((s,x)=>s+(x.questions||0),0);
    const avgRate = totalSec>0 ? (totalQ/(totalSec/60)) : 0;
    const activeDays = Object.keys(state.activity||{}).filter(d=>(state.activity[d]||0)>0).length;
    return `
      <div class="an-stat-strip">
        <div class="an-stat"><div class="an-stat-v">${totalHrs.toFixed(1)}h</div><div class="an-stat-l">TIME LOGGED</div></div>
        <div class="an-stat"><div class="an-stat-v">${sessions.length}</div><div class="an-stat-l">SESSIONS</div></div>
        <div class="an-stat"><div class="an-stat-v">${avgRate.toFixed(1)}</div><div class="an-stat-l">Q / MIN AVG</div></div>
        <div class="an-stat"><div class="an-stat-v">${activeDays}</div><div class="an-stat-l">ACTIVE DAYS</div></div>
      </div>`;
  }

  function weakestChapterNote(){
    const rows = orderedChaptersSafe()
      .filter(ch=>!isChapterSkipped(ch.id))
      .map(ch=>{ const {total,done}=weightedChapterCounts(ch.id); return {name:ch.name,p:pct(done,total)}; })
      .filter(r=>r.p<100);
    if(!rows.length) return `<div class="an-note an-note-good">🎉 Every active chapter is at 100%. Nothing left behind.</div>`;
    rows.sort((a,b)=>a.p-b.p);
    const weakest = rows[0];
    return `<div class="an-note">📌 Lowest completion right now: <b>${weakest.name}</b> (${weakest.p}%) — consider queuing it next.</div>`;
  }

  function renderAnalyticsPanel(){
    const host = document.getElementById('analyticsPanel');
    if(!host) return;
    host.innerHTML = `
      ${timeStatsHTML()}
      <div class="an-cols">
        <div class="an-col">
          <div class="an-subhead">CHAPTER LEADERBOARD</div>
          <div class="an-lb-list">${chapterLeaderboardHTML()}</div>
        </div>
        <div class="an-col">
          <div class="an-subhead">ACTIVITY — LAST ${HEATMAP_WEEKS*7} DAYS</div>
          ${heatmapHTML()}
        </div>
      </div>
      ${weakestChapterNote()}
    `;
  }

  // Hook into the existing render cycle without touching app.js
  if(typeof renderAll === 'function'){
    const origRenderAll = renderAll;
    renderAll = function(){
      origRenderAll();
      renderAnalyticsPanel();
    };
  }
  renderAnalyticsPanel();
  window.renderAnalyticsPanel = renderAnalyticsPanel;
})();
