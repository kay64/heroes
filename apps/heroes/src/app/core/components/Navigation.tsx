import React, { ReactElement } from 'react';

import { Link, Spacer } from '../../shared';
import classes from './Navigation.module.scss';
import NavigationLink from './NavigationLink';

export type NavigationProps = {
  actions: ReactElement;
};

const Navigation: React.FC<NavigationProps> = (props) => {
  const { actions } = props;

  return (
    <div className={classes.root}>
      <nav className={classes.nav}>
        <Link to="/" className={classes.brand}>
          HEROES
        </Link>
        <NavigationLink to="/heroes">Heroes</NavigationLink>
        <NavigationLink to="/villains">Villains</NavigationLink>
        <Spacer />
        {actions}
      </nav>
    </div>
  );
};

export default Navigation;
