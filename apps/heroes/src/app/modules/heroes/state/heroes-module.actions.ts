import { createAction } from '@reduxjs/toolkit';

export const heroesModuleLoaded = createAction<void, 'heroes/MODULE_LOADED'>(
  'heroes/MODULE_LOADED',
);
