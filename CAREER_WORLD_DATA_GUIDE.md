# 📖 Guida alla scrittura di `src/data/career-world-data.js`

> Tutto quello che serve per aggiungere NPC, modificare testi, creare nuovi mondi e aggiornare l'interfaccia — senza toccare `index.html` o `src/game/game.js`.

> Dal file si esporta tutto con `export const ...` (es. `export const WORLD_DEFS = {...}`) — è un modulo ES importato da `src/game/game.js`.

---

## Struttura del file

Il file è diviso in sezioni nell'ordine seguente:

```
UI_TEXTS          → testi statici dell'interfaccia (bottoni, label, messaggi)
STEPS             → domande dell'assessment (hard skills, soft skills, preferenze)
SMAP              → tabella di punteggio per ogni risposta
CLASSES           → definizione delle 4 classi personaggio
WORLD_DEFS        → definizione dei mondi base (PMI, Startup, Consulenza)
INNER_CRITICS     → dialoghi dell'inner critic per ogni mondo
WORLD_INTROS      → schede introduttive mostrate prima di entrare in un mondo
W3_NPCS / W4_NPCS → NPC per Corporate e P.IVA
WORLD_DEFS_NEW    → definizioni mondo Corporate e P.IVA
WORLD_INTROS_NEW  → intro per Corporate e P.IVA
INNER_CRITICS_NEW → inner critic per Corporate e P.IVA
W5_NPCS           → NPC per PA/Ricerca/Accademia
PA_ADDITIONS      → NPC opzionali per PA
PA_INNER_CRITICS  → 2 voci inner critic per PA
*_ADDITIONS       → NPC opzionali per ogni mondo
WORLD_DEBRIEF     → contenuto del debrief post-mondo (3 livelli per mondo)
patchWorldsV12()  → funzione che assembla tutto — chiamata in fondo al file
```

---

## Struttura di un NPC

Ogni NPC è un oggetto JavaScript con questa forma:

```js
{
  id: 'nome_univoco',          // stringa unica — non duplicare mai
  sprite: 'mgr',               // 'mgr' | 'sis' | 'col' | 'tech' | 'crit'
  label: 'Ufficio HR',         // testo mostrato sopra l'NPC nel gioco
  type: 'npc',                 // 'npc' | 'sis' | 'tech' — usato per lo sblocco porta
  required: true,              // true = conta per sbloccare la porta
  authOnly: true,              // opzionale — true = visibile SOLO ai giocatori autenticati (guest non lo vedono mai)
  gridX: 4,                    // posizione colonna nella stanza (1–14 circa)
  gridY: 5,                    // posizione riga nella stanza (1–9 circa)
  dlg: {
    spk: '👔 Nome — Ruolo',    // nome del parlante (con emoji)
    color: '#4fc3f7',          // colore del nome parlante (hex)
    txt: 'Testo del dialogo.', // testo principale — può contenere apostrofi escapati \'
    chs: [                     // array di scelte (2–4)
      { t: 'Testo scelta 1', out: 'chiave_outcome_1' },
      { t: 'Testo scelta 2', out: 'chiave_outcome_2' },
    ],
  },
  outs: {
    chiave_outcome_1: {
      msg: 'Messaggio feedback. +STAT1 +STAT2',  // mostrato dopo la scelta
      stat: { VOICE: 2, CLARITY: 1 },             // delta stat applicato
    },
    chiave_outcome_2: {
      msg: 'Messaggio feedback. -STAT1',
      stat: { ENERGY: -1 },
    },
  },
  db: {
    pat: 'Nome del pattern riconosciuto',         // titolo nel debrief
    ins: 'Testo insight — spiegazione del pattern pedagogico.',
    data: 'Fonte o dato di ricerca citato.',
  },
}
```

### Sprite disponibili

| Valore | Personaggio | Colore default |
|--------|-------------|----------------|
| `'mgr'` | Manager / HR / figura di potere | blu-grigio |
| `'sis'` | Alleata / sorellanza | rosso |
| `'col'` | Collega neutro/antagonista | viola |
| `'tech'` | Sfida tecnica | giallo/ciano |
| `'crit'` | Inner critic (non usare in npcs[]) | rosso scuro |

### Stat disponibili e significato

| Stat | Significato | Max |
|------|-------------|-----|
| `SKILL` | Competenze tecniche | 50 |
| `VOICE` | Capacità di esprimersi e tenere la posizione | 50 |
| `CLARITY` | Chiarezza su sé stessa e il contesto | 50 |
| `NETWORK` | Rete professionale e alleanze | 50 |
| `ENERGY` | Energia e sostenibilità | 50 |
| `RADAR` | Lettura delle dinamiche di sistema | 50 |

> **Nota scala**: i delta nei `stat` vengono moltiplicati per `2.5` prima di essere applicati. `{VOICE: 2}` diventa `+5` punti reali. Valori negativi non vengono scalati.

---

## Aggiungere un NPC opzionale a un mondo esistente

1. Trova la sezione `*_ADDITIONS` del mondo (es. `PMI_ADDITIONS`)
2. Aggiungi il tuo oggetto NPC nell'array
3. Imposta `required: false` per NPC opzionali, `required: true` solo se vuoi che conti per lo sblocco porta
4. Scegli `type: 'npc'`, `'sis'` o `'tech'` in base al ruolo pedagogico

```js
const PMI_ADDITIONS = [
  // ... NPC esistenti ...
  {
    id: 'pmi_nuovo',          // id unico — controlla che non esista già
    sprite: 'col',
    label: 'Sala riunioni',
    type: 'npc',
    required: false,
    gridX: 7,
    gridY: 6,
    dlg: { ... },
    outs: { ... },
    db: { ... },
  },
];
```

### Logica di sblocco porta

La porta si sblocca quando il giocatore ha interagito con:
- **almeno 3 NPC** di tipo `'npc'`
- **almeno 1 NPC** di tipo `'sis'`
- **almeno 1 NPC** di tipo `'tech'`

Gli NPC con `required: false` sono bonus — non bloccano la porta ma aggiungono pattern e stat.

---

## NPC riservati agli utenti autenticati (`authOnly`)

Alcuni NPC possono essere visibili solo a chi ha effettuato l'accesso (vedi README → "Account e progresso"). Un guest non li vede mai spawnare nella stanza, non contano nel conteggio NPC del debrief di mondo, e non influenzano lo sblocco porta per i guest.

Segui lo stesso pattern delle `*_ADDITIONS` esistenti: crea un array separato (es. `PMI_AUTH_ADDITIONS`, vedi quello già presente per il mondo PMI come esempio) con `authOnly: true` su ogni NPC, poi aggiungilo con `.push(...)` in `patchWorldsV12()` subito dopo la riga che aggiunge le `*_ADDITIONS` dello stesso mondo:

```js
export const PMI_AUTH_ADDITIONS = [
  {
    id: 'pmi_auth_esempio',
    sprite: 'sis',
    label: 'Solo utenti autenticati',
    type: 'sis',
    authOnly: true,       // ← questa è l'unica differenza rispetto a un NPC normale
    required: false,
    gridX: 6, gridY: 4,
    dlg: { ... },
    outs: { ... },
    db: { ... },
  },
];
```

```js
// in patchWorldsV12()
WORLD_DEFS.pmi.npcs.push(...PMI_ADDITIONS);
WORLD_DEFS.pmi.npcs.push(...PMI_AUTH_ADDITIONS);  // ← nuova riga
```

Il filtro vero e proprio (`getVisibleNpcs()` in `src/game/npcVisibility.js`) legge il flag a runtime — non serve toccare `game.js` per aggiungere altri NPC `authOnly`.

---

## Livelli di carriera (`level`) e bivi (`track`)

Ogni mondo ha una progressione a 3 livelli, come una carriera da scalare: **Livello 1** (junior, sia relazionale che tecnico) → **Livello 2** → **Livello 3** (senior, in alcuni mondi con un bivio di percorso). Un livello N+1 compare nella stanza — senza dover uscire e rientrare — solo dopo che il giocatore ha visitato **tutti** gli NPC del livello N. Vale per guest e utenti autenticati allo stesso modo, entro la stessa sessione; per gli autenticati il livello raggiunto viene anche ricordato tra una sessione e l'altra (vedi `ST.worldsProgress` in `src/game/game.js`).

I titoli di carriera mostrati nel messaggio di promozione sono definiti in `WORLD_CAREER_LEVELS` (`src/data/career-world-data.js`), un array di 3 titoli per mondo — o un oggetto `{track: titolo}` per i mondi con bivio.

### NPC di un livello

Un NPC "storico" senza `level` è implicitamente livello 1. Per aggiungere un livello, segui il pattern delle `*_ADDITIONS`: crea un array separato con `level: 2` (o `3`) su ogni NPC, poi aggiungilo con `.push(...)` in `patchWorldsV12()`:

```js
export const PMI_LEVEL2_ADDITIONS = [
  {
    id: 'pmi_level2_esempio',
    sprite: 'mgr',
    label: 'Situazione più complessa',
    type: 'npc',
    level: 2,              // ← questa è l'unica differenza rispetto a un NPC di livello 1
    required: false,
    gridX: 9, gridY: 3,
    dlg: { ... },
    outs: { ... },
    db: { ... },
  },
];
```

```js
// in patchWorldsV12(), dopo le altre push del mondo
WORLD_DEFS.pmi.npcs.push(...PMI_LEVEL2_ADDITIONS);
```

Un NPC può avere sia `authOnly: true` sia `level: 2/3` insieme, se una situazione avanzata deve essere riservata anche agli utenti autenticati.

### Bivio di carriera (`track`)

Alcuni mondi (es. Consulenza: Expert vs Engagement Manager; Corporate: Senior Specialist vs Engineering Manager) offrono una scelta di percorso all'ultimo livello. Il pattern:

1. Un **NPC bivio** (livello 3, senza `track` proprio) i cui `outs[]` includono un campo `track` oltre a `msg`/`stat` — questo imposta `ST.world.track` quando il giocatore sceglie:
   ```js
   outs:{
     expert: {msg:'...', stat:{...}, track:'expert'},
     manager:{msg:'...', stat:{...}, track:'manager'},
   }
   ```
2. Due array separati di NPC livello 3, ciascuno con `track:'expert'` (o `'manager'`) su ogni NPC — visibili solo dopo che il giocatore ha scelto quel percorso.

Gli NPC con `track` non contano ai fini dello sblocco di livello (non avrebbe senso richiedere di esplorare entrambi i percorsi). `WORLD_CAREER_LEVELS` per un mondo con bivio usa un oggetto `{expert:'...', manager:'...'}` al posto della stringa per il livello 3.

### La "laurea" dell'account

Le utenti autenticate saltano il quiz iniziale (restano "Esploratrice" — vedi `startFreshAuthenticated()`). La prima volta che esplorano **completamente** un mondo (tutti gli NPC visibili visitati, incluso il bivio se presente), il gioco mostra una schermata dove scelgono la propria classe definitiva tra le 5 in `CLASSES` (`maybeGraduateAccount()`/`showGraduation()` in `src/game/game.js`) — una sola volta per account (`ST.graduated`).

---

## Creare un nuovo mondo

### 1. Definisci gli NPC

```js
const W6_NPCS = [
  {
    id: 'w6_manager',
    sprite: 'mgr',
    label: 'Reception',
    type: 'npc',
    required: true,
    gridX: 4, gridY: 5,
    dlg: { ... },
    outs: { ... },
    db: { ... },
  },
  // ... almeno 3 npc + 1 sis + 1 tech required
];
```

### 2. Aggiungi a WORLD_DEFS

```js
WORLD_DEFS.nuovo_mondo = {
  label: 'WORLD 6 · NOME MONDO',
  palette: {
    floor: 0x1a1a2e,   // colore pavimento (hex Phaser)
    wall:  0x2a2a4e,   // colore muri
    accent: 0x3a4a6a,  // colore dettagli
    bg:    0x0d0e1a,   // colore sfondo
  },
  exits: [
    { id: 'end_nuovo_mondo', label: 'FINE →', color: 0x6af7c8, x: 0.88, y: 0.55 },
  ],
  npcs: W6_NPCS,
};
```

### 3. Aggiungi l'intro

```js
WORLD_INTROS.nuovo_mondo = {
  title: 'NOME MONDO',
  emoji: '🏛️',
  what: 'Descrizione breve del contesto.',
  role: 'Come data/AI professional in questo contesto...',
  pros: ['Vantaggio 1', 'Vantaggio 2', 'Vantaggio 3'],
  cons: ['Svantaggio 1', 'Svantaggio 2', 'Svantaggio 3'],
  color: '#6af7c8',  // colore tema del mondo
};
```

### 4. Aggiungi l'inner critic

```js
INNER_CRITICS.nuovo_mondo = {
  id: 'critic', sprite: 'crit',
  dlg: {
    spk: '👻 Inner Critic',
    color: '#f76a6a',
    txt: 'Testo della voce critica...',
    chs: [
      { t: 'Risposta sana 1', out: 'reframe' },
      { t: 'Risposta che cede', out: 'believe' },
      { t: 'Risposta analitica', out: 'question' },
    ],
  },
  outs: {
    reframe: { msg: 'Feedback. +RADAR +CLARITY', stat: { RADAR: 2, CLARITY: 1 } },
    believe: { msg: 'Feedback negativo. -VOICE', stat: { VOICE: -1 } },
    question: { msg: 'Feedback. +RADAR', stat: { RADAR: 2 } },
  },
  db: {
    pat: 'Nome pattern inner critic',
    ins: 'Insight pedagogico.',
    data: 'Fonte di ricerca.',
  },
};
```

### 5. Aggiungi il debrief

```js
WORLD_DEBRIEF.nuovo_mondo = {
  theme: 'Il tema centrale del mondo',
  levels: [
    {
      min: 5,   // sbloccato dopo 5+ interazioni
      insight: 'Cosa ha imparato il giocatore al livello base.',
      takeaway: 'Il takeaway pratico da portare fuori.',
      badge: '🏛️ Nome badge',
    },
    {
      min: 7,
      insight: 'Insight più approfondito.',
      takeaway: 'Takeaway avanzato.',
      badge: '🔍 Badge medio',
    },
    {
      min: 9,
      insight: 'Insight completo — tutti gli NPC visitati.',
      takeaway: 'Takeaway esperto.',
      badge: '✨ Badge completo',
    },
  ],
};
```

### 6. Aggiungi il nodo alla mappa

In `index.html`, trova `MAP_NODES` e aggiungi:

```js
{ id: 'nuovo_mondo', emoji: '🏛️', label: 'Nome\nMondo', color: '#6af7c8',
  affinities: ['piva', 'pa'], desc: 'Breve descrizione per la mappa' },
```

---

## Modificare UI_TEXTS

`UI_TEXTS` è l'oggetto che contiene tutti i testi statici dell'interfaccia. Cambiare un valore qui aggiorna automaticamente il testo nell'interfaccia senza toccare `index.html`.

### Esempi di modifiche comuni

**Cambiare il titolo del gioco:**
```js
title: {
  game_title: 'CAREER\nWORLD',  // \n diventa <br> in HTML
```

**Cambiare il testo del bottone start:**
```js
  btn_start: '[ INIZIA ]',
```

**Cambiare il messaggio di sblocco porta:**
```js
game: {
  msg_door_unlocked: '🔓 Porta sbloccata! ...',
```

**Cambiare i takeaway globali nel report finale:**
```js
outcome: {
  takeaways: {
    has_piva: 'Testo mostrato se il giocatore ha visitato P.IVA.',
    default:  'Testo mostrato se ha visitato pochi mondi.',
  },
```

---

## Regole di scrittura dei testi

### Apostrofi
Gli apostrofi nelle stringhe JS **devono essere escapati** se la stringa usa virgolette singole:

```js
// ✗ Sbagliato — rompe il JS
txt: 'L'importante è...',

// ✓ Corretto
txt: 'L\'importante è...',

// ✓ Alternativa — usa template literal
txt: `L'importante è...`,
```

### Lunghezza testi dialogo
- `dlg.txt`: idealmente 2–4 righe. Testi troppo lunghi vengono troncati su mobile.
- `dlg.chs[].t`: massimo ~80 caratteri per scelta. Su mobile i bottoni si impilano.
- `db.ins`: può essere più lungo — è in un box scrollabile.
- `db.data`: breve citazione con fonte. Formato: `'Autore/ente Anno: ...'`

### Colori NPC
Usa i colori CSS variables del tema o hex diretti:

```js
color: 'var(--accent)'   // viola principale
color: 'var(--warn)'     // giallo (tech)
color: '#e53935'         // rosso (sis/alleate)
color: '#4fc3f7'         // blu chiaro (corporate)
color: '#ffb74d'         // arancione (PMI)
color: '#6af7c8'         // verde acqua (P.IVA)
color: '#f48fb1'         // rosa (PA)
color: '#f76a6a'         // rosso pericolo (inner critic)
```

---

## Posizionamento NPC nella stanza

La stanza è una griglia di tile. Le dimensioni variano in base alla viewport, ma indicativamente:
- **Colonne** (gridX): da `2` a `13`
- **Righe** (gridY): da `2` a `9`

Se due NPC hanno la stessa posizione, il secondo viene spostato automaticamente a uno slot libero. In ogni caso, evita sovrapposizioni esplicite.

```
  1  2  3  4  5  6  7  8  9 10 11 12 13 14
1 ██ ██ ██ ██ ██ ██ ██ ██ ██ ██ ██ ██ ██ ██
2 ██  .  .  .  .  .  .  .  .  .  .  .  . ██
3 ██  .  .  .  .  .  .  .  .  .  .  .  . ██
4 ██  .  .  .  .  .  .  .  .  .  .  .  . ██
5 ██  .  .  .  .  .  .  .  .  .  .  .  . ██
6 ██  .  .  .  .  .  .  .  .  .  .  .  . ██
7 ██  .  .  .  .  .  .  .  .  .  .  .  . ██
8 ██  .  .  .  .  .  .  .  .  .  .  .  . ██
9 ██ ██ ██ ██ ██ ██ ██ ██ ██ ██ ██ ██ ██ ██
```

---

## Checklist prima di salvare

- [ ] Ogni `id` NPC è unico in tutto il file
- [ ] Ogni `out` nei `chs[]` ha una corrispondente chiave in `outs{}`
- [ ] Gli apostrofi nelle stringhe single-quote sono escapati con `\'`
- [ ] I nuovi mondi hanno almeno 3 NPC `required: true` di tipo `'npc'`, 1 `'sis'`, 1 `'tech'`
- [ ] I nuovi mondi sono aggiunti a `WORLD_DEBRIEF`
- [ ] I nuovi mondi sono aggiunti a `MAP_NODES` in `index.html`
- [ ] `patchWorldsV12()` è l'ultima chiamata nel file

---

## Palette colori consigliata per nuovi mondi

| Mondo | Floor | Wall | Accent | BG |
|-------|-------|------|--------|----|
| Caldo/PMI | `0x1e1608` | `0x2e2210` | `0x5a3a10` | `0x0e0a04` |
| Tech/Startup | `0x1a0a2e` | `0x2e1a4e` | `0x4a2a6a` | `0x0d0810` |
| Freddo/Corporate | `0x0a1810` | `0x142a18` | `0x1e4a28` | `0x050e08` |
| Neutro/Consulenza | `0x081820` | `0x103040` | `0x1a5060` | `0x040c10` |
| Verde/P.IVA | `0x081e18` | `0x103028` | `0x185040` | `0x040f0c` |
| Viola/PA | `0x1a0f2e` | `0x2e1a4a` | `0x4a2a6a` | `0x0d0810` |
