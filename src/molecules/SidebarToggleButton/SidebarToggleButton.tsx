import { Icon } from '@atoms';
import BaseButton from '../../atoms/BaseButton/BaseButton';
import { SidebarToggleButtonProps } from './types';

const SidebarToggleButton: React.FC<SidebarToggleButtonProps> = ({ onClick, open, ...rest }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };
  return (
    <BaseButton
      onClick={handleClick}
      className={`h-10 w-10 bg-gray-100 absolute right-0 bottom-1/4 -mr-10 flex items-center shadow-none justify-center cursor-pointer focus:outline-none ${open && "rounded-bl-none rounded-tl-none"}`}
      {...rest}
    >
      {open ? <Icon name="closeX" /> : <Icon name="filters" />}
    </BaseButton>
  );
};

export default SidebarToggleButton;
