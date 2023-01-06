export type ClickAwayWrapperRefs = {
  wrapperRef: React.RefObject<HTMLDivElement>;
}

export interface ClickAwayWrapperProps {
  children: React.ReactElement;
  className?: string;
  onClickAway: (e: Event | MouseEvent ) => void;
}

