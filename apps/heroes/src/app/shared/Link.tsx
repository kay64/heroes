import React from 'react';

import clsx from 'clsx';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';

import classes from './Link.module.scss';

export type LinkProps = RouterLinkProps &
  Partial<{
    className: string;
    underlined: boolean;
    size: 'small' | 'medium';
  }>;

const sizes: Record<NonNullable<LinkProps['size']>, string> = {
  small: classes.sizeSmall,
  medium: classes.sizeMedium,
};

const Link: React.FC<LinkProps> = (props) => {
  const { className, underlined, size, ...rest } = props;

  const compiledClassName = clsx(
    className,
    classes.base,
    underlined && classes.underlined,
    sizes[size || 'medium'],
  );

  return <RouterLink {...rest} className={compiledClassName} />;
};

export default Link;
