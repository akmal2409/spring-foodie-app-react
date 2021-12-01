import { RefObject, useEffect } from 'react';

export const useClickOutside = (ref: RefObject<any>, fn: Function) => {
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (ref?.current && !ref.current.contains(event.target)) {
        fn();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
}