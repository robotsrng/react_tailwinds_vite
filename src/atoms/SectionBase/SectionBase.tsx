import { SectionBaseProps } from './types';

const SectionBase: React.FC<SectionBaseProps> = ({ children, className, ...rest }) => {
  return (
    <div className={`p-4 shadow bg-white rounded max-w-xl w-full ${className}`} {...rest}>
      {children}{' '}
    </div>
  );
};

export default SectionBase;
