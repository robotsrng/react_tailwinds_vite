import Icon from '../../atoms/Icon/Icon';
import SidebarItemContent from '../../atoms/SidebarItemContent/SidebarItemContent';
import SidebarItemLabel from '../../atoms/SidebarItemLabel/SidebarItemLabel';
import SidebarItemNotification from '../../atoms/SidebarItemNotification/SidebarItemNotification';
import SidebarItemWrapper from '../../atoms/SidebarItemWrapper/SidebarItemWrapper';
import { SidebarItemProps } from './types';

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, link, notifications, ...rest }) => {
  return (
    <SidebarItemWrapper {...rest}>
      <SidebarItemContent link={link}>
        <Icon name={icon} />
        <SidebarItemLabel label={label} />
      </SidebarItemContent>
      {notifications && <SidebarItemNotification>{notifications}</SidebarItemNotification>}
    </SidebarItemWrapper>
  );
};

export default SidebarItem;
