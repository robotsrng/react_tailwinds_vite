export interface DialogBaseProps {
  isOpen: boolean;
  handleClose: (isOpen: boolean) => void;
  children?: React.ReactNode;
  className?: string;
}
