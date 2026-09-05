# 📋 Career World — Testi e regole interne (riferimento per modifiche)

> Questo file **non è codice**: è una fotografia di tutti i testi statici dell'interfaccia e di tutte le regole/formule interne del gioco, con il valore attuale di ciascuna e dove si trova nel codice. Serve per rivedere velocemente cosa dice/fa il gioco oggi e capire cosa dirmi di cambiare — le modifiche vere si fanno editando `src/data/career-world-data.js` o `src/game/game.js`.
>
> Per **aggiungere o modificare i dialoghi degli NPC** (le ~80 conversazioni nei 6 mondi) vedi invece [`CAREER_WORLD_DATA_GUIDE.md`](CAREER_WORLD_DATA_GUIDE.md) — qui sotto trovi solo i testi "di cornice" (interfaccia, intro mondi, quiz) e le meccaniche, non le singole conversazioni NPC.

---

## Indice

1. [Testi statici dell'interfaccia (UI_TEXTS)](#1-testi-statici-dellinterfaccia-ui_texts)
2. [Quiz iniziale — solo guest (STEPS)](#2-quiz-iniziale--solo-guest-steps)
3. [Mondi — schede introduttive e mappa](#3-mondi--schede-introduttive-e-mappa)
4. [Classi finali (CLASSES)](#4-classi-finali-classes)
5. [Regole interne / meccaniche di gioco](#5-regole-interne--meccaniche-di-gioco)

---

## 1. Testi statici dell'interfaccia (UI_TEXTS)

Tutti in `src/data/career-world-data.js`, oggetto `export const UI_TEXTS = {...}` (righe 5-127). Ogni sotto-sezione qui sotto corrisponde a una chiave di primo livello dell'oggetto.

### `meta`
| Chiave | Testo attuale |
|---|---|
| `page_title` | Career World · alpha 1.0.35 |
| `version` | ALPHA 1.0.35 |

### `title` — schermata iniziale
| Chiave | Testo attuale |
|---|---|
| `game_title` | CAREER WORLD |
| `tagline` | // navigare il mercato tech con consapevolezza |
| `description` | Un gioco pensato per studentesse in ambito tech — data, AI, ingegneria — che vogliono esplorare da vicino il mercato del lavoro: i suoi contesti reali, i bias sistemici, le scelte di carriera. **Nessun game over. Solo conoscenza.** |
| `btn_start` | [ INIZIA ] |

### `assess` — quiz (sidebar)
| Chiave | Testo attuale |
|---|---|
| `sidebar_title` | Il tuo percorso |
| `step_labels[0]` | Hard Skills — Cosa hai fatto |
| `step_labels[1]` | Soft Skills — Come lavori |
| `step_labels[2]` | Preferenze — Dove stai bene |
| `sidebar_note` | Le domande misurano *azioni reali* - riduce il bias di auto-valutazione sistematico del 20–35%. |
| `btn_next` | Avanti → |
| `btn_generate` | Genera la mia Card → |

### `card` — card personaggio (fine quiz, solo guest)
| Chiave | Testo attuale |
|---|---|
| `eyebrow` | // CLASSE ASSEGNATA |
| `headline` | La tua *mappa di partenza* |
| `explanation` | Questa card fotografa dove sei adesso. Le stat cambieranno navigando i mondi. |
| `bias_note` | **📌 Prima di entrare:** Chi subisce bias di auto-svalutazione tende a sotto-stimare le proprie competenze del 20–35%. Le tue stat potrebbero essere più alte di quanto percepisci. *RADAR* — leggere il sistema — parte bassa per tutte: cresce solo con l'esperienza. |
| `btn_enter` | Entra nel Mondo 1 → |
| `swipe_hint` | → scorri per continuare |
| `player_name` | PLAYER ONE |
| `level_suffix` | · Livello 1 |

### `game` — HUD e messaggi in-mondo
| Chiave | Testo attuale |
|---|---|
| `msg_default` | Muoviti con ← → ↑ ↓ · Premi SPAZIO o Z vicino a un NPC per interagire |
| `msg_default_mobile` | ↕↔ muoviti · ✦ interagisci con NPC vicini |
| `hint_mobile` | Usa ✦ vicino a un NPC per interagire |
| `hint_desktop` | Premi SPAZIO o Z vicino a un NPC per interagire |
| `hint_suffix` | · Trova tutti gli NPC per sbloccare le uscite |
| `msg_door_unlocked` | 🔓 Porta sbloccata! Avvicinati e premi SPAZIO/Z per uscire. Le altre interazioni sono opzionali. |
| `msg_door_hint_after_debrief` | 🔓 Porta sbloccata! Avvicinati e premi SPAZIO/Z per uscire. Le interazioni opzionali rimangono disponibili. |
| `msg_level_up` | 🎉 Hai esplorato tutto! Sono comparse nuove situazioni, più complesse. |

### `touch` — controlli touch (mobile)
`◀` `▶` `▲` `▼` `✦`

### `world_intro` — schermata pro/contro prima di un mondo
| Chiave | Testo attuale |
|---|---|
| `col_pro_label` | ✓ Pro |
| `col_con_label` | ✗ Contro |
| `hint_prefix` | 🎮 |
| `btn_enter` | Entra nel mondo → |

### `map` — mappa dei mondi
| Chiave | Testo attuale |
|---|---|
| `title` | 🗺️ CAREER WORLD MAP |
| `subtitle` | Sei mondi, tutti accessibili. Ogni lato connette contesti affini. |
| `free_note` | Inizia da dove vuoi — le linee mostrano affinità di pattern, non sequenze obbligatorie. |
| `node_status_todo` | Clicca per entrare |
| `node_status_done` | ✓ Completato |
| `btn_conclude` | 🏁 Concludi il percorso — vedi il report completo |
| `unlock_hint` | Completa almeno 2 mondi per sbloccare il report di carriera completo |

Il bottone **"🔄 Ricomincia da zero"** in fondo alla mappa non è in UI_TEXTS ma scritto direttamente in `renderMap()` (`src/game/game.js`) — vedi [§5.8](#58-reset--ricomincia-da-zero).

### `debrief` — riepilogo fine-mondo
| Chiave | Testo attuale |
|---|---|
| `section_patterns` | 📋 PATTERN RICONOSCIUTI |
| `section_insight` | 🧠 COSA HAI IMPARATO |
| `section_takeaway` | 💡 TAKEAWAY PRATICO |
| `section_stats` | ⚡ STAT GUADAGNATE |
| `depth_complete` | 🔓 Lettura completa |
| `depth_medium` | 🔆 Lettura approfondita |
| `depth_base` | 💡 Lettura base |
| `no_patterns` | Hai completato il minimo. Torna a esplorare gli NPC opzionali per scoprire altri pattern. |
| `locked_levels_hint` | livello/i di insight ancora da sbloccare — torna in questo mondo con più interazioni. |
| `all_levels_unlocked` | ✓ Tutti gli insight sbloccati per questo mondo. |
| `world_completed_suffix` | — COMPLETATO |
| `btn_map` | 🗺️ Torna alla mappa |
| `btn_retry` | ↩ Prova un percorso diverso |

### `npc_debrief` — popup dopo ogni singola interazione NPC
| Chiave | Testo attuale |
|---|---|
| `section_pattern` | 📋 PATTERN RICONOSCIUTO |
| `section_outcome` | ⚡ ESITO |
| `btn_continue` | Continua → |
| `radar_gain_label` | RADAR +1 |

### `outcome` — report di carriera finale
| Chiave | Testo attuale |
|---|---|
| `emoji` | 🗺️ |
| `title` | REPORT DI CARRIERA |
| `section_worlds` | // MONDI VISITATI |
| `no_worlds` | Nessun mondo completato. |
| `section_stats` | // STAT ACCUMULATE |
| `section_patterns` | // PATTERN RICONOSCIUTI |
| `no_patterns` | Esplora più NPC in ogni mondo per riconoscere i pattern. |
| `radar.exceptional` | RADAR eccezionale: hai sviluppato una lettura sistemica del mercato. |
| `radar.high` | RADAR molto alto: riesci a leggere le dinamiche di potere con chiarezza. |
| `radar.growing` | RADAR in crescita: stai costruendo la tua mappa del sistema. |
| `radar.base` | RADAR base: esplora più mondi e più NPC per approfondire la lettura. |
| `global_suffix` | *Una cosa da portare fuori dal gioco:* il mercato non è neutro. Ha strutture, bias e pattern ricorrenti. Conoscerli non significa accettarli — significa scegliere consapevolmente quando adattarsi, quando resistere, e quando cambiare ambiente. |
| `takeaways.has_piva` | Hai esplorato sia ambienti strutturati che il lavoro autonomo. La tua lettura del mercato è tra le più complete — sai cosa offre ogni contesto e a quale prezzo. |
| `takeaways.has_corporate` | Hai attraversato la progressione da piccolo a grande. Sai come cambiano le dinamiche di potere con la scala dell'organizzazione. |
| `takeaways.has_startup` | Hai visto come le startup e le PMI condividono l'informalità ma differiscono nel ritmo e nell'ambizione. La tua prossima frontiera è esplorare i contesti più strutturati. |
| `takeaways.default` | Hai iniziato il percorso. Ogni mondo che esplorerai aggiungerà strati alla tua lettura del mercato. |
| `btn_other_path` | ↩ Prova l'altro percorso |
| `btn_restart` | ↺ Ricomincia da capo |

### `progress` — pannello progresso in-mondo
| Chiave | Testo attuale |
|---|---|
| `status_open` | 🔓 APERTA |
| `status_locked_prefix` | 🔒 |

### Testi non in UI_TEXTS (scritti direttamente in `game.js`/`index.html`)
Alcuni testi "di cornice" recenti non passano da UI_TEXTS — se li cerchi lì non li trovi:
- Schermata "Accedi o continua" (login/registrazione/guest) → `index.html`, sezione `#s-entry`
- Bottone e modale **"🔄 Ricomincia da zero"** → `renderMap()`/`confirmReset()` in `game.js`
- Bottone **"💼 Cambia lavoro"** e testi del colloquio → `buildJobChangeBtn()`/`showJobChangePicker()`/`showInterview()` in `game.js`

---

## 2. Quiz iniziale — solo guest (STEPS)

`src/data/career-world-data.js`, `export const STEPS=[...]`. Le guest fanno tutte e 3 le fasi; le utenti autenticate fanno solo la Fase 3, come calibrazione iniziale (vedi [§5.9](#59-calibrazione-iniziale-e-ricalibrazione-account-autenticato)).

3 fasi:

1. **Hard Skills** (`FASE 1 · HARD SKILLS`) — "Cosa hai fatto con la tecnologia?" — 7 domande (Python/R, SQL, dashboard, ML, LLM/API AI, cloud, git/CI-CD), ognuna con 4 opzioni da "Sì, più volte/in produzione" a "No".
2. **Soft Skills** (`FASE 2 · SOFT SKILLS`) — "Come ti sei comportata in situazioni reali?" — 6 domande (comunicazione, gestione disaccordi, autonomia, gestione del cambiamento, feedback, mentoring verso altre).
3. **Preferenze** (`FASE 3 · ORIENTAMENTO`) — 1 domanda di orientamento (5 opzioni: 📊 dati→business, 🔬 modelli predittivi, ⚙️ AI in produzione, 🤖 LLM/agenti, 🛠️ pipeline/infrastrutture dati) + 4 slider Stabilità/Rischio, Deep Tech/Strategico, Solista/Team, Lungo periodo/Impatto immediato.

Questa stessa Fase 3 (da sola, saltando 1-2) è anche la **calibrazione iniziale delle utenti autenticate** — vedi [§5.9](#59-calibrazione-iniziale-e-ricalibrazione-account-autenticato).

Il punteggio di ogni risposta testuale è in `export const SMAP={...}` (righe 297-340): da 5 punti ("Sì, più volte", "Sì, in produzione"...) a 0 ("No", "Non è il mio focus"...).

---

## 3. Mondi — schede introduttive e mappa

### Schede pro/contro (`WORLD_INTROS` + `WORLD_INTROS_NEW`, mostrate prima di entrare in un mondo)

| Mondo | Titolo | Pro | Contro |
|---|---|---|---|
| PMI | PMI DI SETTORE 🏭 | Esposizione diretta al business reale · Autonomia e visibilità rapida · Impatto misurabile fin da subito | Poco o nessun mentorship tecnico · Ruoli spesso mal definiti o sovrapposti · Sottoinvestimento in tool e dati |
| Startup | STARTUP TECH 🚀 | Tecnologie recenti, ritmo alto · Titoli ambiziosi e ownership reale · Prossimità al prodotto e alle decisioni | Alta instabilità — molte chiudono entro 3 anni · Credit gap elevato per informalità dei processi · Confine labile tra "autonomia" e mancanza di struttura |
| Consulenza | BIG CONSULENZA 🏢 | Brand sul CV che apre porte · Struttura di carriera chiara · Rete professionale ampia e multi-settore | Rischio generalismo: tutto in superficie · Criteri di promozione spesso impliciti · Cultura orientata alle ore fatturabili |
| Corporate | LARGE CORPORATE 🏗️ | Dati e infrastruttura reale · Stabilità e benefit · Possibilità di specializzazione profonda | Burocrazia e lentezza decisionale · Avanzamento spesso per anzianità o rete · Criteri di "potenziale" spesso opachi e distorti |
| P.IVA | P.IVA & FOUNDER 💡 | Autonomia totale su progetti e clienti · Tariffa potenzialmente più alta · Costruisci qualcosa di tuo | Instabilità del reddito · Isolamento — nessun team, nessuna struttura · Ogni confine professionale lo devi proteggere tu |
| PA | PA / RICERCA / ACCADEMIA 🎓 | Impatto su scala pubblica · Stabilità (nel pubblico) · Libertà di ricerca (nell'accademia) | Burocrazia e lentezza decisionale · Precariato strutturale nell'accademia · Retribuzioni spesso inferiori al privato |

File: `WORLD_INTROS` righe 1719-1738 (PMI/Startup/Consulenza), `WORLD_INTROS_NEW` righe 2343-2356 (Corporate/P.IVA), `WORLD_INTROS.pa` riga ~3693 (dentro `patchWorldsV12()`).

### Nodi sulla mappa (`MAP_NODES`, `game.js`)

| Mondo | Descrizione mostrata sulla mappa |
|---|---|
| PA | Impatto pubblico, burocrazia, accademia |
| PMI | Piccola impresa, dati reali, zero struttura |
| Startup | Velocità, autonomia, instabilità |
| Consulenza | Brand, struttura, criteri opachi |
| Corporate | Risorse, politica, rete informale |
| P.IVA | Autonomia totale, costruisci il tuo |

La mappa è l'illustrazione di una città (`public/map/galletcity.png`, 512×512), non più un layout SVG a nodi/linee: ogni mondo è un hotspot cliccabile posizionato (in %, `MAP_CITY_POS`) sopra un edificio specifico della scena — assegnazione fatta a occhio, puramente estetica/narrativa (torre istituzionale → PA, capannone con macchinari → PMI, blocco denso di grattacieli → Consulenza, edificio con logo/prato circolare → Corporate, palazzo scuro con grate → Startup, piccolo edificio isolato → P.IVA). Le linee di "affinità" tra mondi (`affinities` in `MAP_NODES`, ancora usate per il testo descrittivo) non hanno più una resa visiva (niente più linee tratteggiate) — non bloccavano comunque l'accesso: tutti i 6 mondi restano sempre cliccabili.

---

## 4. Classi finali (CLASSES)

`src/data/career-world-data.js`, righe 342-361. 5 classi + una placeholder:

| Classe | Nome | Emoji | Colore | Descrizione |
|---|---|---|---|---|
| `analyst` | Data Analyst | 📊 | `#4fc3f7` | Trasformi numeri in decisioni. |
| `scientist` | Data Scientist | 🔬 | `#81c784` | Costruisci modelli che anticipano il futuro. |
| `ml` | ML Engineer | ⚙️ | `#ffb74d` | Porti i modelli in produzione. |
| `ai` | AI Engineer | 🤖 | `#ce93d8` | Costruisci con LLM, RAG e agenti AI. |
| `dataeng` | Data Engineer | 🛠️ | `#4db6ac` | Costruisci le fondamenta dati per tutti gli altri. |
| `explorer` | Esploratrice | 🧭 | `#9e9e9e` | Placeholder legacy — non più assegnata a nuovi account (vedi §5.9). Resta in `CLASSES` solo per compatibilità con eventuali account creati prima di questa modifica. |

Per i guest la classe è calcolata da `computeChar()` sull'intero quiz (Fasi 1-3). Per le autenticate, `computeChar()` gira sulla sola Fase 3 (Fasi 1-2 vuote contano 0) — l'orientamento pesa comunque 20pt e determina la classe iniziale. Una singola ricalibrazione tra le 5 è poi possibile più avanti (§5.9).

---

## 5. Regole interne / meccaniche di gioco

### 5.1 Statistiche

7 stat, tutte con **massimo 50** (`STAT_MAX` in `game.js`): `SKILL`, `VOICE`, `CLARITY`, `NETWORK`, `ENERGY`, `RADAR`, `INSIDER`.

- **INSIDER** ("conoscenza procedure e politica interna") sale di **+2** a ogni interazione NPC completata (non con la critica interiore) — `closeDebrief()`. Ad un **cambio di azienda vero** (§5.5) si riduce al **30%** del valore (`INSIDER_RETENTION_RATIO=0.30`), non si azzera più; a una **promozione interna** resta invariato.
- **RADAR** parte da 3 e sale di +1 reale (`round(1*SCALE)`) a ogni interazione **solo se** la scelta non ha già un suo delta RADAR esplicito nei dati — altrimenti si applica solo quello (mai entrambi, altrimenti anche le penalità `RADAR:-1` finirebbero comunque in un netto positivo). Vedi `hasExplicitRadar` in `handleChoice()`.
- **NETWORK** parte sempre al **minimo (0)** per tutte le classi — non è un tratto di personalità del quiz, si costruisce solo scegliendo risposte che prevedono la costruzione di una relazione (delta `NETWORK` positivi nei dati).
- **ENERGY** parte sempre dal **massimo (50)** e funziona come una risorsa, non più come un tratto o un delta autorale per singola scelta (le chiavi `ENERGY` ancora presenti in `career-world-data.js` restano come testo narrativo del messaggio ma non vengono più applicate — vedi `handleChoice()`). Ad ogni interazione:
  - **-3** di norma (interazione NPC generica);
  - **-6** (doppio) quando appare la voce interiore critica (`def.isCritic`);
  - **+5** parlando con un'alleata (`type:'sis'`) o affrontando una sfida tecnica (`type:'tech'`).
  Se tocca **0** compare un avviso di burnout nel debrief (testo esteso la prima volta, `ST.burnoutWarned`, poi un promemoria breve) — nessun effetto di game over, solo un segnale di sostenibilità coerente con la filosofia del gioco.
- Ogni delta stat definito su un NPC (`outs[].stat`) viene **moltiplicato ×2.5** prima di essere applicato (`const SCALE=2.5` in `handleChoice()`) — eccetto i valori negativi, che restano com'è, ed **ENERGY**, che segue solo la regola strutturale sopra.
- **Eccezione P.IVA**: i guadagni positivi di `NETWORK` in quel mondo vengono moltiplicati ×2.5×2 = ×5 invece di ×2.5 (`PIVA_NETWORK_SCALE=2`) — cresce più in fretta perché lì non c'è cambio lavoro/colloqui, la crescita passa solo da relazioni dirette.
- Un pulsante ℹ️ nella HUD di gioco e nella Card iniziale apre un overlay (`showStatInfo()`) che spiega cosa rappresenta ogni statistica sia nel gioco sia nella vita reale (testi in `UI_TEXTS.stat_info`).

### 5.2 Livello ESPLORATO vs livello UFFICIALE

Ogni mondo ha ora **due livelli distinti**, tracciati separatamente in `ST.worldsProgress[worldId]`:

- **Esplorato** (`visited`, invariato) — sblocca il contenuto NPC del livello successivo non appena si è parlato con **tutti** gli NPC del livello corrente (`getUnlockedLevel()` in `src/game/npcVisibility.js`). Resta **sempre gratuito**: esplorare non richiede colloqui né sposta soldi/titolo.
- **Ufficiale** (`officialLevel`/`officialRAL`, nuovo) — il titolo/RAL mostrati in HUD. Sale **solo** tramite `grantOfficialLevel()` (§5.4/§5.5): il livello 1 di un mondo mai visitato prima è **gratuito** al primo ingresso (vedi §5.5), i livelli successivi richiedono un colloquio superato.

Se il livello esplorato supera quello ufficiale (hai già le conversazioni giuste ma non il titolo), il bottone "Cambia lavoro" nella HUD cambia in **"🎉 Chiedi la promozione che ti spetta →"** (`buildJobChangeBtn()`) — è lo stesso bottone, cambia solo testo/colore per segnalarlo.

**Sblocco della porta** di uscita da un mondo (indipendente da entrambi i livelli): serve aver parlato con **almeno 3 NPC** di tipo `'npc'`, **1** di tipo `'sis'`, **1** di tipo `'tech'` **visibili al livello esplorato corrente** — `getWorldProgress()`.

I titoli di carriera per livello sono in `WORLD_CAREER_LEVELS` (`career-world-data.js`) — 3 livelli per mondo, alcuni con bivio al livello 3 (Consulenza: Expert/Engagement Manager, Corporate: Senior Specialist/Engineering Manager).

### 5.3 RAL (stima salariale) — ruolo × livello × area, ancorata alla RAL ufficiale precedente

`computeRAL(worldId, classe, livello, ralModifier)` (`game.js`) calcola una RAL "di mercato" **pura** (poi ancorata, vedi sotto), da tabelle ruolo×livello e area/contesto (`RAL_BASE`/`AREA_MULTIPLIER`, `career-world-data.js`, dati settembre 2026 — fonti e metodo in fondo al file dati):

```
tier = RAL_LEVEL_BY_TIER[livello]              // 1→junior, 2→mid, 3→senior (nessun livello 4 raggiungibile via colloquio)
[min,max] = RAL_BASE[classe][tier] × AREA_MULTIPLIER[mondo].{min,max}
offerta = (min + max) / 2 × (1 + clamp(ralModifier, -0.2, 0.2))   // clampata dentro [min×0.9, max×1.15]
RAL_mercato = round( offerta / 1000 ) × 1000
```

Valori attuali (`RAL_BASE`, € lordi/anno, per ruolo × seniority):

| Ruolo | Junior | Mid | Senior | Lead |
|---|---|---|---|---|
| analyst | 26-32k | 32-40k | 40-50k | 50-65k |
| scientist | 28-36k | 38-50k | 50-68k | 70-95k |
| ml | 30-38k | 42-55k | 58-78k | 80-105k |
| ai | 30-38k | 42-58k | 60-80k | 85-110k |
| dataeng | 29-37k | 40-53k | 55-74k | 76-100k | *(stimato per estrapolazione da ml, non in survey originale)*

Moltiplicatori d'area (`AREA_MULTIPLIER`): PMI 0.80-0.90, Startup 0.85-1.10, Consulenza 0.90-1.00, Corporate 1.05-1.20, PA 0.55-0.75. **P.IVA non ha un min/max RAL diretto** (è tariffa/giorno, non stipendio) — vedi §5.6.

`ralModifier` è la **leva di negoziazione** accumulata dai dialoghi con un campo `ralEffect:{delta}` (solo nodi a tema esplicitamente negoziale — oggi `cons_salary` e `pmi_auth_salary_data`, delta 0.02-0.07 secondo la scelta), consumata e azzerata al prossimo `grantOfficialLevel()` riuscito. Il debrief mostra un feedback dedicato ("📈 +X% di leva per la prossima trattativa") quando una scelta lo modifica.

Per P.IVA l'etichetta HUD cambia da "RAL stimata" a **"Fatturato annuo stimato"** (`RAL_LABEL_BY_WORLD`).

La RAL **ufficiale** (quella mostrata in HUD, `ST.world.officialRAL`) NON è mai `RAL_mercato` diretta — è ancorata alla RAL ufficiale precedente, con un tetto diverso a seconda del tipo di cambio (`grantOfficialLevel()`, vedi §5.4/§5.5):

```
se non esiste una RAL ufficiale precedente da cui ancorare (primo ingresso in assoluto):
    RAL_new = RAL_mercato
altrimenti:
    cap = 10% (promozione interna) oppure 20% (cambio di azienda)
    capped = round( RAL_precedente × (1+cap) / 1000 ) × 1000
    RAL_new = RAL_mercato > capped ? capped : RAL_mercato   // può anche scendere
```
`RAL_precedente` = la RAL ufficiale dello **stesso mondo** per una promozione interna, o del **mondo lasciato** per un cambio di azienda. Non esiste più alcun "premio % cumulativo" illimitato: `INTERNAL_PROMOTION_RAL_CAP=0.10`, `EXTERNAL_JOB_CHANGE_RAL_CAP=0.20` (`career-world-data.js`).

**Readiness (solo informativa)**: `computeReadiness(gs) = 0.5×SKILL + 0.25×VOICE + 0.25×CLARITY` (scala 0-50) mappata a un tier junior/mid/senior/lead (soglie 18/30/40, `READINESS_THRESHOLDS`). Il picker "Cambia lavoro" la usa solo per **pre-selezionare** il livello suggerito nel dropdown, mostrando un suggerimento a schermo — non blocca né sostituisce il colloquio, che resta l'unico vero gate (vedi §5.4).

### 5.4 Colloquio (anche d'ingresso, oltre che per "Cambia lavoro")

`showInterview()`, `game.js`. Domande da `INTERVIEW_QUESTIONS` — **4 domande generiche per livello** (stesse per tutti i mondi, risposte da 0 a 2 punti) **+ 1 domanda specifica del mondo/livello** da `INTERVIEW_WORLD_QUESTIONS` → **5 domande totali**.

- Per **PMI** la domanda specifica è una delle classiche domande illegali in colloquio (stato civile/figli/pregiudizi di leadership) — tutte le risposte valgono **0 punti**, non sposta la valutazione. In più, l'esito del colloquio mostra sempre una nota fissa (`PMI_ILLEGAL_QUESTION_NOTICE`, `career-world-data.js`) che spiega perché quella domanda non sarebbe legale (art. 8 Statuto dei Lavoratori; D.Lgs. 198/2006), indipendentemente da quale risposta è stata scelta.
- Soglia per superare: **70%** del punteggio massimo (`INTERVIEW_PASS_RATIO=0.7`), invariata.
- **Fattore fortuna — ora una curva, non più un valore fisso**: sotto soglia si fallisce sempre. Da soglia (70%) in su, il rischio di rifiuto scende **linearmente** da un massimo appena sopra soglia a un minimo con punteggio pieno:
  ```
  progresso_oltre_soglia = (punteggio/massimo - 0.70) / (1 - 0.70)
  rischio = INTERVIEW_LUCK_REJECT_MAX - progresso_oltre_soglia × (INTERVIEW_LUCK_REJECT_MAX - INTERVIEW_LUCK_REJECT_MIN)
  ```
  `INTERVIEW_LUCK_REJECT_MAX=0.35` (appena sopra soglia), `INTERVIEW_LUCK_REJECT_MIN=0.05` (punteggio pieno) — quindi 70%→35% di rischio, 100%→5%. Messaggio pescato a caso tra 4 varianti in `INTERVIEW_LUCK_MESSAGES`: "abbiamo scelto un'altra persona", "sei stata ghostata", "posizione messa in pausa", "hanno promosso internamente qualcun altro". In questo caso il livello **non** viene concesso.
- Livelli selezionabili: **1, 2 o 3** (il picker "Cambia lavoro" li offre tutti, con un suggerimento di livello pre-selezionato in base alla readiness — §5.3).
- **Colloquio d'ingresso** (`enterWorld()`, non solo "Cambia lavoro"): cliccare sulla mappa un mondo mai visitato prima (tranne P.IVA) apre subito il colloquio per il livello 1, invece del vecchio grant automatico e silenzioso. Se superato, il risultato comunica anche la RAL di partenza ("💶 RAL: 19.000 €"); se fallito, si torna alla mappa e il mondo resta cliccabile — si può ritentare subito, senza limiti e senza alcun blocco permanente (coerente con "Nessun game over").
- **P.IVA non ha colloqui**, né d'ingresso né per "Cambia lavoro": esclusa sia dal menu mondi del picker sia da qualunque prompt — cresce solo per relazioni dirette (NETWORK ×2, §5.1) e fatturato costruito (§5.6).

### 5.5 Cambia lavoro — tre casi, spostamento automatico, transizione narrativa

Bottone **"💼 Cambia lavoro"** sempre visibile nella HUD di gioco (in qualunque mondo tranne P.IVA, sia per guest che autenticate) — `buildJobChangeBtn()`. Apre il picker mondo/livello con il mondo corrente preselezionato (modificabile).

`grantOfficialLevel(worldId, livello, track, opts)` gestisce **tre casi distinti**:

1. **Ingresso gratuito senza colloquio** (`opts.free=true`) — oggi riservato al **solo P.IVA** (che non ha colloqui, §5.6): livello 1 ufficiale automatico al primo ingresso in assoluto. Per tutti gli altri mondi il livello 1 passa dal colloquio d'ingresso (§5.4), non da questo path. RAL = `RAL_mercato` pura (nessun ancoraggio, §5.3) quando si applica. Nessun effetto su INSIDER/NETWORK.
2. **Promozione interna** (mondo scelto nel picker = mondo in cui si è già ufficialmente): concede il livello (con relativo contenuto NPC, stavolta sì). RAL cappata a **+10%** rispetto alla RAL ufficiale attuale in quel mondo (§5.3). INSIDER **invariato**, nessun bonus NETWORK — non hai lasciato nessuna azienda.
3. **Cambio di azienda vero** (mondo scelto diverso da quello in cui si è ufficialmente ora): concede il livello. RAL cappata a **+20%** rispetto alla RAL ufficiale del mondo lasciato. INSIDER ridotto al 30% (§5.1). **Bonus NETWORK** una tantum = `min(NETWORK_JOB_CHANGE_BONUS_CAP, round(dimensione_azienda_lasciata × livello_ufficiale_lì))` — cap **15** (era 20, mai raggiungibile: il prodotto massimo reale è 5×3=15). Dimensioni aziende (`WORLD_COMPANY_SIZE`): PMI 1, Startup 2, Consulenza 4, Corporate 5, PA 4, P.IVA 0. **Spostamento**: prima un breve beat narrativo pescato a caso da `JOB_CHANGE_TRANSITIONS` (3 varianti, es. "Dai le dimissioni. Due settimane dopo..."), poi la giocatrice viene spostata davvero nel nuovo mondo (`enterWorld()`) — non più un teletrasporto istantaneo. Lo stesso path (`grantOfficialLevel` chiamato subito dopo il colloquio, non al click su "Continua") vale anche per il primissimo ingresso in un mondo mai visitato quando non si ha ancora nessun mondo ufficiale (`ST.world.id` nullo): nessun beat narrativo in quel caso, si entra direttamente.

### 5.6 P.IVA — eccezioni e il fatturato che si costruisce, non si riceve

- Nessun colloquio, né d'ingresso né per cambio lavoro (esclusa da menu e prompt) — riceve il livello 1 ufficiale gratuito e silenzioso al primo ingresso (§5.5 caso 1), l'unico mondo per cui questo path si applica ancora.
- NETWORK cresce il doppio rispetto agli altri mondi per le scelte NPC positive (§5.1).
- `WORLD_COMPANY_SIZE.piva = 0` (non ha senso "quanto è grande" un'attività da sola).
- **RAL = fatturato costruito, non assegnato**: a differenza degli altri mondi, `computeRAL('piva', ...)` ritorna sempre 0 — `ST.world.officialRAL` per P.IVA è il fatturato reale (`ST.world.pivaState.fatturato`), aggiornato dal vivo dopo ogni contratto, non una stima di mercato. Parte da 0 alla primissima volta che si entra nel mondo, poi persiste tra le sessioni come tutto il resto (`ST.worldsProgress.piva.pivaState`).
- **Nodi con `revenueEffect`** (`career-world-data.js`, applicato in `handleChoice()` solo quando `ST.world.id==='piva'`): `piva_contratto`, `piva_tech2`, `piva_level2_pricing`, `piva_level2_scope`. Due tipi, anche combinabili su una stessa scelta (array):
  - `{type:'contract', days, quality}` → aggiunge un contratto: `valore = tariffa_del_contratto × days × quality × reputationMultiplier` (`contractValue()`). La tariffa/giorno **non dipende più dal livello**, ma da quanti contratti ha già chiuso in questo mondo (`feeForContract()`, `PIVA_FEE_STEPS=[250,500,750,1000]`): 250€/gg il 1° contratto, 500 il 2°, 750 il 3°, dal 4° in poi resta a 1000€/gg (tetto) — il track record conta più del titolo. `PIVA_DAYRATE`/`pivaAnnualEquivalent()` restano solo come range di confronto informativo, non entrano più nel calcolo.
  - `{type:'reputation', delta}` → alza (o abbassa) `reputationMultiplier`, che si applica composto ai contratti successivi nello stesso mondo — non vale nulla subito, ma fa valere di più tutto ciò che viene dopo.
  - `piva_level2_scope` (cliente ricorrente) marca anche `concentration:0.6`: il rischio di dipendere da un solo cliente, registrato in `pivaState.concentrationRisk`.
- Il debrief mostra sempre la scomposizione del guadagno ("💰 +X€ di fatturato (giorni × tariffa) — totale Y€") o del cambio di reputazione ("📈/📉 X% sul tuo tariffario"), mai solo il numero finale — per rendere leggibile il nesso scelta→guadagno.
- `finalizePivaEquivalent(pivaState)` converte il fatturato in una RAL-equivalente di riferimento (sconto 0.65 + penalità di concentrazione) — pronta in `career-world-data.js` ma oggi **solo utility**, non ancora agganciata a un punto preciso della UI (nessun flusso esistente per "dichiarare" il fatturato P.IVA in una trattativa da dipendente altrove).

### 5.7 Nota didattica sulla domanda illegale (PMI)

Vedi §5.4 — `PMI_ILLEGAL_QUESTION_NOTICE` in `career-world-data.js`, mostrata nell'esito del colloquio ogni volta che la domanda specifica PMI fa parte del pool (cioè sempre, a ogni livello, per un colloquio PMI).

### 5.8 Reset — "Ricomincia da zero"

Bottone in fondo alla mappa (sempre visibile) + bottone "Ricomincia da capo" nel report finale — entrambi passano per `confirmReset()`, che mostra un avviso prima di procedere, poi `performFullReset()`: azzera stat, mondi visitati/progrediti (incluso livello/RAL ufficiali), classe scelta, ricalibrazione, e per le autenticate anche i dati salvati su Supabase (`resetProgress()`). Riporta alla schermata iniziale.

### 5.9 Calibrazione iniziale e ricalibrazione (account autenticato)

Non esiste più la "laurea" a posteriori. Ora:

1. **Calibrazione iniziale** (`startFreshAuthenticated()`, chiamata al primo accesso o quando non c'è ancora un personaggio salvato): mostra **solo la Fase 3** del quiz (§2 — orientamento + 4 slider, sidebar dei 3 step nascosta via classe CSS `calibration-mode`), poi la Card come per i guest, poi la mappa. `computeChar()` gira con Fasi 1-2 vuote: l'orientamento (20pt) domina sui piccoli contributi degli slider, quindi determina comunque la classe. Nessun placeholder "Esploratrice": si parte già con una delle 5 classi vere.
2. **Ricalibrazione — unica occasione** (`maybeOfferRecalibration()`/`showRecalibration()`, stesso trigger di prima: prima volta che si esplora **completamente** un mondo): propone le 5 classi (quella attuale evidenziata) **più** un bottone "Resta [classe attuale]". Qualunque scelta (cambiare o restare) imposta `ST.recalibrated=true` — non si riproporrà mai più per quell'account. Il campo di stato è `ST.recalibrated` (era `ST.graduated`; le righe salvate vecchie con `graduated` vengono lette comunque in fallback).

### 5.10 Avatar NPC, player e prop

Tutti gli avatar sono immagini PNG 48×48 caricate come asset statici (non più disegnate proceduralmente):

- **NPC "persona"** (ruoli `mgr`/`col`): pescano a caso — ma in modo **stabile** (hash dell'id NPC, `npcTextureKey()`/`hashStr()`) — tra **7 avatar** in `AVATAR_KEYS`: `avatar_old_man`, `avatar_woman`, `avatar_young_man`, `avatar_bald_guy`, `avatar_afro_woman`, `avatar_black_man`, `avatar_old_woman` (file in `public/npc-avatars/`). Nessun avatar è legato a un ruolo specifico — scelta intenzionale per non fissare stereotipi (es. "manager" sempre uomo) in un gioco sul bias.
- **NPC "sis" (Alleate)**: eccezione al pescaggio casuale — hanno sempre lo stesso avatar dedicato `avatar_ally` (donna in tailleur rosso), per essere riconoscibili a colpo d'occhio come figura ricorrente positiva. Non fa parte di `AVATAR_KEYS`/`AVATAR_GENDER`, è gestito da `ALLY_AVATAR_KEY` in `game.js`.
- **Coerenza di genere**: ogni NPC persona (`mgr`/`col`) ha un campo `gender:'f'|'m'` (dedotto da nome/pronomi nel dialogo). `npcTextureKey()` filtra `AVATAR_KEYS` per genere (`AVATAR_GENDER` in `game.js`) **prima** di applicare l'hash — un'NPC scritta come donna riceve sempre uno dei 3 avatar femminili, mai uno maschile, e viceversa. Senza `gender` sull'NPC, pesca dal pool intero (comportamento legacy). Pool femminile (3): woman/afro_woman/old_woman — maschile (4): old_man/young_man/bald_guy/black_man.
- **Player**: `public/player/player.png` (giovane donna), texture `player_avatar`.
- **`tech`** (scrivania/PC — non è una persona, è una risorsa/strumento): `public/props/pc.png`.
- **`crit`** (fantasma rosso della critica interiore) resta disegnato proceduralmente — è volutamente simbolico, non un ritratto.

Per sostituire un'immagine: basta sovrascrivere il file PNG corrispondente in `public/` con lo stesso nome — non serve toccare il codice. Per aggiungerne una nuova a un ruolo persona: aggiungere il file in `public/npc-avatars/`, la sua chiave in `AVATAR_KEYS`, e il genere in `AVATAR_GENDER`.

### 5.11 Scala schermo — stessa "stanza" su mobile e desktop

La stanza di gioco ha una **risoluzione logica fissa**: `GAME_W=900, GAME_H=560` (`game.js`) — identica su ogni dispositivo, stessa griglia/layout/arredi. Solo la dimensione **visualizzata** cambia in base allo schermo, tramite un unico fattore di scala (`getCanvasDims()`) calcolato come il minimo tra spazio disponibile in larghezza e in altezza (mai oltre ×1.4, per non ingrandire troppo su monitor enormi). L'area di gioco è centrata verticalmente (`justify-content:center` su `.g-area` in `index.html`) per distribuire lo spazio vuoto sopra/sotto invece di lasciarlo tutto in fondo su schermi stretti e alti.

### 5.12 Autenticazione e salvataggio

- **Guest**: gioca subito, avvisata che i progressi non vengono salvati. Fa il quiz completo (3 fasi).
- **Autenticata**: fa solo la calibrazione (§5.9), non il quiz completo. Progressi salvati su Supabase (`saveProgress()`/`loadProgress()`, `src/auth/persistence.js`) a ogni interazione NPC e cambio lavoro — incluso ora `officialLevel`/`officialRAL` per mondo. Se la riga salvata non ha un personaggio valido (es. dopo un reset), viene trattata come primo accesso, non come sessione da riprendere (`afterAuthSuccess()` in `src/auth/authScreen.js`, e lo stesso controllo in `boot()`).
- NPC `authOnly:true` sono visibili solo alle autenticate (dettagli in `CAREER_WORLD_DATA_GUIDE.md`).

---

*Ultimo aggiornamento: generato a mano ripercorrendo il codice attuale. Se il gioco cambia, questo file va rigenerato — non si aggiorna da solo.*
