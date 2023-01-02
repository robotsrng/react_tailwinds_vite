import { CardBase, CardContent } from '@atoms';
import { CardProps } from './types';

const Card: React.FC<CardProps> = ({ children, className, ...rest }) => {
  return (
    <CardBase className={className} {...rest}>
      <CardContent>{children}</CardContent>{' '}
    </CardBase>
  );
};

export default Card;
