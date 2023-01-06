import { DialogTitleProps } from './types';

const DialogTitle: React.FC<DialogTitleProps> = ({ children, className, ...rest }) => {
  return (
    <div className={`mb-1 text-lg font-semibold ${className} `} {...rest}>
      {children}
    </div>
  );
};

export default DialogTitle;
