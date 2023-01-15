import React from 'react';
import { ImageInputProps } from './types';

const ImageInput: React.FC<ImageInputProps> = React.forwardRef(({ className, value, ...rest }, ref) => {
  return (
    <input
      ref={ref}
      className='block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
      type='file'
      {...rest}
    />
  );
});

export default ImageInput;
