import { [FTName]Props } from "./types";

const [FTName]: React.FC<[FTName]Props> = ({ children, className, ...rest }) => {
  return <div className={` ${className} `} {...rest}> {children} </div>;
};

export default [FTName];
