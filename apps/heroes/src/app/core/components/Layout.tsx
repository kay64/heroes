import React from 'react';

import { Outlet } from 'react-router-dom';

import classes from './Layout.module.scss';
import Navigation from './Navigation';

const Layout: React.FC = () => {
  return (
    <div className={classes.root}>
      <Navigation />
      <div className={classes.body}>
        <div className={classes.container}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
