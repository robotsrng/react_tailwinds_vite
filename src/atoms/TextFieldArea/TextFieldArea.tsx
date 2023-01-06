import { forwardRef } from 'react';
import { TextFieldAreaProps } from './types';

const TextFieldArea: React.FC<TextFieldAreaProps> = forwardRef(({ children, className, ...rest }, ref) => {
  return <input type='textarea' className={` ${className} `} {...rest} />;
});

export default TextFieldArea;
