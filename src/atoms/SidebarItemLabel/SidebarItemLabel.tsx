import { SidebarItemLabelProps } from './types';

const SidebarItemLabel: React.FC<SidebarItemLabelProps> = ({ label, ...rest }) => {
  return (
    <span
      className='text-sm ml-2'
      {...rest}
    >
      {label}
    </span>
  );
};

export default SidebarItemLabel;
