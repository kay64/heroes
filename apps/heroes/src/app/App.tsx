import React from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Module, NotFound, AppLayout } from './core';
import { Auth } from './modules';
import store from './state/store';

const Heroes = React.lazy(() => import('./modules/heroes/Heroes'));

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/auth/*" element={<Module element={Auth} />} />
          <Route path="/" element={<AppLayout />}>
            <Route path="/heroes/*" element={<Module element={Heroes} />} />
            <Route path="*" element={<NotFound />} />
            <Route path="" element={<Navigate replace to="/heroes" />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
