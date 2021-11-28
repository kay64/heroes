import React, { ChangeEventHandler } from 'react';

import classes from './TextField.module.scss';

export type TextFieldProps = Partial<{
  type: 'text' | 'password';
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}>;

const TextField: React.FC<TextFieldProps> = (props) => {
  const { type, placeholder, value, onChange } = props;

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) =>
    onChange?.call(null, event.currentTarget.value);

  return (
    <input
      className={classes.base}
      placeholder={placeholder}
      type={type || 'text'}
      value={value || ''}
      onChange={handleChange}
    />
  );
};

export default TextField;
