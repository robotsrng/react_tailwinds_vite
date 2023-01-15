import React from 'react';
import classNames from 'classnames';
import { BaseButtonProps } from './types';

const BaseButton: React.FC<BaseButtonProps> = React.forwardRef<HTMLButtonElement, BaseButtonProps>(
  ({ children, onClick, className, ...rest }, ref) => {
    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(e);
    };

    const classes = classNames('btn', className);

    return (
      <button ref={ref} onClick={handleButtonClick} className={classes} {...rest}>
        {children}
      </button>
    );
  }
);

export default BaseButton;
