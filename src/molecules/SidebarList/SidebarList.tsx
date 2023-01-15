import SidebarItem from '../SidebarItem/SidebarItem';
import { SidebarListProps } from './types';

const SidebarList: React.FC<SidebarListProps> = ({ config, ...rest }) => {
  if (!config) return null;
  return (
    <ul className='mt-12' {...rest}>
      {config.map((item) => !item.hidden && <SidebarItem key={item.label} {...item} />)}
    </ul>
  );
};

export default SidebarList;
