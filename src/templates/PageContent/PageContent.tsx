import { PageContentProps } from './types';

const PageContent: React.FC<PageContentProps> = ({ children, ...rest }) => {
  return (
    <div
      className='w-full flex items-center  flex-col p-4'
      {...rest}
    >
      {children}
    </div>
  );
};

export default PageContent;
