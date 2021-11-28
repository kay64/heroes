import { combineReducers } from '@reduxjs/toolkit';

import heroInfos from './hero-infos/hero-infos.reducer';

const entitiesReducer = combineReducers({ heroInfos });

export default entitiesReducer;
