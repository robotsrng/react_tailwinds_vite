import { SectionContentProps } from "./types";

const SectionContent: React.FC<SectionContentProps> = ({ children, ...rest }) => {
  return <div className="min-h-fit " {...rest}> {children} </div>;
};

export default SectionContent;
