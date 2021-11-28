import React from 'react';

import clsx from 'clsx';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

import classes from './NavigationLink.module.scss';

export type NavigationLinkProps = {
  to: string;
};

const NavigationLink: React.FC<NavigationLinkProps> = (props) => {
  const { to, children } = props;
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: false });

  const compiledClassName = clsx(classes.base, match && classes.active);

  return (
    <Link to={to} className={compiledClassName}>
      {children}
    </Link>
  );
};

export default NavigationLink;
