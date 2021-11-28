import React from 'react';

import classes from './Button.module.scss';

export type ButtonProps = {
  label: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = (props) => {
  const { label, onClick } = props;

  return (
    <button type="button" className={classes.base} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
