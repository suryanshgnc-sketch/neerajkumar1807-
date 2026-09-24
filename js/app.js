// ══════════════════════════════════════════════════
// DATA
// ══════════════════════════════════════════════════
const CHAPTERS = [
  {id:'mole',name:'Mole Concept',sections:[
    {key:'ex1',label:'Exercise 1 (JEE Mains)',count:150},
    {key:'a',label:'Ex.2 Section A',count:80},
    {key:'b',label:'Ex.2 Section B',count:30},
    {key:'c',label:'Ex.2 Section C',count:45},
    {key:'d',label:'Ex.2 Section D',count:15},
    {key:'e',label:'Ex.2 Section E',count:15},
    {key:'f1',label:'Ex.2 Section F (Single Digit Integer)',count:20},
    {key:'f2',label:'Ex.2 Section F (Four Digit Integer)',count:20},
  ]},
  {id:'equiv',name:'Equivalent Concept',sections:[
    {key:'ex1',label:'Exercise 1 (JEE Mains)',count:120},
    {key:'a',label:'Ex.2 Section A',count:75},
    {key:'b',label:'Ex.2 Section B',count:15},
    {key:'c',label:'Ex.2 Section C',count:30},
    {key:'d',label:'Ex.2 Section D',count:15},
    {key:'e',label:'Ex.2 Section E',count:10},
    {key:'f1',label:'Ex.2 Section F (Single Digit Integer)',count:20},
    {key:'f2',label:'Ex.2 Section F (Four Digit Integer)',count:20},
  ]},
  {id:'gaseous',name:'Gaseous State',sections:[
    {key:'ex1',label:'Exercise 1 (JEE Mains)',count:115},
    {key:'a',label:'Ex.2 Section A',count:95},
    {key:'b',label:'Ex.2 Section B',count:20},
    {key:'c',label:'Ex.2 Section C',count:45},
    {key:'d',label:'Ex.2 Section D',count:20},
    {key:'e',label:'Ex.2 Section E',count:10},
    {key:'f1',label:'Ex.2 Section F (Single Digit Integer)',count:15},
    {key:'f2',label:'Ex.2 Section F (Four Digit Integer)',count:20},
  ]},
  {id:'thermo',name:'Thermodynamics',sections:[
    {key:'ex1',label:'Exercise 1 (JEE Mains)',count:90},
    {key:'a',label:'Ex.2 Section A',count:80},
    {key:'b',label:'Ex.2 Section B',count:30},
    {key:'c',label:'Ex.2 Section C',count:30},
    {key:'d',label:'Ex.2 Section D',count:15},
    {key:'e',label:'Ex.2 Section E',count:10},
    {key:'f1',label:'Ex.2 Section F (Single Digit Integer)',count:15},
    {key:'f2',label:'Ex.2 Section F (Four Digit Integer)',count:20},
  ]},
  {id:'thermochem',name:'Thermochemistry',sections:[
    {key:'ex1',label:'Exercise 1 (JEE Mains)',count:80},
    {key:'a',label:'Ex.2 Section A',count:55},
    {key:'b',label:'Ex.2 Section B',count:15},
    {key:'c',label:'Ex.2 Section C',count:34},
    {key:'d',label:'Ex.2 Section D',count:10},
    {key:'e',label:'Ex.2 Section E',count:10},
    {key:'f1',label:'Ex.2 Section F (Single Digit Integer)',count:10},
    {key:'f2',label:'Ex.2 Section F (Four Digit Integer)',count:15},
  ]},
  {id:'chemeq',name:'Chemical Equilibrium',sections:[
    {key:'ex1',label:'Exercise 1 (JEE Mains)',count:85},
    {key:'a',label:'Ex.2 Section A',count:60},
    {key:'b',label:'Ex.2 Section B',count:25},
    {key:'c',label:'Ex.2 Section C',count:24},
    {key:'d',label:'Ex.2 Section D',count:10},
    {key:'e',label:'Ex.2 Section E',count:10},
    {key:'f1',label:'Ex.2 Section F (Single Digit Integer)',count:15},
    {key:'f2',label:'Ex.2 Section F (Four Digit Integer)',count:15},
  ]},
  {id:'ioniceq',name:'Ionic Equilibrium',sections:[
    {key:'ex1',label:'Exercise 1 (JEE Mains)',count:115},
    {key:'a',label:'Ex.2 Section A',count:80},
    {key:'b',label:'Ex.2 Section B',count:20},
    {key:'c',label:'Ex.2 Section C',count:35},
    {key:'d',label:'Ex.2 Section D',count:10},
    {key:'e',label:'Ex.2 Section E',count:5},
    {key:'f1',label:'Ex.2 Section F (Single Digit Integer)',count:10},
    {key:'f2',label:'Ex.2 Section F (Four Digit Integer)',count:10},
  ]},
  {id:'electro',name:'Electrochemistry',sections:[
    {key:'ex1',label:'Exercise 1 (JEE Mains)',count:125},
    {key:'a',label:'Ex.2 Section A',count:80},
    {key:'b',label:'Ex.2 Section B',count:15},
    {key:'c',label:'Ex.2 Section C',count:53},
    {key:'d',label:'Ex.2 Section D',count:15},
    {key:'e',label:'Ex.2 Section E',count:4},
    {key:'f1',label:'Ex.2 Section F (Single Digit Integer)',count:15},
    {key:'f2',label:'Ex.2 Section F (Four Digit Integer)',count:15},
  ]},
  {id:'solid',name:'Solid State',sections:[
    {key:'ex1',label:'Exercise 1 (JEE Mains)',count:90},
    {key:'a',label:'Ex.2 Section A',count:40},
    {key:'b',label:'Ex.2 Section B',count:25},
    {key:'c',label:'Ex.2 Section C',count:38},
    {key:'d',label:'Ex.2 Section D',count:20},
    {key:'e',label:'Ex.2 Section E',count:11},
    {key:'f1',label:'Ex.2 Section F (Single Digit Integer)',count:15},
    {key:'f2',label:'Ex.2 Section F (Four Digit Integer)',count:15},
  ]},
  {id:'liquid',name:'Liquid Solution',sections:[
    {key:'ex1',label:'Exercise 1 (JEE Mains)',count:98},
    {key:'a',label:'Ex.2 Section A',count:70},
    {key:'b',label:'Ex.2 Section B',count:25},
    {key:'c',label:'Ex.2 Section C',count:32},
    {key:'d',label:'Ex.2 Section D',count:10},
    {key:'e',label:'Ex.2 Section E',count:7},
    {key:'f1',label:'Ex.2 Section F (Single Digit Integer)',count:15},
    {key:'f2',label:'Ex.2 Section F (Four Digit Integer)',count:15},
  ]},
  {id:'kinetics',name:'Chemical Kinetics',sections:[
    {key:'ex1',label:'Exercise 1 (JEE Mains)',count:80},
    {key:'a',label:'Ex.2 Section A',count:75},
    {key:'b',label:'Ex.2 Section B',count:30},
    {key:'c',label:'Ex.2 Section C',count:56},
    {key:'d',label:'Ex.2 Section D',count:10},
    {key:'e',label:'Ex.2 Section E',count:10},
    {key:'f1',label:'Ex.2 Section F (Single Digit Integer)',count:25},
    {key:'f2',label:'Ex.2 Section F (Four Digit Integer)',count:25},
  ]},
  {id:'surface',name:'Surface Chemistry',sections:[
    {key:'ex1',label:'Exercise 1 (JEE Mains)',count:80},
    {key:'a',label:'Ex.2 Section A',count:30},
    {key:'b',label:'Ex.2 Section B',count:25},
    {key:'c',label:'Ex.2 Section C',count:20},
    {key:'d',label:'Ex.2 Section D',count:20},
    {key:'e',label:'Ex.2 Section E',count:4},
    {key:'f1',label:'Ex.2 Section F (Single Digit Integer)',count:10},
    {key:'f2',label:'Ex.2 Section F (Four Digit Integer)',count:10},
  ]},
  {id:'atomic',name:'Atomic Structure',sections:[
    {key:'ex1',label:'Exercise 1 (JEE Mains)',count:175},
    {key:'a',label:'Ex.2 Section A',count:110},
    {key:'b',label:'Ex.2 Section B',count:20},
    {key:'c',label:'Ex.2 Section C',count:46},
    {key:'d',label:'Ex.2 Section D',count:10},
    {key:'e',label:'Ex.2 Section E',count:10},
    {key:'f1',label:'Ex.2 Section F (Single Digit Integer)',count:10},
    {key:'f2',label:'Ex.2 Section F (Four Digit Integer)',count:10},
  ]},
  {id:'nuclear',name:'Nuclear Chemistry',sections:[
    {key:'ex1',label:'Exercise 1 (JEE Mains)',count:0},
    {key:'a',label:'Ex.2 Section A',count:65},
    {key:'b',label:'Ex.2 Section B',count:12},
    {key:'c',label:'Ex.2 Section C',count:25},
    {key:'d',label:'Ex.2 Section D',count:15},
    {key:'e',label:'Ex.2 Section E',count:5},
    {key:'f1',label:'Ex.2 Section F (Single Digit Integer)',count:5},
    {key:'f2',label:'Ex.2 Section F (Four Digit Integer)',count:10},
  ]},
];

// ══════════════════════════════════════════════════
// XP / LEVEL SYSTEM
// ══════════════════════════════════════════════════
// Overall XP ranks — deliberately topic-agnostic (not tied to any one
// chapter name) since this rank reflects total grind, not what you're
// currently studying. Which chapter you're on, and your LEVEL within it,
// is shown separately in the "ON DECK" badge — see CHAPTER_LEVELS below.
const RANKS = [
  {min:0,   name:'RECRUIT',     emoji:'🔬'},
  {min:100, name:'GRINDER',     emoji:'⚛️'},
  {min:300, name:'SOLVER',      emoji:'🧪'},
  {min:600, name:'STREAK KEEPER',emoji:'⚡'},
  {min:1000,name:'FAST TRACKER',emoji:'⚖️'},
  {min:1500,name:'OVERACHIEVER',emoji:'🔥'},
  {min:2200,name:'POWERHOUSE',  emoji:'🌩️'},
  {min:3000,name:'ELITE SOLVER',emoji:'🌀'},
  {min:4000,name:'JEE LEGEND',  emoji:'👑'},
  {min:5000,name:'CHEM GOD',    emoji:'🌟'},
];

function levelFromXP(xp){
  // Level = floor based on a quadratic curve: level n needs n*(n+1)*50 total XP
  let lv = 1;
  while(lv*(lv+1)*50 <= xp) lv++;
  return lv;
}
function xpForLevel(lv){ return lv*(lv+1)*50; }
function rankForXP(xp){
  let rank = RANKS[0];
  for(const r of RANKS){ if(xp >= r.min) rank=r; else break; }
  return rank;
}

// ══════════════════════════════════════════════════
// PER-CHAPTER LEVEL SYSTEM (Level 1-5 based on % of
// that chapter's weighted points solved)
// ══════════════════════════════════════════════════
const CHAPTER_LEVELS = [
  {min:0,  name:'NOVICE', emoji:'🌱', color:'#5c7699'},
  {min:20, name:'LEARNER',emoji:'📘', color:'#2ee6ff'},
  {min:40, name:'SOLVER', emoji:'⚙️', color:'#7c6bff'},
  {min:60, name:'EXPERT', emoji:'🎯', color:'#ffb020'},
  {min:80, name:'MASTER', emoji:'👑', color:'#ff4d6a'},
];
function chapterLevelInfo(chId){
  const {total,done}=weightedChapterCounts(chId);
  const pct = total>0 ? Math.min(100, (done/total)*100) : 0;
  let idx=0;
  CHAPTER_LEVELS.forEach((lv,i)=>{ if(pct>=lv.min) idx=i; });
  const cur=CHAPTER_LEVELS[idx];
  const next=CHAPTER_LEVELS[idx+1]||null;
  return {level:idx+1, name:cur.name, emoji:cur.emoji, color:cur.color, pct, nextMin:next?next.min:100, isMax:!next};
}
// The chapter currently "on deck": the chapter of today's locked-plan task
// if one exists, otherwise whatever chapter the person has open.
function currentFocusChapterId(){
  if(state.plan){
    const today=todayStr();
    const day=state.plan.days.find(d=>d.date===today);
    if(day && day.items.length) return day.items[0].chId;
  }
  return activeChapter;
}
function renderChapterFocusBadge(){
  const chId=currentFocusChapterId();
  const ch=CHAPTERS.find(c=>c.id===chId);
  if(!ch) return;
  const info=chapterLevelInfo(chId);
  const mainEl=document.getElementById('cfbMain');
  const tagEl=document.getElementById('cfbLvlTag');
  if(mainEl) mainEl.innerHTML=`${info.emoji} <b>${ch.name}</b>`;
  if(tagEl) tagEl.textContent=`LEVEL ${info.level}/5 — ${info.name} · ${Math.round(info.pct)}% of chapter`;
}
function renderChapterLevelsGraph(){
  const wrap=document.getElementById('chapterLevelsGraph');
  if(!wrap) return;
  const cols=orderedChapters().map(ch=>{
    const info=chapterLevelInfo(ch.id);
    const shortName=ch.name.length>14?ch.name.slice(0,13)+'…':ch.name;
    return `<div class="chlvl-col" title="${ch.name} — Level ${info.level}/5 (${info.name}), ${Math.round(info.pct)}% complete">
      <div class="chlvl-lv-tag"><span class="em">${info.emoji}</span> Lv${info.level}</div>
      <div class="chlvl-bar-track"><div class="chlvl-bar-fill" data-h="${Math.max(2,info.pct)}" style="height:0%;background:${info.color};box-shadow:0 0 8px ${info.color}88;"></div></div>
      <div class="chlvl-pct">${Math.round(info.pct)}%</div>
      <div class="chlvl-name">${shortName}</div>
    </div>`;
  }).join('');
  const legend=CHAPTER_LEVELS.map((lv,i)=>`<div class="chlvl-legend-item"><span class="chlvl-legend-dot" style="background:${lv.color};"></span>Lv${i+1} ${lv.name} (${lv.min}%+)</div>`).join('');
  wrap.innerHTML=`<div class="chlvl-grid">${cols}</div><div class="chlvl-legend">${legend}</div>`;
  requestAnimationFrame(()=>{
    wrap.querySelectorAll('.chlvl-bar-fill').forEach(el=>{ el.style.height=el.dataset.h+'%'; });
  });
}

// ══════════════════════════════════════════════════
// ACHIEVEMENTS
// ══════════════════════════════════════════════════
const ACHIEVEMENTS = [
  {id:'first_q',  icon:'🎯', name:'First Strike',  desc:'Solve 1st question',   check:(s,raw)=> raw.done>=1},
  {id:'q50',      icon:'💫', name:'50 Qs Done',    desc:'Solve 50 questions',   check:(s,raw)=> raw.done>=50},
  {id:'q100',     icon:'💯', name:'Centurion',     desc:'Solve 100 questions',  check:(s,raw)=> raw.done>=100},
  {id:'q250',     icon:'🌊', name:'Wave Rider',    desc:'250 questions',        check:(s,raw)=> raw.done>=250},
  {id:'q500',     icon:'🔥', name:'On Fire',       desc:'500 questions',        check:(s,raw)=> raw.done>=500},
  {id:'q1000',    icon:'💥', name:'Destroyer',     desc:'1000 questions',       check:(s,raw)=> raw.done>=1000},
  {id:'streak3',  icon:'⚡', name:'3-Day Streak',  desc:'3 days in a row',      check:(s)=> s.streak.current>=3},
  {id:'streak7',  icon:'🌟', name:'Week Warrior',  desc:'7-day streak',         check:(s)=> s.streak.current>=7},
  {id:'streak14', icon:'🏆', name:'Fortnight Fire',desc:'14-day streak',        check:(s)=> s.streak.current>=14},
  {id:'streak30', icon:'👑', name:'Month Beast',   desc:'30-day streak',        check:(s)=> s.streak.current>=30},
  {id:'ch1',      icon:'📗', name:'Chapter 1 Done',desc:'Complete any chapter', check:(s,raw,w)=>CHAPTERS.some(ch=>{const{total,done}=weightedChapterCounts(ch.id);return total>0&&done>=total;})},
  {id:'ch5',      icon:'📚', name:'5 Chapters',    desc:'Complete 5 chapters',  check:(s,raw,w)=>CHAPTERS.filter(ch=>{const{total,done}=weightedChapterCounts(ch.id);return total>0&&done>=total;}).length>=5},
  {id:'half',     icon:'🌓', name:'Halfway There', desc:'50% of book done',     check:(s,raw,w)=> w.total>0 && w.done/w.total>=0.5},
  {id:'pct75',    icon:'🌕', name:'Almost There',  desc:'75% of book done',     check:(s,raw,w)=> w.total>0 && w.done/w.total>=0.75},
  {id:'done',     icon:'🎓', name:'JEE READY',     desc:'100% complete!',       check:(s,raw,w)=> w.total>0 && w.done>=w.total},
  {id:'lv5',      icon:'⭐', name:'Level 5',       desc:'Reach level 5',        check:(s)=> levelFromXP(s.xp||0)>=5},
  {id:'lv10',     icon:'🌠', name:'Level 10',      desc:'Reach level 10',       check:(s)=> levelFromXP(s.xp||0)>=10},
];

// ══════════════════════════════════════════════════
// DAILY MISSIONS (regenerated each day)
// ══════════════════════════════════════════════════
function getDailyMissions(dateStr){
  // Seed pseudo-random with date so missions are stable per day
  function seededRand(seed){
    let s = seed;
    return ()=>{ s = (s*9301+49297)%233280; return s/233280; };
  }
  const seed = dateStr.split('-').reduce((a,b)=>a*100+parseInt(b),0);
  const rand = seededRand(seed);

  const {total:wTotal} = weightedTotalCounts();
  const remaining = wTotal - weightedTotalCounts().done; // approximate for mission gen

  const pool = [
    {icon:'🎯',title:'Quick Start',    sub:'Solve 10 questions today',     target:10,  xp:50,  key:'daily_q10'},
    {icon:'💪',title:'Grind Mode',     sub:'Solve 25 questions today',     target:25,  xp:120, key:'daily_q25'},
    {icon:'🔥',title:'Beast Mode',     sub:'Solve 50 questions today',     target:50,  xp:250, key:'daily_q50'},
    {icon:'⚡',title:'Section Clear',  sub:'Complete any 1 full section',  target:1,   xp:150, key:'daily_sec1', type:'section'},
    {icon:'🌊',title:'Double Section', sub:'Complete 2 full sections',     target:2,   xp:300, key:'daily_sec2', type:'section'},
    {icon:'🧠',title:'Chapter Push',   sub:'Hit 10 pts in current chapter',target:10,  xp:80,  key:'daily_ch10', type:'chapter_pts'},
    {icon:'🌟',title:'Comeback',       sub:'Solve at least 5 questions',   target:5,   xp:30,  key:'daily_q5'},
    {icon:'🚀',title:'Streak Keep',    sub:'Solve anything (keep streak)', target:1,   xp:20,  key:'daily_q1'},
  ];

  const picked = [];
  const indices = [];
  while(picked.length < 3){
    const i = Math.floor(rand() * pool.length);
    if(!indices.includes(i)){ indices.push(i); picked.push({...pool[i]}); }
  }
  return picked;
}

// ══════════════════════════════════════════════════
// STATE
// ══════════════════════════════════════════════════
const STORAGE_KEY = 'nkChemTracker_v2';
let state = loadState();
let activeChapter = CHAPTERS[0].id;
let prevLevel = levelFromXP(state.xp||0);

function defaultState(){
  const ticks={},skipped={},chapterSkipped={},customCounts={},good={};
  CHAPTERS.forEach(ch=>{
    ticks[ch.id]={};skipped[ch.id]={};chapterSkipped[ch.id]=false;customCounts[ch.id]={};good[ch.id]={};
    ch.sections.forEach(s=>{ ticks[ch.id][s.key]=new Array(s.count).fill(false); skipped[ch.id][s.key]=false; good[ch.id][s.key]=new Array(s.count).fill(false); });
  });
  return {ticks,skipped,chapterSkipped,customCounts,good,
    playerName:null,
    targetYear:'2027',
    celebratedChapters:[],
    accentTheme:'blue',
    soundOn:true,
    activity:{},streak:{current:0,longest:0,lastDate:null},
    deadline:null,log:{},qXP:{},effort:{},dailyTarget:null,
    xp:0, achievements:[],
    taskCompletion:{}, taskStreak:{current:0,longest:0,lastDate:null}, taskXPAwarded:{}, taskAutoCompletion:{},
    chapterOrder:CHAPTERS.map(c=>c.id),
    plan:null, // locked study plan: {startDate,dailyQuota,generatedAt,days:[{dayOffset,date,items,pts,qCount}]}
    sessions:[], // completed timer sessions: {date,startTs,endTs,durationSec,questions,chId}
    activeSession:null, // {startTs, startDoneRaw} while a timer is running
    milestones:[], // chapter milestones: [{id,date,label,chapterIds:[]}]
  };
}

function logKey(chId,secKey,i){ return chId+'|'+secKey+'|'+i; }

function pruneLogForSection(chId,secKey,newCount){
  Object.keys(state.log).forEach(k=>{
    const parts=k.split('|');
    if(parts[0]===chId && parts[1]===secKey && parseInt(parts[2],10)>=newCount) delete state.log[k];
  });
  if(state.qXP){
    Object.keys(state.qXP).forEach(k=>{
      const parts=k.split('|');
      if(parts[0]===chId && parts[1]===secKey && parseInt(parts[2],10)>=newCount) delete state.qXP[k];
    });
  }
}

function effCount(chId,secKey){
  const def=CHAPTERS.find(c=>c.id===chId).sections.find(s=>s.key===secKey).count;
  const custom=state.customCounts&&state.customCounts[chId]&&state.customCounts[chId][secKey];
  return (typeof custom==='number'&&custom>=0)?custom:def;
}

function normalizeTicksFor(target){
  target.good=target.good||{};
  CHAPTERS.forEach(ch=>{
    target.good[ch.id]=target.good[ch.id]||{};
    ch.sections.forEach(s=>{
      const custom=target.customCounts&&target.customCounts[ch.id]&&target.customCounts[ch.id][s.key];
      const n=(typeof custom==='number'&&custom>=0)?custom:s.count;
      const arr=target.ticks[ch.id][s.key]||[];
      if(arr.length<n){ while(arr.length<n) arr.push(false); }
      else if(arr.length>n){ arr.length=n; }
      target.ticks[ch.id][s.key]=arr;
      const garr=target.good[ch.id][s.key]||[];
      if(garr.length<n){ while(garr.length<n) garr.push(false); }
      else if(garr.length>n){ garr.length=n; }
      target.good[ch.id][s.key]=garr;
    });
  });
}
function normalizeTicks(){ normalizeTicksFor(state); }

// ══════════════════════════════════════════════════
// CUSTOM CHAPTER ORDER (drives the study planner & nav list)
// ══════════════════════════════════════════════════
function normalizeChapterOrderFor(target){
  const validIds=CHAPTERS.map(c=>c.id);
  let order=Array.isArray(target.chapterOrder)?target.chapterOrder.filter(id=>validIds.includes(id)):[];
  order=[...new Set(order)];
  validIds.forEach(id=>{ if(!order.includes(id)) order.push(id); });
  target.chapterOrder=order;
}
function normalizeChapterOrder(){ normalizeChapterOrderFor(state); }
function orderedChapters(){
  normalizeChapterOrder();
  return state.chapterOrder.map(id=>CHAPTERS.find(c=>c.id===id));
}
function moveChapterInOrder(chId,dir){
  normalizeChapterOrder();
  const arr=state.chapterOrder;
  const i=arr.indexOf(chId);
  const j=i+dir;
  if(i<0||j<0||j>=arr.length) return;
  [arr[i],arr[j]]=[arr[j],arr[i]];
  saveState();renderAll();renderReorderPanel();
}
function reorderChapterTo(chId,targetIndex){
  normalizeChapterOrder();
  const arr=state.chapterOrder;
  const i=arr.indexOf(chId);
  if(i<0) return;
  arr.splice(i,1);
  arr.splice(Math.max(0,Math.min(targetIndex,arr.length)),0,chId);
  saveState();renderAll();renderReorderPanel();
}
function resetChapterOrder(){
  if(!confirm('Reset chapter order back to the default (book) order?')) return;
  state.chapterOrder=CHAPTERS.map(c=>c.id);
  saveState();renderAll();renderReorderPanel();
}

function loadState(){
  try{
    const raw=localStorage.getItem(STORAGE_KEY);
    // also try old key for migration
    const rawOld = raw ? null : localStorage.getItem('nkChemTracker_v1');
    const src = raw||rawOld;
    if(!src) return defaultState();
    const parsed=JSON.parse(src);
    const base=defaultState();
    CHAPTERS.forEach(ch=>{
      ch.sections.forEach(s=>{
        if(parsed.ticks&&parsed.ticks[ch.id]&&parsed.ticks[ch.id][s.key])
          base.ticks[ch.id][s.key]=parsed.ticks[ch.id][s.key].map(v=>!!v);
        if(parsed.good&&parsed.good[ch.id]&&parsed.good[ch.id][s.key])
          base.good[ch.id][s.key]=parsed.good[ch.id][s.key].map(v=>!!v);
        if(parsed.skipped&&parsed.skipped[ch.id]&&typeof parsed.skipped[ch.id][s.key]!=='undefined')
          base.skipped[ch.id][s.key]=!!parsed.skipped[ch.id][s.key];
      });
      if(parsed.chapterSkipped&&typeof parsed.chapterSkipped[ch.id]!=='undefined')
        base.chapterSkipped[ch.id]=!!parsed.chapterSkipped[ch.id];
      if(parsed.customCounts&&parsed.customCounts[ch.id])
        base.customCounts[ch.id]=Object.assign({},parsed.customCounts[ch.id]);
    });
    base.playerName=parsed.playerName||null;
    base.targetYear=parsed.targetYear||'2027';
    base.celebratedChapters=Array.isArray(parsed.celebratedChapters)?parsed.celebratedChapters.slice():[];
    base.accentTheme=parsed.accentTheme||'blue';
    base.soundOn=(typeof parsed.soundOn==='boolean')?parsed.soundOn:true;
    base.activity=parsed.activity||{};
    base.streak=parsed.streak||{current:0,longest:0,lastDate:null};
    base.deadline=parsed.deadline||null;
    base.log=parsed.log||{};
    base.qXP=parsed.qXP||{};
    base.effort=parsed.effort||{};
    base.dailyTarget=(typeof parsed.dailyTarget==='number')?parsed.dailyTarget:null;
    base.xp=parsed.xp||0;
    base.achievements=parsed.achievements||[];
    base.taskCompletion=parsed.taskCompletion||{};
    base.taskStreak=parsed.taskStreak||{current:0,longest:0,lastDate:null};
    base.taskXPAwarded=parsed.taskXPAwarded||{};
    base.taskAutoCompletion=parsed.taskAutoCompletion||{};
    base.chapterOrder=Array.isArray(parsed.chapterOrder)?parsed.chapterOrder.slice():base.chapterOrder;
    base.conquered=parsed.conquered||{};
    base.chapterJourney=parsed.chapterJourney||{order:[],completed:[]};
    base.plan=(parsed.plan&&Array.isArray(parsed.plan.days))?parsed.plan:null;
    base.sessions=Array.isArray(parsed.sessions)?parsed.sessions.slice():[];
    base.activeSession=(parsed.activeSession&&typeof parsed.activeSession.startTs==='number')?parsed.activeSession:null;
    base.milestones=Array.isArray(parsed.milestones)?parsed.milestones.slice():[];
    normalizeTicksFor(base);
    normalizeChapterOrderFor(base);
    return base;
  }catch(e){ return defaultState(); }
}

function saveState(){ localStorage.setItem(STORAGE_KEY,JSON.stringify(state)); }

function todayStr(){
  const d=new Date();
  return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
}
function dateStrOffset(n){
  const d=new Date();d.setDate(d.getDate()-n);
  return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
}
function dateStrOffsetFwd(n){
  const d=new Date();d.setDate(d.getDate()+n);
  return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
}

function registerActivity(delta){
  const t=todayStr();
  state.activity[t]=(state.activity[t]||0)+delta;
  if(state.activity[t]<0) state.activity[t]=0;
  updateStreak();
}

function updateStreak(){
  let streak=0,i=0;
  while(true){
    const d=dateStrOffset(i);
    if((state.activity[d]||0)>0){ streak++;i++; } else break;
  }
  if(streak===0&&(state.activity[dateStrOffset(1)]||0)>0){
    let s2=0,j=1;
    while((state.activity[dateStrOffset(j)]||0)>0){ s2++;j++; }
    streak=s2;
  }
  state.streak.current=streak;
  if(streak>(state.streak.longest||0)) state.streak.longest=streak;
  state.streak.lastDate=todayStr();
}

function isTaskDone(dateStr){ return !!(state.taskCompletion&&state.taskCompletion[dateStr]); }

function updateTaskStreak(){
  let streak=0,i=0;
  while(true){
    const d=dateStrOffset(i);
    if(isTaskDone(d)){ streak++;i++; } else break;
  }
  if(streak===0&&isTaskDone(dateStrOffset(1))){
    let s2=0,j=1;
    while(isTaskDone(dateStrOffset(j))){ s2++;j++; }
    streak=s2;
  }
  state.taskStreak=state.taskStreak||{current:0,longest:0,lastDate:null};
  state.taskStreak.current=streak;
  if(streak>(state.taskStreak.longest||0)) state.taskStreak.longest=streak;
  state.taskStreak.lastDate=todayStr();
}

function toggleTaskDone(dateStr){
  state.taskCompletion=state.taskCompletion||{};
  state.taskXPAwarded=state.taskXPAwarded||{};
  state.taskAutoCompletion=state.taskAutoCompletion||{};
  const wasDone=isTaskDone(dateStr);
  if(wasDone){
    delete state.taskCompletion[dateStr];
    delete state.taskAutoCompletion[dateStr];
  } else {
    state.taskCompletion[dateStr]=true;
    delete state.taskAutoCompletion[dateStr]; // this is a manual mark, not an auto one
    if(!state.taskXPAwarded[dateStr]){
      state.taskXPAwarded[dateStr]=true;
      awardXP(25);
    }
  }
  updateTaskStreak();
  checkAchievements();
  saveState();renderAll();
}

// Auto-marks TODAY'S TASK done the moment the locked plan's quota for today
// is fully ticked off, and auto-undoes that (refunding the XP) if a mistaken
// click drops today back below the day's plan quota. Never touches a
// manually-set completion — only what this function itself set.
function autoUpdateTaskCompletion(){
  if(!state.plan) return;
  const today=todayStr();
  state.taskAutoCompletion=state.taskAutoCompletion||{};
  state.taskXPAwarded=state.taskXPAwarded||{};
  const day=state.plan.days.find(d=>d.date===today);
  if(!day) return;
  const {total,done}=planDayProgress(day);
  if(total<=0) return;
  const complete=done>=total;
  if(complete && !isTaskDone(today)){
    state.taskCompletion[today]=true;
    state.taskAutoCompletion[today]=true;
    if(!state.taskXPAwarded[today]){ state.taskXPAwarded[today]=true; awardXP(25); }
    updateTaskStreak();
    showToast("✅ Today's task auto-completed!",'ach');
  } else if(!complete && isTaskDone(today) && state.taskAutoCompletion[today]){
    delete state.taskCompletion[today];
    delete state.taskAutoCompletion[today];
    if(state.taskXPAwarded[today]){ delete state.taskXPAwarded[today]; awardXP(-25); }
    updateTaskStreak();
  }
}

// ══════════════════════════════════════════════════
// COUNTING
// ══════════════════════════════════════════════════
function isSkipped(chId,secKey){ return !!(state.skipped[chId]&&state.skipped[chId][secKey]); }
function isChapterSkipped(chId){ return !!(state.chapterSkipped&&state.chapterSkipped[chId]); }

function totalCounts(){
  let total=0,done=0;
  CHAPTERS.forEach(ch=>{
    if(isChapterSkipped(ch.id)) return;
    ch.sections.forEach(s=>{
      if(isSkipped(ch.id,s.key)) return;
      total+=effCount(ch.id,s.key);
      done+=state.ticks[ch.id][s.key].filter(Boolean).length;
    });
  });
  return {total,done};
}

function chapterCounts(chId){
  const ch=CHAPTERS.find(c=>c.id===chId);
  let total=0,done=0;
  if(isChapterSkipped(chId)) return {total,done};
  ch.sections.forEach(s=>{
    if(isSkipped(ch.id,s.key)) return;
    total+=effCount(ch.id,s.key);
    done+=state.ticks[ch.id][s.key].filter(Boolean).length;
  });
  return {total,done};
}

function effortFor(secKey){
  const v=state.effort&&state.effort[secKey];
  return (typeof v==='number'&&v>=0)?v:1;
}

function weightedTotalCounts(){
  let total=0,done=0;
  CHAPTERS.forEach(ch=>{
    if(isChapterSkipped(ch.id)) return;
    ch.sections.forEach(s=>{
      if(isSkipped(ch.id,s.key)) return;
      const m=effortFor(s.key);
      total+=effCount(ch.id,s.key)*m;
      done+=state.ticks[ch.id][s.key].filter(Boolean).length*m;
    });
  });
  return {total,done};
}

function weightedChapterCounts(chId){
  const ch=CHAPTERS.find(c=>c.id===chId);
  let total=0,done=0;
  if(isChapterSkipped(chId)) return {total,done};
  ch.sections.forEach(s=>{
    if(isSkipped(ch.id,s.key)) return;
    const m=effortFor(s.key);
    total+=effCount(ch.id,s.key)*m;
    done+=state.ticks[ch.id][s.key].filter(Boolean).length*m;
  });
  return {total,done};
}

function fmtNum(n){ return (Math.round(n*10)/10).toString(); }

// ══════════════════════════════════════════════════
// XP SYSTEM
// ══════════════════════════════════════════════════
function awardXP(amount){
  const oldLevel=levelFromXP(state.xp||0);
  state.xp=Math.max(0,(state.xp||0)+amount);
  const newLevel=levelFromXP(state.xp);
  saveState();
  renderXPBar();
  if(newLevel>oldLevel && newLevel>prevLevel){
    prevLevel=newLevel;
    showLevelUp(newLevel);
  } else if(newLevel<prevLevel){
    // XP was undone (mistaken click reversed) — drop the tracked level so a
    // future level-up can flash again instead of being silently swallowed.
    prevLevel=newLevel;
  }
}

function xpForQuestion(secKey){
  // XP per question based on section type
  const mult=effortFor(secKey);
  const base={'ex1':2,'a':3,'b':4,'c':4,'d':5,'e':5,'f1':6,'f2':6};
  return Math.round((base[secKey]||3)*Math.max(0.5,mult));
}

function renderXPBar(){
  const xp=state.xp||0;
  const lv=levelFromXP(xp);
  const thisLvXP=xpForLevel(lv-1);
  const nextLvXP=xpForLevel(lv);
  const progress=nextLvXP>thisLvXP?(xp-thisLvXP)/(nextLvXP-thisLvXP)*100:100;
  const rank=rankForXP(xp);

  document.getElementById('hdrLevel').textContent=lv;
  document.getElementById('xpCurrent').textContent=xp+' XP';
  document.getElementById('xpNext').textContent='→ '+nextLvXP+' XP';
  document.getElementById('xpBarFill').style.width=Math.min(100,progress)+'%';
  document.getElementById('xpRankName').textContent=rank.emoji+' '+rank.name;
  if(document.getElementById('brandGreeting')) renderGreeting();
}

// ══════════════════════════════════════════════════
// TOASTS & LEVEL UP
// ══════════════════════════════════════════════════
function showToast(msg, type=''){
  const c=document.getElementById('toastContainer');
  const t=document.createElement('div');
  t.className='toast'+(type?' '+type:'');
  t.textContent=msg;
  c.appendChild(t);
  setTimeout(()=>t.remove(),3200);
}

function showLevelUp(lv){
  const rank=rankForXP(state.xp||0);
  const fl=document.getElementById('levelFlash');
  document.getElementById('lfLevel').textContent='LV '+lv;
  document.getElementById('lfRank').textContent=rank.emoji+' '+rank.name;
  fl.classList.add('show');
  setTimeout(()=>fl.classList.remove('show'),2200);
  showToast('⚡ LEVEL UP! Now LV '+lv+' — '+rank.name,'xp');
  playSound('levelup');
  fireConfetti();
}

// ══════════════════════════════════════════════════
// ACHIEVEMENTS CHECK
// ══════════════════════════════════════════════════
function checkAchievements(){
  const raw=totalCounts();
  const w=weightedTotalCounts();
  ACHIEVEMENTS.forEach(a=>{
    if(state.achievements.includes(a.id)) return;
    if(a.check(state,raw,w)){
      state.achievements.push(a.id);
      showToast('🏆 ACHIEVEMENT: '+a.name,'ach');
      playSound('achievement');
      awardXP(100);
    }
  });
}

// ══════════════════════════════════════════════════
// MISSIONS
// ══════════════════════════════════════════════════
function getTodayActivity(){
  return state.activity[todayStr()]||0;
}

function getMissionProgress(mission){
  const today=todayStr();
  let prog=0;

  if(mission.type==='section'){
    // count sections completed today (all questions in section done)
    CHAPTERS.forEach(ch=>{
      ch.sections.forEach(s=>{
        const count=effCount(ch.id,s.key);
        if(count===0||isSkipped(ch.id,s.key)) return;
        const done=state.ticks[ch.id][s.key].filter(Boolean).length;
        if(done>=count) prog++;
      });
    });
  } else {
    prog=getTodayActivity();
  }
  return prog;
}

function renderMissions(){
  const missions=getDailyMissions(todayStr());
  const strip=document.getElementById('missionsStrip');
  strip.innerHTML='';
  missions.forEach(m=>{
    const prog=Math.min(getMissionProgress(m),m.target);
    const pct=Math.round(prog/m.target*100);
    const done=prog>=m.target;
    const card=document.createElement('div');
    card.className='mission-card'+(done?' complete':'');
    card.innerHTML=`
      <div class="mc-icon">${done?'✅':m.icon}</div>
      <div class="mc-body">
        <div class="mc-title">${m.title}${done?' — COMPLETE!':''}</div>
        <div class="mc-sub">${m.sub}</div>
        <div class="mc-bar"><div class="mc-fill" style="width:${pct}%"></div></div>
        <div class="mc-xp">+${m.xp} XP${done?' (earned!)':' reward'} · ${prog}/${m.target}</div>
      </div>
    `;
    strip.appendChild(card);
  });
}

// Award XP for completed missions (idempotent via state.completedMissions)
function checkMissionXP(){
  state.completedMissions=state.completedMissions||{};
  const today=todayStr();
  const missions=getDailyMissions(today);
  missions.forEach(m=>{
    const key=today+'_'+m.key;
    if(state.completedMissions[key]) return;
    const prog=getMissionProgress(m);
    if(prog>=m.target){
      state.completedMissions[key]=true;
      awardXP(m.xp);
      // don't toast here — already toasted via renderMissions + user sees it
    }
  });
}

// ══════════════════════════════════════════════════
// RENDER FUNCTIONS
// ══════════════════════════════════════════════════
function renderAchievements(){
  const grid=document.getElementById('achievementsGrid');
  grid.innerHTML='';
  ACHIEVEMENTS.forEach(a=>{
    const unlocked=state.achievements.includes(a.id);
    const div=document.createElement('div');
    div.className='ach-item'+(unlocked?' unlocked':'');
    div.title=a.desc+(unlocked?' ✓':'');
    div.innerHTML=`<div class="ach-icon">${a.icon}</div><div class="ach-name">${a.name}</div>`;
    grid.appendChild(div);
  });
}

function renderChapterList(){
  const container=document.getElementById('chItems');
  container.innerHTML='';
  const etaMap=chapterPlannerDates();
  orderedChapters().forEach(ch=>{
    const skipped=isChapterSkipped(ch.id);
    const {total,done}=weightedChapterCounts(ch.id);
    const raw=chapterCounts(ch.id);
    const pct=total?Math.round(done/total*100):0;
    const isDone=pct===100&&total>0;
    if(isDone && !skipped){
      state.celebratedChapters=state.celebratedChapters||[];
      if(!state.celebratedChapters.includes(ch.id)){
        state.celebratedChapters.push(ch.id);
        fireConfetti();
        playSound('complete');
        showToast('🎉 '+ch.name+' — CHAPTER COMPLETE!','ach');
        saveState();
      }
    }
    const div=document.createElement('div');
    div.className='ch-item'+(ch.id===activeChapter?' active':'')+(isDone?' done':'')+(skipped?' chskip':'');
    div.title=skipped?'':`${raw.done}/${raw.total} questions`;
    let badge='';
    if(skipped) badge='<span class="ch-badge">SKIP</span>';
    else if(isDone) badge='<span class="ch-badge done-badge">✓ DONE</span>';
    let etaLine='';
    if(!skipped && !isDone && etaMap[ch.id]){
      const finishing=(state.plan?'Finishing':'On track for')+' '+formatDateShort(etaMap[ch.id]);
      etaLine=`<div class="ci-eta"><span class="ci-eta-dot"></span>${finishing}</div>`;
    }
    div.innerHTML=`
      <div class="ci-row">
        <span class="ci-name">${ch.name}${badge}</span>
        <span class="ci-pts">${skipped?'—':fmtNum(done)+'/'+fmtNum(total)}</span>
      </div>
      ${etaLine}
      <div class="bar"><div class="fill" style="width:${pct}%"></div></div>
    `;
    div.onclick=()=>{ activeChapter=ch.id; renderAll(); };
    container.appendChild(div);
  });
}

function renderMain(){
  const ch=CHAPTERS.find(c=>c.id===activeChapter);
  const chSkipped=isChapterSkipped(ch.id);
  const {total,done}=weightedChapterCounts(ch.id);
  const raw=chapterCounts(ch.id);
  document.getElementById('chTitle').textContent=ch.name+(chSkipped?' [SKIPPED]':'');
  document.getElementById('chCount').textContent=chSkipped?'excluded from totals'
    :`${fmtNum(done)} / ${fmtNum(total)} pts  (${raw.done}/${raw.total} Q)`;

  const skipChBtn=document.getElementById('skipChBtn');
  skipChBtn.textContent=chSkipped?'⊘ INCLUDE CHAPTER':'⊘ SKIP CHAPTER';
  document.getElementById('markAllBtn').disabled=chSkipped;
  document.getElementById('clearChBtn').disabled=chSkipped;

  const sectionsEl=document.getElementById('sections');
  sectionsEl.innerHTML='';

  if(chSkipped){
    sectionsEl.innerHTML=`<div class="chapter-skip-note">This chapter is marked as SKIPPED and excluded from all totals. Hit "INCLUDE CHAPTER" above to bring it back.</div>`;
    return;
  }

  ch.sections.forEach(s=>{
    const count=effCount(ch.id,s.key);
    const arr=state.ticks[ch.id][s.key];
    // The active workspace is intentionally a pure TODO queue: conquered questions never render here.
    const pendingCount=arr.reduce((n,v)=>n+(v?0:1),0);
    const sdone=arr.filter(Boolean).length;
    const skipped=isSkipped(ch.id,s.key);
    const mult=effortFor(s.key);
    const block=document.createElement('div');
    block.className='section-block'+(skipped?' skipped':'');
    block.innerHTML=`
      <div class="s-head">
        <div class="s-left">
          <span class="s-name">${s.label}${skipped?'<span class="badge-skip" style="margin-left:8px;">SKIPPED</span>':''}</span>
          <div class="s-meta">
            <span class="s-pending">${pendingCount} LEFT</span>
            <span style="opacity:0.55;">${sdone}/${count} conquered · ×${fmtNum(mult)}</span>
            <button class="btn sm" data-ch="${ch.id}" data-sec="${s.key}" title="Edit question count"
              style="border-color:var(--text-dim);color:var(--text-dim);" onclick="editCount(this)">✎ EDIT</button>
          </div>
        </div>
        <div class="s-actions">
          <button class="btn sm sec-mark-btn" data-ch="${ch.id}" data-sec="${s.key}" ${skipped?'disabled':''}>✓ MARK DONE</button>
          <button class="btn sm danger sec-clear-btn" data-ch="${ch.id}" data-sec="${s.key}" ${skipped?'disabled':''}>✕ CLEAR</button>
          <button class="btn sm amber sec-skip-btn" data-ch="${ch.id}" data-sec="${s.key}">${skipped?'UNSKIP':'⊘ SKIP'}</button>
        </div>
      </div>
      <div class="qgrid" data-ch="${ch.id}" data-sec="${s.key}" style="${skipped||count===0?'display:none;':''}"></div>
      ${count===0&&!skipped?'<div class="queue-empty">No questions yet — hit EDIT above.</div>':(!skipped&&pendingCount===0?'<div class="queue-empty queue-clear"><span>✓</span><b>SECTION CONQUERED</b><small>Everything here is done. Keep moving.</small></div>':'')}
    `;
    const grid=block.querySelector('.qgrid');
    const goodArr=(state.good[ch.id]&&state.good[ch.id][s.key])||[];
    for(let i=0;i<count;i++){
      if(arr[i]) continue;
      const box=document.createElement('div');
      box.className='qbox'+(arr[i]?' done':'')+(goodArr[i]?' good':'');
      box.title=goodArr[i]?'★ Marked GOOD — right-click to unmark':'Right-click to mark as GOOD';
      box.textContent=i+1;
      box.onclick=()=>{
        const k=logKey(ch.id,s.key,i);
        const wasDone=!!arr[i];
        arr[i]=!arr[i];
        playSound('tick');
        if(arr[i]){
          // Completed questions leave the active queue permanently and fly into Conquered.
          box.classList.remove('bm-pop');
          void box.offsetWidth; box.classList.add('bm-pop');
          const amt=xpForQuestion(s.key);
          state.qXP[k]=amt;
          state.log[k]=todayStr();
          registerActivity(1);
          awardXP(amt);
          bmMarkComplete(ch.id,s.key,i);
          bmFlyToConquered(box);
        } else {
          // Restore a conquered question back into the active queue.
          const amt=(state.qXP&&state.qXP[k])||xpForQuestion(s.key);
          delete state.qXP[k];
          delete state.log[k];
          registerActivity(-1);
          awardXP(-amt);
          bmSetConquered(ch.id,s.key,i,false);
        }
        checkAchievements();
        checkMissionXP();
        autoUpdateTaskCompletion();
        saveState();
        // Give the transfer animation time to finish before the active queue reflows.
        if(!wasDone && arr[i]) setTimeout(()=>renderAll(), 360);
        else renderAll();
      };
      box.oncontextmenu=(e)=>{
        e.preventDefault();
        state.good[ch.id]=state.good[ch.id]||{};
        const gArr=state.good[ch.id][s.key]||(state.good[ch.id][s.key]=new Array(count).fill(false));
        gArr[i]=!gArr[i];
        saveState();
        renderAll();
        return false;
      };
      grid.appendChild(box);
    }
    sectionsEl.appendChild(block);
  });

  sectionsEl.querySelectorAll('.sec-mark-btn').forEach(btn=>{
    btn.onclick=()=>{
      const chId=btn.dataset.ch,secKey=btn.dataset.sec;
      const arr=state.ticks[chId][secKey];
      let added=0,xpGain=0;const t=todayStr();
      for(let i=0;i<arr.length;i++){
        if(!arr[i]){
          arr[i]=true;added++;
          const k=logKey(chId,secKey,i);
          state.log[k]=t;
          const amt=xpForQuestion(secKey);
          state.qXP[k]=amt;
          xpGain+=amt;
        }
      }
      if(added>0){ registerActivity(added); awardXP(xpGain); }
      checkAchievements();checkMissionXP();autoUpdateTaskCompletion();saveState();renderAll();
    };
  });
  sectionsEl.querySelectorAll('.sec-clear-btn').forEach(btn=>{
    btn.onclick=()=>{
      const chId=btn.dataset.ch,secKey=btn.dataset.sec;
      const arr=state.ticks[chId][secKey];
      let removed=0,xpLoss=0;
      for(let i=0;i<arr.length;i++){
        if(arr[i]){
          arr[i]=false;removed++;
          const k=logKey(chId,secKey,i);
          xpLoss+=(state.qXP&&state.qXP[k])||xpForQuestion(secKey);
          delete state.qXP[k];
          delete state.log[k];
        }
      }
      registerActivity(-removed);
      if(xpLoss>0) awardXP(-xpLoss);
      autoUpdateTaskCompletion();saveState();renderAll();
    };
  });
  sectionsEl.querySelectorAll('.sec-skip-btn').forEach(btn=>{
    btn.onclick=()=>{
      const chId=btn.dataset.ch,secKey=btn.dataset.sec;
      state.skipped[chId][secKey]=!state.skipped[chId][secKey];
      saveState();renderAll();
    };
  });
}

function editCount(btn){
  const chId=btn.dataset.ch,secKey=btn.dataset.sec;
  const current=effCount(chId,secKey);
  const input=prompt('Set number of questions for this section:',current);
  if(input===null) return;
  const n=parseInt(input,10);
  if(isNaN(n)||n<0){ alert('Enter a whole number ≥ 0.'); return; }
  const arr=state.ticks[chId][secKey];
  if(n<arr.length){
    const losing=arr.slice(n).some(Boolean);
    if(losing&&!confirm('Reducing the count will discard progress on removed questions. Continue?')) return;
  }
  state.customCounts[chId]=state.customCounts[chId]||{};
  state.customCounts[chId][secKey]=n;
  pruneLogForSection(chId,secKey,n);
  normalizeTicks();saveState();renderAll();
}

// ══════════════════════════════════════════════════
// NUMBER COUNT-UP ANIMATION
// ══════════════════════════════════════════════════
const _animState={};
function animateNumber(el,newVal,opts){
  opts=opts||{};
  const suffix=opts.suffix||'';
  const decimals=opts.decimals||0;
  if(!el) return;
  const key=el.id||Math.random();
  const from=(_animState[key]!==undefined)?_animState[key]:parseFloat((el.textContent||'0').replace(/[^0-9.\-]/g,''))||0;
  const to=parseFloat(newVal)||0;
  _animState[key]=to;
  if(Math.abs(to-from)<0.001){ el.textContent=to.toFixed(decimals)+suffix; return; }
  const dur=450;const start=performance.now();
  function step(now){
    const p=Math.min(1,(now-start)/dur);
    const eased=1-Math.pow(1-p,3);
    const val=from+(to-from)*eased;
    el.textContent=val.toFixed(decimals)+suffix;
    if(p<1) requestAnimationFrame(step);
    else el.textContent=to.toFixed(decimals)+suffix;
  }
  requestAnimationFrame(step);
}

function renderStats(){
  const {total,done}=weightedTotalCounts();
  const raw=totalCounts();
  animateNumber(document.getElementById('statDone'),done,{decimals: (done%1!==0)?1:0});
  const pct=total?Math.round(done/total*100):0;
  animateNumber(document.getElementById('statPct'),pct,{suffix:'%'});
  const streak=state.streak.current||0;
  const flameEl=document.getElementById('flameIcon');
  const streakVal=document.getElementById('statStreak');
  if(flameEl){
    flameEl.className='';
    let intensity='flame-lvl-0';
    if(streak>=30) intensity='flame-lvl-4';
    else if(streak>=14) intensity='flame-lvl-3';
    else if(streak>=7) intensity='flame-lvl-2';
    else if(streak>=3) intensity='flame-lvl-1';
    flameEl.classList.add(intensity);
  }
  const streakNumEl=streakVal.childNodes[streakVal.childNodes.length-1];
  if(streakNumEl) streakNumEl.textContent=' '+streak;
  animateNumber(document.getElementById('overallPct'),pct,{suffix:'%'});
  document.getElementById('overallFill').style.width=pct+'%';
}

function renderPieChart(){
  const {total,done}=weightedTotalCounts();
  const raw=totalCounts();
  const remaining=total-done;
  const pct=total?(done/total*100):0;
  const r=50,cx=60,cy=60,sw=14;
  const circumference=2*Math.PI*r;
  const doneLen=circumference*(pct/100);
  const svg=document.getElementById('pieChart');
  svg.innerHTML=`
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="var(--grid)" stroke-width="${sw}"/>
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="var(--green)" stroke-width="${sw}"
      stroke-dasharray="${doneLen.toFixed(2)} ${(circumference-doneLen).toFixed(2)}"
      stroke-linecap="round" transform="rotate(-90 ${cx} ${cy})"
      style="filter:drop-shadow(0 0 5px var(--green-glow));transition:stroke-dasharray .3s;"/>
    <text x="${cx}" y="${cy-3}" text-anchor="middle" font-size="20" fill="var(--green)"
      font-family="Consolas,monospace" font-weight="bold">${Math.round(pct)}%</text>
    <text x="${cx}" y="${cy+14}" text-anchor="middle" font-size="9" fill="var(--text-dim)"
      font-family="Consolas,monospace">${fmtNum(done)}/${fmtNum(total)} pts</text>
  `;
  document.getElementById('pieLegend').innerHTML=`
    <div class="row"><span class="swatch" style="background:var(--green);"></span>Solved &nbsp;<b>${fmtNum(done)} pts</b></div>
    <div class="row"><span class="swatch" style="background:var(--grid);border:1px solid var(--border);"></span>Remaining &nbsp;<b>${fmtNum(remaining)} pts</b></div>
    <div class="row" style="opacity:0.55;font-size:9.5px;">${raw.total} questions total</div>
  `;
}

function renderDeadline(){
  const inp=document.getElementById('deadlineInput');
  const out=document.getElementById('deadlineOutput');
  if(state.deadline) inp.value=state.deadline;
  const {total,done}=weightedTotalCounts();
  const raw=totalCounts();
  const remaining=total-done;
  if(remaining<=0&&total>0){ out.innerHTML=`<div class="out-win">🎉 Book complete!</div>`; return; }
  if(!state.deadline){ out.innerHTML=`<div class="out-empty">Pick a date above and hit SET.</div>`; return; }
  const daysLeft=Math.ceil((new Date(state.deadline+'T23:59:59')-new Date())/86400000);
  if(daysLeft<=0){ out.innerHTML=`<div class="out-warn">Target date passed with ${fmtNum(remaining)} pts remaining.</div>`; return; }
  const perDay=Math.ceil((remaining/daysLeft)*10)/10;
  out.innerHTML=`
    <div class="drow"><span>Remaining</span><b>${fmtNum(remaining)} pts</b></div>
    <div class="drow"><span>Days left</span><b>${daysLeft}</b></div>
    <div class="drow final"><span>NEEDED / DAY</span><b>${fmtNum(perDay)} pts</b></div>
    <div class="drow" style="opacity:0.55;"><span>Raw remaining</span><b>${raw.total-raw.done} Q</b></div>
  `;
}

function renderDailyPace(){
  const inp=document.getElementById('dailyPaceInput');
  const out=document.getElementById('dailyPaceOutput');
  if(state.dailyTarget) inp.value=state.dailyTarget;
  const {total,done}=weightedTotalCounts();
  const raw=totalCounts();
  const remaining=total-done;
  if(remaining<=0&&total>0){ out.innerHTML=`<div class="out-win">🎉 Book complete!</div>`; return; }
  if(!state.dailyTarget){ out.innerHTML=`<div class="out-empty">Enter pts/day and hit SET.</div>`; return; }
  const perDay=state.dailyTarget;
  const daysNeeded=Math.ceil(remaining/perDay);
  const finish=new Date();finish.setDate(finish.getDate()+daysNeeded);
  const finishStr=finish.toLocaleDateString('en-IN',{weekday:'short',day:'2-digit',month:'short',year:'numeric'});
  out.innerHTML=`
    <div class="drow"><span>Remaining</span><b>${fmtNum(remaining)} pts</b></div>
    <div class="drow"><span>Pace</span><b>${fmtNum(perDay)} pts/day</b></div>
    <div class="drow"><span>Days needed</span><b>${daysNeeded}</b></div>
    <div class="drow final"><span>FINISH DATE</span><b>${finishStr}</b></div>
  `;
}

// ══════════════════════════════════════════════════
// STUDY PLANNER
// ══════════════════════════════════════════════════
function effectiveDailyQuota(){
  // Prefer an explicit daily pace target. Fall back to deriving one from a deadline.
  if(typeof state.dailyTarget==='number' && state.dailyTarget>0) return state.dailyTarget;
  if(state.deadline){
    const {total,done}=weightedTotalCounts();
    const remaining=total-done;
    const daysLeft=Math.ceil((new Date(state.deadline+'T23:59:59')-new Date())/86400000);
    if(daysLeft>0 && remaining>0) return remaining/daysLeft;
  }
  return null;
}

function buildRemainingQueue(){
  const queue=[];
  orderedChapters().forEach(ch=>{
    if(isChapterSkipped(ch.id)) return;
    ch.sections.forEach(s=>{
      if(isSkipped(ch.id,s.key)) return;
      const count=effCount(ch.id,s.key);
      const arr=state.ticks[ch.id][s.key];
      const mult=effortFor(s.key);
      for(let i=0;i<count;i++){
        if(!arr[i]) queue.push({chId:ch.id,chName:ch.name,secKey:s.key,secLabel:s.label,qNum:i+1,pts:mult});
      }
    });
  });
  return queue;
}

// Groups a flat list of {chId,chName,secKey,secLabel,qNum,pts} items into
// contiguous question-number ranges within the same chapter/section, for display.
function groupPlanItems(items){
  const grouped=[];
  items.forEach(item=>{
    const last=grouped[grouped.length-1];
    if(last && last.chId===item.chId && last.secKey===item.secKey && item.qNum===last.endQ+1){
      last.endQ=item.qNum; last.count++; last.pts+=item.pts;
    } else {
      grouped.push({chId:item.chId,chName:item.chName,secKey:item.secKey,secLabel:item.secLabel,startQ:item.qNum,endQ:item.qNum,count:1,pts:item.pts});
    }
  });
  return grouped;
}

// Builds day buckets (dayOffset,date,items[],pts,qCount) from the remaining queue
// at a given daily quota, starting today. Pure/stateless — used both for the
// live "unlocked" preview and to actually generate a plan to lock.
function buildDayBuckets(queue,dailyQuota){
  const days=[];
  let idx=0,dayOffset=0;
  const MAX_DAYS=730; // hard safety cap (2 years)
  while(idx<queue.length && dayOffset<MAX_DAYS){
    let acc=0;
    const dayItems=[];
    while(idx<queue.length && acc<dailyQuota-1e-9){
      dayItems.push(queue[idx]);
      acc+=queue[idx].pts;
      idx++;
    }
    if(dayItems.length===0) break; // safety
    days.push({dayOffset,date:dateStrOffsetFwd(dayOffset),items:dayItems,pts:acc,qCount:dayItems.length});
    dayOffset++;
  }
  return days;
}

function buildStudyPlan(){
  const dailyQuota=effectiveDailyQuota();
  const queue=buildRemainingQueue();
  if(queue.length===0) return {dailyQuota,days:[],complete:true};
  if(!dailyQuota||dailyQuota<=0) return {dailyQuota:null,days:[],complete:false};
  const days=buildDayBuckets(queue,dailyQuota).map(d=>({...d,items:groupPlanItems(d.items)}));
  return {dailyQuota,days,complete:false};
}

// Maps chId -> the date (from the planner) on which that chapter's last
// remaining question is scheduled, i.e. its projected completion date.
// Prefers the locked plan if one exists; otherwise falls back to the live
// (unlocked) projection so this stays useful even before LOCK PLAN is hit.
function chapterPlannerDates(){
  const source=state.plan?state.plan:buildStudyPlan();
  const map={};
  if(!source||!Array.isArray(source.days)) return map;
  source.days.forEach(day=>{
    day.items.forEach(item=>{ map[item.chId]=day.date; });
  });
  return map;
}
function formatDateShort(dateStr){
  const d=new Date(dateStr+'T00:00:00');
  return d.toLocaleDateString('en-IN',{day:'2-digit',month:'short'});
}

function buildPlanDayBlockHTML(day,isToday){
  const dateLabel=isToday?'Today — '+formatDateLabel(day.date):formatDateLabel(day.date);
  let html=`<div class="log-day plan-day${isToday?' today':''}"><div class="log-day-head"><span class="ld-date">${dateLabel}</span><span class="ld-count">${day.qCount} question(s) · ${fmtNum(day.pts)} pts</span></div>`;
  let lastCh=null;
  day.items.forEach(g=>{
    if(g.chId!==lastCh){
      if(lastCh!==null) html+=`</div>`;
      html+=`<div class="log-ch-block"><div class="log-ch-name">${g.chName}</div>`;
      lastCh=g.chId;
    }
    const range=g.startQ===g.endQ?String(g.startQ):`${g.startQ}-${g.endQ}`;
    html+=`<div class="log-sec-row"><span class="ls-label">${g.secLabel}</span><span class="ls-qs">Q${range}</span><span class="ls-count">${g.count} to solve</span></div>`;
  });
  if(lastCh!==null) html+=`</div>`;
  html+=`</div>`;
  return html;
}

// ══════════════════════════════════════════════════
// LOCKED PLAN — generated once, stored, and NOT recomputed
// on every render. Each day keeps its own fixed calendar date
// and fixed set of questions, so falling behind (or getting
// ahead) doesn't reshuffle tomorrow's assignment — it just
// shows up as overdue/backlog until you clear it.
// ══════════════════════════════════════════════════
function planItemDone(item){
  const arr=state.ticks[item.chId]&&state.ticks[item.chId][item.secKey];
  return !!(arr && arr[item.qNum-1]);
}
function planDayProgress(day){
  const total=day.items.length;
  const done=day.items.filter(planItemDone).length;
  return {total,done};
}
function planBacklog(){
  if(!state.plan) return {items:[],pts:0};
  const today=todayStr();
  const items=[];let pts=0;
  state.plan.days.forEach(day=>{
    if(day.date>=today) return; // only strictly-past days count as backlog
    day.items.forEach(item=>{
      if(!planItemDone(item)){ items.push(item); pts+=item.pts; }
    });
  });
  return {items,pts};
}
function lockPlan(){
  const dailyQuota=effectiveDailyQuota();
  if(!dailyQuota||dailyQuota<=0){ alert('Set a daily pace or a target deadline above first, then lock the plan.'); return; }
  const queue=buildRemainingQueue();
  if(queue.length===0){ alert('Nothing left to plan — every question is already solved!'); return; }
  const days=buildDayBuckets(queue,dailyQuota);
  state.plan={startDate:todayStr(),dailyQuota,generatedAt:Date.now(),days,source:'auto'};
  saveState();renderAll();renderPlanner();renderMilestones();
}
function regeneratePlan(){
  if(state.plan && !confirm('Regenerate the plan? This throws away the current locked schedule and builds a fresh one, starting today, from whatever is still unsolved.')) return;
  lockPlan();
}
function clearPlan(){
  if(!state.plan) return;
  if(!confirm('Clear the locked plan? The daily home-screen task will disappear until you lock a new one.')) return;
  state.plan=null;saveState();renderAll();renderPlanner();renderMilestones();
}
function buildLockedPlanDayBlockHTML(day){
  const today=todayStr();
  const {total,done}=planDayProgress(day);
  const isToday=day.date===today;
  const isPast=day.date<today;
  const complete=total>0&&done>=total;
  let statusBadge='';
  if(complete) statusBadge=`<span class="ld-badge ld-badge-done">DONE</span>`;
  else if(isPast) statusBadge=`<span class="ld-badge ld-badge-overdue">OVERDUE</span>`;
  else if(isToday) statusBadge=`<span class="ld-badge ld-badge-today">TODAY</span>`;
  const dateLabel=isToday?'Today — '+formatDateLabel(day.date):formatDateLabel(day.date);
  let html=`<div class="log-day plan-day${isToday?' today':''}${isPast&&!complete?' overdue':''}"><div class="log-day-head"><span class="ld-date">${dateLabel}${statusBadge}</span><span class="ld-count">${done}/${total} done · ${fmtNum(day.pts)} pts</span></div>`;
  const grouped=groupPlanItems(day.items);
  let lastCh=null;
  grouped.forEach(g=>{
    if(g.chId!==lastCh){
      if(lastCh!==null) html+=`</div>`;
      html+=`<div class="log-ch-block"><div class="log-ch-name">${g.chName}</div>`;
      lastCh=g.chId;
    }
    const range=g.startQ===g.endQ?String(g.startQ):`${g.startQ}-${g.endQ}`;
    const groupDone=day.items.filter(it=>it.chId===g.chId&&it.secKey===g.secKey&&it.qNum>=g.startQ&&it.qNum<=g.endQ&&planItemDone(it)).length;
    html+=`<div class="log-sec-row"><span class="ls-label">${g.secLabel}</span><span class="ls-qs">Q${range}</span><span class="ls-count">${groupDone}/${g.count}</span></div>`;
  });
  if(lastCh!==null) html+=`</div>`;
  html+=`</div>`;
  return html;
}

const PLANNER_PAGE=14;
let plannerShown=PLANNER_PAGE;

function renderPlanner(){
  const paceInp=document.getElementById('plannerPaceInput');
  const deadlineInp=document.getElementById('plannerDeadlineInput');
  if(state.dailyTarget) paceInp.value=state.dailyTarget;
  if(state.deadline) deadlineInp.value=state.deadline;

  const body=document.getElementById('plannerBody');
  const moreWrap=document.getElementById('plannerMoreWrap');
  const statusEl=document.getElementById('plannerLockStatus');
  const lockBtn=document.getElementById('lockPlanBtn');
  const regenBtn=document.getElementById('regenPlanBtn');
  const clearBtn=document.getElementById('clearPlanBtn');

  if(state.plan){
    // ── LOCKED MODE: fixed schedule, doesn't recompute from scratch ──
    lockBtn.style.display='none';
    regenBtn.style.display='inline-block';
    clearBtn.style.display='inline-block';

    const allItems=state.plan.days.flatMap(d=>d.items);
    const remainingItems=allItems.filter(it=>!planItemDone(it));
    const remainingPts=remainingItems.reduce((s,it)=>s+it.pts,0);
    const lastDay=state.plan.days[state.plan.days.length-1];
    const backlog=planBacklog();

    document.getElementById('plannerRemaining').textContent=fmtNum(remainingPts)+' pts';
    document.getElementById('plannerQuota').textContent=fmtNum(state.plan.dailyQuota)+' pts/day (locked)';
    document.getElementById('plannerDaysLeft').textContent=state.plan.days.length+' day schedule';

    statusEl.style.display='block';
    statusEl.innerHTML=(state.plan.source==='testwise'?`🎯 Currently following the TEST-WISE plan from the other tab · `:`🔒 `)
      +`Locked on ${formatDateLabel(state.plan.startDate)} · runs ${formatDateLabel(state.plan.startDate)} → ${lastDay?formatDateLabel(lastDay.date):'—'}`
      +(backlog.items.length?` · <span style="color:var(--red);">${backlog.items.length} question(s) overdue (${fmtNum(backlog.pts)} pts)</span>`:' · <span style="color:var(--green);">on schedule</span>');

    if(state.plan.days.length===0){
      body.innerHTML=`<div class="plan-empty">This locked plan has no days in it. Clear it and lock a fresh one.</div>`;
      moreWrap.style.display='none';
      return;
    }
    const shown=state.plan.days.slice(0,plannerShown);
    body.innerHTML=shown.map(d=>buildLockedPlanDayBlockHTML(d)).join('');
    if(state.plan.days.length>plannerShown){
      moreWrap.style.display='block';
      document.getElementById('plannerMoreBtn').textContent=`SHOW MORE DAYS (${state.plan.days.length-plannerShown} REMAINING)`;
    } else {
      moreWrap.style.display='none';
    }
    return;
  }

  // ── UNLOCKED MODE: live preview from current pace/deadline + remaining queue ──
  lockBtn.style.display='inline-block';
  regenBtn.style.display='none';
  clearBtn.style.display='none';
  statusEl.style.display='none';

  const plan=buildStudyPlan();
  const {total,done}=weightedTotalCounts();
  const remaining=Math.max(0,total-done);
  document.getElementById('plannerRemaining').textContent=fmtNum(remaining)+' pts';
  document.getElementById('plannerQuota').textContent=plan.dailyQuota?fmtNum(plan.dailyQuota)+' pts/day':'— not set';
  document.getElementById('plannerDaysLeft').textContent=plan.dailyQuota?plan.days.length+(plan.complete?'':' (est.)'):'—';

  if(plan.complete){
    body.innerHTML=`<div class="plan-win">🎉 Every question is solved. Nothing left to plan!</div>`;
    moreWrap.style.display='none';
    return;
  }
  if(!plan.dailyQuota){
    body.innerHTML=`<div class="plan-empty">Set a daily pace (points/day) or a target deadline above — a preview of the day-by-day / chapter-wise plan will build itself from your remaining questions. Happy with it? Hit <b style="color:var(--purple);">🔒 LOCK PLAN</b> to save it as a fixed schedule that stays put day to day.</div>`;
    moreWrap.style.display='none';
    return;
  }
  if(plan.days.length===0){
    body.innerHTML=`<div class="plan-empty">Nothing to schedule — check your skipped chapters/sections.</div>`;
    moreWrap.style.display='none';
    return;
  }

  const shown=plan.days.slice(0,plannerShown);
  body.innerHTML=`<div class="plan-empty" style="padding:0 4px 12px;">👁 Preview only — this reshuffles as you solve. Hit <b style="color:var(--purple);">🔒 LOCK PLAN</b> above to freeze it into a fixed day-by-day schedule.</div>`
    +shown.map((d,i)=>buildPlanDayBlockHTML(d,d.dayOffset===0)).join('');
  if(plan.days.length>plannerShown){
    moreWrap.style.display='block';
    document.getElementById('plannerMoreBtn').textContent=`SHOW MORE DAYS (${plan.days.length-plannerShown} REMAINING)`;
  } else {
    moreWrap.style.display='none';
  }
}

// ══════════════════════════════════════════════════
// CHAPTER MILESTONES — manual date-range planning:
// "these chapters done by this date, then these chapters
// by this later date", as many blocks as needed.
// ══════════════════════════════════════════════════
function addDaysToDateStr(dateStr,n){
  const d=new Date(dateStr+'T00:00:00'); d.setDate(d.getDate()+n);
  return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
}
function normalizeMilestones(){
  const validIds=CHAPTERS.map(c=>c.id);
  state.milestones=(Array.isArray(state.milestones)?state.milestones:[])
    .filter(m=>m&&m.date)
    .map(m=>({
      id:m.id||('ms_'+Date.now()+Math.random().toString(36).slice(2,7)),
      date:m.date,
      label:(m.label||'').trim(),
      chapterIds:Array.isArray(m.chapterIds)?[...new Set(m.chapterIds.filter(id=>validIds.includes(id)))]:[]
    }))
    .filter(m=>m.chapterIds.length>0);
  state.milestones.sort((a,b)=>a.date<b.date?-1:(a.date>b.date?1:0));
}
function milestoneChapterOwner(chId){
  const m=(state.milestones||[]).find(mm=>mm.chapterIds.includes(chId));
  return m||null;
}
function milestoneProgress(m){
  let total=0,done=0;
  (m.chapterIds||[]).forEach(chId=>{
    const c=chapterCounts(chId);
    total+=c.total; done+=c.done;
  });
  return {total,done};
}
function renderMsChapterGrid(){
  const grid=document.getElementById('msChapterGrid');
  if(!grid) return;
  grid.innerHTML=orderedChapters().map(ch=>{
    const owner=milestoneChapterOwner(ch.id);
    const tag=owner?`<span class="ms-taken-tag">→ ${formatDateShort(owner.date)}</span>`:'';
    return `<label class="ms-chip${owner?' taken':''}"><input type="checkbox" value="${ch.id}">${ch.name}${tag}</label>`;
  }).join('');
}
function addMilestone(){
  const dateInp=document.getElementById('msDateInput');
  const labelInp=document.getElementById('msLabelInput');
  const date=dateInp.value;
  if(!date){ alert('Pick a target date first.'); return; }
  const checked=Array.from(document.querySelectorAll('#msChapterGrid input[type=checkbox]:checked')).map(cb=>cb.value);
  if(checked.length===0){ alert('Select at least one chapter to assign to this date.'); return; }
  state.milestones=state.milestones||[];
  // moving a chapter into a new milestone reclaims it from whichever one had it
  state.milestones.forEach(m=>{ m.chapterIds=(m.chapterIds||[]).filter(id=>!checked.includes(id)); });
  state.milestones.push({id:'ms_'+Date.now()+Math.random().toString(36).slice(2,7),date,label:(labelInp.value||'').trim(),chapterIds:checked});
  normalizeMilestones();
  saveState();
  dateInp.value=''; labelInp.value='';
  renderMilestones();
}
function deleteMilestone(id){
  if(!confirm('Remove this milestone? Its chapters become unassigned again.')) return;
  state.milestones=(state.milestones||[]).filter(m=>m.id!==id);
  saveState();renderMilestones();
}
function dateDiffDays(a,b){ return Math.round((new Date(b+'T00:00:00')-new Date(a+'T00:00:00'))/86400000); }
function buildRemainingQueueForChapters(chapterIds){
  const queue=[];
  const idsSet=new Set(chapterIds||[]);
  orderedChapters().forEach(ch=>{
    if(!idsSet.has(ch.id)) return;
    if(isChapterSkipped(ch.id)) return;
    ch.sections.forEach(s=>{
      if(isSkipped(ch.id,s.key)) return;
      const count=effCount(ch.id,s.key);
      const arr=state.ticks[ch.id][s.key];
      const mult=effortFor(s.key);
      for(let i=0;i<count;i++){
        if(!arr[i]) queue.push({chId:ch.id,chName:ch.name,secKey:s.key,secLabel:s.label,qNum:i+1,pts:mult});
      }
    });
  });
  return queue;
}
// Builds day buckets starting at a fixed calendar date (not "today + offset"),
// so a test's schedule can start mid-timeline where the previous test left off.
function buildDayBucketsFromDate(queue,dailyQuota,startDate){
  const days=[];
  let idx=0,offset=0;
  const MAX_DAYS=730;
  while(idx<queue.length && offset<MAX_DAYS){
    let acc=0;const dayItems=[];
    while(idx<queue.length && acc<dailyQuota-1e-9){
      dayItems.push(queue[idx]); acc+=queue[idx].pts; idx++;
    }
    if(dayItems.length===0) break;
    days.push({date:addDaysToDateStr(startDate,offset),items:dayItems,pts:acc,qCount:dayItems.length});
    offset++;
  }
  return days;
}
// Live day-wise plan for ONE test/checkpoint: takes only that test's still-unsolved
// chapters and spreads them evenly across the days between the previous test
// (or today, for the first one) and this test's date — so finishing every day
// on schedule means the chapters are done in time for the test.
function buildTestSegmentDaysRaw(m,idx,sorted){
  const startDateRaw=idx===0?todayStr():addDaysToDateStr(sorted[idx-1].date,1);
  const startDate=startDateRaw<todayStr()?todayStr():startDateRaw;
  const daysAvailable=Math.max(1,dateDiffDays(startDate,m.date)+1);
  const queue=buildRemainingQueueForChapters(m.chapterIds);
  if(queue.length===0) return {days:[],dailyQuota:0,daysAvailable,complete:true};
  const totalPts=queue.reduce((s,i)=>s+i.pts,0);
  const dailyQuota=totalPts/daysAvailable;
  const days=buildDayBucketsFromDate(queue,dailyQuota,startDate);
  return {days,dailyQuota,daysAvailable,complete:false};
}
function buildTestSegmentPlan(m,idx,sorted){
  const raw=buildTestSegmentDaysRaw(m,idx,sorted);
  return {...raw,days:raw.days.map(d=>({...d,items:groupPlanItems(d.items)}))};
}
// Chains every test's raw day-buckets into one combined, calendar-keyed schedule —
// this is what gets saved into state.plan so the home-screen "Today's Task"
// card (and everything else that reads state.plan) follows the test-wise plan
// instead of the bulk auto plan.
function buildTestwiseCombinedDaysRaw(){
  normalizeMilestones();
  const sorted=state.milestones||[];
  const merged={};
  sorted.forEach((m,idx)=>{
    const seg=buildTestSegmentDaysRaw(m,idx,sorted);
    seg.days.forEach(d=>{
      if(!merged[d.date]) merged[d.date]={date:d.date,items:[],pts:0};
      merged[d.date].items.push(...d.items);
      merged[d.date].pts+=d.pts;
    });
  });
  return Object.values(merged).sort((a,b)=>a.date<b.date?-1:(a.date>b.date?1:0));
}
function lockTestwisePlan(){
  const rawDays=buildTestwiseCombinedDaysRaw();
  if(rawDays.length===0){ alert('Add at least one test with chapters assigned (and some unsolved questions in them) before following it on the home screen.'); return; }
  const today=todayStr();
  const days=rawDays.map(d=>({dayOffset:dateDiffDays(today,d.date),date:d.date,items:d.items,pts:d.pts,qCount:d.items.length}));
  const totalPts=days.reduce((s,d)=>s+d.pts,0);
  const dailyQuota=days.length?totalPts/days.length:0;
  state.plan={startDate:today,dailyQuota,generatedAt:Date.now(),days,source:'testwise'};
  saveState();renderAll();renderPlanner();renderMilestones();
}
function renderMsPlanStatus(){
  const el=document.getElementById('msPlanStatus');
  if(!el) return;
  const src=state.plan?(state.plan.source||'auto'):null;
  if(src==='testwise'){
    el.innerHTML=`<div class="tt-backlog" style="color:var(--green);border-color:var(--green-dim);background:rgba(46,230,255,0.06);">
      ✅ Home screen's TODAY'S TASK is following this test-wise plan (built ${formatDateLabel(state.plan.startDate)}).
      <button class="btn sm purple" style="margin-left:8px;" onclick="lockTestwisePlan()">↻ REGENERATE</button>
      <button class="btn sm danger" onclick="clearPlan()">✕ STOP FOLLOWING</button>
    </div>`;
  } else if(src==='auto'){
    el.innerHTML=`<div class="tt-backlog">ℹ Home screen is currently following the DAY-WISE AUTO PLAN, not this test-wise schedule.
      <button class="btn sm purple" style="margin-left:8px;" onclick="lockTestwisePlan()">🏠 FOLLOW THIS INSTEAD</button>
    </div>`;
  } else {
    el.innerHTML=`<div class="tt-backlog">No plan is being followed on the home screen yet.
      <button class="btn sm purple" style="margin-left:8px;" onclick="lockTestwisePlan()">🏠 FOLLOW THIS ON HOME SCREEN</button>
    </div>`;
  }
}
function toggleMsDayPlan(id){
  const el=document.getElementById('msDayPlan_'+id);
  if(!el) return;
  if(el.classList.contains('open')){ el.classList.remove('open'); el.innerHTML=''; return; }
  const sorted=state.milestones||[];
  const idx=sorted.findIndex(x=>x.id===id);
  if(idx<0) return;
  const m=sorted[idx];
  const seg=buildTestSegmentPlan(m,idx,sorted);
  if(seg.complete){
    el.innerHTML=`<div class="plan-win">🎉 Every question for this test's chapters is already solved!</div>`;
  } else if(seg.days.length===0){
    el.innerHTML=`<div class="plan-empty">Couldn't build a day plan — check that these chapters/sections aren't marked skipped.</div>`;
  } else {
    const today=todayStr();
    el.innerHTML=`<div class="plan-empty" style="padding:0 0 10px;">≈${fmtNum(seg.dailyQuota)} pts/day across ${seg.days.length} day(s) clears this test's syllabus right on time.</div>`
      +seg.days.map(d=>buildPlanDayBlockHTML(d,d.date===today)).join('');
  }
  el.classList.add('open');
}
function buildMilestoneCardHTML(m,idx,sorted){
  const {total,done}=milestoneProgress(m);
  const pct=total>0?Math.round((done/total)*100):0;
  const daysLeft=Math.ceil((new Date(m.date+'T23:59:59')-new Date())/86400000);
  const complete=total>0&&done>=total;
  let statusClass='',badgeHtml='';
  if(complete){ statusClass='done'; badgeHtml='<span class="ms-badge done">✓ DONE</span>'; }
  else if(daysLeft<0){ statusClass='overdue'; badgeHtml=`<span class="ms-badge overdue">OVERDUE ${Math.abs(daysLeft)}D</span>`; }
  else if(daysLeft===0){ statusClass='due-today'; badgeHtml='<span class="ms-badge due-today">DUE TODAY</span>'; }
  else { badgeHtml=`<span class="ms-badge ontrack">${daysLeft} DAY${daysLeft===1?'':'S'} LEFT</span>`; }
  const startDate=idx===0?todayStr():addDaysToDateStr(sorted[idx-1].date,1);
  const periodLabel=(idx===0?'From now':'From '+formatDateLabel(startDate))+' until '+formatDateLabel(m.date);
  const remaining=Math.max(0,total-done);
  const paceLine=(!complete&&daysLeft>0&&remaining>0)?`<div class="ms-sub">Need ~${fmtNum(remaining/daysLeft)} questions/day to hit this</div>`:'';
  const title=m.label?m.label:('Checkpoint '+(idx+1));
  const chTags=(m.chapterIds||[]).map(chId=>{
    const ch=CHAPTERS.find(c=>c.id===chId);
    const cc=chapterCounts(chId);
    const chDone=cc.total>0&&cc.done>=cc.total;
    return `<span class="ms-chtag${chDone?' done':''}">${ch?ch.name:chId} · ${cc.done}/${cc.total}</span>`;
  }).join('');
  return `<div class="ms-node ${statusClass}">
    <div class="ms-dot">${idx+1}</div>
    <div class="ms-card ${statusClass}">
      <div class="ms-head">
        <div>
          <div class="ms-title-row"><span class="ms-title">${title}</span><span class="ms-date-tag">${formatDateLabel(m.date)}</span></div>
          <div class="ms-sub">${periodLabel} — chapters for this stretch: ${(m.chapterIds||[]).length}</div>
          <div class="ms-sub">${done}/${total} questions done (${pct}%)</div>
          ${paceLine}
        </div>
        <div class="ms-actions">
          ${badgeHtml}
          <button class="btn sm danger" onclick="deleteMilestone('${m.id}')">✕</button>
        </div>
      </div>
      <div class="ms-bar-outer"><div class="ms-bar-fill" style="width:${pct}%;"></div></div>
      <div class="ms-chlist">${chTags}</div>
      <div style="margin-top:10px;"><button class="btn sm purple" onclick="toggleMsDayPlan('${m.id}')">📋 DAY-WISE PLAN FOR THIS TEST</button></div>
      <div class="ms-dayplan" id="msDayPlan_${m.id}"></div>
    </div>
  </div>`;
}
function renderMilestones(){
  normalizeMilestones();
  renderMsChapterGrid();
  renderMsPlanStatus();
  const listEl=document.getElementById('milestonesList');
  if(!listEl) return;
  const sorted=state.milestones||[];
  if(sorted.length===0){
    listEl.innerHTML=`<div class="ms-empty">No checkpoints yet. Pick your first test's date, tick the chapters you want done before it, and hit ADD MILESTONE. Then add your next test's date with the next set of chapters, and so on — each one picks up right where the last left off.</div>`;
    return;
  }
  listEl.innerHTML=`<div class="ms-timeline">`+sorted.map((m,i)=>buildMilestoneCardHTML(m,i,sorted)).join('')+`</div>`;
}
let plannerActiveTab='auto';
function switchPlannerTab(tab){
  plannerActiveTab=tab;
  document.querySelectorAll('.planner-tab').forEach(b=>b.classList.toggle('active',b.dataset.ptab===tab));
  document.getElementById('autoPlanSection').classList.toggle('hidden',tab!=='auto');
  document.getElementById('milestonesSection').classList.toggle('open',tab==='milestones');
  if(tab==='milestones') renderMilestones();
}
document.querySelectorAll('.planner-tab').forEach(btn=>{
  btn.onclick=()=>switchPlannerTab(btn.dataset.ptab);
});
document.getElementById('addMilestoneBtn').onclick=addMilestone;

function openPlanner(){ plannerShown=PLANNER_PAGE; renderPlanner(); renderReorderPanel(); switchPlannerTab(plannerActiveTab); document.getElementById('plannerOverlay').classList.add('open'); }
function closePlanner(){ document.getElementById('plannerOverlay').classList.remove('open'); }

// ══════════════════════════════════════════════════
// CHAPTER REORDER PANEL
// ══════════════════════════════════════════════════
let reorderDragId=null;
function renderReorderPanel(){
  const list=document.getElementById('reorderList');
  if(!list) return;
  const chs=orderedChapters();
  list.innerHTML=chs.map((ch,i)=>{
    const skipped=isChapterSkipped(ch.id);
    const {total,done}=weightedChapterCounts(ch.id);
    const isDone=total>0&&done>=total;
    let badge='';
    if(skipped) badge='<span class="ro-badge">SKIP</span>';
    else if(isDone) badge='<span class="ro-badge" style="color:var(--green);border-color:var(--green);">DONE</span>';
    return `
    <div class="reorder-row${skipped?' ro-skipped':''}${isDone?' ro-done':''}" draggable="true" data-chid="${ch.id}">
      <span class="ro-grip">⠿</span>
      <span class="ro-num">${i+1}.</span>
      <span class="ro-name">${ch.name}</span>
      ${badge}
      <div class="ro-actions">
        <button class="btn sm" data-act="up" data-chid="${ch.id}" ${i===0?'disabled':''} title="Move up">▲</button>
        <button class="btn sm" data-act="down" data-chid="${ch.id}" ${i===chs.length-1?'disabled':''} title="Move down">▼</button>
      </div>
    </div>`;
  }).join('');

  list.querySelectorAll('button[data-act]').forEach(btn=>{
    btn.onclick=()=>{
      const chId=btn.getAttribute('data-chid');
      const dir=btn.getAttribute('data-act')==='up'?-1:1;
      moveChapterInOrder(chId,dir);
    };
  });

  list.querySelectorAll('.reorder-row').forEach(row=>{
    row.addEventListener('dragstart',e=>{
      reorderDragId=row.getAttribute('data-chid');
      row.classList.add('dragging');
      e.dataTransfer.effectAllowed='move';
    });
    row.addEventListener('dragend',()=>{
      row.classList.remove('dragging');
      list.querySelectorAll('.reorder-row').forEach(r=>r.classList.remove('drag-over'));
    });
    row.addEventListener('dragover',e=>{
      e.preventDefault();
      if(row.getAttribute('data-chid')!==reorderDragId) row.classList.add('drag-over');
    });
    row.addEventListener('dragleave',()=>{ row.classList.remove('drag-over'); });
    row.addEventListener('drop',e=>{
      e.preventDefault();
      row.classList.remove('drag-over');
      const targetId=row.getAttribute('data-chid');
      if(!reorderDragId||reorderDragId===targetId) return;
      const ids=orderedChapters().map(c=>c.id);
      const targetIndex=ids.indexOf(targetId);
      reorderChapterTo(reorderDragId,targetIndex);
      reorderDragId=null;
    });
  });
}

// ══════════════════════════════════════════════════
// TODAY'S TASK CARD
// ══════════════════════════════════════════════════
function renderTodayTask(){
  const body=document.getElementById('todayTaskBody');
  const today=todayStr();
  const done=isTaskDone(today);
  const streak=(state.taskStreak&&state.taskStreak.current)||0;

  // history strip: last 7 days including today, oldest first
  const histDays=[];
  for(let i=6;i>=0;i--) histDays.push(dateStrOffset(i));
  const historyHTML=histDays.map(d=>{
    const isToday=d===today;
    const dDone=isTaskDone(d);
    const label=new Date(d+'T00:00:00').toLocaleDateString('en-IN',{weekday:'narrow'});
    return `<div class="tt-day${dDone?' done':''}${isToday?' today-marker':''}" title="${formatDateLabel(d)}${dDone?' — task done':''}" data-date="${d}">${dDone?'✓':label}</div>`;
  }).join('');

  let leftHTML='';
  const backlog=planBacklog();

  if(!state.plan){
    leftHTML=`<div class="plan-empty" style="padding:4px 0;">No plan locked yet. Open the <b style="color:var(--text);">PLANNER</b> tab above, set a daily pace or deadline, and hit <b style="color:var(--purple);">🔒 LOCK PLAN</b> to get a fixed day-by-day schedule that stays put — no daily reshuffling.</div>`;
  } else {
    const day=state.plan.days.find(d=>d.date===today);
    if(!day){
      const allDone=state.plan.days.every(d=>d.items.every(planItemDone));
      leftHTML=(allDone&&backlog.items.length===0)
        ?`<div class="plan-win" style="text-align:left;padding:4px 0;">🎉 Locked plan fully complete. Lock a new one whenever you're ready.</div>`
        :`<div class="plan-empty" style="padding:4px 0;">Nothing scheduled for today in the locked plan.${backlog.items.length?' Clear the overdue backlog above, or regenerate the plan from the planner.':''}</div>`;
    } else {
      const grouped=groupPlanItems(day.items);
      const chunks=grouped.map(g=>{
        const range=g.startQ===g.endQ?String(g.startQ):`${g.startQ}-${g.endQ}`;
        return `<div class="tt-chunk"><span class="tt-ch-name">${g.chName}</span><span>${g.secLabel}</span><span class="tt-qs">Q${range}</span><span style="opacity:0.6;">(${g.count} Q)</span></div>`;
      }).join('');
      const {total,done:doneCount}=planDayProgress(day);
      const pct=total>0?Math.min(100,Math.round(doneCount/total*100)):0;
      leftHTML=`
        ${chunks}
        <div class="tt-progress-wrap">
          <div class="tt-progress-label"><span>PLAN PROGRESS TODAY</span><span>${doneCount} / ${total} questions</span></div>
          <div class="bar"><div class="fill" style="width:${pct}%"></div></div>
        </div>
      `;
    }
  }

  const activeSess=state.activeSession;
  const timerHTML=activeSess
    ? `<div class="timer-box running">
         <div><div class="timer-display" id="timerDisplay">00:00:00</div>
         <div class="timer-sub">session running · started ${new Date(activeSess.startTs).toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'})}</div></div>
         <button class="btn sm danger" id="stopSessionBtn">⏹ STOP SESSION</button>
       </div>`
    : `<div class="timer-box">
         <div><div class="timer-display" style="font-size:14px;color:var(--text-dim);">⏱ 00:00:00</div>
         <div class="timer-sub">not running</div></div>
         <button class="btn sm" id="startSessionBtn">▶ START SESSION</button>
       </div>`;

  body.innerHTML=`
    <div class="tt-row">
      <div class="tt-left">${leftHTML}${timerHTML}</div>
      <div class="tt-right">
        <button class="btn sm ${done?'done-state':''} tt-mark-btn" id="ttMarkBtn">${done?'✓ DONE TODAY (undo)':'MARK TODAY DONE'}</button>
        <div class="tt-streak">🔥 Task streak: ${streak} day${streak===1?'':'s'}</div>
        <div class="tt-history">${historyHTML}</div>
      </div>
    </div>
  `;

  document.getElementById('ttMarkBtn').onclick=()=>toggleTaskDone(today);
  body.querySelectorAll('.tt-day').forEach(el=>{
    el.onclick=()=>toggleTaskDone(el.dataset.date);
  });
  const startBtn=document.getElementById('startSessionBtn');
  if(startBtn) startBtn.onclick=startSession;
  const stopBtn=document.getElementById('stopSessionBtn');
  if(stopBtn) stopBtn.onclick=stopSession;
  updateTimerDisplay();
}

function renderBacklog(){
  const card=document.getElementById('backlogCard');
  const body=document.getElementById('backlogBody');
  const backlog=planBacklog();
  if(!state.plan){
    card.style.opacity='0.55';
    body.innerHTML=`<div class="plan-empty" style="padding:4px 0;">No locked plan yet — backlog will appear here automatically if you ever fall behind a locked schedule.</div>`;
    return;
  }
  if(backlog.items.length===0){
    card.style.opacity='1';
    body.innerHTML=`<div class="plan-win" style="text-align:left;padding:4px 0;font-size:12px;">✅ Nothing overdue — you're fully caught up with the plan.</div>`;
    return;
  }
  card.style.opacity='1';
  const grouped=groupPlanItems(backlog.items.slice().sort((a,b)=> (a.chId+a.secKey+a.qNum)<(b.chId+b.secKey+b.qNum)?-1:1));
  const chunks=grouped.map(g=>{
    const range=g.startQ===g.endQ?String(g.startQ):`${g.startQ}-${g.endQ}`;
    return `<div class="tt-chunk"><span class="tt-ch-name">${g.chName}</span><span>${g.secLabel}</span><span class="tt-qs">Q${range}</span><span style="opacity:0.6;">(${g.count} Q)</span></div>`;
  }).join('');

  const CATCHUP_DAYS=3;
  const extraPerDay=backlog.pts/CATCHUP_DAYS;
  const normalQuota=state.plan?state.plan.dailyQuota:(effectiveDailyQuota()||0);
  const catchupHTML=`
    <div class="catchup-box">
      🚀 <b>CATCH-UP PLAN:</b> clear this in ${CATCHUP_DAYS} days by adding <b>${fmtNum(extraPerDay)} extra pts/day</b>
      on top of today's normal ${fmtNum(normalQuota)} pts/day quota (≈ <b>${fmtNum(normalQuota+extraPerDay)} pts/day total</b>).
      Prefer it slower? Spread over ${Math.ceil(backlog.pts/Math.max(0.5,normalQuota*0.5))} days at just +50% pace instead.
    </div>`;

  body.innerHTML=`
    <div class="tt-backlog" style="margin-bottom:8px;">⚠ ${backlog.items.length} question(s) overdue · ${fmtNum(backlog.pts)} pts behind schedule</div>
    ${chunks}
    ${catchupHTML}
    <div style="margin-top:10px;"><button class="btn sm amber" id="backlogPlannerBtn">OPEN PLANNER TO CATCH UP</button></div>
  `;
  const btn=document.getElementById('backlogPlannerBtn');
  if(btn) btn.onclick=openPlanner;
}

// ══════════════════════════════════════════════════
// SESSION TIMER — start it before you begin today's task,
// stop it when you're done. Logs how long a session took
// and how many questions got solved during it.
// ══════════════════════════════════════════════════
let timerInterval=null;
function fmtHMS(sec){
  sec=Math.max(0,Math.round(sec));
  const h=Math.floor(sec/3600),m=Math.floor((sec%3600)/60),s=sec%60;
  return [h,m,s].map(v=>String(v).padStart(2,'0')).join(':');
}
function startSession(){
  if(state.activeSession) return;
  state.activeSession={startTs:Date.now(), startDoneRaw:totalCounts().done, chId:currentFocusChapterId()};
  saveState();
  playSound('tick');
  showToast('⏱ Session started — go solve!','xp');
  renderAll();
  startTimerTick();
}
function stopSession(){
  const sess=state.activeSession;
  if(!sess) return;
  clearTimerTick();
  const endTs=Date.now();
  const durationSec=(endTs-sess.startTs)/1000;
  const doneNow=totalCounts().done;
  const questions=Math.max(0,doneNow-sess.startDoneRaw);
  state.sessions=state.sessions||[];
  state.sessions.unshift({date:todayStr(),startTs:sess.startTs,endTs,durationSec,questions,chId:sess.chId});
  if(state.sessions.length>300) state.sessions.length=300;
  state.activeSession=null;
  saveState();
  const mins=durationSec/60;
  const rate=mins>0?(questions/mins):0;
  if(durationSec<10){
    showToast('⏹ Session stopped — too short to log a rate.','ach');
  } else {
    showToast(`⏹ Session done: ${questions} Q in ${fmtHMS(durationSec)} (${rate.toFixed(1)} Q/min)`,'ach');
  }
  renderAll();
}
function startTimerTick(){
  clearTimerTick();
  timerInterval=setInterval(updateTimerDisplay,1000);
}
function clearTimerTick(){
  if(timerInterval){ clearInterval(timerInterval); timerInterval=null; }
}
function updateTimerDisplay(){
  const el=document.getElementById('timerDisplay');
  if(!el||!state.activeSession){ clearTimerTick(); return; }
  const elapsed=(Date.now()-state.activeSession.startTs)/1000;
  el.textContent=fmtHMS(elapsed);
}
function renderSessionLog(){
  const body=document.getElementById('sessionLogBody');
  if(!body) return;
  const sessions=(state.sessions||[]).slice(0,15);
  if(sessions.length===0){
    body.innerHTML=`<div class="plan-empty" style="padding:4px 0;">No sessions logged yet. Hit ▶ START SESSION on Today's Task above before you begin solving, then ⏹ STOP SESSION when you finish — it'll track exactly how many questions you did and how long it took.</div>`;
    return;
  }
  const totalQ=sessions.reduce((s,x)=>s+x.questions,0);
  const totalSec=sessions.reduce((s,x)=>s+x.durationSec,0);
  const avgRate=totalSec>0?(totalQ/(totalSec/60)):0;
  const rows=sessions.map(s=>{
    const ch=CHAPTERS.find(c=>c.id===s.chId);
    const mins=s.durationSec/60;
    const rate=mins>0?(s.questions/mins):0;
    const timeLabel=new Date(s.startTs).toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'});
    return `<div class="session-row">
      <span class="sr-date">${formatDateShort(s.date)} ${timeLabel}</span>
      <span class="sr-mid">${ch?ch.name:'—'} · ${s.questions} Q in ${fmtHMS(s.durationSec)}</span>
      <span class="sr-rate">${rate.toFixed(1)} Q/min</span>
    </div>`;
  }).join('');
  body.innerHTML=`
    <div class="stats-total-row" style="margin-bottom:10px;justify-content:flex-start;gap:10px;">
      <div class="stats-total-chip"><div class="v">${totalQ}</div><div class="l">QUESTIONS (LOGGED)</div></div>
      <div class="stats-total-chip"><div class="v">${fmtHMS(totalSec)}</div><div class="l">TOTAL TIME</div></div>
      <div class="stats-total-chip"><div class="v">${avgRate.toFixed(1)}</div><div class="l">AVG Q/MIN</div></div>
    </div>
    <div class="session-log-list">${rows}</div>
  `;
}

// ══════════════════════════════════════════════════
// GAMIFIED ASSISTANT — reads pace, backlog & streak and
// tells you what to do next, and how to speed up if you're
// falling behind.
// ══════════════════════════════════════════════════
let assistantOpen=false;
function buildAssistantMessage(){
  const backlog=planBacklog();
  const todayDone=getTodayActivity();
  const queue=buildRemainingQueue();
  const nextItem=queue[0];
  const nextLabel=nextItem?`${nextItem.chName} · ${nextItem.secLabel} (Q${nextItem.qNum})`:null;

  if(!state.plan){
    return {urgent:false,
      text:`No plan locked yet. Open the <b>PLANNER</b>, set a daily pace or deadline, and hit LOCK PLAN — I'll track your pace and warn you if you start slipping.`};
  }
  if(backlog.items.length>0){
    return {urgent:true,
      text:`You're <b>${fmtNum(backlog.pts)} pts behind</b> schedule (${backlog.items.length} question${backlog.items.length===1?'':'s'} overdue). Fastest fix: knock out <b>${nextLabel||'the next unsolved section'}</b> right now, then check the CATCH-UP PLAN in the BACKLOG card for a day-by-day recovery pace.`};
  }
  const day=state.plan.days.find(d=>d.date===todayStr());
  if(day){
    const {total,done}=planDayProgress(day);
    if(done<total){
      const remain=total-done;
      return {urgent:false,
        text:`Today's target: <b>${done}/${total}</b> questions done. ${remain} to go — up next is <b>${nextLabel||'your current section'}</b>. Start the session timer and knock it out.`};
    }
    return {urgent:false,
      text:`✅ Today's plan quota is fully cleared! Great pace — solve a few extra from <b>${nextLabel||'the next chapter'}</b> to build a buffer, or rest easy and keep the streak alive tomorrow.`};
  }
  return {urgent:false, text:`Nothing scheduled for today in the locked plan. You're clear — maybe get ahead on <b>${nextLabel||'the next section'}</b>?`};
}
function renderAssistant(){
  const wrap=document.getElementById('assistantWidget');
  if(!wrap) return;
  const msg=buildAssistantMessage();
  const streak=state.streak.current||0;
  const streakLine = streak>0
    ? `🔥 ${streak}-day streak — don't break it today.`
    : `Solve at least 1 question today to start a new streak.`;
  wrap.innerHTML = assistantOpen
    ? `<div class="assistant-bubble" id="assistantBubble">
         <div class="ab-head${msg.urgent?' ab-urgent':''}">🤖 STUDY ASSISTANT${msg.urgent?' · CATCH UP NEEDED':''}</div>
         <div>${msg.text}</div>
         <div style="margin-top:8px;font-size:9.5px;color:var(--text-dim);">${streakLine}</div>
       </div>
       <div class="assistant-fab${msg.urgent?' has-alert':''}" id="assistantFab" title="Study assistant">🤖<span class="ab-dot"></span></div>`
    : `<div class="assistant-fab${msg.urgent?' has-alert':''}" id="assistantFab" title="Study assistant">🤖<span class="ab-dot"></span></div>`;
  const fab=document.getElementById('assistantFab');
  if(fab) fab.onclick=()=>{ assistantOpen=!assistantOpen; renderAssistant(); };
  const bubble=document.getElementById('assistantBubble');
  if(bubble) bubble.onclick=(e)=>{ if(e.target===bubble || e.target.closest('.ab-head')){ /* keep open on inner click */ } };
}

const PLANNER_PRINT_CAP=200; // hard cap so a tiny pace doesn't generate a 500-page PDF
// Scopes window.print() to exactly ONE overlay at a time by tagging it with
// .printing-now right before printing and removing the tag right after —
// this is what makes the print CSS show only that overlay's content instead
// of every overlay in the DOM overlapping on the printed page.
// optionalCleanup (if given) runs after printing, before the tag is removed.
function printOverlay(overlayId,optionalCleanup){
  const el=document.getElementById(overlayId);
  el.classList.add('printing-now');
  window.print();
  window.addEventListener('afterprint', function cleanup(){
    if(optionalCleanup) optionalCleanup();
    el.classList.remove('printing-now');
    window.removeEventListener('afterprint', cleanup);
  });
}

function triggerPlannerPrint(){
  document.getElementById('plannerPrintGeneratedAt').textContent=
    'Generated '+new Date().toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'});

  if(state.plan){
    const allItems=state.plan.days.flatMap(d=>d.items);
    const remaining=allItems.filter(it=>!planItemDone(it)).reduce((s,it)=>s+it.pts,0);
    const quotaStr=fmtNum(state.plan.dailyQuota)+' pts/day (locked)';
    const daysStr=state.plan.days.length>PLANNER_PRINT_CAP?PLANNER_PRINT_CAP+'+ (showing first '+PLANNER_PRINT_CAP+')':state.plan.days.length;
    document.getElementById('plannerPrintStats').innerHTML=`
      <div><b style="color:#111;">${fmtNum(remaining)}</b><div style="font-size:9px;color:#777;">pts remaining</div></div>
      <div><b style="color:#111;">${quotaStr}</b><div style="font-size:9px;color:#777;">daily quota</div></div>
      <div><b style="color:#111;">${daysStr}</b><div style="font-size:9px;color:#777;">days in locked plan</div></div>
    `;
  } else {
    const plan=buildStudyPlan();
    const {total,done}=weightedTotalCounts();
    const remaining=Math.max(0,total-done);
    const quotaStr=plan.dailyQuota?fmtNum(plan.dailyQuota)+' pts/day':'not set';
    const daysStr=plan.complete?'0 (complete)':(plan.dailyQuota?(plan.days.length>PLANNER_PRINT_CAP?PLANNER_PRINT_CAP+'+ (showing first '+PLANNER_PRINT_CAP+')':plan.days.length):'—');
    document.getElementById('plannerPrintStats').innerHTML=`
      <div><b style="color:#111;">${fmtNum(remaining)}</b><div style="font-size:9px;color:#777;">pts remaining</div></div>
      <div><b style="color:#111;">${quotaStr}</b><div style="font-size:9px;color:#777;">daily quota (preview)</div></div>
      <div><b style="color:#111;">${daysStr}</b><div style="font-size:9px;color:#777;">days in plan (preview)</div></div>
    `;
  }

  // Expand to show everything (capped) for the printout, then restore normal pagination after.
  const prevShown=plannerShown;
  plannerShown=PLANNER_PRINT_CAP;
  renderPlanner();
  printOverlay('plannerOverlay',()=>{
    plannerShown=prevShown;
    renderPlanner();
  });
}

function getSectionTypes(){
  const seen={};const list=[];
  CHAPTERS.forEach(ch=>{ ch.sections.forEach(s=>{ if(!seen[s.key]){ seen[s.key]=true;list.push({key:s.key,label:s.label}); } }); });
  return list;
}

function renderGlobalSkipPanel(){
  const container=document.getElementById('globalSkipList');
  container.innerHTML='';
  getSectionTypes().forEach(t=>{
    const applicable=CHAPTERS.filter(ch=>ch.sections.some(s=>s.key===t.key&&effCount(ch.id,s.key)>0));
    if(applicable.length===0) return;
    const skippedCount=applicable.filter(ch=>isSkipped(ch.id,t.key)).length;
    const allSkipped=skippedCount===applicable.length;
    const row=document.createElement('div');
    row.className='global-skip-row'+(allSkipped?' all-skipped':'');
    row.innerHTML=`
      <div>
        <div class="gs-name">${t.label}</div>
        <div class="gs-sub">${skippedCount}/${applicable.length} chapters skipped</div>
      </div>
      <button class="btn sm ${allSkipped?'':'amber'}" data-key="${t.key}">${allSkipped?'INCLUDE ALL':'SKIP ALL'}</button>
    `;
    row.querySelector('button').onclick=()=>{
      applicable.forEach(ch=>{ state.skipped[ch.id][t.key]=!allSkipped; });
      saveState();renderAll();
    };
    container.appendChild(row);
  });
}

function renderEffortPanel(){
  const {total,done}=weightedTotalCounts();
  const pct=total?Math.round(done/total*100):0;
  document.getElementById('effortScoreVal').textContent=`${fmtNum(done)}/${fmtNum(total)} (${pct}%)`;
  const container=document.getElementById('effortList');
  container.innerHTML='';
  getSectionTypes().forEach(t=>{
    const mult=effortFor(t.key);
    const row=document.createElement('div');
    row.className='effort-row'+(mult>1?' ef-boosted':mult<1?' ef-reduced':'');
    row.innerHTML=`
      <span class="ef-name">${t.label}</span>
      <span class="ef-mult">
        <span class="ef-mult-val">×${fmtNum(mult)}</span>
        <button class="btn sm" data-key="${t.key}"
          style="border-color:var(--text-dim);color:var(--text-dim);">✎</button>
      </span>
    `;
    row.querySelector('button').onclick=()=>{
      const input=prompt(`Effort multiplier for "${t.label}"\n(1=normal, 0.5=half, 2=double)`,mult);
      if(input===null) return;
      const n=parseFloat(input);
      if(isNaN(n)||n<0){ alert('Enter a number ≥ 0.'); return; }
      state.effort=state.effort||{};
      state.effort[t.key]=n;
      saveState();renderAll();
    };
    container.appendChild(row);
  });
}

// ══════════════════════════════════════════════════
// LOG
// ══════════════════════════════════════════════════
function compressRanges(indices){
  const sorted=indices.slice().sort((a,b)=>a-b);
  const parts=[];let start=sorted[0],prev=sorted[0];
  for(let i=1;i<=sorted.length;i++){
    const cur=sorted[i];
    if(cur===prev+1){ prev=cur;continue; }
    parts.push(start===prev?String(start+1):(start+1)+'-'+(prev+1));
    start=cur;prev=cur;
  }
  return parts.join(', ');
}

function buildLogByDate(){
  const byDate={};
  Object.keys(state.log).forEach(k=>{
    const date=state.log[k];const parts=k.split('|');
    const chId=parts[0],secKey=parts[1],idx=parseInt(parts[2],10);
    if(!byDate[date]) byDate[date]={};
    if(!byDate[date][chId]) byDate[date][chId]={};
    if(!byDate[date][chId][secKey]) byDate[date][chId][secKey]=[];
    byDate[date][chId][secKey].push(idx);
  });
  return byDate;
}

function dayTotal(dayObj){
  let n=0;
  Object.keys(dayObj).forEach(chId=>{ Object.keys(dayObj[chId]).forEach(secKey=>{ n+=dayObj[chId][secKey].length; }); });
  return n;
}

function formatDateLabel(dateStr){
  const d=new Date(dateStr+'T00:00:00');
  return d.toLocaleDateString('en-IN',{weekday:'short',day:'2-digit',month:'short',year:'numeric'});
}

function buildDayBlockHTML(date,dayObj){
  let html=`<div class="log-day"><div class="log-day-head"><span class="ld-date">${formatDateLabel(date)}</span><span class="ld-count">${dayTotal(dayObj)} question(s) solved</span></div>`;
  CHAPTERS.forEach(ch=>{
    if(!dayObj[ch.id]) return;
    html+=`<div class="log-ch-block"><div class="log-ch-name">${ch.name}</div>`;
    ch.sections.forEach(s=>{
      const idxs=dayObj[ch.id][s.key];
      if(!idxs||idxs.length===0) return;
      html+=`<div class="log-sec-row"><span class="ls-label">${s.label}</span><span class="ls-qs">Q${compressRanges(idxs)}</span><span class="ls-count">${idxs.length} solved</span></div>`;
    });
    html+=`</div>`;
  });
  html+=`</div>`;
  return html;
}

function sortedLogDates(){
  return Object.keys(buildLogByDate()).sort((a,b)=>b.localeCompare(a));
}

const INLINE_LOG_PAGE=7;
let inlineLogExpanded=false;

function renderInlineLog(){
  const byDate=buildLogByDate();
  const dates=sortedLogDates();
  const body=document.getElementById('inlineLogBody');
  const moreWrap=document.getElementById('inlineLogMoreWrap');
  if(dates.length===0){
    body.innerHTML='<div class="log-empty">No questions logged yet. Tick anything and it appears here.</div>';
    moreWrap.style.display='none';return;
  }
  const shown=inlineLogExpanded?dates:dates.slice(0,INLINE_LOG_PAGE);
  body.innerHTML=shown.map(date=>buildDayBlockHTML(date,byDate[date])).join('');
  if(dates.length>INLINE_LOG_PAGE&&!inlineLogExpanded){
    moreWrap.style.display='block';
    document.getElementById('inlineLogMoreBtn').textContent=`SHOW OLDER (${dates.length-INLINE_LOG_PAGE} MORE DAYS)`;
  } else { moreWrap.style.display='none'; }
}

function renderLog(){
  const {total:wTotal,done:wDone}=weightedTotalCounts();
  const pct=wTotal?Math.round(wDone/wTotal*100):0;
  document.getElementById('logSubHead').textContent=`Date-wise record — ${fmtNum(wDone)} / ${fmtNum(wTotal)} pts`;
  document.getElementById('logBody').innerHTML=sortedLogDates().length===0
    ?'<div class="log-empty">No questions logged yet.</div>'
    :sortedLogDates().map(date=>buildDayBlockHTML(date,buildLogByDate()[date])).join('');
  document.getElementById('printGeneratedAt').textContent='Generated '+new Date().toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'});
}

function openLog(){ renderLog(); document.getElementById('logOverlay').classList.add('open'); }
function closeLog(){ document.getElementById('logOverlay').classList.remove('open'); }

// ══════════════════════════════════════════════════
// GOOD QUESTIONS (right-click marked)
// ══════════════════════════════════════════════════
function buildGoodList(){
  const byChapter={};
  let total=0;
  CHAPTERS.forEach(ch=>{
    ch.sections.forEach(s=>{
      const arr=state.good[ch.id]&&state.good[ch.id][s.key];
      if(!arr) return;
      const idxs=[];
      arr.forEach((v,i)=>{ if(v) idxs.push(i); });
      if(idxs.length===0) return;
      byChapter[ch.id]=byChapter[ch.id]||{};
      byChapter[ch.id][s.key]=idxs;
      total+=idxs.length;
    });
  });
  return {byChapter,total};
}

function buildGoodChapterBlockHTML(ch,secMap){
  const chTotal=Object.values(secMap).reduce((a,b)=>a+b.length,0);
  let html=`<div class="log-day"><div class="log-day-head"><span class="ld-date">${ch.name}</span><span class="ld-count">${chTotal} good question(s)</span></div>`;
  ch.sections.forEach(s=>{
    const idxs=secMap[s.key];
    if(!idxs||idxs.length===0) return;
    html+=`<div class="log-sec-row"><span class="ls-label">${s.label}</span><span class="ls-qs">Q${compressRanges(idxs)}</span><span class="ls-count">${idxs.length} marked</span></div>`;
  });
  html+=`</div>`;
  return html;
}

function renderGood(){
  const {byChapter,total}=buildGoodList();
  document.getElementById('goodSubHead').textContent=`${total} question${total===1?'':'s'} marked good`;
  const chs=orderedChapters().filter(ch=>byChapter[ch.id]);
  document.getElementById('goodBody').innerHTML=chs.length===0
    ?'<div class="log-empty">No questions marked good yet. Right-click any question box to flag it ★ GOOD — it\'ll show up here.</div>'
    :chs.map(ch=>buildGoodChapterBlockHTML(ch,byChapter[ch.id])).join('');
  document.getElementById('goodPrintGeneratedAt').textContent='Generated '+new Date().toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'});
}

function openGood(){ renderGood(); document.getElementById('goodOverlay').classList.add('open'); }
function closeGood(){ document.getElementById('goodOverlay').classList.remove('open'); }
function triggerGoodPrint(){ renderGood(); printOverlay('goodOverlay'); }

function renderAll(){
  renderChapterList();
  renderMain();
  renderStats();
  renderPieChart();
  renderDeadline();
  renderDailyPace();
  renderGlobalSkipPanel();
  renderEffortPanel();
  renderXPBar();
  renderAchievements();
  renderMissions();
  renderInlineLog();
  renderTodayTask();
  renderBacklog();
  renderChapterFocusBadge();
  renderChapterLevelsGraph();
  renderSessionLog();
  renderAssistant();
}

// ══════════════════════════════════════════════════
// EVENT LISTENERS
// ══════════════════════════════════════════════════
document.getElementById('logBtn').onclick=openLog;
document.getElementById('logBtnCard').onclick=openLog;
document.getElementById('closeLogBtn').onclick=closeLog;
document.getElementById('logOverlay').addEventListener('click',e=>{ if(e.target.id==='logOverlay') closeLog(); });

document.getElementById('goodBtn').onclick=openGood;
document.getElementById('closeGoodBtn').onclick=closeGood;
document.getElementById('printGoodBtn').onclick=triggerGoodPrint;
document.getElementById('goodOverlay').addEventListener('click',e=>{ if(e.target.id==='goodOverlay') closeGood(); });

document.getElementById('plannerBtn').onclick=openPlanner;
document.getElementById('closePlannerBtn').onclick=closePlanner;
document.getElementById('printPlannerBtn').onclick=triggerPlannerPrint;
document.getElementById('plannerOverlay').addEventListener('click',e=>{ if(e.target.id==='plannerOverlay') closePlanner(); });
document.getElementById('plannerMoreBtn').onclick=()=>{ plannerShown+=PLANNER_PAGE; renderPlanner(); };
document.getElementById('reorderToggleBtn').onclick=()=>{
  const panel=document.getElementById('reorderPanel');
  const nowOpen=!panel.classList.contains('open');
  panel.classList.toggle('open',nowOpen);
  if(nowOpen) renderReorderPanel();
};
document.getElementById('resetOrderBtn').onclick=resetChapterOrder;
document.getElementById('lockPlanBtn').onclick=lockPlan;
document.getElementById('regenPlanBtn').onclick=regeneratePlan;
document.getElementById('clearPlanBtn').onclick=clearPlan;
document.getElementById('plannerPaceSetBtn').onclick=()=>{
  const v=parseFloat(document.getElementById('plannerPaceInput').value);
  if(!v||v<=0){ alert('Enter a positive number.'); return; }
  state.dailyTarget=v; plannerShown=PLANNER_PAGE; saveState(); renderAll(); renderPlanner();
};
document.getElementById('plannerDeadlineSetBtn').onclick=()=>{
  const v=document.getElementById('plannerDeadlineInput').value;
  if(!v){ alert('Pick a date first.'); return; }
  state.deadline=v; plannerShown=PLANNER_PAGE; saveState(); renderAll(); renderPlanner();
};

function triggerLogPrint(){ renderLog(); printOverlay('logOverlay'); }
document.getElementById('printLogBtn').onclick=triggerLogPrint;
document.getElementById('printLogBtnInline').onclick=triggerLogPrint;
document.getElementById('inlineLogMoreBtn').onclick=()=>{ inlineLogExpanded=true;renderInlineLog(); };

document.getElementById('markAllBtn').onclick=()=>{
  const ch=CHAPTERS.find(c=>c.id===activeChapter);
  let added=0,xpGain=0;const t=todayStr();
  ch.sections.forEach(s=>{
    if(isSkipped(ch.id,s.key)) return;
    const arr=state.ticks[ch.id][s.key];
    for(let i=0;i<arr.length;i++){
      if(!arr[i]){
        arr[i]=true;added++;
        const k=logKey(ch.id,s.key,i);
        state.log[k]=t;
        const amt=xpForQuestion(s.key);
        state.qXP[k]=amt;
        xpGain+=amt;
      }
    }
  });
  if(added>0){ registerActivity(added);awardXP(xpGain); }
  checkAchievements();checkMissionXP();autoUpdateTaskCompletion();saveState();renderAll();
};

document.getElementById('clearChBtn').onclick=()=>{
  if(!confirm('Clear all progress for this chapter?')) return;
  const ch=CHAPTERS.find(c=>c.id===activeChapter);
  let removed=0,xpLoss=0;
  ch.sections.forEach(s=>{
    const arr=state.ticks[ch.id][s.key];
    for(let i=0;i<arr.length;i++){
      if(arr[i]){
        arr[i]=false;removed++;
        const k=logKey(ch.id,s.key,i);
        xpLoss+=(state.qXP&&state.qXP[k])||xpForQuestion(s.key);
        delete state.qXP[k];
        delete state.log[k];
      }
    }
  });
  registerActivity(-removed);
  if(xpLoss>0) awardXP(-xpLoss);
  autoUpdateTaskCompletion();saveState();renderAll();
};

document.getElementById('skipChBtn').onclick=()=>{
  const chId=activeChapter;const skipped=isChapterSkipped(chId);
  if(!skipped&&!confirm('Skip this entire chapter? It will be excluded from all totals.')) return;
  state.chapterSkipped[chId]=!skipped;saveState();renderAll();
};

document.getElementById('deadlineSetBtn').onclick=()=>{
  const v=document.getElementById('deadlineInput').value;
  if(!v){ alert('Pick a date first.'); return; }
  state.deadline=v;saveState();renderDeadline();
};
document.getElementById('deadlineClearBtn').onclick=()=>{
  state.deadline=null;document.getElementById('deadlineInput').value='';saveState();renderDeadline();
};
document.getElementById('dailyPaceSetBtn').onclick=()=>{
  const v=parseFloat(document.getElementById('dailyPaceInput').value);
  if(!v||v<=0){ alert('Enter a positive number.'); return; }
  state.dailyTarget=v;saveState();renderDailyPace();
};
document.getElementById('dailyPaceClearBtn').onclick=()=>{
  state.dailyTarget=null;document.getElementById('dailyPaceInput').value='';saveState();renderDailyPace();
};

document.getElementById('exportBtn').onclick=()=>{
  const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');a.href=url;
  a.download='nk-chem-tracker-'+todayStr()+'.json';a.click();URL.revokeObjectURL(url);
};

document.getElementById('importBtnLabel').onclick=()=>{ document.getElementById('importFile').click(); };
document.getElementById('importFile').onchange=(e)=>{
  const file=e.target.files[0];if(!file) return;
  const reader=new FileReader();
  reader.onload=(ev)=>{
    try{
      const parsed=JSON.parse(ev.target.result);
      const base=defaultState();
      CHAPTERS.forEach(ch=>{
        ch.sections.forEach(s=>{
          if(parsed.ticks&&parsed.ticks[ch.id]&&parsed.ticks[ch.id][s.key])
            base.ticks[ch.id][s.key]=parsed.ticks[ch.id][s.key].map(v=>!!v);
          if(parsed.good&&parsed.good[ch.id]&&parsed.good[ch.id][s.key])
            base.good[ch.id][s.key]=parsed.good[ch.id][s.key].map(v=>!!v);
          if(parsed.skipped&&parsed.skipped[ch.id]&&typeof parsed.skipped[ch.id][s.key]!=='undefined')
            base.skipped[ch.id][s.key]=!!parsed.skipped[ch.id][s.key];
        });
        if(parsed.chapterSkipped&&typeof parsed.chapterSkipped[ch.id]!=='undefined')
          base.chapterSkipped[ch.id]=!!parsed.chapterSkipped[ch.id];
        if(parsed.customCounts&&parsed.customCounts[ch.id])
          base.customCounts[ch.id]=Object.assign({},parsed.customCounts[ch.id]);
      });
      base.playerName=parsed.playerName||null;
      base.targetYear=parsed.targetYear||'2027';
      base.celebratedChapters=Array.isArray(parsed.celebratedChapters)?parsed.celebratedChapters.slice():[];
      base.accentTheme=parsed.accentTheme||'blue';
      base.soundOn=(typeof parsed.soundOn==='boolean')?parsed.soundOn:true;
      base.activity=parsed.activity||{};
      base.streak=parsed.streak||{current:0,longest:0,lastDate:null};
      base.deadline=parsed.deadline||null;base.log=parsed.log||{};
      base.qXP=parsed.qXP||{};
      base.effort=parsed.effort||{};
      base.dailyTarget=(typeof parsed.dailyTarget==='number')?parsed.dailyTarget:null;
      base.xp=parsed.xp||0;base.achievements=parsed.achievements||[];
      base.completedMissions=parsed.completedMissions||{};
      base.taskCompletion=parsed.taskCompletion||{};
      base.taskStreak=parsed.taskStreak||{current:0,longest:0,lastDate:null};
      base.taskXPAwarded=parsed.taskXPAwarded||{};
      base.taskAutoCompletion=parsed.taskAutoCompletion||{};
      base.chapterOrder=Array.isArray(parsed.chapterOrder)?parsed.chapterOrder.slice():base.chapterOrder;
      base.plan=(parsed.plan&&Array.isArray(parsed.plan.days))?parsed.plan:null;
      base.sessions=Array.isArray(parsed.sessions)?parsed.sessions.slice():[];
      base.activeSession=(parsed.activeSession&&typeof parsed.activeSession.startTs==='number')?parsed.activeSession:null;
      normalizeTicksFor(base);normalizeChapterOrderFor(base);state=base;prevLevel=levelFromXP(state.xp||0);
      saveState();renderAll();alert('Backup restored!');
    }catch(err){ alert('Invalid backup file.'); }
  };
  reader.readAsText(file);
};

// Close level flash on click
document.getElementById('levelFlash').addEventListener('click',()=>{
  document.getElementById('levelFlash').classList.remove('show');
});

// ══════════════════════════════════════════════════
// PLAYER NAME / ONBOARDING / GREETING
// ══════════════════════════════════════════════════
function renderGreeting(){
  const el=document.getElementById('brandGreeting');
  const yr=state.targetYear||'2027';
  el.textContent=`JEE ${yr} · PHYSICAL CHEMISTRY GRIND`;
}
function openOnboarding(){
  document.getElementById('onboardOverlay').classList.add('open');
  setTimeout(()=>document.getElementById('onboardNameInput').focus(),150);
}
function closeOnboarding(){ document.getElementById('onboardOverlay').classList.remove('open'); }
function submitOnboarding(){
  const v=document.getElementById('onboardNameInput').value.trim();
  if(!v){ document.getElementById('onboardNameInput').focus(); return; }
  const yInput=document.getElementById('onboardYearInput').value.trim();
  const y=parseInt(yInput,10);
  state.playerName=v.slice(0,30);
  state.targetYear=(!isNaN(y)&&y>=2026&&y<=2035)?String(y):'2027';
  saveState();
  renderGreeting();
  closeOnboarding();
  showToast(`⚡ Welcome aboard, ${state.playerName}!`,'xp');
}
document.getElementById('onboardStartBtn').onclick=submitOnboarding;
document.getElementById('onboardNameInput').addEventListener('keydown',e=>{ if(e.key==='Enter') submitOnboarding(); });

// ══════════════════════════════════════════════════
// GAME RULES MODAL
// ══════════════════════════════════════════════════
function renderRulesBody(){
  document.getElementById('rulesBody').innerHTML=`
    <div style="margin-bottom:14px;"><b style="color:var(--green);">⚡ XP &amp; LEVELS</b><br>
    Every question you tick pays XP based on its difficulty tier (Ex.1 → Section F, harder sections pay more).
    XP accumulates toward levels on a rising curve — each level needs more than the last. Climbing levels unlocks new ranks, from 🔬 RECRUIT up to 🌟 CHEM GOD.</div>
    <div style="margin-bottom:14px;"><b style="color:var(--amber);">🔥 STREAKS</b><br>
    Solve at least one question on a day to keep your solve streak alive. Separately, fully clearing your locked plan's daily quota keeps your task streak alive. Miss a day and the streak resets — but your XP and progress are never lost.</div>
    <div style="margin-bottom:14px;"><b style="color:var(--purple);">🎯 DAILY MISSIONS</b><br>
    Three missions are handed out each day (quantity-based or section-clear based). Complete them for bonus XP on top of your normal per-question XP.</div>
    <div style="margin-bottom:14px;"><b style="color:var(--green);">🏆 ACHIEVEMENTS</b><br>
    Milestone badges for question counts, streak lengths, chapters finished, and overall book completion. Each unlock pays a flat XP bonus.</div>
    <div style="margin-bottom:14px;"><b style="color:var(--amber);">🗓️ THE PLANNER &amp; BACKLOG</b><br>
    Set a daily pace or a target deadline, then hit <b style="color:var(--purple);">LOCK PLAN</b> to freeze a fixed day-by-day schedule. Each day keeps its own fixed set of questions — falling behind doesn't reshuffle tomorrow, it shows up in the <b>BACKLOG</b> box until you clear it.</div>
    <div><b style="color:var(--green);">★ GOOD QUESTIONS</b><br>
    Right-click any question box to flag it as a GOOD question worth revising later — pull the full list anytime from the ★ GOOD QS button.</div>
  `;
}
function openRules(){ renderRulesBody(); document.getElementById('rulesOverlay').classList.add('open'); }
function closeRules(){ document.getElementById('rulesOverlay').classList.remove('open'); }
document.getElementById('rulesBtn').onclick=openRules;
document.getElementById('closeRulesBtn').onclick=closeRules;
document.getElementById('rulesOverlay').addEventListener('click',e=>{ if(e.target.id==='rulesOverlay') closeRules(); });

// ══════════════════════════════════════════════════
// FLOATING BACKGROUND PARTICLES
// ══════════════════════════════════════════════════
function initParticles(){
  const field=document.getElementById('particleField');
  const N=18;
  for(let i=0;i<N;i++){
    const p=document.createElement('div');
    p.className='particle';
    const size=1.5+Math.random()*3;
    p.style.width=size+'px';p.style.height=size+'px';
    p.style.left=Math.random()*100+'%';
    const dur=14+Math.random()*18;
    p.style.animationDuration=dur+'s';
    p.style.animationDelay=(-Math.random()*dur)+'s';
    field.appendChild(p);
  }
}

// ══════════════════════════════════════════════════
// CONFETTI
// ══════════════════════════════════════════════════
function fireConfetti(){
  const field=document.getElementById('confettiField');
  const colors=['#2ee6ff','#7c6bff','#ffb020','#ff4d6a','#2ee6ff'];
  const N=60;
  for(let i=0;i<N;i++){
    const c=document.createElement('div');
    c.className='confetti-piece';
    const size=5+Math.random()*6;
    c.style.width=size+'px';c.style.height=size*0.4+'px';
    c.style.left=Math.random()*100+'%';
    c.style.background=colors[Math.floor(Math.random()*colors.length)];
    const dur=1.8+Math.random()*1.4;
    c.style.animationDuration=dur+'s';
    c.style.animationDelay=(Math.random()*0.3)+'s';
    field.appendChild(c);
    setTimeout(()=>c.remove(),(dur+0.3)*1000+200);
  }
}

// ══════════════════════════════════════════════════
// SOUND EFFECTS (WebAudio, no external files)
// ══════════════════════════════════════════════════
let _actx=null;
function getActx(){ if(!_actx){ try{ _actx=new (window.AudioContext||window.webkitAudioContext)(); }catch(e){} } return _actx; }
function playSound(kind){
  if(!state.soundOn) return;
  const ctx=getActx(); if(!ctx) return;
  const now=ctx.currentTime;
  function tone(freq,start,dur,type,gain){
    const osc=ctx.createOscillator();const g=ctx.createGain();
    osc.type=type||'sine';osc.frequency.setValueAtTime(freq,now+start);
    g.gain.setValueAtTime(0,now+start);
    g.gain.linearRampToValueAtTime(gain||0.08,now+start+0.01);
    g.gain.exponentialRampToValueAtTime(0.001,now+start+dur);
    osc.connect(g);g.connect(ctx.destination);
    osc.start(now+start);osc.stop(now+start+dur+0.02);
  }
  if(kind==='tick') tone(880,0,0.09,'sine',0.06);
  else if(kind==='levelup'){ tone(523,0,0.14,'triangle',0.09); tone(659,0.1,0.14,'triangle',0.09); tone(784,0.2,0.22,'triangle',0.1); }
  else if(kind==='complete'){ tone(660,0,0.12,'triangle',0.08); tone(880,0.12,0.12,'triangle',0.08); tone(1100,0.24,0.25,'triangle',0.09); }
  else if(kind==='achievement') tone(988,0,0.2,'square',0.05);
}

// ══════════════════════════════════════════════════
// ACCENT THEME
// ══════════════════════════════════════════════════
const ACCENT_THEMES={
  blue:  {green:'#2ee6ff',greenDim:'#0d84a8',greenGlow:'rgba(46,230,255,0.4)'},
  emerald:{green:'#2ef7a0',greenDim:'#0d9d63',greenGlow:'rgba(46,247,160,0.4)'},
  violet:{green:'#b28aff',greenDim:'#6b48c4',greenGlow:'rgba(178,138,255,0.4)'},
  amber: {green:'#ffb020',greenDim:'#b87710',greenGlow:'rgba(255,176,32,0.4)'},
  rose:  {green:'#ff5c8a',greenDim:'#b8305e',greenGlow:'rgba(255,92,138,0.4)'},
};
function applyAccentTheme(name){
  const t=ACCENT_THEMES[name]||ACCENT_THEMES.blue;
  const root=document.documentElement.style;
  root.setProperty('--green',t.green);
  root.setProperty('--green-dim',t.greenDim);
  root.setProperty('--green-glow',t.greenGlow);
}
function renderAccentSwatches(){
  const wrap=document.getElementById('accentSwatches');
  if(!wrap) return;
  wrap.innerHTML=Object.keys(ACCENT_THEMES).map(name=>{
    const t=ACCENT_THEMES[name];
    const active=(state.accentTheme||'blue')===name;
    return `<div class="accent-swatch${active?' active':''}" data-theme="${name}" style="background:${t.green};" title="${name}"></div>`;
  }).join('');
  wrap.querySelectorAll('.accent-swatch').forEach(el=>{
    el.onclick=()=>{
      state.accentTheme=el.dataset.theme;
      applyAccentTheme(state.accentTheme);
      saveState();renderAccentSwatches();
    };
  });
}

// ══════════════════════════════════════════════════
// SETTINGS PANEL (sound, focus mode, accent)
// ══════════════════════════════════════════════════
function refreshSettingsButtons(){
  const soundBtn=document.getElementById('soundBtn');
  const settingsSound=document.getElementById('settingsSoundToggle');
  const focusBtn=document.getElementById('focusBtn');
  const settingsFocus=document.getElementById('settingsFocusToggle');
  const focusOn=document.body.classList.contains('focus-mode');
  if(soundBtn) soundBtn.textContent=state.soundOn?'🔊':'🔇';
  if(settingsSound) settingsSound.textContent=state.soundOn?'🔊 ON':'🔇 OFF';
  if(focusBtn) focusBtn.textContent=focusOn?'🎯 EXIT FOCUS':'🎯 FOCUS';
  if(settingsFocus) settingsFocus.textContent=focusOn?'🎯 ON':'🎯 OFF';
}
function toggleSound(){ state.soundOn=!state.soundOn; saveState(); refreshSettingsButtons(); if(state.soundOn) playSound('tick'); }
function toggleFocusMode(){ document.body.classList.toggle('focus-mode'); refreshSettingsButtons(); }
function openSettings(){ renderAccentSwatches(); refreshSettingsButtons(); document.getElementById('settingsOverlay').classList.add('open'); }
function closeSettings(){ document.getElementById('settingsOverlay').classList.remove('open'); }
document.getElementById('settingsBtn').onclick=openSettings;
document.getElementById('closeSettingsBtn').onclick=closeSettings;
document.getElementById('settingsOverlay').addEventListener('click',e=>{ if(e.target.id==='settingsOverlay') closeSettings(); });
document.getElementById('soundBtn').onclick=toggleSound;
document.getElementById('settingsSoundToggle').onclick=toggleSound;
document.getElementById('focusBtn').onclick=toggleFocusMode;
document.getElementById('settingsFocusToggle').onclick=toggleFocusMode;

// ══════════════════════════════════════════════════
// KEYBOARD SHORTCUTS
// ══════════════════════════════════════════════════
document.addEventListener('keydown',(e)=>{
  const tag=(e.target&&e.target.tagName)||'';
  if(tag==='INPUT'||tag==='TEXTAREA') return;
  if(e.key>='1'&&e.key<='9'){
    const idx=parseInt(e.key,10)-1;
    const chs=orderedChapters();
    if(chs[idx]){ activeChapter=chs[idx].id; renderAll(); }
  } else if(e.key==='f'||e.key==='F'){
    toggleFocusMode();
  } else if(e.key==='Enter'){
    const ch=CHAPTERS.find(c=>c.id===activeChapter);
    if(!ch) return;
    for(const s of ch.sections){
      if(isSkipped(ch.id,s.key)) continue;
      const arr=state.ticks[ch.id][s.key];
      const idx=arr.findIndex(v=>!v);
      if(idx>=0 && idx<effCount(ch.id,s.key)){
        const grid=document.querySelector(`.qgrid[data-ch="${ch.id}"][data-sec="${s.key}"]`);
        if(grid && grid.children[idx]){ grid.children[idx].click(); }
        break;
      }
    }
  }
});

// ══════════════════════════════════════════════════
// MOTIVATIONAL QUOTES (rotates daily)
// ══════════════════════════════════════════════════
const QUOTES=[
  "Physical Chemistry rewards the ones who show up daily, not the ones who cram.",
  "Every question you tick is a rank point in the real exam.",
  "JEE toppers aren't smarter — they just solved more questions than you did today.",
  "Consistency beats intensity. One section a day beats zero sections for a week.",
  "The backlog doesn't grow if you don't let today slip.",
  "Ex.2 Section F questions are worth the most XP for a reason — they build real problem-solving.",
  "Your future self is counting on the version of you sitting here right now.",
  "A locked plan only works if you trust it enough to follow it daily.",
  "Mole Concept mastery carries into every single chapter after it. Don't skip the fundamentals.",
  "Small daily wins compound into a finished book before deadline.",
];
function renderQuote(){
  const el=document.getElementById('quoteStrip');
  if(!el) return;
  const dayIdx=Math.floor(Date.now()/86400000)%QUOTES.length;
  el.textContent='"'+QUOTES[dayIdx]+'"';
}

// ══════════════════════════════════════════════════
// WEEKLY / MONTHLY STATS CHART
// ══════════════════════════════════════════════════
let statsRangeMode='week'; // 'week' | 'month' | 'year'
function allTimeTotalQuestions(){
  return Object.values(state.activity||{}).reduce((a,b)=>a+(b||0),0);
}
function monthLabelOffset(n){ // n months back from current month, returns {key:'YYYY-MM',label}
  const d=new Date(); d.setDate(1); d.setMonth(d.getMonth()-n);
  const key=d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0');
  const label=d.toLocaleDateString('en-IN',{month:'short',year:'2-digit'});
  return {key,label,date:d};
}
function renderStatsChart(){
  const chartBody=document.getElementById('statsChartBody');
  const tableEl=document.getElementById('statsTable');
  const totalRow=document.getElementById('statsTotalRow');

  document.querySelectorAll('#statsRangeTabs button').forEach(b=>{
    b.classList.toggle('active', b.dataset.range===statsRangeMode);
  });

  let labels=[],vals=[],rangeLabel='';
  if(statsRangeMode==='week'||statsRangeMode==='month'){
    const n=statsRangeMode==='week'?7:30;
    const days=[]; for(let i=n-1;i>=0;i--) days.push(dateStrOffset(i));
    labels=days.map(d=>new Date(d+'T00:00:00').toLocaleDateString('en-IN',{day:'2-digit',month:n>14?undefined:'short'}));
    vals=days.map(d=>state.activity[d]||0);
    rangeLabel=n===7?'the last 7 days':'the last 30 days';
    var rowKeys=days; var rowFmt=(d)=>formatDateLabel(d);
  } else {
    // year: aggregate by month, last 12 months
    const months=[]; for(let i=11;i>=0;i--) months.push(monthLabelOffset(i));
    labels=months.map(m=>m.label);
    vals=months.map(m=>{
      let sum=0;
      Object.keys(state.activity||{}).forEach(dateKey=>{
        if(dateKey.startsWith(m.key)) sum+=state.activity[dateKey]||0;
      });
      return sum;
    });
    rangeLabel='the last 12 months';
    var rowKeys=months.map(m=>m.label); var rowFmt=(l)=>l;
  }

  const max=Math.max(1,...vals);
  const wrap=document.createElement('div');
  wrap.className='stats-chart-wrap';
  wrap.style.gap=vals.length>14?'3px':'6px';
  vals.forEach((v,i)=>{
    const h=Math.max(2,Math.round((v/max)*100));
    const col=document.createElement('div');
    col.className='stats-bar-col';
    col.innerHTML=`<span class="stats-bar-val">${v>0?v:''}</span><div class="stats-bar" style="height:0%" data-h="${h}"></div>${vals.length<=14?`<span class="stats-bar-label">${labels[i]}</span>`:''}`;
    wrap.appendChild(col);
  });
  chartBody.innerHTML='';
  chartBody.appendChild(wrap);

  const total=vals.reduce((a,b)=>a+b,0);
  const avg=(total/vals.length).toFixed(1);
  const summary=document.createElement('div');
  summary.style.cssText='margin-top:12px;font-size:11px;color:var(--text-dim);text-align:center;';
  summary.textContent=`${total} questions solved in ${rangeLabel} · avg ${avg}/${statsRangeMode==='year'?'month':'day'}`;
  chartBody.appendChild(summary);

  requestAnimationFrame(()=>{
    wrap.querySelectorAll('.stats-bar').forEach(b=>{ b.style.height=b.dataset.h+'%'; });
  });

  totalRow.innerHTML=`
    <div class="stats-total-chip"><div class="v">${allTimeTotalQuestions()}</div><div class="l">ALL-TIME QUESTIONS</div></div>
    <div class="stats-total-chip"><div class="v">${total}</div><div class="l">IN THIS RANGE</div></div>
    <div class="stats-total-chip"><div class="v">${avg}</div><div class="l">AVG / ${statsRangeMode==='year'?'MONTH':'DAY'}</div></div>
  `;

  const headLabel=statsRangeMode==='year'?'MONTH':'DATE';
  tableEl.innerHTML=`<tr><th>${headLabel}</th><th style="text-align:right;">QUESTIONS</th></tr>`
    +rowKeys.map((k,i)=>`<tr><td>${statsRangeMode==='year'?rowFmt(k):rowFmt(k)}</td><td class="n">${vals[i]}</td></tr>`).join('');
}
function openStats(){ renderStatsChart(); document.getElementById('statsOverlay').classList.add('open'); }
function closeStats(){ document.getElementById('statsOverlay').classList.remove('open'); }
document.getElementById('statsBtn').onclick=openStats;
document.getElementById('closeStatsBtn').onclick=closeStats;
document.getElementById('statsOverlay').addEventListener('click',e=>{ if(e.target.id==='statsOverlay') closeStats(); });
document.querySelectorAll('#statsRangeTabs button').forEach(btn=>{
  btn.onclick=()=>{ statsRangeMode=btn.dataset.range; renderStatsChart(); };
});

// ══════════════════════════════════════════════════
// HOLOGRAPHIC 4D ENHANCEMENT LAYER (visual only — no app state touched)
// ══════════════════════════════════════════════════
(function(){
  const TILT_SEL='.card,.mission-card,.ch-header,.overall-card,.section-block,.hstat,.xp-level-badge,.timer-box,.assistant-bubble';
  const RING_SEL='.card,.mission-card,.ch-header,.overall-card,.timer-box';

  function tagEl(el){
    if(!el.matches) return;
    if(el.matches(TILT_SEL)) el.classList.add('tilt-el');
    if(el.matches(RING_SEL)) el.classList.add('holo-ring');
  }
  function tagAll(root){
    if(root.querySelectorAll) root.querySelectorAll(TILT_SEL).forEach(tagEl);
  }
  tagAll(document);
  const holoObserver=new MutationObserver(muts=>{
    muts.forEach(m=>{
      m.addedNodes.forEach(n=>{
        if(n.nodeType!==1) return;
        tagEl(n);
        tagAll(n);
      });
    });
  });
  holoObserver.observe(document.body,{childList:true,subtree:true});

  // 3D cursor-tilt on hover
  let activeTiltEl=null;
  document.addEventListener('mousemove',(e)=>{
    const el=e.target.closest ? e.target.closest(TILT_SEL) : null;
    if(!el){
      if(activeTiltEl){
        activeTiltEl.classList.remove('tilting');
        activeTiltEl.style.removeProperty('--rx');
        activeTiltEl.style.removeProperty('--ry');
        activeTiltEl=null;
      }
      return;
    }
    if(el!==activeTiltEl && activeTiltEl){
      activeTiltEl.classList.remove('tilting');
      activeTiltEl.style.removeProperty('--rx');
      activeTiltEl.style.removeProperty('--ry');
    }
    const r=el.getBoundingClientRect();
    const px=(e.clientX-r.left)/r.width;
    const py=(e.clientY-r.top)/r.height;
    const ry=(px-0.5)*10;
    const rx=(0.5-py)*8;
    el.style.setProperty('--rx',rx.toFixed(2)+'deg');
    el.style.setProperty('--ry',ry.toFixed(2)+'deg');
    el.classList.add('tilting');
    activeTiltEl=el;
  });

  // Cursor-reactive spotlight glow
  const glow=document.getElementById('cursorGlow');
  if(glow){
    window.addEventListener('mousemove',(e)=>{
      glow.style.opacity='1';
      glow.style.transform=`translate(${e.clientX}px, ${e.clientY}px) translate(-50%,-50%)`;
    });
    document.addEventListener('mouseout',(e)=>{
      if(!e.relatedTarget && !e.toElement) glow.style.opacity='0';
    });
  }
})();

// ══════════════════════════════════════════════════
// INIT
// ══════════════════════════════════════════════════
normalizeMilestones();
updateStreak();
updateTaskStreak();
autoUpdateTaskCompletion();

/* ═══════════════════════════════════════════════════════════════
   BLACK MATTER GAME LAYER
   ═══════════════════════════════════════════════════════════════ */
(function(){
  const BM = {
    onlyLeft:false,
    portal:'home',
    conqueredFilter:'all'
  };

  function bmSave(){ try{saveState();}catch(e){} }

  // New persisted fields are added non-destructively.
  state.conquered = state.conquered || {};
  state.chapterJourney = state.chapterJourney || {order:[],completed:[]};

  function bmQKey(chId,secKey,i){ return `${chId}|${secKey}|${i}`; }
  function bmIsDone(chId,secKey,i){ return !!(state.ticks[chId] && state.ticks[chId][secKey] && state.ticks[chId][secKey][i]); }
  function bmIsImportant(chId,secKey,i){
    return !!(state.good[chId] && state.good[chId][secKey] && state.good[chId][secKey][i]);
  }
  function bmSetConquered(chId,secKey,i,val){
    state.conquered[bmQKey(chId,secKey,i)] = !!val;
  }
  function bmIsConquered(chId,secKey,i){ return !!state.conquered[bmQKey(chId,secKey,i)]; }
  function bmMarkComplete(chId,secKey,i){
    bmSetConquered(chId,secKey,i,true);
  }

  function bmFlyToConquered(box){
    const target=document.getElementById('conqueredCount')?.closest('.bm-nav-btn') || document.getElementById('conqueredCount');
    if(!box || !target) return;
    const a=box.getBoundingClientRect(), b=target.getBoundingClientRect();
    const ghost=box.cloneNode(true);
    ghost.className='qbox bm-flight';
    ghost.textContent=box.textContent;
    ghost.style.left=a.left+'px'; ghost.style.top=a.top+'px';
    ghost.style.width=a.width+'px'; ghost.style.height=a.height+'px';
    ghost.style.setProperty('--tx',(b.left+b.width/2-a.left-a.width/2)+'px');
    ghost.style.setProperty('--ty',(b.top+b.height/2-a.top-a.height/2)+'px');
    document.body.appendChild(ghost);
    target.classList.remove('bm-arrival'); void target.offsetWidth; target.classList.add('bm-arrival');
    setTimeout(()=>ghost.remove(),620);
  }


  function bmConqueredItems(){
    const items=[];
    CHAPTERS.forEach(ch=>ch.sections.forEach(s=>{
      const n=effCount(ch.id,s.key);
      for(let i=0;i<n;i++) if(bmIsConquered(ch.id,s.key,i) || bmIsDone(ch.id,s.key,i)){
        items.push({chId:ch.id,secKey:s.key,i,chName:ch.name,secName:s.label,important:bmIsImportant(ch.id,s.key,i),today:(state.log[bmQKey(ch.id,s.key,i)]===todayStr())});
      }
    }));
    return items;
  }

  function bmImportantItems(){
    const items=[];
    CHAPTERS.forEach(ch=>ch.sections.forEach(s=>{
      const n=effCount(ch.id,s.key);
      for(let i=0;i<n;i++) if(bmIsImportant(ch.id,s.key,i)){
        items.push({chId:ch.id,secKey:s.key,i,chName:ch.name,secName:s.label,done:bmIsDone(ch.id,s.key,i)});
      }
    }));
    return items;
  }

  function bmRenderConquered(){
    const body=document.getElementById('conqueredBody');
    if(!body) return;
    let items=bmConqueredItems();
    if(BM.conqueredFilter==='today') items=items.filter(x=>x.today);
    if(BM.conqueredFilter==='important') items=items.filter(x=>x.important);
    const total=bmConqueredItems().length;
    const sub=document.getElementById('conqueredSub');
    if(sub) sub.textContent=`${total} conquered · active queue hides these when ONLY LEFT is enabled.`;
    if(!items.length){ body.innerHTML='<div class="log-empty">Nothing conquered yet. Clear a question from the active queue to build this portal.</div>'; return; }
    body.innerHTML='<div class="bm-list">'+items.map(x=>`
      <div class="bm-item">
        <div class="num${x.important?' gold':''}">${x.i+1}</div>
        <div class="meta"><div class="title">${x.chName} · ${x.secName}</div><div class="sub">${x.important?'★ IMPORTANT · ':''}${x.today?'CONQUERED TODAY':''}</div></div>
        <button class="restore" data-restore="${bmQKey(x.chId,x.secKey,x.i)}">↩ RESTORE</button>
      </div>`).join('')+'</div>';
    body.querySelectorAll('[data-restore]').forEach(b=>b.onclick=()=>{
      const [chId,secKey,idxStr]=b.dataset.restore.split('|'); const i=+idxStr;
      if(bmIsDone(chId,secKey,i)){
        const arr=state.ticks[chId][secKey];
        arr[i]=false;
        const k=logKey(chId,secKey,i);
        const amt=(state.qXP&&state.qXP[k])||xpForQuestion(secKey);
        delete state.qXP[k]; delete state.log[k];
        registerActivity(-1); awardXP(-amt);
      }
      bmSetConquered(chId,secKey,i,false);
      bmSave(); renderAll(); bmRenderConquered();
    });
  }

  function bmRenderImportant(){
    const body=document.getElementById('importantBody');
    if(!body) return;
    const items=bmImportantItems();
    if(!items.length){ body.innerHTML='<div class="log-empty">No golden questions yet. Right-click any question box to mark it important.</div>'; return; }
    body.innerHTML='<div class="bm-list">'+items.map(x=>`
      <div class="bm-item">
        <div class="num gold">★${x.i+1}</div>
        <div class="meta"><div class="title">${x.chName} · ${x.secName}</div><div class="sub">${x.done?'CONQUERED':'STILL OPEN'}</div></div>
        <button class="restore" data-unimportant="${bmQKey(x.chId,x.secKey,x.i)}">UNMARK</button>
      </div>`).join('')+'</div>';
    body.querySelectorAll('[data-unimportant]').forEach(b=>b.onclick=()=>{
      const [chId,secKey,idxStr]=b.dataset.unimportant.split('|'); const i=+idxStr;
      state.good[chId]=state.good[chId]||{};
      state.good[chId][secKey]=state.good[chId][secKey]||[];
      state.good[chId][secKey][i]=false;
      bmSave(); renderAll(); bmRenderImportant();
    });
  }

  function bmUpdateCounts(){
    const c=document.getElementById('conqueredCount'), im=document.getElementById('importantCount');
    if(c) c.textContent=bmConqueredItems().length;
    if(im) im.textContent=bmImportantItems().length;
    const p=document.getElementById('pendingToggleBtn');
    if(p) p.textContent=BM.onlyLeft?'SHOW ALL':'PENDING ONLY';
    const pm=document.getElementById('bmPendingMobile');
    if(pm) pm.textContent=BM.onlyLeft?'SHOW ALL':'PENDING ONLY';
  }

  function bmSetOnlyLeft(v){
    BM.onlyLeft=v;
    document.body.classList.toggle('only-left',v);
    bmUpdateCounts();
    renderAll();
    showToast(v?'◌ ACTIVE QUEUE: ONLY UNSOLVED':'◌ ACTIVE QUEUE: SHOWING ALL');
  }

  // Replace the old visual-only right-click behavior with a gold important mark
  // while retaining the existing GOOD portal behavior.
  const originalRenderMain = window.renderMain;
  window.renderMain = function(){
    originalRenderMain();
    const ch=CHAPTERS.find(c=>c.id===activeChapter);
    if(!ch) return;
    document.querySelectorAll('.qgrid .qbox').forEach(box=>{
      const grid=box.closest('.qgrid'); if(!grid) return;
      const secKey=grid.dataset.sec, i=+box.textContent-1;
      if(bmIsImportant(ch.id,secKey,i)) box.classList.add('bm-important');
    });
  };

  // Hook the existing render cycle so the new portals remain in sync.
  const oldRenderAll=window.renderAll;
  window.renderAll=function(){
    oldRenderAll();
    bmUpdateCounts();
    if(document.getElementById('conqueredOverlay')?.classList.contains('open')) bmRenderConquered();
    if(document.getElementById('importantOverlay')?.classList.contains('open')) bmRenderImportant();
    bmRenderJourney();
  };

  function bmOpen(id){ document.getElementById(id)?.classList.add('open'); if(id==='conqueredOverlay') bmRenderConquered(); if(id==='importantOverlay') bmRenderImportant(); if(id==='journeyOverlay') bmRenderJourney(); }
  function bmClose(id){ document.getElementById(id)?.classList.remove('open'); }

  // Chapter journey: the user chooses the next chapter instead of living with
  // the book's default order.
  function bmJourneyOrder(){
    const ids=state.chapterJourney.order||[];
    const remaining=ids.filter(id=>!state.chapterJourney.completed.includes(id));
    const fallback=orderedChapters().map(c=>c.id).filter(id=>!state.chapterJourney.completed.includes(id));
    return remaining.concat(fallback.filter(id=>!remaining.includes(id)));
  }

  function bmRenderJourney(){
    const grid=document.getElementById('journeyGrid'), prog=document.getElementById('journeyProgress');
    if(!grid) return;
    const order=bmJourneyOrder();
    const doneCount=CHAPTERS.filter(c=>{
      const cc=weightedChapterCounts(c.id); return cc.total>0&&cc.done>=cc.total;
    }).length;
    if(prog) prog.textContent=`${doneCount}/${CHAPTERS.length} chapters conquered · choose any unfinished chapter to put ON DECK`;
    grid.innerHTML=order.map(id=>{
      const ch=CHAPTERS.find(c=>c.id===id); if(!ch) return '';
      const cc=weightedChapterCounts(id), pct=cc.total?Math.round(cc.done/cc.total*100):0;
      const done=pct>=100&&cc.total>0;
      const current=id===activeChapter;
      return `<div class="journey-card${done?' done':''}${current?' current':''}" data-jump="${id}">
        <div class="jtop"><span class="jname">${ch.name}</span><span class="jpct">${pct}%</span></div>
        <div class="jbar"><div class="jfill" style="width:${pct}%"></div></div>
        <div class="jstate">${done?'CONQUERED':current?'ON DECK — CURRENT':'SELECT AS NEXT'}</div>
      </div>`;
    }).join('');
    grid.querySelectorAll('[data-jump]').forEach(card=>card.onclick=()=>{
      const id=card.dataset.jump;
      if(!state.chapterJourney.order.includes(id)) state.chapterJourney.order.push(id);
      activeChapter=id;
      if(!state.chapterJourney.completed.includes(id)) {
        state.chapterJourney.completed=state.chapterJourney.completed.filter(x=>x!==id);
      }
      bmSave(); renderAll(); bmClose('journeyOverlay');
      showToast('ON DECK → '+CHAPTERS.find(c=>c.id===id).name);
    });
  }

  // Intercept question clicks after the original handler has run. A solved
  // question is "conquered", which makes it available in Portal 02.
  document.addEventListener('click',e=>{
    const box=e.target.closest?.('.qbox');
    if(!box) return;
    const grid=box.closest('.qgrid'); if(!grid) return;
    const chId=grid.dataset.ch, secKey=grid.dataset.sec, i=+box.textContent-1;
    setTimeout(()=>{
      if(bmIsDone(chId,secKey,i)){
        bmSetConquered(chId,secKey,i,true);
        bmSave();
        // subtle black-matter "pop bomb" rather than a glowing effect
        box.classList.remove('bm-pop');
        void box.offsetWidth; box.classList.add('bm-pop');
        bmUpdateCounts();
      } else {
        bmSetConquered(chId,secKey,i,false);
        bmSave(); bmUpdateCounts();
      }
    },0);
  },true);

  // Add an explicit subtle completion animation to solved boxes.
  const extraStyle=document.createElement('style');
  extraStyle.textContent=`
    .qbox.bm-pop{animation:bmPop .34s cubic-bezier(.2,.8,.2,1) both !important;}
    @keyframes bmPop{0%{transform:scale(1);opacity:1;filter:none}35%{transform:scale(1.18);opacity:.95}70%{transform:scale(.86);opacity:.55}100%{transform:scale(.78);opacity:0}}
    .bm-important{border-color:#a47b2b !important;box-shadow:inset 0 0 0 1px #a47b2b !important;color:#d9ad54 !important;}
  `;
  document.head.appendChild(extraStyle);

  // Portal/nav wiring.
  document.querySelectorAll('[data-portal]').forEach(btn=>btn.addEventListener('click',()=>{
    document.querySelectorAll('[data-portal]').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const p=btn.dataset.portal;
    if(p==='home'){ bmClose('conqueredOverlay'); bmClose('importantOverlay'); }
    if(p==='conquered') bmOpen('conqueredOverlay');
    if(p==='important') bmOpen('importantOverlay');
  }));
  document.getElementById('pendingToggleBtn')?.addEventListener('click',()=>bmSetOnlyLeft(!BM.onlyLeft));
  document.getElementById('chapterJourneyBtn')?.addEventListener('click',()=>bmOpen('journeyOverlay'));
  document.getElementById('bmJourneyMobile')?.addEventListener('click',()=>bmOpen('journeyOverlay'));
  document.getElementById('bmPendingMobile')?.addEventListener('click',()=>bmSetOnlyLeft(!BM.onlyLeft));
  document.getElementById('bmSidebarBtn')?.addEventListener('click',()=>document.body.classList.toggle('sidebar-open'));
  document.getElementById('bmDockBtn')?.addEventListener('click',()=>document.body.classList.remove('sidebar-open'));
  document.querySelectorAll('[data-bm-close]').forEach(b=>b.addEventListener('click',()=>bmClose(b.dataset.bmClose)));
  document.querySelectorAll('.bm-overlay').forEach(o=>o.addEventListener('click',e=>{if(e.target===o)bmClose(o.id);}));
  document.querySelectorAll('[data-conquered-filter]').forEach(b=>b.addEventListener('click',()=>{
    document.querySelectorAll('[data-conquered-filter]').forEach(x=>x.classList.remove('active'));
    b.classList.add('active'); BM.conqueredFilter=b.dataset.conqueredFilter; bmRenderConquered();
  }));

  // Upgrade XP display into a more game-like "level + rank + next unlock" system.
  const oldRenderXP=window.renderXPBar;
  window.renderXPBar=function(){
    oldRenderXP();
    const xp=state.xp||0, lv=levelFromXP(xp), next=xpForLevel(lv);
    const rank=rankForXP(xp);
    const label=document.getElementById('xpRankName');
    if(label) label.textContent=`${rank.emoji} ${rank.name} · ${Math.max(0,next-xp)} XP TO NEXT`;
  };

  // Initialize once.
  bmUpdateCounts();
  bmRenderJourney();
})();

renderAll();
renderGreeting();
renderQuote();
initParticles();
applyAccentTheme(state.accentTheme);
refreshSettingsButtons();
if(state.activeSession) startTimerTick();
if(!state.playerName) openOnboarding();


/* ===== MOTION DYNAMICS ENGINE ===== */
(function(){
  const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  return; /* minimal: motion engine disabled */
  const starLayer=document.createElement('div'); starLayer.id='motionStars'; document.body.prepend(starLayer);
  for(let i=0;i<55;i++){
    const e=document.createElement('i'); e.className='motion-star';
    e.style.left=(Math.random()*100)+'%'; e.style.top=(Math.random()*100)+'%';
    e.style.setProperty('--dx',((Math.random()-.5)*180)+'px'); e.style.setProperty('--dy',((Math.random()-.5)*180)+'px');
    e.style.animationDuration=(8+Math.random()*18)+'s'; e.style.animationDelay=(-Math.random()*18)+'s'; starLayer.appendChild(e);
  }
  const pointer={x:innerWidth/2,y:innerHeight/2,px:innerWidth/2,py:innerHeight/2};
  addEventListener('pointermove',e=>{pointer.x=e.clientX;pointer.y=e.clientY;});
  function gravity(){
    pointer.px+=(pointer.x-pointer.px)*.08; pointer.py+=(pointer.y-pointer.py)*.08;
    document.querySelectorAll('.chapter-card,.stat-card,.mission-card').forEach((el,i)=>{
      if(!el.matches(':hover')){
        const r=el.getBoundingClientRect(), cx=r.left+r.width/2, cy=r.top+r.height/2;
        const dx=pointer.px-cx,dy=pointer.py-cy,d=Math.hypot(dx,dy)||1;
        if(d<360){ const f=(1-d/360)*2.6; el.style.transform=`translate(${dx/d*f}px,${dy/d*f}px)`; }
        else el.style.transform='';
      }
    });
    requestAnimationFrame(gravity);
  }
  requestAnimationFrame(gravity);
  document.addEventListener('pointermove',e=>{
    const q=e.target.closest('.qbox'); if(!q)return;
    const r=q.getBoundingClientRect(); q.style.setProperty('--mx',(e.clientX-r.left)+'px');q.style.setProperty('--my',(e.clientY-r.top)+'px');
  },{passive:true});
  function burst(x,y,text){
    const t=document.createElement('div');t.className='motion-burst';t.textContent=text;t.style.left=x+'px';t.style.top=y+'px';document.body.appendChild(t);setTimeout(()=>t.remove(),950);
    for(let i=0;i<8;i++){const p=document.createElement('i');p.className='motion-particle';p.style.left=x+'px';p.style.top=y+'px';const a=Math.PI*2*i/8,rad=28+Math.random()*38;p.style.setProperty('--tx',Math.cos(a)*rad+'px');p.style.setProperty('--ty',Math.sin(a)*rad+'px');document.body.appendChild(p);setTimeout(()=>p.remove(),750)}
  }
  document.addEventListener('click',e=>{
    const q=e.target.closest('.qbox'); if(!q)return;
    const wasDone=q.classList.contains('done');
    if(!wasDone){const r=q.getBoundingClientRect();setTimeout(()=>burst(r.left+r.width/2,r.top+r.height/2,'+XP'),60)}
  });
  // magnetic dock / buttons
  document.addEventListener('pointermove',e=>{
    const b=e.target.closest('#bmDock button,.mobile-bar button,.btn');if(!b)return;
    const r=b.getBoundingClientRect(),dx=e.clientX-(r.left+r.width/2),dy=e.clientY-(r.top+r.height/2),d=Math.hypot(dx,dy);
    if(d<90)b.style.transform=`translate(${dx*.08}px,${dy*.08}px) scale(1.025)`;
  });
  document.addEventListener('pointerleave',e=>{if(e.target.matches('#bmDock button,.mobile-bar button,.btn'))e.target.style.transform=''});
})();

