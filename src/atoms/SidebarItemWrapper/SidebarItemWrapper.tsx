import { SidebarItemProps } from './types';

const SidebarItemWrapper: React.FC<SidebarItemProps> = ({ children, ...rest }) => {
  return (
    <li
      className='flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6'
      {...rest}
    >
      {children}
    </li>
  );
};

export default SidebarItemWrapper;
