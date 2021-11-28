import React from 'react';

import { Outlet } from 'react-router-dom';

import { Layout } from '../components';
import AppHeader from './AppHeader';

const AppLayout: React.FC = () => {
  return <Layout header={<AppHeader />} content={<Outlet />} />;
};

export default AppLayout;
