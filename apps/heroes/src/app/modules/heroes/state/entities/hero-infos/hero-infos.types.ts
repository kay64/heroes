import { HeroInfo } from '@heroes/api-interfaces';
import { Dictionary } from '@reduxjs/toolkit';

export type HeroInfosState = {
  dict: Dictionary<HeroInfo>;
  idx: {
    all: number[];
  };
};
