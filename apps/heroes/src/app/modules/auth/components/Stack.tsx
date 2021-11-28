import React from 'react';

import classes from './Stack.module.scss';

const Stack: React.FC = (props) => {
  const { children } = props;
  return <div className={classes.root}>{children}</div>;
};

export default Stack;
