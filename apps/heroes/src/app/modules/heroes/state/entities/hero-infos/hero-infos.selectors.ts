import { HeroInfo } from '@heroes/api-interfaces';
import { createSelector, Dictionary } from '@reduxjs/toolkit';

import { HeroesRootState } from '../../heroes-module.types';

export const getAllHeroInfosIds = (state: HeroesRootState): number[] =>
  state.heroes.entities.heroInfos.idx.all;

export const getHeroInfosDictionary = (
  state: HeroesRootState,
): Dictionary<HeroInfo> => state.heroes.entities.heroInfos.dict;

export const getAllHeroInfos = createSelector(
  [getAllHeroInfosIds, getHeroInfosDictionary],
  (ids, dict): HeroInfo[] =>
    ids.map((id) => dict[id]).filter((heroInfo) => !!heroInfo) as HeroInfo[],
);
