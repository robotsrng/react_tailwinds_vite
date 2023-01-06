import { forwardRef } from 'react';
import { DialogBaseProps } from './types';

const DialogBase: React.FC<DialogBaseProps> = forwardRef(({ children, isOpen, handleClose, className, ...rest }, ref) => {
  // TODO implement a global popup store to manage this state
  return (
    <div
      ref={ref}
      className={`relative max-w-lg top-20 mx-auto border w-full shadow-lg rounded-md bg-white ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
});

export default DialogBase;
