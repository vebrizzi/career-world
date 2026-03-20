// ══════════════════════════════════════════════════════════════
// CAREER WORLD DATA — v14
// ══════════════════════════════════════════════════════════════
// Edit this file to update all game content:
//   - UI_TEXTS:   tutti i testi statici dell'interfaccia (NUOVO)
//   - Assessment questions (STEPS)
//   - Score mapping (SMAP)
//   - Character classes (CLASSES)
//   - World definitions: NPC dialogues, choices, debriefs (WORLD_DEFS)
//   - World intros: titles, pro/cons (WORLD_INTROS)
//   - Inner critic dialogues (INNER_CRITICS)
//   - Patch function that wires everything together (patchWorldsV12)
//
// HOW TO EDIT:
//   1. Find the NPC/world you want to change by searching for its id
//   2. Edit the txt, chs, outs, or db fields
//   3. Save the file — reload the game in the browser
//   4. No build step required.
//
// STRUCTURE OF AN NPC:
//   id:       unique identifier
//   sprite:   'mgr'|'sis'|'col'|'tech'|'crit'
//   label:    location label shown in game
//   type:     'npc'|'sis'|'tech'
//   required: true|false (counts toward door unlock)
//   gridX/Y:  position in the room grid
//   dlg.spk:  speaker name
//   dlg.txt:  dialogue text
//   dlg.chs:  array of {t: choice text, out: outcome key}
//   outs:     {outcomeKey: {msg: feedback, stat: {STAT: delta}}}
//   db.pat:   pattern name shown in debrief
//   db.ins:   insight text
//   db.data:  research citation
// ══════════════════════════════════════════════════════════════


// ══════════════════════════════════════════════════════════════
// UI_TEXTS — testi statici dell'interfaccia
// ──────────────────────────────────────────────────────────────
// FONTE: index.html — tutti i testi hardcoded estratti qui.
// index.html li legge tramite applyUITexts() al DOMContentLoaded
// e tramite riferimenti diretti nelle funzioni di rendering JS.
//
// CONVENZIONE DI COMMENTO:
//   @screen   → quale schermata/sezione usa il testo
//   @element  → id o classe dell'elemento HTML che lo ospita
//   @impact   → cosa succede se si modifica (UX, logica, punteggi)
// ══════════════════════════════════════════════════════════════

const UI_TEXTS = {

  // ──────────────────────────────────────────────────────────
  // META — tag <title> e versione
  // ──────────────────────────────────────────────────────────
  meta: {
    // @element  <title>
    // @impact   Cambia il titolo nella tab del browser. Non impatta logica.
    page_title: 'Career World · alpha 1.0.35',

    // @screen   #s-title, sotto il logo pixel
    // @element  div inline con font Space Mono
    // @impact   Visibile nella title screen. Aggiornare ad ogni release.
    version: 'ALPHA 1.0.35',
  },

  // ──────────────────────────────────────────────────────────
  // TITLE SCREEN — #s-title
  // ──────────────────────────────────────────────────────────
  title: {
    // @element  .t-pixel  (font Press Start 2P, animato)
    // @impact   Branding principale. Il '\n' diventa <br> in HTML.
    //           Non modificare senza aggiornare il CSS dell'animazione tpulse.
    game_title: 'CAREER\nWORLD',

    // @element  .t-sub  (Space Mono, muted)
    // @impact   Tono. Non impatta logica.
    tagline: '// navigare il mercato tech con consapevolezza',

    // @element  .t-desc  (DM Sans, 3 righe)
    // @impact   Onboarding del giocatore. "Nessun game over" è un principio
    //           pedagogico centrale — rimuoverlo cambia le aspettative.
    //           La riga 3 usa <strong> per l'enfasi visiva.
    description: 'Un gioco per esplorare il mondo del lavoro.<br>Scopri la tua classe — poi naviga il campo.<br><strong>Nessun game over. Solo conoscenza.</strong>',

    // @element  #btnStart  (Press Start 2P, CTA principale)
    // @impact   Primo click dell'utente → avvia l'assessment.
    //           Mantenere breve (max ~12 char per font pixel).
    btn_start: '[ INIZIA ]',
  },

  // ──────────────────────────────────────────────────────────
  // ASSESSMENT SCREEN — #s-assess
  // Nota: i testi delle domande vere sono in STEPS[] più sotto.
  // Qui ci sono solo i testi del pannello laterale fisso.
  // ──────────────────────────────────────────────────────────
  assess: {
    // @element  .a-side-title  (Space Mono, uppercase, muted)
    // @impact   Label del sidebar. Puro display.
    sidebar_title: 'Il tuo percorso',

    // @element  #stp-0, #stp-1, #stp-2  (label + sottotitolo per ogni step)
    // @impact   ATTENZIONE: la corrispondenza è POSIZIONALE con STEPS[].
    //           step_labels[0] = STEPS[0] (hard), [1] = soft, [2] = pref.
    //           Cambiare label NON cambia l'id in STEPS[], solo il display.
    step_labels: [
      { label: 'Hard Skills',  sub: 'Cosa hai fatto' },
      { label: 'Soft Skills',  sub: 'Come lavori'    },
      { label: 'Preferenze',   sub: 'Dove stai bene' },
    ],

    // @element  .a-side-note  (muted, italic, in fondo al sidebar)
    // @impact   Nota metodologica con citazione implicita HBR/McKinsey.
    //           Il tag <em> è rendering HTML, non markdown.
    //           Modifica impatta credibilità percepita del tool.
    sidebar_note: 'Le domande misurano <em>azioni reali</em> — riduce il bias di auto-valutazione sistematico del 20–35%.',

    // @element  #btnNA nelle prime 2 fasi (step 0 e 1)
    // @impact   CTA avanzamento assessment. Generato da renderAssess().
    btn_next: 'Avanti →',

    // @element  #btnNA nell'ultima fase (step 2, isLast === true)
    // @impact   CTA finale assessment → avvia computeChar() e mostra la card.
    btn_generate: 'Genera la mia Card →',
  },

  // ──────────────────────────────────────────────────────────
  // CARD SCREEN — #s-card
  // I dati dinamici (nome classe, stat, traits) vengono da CLASSES[].
  // Qui ci sono solo i testi fissi del pannello sinistro e della card.
  // ──────────────────────────────────────────────────────────
  card: {
    // @element  .c-eyebrow  (Space Mono, uppercase, muted)
    // @impact   Label sopra il titolo. Puro display.
    eyebrow: '// CLASSE ASSEGNATA',

    // @element  .c-headline  (font grande, grassetto)
    // @impact   Titolo della schermata card. Il tag <em> → colore accent.
    headline: 'La tua <em>mappa di partenza</em>',

    // @element  .c-expl  (DM Sans, muted)
    // @impact   Inquadra il significato delle stat. Modifica cambia come
    //           il giocatore interpreta i propri valori iniziali.
    explanation: 'Questa card fotografa dove sei adesso. Le stat cambieranno navigando i mondi.',

    // @element  #biasNote  (.c-bias, box verde tenue)
    // @impact   IMPORTANTE: funzione pedagogica esplicita — incoraggia a non
    //           sottostimarsi. Il tag <strong> e <em> sono HTML inline.
    //           Modifica impatta fiducia del giocatore nelle proprie stat iniziali.
    //           RADAR è nominato esplicitamente: se la stat viene rinominata,
    //           aggiornare anche qui.
    bias_note: '<strong>📌 Prima di entrare:</strong><br>Chi subisce bias di auto-svalutazione tende a sotto-stimare le proprie competenze del 20–35%. Le tue stat potrebbero essere più alte di quanto percepisci. <em>RADAR</em> — leggere il sistema — parte bassa per tutte: cresce solo con l\'esperienza.',

    // @element  #btnEnterGame  (.btn-next)
    // @impact   Transizione card → mappa. Avvia renderMap().
    btn_enter: 'Entra nel Mondo 1 →',

    // @element  #cardSwipeHint  (visibile solo su mobile, .card-swipe-hint)
    // @impact   Hint di scroll su mobile. Scompare allo scroll (logica in renderCard).
    swipe_hint: '→ scorri per continuare',

    // @element  .c-cname nella dnd-card generata da renderCard()
    // @impact   Nome giocatore nella card stile D&D. Potenziale futuro: nome dinamico.
    //           Se si personalizza con input utente, rimuovere da UI_TEXTS.
    player_name: 'PLAYER ONE',

    // @element  .c-csub nella dnd-card: `${cls.name} · Livello 1`
    // @impact   Suffisso sotto il nome avatar. Il numero "1" è hardcoded per ora.
    //           Se il sistema di livelli viene implementato, rendere dinamico.
    level_suffix: '· Livello 1',
  },

  // ──────────────────────────────────────────────────────────
  // GAME SCREEN — #s-game
  // HUD e messaggi in-game generati da renderHUD() e setMsg().
  // ──────────────────────────────────────────────────────────
  game: {
    // @element  #gMsg  (barra inferiore, visibile solo desktop)
    // @impact   Istruzione di default quando non ci sono eventi attivi.
    //           Su mobile questa barra è hidden via CSS.
    msg_default: 'Muoviti con ← → ↑ ↓ · Premi SPAZIO o Z vicino a un NPC per interagire',

    // @element  #gMsg su mobile dopo gCreate (isMobile === true)
    // @impact   Versione mobile del messaggio default. Il tasto ✦ = #tc-act.
    msg_default_mobile: '↕↔ muoviti · ✦ interagisci con NPC vicini',

    // @element  .wi-hint nell'overlay intro-mondo (isMobile === true)
    // @impact   Hint mostrato prima di entrare nel mondo su mobile.
    //           Il tag <kbd> è CSS .wi-hint kbd. Non modificare senza aggiornare CSS.
    hint_mobile: 'Usa <kbd>✦</kbd> vicino a un NPC per interagire',

    // @element  .wi-hint nell'overlay intro-mondo (isMobile === false)
    // @impact   Versione desktop dell'hint.
    hint_desktop: 'Premi <kbd>SPAZIO</kbd> o <kbd>Z</kbd> vicino a un NPC per interagire',

    // @element  .wi-hint — suffisso aggiunto dopo l'hint mobile/desktop
    // @impact   Spiega la logica di sblocco della porta. Centrale per l'onboarding.
    hint_suffix: '· Trova tutti gli NPC per sbloccare le uscite',

    // @element  #gMsg dopo sblocco porta
    // @impact   Feedback al giocatore quando la porta si apre. Tono positivo.
    msg_door_unlocked: '🔓 Porta sbloccata! Avvicinati e premi SPAZIO/Z per uscire. Le altre interazioni sono opzionali.',

    // @element  #gMsg dopo ogni debrief NPC, se porta ancora chiusa
    // @impact   Generato dinamicamente in closeDebrief() con i conteggi mancanti.
    //           Questo è il template — i numeri vengono interpolati in JS.
    //           Modificare mantenendo i placeholder ${...} se si usa template literal.
    msg_door_hint_after_debrief: '🔓 Porta sbloccata! Avvicinati e premi SPAZIO/Z per uscire. Le interazioni opzionali rimangono disponibili.',
  },

  // ──────────────────────────────────────────────────────────
  // TOUCH CONTROLS — #tc
  // Bottoni fisici su mobile. Solo display — la logica è in TOUCH{} e Phaser.
  // @impact   Modificare i simboli NON cambia il comportamento dei controlli.
  //           Il bottone act (✦) ha anche una classe CSS specifica (.tc-jump).
  //           Se si cambia ✦ in altro, verificare la coerenza con hint_mobile.
  // ──────────────────────────────────────────────────────────
  touch: {
    btn_left:  '◀',
    btn_right: '▶',
    btn_up:    '▲',
    btn_down:  '▼',
    btn_act:   '✦',
  },

  // ──────────────────────────────────────────────────────────
  // WORLD INTRO OVERLAY — .wi-ov  (generato da initGame())
  // Il contenuto specifico (emoji, titolo, pro/cons, ruolo) viene da WORLD_INTROS[].
  // Qui ci sono solo i testi fissi strutturali dell'overlay.
  // ──────────────────────────────────────────────────────────
  world_intro: {
    // @element  .wi-col-title della colonna vantaggi
    // @impact   Label colonna Pro. Il colore (#6af7c8) è hardcoded in initGame().
    col_pro_label: '✓ Pro',

    // @element  .wi-col-title della colonna svantaggi
    // @impact   Label colonna Contro. Il colore (#f76a6a) è hardcoded in initGame().
    col_con_label: '✗ Contro',

    // @element  🎮 prefix nell'hint box (.wi-hint)
    // @impact   Prefisso emoji dell'hint. Non impatta logica.
    hint_prefix: '🎮 ',

    // @element  #btnStartWorld  (.btn-next, centrato)
    // @impact   CTA per entrare nel mondo dopo la lettura dell'intro.
    //           Avvia launchPhaser(worldId).
    btn_enter: 'Entra nel mondo →',
  },

  // ──────────────────────────────────────────────────────────
  // MAP SCREEN — #s-map  (generato da renderMap())
  // ──────────────────────────────────────────────────────────
  map: {
    // @element  .map-title  (Press Start 2P, accent color)
    // @impact   Titolo della mappa. L'emoji è parte del testo.
    title: '🗺️ CAREER WORLD MAP',

    // @element  .map-subtitle  (Space Mono, muted)
    // @impact   Sottotitolo informativo. Non impatta logica.
    subtitle: 'Sei mondi, tutti accessibili. Ogni lato connette contesti affini.',

    // @element  .map-free-note  (Space Mono, accent3, box tenue)
    // @impact   Spiega che non c'è ordine obbligatorio. Cruciale per l'UX.
    //           Modifica impatta come il giocatore interpreta la struttura del gioco.
    free_note: 'Inizia da dove vuoi — le linee mostrano affinità di pattern, non sequenze obbligatorie.',

    // @element  testo status sotto ogni nodo non completato (.mn-status)
    // @impact   Label di invito a cliccare. Colore = node.color (dinamico).
    node_status_todo: 'Clicca per entrare',

    // @element  testo status sotto ogni nodo completato (.mn-status)
    // @impact   Colore = #6af7c8 (hardcoded in renderMap()). L'emoji ✓ è nel badge.
    node_status_done: '✓ Completato',

    // @element  #btnConclude  (.btn-next, accent3, visibile dopo ≥ 2 mondi)
    // @impact   CTA finale mappa → show('outcome') + renderOutcome().
    //           ATTENZIONE: il numero minimo (2) è hardcoded in renderMap()
    //           come `canConclude = done.length >= 2`.
    //           Se cambia la soglia, aggiornare anche quella riga.
    btn_conclude: '🏁 Concludi il percorso — vedi il report completo',

    // @element  div sostitutivo quando mancano mondi per il report (muted, centered)
    // @impact   Informa sul requisito minimo. Il numero "2" deve essere coerente
    //           con la logica `canConclude` in renderMap().
    unlock_hint: 'Completa almeno 2 mondi per sbloccare il report di carriera completo',
  },

  // ──────────────────────────────────────────────────────────
  // WORLD DEBRIEF — showWorldDebrief()
  // Overlay mostrato dopo l'uscita da un mondo.
  // I contenuti dinamici (insight, patterns, badge) vengono da WORLD_DEBRIEF[].
  // ──────────────────────────────────────────────────────────
  debrief: {
    // @element  .db-lbl per la sezione pattern in showWorldDebrief()
    // @impact   Label sezione. Il conteggio (N) viene aggiunto dinamicamente in JS.
    section_patterns: '📋 PATTERN RICONOSCIUTI',

    // @element  .db-lbl per la sezione insight
    // @impact   Label sezione apprendimento nel debrief mondiale.
    section_insight: '🧠 COSA HAI IMPARATO',

    // @element  .db-lbl per il takeaway pratico
    // @impact   Label takeaway. Testo del takeaway viene da WORLD_DEBRIEF[wid].
    section_takeaway: '💡 TAKEAWAY PRATICO',

    // @element  .db-lbl per le stat guadagnate
    // @impact   Label stat diff. I valori vengono da ST.gs vs ST.char.stats.
    section_stats: '⚡ STAT GUADAGNATE',

    // @element  testo depth indicator (max interazioni raggiunte)
    // @impact   Mostrato quando count >= maxMin. Indica completamento totale.
    depth_complete: '🔓 Lettura completa',

    // @element  testo depth indicator (count >= 7)
    depth_medium: '🔆 Lettura approfondita',

    // @element  testo depth indicator (default, < 7)
    depth_base: '💡 Lettura base',

    // @element  testo quando nessun pattern trovato (muted)
    // @impact   Mostrato se il giocatore ha completato solo il minimo.
    no_patterns: 'Hai completato il minimo. Torna a esplorare gli NPC opzionali per scoprire altri pattern.',

    // @element  testo teaser livelli bloccati (muted, italic)
    // @impact   Incoraggia a tornare nel mondo. Il numero livelli viene interpolato.
    locked_levels_hint: '🔒 livello/i di insight ancora da sbloccare — torna in questo mondo con più interazioni.',

    // @element  testo quando tutti i livelli sono sbloccati
    all_levels_unlocked: '✓ Tutti gli insight sbloccati per questo mondo.',

    // @element  testo completamento mondo nell'header del debrief
    // @impact   Suffisso dopo emoji + titolo mondo. "— COMPLETATO" è fisso.
    world_completed_suffix: '— COMPLETATO',

    // @element  #btnBackMap  (.btn-next, colorato col colore del mondo)
    // @impact   Torna alla mappa → show('map') + renderMap().
    btn_map: '🗺️ Torna alla mappa',

    // @element  #btnTryOther  (.btn-next, scuro/muted)
    // @impact   Rimuove il mondo da ST.worldHistory e torna alla mappa.
    //           Permette di rigiocare il mondo con scelte diverse.
    btn_retry: '↩ Prova un percorso diverso',
  },

  // ──────────────────────────────────────────────────────────
  // NPC DEBRIEF IN-GAME — showDebrief() (dopo ogni scelta NPC)
  // ──────────────────────────────────────────────────────────
  npc_debrief: {
    // @element  .db-lbl sezione pattern nel dialogo NPC
    // @impact   Label per il pattern riconosciuto nel singolo dialogo.
    section_pattern: '📋 PATTERN RICONOSCIUTO',

    // @element  .db-lbl sezione esito
    // @impact   Label per il risultato della scelta + stat pill.
    section_outcome: '⚡ ESITO',

    // @element  #btnCloseDb  (.btn-next)
    // @impact   Chiude il debrief NPC → torna al gameplay.
    btn_continue: 'Continua →',

    // @element  suffisso pill RADAR aggiunto automaticamente ad ogni debrief
    // @impact   Ogni scelta NPC dà sempre +1 RADAR (scala SCALE=2.5 applicata in JS).
    //           Se si cambia la logica RADAR in handleChoice(), aggiornare anche questo.
    radar_gain_label: 'RADAR +1',
  },

  // ──────────────────────────────────────────────────────────
  // OUTCOME SCREEN — #s-outcome  (renderOutcome())
  // Report globale aggregato dopo aver completato ≥ 2 mondi.
  // ──────────────────────────────────────────────────────────
  outcome: {
    // @element  .oc-em  (font-size 3rem, emoji decorativa)
    emoji: '🗺️',

    // @element  .oc-title  (Press Start 2P, accent3)
    // @impact   Titolo principale del report finale.
    title: 'REPORT DI CARRIERA',

    // @element  .oc-card-title per la sezione mondi visitati
    // @impact   Label sezione. I dati vengono da ST.worldHistory.
    section_worlds: '// MONDI VISITATI',

    // @element  testo fallback se nessun mondo completato
    // @impact   Mostrato raramente (solo se renderOutcome è chiamato senza worldHistory).
    no_worlds: 'Nessun mondo completato.',

    // @element  .oc-card-title per la sezione stat
    section_stats: '// STAT ACCUMULATE',

    // @element  .oc-card-title per la sezione pattern
    // @impact   Il conteggio (N) viene aggiunto dinamicamente come `(${allPatterns.length})`.
    section_patterns: '// PATTERN RICONOSCIUTI',

    // @element  testo fallback se nessun pattern
    // @impact   Incoraggia a esplorare più NPC. Mostrato se allPatterns.length === 0.
    no_patterns: 'Esplora più NPC in ogni mondo per riconoscere i pattern.',

    // @element  testi RADAR reading (div sotto le stat pill)
    // @impact   Selezionato in base a radarGain (v - init.RADAR).
    //           Soglie: ≥20, ≥12, ≥6, default.
    //           Se si cambia STAT_MAX o la scala RADAR, ricalcolare le soglie.
    radar: {
      exceptional: 'RADAR eccezionale: hai sviluppato una lettura sistemica del mercato.',
      high:        'RADAR molto alto: riesci a leggere le dinamiche di potere con chiarezza.',
      growing:     'RADAR in crescita: stai costruendo la tua mappa del sistema.',
      base:        'RADAR base: esplora più mondi e più NPC per approfondire la lettura.',
    },

    // @element  .oc-take  (box viola tenue, testo pedagogico finale)
    // @impact   TESTO PEDAGOGICO CENTRALE. Prima parte = globalTakeaway (dinamico,
    //           selezionato in base ai mondi visitati — vedi outcome.takeaways sotto).
    //           Seconda parte = questo suffisso, sempre mostrato.
    //           Modifica impatta il messaggio che l'utente porta fuori dal gioco.
    global_suffix: '<em>Una cosa da portare fuori dal gioco:</em> il mercato non è neutro.\nHa strutture, bias e pattern ricorrenti. Conoscerli non significa accettarli —\nsignifica scegliere consapevolmente quando adattarsi, quando resistere, e quando cambiare ambiente.',

    // @element  parte dinamica di .oc-take (globalTakeaway in renderOutcome())
    // @impact   Selezionato in base a visitHistory. Logica in renderOutcome():
    //           hasPiva → has_piva | hasCorporate → has_corporate |
    //           hasStartup → has_startup | default.
    //           ATTENZIONE: se si aggiungono mondi, aggiornare la logica
    //           in renderOutcome() E aggiungere la chiave qui.
    takeaways: {
      has_piva:      'Hai esplorato sia ambienti strutturati che il lavoro autonomo. La tua lettura del mercato è tra le più complete — sai cosa offre ogni contesto e a quale prezzo.',
      has_corporate: 'Hai attraversato la progressione da piccolo a grande. Sai come cambiano le dinamiche di potere con la scala dell\'organizzazione.',
      has_startup:   'Hai visto come le startup e le PMI condividono l\'informalità ma differiscono nel ritmo e nell\'ambizione. La tua prossima frontiera è esplorare i contesti più strutturati.',
      default:       'Hai iniziato il percorso. Ogni mondo che esplorerai aggiungerà strati alla tua lettura del mercato.',
    },

    // @element  #btnOtherPath  (.btn-replay, accent3 border)
    // @impact   Torna alla mappa senza resettare. Permette di esplorare altri mondi.
    btn_other_path: '↩ Prova l\'altro percorso',

    // @element  #btnRestart  (.btn-replay, accent3 border)
    // @impact   Reset COMPLETO: ST, char, worldHistory, Phaser. Torna a title.
    //           ATTENZIONE: se si aggiungono campi a ST, aggiornare anche il reset
    //           in btnRestart.onclick in renderOutcome().
    btn_restart: '↺ Ricomincia da capo',
  },

  // ──────────────────────────────────────────────────────────
  // PROGRESS PANEL — buildProgressPanel() (nel HUD in-game)
  // ──────────────────────────────────────────────────────────
  progress: {
    // @element  .pp-status.open  (accent3, Press Start 2P)
    // @impact   Mostrato quando unlocked === true. Segnala che la porta è aperta.
    status_open: '🔓 APERTA',

    // @element  .pp-status.locked  (warn color)
    // @impact   Template: il conteggio `N/M` viene interpolato dinamicamente in JS.
    //           Il formato è: `🔒 ${doneTotal}/${goalTotal}`
    status_locked_prefix: '🔒',
  },

};


// ══════════════════════════════════════════════════════════════
// ASSESSMENT DATA — STEPS, SMAP, CLASSES, ORIENT_OPTS
// (invariato rispetto a v13)
// ══════════════════════════════════════════════════════════════

const STEPS=[
  {id:'hard',tag:'FASE 1 · HARD SKILLS',title:'Cosa hai fatto con la tecnologia?',
   sub:'Non "quanto sai" — cosa hai effettivamente realizzato. Anche una volta sola conta.',
   note:'Le domande comportamentali riducono il bias di auto-rating sistematico.',
   qs:[
    {id:'python',t:'Hai scritto uno script Python/R per risolvere un problema reale, anche piccolo?',opts:['Sì, più volte','Una volta / in corso','Solo tutorial','Non è il mio focus']},
    {id:'sql',t:'Hai interrogato un database con SQL per estrarre o analizzare dati?',opts:['Sì, regolarmente','Qualche volta','Solo tutorial','No']},
    {id:'viz',t:'Hai costruito una dashboard o visualizzazione che qualcuno ha usato davvero?',opts:['Sì','In corso','Solo esercizi','No']},
    {id:'ml',t:'Hai addestrato un modello ML, anche su un dataset pubblico?',opts:['Sì, in produzione','Sì, progetto personale','Solo corso/tutorial','No']},
    {id:'llm',t:'Hai integrato un LLM o API AI in qualcosa di concreto?',opts:['Sì, in un progetto reale','Esperimenti/prototipo','Solo prompt su interfaccia','No']},
    {id:'cloud',t:'Hai deployato qualcosa su cloud (anche free tier)?',opts:['Sì','Esperimenti','No ma so i concetti','No']},
    {id:'sdev',t:'Hai lavorato su codebase condivisa con git, code review, CI/CD?',opts:['Sì, in team','Progetti personali','Solo concetti','No']},
   ]},
  {id:'soft',tag:'FASE 2 · SOFT SKILLS',title:'Come ti sei comportata in situazioni reali?',
   sub:'Pensa a esperienze concrete: lavoro, università, progetti, associazioni.',
   note:'Non esiste risposta giusta. Questi dati costruiscono la tua mappa.',
   qs:[
    {id:'comm',t:'Hai presentato un lavoro tecnico a persone non tecniche?',opts:['Sì, più volte','Una volta','Sì, con difficoltà','Non ancora']},
    {id:'conflict',t:'Quando non eri d\'accordo con una decisione di un superiore, hai...',opts:['Espresso il mio punto con dati','Fatto domande per capire','Taciuto ma ci ho rimuginato','Accettato senza problemi']},
    {id:'auto',t:'Hai gestito un progetto importante in autonomia, senza supervisione?',opts:['Sì, con successo','Sì, con difficoltà ma ce l\'ho fatta','Preferisco avere guida','Non ancora capitato']},
    {id:'chaos',t:'Quando cambiano priorità improvvisamente, come reagisci?',opts:['Mi adatto bene','Ci metto un po\' ma riesco','Preferisco stabilità','Mi stresso molto']},
    {id:'feedback',t:'Hai ricevuto feedback critico su un tuo lavoro? Come l\'hai gestito?',opts:['L\'ho usato per migliorare','Mi ha fatto male ma l\'ho integrato','L\'ho preso molto sul personale','Non ricordo situazioni']},
    {id:'network',t:'Hai mai aiutato attivamente un\'altra persona (collega, studentessa) a crescere o a farsi vedere?',opts:['Sì, più volte e consapevolmente','Qualche volta','Raramente, non ci ho pensato','No']},
   ]},
  {id:'pref',tag:'FASE 3 · ORIENTAMENTO',title:'Come ti vedi nel lavoro tech?',
   sub:'Prima la domanda più importante: non dipende da cosa sai fare ora, ma da dove vuoi andare.',
   note:'L\'orientamento è il segnale principale per la tua classe — indipendente dall\'esperienza attuale.',
   qs:[
    {id:'orient',t:'Quale di queste frasi ti descrive meglio — indipendentemente da cosa sai fare ora?',opts:[
      '📊 Voglio trasformare dati in decisioni di business comprensibili a tutti',
      '🔬 Voglio costruire modelli predittivi che anticipano il futuro',
      '⚙️ Voglio portare sistemi AI in produzione e farli scalare',
      '🤖 Voglio costruire con LLM, agenti e i tool AI più recenti',
    ]},
   ],
   sls:[
    {id:'stab',label:'Stabilità vs Rischio',lo:'Stabilità e prevedibilità',hi:'Rischio, velocità, incertezza'},
    {id:'tech',label:'Deep Tech vs Strategico',lo:'Focus tecnico profondo',hi:'Strategia, prodotto, business'},
    {id:'solo',label:'Solista vs Team',lo:'Focus profondo da sola',hi:'Energia di gruppo'},
    {id:'speed',label:'Lungo periodo vs Impatto immediato',lo:'Costruire qualcosa che dura',hi:'Vedere l\'impatto subito'},
   ]},
];

const ORIENT_OPTS=[
  '📊 Voglio trasformare dati in decisioni di business comprensibili a tutti',
  '🔬 Voglio costruire modelli predittivi che anticipano il futuro',
  '⚙️ Voglio portare sistemi AI in produzione e farli scalare',
  '🤖 Voglio costruire con LLM, agenti e i tool AI più recenti',
];

const SMAP={
  'Sì, più volte':5,'Sì, regolarmente':5,'Sì, in produzione':5,'Sì, in un progetto reale':5,'Sì, in team':5,'Sì, con successo':5,'Sì, più volte e consapevolmente':5,
  'Una volta / in corso':3,'Qualche volta':3,'Sì, progetto personale':3,'Esperimenti/prototipo':3,'Sì':4,'Sì, con difficoltà ma ce l\'ho fatta':4,
  'Una volta':3,'Sì, con difficoltà':3,'Ci metto un po\' ma riesco':3,'Esperimenti':3,'In corso':3,
  'Solo tutorial':1.5,'Solo corso/tutorial':1.5,'Solo esercizi':1.5,'Solo concetti':1,'Solo prompt su interfaccia':1,'No ma so i concetti':1,
  'Espresso il mio punto con dati':5,'Fatto domande per capire':4,'Taciuto ma ci ho rimuginato':2,'Accettato senza problemi':3,
  'Mi adatto bene':5,'Preferisco stabilità':2,'Mi stresso molto':1,
  'L\'ho usato per migliorare':5,'Mi ha fatto male ma l\'ho integrato':4,'L\'ho preso molto sul personale':2,
  'Non ancora':2,'Non è il mio focus':1,'Non ancora capitato':2,'Preferisco avere guida':2,
  'Non ricordo situazioni':2,'Raramente, non ci ho pensato':2,'No':0,
};

const CLASSES={
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
};

// ══════════════════════════════════════════════════════════════
// Il resto del file (WORLD_DEFS, WORLD_INTROS, INNER_CRITICS,
// WORLD_DEBRIEF, patchWorldsV12, ecc.) rimane INVARIATO.
// Incollare qui tutto il contenuto dal vecchio career-world_data.js
// a partire dalla riga dopo const CLASSES={...}.
// ══════════════════════════════════════════════════════════════
