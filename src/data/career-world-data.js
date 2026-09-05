// ══════════════════════════════════════════════════════════════
// CAREER WORLD DATA — v14 (Career World Editor)
// ══════════════════════════════════════════════════════════════

export const UI_TEXTS = {
  meta:{
    page_title:'Career World · alpha 1.0.35',
    version:'ALPHA 1.0.35'
  },
  title:{
    game_title:'CAREER\nWORLD',
    tagline:'// navigare il mercato tech con consapevolezza',
    description:'Un gioco pensato per studentesse in ambito tech — data, AI, ingegneria — che vogliono esplorare da vicino il mercato del lavoro: i suoi contesti reali, i bias sistemici, le scelte di carriera.<br><strong>Nessun game over. Solo conoscenza.</strong>',
    btn_start:'[ INIZIA ]'
  },
  assess:{
    sidebar_title:'Il tuo percorso',
    step_labels:[
      {
        label:'Hard Skills',
        sub:'Cosa hai fatto'
      },
      {
        label:'Soft Skills',
        sub:'Come lavori'
      },
      {
        label:'Preferenze',
        sub:'Dove stai bene'
      }
    ],
    sidebar_note:'Le domande misurano <em>azioni reali</em> - riduce il bias di auto-valutazione sistematico del 20–35%.',
    btn_next:'Avanti →',
    btn_generate:'Genera la mia Card →'
  },
  card:{
    eyebrow:'// CLASSE ASSEGNATA',
    headline:'La tua <em>mappa di partenza</em>',
    explanation:'Questa card fotografa dove sei adesso. Le stat cambieranno navigando i mondi.',
    bias_note:'<strong>📌 Prima di entrare:</strong><br>Chi subisce bias di auto-svalutazione tende a sotto-stimare le proprie competenze del 20–35%. Le tue stat potrebbero essere più alte di quanto percepisci. <em>RADAR</em> — leggere il sistema — parte bassa per tutte: cresce solo con l\'esperienza.',
    btn_enter:'Entra nel Mondo 1 →',
    swipe_hint:'→ scorri per continuare',
    player_name:'PLAYER ONE',
    level_suffix:'· Livello 1'
  },
  game:{
    msg_default:'Muoviti con ← → ↑ ↓ · Premi SPAZIO o Z vicino a un NPC per interagire',
    msg_default_mobile:'↕↔ muoviti · ✦ interagisci con NPC vicini',
    hint_mobile:'Usa <kbd>✦</kbd> vicino a un NPC per interagire',
    hint_desktop:'Premi <kbd>SPAZIO</kbd> o <kbd>Z</kbd> vicino a un NPC per interagire',
    hint_suffix:'· Trova tutti gli NPC per sbloccare le uscite',
    msg_door_unlocked:'🔓 Porta sbloccata! Avvicinati e premi SPAZIO/Z per uscire. Le altre interazioni sono opzionali.',
    msg_door_hint_after_debrief:'🔓 Porta sbloccata! Avvicinati e premi SPAZIO/Z per uscire. Le interazioni opzionali rimangono disponibili.',
    msg_level_up:'🎉 Hai esplorato tutto! Sono comparse nuove situazioni, più complesse.'
  },
  touch:{
    btn_left:'◀',
    btn_right:'▶',
    btn_up:'▲',
    btn_down:'▼',
    btn_act:'✦'
  },
  world_intro:{
    col_pro_label:'✓ Pro',
    col_con_label:'✗ Contro',
    hint_prefix:'🎮 ',
    btn_enter:'Entra nel mondo →'
  },
  map:{
    title:'🗺️ CAREER WORLD MAP',
    subtitle:'Sei mondi, tutti accessibili. Ogni lato connette contesti affini.',
    free_note:'Inizia da dove vuoi — le linee mostrano affinità di pattern, non sequenze obbligatorie.',
    node_status_todo:'Clicca per entrare',
    node_status_done:'✓ Completato',
    btn_conclude:'🏁 Concludi il percorso — vedi il report completo',
    unlock_hint:'Completa almeno 2 mondi per sbloccare il report di carriera completo'
  },
  debrief:{
    section_patterns:'📋 PATTERN RICONOSCIUTI',
    section_insight:'🧠 COSA HAI IMPARATO',
    section_takeaway:'💡 TAKEAWAY PRATICO',
    section_stats:'⚡ STAT GUADAGNATE',
    depth_complete:'🔓 Lettura completa',
    depth_medium:'🔆 Lettura approfondita',
    depth_base:'💡 Lettura base',
    no_patterns:'Hai completato il minimo. Torna a esplorare gli NPC opzionali per scoprire altri pattern.',
    locked_levels_hint:'livello/i di insight ancora da sbloccare — torna in questo mondo con più interazioni.',
    all_levels_unlocked:'✓ Tutti gli insight sbloccati per questo mondo.',
    world_completed_suffix:'— COMPLETATO',
    btn_map:'🗺️ Torna alla mappa',
    btn_retry:'↩ Prova un percorso diverso'
  },
  npc_debrief:{
    section_pattern:'📋 PATTERN RICONOSCIUTO',
    section_outcome:'⚡ ESITO',
    btn_continue:'Continua →',
    radar_gain_label:'RADAR +1',
    burnout_text:'La tua energia è a zero. Non è un game over: è il segnale che il ritmo tenuto finora non è sostenibile. Nella vita reale il burnout è riconosciuto dall\'OMS come fenomeno occupazionale (ICD-11, 2019) — non un limite personale, ma l\'esito di uno squilibrio prolungato tra richieste e risorse. Cerca un\'alleata 🤝 o una sfida tecnica 💻 per recuperare energia.',
    burnout_text_short:'⚠️ Energia ancora a zero — cerca un\'alleata o una sfida tecnica per recuperare.'
  },
  outcome:{
    emoji:'🗺️',
    title:'REPORT DI CARRIERA',
    section_worlds:'// MONDI VISITATI',
    no_worlds:'Nessun mondo completato.',
    section_stats:'// STAT ACCUMULATE',
    section_patterns:'// PATTERN RICONOSCIUTI',
    no_patterns:'Esplora più NPC in ogni mondo per riconoscere i pattern.',
    radar:{
      exceptional:'RADAR eccezionale: hai sviluppato una lettura sistemica del mercato.',
      high:'RADAR molto alto: riesci a leggere le dinamiche di potere con chiarezza.',
      growing:'RADAR in crescita: stai costruendo la tua mappa del sistema.',
      base:'RADAR base: esplora più mondi e più NPC per approfondire la lettura.'
    },
    global_suffix:'<em>Una cosa da portare fuori dal gioco:</em> il mercato non è neutro.\nHa strutture, bias e pattern ricorrenti. Conoscerli non significa accettarli —\nsignifica scegliere consapevolmente quando adattarsi, quando resistere, e quando cambiare ambiente.',
    takeaways:{
      has_piva:'Hai esplorato sia ambienti strutturati che il lavoro autonomo. La tua lettura del mercato è tra le più complete — sai cosa offre ogni contesto e a quale prezzo.',
      has_corporate:'Hai attraversato la progressione da piccolo a grande. Sai come cambiano le dinamiche di potere con la scala dell\'organizzazione.',
      has_startup:'Hai visto come le startup e le PMI condividono l\'informalità ma differiscono nel ritmo e nell\'ambizione. La tua prossima frontiera è esplorare i contesti più strutturati.',
      default:'Hai iniziato il percorso. Ogni mondo che esplorerai aggiungerà strati alla tua lettura del mercato.'
    },
    btn_other_path:'↩ Prova l\'altro percorso',
    btn_restart:'↺ Ricomincia da capo'
  },
  progress:{
    status_open:'🔓 APERTA',
    status_locked_prefix:'🔒'
  },
  stat_info:{
    title:'Cosa significano le statistiche',
    intro:'Ogni statistica racconta due cose insieme: cosa fa nel gioco, e cosa rappresenta davvero nel mercato del lavoro.',
    btn_close:'Chiudi',
    stats:{
      SKILL:{game:'Competenze tecniche dimostrate dalle tue scelte (Python, SQL, ML, cloud...).',life:'Le competenze che sai davvero mettere in pratica con esempi concreti — non solo "conoscere" uno strumento.'},
      VOICE:{game:'Capacità di esprimerti e tenere la posizione nei dialoghi.',life:'Quanto ti senti autorizzata a parlare in una riunione, dire no, negoziare — spesso frenata da bias esterni più che da mancanza di competenza.'},
      CLARITY:{game:'Chiarezza su te stessa e sul contesto in cui ti muovi.',life:'Capacità di leggere una situazione ambigua (un feedback vago, un conflitto) senza confonderla con l\'auto-svalutazione.'},
      NETWORK:{game:'Rete professionale e alleanze. Parte sempre al minimo: si costruisce solo scegliendo risposte che creano una relazione.',life:'Le persone che ti aiutano a scoprire opportunità e a non essere sola nelle difficoltà — va costruita attivamente, non capita per caso.'},
      ENERGY:{game:'Risorsa che si consuma a ogni interazione, cala il doppio quando ascolti la voce interiore critica, risale parlando con le alleate o affrontando una sfida tecnica. Parte sempre dal massimo.',life:'La sostenibilità del tuo percorso: ignorarla porta al burnout, prendersene cura è una competenza — non una debolezza.'},
      RADAR:{game:'Lettura delle dinamiche di sistema e dei pattern di bias. Sale un po\' a ogni interazione, parte bassa per tutte.',life:'Riconoscere quando una difficoltà non è colpa tua ma un pattern strutturale che si ripete a molte altre persone.'},
      INSIDER:{game:'Conoscenza delle procedure e della politica interna del posto in cui sei.',life:'Il "sapere non scritto" che si accumula solo restando in un contesto, e che in parte si perde cambiando azienda.'}
    }
  }
};

export const STEPS=[
  {
    id:'hard',
    tag:'FASE 1 · HARD SKILLS',
    title:'Cosa hai fatto con la tecnologia?',
    sub:'Non "quanto sai" — cosa hai effettivamente realizzato. Anche una volta sola conta.',
    note:'Le domande comportamentali riducono il bias di auto-rating sistematico.',
    qs:[
      {
        id:'python',
        t:'Hai scritto uno script Python/R per risolvere un problema reale, anche piccolo?',
        opts:['Sì, più volte','Una volta / in corso','Solo tutorial','Non è il mio focus']
      },
      {
        id:'sql',
        t:'Hai interrogato un database con SQL per estrarre o analizzare dati?',
        opts:['Sì, regolarmente','Qualche volta','Solo tutorial','No']
      },
      {
        id:'viz',
        t:'Hai costruito una dashboard o visualizzazione che qualcuno ha usato davvero?',
        opts:['Sì','In corso','Solo esercizi','No']
      },
      {
        id:'ml',
        t:'Hai addestrato un modello ML, anche su un dataset pubblico?',
        opts:['Sì, in produzione','Sì, progetto personale','Solo corso/tutorial','No']
      },
      {
        id:'llm',
        t:'Hai integrato un LLM o API AI in qualcosa di concreto?',
        opts:[
          'Sì, in un progetto reale',
          'Esperimenti/prototipo',
          'Solo prompt su interfaccia',
          'No'
        ]
      },
      {
        id:'cloud',
        t:'Hai deployato qualcosa su cloud (anche free tier)?',
        opts:['Sì','Esperimenti','No ma so i concetti','No']
      },
      {
        id:'sdev',
        t:'Hai lavorato su codebase condivisa con git, code review, CI/CD?',
        opts:['Sì, in team','Progetti personali','Solo concetti','No']
      }
    ]
  },
  {
    id:'soft',
    tag:'FASE 2 · SOFT SKILLS',
    title:'Come ti sei comportata in situazioni reali?',
    sub:'Pensa a esperienze concrete: lavoro, università, progetti, associazioni.',
    note:'Non esiste risposta giusta. Questi dati costruiscono la tua mappa.',
    qs:[
      {
        id:'comm',
        t:'Hai presentato un lavoro tecnico a persone non tecniche?',
        opts:['Sì, più volte','Una volta','Sì, con difficoltà','Non ancora']
      },
      {
        id:'conflict',
        t:'Quando non eri d\'accordo con una decisione di un superiore, hai...',
        opts:[
          'Espresso il mio punto con dati',
          'Fatto domande per capire',
          'Taciuto ma ci ho rimuginato',
          'Accettato senza problemi'
        ]
      },
      {
        id:'auto',
        t:'Hai gestito un progetto importante in autonomia, senza supervisione?',
        opts:[
          'Sì, con successo',
          'Sì, con difficoltà ma ce l\'ho fatta',
          'Preferisco avere guida',
          'Non ancora capitato'
        ]
      },
      {
        id:'chaos',
        t:'Quando cambiano priorità improvvisamente, come reagisci?',
        opts:[
          'Mi adatto bene',
          'Ci metto un po\' ma riesco',
          'Preferisco stabilità',
          'Mi stresso molto'
        ]
      },
      {
        id:'feedback',
        t:'Hai ricevuto feedback critico su un tuo lavoro? Come l\'hai gestito?',
        opts:[
          'L\'ho usato per migliorare',
          'Mi ha fatto male ma l\'ho integrato',
          'L\'ho preso molto sul personale',
          'Non ricordo situazioni'
        ]
      },
      {
        id:'network',
        t:'Hai mai aiutato attivamente un\'altra persona (collega, studentessa) a crescere o a farsi vedere?',
        opts:[
          'Sì, più volte e consapevolmente',
          'Qualche volta',
          'Raramente, non ci ho pensato',
          'No'
        ]
      }
    ]
  },
  {
    id:'pref',
    tag:'FASE 3 · ORIENTAMENTO',
    title:'Come ti vedi nel lavoro tech?',
    sub:'Prima la domanda più importante: non dipende da cosa sai fare ora, ma da dove vuoi andare.',
    note:'L\'orientamento è il segnale principale per la tua classe — indipendente dall\'esperienza attuale.',
    qs:[
      {
        id:'orient',
        t:'Quale di queste frasi ti descrive meglio — indipendentemente da cosa sai fare ora?',
        opts:[
          '📊 Voglio trasformare dati in decisioni di business comprensibili a tutti',
          '🔬 Voglio costruire modelli predittivi che anticipano il futuro',
          '⚙️ Voglio portare sistemi AI in produzione e farli scalare',
          '🤖 Voglio costruire con LLM, agenti e i tool AI più recenti',
          '🛠️ Voglio costruire pipeline e infrastrutture dati affidabili'
        ]
      }
    ],
    sls:[
      {
        id:'stab',
        label:'Stabilità vs Rischio',
        lo:'Stabilità e prevedibilità',
        hi:'Rischio, velocità, incertezza'
      },
      {
        id:'tech',
        label:'Deep Tech vs Strategico',
        lo:'Focus tecnico profondo',
        hi:'Strategia, prodotto, business'
      },
      {
        id:'solo',
        label:'Solista vs Team',
        lo:'Focus profondo da sola',
        hi:'Energia di gruppo'
      },
      {
        id:'speed',
        label:'Lungo periodo vs Impatto immediato',
        lo:'Costruire qualcosa che dura',
        hi:'Vedere l\'impatto subito'
      }
    ]
  }
];

export const ORIENT_OPTS=[
  '📊 Voglio trasformare dati in decisioni di business comprensibili a tutti',
  '🔬 Voglio costruire modelli predittivi che anticipano il futuro',
  '⚙️ Voglio portare sistemi AI in produzione e farli scalare',
  '🤖 Voglio costruire con LLM, agenti e i tool AI più recenti',
  '🛠️ Voglio costruire pipeline e infrastrutture dati affidabili',
];

export const SMAP={
  'Sì, più volte':5,
  'Sì, regolarmente':5,
  'Sì, in produzione':5,
  'Sì, in un progetto reale':5,
  'Sì, in team':5,
  'Sì, con successo':5,
  'Sì, più volte e consapevolmente':5,
  'Una volta / in corso':3,
  'Qualche volta':3,
  'Sì, progetto personale':3,
  'Esperimenti/prototipo':3,
  'Sì':5,
  'Sì, con difficoltà ma ce l\'ho fatta':4,
  'Una volta':3,
  'Sì, con difficoltà':3,
  'Ci metto un po\' ma riesco':3,
  'Esperimenti':3,
  'In corso':3,
  'Solo tutorial':1,
  'Solo corso/tutorial':1,
  'Solo esercizi':1,
  'Solo concetti':1,
  'Solo prompt su interfaccia':1,
  'No ma so i concetti':1,
  'Espresso il mio punto con dati':5,
  'Fatto domande per capire':4,
  'Taciuto ma ci ho rimuginato':2,
  'Accettato senza problemi':3,
  'Mi adatto bene':5,
  'Preferisco stabilità':2,
  'Mi stresso molto':1,
  'L\'ho usato per migliorare':5,
  'Mi ha fatto male ma l\'ho integrato':3,
  'L\'ho preso molto sul personale':1,
  'Non ancora':2,
  'Non è il mio focus':0,
  'Non ancora capitato':0,
  'Preferisco avere guida':2,
  'Non ricordo situazioni':0,
  'Raramente, non ci ho pensato':2,
  'No':0,
  'Progetti personali':3,
}

export const CLASSES={
  analyst:{id:'analyst',name:'Data Analyst',av:'📊',color:'#4fc3f7',bg:'rgba(79,195,247,.1)',
    desc:'Trasformi numeri in decisioni. Il tuo superpotere è la chiarezza comunicativa — dove gli altri vedono dati, tu vedi storie che il business può usare.',
    traits:['SQL Master','Storyteller','BI Wizard','Business-minded'],best:['Big Consulenza','Large Corporate'],hard:['Startup early-stage']},
  scientist:{id:'scientist',name:'Data Scientist',av:'🔬',color:'#81c784',bg:'rgba(129,199,132,.1)',
    desc:'Costruisci modelli che anticipano il futuro. Hai mente ibrida: metà matematica, metà ingegneria.',
    traits:['ML Practitioner','Statista','Model Builder','Curiosa'],best:['Big Consulenza','Large Corporate'],hard:['PMI piccole']},
  ml:{id:'ml',name:'ML Engineer',av:'⚙️',color:'#ffb74d',bg:'rgba(255,183,77,.1)',
    desc:'Porti i modelli in produzione. Sei l\'ingegnera delle pipeline: il tuo codice deve reggere quando il traffico esplode.',
    traits:['MLOps','Pipeline Builder','Scale Expert','DevOps-minded'],best:['Startup growth','Large Corporate'],hard:['PMI Settore']},
  ai:{id:'ai',name:'AI Engineer',av:'🤖',color:'#ce93d8',bg:'rgba(206,147,216,.1)',
    desc:'Costruisci con LLM, RAG e agenti AI. Sei al confine tra ricerca e prodotto — il profilo più richiesto del momento.',
    traits:['LLM Builder','RAG Expert','Agent Designer','System Thinker'],best:['Startup Tech','Scale-up'],hard:['PMI Settore','PA']},
  dataeng:{id:'dataeng',name:'Data Engineer',av:'🛠️',color:'#4db6ac',bg:'rgba(77,182,172,.1)',
    desc:'Costruisci le fondamenta su cui tutti gli altri lavorano. Pipeline dati affidabili, scalabili, ben documentate — senza di te, analisti e data scientist non hanno nulla da analizzare.',
    traits:['Pipeline Architect','ETL/ELT','Data Quality','Infrastructure-minded'],best:['Large Corporate','Big Consulenza'],hard:['Startup early-stage']},
  explorer:{id:'explorer',name:'Esploratrice',av:'🧭',color:'#9e9e9e',bg:'rgba(158,158,158,.1)',
    desc:'Non hai ancora una classe definita — la costruisci mondo dopo mondo, scelta dopo scelta, direttamente sul campo.',
    traits:['In esplorazione'],best:[],hard:[]},
};

// ══════════════════════════════════════════════════════════════
// CAREER LEVELS — titoli di carriera per mondo, uno per livello.
// Un valore stringa = titolo unico per quel livello. Un oggetto
// {track: titolo} = livello con bivio di carriera (vedi NPC con
// `track` in *_TIER_ADDITIONS e `outs[].track`); il titolo mostrato
// dipende dal percorso scelto dal giocatore (ST.world.track).
// Letto da getCurrentBadge() in src/game/game.js.
// ══════════════════════════════════════════════════════════════
export const WORLD_CAREER_LEVELS={
  pmi:['Junior Specialist','PMI Specialist','Senior Specialist'],
  startup:['Junior Engineer','Startup Engineer','Tech Lead'],
  consulenza:['Junior Consultant','Consultant',{expert:'Expert Consultant',manager:'Engagement Manager'}],
  corporate:['Junior Analyst','Corporate Analyst',{expert:'Senior Specialist',manager:'Engineering Manager'}],
  piva:['Junior Freelance','Freelance Consultant','Founder'],
  pa:['Junior Researcher','Researcher','Senior Researcher'],
};

// ══════════════════════════════════════════════════════════════
// RAL — stima indicativa su dati medi di mercato IT italiano (settembre
// 2026, vedi metodo/fonti in fondo al file), per ruolo × livello di
// seniority raggiunto × area/contesto. Non è un dato reale/verificato,
// solo una stima pedagogica per dare concretezza alla progressione di
// carriera. Letta da computeRAL() in src/game/game.js — il livello
// numerico per-mondo (1/2/3, vedi WORLD_CAREER_LEVELS) è mappato a
// junior/mid/senior tramite RAL_LEVEL_BY_TIER lì.
// ══════════════════════════════════════════════════════════════
export const RAL_BASE={
  analyst:{junior:[26000,32000],mid:[32000,40000],senior:[40000,50000],lead:[50000,65000]},
  scientist:{junior:[28000,36000],mid:[38000,50000],senior:[50000,68000],lead:[70000,95000]},
  ml:{junior:[30000,38000],mid:[42000,55000],senior:[58000,78000],lead:[80000,105000]},
  ai:{junior:[30000,38000],mid:[42000,58000],senior:[60000,80000],lead:[85000,110000]},
  // 'dataeng' non è nella survey originale (vedi fonti in fondo al file):
  // range stimato per estrapolazione, in linea con ml (pipeline/infra dati
  // vs modelli, seniority paragonabile sul mercato italiano).
  dataeng:{junior:[29000,37000],mid:[40000,53000],senior:[55000,74000],lead:[76000,100000]},
};
// Moltiplicatori per area/contesto — applicati a RAL_BASE. Stima informata
// per triangolazione (nessuna survey unica copre ruolo × livello ×
// tipo-azienda per data/AI in Italia): ordine di grandezza narrativo per il
// gioco, non un dato certificato. piva non ha un min/max RAL (non è
// stipendio ma tariffa/giorno) — vedi PIVA_DAYRATE più sotto.
export const AREA_MULTIPLIER={
  pmi:        { min: 0.80, max: 0.90, note: 'Sotto mercato; ruolo spesso ibrido/poco definito, meno leva negoziale su RAL pura' },
  startup:    { min: 0.85, max: 1.10, note: 'Alta varianza: early-stage spesso sotto mercato + equity; growth-stage può pagare sopra mercato per profili scarsi (ML/AI)' },
  consulenza: { min: 0.90, max: 1.00, note: 'RAL contenuta a junior/mid ma progressione rapida (promozioni ogni 1.5-2 anni); bonus discrezionali a partire da senior' },
  corporate:  { min: 1.05, max: 1.20, note: 'RAL più alte e strutturate, benefit più ricchi, doppia carriera tecnica/manageriale a livello senior' },
  pa:         { min: 0.55, max: 0.75, note: 'Sensibilmente sotto il privato; tabellare CCNL Istruzione e Ricerca — ricercatore/tecnologo parte ~24-28k, sale a ~35-45k con anzianità/livelli avanzati' },
  piva:       { model: 'tariffa giornaliera', note: 'Non RAL ma tariffa/giorno — vedi PIVA_DAYRATE' },
};
// Mappa il livello numerico per-mondo (1/2/3, vedi WORLD_CAREER_LEVELS e
// showJobChangePicker() in game.js) al tier usato da RAL_BASE. Non esiste
// un livello 4 raggiungibile via colloquio oggi, quindi 'lead' resta fuori
// da questa mappa: è comunque usato da tierFromReadiness() per l'indicatore
// di readiness (vedi sotto), che è puramente informativo.
export const RAL_LEVEL_BY_TIER={1:'junior',2:'mid',3:'senior'};
// Range RAL stimato per ruolo+livello+area (null se l'area non ha un
// min/max RAL diretto, es. piva — vedi PIVA_DAYRATE).
export function computeOfferRange(role,level,area){
  const base=RAL_BASE[role]?.[level];
  const mult=AREA_MULTIPLIER[area];
  if(!base||!mult||mult.model)return null;
  return [Math.round(base[0]*mult.min),Math.round(base[1]*mult.max)];
}
export const RAL_LABEL_BY_WORLD={piva:'Fatturato annuo stimato'}; // default: 'RAL stimata'

// ── Indicatore di readiness professionale (solo informativo — non blocca
// né sostituisce il colloquio, vedi showJobChangePicker() in game.js) ──
// Mix pesato di competenza tecnica (SKILL) e capacità professionale/
// relazionale (VOICE, CLARITY), sulla stessa scala 0-50 di STAT_MAX.
export const READINESS_THRESHOLDS={mid:18,senior:30,lead:40};
export function computeReadiness(gs){
  return 0.5*(gs.SKILL||0)+0.25*(gs.VOICE||0)+0.25*(gs.CLARITY||0);
}
export function tierFromReadiness(r){
  if(r>=READINESS_THRESHOLDS.lead)return 'lead';
  if(r>=READINESS_THRESHOLDS.senior)return 'senior';
  if(r>=READINESS_THRESHOLDS.mid)return 'mid';
  return 'junior';
}

// ── P.IVA / freelance — il fatturato si costruisce, non si riceve ──────
// A differenza degli altri mondi (dove la RAL è "assegnata" da un
// colloquio), in P.IVA non esiste un datore di lavoro che assegna uno
// stipendio: il fatturato cresce contratto dopo contratto, in base a come
// la giocatrice gestisce ogni cliente (vedi revenueEffect sui nodi
// piva_contratto/piva_tech2/piva_level2_pricing/piva_level2_scope, e
// handleChoice() in game.js che li applica).
// Tariffa/giorno di riferimento per livello — non più usata per calcolare
// il valore dei contratti (vedi PIVA_FEE_STEPS sotto), resta solo come dato
// per pivaAnnualEquivalent() (range di confronto informativo).
export const PIVA_DAYRATE={junior:[150,250],mid:[250,400],senior:[400,700],lead:[700,1000]};
export const PIVA_BILLABLE_DAYS=200; // stima gg fatturabili/anno, solo come riferimento
export function createPivaState(){
  return {fatturato:0,reputationMultiplier:1,contracts:[],concentrationRisk:0};
}
// Tariffa/giorno che il mercato riconosce a una freelance: cresce col
// track record (quanti contratti ha già chiuso in questo mondo), non con
// il livello di carriera raggiunto altrove — 1° contratto 250€/gg, poi
// 500, poi 750, dal 4° in poi resta a 1000€/gg (tetto).
export const PIVA_FEE_STEPS=[250,500,750,1000];
export function feeForContract(contractIndex){
  return PIVA_FEE_STEPS[Math.min(Math.max(contractIndex,0),PIVA_FEE_STEPS.length-1)];
}
// Valore di un contratto = tariffa del contratto (in base a quanti ne ha
// già chiusi, vedi feeForContract) × giorni impegnati × qualità della
// scelta × reputazione accumulata nel mondo fino a quel momento
// (compounding) — il fatturato riparte comunque da zero ad ogni ingresso.
export function contractValue(contractIndex,days,quality,reputationMultiplier){
  const dayRate=feeForContract(contractIndex);
  return Math.round(dayRate*days*(quality!=null?quality:1)*(reputationMultiplier||1));
}
// Applica un revenueEffect (da un nodo di dialogo P.IVA) allo stato:
// {type:'contract', days, quality} aggiunge un contratto al fatturato;
// {type:'reputation', delta} alza (o abbassa, delta negativo) il
// moltiplicatore per i contratti successivi.
export function applyRevenueEffect(pivaState,revenueEffect){
  if(!revenueEffect)return null;
  if(revenueEffect.type==='reputation'){
    pivaState.reputationMultiplier=Math.max(0.5,(pivaState.reputationMultiplier||1)*(1+revenueEffect.delta));
    return {kind:'reputation',multiplier:pivaState.reputationMultiplier,delta:revenueEffect.delta};
  }
  const value=contractValue(pivaState.contracts.length,revenueEffect.days,revenueEffect.quality,pivaState.reputationMultiplier);
  pivaState.fatturato+=value;
  pivaState.contracts.push({value,days:revenueEffect.days,quality:revenueEffect.quality});
  if(revenueEffect.concentration){
    pivaState.concentrationRisk=Math.max(pivaState.concentrationRisk,revenueEffect.concentration);
  }
  return {kind:'contract',value,days:revenueEffect.days,dayRate:Math.round(value/revenueEffect.days),fatturatoTotale:pivaState.fatturato};
}
// Range "di riferimento" (non vincolante) per confrontare il fatturato
// costruito con quanto guadagna tipicamente un freelance di quel livello —
// solo per mostrare in UI "sei sopra/sotto la media del tuo livello".
export function pivaAnnualEquivalent(level){
  const rate=PIVA_DAYRATE[level]||PIVA_DAYRATE.mid;
  return [rate[0]*PIVA_BILLABLE_DAYS,rate[1]*PIVA_BILLABLE_DAYS];
}
// Converte il fatturato REALMENTE costruito in gioco in una RAL-equivalente
// di riferimento (solo informativa nel debrief di fine mondo, vedi
// showWorldDebrief() in game.js — NON sovrascrive mai ST.world.officialRAL
// altrove: un fatturato variabile non è un'offerta di un datore di lavoro).
// Sconto per contributi a carico, assenza ferie/TFR, e prudenza del
// recruiter su reddito variabile; il rischio di concentrazione (dipendere
// da un solo cliente) peggiora ulteriormente lo sconto.
export const PIVA_TO_RAL_DISCOUNT=0.65;
export function finalizePivaEquivalent(pivaState){
  const concentrationPenalty=1-(pivaState.concentrationRisk||0)*0.15;
  return Math.round(pivaState.fatturato*PIVA_TO_RAL_DISCOUNT*concentrationPenalty);
}

// Dimensione indicativa del contesto (0-5), usata per calcolare il bonus di
// NETWORK quando si cambia lavoro (vedi grantOfficialLevel() in game.js): più
// l'azienda/contesto che lasci è grande, più contatti ti porti dietro.
// piva:0 perché è freelance, non ha senso "quanto è grande" — e comunque
// il cambio lavoro non è disponibile in quel mondo (vedi showJobChangePicker()).
export const WORLD_COMPANY_SIZE={pmi:1,startup:2,consulenza:4,corporate:5,piva:0,pa:4};

// ══════════════════════════════════════════════════════════════
// COLLOQUIO — minigioco di 4 domande a risposta multipla, con
// punteggio per risposta. Il pool è per livello di seniority target
// (riusato in tutti i mondi: il contesto è nell'intro del colloquio,
// non nelle domande). Superarlo garantisce il livello/mondo scelto
// senza dover esplorare gli NPC uno a uno — vedi grantOfficialLevel()
// e showInterview() in src/game/game.js.
// ══════════════════════════════════════════════════════════════
export const INTERVIEW_QUESTIONS={
  1:[
    {q:'Raccontami di un progetto in cui hai imparato qualcosa sotto pressione.',
     a:[
       {t:'Il progetto è andato bene nel complesso — sono il tipo di persona che si adatta velocemente a qualsiasi contesto.',score:1},
       {t:'Ero indietro su una competenza specifica. Ho chiesto aiuto a un collega, ho recuperato in tempi stretti, e la volta dopo ho evitato lo stesso errore.',score:2},
       {t:'Ho consegnato in tempo nonostante le difficoltà — il team è stato contento del risultato finale.',score:1},
       {t:'Sinceramente in quel progetto non ho avuto particolari difficoltà, è filato abbastanza liscio.',score:0},
     ]},
    {q:'Come gestisci un compito poco chiaro assegnato all\'ultimo minuto?',
     a:[
       {t:'Faccio subito le domande minime che mi servono per non sbagliare direzione, poi comincio senza aspettare il quadro completo.',score:2},
       {t:'Comincio subito con la mia migliore interpretazione, e aggiorno chi me l\'ha chiesto appena ho qualcosa da mostrare.',score:1},
       {t:'Faccio un elenco dettagliato di tutto quello che non è chiaro e lo mando prima di iniziare qualsiasi cosa.',score:1},
       {t:'Aspetto che arrivino istruzioni più dettagliate prima di muovermi.',score:0},
     ]},
    {q:'Un collega più senior contraddice una tua analisi davanti al team. Cosa fai?',
     a:[
       {t:'Chiedo con calma su quali dati si basa, e verifico i miei prima di rispondere ulteriormente.',score:2},
       {t:'Rispondo subito difendendo la mia analisi con gli argomenti che ho già, e propongo di riverificare insieme dopo.',score:1},
       {t:'Ammetto apertamente il dubbio davanti al team e propongo di rimandare la decisione a quando avremo controllato i dati.',score:1},
       {t:'Mi scuso e lascio cadere l\'analisi, ne parlerò semmai in privato dopo.',score:0},
     ]},
    {q:'Perché vuoi lavorare in questo ruolo?',
     a:[
       {t:'Spiego cosa mi interessa specificamente di questo ruolo e cosa penso di poter portare fin da subito.',score:2},
       {t:'Seguo l\'azienda da tempo e questo ruolo mi sembra il passo naturale, anche se non ho ancora un piano dettagliato di cosa farei.',score:1},
       {t:'Rispondo con una versione quasi identica a quella che darei per qualunque ruolo simile in un\'altra azienda.',score:1},
       {t:'Mi serve un lavoro, in generale.',score:0},
     ]},
  ],
  2:[
    {q:'Racconta una decisione tecnica che hai preso da sola, senza supervisione diretta.',
     a:[
       {t:'Descrivo il contesto, le opzioni che ho valutato, e perché ho scelto quella specifica.',score:2},
       {t:'Racconto la decisione e il risultato, ma fatico a ricostruire con precisione le alternative che avevo scartato.',score:1},
       {t:'Di solito preferisco confermare con qualcuno più senior prima di decidere, per sicurezza.',score:1},
       {t:'Prendo decisioni rapide basandomi sull\'istinto, funziona quasi sempre.',score:0},
     ]},
    {q:'Come gestisci un disaccordo con uno stakeholder non tecnico?',
     a:[
       {t:'Traduco il problema tecnico in impatto di business, poi cerco un compromesso.',score:2},
       {t:'Insisto sulla soluzione tecnicamente corretta, spiegando più volte finché non la capisce.',score:1},
       {t:'Accetto subito la sua proposta e la implemento, tenendo per me le riserve tecniche.',score:1},
       {t:'Faccio come dice lui — non vale la pena discutere.',score:0},
     ]},
    {q:'Hai mai dovuto dare un feedback difficile a un collega o a un junior?',
     a:[
       {t:'Racconto un esempio concreto: cosa ho detto, come l\'ho strutturato, cosa è cambiato dopo.',score:2},
       {t:'Dico di sì e improvviso un esempio sul momento, anche se non è quello a cui pensavo davvero.',score:1},
       {t:'Di solito lo faccio, ma sempre in privato — quindi non ho aneddoti condivisibili qui.',score:1},
       {t:'Di solito evito, preferisco che se ne accorgano da soli.',score:0},
     ]},
    {q:'Come prioritizzi quando hai più richieste urgenti in contemporanea?',
     a:[
       {t:'Chiarisco impatto e scadenza reale di ciascuna, poi comunico le priorità a chi ha fatto la richiesta.',score:2},
       {t:'Do priorità a chi me l\'ha chiesto per primo o con il tono più urgente, e gestisco il resto di conseguenza.',score:1},
       {t:'Chiedo al mio manager di decidere lui l\'ordine, per non sbagliare la scelta.',score:1},
       {t:'Provo a farle tutte in parallelo.',score:0},
     ]},
  ],
  3:[
    {q:'Descrivi una situazione in cui hai dovuto guidare altri senza autorità formale su di loro.',
     a:[
       {t:'Racconto come ho costruito allineamento tramite argomenti e relazione, non gerarchia.',score:2},
       {t:'Ho puntato soprattutto sull\'esempio: facendo bene il mio lavoro, gli altri hanno iniziato a seguirmi spontaneamente.',score:1},
       {t:'Generalmente le persone mi seguono naturalmente, senza dover fare granché di specifico.',score:1},
       {t:'Di solito aspetto che qualcuno con autorità formale decida.',score:0},
     ]},
    {q:'Come bilanci qualità tecnica e velocità di consegna a livello di team, non solo tuo?',
     a:[
       {t:'Definisco standard minimi non negoziabili, e flessibilità controllata sul resto.',score:2},
       {t:'Alzo l\'asticella della qualità su tutto, e comunico che recupereremo il tempo strada facendo.',score:1},
       {t:'Lascio che ogni persona del team decida da sola il proprio bilanciamento, mi fido del loro giudizio.',score:1},
       {t:'Do sempre priorità alla velocità — la qualità si aggiusta dopo.',score:0},
     ]},
    {q:'Racconta una decisione impopolare che hai dovuto prendere o comunicare.',
     a:[
       {t:'Spiego il ragionamento dietro la decisione e come ho gestito il disaccordo del team.',score:2},
       {t:'Comunico la decisione in modo diretto e breve, senza aprire troppo la discussione, per non farla sembrare negoziabile.',score:1},
       {t:'Le decisioni impopolari sono normali nel mio ruolo — non scendo nei dettagli di come le ho gestite.',score:1},
       {t:'Ho evitato di essere io a comunicarla direttamente.',score:0},
     ]},
    {q:'Come misuri il tuo impatto in un ruolo senior, oltre al tuo output individuale?',
     a:[
       {t:'Parlo di crescita delle persone intorno a me e di decisioni che hanno effetto oltre il mio lavoro diretto.',score:2},
       {t:'Guardo se i progetti che ho impostato continuano a funzionare bene anche quando non sono più coinvolta direttamente.',score:1},
       {t:'Non ho un modo specifico per misurarlo, in questo ruolo è difficile quantificarlo.',score:1},
       {t:'Misuro principalmente quanto codice/lavoro produco io stessa.',score:0},
     ]},
  ],
};
export const INTERVIEW_PASS_RATIO=0.7; // quota del punteggio massimo per superare il colloquio

// ══════════════════════════════════════════════════════════════
// Domanda extra per mondo+livello, aggiunta in coda al pool generico
// (vedi showInterview() in src/game/game.js) — dà un po' di contesto
// specifico oltre alle domande comportamentali generiche.
// Per PMI sono le classiche domande personali fuori legge in colloquio
// (stato civile, figli): tutte le risposte valgono 0 punti — non è una
// domanda che valuta la candidata, è la realtà del mercato che si mostra.
// ══════════════════════════════════════════════════════════════
export const INTERVIEW_WORLD_QUESTIONS={
  pmi:{
    1:{q:'Sei sposata, o hai intenzione di sposarti nei prossimi anni?',
      a:[
        {t:'Faccio notare con calma che è una domanda che la legge non permette in un colloquio, e chiedo di tornare al ruolo.',score:0},
        {t:'Rispondo comunque, per non sembrare scortese.',score:0},
        {t:'Mento dicendo che non ho intenzione di sposarmi, per non rischiare di essere scartata.',score:0},
        {t:'Rispondo con una battuta per sdrammatizzare e cambiare argomento.',score:0},
      ]},
    2:{q:'Con un ruolo più impegnativo, come pensi di conciliarlo con la famiglia?',
      a:[
        {t:'Faccio notare che è una domanda che non farebbero a un candidato uomo, e riporto il discorso sulle mie competenze.',score:0},
        {t:'Spiego in dettaglio come organizzerei la mia vita privata per rassicurarli.',score:0},
        {t:'Per ora non ho figli — spero basti a chiudere il discorso.',score:0},
        {t:'Chiedo se possiamo mettere questa parte a verbale, così risulta chi l\'ha chiesto.',score:0},
      ]},
    3:{q:'Per un ruolo così senior, non pensi che sia difficile per una donna gestire un team di soli uomini?',
      a:[
        {t:'Rispondo che la domanda parte da un pregiudizio, e chiedo quali competenze di leadership cercano davvero.',score:0},
        {t:'Rassicuro dicendo che "so gestirmi bene con gli uomini".',score:0},
        {t:'Evito di rispondere e cambio argomento da sola.',score:0},
        {t:'Rispondo con una domanda a mia volta: "Lo chiedereste anche a un candidato uomo?"',score:0},
      ]},
  },
  startup:{
    1:{q:'In startup le priorità cambiano ogni settimana. Come reagisci se il progetto su cui lavoravi viene abbandonato all\'improvviso?',
      a:[
        {t:'Chiedo il motivo del cambio, poi mi concentro su cosa serve ora invece di restare legata al progetto perso.',score:2},
        {t:'Mi informo rapidamente su cosa serve ora e mi ributto dentro, anche se resto convinta che il progetto abbandonato avrebbe funzionato.',score:1},
        {t:'Chiedo di documentare comunque il lavoro fatto finora, nel caso servisse in futuro, prima di passare oltre.',score:1},
        {t:'Mi demoralizzo e rallento finché non arrivano istruzioni chiare.',score:0},
      ]},
    2:{q:'Come decidi cosa NON fare quando le risorse sono estremamente limitate?',
      a:[
        {t:'Valuto impatto e costo di ogni cosa, e comunico esplicitamente cosa resta fuori e perché.',score:2},
        {t:'Taglio per prima cosa quello che sembra più rimandabile a occhio, e aggiusto il tiro se qualcuno protesta.',score:1},
        {t:'Chiedo a ciascuno del team di rinunciare al 20% del proprio carico, in modo uguale per tutti.',score:1},
        {t:'Lascio decidere sempre a chi è più senior di me.',score:0},
      ]},
    3:{q:'Come costruiresti un minimo di processo in un team che finora ha sempre lavorato "a caos controllato"?',
      a:[
        {t:'Introduco poche regole essenziali alla volta, mostrando il beneficio concreto prima di chiederne l\'adozione.',score:2},
        {t:'Propongo al team di scegliere insieme una sola regola da provare per due settimane, poi valutiamo.',score:1},
        {t:'Impongo subito un processo strutturato completo, per abituarli fin da subito.',score:1},
        {t:'Lascio che il caos continui, tanto "in startup funziona così".',score:0},
      ]},
  },
  consulenza:{
    1:{q:'Un cliente ti chiede una stima che sai essere irrealistica in così poco tempo. Cosa rispondi?',
      a:[
        {t:'Spiego con dati alla mano perché quella tempistica non è realistica, e propongo un\'alternativa concreta.',score:2},
        {t:'Accetto la stima ma metto per iscritto le condizioni sotto cui potrebbe non essere rispettata.',score:1},
        {t:'Propongo di consegnare una prima versione ridotta nei tempi richiesti, il resto dopo.',score:1},
        {t:'Dico semplicemente che non è possibile, senza proporre alternative.',score:0},
      ]},
    2:{q:'Come gestisci un progetto in cui il cliente cambia idea sugli obiettivi a metà percorso?',
      a:[
        {t:'Rimetto in chiaro impatto e costi del cambiamento, poi aggiorno il piano con il cliente esplicitamente.',score:2},
        {t:'Accolgo subito la nuova direzione per non rallentare il cliente, e gestisco internamente l\'impatto su tempi e budget.',score:1},
        {t:'Chiedo un giorno per valutare l\'impatto prima di rispondere, anche se il cliente vorrebbe una risposta immediata.',score:1},
        {t:'Continuo secondo il piano originale, ignorando la richiesta del cliente.',score:0},
      ]},
    3:{q:'Come costruisci credibilità con un board che non ti conosce, in una singola presentazione?',
      a:[
        {t:'Parto dai loro obiettivi di business, non dalla tecnica, e lascio spazio a domande scomode.',score:2},
        {t:'Apro mostrando risultati ottenuti in progetti comparabili, per costruire fiducia prima di entrare nel merito.',score:1},
        {t:'Mostro più slide tecniche possibili, per dimostrare competenza.',score:1},
        {t:'Mi affido soprattutto al titolo/ruolo per farmi credere.',score:0},
      ]},
  },
  corporate:{
    1:{q:'In una grande azienda le decisioni passano da molti livelli. Come reagisci se una tua proposta viene bloccata senza spiegazioni chiare?',
      a:[
        {t:'Chiedo direttamente e con calma quali sono i criteri o le obiezioni, per capire come muovermi.',score:2},
        {t:'Modifico la proposta sulla base delle mie ipotesi su cosa potrebbe non essere piaciuto, e la ripropongo.',score:1},
        {t:'Ne parlo prima informalmente con un collega che conosce meglio le dinamiche di questo comitato.',score:1},
        {t:'Lascio perdere subito e non ne parlo più.',score:0},
      ]},
    2:{q:'Come costruisci consenso tra reparti con obiettivi diversi tra loro?',
      a:[
        {t:'Cerco l\'interesse comune sottostante e lo uso come base per la proposta.',score:2},
        {t:'Preparo per ogni reparto una versione della proposta cucita sui loro obiettivi specifici, e le presento separatamente.',score:1},
        {t:'Porto la proposta a un incontro con tutti i reparti insieme fin da subito, senza prepararla prima con nessuno.',score:1},
        {t:'Aspetto che sia un manager più senior a risolvere il disaccordo.',score:0},
      ]},
    3:{q:'Come gestiresti un team distribuito su più sedi con priorità spesso in conflitto tra loro?',
      a:[
        {t:'Rendo esplicite le priorità condivise a livello aziendale, e le uso per arbitrare i conflitti locali.',score:2},
        {t:'Organizzo un confronto regolare tra i responsabili di sede per negoziare le priorità caso per caso.',score:1},
        {t:'Lascio che ogni sede scelga le proprie priorità in autonomia, mi fido dei responsabili locali.',score:1},
        {t:'Impongo le priorità della sede principale a tutte le altre.',score:0},
      ]},
  },
  pa:{
    1:{q:'Nel pubblico i tempi decisionali sono spesso lunghi. Come reagisci a un progetto che richiede approvazioni su più livelli prima di partire?',
      a:[
        {t:'Mappo in anticipo chi deve approvare cosa, e preparo il materiale su misura per ciascun passaggio.',score:2},
        {t:'Sollecito periodicamente ogni ufficio coinvolto, per restare visibile nella loro lista di priorità.',score:1},
        {t:'Chiedo a un referente più esperto di seguire lui i passaggi burocratici, mentre mi concentro sulla parte tecnica.',score:1},
        {t:'Provo a saltare i passaggi che ritengo superflui.',score:0},
      ]},
    2:{q:'Come comunicheresti un risultato tecnico complesso a un board che non ha competenze tecniche?',
      a:[
        {t:'Traduco il risultato in impatto concreto per i cittadini/l\'ente, evitando gergo tecnico non necessario.',score:2},
        {t:'Preparo due versioni della stessa presentazione, una tecnica di riserva nel caso qualcuno faccia domande di dettaglio.',score:1},
        {t:'Presento gli stessi dettagli tecnici che userei con un collega, confidando che le domande chiariranno il resto.',score:1},
        {t:'Semplifico così tanto da perdere informazioni rilevanti.',score:0},
      ]},
    3:{q:'Come porteresti innovazione in un contesto con vincoli normativi stringenti?',
      a:[
        {t:'Studio i vincoli a fondo per trovare lo spazio di manovra reale, invece di ignorarli o arrendermi subito.',score:2},
        {t:'Propongo una soluzione già ridotta preventivamente per stare sicuramente dentro ai vincoli noti, anche a costo di renderla meno ambiziosa.',score:1},
        {t:'Propongo soluzioni innovative ignorando i vincoli, sperando che vengano poi adattate.',score:1},
        {t:'Evito qualsiasi proposta che richieda di confrontarsi con la normativa.',score:0},
      ]},
  },
};

// Anche superando il punteggio, il colloquio può comunque non andare a
// buon fine — il mercato del lavoro non è meritocratico. Il rischio scende
// linearmente da REJECT_MAX (appena sopra soglia) a REJECT_MIN (punteggio
// pieno), invece di essere un valore fisso: prepararsi oltre il minimo
// riduce concretamente il rischio residuo. Vedi finish() in showInterview()
// (src/game/game.js).
export const INTERVIEW_LUCK_REJECT_MAX=0.35;
export const INTERVIEW_LUCK_REJECT_MIN=0.05;
export const INTERVIEW_LUCK_MESSAGES=[
  'Il tuo profilo è molto interessante, ma in questo momento abbiamo scelto un\'altra persona.',
  'Non hai ricevuto nessuna risposta dopo il colloquio — sei stata ghostata.',
  'La posizione è stata messa in pausa per motivi interni: non dipende dalle tue risposte.',
  'Hanno deciso di promuovere internamente qualcun altro all\'ultimo momento.',
];

// Quota di INSIDER ("conoscenza procedure e politica interna") che
// sopravvive a un cambio di azienda — non si azzera del tutto: resta un
// residuo di capacità generale di leggere le organizzazioni. Vedi
// grantOfficialLevel() in game.js. Non si applica alla promozione interna
// (lì INSIDER non viene toccato per niente).
export const INSIDER_RETENTION_RATIO=0.30;

// Bonus NETWORK una tantum al cambio di azienda, proporzionale a dimensione
// del contesto lasciato × livello ufficiale lì raggiunto. Tetto allineato al
// massimo davvero raggiungibile (WORLD_COMPANY_SIZE max 5 × livello max 3).
export const NETWORK_JOB_CHANGE_BONUS_CAP=15;

// Cap sul salto di RAL rispetto alla RAL ufficiale precedente — diverso per
// promozione interna (stesso mondo) e cambio di azienda (mondo diverso):
// chi cambia azienda tende a negoziare aumenti più alti di chi resta.
// Vedi grantOfficialLevel() in game.js.
export const INTERNAL_PROMOTION_RAL_CAP=0.10;
export const EXTERNAL_JOB_CHANGE_RAL_CAP=0.20;

// Beat narrativo mostrato prima di spostare davvero la giocatrice in un
// mondo diverso dopo un cambio di azienda riuscito (vedi showInterview()) —
// pescato a caso, nessun impatto sui numeri.
export const JOB_CHANGE_TRANSITIONS=[
  'Dai le dimissioni. Due settimane dopo, il tuo primo giorno nel nuovo lavoro comincia davvero.',
  'Firmi il nuovo contratto. Il weekend passa in fretta — lunedì è un\'altra vita lavorativa.',
  'Ultimo giorno nel vecchio posto: qualche saluto, una scatola di cose personali. Poi si volta pagina.',
];

// Nota didattica mostrata dopo un colloquio in cui è comparsa la domanda
// PMI su stato civile/figli/pregiudizi di leadership (INTERVIEW_WORLD_QUESTIONS.pmi,
// vedi sopra) — indipendente da quale risposta è stata scelta, non altera
// mai il punteggio. Vedi showInterview() in game.js.
export const PMI_ILLEGAL_QUESTION_NOTICE='⚖️ Una delle domande di questo colloquio (stato civile, figli, pregiudizi di leadership) non dovrebbe esserti fatta in un colloquio di lavoro in Italia (art. 8 Statuto dei Lavoratori; D.Lgs. 198/2006 sulle pari opportunità). Qualunque cosa tu abbia risposto non ha inciso sulla valutazione — è qui solo per mostrarti che nella realtà del mercato può ancora capitare.';

// ══════════════════════════════════════════════════════════════
// WORLD DEFINITIONS
// ══════════════════════════════════════════════════════════════

export const WORLD_DEFS={
  pmi:{
    label:'WORLD 1 · PMI SETTORE',
    palette:{
      floor:1971720,
      wall:3023376,
      accent:5913104,
      bg:920068
    },
    exits:[
      {
        id:'startup',
        label:'STARTUP →',
        color:13538264,
        x:0.85,
        y:0.5
      },
      {
        id:'consulenza',
        label:'CONSULENZA →',
        color:5227511,
        x:0.85,
        y:0.72
      }
    ],
    npcs:[
      {
        id:'manager',
        sprite:'mgr',gender:'f',
        label:'Ufficio HR',
        gridX:4,
        gridY:5,
        dlg:{
          spk:'👔 Manager HR — MetalTech',
          color:'var(--accent)',
          txt:'Benvenuta. Sei la nuova data analyst. "Data scientist", come dici tu — qui facciamo le cose praticamente. Avrai bisogno di Excel, gestire il cliente, e ogni tanto supporto in produzione. La tua laurea? Utile, ma conta di più l\'iniziativa.',
          chs:[
            {
              t:'OK — posso avere una descrizione scritta del ruolo?',
              out:'assertive'
            },
            {
              t:'Certo, mi adatterò a quello che serve.',
              out:'passive'
            },
            {
              t:'"Supporto in produzione" non era nel colloquio. Posso avere chiarezza?',
              out:'direct'
            },
            {
              t:'Rispondo con una battuta sul fatto che "data scientist" suona più fico su LinkedIn, tanto il lavoro è quello.',
              out:'joke'
            }
          ]
        },
        outs:{
          assertive:{
            msg:'Hai chiesto chiarezza in modo professionale.',
            stat:{
              VOICE:1,
              CLARITY:1
            }
          },
          passive:{
            msg:'Hai accettato senza chiedere. Il ruolo resterà vago.',
            stat:{
              ENERGY:1
            }
          },
          direct:{
            msg:'Hai nominato il problema direttamente.',
            stat:{
              RADAR:2,
              VOICE:1
            }
          },
          joke:{
            msg:'Hai sdrammatizzato. Simpatico, ma non hai ottenuto nessuna chiarezza — e hai normalizzato la confusione dei titoli.',
            stat:{}
          }
        },
        db:{
          pat:'Il ruolo vago come meccanismo di sfruttamento',
          ins:'Nelle PMI i ruoli tech sono spesso fluidi. Questo può significare crescita — o lavoro non pagato. Chiedere una job description scritta nella prima settimana è normale, non una provocazione.',
          data:'McKinsey 2023: le donne in ruoli tech nelle PMI riportano il 40% in più di task fuori JD rispetto ai colleghi uomini.'
        },
        type:'npc',
        required:true
      },
      {
        id:'collega',
        sprite:'col',gender:'m',
        label:'Open Space',
        gridX:8,
        gridY:7,
        dlg:{
          spk:'👨‍💻 Collega — Marco',
          color:'var(--accent)',
          txt:'Ciao! Il management ha visto che sei brava a spiegare le cose. Ti chiedono di fare la "facilitatrice" nelle riunioni con i clienti, preparare i deck, coordinare il team. Non è nel tuo ruolo ufficialmente, ma sai com\'è.',
          chs:[
            {
              t:'Posso farlo, ma voglio che venga riconosciuto formalmente.',
              out:'negotiate'
            },
            {
              t:'Certo, nessun problema. Sono qui per aiutare.',
              out:'accept'
            },
            {
              t:'Prima voglio capire se è il percorso che voglio costruire qui.',
              out:'strategic'
            },
            {
              t:'Chiedo a Marco chi altro nel team fa già questo tipo di lavoro extra, per capire se è una richiesta solo a me.',
              out:'pattern'
            }
          ]
        },
        outs:{
          negotiate:{
            msg:'Hai legato il lavoro extra al riconoscimento.',
            stat:{
              VOICE:2,
              NETWORK:1
            }
          },
          accept:{
            msg:'Hai accettato. Probabilmente lo chiederanno ancora.',
            stat:{
              ENERGY:1,
              CLARITY:-1
            }
          },
          strategic:{
            msg:'Hai preso tempo per valutare.',
            stat:{
              CLARITY:2,
              RADAR:1
            }
          },
          pattern:{
            msg:'Marco non sa dirti se càpita anche ad altri — ma la domanda ti aiuta a verificare se il pattern è sistemico o isolato prima di agire.',
            stat:{
              RADAR:2
            }
          }
        },
        db:{
          pat:'Il "lavoro invisibile" e l\'office housework',
          ins:'Le donne ricevono il doppio delle richieste di lavoro non riconosciuto. Non è perché siano più brave — è un pattern sistemico.',
          data:'Harvard Business Review 2022: le donne dedicano 200 ore/anno in più a lavoro non tracciato nei sistemi di performance review.'
        },
        type:'npc',
        required:true
      },
      {
        id:'sister',
        sprite:'sis',gender:'f',
        label:'Mensa',
        gridX:6,
        gridY:9,
        dlg:{
          spk:'❤️ Giulia — Senior Dev (Alleata)',
          color:'#e53935',
          txt:'Hey, mi ha detto Marco che stai facendo i deck per il cliente. Lo so, è successo anche a me. Ascolta: tieni traccia di tutto quello che fai fuori JD. E quando presenti qualcosa, assicurati di inviare una mail prima con il tuo nome — così resta traccia. Ti copro io nelle riunioni se vedo che qualcuno si prende il credito.',
          chs:[
            {
              t:'Grazie. Come hai imparato a navigare queste situazioni?',
              out:'learn'
            },
            {
              t:'Apprezzo, ma non voglio creare conflitti.',
              out:'avoid'
            },
            {
              t:'Possiamo costruire qualcosa di più sistematico per il team?',
              out:'systemic'
            },
            {
              t:'Le chiedo se conosce altre persone in azienda finite nella stessa situazione, prima di decidere come muovermi.',
              out:'map'
            }
          ]
        },
        outs:{
          learn:{
            msg:'Hai costruito una connessione reale, e imparato una tattica pratica da chi ha già navigato queste situazioni.',
            stat:{
              NETWORK:2,
              RADAR:1,
              SKILL:1
            }
          },
          avoid:{
            msg:'Hai evitato il conflitto. Ma hai perso un\'alleata.',
            stat:{
              ENERGY:1,
              NETWORK:-1
            }
          },
          systemic:{
            msg:'Ambizioso — ma in una PMI senza processi HR strutturati, proporre un "sistema" a una collega, per quanto alleata, può suonare fuori scala. Giulia apprezza l\'intenzione, ma resta vaga sulla fattibilità.',
            stat:{
              NETWORK:1
            }
          },
          map:{
            msg:'Hai costruito il quadro prima di decidere come muoverti.',
            stat:{
              NETWORK:1,
              RADAR:2
            }
          }
        },
        db:{
          pat:'La sorellanza come strategia professionale, non solo supporto emotivo',
          ins:'Il supporto attivo tra donne sul lavoro — nominare i contributi altrui, costruire visibilità reciproca — è documentato come uno dei fattori più efficaci contro il credit gap.',
          data:'Lean In / McKinsey 2023: le donne che hanno un\'alleata donna con seniority hanno il 24% in più di probabilità di essere promosse entro 3 anni.'
        },
        type:'sis',
        required:true
      },
      {
        id:'tech_pmi',
        sprite:'tech',
        label:'Server Room',
        gridX:12,
        gridY:8,
        dlg:{
          spk:'💻 Scenario Tecnico — PMI',
          color:'var(--warn)',
          txt:'Hai un dataset di produzione con il 35% di valori mancanti nelle colonne di temperatura. Il manager vuole il modello per domani. Cosa fai?',
          chs:[
            {
              t:'Imputo con la media e consegno — il manager vuole i risultati.',
              out:'fast'
            },
            {
              t:'Analizzo il pattern dei missing: se MCAR imputo, se MAR/MNAR discuto con il manager le implicazioni prima di procedere.',
              out:'rigorous'
            },
            {
              t:'Chiedo più dati storici per capire il contesto prima di scegliere la strategia.',
              out:'context'
            },
            {
              t:'Costruisco una pipeline di imputazione automatica con multiple imputation, anche se richiederà più tempo del previsto.',
              out:'overengineer'
            }
          ]
        },
        outs:{
          fast:{
            msg:'Veloce ma rischioso.',
            stat:{
              ENERGY:1,
              SKILL:-1
            }
          },
          rigorous:{
            msg:'Approccio corretto e comunicabile.',
            stat:{
              SKILL:2,
              CLARITY:1
            }
          },
          context:{
            msg:'Ottima domanda di business.',
            stat:{
              SKILL:1,
              RADAR:2
            }
          },
          overengineer:{
            msg:'Tecnicamente solida, ma sproporzionata rispetto al tempo e all\'infrastruttura reali di una PMI con una scadenza a domani.',
            stat:{
              SKILL:1,
              ENERGY:-1
            }
          }
        },
        db:{
          pat:'Il trade-off velocità/rigore nelle PMI',
          ins:'Nelle PMI la pressione sui tempi è reale. Ma consegnare un modello con dati mal gestiti crea problemi maggiori downstream.',
          data:'Un modello addestrato su dati con missing non analizzati può avere bias fino al 40% nelle predizioni. (Speranza et al., 2022)'
        },
        type:'tech',
        required:true
      },
    ]
  },
  startup:{
    label:'WORLD 2A · STARTUP TECH',
    palette:{
      floor:1706542,
      wall:3021390,
      accent:4860522,
      bg:854032
    },
    exits:[
      {
        id:'corporate',
        label:'CORPORATE →',
        color:5227511,
        x:0.88,
        y:0.55
      }
    ],
    npcs:[
      {
        id:'founder',
        sprite:'mgr',gender:'f',
        label:'CEO Corner',
        gridX:4,
        gridY:5,
        dlg:{
          spk:'🚀 Founder — StartupAI',
          color:'var(--accent)',
          txt:'Benvenuta! Qui non c\'è burocrazia, siamo una famiglia. Tutti fanno un po\' di tutto. Ti chiedo di essere "full-stack AI" — modelli, infra, prodotto, pitch ai clienti. La tua idea di ieri era ottima btw, l\'ho presentata agli investitori stamattina.',
          chs:[
            {
              t:'"Full-stack AI" è molto ampio. Possiamo definire le priorità del mio ruolo?',
              out:'scope'
            },
            {
              t:'Certo, mi piace la varietà! Sono entusiasta.',
              out:'enthusiast'
            },
            {
              t:'"L\'hai presentata" — ma era mia. Come funziona la visibilità delle idee qui?',
              out:'credit'
            },
            {
              t:'Rispondo con entusiasmo ma chiedo di poter scegliere io su quali aree concentrarmi per essere davvero efficace, invece di essere ovunque.',
              out:'compromise'
            }
          ]
        },
        outs:{
          scope:{
            msg:'Hai definito i confini prima di imbarcarsi.',
            stat:{
              CLARITY:2,
              VOICE:1
            }
          },
          enthusiast:{
            msg:'Entusiasmo reale — ma senza confini chiari ti ritroverai a fare tutto.',
            stat:{
              ENERGY:2,
              CLARITY:-1
            }
          },
          credit:{
            msg:'Hai nominato il problema direttamente.',
            stat:{
              VOICE:2,
              RADAR:2
            }
          },
          compromise:{
            msg:'Un compromesso tra l\'entusiasmo e i confini: mantieni energia e ti ritagli un focus.',
            stat:{
              CLARITY:1,
              ENERGY:1
            }
          }
        },
        db:{
          pat:'La cultura "famiglia" come vettore di sfruttamento',
          ins:'Il frame della "famiglia" nelle startup normalizza confini professionali assenti, orari illimitati e lavoro non pagato.',
          data:'Sequoia Capital Survey 2023: il 67% dei dipendenti di startup segnala "scope creep" nel proprio ruolo entro i primi 6 mesi. Le donne lo segnalano il 40% più frequentemente degli uomini.'
        },
        type:'npc',
        required:true
      },
      {
        id:'sister_startup',
        sprite:'sis',gender:'f',
        label:'Cucina',
        gridX:7,
        gridY:8,
        dlg:{
          spk:'❤️ Priya — Senior ML Eng (Alleata)',
          color:'#e53935',
          txt:'Ehi, ho sentito che hai sollevato la questione del credito con il founder. Brava. Io ho imparato a mandare sempre un recap scritto dopo le conversazioni con lui — "come discusso oggi, la mia proposta è X". Ti sembra paranoico? Non lo è. Facciamolo insieme se vuoi.',
          chs:[
            {
              t:'Sì, è una buona idea. Come hai costruito questa abitudine?',
              out:'learn'
            },
            {
              t:'Non voglio sembrare diffidente — ci tengo al rapporto.',
              out:'trust'
            },
            {
              t:'Potremmo proporre un sistema di tracking delle idee per tutto il team.',
              out:'systemic'
            },
            {
              t:'Comincio a fare il recap scritto da sola, senza aspettare di proporlo come sistema — se funziona, altri lo noteranno e lo copieranno.',
              out:'quiet'
            }
          ]
        },
        outs:{
          learn:{
            msg:'Hai imparato una strategia concreta da chi l\'ha già testata su questo founder specifico.',
            stat:{
              NETWORK:2,
              SKILL:1,
              RADAR:1
            }
          },
          trust:{
            msg:'La fiducia è importante — ma documentare non è sfiducia.',
            stat:{
              ENERGY:1,
              RADAR:-1
            }
          },
          systemic:{
            msg:'In una cultura che si vanta di "non avere burocrazia", un sistema formale rischia di essere respinto proprio perché somiglia a processo — l\'intenzione è buona, l\'esecuzione probabilmente prematura.',
            stat:{
              NETWORK:1
            }
          },
          quiet:{
            msg:'Cambi il comportamento senza bisogno di un via libera formale.',
            stat:{
              SKILL:1,
              RADAR:1
            }
          }
        },
        db:{
          pat:'La documentazione come protezione, non come paranoia',
          ins:'Nelle startup la comunicazione orale è la norma, e questo crea asimmetrie di potere. Documentare per iscritto non è segnale di sfiducia — è una pratica professionale.',
          data:'McKinsey Women in the Workplace 2023: nelle startup il "credit gap" è il 35% più alto rispetto alle corporate.'
        },
        type:'sis',
        required:true
      },
      {
        id:'collega_startup',
        sprite:'col',gender:'m',
        label:'Open Space',
        gridX:10,
        gridY:6,
        dlg:{
          spk:'👨‍💻 Collega — Luca',
          color:'var(--accent)',
          txt:'Senti, c\'è un colloquio interno per il ruolo di Tech Lead. Ho già detto al founder che sarei perfetto. Tu hai fatto un lavoro figo sul modello, ma non hai ancora "leadership" — sai, non hai mai gestito nessuno.',
          chs:[
            {
              t:'Ho gestito il progetto X end-to-end e coordinato 3 stakeholder. È leadership.',
              out:'redefine'
            },
            {
              t:'Hai ragione, forse non sono ancora pronta.',
              out:'defer'
            },
            {
              t:'Interessante. Posso sapere quali sono i criteri formali per il ruolo?',
              out:'criteria'
            },
            {
              t:'Chiedo a Luca stesso su quali progetti ha già gestito persone, per capire se il criterio è applicato in modo uguale a entrambi.',
              out:'mirror'
            }
          ]
        },
        outs:{
          redefine:{
            msg:'Hai ridefinito "leadership" con dati concreti.',
            stat:{
              VOICE:2,
              SKILL:1
            }
          },
          defer:{
            msg:'Hai ceduto senza verificare se i criteri erano reali.',
            stat:{
              VOICE:-1,
              CLARITY:-1
            }
          },
          criteria:{
            msg:'Hai smontato l\'argomento chiedendo i criteri.',
            stat:{
              CLARITY:2,
              RADAR:2
            }
          },
          mirror:{
            msg:'Luca non ha una risposta chiara — il criterio non è applicato in modo uniforme.',
            stat:{
              RADAR:2,
              VOICE:1
            }
          }
        },
        db:{
          pat:'Il "non sei ancora pronta" come deterrente sistematico',
          ins:'"Non sei ancora pronta" è una delle frasi più usate per escludere le donne da posizioni di leadership.',
          data:'Harvard Business Review 2019: le donne vengono valutate per promozioni in base alle performance attuali, gli uomini sul potenziale futuro.'
        },
        type:'npc',
        required:true
      },
      {
        id:'tech_startup',
        sprite:'tech',
        label:'Whiteboard',
        gridX:13,
        gridY:7,
        dlg:{
          spk:'💻 Scenario Tecnico — Startup',
          color:'var(--warn)',
          txt:'Il founder vuole un MVP del vostro sistema di raccomandazione per dopodomani. Hai dati sparsi, nessuna infrastruttura, e 2 giorni. Cosa proponi?',
          chs:[
            {
              t:'Collaborative filtering con matrix factorization — almeno offline per la demo.',
              out:'ml'
            },
            {
              t:'Regole euristiche basate sulle categorie più popolari — funziona, è spiegabile e deployabile in 2 ore.',
              out:'pragmatic'
            },
            {
              t:'Definisco prima i KPI di successo con il founder, poi scelgo l\'approccio.',
              out:'strategic'
            },
            {
              t:'Propongo un mix: euristiche per il lancio, con in parallelo la raccolta dati per un modello vero nelle settimane successive.',
              out:'hybrid'
            }
          ]
        },
        outs:{
          ml:{
            msg:'Tecnicamente corretto ma rischioso nei tempi.',
            stat:{
              SKILL:1
            }
          },
          pragmatic:{
            msg:'Scelta eccellente per un MVP.',
            stat:{
              SKILL:2,
              CLARITY:1
            }
          },
          strategic:{
            msg:'Pensi come una product manager.',
            stat:{
              SKILL:1,
              RADAR:2,
              CLARITY:2
            }
          },
          hybrid:{
            msg:'Il meglio di entrambi i mondi, ma richiede più coordinamento di ciascuna strada presa da sola.',
            stat:{
              SKILL:2,
              CLARITY:1
            }
          }
        },
        db:{
          pat:'Il MVP tecnico: la semplicità come scelta, non come limite',
          ins:'Nelle startup la pressione a dimostrare "ML avanzato" è alta — ma un sistema semplice che funziona batte sempre un sistema complesso che non è pronto.',
          data:'"Simple models with good features often outperform complex models with poor features." — Pedro Domingos, The Master Algorithm.'
        },
        type:'tech',
        required:true
      },
    ]
  },
  consulenza:{
    label:'WORLD 2B · BIG CONSULENZA',
    palette:{
      floor:530464,
      wall:1060928,
      accent:1724512,
      bg:265232
    },
    exits:[
      {
        id:'corporate',
        label:'CONSULENZA → CORPORATE',
        color:5227511,
        x:0.88,
        y:0.55
      }
    ],
    npcs:[
      {
        id:'partner',
        sprite:'mgr',gender:'m',
        label:'Partner Office',
        gridX:4,
        gridY:5,
        dlg:{
          spk:'👔 Partner — McKenzie & Co',
          color:'var(--accent)',
          txt:'Benvenuta. Qui la carriera è chiara: analyst, senior, manager, partner. Hai 2 anni per dimostrare di avere "executive presence". È difficile da definire, lo so — ma lo riconosciamo quando lo vediamo.',
          chs:[
            {
              t:'Posso avere esempi concreti di cosa si intende per executive presence?',
              out:'concrete'
            },
            {
              t:'Capisco. Farò del mio meglio per svilupparla.',
              out:'passive'
            },
            {
              t:'Interessante. Chi ha raggiunto partner negli ultimi 5 anni? Posso parlare con loro?',
              out:'research'
            },
            {
              t:'Chiedo al partner un esempio concreto di un momento in cui ho già mostrato (o non mostrato) questa "executive presence".',
              out:'evidence'
            }
          ]
        },
        outs:{
          concrete:{
            msg:'Hai chiesto criteri concreti su un concetto vago.',
            stat:{
              CLARITY:2,
              VOICE:1
            }
          },
          passive:{
            msg:'Hai accettato un criterio opaco.',
            stat:{
              CLARITY:-1
            }
          },
          research:{
            msg:'Vai alle fonti primarie.',
            stat:{
              RADAR:2,
              NETWORK:1
            }
          },
          evidence:{
            msg:'Hai ancorato un concetto vago a un episodio reale, verificabile.',
            stat:{
              CLARITY:2,
              VOICE:1
            }
          }
        },
        db:{
          pat:'"Executive presence" come criterio implicito di esclusione',
          ins:'"Executive presence" è uno dei criteri di promozione più diffusi nelle grandi consulenze — e uno dei meno definiti.',
          data:'Center for Talent Innovation 2012: l\'81% dei senior leader cita "executive presence" come criterio chiave. Solo il 29% sa definirla in modo coerente.'
        },
        type:'npc',
        required:true
      },
      {
        id:'sister_cons',
        sprite:'sis',gender:'f',
        label:'Sala Caffè',
        gridX:7,
        gridY:9,
        dlg:{
          spk:'❤️ Amina — Senior Manager (Alleata)',
          color:'#e53935',
          txt:'Hai parlato con il partner, vero? "Executive presence" — sento questa parola almeno 3 volte a settimana. Ascolta: documenta ogni presentazione che fai, chi c\'era, il feedback ricevuto. Io ho costruito un portfolio interno in 18 mesi e l\'ho usato nella mia review.',
          chs:[
            {
              t:'Questa idea del portfolio interno è concreta. Come l\'hai strutturato?',
              out:'learn'
            },
            {
              t:'Hai mai considerato di portare questo sistema a livello di policy?',
              out:'systemic'
            },
            {
              t:'Apprezzo — ma non voglio essere vista come quella che "fa politica".',
              out:'fear'
            },
            {
              t:'Le chiedo se posso usare la sua idea di portfolio anche per la mia prossima review, citandola come fonte.',
              out:'cite'
            }
          ]
        },
        outs:{
          learn:{
            msg:'Hai acquisito una strategia trasferibile, la stessa che ha già funzionato per una senior manager in questa gerarchia.',
            stat:{
              NETWORK:2,
              SKILL:1
            }
          },
          systemic:{
            msg:'Proporre una policy di firm da analyst, senza che sia lei a portarla, rischia di leggersi come uscire dal proprio ruolo — l\'idea resta buona, il canale no.',
            stat:{
              NETWORK:1
            }
          },
          fear:{
            msg:'La paura di sembrare "politica" è reale — ma spesso è esattamente quella che ti frena.',
            stat:{
              ENERGY:1,
              VOICE:-1
            }
          },
          cite:{
            msg:'Costruisci credibilità citando una fonte interna riconosciuta.',
            stat:{
              NETWORK:1,
              CLARITY:1
            }
          }
        },
        db:{
          pat:'La visibilità come lavoro collettivo',
          ins:'Nominare il lavoro delle colleghe nelle riunioni è un atto di alleanza attiva.',
          data:'"Amplification" — documentata nel team Obama alla Casa Bianca. Il numero di interruzioni ai danni delle donne scese del 60% in 6 mesi.'
        },
        type:'sis',
        required:true
      },
      {
        id:'double_bind',
        sprite:'col',gender:'m',
        label:'Meeting Room',
        gridX:10,
        gridY:6,
        dlg:{
          spk:'👨‍💻 Collega Senior — Alessandro',
          color:'var(--accent)',
          txt:'Ieri in riunione con il cliente sei stata molto diretta. Il partner mi ha detto che "forse ha un po\' di carattere". Ma la settimana scorsa quando non hai detto la tua sull\'approccio statistico, ti ha definita "poco propositiva". Come fai?',
          chs:[
            {
              t:'Questo si chiama double bind: qualunque cosa faccia, è sbagliata. Lo nomino.',
              out:'name'
            },
            {
              t:'Forse devo trovare un equilibrio migliore nel tono.',
              out:'adapt'
            },
            {
              t:'Interessante che lo noti anche tu. Hai osservato lo stesso pattern con altri colleghi maschi?',
              out:'data'
            },
            {
              t:'Chiedo ad Alessandro di scrivere insieme a me, in modo neutro, cosa ci si aspetterebbe davvero da un/una analyst in quella riunione.',
              out:'criteria'
            }
          ]
        },
        outs:{
          name:{
            msg:'Hai nominato la struttura del problema.',
            stat:{
              RADAR:2,
              VOICE:1
            }
          },
          adapt:{
            msg:'L\'adattamento individuale non risolve un problema strutturale.',
            stat:{
              ENERGY:1,
              RADAR:-1
            }
          },
          data:{
            msg:'Stai raccogliendo dati comparativi.',
            stat:{
              RADAR:3,
              CLARITY:1
            }
          },
          criteria:{
            msg:'Rendi il criterio esplicito e verificabile per chiunque, non solo per te.',
            stat:{
              CLARITY:2,
              RADAR:1
            }
          }
        },
        db:{
          pat:'Il double bind: qualunque cosa fai, è sbagliata',
          ins:'Il double bind di genere sul lavoro è uno dei pattern più documentati nella ricerca su donne e leadership.',
          data:'Catalyst Research 2007: le donne in ruoli di leadership vengono valutate negativamente sia quando adottano stili maschili che femminili.'
        },
        type:'npc',
        required:true
      },
      {
        id:'tech_cons',
        sprite:'tech',
        label:'Analytics Room',
        gridX:13,
        gridY:7,
        dlg:{
          spk:'💻 Scenario Tecnico — Consulenza',
          color:'var(--warn)',
          txt:'Il cliente ha un churn rate del 28% e vuole capire perché. Hai 2 settimane, accesso a dati transazionali e un\'intervista con il Customer Success team. Da dove inizi?',
          chs:[
            {
              t:'Costruisco subito un modello di churn prediction con XGBoost e SHAP per l\'interpretabilità.',
              out:'model_first'
            },
            {
              t:'Prima l\'intervista con Customer Success per capire le ipotesi del business, poi EDA, poi il modello — se serve.',
              out:'business_first'
            },
            {
              t:'Definisco la domanda: churn prediction o churn understanding? Sono due problemi diversi con soluzioni diverse.',
              out:'frame'
            },
            {
              t:'Comincio dal modello di churn prediction perché è quello che il cliente si aspetta di vedere per primo, e uso l\'intervista per raffinarlo dopo.',
              out:'client_expect'
            }
          ]
        },
        outs:{
          model_first:{
            msg:'Il modello viene prima delle domande — rischio classico.',
            stat:{
              SKILL:1,
              CLARITY:-1
            }
          },
          business_first:{
            msg:'Approccio corretto.',
            stat:{
              SKILL:2,
              CLARITY:1
            }
          },
          frame:{
            msg:'Problem framing prima del solving.',
            stat:{
              SKILL:1,
              RADAR:2,
              CLARITY:2
            }
          },
          client_expect:{
            msg:'Parti da ciò che il cliente vuole vedere — ma rischi di dover rifare parte del lavoro se le ipotesi iniziali erano sbagliate.',
            stat:{
              SKILL:1
            }
          }
        },
        db:{
          pat:'Problem framing: la skill più sottovalutata nella data science applicata',
          ins:'"Churn prediction" e "churn understanding" richiedono approcci radicalmente diversi.',
          data:'Gartner 2023: il 60% dei progetti di data science fallisce non per problemi tecnici ma per mismatch tra il problema definito e il problema reale del business.'
        },
        type:'tech',
        required:true
      },
    ]
  },
};

export const INNER_CRITICS = {
  pmi:{
    id:'critic',
    sprite:'crit',
    dlg:{
      spk:'👻 Inner Critic',
      color:'var(--danger)',
      txt:'Ehi. Hai sentito cosa ha detto il manager? "Pratico". Forse non sei abbastanza tecnica per questo posto. Giulia è molto più esperta di te. Forse avresti dovuto studiare di più prima di iniziare.',
      chs:[
        {
          t:'Cosa mi dice concretamente di non sapere fare?',
          out:'question'
        },
        {
          t:'Hai ragione. Devo studiare di più prima di dire la mia.',
          out:'believe'
        },
        {
          t:'Questo è il bias di impostore. Che prove concrete ho delle mie competenze?',
          out:'reframe'
        },
        {
          t:'Le chiedo: "Concretamente, cosa dovrei aver fatto di diverso finora?" e aspetto una risposta specifica.',
          out:'specifics'
        }
      ]
    },
    outs:{
      question:{
        msg:'Hai chiesto prove. L\'Inner Critic non ne ha.',
        stat:{
          CLARITY:2,
          RADAR:1
        }
      },
      believe:{
        msg:'Hai creduto alla voce senza verificare.',
        stat:{
          VOICE:-1,
          CLARITY:-1
        }
      },
      reframe:{
        msg:'Hai riconosciuto il pattern e cercato prove reali.',
        stat:{
          RADAR:3,
          VOICE:1
        }
      },
      specifics:{
        msg:'Se non arriva una risposta specifica, la voce non ha basi.',
        stat:{
          CLARITY:2,
          RADAR:1
        }
      }
    },
    db:{
      pat:'La sindrome dell\'impostore come risposta al sistema, non come difetto personale',
      ins:'La sindrome dell\'impostore colpisce di più le persone in ambienti dove non sono rappresentate. Non è una debolezza — è una risposta adattiva.',
      data:'Clance & Imes (1978, replicato più volte): la sindrome dell\'impostore è più frequente nei gruppi sottorappresentati in quel contesto professionale.'
    }
  },
  startup:{
    id:'critic',
    sprite:'crit',
    dlg:{
      spk:'👻 Inner Critic',
      color:'var(--danger)',
      txt:'Tutte le startup falliscono. Sei l\'unica donna nel team tech. Se qualcosa va storto, tu sarai quella che "non ha funzionato". Forse dovresti stare più bassa — non fare domande difficili.',
      chs:[
        {
          t:'Stare bassa non mi ha mai protetta. Cosa mi dice questa voce?',
          out:'analyze'
        },
        {
          t:'Forse ha ragione. Meglio non rischiare.',
          out:'believe'
        },
        {
          t:'Se qualcosa va storto sarà per ragioni sistemiche, non perché ho fatto domande.',
          out:'reframe'
        },
        {
          t:'Le chiedo: quali startup di successo avevano un team interamente omogeneo? Nessuna — la varietà è un dato, non un rischio.',
          out:'evidence'
        }
      ]
    },
    outs:{
      analyze:{
        msg:'Hai usato l\'Inner Critic come fonte di informazione, non come verità.',
        stat:{
          RADAR:2,
          CLARITY:1
        }
      },
      believe:{
        msg:'Hai internalizzato il messaggio.',
        stat:{
          VOICE:-2,
          RADAR:-1
        }
      },
      reframe:{
        msg:'Hai separato la tua agency dalla struttura sistemica.',
        stat:{
          RADAR:3,
          VOICE:1
        }
      },
      evidence:{
        msg:'Hai smontato la premessa con un dato di fatto.',
        stat:{
          RADAR:2,
          VOICE:1
        }
      }
    },
    db:{
      pat:'Il "last hired, first fired" e la minaccia dello stereotipo',
      ins:'Essere l\'unica donna in un team crea un doppio vincolo: ogni errore viene attribuito al genere, ogni successo alla squadra.',
      data:'MIT Sloan 2020: nei team con una sola donna, i suoi errori hanno il doppio delle probabilità di essere menzionati nelle valutazioni.'
    }
  },
  consulenza:{
    id:'critic',
    sprite:'crit',
    dlg:{
      spk:'👻 Inner Critic',
      color:'var(--danger)',
      txt:'Tutti qui hanno il doppio delle tue referenze. Il partner non ti ha sorriso dopo la presentazione. Probabilmente stai deludendo le aspettative. Forse questo ambiente non fa per te.',
      chs:[
        {
          t:'Il partner non sorrideva a nessuno — verifico il pattern, non un singolo evento.',
          out:'evidence'
        },
        {
          t:'Forse ha ragione. Non sono tagliata per questo ambiente.',
          out:'believe'
        },
        {
          t:'"Questo ambiente non fa per me" potrebbe essere vero — ma per ragioni diverse da quelle che dice l\'Inner Critic.',
          out:'nuance'
        },
        {
          t:'Chiedo direttamente al partner un feedback specifico sulla presentazione, invece di interpretare la sua espressione.',
          out:'ask'
        }
      ]
    },
    outs:{
      evidence:{
        msg:'Stai usando il pensiero critico contro l\'Inner Critic.',
        stat:{
          RADAR:2,
          CLARITY:1
        }
      },
      believe:{
        msg:'Hai generalizzato da un singolo evento.',
        stat:{
          VOICE:-1,
          CLARITY:-1
        }
      },
      nuance:{
        msg:'Hai fatto una distinzione importante.',
        stat:{
          RADAR:2,
          CLARITY:2
        }
      },
      ask:{
        msg:'Hai sostituito l\'interpretazione con un dato reale.',
        stat:{
          VOICE:2,
          CLARITY:1
        }
      }
    },
    db:{
      pat:'La lettura dei segnali sociali e il confirmation bias',
      ins:'La sindrome dell\'impostore porta a leggere selettivamente i segnali negativi e ignorare quelli positivi.',
      data:'Sakulku & Alexander (2011): le persone con alta sindrome dell\'impostore ricordano il 68% dei feedback negativi e il 23% di quelli positivi.'
    }
  },
  corporate:{
    id:'critic',
    sprite:'crit',
    dlg:{
      spk:'👻 Inner Critic',
      color:'#f76a6a',
      txt:'Hai sentito? Ti hanno messo "medium potential". Dopo tutto quello che hai fatto. Forse non sei il tipo di persona che "brilla" nei contesti strutturati. Forse non hai il carattere giusto per arrivare in alto qui.',
      chs:[
        {
          t:'"Medium potential" secondo criteri che non mi sono stati spiegati. Questo non è un dato — è un\'opinione.',
          out:'reframe'
        },
        {
          t:'Forse hanno ragione. Non mi vedo come una "leader".',
          out:'believe'
        },
        {
          t:'Cosa succederebbe se chiedessi esattamente su cosa sono stata valutata?',
          out:'action'
        },
        {
          t:'Chiedo esplicitamente al mio manager: "cosa dovrei fare di diverso per passare a high potential?" — e valuto la risposta che arriva.',
          out:'direct'
        }
      ]
    },
    outs:{
      reframe:{
        msg:'Hai distinto tra valutazione e verità.',
        stat:{
          RADAR:2,
          CLARITY:1
        }
      },
      believe:{
        msg:'Hai internalizzato un\'opinione come fatto.',
        stat:{
          VOICE:-1,
          CLARITY:-1
        }
      },
      action:{
        msg:'Trasformi l\'ansia in azione concreta.',
        stat:{
          VOICE:1,
          CLARITY:2
        }
      },
      direct:{
        msg:'Hai chiesto un criterio concreto invece di indovinarlo.',
        stat:{
          VOICE:1,
          CLARITY:1,
          RADAR:1
        }
      }
    },
    db:{
      pat:'Il "medium potential" e il bias nelle valutazioni di leadership',
      ins:'"Non la vedo come una leader" è uno dei feedback più comuni e meno utili nelle corporate.',
      data:'Cecchi-Dimeglio et al., Harvard Law School 2017: le donne ricevono il 2.5x più feedback sulla personalità rispetto agli uomini.'
    }
  },
  piva:{
    id:'critic',
    sprite:'crit',
    dlg:{
      spk:'👻 Inner Critic',
      color:'#f76a6a',
      txt:'Chi ti credi di essere per farti pagare X€ al giorno? Ci sono persone con 10 anni di esperienza che chiedono meno. Forse stai sopravvalutando quello che vali.',
      chs:[
        {
          t:'La mia tariffa riflette il valore che creo, non quello che gli altri si fanno pagare.',
          out:'reframe'
        },
        {
          t:'Forse dovrei abbassare un po\'... per essere più competitiva.',
          out:'believe'
        },
        {
          t:'Chi sono i "altri" con cui mi confronto? Come so che la loro tariffa è il benchmark giusto?',
          out:'question'
        },
        {
          t:'Guardo quanti clienti hanno già accettato la mia tariffa senza discuterla — è un dato migliore di qualunque confronto astratto.',
          out:'track_record'
        }
      ]
    },
    outs:{
      reframe:{
        msg:'Hai ancorato il valore all\'output, non al mercato.',
        stat:{
          VOICE:2,
          CLARITY:1
        }
      },
      believe:{
        msg:'Hai ceduto al confronto verso il basso.',
        stat:{
          VOICE:-2,
          NETWORK:-1
        }
      },
      question:{
        msg:'Hai messo in discussione il benchmark stesso.',
        stat:{
          RADAR:2,
          CLARITY:1
        }
      },
      track_record:{
        msg:'Usi il tuo dato reale invece di un confronto astratto con sconosciuti.',
        stat:{
          RADAR:2,
          VOICE:1
        }
      }
    },
    db:{
      pat:'Il benchmark di pricing e il confronto verso il basso',
      ins:'Il confronto con chi si fa pagare meno è la trappola più comune per i nuovi freelance.',
      data:'Fiverr Professional Survey 2023: i freelance che aumentano la tariffa del 30% perdono in media il 10% dei clienti ma aumentano il revenue del 17%.'
    }
  },
  pa:{
    id:'critic',
    sprite:'crit',
    dlg:{
      spk:'👻 Inner Critic — voce 1',
      color:'#f76a6a',
      txt:'Sei sicura di essere abbastanza brava per fare ricerca di livello? Guarda gli altri nel tuo gruppo — pubblicano molto di più. Forse non sei tagliata per l\'accademia.',
      chs:[
        {
          t:'Quante pubblicazioni ho rispetto alla media del mio anno di dottorato? Devo guardare i dati reali, non la percezione.',
          out:'data'
        },
        {
          t:'Forse hai ragione. Non mi sento mai abbastanza brava.',
          out:'believe'
        },
        {
          t:'"Tagliata per l\'accademia" — chi ha stabilito questo criterio e su che basi?',
          out:'question'
        },
        {
          t:'Chiedo al mio supervisor un confronto onesto con la media reale del mio anno di dottorato, non solo con i colleghi più visibili del gruppo.',
          out:'baseline'
        }
      ]
    },
    outs:{
      data:{
        msg:'Vai ai dati reali invece di affidarti alla percezione.',
        stat:{
          CLARITY:2,
          RADAR:1
        }
      },
      believe:{
        msg:'Hai creduto alla voce senza evidenza.',
        stat:{
          VOICE:-1,
          CLARITY:-1
        }
      },
      question:{
        msg:'Questioniy il criterio stesso.',
        stat:{
          RADAR:2,
          VOICE:1
        }
      },
      baseline:{
        msg:'Confronti con la media reale, non con i colleghi più visibili.',
        stat:{
          CLARITY:2,
          RADAR:1
        }
      }
    },
    db:{
      pat:'La sindrome dell\'impostore nell\'accademia e il confronto con i "superstar"',
      ins:'Il confronto con i colleghi più prolifici è sistematicamente distorto.',
      data:'Psychotherapy Research 2020: il 70% dei ricercatori universitari riporta episodi di sindrome dell\'impostore.'
    }
  },
  pa2:{
    id:'critic2',
    sprite:'crit',
    dlg:{
      spk:'👻 Inner Critic — voce 2',
      color:'#f76a6a',
      txt:'Hai scelto di restare in Italia invece di andare all\'estero. Tutti i bravi ricercatori vanno all\'estero. Sei rimasta per paura, non per scelta.',
      chs:[
        {
          t:'"Tutti i bravi" è falso — ci sono ricercatori eccellenti che costruiscono carriere significative in Italia.',
          out:'counter'
        },
        {
          t:'Forse. Ma ho anche ragioni concrete per restare — e quelle ragioni sono legittime.',
          out:'own'
        },
        {
          t:'L\'internazionalizzazione è importante, ma non richiede necessariamente trasferirsi.',
          out:'reframe'
        },
        {
          t:'Guardo dove sono finiti davvero, dopo 10 anni, i colleghi che sono partiti — non solo la narrazione che "partire è sempre la scelta giusta".',
          out:'longterm'
        }
      ]
    },
    outs:{
      counter:{
        msg:'Contraddici con esempi concreti.',
        stat:{
          CLARITY:2,
          RADAR:1
        }
      },
      own:{
        msg:'Rivendichi le tue ragioni senza doverle giustificare.',
        stat:{
          VOICE:2,
          CLARITY:1
        }
      },
      reframe:{
        msg:'Ridefinisci l\'internazionalizzazione in modo che si adatti al tuo contesto.',
        stat:{
          CLARITY:1,
          SKILL:1
        }
      },
      longterm:{
        msg:'Guardi i dati reali sul lungo periodo invece della narrazione dominante.',
        stat:{
          RADAR:2,
          CLARITY:1
        }
      }
    },
    db:{
      pat:'Il "brain drain" e la legittimità di costruire una carriera in Italia',
      ins:'La narrativa "i bravi vanno all\'estero" è parzialmente vera ma anche una distorsione che scoraggia chi sceglie di restare.',
      data:'ISTAT 2023: il programma "Rientro dei Cervelli" (2020-2023) ha portato 3.200 ricercatori — di cui il 41% donne.'
    }
  }
};

export const WORLD_INTROS = {
  pmi:{title:'PMI DI SETTORE',emoji:'🏭',
    what:'Piccola o media impresa manifatturiera, food, energy. Meno di 250 dipendenti, spesso a conduzione familiare o semi-familiare.',
    role:'Come data/AI professional in una PMI sei spesso l\'unica persona con il tuo profilo. Lavori su problemi reali — qualità produzione, anomalie, forecast — ma con poca infrastruttura e zero mentorship tecnica.',
    pros:['Esposizione diretta al business reale','Autonomia e visibilità rapida','Impatto misurabile fin da subito'],
    cons:['Poco o nessun mentorship tecnico','Ruoli spesso mal definiti o sovrapposti','Sottoinvestimento in tool e dati'],
    color:'#ffb74d'},
  startup:{title:'STARTUP TECH',emoji:'🚀',
    what:'Early o growth stage. Da 5 a ~100 persone, prodotto digitale o AI, finanziamento VC o bootstrapped.',
    role:'Come data/AI professional in una startup sei al centro del prodotto. Velocità alta, stack moderno, responsabilità anticipate. Ma anche: scope creep, confini assenti, instabilità strutturale.',
    pros:['Tecnologie recenti, ritmo alto','Titoli ambiziosi e ownership reale','Prossimità al prodotto e alle decisioni'],
    cons:['Alta instabilità — molte chiudono entro 3 anni','Credit gap elevato per informalità dei processi','Confine labile tra "autonomia" e mancanza di struttura'],
    color:'#ce93d8'},
  consulenza:{title:'BIG CONSULENZA',emoji:'🏢',
    what:'Grandi società di consulenza (McKinsey, Deloitte, Accenture e simili). Struttura gerarchica, clienti diversificati, carriera definita.',
    role:'Come data/AI professional in consulenza lavori su progetti di 3-18 mesi per clienti diversi. Struttura e brand solidi, esposizione a molti settori — ma rischio di generalismo e criteri di valutazione opachi.',
    pros:['Brand sul CV che apre porte','Struttura di carriera chiara','Rete professionale ampia e multi-settore'],
    cons:['Rischio generalismo: tutto in superficie','Criteri di promozione spesso impliciti','Cultura orientata alle ore fatturabili'],
    color:'#4fc3f7'},
};

// ══════════════════════════════════════════════════════════════
// WORLD 3 — LARGE CORPORATE
// ══════════════════════════════════════════════════════════════

export const W3_NPCS = [
  {
    id:'hr_corp',
    sprite:'mgr',gender:'m',
    label:'HR & Performance',
    gridX:4,
    gridY:5,
    dlg:{
      spk:'👔 HR Director — GruppoTech SpA',
      color:'#4fc3f7',
      txt:'La tua valutazione annuale è domani. Qui usiamo un sistema a 9 box: performance vs potenziale. Il tuo manager ti ha messo in "high performance / medium potential". La ragione? "Non ti vedo ancora pronta per la leadership." Ho il feedback scritto qui, ma è... generico.',
      chs:[
        {
          t:'Posso vedere il feedback completo e i criteri usati per valutare il "potenziale"?',
          out:'ask_criteria'
        },
        {
          t:'Capisco. Cosa dovrei fare concretamente per migliorare la valutazione del potenziale?',
          out:'ask_actions'
        },
        {
          t:'Interessante. Come sono stati valutati i colleghi con performance simili alla mia?',
          out:'compare'
        },
        {
          t:'Chiedo di rivedere la valutazione tra 6 mesi con obiettivi di "potenziale" scritti e concordati insieme ora.',
          out:'roadmap'
        }
      ]
    },
    outs:{
      ask_criteria:{
        msg:'Hai chiesto i criteri. Il sistema di valutazione diventa visibile quando viene interrogato.',
        stat:{
          VOICE:2,
          CLARITY:1,
          RADAR:2
        }
      },
      ask_actions:{
        msg:'Approccio pratico — ma accetti criteri opachi.',
        stat:{
          SKILL:1
        }
      },
      compare:{
        msg:'Richiedi dati comparativi.',
        stat:{
          RADAR:3,
          VOICE:1
        }
      },
      roadmap:{
        msg:'Ti dai un criterio concreto e una scadenza per verificarlo.',
        stat:{
          CLARITY:2,
          VOICE:1
        }
      }
    },
    db:{
      pat:'Il sistema 9-box e i criteri opachi di "potenziale"',
      ins:'Il framework 9-box è diffuso nelle corporate ma i criteri di "potenziale" sono raramente definiti in modo oggettivo.',
      data:'McKinsey Women in the Workplace 2022: le donne vengono promosse in base alle performance dimostrate, gli uomini in base al potenziale percepito.'
    },
    type:'npc',
    required:true
  },
  {
    id:'network_corp',
    sprite:'col',gender:'m',
    label:'Networking Informale',
    gridX:8,
    gridY:4,
    dlg:{
      spk:'👨‍💼 Collega Senior — Davide',
      color:'#4fc3f7',
      txt:'Sai come funziona qui, vero? Le promozioni si decidono al campo da golf e nelle cene post-board. Io sono invitato perché conosco il VP da 10 anni. Non è il sistema migliore, lo so — ma è il sistema. Puoi entrare solo se qualcuno ti porta dentro.',
      chs:[
        {
          t:'Mi interessa capire come funziona questa rete. Come posso costruire connessioni reali qui?',
          out:'learn'
        },
        {
          t:'Questo sistema mi sembra escludente per definizione. Come lo cambiamo?',
          out:'challenge'
        },
        {
          t:'Capito. Posso chiederti di presentarmi al VP nel contesto giusto?',
          out:'direct_ask'
        },
        {
          t:'Costruisco relazioni parallele fuori da quei contesti specifici (progetti cross-team, community interne) invece di cercare di entrare nello stesso circolo.',
          out:'parallel'
        }
      ]
    },
    outs:{
      learn:{
        msg:'Stai mappando il sistema.',
        stat:{
          RADAR:2,
          NETWORK:2
        }
      },
      challenge:{
        msg:'Nomini il problema strutturale.',
        stat:{
          VOICE:2,
          RADAR:2
        }
      },
      direct_ask:{
        msg:'Chiedi direttamente.',
        stat:{
          NETWORK:3,
          VOICE:1
        }
      },
      parallel:{
        msg:'Costruisci una rete alternativa — più lenta a dare risultati visibili, ma non dipende dall\'essere invitata nel circolo giusto.',
        stat:{
          NETWORK:2,
          RADAR:1
        }
      }
    },
    db:{
      pat:'La rete informale maschile e il "golf club problem"',
      ins:'Le reti professionali informali nelle large corporate tendono a essere omogenee per genere e background.',
      data:'Catalyst 2021: le donne manager hanno reti professionali il 25% più piccole degli uomini a parità di livello.'
    },
    type:'npc',
    required:false
  },
  {
    id:'sister_corp',
    sprite:'sis',gender:'f',
    label:'Sala Riunioni B',
    gridX:6,
    gridY:8,
    dlg:{
      spk:'❤️ Francesca — Senior Director (Alleata)',
      color:'#e53935',
      txt:'Ho lavorato 12 anni qui prima di capire come funziona davvero. Ascolta: il mentore ti consiglia. Lo sponsor spende capitale politico per te — ti nomina nelle stanze dove non sei presente. Io posso essere la tua sponsor. Ma ho bisogno che tu sia visibile.',
      chs:[
        {
          t:'Questo ha senso. Come strutturiamo questo accordo in modo professionale?',
          out:'structure'
        },
        {
          t:'Grazie. Posso fare lo stesso per te e per altre colleghe?',
          out:'reciprocal'
        },
        {
          t:'Apprezzo molto. Ma voglio capire: cosa guadagni tu da questo?',
          out:'honest'
        },
        {
          t:'Accetto, ma le chiedo anche cosa dovrei evitare di fare per non comprometterla nel proporsi per me.',
          out:'protect'
        }
      ]
    },
    outs:{
      structure:{
        msg:'Stai costruendo una relazione professionale solida.',
        stat:{
          NETWORK:2,
          CLARITY:1
        }
      },
      reciprocal:{
        msg:'Pensi in modo sistemico.',
        stat:{
          NETWORK:3,
          RADAR:2
        }
      },
      honest:{
        msg:'Domanda legittima che rafforza la relazione.',
        stat:{
          NETWORK:2,
          VOICE:1
        }
      },
      protect:{
        msg:'Pensi alla relazione come reciproca, non solo a senso unico.',
        stat:{
          CLARITY:1,
          NETWORK:2
        }
      }
    },
    db:{
      pat:'Mentore vs Sponsor: una distinzione che cambia le carriere',
      ins:'Il mentore consiglia, il coach guida, lo sponsor agisce. Le donne hanno più mentori e meno sponsor degli uomini.',
      data:'Hewlett et al., HBR 2010: le donne con sponsor hanno il 22% in più di probabilità di essere promosse.'
    },
    type:'sis',
    required:true
  },
  {
    id:'maternity',
    sprite:'col',gender:'f',
    label:'Meeting Strategico',
    gridX:10,
    gridY:7,
    dlg:{
      spk:'👩‍💼 Manager — Revisione Team',
      color:'#4fc3f7',
      txt:'Dobbiamo discutere i piani per il prossimo anno. Sento che sei in un momento... personale. Vogliamo assicurarci che tu possa dedicarti al progetto importante in arrivo. Ho pensato di assegnarlo a Marco, almeno per ora. È solo per supportarti.',
      chs:[
        {
          t:'Sono pienamente disponibile per il progetto. Possiamo discutere su quale base stai prendendo questa decisione?',
          out:'push_back'
        },
        {
          t:'Apprezzo il pensiero, ma preferisco essere io a dirmi quando ho bisogno di supporto.',
          out:'agency'
        },
        {
          t:'Questa decisione sembra basata su assunzioni sulla mia disponibilità. Possiamo parlarne apertamente?',
          out:'name_it'
        },
        {
          t:'Chiedo di essere comunque coinvolta nel progetto, anche in modo parziale, invece di essere esclusa del tutto.',
          out:'partial'
        }
      ]
    },
    outs:{
      push_back:{
        msg:'Hai richiesto trasparenza sui criteri.',
        stat:{
          VOICE:2,
          CLARITY:1
        }
      },
      agency:{
        msg:'Hai rivendicato il diritto di definire i tuoi limiti da sola.',
        stat:{
          VOICE:2,
          RADAR:1
        }
      },
      name_it:{
        msg:'Hai nominato il meccanismo — la "protezione" non richiesta.',
        stat:{
          RADAR:3,
          VOICE:2
        }
      },
      partial:{
        msg:'Ottieni un coinvolgimento parziale invece di un\'esclusione totale.',
        stat:{
          VOICE:1,
          ENERGY:1
        }
      }
    },
    db:{
      pat:'La maternità penalty e la "protezione" non richiesta',
      ins:'La maternità penalty si manifesta spesso come decisioni "protettive" non richieste.',
      data:'Correll, Benard & Paik (AJS, 2007): le madri vengono valutate il 10% meno competenti a CV identico.'
    },
    type:'npc',
    required:true
  },
  {
    id:'tech_corp',
    sprite:'tech',
    label:'Data Platform Team',
    gridX:12,
    gridY:5,
    dlg:{
      spk:'💻 Scenario Tecnico — Corporate',
      color:'#f7c46a',
      txt:'Hai 5 stakeholder che vogliono usare lo stesso modello di forecast per scopi diversi: Finance vuole conservatorismo, Sales vuole ottimismo, Operations vuole precisione, CEO vuole un numero solo. Come gestisci?',
      chs:[
        {
          t:'Costruisco un modello con intervalli di confidenza e creo view diverse per ogni stakeholder — stesso modello, output adattati.',
          out:'intervals'
        },
        {
          t:'Facilito un workshop con tutti gli stakeholder per allineare prima le metriche di successo, poi costruisco.',
          out:'align_first'
        },
        {
          t:'Documento per iscritto le assunzioni richieste da ciascuno e le implicazioni tecniche. La decisione finale è del business, non mia.',
          out:'document'
        },
        {
          t:'Costruisco un solo numero di consenso (una media pesata) invece di più view separate.',
          out:'average'
        }
      ]
    },
    outs:{
      intervals:{
        msg:'Soluzione tecnica elegante.',
        stat:{
          SKILL:2,
          CLARITY:1
        }
      },
      align_first:{
        msg:'Problem framing prima del solving.',
        stat:{
          SKILL:1,
          NETWORK:1,
          RADAR:2
        }
      },
      document:{
        msg:'Separare responsabilità tecnica da decisione di business è professionalità avanzata.',
        stat:{
          SKILL:1,
          CLARITY:2,
          VOICE:1
        }
      },
      average:{
        msg:'Più semplice da comunicare, ma rischia di scontentare tutti allo stesso modo.',
        stat:{
          SKILL:1
        }
      }
    },
    db:{
      pat:'Il data scientist come arbitro politico — e come non esserlo',
      ins:'Nelle large corporate il data scientist viene spesso usato per "oggettivare" decisioni già prese.',
      data:'Gartner 2023: il 67% dei data scientist nelle corporate riporta di aver ricevuto pressioni per modificare risultati o assunzioni.'
    },
    type:'tech',
    required:true
  },
];

export const W4_NPCS = [
  {
    id:'primo_cliente',
    sprite:'mgr',gender:'m',
    label:'Prima call cliente',
    gridX:4,
    gridY:5,
    dlg:{
      spk:'🤝 Potenziale Cliente — Primo Contatto',
      color:'#6af7c8',
      txt:'Il tuo profilo è interessante. Abbiamo bisogno di qualcuno per un progetto AI per 3 mesi. Quanto costa lavorare con te? Ovviamente siamo una startup, non abbiamo budget enterprise. Pensavamo a qualcosa di flessibile — magari con una quota di successo.',
      chs:[
        {
          t:'La mia tariffa giornaliera è X€. Per 3 mesi full-time è Y. Possiamo discutere la struttura, non il valore del lavoro.',
          out:'hold_price'
        },
        {
          t:'Dipende dal progetto. Possiamo fare una call di discovery gratuita per capire lo scope?',
          out:'discovery'
        },
        {
          t:'Capisco il contesto startup. Cosa intendi per "quota di successo"? Ho bisogno di capire i rischi che mi chiedi di condividere.',
          out:'ask_terms'
        },
        {
          t:'Chiedo referenze di altri clienti con cui hanno lavorato con questo tipo di accordo, prima di valutare se accettarlo.',
          out:'references'
        }
      ]
    },
    outs:{
      hold_price:{
        msg:'Hai ancorato il prezzo senza scusarti.',
        stat:{
          VOICE:2,
          NETWORK:1
        }
      },
      discovery:{
        msg:'Proteggi il tuo tempo con una struttura.',
        stat:{
          CLARITY:1
        }
      },
      ask_terms:{
        msg:'Hai chiesto chiarezza sui rischi prima di accettare.',
        stat:{
          RADAR:2,
          CLARITY:1,
          VOICE:1
        }
      },
      references:{
        msg:'Verifichi come si sono comportati con altri prima di esporti tu.',
        stat:{
          RADAR:2,
          CLARITY:1
        }
      }
    },
    db:{
      pat:'Il pricing del proprio lavoro e il bias di svalutazione',
      ins:'Le freelance donna quotano in media il 18-26% in meno degli uomini per servizi equivalenti.',
      data:'Fiverr & Payoneer Global Freelancer Survey 2023: le freelance donna guadagnano in media il 22% in meno degli uomini a parità di categoria e rating.'
    },
    type:'npc',
    required:true
  },
  {
    id:'scope_creep',
    sprite:'col',gender:'m',
    label:'Progetto in corso',
    gridX:8,
    gridY:4,
    dlg:{
      spk:'📱 Cliente — WhatsApp alle 22:30',
      color:'#6af7c8',
      txt:'Ciao! Scusa l\'orario. Domani abbiamo una demo con gli investitori. Avremmo bisogno di aggiungere anche un\'analisi predittiva al dashboard — è solo una cosa veloce. Puoi farlo stanotte? Sei sempre così disponibile, sei fantastica!',
      chs:[
        {
          t:'Non lavoro fuori dall\'orario concordato. Possiamo pianificare questa aggiunta come una nuova richiesta con tempo e compenso adeguati.',
          out:'boundary'
        },
        {
          t:'Posso valutare cosa è fattibile domani mattina presto, ma è fuori dallo scope originale — ci sarà un extra.',
          out:'partial'
        },
        {
          t:'Ok, ci provo. Ma dobbiamo poi parlare di come gestiamo le richieste urgenti.',
          out:'accept'
        },
        {
          t:'Rispondo la mattina dopo, alle mie ore di lavoro concordate, anche se la demo è già passata.',
          out:'hard_boundary'
        }
      ]
    },
    outs:{
      boundary:{
        msg:'Hai tenuto il confine in modo professionale.',
        stat:{
          VOICE:2,
          ENERGY:2
        }
      },
      partial:{
        msg:'Compromesso ragionevole.',
        stat:{
          ENERGY:1,
          CLARITY:-1
        }
      },
      accept:{
        msg:'Hai ceduto. Il cliente ha imparato che funziona.',
        stat:{
          ENERGY:-2,
          VOICE:-1
        }
      },
      hard_boundary:{
        msg:'Il confine più netto possibile — ma può costarti la relazione con questo cliente specifico.',
        stat:{
          ENERGY:2,
          VOICE:1
        }
      }
    },
    db:{
      pat:'Lo scope creep e i confini professionali nel lavoro autonomo',
      ins:'Lo scope creep è uno dei pattern più costosi per chi lavora in autonomia.',
      data:'Freelancers Union Annual Survey 2023: il 77% dei freelance riporta scope creep regolare.'
    },
    type:'npc',
    required:true
  },
  {
    id:'sister_piva',
    sprite:'sis',gender:'f',
    label:'Community Online',
    gridX:6,
    gridY:8,
    dlg:{
      spk:'❤️ Sara — Freelance Senior AI (Alleata)',
      color:'#e53935',
      txt:'Ho costruito una rete di 12 freelance donna in AI con cui condivido clienti, referenze, e pricing. Quando un cliente mi paga poco o si comporta male, lo segnalo alle altre. Quando ho troppo lavoro, passo i contatti. È sopravvivenza collettiva. Vuoi entrare?',
      chs:[
        {
          t:'Sì, assolutamente. Come posso contribuire attivamente alla rete?',
          out:'join_active'
        },
        {
          t:'Mi interessa molto. Come gestite la condivisione delle informazioni sui clienti — c\'è una policy?',
          out:'ask_structure'
        },
        {
          t:'Sono un po\' in difficoltà ad aprirmi — ho paura della concorrenza tra di noi.',
          out:'fear'
        },
        {
          t:'Chiedo di partecipare inizialmente solo come osservatrice, per capire le dinamiche prima di condividere informazioni sui miei clienti.',
          out:'observe'
        }
      ]
    },
    outs:{
      join_active:{
        msg:'Entri nella rete con intenzione di dare, non solo ricevere.',
        stat:{
          NETWORK:3,
          ENERGY:1
        }
      },
      ask_structure:{
        msg:'Vuoi capire le regole prima di impegnarti.',
        stat:{
          NETWORK:2,
          CLARITY:1
        }
      },
      fear:{
        msg:'La paura della concorrenza è reale — ma le freelance che collaborano guadagnano di più.',
        stat:{
          RADAR:2
        }
      },
      observe:{
        msg:'Un passo più lento verso la fiducia reciproca, ma prudente.',
        stat:{
          CLARITY:2
        }
      }
    },
    db:{
      pat:'La rete come infrastruttura di sopravvivenza per il lavoro autonomo',
      ins:'Per chi lavora in autonomia, la rete professionale non è un optional — è infrastruttura.',
      data:'Leatherbee & Eesley (2014): le imprenditrici con reti professionali dense hanno probabilità di sopravvivenza dell\'impresa il 34% più alta nei primi 3 anni.'
    },
    type:'sis',
    required:true
  },
  {
    id:'investitori',
    sprite:'mgr',gender:'m',
    label:'Pitch Meeting',
    gridX:10,
    gridY:6,
    dlg:{
      spk:'💼 Investitore — VC Fund',
      color:'#6af7c8',
      txt:'Interessante progetto. Ma ho qualche preoccupazione: sei sola, senza co-founder tecnico. Come scali? E scusa — hai esperienza di vendita? Perché per crescere serve qualcuno che sappia vendere.',
      chs:[
        {
          t:'Sono co-founder tecnica e business. Ho già X clienti paganti. Le domande che mi stai facendo le faresti a un fondatore uomo con il mio profilo?',
          out:'challenge'
        },
        {
          t:'Ho un advisor tecnico senior. La trazione parla: X€ ARR in Y mesi, zero churn. Possiamo parlare dei numeri?',
          out:'metrics'
        },
        {
          t:'Capisco la preoccupazione sul team. Sto attivamente costruendo il team — posso mostrarti i profili che sto valutando.',
          out:'team'
        },
        {
          t:'Rispondo direttamente con un cliente che ho chiuso io stessa di recente, come prova pratica di capacità commerciale.',
          out:'proof'
        }
      ]
    },
    outs:{
      challenge:{
        msg:'Hai nominato il doppio standard direttamente.',
        stat:{
          VOICE:2,
          RADAR:2
        }
      },
      metrics:{
        msg:'Hai spostato la conversazione sui dati.',
        stat:{
          CLARITY:2,
          SKILL:1
        }
      },
      team:{
        msg:'Risposta solida — ma hai accettato il framing del problema.',
        stat:{
          CLARITY:1
        }
      },
      proof:{
        msg:'Rispondi con un fatto concreto invece che con una rassicurazione.',
        stat:{
          SKILL:1,
          VOICE:2
        }
      }
    },
    db:{
      pat:'Il gender gap nel funding e i criteri di valutazione asimmetrici',
      ins:'Le founder donna ricevono domande diverse nei pitch rispetto agli uomini: più domande "preventive" vs domande "promozionali".',
      data:'Pitchbook 2023: solo il 2.1% del VC europeo è andato a team tutti-femminili, il 15.6% a team misti.'
    },
    type:'npc',
    required:false
  },
  {
    id:'tech_piva',
    sprite:'tech',
    label:'Proposta Tecnica',
    gridX:13,
    gridY:8,
    dlg:{
      spk:'💻 Scenario Tecnico — P.IVA',
      color:'#f7c46a',
      txt:'Un cliente ti chiede una proposta per "implementare AI nel loro processo di selezione CV". Budget: 15k€. Timeline: 6 settimane. Non hanno dati storici strutturati. Cosa proponi?',
      chs:[
        {
          t:'Con questi vincoli, propongo un sistema rule-based + NLP leggero per un primo filtro, con revisione umana obbligatoria.',
          out:'pragmatic'
        },
        {
          t:'Prima di proporre qualsiasi soluzione tecnica, devo capire cosa intendono per "migliorare la selezione".',
          out:'frame_first'
        },
        {
          t:'Devo essere diretta: l\'AI nella selezione CV senza dati storici e senza audit di bias è un rischio legale e reputazionale per loro.',
          out:'honest_risk'
        },
        {
          t:'Propongo prima un audit gratuito del loro processo attuale di selezione, per capire dove l\'AI aiuterebbe davvero.',
          out:'free_audit'
        }
      ]
    },
    outs:{
      pragmatic:{
        msg:'Soluzione onesta e fattibile nei vincoli.',
        stat:{
          SKILL:2,
          CLARITY:1
        }
      },
      frame_first:{
        msg:'Stai proteggendo il cliente da una soluzione al problema sbagliato.',
        stat:{
          SKILL:1,
          RADAR:2,
          CLARITY:2
        }
      },
      honest_risk:{
        msg:'Massima onestà professionale.',
        stat:{
          VOICE:2,
          RADAR:2,
          NETWORK:1
        }
      },
      free_audit:{
        msg:'Costruisci credibilità con un investimento — ma è tempo non pagato da bilanciare con gli altri progetti.',
        stat:{
          SKILL:1,
          NETWORK:1
        }
      }
    },
    db:{
      pat:'Il bias algoritmico nelle HR tech e la responsabilità del consulente',
      ins:'I sistemi di screening CV addestrati su dati storici tendono a replicare i bias di chi ha assunto in passato.',
      data:'Amazon ha ritirato il suo sistema di screening CV nel 2018 dopo aver scoperto che penalizzava sistematicamente le candidate donne.'
    },
    type:'tech',
    required:true
  },
];

export const WORLD_DEFS_NEW = {
  corporate:{label:'WORLD 3 · LARGE CORPORATE',palette:{
      floor:661520,
      wall:1321496,
      accent:1985064,
      bg:331272
    },exits:[
      {
        id:'piva',
        label:'P.IVA / FOUNDER →',
        color:7010248,
        x:0.88,
        y:0.55
      }
    ],npcs:W3_NPCS},
  piva:{label:'WORLD 4 · P.IVA & FOUNDER',palette:{
      floor:531992,
      wall:1060904,
      accent:1593408,
      bg:265996
    },exits:[
      {
        id:'end_piva',
        label:'FINE →',
        color:7010248,
        x:0.88,
        y:0.55
      }
    ],npcs:W4_NPCS},
};

export const WORLD_INTROS_NEW = {
  corporate:{title:'LARGE CORPORATE',emoji:'🏗️',
    what:'Grandi aziende con più di 1000 dipendenti — manifatturiero, finance, telco, energy. Struttura gerarchica complessa, budget importanti, processi consolidati.',
    role:'Come data/AI professional in una large corporate hai accesso a dati reali su larga scala e risorse che le PMI non hanno. Ma le decisioni sono lente, la politica interna è reale, e le opportunità dipendono spesso da chi ti conosce.',
    pros:['Dati e infrastruttura reale','Stabilità e benefit','Possibilità di specializzazione profonda'],
    cons:['Burocrazia e lentezza decisionale','Avanzamento spesso per anzianità o rete','Criteri di "potenziale" spesso opachi e distorti'],
    color:'#4fc3f7'},
  piva:{title:'P.IVA & FOUNDER',emoji:'💡',
    what:'Lavoro autonomo come consulente, freelance specializzata, o founder di una micro-impresa AI. Massima autonomia, massima responsabilità.',
    role:'Sei tu il prodotto, il team di vendita, e l\'HR. Le tue competenze tech diventano un business. NETWORK è la tua risorsa più preziosa — più del codice che sai scrivere.',
    pros:['Autonomia totale su progetti e clienti','Tariffa potenzialmente più alta','Costruisci qualcosa di tuo'],
    cons:['Instabilità del reddito','Isolamento — nessun team, nessuna struttura','Ogni confine professionale lo devi proteggere tu'],
    color:'#6af7c8'},
};

export const INNER_CRITICS_NEW = {
  corporate:{id:'critic',sprite:'crit',
    dlg:{spk:'👻 Inner Critic',color:'#f76a6a',
      txt:'Hai sentito? Ti hanno messo "medium potential". Dopo tutto quello che hai fatto. Forse non sei il tipo di persona che "brilla" nei contesti strutturati. Forse non hai il carattere giusto per arrivare in alto qui.',
      chs:[
        {t:'"Medium potential" secondo criteri che non mi sono stati spiegati. Questo non è un dato — è un\'opinione.',out:'reframe'},
        {t:'Forse hanno ragione. Non mi vedo come una "leader".',out:'believe'},
        {t:'Cosa succederebbe se chiedessi esattamente su cosa sono stata valutata?',out:'action'},
      ]},
    outs:{
      reframe:{msg:'Hai distinto tra valutazione e verità.',stat:{RADAR:2,CLARITY:1}},
      believe:{msg:'Hai internalizzato un\'opinione come fatto.',stat:{VOICE:-1,CLARITY:-1}},
      action: {msg:'Trasformi l\'ansia in azione concreta.',stat:{VOICE:1,CLARITY:2}},
    },
    db:{pat:'Il "medium potential" e il bias nelle valutazioni di leadership',
      ins:'"Non la vedo come una leader" è uno dei feedback più comuni e meno utili nelle corporate.',
      data:'Cecchi-Dimeglio et al., Harvard Law School 2017: le donne ricevono il 2.5x più feedback sulla personalità rispetto agli uomini.'}},
  piva:{id:'critic',sprite:'crit',
    dlg:{spk:'👻 Inner Critic',color:'#f76a6a',
      txt:'Chi ti credi di essere per farti pagare X€ al giorno? Ci sono persone con 10 anni di esperienza che chiedono meno. Forse stai sopravvalutando quello che vali.',
      chs:[
        {t:'La mia tariffa riflette il valore che creo, non quello che gli altri si fanno pagare.',out:'reframe'},
        {t:'Forse dovrei abbassare un po\'... per essere più competitiva.',out:'believe'},
        {t:'Chi sono i "altri" con cui mi confronto? Come so che la loro tariffa è il benchmark giusto?',out:'question'},
      ]},
    outs:{
      reframe: {msg:'Hai ancorato il valore all\'output, non al mercato.',stat:{VOICE:2,CLARITY:1}},
      believe: {msg:'Hai ceduto al confronto verso il basso.',stat:{VOICE:-2,NETWORK:-1}},
      question:{msg:'Hai messo in discussione il benchmark stesso.',stat:{RADAR:2,CLARITY:1}},
    },
    db:{pat:'Il benchmark di pricing e il confronto verso il basso',
      ins:'Il confronto con chi si fa pagare meno è la trappola più comune per i nuovi freelance.',
      data:'Fiverr Professional Survey 2023: i freelance che aumentano la tariffa del 30% perdono in media il 10% dei clienti ma aumentano il revenue del 17%.'}},
};

export const W5_NPCS = [
  {id:'pa_concorso',sprite:'mgr',gender:'f',label:'Commissione Concorso',type:'npc',required:true,gridX:4,gridY:5,
    dlg:{spk:'👔 Presidente di Commissione — Concorso PA',color:'#f48fb1',
      txt:'Il suo profilo è ottimo. Peccato per la carriera discontinua — vedo un anno di gap nel 2021. In un concorso pubblico la continuità conta. Comunque ha superato la prova scritta, questa è l\'orale. Ci dica: perché vuole lavorare nel pubblico invece che nel privato? Non è un passo indietro?',
      chs:[
        {t:'Il gap del 2021 è un periodo di formazione che posso documentare. E "passo indietro" dipende da dove si vuole arrivare — io voglio costruire AI per il bene pubblico.',out:'direct'},
        {t:'Il settore pubblico offre stabilità e impatto su scala che il privato non può dare. Questa è la mia scelta consapevole.',out:'positive'},
        {t:'Posso chiederle cosa intende per "continuità"? Se il criterio riguarda l\'esperienza rilevante, posso mostrare che il 2021 è stato formativo.',out:'probe'},
        {t:'Chiedo alla commissione quali altri candidati hanno gap simili nel percorso, per capire se il criterio è applicato in modo uniforme.',out:'uniform'},
      ]},
    outs:{
      direct:  {msg:'Risposta diretta che affronta entrambe le domande.',stat:{VOICE:2,CLARITY:1}},
      positive:{msg:'Framing positivo senza difendersi.',stat:{CLARITY:2,ENERGY:1}},
      probe:   {msg:'Chiedi di specificare il criterio.',stat:{RADAR:2,VOICE:1}},
      uniform: {msg:'Verifichi se il criterio è applicato in modo uniforme, non solo a te.',stat:{RADAR:2,VOICE:1}},
    },
    db:{pat:'Il "career gap" e il bias nei concorsi pubblici',
      ins:'I gap di carriera nelle donne sono spesso periodi di cura, maternità, o formazione — non inattività.',
      data:'ISTAT 2023: le donne rappresentano il 51% dei dipendenti pubblici italiani ma solo il 22% dei dirigenti di prima fascia.'}},
  {id:'pa_burocrazia',sprite:'col',gender:'f',label:'Ufficio IT',type:'npc',required:true,gridX:8,gridY:4,
    dlg:{spk:'🖥️ Responsabile IT — Ente Pubblico',color:'#f48fb1',
      txt:'Benvenuta. Il tuo progetto AI per l\'analisi dei dati catastali è ottimo in teoria. In pratica: i dati sono su tre sistemi legacy degli anni \'90, non c\'è API, e per accedere ai database serve una delibera della giunta. I tempi medi sono 8-14 mesi.',
      chs:[
        {t:'Parto da un dataset campione che posso ottenere manualmente — così costruisco il proof of concept mentre aspetto la delibera.',out:'poc'},
        {t:'Esiste un modo per accelerare la delibera? Posso coinvolgere un referente politico per aumentare la priorità?',out:'stakeholder'},
        {t:'Mappo i tre sistemi e identifico i dati che posso usare senza delibera.',out:'map'},
        {t:'Comincio a lavorare sulla parte di analisi che non richiede quei dati (letteratura, benchmark di casi simili), in parallelo alla delibera.',out:'parallel'},
      ]},
    outs:{
      poc:        {msg:'Proof of concept in parallelo alla burocrazia.',stat:{SKILL:2,CLARITY:1}},
      stakeholder:{msg:'Usi i canali politici come acceleratore.',stat:{NETWORK:2,RADAR:1}},
      map:        {msg:'Cerchi prima cosa è già accessibile.',stat:{SKILL:1,RADAR:1,CLARITY:2}},
      parallel:   {msg:'Non aspetti passivamente — avanzi su ciò che è già in tuo controllo.',stat:{SKILL:1,CLARITY:2}},
    },
    db:{pat:'L\'innovazione nella PA tra burocrazia e legacy system',
      ins:'La PA italiana è caratterizzata da sistemi informativi frammentati, normative di accesso ai dati complesse, e processi decisionali lenti.',
      data:'AgID 2023: il 67% degli enti pubblici italiani ha sistemi informativi con più di 15 anni di vita.'}},
  {id:'pa_sister',sprite:'sis',gender:'f',label:'Mensa universitaria',type:'sis',required:true,gridX:6,gridY:8,
    dlg:{spk:'❤️ Prof.ssa Martina Conti — Ricercatrice (Alleata)',color:'#e53935',
      txt:'Ho visto la tua proposta di ricerca. È ottima. Ascolta — nell\'accademia italiana il networking conta quanto le pubblicazioni, forse di più. Ho costruito un gruppo informale di ricercatrici che si supportano vicendevolmente nei bandi, nelle peer review, e nella visibilità. Vuoi entrare?',
      chs:[
        {t:'Sì, con piacere. Come funziona il supporto reciproco nelle peer review?',out:'learn'},
        {t:'Sono interessata. Posso portare una competenza AI applicata che forse manca al gruppo?',out:'contribute'},
        {t:'Entra. E conosco una dottoranda bravissima che dovrebbe assolutamente essere nel gruppo.',out:'expand'},
        {t:'Chiedo prima quanto tempo richiede realisticamente partecipare attivamente al gruppo, per non sovraccaricarmi.',out:'time_check'},
      ]},
    outs:{
      learn:    {msg:'Capisci il meccanismo prima di entrare.',stat:{NETWORK:2,CLARITY:1}},
      contribute:{msg:'Porti valore specifico.',stat:{NETWORK:2,SKILL:1}},
      expand:   {msg:'Includi chi è più all\'inizio.',stat:{NETWORK:3,RADAR:1}},
      time_check:{msg:'Valuti il carico prima di impegnarti.',stat:{CLARITY:2}},
    },
    db:{pat:'Le reti di ricercatrici come antidoto alla struttura informale accademica',
      ins:'L\'accademia italiana è caratterizzata da reti di "barone" che controllano accesso a posizioni, bandi, e pubblicazioni.',
      data:'Interuniversity Consortium for Political and Social Research 2022: le donne rappresentano il 37% dei ricercatori universitari italiani ma solo il 23% dei professori associati.'}},
  {id:'pa_precariato',sprite:'col',gender:'m',label:'Corridoio università',type:'npc',required:true,gridX:10,gridY:6,
    dlg:{spk:'🎓 Collega — Ricercatore a contratto',color:'#f48fb1',
      txt:'Sei al quarto anno di post-doc? Anch\'io. Guarda, la realtà è questa: in Italia ci sono 28 posti da professore associato all\'anno in informatica. Siamo in 1400 post-doc. Il sistema è costruito per tenerti precaria il più a lungo possibile. Io sto guardando fuori dall\'accademia. Tu?',
      chs:[
        {t:'Ci penso seriamente. Hai già esplorato dove i profili accademici sono più valorizzati — ricerca industriale, policy, think tank?',out:'explore'},
        {t:'Non voglio ancora rinunciare all\'accademia. Ma ho iniziato a costruire visibilità esterna per avere opzioni.',out:'hedge'},
        {t:'Il problema è strutturale. Sto partecipando a un gruppo che lavora per riformare il sistema di reclutamento accademico.',out:'systemic'},
        {t:'Faccio entrambe le cose in parallelo: continuo a candidarmi in accademia, ma tengo aggiornato anche un profilo per ruoli industriali o di policy.',out:'both'},
      ]},
    outs:{
      explore: {msg:'Con 28 posti l\'anno e 1400 post-doc, esplorare alternative concrete ora è la mossa più realistica per la tua situazione specifica, non una resa.',stat:{CLARITY:2,RADAR:1,NETWORK:1}},
      hedge:   {msg:'Costruisci opzioni esterne mantenendo la strada accademica.',stat:{NETWORK:1,CLARITY:2}},
      systemic:{msg:'Impegnarti per riformare un sistema che richiede anni per cambiare è un contributo reale, ma non risolve la tua precarietà nel frattempo — un investimento a lungo termine con un costo immediato di tempo ed energia.',stat:{VOICE:1,RADAR:2}},
      both:    {msg:'La strategia più completa, ma richiede di gestire due percorsi insieme.',stat:{CLARITY:1,NETWORK:1,RADAR:1}},
    },
    db:{pat:'Il precariato accademico strutturale e la trappola del post-doc',
      ins:'L\'Italia ha il sistema di reclutamento accademico più lento e precario d\'Europa.',
      data:'MUR 2023: il tasso di conversione da dottorato a posizione permanente in informatica è dell\'8.2% in Italia vs 34% in Germania.'}},
  {id:'pa_tech',sprite:'tech',label:'Lab ricerca',type:'tech',required:true,gridX:12,gridY:8,
    dlg:{spk:'💻 Sfida Tecnica — PA/Ricerca',color:'#f7c46a',
      txt:'Stai sviluppando un sistema AI per supportare i medici di base nella diagnosi precoce del diabete tipo 2, usando dati del SSN. Come gestisci la pipeline dal punto di vista etico, tecnico, e normativo?',
      chs:[
        {t:'Inizio dal framework normativo: GDPR articolo 22 (decisioni automatizzate in ambito medico), AI Act categoria ad alto rischio, e consenso informato paziente.',out:'regulatory'},
        {t:'Il sistema deve essere progettato come "decision support" con supervisione medica obbligatoria — mai come sistema autonomo.',out:'design'},
        {t:'Coinvolgo medici di base nel design del sistema fin dall\'inizio — i falsi negativi qui sono più pericolosi dei falsi positivi.',out:'clinical'},
        {t:'Prima di tutto verifico se esiste già un comitato etico che deve approvare il progetto, e lo coinvolgo da subito.',out:'ethics_board'},
      ]},
    outs:{
      regulatory:{msg:'Framework normativo come punto di partenza.',stat:{SKILL:1,RADAR:2,CLARITY:1}},
      design:    {msg:'"Decision support" con supervisione umana.',stat:{SKILL:2,CLARITY:1,VOICE:1}},
      clinical:  {msg:'I medici definiscono la soglia clinica — tu costruisci il sistema.',stat:{SKILL:1,NETWORK:1,RADAR:2}},
      ethics_board:{msg:'Coinvolgi il presidio istituzionale corretto fin dall\'inizio.',stat:{RADAR:2,CLARITY:1}},
    },
    db:{pat:'L\'AI in ambito medico: responsabilità, normativa, e supervisione umana',
      ins:'I sistemi AI in ambito medico sono classificati come "alto rischio" nell\'EU AI Act.',
      data:'Lancet Digital Health 2023: i modelli AI per la diagnosi del diabete tipo 2 mostrano AUC 0.82-0.91 su dataset di validazione.'}},
];

export const PA_ADDITIONS = [
  {id:'pa_pubblicazioni',sprite:'mgr',gender:'m',label:'Meeting gruppo ricerca',type:'npc',required:false,gridX:3,gridY:8,
    dlg:{spk:'👨‍🏫 Professore Ordinario — Dipartimento',color:'#f48fb1',
      txt:'Ho letto il tuo paper. È buono. Sai, se lo pubblicassimo su una rivista più "popolare" avremmo più impatto — ma meno h-index. Oppure puntiamo a Nature Machine Intelligence, ma con i tempi di revisione ci vorranno 18 mesi.',
      chs:[
        {t:'Per il mio percorso accademico l\'h-index conta — ma voglio capire se i revisori di Nature MI sono un percorso realistico per questo paper.',out:'strategic'},
        {t:'Preferirei una preprint su arXiv adesso + sottomissione a una rivista aperta.',out:'open'},
        {t:'Dipende da dove sono nel percorso. Adesso ho bisogno di pubblicazioni che contino per la valutazione ANVUR.',out:'pragmatic'},
        {t:'Chiedo al professore quale scelta ha fatto lui stesso in una situazione simile, e perché.',out:'precedent'},
      ]},
    outs:{
      strategic:{msg:'Valuti il percorso realistico invece di inseguire il massimo astratto.',stat:{CLARITY:2,RADAR:1}},
      open:     {msg:'Open science: accessibilità immediata e citazioni più rapide.',stat:{SKILL:1,NETWORK:1}},
      pragmatic:{msg:'Pragmatismo ANVUR: conosci le regole del gioco.',stat:{CLARITY:1,RADAR:2}},
      precedent:{msg:'Impari da un precedente reale invece di ragionare in astratto.',stat:{NETWORK:1,RADAR:2}},
    },
    db:{pat:'Publish or perish e le metriche bibliometriche nell\'accademia italiana',
      ins:'"Publish or perish" descrive la pressione accademica a pubblicare costantemente su riviste ad alto impact factor.',
      data:'Ioannidis et al., PLOS Biology 2020: il 94% dell\'impatto scientifico è concentrato nel top 2% dei ricercatori.'}},
  {id:'pa_trasferimento',sprite:'col',gender:'m',label:'Spin-off meeting',type:'npc',required:false,gridX:12,gridY:4,
    dlg:{spk:'🏢 Technology Transfer Officer',color:'#f48fb1',
      txt:'Il tuo algoritmo ha potenziale commerciale. Potremmo creare uno spin-off universitario. Ma attenzione: la IP appartiene all\'università, tu avresti una quota minoritaria. I tempi per approvare lo spin-off sono 12-18 mesi.',
      chs:[
        {t:'Prima di procedere ho bisogno di capire: quali diritti mantengo sull\'algoritmo? Posso continuare a fare ricerca su di esso?',out:'ip'},
        {t:'"Preferisce non mettere i ricercatori alla guida" — posso chiederle perché? E se trovassi io un co-founder CEO, cambierebbe qualcosa?',out:'challenge'},
        {t:'Capisco la struttura. Posso avere un esempio di spin-off universitario simile che ha funzionato?',out:'learn'},
        {t:'Chiedo di vedere il testo esatto dell\'accordo di IP prima di qualunque altra conversazione.',out:'read_contract'},
      ]},
    outs:{
      ip:       {msg:'La IP è il punto critico — capisci prima cosa cedi.',stat:{CLARITY:2,RADAR:1}},
      challenge:{msg:'Questioniy l\'assunzione che i ricercatori non possano guidare.',stat:{VOICE:2,RADAR:1}},
      learn:    {msg:'Casi reali prima di firmare niente.',stat:{CLARITY:2,SKILL:1}},
      read_contract:{msg:'Vai al documento reale prima di ogni altra considerazione.',stat:{CLARITY:2,RADAR:1}},
    },
    db:{pat:'Il trasferimento tecnologico e i diritti IP nell\'accademia',
      ins:'Negli spin-off universitari italiani, la proprietà intellettuale appartiene normalmente all\'università.',
      data:'Netval 2023: le università italiane hanno generato 1.247 spin-off attivi. Solo il 19% ha una donna tra i fondatori.'}},
  {id:'pa_sis2',sprite:'sis',gender:'f',label:'Conferenza internazionale',type:'sis',required:false,gridX:5,gridY:9,
    dlg:{spk:'❤️ Dr.ssa Amara Diallo — Ricercatrice internazionale (Alleata)',color:'#e53935',
      txt:'Ho letto il tuo paper — è ottimo. Hai mai considerato di presentarlo a NeurIPS o ICML? La visibilità internazionale cambia tutto. Posso introdurti al mio advisor a Stanford.',
      chs:[
        {t:'Sarei molto interessata. Come funziona la co-autorialità in questo contesto — chi fa cosa?',out:'structure'},
        {t:'Sì, assolutamente. Una presentazione a NeurIPS cambierebbe molto per la mia carriera.',out:'yes'},
        {t:'Prima di coinvolgere il tuo advisor, posso vedere il tuo profilo di ricerca? Voglio capire il fit.',out:'due_diligence'},
        {t:'Accetto con entusiasmo, ma chiedo fin da subito come verrà gestita la doppia affiliazione istituzionale nel paper.',out:'affiliation'},
      ]},
    outs:{
      structure:     {msg:'Definisci i ruoli prima di iniziare.',stat:{CLARITY:2,NETWORK:1}},
      yes:           {msg:'Cogli l\'opportunità con entusiasmo.',stat:{NETWORK:2,ENERGY:1}},
      due_diligence: {msg:'Verifichi il fit prima di impegnarti.',stat:{CLARITY:1,RADAR:2}},
      affiliation:   {msg:'Chiarisci un dettaglio che conta per entrambe le istituzioni, fin dall\'inizio.',stat:{NETWORK:1,CLARITY:2}},
    },
    db:{pat:'Il networking internazionale come acceleratore di carriera accademica',
      ins:'La visibilità internazionale è diventata il principale acceleratore di carriera nell\'accademia tech.',
      data:'Nature Human Behaviour 2022: i ricercatori con collaborazioni internazionali ricevono il 2.3x più citazioni.'}},
  {id:'pa_tech2',sprite:'tech',label:'Grant writing',type:'tech',required:false,gridX:14,gridY:5,
    dlg:{spk:'💻 Sfida Tecnica — PA/Ricerca 2',color:'#f7c46a',
      txt:'Stai scrivendo una proposta per un bando EU Horizon Europe (budget: 500k€) su "AI per la transizione ecologica". Il bando richiede: impatto societal misurabile, collaborazione con almeno 3 paesi EU, e work package dettagliati. Hai 3 settimane. Da dove inizi?',
      chs:[
        {t:'Inizio dall\'impact section — definire il cambiamento reale che voglio produrre prima di pensare alle attività tecniche.',out:'impact_first'},
        {t:'Identifico i partner giusti nei 3 paesi e capisco cosa ognuno porta.',out:'consortium'},
        {t:'Leggo i progetti finanziati negli ultimi 2 anni su questo topic — capisco il linguaggio e le priorità della commissione.',out:'research_funded'},
        {t:'Contatto per prima cosa il National Contact Point del bando, per verificare se la mia idea rientra davvero nei criteri.',out:'ncp'},
      ]},
    outs:{
      impact_first:   {msg:'Impact before activities.',stat:{CLARITY:2,SKILL:1}},
      consortium:     {msg:'Il consorzio giusto è la metà del lavoro in un bando EU.',stat:{NETWORK:2,SKILL:1}},
      research_funded:{msg:'Studia i vincitori prima di scrivere.',stat:{SKILL:2,RADAR:1}},
      ncp:            {msg:'Eviti di scrivere un\'intera proposta fuori target.',stat:{RADAR:2,SKILL:1}},
    },
    db:{pat:'I bandi EU come opportunità e labirinto burocratico',
      ins:'I bandi Horizon Europe hanno un tasso di successo medio del 12-15%.',
      data:'European Research Council 2023: il tasso di successo medio per i grant ERC è 8-12%.'}},
];

// ══════════════════════════════════════════════════════════════
// PA LIVELLO 2 — "Researcher"
// ══════════════════════════════════════════════════════════════
export const PA_LEVEL2_ADDITIONS = [
  {id:'pa_level2_authorship',sprite:'col',gender:'m',label:'Disputa di autorship',type:'npc',level:2,required:false,gridX:4,gridY:2,
    dlg:{spk:'👨‍🔬 Collega — Ordine degli autori',color:'#f48fb1',
      txt:'Il paper è pronto per la submission. Ho pensato: mettiamo me come primo autore, così facciamo prima — è solo una formalità, tanto l\'abbiamo scritto insieme.',
      chs:[
        {t:'Chiedo di discutere l\'ordine degli autori sulla base dei contributi effettivi (es. criteri CRediT), con calma ma con fermezza.',out:'criteria'},
        {t:'Lascio correre — litigare per l\'ordine degli autori sembra meschino nel mondo accademico.',out:'concede'},
        {t:'Ne parlo con la mia supervisor prima di rispondere al collega, per avere un secondo parere.',out:'consult'},
        {t:'Propongo di applicare la tassonomia CRediT a tutto il gruppo di ricerca da ora in poi, non solo per questo paper.',out:'institutionalize'},
      ]},
    outs:{
      criteria:{msg:'Usare criteri espliciti e riconosciuti (come la tassonomia CRediT) rende la conversazione fattuale, non personale.',stat:{VOICE:2,CLARITY:1}},
      concede:{msg:'L\'ordine degli autori pesa concretamente su carriera e citazioni — non è "solo" una formalità.',stat:{VOICE:-1}},
      consult:{msg:'Un secondo parere prima di rispondere può aiutare, purché non diventi un modo per evitare la conversazione diretta.',stat:{CLARITY:1,NETWORK:1}},
      institutionalize:{msg:'Ambizioso — risolve il problema per tutti, non solo per te, ma richiede più tempo per essere adottata da tutto il gruppo.',stat:{VOICE:1,RADAR:1,NETWORK:1}},
    },
    db:{pat:'L\'ordine degli autori come indicatore di potere, non solo di merito',
      ins:'L\'ordine degli autori influenza direttamente citazioni, visibilità e progressione di carriera accademica — vale la pena trattarlo come una decisione seria, non una formalità.',
      data:'PLOS ONE 2020: le donne in ambito STEM hanno una probabilità significativamente minore di essere elencate come primo o ultimo autore rispetto ai colleghi uomini, a parità di contributo dichiarato.'}},
  {id:'pa_level2_procurement',sprite:'tech',label:'Richiesta acquisto attrezzatura',type:'tech',level:2,required:false,gridX:11,gridY:4,
    dlg:{spk:'💻 Sfida Tecnica — Serve potenza di calcolo, il budget è fermo da mesi',color:'#f7c46a',
      txt:'Il tuo progetto ha bisogno di GPU per addestrare modelli più grandi, ma la procedura di acquisto pubblica richiede mesi. La scadenza del progetto si avvicina. Come procedi?',
      chs:[
        {t:'Uso servizi cloud a pagamento nel frattempo, documentando il costo per un rimborso successivo.',out:'cloud'},
        {t:'Riduco la scala del progetto per adattarlo alle risorse disponibili ora.',out:'scale_down'},
        {t:'Chiedo aiuto a un collega di un altro laboratorio che ha risorse in eccesso al momento.',out:'collaborate'},
        {t:'Verifico prima se esistono infrastrutture di calcolo condivise a livello di ateneo o consorzio.',out:'shared_infra'},
      ]},
    outs:{
      cloud:{msg:'Pragmatico, ma il rimborso di spese cloud in ambito pubblico può essere più complicato del previsto — verifica prima le regole.',stat:{SKILL:1}},
      scale_down:{msg:'Adattare lo scope alla realtà delle risorse è una competenza sottovalutata nella ricerca pubblica.',stat:{CLARITY:2,RADAR:1}},
      collaborate:{msg:'Hai trasformato un vincolo di budget in un\'occasione di collaborazione — spesso la soluzione più sostenibile nella PA.',stat:{NETWORK:2,RADAR:2}},
      shared_infra:{msg:'Spesso la risorsa esiste già, solo poco pubblicizzata.',stat:{SKILL:1,NETWORK:2}},
    },
    db:{pat:'I vincoli di procurement pubblico come parte del mestiere, non un ostacolo esterno',
      ins:'Nella ricerca pubblica, la capacità di ottenere risorse nonostante processi lenti è essa stessa una competenza professionale, spesso appresa sul campo e mai insegnata formalmente.',
      data:'ANVUR 2022: il 61% dei ricercatori italiani in enti pubblici cita la lentezza delle procedure di acquisto come principale ostacolo operativo alla ricerca, davanti alla scarsità di fondi stessa.'}},
];

// ══════════════════════════════════════════════════════════════
// PA LIVELLO 3 — "Senior Researcher"
// ══════════════════════════════════════════════════════════════
export const PA_LEVEL3_ADDITIONS = [
  {id:'pa_level3_pi',sprite:'mgr',gender:'f',label:'Coordinamento del progetto',type:'npc',level:3,required:false,gridX:6,gridY:2,
    dlg:{spk:'👔 Direzione dipartimento — Sei pronta per guidare un progetto',color:'#f48fb1',
      txt:'Ti viene proposto di essere Principal Investigator (PI) del prossimo bando: significa scrivere la proposta, coordinare il consorzio e rispondere in prima persona dei risultati. Come ti prepari alla decisione?',
      chs:[
        {t:'Accetto, e chiedo subito di affiancarmi a una PI esperta per i primi mesi di coordinamento.',out:'mentor_support'},
        {t:'Accetto e procedo da sola — è il momento di dimostrare che posso farcela senza appoggiarmi ad altri.',out:'solo'},
        {t:'Chiedo tempo per valutare il carico, dato che ho già altri impegni di ricerca in corso.',out:'evaluate'},
        {t:'Accetto, ma prima chiedo esplicitamente cosa succede al mio carico di lavoro attuale — chi altro lo assorbe.',out:'workload'},
      ]},
    outs:{
      mentor_support:{msg:'Cercare supporto strutturato al primo ruolo di coordinamento non è una debolezza — è come si costruisce competenza di leadership in modo sostenibile.',stat:{VOICE:1,NETWORK:2,RADAR:2}},
      solo:{msg:'Voler dimostrare tutto da sola al primo ruolo di coordinamento aumenta il rischio di errori evitabili.',stat:{RADAR:-1}},
      evaluate:{msg:'Valutare il carico realisticamente prima di accettare è una scelta di sostenibilità, non di scarsa ambizione.',stat:{CLARITY:2}},
      workload:{msg:'Chiarisci un dettaglio pratico che spesso resta implicito finché non è troppo tardi.',stat:{CLARITY:1,VOICE:2}},
    },
    db:{pat:'Il primo ruolo di coordinamento come competenza da costruire, non da dimostrare da sole',
      ins:'La transizione a ruoli di Principal Investigator è spesso trattata come un test di autosufficienza, quando in realtà i PI più efficaci si costruiscono reti di supporto strutturate fin dal primo progetto.',
      data:'Nature Careers 2021: i nuovi PI che hanno accesso a mentoring strutturato nei primi due anni hanno un tasso di successo nei bandi successivi superiore del 35%.'}},
  {id:'pa_level3_public',sprite:'sis',gender:'f',label:'Intervista pubblica',type:'sis',level:3,required:false,gridX:11,gridY:8,
    dlg:{spk:'❤️ Anna — collega più esperta',color:'#e53935',
      txt:'Ho saputo che un giornalista ti ha contattata per la tua ricerca — un tema controverso, eh? È successo anche a me. Come pensi di gestire l\'intervista?',
      chs:[
        {t:'Preparo in anticipo 2-3 messaggi chiave e mi alleno a tornarci indipendentemente dalle domande.',out:'prepare'},
        {t:'Rispondo spontaneamente — voglio che venga fuori un tono autentico, non preparato.',out:'spontaneous'},
        {t:'Chiedo all\'ufficio comunicazione dell\'ente di rivedere le domande in anticipo con il giornalista.',out:'institutional'},
        {t:'Chiedo ad Anna di fare insieme una simulazione dell\'intervista con le domande più scomode che riesce a immaginare.',out:'simulate'},
      ]},
    outs:{
      prepare:{msg:'Messaggi chiave preparati in anticipo aiutano a restare centrate anche su temi controversi, senza sembrare artificiali.',stat:{VOICE:2,CLARITY:1}},
      spontaneous:{msg:'La spontaneità ha valore, ma su temi controversi rischia di lasciare spazio a fraintendimenti o citazioni fuori contesto.',stat:{VOICE:1}},
      institutional:{msg:'Coinvolgere l\'ufficio comunicazione è una risorsa istituzionale spesso sottoutilizzata dai singoli ricercatori.',stat:{NETWORK:2,RADAR:1}},
      simulate:{msg:'La preparazione più solida, anche se richiede più tempo delle altre opzioni.',stat:{SKILL:1,NETWORK:1,CLARITY:1}},
    },
    db:{pat:'La comunicazione pubblica della ricerca come competenza professionale',
      ins:'Rappresentare la propria ricerca nei media è una competenza distinta dalla ricerca stessa, e viene raramente insegnata nei percorsi accademici tradizionali — prepararsi in anticipo fa una differenza misurabile.',
      data:'Pew Research Center 2022: gli scienziati che hanno ricevuto formazione in comunicazione pubblica riportano un\'esperienza mediatica significativamente più positiva rispetto a chi non l\'ha ricevuta.'}},
];

export const PA_INNER_CRITICS = [
  {id:'critic',sprite:'crit',
    dlg:{spk:'👻 Inner Critic — voce 1',color:'#f76a6a',
      txt:'Sei sicura di essere abbastanza brava per fare ricerca di livello? Guarda gli altri nel tuo gruppo — pubblicano molto di più. Forse non sei tagliata per l\'accademia.',
      chs:[
        {t:'Quante pubblicazioni ho rispetto alla media del mio anno di dottorato? Devo guardare i dati reali, non la percezione.',out:'data'},
        {t:'Forse hai ragione. Non mi sento mai abbastanza brava.',out:'believe'},
        {t:'"Tagliata per l\'accademia" — chi ha stabilito questo criterio e su che basi?',out:'question'},
        {t:'Chiedo al mio supervisor un confronto onesto con la media reale del mio anno di dottorato, non solo con i colleghi più visibili del gruppo.',out:'baseline'},
      ]},
    outs:{
      data:    {msg:'Vai ai dati reali invece di affidarti alla percezione.',stat:{CLARITY:2,RADAR:1}},
      believe: {msg:'Hai creduto alla voce senza evidenza.',stat:{VOICE:-1,CLARITY:-1}},
      question:{msg:'Questioniy il criterio stesso.',stat:{RADAR:2,VOICE:1}},
      baseline:{msg:'Confronti con la media reale, non con i colleghi più visibili.',stat:{CLARITY:2,RADAR:1}},
    },
    db:{pat:'La sindrome dell\'impostore nell\'accademia e il confronto con i "superstar"',
      ins:'Il confronto con i colleghi più prolifici è sistematicamente distorto.',
      data:'Psychotherapy Research 2020: il 70% dei ricercatori universitari riporta episodi di sindrome dell\'impostore.'}},
  {id:'critic2',sprite:'crit',
    dlg:{spk:'👻 Inner Critic — voce 2',color:'#f76a6a',
      txt:'Hai scelto di restare in Italia invece di andare all\'estero. Tutti i bravi ricercatori vanno all\'estero. Sei rimasta per paura, non per scelta.',
      chs:[
        {t:'"Tutti i bravi" è falso — ci sono ricercatori eccellenti che costruiscono carriere significative in Italia.',out:'counter'},
        {t:'Forse. Ma ho anche ragioni concrete per restare — e quelle ragioni sono legittime.',out:'own'},
        {t:'L\'internazionalizzazione è importante, ma non richiede necessariamente trasferirsi.',out:'reframe'},
        {t:'Guardo dove sono finiti davvero, dopo 10 anni, i colleghi che sono partiti — non solo la narrazione che "partire è sempre la scelta giusta".',out:'longterm'},
      ]},
    outs:{
      counter: {msg:'Contraddici con esempi concreti.',stat:{CLARITY:2,RADAR:1}},
      own:     {msg:'Rivendichi le tue ragioni senza doverle giustificare.',stat:{VOICE:2,CLARITY:1}},
      reframe: {msg:'Ridefinisci l\'internazionalizzazione in modo che si adatti al tuo contesto.',stat:{CLARITY:1,SKILL:1}},
      longterm:{msg:'Guardi i dati reali sul lungo periodo invece della narrazione dominante.',stat:{RADAR:2,CLARITY:1}},
    },
    db:{pat:'Il "brain drain" e la legittimità di costruire una carriera in Italia',
      ins:'La narrativa "i bravi vanno all\'estero" è parzialmente vera ma anche una distorsione che scoraggia chi sceglie di restare.',
      data:'ISTAT 2023: il programma "Rientro dei Cervelli" (2020-2023) ha portato 3.200 ricercatori — di cui il 41% donne.'}},
];

// ══════════════════════════════════════════════════════════════
// WORLD DEBRIEF
// ══════════════════════════════════════════════════════════════

export const PMI_ADDITIONS = [
  {id:'pmi_ceo',sprite:'mgr',gender:'m',label:'Direzione',type:'npc',required:false,gridX:3,gridY:8,
    dlg:{spk:'👔 CEO — PMI MetalTech',color:'#ffb74d',
      txt:'Brava ragazza. Sai che mia figlia studia anche lei informatica? Sei un ottimo esempio per lei. Comunque — sei brava ma sei anche giovane. Forse tra qualche anno quando hai più esperienza possiamo valutare un ruolo più senior.',
      chs:[
        {t:'"Giovane" e "esperienza" sono criteri diversi. Posso chiederti quali risultati specifici mancano alla mia valutazione?',out:'ask'},
        {t:'Capisco, grazie per la considerazione.',out:'accept'},
        {t:'Questo tipo di commento mi aiuterebbe di più se fosse ancorato a KPI concreti, non all\'età.',out:'direct'},
        {t:'Ringrazio per il feedback e chiedo un piano di sviluppo scritto con tappe e tempistiche per arrivare al ruolo senior.',out:'roadmap'},
      ]},
    outs:{
      ask:   {msg:'Hai spostato la conversazione su criteri oggettivi.',stat:{CLARITY:2,VOICE:1}},
      accept:{msg:'Hai accettato un veto non motivato.',stat:{VOICE:-1}},
      direct:{msg:'Hai nominato il problema con precisione.',stat:{VOICE:2,RADAR:2}},
      roadmap:{msg:'Concreto — ma non affronta il fatto che "giovane" non è un criterio oggettivo; utile in aggiunta, non in sostituzione della domanda sui criteri.',stat:{CLARITY:2}},
    },
    db:{pat:'L\'ageismo come proxy del sessismo nei ruoli tech',
      ins:'"Sei giovane" è spesso codice per "sei donna" in contesti dove uomini della stessa età vengono promossi.',
      data:'Bain & Company 2021: le donne raggiungono i ruoli manageriali in media 2.3 anni dopo i colleghi uomini con gli stessi anni di esperienza.'}},
  {id:'pmi_cliente',sprite:'col',gender:'m',label:'Call con Cliente',type:'npc',required:false,gridX:11,gridY:4,
    dlg:{spk:'📞 Cliente Esterno — Ing. Rossi',color:'#ffb74d',
      txt:'Bene, bene. Ma senta — posso parlare con il suo responsabile? Non ho niente contro di lei, ma per questo tipo di decisione tecnica preferisco confrontarmi con qualcuno di più... esperto. Sa com\'è.',
      chs:[
        {t:'Sono io la responsabile di questo progetto. Le competenze che cerca sono le mie.',out:'hold'},
        {t:'Certamente, le passo il mio manager.',out:'step_back'},
        {t:'Posso chiederle cosa intende per "più esperto"? Voglio capire se c\'è una lacuna specifica.',out:'probe'},
        {t:'Rispondo con professionalità ma propongo comunque una call successiva con un collega più senior presente, per rassicurarlo nel breve termine.',out:'accommodate'},
      ]},
    outs:{
      hold:     {msg:'Hai tenuto la posizione con chiarezza.',stat:{VOICE:2,SKILL:1}},
      step_back:{msg:'Hai ceduto.',stat:{VOICE:-2,CLARITY:-1}},
      probe:    {msg:'Hai reso visibile il bias chiedendo criteri.',stat:{RADAR:2,VOICE:1}},
      accommodate:{msg:'Pragmatico per non perdere la vendita, ma conferma implicitamente il suo pregiudizio.',stat:{CLARITY:1,VOICE:-1}},
    },
    db:{pat:'Il "parlare con il responsabile" come svalutazione dell\'expertise femminile',
      ins:'Richiedere di parlare con un superiore quando l\'interlocutrice è donna è un pattern documentato in contesti B2B.',
      data:'Journal of Applied Psychology 2019: le professioniste vengono reindirizzate a superiori maschili il 34% più spesso dei colleghi uomini.'}},
  {id:'pmi_sis2',sprite:'sis',gender:'f',label:'Pausa Caffè',type:'sis',required:false,gridX:9,gridY:9,
    dlg:{spk:'❤️ Marta — Responsabile Qualità (Alleata)',color:'#e53935',
      txt:'Ho sentito cosa ti ha detto il CEO. Succede sempre così — io sono qui da 8 anni e ogni anno mi dicono "aspetta ancora". Ho imparato a costruire la mia visibilità diversamente: ogni risultato lo metto per iscritto, ogni meeting importante ho qualcuno che mi cita.',
      chs:[
        {t:'Sì, assolutamente. Cosa ha funzionato meglio per te?',out:'learn'},
        {t:'Grazie. Ma non mi piace dover "giocare" questo tipo di gioco.',out:'resist'},
        {t:'Costruiamo qualcosa insieme — documentiamo i risultati del team in modo sistematico.',out:'systemic'},
        {t:'Le chiedo se ha mai considerato di cercare altrove, visti gli 8 anni di attesa.',out:'blunt'},
      ]},
    outs:{
      learn:   {msg:'Hai acquisito tattiche concrete da chi ha esperienza diretta.',stat:{NETWORK:2,SKILL:1}},
      resist:  {msg:'La resistenza è legittima — ma il gioco si gioca comunque.',stat:{RADAR:1,ENERGY:-1}},
      systemic:{msg:'Proponi un sistema che aiuta tutto il team.',stat:{NETWORK:2,CLARITY:1,RADAR:1}},
      blunt:   {msg:'Domanda diretta e utile, anche se può suonare brusca in un momento di confidenza.',stat:{RADAR:2}},
    },
    db:{pat:'La visibilità come lavoro strategico nelle PMI',
      ins:'Nelle PMI la visibilità non arriva automaticamente — si costruisce.',
      data:'Catalyst 2020: le donne che hanno almeno una alleata attiva hanno il 31% in più di probabilità di essere valutate positivamente nelle review annuali.'}},
  {id:'pmi_tech2',sprite:'tech',label:'Impianto',type:'tech',required:false,gridX:5,gridY:9,
    dlg:{spk:'💻 Sfida Tecnica — PMI 2',color:'#f7c46a',
      txt:'Il responsabile di produzione vuole un sistema di predictive maintenance per ridurre i fermi macchina. Hai dati di vibrazione degli ultimi 6 mesi, campionati ogni 5 minuti. Budget: 8k€. Non c\'è MLOps, non c\'è cloud. Proponi.',
      chs:[
        {t:'Implemento un modello di anomaly detection (Isolation Forest o LSTM) su edge device locale.',out:'edge'},
        {t:'Prima definisco con il responsabile quali fermi vogliamo prevenire e con che anticipo — poi scelgo il modello.',out:'frame'},
        {t:'Con 6 mesi di dati e budget limitato, propongo regole statistiche (z-score rolling) — interpretabili e manutenibili.',out:'simple'},
      ]},
    outs:{
      edge:  {msg:'Soluzione tecnica corretta ma complessa per il contesto.',stat:{SKILL:1}},
      frame: {msg:'Business first.',stat:{SKILL:1,CLARITY:2,RADAR:1}},
      simple:{msg:'La soluzione semplice e manutenibile batte il modello ML in contesti senza infrastruttura.',stat:{SKILL:2,CLARITY:1}},
    },
    db:{pat:'Predictive maintenance nelle PMI: il divario tra teoria e pratica',
      ins:'I progetti di predictive maintenance nelle PMI falliscono spesso per complessità tecnica eccessiva.',
      data:'McKinsey Manufacturing Analytics 2022: il 60% dei progetti ML in ambito manifatturiero nelle PMI non raggiunge la produzione.'}},
];

// ══════════════════════════════════════════════════════════════
// PMI AUTH-ONLY ADDITIONS
// Visibili solo ai giocatori autenticati (vedi getVisibleNpcs() in
// src/game/npcVisibility.js). Stesso schema NPC degli altri, con
// authOnly:true in più.
// ══════════════════════════════════════════════════════════════
export const PMI_AUTH_ADDITIONS = [
  {id:'pmi_auth_mentor',sprite:'sis',gender:'f',label:'Mentoring Program',type:'sis',authOnly:true,required:false,gridX:7,gridY:3,
    dlg:{spk:'❤️ Giulia — Alumna del programma mentoring aziendale',color:'#e53935',
      txt:'Ciao! Ho visto il tuo profilo nel programma mentoring interno. Io l\'ho fatto due anni fa: mi ha aiutata a chiedere la promozione che continuavo a rimandare. Vuoi qualche consiglio pratico su come usarlo?',
      chs:[
        {t:'Sì — cosa ti ha aiutata di più, in concreto?',out:'ask'},
        {t:'Non credo mi serva, preferisco farcela da sola.',out:'decline'},
        {t:'Come hai preparato la richiesta di promozione con la tua mentor?',out:'deep'},
        {t:'Accetto, ma solo per capire come funziona il programma, senza impegnarmi già a seguire i consigli.',out:'cautious'},
      ]},
    outs:{
      ask:   {msg:'Hai raccolto una tattica concreta da chi l\'ha già fatto.',stat:{NETWORK:2,CLARITY:1}},
      decline:{msg:'Va bene, ma il mentoring è statisticamente uno dei fattori che più correla con le promozioni.',stat:{RADAR:-1}},
      deep:  {msg:'Hai chiesto il "come", non solo il "cosa" — è lì che si impara davvero.',stat:{NETWORK:2,VOICE:1,RADAR:1}},
      cautious:{msg:'Cauta, ma comunque un passo avanti rispetto a rifiutare.',stat:{CLARITY:2}},
    },
    db:{pat:'Il mentoring strutturato come acceleratore di carriera',
      ins:'I programmi di mentoring interni funzionano quando l\'alleata li usa attivamente per preparare richieste concrete (promozioni, cambio ruolo), non solo come supporto emotivo.',
      data:'Catalyst 2022: le donne con una mentor attiva hanno il 23% in più di probabilità di ottenere una promozione entro 2 anni.'}},
  {id:'pmi_auth_salary_data',sprite:'tech',label:'Salary Benchmark Tool',type:'tech',authOnly:true,required:false,gridX:12,gridY:6,
    dlg:{spk:'💻 Tool interno — Salary Benchmark',color:'#f7c46a',
      txt:'Accedi al tool di benchmark salariale riservato ai membri registrati: confronta la tua fascia retributiva con il mercato per ruolo, seniority e area geografica. Cosa vuoi fare con questo dato?',
      chs:[
        {t:'Lo uso per preparare una richiesta di adeguamento con numeri alla mano.',out:'use'},
        {t:'Lo guardo ma non lo userò — mi sembra troppo diretto da portare al manager.',out:'hesitate'},
        {t:'Lo condivido con una collega che sospetto sia sottopagata rispetto a me.',out:'share'},
        {t:'Guardo il dato, ma prima di usarlo verifico se il mio ruolo attuale è davvero comparabile a quello che sto guardando.',out:'verify'},
      ]},
    outs:{
      use:    {msg:'Hai trasformato un dato di mercato in una richiesta concreta.',stat:{SKILL:1,VOICE:2},ralEffect:{delta:0.05}},
      hesitate:{msg:'Il dato resta utile anche solo per calibrare le tue aspettative.',stat:{CLARITY:1}},
      share:  {msg:'La trasparenza salariale tra colleghe riduce il gender pay gap informativo.',stat:{NETWORK:2,RADAR:2}},
      verify: {msg:'Verificare la comparabilità evita di portare al manager un confronto facilmente smontabile.',stat:{CLARITY:1,RADAR:2},ralEffect:{delta:0.03}},
    },
    db:{pat:'La trasparenza salariale come leva contro il pay gap',
      ins:'L\'asimmetria informativa sui salari è uno dei meccanismi che perpetua il gender pay gap: chi ha accesso a dati di benchmark negozia meglio.',
      data:'Pitchbook/ISTAT 2023: nei settori tech italiani il gender pay gap medio è del 12-15%, più ampio dove la trasparenza salariale è minore.'}},
];

// ══════════════════════════════════════════════════════════════
// PMI LIVELLO 2 — "PMI Specialist": compaiono nella stanza solo dopo
// aver visitato tutti gli NPC di livello 1 del mondo (vedi
// getVisibleNpcs()/syncNewlyVisibleNpcs() in src/game/game.js).
// Situazioni più sfumate, senza una risposta "giusta" ovvia.
// ══════════════════════════════════════════════════════════════
export const PMI_LEVEL2_ADDITIONS = [
  {id:'pmi_tier2_budget',sprite:'mgr',gender:'m',label:'Riunione Budget',type:'npc',level:2,required:false,gridX:9,gridY:3,
    dlg:{spk:'👔 Direzione — Revisione budget trimestrale',color:'#ffb74d',
      txt:'Il trimestre è andato meglio del previsto grazie anche al tuo lavoro, ma dobbiamo tagliare il 15% dal budget IT per finanziare l\'espansione commerciale. Tu cosa taglieresti?',
      chs:[
        {t:'Taglio la formazione tecnica — è la voce più facile da giustificare nel breve termine.',out:'easy'},
        {t:'Propongo di tagliare in modo proporzionale su tutte le voci, senza sacrificare nulla del tutto.',out:'balanced'},
        {t:'Chiedo prima quali metriche di business giustificano l\'espansione, poi discutiamo dove tagliare.',out:'strategic'},
        {t:'Propongo di tagliare temporaneamente solo strumenti/software che il team usa meno, misurando l\'impatto prima di toccare altro.',out:'measure_first'},
      ]},
    outs:{
      easy:{msg:'Soluzione rapida ma miope — la formazione è spesso la prima vittima e il debito di competenze si paga dopo.',stat:{RADAR:-1}},
      balanced:{msg:'Un compromesso ragionevole, ma senza priorità esplicite rischia di indebolire un po\' tutto.',stat:{CLARITY:1}},
      strategic:{msg:'Hai collegato la decisione tecnica a un criterio di business — è così che si guadagna un posto nelle decisioni strategiche.',stat:{VOICE:2,RADAR:2,CLARITY:1}},
      measure_first:{msg:'Basato su dati reali, ma richiede tempo per raccoglierli che potrebbe non esserci.',stat:{SKILL:1,CLARITY:2}},
    },
    db:{pat:'Dalle scelte tattiche alle decisioni strategiche',
      ins:'Il salto da contributor a chi influenza le decisioni di budget passa dal collegare esplicitamente le scelte tecniche a metriche di business — è una competenza che si allena, non un talento innato.',
      data:'HBR 2021: i professionisti tech che partecipano a decisioni di budget hanno il 40% in più di probabilità di essere promossi a ruoli di leadership entro 3 anni.'}},
  {id:'pmi_tier2_promotion',sprite:'sis',gender:'f',label:'Colloquio di carriera',type:'sis',level:2,required:false,gridX:12,gridY:7,
    dlg:{spk:'❤️ Giulia — Colloquio di avanzamento',color:'#e53935',
      txt:'Ora che hai esperienza da vendere in questo posto, è il momento di parlare di avanzamento. Il tuo manager potrebbe opporre "non c\'è budget" o "non è il momento". Come ti prepari?',
      chs:[
        {t:'Preparo una lista di risultati misurabili e la fascia salariale di mercato per il mio ruolo.',out:'data'},
        {t:'Aspetto che sia lui a notare il mio valore e a propormi l\'avanzamento.',out:'wait'},
        {t:'Preparo i dati, ma anche una risposta pronta per ogni obiezione che potrebbe fare.',out:'prepared'},
        {t:'Chiedo prima a un\'altra collega che ha già ottenuto un avanzamento simile come ha strutturato la sua richiesta.',out:'precedent'},
      ]},
    outs:{
      data:{msg:'Ottimo punto di partenza — i dati sono la base, ma le obiezioni arrivano comunque.',stat:{SKILL:1,VOICE:2}},
      wait:{msg:'Il "merito visto da solo" è uno dei bias più comuni e più costosi per le donne in carriera.',stat:{VOICE:-1}},
      prepared:{msg:'Dati più obiezioni anticipate: hai trasformato una richiesta in una trattativa.',stat:{VOICE:2,NETWORK:1,RADAR:2}},
      precedent:{msg:'Impari da un precedente reale, in aggiunta ai dati.',stat:{NETWORK:2,SKILL:1}},
    },
    db:{pat:'La negoziazione anticipata delle obiezioni',
      ins:'Chi prepara in anticipo le risposte alle obiezioni più comuni ("non c\'è budget", "non è il momento") negozia risultati migliori — è una tecnica, non fortuna.',
      data:'Catalyst 2021: le donne che negoziano attivamente la propria promozione ottengono in media un avanzamento del 12% più rapido rispetto a chi aspetta di essere notata.'}},
];

// ══════════════════════════════════════════════════════════════
// PMI LIVELLO 3 — "Senior Specialist": ultimo livello del mondo PMI,
// nessun bivio. Situazioni da ruolo senior: mentoring, gestione crisi.
// ══════════════════════════════════════════════════════════════
export const PMI_LEVEL3_ADDITIONS = [
  {id:'pmi_level3_mentor',sprite:'mgr',gender:'m',label:'Junior in difficoltà',type:'npc',level:3,required:false,gridX:6,gridY:2,
    dlg:{spk:'👔 Direzione — Il junior del team non sta reggendo',color:'#ffb74d',
      txt:'Il junior che hai contribuito ad assumere sta faticando — consegne in ritardo, poca sicurezza in riunione. Tu che ne pensi, lo teniamo?',
      chs:[
        {t:'Chiedo tempo per capire se il problema è di competenze o di contesto — non decido a caldo.',out:'investigate'},
        {t:'Se non regge il ritmo, forse questo lavoro non fa per lui.',out:'harsh'},
        {t:'Propongo di affiancarlo io per due settimane prima di decidere qualsiasi cosa.',out:'mentor'},
        {t:'Chiedo al junior stesso, direttamente, cosa pensa che non stia funzionando, prima di parlarne con la direzione.',out:'ask_junior'},
      ]},
    outs:{
      investigate:{msg:'Hai separato il segnale dal rumore prima di giudicare — è quello che ci si aspetta da un ruolo senior.',stat:{CLARITY:2,RADAR:2}},
      harsh:{msg:'Un giudizio rapido su un dato parziale rischia di far perdere qualcuno che aveva solo bisogno di contesto.',stat:{CLARITY:-1}},
      mentor:{msg:'Hai messo in gioco il tuo tempo per la crescita di un\'altra persona — è così che si costruisce un team, non solo un ruolo.',stat:{VOICE:1,NETWORK:2,RADAR:2}},
      ask_junior:{msg:'Dai voce a chi è più esposto nella situazione prima di decidere per lui.',stat:{VOICE:2,RADAR:1}},
    },
    db:{pat:'Il ruolo senior come chi protegge lo sviluppo altrui',
      ins:'La transizione a ruoli senior si misura anche da quanto una persona investe nella crescita di chi ha intorno, non solo dalla propria produttività individuale.',
      data:'McKinsey Women in the Workplace 2022: le manager donne dedicano in media il 20% di tempo in più al mentoring rispetto ai colleghi uomini, un lavoro spesso non riconosciuto nelle valutazioni.'}},
  {id:'pmi_level3_external',sprite:'tech',label:'Crisi con il cliente',type:'tech',level:3,required:false,gridX:11,gridY:9,
    dlg:{spk:'💻 Sfida Tecnica — Il cliente principale ha un incidente in produzione',color:'#f7c46a',
      txt:'Il sistema che hai costruito per il cliente principale è andato giù in un momento critico. Sei tu quella che deve chiamarli e spiegare cosa è successo. Come imposti la chiamata?',
      chs:[
        {t:'Spiego la causa tecnica in dettaglio, per dimostrare che abbiamo capito il problema.',out:'technical'},
        {t:'Comincio dall\'impatto sul loro business e dai prossimi passi, poi la causa tecnica se la chiedono.',out:'business'},
        {t:'Mi scuso ripetutamente e prometto che non succederà più, senza entrare nei dettagli.',out:'apologize'},
        {t:'Preparo la telefonata insieme a chi ha lavorato tecnicamente sull\'incidente, per avere risposte precise pronte.',out:'prep_together'},
      ]},
    outs:{
      technical:{msg:'La precisione tecnica rassicura chi capisce il tecnico — ma rischi di perdere chi in call cerca solo risposte pratiche.',stat:{SKILL:2}},
      business:{msg:'Hai parlato la lingua di chi ti ascolta prima della tua — è la differenza tra un\'esecutrice e chi guida la relazione col cliente.',stat:{VOICE:2,CLARITY:1,RADAR:2}},
      apologize:{msg:'Le scuse senza sostanza raramente ricostruiscono fiducia — il cliente vuole sapere cosa succede dopo.',stat:{VOICE:-1}},
      prep_together:{msg:'Preparazione solida, anche se aggiunge un ritardo prima della chiamata che il cliente potrebbe notare.',stat:{SKILL:1,CLARITY:1}},
    },
    db:{pat:'Gestire crisi come competenza senior, non solo tecnica',
      ins:'Nei momenti di crisi, chi occupa ruoli senior traduce il tecnico in linguaggio di impatto business — è una competenza comunicativa distinta dalla competenza tecnica in sé.',
      data:'HBR 2020: la capacità di comunicare in modo chiaro durante un incidente è tra i tre fattori più citati nella scelta di chi promuovere a ruoli di client-facing leadership.'}},
];

// ══════════════════════════════════════════════════════════════
// STARTUP ADDITIONS
// ══════════════════════════════════════════════════════════════

export const STARTUP_ADDITIONS = [
  {id:'startup_investitore',sprite:'mgr',gender:'m',label:'Pitch room',type:'npc',required:false,gridX:3,gridY:8,
    dlg:{spk:'💼 Angel Investor',color:'#ce93d8',
      txt:'Il vostro prodotto è interessante. Ma dimmi — chi è il tecnico vero del team? Ho bisogno di capire chi scrive il codice. Il CEO mi ha detto che sei tu, ma... avete pensato a prendere un CTO più senior?',
      chs:[
        {t:'Sono io l\'architetta tecnica. Posso mostrarti l\'architettura e il codice se vuoi validare la scelta.',out:'show'},
        {t:'Stiamo valutando di espandere il team tecnico — possiamo parlarne dopo la due diligence?',out:'deflect'},
        {t:'Interessante domanda. Hai mai chiesto la stessa cosa a un founder maschio con il mio profilo?',out:'challenge'},
        {t:'Rispondo ai fatti (architettura, codice) e più tardi, in privato, faccio notare al founder il pattern della domanda.',out:'facts_then_private'},
      ]},
    outs:{
      show:     {msg:'Lasci parlare il lavoro.',stat:{SKILL:2,VOICE:1}},
      deflect:  {msg:'Hai evitato il confronto.',stat:{ENERGY:1,RADAR:-1}},
      challenge:{msg:'Hai nominato il doppio standard.',stat:{VOICE:2,RADAR:2}},
      facts_then_private:{msg:'Affronti il merito subito e il bias fuori dalla pressione della call.',stat:{SKILL:2,RADAR:1}},
    },
    db:{pat:'Il "chi è il tecnico vero" nei pitch con founder donna',
      ins:'Le founder donna vengono interrogate sulla propria competenza tecnica sistematicamente più degli uomini con background equivalente.',
      data:'First Round Capital 2015: le startup con almeno una founder donna hanno performato il 63% meglio di quelle con soli fondatori uomini.'}},
  {id:'startup_burnout',sprite:'col',gender:'m',label:'Stand-up mattutino',type:'npc',required:false,gridX:11,gridY:8,
    dlg:{spk:'😮‍💨 Collega — Luca (esausto)',color:'#ce93d8',
      txt:'Hai visto che il founder ha detto che lavoriamo il weekend prossimo? "Siamo in un momento critico". È il terzo weekend di fila. Io non riesco a dire no — sento che se non lo faccio sembro meno committed. Tu come gestisci?',
      chs:[
        {t:'"Committed" e "disponibile 24/7" non sono la stessa cosa. Ho imparato a distinguere urgenza reale da urgenza culturale.',out:'reframe'},
        {t:'Anche io faccio fatica. Penso che dobbiamo parlarne come team col founder.',out:'collective'},
        {t:'Io lavoro il weekend se il progetto lo richiede davvero, ma ho imparato a chiedere sempre: urgente per cosa, entro quando.',out:'criteria'},
        {t:'Sento la stessa pressione, ma non è detto che "non dire mai di no" sia davvero quello che il founder si aspetta — glielo chiederei direttamente.',out:'question_assumption'},
      ]},
    outs:{
      reframe:   {msg:'Hai distinto urgenza reale da cultura del sempre-disponibile.',stat:{CLARITY:2,ENERGY:1}},
      collective:{msg:'Proponi una soluzione collettiva.',stat:{NETWORK:1,VOICE:2}},
      criteria:  {msg:'Strumento pratico: rendere visibili i criteri dell\'urgenza.',stat:{CLARITY:1,RADAR:2,SKILL:1}},
      question_assumption:{msg:'Metti in discussione l\'assunzione condivisa invece di darla per scontata.',stat:{VOICE:2,CLARITY:1}},
    },
    db:{pat:'La cultura del crunch nelle startup e il suo costo asimmetrico',
      ins:'La cultura del "always on" colpisce in modo asimmetrico: le donne con responsabilità di cura la subiscono di più.',
      data:'Blind Survey Tech Workers 2023: il 58% dei dipendenti di startup riporta burnout. Le donne lo riportano il 18% più frequentemente degli uomini.'}},
  {id:'startup_sis2',sprite:'sis',gender:'f',label:'Terrazza',type:'sis',required:false,gridX:5,gridY:9,
    dlg:{spk:'❤️ Chiara — Product Manager (Alleata)',color:'#e53935',
      txt:'Ho notato che nelle riunioni del team le tue proposte spesso vengono ignorate, e poi le ripropone qualcun altro e tutti le adorano. Ho iniziato a tenere un log di queste situazioni. Vuoi che lo facciamo insieme sistematicamente?',
      chs:[
        {t:'Sì — documentare è il primo passo per rendere visibile quello che succede. Come lo strutturi?',out:'yes'},
        {t:'Non voglio sembrare paranoica o in cerca di conflitti.',out:'fear'},
        {t:'Potremmo usare questo log anche per proporre al founder un sistema di attribuzione delle idee più esplicito.',out:'systemic'},
        {t:'Le chiedo di aiutarmi a capire se il pattern riguarda solo me o è più diffuso, prima di decidere come intervenire.',out:'scope_check'},
      ]},
    outs:{
      yes:     {msg:'Hai scelto di documentare.',stat:{NETWORK:2,CLARITY:1}},
      fear:    {msg:'La paura di sembrare "difficile" è esattamente quello che rende il pattern invisibile.',stat:{RADAR:1,VOICE:-1}},
      systemic:{msg:'Proporlo prima di aver raccolto abbastanza casi rischia di sembrare prematuro.',stat:{NETWORK:1,RADAR:2}},
      scope_check:{msg:'Costruisci il quadro prima di agire.',stat:{RADAR:2,NETWORK:1}},
    },
    db:{pat:'Il "manterrupting" e l\'appropriazione delle idee nelle startup',
      ins:'Il manterrupting e l\'appropriazione delle idee sono tra i comportamenti più frequentemente riportati nelle startup tech.',
      data:'LeanIn.org 2022: il 64% delle donne in startup tech riporta di aver avuto idee attribuite a colleghi uomini almeno una volta nell\'ultimo anno.'}},
  {id:'startup_tech2',sprite:'tech',label:'Board meeting',type:'tech',required:false,gridX:14,gridY:5,
    dlg:{spk:'💻 Sfida Tecnica — Startup 2',color:'#f7c46a',
      txt:'Il board vuole vedere le metriche di "engagement" dell\'app AI. Il problema: le metriche attuali (DAU, session length) non catturano se il prodotto sta effettivamente aiutando gli utenti. Come riprogetti il sistema di misurazione?',
      chs:[
        {t:'Propongo outcome metrics: per ogni use case, misuro se l\'utente ha raggiunto l\'obiettivo dichiarato.',out:'outcome'},
        {t:'Introduco una North Star Metric legata al valore business e la decompongo in leading indicators misurabili.',out:'north_star'},
        {t:'Faccio prima user research qualitativa per capire cosa "aiutare" significa per gli utenti reali.',out:'research'},
        {t:'Guardo prima cosa già misurano i competitor per validare se il problema è solo nostro o di settore.',out:'competitors'},
      ]},
    outs:{
      outcome:   {msg:'Task completion > session length.',stat:{SKILL:2,CLARITY:1}},
      north_star:{msg:'Framework classico ma solido.',stat:{SKILL:2,RADAR:1}},
      research:  {msg:'Research before metrics.',stat:{SKILL:1,CLARITY:2,RADAR:2}},
      competitors:{msg:'Comodo, ma rischia di copiare metriche non adatte al vostro prodotto.',stat:{SKILL:1}},
    },
    db:{pat:'Vanity metrics vs outcome metrics nei prodotti AI',
      ins:'Le metriche di engagement misurano l\'uso, non il valore.',
      data:'"Goodhart\'s Law: when a measure becomes a target, it ceases to be a good measure." — Charles Goodhart (1975).'}},
];

// ══════════════════════════════════════════════════════════════
// STARTUP LIVELLO 2 — "Startup Engineer"
// ══════════════════════════════════════════════════════════════
export const STARTUP_LEVEL2_ADDITIONS = [
  {id:'startup_level2_scale',sprite:'tech',label:'Sistema che non regge',type:'tech',level:2,required:false,gridX:8,gridY:2,
    dlg:{spk:'💻 Sfida Tecnica — Il traffico è triplicato in un mese',color:'#f7c46a',
      txt:'L\'architettura che avevi progettato per l\'MVP ora fatica: latenze alte, costi cloud fuori controllo. Il founder vuole una soluzione "per ieri". Come procedi?',
      chs:[
        {t:'Propongo un refactor mirato solo sui colli di bottiglia misurati, non una riscrittura completa.',out:'targeted'},
        {t:'Chiedo due giorni per fare un\'analisi di carico prima di toccare qualsiasi cosa in produzione.',out:'measure'},
        {t:'Butto giù subito una patch che riduce il carico, l\'ottimizzazione vera la facciamo dopo.',out:'patch'},
        {t:'Comunico subito al founder che la soluzione richiederà più di "ieri", con una stima realistica, prima di iniziare qualsiasi lavoro.',out:'expectations'},
      ]},
    outs:{
      targeted:{msg:'Hai risolto senza destabilizzare il sistema — la scelta più matura sotto pressione.',stat:{SKILL:2,CLARITY:1}},
      measure:{msg:'Misurare prima di agire è corretto, ma sotto pressione business rischia di sembrare inazione se non comunicato bene.',stat:{SKILL:1,RADAR:1}},
      patch:{msg:'Rapido ma rischioso — le patch "temporanee" in produzione diventano spesso permanenti.',stat:{CLARITY:-1}},
      expectations:{msg:'Gestisci le aspettative, ma non risolve da sola il problema tecnico.',stat:{VOICE:2,CLARITY:1}},
    },
    db:{pat:'Debito tecnico come conseguenza della velocità, non un errore',
      ins:'La tensione tra velocità e solidità tecnica è strutturale nelle startup in crescita — gestirla bene, non evitarla, è la competenza che distingue un ruolo senior.',
      data:'Stripe Developer Coefficient 2022: gli sviluppatori dedicano in media il 33% del tempo a debito tecnico pregresso nelle scale-up in rapida crescita.'}},
  {id:'startup_level2_equity',sprite:'mgr',gender:'f',label:'Rinnovo del pacchetto',type:'npc',level:2,required:false,gridX:12,gridY:4,
    dlg:{spk:'💼 Founder — Rinegoziazione equity',color:'#ce93d8',
      txt:'So che con l\'ultimo round la tua equity si è diluita parecchio. Sei fondamentale per noi — ne parliamo quando ci pensiamo, ok?',
      chs:[
        {t:'Chiedo una data precisa per la conversazione, non un generico "ci pensiamo".',out:'date'},
        {t:'Aspetto — non voglio sembrare che pensi solo ai soldi in un momento delicato per l\'azienda.',out:'wait'},
        {t:'Porto un confronto con pacchetti equity di ruoli equivalenti in startup simili.',out:'benchmark'},
        {t:'Chiedo di mettere per iscritto anche solo l\'intenzione di riparlarne, con una data, invece di lasciarla verbale.',out:'writeit'},
      ]},
    outs:{
      date:{msg:'Una scadenza concreta trasforma un\'intenzione vaga in un impegno verificabile.',stat:{VOICE:2,CLARITY:1}},
      wait:{msg:'Il "non voglio sembrare interessata ai soldi" è un costo che ricade più spesso sulle donne.',stat:{VOICE:-1}},
      benchmark:{msg:'Hai portato dati esterni in una trattativa interna — cambia il potere della conversazione.',stat:{VOICE:1,NETWORK:1,RADAR:2}},
      writeit:{msg:'Un passo minimo ma concreto.',stat:{VOICE:1,CLARITY:2}},
    },
    db:{pat:'La diluizione dell\'equity e il costo del "non è il momento"',
      ins:'Le rinegoziazioni di equity rimandate indefinitamente raramente si risolvono da sole — servono richieste esplicite e verificabili.',
      data:'Carta 2023 Equity Report: le donne nelle startup possiedono in media il 47% dell\'equity dei colleghi uomini a parità di ruolo e seniority.'}},
];

// ══════════════════════════════════════════════════════════════
// STARTUP LIVELLO 3 — "Tech Lead"
// ══════════════════════════════════════════════════════════════
export const STARTUP_LEVEL3_ADDITIONS = [
  {id:'startup_level3_hiring',sprite:'mgr',gender:'f',label:'Costruire il team',type:'npc',level:3,required:false,gridX:4,gridY:3,
    dlg:{spk:'💼 Founder — Il primo hiring tecnico è tuo',color:'#ce93d8',
      txt:'Il candidato migliore sulla carta ha uno stile molto aggressivo nei colloqui, mi hanno riferito i colleghi che l\'hanno già incontrato. La decisione finale su chi entra nel team tecnico è tua: che ne pensi?',
      chs:[
        {t:'Lo scarto — lo stile con cui tratterà il team pesa quanto le competenze.',out:'reject'},
        {t:'Lo valuto comunque, le competenze tecniche vengono prima del resto in questa fase.',out:'skills_first'},
        {t:'Faccio un secondo colloquio io stessa, mirato proprio a osservare come lavora con gli altri.',out:'verify'},
        {t:'Chiedo direttamente ai colleghi che lo hanno già incontrato episodi specifici, non solo l\'impressione generale.',out:'specifics'},
      ]},
    outs:{
      reject:{msg:'Hai scelto la cultura del team come criterio non negoziabile — legittimo, ma senza verifica diretta resta una decisione su sentito dire.',stat:{RADAR:1}},
      skills_first:{msg:'Le competenze da sole non prevedono come qualcuno tratterà il team che hai costruito.',stat:{CLARITY:-1}},
      verify:{msg:'Hai verificato di persona prima di decidere — la responsabilità di chi costruisce un team parte da qui.',stat:{VOICE:1,CLARITY:2,RADAR:2}},
      specifics:{msg:'Trasformi un sentito dire in informazione verificabile.',stat:{RADAR:2,CLARITY:1}},
    },
    db:{pat:'Le decisioni di hiring come atto di leadership, non solo di valutazione tecnica',
      ins:'Chi guida un team tecnico per la prima volta scopre che le decisioni di hiring pesano sulla cultura tanto quanto sulle competenze — è un potere nuovo da esercitare con attenzione.',
      data:'Harvard Business Review 2019: i team con un solo "bad hire" tossico riportano un calo di performance collettiva fino al 30-40%, anche a fronte di alte competenze individuali.'}},
  {id:'startup_level3_board',sprite:'tech',label:'Presentazione al board',type:'tech',level:3,required:false,gridX:13,gridY:8,
    dlg:{spk:'💻 Sfida Tecnica — Devi presentare la roadmap tecnica al board',color:'#f7c46a',
      txt:'Il board, in gran parte non tecnico, deve approvare un investimento importante in infrastruttura. Come strutturi la presentazione?',
      chs:[
        {t:'Dettaglio l\'architettura proposta e le alternative tecniche valutate.',out:'detail'},
        {t:'Apro con il rischio di non investire (cosa succede se non lo facciamo) e chiudo con la proposta.',out:'risk_first'},
        {t:'Traduco tutto in tre numeri: costo, tempo risparmiato, rischio ridotto — senza gergo tecnico.',out:'numbers'},
        {t:'Chiedo in anticipo al founder quali sono le 2-3 domande che il board farà sicuramente, e preparo quelle risposte per prime.',out:'anticipate'},
      ]},
    outs:{
      detail:{msg:'Rigoroso, ma rischi di perdere una board non tecnica nei dettagli implementativi.',stat:{SKILL:2}},
      risk_first:{msg:'Aprire con il costo dell\'inazione è una tecnica di comunicazione executive efficace.',stat:{VOICE:2,RADAR:1}},
      numbers:{msg:'Hai tradotto la complessità tecnica nel linguaggio di chi decide il budget — è la competenza che definisce un Tech Lead.',stat:{VOICE:2,CLARITY:2,RADAR:1}},
      anticipate:{msg:'Dipende dal founder conoscere davvero bene il board.',stat:{SKILL:1,NETWORK:2}},
    },
    db:{pat:'Tradurre decisioni tecniche in linguaggio executive',
      ins:'Il salto a ruoli di tech leadership richiede di ri-orientare la comunicazione da "come funziona" a "cosa comporta per il business" — è una competenza appresa, non innata.',
      data:'CTO Survey 2022 (Stack Overflow): il 71% dei CTO indica la comunicazione con stakeholder non tecnici come la competenza più difficile da sviluppare nella transizione a ruoli di leadership.'}},
];

// ══════════════════════════════════════════════════════════════
// CONSULENZA ADDITIONS
// ══════════════════════════════════════════════════════════════

export const CONSULENZA_ADDITIONS = [
  {id:'cons_junior',sprite:'col',gender:'m',label:'Team room',type:'npc',required:false,gridX:3,gridY:8,
    dlg:{spk:'👨‍💼 Junior Analyst — Matteo',color:'#4fc3f7',
      txt:'Ho bisogno di aiuto con questa analisi. Sai come funziona qui — i senior non hanno tempo. Posso venire da te? Sei sempre così disponibile e brava a spiegare.',
      chs:[
        {t:'Posso aiutarti questa volta, ma parliamo anche di come il team distribuisce il mentoring — non dovrebbe essere solo mio.',out:'boundary_system'},
        {t:'Certo, vieni pure. Di cosa hai bisogno?',out:'yes'},
        {t:'Posso dedicarti 30 minuti mercoledì — prenota nel mio calendario.',out:'structure'},
        {t:'Gli rispondo che in questo momento non ho tempo, ma lo indirizzo a chi nel team si occupa formalmente di mentoring junior.',out:'redirect'},
      ]},
    outs:{
      boundary_system:{msg:'Aiuti e nomini il problema strutturale insieme.',stat:{VOICE:1,NETWORK:1,CLARITY:1}},
      yes:            {msg:'Aiuti senza confini.',stat:{ENERGY:1,CLARITY:-1}},
      structure:      {msg:'Confine professionale con disponibilità reale.',stat:{VOICE:1,ENERGY:1}},
      redirect:       {msg:'Proteggi il tuo tempo indirizzandolo al canale corretto.',stat:{CLARITY:2,NETWORK:1}},
    },
    db:{pat:'Il mentoring non pagato come aspettativa implicita verso le donne',
      ins:'Nelle consulenze, il mentoring informale dei junior tende a ricadere in modo sproporzionato sulle donne senior.',
      data:'HBR 2018: nelle grandi consulenze, le donne partner dedicano in media 200 ore/anno in più dei colleghi maschi ad attività di mentoring informale non riconosciute.'}},
  {id:'cons_salary',sprite:'mgr',gender:'f',label:'HR meeting',type:'npc',required:false,gridX:12,gridY:8,
    dlg:{spk:'👔 HR Senior — Compensation review',color:'#4fc3f7',
      txt:'Abbiamo fatto la nostra analisi. La tua compensation è in linea con il peer group. Ah — giusto per trasparenza: "peer group" include tutti gli analyst dello stesso livello. Non possiamo condividere i singoli dati.',
      chs:[
        {t:'Posso vedere la distribuzione del peer group — media, mediana, range? Senza nomi, solo statistiche.',out:'data'},
        {t:'Capisco. Posso chiederti allora quali sono i criteri per passare al livello successivo?',out:'redirect'},
        {t:'Ho fatto la mia ricerca di mercato — i dati di Glassdoor e Levels.fyi mostrano un range diverso. Possiamo parlarne?',out:'external'},
        {t:'Chiedo semplicemente se il mio peer group include anche i colleghi uomini allo stesso livello, o è definito diversamente.',out:'peer_scope'},
      ]},
    outs:{
      data:    {msg:'Chiedi dati aggregati.',stat:{VOICE:2,CLARITY:1},ralEffect:{delta:0.05}},
      redirect:{msg:'Sposti il focus sulla progressione.',stat:{CLARITY:1,RADAR:1},ralEffect:{delta:0.02}},
      external:{msg:'Usi dati di mercato come leverage.',stat:{VOICE:2,SKILL:1},ralEffect:{delta:0.07}},
      peer_scope:{msg:'Metti alla prova la definizione stessa del confronto.',stat:{RADAR:2,VOICE:1},ralEffect:{delta:0.05}},
    },
    db:{pat:'Il gender pay gap nelle consulenze e come negoziare con dati',
      ins:'La mancanza di trasparenza salariale è il meccanismo principale attraverso cui il gender pay gap si mantiene nelle consulenze.',
      data:'Deloitte Global 2022: il gender pay gap medio nelle big 4 della consulenza è dell\'8-12% al livello analyst/senior analyst.'}},
  {id:'cons_sis2',sprite:'sis',gender:'f',label:'Sala break',type:'sis',required:false,gridX:8,gridY:9,
    dlg:{spk:'❤️ Valeria — Manager (Alleata)',color:'#e53935',
      txt:'Stai facendo un ottimo lavoro sul progetto. Ho una proposta: ti nomino nella review del Q3 davanti al partner — ma ho bisogno che tu mi aiuti a fare lo stesso con Laila, che sta lavorando benissimo ma è invisibile. Creiamo un circolo di mutuo riconoscimento.',
      chs:[
        {t:'Sì — e proponiamo al partner di formalizzare questo tipo di peer recognition nel processo di review.',out:'systemic'},
        {t:'Certo, con piacere. Come funziona concretamente?',out:'learn'},
        {t:'Sono dentro. Aggiungiamo anche una collega junior che merita visibilità.',out:'expand'},
        {t:'Prima di aderire, chiedo come si evita che il circolo venga percepito come una "cricca" informale dal resto del team.',out:'optics'},
      ]},
    outs:{
      systemic:{msg:'Proponi di istituzionalizzare il circolo.',stat:{NETWORK:2,RADAR:2,CLARITY:1}},
      learn:   {msg:'Entri nel sistema con intenzione di contribuire.',stat:{NETWORK:2,ENERGY:1}},
      expand:  {msg:'Estendi il cerchio verso chi è più indietro.',stat:{NETWORK:3,RADAR:1}},
      optics:  {msg:'Pensi alla percezione esterna prima ancora di entrare.',stat:{RADAR:2,CLARITY:1}},
    },
    db:{pat:'Il circolo di mutuo riconoscimento come antidoto al credit gap',
      ins:'Il mutuo riconoscimento è una delle strategie più documentate contro il credit gap nelle consulenze.',
      data:'Amplification strategy documentata nel team femminile di Obama alla Casa Bianca (Washington Post, 2016).'}},
  {id:'cons_tech2',sprite:'tech',label:'Client workshop',type:'tech',required:false,gridX:14,gridY:4,
    dlg:{spk:'💻 Sfida Tecnica — Consulenza 2',color:'#f7c46a',
      txt:'Il cliente retail vuole un sistema di "AI personalizzazione" per aumentare le vendite. Ha 3 anni di dati transazionali e un team IT di 2 persone. Il budget è 200k€. Il partner ha già promesso "un sistema simile ad Amazon". Come gestisci le aspettative?',
      chs:[
        {t:'Costruisco un sistema di collaborative filtering solido — e documento esplicitamente cosa non è "come Amazon".',out:'build_honest'},
        {t:'Prima di toccare il codice, facilito una sessione con il partner e il cliente per riallineare le aspettative su cosa è fattibile.',out:'realign'},
        {t:'Propongo un proof of concept in 6 settimane su un segmento prodotto — risultati reali prima di promesse più grandi.',out:'poc'},
        {t:'Vado direttamente dal partner, prima ancora del cliente, per allineare cosa è stato promesso e cosa è davvero fattibile.',out:'align_partner'},
      ]},
    outs:{
      build_honest:{msg:'Costruisci e documenti onestamente.',stat:{SKILL:2,CLARITY:1}},
      realign:     {msg:'Gestisci le aspettative prima ancora di iniziare.',stat:{CLARITY:2,RADAR:1,VOICE:1}},
      poc:         {msg:'PoC prima delle grandi promesse.',stat:{SKILL:1,CLARITY:2}},
      align_partner:{msg:'Risolvi la fonte del problema prima delle conseguenze col cliente.',stat:{VOICE:2,NETWORK:1}},
    },
    db:{pat:'Il "gap tra promessa e delivery" nei progetti AI in consulenza',
      ins:'La vendita di progetti AI con promesse eccessive è uno dei pattern più critici nelle consulenze.',
      data:'Gartner Hype Cycle for AI 2023: l\'85% delle aziende che iniziano progetti di "AI personalizzazione" di ampia scala senza un PoC preliminare riporta mancato raggiungimento degli obiettivi dichiarati.'}},
];

// ══════════════════════════════════════════════════════════════
// CONSULENZA LIVELLO 2 — "Consultant"
// ══════════════════════════════════════════════════════════════
export const CONSULENZA_LEVEL2_ADDITIONS = [
  {id:'cons_level2_pushback',sprite:'col',gender:'m',label:'Cliente scettico',type:'npc',level:2,required:false,gridX:4,gridY:2,
    dlg:{spk:'🧑‍💼 Client Lead — Resistenza al cambiamento',color:'#4fc3f7',
      txt:'Abbiamo sempre fatto così, non vediamo perché cambiare ora.',
      chs:[
        {t:'Porto tre casi comparabili dove il "sempre fatto così" ha portato a perdite quantificabili.',out:'cases'},
        {t:'Chiedo di capire meglio cosa li preoccupa davvero prima di insistere sulla raccomandazione.',out:'listen'},
        {t:'Lascio che decidano loro — non è la mia azienda, non spetta a me insistere.',out:'defer'},
        {t:'Chiedo al cliente di provare la raccomandazione su una sola area limitata, a basso rischio, prima di estenderla a tutto.',out:'pilot'},
      ]},
    outs:{
      cases:{msg:'I casi comparabili danno peso concreto alla raccomandazione.',stat:{SKILL:1,VOICE:2}},
      listen:{msg:'Capire la resistenza prima di combatterla è spesso la mossa più efficace, non la più debole.',stat:{CLARITY:2,RADAR:2}},
      defer:{msg:'Il ruolo di consulente implica prendere posizione, non solo presentare opzioni neutre.',stat:{VOICE:-1}},
      pilot:{msg:'Un rischio ridotto abbassa la resistenza al cambiamento.',stat:{SKILL:2,CLARITY:1}},
    },
    db:{pat:'La resistenza al cambiamento come dato da ascoltare, non solo da vincere',
      ins:'I consulenti più efficaci trattano la resistenza del cliente come informazione utile sul vero ostacolo, non come un muro da abbattere con più argomenti.',
      data:'MIT Sloan Management Review 2021: i progetti di cambiamento organizzativo che includono una fase esplicita di ascolto della resistenza hanno il 34% in più di probabilità di successo.'}},
  {id:'cons_level2_staffing',sprite:'mgr',gender:'m',label:'Assegnazione progetti',type:'npc',level:2,required:false,gridX:11,gridY:4,
    dlg:{spk:'👔 Partner — Prossimo staffing',color:'#4fc3f7',
      txt:'Stiamo per assegnare il prossimo progetto di alto profilo — visibilità, viaggio, cliente strategico. Con te non ne abbiamo ancora parlato, nonostante i tuoi risultati.',
      chs:[
        {t:'Mi propongo esplicitamente al partner, con i risultati dei progetti recenti come argomento.',out:'propose'},
        {t:'Aspetto che se ne accorgano — i risultati dovrebbero parlare da soli.',out:'wait'},
        {t:'Chiedo con quali criteri vengono assegnati questi progetti, in modo trasparente.',out:'criteria'},
        {t:'Chiedo prima a una collega che ha già ottenuto un progetto simile come si è proposta, prima di andare io stessa dal partner.',out:'precedent'},
      ]},
    outs:{
      propose:{msg:'Ti sei proposta attivamente — i progetti ad alta visibilità raramente arrivano da soli.',stat:{VOICE:2,NETWORK:1}},
      wait:    {msg:'I risultati non sempre "parlano da soli" — spesso serve chi li racconta.',stat:{VOICE:-1}},
      criteria:{msg:'Hai reso visibile un processo spesso informale — utile per te e per chi verrà dopo.',stat:{VOICE:1,RADAR:2,NETWORK:1}},
      precedent:{msg:'Impari da un precedente reale prima di esporti.',stat:{NETWORK:2,CLARITY:1}},
    },
    db:{pat:'Lo staffing informale dei progetti ad alta visibilità',
      ins:'I progetti più visibili in consulenza vengono spesso assegnati tramite reti informali, non processi trasparenti — un meccanismo che penalizza chi non se li "auto-propone".',
      data:'Catalyst 2020: le donne in consulenza ricevono il 20% in meno di assegnazioni a progetti ad alta visibilità a parità di performance review.'}},
];

// Bivio di carriera: la scelta qui determina il percorso (track) del livello 3
// — vedi ST.world.track, impostato da handleChoice() quando outs[].track è presente.
export const CONSULENZA_BRANCH_ADDITIONS = [
  {id:'cons_branch_choice',sprite:'mgr',gender:'m',label:'Colloquio di carriera',type:'npc',level:3,required:false,gridX:8,gridY:6,
    dlg:{spk:'👔 Partner — Il tuo prossimo passo',color:'#4fc3f7',
      txt:'Sei pronta per il livello successivo. Da qui due strade: approfondire come Expert tecnica di riferimento, oppure crescere come Engagement Manager e guidare team e clienti. Tu dove vuoi andare?',
      chs:[
        {t:'Voglio approfondire — diventare il punto di riferimento tecnico su cui tutti contano.',out:'expert'},
        {t:'Voglio guidare persone e relazioni — costruire e portare avanti un team.',out:'manager'},
      ]},
    outs:{
      expert:{msg:'Hai scelto il percorso da Expert.',stat:{SKILL:2,RADAR:1},track:'expert'},
      manager:{msg:'Hai scelto il percorso da Engagement Manager.',stat:{VOICE:1,NETWORK:2},track:'manager'},
    },
    db:{pat:'Il doppio binario di carriera (dual ladder) in consulenza',
      ins:'Molte organizzazioni offrono due percorsi di crescita paralleli — tecnico/expert e gestionale/people — con pari dignità e retribuzione. Riconoscere la scelta come legittima, in entrambe le direzioni, è già un atto di consapevolezza di carriera.',
      data:'Deloitte Career Architecture 2021: le aziende con un dual-ladder esplicito riportano il 25% in meno di abbandono tra i senior tecnici rispetto a quelle con un solo percorso verso il management.'}},
];

// ══════════════════════════════════════════════════════════════
// CONSULENZA LIVELLO 3 — bivio: "Expert Consultant" vs "Engagement Manager"
// ══════════════════════════════════════════════════════════════
export const CONSULENZA_LEVEL3_EXPERT_ADDITIONS = [
  {id:'cons_level3_expert',sprite:'tech',label:'Arbitrato tecnico',type:'tech',level:3,track:'expert',required:false,gridX:12,gridY:8,
    dlg:{spk:'💻 Sfida Tecnica — Due team interni sono in disaccordo',color:'#f7c46a',
      txt:'Due team del progetto propongono soluzioni tecniche opposte per lo stesso problema e chiedono a te, come expert, di arbitrare. Entrambi hanno argomenti validi. Come decidi?',
      chs:[
        {t:'Valuto entrambe le proposte su criteri oggettivi dichiarati in anticipo (costo, manutenibilità, rischio).',out:'criteria'},
        {t:'Scelgo la proposta del team con cui ho lavorato meglio in passato — mi fido del loro giudizio.',out:'trust'},
        {t:'Propongo una terza via che integra il meglio di entrambe, anche se richiede più tempo.',out:'synthesize'},
        {t:'Chiedo a un expert esterno ai due team un secondo parere indipendente, prima di decidere io stessa.',out:'external_review'},
      ]},
    outs:{
      criteria:{msg:'Criteri dichiarati in anticipo rendono l\'arbitrato difendibile e percepito come equo da entrambi i team.',stat:{CLARITY:2,RADAR:2}},
      trust:{msg:'La fiducia personale è un dato, ma da sola rischia di sembrare (o essere) favoritismo.',stat:{CLARITY:-1}},
      synthesize:{msg:'Una sintesi ben costruita può risolvere il conflitto alla radice, se il tempo extra è davvero giustificato.',stat:{SKILL:2,CLARITY:1}},
      external_review:{msg:'Un secondo parere indipendente rafforza la decisione, ma allunga i tempi.',stat:{CLARITY:2,NETWORK:1}},
    },
    db:{pat:'L\'autorità tecnica come responsabilità di processo, non solo di competenza',
      ins:'Essere riconosciute come punto di riferimento tecnico comporta la responsabilità di rendere le proprie decisioni tracciabili e difendibili, non solo corrette.',
      data:'IEEE Software 2020: le decisioni di architettura documentate con criteri espliciti (Architecture Decision Records) riducono del 40% i conflitti ricorrenti tra team.'}},
];

export const CONSULENZA_LEVEL3_MANAGER_ADDITIONS = [
  {id:'cons_level3_manager',sprite:'sis',gender:'f',label:'Team in difficoltà',type:'sis',level:3,track:'manager',required:false,gridX:5,gridY:3,
    dlg:{spk:'❤️ Sara — una del tuo team, in confidenza',color:'#e53935',
      txt:'Posso dirti una cosa in confidenza? Nelle ultime call con il cliente, un\'altra persona del team si sta prendendo il merito del mio lavoro. Non so bene come affrontarla.',
      chs:[
        {t:'Ne parlo direttamente con la persona coinvolta, in privato, con esempi concreti.',out:'direct'},
        {t:'Aggiusto la struttura delle prossime call cliente perché ogni contributo sia attribuito esplicitamente.',out:'structural'},
        {t:'Aspetto di vedere se succede di nuovo prima di intervenire — potrebbe essere un episodio isolato.',out:'wait'},
        {t:'Cambio prima la struttura delle call, poi ne parlo comunque privatamente con la persona coinvolta.',out:'both'},
      ]},
    outs:{
      direct:{msg:'Affrontare direttamente, con esempi, è spesso la via più rispettosa per tutti.',stat:{VOICE:2,CLARITY:1}},
      structural:{msg:'Hai risolto a livello di sistema, non solo di singolo episodio — previene la ricorrenza.',stat:{CLARITY:1,RADAR:2,NETWORK:1}},
      wait:{msg:'Aspettare senza dire nulla lascia che il pattern si consolidi silenziosamente.',stat:{RADAR:-1}},
      both:{msg:'Combini le due soluzioni migliori, ma richiede più tempo ed energia.',stat:{CLARITY:1,RADAR:1,NETWORK:1}},
    },
    db:{pat:'La gestione dell\'attribuzione del merito nei team di progetto',
      ins:'Chi guida un team per la prima volta scopre che gran parte del lavoro di management è invisibile: non riguarda il progetto, ma le dinamiche di chi lo consegna.',
      data:'Project Management Institute 2022: il 56% dei project/engagement manager cita "gestione delle dinamiche di team" come la competenza più sottovalutata nella formazione manageriale.'}},
];

// ══════════════════════════════════════════════════════════════
// CORPORATE ADDITIONS
// ══════════════════════════════════════════════════════════════

export const CORPORATE_ADDITIONS = [
  {id:'corp_riunione',sprite:'col',gender:'m',label:'Board prep',type:'npc',required:false,gridX:3,gridY:8,
    dlg:{spk:'👨‍💼 Collega — Riccardo',color:'#81c784',
      txt:'Ho visto che domani presenti al board. Sai che in questa azienda il modo in cui presenti conta quanto i contenuti? I board member vogliono brevità, sicurezza, e "headline first".',
      chs:[
        {t:'Grazie del feedback. Puoi mostrarmi una presentazione che ha funzionato bene con questo board?',out:'learn'},
        {t:'Apprezzo il consiglio. Hai notato se ci sono differenze in come i board member reagiscono a uomini e donne?',out:'probe'},
        {t:'Ho preparato una struttura pyramid principle — conclusione prima, poi evidenza. Posso condividertela per un feedback?',out:'share'},
        {t:'Provo prima la presentazione con un collega che ha già presentato a questo board, per un feedback diretto sul tono.',out:'rehearse'},
      ]},
    outs:{
      learn:{msg:'Impari dal contesto specifico.',stat:{SKILL:1,NETWORK:1}},
      probe:{msg:'Cerchi dati sul doppio standard.',stat:{RADAR:2,CLARITY:1}},
      share:{msg:'Usi la struttura giusta e cerchi feedback proattivamente.',stat:{SKILL:2,CLARITY:1}},
      rehearse:{msg:'Feedback diretto e mirato prima che conti davvero.',stat:{SKILL:1,NETWORK:2}},
    },
    db:{pat:'La "executive presence" nei board meeting e il doppio standard di presentazione',
      ins:'Le aspettative su come presentare al board sono spesso definite implicitamente su modelli maschili.',
      data:'Stanford VMware Women\'s Leadership Innovation Lab 2019: nelle presentazioni al board, le donne vengono interrotte il 2.1x più frequentemente degli uomini.'}},
  {id:'corp_trasferimento',sprite:'mgr',gender:'f',label:'Offerta HR',type:'npc',required:false,gridX:12,gridY:8,
    dlg:{spk:'👔 HR — Global Mobility',color:'#81c784',
      txt:'Abbiamo un\'opportunità straordinaria per te: un ruolo in Londra, 18 mesi. L\'unica cosa — devi confermare entro venerdì. Ah, e ovviamente la famiglia... sei sposata? Hai figli?',
      chs:[
        {t:'Domanda personale a parte — posso avere i dettagli scritti del ruolo, la compensation, e i tempi precisi?',out:'redirect'},
        {t:'La mia situazione personale la valuto io. Posso chiederti se questa domanda la fate anche ai candidati uomini?',out:'challenge'},
        {t:'Ho bisogno di più di venerdì per valutare. E le domande sulla famiglia non sono rilevanti per la mia decisione professionale.',out:'boundary'},
        {t:'Rispondo solo alla parte professionale della domanda, ignorando semplicemente la parte personale.',out:'ignore_personal'},
      ]},
    outs:{
      redirect: {msg:'Reindirizza su dati professionali.',stat:{CLARITY:2,VOICE:1}},
      challenge:{msg:'Nomini il doppio standard con precisione.',stat:{VOICE:2,RADAR:2}},
      boundary: {msg:'Doppio confine: tempo e privacy.',stat:{VOICE:2,ENERGY:1,CLARITY:1}},
      ignore_personal:{msg:'Protegge i confini, ma non rende visibile il problema come le altre opzioni.',stat:{CLARITY:2}},
    },
    db:{pat:'Le domande illegali nei processi di mobilità interna e il "family penalty"',
      ins:'Chiedere dello stato civile e dei figli in un processo di selezione è illegale in molti paesi europei.',
      data:'McKinsey Global Institute 2020: le donne con figli sono il 30% meno propense a essere considerate per ruoli internazionali.'}},
  {id:'corp_sis2',sprite:'sis',gender:'f',label:'Coffee chat',type:'sis',required:false,gridX:8,gridY:9,
    dlg:{spk:'❤️ Beatrice — VP Analytics (Alleata)',color:'#e53935',
      txt:'Sei brava e stai lavorando bene. Ma c\'è una cosa che ho imparato — in questa azienda devi decidere cosa vuoi diventare e dirlo ad alta voce. Non aspettare che lo riconoscano. Io ho aspettato 4 anni. Poi ho detto al mio director "voglio diventare VP entro 2 anni — cosa devo fare?" È cambiato tutto.',
      chs:[
        {t:'Ha senso. Come si dice in modo che suoni ambizioso ma non "troppo"?',out:'ask_how'},
        {t:'Non mi è mai piaciuta l\'idea di dover "vendere" me stessa così esplicitamente.',out:'resist'},
        {t:'Possiamo fare una sessione pratica in cui simulo quella conversazione con il mio director?',out:'practice'},
        {t:'Le chiedo se ha mai avuto conseguenze negative per essere stata così esplicita sulla sua ambizione.',out:'consequences'},
      ]},
    outs:{
      ask_how: {msg:'Cerchi il modo concreto per comunicare ambizione senza penalizzazioni.',stat:{CLARITY:2,SKILL:1}},
      resist:  {msg:'La resistenza è comprensibile — il problema è che gli altri lo fanno.',stat:{RADAR:1,VOICE:-1}},
      practice:{msg:'Role-playing pratico: il modo più efficace per prepararsi.',stat:{SKILL:1,CLARITY:1,ENERGY:1}},
      consequences:{msg:'Capisci il rischio reale dietro il consiglio, non solo il beneficio.',stat:{RADAR:2,CLARITY:1}},
    },
    db:{pat:'Dichiarare l\'ambizione nelle corporate: il rischio del backlash e come navigarlo',
      ins:'Le donne che dichiarano apertamente ambizioni di carriera vengono valutate negativamente più spesso degli uomini.',
      data:'Bowles, Babcock & Lai (OBHDP, 2007): le donne che negoziano in modo assertivo per sé stesse vengono valutate negativamente il 30% delle volte.'}},
  {id:'corp_tech2',sprite:'tech',label:'Data governance',type:'tech',required:false,gridX:14,gridY:7,
    dlg:{spk:'💻 Sfida Tecnica — Corporate 2',color:'#f7c46a',
      txt:'Il team legale ha appena scoperto che il vostro data lake contiene dati personali di clienti europei che non avrebbero dovuto essere conservati secondo GDPR. Hai 48 ore per capire la portata del problema. Da dove inizi?',
      chs:[
        {t:'Mappo immediatamente i dataset coinvolti: chi li ha creati, quando, per quale scopo.',out:'map'},
        {t:'Notifica immediata al DPO (Data Protection Officer) e al team legale.',out:'escalate'},
        {t:'Costruisco un inventario dei dati con classificazione di rischio.',out:'inventory'},
        {t:'Fermo temporaneamente ogni nuovo utilizzo di quei dati, anche prima di aver completato la mappatura.',out:'freeze'},
      ]},
    outs:{
      map:      {msg:'Data lineage come primo passo.',stat:{SKILL:2,CLARITY:1}},
      escalate: {msg:'Il DPO deve saperlo subito.',stat:{VOICE:1,RADAR:1,CLARITY:2}},
      inventory:{msg:'Risk-based prioritization.',stat:{SKILL:2,RADAR:1}},
      freeze:   {msg:'Massima cautela — ma può rallentare team che dipendono da quei dati.',stat:{RADAR:2,CLARITY:1}},
    },
    db:{pat:'GDPR e data governance nelle corporate: il ruolo del data scientist',
      ins:'I data scientist nelle corporate sono spesso i primi a scoprire violazioni GDPR — e hanno responsabilità professionali di segnalazione.',
      data:'ENISA 2023: il 34% delle violazioni GDPR nelle corporate europee coinvolge dati personali conservati oltre il periodo necessario.'}},
];

// ══════════════════════════════════════════════════════════════
// CORPORATE LIVELLO 2 — "Corporate Analyst"
// ══════════════════════════════════════════════════════════════
export const CORPORATE_LEVEL2_ADDITIONS = [
  {id:'corp_level2_visibility',sprite:'col',gender:'m',label:'Riunione cross-team',type:'npc',level:2,required:false,gridX:4,gridY:2,
    dlg:{spk:'🧑‍💻 Collega di un altro team',color:'#4fc3f7',
      txt:'Sì allora, come abbiamo fatto noi, abbiamo ottimizzato la pipeline e ridotto i tempi del 40%.',
      chs:[
        {t:'Intervengo subito, con tono neutro: "Per chiarezza, il lavoro è stato fatto dal mio team."',out:'correct'},
        {t:'Lascio correre in riunione, ma dopo scrivo una nota di follow-up che chiarisce l\'attribuzione.',out:'followup'},
        {t:'Non dico nulla — sollevare la questione sembra sproporzionato per una frase.',out:'ignore'},
        {t:'Ne parlo privatamente con il collega subito dopo la riunione, prima di decidere se serve anche una nota scritta.',out:'private_first'},
      ]},
    outs:{
      correct:{msg:'Una correzione immediata, fattuale e senza conflitto è spesso la via più efficace.',stat:{VOICE:2,CLARITY:1}},
      followup:{msg:'Una nota scritta lascia traccia, anche se il momento in riunione è passato senza reazione.',stat:{CLARITY:1,NETWORK:1}},
      ignore:{msg:'Le micro-appropriazioni non corrette si accumulano — il pattern diventa invisibile proprio perché nessun singolo episodio sembra abbastanza grave.',stat:{VOICE:-1}},
      private_first:{msg:'Dai al collega la possibilità di correggersi prima di formalizzare nulla.',stat:{VOICE:1,NETWORK:2}},
    },
    db:{pat:'L\'attribuzione del merito nelle organizzazioni grandi e distribuite',
      ins:'Nelle organizzazioni grandi, dove pochi hanno visibilità diretta sul lavoro altrui, l\'attribuzione del merito dipende spesso da chi la racconta per prima — non solo da chi l\'ha fatta.',
      data:'HBR 2019: nelle grandi organizzazioni, le donne hanno il 27% in meno di probabilità di essere citate come autrici principali di un risultato di team cross-funzionale.'}},
  {id:'corp_level2_process',sprite:'tech',label:'Comitato tecnico',type:'tech',level:2,required:false,gridX:12,gridY:4,
    dlg:{spk:'💻 Sfida Tecnica — Approvazione architetturale',color:'#f7c46a',
      txt:'La tua proposta tecnica deve passare da un comitato di revisione che richiede settimane di processo per ogni eccezione. La tua soluzione migliore richiederebbe un\'eccezione. Come procedi?',
      chs:[
        {t:'Seguo il processo standard, anche se più lento — le eccezioni indeboliscono l\'architettura nel tempo.',out:'standard'},
        {t:'Chiedo un incontro informale col comitato prima della submission formale, per anticipare obiezioni.',out:'preempt'},
        {t:'Trovo una soluzione equivalente che non richieda eccezioni, anche se meno elegante.',out:'workaround'},
        {t:'Chiedo al comitato stesso quale sarebbe la via più rapida per un\'eccezione ben giustificata.',out:'ask_committee'},
      ]},
    outs:{
      standard:{msg:'Rispettare il processo ha un costo di tempo ma costruisce credibilità nel sistema.',stat:{CLARITY:2}},
      preempt:{msg:'Anticipare le obiezioni in modo informale accelera senza aggirare il processo.',stat:{SKILL:1,RADAR:2,VOICE:1}},
      workaround:{msg:'Pragmatico, ma una soluzione "meno elegante" per evitare la burocrazia può costare di più nel lungo periodo.',stat:{SKILL:1}},
      ask_committee:{msg:'Vai alla fonte per capire il percorso più rapido invece di indovinarlo.',stat:{CLARITY:2,RADAR:1}},
    },
    db:{pat:'Navigare la burocrazia tecnica nelle grandi organizzazioni',
      ins:'Nelle corporate, la competenza tecnica da sola non basta a far approvare una proposta — serve anche saper leggere e navigare i processi decisionali formali.',
      data:'McKinsey Organizational Health Index 2021: le aziende con processi di approvazione tecnica superiori a 4 settimane riportano il 45% in più di soluzioni "workaround" non documentate.'}},
];

// Bivio di carriera: la scelta qui determina il percorso (track) del livello 3.
export const CORPORATE_BRANCH_ADDITIONS = [
  {id:'corp_branch_choice',sprite:'mgr',gender:'f',label:'Piano di carriera',type:'npc',level:3,required:false,gridX:8,gridY:6,
    dlg:{spk:'👔 HR Business Partner — Piano di sviluppo',color:'#4fc3f7',
      txt:'È il momento di scegliere il tuo prossimo percorso formale: Senior Individual Contributor (approfondimento tecnico, senza persone a riporto) oppure Engineering Manager (gestione di un team). Cosa scegli?',
      chs:[
        {t:'Senior Individual Contributor — voglio restare vicina al codice e diventare un riferimento tecnico.',out:'expert'},
        {t:'Engineering Manager — voglio far crescere le persone e guidare un team.',out:'manager'},
      ]},
    outs:{
      expert:{msg:'Hai scelto il percorso da Senior Specialist.',stat:{SKILL:2,RADAR:1},track:'expert'},
      manager:{msg:'Hai scelto il percorso da Engineering Manager.',stat:{VOICE:1,NETWORK:2},track:'manager'},
    },
    db:{pat:'Il doppio binario tecnico/manageriale nelle grandi aziende tech',
      ins:'Le grandi organizzazioni tech ben strutturate offrono un percorso tecnico di pari livello (e pari retribuzione) rispetto a quello manageriale — nessuno dei due è "il passo successivo naturale" dell\'altro.',
      data:'Levels.fyi Career Ladders Report 2022: nelle grandi aziende tech, i livelli Staff/Principal Engineer (percorso tecnico) hanno compensi comparabili o superiori ai livelli Manager equivalenti.'}},
];

// ══════════════════════════════════════════════════════════════
// CORPORATE LIVELLO 3 — bivio: "Senior Specialist" vs "Engineering Manager"
// ══════════════════════════════════════════════════════════════
export const CORPORATE_LEVEL3_EXPERT_ADDITIONS = [
  {id:'corp_level3_expert',sprite:'tech',label:'Architecture Review Board',type:'tech',level:3,track:'expert',required:false,gridX:12,gridY:8,
    dlg:{spk:'💻 Sfida Tecnica — Sei nel comitato che decide gli standard',color:'#f7c46a',
      txt:'Come Senior Specialist siedi ora nel comitato che stabilisce gli standard tecnici per tutta l\'organizzazione. Un team propone un\'eccezione che velocizzerebbe il loro progetto ma creerebbe un precedente. Voti a favore?',
      chs:[
        {t:'Voto contro — gli standard esistono proprio per resistere alle pressioni caso per caso.',out:'against'},
        {t:'Voto a favore, ma propongo di rivedere lo standard stesso se questo caso si ripete.',out:'conditional'},
        {t:'Mi astengo — non voglio essere io a stabilire un precedente così impattante da sola.',out:'abstain'},
        {t:'Propongo di approvare l\'eccezione ma con una scadenza esplicita entro cui va sanata, invece di lasciarla come precedente permanente.',out:'sunset_clause'},
      ]},
    outs:{
      against:{msg:'La coerenza degli standard ha valore, ma un "no" rigido senza spiegazione rischia di sembrare burocrazia fine a sé stessa.',stat:{RADAR:1}},
      conditional:{msg:'Hai trattato il caso singolo come segnale per migliorare lo standard, non solo come eccezione da concedere o negare.',stat:{SKILL:1,CLARITY:2,RADAR:1}},
      abstain:{msg:'L\'autorità tecnica comporta la responsabilità di esprimersi, anche nei casi scomodi.',stat:{VOICE:-1}},
      sunset_clause:{msg:'Un compromesso solido, ma richiede un meccanismo di follow-up che qualcuno deve poi davvero seguire.',stat:{SKILL:1,CLARITY:1,RADAR:1}},
    },
    db:{pat:'L\'autorità tecnica a livello di organizzazione',
      ins:'Ai livelli tecnici più senior, il lavoro cambia natura: non si tratta più di risolvere problemi propri, ma di decidere le regole con cui altri risolveranno i loro.',
      data:'ACM Queue 2021: gli ingegneri a livello Staff+ riportano di dedicare oltre il 50% del tempo a decisioni di standard e influenza cross-team, contro meno del 10% a inizio carriera.'}},
];

export const CORPORATE_LEVEL3_MANAGER_ADDITIONS = [
  {id:'corp_level3_manager',sprite:'sis',gender:'f',label:'Colloquio di valutazione',type:'sis',level:3,track:'manager',required:false,gridX:5,gridY:3,
    dlg:{spk:'❤️ Elena — una persona del tuo team',color:'#e53935',
      txt:'Come Engineering Manager devi dare una valutazione di performance a una persona del team che tecnicamente è forte ma fatica a collaborare con gli altri. Come imposti la conversazione?',
      chs:[
        {t:'Apro con i punti di forza tecnici, poi affronto direttamente l\'impatto sulla collaborazione con esempi concreti.',out:'balanced'},
        {t:'Mi concentro solo sui risultati tecnici — la collaborazione è secondaria se il lavoro è fatto bene.',out:'skills_only'},
        {t:'Evito il tema della collaborazione per non creare tensione, e rimando la questione ad un\'altra volta.',out:'avoid'},
        {t:'Coinvolgo la persona stessa nel capire come vorrebbe essere supportata, invece di arrivare con una soluzione già pronta.',out:'co_design'},
      ]},
    outs:{
      balanced:{msg:'Riconoscere i punti di forza rende più ricevibile il feedback sulle aree di miglioramento.',stat:{VOICE:1,CLARITY:2,NETWORK:1}},
      skills_only:{msg:'Ignorare l\'impatto sulla collaborazione lascia che il problema si scarichi silenziosamente sul resto del team.',stat:{CLARITY:-1}},
      avoid:{msg:'Rimandare un feedback difficile raramente lo rende più facile — di solito il problema cresce.',stat:{VOICE:-1}},
      co_design:{msg:'Un approccio collaborativo, ma richiede più tempo di una soluzione impostata da te.',stat:{VOICE:1,NETWORK:1,CLARITY:1}},
    },
    db:{pat:'Il feedback difficile come competenza centrale del management tecnico',
      ins:'Gran parte del lavoro invisibile di chi gestisce un team tecnico consiste nel dare feedback che nessun processo formale automatizza — è una competenza relazionale, non solo di processo.',
      data:'Gallup State of the Manager 2023: i manager che danno feedback settimanale (anche informale) hanno team con engagement superiore del 3.5x rispetto a chi lo fa solo nelle revisioni annuali.'}},
];

// ══════════════════════════════════════════════════════════════
// PIVA ADDITIONS
// ══════════════════════════════════════════════════════════════

export const PIVA_ADDITIONS = [
  {id:'piva_contratto',sprite:'col',gender:'f',label:'Negoziazione',type:'npc',required:false,gridX:3,gridY:8,
    dlg:{spk:'👩‍💼 Cliente — Responsabile Acquisti',color:'#6af7c8',
      txt:'Abbiamo rivisto il contratto. Invece di 60 giorni di pagamento, le nostre policy prevedono 90. E abbiamo aggiunto una clausola di esclusiva — non può lavorare con nostri competitor per 12 mesi.',
      chs:[
        {t:'90 giorni di pagamento e 12 mesi di esclusiva cambiano significativamente il valore del contratto. Ho bisogno di rivedere la tariffa di conseguenza.',out:'reprice'},
        {t:'La clausola di esclusiva non è accettabile — limita la mia libertà professionale in modo sproporzionato.',out:'reject_exclusive'},
        {t:'Possiamo negoziare: 60 giorni o compenso per il ritardo? E l\'esclusiva la posso accettare ridotta a 3 mesi.',out:'negotiate'},
        {t:'Chiedo di separare le due clausole: negozio prima l\'esclusiva, poi separatamente i giorni di pagamento.',out:'separate'},
      ]},
    outs:{
      reprice:         {msg:'Colleghi le condizioni contrattuali al prezzo.',stat:{VOICE:2,CLARITY:1},revenueEffect:{type:'contract',days:60,quality:1.15}},
      reject_exclusive:{msg:'Linea chiara su ciò che non è negoziabile.',stat:{VOICE:2,ENERGY:1},revenueEffect:[{type:'contract',days:50,quality:1.0},{type:'reputation',delta:0.05}]},
      negotiate:       {msg:'Proponi alternative concrete.',stat:{VOICE:1,SKILL:1,CLARITY:2},revenueEffect:[{type:'contract',days:58,quality:1.10},{type:'reputation',delta:0.03}]},
      separate:        {msg:'Scomponi il pacchetto per negoziare ogni clausola sul proprio merito.',stat:{VOICE:1,CLARITY:2},revenueEffect:{type:'contract',days:55,quality:1.05}},
    },
    db:{pat:'Le clausole contrattuali abusive e la negoziazione per freelance',
      ins:'Le clausole di esclusiva e i termini di pagamento a 90+ giorni sono tra le condizioni contrattuali più problematiche per i freelance.',
      data:'Osservatorio Freelance Italia 2023: il 54% dei freelance italiani subisce ritardi di pagamento sistematici.'}},
  {id:'piva_fiscale',sprite:'mgr',gender:'f',label:'Studio commercialista',type:'npc',required:false,gridX:12,gridY:4,
    dlg:{spk:'📊 Commercialista — Prima consulenza',color:'#6af7c8',
      txt:'Per una professionista come lei il regime forfettario ha senso fino a 85k€ di fatturato. Sopra, conviene aprire una SRL. Ma tenga presente: con la SRL ci sono costi fissi di gestione, obbligo di assemblea, bilancio... Forse per ora meglio mantenere la P.IVA semplice.',
      chs:[
        {t:'Capisco la complessità. Può farmi un confronto numerico dei due scenari a 100k€ e 150k€ di fatturato?',out:'compare'},
        {t:'Quali sono i costi fissi esatti della SRL e il break-even rispetto al forfettario?',out:'details'},
        {t:'"Forse per ora" — su cosa basa questa valutazione? Ha altri parametri oltre al fatturato attuale?',out:'probe'},
        {t:'Chiedo anche il parere di un altro commercialista, per confrontare due valutazioni indipendenti.',out:'second_opinion'},
      ]},
    outs:{
      compare:{msg:'Chiedi proiezioni numeriche concrete, non opinioni.',stat:{CLARITY:2,SKILL:1}},
      details:{msg:'Vuoi i numeri precisi per decidere autonomamente.',stat:{CLARITY:2,RADAR:1}},
      probe:  {msg:'Questioniy il consiglio generico chiedendo i criteri.',stat:{RADAR:2,VOICE:1}},
      second_opinion:{msg:'Un secondo parere indipendente rafforza la decisione, ma costa tempo e un\'altra consulenza.',stat:{RADAR:2,CLARITY:1}},
    },
    db:{pat:'La pianificazione fiscale come competenza strategica per il lavoro autonomo',
      ins:'La scelta tra regime forfettario, ordinario, e SRL è una delle decisioni più impattanti per un freelance in crescita.',
      data:'CGIA Mestre 2023: il carico fiscale medio per un professionista in regime ordinario è del 48-52% del reddito lordo.'}},
  {id:'piva_sis2',sprite:'sis',gender:'f',label:'Evento community',type:'sis',required:false,gridX:5,gridY:9,
    dlg:{spk:'❤️ Giulia — Community organizer (Alleata)',color:'#e53935',
      txt:'Sto costruendo una community di professioniste AI in Italia — meetup mensili, canale privato per condividere opportunità e pricing, sessioni di skill sharing. Vuoi far parte del nucleo fondatore?',
      chs:[
        {t:'Sì — cosa serve concretamente per i prossimi 3 mesi per far partire la community?',out:'builder'},
        {t:'Mi interessa molto. Posso contribuire con sessioni su AI engineering — cosa ti manca di più?',out:'contribute'},
        {t:'Sono dentro. E conosco altre due professioniste che dovrebbero assolutamente essere nel nucleo fondatore.',out:'expand'},
        {t:'Chiedo prima quanto tempo realisticamente richiede il ruolo di founding member, per non sovrastimare quanto posso contribuire.',out:'time_check'},
      ]},
    outs:{
      builder:   {msg:'Entri come builder, non solo come partecipante.',stat:{NETWORK:2,CLARITY:1,SKILL:1}},
      contribute:{msg:'Porti valore specifico.',stat:{NETWORK:2,SKILL:1}},
      expand:    {msg:'Espandi subito il nucleo.',stat:{NETWORK:3,RADAR:1}},
      time_check:{msg:'Valuti il carico prima di impegnarti.',stat:{CLARITY:2}},
    },
    db:{pat:'Le community professionali come infrastruttura di carriera per il lavoro autonomo',
      ins:'Le community professionali femminili nel tech hanno dimostrato effetti misurabili su tariffe, pipeline di clienti, e resilienza professionale.',
      data:'Women Who Code Annual Survey 2023: le professioniste che partecipano attivamente a community di pari hanno tariffe mediamente il 19% più alte.'}},
  {id:'piva_tech2',sprite:'tech',label:'Proposta complessa',type:'tech',required:false,gridX:14,gridY:6,
    dlg:{spk:'💻 Sfida Tecnica — P.IVA 2',color:'#f7c46a',
      txt:'Un cliente vuole implementare un chatbot AI per il customer service. Ha 5000 ticket storici. Ti chiede di scegliere tra: (A) fine-tuning di un LLM open source, (B) RAG su un modello base, (C) prompt engineering su GPT-4. Budget: 25k€. Timeline: 8 settimane.',
      chs:[
        {t:'RAG è quasi sempre la scelta giusta con 5000 ticket: aggiornabile senza retraining, interpretabile, nei costi.',out:'rag'},
        {t:'Dipende dal tipo di domande. Se sono domande su policy e prodotti, RAG. Se richiedono ragionamento complesso, prompt engineering prima.',out:'depends'},
        {t:'Prima faccio un\'analisi dei 5000 ticket per capire la distribuzione delle domande — poi scelgo l\'architettura.',out:'data_first'},
        {t:'Comincio con prompt engineering su GPT-4 per validare il caso d\'uso in una settimana, poi decido se serve altro.',out:'validate_fast'},
      ]},
    outs:{
      // Budget e giorni sono fissati dal cliente (25k€/8 settimane, citati
      // nel testo): la scelta tecnica non cambia il contratto corrente, ma
      // la qualità della delivery costruisce (o meno) reputazione futura.
      rag:       {msg:'Scelta corretta e ben motivata.',stat:{SKILL:2,CLARITY:1},revenueEffect:[{type:'contract',days:40,quality:1.0},{type:'reputation',delta:0.03}]},
      depends:   {msg:'Risposta sfumata che mostra comprensione profonda.',stat:{SKILL:2,RADAR:1},revenueEffect:[{type:'contract',days:40,quality:1.0},{type:'reputation',delta:0.05}]},
      data_first:{msg:'Dati prima dell\'architettura.',stat:{SKILL:1,CLARITY:2,RADAR:1},revenueEffect:[{type:'contract',days:40,quality:1.0},{type:'reputation',delta:0.07}]},
      validate_fast:{msg:'Il più veloce da validare, ma può non reggere a lungo termine su costi/qualità.',stat:{SKILL:1,CLARITY:2},revenueEffect:[{type:'contract',days:40,quality:1.0},{type:'reputation',delta:0.02}]},
    },
    db:{pat:'RAG vs fine-tuning vs prompt engineering: quando usare cosa',
      ins:'Fine-tuning ha senso solo con dati di training di alta qualità (10k+ esempi supervisionati). RAG è più flessibile, aggiornabile, e interpretabile.',
      data:'"You should fine-tune only when you have tried prompting and RAG and they are not sufficient." — Andrej Karpathy, 2023.'}},
];

// ══════════════════════════════════════════════════════════════
// PIVA LIVELLO 2 — "Freelance Consultant"
// ══════════════════════════════════════════════════════════════
export const PIVA_LEVEL2_ADDITIONS = [
  {id:'piva_level2_pricing',sprite:'mgr',gender:'f',label:'Trattativa tariffe',type:'npc',level:2,required:false,gridX:4,gridY:2,
    dlg:{spk:'💼 Potenziale cliente — Budget limitato',color:'#6af7c8',
      txt:'Il tuo preventivo è più alto di quello di altri freelance che abbiamo sentito. Puoi farci uno sconto?',
      chs:[
        {t:'Spiego cosa include il prezzo (esperienza, garanzie, tempi) senza scendere sotto la mia tariffa minima.',out:'hold'},
        {t:'Faccio uno sconto del 20% — è un cliente importante e non voglio perderlo.',out:'discount'},
        {t:'Propongo di ridurre lo scope del progetto per rientrare nel loro budget, mantenendo la tariffa oraria.',out:'scope'},
        {t:'Chiedo al cliente con quali altri freelance ha parlato e cosa includevano le loro tariffe.',out:'benchmark_ask'},
      ]},
    outs:{
      hold:{msg:'Difendere il prezzo spiegando il valore, senza svendersi, protegge anche i tuoi prossimi preventivi.',stat:{VOICE:2,CLARITY:1},revenueEffect:{type:'contract',days:20,quality:1.15}},
      discount:{msg:'Ogni sconto concesso sotto pressione diventa il nuovo punto di riferimento per le trattative successive.',stat:{VOICE:-1},revenueEffect:{type:'contract',days:20,quality:0.85}},
      scope:{msg:'Hai protetto il valore orario riducendo il perimetro — una tecnica di negoziazione più sostenibile dello sconto secco.',stat:{CLARITY:2,RADAR:1},revenueEffect:{type:'contract',days:16,quality:1.05}},
      benchmark_ask:{msg:'Verifichi se il confronto è davvero comparabile prima di reagire al prezzo.',stat:{RADAR:2,CLARITY:1},revenueEffect:{type:'contract',days:20,quality:1.05}},
    },
    db:{pat:'La tariffa come segnale di valore, non solo di costo',
      ins:'Scontare la tariffa sotto pressione insegna al mercato (e a te stessa) che il tuo prezzo è negoziabile all\'infinito — ridurre lo scope, non il prezzo orario, è spesso la via più sostenibile.',
      data:'Freelancers Union 2022: le freelance donne applicano in media tariffe orarie del 16% inferiori a quelle dei colleghi uomini a parità di esperienza dichiarata.'}},
  {id:'piva_level2_scope',sprite:'col',gender:'f',label:'Cliente ricorrente',type:'npc',level:2,required:false,gridX:11,gridY:4,
    dlg:{spk:'📧 Cliente storico — Richiesta extra',color:'#6af7c8',
      txt:'Un\'altra piccola aggiunta fuori contratto — lo so, è la terza questo mese! Ma anche questa dovrebbe volerci un attimo, giusto?',
      chs:[
        {t:'Tengo un log di tutte le richieste extra e alla fine del mese propongo di fatturarle insieme.',out:'log'},
        {t:'La faccio gratis come le altre — non voglio sembrare pignola per richieste piccole.',out:'free'},
        {t:'Dico chiaramente che da ora le richieste fuori contratto verranno preventivate singolarmente.',out:'boundary'},
        {t:'Faccio questa extra gratis, ma le mando comunque un riepilogo scritto di tutte le richieste extra fatte finora, senza fatturarle.',out:'log_free'},
      ]},
    outs:{
      // Cliente ricorrente = fatturato concentrato su una sola relazione:
      // registra sempre il rischio di concentrazione (§8.3), indipendente
      // da quanto bene la scelta gestisce la situazione.
      log:{msg:'Documentare prima di reagire ti dà dati concreti per la conversazione, invece di un\'impressione vaga.',stat:{CLARITY:2,SKILL:1},revenueEffect:{type:'contract',days:15,quality:1.05,concentration:0.6}},
      free:{msg:'Il "piccolo extra gratis" ripetuto diventa un\'aspettativa implicita, non un favore occasionale.',stat:{VOICE:-1},revenueEffect:{type:'contract',days:15,quality:0.85,concentration:0.6}},
      boundary:{msg:'Un confine esplicito, comunicato chiaramente, protegge la relazione a lungo termine meglio del silenzio accumulato.',stat:{VOICE:2,CLARITY:1},revenueEffect:{type:'contract',days:15,quality:1.10,concentration:0.6}},
      log_free:{msg:'Costruisce un dato utile per dopo, ma non risolve subito il pattern.',stat:{CLARITY:2},revenueEffect:{type:'contract',days:15,quality:0.95,concentration:0.6}},
    },
    db:{pat:'Lo scope creep incrementale nei rapporti freelance di lunga durata',
      ins:'Lo scope creep raramente arriva come una richiesta grande ed evidente — cresce per piccoli incrementi, ognuno troppo piccolo per giustificare un confine.',
      data:'Harvard Business Review 2020: i freelance che formalizzano per iscritto anche le piccole modifiche di scope riportano il 30% in meno di dispute su pagamenti.'}},
];

// ══════════════════════════════════════════════════════════════
// PIVA LIVELLO 3 — "Founder"
// ══════════════════════════════════════════════════════════════
export const PIVA_LEVEL3_ADDITIONS = [
  {id:'piva_level3_hire',sprite:'sis',gender:'f',label:'Prima collaboratrice',type:'sis',level:3,required:false,gridX:5,gridY:3,
    dlg:{spk:'❤️ Marta — freelance che vorresti coinvolgere',color:'#e53935',
      txt:'Hai troppo lavoro per gestirlo da sola e stai pensando di coinvolgere una prima collaboratrice in modo stabile. È il passo da freelance solista a founder di qualcosa di più grande. Cosa ti preoccupa di più, e come lo affronti?',
      chs:[
        {t:'Il rischio economico — le propongo prima una collaborazione a progetto, non un impegno fisso.',out:'gradual'},
        {t:'Perdere il controllo sulla qualità — le lascio solo compiti marginali, tengo il resto per me.',out:'control'},
        {t:'Decido di fare il salto pieno — le offro un accordo stabile e costruisco processi di qualità condivisi.',out:'commit'},
        {t:'Le propongo un periodo di prova breve e retribuito, per valutare insieme se la collaborazione funziona.',out:'trial'},
      ]},
    outs:{
      gradual:{msg:'Un impegno graduale riduce il rischio reciproco ed è una scelta imprenditoriale ragionevole, non un ripiego.',stat:{CLARITY:1,RADAR:2}},
      control:{msg:'Trattenere tutto il lavoro di valore per te stessa rende impossibile scalare davvero oltre te stessa.',stat:{RADAR:-1}},
      commit:{msg:'Hai fatto il salto da freelance a chi costruisce qualcosa di più grande di sé — con la struttura giusta per farlo funzionare.',stat:{VOICE:1,NETWORK:2,RADAR:2}},
      trial:{msg:'Un test reciproco a basso rischio prima di un impegno pieno.',stat:{CLARITY:2,RADAR:1}},
    },
    db:{pat:'Il salto da freelance solista a founder',
      ins:'Il passaggio da "vendo il mio tempo" a "costruisco qualcosa che funziona anche senza il mio tempo diretto" è la definizione stessa del diventare founder, non solo una crescita di fatturato.',
      data:'ISTAT 2023: solo il 12% delle partite IVA italiane nel settore digitale evolve in una struttura con dipendenti o collaboratori stabili entro 5 anni.'}},
  {id:'piva_level3_brand',sprite:'tech',label:'Posizionamento dello studio',type:'tech',level:3,required:false,gridX:12,gridY:8,
    dlg:{spk:'💻 Sfida Tecnica — Costruire un\'offerta scalabile',color:'#f7c46a',
      txt:'Finora ogni progetto è stato su misura, costruito da zero. Per crescere oltre te stessa, devi decidere se e come standardizzare la tua offerta tecnica. Che strada scegli?',
      chs:[
        {t:'Costruisco un framework/toolkit interno riutilizzabile, che chi lavora con te può imparare a usare.',out:'productize'},
        {t:'Continuo a costruire tutto su misura — è quello che ha funzionato finora.',out:'custom'},
        {t:'Standardizzo solo la parte commerciale (preventivi, contratti), lascio il tecnico caso per caso.',out:'partial'},
        {t:'Standardizzo prima un solo tipo di progetto (quello che ricorre più spesso), lascio su misura tutto il resto.',out:'one_type'},
      ]},
    outs:{
      productize:{msg:'Un toolkit riutilizzabile è ciò che rende un\'offerta trasferibile ad altre persone, non solo replicabile da te.',stat:{SKILL:2,RADAR:2}},
      custom:{msg:'Il su misura funziona per un freelance solista, ma limita strutturalmente quanto puoi scalare oltre te stessa.',stat:{SKILL:1}},
      partial:{msg:'Un buon primo passo, anche se il collo di bottiglia tecnico resta irrisolto nel lungo periodo.',stat:{CLARITY:1}},
      one_type:{msg:'Standardizzi dove conta di più prima di generalizzare.',stat:{SKILL:1,CLARITY:2}},
    },
    db:{pat:'Da servizio su misura a offerta scalabile',
      ins:'Scalare uno studio oltre la propria persona richiede di trasformare know-how tacito (quello che sai fare tu) in processi e strumenti che altri possono imparare a usare.',
      data:'Harvard Business Review 2018: le micro-imprese di servizi che investono in "produttizzazione" della propria offerta crescono in media 2.3 volte più velocemente di quelle che restano interamente custom.'}},
];

// ══════════════════════════════════════════════════════════════
// WORLD 5 — PA / RICERCA / ACCADEMIA
// ══════════════════════════════════════════════════════════════

export const WORLD_DEBRIEF = {
  pmi:{
    theme:'Il lavoro invisibile e il ruolo vago',
    levels:[
      {
        min:5,
        insight:'Nelle PMI il ruolo tech è spesso indefinito per design, non per caso. Il "fai un po\' di tutto" è una struttura che consuma risorse senza riconoscerle. Hai iniziato a vedere questo meccanismo.',
        takeaway:'Documentare il proprio lavoro non è burocrazia — è il modo per rendere visibile ciò che altrimenti rimane invisibile nelle valutazioni.',
        badge:'👁️ Occhi aperti'
      },
      {
        min:7,
        insight:'Il credito gap e il lavoro invisibile si sommano: fai più di quello che è scritto nel tuo ruolo, e quello che fai non viene attribuito correttamente. Nelle PMI questo schema si ripete sistematicamente — non è sfortuna, è struttura.',
        takeaway:'La strategia più efficace nella PMI è duplice: chiedere chiarezza scritta sul ruolo all\'inizio, e costruire alleanze con chi può nominare il tuo lavoro quando tu non sei nella stanza.',
        badge:'🗺️ Mappa del territorio'
      },
      {
        min:9,
        insight:'Hai esplorato quasi ogni angolo di questo contesto. La PMI offre esposizione reale e impatto immediato — ma il prezzo è spesso la mancanza di struttura, mentorship e riconoscimento formale.',
        takeaway:'Il valore della PMI è nell\'esperienza concreta che costruisci. Portala fuori documentata: non "ho lavorato in una PMI", ma "ho costruito X che ha prodotto Y risultato misurabile".',
        badge:'🏭 Esperta di contesto PMI'
      }
    ]
  },
  startup:{
    theme:'Il credit gap e i confini professionali',
    levels:[
      {
        min:5,
        insight:'Le startup vendono autonomia e impatto — e spesso le mantengono. Ma "cultura famiglia" e "siamo tutti fondatori" sono frame che possono normalizzare confini assenti e lavoro non riconosciuto.',
        takeaway:'In una startup, documentare per iscritto dopo ogni conversazione importante non è paranoia — è professionalità.',
        badge:'📝 Prima documentazione'
      },
      {
        min:7,
        insight:'Il credit gap nelle startup è il 35% più alto che nelle corporate, principalmente per l\'informalità dei processi. Hai visto come si manifesta e come le alleate possono aiutare a renderlo visibile sistematicamente.',
        takeaway:'Costruire una rete di mutuo riconoscimento con 2-3 colleghe è la strategia più efficace contro il credit gap.',
        badge:'🤝 Rete di supporto'
      },
      {
        min:9,
        insight:'Hai esplorato l\'intera ecologia della startup: il founder visionario, il collega competitivo, la cultura del crunch, il pitch agli investitori. La startup è l\'ambiente con il rapporto rischio/opportunità più alto.',
        takeaway:'Nella startup la tua traiettoria dipende molto dalla qualità delle relazioni che costruisci. Scegli le tue battaglie con cura.',
        badge:'🚀 Navigatrice di startup'
      }
    ]
  },
  consulenza:{
    theme:'Visibilità, criteri opachi e double bind',
    levels:[
      {
        min:5,
        insight:'In consulenza il lavoro tecnico è necessario ma non sufficiente. I criteri di avanzamento sono spesso impliciti e costruiti su modelli di "executive presence" che riflettono norme maschili.',
        takeaway:'Chiedere esplicitamente i criteri di promozione non è aggressivo — è professionale.',
        badge:'🔍 Prima mappatura'
      },
      {
        min:7,
        insight:'Il double bind — troppo assertiva se parla, poco propositiva se tace — è documentato e sistematico nelle consulenze.',
        takeaway:'Il mutuo riconoscimento attivo non è solo gentilezza — è strategia.',
        badge:'📣 Amplification in pratica'
      },
      {
        min:9,
        insight:'Hai attraversato l\'intera esperienza consulenza: il partner con aspettative impossibili, il pay gap, il mentoring non riconosciuto, le sfide tecniche con stakeholder multipli.',
        takeaway:'Il brand che costruisci in consulenza è il tuo asset più prezioso. Gestiscilo attivamente.',
        badge:'🏢 Esperta di consulenza'
      }
    ]
  },
  corporate:{
    theme:'Reti informali, sponsor e criteri di potenziale',
    levels:[
      {
        min:5,
        insight:'La large corporate ha risorse e stabilità — ma le opportunità circolano attraverso reti informali che tendono a riprodurre l\'omofilia.',
        takeaway:'La distinzione mentore/sponsor è concreta e importante. Conta quante persone nella tua organizzazione spenderebbero capitale politico per te.',
        badge:'🌐 Mappa del potere'
      },
      {
        min:7,
        insight:'Il sistema 9-box, i criteri opachi di "potenziale", la maternità penalty nella versione "protettiva" — hai visto come le corporate producono discriminazione strutturale attraverso meccanismi che sembrano neutri.',
        takeaway:'Dichiarare l\'ambizione esplicitamente — ancorandola agli obiettivi dell\'organizzazione — riduce il backlash.',
        badge:'📊 Criteri visibili'
      },
      {
        min:9,
        insight:'Hai esplorato l\'intera ecologia corporate: dalla valutazione opaca al networking informale, dalla mobilità internazionale con domande illegali alla governance dei dati.',
        takeaway:'Nelle corporate il cambiamento strutturale è lento, ma il tuo percorso individuale può essere rapido se costruito correttamente.',
        badge:'🏗️ Esperta di corporate'
      }
    ]
  },
  piva:{
    theme:'Pricing, confini e autonomia sostenibile',
    levels:[
      {
        min:5,
        insight:'Il lavoro autonomo massimizza la libertà — e massimizza anche la responsabilità di proteggere quella libertà. Il pricing svalutato e lo scope creep sono i due pattern che consumano di più l\'autonomia reale.',
        takeaway:'La tariffa giornaliera non è un\'opinione — è il risultato di un calcolo.',
        badge:'💰 Valore del lavoro'
      },
      {
        min:7,
        insight:'Il bias di svalutazione del proprio lavoro è documentato e sistematico nelle freelance donna. La rete professionale è la risposta strutturale più efficace.',
        takeaway:'Trovare 3-5 freelance con cui condividere pricing, segnalare clienti scorretti e passare lavoro in eccesso vale più di qualsiasi ottimizzazione individuale.',
        badge:'🤝 Community come strategia'
      },
      {
        min:9,
        insight:'Hai attraversato l\'esperienza completa del lavoro autonomo: il primo cliente che svaluta, lo scope creep notturno, la rete come infrastruttura, il pitch agli investitori, le scelte fiscali.',
        takeaway:'Autonomia sostenibile richiede tre cose: tariffe che riflettono il valore reale, confini professionali comunicati in anticipo, e una rete che ti supporta.',
        badge:'💡 Fondatrice consapevole'
      }
    ]
  },
  pa:{
    theme:'Struttura pubblica, precariato e impatto sistemico',
    levels:[
      {
        min:5,
        insight:'La PA e l\'accademia offrono qualcosa che il privato non ha: la possibilità di un impatto sistemico reale, su scala pubblica. Il prezzo è la lentezza strutturale e, nell\'accademia, un precariato documentato tra i più lunghi d\'Europa.',
        takeaway:'Nella PA il "quick win" è la strategia più efficace per costruire credibilità.',
        badge:'🏛️ Prima navigazione PA'
      },
      {
        min:7,
        insight:'Il precariato accademico italiano ha una struttura che premia la pazienza e la rete più che il merito puro. Le reti di supporto reciproco tra ricercatrici sono documentatamente efficaci.',
        takeaway:'Costruire visibilità internazionale — anche senza spostarsi fisicamente — attraverso conferenze, preprint, collaborazioni remote cambia le prospettive in modo non lineare.',
        badge:'🌍 Rete internazionale'
      },
      {
        min:9,
        insight:'Hai attraversato l\'esperienza completa della PA/ricerca: il concorso con bias impliciti, la burocrazia dei sistemi legacy, il precariato strutturale, il trasferimento tecnologico, il grant writing europeo.',
        takeaway:'Il profilo ibrido — ricercatrice con competenze di comunicazione pubblica e policy — è il più raro e il più necessario nell\'ecosistema italiano dell\'AI.',
        badge:'🎓 Ricercatrice-ponte'
      }
    ]
  }
};

function typeOf(n){
  if(n.type) return n.type;
  if(n.sprite==='sis'||n.id.includes('sister')||n.id.includes('_sis')) return 'sis';
  if(n.sprite==='tech'||n.id.startsWith('tech_')||n.id.includes('_tech')) return 'tech';
  return 'npc';
}

// ══════════════════════════════════════════════════════════════
// PATCH FUNCTION
// ══════════════════════════════════════════════════════════════

function patchWorldsV12(){
  // WORLD_DEFS_NEW / WORLD_INTROS_NEW contengono i mondi Corporate e P.IVA,
  // definiti separatamente ma mai uniti agli oggetti base — senza questo
  // merge WORLD_DEFS.corporate/.piva restano undefined e il resto della
  // funzione crasha appena li legge.
  Object.assign(WORLD_DEFS, WORLD_DEFS_NEW);
  Object.assign(WORLD_INTROS, WORLD_INTROS_NEW);

  ['pmi','startup','consulenza'].forEach(wid=>{
    if(!WORLD_DEFS[wid]) return;
    WORLD_DEFS[wid].npcs.forEach(n=>{ n.type=typeOf(n); });
  });

  const pmiReq=['manager','collega','sister','tech_pmi'];
  WORLD_DEFS.pmi.npcs.forEach(n=>{if(!n.hasOwnProperty('required'))n.required=pmiReq.includes(n.id);});
  WORLD_DEFS.pmi.npcs.push(...PMI_ADDITIONS);
  WORLD_DEFS.pmi.npcs.push(...PMI_AUTH_ADDITIONS);
  WORLD_DEFS.pmi.npcs.push(...PMI_LEVEL2_ADDITIONS);
  WORLD_DEFS.pmi.npcs.push(...PMI_LEVEL3_ADDITIONS);

  const startupReq=['founder','collega_startup','sister_startup','tech_startup'];
  WORLD_DEFS.startup.npcs.forEach(n=>{if(!n.hasOwnProperty('required'))n.required=startupReq.includes(n.id);});
  WORLD_DEFS.startup.npcs.push(...STARTUP_ADDITIONS);
  WORLD_DEFS.startup.npcs.push(...STARTUP_LEVEL2_ADDITIONS);
  WORLD_DEFS.startup.npcs.push(...STARTUP_LEVEL3_ADDITIONS);

  const consReq=['partner','double_bind','sister_cons','tech_cons'];
  WORLD_DEFS.consulenza.npcs.forEach(n=>{if(!n.hasOwnProperty('required'))n.required=consReq.includes(n.id);});
  WORLD_DEFS.consulenza.npcs.push(...CONSULENZA_ADDITIONS);
  WORLD_DEFS.consulenza.npcs.push(...CONSULENZA_LEVEL2_ADDITIONS);
  WORLD_DEFS.consulenza.npcs.push(...CONSULENZA_BRANCH_ADDITIONS);
  WORLD_DEFS.consulenza.npcs.push(...CONSULENZA_LEVEL3_EXPERT_ADDITIONS);
  WORLD_DEFS.consulenza.npcs.push(...CONSULENZA_LEVEL3_MANAGER_ADDITIONS);

  const corpReq=['hr_corp','sister_corp','maternity','tech_corp'];
  WORLD_DEFS.corporate.npcs.forEach(n=>{
    n.type=typeOf(n);
    if(!n.hasOwnProperty('required'))n.required=corpReq.includes(n.id);
  });
  WORLD_DEFS.corporate.npcs.push(...CORPORATE_ADDITIONS);
  WORLD_DEFS.corporate.npcs.push(...CORPORATE_LEVEL2_ADDITIONS);
  WORLD_DEFS.corporate.npcs.push(...CORPORATE_BRANCH_ADDITIONS);
  WORLD_DEFS.corporate.npcs.push(...CORPORATE_LEVEL3_EXPERT_ADDITIONS);
  WORLD_DEFS.corporate.npcs.push(...CORPORATE_LEVEL3_MANAGER_ADDITIONS);

  const pivaReq=['primo_cliente','sister_piva','scope_creep','tech_piva'];
  WORLD_DEFS.piva.npcs.forEach(n=>{
    n.type=typeOf(n);
    if(!n.hasOwnProperty('required'))n.required=pivaReq.includes(n.id);
  });
  WORLD_DEFS.piva.npcs.push(...PIVA_ADDITIONS);
  WORLD_DEFS.piva.npcs.push(...PIVA_LEVEL2_ADDITIONS);
  WORLD_DEFS.piva.npcs.push(...PIVA_LEVEL3_ADDITIONS);

  WORLD_DEFS.pa={
    label:'WORLD 5 · PA / RICERCA / ACCADEMIA',
    palette:{floor:0x1a0f2e,wall:0x2e1a4a,accent:0x4a2a6a,bg:0x0d0810},
    exits:[{id:'end_pa',label:'FINE →',color:0xf48fb1,x:0.88,y:0.55}],
    npcs:[...W5_NPCS,...PA_ADDITIONS,...PA_LEVEL2_ADDITIONS,...PA_LEVEL3_ADDITIONS],
  };
  WORLD_INTROS.pa={
    title:'PA / RICERCA / ACCADEMIA',emoji:'🎓',
    what:'Università, enti di ricerca, pubblica amministrazione, think tank. Stabilità relativa, impatto pubblico, burocrazia strutturale.',
    role:'Come data/AI professional nella PA o nell\'accademia lavori su problemi ad alto impatto sociale con vincoli di risorse, normativa e tempi molto diversi dal privato.',
    pros:['Impatto su scala pubblica','Stabilità (nel pubblico)','Libertà di ricerca (nell\'accademia)'],
    cons:['Burocrazia e lentezza decisionale','Precariato strutturale nell\'accademia','Retribuzioni spesso inferiori al privato'],
    color:'#f48fb1',
  };
  INNER_CRITICS.pa=PA_INNER_CRITICS[0];
  INNER_CRITICS.pa2=PA_INNER_CRITICS[1];
}

patchWorldsV12();
