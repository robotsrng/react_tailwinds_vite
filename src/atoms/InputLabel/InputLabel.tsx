import { InputLabelProps } from './types';

const InputLabel: React.FC<InputLabelProps> = ({htmlFor , className,children , ...rest }) => {
  return (
    <label className={` text-base font-semibold  mb-1 ${className} `} htmlFor={htmlFor} {...rest}>
      {children}
    </label>
  );
};

export default InputLabel;
