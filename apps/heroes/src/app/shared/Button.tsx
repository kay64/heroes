import { disconnect } from 'cluster';

import React from 'react';

import clsx from 'clsx';
import { RiLoader4Line } from 'react-icons/all';

import classes from './Button.module.scss';

export type ButtonProps = {
  label: string;
  onClick: () => void;
} & Partial<{
  loading: boolean;
  disabled: boolean;
}>;

const Button: React.FC<ButtonProps> = (props) => {
  const { label, onClick, loading, disabled } = props;

  const compiledClassName = clsx(classes.base, disabled && classes.disabled);

  return (
    <button
      type="button"
      className={compiledClassName}
      onClick={onClick}
      disabled={disabled}
    >
      {loading ? <RiLoader4Line className={classes.loader} /> : label}
    </button>
  );
};

export default Button;
