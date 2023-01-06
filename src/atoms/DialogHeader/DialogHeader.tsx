import { DialogHeaderProps } from './types';

const DialogHeader: React.FC<DialogHeaderProps> = ({ children, className, ...rest }) => {
  return (
    <div className={`flex justify-between items-center ${className} `} {...rest}>
      {children}
    </div>
  );
};

export default DialogHeader;
