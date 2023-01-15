export interface SidebarItemProps {
  children?: React.ReactNode;
  link?: string;
  icon?: string;
  label: string;
  onClick?: () => void;
  notifications?: number;
  hidden?: boolean;
}
