import { SidebarItemContentProps } from './types';

const SidebarItemContent: React.FC<SidebarItemContentProps> = ({ children, link, ...rest }) => {
  return (
    <a
      href={link}
      className='flex items-center focus:outline-none focus:ring-2 focus:ring-white'
      {...rest}
    >
      {children}
    </a>
  );
};

export default SidebarItemContent;
