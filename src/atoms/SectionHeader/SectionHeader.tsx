import { SectionHeaderProps } from './types';

const SectionHeader: React.FC<SectionHeaderProps> = ({ children, ...rest }) => {
  return (
    <div className='flex flex-1 w-full mb-2 items-center' {...rest}>
      {children}
    </div>
  );
};

export default SectionHeader;
