import { PageLayoutProps } from "./types";

const PageLayout: React.FC<PageLayoutProps> = ({ children, ...rest }) => {
  return (
    <div
      className='flex flex-no-wrap'
      {...rest}
    >
      {children}
    </div>
  );
};

export default PageLayout;
