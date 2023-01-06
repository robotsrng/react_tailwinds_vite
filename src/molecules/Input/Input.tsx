import InputLabel from '@atoms/InputLabel/InputLabel';
import { fieldMapping } from './helpers';
import { InputProps } from './types';
import React from 'react';

const Input: React.FC<InputProps> = ({ config: { label, type }, className, inputProps, errors, ...rest }) => {
  const Comp = fieldMapping[type];

  return (
    <div className={`flex flex-col  ${className}`} {...rest}>
      {label && <InputLabel htmlFor={label}>{label}</InputLabel>}
      <Comp {...inputProps} />
      {errors && <div className='text-red-500 text-xs mt-2'>{errors?.message}</div>}
    </div>
  );
};

export default Input;
