import { combineReducers } from '@reduxjs/toolkit';

import entities from './entities/entities.reducer';
import { HeroesModuleState } from './heroes-module.types';

const heroesModuleReducer = combineReducers<HeroesModuleState>({
  entities,
});

export default heroesModuleReducer;
