import { DialogDescriptionProps } from './types';
import { Dialog } from '@headlessui/react';

const DialogDescription: React.FC<DialogDescriptionProps> = ({ children, className, ...rest }) => {
  return (
    <div className={`my-4 ${className} `} {...rest}>
      {children}
    </div>
  );
};

export default DialogDescription;
