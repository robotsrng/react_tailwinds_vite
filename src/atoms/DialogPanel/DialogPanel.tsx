import { DialogPanelProps } from './types';

const DialogPanel: React.FC<DialogPanelProps> = ({ children, className, ...rest }) => {
  return (
    <div className={` p-5 w-full h-full ${className} `} {...rest}>
      {children}
    </div>
  );
};

export default DialogPanel;
