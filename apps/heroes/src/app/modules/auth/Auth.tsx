import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { DynamicModuleLoader } from 'redux-dynamic-modules';

import { LoginPage } from './pages';
import getAuthModule from './state/auth-module';

const Auth: React.FC = () => {
  return (
    <DynamicModuleLoader modules={[getAuthModule()]}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </DynamicModuleLoader>
  );
};

export default Auth;
