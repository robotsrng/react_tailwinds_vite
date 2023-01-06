import { DialogBaseProps } from '@atoms/DialogBase/types';

export interface DialogProps extends DialogBaseProps {
  children?: React.ReactNode;
  className?: string;
  content?: React.ReactNode;
  description?: string;
  title?: string;
  isOpen: boolean;
  handleClose: () => void;
}
