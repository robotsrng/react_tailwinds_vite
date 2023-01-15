import React from 'react';
import InputLabel from '@atoms/InputLabel/InputLabel';
import { fieldMapping } from './helpers';
import { InputProps } from './types';

const Input: React.FC<InputProps> = React.forwardRef(
  ({ config: { label, type }, className, inputProps, errors, ...rest }, ref) => {
    const Comp = fieldMapping[type];

    if (!Comp) return null;
    return (
      <div className={`flex flex-col  ${className}`} {...rest}>
        {label && <InputLabel htmlFor={label}>{label}</InputLabel>}
        <Comp {...inputProps} />
        {errors && <div className='text-red-500 text-xs mt-2'>{errors?.message}</div>}
      </div>
    );
  }
);

export default Input;
