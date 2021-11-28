import React from 'react';

import { Link } from 'react-router-dom';

import { Spacer } from '../../shared';
import classes from './Navigation.module.scss';
import NavigationLink from './NavigationLink';

const Navigation: React.FC = () => {
  return (
    <div className={classes.root}>
      <nav className={classes.nav}>
        <Link to="/" className={classes.brand}>
          HEROES
        </Link>
        <NavigationLink to="/heroes">Heroes</NavigationLink>
        <NavigationLink to="/villains">Villains</NavigationLink>
        <Spacer />
        <Link to="/auth/login" className={classes.navItem}>
          Log In
        </Link>
      </nav>
    </div>
  );
};

export default Navigation;
