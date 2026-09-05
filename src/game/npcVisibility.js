import { WORLD_DEFS } from '../data/career-world-data.js';

// Sistema a livelli di carriera: ogni NPC ha un level (1 se assente — gli
// NPC "storici" senza level sono tutti livello 1). Un livello N+1 diventa
// visibile solo quando TUTTI gli NPC del livello N (esclusi quelli con
// `track`, vedi sotto) sono stati visitati. NPC flagged authOnly:true sono
// visibili solo agli utenti autenticati, indipendentemente dal livello.
//
// Alcuni mondi hanno un bivio di carriera all'ultimo livello (es. Consulenza:
// Expert vs Manager): gli NPC con `track:'x'` sono visibili solo dopo che il
// giocatore ha scelto quel percorso (ST.world.track) — di norma tramite un
// NPC "bivio" senza track proprio, i cui esiti (`outs[].track`) impostano la
// scelta. Gli NPC con track non contano per l'avanzamento di livello (non ha
// senso richiedere di esplorare ENTRAMBI i percorsi per sbloccare qualcosa
// che non esiste, dato che il livello 3 è l'ultimo).
//
// Tutto questo si valuta a runtime nel punto in cui il mondo viene letto
// (vedi initGame()/showWorldDebrief()/syncNewlyVisibleNpcs() in game.js),
// non al caricamento dei dati, perché dipende da auth/progressi del player.

export function getUnlockedLevel(worldId, isAuthed, visited = []) {
  const wd = WORLD_DEFS[worldId];
  if (!wd) return 1;
  const base = wd.npcs.filter(n => !n.authOnly || isAuthed);
  // Tetto = livello più alto realmente definito nei dati del mondo, così il
  // conteggio non scavalca l'ultimo livello quando è già tutto completato
  // (altrimenti chi finisce il livello 3 "sblocca" un livello 4 inesistente,
  // e chi legge il numero — es. la RAL — non trova dati per quel livello).
  const maxLevel = base.reduce((m, n) => Math.max(m, n.level || 1), 1);
  let level = 1;
  while (level < maxLevel) {
    const atLevel = base.filter(n => (n.level || 1) === level && !n.track);
    if (atLevel.length && !atLevel.every(n => visited.includes(n.id))) break;
    level++;
  }
  return level;
}

export function getVisibleNpcs(worldId, isAuthed, visited = [], track = null) {
  const wd = WORLD_DEFS[worldId];
  if (!wd) return [];
  const base = wd.npcs.filter(n => !n.authOnly || isAuthed);
  const unlocked = getUnlockedLevel(worldId, isAuthed, visited);
  return base.filter(n => {
    if ((n.level || 1) > unlocked) return false;
    if (n.track && n.track !== track) return false;
    return true;
  });
}

// true quando il giocatore ha visitato ogni NPC attualmente visibile in
// questo mondo (con questo track, se il mondo ha un bivio) — usata sia per
// il messaggio "hai esplorato tutto" sia per il trigger della ricalibrazione
// di classe dell'account (vedi maybeOfferRecalibration() in game.js).
export function isWorldFullyExplored(worldId, isAuthed, visited = [], track = null) {
  const wd = WORLD_DEFS[worldId];
  if (!wd) return false;
  const hasBranch = wd.npcs.some(n => n.track);
  if (hasBranch && !track) return false; // il bivio non è ancora stato scelto
  const visible = getVisibleNpcs(worldId, isAuthed, visited, track);
  if (visible.length === 0) return false;
  return visible.every(n => visited.includes(n.id));
}
