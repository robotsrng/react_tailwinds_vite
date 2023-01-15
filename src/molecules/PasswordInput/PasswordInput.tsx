import React from 'react';
import { TextField } from '@molecules';
import { PasswordInputProps } from './types';

const PasswordInput: React.FC<PasswordInputProps> = ({ children, className, ...rest }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  console.log('🚀 | file: PasswordInput.tsx:10 | handleShowPassword | showPassword', showPassword);

  return (
    <TextField
      type={showPassword ? 'text' : 'password'}
      endIcon={showPassword ? 'puzzle' : 'closeX'}
      endIconOnClick={handleShowPassword}
      className={` ${className} `}
      {...rest}
    />
  );
};

export default PasswordInput;
