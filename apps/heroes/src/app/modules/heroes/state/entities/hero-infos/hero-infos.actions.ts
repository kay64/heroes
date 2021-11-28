import { HeroInfo } from '@heroes/api-interfaces';
import { createAction } from '@reduxjs/toolkit';

export const heroInfosLoaded = createAction<
  HeroInfo[],
  'heroes/entities/hero-infos/LOADED'
>('heroes/entities/hero-infos/LOADED');
