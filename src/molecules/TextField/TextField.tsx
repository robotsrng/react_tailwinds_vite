import InputBase from '@atoms/InputBase/InputBase';
import { TextFieldProps } from './types';
import { IconButton } from '@molecules';
import classNames from 'classnames';
import React from 'react';

const TextField: React.FC<TextFieldProps> = React.forwardRef(
  ({ children, className, startIcon, endIcon, startIconOnClick, endIconOnClick, ...rest }, ref) => {
    const classes = classNames(className, { 'pl-10': startIcon, 'pr-10': endIcon });
    return (
      <div className={`relative`}>
        {startIcon && (
          <span className='absolute inset-y-0 left-0 flex items-center '>
            <IconButton variant='text' name={startIcon} onClick={startIconOnClick} />
          </span>
        )}
        <InputBase ref={ref} {...rest} className={classes} />
        {endIcon && (
          <span className='absolute inset-y-0 right-0 flex items-center '>
            <IconButton variant='text' name={endIcon} onClick={endIconOnClick} />
          </span>
        )}
      </div>
    );
  }
);
export default TextField;
