import { ISagaModule } from 'redux-dynamic-modules-saga';

import heroInfosSaga from './entities/hero-infos/hero-infos.sagas';
import { heroesModuleLoaded } from './heroes-module.actions';
import heroes from './heroes-module.reducer';
import { HeroesRootState } from './heroes-module.types';

const getHeroesModule = (): ISagaModule<HeroesRootState> => ({
  id: 'heroes',
  reducerMap: { heroes },
  initialActions: [heroesModuleLoaded()],
  sagas: [heroInfosSaga],
});

export default getHeroesModule;
