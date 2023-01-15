import React from 'react';
import Button from '@molecules/Button/Button';
import { IconButtonProps } from './types';
import { Icon } from '@atoms';

const IconButton: React.FC<IconButtonProps> = ({ name, className, onClick, iconProps, ...rest }) => {
  console.log("🚀 | file: IconButton.tsx:7 | rest", rest);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      console.log("🚀 | file: IconButton.tsx:10 | handleClick | e", e);
    onClick?.(e);
  };

  return (
    <Button className={className} onClick={handleClick} {...rest}>
      <Icon name={name} {...iconProps} />
    </Button>
  );
};

export default IconButton;
