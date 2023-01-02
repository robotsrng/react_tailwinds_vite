import { SectionTitleProps } from "./types";

const SectionTitle: React.FC<SectionTitleProps> = ({ children, ...rest }) => {
  return <div className="text-base font-semibold " {...rest}> {children} </div>;
};

export default SectionTitle;
