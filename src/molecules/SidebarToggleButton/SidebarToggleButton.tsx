import BaseButton from '../../atoms/BaseButton/BaseButton';
import IconCloseX from '../../atoms/Icons/IconCloseX/IconCloseX';
import IconFilters from '../../atoms/Icons/IconFilters/IconFilters';
import { SidebarToggleButtonProps } from './types';

const SidebarToggleButton: React.FC<SidebarToggleButtonProps> = ({ onClick, open, ...rest }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };
  return (
    <BaseButton
      onClick={handleClick}
      className='h-10 w-10 bg-gray-800 absolute right-0 bottom-1/4 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 rounded focus:ring-gray-800'
      {...rest}
    >
      {open ? <IconCloseX /> : <IconFilters />}
    </BaseButton>
  );
};

export default SidebarToggleButton;
