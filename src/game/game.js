import Phaser from 'phaser';
import {
  UI_TEXTS, STEPS, SMAP, CLASSES, WORLD_DEFS, INNER_CRITICS, WORLD_INTROS, WORLD_DEBRIEF, WORLD_CAREER_LEVELS,
  RAL_BASE, AREA_MULTIPLIER, RAL_LEVEL_BY_TIER, computeOfferRange, RAL_LABEL_BY_WORLD, WORLD_COMPANY_SIZE,
  computeReadiness, tierFromReadiness, createPivaState, applyRevenueEffect,
  INTERVIEW_QUESTIONS, INTERVIEW_PASS_RATIO, INTERVIEW_WORLD_QUESTIONS,
  INTERVIEW_LUCK_REJECT_MAX, INTERVIEW_LUCK_REJECT_MIN, INTERVIEW_LUCK_MESSAGES,
  INSIDER_RETENTION_RATIO, NETWORK_JOB_CHANGE_BONUS_CAP,
  INTERNAL_PROMOTION_RAL_CAP, EXTERNAL_JOB_CHANGE_RAL_CAP,
  JOB_CHANGE_TRANSITIONS, PMI_ILLEGAL_QUESTION_NOTICE,
} from '../data/career-world-data.js';
import { getVisibleNpcs, getUnlockedLevel, isWorldFullyExplored } from './npcVisibility.js';
import { isAuthenticated, getInitialUser, signOut } from '../auth/supabaseClient.js';
import { saveProgress, resetProgress, loadProgress } from '../auth/persistence.js';

// ══════════════════════════════════════════════════════════════
// applyUITexts — popola tutti gli elementi HTML statici
// da UI_TEXTS (definito in career-world_data.js).
// Chiamato una sola volta al DOMContentLoaded.
// ══════════════════════════════════════════════════════════════
function applyUITexts(){
  const T = UI_TEXTS;

  // <title>
  document.title = T.meta.page_title;

  // Title screen
  document.getElementById('uiGameTitle').innerHTML   = T.title.game_title.replace('\n','<br>');
  document.getElementById('uiVersion').textContent   = T.meta.version;
  document.getElementById('uiTagline').textContent   = T.title.tagline;
  document.getElementById('uiDescription').innerHTML = T.title.description;
  document.getElementById('btnStart').textContent    = T.title.btn_start;

  // Assessment sidebar
  document.getElementById('uiAssessSidebarTitle').textContent = T.assess.sidebar_title;
  document.getElementById('uiAssessSidebarNote').innerHTML    = T.assess.sidebar_note;

  // Step labels (0, 1, 2)
  T.assess.step_labels.forEach((s, i) => {
    const el = document.getElementById(`uiStep${i}Label`);
    if(el) el.innerHTML = `${s.label}<br><span style="font-size:.68em;color:var(--muted)">${s.sub}</span>`;
  });

  // Card screen — testi fissi (bias_note e btn_enter sono popolati da renderCard())
  document.getElementById('uiCardEyebrow').textContent  = T.card.eyebrow;
  document.getElementById('uiCardHeadline').innerHTML   = T.card.headline;
  document.getElementById('uiCardExpl').textContent     = T.card.explanation;
  document.getElementById('btnEnterGame').textContent   = T.card.btn_enter;
  document.getElementById('uiSwipeHint').textContent    = T.card.swipe_hint;

  // Game screen — messaggio default e touch controls
  document.getElementById('gMsg').textContent = T.game.msg_default;
  document.getElementById('tc-left').textContent  = T.touch.btn_left;
  document.getElementById('tc-right').textContent = T.touch.btn_right;
  document.getElementById('tc-up').textContent    = T.touch.btn_up;
  document.getElementById('tc-down').textContent  = T.touch.btn_down;
  document.getElementById('tc-act').textContent   = T.touch.btn_act;
}

// ══════════════════════════════════════
// GLOBAL STATE
// ══════════════════════════════════════
export const ST={
  screen:'title', step:0,
  ans:{hard:{},soft:{},pref:{}},
  char:null,
  gs:{SKILL:0,VOICE:0,CLARITY:0,NETWORK:0,ENERGY:50,RADAR:0,INSIDER:0}, // ENERGY=STAT_MAX.ENERGY (dichiarato più sotto, non referenziabile qui)
  world:{id:null,visited:[],choices:[],patterns:[],track:null,officialLevel:0,officialRAL:null,pivaState:null},
  // { [worldId]: {visited,choices,patterns,track,officialLevel,officialRAL,pivaState} } — memoria persistente.
  // pivaState (solo mondo 'piva') = {fatturato,reputationMultiplier,contracts,concentrationRisk},
  // vedi createPivaState()/applyRevenueEffect() in career-world-data.js e handleChoice() sotto.
  // officialLevel/officialRAL = livello e RAL "ufficiali" (via Cambia lavoro
  // o il primo ingresso gratuito), separati dal livello ESPLORATO che si
  // legge da `visited` (vedi §5.2/§9 in CAREER_WORLD_TESTI_E_REGOLE.md).
  worldsProgress:{},
  worldPath:null,
  worldHistory:[],
  recalibrated:false,  // true dopo l'unica ricalibrazione di classe consentita (vedi maybeOfferRecalibration())
  burnoutWarned:false, // true dopo il primo avviso di burnout (ENERGY a zero) — mostrato una sola volta a partita
  // Leva di negoziazione accumulata dai nodi di dialogo con ralEffect
  // (es. cons_salary, pmi_auth_salary_data) — consumata e azzerata al
  // prossimo grantOfficialLevel() riuscito, vedi computeRAL()/handleChoice().
  // Non persistito: è pensato per essere speso a breve, non per durare tra sessioni.
  career:{ralModifier:0},
};

const SC={
  SKILL:'#4fc3f7',
  VOICE:'#f06292',
  CLARITY:'#aed581',
  NETWORK:'#ffb74d',
  ENERGY:'#4db6ac',
  RADAR:'#ce93d8',
  INSIDER:'#a1887f',
};

// ══════════════════════════════════════
// computeChar
// ══════════════════════════════════════
function computeChar(){
  const h=ST.ans.hard,s=ST.ans.soft,p=ST.ans.pref;
  const sc=id=>SMAP[h[id]]||0,ss=id=>SMAP[s[id]]||0;
  const orient=ST.ans.pref?.orient||'';
  const orientBonus={analyst:0,scientist:0,ml:0,ai:0,dataeng:0};
  if(orient.includes('📊')) orientBonus.analyst=20;
  else if(orient.includes('🔬')) orientBonus.scientist=20;
  else if(orient.includes('⚙️')) orientBonus.ml=20;
  else if(orient.includes('🤖')) orientBonus.ai=20;
  else if(orient.includes('🛠️')) orientBonus.dataeng=20;
  let scores={
    analyst:  sc('sql')*1.5+sc('viz')*1.5+sc('python')*.5+ss('comm')*1.5 + orientBonus.analyst,
    scientist:sc('ml')*1.5+sc('python')+sc('viz')*.5+ss('auto') + orientBonus.scientist,
    ml:       sc('cloud')*1.5+sc('sdev')*1.5+sc('ml')+sc('python') + orientBonus.ml,
    ai:       sc('llm')*2+sc('python')+sc('sdev')*.5+ss('chaos') + orientBonus.ai,
    dataeng:  sc('sql')*1.5+sc('cloud')*1.5+sc('sdev')*1.5+sc('python')*.5 + orientBonus.dataeng,
  };
  const tech=(p.tech||50)/100,stab=(p.stab||50)/100;
  scores.analyst+=(1-tech)*3;scores.scientist+=tech*3;scores.ml+=tech*4;scores.ai+=(1-stab)*3+tech*2;
  scores.dataeng+=tech*3;
  const best=Object.entries(scores).sort((a,b)=>b[1]-a[1])[0][0];
  const clamp=(v,mn=2,mx=18)=>Math.min(mx,Math.max(mn,Math.round(v)));
  const avg=(...v)=>v.reduce((a,b)=>a+b,0)/v.length;
  const n=(v,mx=5)=>(v/mx)*16+2;
  const stats={
    SKILL: clamp(n(avg(sc('python'),sc('sql'),sc('ml'),sc('llm')))),
    VOICE: clamp(n(avg(ss('comm'),ss('conflict')*.9))),
    CLARITY:clamp(n(avg(ss('feedback'),ss('auto')))),
    // NETWORK parte sempre al minimo: non è un tratto di personalità, si
    // costruisce solo giocando (relazioni reali coltivate scelta dopo scelta).
    NETWORK:0,
    // ENERGY è una risorsa che si consuma con le interazioni (vedi
    // ENERGY_COST/ENERGY_GAIN_* in handleChoice), non un tratto — si parte
    // sempre pieni, come RADAR parte sempre da una base fissa.
    ENERGY: STAT_MAX.ENERGY,
    RADAR:  3,
    INSIDER:0, // conoscenza delle procedure/politica interna del posto attuale: si parte sempre da zero
  };
  return {cls:best,stats};
}

// ══════════════════════════════════════
// SCREEN MANAGER
// ══════════════════════════════════════
export function show(id){
  document.querySelectorAll('.scr').forEach(s=>s.classList.remove('on'));
  document.getElementById('s-'+id).classList.add('on');
  ST.screen=id;
  // touch-action:none è il default su html/body (serve al canvas di gioco
  // per bloccare pinch-zoom/bounce durante il movimento) — ma un browser
  // combina i valori di touch-action per INTERSEZIONE lungo tutta la
  // catena di antenati, quindi un .scr discendente non può "riabilitare"
  // lo scroll touch da solo: va cambiato qui, sul body stesso, per ogni
  // schermata che non sia il gioco (vedi regola body.scrollable in CSS).
  document.body.classList.toggle('scrollable', id!=='game');
}

// ══════════════════════════════════════
// ASSESSMENT
// ══════════════════════════════════════
export function renderAssess(){
  const step=STEPS[ST.step];
  [0,1,2].forEach(i=>{
    const el=document.getElementById('stp-'+i);
    el.classList.remove('active','done');
    if(i<ST.step)el.classList.add('done');
    if(i===ST.step)el.classList.add('active');
  });
  const pct=((ST.step+1)/3*100).toFixed(0);
  let html=`<div class="a-tag">${step.tag}</div>
  <div class="a-title">${step.title}</div>
  <div class="a-sub">${step.sub}</div>
  <div class="prog"><div class="prog-fill" style="width:${pct}%"></div></div>`;
  if(step.qs){
    html+=`<div class="bq-list">`;
    step.qs.forEach(q=>{
      const saved=ST.ans[step.id][q.id];
      html+=`<div class="bq-item"><div class="bq-q">${q.t}</div><div class="bq-opts">
        ${q.opts.map(o=>`<button class="bq-opt${saved===o?' sel':''}" data-qid="${q.id}" data-step="${step.id}" data-v="${o}">${o}</button>`).join('')}
      </div></div>`;
    });
    html+=`</div>`;
  }
  if(step.sls){
    html+=`<div class="sl-list">`;
    step.sls.forEach(sl=>{
      const v=ST.ans.pref[sl.id]!==undefined?ST.ans.pref[sl.id]:50;
      const lbl=v<30?sl.lo:v>70?sl.hi:'Bilanciato';
      html+=`<div class="sl-item">
        <div class="sl-label">${sl.label}<span class="sl-tag" id="slv-${sl.id}">${lbl}</span></div>
        <input type="range" min="0" max="100" value="${v}" data-pref="${sl.id}" style="background:linear-gradient(90deg,var(--accent) ${v}%,var(--border) ${v}%)">
        <div class="sl-ends"><span>${sl.lo}</span><span>${sl.hi}</span></div>
      </div>`;
    });
    html+=`</div>`;
  }
  const isLast=ST.step===2;
  // Legge il testo del bottone da UI_TEXTS
  html+=`<div class="a-footer"><div class="a-note">${step.note}</div>
  <button class="btn-next" id="btnNA">${isLast ? UI_TEXTS.assess.btn_generate : UI_TEXTS.assess.btn_next}</button></div>`;
  document.getElementById('aMain').innerHTML=html;
  const aMain=document.getElementById('aMain');
  if(aMain) aMain.scrollTop=0;
  document.querySelectorAll('.bq-opt').forEach(b=>{
    b.addEventListener('click',()=>{
      const{qid,step,v}=b.dataset;
      ST.ans[step][qid]=v;
      b.closest('.bq-opts').querySelectorAll('.bq-opt').forEach(x=>x.classList.remove('sel'));
      b.classList.add('sel');
    });
  });
  document.querySelectorAll('input[type=range]').forEach(sl=>{
    sl.addEventListener('input',()=>{
      const v=+sl.value,id=sl.dataset.pref;
      ST.ans.pref[id]=v;
      const sdef=STEPS[2].sls.find(s=>s.id===id);
      const lbl=v<30?sdef.lo:v>70?sdef.hi:'Bilanciato';
      const tag=document.getElementById('slv-'+id);
      if(tag)tag.textContent=lbl;
      sl.style.background=`linear-gradient(90deg,var(--accent) ${v}%,var(--border) ${v}%)`;
    });
  });
  document.getElementById('btnNA').addEventListener('click',()=>{
    if(ST.step<2){ST.step++;renderAssess();}
    else{
      document.body.classList.remove('calibration-mode');
      ST.char=computeChar();
      ST.gs={...ST.char.stats};
      show('card');renderCard();
    }
  });
}

// ══════════════════════════════════════
// CARD
// ══════════════════════════════════════
function renderCard(){
  const ch=ST.char,cls=CLASSES[ch.cls];
  const CARD_SEGS=10;
  const rows=Object.entries(ch.stats).map(([k,v])=>{
    const filled=Math.min(CARD_SEGS,Math.round((v/20)*CARD_SEGS));
    const color=SC[k];
    const segs=Array.from({length:CARD_SEGS},(_,i)=>{
      const on=i<filled;
      return `<div style="flex:1;height:7px;border-radius:1px;background:${on?color:'rgba(255,255,255,.07)'};${on?`box-shadow:0 0 4px ${color}88`:''}"></div>`;
    }).join('');
    return `<div class="st-row">
      <div class="st-key" style="color:${color}">${k}</div>
      <div class="st-track" style="display:flex;gap:2px;background:none;padding:0">${segs}</div>
      <div class="st-num" style="color:${color}">${v}</div>
    </div>`;
  }).join('');
  const traits=cls.traits.map(t=>`<span class="c-trait" style="color:${cls.color};border-color:${cls.color}">${t}</span>`).join('');
  document.getElementById('dndCard').innerHTML=`
    <div class="c-top" style="background:${cls.bg}">
      <div class="c-class-tag" style="background:${cls.color}22;color:${cls.color};border:1px solid ${cls.color}44">${cls.name.toUpperCase()}</div>
      <div class="c-av">${cls.av}</div>
      <div class="c-cname">${UI_TEXTS.card.player_name}</div>
      <div class="c-csub">${cls.name} ${UI_TEXTS.card.level_suffix}</div>
    </div>
    <div class="c-stats">${rows}</div>
    <div style="text-align:right;margin-top:-.4rem">
      <button id="btnCardStatInfo" style="background:none;border:none;color:var(--muted);font-size:.62rem;cursor:pointer;text-decoration:underline;padding:0">ℹ️ ${UI_TEXTS.stat_info.title}</button>
    </div>
    <div class="c-desc">${cls.desc}<div class="c-traits">${traits}</div></div>`;
  // bias_note da UI_TEXTS
  document.getElementById('biasNote').innerHTML = UI_TEXTS.card.bias_note;
  document.getElementById('btnCardStatInfo').addEventListener('click',showStatInfo);
  document.getElementById('btnEnterGame').onclick=()=>{
    show('map');
    renderMap();
  };
  const scardEl=document.getElementById('s-card');
  const hint=document.getElementById('cardSwipeHint');
  if(scardEl&&hint){
    const onScroll=()=>{ hint.style.opacity='0'; scardEl.removeEventListener('scroll',onScroll); };
    scardEl.addEventListener('scroll',onScroll,{passive:true});
  }
}

// ══════════════════════════════════════
// HUD
// ══════════════════════════════════════
const STAT_SEGS=10;
const STAT_MAX={SKILL:50,VOICE:50,CLARITY:50,NETWORK:50,ENERGY:50,RADAR:50,INSIDER:50};
const STAT_LEVELS=[0,8,18,30,40,50];
function statLevel(val){ return STAT_LEVELS.findIndex((t,i)=>val<STAT_LEVELS[i+1]??true)||5; }

function applyCarryover(){
  Object.keys(ST.gs).forEach(k=>{
    const bonus=Math.floor(ST.gs[k]*0.2);
    ST.gs[k]=Math.min(STAT_MAX[k], bonus+3);
  });
  ST.gs.ENERGY=Math.min(STAT_MAX.ENERGY, ST.gs.ENERGY+8);
}

function statSegs(key,val){
  const max=STAT_MAX[key];
  const filled=Math.min(STAT_SEGS,Math.round((val/max)*STAT_SEGS));
  const color=SC[key];
  const segs=Array.from({length:STAT_SEGS},(_,i)=>{
    const on=i<filled;
    return `<div class="g-seg" style="background:${on?color:'rgba(255,255,255,.07)'};${on?`box-shadow:0 0 5px ${color}88`:''}"></div>`;
  }).join('');
  return `<div class="g-st">
    <span class="g-st-key" style="color:${color}">${key}</span>
    <div class="g-segs">${segs}</div>
  </div>`;
}

function getWorldProgress(){
  const npcs=(currentWorldDef||WORLD_DEFS[ST.world.id]||{}).npcs||[];
  const vis=ST.world.visited;
  const allNPC=npcs.filter(n=>n.type==='npc');
  const allSis=npcs.filter(n=>n.type==='sis');
  const allTech=npcs.filter(n=>n.type==='tech');
  const npcGoal=Math.min(3,allNPC.length);
  const sisGoal=Math.min(1,allSis.length);
  const techGoal=Math.min(1,allTech.length);
  const doneNPC=allNPC.filter(n=>vis.includes(n.id)).length;
  const doneSis=allSis.filter(n=>vis.includes(n.id)).length;
  const doneTech=allTech.filter(n=>vis.includes(n.id)).length;
  const doneOptNPC=Math.max(0,doneNPC-npcGoal);
  const doneOptSis=Math.max(0,doneSis-sisGoal);
  const doneOptTech=Math.max(0,doneTech-techGoal);
  const optNPC=Math.max(0,allNPC.length-npcGoal);
  const optSis=Math.max(0,allSis.length-sisGoal);
  const optTech=Math.max(0,allTech.length-techGoal);
  const unlocked=doneNPC>=npcGoal&&doneSis>=sisGoal&&doneTech>=techGoal;
  return{npcGoal,sisGoal,techGoal,
    doneNPC:Math.min(doneNPC,npcGoal),doneSis:Math.min(doneSis,sisGoal),doneTech:Math.min(doneTech,techGoal),
    doneOptNPC,doneOptSis,doneOptTech,optNPC,optSis,optTech,unlocked};
}

function buildProgressPanel(){
  const p=getWorldProgress();
  const NPC_C='#a0c4ff',SIS_C='#e53935',TECH_C='#f7c46a';
  function pips(done,goal,optDone,optTotal,color){
    let h='';
    for(let i=0;i<goal;i++){
      const on=i<done;
      h+=`<div class="pp-pip${on?' done':''}" style="${on?`background:${color};box-shadow:0 0 4px ${color}88`:''}"></div>`;
    }
    for(let i=0;i<Math.min(optTotal,2);i++){
      const on=i<optDone;
      h+=`<div class="pp-pip opt" style="${on?`background:${color}66;border-color:${color}44`:''}"></div>`;
    }
    return h;
  }
  const rows=[
    `<div class="pp-row"><span class="pp-label">👥</span><div class="pp-pips">${pips(p.doneNPC,p.npcGoal,p.doneOptNPC,p.optNPC,NPC_C)}</div><span class="pp-count" style="color:${NPC_C}">${p.doneNPC}/${p.npcGoal}</span></div>`,
    `<div class="pp-row"><span class="pp-label">❤️</span><div class="pp-pips">${pips(p.doneSis,p.sisGoal,p.doneOptSis,p.optSis,SIS_C)}</div><span class="pp-count" style="color:${SIS_C}">${p.doneSis}/${p.sisGoal}</span></div>`,
    `<div class="pp-row"><span class="pp-label">💻</span><div class="pp-pips">${pips(p.doneTech,p.techGoal,p.doneOptTech,p.optTech,TECH_C)}</div><span class="pp-count" style="color:${TECH_C}">${p.doneTech}/${p.techGoal}</span></div>`,
  ].join('');
  // Legge label da UI_TEXTS.progress
  const status=p.unlocked
    ? `<div class="pp-status open" id="ppStatus">${UI_TEXTS.progress.status_open}</div>`
    : `<div class="pp-status locked" id="ppStatus">${UI_TEXTS.progress.status_locked_prefix} ${p.doneNPC+p.doneSis+p.doneTech}/${p.npcGoal+p.sisGoal+p.techGoal}</div>`;
  return `<div class="progress-panel" id="progressPanel">${rows}${status}</div>`;
}

// RAL "di mercato" indicativa (RAL_BASE × AREA_MULTIPLIER in
// career-world-data.js): ruolo × livello di seniority × contesto (mondo),
// arrotondata al migliaio. Funzione pura — NON è la RAL ufficiale mostrata
// in HUD: quella è ancorata alla RAL precedente della giocatrice, vedi
// grantOfficialLevel(). `ralModifier` (accumulato da scelte di negoziazione
// nei dialoghi, vedi ralEffect in handleChoice()) sposta il punto scelto
// nel range verso l'alto o il basso prima dell'ancoraggio.
// P.IVA è un caso speciale: non ha un range RAL diretto (è tariffa/giorno,
// non stipendio) — il suo "RAL ufficiale" è il fatturato realmente
// costruito contratto per contratto, vedi applyRevenueEffect() in handleChoice().
function computeRAL(worldId,clsKey,level,ralModifier=0){
  if(worldId==='piva')return 0;
  const tier=RAL_LEVEL_BY_TIER[level]||'junior';
  const role=RAL_BASE[clsKey]?clsKey:'analyst'; // fallback per classi non mappate (es. 'explorer')
  const range=computeOfferRange(role,tier,worldId);
  if(!range)return 0;
  let offer=range[0]+(range[1]-range[0])*0.5;
  offer*=(1+Math.max(-0.2,Math.min(0.2,ralModifier||0)));
  offer=Math.max(range[0]*0.9,Math.min(range[1]*1.15,offer));
  return Math.round(offer/1000)*1000;
}
// Mostra la RAL UFFICIALE (ST.world.officialRAL — vedi grantOfficialLevel()),
// non quella "di mercato pura" per il livello esplorato: esplorare sblocca
// contenuti gratis, ma non aggiorna da sola RAL/titolo (vedi §9).
function buildRalBadge(){
  if(!ST.world.id||!ST.char||ST.world.officialRAL==null)return '<span id="ralBadge"></span>';
  const label=RAL_LABEL_BY_WORLD[ST.world.id]||'RAL stimata';
  return `<div class="g-cls" id="ralBadge" style="background:rgba(106,247,200,.12);color:#6af7c8;margin-left:.4rem" title="Stima indicativa su dati medi di mercato, non un dato reale">💶 ${ST.world.officialRAL.toLocaleString('it-IT')} € <span style="opacity:.75">${label}</span></div>`;
}

// Pulsante "Cambia lavoro" nella HUD di gioco: disponibile in qualunque
// mondo tranne P.IVA (che non ha colloqui, vedi showJobChangePicker()),
// sia per guest che per utenti autenticati, mentre si è dentro un mondo.
// Se il livello ESPLORATO ha già superato quello UFFICIALE, lo segnala:
// stai già facendo il lavoro del livello successivo, manca solo chiederlo.
function buildJobChangeBtn(){
  if(!ST.world.id||ST.world.id==='piva')return '';
  const exploredLevel=getUnlockedLevel(ST.world.id,isAuthenticated(),ST.world.visited);
  const promotionReady=exploredLevel>(ST.world.officialLevel||0);
  const label=promotionReady?'🎉 Chiedi la promozione che ti spetta →':'💼 Cambia lavoro';
  const style=promotionReady
    ?'background:rgba(106,247,200,.15);border:1px solid rgba(106,247,200,.4);color:#6af7c8;font-size:.58rem;padding:.5rem .9rem'
    :'background:rgba(255,183,77,.12);border:1px solid rgba(255,183,77,.35);color:#ffb74d;font-size:.58rem;padding:.5rem .9rem';
  return `<button class="btn-next" id="btnJobChange" style="${style}">${label}</button>`;
}

function renderHUD(worldLabel){
  const cls=CLASSES[ST.char.cls];
  const statHtml=Object.entries(ST.gs).map(([k,v])=>statSegs(k,v)).join('');
  document.getElementById('gHud').innerHTML=`
    <div class="g-hud-left">
      <div class="g-hud-av">${cls.av}</div>
      <div class="g-cls" style="background:${cls.color}22;color:${cls.color}">${cls.name}</div>
      ${buildRalBadge()}
    </div>
    <div class="g-hud-center">
      <div class="g-world-label">${worldLabel}</div>
      <div style="display:flex;align-items:center;gap:.35rem">
        <div class="g-stats-row">${statHtml}</div>
        <button id="btnStatInfo" title="${UI_TEXTS.stat_info.title}" style="background:none;border:1px solid var(--border);color:var(--muted);border-radius:50%;width:16px;height:16px;line-height:1;font-size:.55rem;cursor:pointer;flex-shrink:0;padding:0">ℹ️</button>
      </div>
    </div>
    ${buildProgressPanel()}
    ${buildJobChangeBtn()}`;
  document.getElementById('btnJobChange')?.addEventListener('click',()=>showJobChangePicker());
  document.getElementById('btnStatInfo')?.addEventListener('click',showStatInfo);
}

function updHUD(){
  const statsRow=document.querySelector('.g-stats-row');
  if(statsRow) statsRow.innerHTML=Object.entries(ST.gs).map(([k,v])=>statSegs(k,v)).join('');
  const panel=document.getElementById('progressPanel');
  if(panel) panel.outerHTML=buildProgressPanel();
  const ralEl=document.getElementById('ralBadge');
  if(ralEl) ralEl.outerHTML=buildRalBadge();
  const jobBtn=document.getElementById('btnJobChange');
  if(jobBtn){
    jobBtn.outerHTML=buildJobChangeBtn();
    document.getElementById('btnJobChange')?.addEventListener('click',()=>showJobChangePicker());
  }
}

// Overlay informativo (richiamabile da HUD e Card, vedi renderHUD()/renderCard())
// che spiega cosa rappresenta ogni statistica sia nel gioco sia nella vita
// reale — utile perché diverse regole (RADAR/NETWORK/ENERGY) non sono ovvie
// solo guardando la barra.
function showStatInfo(){
  const info=UI_TEXTS.stat_info;
  const rows=Object.entries(info.stats).map(([k,v])=>`
    <div style="margin-bottom:.9rem;padding-bottom:.9rem;border-bottom:1px solid var(--border)">
      <div style="font-family:'Space Mono',monospace;font-weight:700;font-size:.72rem;color:${SC[k]};margin-bottom:.3rem">${k}</div>
      <div style="font-size:.76rem;line-height:1.5;margin-bottom:.25rem"><strong style="color:var(--muted)">Nel gioco:</strong> ${v.game}</div>
      <div style="font-size:.76rem;line-height:1.5"><strong style="color:var(--muted)">Nella vita reale:</strong> ${v.life}</div>
    </div>`).join('');
  const overlay=document.createElement('div');
  overlay.className='wi-ov';
  overlay.style.cssText='position:fixed;inset:0;z-index:700;';
  overlay.innerHTML=`
    <div class="wi-box" style="text-align:left;margin:auto;max-width:520px;max-height:80vh;overflow-y:auto">
      <div class="wi-title" style="text-align:center">${info.title}</div>
      <div class="wi-what" style="text-align:center;margin-bottom:1rem">${info.intro}</div>
      ${rows}
      <div style="text-align:center;margin-top:.6rem">
        <button class="btn-next" id="siClose" style="background:var(--surface2)">${info.btn_close}</button>
      </div>
    </div>`;
  document.body.appendChild(overlay);
  document.getElementById('siClose').addEventListener('click',()=>overlay.remove());
}

// ══════════════════════════════════════
// WORLD DEFS (già in career-world_data.js)
// ══════════════════════════════════════

// ══════════════════════════════════════
// PHASER ENGINE
// ══════════════════════════════════════
let PG=null;
let gameRunning=false;
let exitTriggered=false;
let evActive=false;
let curEv=null;
let scn=null;
let player=null;
let cursors=null;
let actKey=null;
let zKey=null;
let currentWorldDef=null;
let lastActPressed=false;
let criticSpawned=false;
let critic2Spawned=false;
let criticActive=false;
let criticSteps=0;
const CRITIC_THRESHOLD=200;
// Stato della stanza corrente, promosso a livello di modulo così spawnNpcSprite()
// può aggiungere NPC "livello superiore" a partita in corso, non solo in gCreate().
let curUsedSlots=null;
let curSpreadIdx=0;
let curCols=0;
let curRows=0;
const TILE=40;
// Risoluzione logica fissa della stanza di gioco — SEMPRE la stessa,
// desktop o mobile: stessa griglia (cols/rows), stesso layout, stesso
// rapporto NPC/tile rispetto alla stanza. Solo la dimensione VISUALE
// (CSS, vedi getCanvasDims()) si adatta allo schermo, scalando l'intera
// scena in blocco invece di mostrare più o meno stanza a seconda del
// dispositivo.
const GAME_W=900,GAME_H=560;
// La telecamera segue la giocatrice zoomata invece di mostrare l'intera
// stanza in un colpo solo: su schermi piccoli mostrare tutti i 22x14 tile
// insieme rendeva personaggi e testo minuscoli e illeggibili. Zoomando, la
// stanza diventa "navigabile" (ci si muove, la telecamera segue) invece che
// una miniatura statica — la dimensione visuale del canvas (vedi
// getCanvasDims()) resta il meccanismo che adatta tutto allo schermo fisico,
// ma su mobile si aumenta anche lo zoom della telecamera (vedi
// CAMERA_ZOOM_MOBILE in gCreate()) perché lo schermo piccolo rende comunque
// tutto più minuto anche dopo lo scaling CSS.
const CAMERA_ZOOM=2;
const CAMERA_ZOOM_MOBILE=2.6;
const TOUCH={left:false,right:false,up:false,down:false,act:false};

// Avatar PNG generati esternamente, usati al posto delle silhouette
// procedurali mgr/sis/col — vedi gPreload()/spawnNpcSprite(). Mescolati a
// caso (ma stabile, via hash dell'id NPC) su tutti i ruoli persona, così
// nessun avatar resta legato a un ruolo specifico — ma filtrati per genere
// (vedi AVATAR_GENDER/npc.gender) così un'NPC scritta come donna riceve
// sempre un avatar femminile e viceversa. Senza npc.gender, pool intero.
// Eccezione: le "sis" (alleate) non pescano dal pool — hanno sempre lo
// stesso avatar dedicato ALLY_AVATAR_KEY, per renderle riconoscibili a
// colpo d'occhio come figura ricorrente positiva nel gioco.
const AVATAR_KEYS=['avatar_old_man','avatar_woman','avatar_young_man','avatar_bald_guy','avatar_afro_woman','avatar_black_man','avatar_old_woman'];
const AVATAR_GENDER={
  avatar_old_man:'m', avatar_woman:'f', avatar_young_man:'m', avatar_bald_guy:'m',
  avatar_afro_woman:'f', avatar_black_man:'m', avatar_old_woman:'f',
};
const ALLY_AVATAR_KEY='avatar_ally';
const PERSON_SPRITES=new Set(['mgr','sis','col']);
function hashStr(s){let h=0;for(let i=0;i<s.length;i++)h=(h*31+s.charCodeAt(i))|0;return Math.abs(h);}
function npcTextureKey(npcDef){
  if(!PERSON_SPRITES.has(npcDef.sprite))return npcDef.sprite;
  if(npcDef.sprite==='sis')return ALLY_AVATAR_KEY;
  const pool=npcDef.gender?AVATAR_KEYS.filter(k=>AVATAR_GENDER[k]===npcDef.gender):AVATAR_KEYS;
  return pool[hashStr(npcDef.id)%pool.length];
}

function getCanvasDims(){
  const hud=document.getElementById('gHud');
  const hudH=hud?hud.offsetHeight:44;
  const MSG_H=40;
  const availW=window.innerWidth;
  const availH=Math.max(window.innerHeight-hudH-MSG_H,200);
  // Un solo fattore di scala per entrambi gli assi — la stanza (GAME_W x
  // GAME_H) resta sempre la stessa, viene solo rimpicciolita o ingrandita
  // per intero in base allo spazio disponibile, mai deformata né mostrata
  // "più larga" su schermi più grandi.
  const scale=Math.min(availW/GAME_W,availH/GAME_H,1.4);
  return{W:GAME_W,H:GAME_H,scale};
}

function initGame(worldId){
  currentWorldDef={...WORLD_DEFS[worldId],npcs:getVisibleNpcs(worldId,isAuthenticated(),ST.world.visited,ST.world.track)};
  ST.world.id=worldId;
  const intro=WORLD_INTROS[worldId];
  const isMobile=('ontouchstart' in window)||navigator.maxTouchPoints>0;
  // Legge gli hint da UI_TEXTS
  const hintCore = isMobile ? UI_TEXTS.game.hint_mobile : UI_TEXTS.game.hint_desktop;
  const hint = `${hintCore} ${UI_TEXTS.game.hint_suffix}`;
  if(intro){
    hideTc();
    document.getElementById('dlLayer').innerHTML=`
    <div class="wi-ov">
      <div class="wi-box">
        <div class="wi-emoji">${intro.emoji}</div>
        <div class="wi-title" style="color:${intro.color}">${intro.title}</div>
        <div class="wi-what">${intro.what}</div>
        <div class="wi-role">${intro.role}</div>
        <div class="wi-cols">
          <div class="wi-col">
            <div class="wi-col-title" style="color:#6af7c8">${UI_TEXTS.world_intro.col_pro_label}</div>
            <ul>${intro.pros.map(p=>`<li>${p}</li>`).join('')}</ul>
          </div>
          <div class="wi-col">
            <div class="wi-col-title" style="color:#f76a6a">${UI_TEXTS.world_intro.col_con_label}</div>
            <ul>${intro.cons.map(c=>`<li>${c}</li>`).join('')}</ul>
          </div>
        </div>
        <div class="wi-hint">${UI_TEXTS.world_intro.hint_prefix}${hint}</div>
        <div style="display:flex;gap:.6rem;justify-content:center;flex-wrap:wrap">
          <button class="btn-next" id="btnStartWorld">${UI_TEXTS.world_intro.btn_enter}</button>
        </div>
      </div>
    </div>`;
    document.getElementById('btnStartWorld').onclick=()=>{
      document.getElementById('dlLayer').innerHTML='';
      showTc();
      launchPhaser(worldId);
    };
  } else {
    launchPhaser(worldId);
  }
}

function launchPhaser(worldId){
  // Ricalcola sempre: tra initGame() e questo momento può essersi svolto un
  // colloquio (showInterview→grantOfficialLevel) che ha cambiato ST.world.visited/track.
  currentWorldDef={...WORLD_DEFS[worldId],npcs:getVisibleNpcs(worldId,isAuthenticated(),ST.world.visited,ST.world.track)};
  gameRunning=false;exitTriggered=false;evActive=false;curEv=null;
  player=null;cursors=null;actKey=null;zKey=null;scn=null;
  lastActPressed=false;criticSpawned=false;critic2Spawned=false;
  criticActive=false;criticSteps=0;
  if(PG){try{PG.destroy(true);}catch(e){}PG=null;}
  document.getElementById('gArea').querySelectorAll('canvas').forEach(c=>c.remove());
  setTimeout(()=>{
    const cont=document.getElementById('gArea');
    const dims=getCanvasDims();const{W,H,scale}=dims;
    const cv=document.createElement('canvas');
    cv.id='gameCanvas';cv.width=W;cv.height=H;
    // Risoluzione interna (W x H) sempre fissa — solo la dimensione CSS
    // visualizzata cambia in base allo schermo, scalata in blocco.
    cv.style.cssText=`display:block;width:${Math.floor(W*scale)}px;height:${Math.floor(H*scale)}px;image-rendering:pixelated;flex-shrink:0;margin:0 auto;`;
    const msgEl=document.getElementById('gMsg');
    if(msgEl)cont.insertBefore(cv,msgEl);else cont.appendChild(cv);
    PG=new Phaser.Game({
      type:Phaser.CANVAS,canvas:cv,width:W,height:H,pixelArt:true,
      backgroundColor:'#'+currentWorldDef.palette.bg.toString(16).padStart(6,'0'),
      physics:{default:'arcade',arcade:{gravity:{y:0},debug:false}},
      scene:{preload:gPreload,create:gCreate,update:gUpdate}
    });
    bindTouchControls();
  },400);
}

function bindTouchControls(){
  const map={'tc-left':'left','tc-right':'right','tc-up':'up','tc-down':'down','tc-act':'act'};
  Object.entries(map).forEach(([id,key])=>{
    const el=document.getElementById(id);
    if(!el)return;
    const fresh=el.cloneNode(true);
    el.parentNode.replaceChild(fresh,el);
    const on=e=>{e.preventDefault();TOUCH[key]=true;fresh.classList.add('pressed');};
    const off=e=>{e.preventDefault();TOUCH[key]=false;fresh.classList.remove('pressed');};
    fresh.addEventListener('touchstart',on,{passive:false});
    fresh.addEventListener('touchend',off,{passive:false});
    fresh.addEventListener('touchcancel',off,{passive:false});
    fresh.addEventListener('mousedown',on);
    fresh.addEventListener('mouseup',off);
    fresh.addEventListener('mouseleave',off);
  });
}

const WORLD_LAYOUTS={
  pmi:{walls:[[4,2],[5,2],[6,2],[10,2],[11,2],[3,5],[3,6],[9,4],[9,5],[12,8],[12,9]],bg:'factory'},
  startup:{walls:[[5,2],[6,2],[7,2],[4,7],[4,8],[11,3],[11,4],[13,6],[13,7]],bg:'startup'},
  consulenza:{walls:[[3,3],[3,4],[8,2],[8,3],[12,5],[12,6],[5,8],[6,8]],bg:'office'},
  corporate:{walls:[[4,3],[4,4],[5,3],[9,2],[9,3],[12,4],[12,5],[6,8],[7,8],[10,8]],bg:'corporate'},
  piva:{walls:[[3,4],[3,5],[7,2],[7,3],[11,5],[11,6],[5,8],[12,9]],bg:'coworking'},
  pa:{walls:[[5,2],[5,3],[6,2],[10,2],[10,3],[3,6],[3,7],[12,6],[12,7],[8,9]],bg:'university'},
};

const SPREAD_POSITIONS=[
  [3,3],[11,3],[13,5],[3,7],[7,9],[11,8],[5,5],[9,3],[13,8],[3,5],
  [7,3],[5,8],[13,3],[9,8],[11,6],[4,9],[12,4],[8,6]
];

function gPreload(){
  // Avatar illustrati (PNG) per gli NPC "persona" (mgr/sis/col) — vedi
  // AVATAR_KEYS/spawnNpcSprite(). crit resta procedurale: non è il
  // ritratto di una persona (un fantasma simbolico).
  AVATAR_KEYS.forEach(key=>{if(!this.textures.exists(key))this.load.image(key,`/npc-avatars/${key}.png`);});
  if(!this.textures.exists(ALLY_AVATAR_KEY))this.load.image(ALLY_AVATAR_KEY,`/npc-avatars/${ALLY_AVATAR_KEY}.png`);
  if(!this.textures.exists('player_avatar'))this.load.image('player_avatar','/player/player.png');
  // Scrivania per le sfide tecniche: quella moderna nei mondi più
  // tech-forward (P.IVA, Startup, Consulenza, Corporate), quella vecchia in
  // PA e PMI — coerente con quanto sono "aggiornati" quei contesti nel resto
  // dei testi. Chiave texture unica ('tech'), file diverso a seconda del
  // mondo — sicuro perché ogni ingresso in un mondo ricrea un Phaser.Game
  // (e quindi un texture manager) da zero, vedi launchPhaser().
  if(!this.textures.exists('tech')){
    const MODERN_DESK_WORLDS=new Set(['piva','startup','consulenza','corporate']);
    const techImg=MODERN_DESK_WORLDS.has(ST.world.id)?'/props/pc_modern.png':'/props/pc.png';
    this.load.image('tech',techImg);
  }
  // Arredi illustrati (PNG) — sostituiscono le silhouette procedurali per i
  // pezzi che hanno un equivalente nel set; furn_factory e furn_globe
  // restano disegnati a mano, non coperti dal set (macchinario industriale
  // e globo su treppiede).
  ['furn_plant','furn_sofa','furn_shelf','furn_office_plant','furn_cabinet','furn_whiteboard','furn_divider']
    .forEach(key=>{if(!this.textures.exists(key))this.load.image(key,`/furniture/${key}.png`);});
  // Porta d'ufficio a vetri (stesso set PixelOffice di furn_divider) — un solo
  // artwork per porta bloccata/sbloccata, distinte con un tint (vedi doEx/gCreate).
  if(!this.textures.exists('door_img'))this.load.image('door_img','/furniture/door_pixeloffice.png');
  const g=this.make.graphics({add:false});
  const pal=currentWorldDef.palette;
  const T=TILE;
  const bgStyle=WORLD_LAYOUTS[ST.world.id]?.bg||'office';
  g.fillStyle(pal.floor);g.fillRect(0,0,T,T);
  g.lineStyle(1,pal.accent,0.18);g.strokeRect(0,0,T,T);
  if(bgStyle==='factory'){
    g.fillStyle(pal.accent,0.1);g.fillRect(0,0,T/2,T/2);
    g.fillStyle(0x000000,0.25);g.fillCircle(4,4,1.5);g.fillCircle(T-4,4,1.5);
    g.fillStyle(0x000000,0.25);g.fillCircle(4,T-4,1.5);g.fillCircle(T-4,T-4,1.5); // rivetti
    g.lineStyle(1,0xffb300,0.12);g.lineBetween(0,T,T,0);   // striscia diagonale sicurezza
  } else if(bgStyle==='startup'){
    g.lineStyle(1,0x9966cc,0.12);g.lineBetween(0,T,T,0);
    g.fillStyle(0x9966cc,0.15);g.fillCircle(T/2,T/2,1.3);  // nodo circuito
    g.lineStyle(1,0x9966cc,0.08);g.lineBetween(T/2,0,T/2,T);
  } else if(bgStyle==='corporate'){
    g.fillStyle(0x1a2a4a,0.15);g.fillRect(2,2,T-4,T-4);
    g.lineStyle(1,0x1a2a4a,0.25);g.lineBetween(0,T/2,T,T/2); // seam parquet
    g.lineStyle(1,0x1a2a4a,0.25);g.lineBetween(T/2,0,T/2,T);
  } else if(bgStyle==='university'){
    g.lineStyle(1,0xf48fb1,0.1);g.lineBetween(0,0,T,T);
    g.fillStyle(0xf48fb1,0.1);g.fillRect(T/2-1,T/2-1,2,2);  // piastrella centrale
  } else if(bgStyle==='coworking'){
    g.fillStyle(0x6af7c8,0.04);g.fillCircle(T/2,T/2,T/3);
    g.fillStyle(0x6af7c8,0.12);g.fillCircle(8,8,1.2);g.fillCircle(T-8,T-8,1.2); // bolle
  } else if(bgStyle==='office'){
    g.lineStyle(1,pal.accent,0.08);g.strokeRect(4,4,T-8,T-8); // moquette a piastrelle
  }
  g.generateTexture('floor',T,T);g.clear();
  g.fillStyle(pal.wall);g.fillRect(0,0,T,T);
  g.fillStyle(pal.accent,0.5);g.fillRect(3,3,T-6,T-6);
  g.fillStyle(pal.accent,0.8);g.fillRect(6,6,T-12,T-12);
  g.generateTexture('wall',T,T);g.clear();
  g.fillStyle(pal.wall,0.9);g.fillRect(0,0,T,T);
  g.fillStyle(pal.accent,0.6);g.fillRect(4,4,T-8,T-8);
  g.fillStyle(0x000000,0.2);g.fillRect(0,T-4,T,4);
  g.generateTexture('obstacle',T,T);g.clear();
  g.fillStyle(0x3a3a5a);g.fillRect(0,8,T,T-8);
  g.fillStyle(0x5a5a7a);g.fillRect(2,8,T-4,4);
  g.generateTexture('desk',T,T);g.clear();
  // PLAYER — vedi 'player_avatar' caricato sopra (avatar illustrato reale,
  // non più disegnato proceduralmente).

  // ── MGR — manager/hr, formale con occhiali ────────────────
  g.fillStyle(0xffe0b2);g.fillCircle(16,9,7);
  g.lineStyle(1,0xc98a52,0.6);g.strokeCircle(16,9,7);
  g.fillStyle(0x37474f);g.fillRect(8,2,16,6);            // capelli top pieni
  g.fillStyle(0x37474f);g.fillRect(7,4,3,8);             // lato sx
  g.fillStyle(0x37474f);g.fillRect(22,4,3,8);            // lato dx
  g.fillStyle(0x546e7a,0.6);g.fillRect(10,2,6,2);        // riflesso/volume
  g.fillStyle(0x2d2d2d);g.fillCircle(13,10,1.6);         // occhio sx
  g.fillStyle(0x2d2d2d);g.fillCircle(19,10,1.6);         // occhio dx
  g.lineStyle(1,0x263238,0.9);
  g.strokeRect(10.5,8,5,4);g.strokeRect(16.5,8,5,4);     // lenti occhiali
  g.lineBetween(15.5,10,16.5,10);                        // ponte occhiali
  g.fillStyle(0x37474f);g.fillRect(14,14,4,1);           // bocca neutra
  g.fillStyle(0x546e7a);g.fillRect(9,17,14,11);          // giacca grigio-blu
  g.fillStyle(0xeceff1);g.fillRect(12,17,8,6);           // camicia bianca
  g.fillStyle(0x0d47a1);g.fillRect(14,17,4,7);           // cravatta blu scuro
  g.fillStyle(0xffe0b2);g.fillRect(5,18,5,8);
  g.fillStyle(0xffe0b2);g.fillRect(22,18,5,8);
  g.fillStyle(0x546e7a);g.fillRect(5,17,5,4);
  g.fillStyle(0x546e7a);g.fillRect(22,17,5,4);
  g.fillStyle(0x263238);g.fillRect(9,28,6,4);
  g.fillStyle(0x263238);g.fillRect(17,28,6,4);
  g.fillStyle(0x111111);g.fillRect(8,30,7,3);
  g.fillStyle(0x111111);g.fillRect(17,30,7,3);
  g.generateTexture('mgr',32,34);g.clear();

  // ── SIS — alleata, coda asimmetrica + fiocco dorato ───────
  g.fillStyle(0xffcc80);g.fillCircle(16,9,7);
  g.lineStyle(1,0xcc7a4a,0.6);g.strokeCircle(16,9,7);
  g.fillStyle(0xe53935);g.fillRect(8,2,16,6);            // capelli top pieni
  g.fillStyle(0xe53935);g.fillRect(7,4,3,8);             // ciocca sx piena
  g.fillStyle(0xe53935);g.fillRect(21,4,4,14);           // coda lunga dx
  g.fillStyle(0xffd700);g.fillCircle(21,6,2.5);          // fiocco
  g.fillStyle(0xff8a80,0.6);g.fillRect(10,2,6,2);        // riflesso/volume
  g.fillStyle(0x880000);g.fillCircle(13,10,1.8);         // occhio sx
  g.fillStyle(0x880000);g.fillCircle(19,10,1.8);         // occhio dx
  g.fillStyle(0xffffff);g.fillCircle(13.6,9.4,0.6);
  g.fillStyle(0xffffff);g.fillCircle(19.6,9.4,0.6);
  g.fillStyle(0xff8a80);g.fillCircle(11,13,1.8);
  g.fillStyle(0xff8a80);g.fillCircle(21,13,1.8);
  g.fillStyle(0xc1440e);g.fillRect(13,14,6,1.5);         // sorriso
  g.fillStyle(0xe53935);g.fillRect(8,17,16,11);          // top rosso
  g.fillStyle(0xff8a80,0.5);g.fillRect(10,17,12,4);      // dettaglio neckline
  g.fillStyle(0xffcc80);g.fillRect(5,18,5,8);
  g.fillStyle(0xffcc80);g.fillRect(22,18,5,8);
  g.fillStyle(0xe53935);g.fillRect(5,17,5,4);
  g.fillStyle(0xe53935);g.fillRect(22,17,5,4);
  g.fillStyle(0x880e4f);g.fillRect(9,28,6,4);
  g.fillStyle(0x880e4f);g.fillRect(17,28,6,4);
  g.fillStyle(0x4a148c);g.fillRect(8,30,7,3);
  g.fillStyle(0x4a148c);g.fillRect(17,30,7,3);
  g.generateTexture('sis',32,34);g.clear();

  // ── COL — collega, ciuffo spettinato asimmetrico ──────────
  g.fillStyle(0xffe0b2);g.fillCircle(16,9,7);
  g.lineStyle(1,0xc98a52,0.6);g.strokeCircle(16,9,7);
  g.fillStyle(0x6d4c41);g.fillRect(8,2,17,6);            // capelli top pieni, asimmetrici
  g.fillStyle(0x6d4c41);g.fillRect(6,4,5,9);             // ciocca sx folta
  g.fillStyle(0x6d4c41);g.fillRect(22,4,3,7);            // ciocca dx più corta
  g.fillStyle(0x6d4c41);g.fillRect(11,0,4,3);            // ciuffo ribelle
  g.fillStyle(0x8a6a5a,0.6);g.fillRect(10,2,6,2);        // riflesso/volume
  g.fillStyle(0x4a148c);g.fillCircle(13,10,1.8);         // occhio sx
  g.fillStyle(0x4a148c);g.fillCircle(19,10,1.8);         // occhio dx
  g.fillStyle(0xffffff);g.fillCircle(13.6,9.4,0.6);
  g.fillStyle(0xffffff);g.fillCircle(19.6,9.4,0.6);
  g.fillStyle(0xffb3ba,0.6);g.fillCircle(11,13,1.6);
  g.fillStyle(0xffb3ba,0.6);g.fillCircle(21,13,1.6);
  g.fillStyle(0x8e5a3d);g.fillRect(14,14,4,1);           // bocca neutra
  g.fillStyle(0x9c27b0);g.fillRect(9,17,14,11);          // maglione viola
  g.fillStyle(0xce93d8,0.6);g.fillRect(10,17,12,3);      // colletto
  g.fillStyle(0xffe0b2);g.fillRect(5,18,5,8);
  g.fillStyle(0xffe0b2);g.fillRect(22,18,5,8);
  g.fillStyle(0x9c27b0);g.fillRect(5,17,5,4);
  g.fillStyle(0x9c27b0);g.fillRect(22,17,5,4);
  g.fillStyle(0x4a148c);g.fillRect(9,28,6,4);
  g.fillStyle(0x4a148c);g.fillRect(17,28,6,4);
  g.fillStyle(0x1a237e);g.fillRect(8,30,7,3);
  g.fillStyle(0x1a237e);g.fillRect(17,30,7,3);
  g.generateTexture('col',32,34);g.clear();

  // ── CRIT — inner critic, fantasma rosso accigliato ────────
  g.fillStyle(0xff1744,0.15);g.fillCircle(16,16,14);     // alone rosso
  g.fillStyle(0xb71c1c,0.9);g.fillCircle(16,11,9);       // testa
  g.fillStyle(0xff1744,0.7);g.fillRect(7,11,18,14);      // corpo
  // bordo inferiore ondulato (pixel art)
  g.fillStyle(0xff1744,0.7);
  g.fillRect(7,25,3,2);g.fillRect(13,25,3,2);g.fillRect(19,25,3,2);
  g.fillStyle(0xffffff,0.9);g.fillCircle(12,10,2.5);     // occhio sx bianco
  g.fillStyle(0xffffff,0.9);g.fillCircle(20,10,2.5);     // occhio dx bianco
  g.fillStyle(0xff1744);g.fillCircle(12,10,1.5);         // pupilla sx
  g.fillStyle(0xff1744);g.fillCircle(20,10,1.5);         // pupilla dx
  g.fillStyle(0x000000);g.fillCircle(12,10,0.8);         // puntino pupilla
  g.fillStyle(0x000000);g.fillCircle(20,10,0.8);
  g.fillStyle(0x7f0000);g.fillRect(9,6,6,1.5);           // sopracciglio sx accigliato
  g.fillStyle(0x7f0000);g.fillRect(17,6,6,1.5);          // sopracciglio dx accigliato
  g.fillStyle(0xff1744,0.8);g.fillRect(11,16,10,2);      // bocca
  g.fillStyle(0xffffff,0.5);g.fillRect(12,16,2,2);g.fillRect(17,16,2,2); // denti
  g.generateTexture('crit',32,32);g.clear();

  // TECH — vedi texture 'tech' caricata sopra (PC su scrivania illustrato,
  // non più disegnato proceduralmente).

  // ── FURNITURE textures (solo desktop) ────────────────────
  // factory_machine — macchinario industriale PMI
  g.fillStyle(0x37474f);g.fillRect(2,2,36,32);           // corpo macchina
  g.fillStyle(0x546e7a);g.fillRect(4,4,32,8);            // pannello controllo
  g.fillStyle(0xff1744);g.fillCircle(8,8,3);             // bottone rosso
  g.fillStyle(0x00e676);g.fillCircle(16,8,3);            // bottone verde
  g.fillStyle(0xffd700);g.fillCircle(24,8,2);            // led giallo
  g.fillStyle(0x263238);g.fillRect(4,14,32,4);           // slot input
  g.fillStyle(0x1a1a2a,0.8);g.fillRect(5,15,30,2);
  g.fillStyle(0x78909c);g.fillRect(6,20,28,8);           // corpo centrale
  g.fillStyle(0x546e7a);g.fillRect(8,22,8,4);            // dettaglio sx
  g.fillStyle(0x546e7a);g.fillRect(24,22,8,4);           // dettaglio dx
  g.fillStyle(0xb0bec5);g.fillRect(10,30,20,4);          // base
  g.generateTexture('furn_factory',40,36);g.clear();

  // furn_plant, furn_sofa, furn_shelf, furn_office_plant, furn_cabinet,
  // furn_whiteboard — vedi immagini caricate in cima a gPreload().

  // university_globe — pila di libri (sx) + globo su treppiede (dx)
  g.fillStyle(0x1565c0);g.fillRect(4,26,14,8);           // libro blu (sotto)
  g.fillStyle(0xb71c1c);g.fillRect(6,20,11,7);           // libro rosso (sopra)
  g.fillStyle(0xf9a825);g.fillRect(8,15,7,6);            // libro giallo (in cima)
  g.fillStyle(0x5d4037);g.fillRect(24,31,12,3);          // base treppiede
  g.fillStyle(0x795548);g.fillRect(28,14,4,17);          // asta
  g.fillStyle(0x1976d2);g.fillCircle(30,9,8);            // globo (mare)
  g.fillStyle(0x388e3c);g.fillCircle(26,6,3);            // continente 1
  g.fillStyle(0x388e3c);g.fillCircle(34,11,2.5);         // continente 2
  g.fillStyle(0x388e3c);g.fillCircle(30,13,2);           // continente 3
  g.fillStyle(0x66bb6a,0.5);g.fillCircle(27,7,2);        // highlight
  g.lineStyle(1,0x0d47a1,0.4);g.strokeCircle(30,9,8);    // meridiano
  g.lineStyle(1,0x0d47a1,0.3);g.lineBetween(22,9,38,9);  // equatore
  g.generateTexture('furn_globe',40,36);g.clear();

  // ── BUB — bolla esclamativa più carina ────────────────────
  g.fillStyle(0xffd700);g.fillCircle(12,11,10);          // bolla principale
  g.fillStyle(0xffec6e);g.fillCircle(10,9,5);            // riflesso
  g.fillStyle(0xff6f00);g.fillRect(0,0,24,22);           // maschera per coda
  g.fillStyle(0xffd700);g.fillCircle(12,11,10);          // ridisegno senza maschera
  g.fillStyle(0xff8f00);g.fillRect(8,19,6,4);            // coda bolla
  g.fillStyle(0xff8f00);g.fillRect(6,21,4,3);
  g.fillStyle(0x111111);g.fillRect(10,7,4,6);            // !
  g.fillStyle(0x111111);g.fillCircle(12,16,2);           // punto !
  g.generateTexture('bub',24,24);g.clear();
  // door_locked/door_open — vedi 'door_img' caricato sopra (porta a vetri
  // illustrata, non più disegnata proceduralmente); locked/open si
  // distinguono con un tint applicato all'istanza, non con due texture.
  g.destroy();
}

// Crea lo sprite di un NPC nella stanza corrente. Usata sia dal setup
// iniziale in gCreate() sia da syncNewlyVisibleNpcs() per aggiungere NPC
// di livello superiore (o di un percorso appena scelto) a partita già in
// corso, senza ricreare la stanza.
function spawnNpcSprite(npcDef){
  let gc=npcDef.gridX,gr=npcDef.gridY;
  let attempts=0;
  const MAX_RANDOM_ATTEMPTS=200; // sicurezza: evita un loop indefinito se la stanza è quasi piena
  while(curUsedSlots.has(`${gc},${gr}`)||gc<=0||gc>=curCols-1||gr<=0||gr>=curRows-1){
    if(curSpreadIdx<SPREAD_POSITIONS.length){[gc,gr]=SPREAD_POSITIONS[curSpreadIdx++];}
    else if(attempts<MAX_RANDOM_ATTEMPTS){
      attempts++;
      gc=Math.floor(Math.random()*(curCols-3))+2;gr=Math.floor(Math.random()*(curRows-3))+2;
    }else{
      // ultima spiaggia: scansione sistematica della griglia, garantita a terminare
      let found=false;
      for(let r=2;r<curRows-1&&!found;r++){
        for(let c=2;c<curCols-1&&!found;c++){
          if(!curUsedSlots.has(`${c},${r}`)){gc=c;gr=r;found=true;}
        }
      }
      break; // se la stanza è davvero piena, si accetta anche una sovrapposizione
    }
  }
  curUsedSlots.add(`${gc},${gr}`);
  const cx=gc*TILE+TILE/2,cy=gr*TILE+TILE/2;
  const texKey=npcTextureKey(npcDef);
  const npc=scn.npcGroup.create(cx,cy,texKey);
  // Gli avatar/prop PNG sono 48x48 (più grandi delle silhouette procedurali
  // che sostituiscono) — li riporto allo stesso ingombro visivo di prima
  // così restano dentro la tile senza sovrapporsi ai vicini.
  if(PERSON_SPRITES.has(npcDef.sprite))npc.setDisplaySize(34,34);
  else if(npcDef.sprite==='tech')npc.setDisplaySize(40,34);
  npc.setData('def',npcDef);npc.body.setSize(30,30);npc.refreshBody();
  if(npcDef.label){scn.add.text(cx,cy-26,npcDef.label,{font:'7px "Space Mono"',fill:'#6868a8'}).setOrigin(0.5);}
  const bub=scn.add.image(cx,cy-36,'bub').setScale(0.9);
  scn.tweens.add({targets:bub,y:cy-40,duration:1000,yoyo:true,repeat:-1,ease:'Sine.easeInOut'});
  if(ST.world.visited.includes(npcDef.id))bub.setVisible(false); // già esplorato — niente "!"
  npc.setData('bub',bub);
  return npc;
}

function gCreate(){
  scn=this;
  const W=this.scale.width,H=this.scale.height;
  const wd=currentWorldDef;
  const cols=Math.floor(W/TILE),rows=Math.floor(H/TILE);
  const layout=WORLD_LAYOUTS[ST.world.id]||{walls:[],bg:'office'};
  for(let r=1;r<rows-1;r++)for(let c=1;c<cols-1;c++)this.add.image(c*TILE+TILE/2,r*TILE+TILE/2,'floor');
  for(let c=0;c<cols;c++){this.add.image(c*TILE+TILE/2,TILE/2,'wall');this.add.image(c*TILE+TILE/2,(rows-1)*TILE+TILE/2,'wall');}
  for(let r=0;r<rows;r++){this.add.image(TILE/2,r*TILE+TILE/2,'wall');this.add.image((cols-1)*TILE+TILE/2,r*TILE+TILE/2,'wall');}
  const wallGroup=this.physics.add.staticGroup();
  for(let c=0;c<cols;c++){wallGroup.create(c*TILE+TILE/2,TILE/2,'wall').setVisible(false).refreshBody();wallGroup.create(c*TILE+TILE/2,(rows-1)*TILE+TILE/2,'wall').setVisible(false).refreshBody();}
  for(let r=1;r<rows-1;r++){wallGroup.create(TILE/2,r*TILE+TILE/2,'wall').setVisible(false).refreshBody();wallGroup.create((cols-1)*TILE+TILE/2,r*TILE+TILE/2,'wall').setVisible(false).refreshBody();}
  const occupiedCells=new Set();
  layout.walls.forEach(([c,r])=>{
    if(c>0&&c<cols-1&&r>0&&r<rows-1){
      this.add.image(c*TILE+TILE/2,r*TILE+TILE/2,'obstacle');
      wallGroup.create(c*TILE+TILE/2,r*TILE+TILE/2,'obstacle').setVisible(false).refreshBody();
      occupiedCells.add(`${c},${r}`);
    }
  });
  // usedSlots deve esistere PRIMA del blocco arredamento qui sotto,
  // che lo legge per evitare di piazzare mobili sopra gli NPC.
  // Promosso a livello di modulo: spawnNpcSprite() lo riusa per aggiungere
  // NPC "livello superiore" a partita in corso (vedi syncNewlyVisibleNpcs()).
  curCols=cols;curRows=rows;curSpreadIdx=0;
  const usedSlots=new Set(layout.walls.map(([c,r])=>`${c},${r}`));
  usedSlots.add('2,2');
  curUsedSlots=usedSlots;
  // ── FURNITURE — per-mondo, ora identica su ogni dispositivo dato che
  // la stanza ha sempre la stessa griglia fissa (vedi GAME_W/GAME_H).
  {
    const wid=ST.world.id;
    const _bg=layout.bg||'office';
    const T2=TILE; // tile size alias
    // Helper: piazza arredo decorativo (non bloccante, solo visivo)
    const furn=(tx,col,row,key,sx=1,sy=1)=>{
      if(col>0&&col<cols-1&&row>0&&row<rows-1&&!usedSlots.has(`${col},${row}`)){
        const fi=scn.add.image(col*T2+T2/2,row*T2+T2/2,key);
        fi.setDisplaySize(T2*sx,T2*sy);
        // Niente setDepth negativo: il pavimento (aggiunto prima, stesso
        // depth 0 implicito) lo coprirebbe interamente essendo opaco —
        // bug per cui gli arredi erano invisibili. L'ordine di inserimento
        // (dopo il pavimento, prima di player/NPC) basta a metterli sopra
        // il pavimento e sotto i personaggi.
      }
    };
    if(_bg==='factory'){
      // PMI: macchinari industriali agli angoli e lungo i muri
      furn('furn_factory',2,3,'furn_factory');
      furn('furn_factory',cols-3,2,'furn_factory');
      furn('furn_factory',cols-3,rows-3,'furn_factory');
      furn('furn_factory',2,rows-2,'furn_factory');
      furn('furn_factory',Math.floor(cols/2),2,'furn_factory');
      furn('furn_divider',16,3,'furn_divider',0.75,1.1);
      furn('furn_divider',16,6,'furn_divider',0.75,1.1);
      furn('furn_divider',16,9,'furn_divider',0.75,1.1);
    } else if(_bg==='startup'){
      // Startup: divani, piante, energia
      furn('furn_sofa',2,rows-3,'furn_sofa',2,1);
      furn('furn_plant',cols-2,3,'furn_plant');
      furn('furn_plant',2,rows-2,'furn_plant');
      furn('furn_plant',cols-2,rows-2,'furn_plant');
      furn('furn_plant',Math.floor(cols/2),rows-2,'furn_plant');
      furn('furn_divider',16,3,'furn_divider',0.75,1.1);
      furn('furn_divider',16,6,'furn_divider',0.75,1.1);
      furn('furn_divider',16,9,'furn_divider',0.75,1.1);
    } else if(_bg==='office'){
      // Consulenza: scaffali libri, piante formali, parete vetrata a
      // dividere la sala riunioni dall'open space (vedi furn_divider)
      furn('furn_shelf',2,2,'furn_shelf');
      furn('furn_shelf',cols-2,2,'furn_shelf');
      furn('furn_shelf',2,Math.floor(rows/2),'furn_shelf');
      furn('furn_office_plant',cols-2,rows-3,'furn_office_plant');
      furn('furn_office_plant',cols-2,rows-2,'furn_office_plant');
      furn('furn_divider',16,3,'furn_divider',0.75,1.1);
      furn('furn_divider',16,6,'furn_divider',0.75,1.1);
      furn('furn_divider',16,9,'furn_divider',0.75,1.1);
    } else if(_bg==='corporate'){
      // Large Corporate: armadi archivio, piante d'ufficio e pareti
      // vetrate a dividere gli open space (vedi furn_divider)
      furn('furn_cabinet',2,2,'furn_cabinet');
      furn('furn_cabinet',cols-2,2,'furn_cabinet');
      furn('furn_office_plant',2,rows-2,'furn_office_plant');
      furn('furn_office_plant',cols-2,rows-3,'furn_office_plant');
      furn('furn_cabinet',Math.floor(cols/2),rows-2,'furn_cabinet');
      furn('furn_divider',16,3,'furn_divider',0.75,1.1);
      furn('furn_divider',16,6,'furn_divider',0.75,1.1);
      furn('furn_divider',16,9,'furn_divider',0.75,1.1);
    } else if(_bg==='coworking'){
      // P.IVA & Founder: lavagne da brainstorming e piante informali
      furn('furn_whiteboard',2,2,'furn_whiteboard');
      furn('furn_whiteboard',cols-2,rows-3,'furn_whiteboard');
      furn('furn_plant',2,rows-2,'furn_plant');
      furn('furn_plant',cols-2,2,'furn_plant');
      furn('furn_divider',16,3,'furn_divider',0.75,1.1);
      furn('furn_divider',16,6,'furn_divider',0.75,1.1);
      furn('furn_divider',16,9,'furn_divider',0.75,1.1);
    } else if(_bg==='university'){
      // PA/Ricerca/Accademia: globi e pile di libri
      furn('furn_globe',2,2,'furn_globe');
      furn('furn_globe',cols-2,rows-3,'furn_globe');
      furn('furn_shelf',cols-2,2,'furn_shelf');
      furn('furn_shelf',2,rows-2,'furn_shelf');
      furn('furn_divider',16,3,'furn_divider',0.75,1.1);
      furn('furn_divider',16,6,'furn_divider',0.75,1.1);
      furn('furn_divider',16,9,'furn_divider',0.75,1.1);
    }
  }
  // ─────────────────────────────────────────────────────────────
  player=this.physics.add.sprite(TILE*2+TILE/2,TILE*2+TILE/2,'player_avatar');
  player.setDisplaySize(34,34); // riporta il PNG 48x48 all'ingombro visivo di prima
  player.setCollideWorldBounds(true);player.body.setSize(24,24);
  this.physics.add.collider(player,wallGroup);
  // Telecamera zoomata che segue la giocatrice — vedi CAMERA_ZOOM/CAMERA_ZOOM_MOBILE.
  const isMobileCam=('ontouchstart' in window)||navigator.maxTouchPoints>0;
  this.cameras.main.setBounds(0,0,cols*TILE,rows*TILE);
  this.cameras.main.setZoom(isMobileCam?CAMERA_ZOOM_MOBILE:CAMERA_ZOOM);
  this.cameras.main.startFollow(player,true,0.15,0.15);
  const npcGroup=this.physics.add.staticGroup();
  this.npcGroup=npcGroup;
  wd.npcs.forEach(npcDef=>spawnNpcSprite(npcDef));
  this.exitDoors=[];
  wd.exits.forEach(exitDef=>{
    const dx=Math.floor(W*exitDef.x/TILE)*TILE+TILE/2;
    const dy=Math.floor(H*exitDef.y/TILE)*TILE+TILE/2;
    const door=this.add.image(dx,dy,'door_img');
    door.setDisplaySize(TILE*1.3,TILE*0.85);
    door.setTint(0x8892a6); // grigio spento = bloccata, vedi doExit()/rimozione tint
    door.setData('exitDef',exitDef);door.setData('unlocked',false);
    door.setData('px',dx);door.setData('py',dy);
    this.add.text(dx,dy-28,exitDef.label,{font:'7px "Press Start 2P"',fill:'#556688'}).setOrigin(0.5);
    const lockTxt=this.add.text(dx,dy+24,'🔒',{font:'14px sans-serif'}).setOrigin(0.5);
    door.setData('lockIcon',lockTxt);
    this.exitDoors.push(door);
  });
  cursors=this.input.keyboard.createCursorKeys();
  actKey=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  zKey=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
  this.add.text(W/2,TILE*0.6,wd.label,{font:'7px "Press Start 2P"',fill:'#3a3a6a'}).setOrigin(0.5);
  const isMobile=('ontouchstart' in window)||navigator.maxTouchPoints>0;
  // Usa UI_TEXTS per il messaggio default
  setMsg(isMobile ? UI_TEXTS.game.msg_default_mobile : UI_TEXTS.game.msg_default);
  gameRunning=true;
}

function gUpdate(){
  if(!gameRunning||evActive||!player||!cursors||!scn)return;
  if(!player.body||!player.active)return;
  try{
    const spd=160;
    const goL=cursors.left.isDown||TOUCH.left;
    const goR=cursors.right.isDown||TOUCH.right;
    const goU=cursors.up.isDown||TOUCH.up;
    const goD=cursors.down.isDown||TOUCH.down;
    const goAct=(actKey&&actKey.isDown)||(zKey&&zKey.isDown)||TOUCH.act;
    let vx=0,vy=0;
    if(goL)vx=-spd;else if(goR)vx=spd;
    if(goU)vy=-spd;else if(goD)vy=spd;
    if(vx!==0&&vy!==0){vx*=0.707;vy*=0.707;}
    player.setVelocity(vx,vy);
    if(vx<0)player.setFlipX(true);else if(vx>0)player.setFlipX(false);
    if(vx!==0||vy!==0)criticSteps++;
    if(!criticSpawned&&!criticActive&&criticSteps>CRITIC_THRESHOLD){
      const vis=ST.world.visited.length,tot=currentWorldDef.npcs.length;
      if(vis>=1&&vis<tot){criticSpawned=true;criticActive=true;const cd=INNER_CRITICS[ST.world.id];if(cd)triggerCritic(cd);}
    }
    if(criticSpawned&&!critic2Spawned&&!criticActive&&criticSteps>CRITIC_THRESHOLD*2.2){
      const vis=ST.world.visited.length;
      if(vis>=3){
        const cd1=INNER_CRITICS[ST.world.id];const cd2=INNER_CRITICS[ST.world.id+'2'];
        if(cd2&&cd2.dlg?.txt!==cd1?.dlg?.txt){critic2Spawned=true;criticActive=true;triggerCritic(cd2);}
        else{critic2Spawned=true;}
      }
    }
    const actNow=goAct&&!lastActPressed;
    lastActPressed=goAct;
    if(actNow&&!evActive){
      let nearest=null,nearestDist=Infinity;
      scn.npcGroup.getChildren().forEach(npc=>{
        const def=npc.getData('def');
        if(!def||ST.world.visited.includes(def.id))return;
        const dist=Phaser.Math.Distance.Between(player.x,player.y,npc.x,npc.y);
        if(dist<TILE*2.5&&dist<nearestDist){nearest=npc;nearestDist=dist;}
      });
      if(nearest){triggerNPC(nearest.getData('def'),nearest);return;}
      if(!exitTriggered){
        scn.exitDoors.forEach(door=>{
          if(!door.getData('unlocked'))return;
          const dist=Phaser.Math.Distance.Between(player.x,player.y,door.getData('px'),door.getData('py'));
          if(dist<TILE*2)doExit(door.getData('exitDef'));
        });
      }
    }
    if(!exitTriggered&&!evActive){
      scn.exitDoors.forEach(door=>{
        if(!door.getData('unlocked'))return;
        const dist=Phaser.Math.Distance.Between(player.x,player.y,door.getData('px'),door.getData('py'));
        if(dist<TILE*0.9)doExit(door.getData('exitDef'));
      });
    }
    const _prog=getWorldProgress();
    const allVisited=_prog.unlocked;
    scn.exitDoors.forEach(door=>{
      if(!door.getData('unlocked')&&allVisited){
        door.clearTint();
        door.getData('lockIcon')?.setText('✓');
        door.setData('unlocked',true);
        // Usa UI_TEXTS per il messaggio di sblocco
        setMsg(UI_TEXTS.game.msg_door_unlocked);
      }
    });
  }catch(e){}
}

function triggerNPC(def,npc){
  evActive=true;curEv=def;player.setVelocity(0,0);
  const bub=npc?.getData('bub');if(bub)bub.setVisible(false);
  showDialog(def);
}

function triggerCritic(def){
  if(evActive){criticActive=false;criticSpawned=false;return;}
  evActive=true;hideTc();curEv={...def,isCritic:true};player?.setVelocity(0,0);
  const flash=document.createElement('div');
  flash.style.cssText='position:absolute;inset:0;background:rgba(200,0,0,.15);z-index:40;pointer-events:none;';
  document.getElementById('gArea').appendChild(flash);
  setTimeout(()=>{flash.remove();showDialog({...def,isCritic:true});},250);
}

function hideTc(){const t=document.getElementById('tc');if(t){t.style.zIndex='-1';t.style.pointerEvents='none';t.style.opacity='0';}}
function showTc(){const t=document.getElementById('tc');if(t){t.style.zIndex='';t.style.pointerEvents='';t.style.opacity='';}}

function showDialog(def){
  hideTc();
  const d=def.dlg;
  const boxClass=def.id==='critic'||def.isCritic?'critic':def.sprite==='sis'?'sister':def.sprite==='tech'?'tech':'';
  document.getElementById('dlLayer').innerHTML=`
  <div class="dl-ov">
    <div class="dl-box ${boxClass}">
      <div class="dl-spk" style="color:${d.color}">${d.spk}</div>
      <div class="dl-txt">${d.txt}</div>
      <div class="dl-choices">
        ${d.chs.map(c=>`<button class="ch-btn" data-out="${c.out}">${c.t}</button>`).join('')}
      </div>
    </div>
  </div>`;
  document.querySelectorAll('.ch-btn').forEach(b=>{b.addEventListener('click',()=>handleChoice(def,b.dataset.out));});
}

function handleChoice(def,out){
  const res=def.outs[out];
  const SCALE=2.5;
  // In P.IVA non c'è cambio lavoro/colloqui: il network di una freelance
  // cresce per relazioni dirette con clienti e community, molto più in
  // fretta che altrove, dove passa più spesso da un cambio di contesto.
  const PIVA_NETWORK_SCALE=2;
  const hasExplicitRadar=Object.prototype.hasOwnProperty.call(res.stat,'RADAR');
  Object.entries(res.stat).forEach(([k,v])=>{
    // ENERGY non segue più i delta autorali della singola scelta — è una
    // risorsa strutturale, vedi ENERGY_COST/ENERGY_GAIN qui sotto. Le chiavi
    // ENERGY ancora presenti nei dati (career-world-data.js) restano lì come
    // testo narrativo del messaggio ma non vengono più applicate.
    if(k==='ENERGY')return;
    let delta=v<0?v:Math.round(v*SCALE);
    if(ST.world.id==='piva'&&k==='NETWORK'&&v>0)delta=Math.round(v*SCALE*PIVA_NETWORK_SCALE);
    ST.gs[k]=Math.max(0,Math.min(STAT_MAX[k],(ST.gs[k]||0)+delta));
  });
  // Baseline RADAR: si applica solo se la scelta non ha già un suo delta RADAR esplicito,
  // altrimenti si sommerebbe a quello e vanificherebbe anche le penalità (RADAR:-1).
  let radarBaseline=0;
  if(!hasExplicitRadar){
    radarBaseline=Math.round(1*SCALE);
    ST.gs.RADAR=Math.min(STAT_MAX.RADAR,(ST.gs.RADAR||0)+radarBaseline);
  }
  // ENERGY: risorsa che si consuma a ogni interazione — cala il doppio
  // quando appare la voce interiore critica, risale parlando con le
  // alleate (type 'sis') o affrontando una sfida tecnica (type 'tech').
  const ENERGY_COST=3,ENERGY_COST_CRITIC=6,ENERGY_GAIN=5;
  let energyDelta=-ENERGY_COST;
  if(def.isCritic)energyDelta=-ENERGY_COST_CRITIC;
  else if(def.type==='sis'||def.type==='tech')energyDelta=ENERGY_GAIN;
  ST.gs.ENERGY=Math.max(0,Math.min(STAT_MAX.ENERGY,(ST.gs.ENERGY||0)+energyDelta));
  // Leva di negoziazione (ralEffect, solo sui nodi a tema esplicitamente
  // negoziale, es. cons_salary/pmi_auth_salary_data): si accumula e si
  // consuma al prossimo grantOfficialLevel() riuscito, vedi computeRAL().
  let ralLeverageDelta=0;
  if(res.ralEffect){
    ralLeverageDelta=res.ralEffect.delta||0;
    ST.career.ralModifier=(ST.career.ralModifier||0)+ralLeverageDelta;
  }
  // P.IVA: il fatturato si costruisce contratto per contratto, non è
  // assegnato da un colloquio — vedi applyRevenueEffect()/createPivaState()
  // in career-world-data.js.
  let revenueResults=[];
  if(res.revenueEffect&&ST.world.id==='piva'&&ST.world.pivaState){
    const effects=Array.isArray(res.revenueEffect)?res.revenueEffect:[res.revenueEffect];
    effects.forEach(eff=>{
      const r=applyRevenueEffect(ST.world.pivaState,eff);
      if(r)revenueResults.push(r);
    });
    ST.world.officialRAL=ST.world.pivaState.fatturato;
  }
  ST.world.choices.push({npc:def.id,out});
  if(res.track)ST.world.track=res.track; // bivio di carriera: la scelta determina il percorso
  showDebrief(def,res,radarBaseline,energyDelta,ralLeverageDelta,revenueResults);
}

function showDebrief(def,res,radarBaseline=0,energyDelta=0,ralLeverageDelta=0,revenueResults=[]){
  hideTc();
  const db=def.db;
  // Usa UI_TEXTS per le label e il gain RADAR. ENERGY è esclusa dai delta
  // autorali del res.stat (vedi handleChoice) e riceve una pillola dedicata
  // col valore strutturale realmente applicato.
  const energyCol=energyDelta<0?'#f76a6a':SC.ENERGY;
  const pills=Object.entries(res.stat).filter(([k])=>k!=='ENERGY').map(([k,v])=>{
    const col=v<0?'#f76a6a':SC[k];
    return `<span class="st-pill" style="color:${col};border-color:${col}">${k} ${v>0?'+':''}${v}</span>`;
  }).join('')
  +(radarBaseline>0?`<span class="st-pill" style="color:${SC.RADAR};border-color:${SC.RADAR}">${UI_TEXTS.npc_debrief.radar_gain_label}</span>`:'')
  +`<span class="st-pill" style="color:${energyCol};border-color:${energyCol}">ENERGY ${energyDelta>0?'+':''}${energyDelta}</span>`;
  // Warning burnout: la prima volta che ENERGY tocca zero mostra la nota
  // completa (con riferimento OMS), le volte successive solo un promemoria
  // breve — niente game over, solo un segnale di sostenibilità (vedi §title.description).
  let burnoutBlock='';
  if(ST.gs.ENERGY===0){
    const full=!ST.burnoutWarned;
    ST.burnoutWarned=true;
    burnoutBlock=`<div class="db-ins" style="margin-top:.6rem;background:rgba(247,106,106,.08);border-left-color:#f76a6a;color:#f76a6a">${full?UI_TEXTS.npc_debrief.burnout_text:UI_TEXTS.npc_debrief.burnout_text_short}</div>`;
  }
  // Feedback di negoziazione (RAL) — leva accumulata per la prossima
  // trattativa, non un guadagno immediato: vedi computeRAL()/grantOfficialLevel().
  let ralBlock='';
  if(ralLeverageDelta!==0){
    const pct=Math.round(Math.abs(ralLeverageDelta)*100);
    const col=ralLeverageDelta>0?'#6af7c8':'#f76a6a';
    const icon=ralLeverageDelta>0?'📈':'📉';
    const sign=ralLeverageDelta>0?'+':'-';
    ralBlock=`<div style="margin-top:.5rem;font-size:.72rem;color:${col}">${icon} ${sign}${pct}% di leva per la prossima trattativa salariale</div>`;
  }
  // Feedback di fatturato P.IVA — scomposizione visibile (giorni × tariffa)
  // così il nesso scelta→guadagno è leggibile, non un numero magico (§8.2).
  const revenueBlock=revenueResults.map(r=>{
    if(r.kind==='reputation'){
      const pct=Math.round(Math.abs(r.delta)*100);
      const col=r.delta>0?'#6af7c8':'#f76a6a';
      const icon=r.delta>0?'📈':'📉';
      const sign=r.delta>0?'+':'-';
      return `<div style="margin-top:.5rem;font-size:.72rem;color:${col}">${icon} ${sign}${pct}% sul tuo tariffario per i prossimi contratti</div>`;
    }
    return `<div style="margin-top:.5rem;font-size:.72rem;color:#6af7c8">💰 +${r.value.toLocaleString('it-IT')}€ di fatturato (${r.days} giorni × ${r.dayRate.toLocaleString('it-IT')}€/giorno) — totale ${r.fatturatoTotale.toLocaleString('it-IT')}€</div>`;
  }).join('');
  document.getElementById('dlLayer').innerHTML=`
  <div class="dl-ov">
    <div class="dl-box debrief">
      <div class="db-sec">
        <div class="db-lbl">${UI_TEXTS.npc_debrief.section_pattern}</div>
        <div style="font-weight:700;font-size:.88rem;margin-bottom:.4rem">${db.pat}</div>
        <div class="db-ins">${db.ins}<div class="db-data">📊 ${db.data}</div></div>
      </div>
      <div class="db-sec">
        <div class="db-lbl">${UI_TEXTS.npc_debrief.section_outcome}</div>
        <div style="font-size:.8rem;margin-bottom:.38rem;color:#e8e8f8">${res.msg}</div>
        <div class="st-pills">${pills}</div>
        ${ralBlock}${revenueBlock}${burnoutBlock}
      </div>
      <button class="btn-next" id="btnCloseDb">${UI_TEXTS.npc_debrief.btn_continue}</button>
    </div>
  </div>`;
  document.getElementById('btnCloseDb').addEventListener('click',closeDebrief);
}

// Titolo di carriera corrente nel mondo attivo, in base al livello sbloccato
// e al percorso scelto (per i mondi con bivio). Usato nel messaggio di
// promozione e disponibile per l'HUD/debrief in futuro.
function getCurrentBadge(worldId,track){
  const levels=WORLD_CAREER_LEVELS[worldId];
  if(!levels||!levels.length)return null;
  const unlocked=getUnlockedLevel(worldId,isAuthenticated(),ST.world.visited);
  const entry=levels[Math.min(unlocked,levels.length)-1];
  if(typeof entry==='string')return entry;
  if(entry&&track&&entry[track])return entry[track];
  return null; // bivio non ancora scelto: nessun badge finché non si sceglie
}

// Ricalibrazione della classe — UNICA occasione, offerta la prima volta che
// un'utente autenticata esplora completamente un mondo, per cambiare la
// classe scelta nella calibrazione iniziale (vedi startPreCareerCalibration()
// — non è più la prima assegnazione, quella avviene già prima di entrare in
// qualunque mondo). Si può anche restare con la classe attuale.
function maybeOfferRecalibration(){
  if(!isAuthenticated()||ST.recalibrated)return;
  if(!isWorldFullyExplored(ST.world.id,isAuthenticated(),ST.world.visited,ST.world.track))return;
  showRecalibration();
}

function showRecalibration(){
  hideTc();
  const clsKeys=['analyst','scientist','ml','ai','dataeng'];
  const currentCls=ST.char?.cls;
  const cardsHtml=clsKeys.map(k=>{
    const c=CLASSES[k];
    const isCurrent=k===currentCls;
    return `<button data-cls="${k}" style="display:flex;flex-direction:column;align-items:center;gap:.35rem;padding:.85rem .6rem;background:var(--surface2);border:1.5px solid ${c.color};border-radius:10px;cursor:pointer;color:var(--text);font-family:inherit;text-align:center;${isCurrent?`box-shadow:0 0 0 2px ${c.color};`:''}">
      <span style="font-size:1.8rem">${c.av}</span>
      <span style="font-family:'Space Mono',monospace;font-size:.6rem;color:${c.color}">${c.name}${isCurrent?' · attuale':''}</span>
      <span style="font-size:.64rem;color:var(--muted);line-height:1.45">${c.desc}</span>
    </button>`;
  }).join('');
  document.getElementById('dlLayer').innerHTML=`
    <div class="wi-ov">
      <div class="wi-box" style="text-align:center">
        <div class="wi-emoji">🔄</div>
        <div class="wi-title" style="color:var(--accent3)">Vuoi cambiare ruolo?</div>
        <div class="wi-what">Hai esplorato a fondo il mondo del lavoro tech. È l'unica occasione per cambiare la classe con cui ti identifichi — puoi anche restare quella che sei.</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:.6rem;margin-top:1rem">${cardsHtml}</div>
        <button class="btn-next" id="btnKeepCls" style="margin-top:1rem;background:var(--surface2)">Resta ${CLASSES[currentCls]?.name||'così'}</button>
      </div>
    </div>`;
  const finishRecal=(cls)=>{
    if(cls)ST.char={cls,stats:{...ST.gs}};
    ST.recalibrated=true;
    saveProgress(ST).catch(e=>console.warn('save failed',e));
    document.getElementById('dlLayer').innerHTML='';
    showTc();
    const worldLabel=document.querySelector('.g-world-label')?.textContent||currentWorldDef?.label||'';
    renderHUD(worldLabel);
    if(cls)setMsg(`🔄 Ora sei una ${CLASSES[cls].name}! Le tue statistiche continuano a crescere da qui.`);
  };
  document.querySelectorAll('#dlLayer [data-cls]').forEach(btn=>{
    btn.addEventListener('click',()=>finishRecal(btn.dataset.cls));
  });
  document.getElementById('btnKeepCls').addEventListener('click',()=>finishRecal(null));
}

// Entra in un mondo esattamente come dal click sulla mappa — usata sia lì
// sia per spostare automaticamente la giocatrice nel mondo appena ottenuto
// con un colloquio (vedi showInterview()), se era altrove.
function enterWorld(worldId){
  const wdef=WORLD_DEFS[worldId];
  if(!wdef){console.warn('World not found:',worldId);return;}
  const existingOfficial=ST.worldsProgress[worldId];
  // Primo ingresso mai in un mondo (tranne P.IVA, che non ha colloqui — vedi
  // §5.6): va sostenuto un colloquio d'ingresso vero e proprio, che comunica
  // anche la RAL di partenza — non più un livello 1 gratuito e silenzioso.
  // Si può fallire e ritentare subito senza limiti (si torna qui, il mondo
  // resta cliccabile): non un vero gate, coerente con "Nessun game over".
  if(worldId!=='piva'&&!existingOfficial?.officialLevel){
    showInterview(worldId,1,null);
    return;
  }
  // Utenti autenticati riprendono da dove avevano lasciato in questo mondo;
  // i guest ripartono sempre da zero per l'esplorazione libera (nessuna
  // memoria persistente) — ma il livello UFFICIALE (officialLevel/RAL) non
  // "si dimentica" solo perché si rientra nella stessa sessione, quindi si
  // legge comunque da ST.worldsProgress anche per i guest.
  const saved=isAuthenticated()?ST.worldsProgress[worldId]:null;
  ST.world=saved
    ? {id:worldId,visited:[...saved.visited],choices:[...saved.choices],patterns:[...saved.patterns],track:saved.track||null,officialLevel:saved.officialLevel||0,officialRAL:saved.officialRAL??null,pivaState:saved.pivaState||null}
    : {id:worldId,visited:[],choices:[],patterns:[],track:null,officialLevel:existingOfficial?.officialLevel||0,officialRAL:existingOfficial?.officialRAL??null,pivaState:existingOfficial?.pivaState||null};
  // P.IVA non ha un datore di lavoro che assegna una RAL, quindi niente
  // colloquio: livello 1 gratuito e silenzioso come prima. Il fatturato si
  // costruisce contratto per contratto (vedi applyRevenueEffect() in
  // handleChoice()). officialRAL qui rappresenta il fatturato live, non una
  // stima di mercato — parte da 0 alla primissima volta, altrimenti riprende
  // da dove era rimasto (persistito in ST.worldsProgress come tutto il resto).
  if(worldId==='piva'&&!existingOfficial?.officialLevel){
    grantOfficialLevel(worldId,1,null,{free:true});
  }
  if(worldId==='piva'&&!ST.world.pivaState){
    ST.world.pivaState=createPivaState();
    ST.world.officialRAL=0;
  }
  const label=wdef.label||worldId.toUpperCase();
  show('game');renderHUD(label);
  setTimeout(()=>initGame(worldId),100);
}

// Concede il livello UFFICIALE (titolo/RAL riconosciuti in HUD) in un mondo —
// non va confuso col livello ESPLORATO (getUnlockedLevel/ST.world.visited,
// sempre gratuito, sblocca solo il contenuto NPC). Merge coi progressi già
// esistenti, non li cancella. Tre casi:
//  - opts.free (solo P.IVA, che non ha colloqui — vedi enterWorld()/§5.6):
//    livello 1 automatico, nessun effetto collaterale. Per tutti gli altri
//    mondi il primo ingresso passa da un vero colloquio (showInterview()),
//    non da questo path.
//  - promozione interna (mondo target = mondo in cui si è già ufficialmente,
//    niente colloquio da un mondo diverso): INSIDER invariato, nessun bonus
//    NETWORK, cap di crescita RAL più stretto (INTERNAL_PROMOTION_RAL_CAP).
//  - cambio di azienda (mondo target diverso da dove si è ufficialmente
//    ora): INSIDER si riduce (non si azzera più), bonus NETWORK
//    dall'azienda lasciata, cap di crescita RAL più ampio
//    (EXTERNAL_JOB_CHANGE_RAL_CAP).
function grantOfficialLevel(worldId,targetLevel,track,opts={}){
  const{free=false}=opts;
  const wd=WORLD_DEFS[worldId];
  if(!wd)return;
  const authed=isAuthenticated();
  const existing=ST.worldsProgress[worldId]
    || (ST.world.id===worldId ? ST.world : null)
    || {visited:[],patterns:[],choices:[],track:null,officialLevel:0,officialRAL:null};
  // Il colloquio superato dà credito immediato per il contenuto del livello
  // (non serve rifare a piedi le conversazioni). Il grant gratuito del primo
  // ingresso NO: deve restare il livello 1 vero, esplorato NPC per NPC —
  // altrimenti "gratis" salterebbe anche il gameplay, non solo il colloquio.
  const toGrant=free?[]:wd.npcs.filter(n=>(!n.authOnly||authed)&&(n.level||1)<=targetLevel&&(!n.track||n.track===track));
  const visited=[...new Set([...existing.visited,...toGrant.map(n=>n.id)])];
  const finalTrack=track||existing.track||null;

  // Chi lascio, se lascio qualcuno: calcolato PRIMA di scrivere qualunque
  // stato, dato che ST.world.id qui è ancora "dove sono ora" (enterWorld(),
  // se serve, viene chiamata solo DOPO da showInterview()).
  const prevWorldId=(!free&&ST.world.id&&ST.world.id!==worldId)?ST.world.id:null;
  const isInternal=!free&&!prevWorldId&&(existing.officialLevel||0)>0;

  // RAL ancorata alla RAL ufficiale precedente (dello stesso mondo per una
  // promozione interna, del mondo lasciato per un cambio di azienda) invece
  // di un premio cumulativo illimitato — vedi computeRAL() per il "target"
  // di mercato puro.
  const clsKey=ST.char?.cls||'explorer';
  // ralModifier: leva di negoziazione accumulata dai dialoghi (ralEffect,
  // vedi handleChoice()) — si consuma qui e si azzera subito dopo, non dura
  // oltre la prossima trattativa.
  const targetRAL=computeRAL(worldId,clsKey,targetLevel,ST.career.ralModifier);
  ST.career.ralModifier=0;
  const anchorRAL=prevWorldId
    ? (ST.worldsProgress[prevWorldId]?.officialRAL??null)
    : (existing.officialRAL??null);
  let newRAL;
  if(free||anchorRAL==null){
    newRAL=targetRAL; // nessuna storia salariale pregressa da cui ancorare
  }else{
    const cap=isInternal?INTERNAL_PROMOTION_RAL_CAP:EXTERNAL_JOB_CHANGE_RAL_CAP;
    const capped=Math.round(anchorRAL*(1+cap)/1000)*1000;
    newRAL=targetRAL>capped?capped:targetRAL; // può anche scendere, se il tasso del nuovo ruolo è più basso
  }

  const merged={visited,patterns:[...existing.patterns],choices:[...existing.choices],track:finalTrack,
    officialLevel:targetLevel,officialRAL:newRAL,pivaState:existing.pivaState??null};
  ST.worldsProgress[worldId]=merged;
  if(ST.world.id===worldId){
    ST.world.visited=merged.visited;ST.world.choices=merged.choices;ST.world.track=merged.track;
    ST.world.officialLevel=merged.officialLevel;ST.world.officialRAL=merged.officialRAL;
    if(scn)syncNewlyVisibleNpcs();
  }

  if(!free&&!isInternal){
    // Cambio di azienda vero: riduzione (non azzeramento) della conoscenza
    // procedure/politica del posto lasciato, e un bonus di NETWORK
    // proporzionale a quanto era grande il contesto e quanto era senior il
    // ruolo ufficiale lì raggiunto.
    ST.gs.INSIDER=Math.round((ST.gs.INSIDER||0)*INSIDER_RETENTION_RATIO);
    const prevOfficialLevel=prevWorldId?(ST.worldsProgress[prevWorldId]?.officialLevel||0):0;
    if(prevWorldId&&prevOfficialLevel>0){
      const size=WORLD_COMPANY_SIZE[prevWorldId]??1;
      const networkGain=Math.min(NETWORK_JOB_CHANGE_BONUS_CAP,Math.round(size*prevOfficialLevel));
      if(networkGain>0)ST.gs.NETWORK=Math.max(0,Math.min(STAT_MAX.NETWORK,(ST.gs.NETWORK||0)+networkGain));
    }
  }
  updHUD();
  saveProgress(ST).catch(e=>console.warn('save failed',e));
}

// Beat narrativo mostrato prima di spostare davvero la giocatrice in un
// mondo diverso dopo un cambio di azienda riuscito — puro flavor testuale,
// zero impatto sui numeri (già applicati da grantOfficialLevel()).
function showJobChangeTransition(onDone){
  const text=JOB_CHANGE_TRANSITIONS[Math.floor(Math.random()*JOB_CHANGE_TRANSITIONS.length)];
  const overlay=document.createElement('div');
  overlay.className='dl-ov';
  overlay.style.cssText='position:fixed;inset:0;z-index:600;';
  overlay.innerHTML=`
    <div class="dl-box" style="text-align:center">
      <div class="dl-spk" style="color:#6af7c8">💼 Cambio lavoro</div>
      <div class="dl-txt">${text}</div>
      <div class="dl-choices" style="align-items:center"><button class="ch-btn" id="btnJobChangeTransitionClose" style="text-align:center">Continua</button></div>
    </div>`;
  document.body.appendChild(overlay);
  document.getElementById('btnJobChangeTransitionClose').addEventListener('click',()=>{
    overlay.remove();
    onDone();
  });
}

// Minigioco colloquio: 4 domande a risposta multipla, calibrate sul livello
// di seniority target, + 1 domanda specifica del mondo. Se il punteggio
// supera la soglia, concede davvero quel livello/mondo (grantOfficialLevel).
// Overlay indipendente (non usa #dlLayer) così funziona sia dalla mappa che
// dentro un mondo.
function showInterview(worldId,targetLevel,track){
  hideTc();
  const base=INTERVIEW_QUESTIONS[targetLevel]||INTERVIEW_QUESTIONS[1];
  const worldQ=INTERVIEW_WORLD_QUESTIONS[worldId]?.[targetLevel];
  const pool=worldQ?[...base,worldQ]:base;
  // Per PMI la domanda specifica è sempre quella illegale su stato
  // civile/figli/leadership — vedi PMI_ILLEGAL_QUESTION_NOTICE.
  const isPmiIllegalQuestion=worldId==='pmi'&&!!worldQ;
  const levels=WORLD_CAREER_LEVELS[worldId];
  const entry=levels?.[targetLevel-1];
  const title=typeof entry==='string'?entry:(entry&&track?entry[track]:'il ruolo');
  const wLabel=WORLD_DEFS[worldId]?.label||worldId;
  let qIdx=0,score=0;
  const maxScore=pool.reduce((acc,q)=>acc+Math.max(...q.a.map(a=>a.score)),0);

  const overlay=document.createElement('div');
  overlay.className='dl-ov';
  overlay.style.cssText='position:fixed;inset:0;z-index:600;';
  document.body.appendChild(overlay);

  function renderQuestion(){
    const q=pool[qIdx];
    // Ordine delle risposte mescolato a ogni partita: la posizione non deve
    // più essere un indizio sul punteggio (data-i punta comunque all'indice
    // originale in q.a, così lo scoring resta invariato).
    const order=q.a.map((_,i)=>i);
    for(let i=order.length-1;i>0;i--){
      const j=Math.floor(Math.random()*(i+1));
      [order[i],order[j]]=[order[j],order[i]];
    }
    overlay.innerHTML=`
      <div class="dl-box">
        <div class="dl-spk" style="color:#4fc3f7">💼 Colloquio — ${title} @ ${wLabel} · Domanda ${qIdx+1}/${pool.length}</div>
        <div class="dl-txt">${q.q}</div>
        <div class="dl-choices">${order.map(i=>`<button class="ch-btn" data-i="${i}">${q.a[i].t}</button>`).join('')}</div>
      </div>`;
    overlay.querySelectorAll('.ch-btn').forEach(btn=>{
      btn.addEventListener('click',()=>{
        score+=q.a[+btn.dataset.i].score;
        qIdx++;
        if(qIdx<pool.length)renderQuestion();else finish();
      });
    });
  }

  function finish(){
    const scorePassed=score>=Math.round(maxScore*INTERVIEW_PASS_RATIO);
    // Anche con un punteggio sufficiente, il colloquio può non andare a
    // buon fine — il mercato del lavoro non è meritocratico. Il rischio
    // scende linearmente da REJECT_MAX (appena sopra soglia) a REJECT_MIN
    // (punteggio pieno): prepararsi oltre il minimo riduce concretamente il
    // rischio residuo (vedi INTERVIEW_LUCK_* in career-world-data.js).
    let luckChance=0;
    if(scorePassed){
      const beyond=(score/maxScore-INTERVIEW_PASS_RATIO)/(1-INTERVIEW_PASS_RATIO);
      luckChance=INTERVIEW_LUCK_REJECT_MAX-beyond*(INTERVIEW_LUCK_REJECT_MAX-INTERVIEW_LUCK_REJECT_MIN);
    }
    const luckRejected=scorePassed&&Math.random()<luckChance;
    const passed=scorePassed&&!luckRejected;
    const luckMsg=luckRejected?INTERVIEW_LUCK_MESSAGES[Math.floor(Math.random()*INTERVIEW_LUCK_MESSAGES.length)]:null;
    // Applicato subito, non al click su "Continua": così il risultato può
    // già mostrare la RAL comunicata, non solo l'esito pass/fail. Un cambio
    // di azienda vero (mondo diverso da dove si è ora) va calcolato PRIMA di
    // grantOfficialLevel() — che non tocca ST.world.id. needsEntry copre sia
    // il cambio di azienda sia il primissimo ingresso in assoluto (ST.world.id
    // ancora nullo, vedi enterWorld()), che altrimenti non aprirebbe mai il mondo.
    let isJobChange=false,needsEntry=false;
    if(passed){
      isJobChange=!!ST.world.id&&ST.world.id!==worldId;
      needsEntry=ST.world.id!==worldId;
      grantOfficialLevel(worldId,targetLevel,track);
    }
    const ral=passed?ST.worldsProgress[worldId]?.officialRAL:null;
    const ralLabel=RAL_LABEL_BY_WORLD[worldId]||'RAL';
    const headline=passed?'🎉 Colloquio superato':luckRejected?'🎲 Così vicina, eppure no':'😕 Colloquio non superato';
    const color=passed?'#6af7c8':luckRejected?'#ffb74d':'#f76a6a';
    let body=passed
      ? `Congratulazioni! Sei stata assunta come <strong>${title}</strong> in ${wLabel}. Punteggio: ${score}/${maxScore}.${ral!=null?`<br>💶 ${ralLabel}: <strong>${ral.toLocaleString('it-IT')} €</strong>.`:''}`
      : luckRejected
        ? `Punteggio: ${score}/${maxScore} — sufficiente per il ruolo. ${luckMsg} Non è dipeso dalle tue risposte. Puoi riprovare quando vuoi.`
        : `Punteggio: ${score}/${maxScore}. Non questa volta — ma puoi riprovare quando vuoi.`;
    if(isPmiIllegalQuestion)body+=`<br><br><span style="opacity:.85;font-size:.88em">${PMI_ILLEGAL_QUESTION_NOTICE}</span>`;
    overlay.innerHTML=`
      <div class="dl-box" style="text-align:center">
        <div class="dl-spk" style="color:${color}">${headline}</div>
        <div class="dl-txt">${body}</div>
        <div class="dl-choices" style="align-items:center"><button class="ch-btn" id="btnInterviewClose" style="text-align:center">Continua</button></div>
      </div>`;
    document.getElementById('btnInterviewClose').addEventListener('click',()=>{
      overlay.remove();
      if(ST.screen==='game')showTc();
      if(isJobChange)showJobChangeTransition(()=>enterWorld(worldId));
      else if(needsEntry)enterWorld(worldId);
    });
  }

  renderQuestion();
}

// Picker "Cambia lavoro": scegli mondo (se non fissato) + livello a cui
// ambisci (+ percorso, se il mondo ha un bivio), poi apre il colloquio.
// Con fixedWorldId, salta la scelta del mondo. Senza, il mondo in cui ci si
// trova ora è preselezionato ma modificabile — accessibile dal pulsante
// "Cambia lavoro" nella HUD, mentre si gioca dentro un mondo (non in P.IVA).
function showJobChangePicker(fixedWorldId){
  const isFixed=!!fixedWorldId;
  const selStyle='width:100%;padding:.5rem;margin-top:.25rem;background:var(--surface);color:var(--text);border:1px solid var(--border);border-radius:6px;font-family:inherit';
  // P.IVA non ha cambio lavoro/colloqui: è freelance, cresce per relazioni
  // dirette (vedi il bonus NETWORK dedicato in handleChoice()), non per
  // colloqui con un\'azienda che non esiste in quel contesto.
  const worldFieldHtml=isFixed?'':`
        <label style="font-size:.66rem;color:var(--muted)">Mondo
          <select id="jcWorld" style="${selStyle}">${Object.entries(WORLD_DEFS).filter(([wid])=>wid!=='piva').map(([wid,wdef])=>`<option value="${wid}"${wid===ST.world.id?' selected':''}>${wdef.label||wid}</option>`).join('')}</select>
        </label>`;
  // Readiness (SKILL/VOICE/CLARITY, vedi computeReadiness() in
  // career-world-data.js): solo un suggerimento pre-selezionato nel
  // dropdown, non un vincolo — il colloquio resta l'unico vero gate.
  const readiness=computeReadiness(ST.gs);
  const readinessTier=tierFromReadiness(readiness);
  const suggestedLevel=readinessTier==='junior'?1:readinessTier==='mid'?2:3;
  const readinessLabel={junior:'junior',mid:'mid',senior:'senior',lead:'lead'}[readinessTier];
  const overlay=document.createElement('div');
  overlay.className='wi-ov';
  overlay.style.cssText='position:fixed;inset:0;z-index:500;';
  overlay.innerHTML=`
    <div class="wi-box" style="text-align:center;margin:auto;max-width:380px">
      <div class="wi-emoji">💼</div>
      <div class="wi-title" style="color:var(--accent3)">${isFixed?'Tenta un ruolo più senior?':'Cambia lavoro'}</div>
      <div class="wi-what">${isFixed?'Puoi sostenere un colloquio per iniziare questo mondo da un livello più alto, invece che da junior.':'Scegli il mondo e il livello a cui vuoi ambire.'} Se superi il colloquio, quel ruolo è tuo.</div>
      <div style="font-size:.62rem;color:var(--muted);margin-top:.4rem">📊 In base alle tue statistiche attuali (SKILL/VOICE/CLARITY), la tua readiness suggerisce il livello ${suggestedLevel} (${readinessLabel}) — puoi comunque tentarne un altro.</div>
      <div style="display:flex;flex-direction:column;gap:.6rem;margin-top:1rem;text-align:left">
        ${worldFieldHtml}
        <label style="font-size:.66rem;color:var(--muted)">Livello a cui ambisci
          <select id="jcLevel" style="${selStyle}">
            <option value="1"${suggestedLevel===1?' selected':''}>Livello 1</option>
            <option value="2"${suggestedLevel===2?' selected':''}>Livello 2</option>
            <option value="3"${suggestedLevel===3?' selected':''}>Livello 3</option>
          </select>
        </label>
        <div id="jcTrackWrap" style="display:none">
          <label style="font-size:.66rem;color:var(--muted)">Percorso
            <select id="jcTrack" style="${selStyle}">
              <option value="expert">Expert</option>
              <option value="manager">Manager</option>
            </select>
          </label>
        </div>
      </div>
      <div style="display:flex;gap:1rem;justify-content:center;margin-top:1.2rem">
        <button class="btn-next" id="jcCancel" style="background:var(--surface2)">Annulla</button>
        <button class="btn-next" id="jcStart">Sostieni il colloquio</button>
      </div>
    </div>`;
  document.body.appendChild(overlay);

  const worldSel=isFixed?null:document.getElementById('jcWorld');
  const getWid=()=>isFixed?fixedWorldId:worldSel.value;
  const levelSel=document.getElementById('jcLevel');
  const trackWrap=document.getElementById('jcTrackWrap');
  const updateTrackVisibility=()=>{
    const hasBranch=(WORLD_DEFS[getWid()]?.npcs||[]).some(n=>n.track);
    trackWrap.style.display=(hasBranch&&levelSel.value==='3')?'block':'none';
  };
  worldSel?.addEventListener('change',updateTrackVisibility);
  levelSel.addEventListener('change',updateTrackVisibility);
  updateTrackVisibility();

  document.getElementById('jcCancel').addEventListener('click',()=>overlay.remove());
  document.getElementById('jcStart').addEventListener('click',()=>{
    const wid=getWid();
    const level=+levelSel.value;
    const hasBranch=(WORLD_DEFS[wid]?.npcs||[]).some(n=>n.track);
    const track=(hasBranch&&level===3)?document.getElementById('jcTrack').value:null;
    overlay.remove();
    showInterview(wid,level,track);
  });
}

// Confronta cosa dovrebbe essere visibile ora con cosa è già stato spawnato
// nella stanza, e crea gli NPC mancanti — copre sia lo sblocco di un nuovo
// livello sia la scelta di un percorso (track), senza dover ricreare la
// stanza. Ritorna true se qualcosa di nuovo è comparso.
function syncNewlyVisibleNpcs(){
  const wid=ST.world.id;
  const visibleNow=getVisibleNpcs(wid,isAuthenticated(),ST.world.visited,ST.world.track);
  const spawnedIds=new Set(scn.npcGroup.getChildren().map(c=>c.getData('def')?.id));
  const toSpawn=visibleNow.filter(n=>!spawnedIds.has(n.id));
  if(toSpawn.length===0)return false;
  toSpawn.forEach(npcDef=>spawnNpcSprite(npcDef));
  currentWorldDef={...currentWorldDef,npcs:visibleNow};
  return true;
}

function closeDebrief(){
  showTc();
  if(curEv){
    if(curEv.id==='critic'||curEv.isCritic){ST.world.patterns.push(curEv.db.pat);criticActive=false;}
    else{
      ST.world.visited.push(curEv.id);ST.world.patterns.push(curEv.db.pat);
      // Ogni interazione nel posto attuale insegna qualcosa sulle sue
      // procedure/politiche non scritte — ridotto (non azzerato) a ogni
      // cambio di azienda vero, invariato per una promozione interna
      // (vedi grantOfficialLevel()).
      ST.gs.INSIDER=Math.min(STAT_MAX.INSIDER,(ST.gs.INSIDER||0)+2);
    }
  }
  document.getElementById('dlLayer').innerHTML='';
  evActive=false;curEv=null;
  // Aggiornato DOPO syncNewlyVisibleNpcs(): il bottone "Cambia lavoro" deve
  // riflettere il livello ESPLORATO appena sbloccato (vedi buildJobChangeBtn()).
  const leveledUp=syncNewlyVisibleNpcs();
  updHUD();
  ST.worldsProgress[ST.world.id]={visited:[...ST.world.visited],choices:[...ST.world.choices],patterns:[...ST.world.patterns],track:ST.world.track,
    officialLevel:ST.world.officialLevel||0,officialRAL:ST.world.officialRAL??null,pivaState:ST.world.pivaState??null};
  saveProgress(ST).catch(e=>console.warn('save failed',e));
  if(leveledUp){
    // Esplorare sblocca il contenuto gratis, ma non aggiorna da sola
    // titolo/RAL "ufficiali" — vedi buildJobChangeBtn()/grantOfficialLevel().
    const badge=getCurrentBadge(ST.world.id,ST.world.track);
    setMsg(badge?`🎉 Sai già fare il lavoro da ${badge}! Non è ancora ufficiale — chiedilo con "Cambia lavoro" quando vuoi.`:UI_TEXTS.game.msg_level_up);
  }else{
    const _p=getWorldProgress();
    setMsg(_p.unlocked
      ? UI_TEXTS.game.msg_door_hint_after_debrief
      : `🔒 Mancano: ${Math.max(0,_p.npcGoal-_p.doneNPC)} NPC 👥 + ${Math.max(0,_p.sisGoal-_p.doneSis)} sorellanza ❤️ + ${Math.max(0,_p.techGoal-_p.doneTech)} sfida 💻`);
  }
  maybeOfferRecalibration();
}

function showWorldDebrief(){
  hideTc();
  const T=UI_TEXTS.debrief; // alias locale
  const wid=ST.world.id;
  const wIntro=WORLD_INTROS[wid]||{emoji:'🏁',title:wid,color:'#6af7c8'};
  const npcs=getVisibleNpcs(wid,isAuthenticated(),ST.world.visited,ST.world.track);
  const vis=ST.world.visited;
  const color=wIntro.color||'#6af7c8';
  const count=vis.length;
  const dbConf=WORLD_DEBRIEF[wid];
  const levels=dbConf?.levels||[];
  const level=[...levels].reverse().find(l=>count>=l.min)||levels[0];
  const maxMin=levels.length?levels[levels.length-1].min:9;
  const pct=Math.min(100,Math.round((count/maxMin)*100));
  // Legge le label depth da UI_TEXTS
  const depthLabel=count>=maxMin?T.depth_complete:count>=7?T.depth_medium:T.depth_base;
  const patterns=[...new Set(ST.world.patterns)];
  const patHtml=patterns.length
    ?patterns.map(p=>`<div class="db-row"><span class="db-tag" style="color:${color}">✓</span><span>${p}</span></div>`).join('')
    :`<div style="color:var(--muted);font-size:.72rem">${T.no_patterns}</div>`;
  const unlockedLevels=levels.filter(l=>count>=l.min);
  const insightHtml=unlockedLevels.length?unlockedLevels.map((l,i)=>{
    const isLatest=i===unlockedLevels.length-1;
    return `<div class="wd-insight${isLatest?' wd-insight-new':''}" style="${isLatest?`border-left:3px solid ${color};background:${color}08`:'border-left:3px solid #3a3a5a;opacity:.7'}">
      <div style="font-size:.72rem;line-height:1.65;padding:.6rem .8rem">${l.insight}</div>
    </div>`;
  }).join(''):`<div style="color:var(--muted);font-size:.72rem;padding:.4rem 0">Completa più interazioni per sbloccare gli insight.</div>`;
  const takeaway=level?.takeaway||'';
  const badge=level?.badge||'';
  const init=ST.char.stats;
  const pills=Object.entries(ST.gs).map(([k,v])=>{
    const delta=v-(init[k]||0);if(delta===0)return'';
    const col=delta<0?'#f76a6a':SC[k];const sign=delta>0?'+':'';
    return `<span class="st-pill" style="color:${col};border-color:${col}">${k} ${sign}${delta}</span>`;
  }).filter(Boolean).join('');
  const lockedLevels=levels.filter(l=>count<l.min);
  const teaserHtml=lockedLevels.length
    ?`<div style="font-size:.65rem;color:var(--muted);margin-top:.4rem;font-style:italic">🔒 ${lockedLevels.length} ${T.locked_levels_hint}</div>`
    :`<div style="font-size:.65rem;color:${color};margin-top:.4rem">${T.all_levels_unlocked}</div>`;

  document.getElementById('dlLayer').innerHTML=`
  <div class="wt-overlay">
    <div style="max-width:560px;width:100%;display:flex;flex-direction:column;gap:.9rem;padding-bottom:1rem">
      <div style="display:flex;align-items:center;gap:.75rem;flex-wrap:wrap">
        <div class="wt-title" style="color:${color};font-size:clamp(.5rem,1.8vw,.78rem);margin:0">
          ${wIntro.emoji||'🏁'} ${wIntro.title||wid} ${T.world_completed_suffix}
        </div>
        ${badge?`<span style="font-size:.62rem;background:${color}22;color:${color};border:1px solid ${color}44;border-radius:12px;padding:.18rem .6rem">${badge}</span>`:''}
      </div>
      <div style="display:flex;align-items:center;gap:.6rem">
        <div style="flex:1;height:4px;background:var(--border);border-radius:2px;overflow:hidden">
          <div style="width:${pct}%;height:100%;background:${color};border-radius:2px;transition:width 1s"></div>
        </div>
        <span style="font-size:.58rem;color:${color};white-space:nowrap">${depthLabel} · ${count}/${npcs.length} NPC</span>
      </div>
      <div class="db-sec" style="margin-bottom:0">
        <div class="db-lbl">${T.section_patterns} (${patterns.length})</div>
        <div class="db-rows" style="margin-top:.35rem">${patHtml}</div>
      </div>
      <div class="db-sec" style="margin-bottom:0">
        <div class="db-lbl">${T.section_insight}</div>
        <div style="display:flex;flex-direction:column;gap:.4rem;margin-top:.35rem">${insightHtml}</div>
        ${teaserHtml}
      </div>
      ${takeaway?`<div class="db-sec" style="margin-bottom:0">
        <div class="db-lbl">${T.section_takeaway}</div>
        <div class="db-ins" style="font-size:.75rem;margin-top:.35rem">${takeaway}</div>
      </div>`:''}
      ${pills?`<div class="db-sec" style="margin-bottom:0">
        <div class="db-lbl">${T.section_stats}</div>
        <div class="st-pills" style="margin-top:.35rem">${pills}</div>
      </div>`:''}
      <div style="display:flex;gap:.6rem;justify-content:center;flex-wrap:wrap;padding-top:.4rem">
        <button class="btn-next" id="btnBackMap" style="background:${color}33;border:1px solid ${color}66;color:${color}">${T.btn_map}</button>
        <button class="btn-next" id="btnTryOther" style="background:#1a1a2e;border:1px solid #3a3a5a;color:var(--muted);font-size:.6rem">${T.btn_retry}</button>
      </div>
    </div>
  </div>`;

  document.getElementById('btnBackMap').onclick=()=>{
    document.getElementById('dlLayer').innerHTML='';
    exitTriggered=false;evActive=false;showTc();show('map');renderMap();
  };
  document.getElementById('btnTryOther').onclick=()=>{
    document.getElementById('dlLayer').innerHTML='';
    exitTriggered=false;evActive=false;
    ST.worldHistory=ST.worldHistory.filter(id=>id!==ST.world.id);
    showTc();show('map');renderMap();
  };
}

function doExit(exitDef){
  if(exitTriggered||!gameRunning)return;
  exitTriggered=true;gameRunning=false;evActive=true;
  player?.setVelocity(0,0);
  if(PG){try{PG.destroy(true);}catch(e){}PG=null;}
  player=null;cursors=null;actKey=null;zKey=null;scn=null;
  if(!ST.worldHistory.includes(ST.world.id))ST.worldHistory.push(ST.world.id);
  ST.worldPath=exitDef.id;
  // officialLevel/officialRAL/pivaState vanno preservati anche qui — questa
  // stessa riga li perdeva silenziosamente ad ogni uscita da un mondo
  // (bug preesistente, notato mentre si integrava il fatturato P.IVA: senza
  // questo fix il fatturato costruito spariva uscendo dalla porta "FINE").
  ST.worldsProgress[ST.world.id]={visited:[...ST.world.visited],choices:[...ST.world.choices],patterns:[...ST.world.patterns],track:ST.world.track,
    officialLevel:ST.world.officialLevel||0,officialRAL:ST.world.officialRAL??null,pivaState:ST.world.pivaState??null};
  saveProgress(ST).catch(e=>console.warn('save failed',e));
  showWorldDebrief();
}

function setMsg(t){const el=document.getElementById('gMsg');if(el)el.textContent=t;}

// ══════════════════════════════════════
// OUTCOME
// ══════════════════════════════════════
function renderOutcome(){
  const O=UI_TEXTS.outcome; // alias locale
  const cls=CLASSES[ST.char.cls];
  const gs=ST.gs,init=ST.char.stats,visited=ST.worldHistory;
  const statPills=Object.entries(gs).map(([k,v])=>{
    const d=v-(init[k]||0);const dstr=d>0?` (+${d})`:d<0?` (${d})`:'';
    return `<span class="st-pill" style="color:${SC[k]};border-color:${SC[k]}">${k} ${v}${dstr}</span>`;
  }).join('');
  const allPatterns=[...new Set(ST.world.patterns)];
  const patHtml=allPatterns.length>0
    ?allPatterns.map(p=>`<div class="oc-row"><span class="oc-tag" style="background:rgba(106,247,200,.1);color:#6af7c8;border:1px solid rgba(106,247,200,.3)">✓</span><span>${p}</span></div>`).join('')
    :`<div style="color:#6868a8;font-size:.78rem">${O.no_patterns}</div>`;
  const worldsHtml=visited.length?visited.map(wid=>{
    const wi=WORLD_INTROS[wid]||{emoji:'🌐',title:wid,color:'#6af7c8'};
    const db=WORLD_DEBRIEF[wid];
    return `<div class="oc-row" style="align-items:center">
      <span style="font-size:1.1rem">${wi.emoji}</span>
      <div style="flex:1">
        <span style="color:${wi.color};font-family:'Space Mono',monospace;font-size:.6rem">${wi.title}</span>
        ${db?.levels?`<span style="font-size:.58rem;color:var(--muted);margin-left:.4rem">${db.theme}</span>`:''}
      </div>
      <span style="font-size:.58rem;color:#6af7c8">✓</span>
    </div>`;
  }).join(''):`<div style="color:var(--muted);font-size:.75rem">${O.no_worlds}</div>`;
  const radarGain=gs.RADAR-(init.RADAR||3);
  // Legge le label RADAR da UI_TEXTS
  const radarTxt=radarGain>=20?O.radar.exceptional:radarGain>=12?O.radar.high:radarGain>=6?O.radar.growing:O.radar.base;
  const hasStartup=visited.includes('startup');
  const hasCorporate=visited.includes('corporate');
  const hasPiva=visited.includes('piva');
  // Legge il takeaway contestuale da UI_TEXTS
  const globalTakeaway=hasPiva?O.takeaways.has_piva:hasCorporate?O.takeaways.has_corporate:hasStartup?O.takeaways.has_startup:O.takeaways.default;

  document.getElementById('s-outcome').innerHTML=`
    <div class="oc-em">${O.emoji}</div>
    <div class="oc-title">${O.title}</div>
    <div class="oc-desc">Profilo: <strong>${cls.av} ${cls.name}</strong> · ${visited.length} mondo/i esplorato/i</div>
    <div class="oc-card">
      <div class="oc-card-title">${O.section_worlds}</div>
      <div class="oc-rows" style="margin-top:.5rem">${worldsHtml}</div>
    </div>
    <div class="oc-card">
      <div class="oc-card-title">${O.section_stats}</div>
      <div class="st-pills" style="margin-top:.4rem">${statPills}</div>
      <div style="font-size:.7rem;color:var(--muted);margin-top:.5rem">${radarTxt}</div>
    </div>
    <div class="oc-card">
      <div class="oc-card-title">${O.section_patterns} (${allPatterns.length})</div>
      <div class="oc-rows" style="margin-top:.4rem">${patHtml}</div>
    </div>
    <div class="oc-take">
      ${globalTakeaway}<br><br>
      ${O.global_suffix.replace('\n','<br>')}
    </div>
    <div style="display:flex;gap:1rem;flex-wrap:wrap;justify-content:center">
      <button class="btn-replay" id="btnOtherPath">${O.btn_other_path}</button>
      <button class="btn-replay" id="btnRestart">${O.btn_restart}</button>
    </div>`;

  document.getElementById('btnOtherPath').onclick=()=>{
    gameRunning=false;evActive=false;exitTriggered=false;
    if(PG){try{PG.destroy(true);}catch(e){}PG=null;}
    player=null;cursors=null;scn=null;show('map');renderMap();
  };
  document.getElementById('btnRestart').onclick=confirmReset;
}

// Azzera davvero tutto lo stato di gioco (stats, mondi, badge, RAL, classe)
// e — per utenti autenticati — anche i dati salvati su Supabase. Irreversibile,
// per questo è sempre preceduto da confirmReset().
function performFullReset(){
  ST.step=0;ST.ans={hard:{},soft:{},pref:{}};
  ST.char=null;ST.gs={SKILL:0,VOICE:0,CLARITY:0,NETWORK:0,ENERGY:STAT_MAX.ENERGY,RADAR:0,INSIDER:0};
  ST.world={id:null,visited:[],choices:[],patterns:[],track:null,officialLevel:0,officialRAL:null,pivaState:null};
  ST.worldsProgress={};
  ST.worldPath=null;ST.worldHistory=[];
  ST.recalibrated=false;ST.burnoutWarned=false;ST.career={ralModifier:0};
  resetProgress().catch(e=>console.warn('reset failed',e));
  gameRunning=false;evActive=false;exitTriggered=false;
  if(PG){try{PG.destroy(true);}catch(e){}PG=null;}
  player=null;cursors=null;scn=null;show('title');
}

// Esce dall'account: chiude la sessione Supabase e azzera lo stato locale
// (SENZA toccare resetProgress() — i progressi restano salvati sul server,
// pronti a essere ripresi al prossimo login) così un login successivo, magari
// con un altro account, non eredita la partita di questa sessione.
async function doLogout(){
  try{ await signOut(); }catch(e){ console.warn('logout failed',e); }
  ST.step=0;ST.ans={hard:{},soft:{},pref:{}};
  ST.char=null;ST.gs={SKILL:0,VOICE:0,CLARITY:0,NETWORK:0,ENERGY:STAT_MAX.ENERGY,RADAR:0,INSIDER:0};
  ST.world={id:null,visited:[],choices:[],patterns:[],track:null,officialLevel:0,officialRAL:null,pivaState:null};
  ST.worldsProgress={};ST.worldPath=null;ST.worldHistory=[];ST.recalibrated=false;ST.burnoutWarned=false;ST.career={ralModifier:0};
  gameRunning=false;evActive=false;exitTriggered=false;
  if(PG){try{PG.destroy(true);}catch(e){}PG=null;}
  player=null;cursors=null;scn=null;
  document.body.classList.remove('calibration-mode');
  show('title');
}

// Modale di conferma prima di un reset completo — spiega cosa viene perso
// prima di procedere, dato che l'azione è irreversibile. Richiamabile da
// più punti (mappa, schermata finale).
function confirmReset(){
  const overlay=document.createElement('div');
  overlay.className='wi-ov';
  overlay.style.cssText='position:fixed;inset:0;z-index:700;';
  overlay.innerHTML=`
    <div class="wi-box" style="text-align:center;margin:auto;max-width:400px">
      <div class="wi-emoji">⚠️</div>
      <div class="wi-title" style="color:#f76a6a">Ricominciare da zero?</div>
      <div class="wi-what">Questa azione cancella <strong>in modo permanente</strong> tutti i tuoi progressi: statistiche, mondi esplorati, badge e livelli ottenuti, RAL accumulata${isAuthenticated()?', e i dati salvati sul tuo account':''}. Tornerai alla schermata iniziale e ripartirai completamente da capo. Non si può annullare.</div>
      <div style="display:flex;gap:1rem;justify-content:center;margin-top:1.2rem;flex-wrap:wrap">
        <button class="btn-next" id="rstCancel" style="background:var(--surface2)">Annulla</button>
        <button class="btn-next" id="rstConfirm" style="background:rgba(247,106,106,.15);border:1px solid rgba(247,106,106,.4);color:#f76a6a">Sì, ricomincia da zero</button>
      </div>
    </div>`;
  document.body.appendChild(overlay);
  document.getElementById('rstCancel').addEventListener('click',()=>overlay.remove());
  document.getElementById('rstConfirm').addEventListener('click',()=>{overlay.remove();performFullReset();});
}

// ══════════════════════════════════════
// WORLD MAP
// ══════════════════════════════════════
const MAP_NODES=[
  {id:'pa',emoji:'🎓',label:'PA &\nRicerca',color:'#f48fb1',affinities:['corporate','piva'],desc:'Impatto pubblico, burocrazia, accademia'},
  {id:'pmi',emoji:'🏭',label:'PMI\nSettore',color:'#ffb74d',affinities:['startup','corporate'],desc:'Piccola impresa, dati reali, zero struttura'},
  {id:'startup',emoji:'🚀',label:'Startup\nTech',color:'#ce93d8',affinities:['pmi','piva'],desc:'Velocità, autonomia, instabilità'},
  {id:'consulenza',emoji:'🏢',label:'Big\nConsulenza',color:'#4fc3f7',affinities:['startup','corporate'],desc:'Brand, struttura, criteri opachi'},
  {id:'corporate',emoji:'🏗️',label:'Large\nCorporate',color:'#81c784',affinities:['pmi','consulenza'],desc:'Risorse, politica, rete informale'},
  {id:'piva',emoji:'💡',label:'P.IVA &\nFounder',color:'#6af7c8',affinities:['startup','corporate'],desc:'Autonomia totale, costruisci il tuo'},
];
const MAP_EDGES=[];
MAP_NODES.forEach(n=>{
  n.affinities.forEach(b=>{
    const exists=MAP_EDGES.some(e=>(e[0]===n.id&&e[1]===b)||(e[0]===b&&e[1]===n.id));
    if(!exists)MAP_EDGES.push([n.id,b]);
  });
});
const MAP_POS=(()=>{
  const cx=300,cy=265,r=185;
  const ids=['pmi','consulenza','corporate','pa','piva','startup'];
  const pos={};
  ids.forEach((id,i)=>{const angle=(Math.PI*2/6)*i-Math.PI/2;pos[id]={x:Math.round(cx+r*Math.cos(angle)),y:Math.round(cy+r*Math.sin(angle))};});
  return pos;
})();

export function renderMap(){
  const M=UI_TEXTS.map; // alias locale
  const done=ST.worldHistory;
  const VW=600,VH=530,NW=84,NH=84;
  const edgeSVG=MAP_EDGES.map(([a,b])=>{
    const pa=MAP_POS[a],pb=MAP_POS[b];
    const doneA=done.includes(a),doneB=done.includes(b);
    const stroke=(doneA||doneB)?'#3a4a6a':'#232340';
    const sw=(doneA&&doneB)?2:1.5;
    return `<line x1="${pa.x}" y1="${pa.y}" x2="${pb.x}" y2="${pb.y}" stroke="${stroke}" stroke-width="${sw}" stroke-dasharray="${doneA&&doneB?'none':'6,4'}" opacity=".7"/>`;
  }).join('');
  const nodesSVG=MAP_NODES.map(n=>{
    const pos=MAP_POS[n.id];
    const isDone=done.includes(n.id);
    const bg=isDone?n.color+'33':n.color+'18';
    const opacity=isDone?'.75':'1';
    // Legge status da UI_TEXTS
    const statusTxt=isDone?M.node_status_done:M.node_status_todo;
    const statusCol=isDone?'#6af7c8':n.color;
    const badge=isDone?`<div class="mn-done-badge">✓</div>`:'';
    const foW=110,foH=130;
    return `
    <foreignObject x="${pos.x-foW/2}" y="${pos.y-NH/2-8}" width="${foW}" height="${foH}" class="mn-fo">
      <div xmlns="http://www.w3.org/1999/xhtml" class="mn-card" data-world="${n.id}" style="opacity:${opacity};width:${NW}px;margin:0 auto;">
        <div class="mn-box" style="background:${bg};border-color:${n.color};width:${NW}px;height:${NH}px;">
          ${badge}
          <div class="mn-emoji">${n.emoji}</div>
          <div class="mn-lbl" style="color:${n.color}">${n.label}</div>
        </div>
        <div class="mn-status" style="color:${statusCol}">${statusTxt}</div>
        <div class="mn-affinities">${n.desc}</div>
      </div>
    </foreignObject>`;
  }).join('');
  const canConclude=done.length>=2;
  // Legge btn e unlock_hint da UI_TEXTS
  const concludeBtn=canConclude
    ?`<button class="btn-next" id="btnConclude" style="background:rgba(106,247,200,.12);border:1px solid rgba(106,247,200,.3);color:#6af7c8;font-size:.58rem;align-self:center">${M.btn_conclude}</button>`
    :`<div style="font-family:'Space Mono',monospace;font-size:.55rem;color:var(--muted);text-align:center">${M.unlock_hint}</div>`;
  document.getElementById('mapWrap').innerHTML=`
    <div class="map-title">${M.title}</div>
    <div class="map-subtitle">${M.subtitle}</div>
    <div class="map-free-note">${M.free_note}</div>
    ${concludeBtn}
    <div class="map-svg-wrap">
      <svg viewBox="0 0 ${VW} ${VH}" xmlns="http://www.w3.org/2000/svg">
        <defs><filter id="glow"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
        ${edgeSVG}${nodesSVG}
      </svg>
    </div>
    <div style="text-align:center;margin-top:1.4rem;display:flex;gap:.6rem;justify-content:center;flex-wrap:wrap">
      <button id="btnResetAll" style="font-family:'Space Mono',monospace;font-size:.55rem;padding:.5rem 1rem;background:transparent;border:1px solid var(--border);color:var(--muted);cursor:pointer;border-radius:6px;letter-spacing:.05em">🔄 Ricomincia da zero</button>
      ${isAuthenticated()?`<button id="btnLogout" style="font-family:'Space Mono',monospace;font-size:.55rem;padding:.5rem 1rem;background:transparent;border:1px solid var(--border);color:var(--muted);cursor:pointer;border-radius:6px;letter-spacing:.05em">🚪 Esci</button>`:''}
    </div>`;
  document.getElementById('btnResetAll')?.addEventListener('click',confirmReset);
  document.getElementById('btnLogout')?.addEventListener('click',doLogout);

  if(canConclude){document.getElementById('btnConclude')?.addEventListener('click',()=>{show('outcome');renderOutcome();});}
  document.querySelectorAll('.mn-card').forEach(el=>{
    el.addEventListener('click',()=>enterWorld(el.dataset.world));
  });
}

// ══════════════════════════════════════
// BOOT
// ══════════════════════════════════════
function buildStars(){
  const c=document.getElementById('stars');
  for(let i=0;i<70;i++){
    const s=document.createElement('div');s.className='sd';
    const sz=Math.random()*2.5+.5;
    s.style.cssText=`width:${sz}px;height:${sz}px;left:${Math.random()*100}%;top:${Math.random()*100}%;--d:${2+Math.random()*4}s;--dl:${Math.random()*4}s`;
    c.appendChild(s);
  }
}

// ══════════════════════════════════════
// Calibrazione iniziale per chi accede senza fare il quiz completo — non
// più un placeholder "Esploratrice": riusa la sola Fase 3 (Orientamento +
// slider) del quiz guest, saltando le Fasi 1-2 (hard/soft skills, che non
// avrebbero risposta per un account che non ha ancora giocato). computeChar()
// degrada bene con hard/soft vuoti: l'orientamento pesa 20pt contro i pochi
// punti degli slider, quindi determina comunque la classe assegnata.
export function startFreshAuthenticated(){
  ST.ans={hard:{},soft:{},pref:{}};
  ST.step=2;
  document.body.classList.add('calibration-mode');
  show('assess');renderAssess();
}

// BOOT (chiamato da src/main.js su DOMContentLoaded)
// ══════════════════════════════════════
export async function boot(){
  applyUITexts();           // ← popola tutti i testi statici da UI_TEXTS
  buildStars();
  document.getElementById('btnStart').onclick=()=>show('entry');

  const user=await getInitialUser();
  if(user){
    const saved=await loadProgress();
    // Una riga salvata con char:null (mai iniziata, o azzerata da un reset —
    // vedi performFullReset()) non è una partita da riprendere: senza
    // personaggio la HUD va in errore appena si entra in un mondo.
    if(saved&&saved.char){
      ST.gs=saved.gs;
      ST.worldHistory=saved.worldHistory;
      // ??0/??null: righe salvate prima dell'introduzione di officialLevel/RAL
      // (vedi §9) non hanno questi campi — non farle esplodere in HUD.
      ST.world={officialLevel:0,officialRAL:null,pivaState:null,...saved.world};
      ST.worldsProgress=saved.worldsProgress||{};
      ST.char=saved.char;
      ST.recalibrated=saved.recalibrated??saved.graduated??false;
      show('map');renderMap();
      return;
    }
    // Autenticata ma senza progressi salvati (o con un char non ancora
    // creato): niente quiz, si parte subito.
    startFreshAuthenticated();
    return;
  }
  show('title');
}

