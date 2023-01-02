import { ContainerProps } from "./types";

const Container: React.FC<ContainerProps> = ({ children, className, ...rest }) => {
  return <div className="container" {...rest}> {children} </div>;
};

export default Container;
