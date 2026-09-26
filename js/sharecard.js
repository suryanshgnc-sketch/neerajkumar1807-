/* ══════════════════════════════════════════════════
   SHARE CARD — renders a downloadable PNG "progress
   report" card: student name, overall %, streak,
   chapter snapshot, a dynamic remark, and a teacher
   credibility strip (Neeraj Kumar + Pearson book).
   Pure read-only view over existing state; no deps.
   ══════════════════════════════════════════════════ */
(function(){

  // Cropped portrait of Neeraj Kumar, embedded so the card works fully offline.
  const TEACHER_AVATAR_SRC = "data:image/png;base64,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";

  const W = 1080, H = 1350;
  let avatarImg = null, avatarReady = false;
  (function preloadAvatar(){
    avatarImg = new Image();
    avatarImg.onload = ()=>{ avatarReady = true; };
    avatarImg.src = TEACHER_AVATAR_SRC;
  })();

  function pct(done,total){ return total>0 ? Math.round((done/total)*100) : 0; }

  function orderedChaptersSafe(){
    try{ return orderedChapters(); }catch(e){ return CHAPTERS; }
  }

  function paceInfo(){
    if(!state.deadline) return {status:'none'};
    const {total,done} = weightedTotalCounts();
    const remaining = total-done;
    if(remaining<=0) return {status:'done'};
    const daysLeft = Math.ceil((new Date(state.deadline+'T23:59:59')-new Date())/86400000);
    if(daysLeft<=0) return {status:'overdue', remaining};
    const requiredPerDay = remaining/daysLeft;
    let recentSum=0;
    for(let i=0;i<7;i++) recentSum += (state.activity && state.activity[dateStrOffset(i)]) || 0;
    const actualPerDay = recentSum/7;
    if(actualPerDay >= requiredPerDay*1.05) return {status:'ahead', requiredPerDay, actualPerDay};
    if(actualPerDay >= requiredPerDay*0.95) return {status:'ontrack', requiredPerDay, actualPerDay};
    return {status:'behind', requiredPerDay, actualPerDay};
  }

  function gatherStats(){
    const {total,done} = weightedTotalCounts();
    const overallPct = pct(done,total);
    const streak = (state.streak && state.streak.current) || 0;
    const bestStreak = (state.streak && state.streak.best) || streak;
    const sessions = state.sessions || [];
    const totalSec = sessions.reduce((s,x)=>s+(x.durationSec||0),0);
    const hrs = totalSec/3600;

    const rows = orderedChaptersSafe().map(ch=>{
      const skipped = isChapterSkipped(ch.id);
      const c = weightedChapterCounts(ch.id);
      return {id:ch.id, name:ch.name, p: skipped?0:pct(c.done,c.total), skipped, done:c.done, total:c.total};
    });
    const active = rows.filter(r=>!r.skipped);
    const strongest = active.filter(r=>r.p>0).sort((a,b)=>b.p-a.p).slice(0,3);
    const weakestList = active.filter(r=>r.p<100 && !strongest.some(s=>s.id===r.id)).sort((a,b)=>a.p-b.p);
    const weakest = weakestList[0] || null;

    return {
      studentName: (state.playerName || 'Challenger').slice(0,26),
      targetYear: state.targetYear || '2027',
      overallPct, done, total,
      streak, bestStreak, hrs, sessions: sessions.length,
      strongest, weakest,
      pace: paceInfo(),
      chaptersDone: active.filter(r=>r.p>=100).length,
      chaptersTotal: active.length
    };
  }

  function buildRemark(s){
    let title, body;
    if(s.total>0 && s.done>=s.total){
      title = "🏆 Book complete!";
      body = "Every active chapter finished — this is topper-level discipline. Time to shift into full revision + mock-test mode.";
    } else if(s.overallPct>=85){
      title = "🚀 Almost at the finish line!";
      body = `Just ${100-s.overallPct}% left. Stay consistent and this book is done well ahead of schedule.`;
    } else if(s.overallPct>=60){
      title = "🔥 Strong, steady progress.";
      body = s.weakest ? `Keep this momentum going — queue up "${s.weakest.name}" next to close the gap.` : "Keep this momentum going into the next chapter.";
    } else if(s.overallPct>=30){
      title = "💪 Solid foundation building.";
      body = s.weakest ? `Good traction so far. "${s.weakest.name}" needs the next push.` : "Good traction so far — keep showing up daily.";
    } else if(s.overallPct>=5){
      title = "⚡ The grind has begun.";
      body = "Small daily reps compound fast. Lock in a daily target and the percentage will move quickly.";
    } else {
      title = "🎯 Day one starts now.";
      body = "Every JEE topper started at 0%. Open a chapter, solve the first question, and the streak begins today.";
    }
    if(s.pace.status==='behind') body += " ⚠ Currently behind target pace — a little extra time this week closes the gap.";
    if(s.pace.status==='ahead') body += " You're running ahead of your deadline pace — excellent!";
    if(s.streak>=7) title += `  🔥×${s.streak}`;
    return {title, body};
  }

  // ── canvas helpers ──────────────────────────────
  function rr(ctx,x,y,w,h,r){
    if(typeof r==='number') r={tl:r,tr:r,br:r,bl:r};
    ctx.beginPath();
    ctx.moveTo(x+r.tl,y);
    ctx.lineTo(x+w-r.tr,y);
    ctx.arcTo(x+w,y,x+w,y+r.tr,r.tr);
    ctx.lineTo(x+w,y+h-r.br);
    ctx.arcTo(x+w,y+h,x+w-r.br,y+h,r.br);
    ctx.lineTo(x+r.bl,y+h);
    ctx.arcTo(x,y+h,x,y+h-r.bl,r.bl);
    ctx.lineTo(x,y+r.tl);
    ctx.arcTo(x,y,x+r.tl,y,r.tl);
    ctx.closePath();
  }

  function wrapText(ctx,text,x,y,maxWidth,lineHeight,maxLines){
    const words = text.split(' ');
    let line='', lines=[];
    for(let i=0;i<words.length;i++){
      const test = line + words[i] + ' ';
      if(ctx.measureText(test).width > maxWidth && line){ lines.push(line.trim()); line = words[i]+' '; }
      else line = test;
    }
    lines.push(line.trim());
    if(maxLines && lines.length>maxLines){
      lines = lines.slice(0,maxLines);
      lines[maxLines-1] = lines[maxLines-1].replace(/.{3}$/, '...');
    }
    lines.forEach((l,i)=> ctx.fillText(l, x, y+i*lineHeight));
    return lines.length;
  }

  function fitFontSize(ctx, text, maxWidth, startSize, family, weight){
    let size = startSize;
    ctx.font = `${weight} ${size}px ${family}`;
    while(ctx.measureText(text).width > maxWidth && size > 24){
      size -= 2;
      ctx.font = `${weight} ${size}px ${family}`;
    }
    return size;
  }

  const F = "'Inter', Arial, sans-serif";
  const COL = {
    bg:'#03050d', bg2:'#070c1a',
    cyan:'#2ee6ff', cyanGlow:'rgba(46,230,255,0.45)',
    purple:'#7c6bff', purpleGlow:'rgba(124,107,255,0.4)',
    amber:'#ffb020', amberGlow:'rgba(255,176,32,0.4)',
    green:'#38e07c',
    text:'#eaf4ff', dim:'#7d93b8', dim2:'#4c5f80',
    card:'rgba(255,255,255,0.045)', border:'rgba(255,255,255,0.09)'
  };

  function drawBackground(ctx){
    const g = ctx.createLinearGradient(0,0,W,H);
    g.addColorStop(0, COL.bg); g.addColorStop(1, COL.bg2);
    ctx.fillStyle = g; ctx.fillRect(0,0,W,H);

    // glow blobs
    function blob(x,y,r,color){
      const rg = ctx.createRadialGradient(x,y,0,x,y,r);
      rg.addColorStop(0,color); rg.addColorStop(1,'rgba(0,0,0,0)');
      ctx.fillStyle = rg; ctx.fillRect(0,0,W,H);
    }
    blob(W*0.85, H*0.06, 480, 'rgba(124,107,255,0.22)');
    blob(W*0.05, H*0.38, 420, 'rgba(46,230,255,0.14)');
    blob(W*0.9, H*0.95, 460, 'rgba(255,176,32,0.10)');

    // faint dot grid
    ctx.fillStyle = 'rgba(255,255,255,0.028)';
    for(let x=40; x<W; x+=40){
      for(let y=40; y<H; y+=40){ ctx.fillRect(x,y,1.6,1.6); }
    }

    // outer border
    ctx.strokeStyle = COL.border; ctx.lineWidth = 2;
    rr(ctx,10,10,W-20,H-20,28); ctx.stroke();
  }

  function drawRing(ctx, cx, cy, r, lw, p, label){
    ctx.save();
    ctx.lineCap='round';
    // track
    ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2);
    ctx.strokeStyle='rgba(255,255,255,0.08)'; ctx.lineWidth=lw; ctx.stroke();
    // progress arc
    const start=-Math.PI/2, end=start + Math.PI*2*(p/100);
    const grad = ctx.createLinearGradient(cx-r,cy-r,cx+r,cy+r);
    grad.addColorStop(0, COL.cyan); grad.addColorStop(1, COL.purple);
    ctx.beginPath(); ctx.arc(cx,cy,r,start,end);
    ctx.strokeStyle=grad; ctx.lineWidth=lw;
    ctx.shadowColor=COL.cyanGlow; ctx.shadowBlur=28;
    ctx.stroke();
    ctx.shadowBlur=0;
    ctx.restore();

    ctx.textAlign='center';
    ctx.fillStyle=COL.text;
    ctx.font=`800 92px ${F}`;
    ctx.fillText(p+'%', cx, cy+30);
    ctx.font=`700 20px ${F}`;
    ctx.fillStyle=COL.dim;
    ctx.fillText(label, cx, cy+66);
    ctx.textAlign='left';
  }

  function statCard(ctx,x,y,w,h,value,label,accent){
    rr(ctx,x,y,w,h,16);
    ctx.fillStyle=COL.card; ctx.fill();
    ctx.strokeStyle=COL.border; ctx.lineWidth=1.5; ctx.stroke();
    ctx.textAlign='left';
    ctx.fillStyle=accent||COL.cyan;
    ctx.font=`800 40px ${F}`;
    ctx.fillText(value, x+24, y+52);
    ctx.fillStyle=COL.dim;
    ctx.font=`700 15px ${F}`;
    ctx.save(); ctx.globalAlpha=0.95;
    ctx.fillText(label.toUpperCase(), x+24, y+h-20);
    ctx.restore();
  }

  function chapterBar(ctx,x,y,w,name,p,accent,tag){
    ctx.fillStyle=COL.text; ctx.font=`700 21px ${F}`;
    const nameMax = w-130;
    let nm=name;
    while(ctx.measureText(nm).width>nameMax && nm.length>4){ nm=nm.slice(0,-1); }
    if(nm!==name) nm=nm.trim()+'…';
    ctx.fillText(nm, x, y+15);
    if(tag){
      ctx.font=`700 13px ${F}`;
      const tw = ctx.measureText(tag).width;
      rr(ctx, x+ctx.measureText(nm).width+14, y-16, tw+16, 24, 12);
      ctx.fillStyle = accent+'26'; ctx.fill();
      ctx.fillStyle = accent;
      ctx.fillText(tag, x+ctx.measureText(nm).width+22, y+1);
    }
    ctx.textAlign='right'; ctx.fillStyle=COL.text; ctx.font=`800 21px ${F}`;
    ctx.fillText(p+'%', x+w, y+15);
    ctx.textAlign='left';
    const trackY=y+26, trackH=10;
    rr(ctx,x,trackY,w,trackH,5); ctx.fillStyle='rgba(255,255,255,0.08)'; ctx.fill();
    rr(ctx,x,trackY,Math.max(w*(p/100),6),trackH,5);
    const grad=ctx.createLinearGradient(x,0,x+w,0);
    grad.addColorStop(0,accent); grad.addColorStop(1,COL.cyan);
    ctx.fillStyle=grad; ctx.fill();
  }

  function drawCard(ctx, stats){
    const { title, body } = buildRemark(stats);
    ctx.clearRect(0,0,W,H);
    drawBackground(ctx);

    const M = 72;

    // kicker + date
    ctx.font=`800 20px ${F}`;
    rr(ctx,M,64,420,42,21);
    ctx.fillStyle='rgba(124,107,255,0.16)'; ctx.fill();
    ctx.strokeStyle='rgba(124,107,255,0.5)'; ctx.lineWidth=1.2; ctx.stroke();
    ctx.fillStyle=COL.purple;
    ctx.fillText(`JEE ${stats.targetYear} · PHYSICAL CHEMISTRY`, M+20, 92);

    ctx.textAlign='right'; ctx.font=`600 18px ${F}`; ctx.fillStyle=COL.dim2;
    const dateStr = new Date().toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'});
    ctx.fillText(dateStr, W-M, 92);
    ctx.textAlign='left';

    // student name (fit to width)
    const nameSize = fitFontSize(ctx, stats.studentName, W-2*M, 66, F, 800);
    const nameGrad = ctx.createLinearGradient(M,0,M+500,0);
    nameGrad.addColorStop(0,'#ffffff'); nameGrad.addColorStop(1,COL.cyan);
    ctx.fillStyle=nameGrad;
    ctx.font=`800 ${nameSize}px ${F}`;
    ctx.fillText(stats.studentName, M, 200);

    ctx.font=`600 24px ${F}`; ctx.fillStyle=COL.dim;
    ctx.fillText('Physical Chemistry Progress Report', M, 236);

    // divider
    const dgrad = ctx.createLinearGradient(M,0,W-M,0);
    dgrad.addColorStop(0,COL.cyan); dgrad.addColorStop(0.5,COL.purple); dgrad.addColorStop(1,'rgba(0,0,0,0)');
    ctx.fillStyle=dgrad; ctx.fillRect(M,264,W-2*M,3);

    // ring
    drawRing(ctx, M+150, 470, 150, 24, stats.overallPct, 'COMPLETE');

    // stat grid (right of ring)
    const gx = M+380, gw=(W-M-gx-20)/2, gh=110, gy0=340, gap=20;
    statCard(ctx,gx,gy0,gw,gh, `🔥 ${stats.streak}`, 'Day streak', COL.amber);
    statCard(ctx,gx+gw+gap,gy0,gw,gh, `${stats.hrs.toFixed(1)}h`, 'Time logged', COL.cyan);
    statCard(ctx,gx,gy0+gh+gap,gw,gh, `${fmtNum(stats.done)}`, `of ${fmtNum(stats.total)} pts`, COL.purple);
    let paceVal='—', paceLbl='No deadline set', paceCol=COL.dim;
    if(stats.pace.status==='ahead'){ paceVal='🚀'; paceLbl='Ahead of pace'; paceCol=COL.green; }
    else if(stats.pace.status==='ontrack'){ paceVal='✅'; paceLbl='On track'; paceCol=COL.cyan; }
    else if(stats.pace.status==='behind'){ paceVal='⚠'; paceLbl='Behind pace'; paceCol=COL.amber; }
    else if(stats.pace.status==='done' || stats.pace.status==='overdue'){ paceVal='🏁'; paceLbl='Book complete'; paceCol=COL.green; }
    statCard(ctx,gx+gw+gap,gy0+gh+gap,gw,gh, paceVal, paceLbl, paceCol);

    // chapter snapshot
    let cy = 690;
    ctx.font=`800 20px ${F}`; ctx.fillStyle=COL.dim;
    ctx.fillText('CHAPTER SNAPSHOT', M, cy);
    cy += 40;
    const barW = W-2*M, rowH = 58, maxRows = 4;
    let rowsDrawn = 0;
    stats.strongest.forEach((c,i)=>{
      chapterBar(ctx, M, cy+rowsDrawn*rowH, barW, c.name, c.p, i===0?COL.green:COL.cyan, i===0?'TOP':null);
      rowsDrawn++;
    });
    if(stats.weakest){
      chapterBar(ctx, M, cy+rowsDrawn*rowH, barW, stats.weakest.name, stats.weakest.p, COL.amber, 'FOCUS NEXT');
      rowsDrawn++;
    }
    cy += maxRows*rowH; // reserve consistent vertical rhythm regardless of row count

    // remark box
    const rbY = cy+2, rbH = 168;
    rr(ctx, M, rbY, W-2*M, rbH, 20);
    ctx.fillStyle='rgba(124,107,255,0.10)'; ctx.fill();
    ctx.strokeStyle='rgba(124,107,255,0.35)'; ctx.lineWidth=1.5; ctx.stroke();
    ctx.fillStyle=COL.text; ctx.font=`800 26px ${F}`;
    ctx.fillText(title, M+28, rbY+46);
    ctx.font=`500 19px ${F}`; ctx.fillStyle=COL.dim;
    wrapText(ctx, body, M+28, rbY+82, W-2*M-56, 27, 3);

    // footer — teacher credibility strip
    const fY = H-150;
    ctx.strokeStyle=COL.border; ctx.lineWidth=1.5;
    ctx.beginPath(); ctx.moveTo(M,fY-30); ctx.lineTo(W-M,fY-30); ctx.stroke();

    const avR=52, avX=M+avR, avY=fY+avR-6;
    ctx.save();
    ctx.beginPath(); ctx.arc(avX,avY,avR,0,Math.PI*2); ctx.closePath();
    ctx.strokeStyle=COL.cyan; ctx.lineWidth=3; ctx.shadowColor=COL.cyanGlow; ctx.shadowBlur=16; ctx.stroke();
    ctx.shadowBlur=0;
    ctx.clip();
    if(avatarReady) ctx.drawImage(avatarImg, avX-avR, avY-avR, avR*2, avR*2);
    else { ctx.fillStyle=COL.bg2; ctx.fill(); }
    ctx.restore();

    const tx = avX+avR+22;
    ctx.fillStyle=COL.text; ctx.font=`800 25px ${F}`;
    ctx.fillText('Neeraj Kumar', tx, fY+18);
    ctx.fillStyle=COL.dim; ctx.font=`500 15.5px ${F}`;
    ctx.fillText('Author · Problems & Solutions in Physical Chemistry for JEE (Pearson)', tx, fY+42);

    ctx.textAlign='right'; ctx.font=`800 20px ${F}`; ctx.fillStyle=COL.purple;
    ctx.fillText('NK CHEM TRACKER', W-M, fY+16);
    ctx.font=`500 14px ${F}`; ctx.fillStyle=COL.dim2;
    ctx.fillText('Generated automatically from tracked progress', W-M, fY+40);
    ctx.textAlign='left';
  }

  // ── modal wiring ────────────────────────────────
  function ensureModal(){
    if(document.getElementById('shareCardOverlay')) return;
    const el = document.createElement('div');
    el.className='log-overlay'; el.id='shareCardOverlay';
    el.innerHTML = `
      <div class="log-modal" style="max-width:560px;text-align:center;">
        <div class="log-modal-head" style="text-align:left;">
          <div><h2>🎴 SHARE CARD</h2><div class="sub">A downloadable progress snapshot, ready to share</div></div>
          <div class="log-modal-actions">
            <button class="btn sm danger" id="shareCardCloseBtn">CLOSE</button>
          </div>
        </div>
        <canvas id="shareCardCanvas" width="${W}" height="${H}" style="width:100%;height:auto;border-radius:14px;display:block;margin-bottom:14px;"></canvas>
        <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;">
          <button class="btn" id="shareCardDownloadBtn">⬇ DOWNLOAD PNG</button>
          <button class="btn" id="shareCardCopyBtn">📋 COPY IMAGE</button>
        </div>
      </div>`;
    document.body.appendChild(el);
    el.addEventListener('click', e=>{ if(e.target.id==='shareCardOverlay') closeShareCard(); });
    document.getElementById('shareCardCloseBtn').onclick = closeShareCard;
    document.getElementById('shareCardDownloadBtn').onclick = downloadCard;
    document.getElementById('shareCardCopyBtn').onclick = copyCard;
  }

  function closeShareCard(){
    const el = document.getElementById('shareCardOverlay');
    if(el) el.classList.remove('open');
  }

  function renderIntoCanvas(){
    const canvas = document.getElementById('shareCardCanvas');
    const ctx = canvas.getContext('2d');
    drawCard(ctx, gatherStats());
  }

  function openShareCard(){
    ensureModal();
    document.getElementById('shareCardOverlay').classList.add('open');
    renderIntoCanvas();
    if(!avatarReady){
      // avatar still loading — redraw once it's in
      avatarImg.addEventListener('load', renderIntoCanvas, {once:true});
    }
  }

  function downloadCard(){
    renderIntoCanvas();
    const canvas = document.getElementById('shareCardCanvas');
    canvas.toBlob(blob=>{
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      const nm = (state.playerName||'progress').toLowerCase().replace(/[^a-z0-9]+/g,'-');
      a.href = url; a.download = `nk-chem-${nm}-card.png`;
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(()=>URL.revokeObjectURL(url), 4000);
      if(typeof showToast==='function') showToast('🎴 Share card downloaded','ach');
    }, 'image/png');
  }

  async function copyCard(){
    renderIntoCanvas();
    const canvas = document.getElementById('shareCardCanvas');
    try{
      const blob = await new Promise(res=>canvas.toBlob(res,'image/png'));
      await navigator.clipboard.write([ new ClipboardItem({'image/png': blob}) ]);
      if(typeof showToast==='function') showToast('📋 Card image copied','ach');
    }catch(e){
      if(typeof showToast==='function') showToast('Copy not supported — use Download instead','warn');
    }
  }

  window.openShareCard = openShareCard;
})();
