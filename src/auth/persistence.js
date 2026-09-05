import { supabase, getCurrentUser } from './supabaseClient.js';

const DEFAULT_STATE = {
  // ENERGY parte sempre al massimo (50, vedi STAT_MAX.ENERGY in game.js): è
  // una risorsa che si consuma con le interazioni, non un tratto residuo.
  gs: { SKILL: 0, VOICE: 0, CLARITY: 0, NETWORK: 0, ENERGY: 50, RADAR: 0, INSIDER: 0 },
  worldHistory: [],
  world: { id: null, visited: [], choices: [], patterns: [], track: null, officialLevel: 0, officialRAL: null },
  worldsProgress: {},
  char: null,
  recalibrated: false,
};

// Fire-and-forget: never blocks gameplay on the network round-trip.
// No-op for guests (no user session).
export async function saveProgress(ST) {
  const user = getCurrentUser();
  if (!user) return;
  const { error } = await supabase.from('progress').upsert({
    user_id: user.id,
    state: {
      gs: ST.gs,
      worldHistory: ST.worldHistory,
      world: ST.world,
      worldsProgress: ST.worldsProgress,
      char: ST.char,
      recalibrated: ST.recalibrated,
    },
  });
  if (error) console.warn('saveProgress failed', error);
}

// Returns the saved state object, or null if the user has no saved row
// (first-ever login) or is a guest.
export async function loadProgress() {
  const user = getCurrentUser();
  if (!user) return null;
  const { data, error } = await supabase
    .from('progress')
    .select('state')
    .eq('user_id', user.id)
    .maybeSingle();
  if (error) {
    console.warn('loadProgress failed', error);
    return null;
  }
  return data?.state ?? null;
}

// Resets the authenticated user's saved progress back to defaults
// (used on "restart" so a later resume doesn't restore stale data).
export async function resetProgress() {
  const user = getCurrentUser();
  if (!user) return;
  const { error } = await supabase
    .from('progress')
    .upsert({ user_id: user.id, state: DEFAULT_STATE });
  if (error) console.warn('resetProgress failed', error);
}
