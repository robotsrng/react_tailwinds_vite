import { forwardRef } from 'react';
import { TextFieldProps } from './types';

const TextField: React.FC<TextFieldProps> = forwardRef(({ className, ...rest }, ref) => {
  return <input className={` ${className} `} {...rest}  ref={ref}  />;
});

export default TextField;
