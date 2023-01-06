import useClickAwayListener from '@hooks/useClickAwayListener';
import { ClickAwayWrapperProps } from './types';
import React, { useRef } from 'react';

const ClickAwayWrapper: React.FC<ClickAwayWrapperProps> = ({ children, onClickAway }) => {
  const wrapperRef = useRef(null);
  useClickAwayListener(wrapperRef, onClickAway);
  return <React.Fragment>{React.cloneElement(children, { ref: wrapperRef })}</React.Fragment>;
};

export default ClickAwayWrapper;
