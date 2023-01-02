import { CardContentProps } from './types';

const CardContent: React.FC<CardContentProps> = ({ children, className, ...rest }) => {
  return (
    <div className={`flex p-4 ${className} `} {...rest}>
      {' '}
      {children}{' '}
    </div>
  );
};

export default CardContent;
