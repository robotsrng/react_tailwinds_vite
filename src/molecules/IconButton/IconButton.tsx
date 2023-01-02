import Button from '@molecules/Button/Button';
import { IconButtonProps } from './types';
import { Icon } from '@atoms';

const IconButton: React.FC<IconButtonProps> = ({ name, className, onClick, iconProps, ...rest }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClick?.(e);
  };

  return (
    <Button className={className} onClick={handleClick} {...rest}>
      <Icon name={name} {...iconProps} />
    </Button>
  );
};

export default IconButton;
