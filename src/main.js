import { boot } from './game/game.js';
import { initEntryScreen } from './auth/authScreen.js';

document.addEventListener('DOMContentLoaded', async () => {
  initEntryScreen();
  await boot();
});
