import { PageContainerProps } from "./types";

const PageContainer: React.FC<PageContainerProps> = ({ children, ...rest }) => {
  return <div className="container" {...rest}> {children} </div>;
};

export default PageContainer;
