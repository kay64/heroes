import { HeroesEntitiesState } from './entities/entities.types';

export type HeroesModuleState = {
  entities: HeroesEntitiesState;
};

export type HeroesRootState = {
  heroes: HeroesModuleState;
};
