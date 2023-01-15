import { forwardRef } from 'react';
import { InputBaseProps } from './types';

const InputBase: React.FC<InputBaseProps> = forwardRef(({ className, ...rest }, ref) => {
  return <input className={` ${className} `} {...rest}  ref={ref}  />;
});

export default InputBase;
