export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  className?: string;
  ref?: React.Ref<HTMLInputElement>;
}
