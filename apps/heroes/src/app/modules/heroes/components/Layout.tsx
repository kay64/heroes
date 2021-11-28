import React, { ReactElement } from 'react';

import { Spacer } from '../../../shared';
import classes from './Layout.module.scss';

export type LayoutProps = {
  title: string;
  counter: number | ReactElement;
  actions: ReactElement;
  list: ReactElement;
  content: ReactElement;
};

const Layout: React.FC<LayoutProps> = (props) => {
  const { title, counter, actions, list, content } = props;

  return (
    <div className={classes.root}>
      <section className={classes.master}>
        <header>
          <h3 className={classes.title}>
            {title}
            <Spacer />
            <span className={classes.counter}>{counter}</span>
          </h3>
          <div className={classes.actions}>{actions}</div>
        </header>
        <div>{list}</div>
      </section>
      <main className={classes.details}>{content}</main>
    </div>
  );
};

export default Layout;
