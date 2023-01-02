import { BoxProps } from './types';

const Box: React.FC<BoxProps> = ({ className, children, ...rest }) => {
  return (
    <div className={`flex flex-1 flex-col ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default Box;