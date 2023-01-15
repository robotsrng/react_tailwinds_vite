export interface InputBaseProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  className?: string;
  ref?: React.Ref<HTMLInputElement>;
}
