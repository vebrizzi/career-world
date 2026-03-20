# 🎮 Career World

**Career World** è un gioco browser 2D educativo sul mercato del lavoro tech, con focus sui bias sistemici e lo sviluppo professionale per donne nel settore.

> *Nessun game over. Solo conoscenza.*

---

## File del progetto

```
career-world/
├── index.html              ← interfaccia, logica di gioco, motore Phaser
├── career-world-data.js    ← tutti i contenuti: NPC, dialoghi, mondi, testi UI
├── README.md               ← questo file
└── CAREER_WORLD_DATA_GUIDE.md  ← guida per modificare i contenuti
```

> **Regola d'oro**: non toccare `index.html` per modificare testi o contenuti. Tutto passa da `career-world-data.js`.

---

## Come avviare

Apri `index.html` direttamente in un browser **oppure** servi la cartella con un server locale:

```bash
# Python
python3 -m http.server 8080

# Node (npx)
npx serve .
```

Poi vai su `http://localhost:8080`.

> Non funziona aprendo `index.html` come file locale (`file://`) se il browser blocca i moduli ES — usa sempre un server locale.

---

## Struttura del gioco

### Assessment iniziale
3 fasi di domande comportamentali:
1. **Hard Skills** — cosa hai effettivamente realizzato con la tecnologia
2. **Soft Skills** — come ti sei comportata in situazioni reali
3. **Orientamento** — dove vuoi andare (determina la classe)

### Classi personaggio
| Classe | Descrizione |
|--------|-------------|
| 📊 Data Analyst | Trasforma dati in decisioni di business |
| 🔬 Data Scientist | Costruisce modelli predittivi |
| ⚙️ ML Engineer | Porta i modelli in produzione |
| 🤖 AI Engineer | Costruisce con LLM, RAG e agenti |

### Mondi (6 contesti lavorativi)
| ID | Nome | Tema pedagogico |
|----|------|-----------------|
| `pmi` | PMI di Settore | Ruolo vago, lavoro invisibile |
| `startup` | Startup Tech | Credit gap, confini professionali |
| `consulenza` | Big Consulenza | Executive presence, double bind |
| `corporate` | Large Corporate | Reti informali, sponsor vs mentore |
| `piva` | P.IVA & Founder | Pricing, scope creep, autonomia |
| `pa` | PA / Ricerca / Accademia | Precariato, burocrazia, impatto pubblico |

### Sistema di stat
Ogni scelta modifica le stat del personaggio. Le stat si accumulano tra i mondi (carry-over 20%).

| Stat | Cosa misura |
|------|-------------|
| SKILL | Competenze tecniche |
| VOICE | Capacità di esprimersi e tenere la posizione |
| CLARITY | Chiarezza su sé stessa e il contesto |
| NETWORK | Rete professionale e alleanze |
| ENERGY | Energia e sostenibilità |
| RADAR | Lettura delle dinamiche di sistema |

### Sblocco porta
La porta di ogni mondo si sblocca dopo aver interagito con:
- **3+ NPC** generici
- **1+ alleata** (sprite `sis`)
- **1+ sfida tecnica** (sprite `tech`)

Gli NPC opzionali sono bonus — aggiungono pattern e stat ma non bloccano il progresso.

### Inner Critic
Dopo alcune interazioni, appare l'**Inner Critic** — una voce che riproduce il bias di impostore. Le risposte alle sue provocazioni influenzano RADAR e VOICE.

---

## Tecnologie

- **[Phaser 3](https://phaser.io/)** — motore di gioco browser (caricato da CDN)
- **Vanilla JS** — nessun framework, nessun build step
- **Google Fonts** — Press Start 2P, Space Mono, DM Sans
- Architettura: **single-file HTML + JS esterno** (no bundler, no npm)

---

## Modificare i contenuti

Vedi **[CAREER_WORLD_DATA_GUIDE.md](./CAREER_WORLD_DATA_GUIDE.md)** per la guida completa.

In sintesi:
- **Aggiungere/modificare NPC** → cerca l'array `*_ADDITIONS` del mondo in `career-world-data.js`
- **Modificare testi interfaccia** → modifica `UI_TEXTS` in cima a `career-world-data.js`
- **Modificare domande assessment** → modifica `STEPS[]`
- **Aggiungere un nuovo mondo** → segui la checklist nella guida

---

## Filosofia pedagogica

Il gioco è progettato su questi principi:

1. **Nessun game over** — ogni scelta porta conoscenza, non punizione
2. **Bias reali, dati reali** — ogni pattern NPC è supportato da ricerca (McKinsey, HBR, Catalyst, Pitchbook)
3. **Domande comportamentali** — l'assessment misura azioni concrete per ridurre il bias di auto-svalutazione (–20–35% documentato)
4. **Orientamento > skill** — la classe è determinata principalmente da dove vuoi andare, non da cosa sai fare ora
5. **Carry-over tra mondi** — le stat accumulate riflettono la crescita progressiva

---

## Versione

`alpha 1.0.35` — in sviluppo attivo.

---

*Progetto di ricerca applicata sul mercato tech italiano.*
*Dati e pattern basati su: McKinsey Women in the Workplace, HBR, Catalyst, Pitchbook, ISTAT, Lean In.*
