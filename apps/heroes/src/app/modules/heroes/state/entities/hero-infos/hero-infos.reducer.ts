import { createReducer } from '@reduxjs/toolkit';

import { heroInfosLoaded } from './hero-infos.actions';
import { HeroInfosState } from './hero-infos.types';

const heroInfosReducer = createReducer<HeroInfosState>(
  {
    dict: {},
    idx: { all: [] },
  },
  (builder) =>
    builder.addCase(heroInfosLoaded, (state, { payload }) => {
      const dict = {
        ...state.dict,
      };
      const idxAll = [...state.idx.all];

      payload.forEach((heroInfo) => {
        dict[heroInfo.id] = heroInfo;
        idxAll.push(heroInfo.id);
      });

      return {
        dict,
        idx: { all: idxAll },
      };
    }),
);

export default heroInfosReducer;
