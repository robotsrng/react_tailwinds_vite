import { CardBaseProps } from './types';

const CardBase: React.FC<CardBaseProps> = ({ children, className, ...rest }) => {
  return (
    <div
      className={` block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ${className} `}
      {...rest}
    >
      {children}
    </div>
  );
};

export default CardBase;
