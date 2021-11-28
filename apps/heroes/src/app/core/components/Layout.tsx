import React, { ReactElement } from 'react';

import classes from './Layout.module.scss';

export type LayoutProps = {
  header: ReactElement;
  content: ReactElement;
};

const Layout: React.FC<LayoutProps> = (props) => {
  const { header, content } = props;

  return (
    <div className={classes.root}>
      {header}
      <div className={classes.body}>
        <div className={classes.container}>{content}</div>
      </div>
    </div>
  );
};

export default Layout;
