import React, { ReactElement } from 'react';

import { Link } from '../../../shared';
import classes from './AuthLayout.module.scss';

export type LayoutProps = {
  title: string;
  content: ReactElement;
  links: ReactElement;
};

const AuthLayout: React.FC<LayoutProps> = (props) => {
  const { title, content, links } = props;
  return (
    <div className={classes.root}>
      <section className={classes.container}>
        <header>
          <h3>{title}</h3>
        </header>
        <main>{content}</main>
        <footer>{links}</footer>
      </section>
      <div className={classes.pusher} />
    </div>
  );
};

export default AuthLayout;
