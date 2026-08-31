import { supabase } from './supabaseClient.js';
import { show, renderAssess, renderMap, startFreshAuthenticated, ST } from '../game/game.js';
import { loadProgress } from './persistence.js';

let mode = 'login'; // 'login' | 'signup'

function setMsg(text, isError = false) {
  const el = document.getElementById('entryAuthMsg');
  if (!el) return;
  el.textContent = text;
  el.style.color = isError ? 'var(--danger)' : 'var(--muted)';
}

async function afterAuthSuccess() {
  const saved = await loadProgress();
  // Una riga salvata con char:null (mai iniziata, o azzerata da un reset —
  // vedi performFullReset() in game.js) non è una partita da riprendere:
  // senza personaggio la HUD va in errore appena si entra in un mondo.
  if (saved && saved.char) {
    ST.gs = saved.gs;
    ST.worldHistory = saved.worldHistory;
    // ??0/??null: righe salvate prima di officialLevel/RAL (vedi §9) non li hanno.
    ST.world = { officialLevel: 0, officialRAL: null, ...saved.world };
    ST.worldsProgress = saved.worldsProgress || {};
    ST.char = saved.char;
    ST.recalibrated = saved.recalibrated ?? saved.graduated ?? false;
    show('map'); renderMap();
  } else {
    // Autenticata per la prima volta (o dopo un reset): niente quiz
    // iniziale — il personaggio si costruisce direttamente in gioco
    // (vedi startFreshAuthenticated()).
    startFreshAuthenticated();
  }
}

export function initEntryScreen() {
  const btnShowLogin = document.getElementById('btnShowLogin');
  const btnRegister = document.getElementById('btnRegister');
  const btnGuest = document.getElementById('btnGuest');
  const panel = document.getElementById('entryAuthPanel');
  const btnModeLogin = document.getElementById('btnModeLogin');
  const btnModeSignup = document.getElementById('btnModeSignup');
  const btnAuthSubmit = document.getElementById('btnAuthSubmit');
  const guestOverlay = document.getElementById('guestWarnOverlay');
  const btnGuestCancel = document.getElementById('btnGuestCancel');
  const btnGuestConfirm = document.getElementById('btnGuestConfirm');

  function setMode(newMode) {
    mode = newMode;
    const isSignup = mode === 'signup';
    btnModeSignup.style.background = isSignup ? 'var(--accent)' : 'var(--surface2)';
    btnModeLogin.style.background = isSignup ? 'var(--surface2)' : 'var(--accent)';
    setMsg('');
  }

  btnShowLogin.addEventListener('click', () => {
    setMode('login');
    panel.style.display = 'flex';
  });
  btnRegister.addEventListener('click', () => {
    setMode('signup');
    panel.style.display = 'flex';
  });

  btnModeLogin.addEventListener('click', () => setMode('login'));
  btnModeSignup.addEventListener('click', () => setMode('signup'));

  btnAuthSubmit.addEventListener('click', async () => {
    const email = document.getElementById('entryEmail').value.trim();
    const password = document.getElementById('entryPassword').value;
    if (!email || !password) { setMsg('Inserisci email e password.', true); return; }
    setMsg('Attendere...');
    const { data, error } = mode === 'signup'
      ? await supabase.auth.signUp({ email, password })
      : await supabase.auth.signInWithPassword({ email, password });
    if (error) { setMsg(error.message, true); return; }
    // signUp non restituisce errore se l'account è creato ma in attesa di
    // conferma email — in quel caso non c'è ancora una sessione: non bisogna
    // procedere come se l'utente fosse autenticato.
    if (!data.session) {
      setMsg('Account creato. Controlla la tua email per confermarlo, poi accedi.');
      return;
    }
    setMsg('');
    await afterAuthSuccess();
  });

  btnGuest.addEventListener('click', () => {
    guestOverlay.style.display = 'flex';
  });
  btnGuestCancel.addEventListener('click', () => {
    guestOverlay.style.display = 'none';
  });
  btnGuestConfirm.addEventListener('click', () => {
    guestOverlay.style.display = 'none';
    // In caso si arrivi qui dopo una calibrazione account interrotta a metà
    // (vedi startFreshAuthenticated()): il quiz guest riparte sempre da zero.
    document.body.classList.remove('calibration-mode');
    ST.step = 0; ST.ans = { hard: {}, soft: {}, pref: {} };
    show('assess'); renderAssess();
  });
}
