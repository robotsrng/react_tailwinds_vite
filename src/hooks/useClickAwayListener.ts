import React from 'react';
import { useEffect } from 'react';
import { assertIsNode } from 'src/utils/types/assertions';


function useClickAwayListener(ref: React.RefObject<HTMLDivElement>, callback: (event: Event | MouseEvent | TouchEvent) => void) {
  useEffect(() => {
    
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      assertIsNode(event.target);
      if (ref.current && !ref.current.contains(event.target)) {
        callback(event);
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
}
export default useClickAwayListener;
