import classNames from 'classnames';
import { BaseButtonProps } from './types';

const BaseButton: React.FC<BaseButtonProps> = ({ children, onClick, className, ...rest }) => {

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };
  
  const classes = classNames('btn', className);

  return (
    <button
      onClick={handleButtonClick}
      className={classes}
      {...rest}
    >
      {children}
    </button>
  );
};

export default BaseButton;
