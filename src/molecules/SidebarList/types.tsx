import { SidebarItemProps } from "../SidebarItem/types";

export interface SidebarListProps {
  children?: React.ReactNode;
    /**
   * Data for the DataTable component
   * If contain `columns` should render DataTable
   */
  config: SidebarItemProps[];
}
