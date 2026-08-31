import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
);

let currentUser = null;

supabase.auth.onAuthStateChange((_event, session) => {
  currentUser = session?.user ?? null;
});

// Synchronous — safe to call from Phaser's synchronous scene callbacks
// (e.g. gCreate()). Reflects the last known auth state, updated via
// onAuthStateChange above.
export function isAuthenticated() {
  return !!currentUser;
}

export function getCurrentUser() {
  return currentUser;
}

// Resolves once the initial session (if any) has been read from storage.
// Call once at boot before relying on isAuthenticated()/getCurrentUser().
export async function getInitialUser() {
  const { data: { session } } = await supabase.auth.getSession();
  currentUser = session?.user ?? null;
  return currentUser;
}
