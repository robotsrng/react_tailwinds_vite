export interface TextFieldProps {
  children?: React.ReactNode;
  className?: string;
  type: 'text' | 'textarea' | 'password';
  startIcon?: string;
  endIcon?: string;
  startIconOnClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  endIconOnClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
