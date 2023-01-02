import { SidebarItemNotificationProps } from './types';

const SidebarItemNotification: React.FC<SidebarItemNotificationProps> = ({ children, ...rest }) => {
  return (
    <div
      className='py-1 px-3  bg-gray-600 rounded text-gray-300 inline-flex items-center justify-center text-xs'
      {...rest}
    >
      {children}
    </div>
  );
};

export default SidebarItemNotification;
