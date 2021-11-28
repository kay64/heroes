import React from 'react';

import { DynamicModuleLoader } from 'redux-dynamic-modules';

import { HeroesPage } from './pages';
import getHeroesModule from './state/heroes-module';

const Heroes: React.FC = () => {
  return (
    <DynamicModuleLoader modules={[getHeroesModule()]}>
      <HeroesPage />
    </DynamicModuleLoader>
  );
};

export default Heroes;
