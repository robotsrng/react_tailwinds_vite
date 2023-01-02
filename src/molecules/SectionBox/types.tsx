import { ButtonProps } from "@molecules/Button/types";

export interface SectionBoxProps {
  title: string;
  actions?: ButtonProps[];
  footerActions?: ButtonProps[];
  children?: React.ReactNode;
  className?: string;
}
